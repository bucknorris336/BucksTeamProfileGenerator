const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;

const manager = new Manager("Dan", "01","email@email.com", "office01");
const newManager = new Manager("Mark", "02", "email2@email.com", "office02");
//will return string "Manager" same as method from line 9
newManager.getRole();

manager.getEmail()