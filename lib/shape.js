//In This File, we are defining these classes and export to main index.js file to use.
class Shape {
  constructor() {
    this.color = "";
  }
  //Created method to implement colors for shapes the user will choose.
  setColor(color) {
    this.color = color;
  }
  //Created method to implement colors for the characters the user will input.
  setColorChars(colorChars) {
    this.colorChars = colorChars;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="100" height="100"><circle cx="150" cy="100" r="80" fill="${this.color}" /> <text x="0" y="15" fill="${this.colorChars}">${this.characters}</text></svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="100" height="100"><polygon points="200,30 250,210 160,210" style="fill:${this.color}" /><text x="0" y="15" fill="${this.colorChars}">${this.characters}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="100" height="100"><rect x="50" y="20" width="150" height="150" fill ${this.color}/><text x="0" y="15" fill="${this.colorChars}">${this.characters}</text></svg>`;
  }
}

//Exporting children Classes to be used for the index.js
module.exports = { Circle, Triangle, Square };
