
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateFlightCreation(req, res, next) {
    const { flightNumber, departureAirportId, arrivalAirportId, departureTime, arrivalTime, price, boardingGate, totalSeat, airplaneId } = req.body;
    if (!flightNumber || !departureAirportId || !arrivalAirportId || !departureTime || !arrivalTime || !price || !totalSeat || !airplaneId) {
        ErrorResponse.message = "All fields are required";
        ErrorResponse.error = new AppError("All fields are required", 400, true);
        return res.status(400).json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    const { seats } = req.body;
    if (!seats || isNaN(seats) || seats <= 0) {
        ErrorResponse.message = "Invalid number of seats";
        ErrorResponse.error = new AppError("Invalid number of seats", 400, true);
        return res.status(400).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateFlightCreation,
    validateUpdateSeatsRequest
};