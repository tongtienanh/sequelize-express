'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.createTable('playlist', {
          id:{
            type:Sequelize.DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true,
          },
          title: Sequelize.DataTypes.STRING,
          cover_image:Sequelize.DataTypes.STRING,
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
      await queryInterface.dropTable('playlist');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
