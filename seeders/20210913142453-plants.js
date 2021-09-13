"use strict";

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
    return queryInterface.bulkInsert("Plants", [
      {
        UserId: 1,
        name: "Fern",
        healthrating: 5,
        species: "Fern",
        nickname: "Bob",
        sun: "shade",
        waterfrequency: "daily/when dry soil",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "lots of fronds, bushy, airy",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "porch corner",
        createdAt: new Date(),
        updatedAt: new Date(),
      } , 
      {
        UserId: 2,
        name: "Monstera",
        healthrating: 3,
        species: "Monstera",
        nickname: "Monty",
        sun: "part-shade",
        waterfrequency: "when dry soil",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "long stems, huge leaves that uncurl",
        dateacquired: "2018-10-13 10:44:16.166-04",
        location: "sunroom corner",
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        UserId: 2,
        name: "Fern",
        healthrating: 5,
        species: "Fern",
        nickname: "Sally",
        sun: "shade",
        waterfrequency: "daily/when dry soil",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "lots of fronds, bushy, airy",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "bathroom window",
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
  },
};
