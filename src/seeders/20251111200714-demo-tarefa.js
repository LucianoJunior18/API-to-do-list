'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tarefas', [
      {
        title: 'Estudar Node.js',
        description: 'Praticar criação de API com Express',
        status: 'pending',
        dueDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Aprender Sequelize',
        description: 'Criar modelos e migrations',
        status: 'in_progress',
        dueDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Finalizar projeto To-Do API',
        description: 'Testar endpoints e corrigir bugs',
        status: 'done',
        dueDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});
  }
};
