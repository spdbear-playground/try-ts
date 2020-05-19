declare interface String {
  myToLowerCase(): string;
}

String.prototype.myToLowerCase = function () {
  process.stdout.write(".");
  return this.toLowerCase();
};

// 比較時の変換関数の呼び出しを最小にするソート
// Ref: https://future-architect.github.io/typescript-guide/function.html#id4
function mySort(a: string[], conv: (value: string) => string) {
  // 変換関数を通しながら、 [オリジナル, 比較用に変換した文字列] という配列を作る
  const entries = a.map((value) => [value, conv(value)]);
  // 後半の変換済みの文字列を使ってソート
  entries.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  // ソートされた配列を使い、オリジナルの配列に含まれていた要素だけの配列を再び作成
  return entries.map((entry) => entry[0]);
}

const arr: string[] = ["az", "As", "aW", "AX", "ay", "Au"];

// 比較回数を最小にする場合
console.log(
  mySort(arr, (s: string) => {
    // process.stdout.write(".");
    return s.myToLowerCase();
  })
);
// -> ......[ 'As', 'Au', 'aW', 'AX', 'ay', 'az' ]

// 比較時に毎回変換関数を呼び出すソートの場合
console.log(
  arr.sort((a, b) => {
    a = a.myToLowerCase();
    b = b.myToLowerCase();
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  })
);
// -> ......................[ 'As', 'Au', 'aW', 'AX', 'ay', 'az' ]
