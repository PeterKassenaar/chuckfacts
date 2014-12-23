// node-express-template
// Een eenvoudige, kale node server met API
// om als uitgangspunt te dienen voor projecten.
//
// (C) 2015 - Peter Kassenaar, info@kassenaar.com
// https://github.com/PeterKassenaar/node-express-template
//******************************************

// 1. Dependencies voor dit project
var express = require('express'),
  http = require('http'),
  cors = require('cors'),
  bodyParser = require('body-parser');

// 2. applicatie instellen
var app = express();

// Parsers
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

// 3. beschikbare routes staan in een apart bestand
app.use(require('./routes'));

// 4. poort instellen (standaard: 3000)
var port = process.env.PORT || 3000;

// 5. Server maken en luisteren naar opgegeven poort.
var server = http.createServer(app);
server.listen(port, function (err) {
  console.log('Node-express server gestart op http://localhost: ' + port);
  if (err) {
    console.log('Error:' + err);
  }
});



