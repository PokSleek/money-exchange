module.exports = function makeExchange(currency) {
  let exchangeObject = {};
  if (currency <= 0) {
  } else {
    if (currency > 10000) {
      exchangeObject.error =
        "You are rich, my friend! We don't have so much coins for exchange";
    } else {
      if (currency >= 50) {
        exchangeObject.H = Math.floor(currency / 50);
        currency = currency - exchangeObject.H * 50;
      }
      if (currency >= 25) {
        exchangeObject.Q = Math.floor(currency / 25);
        currency = currency - exchangeObject.Q * 25;
      }
      if (currency >= 10) {
        exchangeObject.D = Math.floor(currency / 10);
        currency = currency - exchangeObject.D * 10;
      }
      if (currency >= 5) {
        exchangeObject.N = Math.floor(currency / 5);
        currency = currency - exchangeObject.N * 5;
      }
      if (currency >= 1) {
        exchangeObject.P = currency;
      }
    }
  }
  return exchangeObject;
};
