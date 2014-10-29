# grunt-cssondiet

> Grunt plugin which compiles [CSS-On-Diet](http://cssondiet.com) files to CSS. 


## "cssondiet" Grunt Task

This plugin can be installed in your project directory by this command:
```shell
npm install grunt-cssondiet --save-dev
```

But it requires [CSS-On-Diet](http://cssondiet.com) preprocessor, which can be installed
like this:
```shell
pip install CSSOnDiet
```

On some system that command (pip) will not be present. It should be installed with not too old
Python version. But if you have old version [install it from
here](https://pip.pypa.io/en/latest/installing.html).

If you are new to [Grunt](http://gruntjs.com/) check out [Introduction
page](http://gruntjs.com/getting-started)

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssondiet');
```

## The CSS-On-Diet preprocessor

[CSS-On-Diet](http://cssondiet.com) is a preprocessor for CSS files. The key feature is mnemonics for frequently used properties, which are similar to Emmet abbreviations. Other goodies include intuitive media breakpoints, nested and single line comments, variables and mixins, a calculator, hexadecimal RGBA, minifier, ...

This task requires you to have [Python](https://www.python.org/download/)
and [CSS-On-Diet](http://cssondiet.com) installed. If you're on OS X or Linux you probably
already have Python installed; test with `python -V` in your terminal. When you've confirmed you have
Python installed, run `pip install CSSOnDiet` to install CSS-On-Diet.
Maybe you will need to install `pip` command before.


## Examples

### Example config

```javascript
module.exports = function(grunt) {
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

};
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

Additional directories paths to look for imported files (@cod-include rule).

### noComments

Type: `Boolean`  
Default: `false`

Extract comments from final CSS. Always enabled for `minify-css` option.

### noHeader

Type: `Boolean`  
Default: `false`

Don't add header line (banner) at the beginning of the CSS. Always enabled for `minify-css` option.


## Release History
 * 2014-10-29  v0.1.3  A new website link.
 * 2014-07-24  v0.1.2  Documentation update.
 * 2014-07-15  v0.1.1  Better warning messages. 
 * 2014-07-11  v0.1.0  Initial
