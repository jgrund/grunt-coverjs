/*
 * grunt-coverjs
 * https://github.com/grundjoseph/grunt-coverjs
 *
 * Copyright (c) 2012 Joe Grund
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  'use strict';

  /**
   * Note: If the instrument method throws an error this task will force an abort.
   */
  grunt.registerMultiTask('cover', 'Instruments JavaScript Files using coverjs.', function () {
    var path = require('path');
    var helpers = require('grunt-lib-contrib').init(grunt);
    var _ = grunt.utils._;
    var Instrument = require('coverjs').Instrument;

    var options = helpers.options(this, {
      basePath: false,
      flatten: false
    });

    var srcFiles;
    var basePath;
    var instrumentedSrc;
    var newFileDest;

    //TODO: ditch this when grunt v0.4 is released
    this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

    /**
     * Instruments the given source file.
     *
     * @param srcFile
     * @return {String} Returns the instrumented source file as a string.
     */
    function coverFile(srcFile) {
      var srcCode = grunt.file.read(srcFile);
      Instrument = require('coverjs').Instrument;

      try {
        return new Instrument(srcCode, {name: srcFile}).instrument();
      } catch (e) {
        grunt.log.error(_.sprintf('File %s could not be instrumented.', srcFile));
        grunt.fatal(e, 3);
      }
    }

    this.files.forEach(function (file) {
      file.dest = path.normalize(file.dest);
      srcFiles = grunt.file.expand(file.src);

      if (srcFiles.length === 0) {
        grunt.log.error('No source files found');
        return;
      }

      srcFiles.forEach(function (srcFile) {
        instrumentedSrc = coverFile(srcFile);

        basePath = helpers.findBasePath(srcFiles, options.basePath);
        newFileDest = helpers.buildIndividualDest(file.dest, srcFile, basePath, options.flatten);

        grunt.file.write(newFileDest, instrumentedSrc);
        grunt.log.ok(_.sprintf('Created: %s', newFileDest));
      });
    });
  });
};
