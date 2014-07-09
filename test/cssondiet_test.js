'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function one_to_one( test, actualname, expectedname ) {
  test.expect(1);

  if (! expectedname) {
    expectedname = actualname;
  }
  var actual = grunt.file.read('tmp/'+actualname);
  var expected = grunt.file.read('test/expected/'+expectedname);
  test.equal(actual, expected, 'Actual result file different than Expected file');

  test.done();
}


exports.cssondiet = {
  setUp: function(done) {
    done();
  },
  preprocess: function(test) {
    one_to_one( test, 'preprocess.css' )
  },
  multiple: function(test) {
    one_to_one( test, 'multiple.css' )
  },
  minify: function(test) {
    one_to_one( test, 'minify.css' )
  },
  include: function(test) {
    one_to_one( test, 'include.css' )
  },
};
