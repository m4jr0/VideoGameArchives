define(['jQuery', 'Game', 'Backbone'], function ($, game, Backbone) {
  var GameCollection = Backbone.Collection.extend({
    model: game,
    url: 'https://dl.dropboxusercontent.com/u/100580224/VideoGameClean.json',
    parse: function (response) {
      return response;
    }
  });

  return GameCollection;
});
