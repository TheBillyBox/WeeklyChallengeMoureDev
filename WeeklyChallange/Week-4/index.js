class Triangle {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  };
  calc() {
    return 'El área del triangulo es: ' + this.base * this.altura / 2;
  }
}

class Rectangle {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  calc() {
    return 'El área del rectangulo es: ' + this.base * this.altura
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
  calc() {
    return 'El área de un cuadrado es: ' + this.side * this.side
  }
}
function main() {
   let t = new Triangle(10,20);
   let r = new Rectangle(10,20)
  let s = new Square(5)
  console.log(t.calc())
  console.log(r.calc())
  console.log(s.calc())
}
main()