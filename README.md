# grunt-cover [![Build Status](https://secure.travis-ci.org/jgrund/grunt-cover-js.png?branch=master)](http://travis-ci.org/jgrund/grunt-cover-js)

Grunt task to instrument JavaScript files using coverjs.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-cover`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-coverjs');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
Inside your project's `grunt.js` gruntfile, add a section named ```cover```.

The cover section has a ```compile``` parameter, inside which you list the files to be instrumented:

```javascript
    cover: {
      compile: {
        files: {
          'instrumented/testCoverage.js': ['test/fixtures/testCoverage.js'],
          'instrumented/testDir/*.js': ['test/fixtures/testCoverage2.js', 'test/fixtures/nested/testCoverage3.js']
        }
      }
    }
```

When the task runs, the files will be instrumented and placed in the specifed path.
