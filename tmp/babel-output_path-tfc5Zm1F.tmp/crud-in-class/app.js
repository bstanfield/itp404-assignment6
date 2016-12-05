define('crud-in-class/app', ['exports', 'ember', 'crud-in-class/resolver', 'ember-load-initializers', 'crud-in-class/config/environment'], function (exports, _ember, _crudInClassResolver, _emberLoadInitializers, _crudInClassConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _crudInClassConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudInClassConfigEnvironment['default'].podModulePrefix,
    Resolver: _crudInClassResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _crudInClassConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});