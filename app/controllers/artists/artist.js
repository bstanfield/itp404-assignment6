import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSong: function(e) {
      e.preventDefault();
      var title = this.get('songName');
      var price = this.get('price');
      var createdBy = this.get('createdBy');

      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/songs',
        data: {
          title: title,
          artist: this.get('model.id'),
          genre: 1,
          price: price,
          createdBy: createdBy
        }
      });

      // var controller = this;
      // // console.log('controller', this);
      // promise.then(function() {
      //   // alert('yay');
      //   // console.log('inside funciton', this);
      //   controller.set('songName', null);
      //   controller.set('price', null);
      //   controller.set('createdBy', null);
      // }, function() {
      //   alert('error');
      // });

      // OR
      promise.then((response) => {
        this.set('songName', null);
        this.set('price', null);
        this.set('createdBy', null);
        var songs = this.get('model.songs');
        // console.log(response);
        // songs.pushObject(response.song);
        //
        // OR
        //
        var newSongs = songs.concat(response.song);
        this.set('model.songs', newSongs);
      }, function() {
        alert('error');
      });
    }
  }
});

// Array.prototype.pushObject = function() {
//   // notify ember that data has changed so that it can rerender
//   array.push(value)
// }




// $('form').on('submit', function(e) {
//   e.preventDefault();
// })
