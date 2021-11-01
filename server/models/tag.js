const Sequelize = require('sequelize');

module.exports = class Tag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'Tag',
      tableName: 'tags',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Tag.belongsToMany(db.Post, { as: 'posts', through: 'post_tags', timestamps: false, foreignKey: 'tag_id' });
  }
}