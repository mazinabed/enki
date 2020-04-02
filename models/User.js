// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt");
// Creating our User model

module.exports = function(sequelize, DataTypes) {
  const Model = sequelize.define('User', {
    // The email cannot be null, and must be a proper email before creation
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
  
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
      
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [8, 16],
          msg: "Password must be between 8 and 16 characters long."
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
  
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    defaultValueBoolean: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models, {
      onDelete: "cascade"
    });
  };
  return Model
}
  


  // // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // User.addHook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
