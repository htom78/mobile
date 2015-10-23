'use strict';

var config = require('../config');
var http = require('http');
var express = require('express');
var gutil = require('gulp-util');
var logger = require('morgan');
var gulp = require('gulp');

gulp.task('server', () => {
	var server = express();

	server.use(logger('dev'));
	server.use(express.static(config.dest.root));

	server.get('/valuation', (req, res) => {
		res.sendFile('valuation.html', {root: 'dist'});	
	});
	server.get('/regulation', (req, res) => {
		res.sendFile('regulation.html', {root: 'dist'});	
	});
	server.get('/illustrate', (req, res) => {
		res.sendFile('illustrate.html', {root: 'dist'});	
	});
	/*
	server.all('/*', (req, res) => {
		res.sendFile('valuation.html', {root: 'dist'});	
	});
	*/

	var s = http.createServer(server);
	s.on('error', err => {
		if (err.code === 'EADDRINUSE') {
			gutil.log('Development server is already started at port ' + config.serverPort);	
		} else {
			throw err;	
		}	
	});

	s.listen(config.serverPort);

});
