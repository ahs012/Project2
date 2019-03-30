module.exports = function (sequelize, DataTypes) {
    var jobs = sequelize.define("jobs",
       {
          position: { type: DataTypes.STRING },
          name: { type: DataTypes.STRING },
          location: { type: DataTypes.STRING },
          type: { type: DataTypes.STRING },
          startDate: {type: DataTypes.INTEGER},
          endDate:{type: DataTypes.INTEGER},
          contact:{type: DataTypes.STRING}
       }
    );
 
    return jobs;
 };