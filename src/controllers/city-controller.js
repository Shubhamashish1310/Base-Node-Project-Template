const {CityService} = require("../services");
const {ErrorResponse,SuccessResponse} = require("../utils/common");

async function createCity(req, res) {
    try {
        console.log("Creating city with data:", req.body);
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.data = city;
        SuccessResponse.message = "City created successfully";
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error creating city controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
}

