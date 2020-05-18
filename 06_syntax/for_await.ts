const sleep = (ms: number) => new Promise((f) => setTimeout(f, ms));

const obj = {
  async *[Symbol.asyncIterator]() {
    yield 11;
    await sleep(1000);
    yield 22;
    await sleep(1000);
    yield 33;
  },
};

(async () => {
  //これは動作しない
  for await (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
  for await (const value of obj) {
    console.log(value);
  }
})();
