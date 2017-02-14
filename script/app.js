define(['jQuery', 'Underscore', 'Backbone', 'TitleView', 'GameCollection',
  'GameTitleView', 'Router'],
function ($, _, Backbone, TitleView, GameCollection, GameTitleView, Router) {
  function App () {
    console.log('Hello');
  }

  App.prototype.initialize = function () {
    console.log('Initialize');
    var titleView = new TitleView();
    this.games = new GameCollection();
    this.router = new Router();
    this.router.app = this;
    var self = this;

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

  App.prototype.selectRandomGameTitles = function (test) {
    var maxElements = 20;
    var size = this.games.length;
    var gamesToDisplay = new GameCollection();

    if (maxElements > size) maxElements = size;

    for (var i = 0; i < maxElements; i++) {
      gamesToDisplay.add(this.games.models[Math.floor(Math.random() * size - 1)]);
    }

    gamesToDisplay.each(this.addGameTitle, test);
  };

  return App;
});
