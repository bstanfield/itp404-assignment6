import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var artistID = params.id;
    var url = 'http://itp-api.herokuapp.com/api/artists/' + artistID + '/songs';

    var promise = $.ajax({
      type: 'get',
      url: url
    }).then(function(response) {
      return {
        id: response.artists[0].id,
        name: response.artists[0].name,
        songs: response.songs
      };
    });

    return promise;
  }	
});
