const cname = "小動物";
type namePattern = number | "小動物";
let lname: namePattern;
const mode = "twitter";

if (mode === "slack") {
  lname = 1111;
} else if (mode === "twitter") {
  lname = "小動物";
}
console.log(lname);
