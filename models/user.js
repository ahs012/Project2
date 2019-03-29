module.exports = function (sequelize, DataTypes) {
   var user = sequelize.define("user",
      {
         name: { type: DataTypes.STRING },
         email: { type: DataTypes.STRING },
         location: { type: DataTypes.STRING },
         artType: { type: DataTypes.STRING },
         bio: { type: DataTypes.TEXT }
      }
   );

   return user;
};