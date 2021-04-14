var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'learnandtravelservice@gmail.com',
    pass: 'xxx123##'
  }
});



const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'
/*
router.put(':nome/:cognome/:mail/:pass', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    nm = req.params.nome;
    c = req.params.cognome;
    e = req.params.mail;
    p = req.params.pass;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err);
        if (err) throw err;
        const collection = client.db("leartravel").collection("utente");
        
        var new_id = collection.find().sort({"id":-1}).limit(1);
        console.log(new_id)
        
        var myobj = {"id" : 4, "nome" : nm, "cognome" : c, "email": e, "pasword": p, "premium" : "n"};
        collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
        
});

*/

//////Sign Up////////////
router.get("/:nome/:cognome/:mail/:pass", function (req, res){
    nome = req.params.nome;
    cognome = req.params.cognome;
    email = req.params.mail;
    psw = req.params.pass;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("leartravel");
        /*var new_id = dbo.collection("utente").find().sort({"id":-1}).limit(1);
        console.log(new_id)*/
        dbo.collection("utente").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
          if (result.length === 0)
          {
            var myobj = { "id" : 4, "nome" : nome, "cognome" : cognome, "email": email, "pasword": psw, "premium" : false };
            dbo.collection("utente").insertOne(myobj, function(err, res) {
            if (err) throw err;
            this.result = results;
            result = "user added";
            });
            var reg = {"SingUped" : false}
            result = reg;
            res.send(result);
          }else
          {
            var reg = {"SingUped" : true}
            result = reg;
            res.send(result);
          }

          var mailOptions = {
            from: 'learnandtravelservice@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            text: 'registrazione effetuata con successo'
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });

        db.close();
        });
    });
});

module.exports = router;
