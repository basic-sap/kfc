define(function() {
  return (function() {require.config({
    baseUrl: './js',
    paths: {
      'jquery': 'lib/jquery-1.9.1.min',
      'bootstrap': 'lib/bootstrap-3.0.0/dist/js/bootstrap.min'
    },
    shim: {
      'bootstrap':  ['jquery']
    }
  });})();
});
