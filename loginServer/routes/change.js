var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'


router.get("/:email/:oldPsw/:newPsw", function (req, res){
    email = req.params.email;
    oldPsw = req.params.oldPsw;
    newPsw = req.params.newPsw;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("leartravel");
        dbo.collection("utente").find({$and:[{"email":email}, {"password": oldPsw}]}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
           
        if (result.length != 0){ 
            var query = {'email': email};
            var newvalues = {$set: {"password": newPsw}};
            dbo.collection("utente").updateOne(query, newvalues, function(err, res) {
            if (err) throw err;
            r = "password modificata con successo";
            console.log(r)

            db.close();
            });
        };
    });
  });
});
module.exports = router;
