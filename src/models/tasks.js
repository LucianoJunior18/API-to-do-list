'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "O título não pode ser vazio"}
      }
  },
    description: { 
    type: DataTypes.TEXT,
    allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "in_progress", "done"]],
          msg: "Status inválido. Os valores permitidos são: pending, in_progress, done"
        }
      }
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
      isDate: { msg: "A data deve ser uma data válida" }
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas'
  });

  return Tarefa;
};