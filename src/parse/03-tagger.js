'use strict';
const step = require('./tagger');

const tagger = function(r) {
  r = step.punctuation_step(r);
  // r = step.lexicon_lump(r);
  // r = step.lexicon_step(r);
  // r = step.capital_step(r);
  // r = step.web_step(r);
  // r = step.suffix_step(r);
  // r = step.neighbour_step(r);
  // r = step.noun_fallback(r);
  // r = contraction.interpret(r);
  // r = step.date_step(r);
  // r = step.auxillary_step(r);
  // r = step.negation_step(r);
  // // r = step.adverb_step(r);
  // r = step.phrasal_step(r);
  // r = step.comma_step(r);
  // //lump a couple times, for long ones
  // for (let i = 0; i < 3; i++) {
  //   r = step.lump_three(r);
  //   r = step.lump_two(r);
  // }
  return r;
};

module.exports = tagger;
