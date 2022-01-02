function cache(func) {
  const c = {};
  return function () {
    const args = JSON.stringify(arguments);
    if (!c.hasOwnProperty(args)) {
      c[args] = func.apply(null, arguments);
    }
    return c[args];
  };
}
