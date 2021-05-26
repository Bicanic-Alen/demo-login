var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Lorenzo:casada11@learnandtravel.qzfpb.mongodb.net/LearnAndTravel?retryWrites=true&w=majority'

router.get("/:mail", function (req, res){
    email = req.params.mail;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("LearnAndTravel");
        dbo.collection("Users").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            res.send(results)
            db.close();
        });
    });
});

module.exports = router;
