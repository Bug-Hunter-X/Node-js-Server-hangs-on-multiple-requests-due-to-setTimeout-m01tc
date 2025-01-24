const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.send('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//The solution uses promises and async/await to handle the asynchronous operation. The await keyword pauses execution until the promise resolves, ensuring that the response object is not used before it's ready.