const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('style', gulp.series(() => {
    return gulp.src('./src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({ cascade: false })]))
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
}));

gulp.task('script', gulp.series(() => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('./dist/js'));
}));

gulp.task('image', gulp.series(() => {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}));

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', gulp.task(['style']));
    gulp.watch('./src/js/**/*.*', gulp.task(['script']));
    gulp.watch('./src/images/**/*.*', gulp.task(['image']));
});

gulp.task('default', gulp.series(gulp.parallel('style', 'script', 'image', 'watch')));
