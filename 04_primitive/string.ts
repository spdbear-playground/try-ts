console.log(
  `hello\n
world`
);

function toUpper(literals: TemplateStringsArray, ...placeholders: string[]) {
  console.log(literals, placeholders);
  let res = "";
  // for (let i = 0; i < placeholders.length; i++) {
  //   res += literals[i];
  //   res += placeholders[i].toUpperCase();
  // }
  for (const [i, placeholder] of placeholders.entries()) {
    res += literals[i];
    res += placeholder.toUpperCase();
  }
  res += literals[literals.length - 1];
  return res;
}
const personName = "Tom";
const personCountry = "japan";
const personFood = "sushi";

console.log(toUpper``);
console.log(
  toUpper`My name is ${personName}. I live in ${personCountry}. I like ${personFood}.`
);
// => My name is TOM. I live in JAPAN. I like SUSHI.
