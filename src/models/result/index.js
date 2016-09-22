'use strict';
const methods = require('./methods');

//a result is an array of termLists
class Result {
  constructor(arr) {
    this.list = arr || [];
  }
  /** did it find anything? */
  get found() {
    return this.list.length > 0;
  }
  verbs() {
    return this.match('#VerbPhrase+');
  }
}
//add methods to prototype
Object.keys(methods).forEach((k) => {
  Result = methods[k](Result);
});
/** return ad-hoc data about this result*/
Result.prototype.info = require('./inspect');
// /** different presentation logic for this result*/
// Result.prototype.render = require('./render');
// Result.prototype.check = require('./render/check');
// /** fixup transforms*/
// Result.prototype.normalize = require('./normalize');

// const Verbs = require('./verbs')(Result);
// function() {
// let list = this.match('#VerbPhrase+').list;
// return new Verbs(list, this.context);
// };

// Result = require('./verbs')(Result);
// Result.prototype.verbs = function() {
//   return this.match('#VerbPhrase+');
// };
module.exports = Result;

//apply methods
// require('./methods').addMethods(Result);
