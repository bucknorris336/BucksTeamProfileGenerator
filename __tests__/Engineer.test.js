const Engineer = require("../lib/Engineer");

describe("Engnieer", () => {
  describe("Initialization", () => {
    it("can get name, id, email, github, role", () => {
      const engineer = new Engineer(
        "Buck",
        2,
        "test@gmail.com",
        "bucknorris336"
      );

      expect(engineer.getName()).toEqual("Buck");
      expect(engineer.getId()).toEqual(2);
      expect(engineer.getEmail()).toEqual("test@gmail.com");
      expect(engineer.getGithub()).toEqual("bucknorris336");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
