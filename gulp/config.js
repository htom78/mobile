'use strict';
const distDir = 'dist';
module.exports = {

	browserPort: 3000,
	UIPort: 3001,
	serverPort: 3002,


	outputName: 'app',

	dest: {
		root: distDir	
	},

	styles: {
		src: 'src/styles/pages/*.scss',
		dest: `${distDir}/css`,
		prodSourceMap: false,
		sassIncludePaths: []
	},

	views: {
		src: 'src/views/**/*.html',
		dest: distDir	
	},

	images: {
		src: 'src/assets/imgs/**/*',
		dest: `${distDir}/imgs`
	}

};
