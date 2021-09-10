'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plant.belongsTo(models.User)
    }
  };
  Plant.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    healthrating: DataTypes.INTEGER,
    species: DataTypes.STRING,
    nickname: DataTypes.STRING,
    sun: DataTypes.STRING,
    waterfrequency: DataTypes.STRING,
    activegrowthperiod: DataTypes.STRING,
    soiltype: DataTypes.STRING,
    fertilizer: DataTypes.STRING,
    plantdescription: DataTypes.STRING,
    dateacquired: DataTypes.DATE,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};