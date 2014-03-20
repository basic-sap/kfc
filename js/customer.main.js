
require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap', 'jquery.cookie'], function($) {
    $(function(){
      require(['view/menu.view', 'view/cart.view'], function(__Menu_View, __Cart_View) {
        __Menu_View.init({
          menu_base: $('#menu'),
        });
        __Cart_View.init({
          cart_base: $('#cart'),
        });
      });
    });
  });
});
