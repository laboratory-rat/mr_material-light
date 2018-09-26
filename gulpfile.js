'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task(('style'), () => {
    return gulp.src('./lib/mr_material.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('style:watch', () => {
    gulp.watch('./lib/**/*.scss', ['style']);
});