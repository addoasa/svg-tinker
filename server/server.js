const express = require('express');
const app = express();
const path = require('path');
let PORT = 3000;
//without this webpack will only serve html and nothing else
app.use('/', express.static(path.join(__dirname, '../build')));
app.use('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})