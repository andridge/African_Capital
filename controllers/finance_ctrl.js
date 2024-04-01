const{finance,Sequelize} = require("../models");

let self = {}
self.delete = async (req,res)=>{
    try{
        let id  = req.params.id;
        let data = await finance.destroy({
            where:{
                id:id
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
self.update = async (req,res) =>{
    try{
        let id = req.params.id;
        let body = req.body;
        let data = await finance.update(body,{
            where:{
                id:id
            }
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
self.get = async (req,res)=>{
    try{
        let id = req.params.id;
        let data = await finance.findOne({
            attributes: ["bankName","accountDetails","accountNumber", "grossSallary","netSalary","preferredMode","branch"]
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
self.add =async(req,res)=>{
    try{
        let body = req.body;
        let data = await finance.create(body);
        return res.json({
            status: "ok",
            data: data
        });
    }catch (error) {
        // Handle errors properly
        console.error(error);
        return res.status(500).json({
            status: "error",
            data: error.message // Return error message instead of the entire error object
        });
    }
}
module.exports = self;