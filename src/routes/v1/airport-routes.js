const express = require('express');
const { AirportController } = require('../../controllers');

const { AirportMiddleware } = require('../../middlewares');
const router = express.Router();
console.log('Inside airport-routes.js');
// /api/v1/airports
router.post('/', AirportMiddleware.validateAirportRequest, AirportController.createAirport);
// /api/v1/airports
router.get('/', AirportController.getAirports);
// /api/v1/airports/:id

// /api/v1/airports/:id
router.put('/:id', AirportMiddleware.validateAirportRequest, AirportController.updateAirport);
router.delete('/:id', AirportController.destroyAirport);

module.exports = router;