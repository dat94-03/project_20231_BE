'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Branchs', {
    //   branchId : DataTypes.INTEGER,
    // Address: DataTypes.STRING,
    // hotline: DataTypes.STRING,
    // time: DataTypes.DATE,
    // image: DataTypes.STRING
      branchId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branchName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      hotline: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Branchs');
  }
};