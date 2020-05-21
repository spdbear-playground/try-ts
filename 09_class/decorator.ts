function StrongZero(target) {
  target.prototype.drink = function () {
    console.log("ストロングゼロを飲んだ");
  };
  return target;
}

@StrongZero
class SmallAnimalZero {}

const sa = new SmallAnimalZero();
sa.drink();
