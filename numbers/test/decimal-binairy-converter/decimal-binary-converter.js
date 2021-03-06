'use strict';

const expect = require('chai').expect;
const toBinary = require('../../decimal-binary-converter').dec2bin;
const toDecimal = require('../../decimal-binary-converter').bin2dec;

describe('Binary-Decimal Converter', () => {
  it('handles invalid input', () => {
    /* eslint-disable no-unused-expressions */
    expect(toBinary()).to.not.exist;
    expect(toBinary('string')).to.not.exist;
    expect(toDecimal()).to.not.exist;
    expect(toDecimal(-2)).to.not.exist;
    expect(toDecimal('string')).to.not.exist;
    expect(toDecimal('112001')).to.not.exist;
    /* eslint-enable no-unused-expressions */
  });
  it('converts to binary', () => {
    expect(toBinary(4)).to.be.equal('100');
    expect(toBinary(7)).to.be.equal('111');
    expect(toBinary(131261)).to.be.equal('100000000010111101');
  });
  it('converts to decimal', () => {
    expect(toDecimal('100')).to.be.equal(4);
    expect(toDecimal('100000000010111101')).to.be.equal(131261);
  });
});
