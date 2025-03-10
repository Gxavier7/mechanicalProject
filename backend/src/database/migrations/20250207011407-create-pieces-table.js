'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pieces', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      work_id: {
        allowNull: false,
        references: { model: 'works', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER
      },
      piece: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
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
    await queryInterface.dropTable('pieces');
  }
};
