var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var babelify = require('babelify');
var browserify = require('browserify');
var fs = require('fs');
var autoprefixer = require('gulp-autoprefixer');

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('sass', function() {
  return gulp.src('src/sass/*.sass')
    .pipe(sass())//{outputStyle: 'compressed'}
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  var bundler = browserify('./src/dist/main.js');
  bundler.transform(babelify);

  return bundler.bundle()
    .on('error', function(err) {console.error(err);})
    .pipe(fs.createWriteStream('./src/js/main.js'));
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });

  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/dist/**/*.js', ['js']);
});
