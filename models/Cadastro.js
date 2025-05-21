import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Cadastro = connection.define('cadastro', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Cadastro.sync({ force: false });
export default Cadastro;