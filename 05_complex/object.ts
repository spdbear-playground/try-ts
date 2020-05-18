const key = "favorite drink";
const smallAnimal = {
  name: "小動物",
  favorite: "小籠包",
  "home town": "神奈川県", // キーに空白を含む場合は""でくくる
  [key]: "ストロングゼロ", // キーに変数を書く場合は[]でくくる
};
console.log(smallAnimal);
console.log(smallAnimal.name);
console.log(smallAnimal[key]);

const json = JSON.stringify(smallAnimal, null);
console.log(json);

const { favorite, ...otherss } = smallAnimal;
console.log(otherss);

const attributes = {
  job: "小説家",
  nearStation: "小岩駅",
};

const copy = { ...smallAnimal };
const merged = { ...smallAnimal, ...attributes };

const map = new Map<number, string>([
  [1, "約束の地"],
  [2, "TGSGNZ"],
]);
map.set(3, "tete");
console.log(map.get(0));

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
