var express = require('express');
var quoter = require('./quoter');
var app = module.exports = express.Router();

// Routes
app.get('/', function(req,res){
  res.status(200).json('Hello World');
});

app.get('/api', function(req, res){
  res.status(200).json('API OK')
});

// Get all quotes
app.get('/api/quotes/all', function(req, res){
  res.status(200).json(quoter.getAllQuotes());
});

// Get random quote
app.get('/api/quotes/random', function (req, res) {
  res.status(200).json(quoter.getRandomQuote());
});

// Add new quote
app.post('/api/quotes/add', function(req, res){
  res.status(201).send(quoter.addQuote(req.body.quote));
});

// Get total number of quotes
app.get('/api/quotes/num', function(req, res){
  res.status(200).json(quoter.getNumQuotes())
});

// Get specific quote
app.get('/api/quotes/:id', function(req, res){
  res.status(200).json(quoter.getQuote(req.param('id')));
});
