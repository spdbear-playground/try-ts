type BirthYear = number | string;
type FoodMenu = "北極" | "冷やし味噌";

const birthday: BirthYear = "平成";
const myOrder: FoodMenu = "北極";
function orderFood(food: FoodMenu) {
  console.log(`order: ${food}`);
}
orderFood(myOrder);

type Person = {
  nickname: string;
  favoriteBank: "Mizuho" | "Mitsubishi" | "MitsuiSumitomo";
  // 省略可能
  favoriteGyudon?: string;
  favoriteSNS: string;
};

function getPerson() {
  const person: Person = {
    nickname: "Jim",
    favoriteBank: "MitsuiSumitomo",
    favoriteGyudon: "Matsuya",
    favoriteSNS: "Twitter",
  };
  return person;
}
const { nickname, ...favorites } = getPerson();
console.log(nickname, "likes", ...Object.values(favorites));
// -> Jim likes MitsuiSumitomo Matsuya Twitter
