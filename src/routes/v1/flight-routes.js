const express = require('express');
const { FlightController } = require('../../controllers');
const {FlightMiddleware} = require('../../middlewares');
const router = express.Router();

// /api/v1/flights
router.post('/', FlightMiddleware.validateFlightCreation, FlightController.createFlight);

module.exports = router;