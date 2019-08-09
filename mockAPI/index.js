const express = require('express');

const app = express();
const baseURL = '/subaccounts/:username';

let apiPrefix = '';

if (!module.parent) {
	apiPrefix = '/mockapi'
}

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}));

app.post(`${apiPrefix}/subaccounts`, (req, res) => {
	console.log(req.body);

	res.send({ status: 'success' })
})

// GET /api/v1/subaccounts/:username/stats // get sub user stats
// res: { hashrate, avgHashrate1h, avgHashrate24h, balance, rewards, rewards24, paid, scheme, address, threshold, profit: { hour, day, week, month, halfyear, yaer } }

app.get(`${baseURL}/stats`, (req, res) => {
	let response = {
		"hashrate": "0 H/s",
		"avgHashrate1h": "0 H/s",
		"avgHashrate24h": "0 H/s",
		"balance": "0.037921201488",
		"rewards": 2.27057757,
		"rewards24": 0,
		"paid": 2.15185018,
		"scheme": "PPS",
		"address": "",
		"threshold": 0.00436,
		"profit": {
			"hour": 0,
			"day": 0,
			"week": 0,
			"month": 0,
			"halfyear": 0,
			"year": 0
		}
	}

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/workers/count // get sub user workers count
// res: 12
app.get(`${baseURL}/workers/count`, (req, res) => {
	let response = '12';

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/workers?page=1&limit=100 // get sub user workers
// res: [...]
app.get(`${baseURL}/workers`, (req, res) => {
	let response = {}

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/earnings/count
// res: 13
app.get(`${baseURL}/earnings/count`, (req, res) => {
	let response = 13

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/earnings?page=1&limit=100
// res: [{ amount, bonus, nshares }, ...]
app.get(`${baseURL}/earnings`, (req, res) => {
	let response = [
		{
			"id": "23650336",
			"miner": "indimining",
			"amount": 0.080794659449,
			"usage": "Reward for 34.62 K shares (PPS)",
			"created": 1564674000000,
			"bonus": 0,
			"nshares": 34616
		},
		{
			"id": "16694671",
			"miner": "indimining",
			"amount": 0.000008067119,
			"usage": "Reward for 4.33 M shares (PPS)",
			"created": 1557291697000,
			"bonus": 0,
			"nshares": 4325376
		},
		{
			"id": "16694160",
			"miner": "indimining",
			"amount": 0.000010389471,
			"usage": "Reward for 5.57 M shares (PPS)",
			"created": 1557291010000,
			"bonus": 0,
			"nshares": 5570560
		},
		{
			"id": "16693749",
			"miner": "indimining",
			"amount": 0.000009533868,
			"usage": "Reward for 5.11 M shares (PPS)",
			"created": 1557290488000,
			"bonus": 0,
			"nshares": 5111808
		},
		{
			"id": "16693334",
			"miner": "indimining",
			"amount": 0.000012956282,
			"usage": "Reward for 6.95 M shares (PPS)",
			"created": 1557289922000,
			"bonus": 0,
			"nshares": 6946816
		},
		{
			"id": "16692912",
			"miner": "indimining",
			"amount": 0.000007089286,
			"usage": "Reward for 3.80 M shares (PPS)",
			"created": 1557289220000,
			"bonus": 0,
			"nshares": 3801088
		},
		{
			"id": "16692504",
			"miner": "indimining",
			"amount": 0.000010633929,
			"usage": "Reward for 5.70 M shares (PPS)",
			"created": 1557288710000,
			"bonus": 0,
			"nshares": 5701632
		},
		{
			"id": "16691957",
			"miner": "indimining",
			"amount": 0.000012956282,
			"usage": "Reward for 6.95 M shares (PPS)",
			"created": 1557288067000,
			"bonus": 0,
			"nshares": 6946816
		},
		{
			"id": "16691519",
			"miner": "indimining",
			"amount": 0.000009533868,
			"usage": "Reward for 5.11 M shares (PPS)",
			"created": 1557287446000,
			"bonus": 0,
			"nshares": 5111808
		},
		{
			"id": "16691109",
			"miner": "indimining",
			"amount": 0.000009044951,
			"usage": "Reward for 4.85 M shares (PPS)",
			"created": 1557286859000,
			"bonus": 0,
			"nshares": 4849664
		},
		{
			"id": "16690697",
			"miner": "indimining",
			"amount": 0.000011000616,
			"usage": "Reward for 5.90 M shares (PPS)",
			"created": 1557286285000,
			"bonus": 0,
			"nshares": 5898240
		},
		{
			"id": "16690285",
			"miner": "indimining",
			"amount": 0.000006478141,
			"usage": "Reward for 3.47 M shares (PPS)",
			"created": 1557285612000,
			"bonus": 0,
			"nshares": 3473408
		},
		{
			"id": "16689873",
			"miner": "indimining",
			"amount": 0.000011122845,
			"usage": "Reward for 5.96 M shares (PPS)",
			"created": 1557285166000,
			"bonus": 0,
			"nshares": 5963776
		},
		{
			"id": "16689333",
			"miner": "indimining",
			"amount": 0.000007333744,
			"usage": "Reward for 3.93 M shares (PPS)",
			"created": 1557284432000,
			"bonus": 0,
			"nshares": 3932160
		},
		{
			"id": "16688918",
			"miner": "indimining",
			"amount": 0.000012956282,
			"usage": "Reward for 6.95 M shares (PPS)",
			"created": 1557283966000,
			"bonus": 0,
			"nshares": 6946816
		},
		{
			"id": "16688506",
			"miner": "indimining",
			"amount": 0.000008922722,
			"usage": "Reward for 4.78 M shares (PPS)",
			"created": 1557283248000,
			"bonus": 0,
			"nshares": 4784128
		},
		{
			"id": "16688085",
			"miner": "indimining",
			"amount": 0.000008433806,
			"usage": "Reward for 4.52 M shares (PPS)",
			"created": 1557282680000,
			"bonus": 0,
			"nshares": 4521984
		},
		{
			"id": "16687674",
			"miner": "indimining",
			"amount": 0.000010633929,
			"usage": "Reward for 5.70 M shares (PPS)",
			"created": 1557282159000,
			"bonus": 0,
			"nshares": 5701632
		},
		{
			"id": "16687255",
			"miner": "indimining",
			"amount": 0.000009656097,
			"usage": "Reward for 5.18 M shares (PPS)",
			"created": 1557281436000,
			"bonus": 0,
			"nshares": 5177344
		},
		{
			"id": "16686841",
			"miner": "indimining",
			"amount": 0.000012100678,
			"usage": "Reward for 6.49 M shares (PPS)",
			"created": 1557280932000,
			"bonus": 0,
			"nshares": 6488064
		},
		{
			"id": "16686293",
			"miner": "indimining",
			"amount": 0.000011122845,
			"usage": "Reward for 5.96 M shares (PPS)",
			"created": 1557280236000,
			"bonus": 0,
			"nshares": 5963776
		},
		{
			"id": "16685882",
			"miner": "indimining",
			"amount": 0.000010878387,
			"usage": "Reward for 5.83 M shares (PPS)",
			"created": 1557279696000,
			"bonus": 0,
			"nshares": 5832704
		},
		{
			"id": "16685468",
			"miner": "indimining",
			"amount": 0.00000660037,
			"usage": "Reward for 3.54 M shares (PPS)",
			"created": 1557279033000,
			"bonus": 0,
			"nshares": 3538944
		},
		{
			"id": "16685060",
			"miner": "indimining",
			"amount": 0.000012711823,
			"usage": "Reward for 6.82 M shares (PPS)",
			"created": 1557278662000,
			"bonus": 0,
			"nshares": 6815744
		},
		{
			"id": "16684646",
			"miner": "indimining",
			"amount": 0.000009289409,
			"usage": "Reward for 4.98 M shares (PPS)",
			"created": 1557277818000,
			"bonus": 0,
			"nshares": 4980736
		}
	]

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/dailyearnings/count
// res: 10
app.get(`${baseURL}/dailyearnings/count`, (req, res) => {
	let response = 10

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/dailyearnings?page=1&limit=100
// res: [...]
app.get(`${baseURL}/dailyearnings`, (req, res) => {
	let response = [
		{
			"date": 1564617600000,
			"nshares": 34616,
			"hashrate": "0.00172077 TH/s",
			"earnings": 0.080794659449,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 46.95261973
		},
		{
			"date": 1557273600000,
			"nshares": 171114496,
			"hashrate": "8.50614773 TH/s",
			"earnings": 0.000319140105,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003752
		},
		{
			"date": 1557187200000,
			"nshares": 829816832,
			"hashrate": "41.25041846 TH/s",
			"earnings": 0.001547664497,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003752
		},
		{
			"date": 1557100800000,
			"nshares": 823853056,
			"hashrate": "40.95395755 TH/s",
			"earnings": 0.001536541658,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003752
		},
		{
			"date": 1557014400000,
			"nshares": 821952512,
			"hashrate": "40.85948099 TH/s",
			"earnings": 0.001532997009,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003752
		},
		{
			"date": 1556928000000,
			"nshares": 828047360,
			"hashrate": "41.16245753 TH/s",
			"earnings": 0.00157437032,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003825
		},
		{
			"date": 1556841600000,
			"nshares": 815464448,
			"hashrate": "40.53695758 TH/s",
			"earnings": 0.001604479225,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556755200000,
			"nshares": 809041920,
			"hashrate": "40.21769198 TH/s",
			"earnings": 0.001591842489,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556668800000,
			"nshares": 818413568,
			"hashrate": "40.68355913 TH/s",
			"earnings": 0.001610281809,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556582400000,
			"nshares": 853934080,
			"hashrate": "42.44929336 TH/s",
			"earnings": 0.001680170727,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556496000000,
			"nshares": 778371072,
			"hashrate": "38.69303586 TH/s",
			"earnings": 0.001531495607,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556409600000,
			"nshares": 813432832,
			"hashrate": "40.43596540 TH/s",
			"earnings": 0.001600481896,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556323200000,
			"nshares": 821166080,
			"hashrate": "40.82038725 TH/s",
			"earnings": 0.001615697563,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556236800000,
			"nshares": 851181568,
			"hashrate": "42.31246525 TH/s",
			"earnings": 0.001674754984,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556150400000,
			"nshares": 809566208,
			"hashrate": "40.24375448 TH/s",
			"earnings": 0.001592874063,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1556064000000,
			"nshares": 819462144,
			"hashrate": "40.73568413 TH/s",
			"earnings": 0.00161234496,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1555977600000,
			"nshares": 863961088,
			"hashrate": "42.94773863 TH/s",
			"earnings": 0.00169989952,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1555891200000,
			"nshares": 328794112,
			"hashrate": "16.34444396 TH/s",
			"earnings": 0.000646923757,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003958
		},
		{
			"date": 1555545600000,
			"nshares": 401539072,
			"hashrate": "19.96061554 TH/s",
			"earnings": 0.000785111808,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555459200000,
			"nshares": 806780928,
			"hashrate": "40.10529746 TH/s",
			"earnings": 0.001577463506,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555372800000,
			"nshares": 823246848,
			"hashrate": "40.92382279 TH/s",
			"earnings": 0.0016096586,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555286400000,
			"nshares": 820543488,
			"hashrate": "40.78943803 TH/s",
			"earnings": 0.001604372836,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555200000000,
			"nshares": 824819712,
			"hashrate": "41.00201028 TH/s",
			"earnings": 0.001612733947,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555113600000,
			"nshares": 821641216,
			"hashrate": "40.84400639 TH/s",
			"earnings": 0.001606519182,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		},
		{
			"date": 1555027200000,
			"nshares": 826638336,
			"hashrate": "41.09241457 TH/s",
			"earnings": 0.001616289831,
			"bonus": 0,
			"miner": "indimining",
			"profitability": 0.00003933
		}
	]

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/dailybalances?page=1&limit=100
// res: { docs: [...], limit: 100, page: 1 }
app.get(`${baseURL}/dailybalances`, (req, res) => {
	let response = {}

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/payments/count
// res: 1111
app.get(`${baseURL}/payments/count`, (req, res) => {
	let response = 1111;

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/payments?page=1&limit=100
// res: [{ id, amount, transactionconfirmationdata, created }]
app.get(`${baseURL}/payments`, (req, res) => {
	let response = [
		{
			"id": "70241",
			"amount": 0.011116555371,
			"transactionconfirmationdata": "e87b5f029fd4be3140092d9661c814eaabd02ff0afcef99221af8574a1c3ff56",
			"created": 1554893405000
		},
		{
			"id": "50593",
			"amount": 0.017925673853,
			"transactionconfirmationdata": "8011ed8d1639e83d1ab182a1bb1e2bec2f9fee6447dc8e28536c1af30d83e734",
			"created": 1547821843000
		},
		{
			"id": "50416",
			"amount": 0.024317785411,
			"transactionconfirmationdata": "80ef325856fb2e625ed53f652daa6a09396d2261dd473391c521e0fa81ef3c44",
			"created": 1547746131000
		},
		{
			"id": "49932",
			"amount": 0.01934326577,
			"transactionconfirmationdata": "66167d593687117d37316d27475b31c4a80b53dc06c2b146d4bb752509970138",
			"created": 1547654517000
		},
		{
			"id": "49718",
			"amount": 0.024358021516,
			"transactionconfirmationdata": "db9af032e88706cd0f97e8b54b19e8f84e9a96c3ea98fd642129876e34dddf01",
			"created": 1547582695000
		},
		{
			"id": "49295",
			"amount": 0.023186579233,
			"transactionconfirmationdata": "947452bd01e4fe14ede9e3539818d0aa2585c3d8cfd547025f4ee5229eb7db3f",
			"created": 1547492641000
		},
		{
			"id": "48926",
			"amount": 0.023853134062,
			"transactionconfirmationdata": "18773fcb5ffc02d48dd12da3b2b2cb4f71912cf6543f9e5a4d08c86d244fc791",
			"created": 1547407034000
		},
		{
			"id": "48565",
			"amount": 0.02539323586,
			"transactionconfirmationdata": "6793b0edf55b0906a8c2cb4e276fd70c74e9656032eb55b23e5de1acf28676a4",
			"created": 1547321518000
		},
		{
			"id": "48240",
			"amount": 0.024623257858,
			"transactionconfirmationdata": "cf68cd6bd24388f2426ceae57a6f29e41a8c54c1213426e64e18a5f2cdcc5510",
			"created": 1547232312000
		},
		{
			"id": "47903",
			"amount": 0.026511554178,
			"transactionconfirmationdata": "45627bb659ac6a24bfb29a43e49292591da088243f39de745bde01ef0a76225b",
			"created": 1547145702000
		},
		{
			"id": "47779",
			"amount": 0.025543514977,
			"transactionconfirmationdata": "25783122850884f925cfabe0737dd52dd43ef4b89fdc28ec8b9d750cf267bc59",
			"created": 1547055320000
		},
		{
			"id": "47463",
			"amount": 0.025460422081,
			"transactionconfirmationdata": "ac1a1fdeffc54fc4011be5f82002a3cd9c39e82205aa7702b056c40f1a507b59",
			"created": 1546969350000
		},
		{
			"id": "47076",
			"amount": 0.024248403534,
			"transactionconfirmationdata": "f7800a4845bd30932bc3423953381e2c742255c2d78ce4ef50ad7cf18cc70672",
			"created": 1546884394000
		},
		{
			"id": "46771",
			"amount": 0.026039397718,
			"transactionconfirmationdata": "6c4a463947f3149cecfdd8c8651e9a223e8174c835fed482d608d784d23171c2",
			"created": 1546803245000
		},
		{
			"id": "46439",
			"amount": 0.024910227401,
			"transactionconfirmationdata": "8e505b073c566c0247b6c6ad5e58145a93a18cceaec7aefccf1429e902e9d94d",
			"created": 1546716248000
		},
		{
			"id": "46131",
			"amount": 0.027977526103,
			"transactionconfirmationdata": "f252282b792c36c8aa83cbf63931142acbd511dabbd660555dba3a098feabe53",
			"created": 1546632947000
		},
		{
			"id": "45792",
			"amount": 0.027100726592,
			"transactionconfirmationdata": "dcd6fa6999687095ab859dd43e312678d99dce4ee26b5ffb2aca965e96e0d93b",
			"created": 1546539165000
		},
		{
			"id": "45492",
			"amount": 0.027867409487,
			"transactionconfirmationdata": "e24070f863180118e50ffa1c35359f7c9560660d39f72cea317926fcde401d27",
			"created": 1546453648000
		},
		{
			"id": "45166",
			"amount": 0.027480558603,
			"transactionconfirmationdata": "fc35a7dd87e6beb8d7580b0f476e42cf865b6b91eeeeba02311d498c43359371",
			"created": 1546366906000
		},
		{
			"id": "44856",
			"amount": 0.029782597162,
			"transactionconfirmationdata": "ef87af3d76c8bcdf56d95f5b4d6bcc616c3eb5c60908ed54591f074243a90632",
			"created": 1546281281000
		},
		{
			"id": "44525",
			"amount": 0.030811962316,
			"transactionconfirmationdata": "6698dee8fceacfdb15a32882921cb7981149593240d89920a64212303cd299f9",
			"created": 1546196602000
		},
		{
			"id": "44207",
			"amount": 0.029763105801,
			"transactionconfirmationdata": "66e91f980e690d358175932860f6f5f9cae0c683747f55fbf68b1b54dd72c605",
			"created": 1546109607000
		},
		{
			"id": "43867",
			"amount": 0.032126687067,
			"transactionconfirmationdata": "17fb60620bf6accfa474fa312e3a219928b86d9e09bb5656fbf494a33eab8416",
			"created": 1546025492000
		},
		{
			"id": "43554",
			"amount": 0.029737087993,
			"transactionconfirmationdata": "fc72b50e3d2514ece478fa2ea885f8fcdb3b6f691420d7f41db69bf004b27060",
			"created": 1545934326000
		},
		{
			"id": "43233",
			"amount": 0.031365492555,
			"transactionconfirmationdata": "941a713ecd405434108fd25402a998b9d4ebbda78af9b3610229c266169fb81a",
			"created": 1545850643000
		}
	]

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/charts/hashrate?period=12h||24h||3d
// res: [{ x: date, y: hashrate }}]
app.get(`${baseURL}/charts/hashrate`, (req, res) => {
	let response = [{
		x: Date.now() - 1000 * 60 * 60 * 15,
		y: 0.35
	}, {
		x: Date.now() - 1000 * 60 * 60 * 5,
		y: 0.1
	}, {
		x: Date.now() - 1000 * 60 * 60 * 1,
		y: 0.05
	}]

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/charts/sma?period=12h||24h||3d
// res: [{ x: date, y: hashrate }}]
app.get(`${baseURL}/charts/sma`, (req, res) => {
	let response = [{
		x: Date.now() - 1000 * 60 * 60 * 15,
		y: 0.5
	}, {
		x: Date.now() - 1000 * 60 * 60 * 5,
		y: 0.15
	}, {
		x: Date.now() - 1000 * 60 * 60 * 1,
		y: 0.57
	}]

	return res.status(200).send(response)
})

// GET /api/v1/subaccounts/:username/charts/shares?period=12h||24h||3d
// res: [{ x: date, y: hashrate }}]
app.get(`${baseURL}/charts/shares`, (req, res) => {
	let response = [{
		x: Date.now() - 1000 * 60 * 60 * 15,
		y: 0.5
	}, {
		x: Date.now() - 1000 * 60 * 60 * 5,
		y: 0.15
	}, {
		x: Date.now() - 1000 * 60 * 60 * 1,
		y: 0.57
	}]

	return res.status(200).send(response)
})

module.exports = {
	path: "/mockapi/",
	handler: app
};

if (!module.parent) {
	app.listen(8080, port => console.log(port))
}