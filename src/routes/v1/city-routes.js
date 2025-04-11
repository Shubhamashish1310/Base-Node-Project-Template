const express = require("express");
const  {CityController}= require("../../controllers");
const {CityMiddleware} = require("../../middlewares");
const router = express.Router();

console.log("Inside city-routes.js");
// /api/v1/cities
router.post('/', CityMiddleware.validateCityRequest,CityController.createCity);
// /api/v1/cities
router.get('/', CityController.getCities);

// /api/v1/cities/:id
router.get('/:id', CityController.getCityById);

router.delete('/:id', CityController.destroyCity);

router.put('/:id',CityMiddleware.validateCityRequest, CityController.updateCity);


module.exports = router;