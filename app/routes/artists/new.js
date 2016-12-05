import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var artist_id = params.id;
    var url = 'http://itp-api.herokuapp.com/api/artists/' + artist_id;

    var promise = $.ajax({
      type: 'get',
      url: url
    }).then(function(response) {
      return {
        id: response.artists[0].id,
        name: response.artists[0].name

      };
    });
    return this.modelFor('artists');
    return promise;
  }
});
