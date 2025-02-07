'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('services', { 
      id: {
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      work_id: {
        allowNull: false,
        references: { model: 'works', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      value: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT
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
    await queryInterface.dropTable('services');
  }
};
