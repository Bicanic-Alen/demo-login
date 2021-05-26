var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Lorenzo:casada11@learnandtravel.qzfpb.mongodb.net/LearnAndTravel?retryWrites=true&w=majority'

router.get("/:email/:nome/:y/:y1/:x/:x1", function (req, res){
    email = req.params.mail;
    nome = req.params.nome;
    y = req.params.y;
    y1 = req.params.y1;
    x = req.params.x;
    x1 = req.params.x1;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("LearnAndTravel");
            var myobj = {"email" : email,"citta": nome, "y" : y, "y1": y1, "x": x, "x1" : x1 };
            dbo.collection("DataHistoryUsers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            this.result = results;
            result = "added one element to history";
            console.log(result);
            });

        db.close();
    });
});

module.exports = router;
