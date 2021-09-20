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
        PlantId: 1,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PlantId: 2,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PlantId: 3,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PlantId: 4,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        PlantId: 5,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        PlantId: 5,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        PlantId: 6,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        PlantId: 7,
        type: 'mixed',
        notes: 'water 3 times a week',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        PlantId: 8,
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
