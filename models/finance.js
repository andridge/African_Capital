module.exports = (sequelize, DataTypes) => {
  
  const finance = sequelize.define('finance', {
   
    bankName: DataTypes.STRING,
    accountDetails: DataTypes.STRING,
    accountNumber: DataTypes.STRING,
    grossSallary: DataTypes.STRING,
    netSalary: DataTypes.STRING,
    preferredMode: DataTypes.STRING,
    branch: DataTypes.STRING
  }, {});
  finance.associate = function(models) {
    // associations can be defined here
    finance.belongsTo(models.Person,{foreignKey:'financeId'});
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return finance;
};