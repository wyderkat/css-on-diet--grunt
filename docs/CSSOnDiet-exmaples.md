# Examples

## Example config

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

## Concat and import

Instead of concatenating the files, just `@cod-import` them into another `.cod` file eg. `main.cod`.

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


## Compile multiple files

You can specify multiple `destination: source` items in `files`.

```javascript
grunt.initConfig({
  cssondiet: {
    dist: {
      files: {
        'main.css': 'main.cod',
        'widgets.css': 'widgets.cod'
      }
    }
  }
});
```

