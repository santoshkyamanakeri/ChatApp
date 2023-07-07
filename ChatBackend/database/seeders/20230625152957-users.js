"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "kenaa1@example.com",
        password: bcrypt.hashSync('secret', 10),
      },
      {
        firstName: "Sam",
        lastName: "Smith",
        email: "sam.smith1@example.com",
        password: "secret",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe1@example.com",
        password: "secret",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
