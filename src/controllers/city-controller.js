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

async function getCities(req, res) {
    try {
        console.log("Fetching all cities");
        const cities = await CityService.getCities();
        SuccessResponse.data = cities;
        SuccessResponse.message = "Cities fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching cities controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function getCityById(req, res) {
    try {
        console.log("Fetching city by ID");
        const city = await CityService.getCityById(req.params.id);
        SuccessResponse.data = city;
        SuccessResponse.message = "City fetched successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error fetching city by ID controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function destroyCity(req, res) {
    try {
        console.log("Deleting city by ID");
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        SuccessResponse.message = "City deleted successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error deleting city by ID controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

async function updateCity(req, res) {
    try {
        console.log("Updating city by ID");
        const city = await CityService.updateCity(req.params.id, req.body);
        SuccessResponse.data = city;
        SuccessResponse.message = "City updated successfully";
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Error updating city by ID controller";
        ErrorResponse.error = error.message;
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getCities,
    getCityById,
    destroyCity,
    updateCity,
}

