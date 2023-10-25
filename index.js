const inquirer = require("inquirer");
const fs = require("fs");
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
  .then((responses) => {
    let shape;
    if (responses.shape === "Circle") {
      shape = new Circle();
      shape.setColor(responses.colorShape);
      shape.setColorChars(responses.colorChars);
    } else if (responses.shape === "Triangle") {
      shape = new Triangle();
      shape.setColor(responses.colorShape);
      shape.setColorChars(responses.colorChars);
    } else {
      shape = new Square();
      shape.setColor(responses.colorShape);
      shape.setColorChars(responses.colorChars);
    }
    console.log(responses);
    fs.writeFile("shape.svg", responses.shape, (err) => {
      err ? console.log(err) : console.log("SVG generated!");
    });
  })

  .catch((err) => {
    console.log(err);
  });
