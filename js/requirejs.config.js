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
      'flot': 'lib/flot'
    },
    shim: {
      'flot/jquery.flot.min': {deps: ['jquery']},
      'flot/jquery.flot.time.min': {deps: ['jquery', 'flot/jquery.flot.min']},
    }
  });})();
});
