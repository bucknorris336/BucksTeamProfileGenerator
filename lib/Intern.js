// importing Employee constructor
const Employee = require("./Employee");

// intern constructor extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
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

const intern = new Intern("Jeff", "01", "Page");
const newIntern = new Intern();
// will return string "Intern" same as method from line 18
newIntern.getRole();

intern.getSchool();
