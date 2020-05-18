// 厳密バージョン
type NumberStyle = { color: string };
type NumberColumn = {
  field: string;
  caption: string;
  columnType: "number";
  style: NumberStyle;
};

type CheckStyle = { uncheckBgColor: string; checkBgColor: string };
type CheckColumn = {
  field: string;
  caption: string;
  columnType: "check";
  style: CheckStyle;
};

type Column = NumberColumn | CheckColumn;

// 簡易バージョン
// type Style = {
//   color?: string;
//   uncheckBgColor?: string;
//   checkBgColor?: string;
// };
// type Column = {
//   field: string;
//   caption: string;
//   columnType: string;
//   style: Style;
// };

const header: Column[] = [
  {
    field: "number",
    caption: "number",
    columnType: "number",
    style: { color: "red" },
  },
  {
    field: "check",
    caption: "check",
    columnType: "check",
    style: {
      uncheckBgColor: "#FDD",
      checkBgColor: "rgb(255, 73, 72)",
    },
  },
];

// 厳密バージョンでは型ガードを使える例
function getColor(column: Column): Array<string> {
  if (column.columnType === "number") {
    return [column.style.color];
  } else {
    return [column.style.uncheckBgColor, column.style.checkBgColor];
  }
}

console.log(...getColor(header[0]), ...getColor(header[1]));
