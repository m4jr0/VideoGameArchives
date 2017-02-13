define(['jQuery', 'Game','Backbone'], function ($,game,Backbone) {
	  
var GameCollection = Backbone.Collection.extend({
	model:game,
    url: 'https://dl.dropboxusercontent.com/u/100580224/VideoGameClean.json',
    parse: function(response) {
          console.log(response);
          return response;
        }
});/*

  var main = new Main();
  main.initialize();
}*/
return GameCollection;
});