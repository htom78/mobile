'use strict';

var config = require('../config').images;
var changed = require('gulp-changed');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

gulp.task('images', () => {
	return gulp.src(config.src)
		.pipe(changed(config.dest))
		.pipe(gulpif(global.isProd, imagemin()))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.stream({once: true}));
});
