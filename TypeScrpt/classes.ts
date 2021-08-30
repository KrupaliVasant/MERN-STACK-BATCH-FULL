//classes
//classes can contain feilds, methods, constructor

class Employee {
    //id, name, salary, email,address
    //declaring fields
    empId: number;
    empName: string;

    //constructor, used for initilizing the values
    constructor(id: number, name: string) {
        this.empId = id;
        this.empName = name;
    }

    display(): void {
        console.log(`ID: ${this.empId}, Name: ${this.empName}`)
    }
}


//inheritance
class PermanentEmployee extends Employee {
    position: string;
    constructor(position: string, id: number, name: string) {
        super(id, name);
        this.position = position;
    }
    display(): void {
        super.display();
        console.log(`Position ${this.position}`)
    }
}

let emp1 = new Employee(1, "Krupali");
emp1.display();

let emp2 = new Employee(2, "Ram");
emp2.display();

let emp3 = new PermanentEmployee('Manager', 7, 'KruVed');
emp3.display();