var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'

router.put(':nome/:cognome/:mail/:pass', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    nm = req.params.nome;
    c = req.params.cognome;
    e = req.params.mail;
    p = req.params.pass;


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(signinUser,err);
        if (err) throw err;
        var dbo = client.db("leartravel");
        var myobj = {};
        dbo.collection("utente").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
        
}); 

module.exports = router;
