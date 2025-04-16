const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepository {
    constructor() {
        console.log("Inside AirportRepository constructor");
        super(Airport);
    }
    // can write custom methods here
}

module.exports = AirportRepository;