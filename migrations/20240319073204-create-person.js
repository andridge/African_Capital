'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      marital: {
        type: Sequelize.STRING
      },
      nationalId: {
        type: Sequelize.STRING
      },
      kraPin: {
        type: Sequelize.STRING
      },
      postalAddress: {
        type: Sequelize.STRING
      },
      Town: {
        type: Sequelize.STRING
      },
      pfNo: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      telephone: {
        type: Sequelize.STRING
      },
      phyiscalAddress: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      attachmentsId: {
        type: Sequelize.STRING
      },
      employmentId: {
        type: Sequelize.STRING
      },
      financeId: {
        type: Sequelize.STRING
      },
      gurantorsId: {
        type: Sequelize.STRING
      },
      loanId: {
        type: Sequelize.STRING
      },
      oustandingId: {
        type: Sequelize.STRING
      },
      insuranceId: {
        type: Sequelize.STRING
      },
      nextOfKinId: {
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
    await queryInterface.dropTable('People');
  }
};