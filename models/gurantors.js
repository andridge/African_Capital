module.exports = (sequelize, DataTypes) => {
  
  const gurantors = sequelize.define('gurantors', {
    
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    organisation: DataTypes.STRING,
    postalAddress: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {});
  gurantors.associate = function(models) {
    // associations can be defined here
    gurantors.belongsTo(models.Person,{foreignKey:'gurantorsId'})
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return gurantors;
  
};