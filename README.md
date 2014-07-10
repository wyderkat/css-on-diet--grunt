# grunt-cssondiet

> GruntJS plugin which compiles [CSS-On-Diet](http://cofoh.com/css-on-diet) files to CSS. 


## Standard Grunt info-section

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssondiet --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssondiet');
```

## The CSS-On-Diet preprocessor and "cssondiet" Grunt task

[CSS-On-Diet](http://cofoh.com/css-on-diet) is a preprocessor for CSS files. The key feature are
mnemonics for frequently used properties and value names, which are similar to Emmet abbreviations.
Other goodies include media breakpoints, optional colons and semicolons, nested and one line
comments, variables and mixins, calculator, hexadecimal RGBA.

Grunt task has name `cssondiet`.

This task requires you to have [Python](https://www.python.org/download/)
and [CSS-On-Diet](http://cofoh.com/css-on-diet) installed. If you're on OS X or Linux you probably
already have Python installed; test with `python -V` in your terminal. When you've confirmed you have
Python installed, run `pip install CSSOnDiet` to install CSS-On-Diet.
Maybe you will need to install `pip` command before.


## Examples

### Example config

```javascript
grunt.initConfig({

  cssondiet: {                         // Task
    dist: {                            // Target
      options: {                       // Target options
        minifyCss: true       
      },
      files: {                         // Dictionary of files
        'main.css': 'main.cod',        // 'destination': 'source' 
        'widgets.css': 'widgets.cod'
      }
    }
  }

});

grunt.loadNpmTasks('grunt-cssondiet');

grunt.registerTask('default', ['cssondiet']);
```

## Compile from multiple sources

CSS-On-Diet concatenates all source files, like they were included in some root-meta file

```javascript
grunt.initConfig({

  cssondiet: {
    dist: {
      files: {
        'main.css': [ 'main.cod', 'side.cod' ]
      }
    }
  }

});
```

## Options

### minifyCss

Type: `Boolean`  
Default: `false`

Minifies final CSS file.

### includeDirs

Type: `Array of Strings`

Additional directories paths to look for imported files (@cod-import rule).

### noComments

Type: `Boolean`  
Default: `false`

Extract comments from final CSS. Always on for `minify-css` option.

### noHeader

Type: `Boolean`  
Default: `false`

Don't add header line (banner) at the beginning of the CSS. Always on for `minify-css` option.


## Release History
 * 2014-07-11  v0.1.0  Initial
