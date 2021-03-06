define('crud-in-class/routes/artists/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var artistID = params.id;
      var url = 'http://itp-api.herokuapp.com/api/artists/';

      var promise = $.ajax({
        type: 'get',
        url: url
      }).then(function (response) {
        return {
          id: response.artists[0].id,
          name: response.artists[0].name

        };
      });

      return promise;
    }
  });
});