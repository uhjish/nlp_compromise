'use strict';
// const defaultObj = {
//   numbers: true,
// };
//
const methods = {
  numbers: (m) => {
    return m.match('#Value').clone().toNumber().render('array').map((str) => {
      return parseInt(str, 10);
    });
  },
  people: (m) => {
    return m.match('#Person').normal();
  }
};

const inspect = function(obj) {
  let self = this;
  obj = obj || methods;
  let all = {};
  Object.keys(obj).forEach((k) => {
    if (methods[k]) {
      all[k] = methods[k](self);
    }
  });
  return all;
};

module.exports = inspect;
