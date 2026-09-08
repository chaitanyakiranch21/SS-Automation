//classes

class Student {

    name = "Rahul";
    course = "Playwright";

    introduce() {
        console.log("Hi, I'm " + this.name);
        console.log("I'm learning " + this.course);
    }
}

const student1 = new Student();

student1.introduce();

