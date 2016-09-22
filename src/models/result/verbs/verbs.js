'use strict';
const Result = require('../index');

class Verbs extends Result {
  constructor(list) {
    super(list);
    this.main = this.match('#Verb').match('!#Auxillary').match('!#Negative');
    this.main.check();
  // this.main = this.main.list[0].terms[0];
  }
  negative() {
    return this.match('not').found;
  }
  adverbs() {
    return {
      // before: this.main.before('#Adverb'),
      // after: this.main.after('#Adverb')
    };
  }
  tense() {
    // return this.main.info('tense');
  }
  inspect() {
    return {
      adverbs: this.adverbs(),
      tense: this.tense(),
      negative: this.negative(),
    };
  }
}
module.exports = Verbs;
