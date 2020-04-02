module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define('', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          post: {
            type: DataTypes.STRING,
            allowNull: true
          },
          created: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }
    });
    Art.associate = function (models) {
        Art.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

return Model
}