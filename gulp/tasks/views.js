'use strict';

var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('views', () => {
	return gulp.src(config.views.src)
		.pipe(gulp.dest(config.views.dest))
		.pipe(browserSync.stream({once: true}));
});
