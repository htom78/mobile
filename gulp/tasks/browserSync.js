'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', () => {
	browserSync({
		port: config.browserPort,
		ui: {port: config.UIPort},
		proxy: `localhost:${config.serverPort}`
	});
});
