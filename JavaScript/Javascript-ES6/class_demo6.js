class Student {
    constructor(sid, sname, age, city) {
        this.sid = sid;
        this.sname = sname;
        this.age = age;
        this.city = city;
    }
    show() {
        console.log(`ID:${this.sid} Name:${this.sname} Age:${this.age} City:${this.city}`);
    }
}

// array of student
let studs = [
    new Student(11, "Ram", 10, "Mumbai"),
    new Student(12, "Shyam", 10, "Delhi"),
    new Student(13, "Pari", 10, "Pune"),
    new Student(14, "Neha", 10, "Nagpur"),
    new Student(15, "Ramii", 10, "Mumbai")
]
for (let stu of studs) {
    stu.show();   //method defined in student class
}