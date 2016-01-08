module.exports = function(grunt) {



  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {                              
      dist: {                            

        files: {                         
          'styling/main.css': 'styling/main.scss',        
        }
      }
    },
    scsslint: {
      allFiles: [
      'styling/main.scss',
      ],
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass'); 
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);
  grunt.registerTask('sasslint', ['scsslint']);


};