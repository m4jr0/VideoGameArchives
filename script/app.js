define(['jQuery', 'Underscore', 'Backbone', 'AppView','GameCollection'], function ($, _, Backbone, AppView,GameCollection) {
  function App () {
    console.log('Hello');
  }
  
  App.prototype.initialize = function () {
    console.log('Initialize');
    var appView = new AppView();
	var games= new GameCollection();
	games.fetch({
	dataType: 'json',
	success: function (collection, response) {
		console.log(games);
		}
	});
  };

  return App;
});
