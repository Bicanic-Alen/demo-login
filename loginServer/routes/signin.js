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

router.get("/:nome/:cognome/:mail/:pass", function (req, res){
    nome = req.params.nome;
    cognome = req.params.cognome;
    email = req.params.mail;
    psw = req.params.pass;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("leartravel");
        dbo.collection("utente").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
          if (result.length === 0)
          {
            var myobj = {"nome" : nome, "cognome" : cognome, "email": email, "password": psw, "premium" : false };
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
            subject: 'Registrazione a Learn&Traver',
            html: `<h1> Learn&Travel</h1> <p>Gentile cliente ${nome} ${cognome},</p> <p>la informiamo che la sua registrazione è stata effetuata con successo.</p> <p>Da questo momento è possibile accedere al sito https://4200-orange-lobster-h7jzyqjw.ws-eu03.gitpod.io/login</p>`
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
