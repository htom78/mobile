'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['browserSync', 'server'], () => {
	gulp.watch(config.styles.src, ['styles']);
	gulp.watch(config.views.src, ['views']);
});
