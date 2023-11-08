// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTERGER, NOT_NULL, AUTO_INCREMENT, PRIMARY_KEY,
    },
    product_name: {
      type: DataTypes.STRING, NOT_NULL,
    },  
    price: {
      type: DataTypes.DECIMAL (10,2), NOT_NULL, VALIDATE: {isDecimal: true},
    },
    stock: {
      type: DataTypes.INTERGER, NOT_NULL, DEFAULT_VALUE:(10), VALIDATE: {isNumeric: true},
    },
    category_id: {
      type: DataTypes.INTERGER, REFERENCES: {model: 'category', key: 'id'},
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;