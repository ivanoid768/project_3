import axios from 'axios';
var express = require('express');
const jwt = require('jsonwebtoken');
var app = express();
// const bodyParser = require('body-parser');
const config = require('./config');
const UserModel = require('./models/users-model');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

app.use('/', (req, res, next) => {
  console.log('headers: ', req.headers.cookie)
  const token = req.headers.cookie.match(/Bearer(?:\s|%20)(\S+)(?:\s|$)/i)[1]
  jwt.verify(token, config.tokenKey, function (err, payload) {
    if (payload) {
      UserModel.findById(payload.userId)
        .then((user) => {
          req.user = user
          next()
        })
        .catch(() => {
          next()
        })
    } else {
      next()
    }
  })

})

var protocol = "http";
var apiUrl = "sigmapool.com/api/v1/subaccounts";

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

const routes_1 = ['stats', 'workers', 'shares', 'earnings', 'payments'];


// app.get('/:currency/:route', (req, res, next) => {
//   console.log(req.user, req.route.path)
// })

// // app.get('/:currency/:route/:count', (req, res, next) => {
// //   console.log(req.user, req.route.path)
// // })

app.get(['/:currency/:route/:count', '/:currency/:route'], (req, res, next) => { // count (/(|count)/ig) ?
  let { currency, route, count } = req.params;
  let { user, query } = req;

  if (routes_1.indexOf(route) === -1) {
    next('route');
  }

  console.log(req.route.path, req.user)

  let API_TOKEN = config.sigmapoolToken;
  // /api/v1/subaccounts/:username/workers?page=1&limit=100
  let url = `${protocol}://${currency}.${apiUrl}/${user.userName}/${route}`;
  if (count && count == 'count')
    url += '/count';

  let qr = {
    ...query,
    key: API_TOKEN
  }

  console.log(API_TOKEN);
  console.log(qr);

  axios.get(url, { params: qr }).then(resp => {
    return res.status(200).send(resp.data)
  })
    .catch(error => {
      if (error.response) {
        return res.status(500).send({
          error: [error.response.data, error.response.status, error.response.headers]
        })
      } else {
        return res.status(500).send(error)
      }
    })

})

const routes_charts = ['hashrate', 'sma', 'shares'];

app.get('/:currency/charts/:route', (req, res, next) => {
  let { currency, route } = req.params;
  let { user, query } = req;

  if (routes_charts.indexOf(route) === -1) {
    next('route');
  }

  let API_TOKEN = config.sigmapoolToken;
  console.log(API_TOKEN);

  // /api/v1/subaccounts/:username/charts/sma?period=12h||24h||3d
  let url = `${protocol}://${currency}.${apiUrl}/${user.userName}/charts/${route}`;

  let qr = {
    ...query,
    key: API_TOKEN
  }

  axios.get(url, { params: qr }).then(resp => {
    return res.status(200).send(resp.data)
  })
    .catch(error => {
      if (error.response) {
        return res.status(500).send({
          error: [error.response.data, error.response.status, error.response.headers]
        })
      } else {
        return res.status(500).send(error)
      }
    })

})

// app.get('/:currency/stats', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let url = `${protocol}${currency}${apiUrls.getAccountInfo}?key=${apiKey}`;

//   axios.get(url).then(response => {
//     res.json(response.data);
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });




// app.get('/:currency/workers', (req, res) => {
//   let params = req.params;
//   let page = req.query.page;
//   let limit = req.query.limit;
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let url = `${protocol}${currency}${apiUrls.getWorkers}?page=${page}&limit=${limit}&key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });


// app.get('/:currency/shares', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let page = req.query.page;
//   let limit = req.query.limit;
//   let url = `${protocol}${currency}${apiUrls.getShares}?page=${page}&limit=${limit}&key=${apiKey}`;

//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });


// app.get('/:currency/earnings', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let page = req.query.page;
//   let limit = req.query.limit;
//   let url = `${protocol}${currency}${apiUrls.getEarnings}?page=${page}&limit=${limit}&key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });

// app.get('/:currency/payments', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let period = req.query.period;
//   let page = req.query.page;
//   let limit = req.query.limit;
//   let url = `${protocol}${currency}${apiUrls.getPayments}?period=${period}&page=${page}&limit=${limit}&key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });

// app.get('/:currency/charts/hashrate', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let period = req.query.period;
//   let url = `${protocol}${currency}${apiUrls.getCharts}/hashrate?period=${period}&key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });

// app.get('/:currency/charts/sma', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let url = `${protocol}${currency}${apiUrls.getCharts}/sma?key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });

// app.get('/:currency/charts/shares', (req, res) => {
//   let currency = req.params.currency;
//   let apiKey = req.query.key;
//   let url = `${protocol}${currency}${apiUrls.getCharts}/shares?key=${apiKey}`;
//   axios.get(url).then(response => {
//     res.json(response.data);
//     //console.log("======stats end");
//   }).catch(function (error) {
//     if (error.response) {
//       res.json({
//         error: [error.response.data, error.response.status, error.response.headers]
//       });
//     }
//   });
// });


module.exports = {
  path: "/api/",
  handler: app
};
