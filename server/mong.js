const MongoClient = require('mongodb').MongoClient;

let db;
let gotSVGs;
function addSVGToCollection(SVGArray){
  MongoClient.connect('mongodb://localhost:27017/', (err,client)=>{
    console.log("Connected with mongo");
    db = client.db("svgcollection");
    const collection = db.collection('svgcollection');
   
    collection.insert({SVGArray},(err, result)=>{
      console.log("document added")
      setTimeout(()=>{process.exit()},10000);
    })
    // console.log(collection.find())
  });
}

function getSVGCollection(){
  MongoClient.connect('mongodb://localhost:27017/', (err,client)=>{
    console.log("Connected with mongo");
    db = client.db("svgcollection");
    const collection = db.collection('svgcollection');
   
    collection.find().toArray((err, result)=>{
      if(!err){
        console.log("documents found")
        console.log(result)
        return result
      }

      setTimeout(()=>{process.exit()},10000);
    })
  });
}


module.exports =  {
  getSVGCollection,
  addSVGToCollection
}

