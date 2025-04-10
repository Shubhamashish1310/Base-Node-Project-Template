const express = require("express");
const  {CityController}= require("../../controllers");
const {CityMiddleware} = require("../../middlewares");
const router = express.Router();

console.log("Inside city-routes.js");
// /api/v1/cities
router.post('/', CityMiddleware.validateCityRequest,CityController.createCity);
// /api/v1/cities
// router.get('/', CityControllerController.getCities);

// // /api/v1/cities/:id
// router.get('/:id', CityControllerController.getCityById);

// router.delete('/:id', CityControllerController.destroyCity);

// router.put('/:id', CityControllerController.updateCity);


module.exports = router;