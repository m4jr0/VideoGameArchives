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
        console.log(self.games);
        self.games.each(self.addGameTitle, this);
        Backbone.history.start();
      }
    });
  };

  App.prototype.addGameTitle = function (gameTitle) {
    var gameTitleView = new GameTitleView({model: gameTitle});
    $('#gameList').append(gameTitleView.render().el);
  };

  return App;
});
