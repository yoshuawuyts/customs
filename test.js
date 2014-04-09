'use strict';

var customs = require('./index');
var should = require('should');

describe('#customs()', function () {
  describe('case: array', function () {
    it('should return true if an array is provided', function (done) {
      customs('array', [1,3,4]).should.equal(true);
      done();
    });

    it('should return false if no array is provided', function (done) {
      customs('array', 1).should.equal(false);
      done();
    });
  });

  describe('case: string', function () {
    it('should return true if a string is provided', function (done) {
      customs('string', 'Dad jokes').should.equal(true);
      done();
    });

    it('should return false if no array is provided', function (done) {
      customs('string', 1).should.equal(false);
      done();
    });
  });

  describe('case: number', function () {
    it('should return true if a number is provided', function (done) {
      customs('number', 42).should.equal(true);
      done();
    });

    it('should return false if no array is provided', function (done) {
      customs('number', 'untrue').should.equal(false);
      done();
    });
  });

  describe('case: boolean', function () {
    it('should return true if a number is provided', function (done) {
      customs('boolean', false).should.equal(true);
      done();
    });

    it('should return false if no array is provided', function (done) {
      customs('boolean', 1).should.equal(false);
      done();
    });
  });

  describe('case: object', function () {
    it('should return true if a number is provided', function (done) {
      customs('object', {hello: 'you'}).should.equal(true);
      done();
    });

    it('should return false if no array is provided', function (done) {
      customs('object', 'untrue').should.equal(false);
      done();
    });
  });

});