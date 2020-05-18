function getUser() {
  if (Math.random() < 0.3) {
    return ["taro"];
  } else if (Math.random() < 0.6) {
    return "taro";
  } else {
    return 1;
  }
}

// ユーザー定義の型ガード関数
// これによりif文でコンパイラに型を伝えられる
function isArray(arg: any): arg is Array<any> {
  return Array.isArray(arg);
}

let userNameOrId: string | Array<any> | number = getUser();
console.log(typeof userNameOrId);
if (typeof userNameOrId === "string") {
  console.log(userNameOrId.toUpperCase());
} else if (isArray(userNameOrId)) {
  console.log(...userNameOrId);
} else {
  console.log(userNameOrId * 10);
}

// 以下のコードは意味がない
// type PositiveNumber = number;

// function isPositiveNumber(arg: any): arg is PositiveNumber {
//   return arg >= 0;
// }

// const num0: PositiveNumber = 0;
// const num1: PositiveNumber = 2;
// const num2: PositiveNumber = -1;

// function checkIsPositive(num: PositiveNumber) {
//   if (isPositiveNumber(num)) {
//     console.log(num, "is positive");
//   } else {
//     console.log(num, "is not positive");
//   }
// }

// checkIsPositive(num0);
// checkIsPositive(num1);
// checkIsPositive(num2);
