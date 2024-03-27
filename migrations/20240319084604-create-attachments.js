'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attachments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PersonId: {
        type: Sequelize.STRING
      },
      personalId: {
        type: Sequelize.STRING
      },
      personKraPin: {
        type: Sequelize.STRING
      },
      personPhoto: {
        type: Sequelize.STRING
      },
      personPayslip: {
        type: Sequelize.STRING
      },
      IntroLetterTsc: {
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
    await queryInterface.dropTable('attachments');
  }
};