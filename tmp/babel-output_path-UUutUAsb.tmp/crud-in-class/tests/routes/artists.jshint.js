define('crud-in-class/tests/routes/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists.js should pass jshint.\nroutes/artists.js: line 5, col 19, \'$\' is not defined.\n\n1 error');
  });
});