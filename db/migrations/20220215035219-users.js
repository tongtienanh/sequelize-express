'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('users', {
        id:Sequelize.DataTypes.INTEGER,
        userName: Sequelize.DataTypes.STRING,
        password: Sequelize.DataTypes.STRING,
        isBetaMember: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('users');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
