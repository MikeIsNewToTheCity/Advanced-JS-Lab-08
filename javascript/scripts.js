/*
    Name: Mike Villeneuve
    Date: 07/18/2022
*/

const init = () => {
    let student01 = new Student("Steve", "Jobs", "steve.jobs@apple.com")
    let student02 = new Student("Tim", "Berners-Lee", "tim.berners-lee@cern.org")

    console.log(student01.printDetails);
    console.log(student02.printDetails);

    let courseName = "Philosophy 101";

    Student.register(courseName);
};

class Student {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }
    get printDetails() {
        return `Name: ${this._firstName} ${this._lastName}\nEmail: ${this._email}`; 
    }
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    static register(courseName) {
        console.log(courseName);
    }
};


window.onload = init;