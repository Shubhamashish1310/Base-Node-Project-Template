

function validateAirportRequest(req, res, next) {
    const { name, cityId, code, address } = req.body;
    if (!name || !cityId || !code || !address) {
        return res.status(400).json({
            error: "All fields are required",
        });
    }
    next();
}

function validateAirportId(req, res, next) {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({
            error: "ID is required",
        });
    }
    if (isNaN(id)) {
        return res.status(400).json({
            error: "ID must be a number",
        });
    }
    next();
}

module.exports = {
    validateAirportRequest,
    validateAirportId,
};