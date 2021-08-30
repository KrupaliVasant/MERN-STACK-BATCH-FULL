class Person{
    constructor(name){
        this.Name=name;
    }
    details(){
        console.log('Name: '+this.Name);
    }
}

class Employee extends Person{
    constructor(name,title){
        super(name);   //call Person constructor
        this.Title=title;   
    }
    details(){
        super.details();  //calls Person details()
        console.log("Title: "+this.Title)
    }
}
let obj=new Employee("Ram","God");
obj.details();