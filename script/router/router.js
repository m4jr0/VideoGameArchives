define(['jQuery', 'Underscore', 'Backbone', 'App'],
function ($, _, Backbone, App) {
  var VGARouter = Backbone.Router.extend({
    routes: {
      '': 'randomGames',
      'search/:query': 'search' // #search/
    },
    app: undefined,
    search: function (query) {
      var search = query.toLowerCase();
      var results = this.app.games.filter(function (model) {
        return _.some(
          model.get('game'),
          function (value) {
            return model.get('game').label.toLowerCase().indexOf(search) !== -1;
          }
        );
      });

      this.app.displaySearchResults(results, this);
    },
    randomGames: function () {
      this.app.selectRandomGameTitles(this);
    }
  });

  return VGARouter;
});
