'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.UUID,
        unique:true,
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING,
        unique:true,
      allowNull: false
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_image: {
        type: Sequelize.BLOB("long")
      },
      total_orders: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE
      },
      last_logged_in: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};