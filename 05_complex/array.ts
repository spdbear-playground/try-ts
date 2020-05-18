const years: number[] = [2019, 2020, 2021];
const divs = ["tig", "sig", "saig", "scig"];

years.push(2022);
years.push(2023, 2024);

const first = years[0];
console.log(years.pop());
console.log(years);

const movie: [string, number] = ["Your Name", 2016];
console.log(movie);
movie[0] = "Weathering With You";
movie[1] = 2019;
// movie[0] = 1984;
// -> error TS2322: Type '1984' is not assignable to type 'string'.
