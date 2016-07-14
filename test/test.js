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
        expect(res.text).be.equal("Math API");
        done();
      });
  });

  describe("Addition Route", function() {

  });

  describe("Sub Route", function() {

  });

  describe("Multiplication Route", function() {

  });

  describe("Division Route", function() {

  });

});
