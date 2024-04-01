var person_ctrl = require ("../controllers/person_ctrl");
var employment_ctrl = require("../controllers/employment_ctrl");
var finance_ctrl  = require("../controllers/finance_ctrl");
var gurantors_ctrl = require("../controllers/gurantors_ctrl");
var insurance_ctrl = require("../controllers/insurance_ctrl");
var loan_ctrl = require("../controllers/loan_ctrl");
var oustanding_ctrl  = require("../controllers/oustanding_ctrl");
var nextofkin_ctrl = require("../controllers/nextofkin_ctrl");


module.exports = function(express) {
    const route = express.Router();
    route.get("/",(req, res) => {
        res.json({ message: 'Hello from Express!' });
    })
    route.post("/add_person",person_ctrl.add);
    route.get("/get_person/:nationalId",person_ctrl.get);
    route.put("/update_person/:nationalId",person_ctrl.update);
    route.delete("/delete_person/:nationalId",person_ctrl.delete);
    
    route.post("/add_employment",employment_ctrl.add);
    route.get("/get_employment/:id",employment_ctrl.get);
    route.put("/update_employment/:id",employment_ctrl.update);
    route.delete("/delete_employment/:id",employment_ctrl.delete);
    
    route.post("/add_finance",finance_ctrl.add);
    route.get("/get_finance/:id",finance_ctrl.get);
    route.put("/update_finance/:id",finance_ctrl.update);
    route.delete("/delete_finance/:id",finance_ctrl.delete);

    route.post("/add_gurantors",gurantors_ctrl.add);
    route.get("/get_gurantors/:id",gurantors_ctrl.get);
    route.put("/update_gurantors/:id",gurantors_ctrl.update);
    route.delete("/delete_gurantors/:id",gurantors_ctrl.delete);
    
    route.post("/add_insurance",insurance_ctrl.add);
    route.get("/get_insurance/:id",insurance_ctrl.get);
    route.put("/update_insurance/:id",insurance_ctrl.update);
    route.delete("/delete_insurance/:id",insurance_ctrl.delete);
   
    route.post("/add_loan",loan_ctrl.add);
    route.get("/get_loan/:id",loan_ctrl.get);
    route.put("/update_loan/:id",loan_ctrl.update);
    route.delete("/delete_loan/:id",loan_ctrl.delete)

    route.post("/add_oustanding",oustanding_ctrl.add);
    route.get("/get_oustanding/:id",oustanding_ctrl.get);
    route.put("/update_oustanding/:id",oustanding_ctrl.update);
    route.delete("/delete_oustanding/:id",oustanding_ctrl.delete);

    route.post("/add_nextofkin",nextofkin_ctrl.add);
    route.get("/get_nextofkin/:id",nextofkin_ctrl.get);
    route.put("/update_nextofkin/:id",nextofkin_ctrl.update);
    route.delete("/delete_nextofkin/:id",nextofkin_ctrl.delete);

    return route;   
    
};