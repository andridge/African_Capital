var person_ctrl = require ("../controllers/person_ctrl");
module.exports = function(express) {
    const route = express.Router();
    route.get("/",(req, res) => {
        res.json({ message: 'Hello from Express!' });
    })
    route.post("/add_person",person_ctrl.add);
    route.get("/get_person/:nationalId",person_ctrl.get);
    route.put("/update_person/:nationalId")
    return route;   
    
};