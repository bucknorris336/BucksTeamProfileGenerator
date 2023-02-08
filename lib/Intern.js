// importing Employee constructor
const Employee = require("./Employee");
const Intern = require("./Employee");

// intern constructor extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, school);
    this.school = school;
  }

  // returning school from input
  getSchool() {
    return this.school;
  }
  // override employee role to intern
  getRole() {
    return "Intern";
  }
}
// to be exported
module.exports = Intern;

const intern = new Intern();
const newIntern = new Intern();
// will return string "Intern" same as method from line 18
newIntern.getRole();

intern.getSchool();
