'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Room', {
      
      roomNumber: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      allowSmoke: {
        type: Sequelize.BOOLEAN
      },
      haveStaff: {
        type: Sequelize.BOOLEAN
      },
      branchId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Room');
  }
};