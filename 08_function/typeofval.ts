let check: (arg1: string, arg2: number) => boolean;
let check2: (arg1: string, arg2: (arg3: string) => number) => boolean;

check = (a, b) => {
  if (a < String(b)) {
    return true;
  } else {
    return false;
  }
};

const c = (b: string) => {
  return Number(b);
};

check2 = (a, c) => {
  if (a < String(c)) {
    return true;
  } else {
    return false;
  }
};

console.log(check("123", 12), check2("123"));
