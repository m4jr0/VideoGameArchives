define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: '#VGATitle',
    template: _.template('<h3>Welcome to <%= title %>!</h3>'),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template({title: 'Video Game Archives'}));
    }
  });

  return AppView;
});
