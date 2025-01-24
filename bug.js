const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//The problem is that if a request comes in while the server is still processing the previous request (5 second delay), the second request will hang indefinitely because the response object is already used by the first request.  The solution is to use a promise that resolves once the server has responded and use an async/await approach
