define(['Backbone','Game'], function (Backbone,Game) {
  var GameCollection = Backbone.Collection.extend({
    model: Game,
    url: 'data/VideoGameClean.json',
    parse: function (response) {
      return response;
    }
  });

  return GameCollection;
});
