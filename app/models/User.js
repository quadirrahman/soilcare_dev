const sequelize = require("../config/dbConnection");
const {Sequelize, DataTypes} = require('sequelize')

const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_type: {
      type: DataTypes.ENUM('superadmin', 'admin', 'agent', 'user', 'individual_customer', 'corporate_customer', 'govt_agri_customer', 'govt_tea_customer'),
      allowNull: false,
    },
    user_fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_Mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Active', 'Inactive'),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_by: {
      type: DataTypes.INTEGER,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    user_secret: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'users',
  });
  
module.exports = User