var router = require('express').Router();
var Controller = require('./controller');

router
  .route('/endpoint')

  .get(Controller.retrieve);

router.route('/endpoint/:number').get(Controller.retrieveOne);

module.exports = router;
