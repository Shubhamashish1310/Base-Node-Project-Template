const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
    try {
        console.log("Airplane Service layer");
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
module.exports = {
    createAirplane
}