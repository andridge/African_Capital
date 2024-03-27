'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },  
      PersonId: {
        type: Sequelize.STRING
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      dateOfEmplyoment: {
        type: Sequelize.DATE
      },
      emplyeeType: {
        type: Sequelize.STRING
      },
      employerFirstName: {
        type: Sequelize.STRING
      },
      employerSecondName: {
        type: Sequelize.STRING
      },
      employerTel: {
        type: Sequelize.STRING
      },
      physicalAddress: {
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
    await queryInterface.dropTable('employments');
  }
};