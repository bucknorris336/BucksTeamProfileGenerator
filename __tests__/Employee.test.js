const Employee = require("../lib/Employee");

describe("Emplayee", () => {
  describe("Initialization", () => {
    it("can get name, id, email, role", () => {
      const employee = new Employee("Buck", 1, "test@gmail.com");

      expect(employee.getName()).toEqual("Buck");
      expect(employee.getId()).toEqual(1);
      expect(employee.getEmail()).toEqual("test@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
