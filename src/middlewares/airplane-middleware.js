const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateAirplaneRequest(req, res, next) {
    const { modelNumber, capacity } = req.body;
    if (!modelNumber || !capacity) {
        ErrorResponse.message = "Model number and capacity are required";
        ErrorResponse.error = new AppError("Model number and capacity are required", 400, true);
        return res.status(400).json(ErrorResponse);
    }
    next();
}

module.exports = { validateAirplaneRequest };