var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = require('validator')

validator.isEmail('')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'jade');

app.post('/signup', function(req, res){
  console.log(req.body);
  res.render('index', { user: req.body });
});



app.listen(3000, function(){
  console.log('LISTEN ON PORT 3000');
});