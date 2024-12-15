# Attack Server for rate limit

This folder contains a script to test rate limiting by simulating multiple requests to the `/reset-password` endpoint of the backend server.

----------

### Description

The script generates a large number of requests with incremental OTP values and sends them concurrently to simulate an attack. This tests the robustness of the rate-limiting mechanism.

----------

### Local Setup

1.  Clone the Repository
2. Install all dependency
3. Running the server
```
	git clone https://github.com/kundusubrata/rate-limit.git
	cd rate-limit/attack
	pnpm install 
	pnpm run build
	pnpm run dev
```
----------

### Disclaimer

This script is for testing and educational purposes only. Do not use it for malicious activities.
