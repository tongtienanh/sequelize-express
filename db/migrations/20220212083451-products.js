'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('products', {
        id:Sequelize.DataTypes.INTEGER,
        title: Sequelize.DataTypes.STRING,
        price: Sequelize.DataTypes.STRING,
        description:Sequelize.DataTypes.STRING,
        published:Sequelize.DataTypes.STRING,
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
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('products');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
