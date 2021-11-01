const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  
  static associate(db) {
    db.Comment.belongsTo(db.User, { as: 'user', foreignKey: 'user_id', targetKey: 'id' });
    db.Comment.belongsTo(db.Post, { as: 'post', foreignKey: 'post_id', targetKey: 'id' });
  }
}