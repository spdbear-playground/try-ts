const ar = [0, 1];
try {
  const nunun = ar[2];
  throw new Error();
} catch (e) {
  console.log(e);
} finally {
  console.log("final");
}
