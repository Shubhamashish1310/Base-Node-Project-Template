const {AirportService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');


async function createAirport(req, res) {
    try {
        console.log("Creating airport with data:", req.body);
        const airport = await AirportService.createAirport({
            name: req.body.name,
            cityId: req.body.cityId,
            code: req.body.code,
            address: req.body.address,
        });
        SuccessResponse.data = airport;
        SuccessResponse.message = "Airport created successfully";
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error creating airport controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        console.log("Fetching all airports");
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        SuccessResponse.message = "Airports fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching airports controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}


async function getAirportById(req, res) {
    try {
        console.log("Fetching airport by ID");
        const airport = await AirportService.getAirportById(req.params.id);
        SuccessResponse.data = airport;
        SuccessResponse.message = "Airport fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching airport by ID controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {   
    try {
        console.log("Deleting airport by ID");
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        SuccessResponse.message = "Airport deleted successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error deleting airport by ID controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirportById,
    destroyAirport,
};