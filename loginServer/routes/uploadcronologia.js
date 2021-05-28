var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Lorenzo:casada11@learnandtravel.qzfpb.mongodb.net/LearnAndTravel?retryWrites=true&w=majority'

router.get("/:email/:nome/:yMin/:xMin/:yMax/:xMax", function (req, res){
    email = req.params.email;
    nome = req.params.nome;
    yMin = req.params.yMin;
    xMin = req.params.xMin;
    yMax = req.params.yMax;
    xMax = req.params.xMax;

    yMinFloat = parseFloat(yMin);
    xMinFloat = parseFloat(xMin);
    yMaxFloat = parseFloat(yMax);
    xMaxFloat = parseFloat(xMax);
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("LearnAndTravel");
            var myobj = {"email" : email,"citta": nome, "yMin" : yMinFloat, "xMin": xMinFloat, "yMax": yMaxFloat, "xMax" : xMaxFloat };
            dbo.collection("DataHistoryUsers").insertOne(myobj, function(err, results) {
            if (err) throw err;
            res.send(results)
            });

        db.close();
    });
});

module.exports = router;
