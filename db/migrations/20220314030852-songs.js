'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('songs', {
        id:{
          type:Sequelize.DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
          primaryKey:true,
        },
        title: Sequelize.DataTypes.STRING,
        song_url: Sequelize.DataTypes.STRING,
        song_type: Sequelize.DataTypes.INTEGER,
        create_by: Sequelize.DataTypes.INTEGER,
        cover_image: Sequelize.DataTypes.STRING,
        author_id: Sequelize.DataTypes.INTEGER,
        lyric: Sequelize.DataTypes.STRING,
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
      await queryInterface.dropTable('songs');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
