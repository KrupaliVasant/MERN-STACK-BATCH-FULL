class Product{
    constructor(){
        this.pid=0;
        this.pname='';
    }
    set PID(value){
        this.pid=value;
    }
    get PID(){
        return this.pid;
    }
    set Pname(value){
        this.pname=value;
    }
    get Pname(){
        return this.pname;
    }
}
let project=new Product();
project.PID=100;
project.Pname="Jonh";
console.log(`PID:${project.PID} Pname:${project.Pname}`);