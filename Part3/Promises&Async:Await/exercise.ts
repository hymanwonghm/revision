//Task1. Please use TypeScript to write a Student class that includes the following properties and methods.
//Private attributes: name, studentId, and age
//Constructor: takes name, student ID, and age as parameters and verifies age (age cannot be less than 0)
//Common methods: getName() (return name), getStudentId() (return student ID), getAge() (return age), displayInfo() (output all student information on the console)
// Write your code here

//Task2. Create a student object student1 using the aforementioned Student class and call the displayInfo() method to display the student's information. Then try to create a student object with an age of -5 and handle any possible errors.
// Write your code here

class Student {
    private name: string
    private studentId: string
    private age: number

    constructor(name: string, studentId: string, age: number){
        this.name = name
        this.studentId = studentId
        if (age > 0) {
            this.age = age
        } else {
            throw "invalid input"
        }
    }

    getName():string {
        return this.name
    }

    getStudentId():string {
        return this.studentId
    }

    getAge():number {
        return this.age
    }

    displayInfo():void {
        console.log(`name: ${this.name}, studentId: ${this.studentId}, age: ${this.age} `)
    }
}

let studentA: Student = new Student("Hyman", "1155157321", 23)
studentA.displayInfo()
try {
    let studentB: Student = new Student("Hyman", "1155157321", -5)
} catch (error) {
    console.log(" Erorrx")
}

