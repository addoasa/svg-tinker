//--------------------------------------------------
// Server will serve the bundled app for browsers
//--------------------------------------------------
const express = require('express');
const app = express();
const path = require('path');
let PORT = 3000;
// const MongoClient = require('mongodb').MongoClient;
// let db;


//without this webpack will only serve html and nothing else
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/', (req, res, next)=>{
res.sendFile(path.join(__dirname, '../public/index.html'))
})
// app.use('/',async (req,res,next)=>{
//   let found;
//   MongoClient.connect('mongodb://localhost:27017/', (err,client)=>{
//     console.log("Connected with mongo");
//     db = client.db("svgcollection");
//     const collection = db.collection('svgcollection');
   
//     collection.find({},(err, result)=>{
//       console.log("Found all")
//       found = result
//       db.close()
//     })
   
//   });    
//   console.log('hit')

//    res.send("hi")
// })


app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})