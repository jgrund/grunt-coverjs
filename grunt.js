module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },

    clean: {
      test: ['tmp']
    },

    // Config to run for testing.
    cover: {
      compile: {
        files: {
          'tmp/testCoverage.js': ['test/fixtures/testCoverage.js'],
          'tmp/testDir/*.js': ['test/fixtures/testCoverage2.js', 'test/fixtures/nested/testCoverage3.js']
        }
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('tests', 'lint clean cover test');

  // Default task.
  grunt.registerTask('default', 'tests');
};
