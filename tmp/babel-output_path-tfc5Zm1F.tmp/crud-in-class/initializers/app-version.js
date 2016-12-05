define('crud-in-class/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crud-in-class/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _crudInClassConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_crudInClassConfigEnvironment['default'].APP.name, _crudInClassConfigEnvironment['default'].APP.version)
  };
});