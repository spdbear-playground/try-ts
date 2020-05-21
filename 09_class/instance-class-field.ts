// 新: インスタンスクラスフィールド(Class Field Declaration)を使う場合
// コンストラクタを介さずにフィールドを定義し初期化可能
class SmallAnimal_i {
  // プロパティを作成
  fav = "小田原";
  // メソッドを作成
  say = () => {
    console.log(`私は${this.fav}が好きです`);
  };
}

// 旧: bindを使う場合
class SmallAnimal_b {
  _fav: string;
  constructor() {
    this._fav = "小春日";
    this.say = this.say.bind(this);
  }

  say() {
    console.log(`私は${this._fav}が好きです`);
  }
}

const sai = new SmallAnimal_i();
const sab = new SmallAnimal_b();
sai.say();
sab.say();
