module.exports = {
    url: 'mongodb://localhost:27017',
    user: 'admin',
    password: 'admin',
    sigmapoolToken: process.env.API_KEY || '8a603fcf163a7aa80d5989f58e503266',
    comission: '0.5',
    tokenKey: process.env.TOKEN_KEY || "djghhdhuuwiduewihuwiehriwu",
    poolConnUrls: {
        one: process.env.POOLCONNURL1 || "stratum+tcp://eu.ltc.sigmapool.com:3333",
        two: process.env.POOLCONNURL2 || "stratum+tcp://eu.ltc.sigmapool.com:3333",
        three: process.env.POOLCONNURL3 || "stratum+tcp://eu.ltc.sigmapool.com:3333"
    }
};
