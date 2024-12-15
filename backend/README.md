# Backend server for rate limit
This folder contains the backend server for practicing rate limiting. It includes two endpoints: one for generating OTPs and another for resetting passwords, both protected with rate limiters to restrict excessive requests.

## Endpoints

1.  **POST /generate-otp**
    
    -   Generates and logs a One-Time Password (OTP).
    -   Rate limit: 3 requests per IP every 5 minutes.
2.  **POST /reset-password**
    
    -   Resets the password using an OTP.
    -   Rate limit: 5 requests per IP every 15 minutes.

## Local Setup
-  Installation && Running the Server
	```
	git clone https://github.com/kundusubrata/rate-limit.git
	cd rate-limit/backend
	pnpm install 
	pnpm run build
	pnpm run dev
	```
	This will start the development server at `http://localhost:3000`.