const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTERGER, NOT_NULL, AUTO_INCREMENT, PRIMARY_KEY,
    },
    product_id: {
      type: DataTypes.INTERGER, REFERENCES: {model: 'product', key: 'id'},
    },
    tag_id: {
      type: DataTypes.INTERGER, REFERENCES: {model: 'tag', key: 'id'},
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
