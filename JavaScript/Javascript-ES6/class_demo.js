class Person{
    constructor(){   //default constructor
        this.Pid='1';
        this.Pname='Ram';
        this.city='Pune'
    }
}
let per=new Person();
console.log(per.Pid+" "+per.Pname+" "+per.city);

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        // console.log(this.city);  //it displays undefine
    }
}
var obj=new Student('Kiyra',10);
obj.display();
var obj1= new Student('Ram',12,10,'pune');   //ignors extra parameters
obj1.display();