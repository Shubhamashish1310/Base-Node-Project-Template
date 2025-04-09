const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
    try {
        console.log("Creating airplane with data:", data);
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.log("in servicve error service", error);
        throw error;
    }
}
module.exports = {
    createAirplane
}