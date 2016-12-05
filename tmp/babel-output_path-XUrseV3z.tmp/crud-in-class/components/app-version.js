define('crud-in-class/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'crud-in-class/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _crudInClassConfigEnvironment) {

  var name = _crudInClassConfigEnvironment['default'].APP.name;
  var version = _crudInClassConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});