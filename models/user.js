module.exports = function (sequelize, DataTypes) {
   var user = sequelize.define("user",
      {
         user_name:{type: DataTypes.STRING},
         name: { type: DataTypes.STRING },
         email: { type: DataTypes.STRING },
         location: { type: DataTypes.STRING },
         artType: { type: DataTypes.STRING },
         bio: { type: DataTypes.TEXT }
      }
   );

   return user;
};