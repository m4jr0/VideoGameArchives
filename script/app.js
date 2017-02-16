define(['jQuery', 'Underscore', 'Backbone', 'TitleView', 'GameCollection',
  'GameTitleView', 'Router', 'SearchView', 'GameDetailsView'],
function ($, _, Backbone, TitleView, GameCollection, GameTitleView, Router,
  SearchView, GameDetailsView) {
  function App () {
  }

  App.prototype.initialize = function () {
    
    this.router = new Router({app: this});
    this.router.app = this;
    this.titleView = new TitleView();
    this.searchView = new SearchView();
    this.searchView.router = this.router;
    var self = this;
    this.titleView.router = this.router;
	var storage=JSON.parse(localStorage.getItem("games"));
	if(storage==null){
		this.games = new GameCollection();
		this.games.fetch({
		success: function (collection, response) {
			self.selectRandomGameTitles(this);
			Backbone.history.start();
			localStorage.setItem("games",JSON.stringify(self.games));	
		},
		error : function (collection, response) {
			self.games.url='https://dl.dropboxusercontent.com/u/100580224/VideoGameClean.json';
			self.games.fetch({
				success: function (collection, response) {
					self.selectRandomGameTitles(this);
					Backbone.history.start();
					localStorage.setItem("games",JSON.stringify(self.games));	
				}
			})
			
		}
    });
	}
	else{
		this.games = new GameCollection();
		this.games.set(storage)
		self.selectRandomGameTitles(this);
		Backbone.history.start();
	}
	
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

  App.prototype.displayGameDetails = function (game) {
    $('#gameList').empty();
    $('#gameDetails').empty();
    var gameDetailsView = new GameDetailsView({model: game});
    $('#gameDetails').append(gameDetailsView.render().el);
  };

  App.prototype.displayGameTitles = function (gameTitles, windowVar) {
    $('#gameList').empty();
    $('#gameDetails').empty();
    gameTitles.each(this.addGameTitle, windowVar);
  };

  return App;
});
