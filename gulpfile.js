'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task(('min'), () => {
    return gulp.src('./lib/mr_material.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('watch', () => {
    gulp.watch('./lib/**/*.scss', ['min']);
});