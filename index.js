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
// manager questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
    default: "Herbie",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the team manager's id?",
    default: "01",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?",
    default: "herbie01@gmail.com",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the team manager's office number?",
    default: "336",
  },
];
// engineer questions
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?",
    default: "Lily",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id?",
    default: "02",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
    default: "lily22@gmail.com",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is your engineer's GitHub username?",
    default: "swimstar22",
  },
];
// intern questions
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
    default: "Jeff",
  },
  {
    type: "input",
    name: "internId",
    message: "What is your intern's id?",
    default: "420",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?",
    default: "jeffy420@gmail.com",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?",
    default: "UNCW",
  },
];
// function
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
      console.log("teamMembers", teamMembers);
      createTeam();
    });
  }
  // main menu function to chose if we want engineer or intern or generate html
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
  function addEngineer() {
    // function createEngineer() {
    console.log("Please build your team");
    inquirer.prompt(engineerQuestions).then((answers) => {
      console.log("answer", answers);
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      console.log("teamMembers", teamMembers);
      createTeam();
    });
  }

  function addIntern() {
    // create intern function
    console.log("Please build your team");
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internSchool
      );
      teamMembers.push(intern);
      console.log("teamMembers", teamMembers);
      createTeam();
    });
  }
  // build team function
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
