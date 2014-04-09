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

    it('should return a callback', function (done) {
      customs('array', [1,2,3,4], function(next) {
        next.should.equal(true);
      });
      customs('array', 1, function(next) {
        next.should.equal(false);
      })
      done();
    });
  });

  describe('case: string', function () {
    it('should handle variable returns', function (done) {
      customs('string', 'Dad jokes').should.equal(true);
      customs('string', 1).should.equal(false);
      done();
    });

    it('should return a callback', function (done) {
      customs('string', 'Dad jokes', function(next) {
        next.should.equal(true);
      });
      customs('string', 1, function(next) {
        next.should.equal(false);
      })
      done();
    });
  });

  describe('case: number', function () {
    it('should handle variable returns', function (done) {
      customs('number', 42).should.equal(true);
      customs('number', 'untrue').should.equal(false);
      done();
    });

    it('should return a callback', function (done) {
      customs('number', 42, function(next) {
        next.should.equal(true);
      });
      customs('number', 'untrue', function(next) {
        next.should.equal(false);
      })
      done();
    });
  });

  describe('case: boolean', function () {
    it('should handle variable returns', function (done) {
      customs('boolean', false).should.equal(true);
      customs('boolean', 1).should.equal(false);
      done();
    });

    it('should return a callback', function (done) {
      customs('boolean', false, function(next) {
        next.should.equal(true);
      });
      customs('boolean', 1, function(next) {
        next.should.equal(false);
      })
      done();
    });
  });

  describe('case: object', function () {
    it('should return true if a number is provided', function (done) {
      customs('object', {hello: 'you'}).should.equal(true);
      customs('object', 'untrue').should.equal(false);
      done();
    });

    it('should return a callback', function (done) {
      customs('object', {hello: 'you'}, function(next) {
        next.should.equal(true);
      });
      customs('array', 'untrue', function(next) {
        next.should.equal(false);
      })
      done();
    });
  });
});