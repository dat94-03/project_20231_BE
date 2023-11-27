'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Table', {
        // tableId : DataTypes.INTEGER,
        // roomId: DataTypes.INTEGER,
        // branchId: DataTypes.INTEGER,
        // price: DataTypes.INTEGER,
        // description: DataTypes.TEXT,
        // state: DataTypes.STRING
      tableId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,

      },
      branchId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Table');
  }
};