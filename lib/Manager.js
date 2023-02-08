// importing Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // returning office-number from input
  getOfficeNumber() {
    return this.officeNumber;
  }
  // override employee role to manager
  getRole() {
    return "Manager";
  }
}
// to be exported
module.exports = Manager;

const manager = new Manager("Dan", "01", "email@email.com", "office01");
const newManager = new Manager("Mark", "02", "email2@email.com", "office02");
//will return string "Manager" same as method from line 18
newManager.getRole();

manager.getEmail();
