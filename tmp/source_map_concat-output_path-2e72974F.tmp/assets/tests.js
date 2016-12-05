'use strict';

define('crud-in-class/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('crud-in-class/tests/controllers/artists/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/artists/artist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/artists/artist.js should pass jshint.\ncontrollers/artists/artist.js: line 11, col 21, \'$\' is not defined.\n\n1 error');
  });
});
define('crud-in-class/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('crud-in-class/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('crud-in-class/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'crud-in-class/tests/helpers/start-app', 'crud-in-class/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _crudInClassTestsHelpersStartApp, _crudInClassTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _crudInClassTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _crudInClassTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('crud-in-class/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('crud-in-class/tests/helpers/resolver', ['exports', 'crud-in-class/resolver', 'crud-in-class/config/environment'], function (exports, _crudInClassResolver, _crudInClassConfigEnvironment) {

  var resolver = _crudInClassResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _crudInClassConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudInClassConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('crud-in-class/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('crud-in-class/tests/helpers/start-app', ['exports', 'ember', 'crud-in-class/app', 'crud-in-class/config/environment'], function (exports, _ember, _crudInClassApp, _crudInClassConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _crudInClassConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _crudInClassApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('crud-in-class/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('crud-in-class/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('crud-in-class/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('crud-in-class/tests/routes/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists.js should pass jshint.\nroutes/artists.js: line 5, col 19, \'$\' is not defined.\n\n1 error');
  });
});
define('crud-in-class/tests/routes/artists/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists/artist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/artist.js should pass jshint.\nroutes/artists/artist.js: line 8, col 19, \'$\' is not defined.\n\n1 error');
  });
});
define('crud-in-class/tests/routes/artists/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/artists/new.js should pass jshint.');
  });
});
define('crud-in-class/tests/test-helper', ['exports', 'crud-in-class/tests/helpers/resolver', 'ember-qunit'], function (exports, _crudInClassTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_crudInClassTestsHelpersResolver['default']);
});
define('crud-in-class/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('crud-in-class/tests/unit/controllers/artists/artist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:artists/artist', 'Unit | Controller | artists/artist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crud-in-class/tests/unit/controllers/artists/artist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/artists/artist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/artists/artist-test.js should pass jshint.');
  });
});
define('crud-in-class/tests/unit/routes/artists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists', 'Unit | Route | artists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crud-in-class/tests/unit/routes/artists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/artists-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artists-test.js should pass jshint.');
  });
});
define('crud-in-class/tests/unit/routes/artists/artist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists/artist', 'Unit | Route | artists/artist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crud-in-class/tests/unit/routes/artists/artist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/artists/artist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artists/artist-test.js should pass jshint.');
  });
});
define('crud-in-class/tests/unit/routes/artists/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists/new', 'Unit | Route | artists/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crud-in-class/tests/unit/routes/artists/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/artists/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artists/new-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('crud-in-class/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
