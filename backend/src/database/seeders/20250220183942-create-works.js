'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('works', [
      {
        client_id: 3,
        vehicle_id: 1,
        service_type: 'Orçamento',
        start_day: new Date(),
        end_day: new Date(),
        finished: true,
        payment_form: 'Cartão',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 3,
        vehicle_id: 1,
        service_type: 'Serviço',
        start_day: new Date(),
        end_day: new Date(),
        finished: true,
        payment_form: 'Pix',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('works', null, {});
  }
};
