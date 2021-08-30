class Employee{
    constructor(eid,ename,des,sal){
        this.Eid=eid;
        this.Ename=ename;
        this.Edes=des;
        this.Esal=sal;
    }
}

class Manager extends Employee{
    constructor(eid,ename,des,sal,project){
        super(eid,ename,des,sal);
        this.MProject=project;
    }
    details(){
        console.log("Eid: "+this.Eid);
        console.log("Ename: "+this.Ename);
        console.log("Designation: "+this.Edes);
        console.log("Project: "+this.MProject);
        console.log("Salary: "+this.Esal);
    }
}
var obj = new Manager(111,"Ved",'Team Lead',50000,'BFs');
obj.details();