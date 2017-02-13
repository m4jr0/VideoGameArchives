requirejs.config({
  paths: {
    jQuery: '../lib/jquery-3.1.1.min',
    Underscore: '../lib/underscore-min',
    Backbone: '../lib/backbone-min'
  },
  shim: {
    'Backbone': {
      deps: ['Underscore', 'jQuery'],
      exports: 'Backbone'
    }
  }
});

require(['Main'], init);

function init (Main) {
  'use strict';

  var main = new Main();
  main.initialize();
}
