import axios from 'axios';
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));

 
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err) return console.log(err)
  var db = client.db('users');
  console.log('MONGO IS CONNECTED', Object.keys(db)); 

  require('./routes')(app, db);

});






var protocol = "https://";
var apiUrl = ".sigmapool.com/api/v1/";

var ltcApiUrl = "";

var dashApiUrl = "";


var courseWidgetApi = "https://blockchain.info/ru/ticker";

var apiUrls = {
  getAccountInfo: `${apiUrl}stats`,
  getWorkers: `${apiUrl}workers`,
  getShares: `${apiUrl}charts/shares`,
  getEarnings: `${apiUrl}earnings`,
  getPayments: `${apiUrl}payments`,
  getCharts: `${apiUrl}charts`,
  //ltc//
 
};



 



app.get('/:currency/stats', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let url = `${protocol}${currency}${apiUrls.getAccountInfo}?key=${apiKey}`;
 
  axios.get(url).then(response => { 
    res.json(response.data); 
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      }); 
    }
  }); 
});




app.get('/:currency/workers', (req, res) => {
  let params = req.params;
  let page = req.query.page;
  let limit = req.query.limit;
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let url = `${protocol}${currency}${apiUrls.getWorkers}?page=${page}&limit=${limit}&key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  }); 
});


app.get('/:currency/shares', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let page = req.query.page;
  let limit = req.query.limit;
  let url = `${protocol}${currency}${apiUrls.getShares}?page=${page}&limit=${limit}&key=${apiKey}`;
 
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  }); 
});


app.get('/:currency/earnings', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let page = req.query.page;
  let limit = req.query.limit;
  let url = `${protocol}${currency}${apiUrls.getEarnings}?page=${page}&limit=${limit}&key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  });
});

app.get('/:currency/payments', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let period = req.query.period;
  let page = req.query.page;
  let limit = req.query.limit;
  let url = `${protocol}${currency}${apiUrls.getPayments}?period=${period}&page=${page}&limit=${limit}&key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  });
});

app.get('/:currency/charts/hashrate', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let period = req.query.period;
    let url = `${protocol}${currency}${apiUrls.getCharts}/hashrate?period=${period}&key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  });
});

app.get('/:currency/charts/sma', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let url = `${protocol}${currency}${apiUrls.getCharts}/sma?key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  });
});

app.get('/:currency/charts/shares', (req, res) => {
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let url = `${protocol}${currency}${apiUrls.getCharts}/shares?key=${apiKey}`;
  axios.get(url).then(response => {
    res.json(response.data);
    //console.log("======stats end");
  }).catch(function (error) {
    if (error.response) {
      res.json({
        error: [error.response.data, error.response.status, error.response.headers]
      });
    }
  });
});

 
module.exports = {
  path: "/api/",
  handler: app
};
