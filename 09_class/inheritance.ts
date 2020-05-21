class EatingSmallAnimal {
  eat() {
    console.log("中本を食べに行きました");
  }
}

class Pomeranian extends EatingSmallAnimal {
  eat() {
    console.log("シュークリームを食べに行きました");
  }
}

interface Animal {
  eat(): void;
}

class EatingSmallAnimal2 implements Animal {
  eat() {
    console.log("中本を食べに行きました");
  }
}

// インタフェースと実装が違うとコンパイルエラー
// class EatingSmallAnimal3 implements Animal {
//   drink() {
//     console.log("中本を飲みに行きました");
//   }
// }

const esa = new EatingSmallAnimal();
esa.eat();

const esp = new Pomeranian();
esp.eat();

const esa2 = new EatingSmallAnimal2();
esa2.eat();
