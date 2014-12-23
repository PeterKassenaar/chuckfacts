(function (quoter) {
  'use strict';
  var quotes = require('./quotes.json');

  var singleQuote = function (status, id, quote) {
    this.status = status;
    this.id = id;
    this.quote = quote;
  };

  // 1. Return all quotes
  quoter.getAllQuotes = function () {
    return quotes;
  };

  // 2. Get specific quote
  quoter.getQuote = function (id) {
    if (id <= quotes.length) {
      return new singleQuote('OK', id, quotes[id]);
    } else {
      return new singleQuote('error', -1, "id not found")
    }
  };

// 3. Get random quote
  quoter.getRandomQuote = function () {
    var total = quotes.length;
    var rand = Math.ceil(Math.random() * total);
    return new singleQuote('OK', quotes.indexOf(quotes[rand]), quotes[rand]);
  };

// 4. Add quote to array
  quoter.addQuote = function (quote) {
    quotes.push(quote);
    return new singleQuote('OK', quotes.length, quote);
  };

// 5. Delete quote from array
  quoter.deleteQuote = function (id) {
    quotes.splice(id, 1);
  };

// 6. Get total number of quotes
  quoter.getNumQuotes = function () {
    return quotes.length;
  };

})
(module.exports);


