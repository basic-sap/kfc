define(function() {
  return (function() {require.config({
    baseUrl: './js',
    paths: {
      'jquery': 'lib/jquery-1.9.1.min',
      'underscore': 'lib/underscore.min',
      'jquery.cookie': 'lib/jquery.cookie',
      'bootstrap': 'lib/bootstrap-3.0.0/dist/js/bootstrap.min',
      'fuelux': 'lib/fuelux-master/dist',
      'moment': 'lib/moment',
      'flot': 'lib/flot/jquery.flot.min',
      'flot_time': 'lib/flot/jquery.flot.time.min',
      'flot_valuelabels': 'lib/flot/jquery.flot.valuelabels',
      'flot_pie': 'lib/flot/jquery.flot.pie.min',
      
    },
    shim: {
      'fuelux': {deps: ['jquery', 'underscore']},
      'bootstrap': {deps: ['jquery']},
      'flot': {deps: ['jquery']},
      'flot_time': {deps: ['jquery', 'flot']},
      'flot_valuelabels': {deps: ['jquery', 'flot']},
      'flot_pie': {deps: ['jquery', 'flot']},
    }
  });})();
});
