'use strict';

var customs = require('./index');
var should = require('should');

describe('#customs()', function () {
  describe('case: array', function () {
    it('should handle variable returns', function (done) {
      customs('array', [1,3,4]).should.equal(true);
      customs('array', 1).should.equal(false);
      done();
    });
  });

  describe('case: string', function () {
    it('should handle variable returns', function (done) {
      customs('string', 'Dad jokes').should.equal(true);
      customs('string', 1).should.equal(false);
      done();
    });
  });

  describe('case: number', function () {
    it('should handle variable returns', function (done) {
      customs('number', 42).should.equal(true);
      customs('number', 'untrue').should.equal(false);
      done();
    });
  });

  describe('case: boolean', function () {
    it('should handle variable returns', function (done) {
      customs('boolean', false).should.equal(true);
      customs('boolean', 1).should.equal(false);
      done();
    });
  });

  describe('case: object', function () {
    it('should return true if a number is provided', function (done) {
      customs('object', {hello: 'you'}).should.equal(true);
      customs('object', 'untrue').should.equal(false);
      done();
    });
  });

  describe('case: email', function () {
    it('should return true if an email is provided', function (done) {
      customs('email', 'hi@yoshuawuyts.com').should.equal(true);
      customs('email', 'hi@yoshuawuyts.com').should.equal(true);
      customs('email', '!#$%&*+-/\'=?^_`{|}~@yoshuawuyts.com').should.equal(true);
      customs('email', 'bla@xyz').should.equal(false);
      done();
    });
  });

  describe('case: function', function () {
    it('should return true if a function is provided', function (done) {
      customs('function', function(arg) {return arg}).should.equal(true);
      customs('function', '123').should.equal(false);
      done();
    });
  });

  describe('case: default', function () {
    it('should return true if a regex is validated', function (done) {
      customs(/d(b+)d/g, 'cdbbdbsbz').should.equal(true);
      customs(/d(b+)d/g, 'asdf').should.equal(false);
      done();
    });

    it('should return false if an unknown type is provided', function (done) {
      customs('sms', 'howdoyoudo').should.equal(false);
      done();
    });
  });
});