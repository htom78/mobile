'use strict';

var gulp = require('gulp');
var config = require('../config');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../utils/handleErrors');
var browserSync = require('browser-sync');

gulp.task('styles', () => {
	var createSourcemap = !global.isProd || config.styles.prodSourceMap;
	return gulp.src(config.styles.src)
		.pipe(gulpif(createSourcemap, sourcemaps.init()))
		.pipe(sass({
			sourceComments: !global.isProd,
			outputStyle: global.isProd ? 'compressed': 'nested',
			includePaths: config.styles.sassIncludePaths
		}))
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
		.pipe(gulpif(
			createSourcemap,
			sourcemaps.write(global.isProd ? './' : null)			
		))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(browserSync.stream({onece: true}));
});
