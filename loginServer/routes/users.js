var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'

/* GET users listing. */
router.get('/:mail/:pass', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    e = req.params.mail;
    p = req.params.pass;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundUser);
        
        function foundUser(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("leartravel").collection("utente");
                collection.find({$and:[{'email':e},{"password":p}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 



module.exports = router;
