define(['jQuery', 'Underscore', 'Backbone', 'TitleView', 'GameCollection',
  'GameTitleView', 'Router', 'SearchView'],
function ($, _, Backbone, TitleView, GameCollection, GameTitleView, Router,
  SearchView) {
  function App () {
  }

  App.prototype.initialize = function () {
    this.titleView = new TitleView();
    this.games = new GameCollection();
    this.router = new Router();
    this.router.app = this;
    this.searchView = new SearchView();
    this.searchView.router = this.router;
    var self = this;
    this.titleView.router = this.router;

    this.games.fetch({
      dataType: 'json',
      success: function (collection, response) {
        self.selectRandomGameTitles(this);
        Backbone.history.start();
      }
    });
  };

  App.prototype.addGameTitle = function (gameTitle) {
    var gameTitleView = new GameTitleView({model: gameTitle});
    $('#gameList').append(gameTitleView.render().el);
  };

  App.prototype.selectRandomGameTitles = function (windowVar) {
    var maxElements = 20;
    var size = this.games.length;
    var gamesToDisplay = new GameCollection();

    if (maxElements > size) maxElements = size;

    for (var i = 0; i < maxElements; i++) {
      gamesToDisplay.add(this.games.models[Math.floor(Math.random() * size - 1)]);
    }

    this.displayGameTitles(gamesToDisplay, windowVar);
  };

  App.prototype.displaySearchResults = function (results, windowVar) {
    var resultsCollection = new GameCollection();
    var size = results.length;

    for (var i = 0; i < size; i++) {
      resultsCollection.add(results[i]);
    }

    this.displayGameTitles(resultsCollection, windowVar);
  };

  App.prototype.displayGameTitles = function (gameTitles, windowVar) {
    $( "#gameList" ).empty();
    gameTitles.each(this.addGameTitle, windowVar);
  };

  return App;
});
