const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

const router = express.Router();
console.log('Inside v1');
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
// /api/v1/cities
router.use('/cities', cityRoutes);


router.get('/info', InfoController.info);

module.exports = router;