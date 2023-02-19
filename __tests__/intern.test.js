const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("can get name, id, email, school, role", () => {
      const intern = new Intern("Buck", 3, "test@gmail.com", "UNCW");

      expect(intern.getName()).toEqual("Buck");
      expect(intern.getId()).toEqual(3);
      expect(intern.getEmail()).toEqual("test@gmail.com");
      expect(intern.getSchool()).toEqual("UNCW");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
