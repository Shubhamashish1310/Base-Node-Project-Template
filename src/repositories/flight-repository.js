const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor(){
        console.log("Inside FlightRepository constructor");
        super(Flight);
    }
}

module.exports = FlightRepository;