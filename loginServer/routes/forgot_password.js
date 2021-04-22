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

var codiceSicurezza;


/*
router.get('/:mail/:cod', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    email = req.params.mail;
    cod = req.params.cod;
    codiceSicurezza = cod;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(recoverpass);
        
        function recoverpass(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("leartravel").collection("utente");
                collection.find({"email":`${email}`}).limit(1).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) {
                console.log(err.message);
                var obj = {'received data' : false}
                res.send(obj);
            } 
            else{
                var obj = {'received data' : true}
                res.send(obj);
            } 

            var mailOptions = {
            from: 'learnandtravelservice@gmail.com',
            to: email,
            subject: 'Recupero Password',
            html: `<h1> Learn&Travel customer service</h1><p>Gentile cliente ${result[0].nome} ${result[0].cognome},</p> <p> la sua password è: ${result[0].password}</p>`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
            client.close();
        }

        

        
}); 
*/
router.get("/:email/:cod", function (req, res){
    email = req.params.email;
    codiceSicurezza = req.params.cod;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("leartravel");
        dbo.collection("utente").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
           
          if (result.length != 0)
          {
            var myobj = {'email': email, 'codiceSicurezza': codiceSicurezza};
            dbo.collection("changePass").insertOne(myobj, function(err, res) {
            if (err) throw err;
            r = "codice sicurezza aggiunto";
            console.log(r)
            });

            var reg = {"info" : true}
            res.send(reg);
            var mailOptions = {
            from: 'learnandtravelservice@gmail.com',
            to: `${email}`,
            subject: 'Richiesta di recupero password',
            html: `<h1> Learn&Travel</h1> <p>Gentile cliente ${results[0].nome} ${results[0].cognome},</p><p> il suo codice di sicurezza è: <b>${codiceSicurezza}</b></p>`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
          } 
          else{
              var reg = {"info": false}
              res.send(reg)
          }
        db.close();
        });
    });
});

module.exports = router;
