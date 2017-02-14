define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var TitleView = Backbone.View.extend({
    el: '#VGATitleContainer',
    template: _.template($('#websiteTitleTemplate').html()),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template({
        welcome: 'Welcome to',
        title: 'VGA',
        subTitle: 'Video Game Archives'
      }));
    },
    events: {
      'click': 'displayHome'
    },
    displayHome: function () {
      this.router.navigate('/', {trigger: true});
    },
    router: undefined
  });

  return TitleView;
});
