define(['jQuery','Backbone','App'], function ($,Backbone,App) {
	
var VGARouter = Backbone.Router.extend({

  routes: {
    "search/:query":        "search",  // #search/
  },
  app:undefined,
  search: function(query) {
	  console.log("coucou");
    var search = query.toLowerCase();
	var result =this.app.games.filter(function(model) {
		return _.some(
			model.get('game'), 
			function(value) {
				return model.get("game").label.toLowerCase().indexOf(search) != -1;
			}
		);
	});
	console.log(result);
  }

});
return VGARouter;
}
)