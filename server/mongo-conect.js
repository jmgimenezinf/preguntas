const MongoClient = require('mongodb').MongoClient;
var db;
var URL = require('../ignorar/config.js').mongoConection

MongoClient.connect(URL, function(err, db) {
  if (err) return
  var collection = db.collection('tesinas')
    collection.find().toArray(function(err, docs) {
      console.log(docs[0])
       db.close()
    })
})

module.exports ={MongoClient,URL}
