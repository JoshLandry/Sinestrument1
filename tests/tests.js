'use strict';

require('../index.js');
// require('../views/js/audioApp.js');

var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');

chai.use(chaihttp);

var expect = chai.expect;

// Server Tests

describe('Express Server', function() {
  it('should GET index', function(done) {
     chai.request('localhost:5000')
       .get('/')
       .end(function(err, res) {
         expect(err).to.eql(null);
         expect(res).to.have.status(200);
         done();
       });
  });
});

// Synth App Tests

describe('Synth App', function() {
  it('should create filter', function(done) {
    // must find some way to mock Web Audio API elements.
  });
});