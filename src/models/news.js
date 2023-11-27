'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    newsId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    publicDate : DataTypes.DATE,
    content: DataTypes.TEXT,
    thumbnail: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};