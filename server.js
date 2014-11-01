var express = require('express');
var bodyParser = require('body-parser');
var stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
var cors = require('cors');
var app = express();
var port = 8888;

app.use(bodyParser());
app.use(cors());

app.post('/stripecheckout', function(req, res){

  stripe.charges.create({
    amount: 1000, // amount in cents
    currency: "usd",
    card: req.body.stripeToken,
    description: req.body.user.email + ' Global Bridges User Account Charge'
  }, function(err, charge){
    console.log(err, charge)
    if(err){
      res.send(err);
    } else {
      res.status(200).send(charge);
    }
  })

});

app.listen(port, function () {
  console.log('listening on port ' + port);
})