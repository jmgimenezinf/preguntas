var express = require('express');
var router  = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;
var URL = require('../../ignorar/config.js').mongoConection;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get('/preguntas', function(req, res) {
    MongoClient.connect(URL, function(err, db) {
    if (err) return
    var collection = db.collection('preguntas')
        collection.find().toArray(function(err, docs) {
        console.log(docs);
        res.send(docs)
        db.close()
        })
    })
});


router.post('/send-pregunta',jsonParser,function (req, res) {
    console.log(req.body);
    MongoClient.connect(URL, function(err, db) {
        if (err) return
        var collection = db.collection('preguntas')
            collection.remove();
            collection.insert(req.body);
        })
    res.send("email vacio");              
}); 

module.exports = router;
