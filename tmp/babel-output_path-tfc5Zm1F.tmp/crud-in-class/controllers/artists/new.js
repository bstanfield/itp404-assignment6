define('crud-in-class/controllers/artists/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      createArtist: function createArtist(e) {
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

        promise.then(function () {
          //alert('your artist was added!');
          this.set('artistName', null);

          //var artists = this.get('model.artists');
          //artists.push(response.artist)
        }, function () {
          alert('error');
        });
      }

    }

  });
});