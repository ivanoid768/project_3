var express = require('express');
var app = express();
import axios from 'axios';
const MongoClient = require('mongodb').MongoClient; 
const bodyParser = require('body-parser');
const db = require('./config');

var apiKey = "6523bff0c04a55a9db2e8c1ffd332c38";
var apiUrl = "https://btc.sigmapool.com/api/v1/";
var apiUrls = {
  getAccountInfo: `${apiUrl}stats`,
  getWorkers: `${apiUrl}workers`,
  getShares: `${apiUrl}charts/shares`,
  getEarnings: `${apiUrl}earnings`,
  getPayments: `${apiUrl}payments`,
  getCharts: `${apiUrl}charts`,
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



app.get('/stats', (req, res) => { 
  let url = `${apiUrls.getAccountInfo}?key=${apiKey}`;
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




app.get('/workers', (req, res) => {
  let url = `${apiUrls.getWorkers}?key=${apiKey}`;
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


app.get('/shares', (req, res) => {
  let url = `${apiUrls.getShares}?key=${apiKey}`;
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


app.get('/earnings', (req, res) => {
  let url = `${apiUrls.getEarnings}?key=${apiKey}`;
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

app.get('/payments', (req, res) => {
  let url = `${apiUrls.getPayments}?key=${apiKey}`;
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

app.get('/charts/hashrate', (req, res) => {
  let url = `${apiUrls.getCharts}/hashrate?key=${apiKey}`;
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

app.get('/charts/sma', (req, res) => {
  let url = `${apiUrls.getCharts}/sma?key=${apiKey}`;
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

app.get('/charts/shares', (req, res) => {
  let url = `${apiUrls.getCharts}/shares?key=${apiKey}`;
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
