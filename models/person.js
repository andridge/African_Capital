module.exports = (sequelize, DataTypes) => {
  
  const Person = sequelize.define('Person', {
  
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    marital: DataTypes.STRING,
    nationalId: DataTypes.STRING,
    kraPin: DataTypes.STRING,
    postalAddress: DataTypes.STRING,
    Town: DataTypes.STRING,
    pfNo: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    telephone: DataTypes.STRING,
    phyiscalAddress: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    attachmentsId: DataTypes.INTEGER,
    employmentId: DataTypes.INTEGER,
    financeId: DataTypes.INTEGER,
    gurantorsId: DataTypes.INTEGER,
    loanId: DataTypes.INTEGER,
    oustandingId: DataTypes.INTEGER,
    insuranceId: DataTypes.INTEGER,
    nextOfKinId: DataTypes.INTEGER,
  }, {});
   Person.associate = function(models) {
    // associations can be defined here
    //Person.belongsTo(models.Group,{foreignKey:'groupId'});
    Person.hasOne(models.attachments, { foreignKey:'attachmentsId'});
    Person.hasOne(models.employment, { foreignKey:'employmentId'});
    Person.hasOne(models.finance, { foreignKey:'financeId'});
    Person.hasMany(models.gurantors, { foreignKey:'gurantorsId'});
    Person.hasOne(models.loan, { foreignKey:'loanId'});
    Person.hasOne(models.insurance, { foreignKey:'insuranceId'});
    Person.hasMany(models.nextOfKin, { foreignKey:'nextOfKinId'});
    Person.hasMany(models.oustanding, { foreignKey:'oustandingId'});
  };
  return Person;
};