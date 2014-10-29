/*
 * grunt-cssondiet
 * http://cssondiet.com
 *
 * Copyright (c) 2014 Tomasz Wyderka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: {
      name: 'grunt-cssondiet'
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    nodeunit: {
      tests: ['test/*_test.js']
    },

    cssondiet: {
      preprocess: {
        files: {
          'tmp/preprocess.css': 'test/fixtures/basic.cod'
        },
        options: {
          noHeader: true // will be hard to test with header
        }
      },
      multiple: {
        files: {
          'tmp/multiple.css':['test/fixtures/basic.cod','test/fixtures/extra.cod'],
        },
        options: {
          noHeader: true // will be hard to test with header
        }
      },
      minify: {
        files: {
          'tmp/minify.css': 'test/fixtures/basic.cod'
        },
        options: {
          noHeader: true, // will be hard to test with header
          minifyCss: true 
        }
      },
      include: {
        files: {
          'tmp/include.css': 'test/fixtures/subdir/include.cod'
        },
        options: {
          noHeader: true, // will be hard to test with header
          includeDirs: ["test","test/fixtures"],
        }
      },
        
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'cssondiet', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
