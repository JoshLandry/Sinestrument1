'use strict';

require('../index.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');

chai.use(chaihttp);

var expect = chai.expect;

describe('', function() {
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