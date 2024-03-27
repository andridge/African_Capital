module.exports = (sequelize, DataTypes) => {
  
  const loan = sequelize.define('loan', {
    
    loanAmount: DataTypes.STRING,
    purposeOfLoan: DataTypes.STRING,
    repaymentMonths: DataTypes.STRING
  }, {});
  loan.associate = function(models) {
    // associations can be defined here
    loan.belongsTo(models.Person,{foreignKey:'loanId'})
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return loan;
};