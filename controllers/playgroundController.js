var Author = require('../models/author');
var async = require('async');
var Book = require('../models/book');
var request =require('request');
// Display list of all Authors
// Display list of all Authors
exports.ajaxForm = function (req, res, next) {

  res.render('ajax_form', {
    title: 'Formulario AJAX'
  });

};

exports.searching = function (req, res, next) {
  // input value from search
  var val = req.query.search;
  console.log(val);
  var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
    "%20where%20location%3D%22sfbay%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + val + "%22&format=" +
    "json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

  // request module is used to process the yql url and return the results in JSON format
  console.log(url);
  request(url, function(err, resp, body) {
      body = JSON.parse(body);
      // logic used to compare search results with the input from user
      // console.log(!body.query.results.RDF.item['about'])
      if (body.query.results.RDF.channel['about'] === false) {
        craig = "No results found. Try again.";
      } else {
        results = body.query.results.RDF.channel['about']
        craig = '<a href ="'+results+'">'+results+'</a>'
    }
    // pass back the results to client side
      res.send(craig);
  });

  //res.send(val);

};
