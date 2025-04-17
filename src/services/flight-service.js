const {FlightRepository} = require('../repositories'); 
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        console.log("Flight Service layer");
        const flight = await flightRepository.create(data);
        return flight;
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
        throw new AppError(error.message, error.status, true);
    }
}

module.exports = {
    createFlight,  
};