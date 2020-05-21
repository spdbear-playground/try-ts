class StaticSample {
  static staticVariable = 2;
  variable: number;

  constructor() {
    this.variable = 1;
  }

  static classMethod() {
    console.log(this.staticVariable);
    console.log(StaticSample.staticVariable);
    // console.log(this.variable);
  }

  method() {
    console.log(this.variable);
    console.log(StaticSample.staticVariable);
    // console.log(this.staticVariable);
  }
}

const ss = new StaticSample();
ss.method();
StaticSample.staticVariable = 3;
StaticSample.classMethod();

class Point {
  constructor(public x: number, public y: number) {}
  static polar(length: number, angle: number): Point {
    return new Point(length * Math.cos(angle), length * Math.sin(angle));
  }
}
console.log(new Point(10, 20));
for (let i = 0; i <= 360; i += 45) {
  console.log(Point.polar(10, i * (Math.PI / 180)));
}
