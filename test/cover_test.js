var grunt = require('grunt');
var fs = require('fs');

exports.cover = {
  compile: function (test) {
    'use strict';

    test.expect(2);

    var actual = grunt.file.read('tmp/testCoverage.js');
    var expected = grunt.file.read('test/expected/testCoverage.js');
    test.equal(expected, actual, 'should instrument a javascript file');

    actual = fs.readdirSync('tmp/testDir').sort();
    expected = fs.readdirSync('test/expected/withDirectories').sort();
    test.deepEqual(expected, actual, 'should create instrumented files in their respective directories');

    test.done();
  }
};
