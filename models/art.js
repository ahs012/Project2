module.exports = function (sequelize, DataTypes) {
    var art = sequelize.define("art",
       {
          user: { type: DataTypes.STRING },
          name: { type: DataTypes.STRING },
          location: { type: DataTypes.STRING },
          art_medium: { type: DataTypes.STRING },
       }
    );
 
    return art;
 };