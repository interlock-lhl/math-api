var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var app = require('../lib/server');

describe('Indgiex Route', function() {
  it ('Normal as can be', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).be.equal("Math API!!!");
        done();
      });
  });

  describe("Addition Route", function() {
    it("returns answer for valid numbers", function(done) {
      chai.request(app)
        .get('/add/1/2')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).be.equal("3");
          done();
        });
    });

  });

  describe("Sub Route", function() {
    it("returns answer for valid numbers", function(done) {
      chai.request(app)
        .get('/sub/1/2')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).be.equal("-1");
          done();
        });
    });
  });

  describe("Multiplication Route", function() {
    it("returns answer for valid numbers", function(done) {
      chai.request(app)
        .get('/mult/3/2')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).be.equal("6");
          done();
        });
    });
  });

  describe("Division Route", function() {
    it("returns answer for valid numbers", function(done) {
      chai.request(app)
        .get('/div/0/2')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).be.equal("0");
          done();
        });
    });

    it("returns error for invalid div by zero", function(done) {
      chai.request(app)
        .get('/div/3/0')
        .end(function(err, res) {
          expect(res).to.have.status(500);
          done();
        });
    });
  });

});
