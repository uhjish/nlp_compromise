'use strict';
const chalk = require('chalk');
const paths = require('../paths');
const log = paths.log;
const fns = paths.fns;

const colors = {
  Noun: chalk.cyan,
  Verb: chalk.magenta,
  Adjective: chalk.yellow,
  Adverb: chalk.red,
};

const check = function() {
  this.list.forEach((ts) => {
    ts.terms.forEach((t) => {
      let tags = Object.keys(t.tag).map((tag) => {
        if (colors[tag]) {
          return colors[tag](tag);
        }
        return tag;
      }).join(', ');
      let word = t.text;
      word = '\'' + chalk.green(word || '-') + '\'';
      let silent = '';
      if (t.silent_term) {
        silent = '[' + t.silent_term + ']';
      }
      // word += fns.leftPad(silent, 10);
      word = fns.leftPad(word, 25);
      word += fns.leftPad(silent, 10);
      // word = fns.leftPad(word, 32);
      // word = fns.rightPad(word, 28);
      console.log('   ' + word + '   ' + '     - ' + tags);
    });
  });
  return this;
};
module.exports = check;
