const express = require('express');

const app = express();

let prefix = '';

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

module.exports = {
	path: "/mockapi/",
	handler: app
};

if (!module.parent) {
	app.listen(8080, port => console.log(port))
}