'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      vehicle: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      plate: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      brand: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      color: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      kilometers: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      fuel: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      client_id: {
        allowNull: false,
        references: { model: 'clients', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER
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
    await queryInterface.dropTable('vehicles');
  }
};
