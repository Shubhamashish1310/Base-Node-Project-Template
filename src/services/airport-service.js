const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        console.log("Airport Service layer");
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            let explanation = error.errors.map((err) => {
                return err.message;
            });
            explanation = explanation.join(", ");
            console.log("explanation", explanation);
            throw new AppError(explanation, error.status, true);
        }
        console.log("in servicve error service", error);
        throw error;
    }
}

async function getAirports() {
    try {
        console.log("Airport Service layer");
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
            throw new AppError(error.message, error.status, true);
        }
    }

async function getAirportById(id) {
    try {
        console.log("Airport Service layer");
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode === 404) {
            throw new AppError(error.message, error.status, true);
        }
    }
    }

async function destroyAirport(id) { 
    try {
        console.log("Airport Service layer");
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode === 404) {
            throw new AppError(error.message, error.status, true);
        }
    }
}

// async function updateAirport(id, data) {
//     try {
//         console.log("Airport Service layer");
//         const airport = await airportRepository.update(id, data);
//         return airport;
//     } catch (error) {
//         if(error.statusCode === 404) {
//             throw new AppError(error.message, error.status, true);
//         }
//     }
// }
// async function getAirportsByCityId(cityId) {
//     try {
//         console.log("Airport Service layer");
//         const airports = await airportRepository.getByCityId(cityId);
//         return airports;
//     } catch (error) {
//         if(error.statusCode === 404) {
//             throw new AppError(error.message, error.status, true);
//         }
//     }
// }

// async function getAirportByCode(code) {
//     try {
//         console.log("Airport Service layer");
//         const airport = await airportRepository.getByCode(code);
//         return airport;
//     } catch (error) {
//         if(error.statusCode === 404) {
//             throw new AppError(error.message, error.status, true);
//         }
//     }
// }
// async function getAirportByName(name) {
//     try {
//         console.log("Airport Service layer");
//         const airport = await airportRepository.getByName(name);
//         return airport;
//     } catch (error) {
//         if(error.statusCode === 404) {
//             throw new AppError(error.message, error.status, true);
//         }
//     }
// }

module.exports = {
    createAirport,
    getAirports,
    getAirportById,
    destroyAirport,
    // updateAirport,
    // getAirportsByCityId,
    // getAirportByCode,
    // getAirportByName
};
