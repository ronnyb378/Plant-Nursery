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
      ,
      {
        UserId: 2,
        name: "Green Algae",
        healthrating: 3,
        species: "Chrysophyta",
        nickname: "Pete",
        sun: "shade",
        waterfrequency: "daily",
        activegrowthperiod: "unknown",
        soiltype: "none",
        fertilizer: "none",
        plantdescription: "slimy looking",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "bathtub",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        name: "Sunflowers",
        healthrating: 5,
        species: "Flower",
        nickname: "Sean",
        sun: "full sun",
        waterfrequency: "daily/when soil dry",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "Very pretty and blooming",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "outside room window",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        name: "Basil",
        healthrating: 5,
        species: "Herb",
        nickname: "Herbert",
        sun: "some sun",
        waterfrequency: "every 3 days",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "lots of fronds, bushy, airy",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "kitchen sill",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        name: "Gingko",
        healthrating: 5,
        species: "Tree",
        nickname: "ginger",
        sun: "frequent sun",
        waterfrequency: "daily/when soil dry",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "lots of fronds, bushy, airy",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "front lawn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        name: "Tulips",
        healthrating: 4,
        species: "gesneriana",
        nickname: "Cutie",
        sun: "sun",
        waterfrequency: "every couple days",
        activegrowthperiod: "unknown",
        soiltype: "mixed",
        fertilizer: "none",
        plantdescription: "lots of fronds, bushy, airy",
        dateacquired: "2021-09-13 10:44:16.166-04",
        location: "front porch",
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
