function validateAirplaneRequest(req, res, next) {
    const { modelNumber, capacity } = req.body;
    if (!modelNumber || !capacity) {
        return res.status(400).json({
                success: false,
                message: 'Model number and capacity are required',
                error: 'Model number and capacity are required'
        });
    }
    next();
}

module.exports = { validateAirplaneRequest };