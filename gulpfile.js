const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//Compile SASS
gulp.task('sass', function () {
  gulp.src('./source/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css'));
});

//Minify SASS
gulp.task('minifycss', function () {
  return gulp.src('./build/assets/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./build/assets/css/'));
});

//Compress images
gulp.task('compressimg', function () {
  return gulp.src('./source/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/img'));
});

//Minify JS
gulp.task('minifyjs', function () {
  return gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js'));
});

//Watch files
gulp.task('watch', function () {
  gulp.watch('./source/sass/**/*.sass', ['sass']);
  gulp.watch('./build/assets/css/*.css', ['minifycss']);
  gulp.watch('./source/js/*.js', ['minifyjs']);
  gulp.watch('./source/img/*', ['compressimg']);
});

gulp.task('default', function(){
  console.log('\n\n\n\n---------------------------------------------------\n| Gulp File by Cameron Lucas                      |\n| Siteit Solutions @ https://siteitsolutions.com/ |\n---------------------------------------------------\n\nCommands\nsass    (Compile SASS to CSS)\nminifycss    (Minify CSS Files)\ncompressimg    (Compress all images)\nminifyjs    (Minify JavaScript Files)\nwatch (Watches Everything *Recommended*)\n\n\n\n');
});
