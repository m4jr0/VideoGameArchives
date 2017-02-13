define(['jQuery', 'Underscore', 'Backbone'], function ($, _, BB) {
  function Main () {
    console.log('Hello');
  }

  Main.prototype.initialize = function () {
    console.log('Initialize');
  };

  return Main;
});
