const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html"));
});
app.post('/signup', (req, res) => {
  console.log(req.body)
  res.send(`<h1>Your Name:${req.body.username} Password: ${req.body.password}`);
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});