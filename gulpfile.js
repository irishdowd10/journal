var gulp = require('gulp');
//browserify and vinyl go together
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//concat
var concat = require('gulp-concat');
//minify
var uglify = require('gulp-uglify');

//build and clean go together
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
// var del = require('del');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("build", function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  };
});

// gulp.task("clean", function() {
//   return del(['build', 'tmp']);
// });