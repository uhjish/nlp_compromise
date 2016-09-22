'use strict';
const set_tag = require('./tag').set_tag;
const normalize = require('./normalize');
const fns = require('../../fns');
const build_whitespace = require('./whitespace');

class Term {
  constructor(str, context) {
    this.text = fns.ensureString(str);
    this.context = fns.ensureObject(context);
    this.tag = {};
    this.whitespace = build_whitespace(str || '');
    this._text = this.text.trim();
    // this.endPunct = this.endPunctuation();
    this.normal = normalize(this.text);
    this.silent_term = '';
  }

  set text(str) {
    this._text = str.trim();
    if (this._text !== str) {
      this.whitespace = build_whitespace(str);
    }
    // this.endPunct = this.endPunctuation();
    this.normal = normalize(this.text);
  }
  get text() {
    return this._text;
  }

  /** the comma, period ... punctuation that ends this sentence */
  endPunctuation() {
    let m = this.text.match(/([\.\?\!,;:])$/);
    if (m) {
      //remove it from end of text
      // this.text = this.text.substr(0, this.text.length - 1);
      return m[0];
    }
    return '';
  }

  /** print-out this text, as it was given */
  plaintext() {
    let str = this.whitespace.before + this.text + this.whitespace.after;
    return str;
  }

  /** set the term as this part-of-speech */
  tagAs(tag, reason) {
    set_tag(this, tag, reason);
  }

  /** make a copy with no references to the original  */
  clone() {
    let c = fns.copy(this.context);
    let term = new Term(this.text, c);
    term.tag = fns.copy(this.tag);
    term.whitespace = fns.copy(this.whitespace);
    term.silent_term = this.silent_term;
    term.endPunct = this.endPunct;
    return term;
  }
  is(str) {
    console.log('is-' + str);
  }
  info(str) {
    console.log('info-' + str);
  }
  to(str) {
    console.log('to-' + str);
  }
  render(str) {
    console.log('render-' + str);
  }
}



module.exports = Term;
