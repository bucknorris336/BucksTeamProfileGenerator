const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("can get name, id, email, officeNumber, role", () => {
      const manager = new Manager("Buck", 4, "test@gmail.com", 123);

      expect(manager.getName()).toEqual("Buck");
      expect(manager.getId()).toEqual(4);
      expect(manager.getEmail()).toEqual("test@gmail.com");
      expect(manager.getOfficeNumber()).toEqual(123);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
