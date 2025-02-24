'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicles', [{
      vehicle: 'Uno',
      plate: 'ABC-1234',
      brand: 'Fiat',
      year: '1990',
      color: 'Preta',
      kilometers: 123456,
      fuel: 'Gasolina',
      client_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
