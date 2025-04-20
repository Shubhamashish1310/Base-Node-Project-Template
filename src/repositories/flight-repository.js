const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');


class FlightRepository extends CrudRepository {
    constructor() {
        console.log("Inside FlightRepository constructor");
        super(Flight);
    }
    async getAllFlights(filter, sort) {
        try {
            const response = await Flight.findAll({
                where: filter,
                order: sort
            });
            return response;
        } catch (error) {
            console.error("Error in getAllFlights:", error);
            throw error;
        }
    }
}
module.exports = FlightRepository;