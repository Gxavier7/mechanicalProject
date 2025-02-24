'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        name: 'Gabriel',
        phone: '(31) 99876-5432',
        birth: new Date(),
        email: 'admin@email.com',
        address: "Rua 1",
        register: "123.456.789-01",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Lucas',
        phone: '(31) 92345-6789',
        birth: new Date(),
        email: 'user@email.com',
        address: "Rua 1",
        register: "123.456.789-01",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
