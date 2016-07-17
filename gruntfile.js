module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
    dist: {
        src: [
            ' E:/FIN/Andreyobadin/source/modernizr-2.6.2.min.js',
            ' E:/FIN/Andreyobadin/source/login.js',
		
        ],
        dest: 'E:/FIN/Andreyobadin/source/production.js',
    }
}

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};