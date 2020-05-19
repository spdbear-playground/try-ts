function f(name = "小動物", favorite = "小豆餅") {
  console.log(`${name}は${favorite}が好きです`);
}
f();
f("私");
f(undefined, "カレー");

// オブジェクトの分割代入を利用する
function f2({ name = "小動物", favorite = "小豆餅" } = {}) {
  console.log(`${name}は${favorite}が好きです`);
}
f2();
f2({ name: "私" });
// 引数の順番に左右されない
f2({ favorite: "カレー" });
