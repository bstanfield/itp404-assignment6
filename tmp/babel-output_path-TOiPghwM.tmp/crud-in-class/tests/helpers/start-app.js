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