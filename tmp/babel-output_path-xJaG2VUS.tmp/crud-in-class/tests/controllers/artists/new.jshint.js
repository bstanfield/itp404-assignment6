define('crud-in-class/tests/controllers/artists/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/artists/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/artists/new.js should pass jshint.\ncontrollers/artists/new.js: line 10, col 21, \'$\' is not defined.\n\n1 error');
  });
});