'use strict';

const Verbs = require('./verbs');

module.exports = function() {
  let v = this.match('#VerbPhrase+').list;
  return new Verbs(v);
// return 133;
};
