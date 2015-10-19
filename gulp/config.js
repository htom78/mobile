'use strict';
const dest = 'dist';
module.exports = {

	browserPort: 3000,
	UIPort: 3001,
	serverPort: 3002,


	outputName: 'app',

	dest: {
		root: dest	
	},

	styles: {
		src: 'src/styles/pages/*.scss',
		dest: `${dest}/css`,
		prodSourceMap: false,
		sassIncludePaths: []
	},

	views: {
		src: 'src/views/**/*.html',
		dest: dest	
	}

};
