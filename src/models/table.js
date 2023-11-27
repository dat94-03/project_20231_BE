'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Table.init({
    tableId : DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    branchId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};