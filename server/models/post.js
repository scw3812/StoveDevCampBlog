const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: false,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
      },
      thumbnail: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  
  static associate(db) {
    db.Post.hasMany(db.Comment, { as: 'comments', foreignKey: 'post_id', sourceKey: 'id' });
    db.Post.belongsTo(db.User, { as: 'user', foreignKey: 'user_id', targetKey: 'id' });
    db.Post.belongsToMany(db.Tag, { as: 'tags', through: 'post_tags', timestamps: false, foreignKey: 'post_id' });
  }
}