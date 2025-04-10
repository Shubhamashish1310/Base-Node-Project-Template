const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCityRequest(req, res, next) {
    const { name } = req.body;
    if (!name) {
        ErrorResponse.message = "Name is required";
        ErrorResponse.error = new AppError("Name is required", 400, true);
        return res.status(400).json(ErrorResponse);
    }
    next();
}

module.exports = { validateCityRequest };