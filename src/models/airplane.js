'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
       
      });
      this.hasMany(models.Seat, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
       
      });
      this.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
        onDelete: 'CASCADE',
       
      });
    }
  }
  Airplane.init({
    modelNumber:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    capacity: {type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      }
    },
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};