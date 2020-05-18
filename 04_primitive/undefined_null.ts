// let favoriteGame: string;
// console.log(favoriteGame);
// -> error TS1128: Declaration or statement expected.

function printPersonInfo(name: string = "empty", age?: number) {
  console.log(`name: ${name}, age: ${age || "empty"}`);
}
printPersonInfo("kumagai", 24);
// -> name: kumagai, age: 24
printPersonInfo("kumagai", undefined);
printPersonInfo("kumagai");
// -> name: kumagai, age: empty
printPersonInfo(undefined, 24);
// -> name: empty, age: 24
printPersonInfo(undefined, undefined);
printPersonInfo(undefined);
printPersonInfo();
// -> name: empty, age: empty
