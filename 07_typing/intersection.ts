type personInfo = {
  height: number;
};

type personSecretInfo = {
  weight: number;
  gender: "Man" | "Woman" | "N/A";
};

type personID = {
  id: number;
};

type personAllInfo = personInfo & personSecretInfo & personID;

const person1: personAllInfo = {
  height: 150,
  weight: 50,
  gender: "Man",
  id: 1,
};

const person2: personInfo & personID = {
  height: 140,
  id: 2,
};

console.log(person1, person2);
