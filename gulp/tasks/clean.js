'use strict';
var gulp = require('gulp');
var config = require('../config');
var del = require('del');

gulp.task('clean', cb => {
	cb = cb || function() {};
	return del(config.dest.root, cb);
});
