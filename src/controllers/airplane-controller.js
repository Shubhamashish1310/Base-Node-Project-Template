
const {AirplaneService} = require("../services");

async function createAirplane(req, res) {
    try {
        console.log("Creating airplane with data:", req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        return res.status(201).json({
            success: true,
            message: "Airplane created successfully",
            data: airplane,
            error: null,
        });
    } catch (error) {
        return res.status(500).json({error: error.message,
            success: false,
            message: "Error creating airplane controller",
        });
    }
}

module.exports = {
    createAirplane
};