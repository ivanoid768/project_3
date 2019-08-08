const axios = require('axios');

const axInst = axios.create({
	baseURL: process.env.MOCKAPI || 'http://btc.sigmapool.com/api/v1',
	params: {
		key: '5c6a89b97c05ea604f30aca0d920714f'
	}
})

let regHeaders = {
	'Content-Type': process.env.MOCKAPI ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'multipart/form-data; charset=UTF-8'
}

axInst.post('/subaccounts', {
	subaccount: 'ivan_ivanov_3008',
	address: '3J98t1WpEZ73CNmQviecrnyiWr22RhWNLy',
	owner_comission: '0.05'
}, {
		headers: regHeaders,
		params: {
			key: '5c6a89b97c05ea604f30aca0d920714f'
		}
	})
	.then(resp => console.log(resp.data, resp.status === 200, resp.statusText, Object.keys(resp)))
	.catch(console.log)

// axios.post('http://google.com')
// 	.then(console.log)
// 	.catch(console.log)

// axios.post('http://btc.sigmapool.com/api/v1/subaccounts', {
// 	subaccount: 'ivan_ivanov_3008',
// 	address: '3J98t1WpEZ73CNmQviecrnyiWr22RhWNLy',
// 	owner_comission: '0.05'
// },
// 	{
// 		params: {
// 			key: '5c6a89b97c05ea604f30aca0d920714f'
// 		},
// 		headers: {
// 			'Content-Type': 'multipart/form-data'
// 		}

// 	}).then(resp => console.log(resp.data, Object.keys(resp)))
// 	.catch(console.log)