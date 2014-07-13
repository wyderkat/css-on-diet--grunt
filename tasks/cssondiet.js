/*
 * grunt-cssondiet
 * http://www.cofoh.com/css-on-diet
 *
 * Copyright (c) 2014 Tomasz Wyderka
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var dargs = require('dargs');
var numCPUs = require('os').cpus().length;
var async = require('async');
var chalk = require('chalk');
var spawn = require('win-spawn');
var which = require('which');

module.exports = function(grunt) {

  // That works only without targets
  // grunt.registerTask('cod','cssondiet');
  
  grunt.registerMultiTask('cssondiet', 'Easy and fast CSS preprocessor', function() {
    var asyncdone = this.async();
    var options = this.options();
    var passedArgs;
    var bin = 'cod';

    try {
      which.sync( bin );
    } catch (err) {
      return grunt.warn(
        '\nYou need to have Python and CSS-On-Diet Command Line Tool (cod)\n'+
        'installed and in your PATH for this task to work.\n' +
        'More info: https://github.com/wyderkat/css-on-diet--grunt\n'
      );
    }

    passedArgs = dargs(options);

    async.eachLimit(this.files, numCPUs, function (file, next) {

      file.src.forEach(function(f) {
        if (!grunt.file.exists(f)) {
          grunt.log.warn('Source file "' + f + '" not found.');
          return next();
        }
      });

      var args = file.src.concat([ "-o", file.dest ]).concat(passedArgs);
      
      // Make sure grunt creates the destination folders if they don't exist
      if(!grunt.file.exists(file.dest)) {
        grunt.file.write(file.dest, '');
      }

      //grunt.log.warn(args);
      var cp = spawn(bin, args, {stdio: 'inherit'});

      cp.on('error', function (err) {
        grunt.warn(err);
      });

      cp.on('close', function (code) {
        if (code > 0) {
          return grunt.warn('Exited with error code ' + code);
        }

        grunt.log.writeln('File ' + chalk.cyan(file.dest) + ' created.');
        next();
      });
    }, asyncdone);


  });

};
