//classes
//classes can contain feilds, methods, constructor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    //constructor, used for initilizing the values
    function Employee(id, name) {
        this.empId = id;
        this.empName = name;
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.empId + ", Name: " + this.empName);
    };
    return Employee;
}());
//inheritance
var PermanentEmployee = /** @class */ (function (_super) {
    __extends(PermanentEmployee, _super);
    function PermanentEmployee(position, id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    PermanentEmployee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Position " + this.position);
    };
    return PermanentEmployee;
}(Employee));
var emp1 = new Employee(1, "Krupali");
emp1.display();
var emp2 = new Employee(2, "Ram");
emp2.display();
var emp3 = new PermanentEmployee('Manager', 7, 'KruVed');
emp3.display();
