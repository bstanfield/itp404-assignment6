define('crud-in-class/routes/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var promise = $.ajax({
        type: 'get',
        url: 'http://itp-api.herokuapp.com/api/artists'
      });

      return promise;
    }
  });
});