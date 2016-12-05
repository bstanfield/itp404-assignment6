define('crud-in-class/tests/helpers/resolver', ['exports', 'crud-in-class/resolver', 'crud-in-class/config/environment'], function (exports, _crudInClassResolver, _crudInClassConfigEnvironment) {

  var resolver = _crudInClassResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _crudInClassConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudInClassConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});