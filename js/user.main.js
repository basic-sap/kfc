
require(['requirejs.config'] , function() {
  require(['jquery', 'underscore', 'bootstrap', 'jquery.cookie', 'fuelux/loader.min'], function($, _) {
    $(function(){
      require(['view/grid.view'], function(__Grid_View) {
        __Grid_View.init({
          grid_base: $('#order_grid'),
        });
      });
    });
  });
});
