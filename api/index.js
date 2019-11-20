const express = require('express');
const app = express();
const port = 3001;

app.get('/jobs', function (req, res) {
  return res.send('Hello World')
})

app.listen(port, () => console.log(`Listening on port ${port}`))