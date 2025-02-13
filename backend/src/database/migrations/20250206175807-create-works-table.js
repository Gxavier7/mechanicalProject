'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('works', { 
      id: {
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      client_id: {
        allowNull: false,
        references: { model: "clients", key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER
      },
      vehicle_id: {
        allowNull: false,
        references: { model: "vehicles", key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER
      },
      service_type: {
        allowNull: false, 
        type: Sequelize.DataTypes.STRING
      },
      start_day: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      end_day: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      finished: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      payment_form: {
        allowNull: false, 
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('works');
    
  }
};

