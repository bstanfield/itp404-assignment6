define('crud-in-class/tests/controllers/artists/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/artists/artist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/artists/artist.js should pass jshint.\ncontrollers/artists/artist.js: line 11, col 21, \'$\' is not defined.\n\n1 error');
  });
});