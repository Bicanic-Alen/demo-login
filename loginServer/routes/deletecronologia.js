var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Lorenzo:casada11@learnandtravel.qzfpb.mongodb.net/LearnAndTravel?retryWrites=true&w=majority'

router.get("/:mail", function (req, res){
    email = req.params.mail;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("LearnAndTravel");
        var myquery = {"email":email};
            dbo.collection("DataHistoryUsers").deleteMany(myquery, function(err, obj) {
            if (err) throw err;
            res.send("document deleted");

        });
    });
});

module.exports = router;