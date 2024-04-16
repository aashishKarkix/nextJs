interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    constructor(public name: string, public age: number) {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

const student = new Student("aashish", 23);
console.log("student: ", student);
