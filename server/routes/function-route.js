// import dependencies and initialize the express router
const express = require('express');
const FunctionController = require('../controllers/function-controller');

const router = express.Router();

// define routes
router.get('/Analyze', FunctionController.callEndpoint);

module.exports = router;
