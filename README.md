
### Rate Limiting Practice Project

This project demonstrates rate-limiting concepts by implementing a backend server with rate-limited endpoints and an attack script to test the rate-limiting mechanism.

----------

### Project Structure

1.  **Backend**
    
    -   A server with two endpoints:
        -   `POST /generate-otp`: Generates an OTP with a rate limit of 3 requests per 5 minutes.
        -   `POST /reset-password`: Resets the password with a rate limit of 5 requests per 15 minutes.
2.  **Attack Server**
    
    -   A script that simulates multiple requests to test the rate-limiting functionality of the backend server.


## How to Explore

Each directory contains its own README file with detailed instructions, setup, and usage. Browse through the respective directories to get started:

-   [Backend Server](/backend/)
-   [Attack Server](/attack/)

----------

### Disclaimer

This project is for educational and testing purposes only. Do not use it for unauthorized or malicious activities.

----------
