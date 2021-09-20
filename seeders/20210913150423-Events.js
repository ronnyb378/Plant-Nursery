'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("Events", [
      {
        plantId: 1,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plantId: 2,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plantId: 3,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plantId: 4,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        plantId: 5,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        plantId: 5,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        plantId: 6,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        plantId: 7,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        plantId: 8,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
