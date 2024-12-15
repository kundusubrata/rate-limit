import express, { Request, Response } from "express";
import { rateLimit } from "express-rate-limit";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rate limiter configuration
const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Limit each IP to 3 OTP requests per windowMs
  message: "Too many requests, please try again after 5 minutes",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 password reset requests per windowMs
  message:
    "Too many password reset attempts, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});

// Store OTPs in a simple in-memory object
const otpStore: Record<string, string> = {};

// Define interfaces for request bodies
interface GenerateOtpRequest {
  email: string;
}

interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
}

// Endpoint to generate and log OTP
app.post(
  "/generate-otp",
  otpLimiter,
  (req: Request<{}, {}, GenerateOtpRequest>, res: Response) => {
    const { email } = req.body;

    // if (!email) {
    //   return res.status(400).json({ message: "Email is required" });
    // }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    otpStore[email] = otp;

    console.log(`OTP for ${email}: ${otp}`);
    res.status(200).json({ message: "OTP generated and logged" });
  }
);

// Endpoint to reset password
app.post(
  "/reset-password",
  passwordResetLimiter,
  (req: Request<{}, {}, ResetPasswordRequest>, res: Response) => {
    const { email, otp, newPassword } = req.body;

    // if (!email || !otp || !newPassword) {
    //   return res
    //     .status(400)
    //     .json({ message: "Email, OTP, and new password are required" });
    // }

    if (otpStore[email] === otp) {
      console.log(`Password for ${email} has been reset to: ${newPassword}`);
      delete otpStore[email];
      res.status(200).json({ message: "Password has been reset successfully" });
    } else {
      res.status(401).json({ message: "Invalid OTP" });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
