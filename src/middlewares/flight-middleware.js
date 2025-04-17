
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
module.exports = {
    validateFlightCreation,
};