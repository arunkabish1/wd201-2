'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Todos','userId',{
      type: Sequelize.DataTypes.INTEGER
    })
   await queryInterface.addConstraint('Todos',{
      fields: ['userId'],
      type: 'foreign key',
      references:{
        table:'Users',
        field:'id'
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Todos','UserId')
  }
};
