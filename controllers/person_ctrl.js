const{Person,Sequelize}  = require("../models");
let self = {};
self.delete = async (req,res)=>{
    try{
        //
        let nationalId =req.params.nationalId;
        let data = await Person.destroy({
            where:{
                nationalId:nationalId
            }
        })
        return res.json({
            status:"ok",
            data:data
        })

    }catch(error){
          // Handle errors properly
          console.error(error);
          return res.status(500).json({
              status: "error",
              data: error.message // Return error message instead of the entire error object
          });
    }
}
self.update = async (req,res)=>{
    try{
        //
        let nationalId = req.params.nationalId;
        let body = req.body;
        let data = await Person.update(body,{
            where:{
                nationalId:nationalId
            }
        })
        return res.json({
            status:"ok",
            data:data,

        })

    }catch(error){
          // Handle errors properly
          console.error(error);
          return res.status(500).json({
              status: "error",
              data: error.message // Return error message instead of the entire error object
          });
    }
}
self.get = async (req,res)=>{
    try{
        let nationalId = req.params.nationalId;
        let data = await Person.findOne({
            atrributes:["firstName","lastName","nationality","kraPin","postalAddress","Town","pfNo","dateOfBirth","telephone","physicalAddress","email","password","nationalId"],
            where:{
                nationalId:nationalId,
            },
        });
        return res.json({
            status:"ok",
            data:data,
            
        })
    }catch(error){
          // Handle errors properly
          console.error(error);
          return res.status(500).json({
              status: "error",
              data: error.message // Return error message instead of the entire error object
          });
    }
}
self.add = async (req, res) => {
    try {
        let body = req.body;
        let data = await Person.create(body); // Make sure to await the creation of the Person record
        return res.json({
            status: "ok",
            data: data
        });
    } catch (error) {
        // Handle errors properly
        console.error(error);
        return res.status(500).json({
            status: "error",
            data: error.message // Return error message instead of the entire error object
        });
    }
};

module.exports = self;
