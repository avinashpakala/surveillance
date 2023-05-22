
const Sequelize = require('sequelize');

const seq = require('../util/database')

const user = require('./user')

const billing =seq.define('billing',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId:{
      type: Sequelize.UUID
  },
    model:{
        type:Sequelize.STRING,
        allowNull:false
    },
    storageCharges:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    statementDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    dueDate:{
      type: Sequelize.DATE,
      allowNull: false
   },amount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },supportFee:{
      type: Sequelize.INTEGER,
      allowNull: false
  }


});
billing.hasOne(user, { foreignKey: 'id' });
module.exports = billing;


