'use strict';
const {
  Model
} = require('sequelize');
const { Enums } = require('../utils/common');
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS } = Enums.SeatType;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
      });
    }
  }
  Seat.init({
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
     },
    type:{
      type: DataTypes.ENUM,
      values: [BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue: ECONOMY,
      allowNull: false,
      
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};