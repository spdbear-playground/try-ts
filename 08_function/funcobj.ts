const smallAnimalObj = {
  getName() {
    return "小動物";
  },
  _favorite: "小笠原",
  get favorite() {
    return this._favorite;
  },
  set favorite(favorite) {
    this._favorite = favorite;
  },
};

console.log(smallAnimalObj.getName());
smallAnimalObj.favorite = "小惑星";
console.log(smallAnimalObj.favorite);
