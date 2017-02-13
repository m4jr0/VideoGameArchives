define(['jQuery', 'Underscore', 'Backbone', 'AppView'], function ($, _, Backbone, AppView) {
  function App () {
    console.log('Hello');
  }

  App.prototype.initialize = function () {
    console.log('Initialize');
    var appView = new AppView();
  };

  return App;
});
