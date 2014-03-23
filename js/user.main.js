
require(['requirejs.config'] , function() {
  require(['jquery', 'underscore', 'jquery.cookie',
   'fuelux/datagrid', 
   'fuelux/select',
   'fuelux/all',
   'fuelux/intelligent-dropdown',
   ], function($, _) {
    $(function(){
      require(['view/order.grid.view'], function(__Grid_View) {
        __Grid_View.init({
          grid_base: $('#order_grid'),
        });
      });
    });
  });
});
