module.exports = function (sequelize, DataTypes) {
    var art = sequelize.define("art",
       {
          user_name: { type: DataTypes.STRING },
          title: { type: DataTypes.STRING },
          art_medium: { type: DataTypes.STRING },
          art_path: { type: DataTypes.STRING },
       }
    );
 
    return art;
 };