module.exports = (sequelize, DataTypes) => {
  
  const employment = sequelize.define('employment', {
   
    jobTitle: DataTypes.STRING,
    dateOfEmplyoment: DataTypes.DATE,
    emplyeeType: DataTypes.STRING,
    employerFirstName: DataTypes.STRING,
    employerSecondName: DataTypes.STRING,
    employerTel: DataTypes.STRING,
    physicalAddress: DataTypes.STRING
  }, {});
  employment.associate = function(models) {
    // associations can be defined here
    employment.belongsTo(models.Person,{foreignKey:'employmentId'});
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return employment;
};