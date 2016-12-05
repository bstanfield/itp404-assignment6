import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e){
      e.preventDefault();
        var name = this.get('artistName');
        var id = this.get('model.id');
      
      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          id: id,
          name: name
        }
        
      });
      

      promise.then((response)=> {
        this.set('id', null);
        this.set('artistName', null);
      
        var artists = this.get('model.artists');
        var newArtists = artists.concat(response.artist);
        this.set('model.artists', newArtists);
        
      }, function() {
        alert('error');
      });
      
      this.transitionToRoute('artists');
    }
  
  }
  
});
