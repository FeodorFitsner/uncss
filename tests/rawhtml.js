'use strict';

var fs     = require('fs'),
    expect = require('chai').expect,
    uncss  = require('./../src/uncss.js');

describe('Raw HTML', function () {
    it('Should process an array containing HTML', function (done) {
        var html = fs.readFileSync('tests/phantomjs/basic.html', { encoding: 'utf8' });

        uncss([html], { csspath: 'tests/phantomjs' }, function (err, output) {
            expect(err).to.be.null;
            expect(output).to.include('.evaluated');
            done();
        });
    });
});
