// 値を表示
console.log(true);
console.log(false);

// 変数に代入
const flag: boolean = true;

// 他のデータ型への変換
console.log(flag.toString());
console.log(String(flag));
console.log(Number(flag));
console.log(Boolean(-0), Boolean(-1), Boolean([])), Boolean({});

// 他のデータ型をbooleanに変換
const notEmpty = Boolean("test string");
const flagStr = "true";
const flag2 = flagStr === "true";
const str = "not empty string";
const isEmpty = !str;
const notEmpty2 = !!str;
console.log(notEmpty, flag2, str, isEmpty, notEmpty2);
