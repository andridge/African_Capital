module.exports = (sequelize, DataTypes) => {
  
  const attachments = sequelize.define('attachments', {
    
    personlId: DataTypes.STRING,
    personKraPin: DataTypes.STRING,
    personPhoto: DataTypes.STRING,
    personPayslip: DataTypes.STRING,
    IntroLetterTsc: DataTypes.STRING
  }, {});
  attachments.associate = function(models) {
    // associations can be defined here
    attachments.belongsTo(models.Person,{foreignKey:'attachmentsId'});
   // Person.hasOne(models.Loan, { foreignKey:'loanId'});
  };
  return attachments;
};