'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pieces', [
      {
        work_id: 2,
        piece: "Pastilha de freio palio 2007",
        quantity: 4,
        value: 200,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        work_id: 3,
        piece: "Pneus",
        quantity: 4,
        value: 110.90,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pieces', null, {});
  }
};
