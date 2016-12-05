"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('crud-in-class/app', ['exports', 'ember', 'crud-in-class/resolver', 'ember-load-initializers', 'crud-in-class/config/environment'], function (exports, _ember, _crudInClassResolver, _emberLoadInitializers, _crudInClassConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _crudInClassConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudInClassConfigEnvironment['default'].podModulePrefix,
    Resolver: _crudInClassResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _crudInClassConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('crud-in-class/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'crud-in-class/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _crudInClassConfigEnvironment) {

  var name = _crudInClassConfigEnvironment['default'].APP.name;
  var version = _crudInClassConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('crud-in-class/controllers/artists/artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      createSong: function createSong(e) {
        var _this = this;

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
        promise.then(function (response) {
          _this.set('songName', null);
          _this.set('price', null);
          _this.set('createdBy', null);
          var songs = _this.get('model.songs');
          // console.log(response);
          // songs.pushObject(response.song);
          //
          // OR
          //
          var newSongs = songs.concat(response.song);
          _this.set('model.songs', newSongs);
        }, function () {
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
});
define('crud-in-class/controllers/artists/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      createArtist: function createArtist(e) {
        var _this = this;

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

        promise.then(function (response) {
          _this.set('id', null);
          _this.set('artistName', null);

          var artists = _this.get('model.artists');
          var newArtists = artists.concat(response.artist);
          _this.set('model.artists', newArtists);
        }, function () {
          alert('error');
        });

        this.transitionToRoute('artists');
      }

    }

  });
});
define('crud-in-class/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('crud-in-class/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('crud-in-class/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crud-in-class/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _crudInClassConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_crudInClassConfigEnvironment['default'].APP.name, _crudInClassConfigEnvironment['default'].APP.version)
  };
});
define('crud-in-class/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('crud-in-class/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('crud-in-class/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('crud-in-class/initializers/export-application-global', ['exports', 'ember', 'crud-in-class/config/environment'], function (exports, _ember, _crudInClassConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_crudInClassConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _crudInClassConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_crudInClassConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('crud-in-class/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('crud-in-class/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('crud-in-class/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("crud-in-class/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('crud-in-class/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('crud-in-class/routes/artists/artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var artistID = params.id;
      var url = 'http://itp-api.herokuapp.com/api/artists/' + artistID + '/songs';

      var promise = $.ajax({
        type: 'get',
        url: url
      }).then(function (response) {
        return {
          id: response.artists[0].id,
          name: response.artists[0].name,
          songs: response.songs
        };
      });

      return promise;
    }
  });
});
define('crud-in-class/routes/artists/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var artist_id = params.id;
      var url = 'http://itp-api.herokuapp.com/api/artists/' + artist_id;

      var promise = $.ajax({
        type: 'get',
        url: url
      }).then(function (response) {
        return {
          id: response.artists[0].id,
          name: response.artists[0].name

        };
      });
      return this.modelFor('artists');
      return promise;
    }
  });
});
define('crud-in-class/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("crud-in-class/templates/artists", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 10
            },
            "end": {
              "line": 6,
              "column": 10
            }
          },
          "moduleName": "crud-in-class/templates/artists.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-success");
          var el2 = dom.createTextNode("Create new artist");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 10
              },
              "end": {
                "line": 20,
                "column": 10
              }
            },
            "moduleName": "crud-in-class/templates/artists.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "data.name", ["loc", [null, [19, 16], [19, 29]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 6
            },
            "end": {
              "line": 23,
              "column": 6
            }
          },
          "moduleName": "crud-in-class/templates/artists.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["artists.artist", ["get", "data.id", ["loc", [null, [18, 38], [18, 45]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [18, 10], [20, 22]]]]],
        locals: ["data"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "crud-in-class/templates/artists.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n         ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["artists.new"], [], 0, null, ["loc", [null, [4, 10], [6, 22]]]], ["content", "outlet", ["loc", [null, [11, 4], [11, 14]]], 0, 0, 0, 0], ["block", "each", [["get", "model.artists", ["loc", [null, [16, 14], [16, 27]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [16, 6], [23, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("crud-in-class/templates/artists/artist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "crud-in-class/templates/artists/artist.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "container song");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "song.title", ["loc", [null, [5, 10], [5, 24]]], 0, 0, 0, 0]],
        locals: ["song"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "crud-in-class/templates/artists/artist.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("This artist doesn't have any songs! Add one below:");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "crud-in-class/templates/artists/artist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "btn btn-primary");
        var el4 = dom.createTextNode("Create Song");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'onsubmit');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        morphs[4] = dom.createMorphAt(element0, 9, 9);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.songs", ["loc", [null, [2, 8], [2, 19]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [10, 9]]]], ["attribute", "onsubmit", ["subexpr", "action", ["createSong"], [], ["loc", [null, [null, null], [14, 40]]], 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["class", "form-control", "placeholder", "Name", "type", "text", "value", ["subexpr", "@mut", [["get", "songName", ["loc", [null, [15, 70], [15, 78]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 4], [15, 80]]], 0, 0], ["inline", "input", [], ["class", "form-control", "placeholder", "Price", "type", "text", "value", ["subexpr", "@mut", [["get", "price", ["loc", [null, [17, 71], [17, 76]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 4], [17, 78]]], 0, 0], ["inline", "input", [], ["class", "form-control", "placeholder", "Created By", "type", "text", "value", ["subexpr", "@mut", [["get", "createdBy", ["loc", [null, [19, 76], [19, 85]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [19, 4], [19, 87]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("crud-in-class/templates/artists/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "crud-in-class/templates/artists/new.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "btn btn-primary");
        var el4 = dom.createTextNode("Submit");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'onsubmit');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]], 0, 0, 0, 0], ["attribute", "onsubmit", ["subexpr", "action", ["createArtist"], [], ["loc", [null, [null, null], [7, 42]]], 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "class", "form-control", "placeholder", " Artist Name", "value", ["subexpr", "@mut", [["get", "artistName", ["loc", [null, [8, 78], [8, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [8, 4], [8, 90]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('crud-in-class/config/environment', ['ember'], function(Ember) {
  var prefix = 'crud-in-class';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("crud-in-class/app")["default"].create({"name":"crud-in-class","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=crud-in-class.map
