const inquirer = require("inquirer");
const fs = require("inquirer");
//exporting children classes from shape.js from lib folder using deconstructuring.
const { Circle, Triangle, Square } = require("./lib/shape.js");

//List of questions user will be prompted to create SVG.
inquirer.prompt([
  {
    type: "input",
    message: "Please enter up to 3 characters total.",
    name: "characters",
  },
  {
    type: "input",
    message:
      "Please provide a color/hexadecimal of choice for your characters.",
    name: "colorChars",
  },
  {
    type: "list",
    message: "Choose what shape you would like to use.",
    choices: ["circle", "square", "triangle"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "Please provide a color/hexadecimal of choice for the shape you chosed.",
    name: "colorShape",
  },
]);
