module.exports = {
    url: 'mongodb://localhost:27017',
    user: 'admin',
    password: 'admin',
    sigmapoolToken: process.env.API_KEY || '8a603fcf163a7aa80d5989f58e503266',
    comission: '0.5',
    tokenKey: process.env.TOKEN_KEY || "djghhdhuuwiduewihuwiehriwu",
    poolConnUrls: {
        btc: {
            one: process.env.POOLCONNURL_BTC1 || "stratum+tcp://eu.btc.sigmapool.com:3333",
            two: process.env.POOLCONNURL_BTC2 || "stratum+tcp://eu.btc.sigmapool.com:3333",
            three: process.env.POOLCONNURL_BTC3 || "stratum+tcp://eu.btc.sigmapool.com:3333"
        },
        ltc: {
            one: process.env.POOLCONNURL_LTC1 || "stratum+tcp://eu.ltc.sigmapool.com:3333",
            two: process.env.POOLCONNURL_LTC2 || "stratum+tcp://eu.ltc.sigmapool.com:3333",
            three: process.env.POOLCONNURL_LTC3 || "stratum+tcp://eu.ltc.sigmapool.com:3333"
        }
    }
};
