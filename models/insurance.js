module.exports = (sequelize, DataTypes) => {
  
  const insurance = sequelize.define('insurance', {
   
    working: DataTypes.BOOLEAN,
    ailment: DataTypes.BOOLEAN
  }, {});
  insurance.associate = function(models) {
    // associations can be defined here
    insurance.belongsTo(models.Person,{foreignKey:'insuranceId'})
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return insurance;
};