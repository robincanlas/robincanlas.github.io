'use strict';

module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    compass: {
      compile: {
        options: {
          config: 'config.rb',
          force: true,
        },
      }
    },
    watch: {
      css: {
        files: ['public/styles/**/*.scss'],
        tasks: ['compass']
      },
    },
    clean: {
        dist: ['public/.tmp', 'dist/*'],
        server: 'public/.tmp'
    },
    // connect: {
    //     options: {
    //         port: 8000,
    //         hostname: 'localhost',
    //         // livereload: true,
    //     },
    //     server: {
    //         options: {
    //           open: true,
    //             middleware: function(connect) {
    //                 return [
    //                     connect.static('public')
    //                 ];
    //             }
    //         }
    //     },
    // },


  });

  grunt.registerTask('server', [
    'clean:server',
    'compass',
    'watch'
  ]);

  grunt.registerTask('build', [
  ]);

  grunt.registerTask('default', [
    'server'
  ]);

};