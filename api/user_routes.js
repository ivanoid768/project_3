module.exports = function (app, db) {
  app.post('/users/create', (req, res) => {

    res.send('user created');
  });
};
