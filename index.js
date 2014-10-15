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
  if(req.query.secret_key != config.secret_key) {
      util.log("[warning] Unauthorized request " + req.url);
      res.writeHead(401, "Not Authorized", {'Content-Type': 'text/html'});
      res.end('401 - Not Authorized');
      return;
  }
  res.end();
  function puts(error, stdout, stderr) {sys.puts(stdout)}
  exec("git reset --hard HEAD", puts);
  exec("git pull", puts);
  
});

app.dirname = __dirname;
require('./app/routes')(app);

app.listen(port);
console.log('Listening on port '+ port);
exports = module.exports = app;
