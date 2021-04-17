// import dependencies and initialize the express router
const express = require('express');
const HealthController = require('../controllers/function-controller');

const router = express.Router();

// define routes
router.get('', HealthController.callEndpoint);

module.exports = router;
