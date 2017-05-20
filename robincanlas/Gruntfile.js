module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            "build": {
                "src": ["js/main.js"],
                "dest": "js/main.annotated.js"
            }
        },
        uglify: {
            "options": { 
                mangle: true,
                compress: {
                    drop_console: true
                },
                output: {
                    quote_style: 1
                }
            },
            "build": {
                "src": ["js/main.annotated.js"],
                "dest": "js/main.min.js"
            }
        },
      cssmin: {
          build: {
            files: {
              'css/style.min.css': 'css/main.css'
            }
          }
        }

    });

    // Load required modules
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Task definitions
    grunt.registerTask('dev', ['ngAnnotate','uglify', 'cssmin']);
};