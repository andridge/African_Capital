module.exports = (sequelize, DataTypes) => {
  
  const nextOfKin = sequelize.define('nextOfKin', {
    
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    relationship: DataTypes.STRING,
    postalAddress: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    Town: DataTypes.STRING,
    country: DataTypes.STRING,
    telephoneNo: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  nextOfKin.associate = function(models) {
    // associations can be defined here
    nextOfKin.belongsTo(models.Person,{foreignKey:'nextOfKinId'})
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return nextOfKin;
};