const {Sequelize} = require('sequelize');
const CrudRepository = require('./crud-repository');
const { Flight,Airplane,Airport,City } = require('../models');
const {addRowLockOnFlights} = require('./queries');
const db = require('../models')
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
        await db.sequelize.query(addRowLockOnFlights(flightId));
     const flight =await Flight.findByPk(flightId);
      if(+dec){
  await flight.decrement('totalSeat', { by: seats}); 
      }else{
         await flight.increment('totalSeat', { by: seats, where: { id: flightId } });       
      }
      await flight.save();
        return flight;
}
}

module.exports = FlightRepository;
