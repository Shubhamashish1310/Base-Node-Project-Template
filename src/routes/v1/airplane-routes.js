const express = require("express");
const  {AirplaneController}= require("../../controllers");
 const {Airplanemiddleware} = require("../../middlewares");
const router = express.Router();
console.log("Inside airplane-routes.js");
// /api/v1/airplanes
router.post('/',Airplanemiddleware.validateAirplaneRequest, AirplaneController.createAirplane);

module.exports = router;