function checkFlag(flag: boolean): string {
  console.log(flag);
  return "check done";
}
checkFlag(true);
checkFlag(false);

const normalize = (input: string) => {
  return input.toLowerCase();
};
console.log(normalize("hEllO wOrld!"));

const list: string[] = ["a", "A", "あ", "ア", "亜"];
list.sort((a, b): number => {
  // return a >= b ? 1 : -1;
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  return 0;
});
console.log(list);

function hello(): void {
  console.log("ohayo");
}
hello();

interface Greeter {
  // このhello()は上のものとは全く関係ない
  // さらに型宣言をする必要がある
  hello(): void;
}

// この場合返り値の型は number | "今年" になる
// あまり望ましくない
function yearLabel(year: number) {
  if (year === 2020) {
    return "今年";
  } else {
    return year;
  }
}

// const label: number = yearLabel(2018);
const label1 = yearLabel(2019);
const label2 = yearLabel(2020);
const label3 = yearLabel(2021);
console.log(label1, label2, label3);
