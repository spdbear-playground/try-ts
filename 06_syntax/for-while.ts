for (let i = 0; i < 5; i++) {
  console.log(i);
}

const obje = {
  one: 1,
  3: "three",
};

for (const [key, value] of Object.entries(obje)) {
  console.log(key, value);
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
