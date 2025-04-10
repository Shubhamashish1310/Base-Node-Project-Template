const express = require("express");
const  {AirplaneController}= require("../../controllers");
 const {Airplanemiddleware} = require("../../middlewares");
const router = express.Router();
console.log("Inside airplane-routes.js");
// /api/v1/airplanes
router.post('/',Airplanemiddleware.validateAirplaneRequest, AirplaneController.createAirplane);
// /api/v1/airplanes/
router.get('/', AirplaneController.getAirplanes);
// /api/v1/airplanes/:id
router.get('/:id', AirplaneController.getAirplaneById);

router.delete('/:id', AirplaneController.destroyAirplane);


router.put('/:id',Airplanemiddleware.validateAirplaneRequest ,AirplaneController.updateAirplane);

module.exports = router;