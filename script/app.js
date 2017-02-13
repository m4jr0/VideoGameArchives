define(['jQuery', 'Underscore', 'Backbone', 'AppView', 'GameCollection',
  'GameTitleView','Router'],
function ($, _, Backbone, AppView, GameCollection, GameTitleView,Router) {
  function App() {
    console.log('Hello');
  }


  App.prototype.initialize = function () {
    console.log('Initialize');
    var appView = new AppView();
    this.games = new GameCollection();
	this.router=new Router();
	this.router.app=this;
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
