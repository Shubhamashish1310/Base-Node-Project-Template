const {FlightService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

async function createFlight(req, res) {
    try {
        console.log("Creating flight with data:", req.body);
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeat: req.body.totalSeat,
            airplaneId: req.body.airplaneId,
        });
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight created successfully";
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error creating flight controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
};
