const gulp = require("gulp");
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const plumber = require("gulp-plumber");
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: './build/'
        },
        port: 3000
    });
    done();
}

function browserSyncReload(done){
    browsersync.reload();
    done();
}

function images() {
    return gulp.src('./source/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/img'));
}

function css(){
    return gulp.src('./source/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        basename: 'main',
        suffix: '.min'
    }))
    .pipe(gulp.dest('./build/assets/css'))
    .pipe(browsersync.stream());
}

function scripts(){
    return gulp.src('./source/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js'))
    .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch('./source/sass/**/*', css);
    gulp.watch('./source/js/**/*', scripts);
    gulp.watch('./source/img/**/*', images);
    gulp.watch('./build/**/*.html', browserSyncReload);
}

gulp.task('images', images);
gulp.task('css', css);
gulp.task('js', scripts);
gulp.task('build', gulp.series(gulp.parallel(images, css, scripts)));
gulp.task('watch', gulp.parallel(watchFiles, browserSync));