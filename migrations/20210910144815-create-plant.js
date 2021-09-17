'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      healthrating: {
        type: Sequelize.INTEGER
      },
      species: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      sun: {
        type: Sequelize.STRING
      },
      waterfrequency: {
        type: Sequelize.STRING
      },
      activegrowthperiod: {
        type: Sequelize.STRING
      },
      soiltype: {
        type: Sequelize.STRING
      },
      fertilizer: {
        type: Sequelize.STRING
      },
      plantdescription: {
        type: Sequelize.STRING
      },
      dateacquired: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      photo: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Plants');
  }
};