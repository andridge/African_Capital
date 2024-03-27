module.exports = (sequelize, DataTypes) => {
  
  const oustanding = sequelize.define('oustanding', {
   
    institutionName: DataTypes.STRING,
    amount: DataTypes.STRING,
    balance: DataTypes.STRING,
    monthlyInstalment: DataTypes.STRING
  }, {});
  oustanding.associate = function(models) {
    // associations can be defined here
    oustanding.belongsTo(models.Person,{foreignKey:'oustandingId'})
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return oustanding;
};