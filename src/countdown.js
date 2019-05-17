module.exports = function countdown(countFrom, tick) {
  // let count = 4;
  let timer = setInterval(_ => {
    tick(countFrom--)
    if (countFrom === -1)
      clearInterval(timer)
  }, 1000);
}
