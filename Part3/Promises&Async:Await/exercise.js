//Task1. Please use TypeScript to write a Student class that includes the following properties and methods.
//Private attributes: name, studentId, and age
//Constructor: takes name, student ID, and age as parameters and verifies age (age cannot be less than 0)
//Common methods: getName() (return name), getStudentId() (return student ID), getAge() (return age), displayInfo() (output all student information on the console)
// Write your code here
//Task2. Create a student object student1 using the aforementioned Student class and call the displayInfo() method to display the student's information. Then try to create a student object with an age of -5 and handle any possible errors.
// Write your code here
var Student = /** @class */ (function () {
    function Student(name, studentId, age) {
        this.name = name;
        this.studentId = studentId;
        if (age > 0) {
            this.age = age;
        }
        else {
            throw "invalid input";
        }
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.displayInfo = function () {
        console.log("name: ".concat(this.name, ", studentId: ").concat(this.studentId, ", age: ").concat(this.age, " "));
    };
    return Student;
}());
var studentA = new Student("Hyman", "1155157321", 23);
studentA.displayInfo();
try {
    var studentB = new Student("Hyman", "1155157321", -5);
}
catch (error) {
    console.log(" Erorrx");
}
