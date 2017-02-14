define(['jQuery', 'Game', 'Backbone'], function ($, game, Backbone) {
  var GameCollection = Backbone.Collection.extend({
    model: game,
    url: 'https://dl.dropboxusercontent.com/u/100580224/VideoGameCleanLight.json',
    parse: function (response) {
      return response;
    }
  });

  return GameCollection;
});
