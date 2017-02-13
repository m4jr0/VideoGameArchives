define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: '#container',
    template: _.template("<h3>Welcome to <%= who %>!</h3>"),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template({who: 'Video Game Archives'}));
    }
  });

  return AppView;
});
