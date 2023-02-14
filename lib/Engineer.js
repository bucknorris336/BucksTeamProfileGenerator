// importing Employee constructor
const { createPromptModule } = require("inquirer");
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // returning github from input
  getGithub() {
    return this.github;
  }
  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}
// to be exported
module.exports = Engineer;

const engineer = new Engineer();
const newEngineer = new Engineer();
// will return string "Engineer" same as method from line 18
newEngineer.getRole();

engineer.getGithub();
