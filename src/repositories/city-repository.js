const CrudRepository = require('./crud-repository');
const {City} = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        console.log("Inside CityRepository constructor");
        super(City);
    }
    // can write custom methods here
}

module.exports = CityRepository;