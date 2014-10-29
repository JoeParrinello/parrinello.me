var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sys = require('sys');
var exec = require('child_process').exec;


var port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

app.post('/gitpull', function(req, res) {
  res.end();
  console.log("Hey, Im going down for the git pull");
  function puts(error, stdout, stderr) {sys.puts(stdout)}
  exec("git reset --hard HEAD", puts);
  exec("git pull", puts);
  exec("/usr/local/bin/grunt", puts);

});

app.dirname = __dirname;
require('./app/routes')(app);

app.listen(port);
console.log('Listening on port '+ port);
exports = module.exports = app;
