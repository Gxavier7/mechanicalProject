'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        work_id: 1,
        description: "Alinhamento",
        value: 156.95,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        work_id: 2,
        description: "Troca pastilha de freio",
        value: 110.90,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};
