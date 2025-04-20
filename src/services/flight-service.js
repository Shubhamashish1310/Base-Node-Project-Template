const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');
const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        console.log("Flight Service layer");
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = error.errors.map((err) => err.message).join(", ");
            console.log("explanation", explanation);
            throw new AppError(explanation, error.status, true);
        }
        console.log("in service error service", error);
        throw new AppError(error.message, error.status, true);
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilters = [];

    // Trip filter
    if (query.trip) {
        const trip = query.trip.split("-");
        if (trip.length === 2 && trip[0] && trip[1]) {
            const departureAirportId = trip[0];
            const arrivalAirportId = trip[1];
            customFilter = {
                departureAirportId,
                arrivalAirportId
            };
        } else {
            throw new AppError("Invalid trip format. Expected format: 'MUM-DEL'", 400, true);
        }
    }

    // Price filter
    if (query.price) {
        const price = query.price.split("-");
        if (price.length === 2 && price[0] && price[1]) {
            const minPrice = price[0];
            const maxPrice = price[1];
            customFilter = {
                ...customFilter,
                price: {
                    [Op.gte]: minPrice,
                    [Op.lte]: maxPrice
                }
            };
        } else {
            throw new AppError("Invalid price format. Expected format: '100-500'", 400, true);
        }
    }

    // Travellers filter
    if (query.travellers) {
        const travellers = query.travellers.split("-");
        if (travellers.length === 2 && travellers[0] && travellers[1]) {
            const minTravellers = travellers[0];
            const maxTravellers = travellers[1];
            customFilter = {
                ...customFilter,
                totalSeat: {
                    [Op.gte]: minTravellers,
                    [Op.lte]: maxTravellers
                }
            };
        } else {
            throw new AppError("Invalid travellers format. Expected format: '1-5'", 400, true);
        }
    }

    // Trip Date filter
    if (query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [
                new Date(query.tripDate).setHours(0, 0, 0, 0),
                new Date(query.tripDate).setHours(23, 59, 59, 999)
            ]
        };
    }

    // Sort filter
    // Sort filter
if (query.sort) {
    const param = query.sort.split(',');
    const sortFilter = param.map((sort) => sort.split(':'));
    sortFilters = sortFilter;
}


    // Fetch flights
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilters);
        return flights;
    } catch (error) {
        if (error.statusCode === 404) {
            throw new AppError(error.message, error.status, true);
        }
        throw new AppError("Internal Server Error", 500, true);
    }
}


module.exports = {
    createFlight,
    getAllFlights,
};
