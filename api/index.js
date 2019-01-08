var express = require('express');
var app = express();
import axios from 'axios';
const MongoClient = require('mongodb').MongoClient; 
const bodyParser = require('body-parser');
const db = require('./config');

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


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  require('./db_routes')(app, database); 

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});


app.get('/users', (req, res) => {

  let userId = req.userId;
  if (userId) {
    console.log("userId", userId);
  } else {
    res.json({
      error: [error.response.data, error.response.status, error.response.headers]
    }); 
  }
  
});

app.get('/users/add', (req, res) => {

  let userId = req.userId;
  if (userId) {
    console.log("userId", userId);
  } else {
    res.json({
      error: [error.response.data, error.response.status, error.response.headers]
    });
  }

});



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
  let page = req.params.page;
  let limit = req.params.limit;
  let currency = req.params.currency;
  let apiKey = req.query.key;
  let url = `${protocol}${currency}${apiUrls.getWorkers}?page=${page}&limit=${limit}key=${params.key}`;
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
  let url = `${protocol}${currency}${apiUrls.getShares}?key=${apiKey}`;
 
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
  let url = `${protocol}${currency}${apiUrls.getEarnings}?key=${apiKey}`;
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
  let url = `${protocol}${currency}${apiUrls.getPayments}?period=${period}&key=${apiKey}`;
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
