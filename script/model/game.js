define(['jQuery', 'Backbone'], function ($, Backbone) {
  var Game = Backbone.Model.extend({
		"game":{
			"label":"NULL",
			"developer":"NULL",
			"computingPlatform":"NULL",
			"publisher":"NULL",
			"releaseDate":"NULL",
			"genre":"NULL"
		}
	})
  return Game;
});
