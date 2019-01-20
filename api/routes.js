module.exports = function (app, db) {
  app.post('/adduser', (req, res) => {
    const user = { email: req.body.email, name: req.body.name, password: req.body.password };
    db.collection('users').insert(user).toArray((err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result);
      }
    });
  });

  app.post('/updateuser/:id', (req, res) => {
    const user = { '_id': req.params.id }
    const data = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.name
    }
  
    db.collection('users').updateOne(user, data).toArray((err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result);
      }
    });
  });

  app.get('/users', (req, res) => {
    db.collection('users').find({}).toArray((err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result);
      }
    });
  });

  app.get('/user/:id', (req, res) => {
    const details = {'_id': req.params.id };
  
    db.collection('users').findOne(details, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });
};

