define(function() {
  return (function() {require.config({
    baseUrl: './js',
    paths: {
      'jquery': 'lib/jquery-1.9.1.min',
      'jquery.cookie': 'lib/jquery.cookie',
      'bootstrap': 'lib/bootstrap-3.0.0/dist/js/bootstrap.min',
      'fuelux': 'lib/fuelux-master/dist'
    },
    shim: {
      'bootstrap':  ['jquery']
    }
  });})();
});
