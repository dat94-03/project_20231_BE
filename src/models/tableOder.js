'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableOder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableOder.init({
    oderID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    tableId : DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TableOder',
  });
  return TableOder;
};