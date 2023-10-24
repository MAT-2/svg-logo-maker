//In This File, we are defining these classes and export to main index.js file to use.
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="200,30 250,210 160,210" style="fill:${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill ${this.color}/>`;
  }
}

//Exporting children Classes to be used for the index.js
module.exports = { Circle, Triangle, Square };
