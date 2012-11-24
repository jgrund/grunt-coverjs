/*
 * grunt-cover
 * https://github.com/grundjoseph/grunt-coverjs
 *
 * Copyright (c) 2012 Joe Grund
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('cover', 'Instruments JavaScript Files using coverjs.', function () {
    var path = require('path');

    var helpers = require('grunt-lib-contrib').init(grunt);

    var options = helpers.options(this, {
      basePath: false,
      flatten: false
    });

    // TODO: ditch this when grunt v0.4 is released
    this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

    var srcFiles;

    var basePath;

    var newFileDest;

    var instrumentedSrc;

    this.files.forEach(function (file) {
      file.dest = path.normalize(file.dest);
      srcFiles = grunt.file.expandFiles(file.src);

      if (srcFiles.length === 0) {
        grunt.log.error('No source files found');
        return;
      }

      srcFiles.forEach(function (srcFile) {
        instrumentedSrc = coverFile(srcFile);

        basePath = helpers.findBasePath(srcFiles, options.basePath);
        newFileDest = helpers.buildIndividualDest(file.dest, srcFile, basePath, options.flatten);

        grunt.file.write(newFileDest, instrumentedSrc || '');
        grunt.log.ok('Created: ' + newFileDest);
      });

    });

    function coverFile(srcFile) {
      var srcCode = grunt.file.read(srcFile);
      var Instrument = require('coverjs').Instrument;

      try {
        return new Instrument(srcCode, srcFile).instrument();
      } catch (e) {
        grunt.log.error(e);
        grunt.log.error('File could not be instrumented.');
      }
    }

  });
};
