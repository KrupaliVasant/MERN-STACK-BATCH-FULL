class Student{
    // constructor of the class
    constructor(name,age){
        // this points to the current object
        this.name=name;
        this._age=age;
    }
    // member function
    getName(){
        return this.name;
    }
    setName(){
        this.name=name;
    }

    //getter and setter make a function accessible like a variable
    set age(value){
        this._age=value;
    }
    get age(){
        return this.age;
    }
}

// instance od Student class
var stud = new Student("Ram", 21);
stud.age=12;  //execute setter
stud.name="ram";
console.log(`Name:${stud.name} Age:${stud._age}`);