define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var GameTitleView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#gameTitleTemplate').html()),
    render: function () {
      this.$el.html(this.template({
        gameTitle: this.model.toJSON()['game'].label,
        gameID: '#game/' + this.model.cid
      }));

      return this;
    }
  });

  return GameTitleView;
});
