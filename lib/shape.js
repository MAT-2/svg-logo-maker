// class imageSVG {
//   constructor() {
//     this.circle = `<svg xmlns="https://www.w3.org/2000" version="1.1" width="300" height="200">
//     <circle cx="150" cy="80" fill=${this.colorShape}>
//     </circle>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.colorChars}>${this.characters}</text>
//     </svg>`;
//     this.triangle = "";
//     this.square = "";
//   }
// }

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class circle extends Shape {
  constructor() {}
}

class Triangle extends Shape {
  constructor() {}
}

class Square extends Shape {
  constructor() {}
}
