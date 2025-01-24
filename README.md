# Node.js Server Hang on Multiple Requests

This repository demonstrates a common issue in Node.js servers where improper handling of asynchronous operations can lead to hangs when multiple requests arrive before the first one is complete.

## Problem

The `bug.js` file contains a simple Express.js server that simulates a 5-second delay in responding to requests.  If multiple requests are made during this delay, subsequent requests will hang indefinitely because the response object is already being used.

## Solution

The `bugSolution.js` file provides a corrected version that uses promises and async/await to handle asynchronous operations more effectively.  This prevents the server from hanging under heavy load and ensures that each request is processed correctly.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Make multiple requests to `http://localhost:3000/` within a short period.
5. Observe the server hanging.
6. Run `node bugSolution.js` and repeat steps 4-5 to see the corrected behavior.
