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

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        SuccessResponse.message = "Flights fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching flights controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function getFlightById(req, res) {
    try {
        const flight = await FlightService.getFlightById(req.params.id);
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching flight controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function updateFlight(req, res) {
    try {
        const flight = await FlightService.updateFlight(req.params.id, req.body);
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight updated successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error updating flight controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function deleteFlight(req, res) {
    try {
        const flight = await FlightService.deleteFlight(req.params.id);
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight deleted successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error deleting flight controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function updateSeats(req, res) {
    try {
        console.log("in controlller",req.body);
        const flight = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec,
        });
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight updated successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error updating flight controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlightById,
    updateFlight,
    deleteFlight,
    updateSeats,
};
