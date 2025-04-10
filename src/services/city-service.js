const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();
async function createCity(data) {
    try {
        console.log("City Service layer");
        const city = await cityRepository.create(data);
        return city;
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
    createCity,
}