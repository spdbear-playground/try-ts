class SmallAnimal {
  animalType: string;
  constructor() {
    this.animalType = "ポメラニアン";
  }
  say() {
    console.log(
      `${this.animalType}だけどMSの中に永らく居たBOM信者の全身の毛をむしりたい`
    );
  }
}
const san = new SmallAnimal();
san.animalType = "柴犬";
san.say();

class SmallDog {
  constructor(private _secretPlace: string) {}

  // getter, setterを作成すると .secretPlace としてアクセスできる
  // get secretPlace(): string {
  //   return this._secretPlace;
  // }
  // set secretPlace(val: string) {
  //   this._secretPlace = val;
  // }
  dig(): string {
    return this._secretPlace;
  }
  bury(treasure: string) {
    this._secretPlace = treasure;
  }
}
const wan = new SmallDog("フリスビー");
console.log(wan.dig());

wan.bury("骨");
// console.log(wan.secretPlace);
// -> error TS2341: Property 'secretPlace' is private and only accessible within class 'SmallDog'.
console.log(wan.dig());
