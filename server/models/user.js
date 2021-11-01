const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.CHAR(60),
        allowNull: true,
        unique: false
      },
      nickname: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      profile: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.User.hasMany(db.Comment, { as: 'comments', foreignKey: 'user_id', sourceKey: 'id' });
    db.User.hasMany(db.Post, { as: 'posts', foreignKey: 'user_id', sourceKey: 'id' });
  }
}