const {Sequelize} = require('sequelize');
const CrudRepository = require('./crud-repository');
const { Flight,Airplane,Airport,City } = require('../models');
const {addRowLockOnFlights} = require('./queries');
const db = require('../models');
const AppError = require('../utils/errors/app-error');
class FlightRepository extends CrudRepository {
    constructor() {
        console.log("Inside FlightRepository constructor");
        super(Flight);
    }
    async getAllFlights(filter, sort) {
        try {
            const response = await Flight.findAll({
                where: filter,
                order: sort,
               include: [
                    {
                        model: Airplane,
                       required: true,
                        as: 'airplane_details',
                       
                    },
                    {
                        model: Airport,
                        as: 'departureAirport',
                        on: {
                           col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'), Sequelize.col('departureAirport.code')),
                        },
                       
                        required: true,
                    },
                    {
                        model: Airport,
                        as: 'arrivalAirport',
                        on: {
                           col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'), Sequelize.col('arrivalAirport.code')),
                        },
                        include: [
                            {
                                model: City,
                                required: true,
                            },
                        ],
                       
                        required: true,
                    },
                   
                ],
            });
            return response;
        } catch (error) {
            console.error("Error in getAllFlights:", error);
            throw error;
        }
    }

    async updateRemainingSeats(flightId, seats,dec=true) {
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const flight =await Flight.findByPk(flightId);
             if(+dec){
         await flight.decrement('totalSeat', { by: seats}, { transaction: transaction }); 
             }else{
                await flight.increment('totalSeat', { by: seats, where: { id: flightId } }, { transaction: transaction });       
             }
             await transaction.commit();
             await flight.save();
               return flight;
        } catch (error) {
            await transaction.rollback();
            console.error("Error in updateRemainingSeats:", error);
            throw AppError("Unable to update remaining seats", 500, true);
        }
       
}
}

module.exports = FlightRepository;
