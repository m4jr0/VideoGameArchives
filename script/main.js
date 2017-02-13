define(['jQuery', 'Underscore', 'Backbone', 'AppView'], function ($, _, Backbone, AppView) {
  function Main () {
    console.log('Hello');
  }

  Main.prototype.initialize = function () {
    console.log('Initialize');
    var appView = new AppView();
  };

  return Main;
});
