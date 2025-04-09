const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        console.log("Inside AirplaneRepository constructor");
        super(Airplane);
    }
    // can write custom methods here
}

module.exports = AirplaneRepository;