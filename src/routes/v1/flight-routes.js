const express = require('express');
const { FlightController } = require('../../controllers');
const {FlightMiddleware} = require('../../middlewares');
const router = express.Router();

// /api/v1/flights
router.post('/', FlightMiddleware.validateFlightCreation, FlightController.createFlight);

router.get('/', FlightController.getAllFlights);

router.get('/:id', FlightController.getFlightById);

router.put('/:id', FlightMiddleware.validateFlightCreation, FlightController.updateFlight);

router.delete('/:id', FlightController.deleteFlight);

// /api/v1/flights/:id/seats PATCH
router.patch('/:id/seats', FlightMiddleware.validateUpdateSeatsRequest, FlightController.updateSeats);


module.exports = router;