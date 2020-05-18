function paddingLeft(str: string, pad: number | string): string {
  if (typeof pad === "string") {
    return pad + str;
  }
  let p = "";
  for (let i = 0; i < pad; i++) {
    p += " ";
  }
  return p + str;
}

console.log(paddingLeft("TEST", 4));
console.log(paddingLeft("TEST", ""));
