define(['jQuery', 'Underscore', 'Backbone', 'AppView', 'GameCollection',
  'GameTitleView'],
function ($, _, Backbone, AppView, GameCollection, GameTitleView) {
  function App () {
    console.log('Hello');
  }

  App.prototype.initialize = function () {
    console.log('Initialize');
    var appView = new AppView();
    this.games = new GameCollection();
    var self = this;

    this.games.fetch({
      dataType: 'json',
      success: function (collection, response) {
        console.log(self.games);
        self.games.each(self.addGameTitle, this);
      }
    });
  };

  App.prototype.addGameTitle = function (gameTitle) {
    var gameTitleView = new GameTitleView({model: gameTitle});
    $('#gameList').append(gameTitleView.render().el);
  };

  return App;
});
