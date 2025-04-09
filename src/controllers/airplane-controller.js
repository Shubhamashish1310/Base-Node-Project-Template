
const {AirplaneService} = require("../services");
const {ErrorResponse,SuccessResponse} = require("../utils/common");

async function createAirplane(req, res) {
    try {
        console.log("Creating airplane with data:", req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Airplane created successfully";
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error creating airplane controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        console.log("Fetching all airplanes");
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Airplanes fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching airplanes controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
};