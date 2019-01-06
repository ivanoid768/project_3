db.collection('users');
const userRoutes = require('./user_routes');
module.exports = function (app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};

