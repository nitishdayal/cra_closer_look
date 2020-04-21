class Student {
    constructor(name,email,community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = [];
    }
    registerstudent(student) {
        if (this.students.filter(s=> s.email === student.email).length) {
            console.log(`This student is already registered`)
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp web dev fundamentals.`)
        }
        return this.students;
        }
    }
