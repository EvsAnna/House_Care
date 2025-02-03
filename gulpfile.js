'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

exports.default = function () {
    return gulp.src('./styles/src/style.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('./style.min.css'))
        .pipe(gulp.dest('./styles/dist'));
}



exports.watch = function () {
    gulp.watch('./styles/src/*.less', gulp.series('default'));
};