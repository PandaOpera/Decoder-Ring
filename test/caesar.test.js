// Write your tests here!
const { expect } = require('chai');
const caesarModule = require('../src/caesar');

describe('caesarModule', () => {
  it('It returns false if the shift value is equal to 0', () => {
    const actual = caesarModule.caesar('test', 0);
    expect(actual).to.be.false;
  });
  it('It returns false if the shift value is less than -25', () => {
    const actual = caesarModule.caesar('test', -26);
    expect(actual).to.be.false;
  });
  it('It returns false if the shift value is greater than 25', () => {
    const actual = caesarModule.caesar('test', 26);
    expect(actual).to.be.false;
  });
  it('It ignores capital letters', () => {
    const expected = 'wklqnixo';
    const actual = caesarModule.caesar('THINKFUL', 3);
    expect(actual).to.equal(expected);
  });
  it('It handles shifts that go before the beginning of the alphabet', () => {
    const actual = caesarModule.caesar('a', -1);
    expect(actual).to.equal('z');
  });
  it('It handles shifts that go past the end of the alphabet', () => {
    const actual = caesarModule.caesar('z', 1);
    expect(actual).to.equal('a');
  });
  it('It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding', () => {
    const expected = '? ?!% * ) --';
    const actual = caesarModule.caesar('? ?!% * ) --', -3);
    expect(actual).to.equal(expected);
  });
  it('It decodes messages if encode argument is false', () => {
    const expected = 'thinkful';
    const actual = caesarModule.caesar('wklqnixo', 3, false);
    expect(actual).to.equal(expected);
  });
});

