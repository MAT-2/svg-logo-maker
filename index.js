const inquirer = require("inquirer");
const fs = require("inquirer");
//exporting children classes from shape.js from lib folder using deconstructuring.
const { Circle, Triangle, Square } = require("./lib/shape.js");

//List of questions user will be prompted to create SVG.
inquirer
  .prompt([
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
      choices: ["Circle", "Square", "Triangle"],
      name: "shape",
    },
    {
      type: "input",
      message:
        "Please provide a color/hexadecimal of choice for the shape you chosed.",
      name: "colorShape",
    },
  ])
  .then((inquirer) => {
    let shape;
    if (inquirer.shape === "Circle") {
      shape = new Circle();
      shape.setColor(inquirer.colorShape);
      shape.setColorChars(inquirer.colorChars);
    } else if (inquirer.shape === Triangle) {
    } else {
    }
    fs.writeFile("shape.svg", shape, (err) => {
      err ? console.log(err) : console.log("SVG generated!");
    });
  })
  .catch((err) => {
    console.log("ERROR: Please include the details specified.");
  });
