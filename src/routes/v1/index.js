const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();
console.log('Inside v1');
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
// /api/v1/cities
router.use('/cities', cityRoutes);

router.use('/flights', flightRoutes);

router.get('/info', InfoController.info);

module.exports = router;