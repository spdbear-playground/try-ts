function someFunctionAny(opts: any) {
  console.log(opts.debug);
}

someFunctionAny(11);
// -> undefined
function someFunctionUnknown(opts: unknown) {
  // console.log(opts.debug);
  // unknown型には操作できない
}
