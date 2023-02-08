const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the team manager's office number?",
  },
];

function appMenu() {
  function createManager() {
    console.log("Please build your team");
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      createTeam();
    });
  }
  // main menu function to chose if we want engineer or interl or generate html
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  //create function addengineer and call inquirer and pass questions then create new engineer templeate, and push new engineer object to the team members array
  function addEngineer() {}

  function addIntern() {}

  function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  }

  createManager();
}

appMenu();
