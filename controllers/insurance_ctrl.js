const {insurance,Sequelize} = require("../models");

let self = {}
self.delete = async(req,res)=>{
    try{
        let id = req.params.id;
        let data = await insurance.destroy({
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
self.update = async(req,res)=>{
    try{
        let id  = req.params.id;
        let body = req.body;
        let data = await insurance.update(body,{
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
        let data = await insurance.findOne({
            attributes:["working","ailment"],
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

self.add = async (req,res) =>{
    try{
        let body = req.body;
        let data = await insurance.create(body);
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
module.exports  = self;