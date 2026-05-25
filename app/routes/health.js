const express = require('express');
const router = express.Router();
const controller = require('../controllers/appController');

// Root endpoint
router.get('/', controller.root);

// Health endpoint for k8s/liveness probes
router.get('/health', controller.health);

// Status endpoint for more verbose app info
router.get('/status', controller.status);

module.exports = router;
