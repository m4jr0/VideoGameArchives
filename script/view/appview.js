define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: '#VGATitle',
    template: _.template($('#websiteTitleTemplate').html()),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template({
        welcome: 'Welcome to',
        title: 'VGA'
      }));
    }
  });

  return AppView;
});
