var gulp = require('gulp');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');


gulp.task('test', function() {
  return gulp.src(['apiTest/**/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});

gulp.task('spec', function() {
  return gulp.src(['src/**/*.spec.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});


gulp.task('default', ['test']);