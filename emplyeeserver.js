let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
"Access-Control-Allow-Methods",
"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
);
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
const port = 2410;
app.listen(port, () => console.log(`Listening on port ${port}!`));
let {Employees}=require("./wemployee.js")
app.get('/svr/Employees' ,function(req,res){
    res.send(Employees)
})
app.get("/svr/Employees/department/:department", function (req, res) {
    let department= req.params.department;
    let department1 = Employees.filter((st) => st.department === department);
   console.log(department1)
    res.send(department1)
  
  
})
app.get("/svr/Employees/designation/:department", function (req, res) {
    let department= req.params.department;
    let department1 = Employees.filter((st) =>st.designation === department);
   console.log(department1)
    res.send(department1)
  
  
})
app.delete("/svr/Employees/:empCode", function (req, res) { 
    let empCode =+req.params.empCode;
  let index = Employees.findIndex((st) => st.empCode === empCode); 
  if(index>=0){
let deletedEmployees= Employees.splice(index, 1);
res.send(deletedEmployees);      
  }
  else
  res.status(404).send("no Employees avaliable ")
  })




app.get('/svr/addEmployees/:empCode' ,function(req,res){
    let empCode= +req.params.empCode;
    let department1 = Employees.find((st) => st.empCode === empCode);
    res.send(department1)
})
app.post("/svr/Employees", function (req, res) {
    let body= req.body; 
    console.log(body);
   
    let newStudent = { ...body };
    Employees.push(newStudent);
    res.send(newStudent)})
    app.put("/svr/Employees/:empCode", function (req, res) {
        let empCode= req.params.empCode;
        let body= req.body;
        let index =Employees.findIndex((st) => st.empCode = empCode);
        console.log(index)
        if(index>=0){
             let updatedEmployees = { empCode: empCode, ...body };
        Employees[index]= updatedEmployees; 
        res.send(updatedEmployees)
        }
        else
    res.status(404).send("no Employees avaliable ")
       ;})
      
