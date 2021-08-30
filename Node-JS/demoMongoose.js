// program to connect to mongoDb
var mongoose = require('mongoose');
// make a connection 
mongoose.connect('mongodb://localhost:27017/julyBatch');  //database name
// get referance to database
var db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection Error:'));
db.once('open',function(){
    console.log("Connection successful");

    // define schema
    var EmployeeSchema = mongoose.Schema({
        id:String,
        first_name:String,
        last_name:String,
        age:Number,
        city:String
    })
    // compile schema to a model
    var Employee = mongoose.model('Employee',EmployeeSchema,'employee');  //parameters: model name, schema name, collection name
    // document instance
    // var empObje = new Employee({id:'00333',first_name:'John',last_name:'M',age:28,city:"Tampa"});
    // empObje.save(function(err,emp){
    //     if(err)
    //         console.log("Sorry!!!");
    //     else
    //         console.log("Data inserted!!");
    // });

    // retrive data
    function getEmployee(){
        const emps = Employee.find().exec(function(err,emp){
            if(err)
                console.log("Sorry!!")
            else    
                console.log(emp);
        })
    }
    getEmployee();

    // function getEmployeeByCity(){
    //     const emps = Employee.find({city:"Nagpur"}).exec(function(err,emp){
    //         if(err)
    //             console.log("Sorry!!!");
    //         else
    //             console.log(emp);
    //     })
    // }

    // getEmployeeByCity();

    // update employee
    // async function updateEmployee(id){
    //     const emp =await Employee.findOneAndUpdate({id:`${id}`},{city:"Delhi"});
    //     if(!emp)
    //         console.log("Could not update");
    //     else
    //         console.log(`${id} updated.`);
    // }

    // updateEmployee('123');

    // async function deleteEmpl(id){
    //     const emp =await Employee.findByIdAndDelete({id:`${id}`});
    //     if(!emp)
    //         console.log("Not delete");
    //     else
    //         console.log(`${id} Record deleted.`)
    // }

    // deleteEmpl('002');

    // let obj = {
    //     "firstName" : "Himanshu",
    //     "lastName" : "Aggarwal",
    //     "function": function(){
    //     console.log(this.firstName+ " "+ this.lastName);
    //     },
    //     "arrFunction": () => {
    //     console.log(this.firstName+ " "+ this.lastName);
    //     }
    //     }
    //     obj.function();
    //     obj.arrFunction();
})