import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var promise = $.ajax({
      type: 'get',
      url: 'http://itp-api.herokuapp.com/api/artists'
    });

    return promise;
  }
});
