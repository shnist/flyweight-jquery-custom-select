module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				files: {
					'assets/js/jquery.flyweightcustomselect.min.js': 'assets/js/jquery.flyweightcustomselect.js'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};
