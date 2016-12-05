define('crud-in-class/router', ['exports', 'ember', 'crud-in-class/config/environment'], function (exports, _ember, _crudInClassConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _crudInClassConfigEnvironment['default'].locationType,
    rootURL: _crudInClassConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('artist', { path: ':id' });
      this.route('new');
    });
  });

  exports['default'] = Router;
});