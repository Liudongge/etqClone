var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config')
var connectionString = 'postgres://postgres:@localhost/etqdb';
// var connectionString = config.connectionString;
var session = require('express-session')

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

app.use(cors());

app.use(bodyParser.json());
app.use(express.static('../public'));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret
}))




///Controllers///
var shoeCtrl = require('./controllers/shoeCtrl');



///Requests///
app.get('/api/shoes', shoeCtrl.getShoes);

app.post('/api/cart', shoeCtrl.setCart);

app.get('/api/cart', shoeCtrl.getCart);

app.post('/api/order', shoeCtrl.addOrder);

app.post('/api/remove', shoeCtrl.removeFromOrder)

app.get('/api/order', shoeCtrl.getOrders);


var port = config.port;
app.listen(9001, function(){
  console.log('Port ' + port + ' is listening.');
});
