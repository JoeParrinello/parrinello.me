var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sys = require('sys');
var exec = require('child_process').exec;
var compression = require('compression');


var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.post('/gitpull', function(req, res) {
  res.end();
  console.log("Hey, Im going down for the git pull");
  function puts(error, stdout, stderr) {sys.puts(stdout)}
  //puts(__dirname);
  exec("git reset --hard HEAD",{cwd:'/srv/parrinello.me'}, puts);
  exec("git pull",{cwd:'/srv/parrinello.me'}, puts);
  exec("/usr/local/bin/grunt",{cwd:'/srv/parrinello.me'}, puts);

});

app.dirname = __dirname;
require('./app/routes')(app);

app.listen(port);
console.log('Listening on port '+ port);
exports = module.exports = app;
