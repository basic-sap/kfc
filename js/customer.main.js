
require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap', 'jquery.cookie'], function($) {
    $(function(){
      require(['view/menu.view', 'view/cart.view', 'view/nav.view'], function(__Menu_View, __Cart_View, __Nav_View) {
        __Menu_View.init({
          menu_base: $('#menu'),
        });
        __Cart_View.init({
          cart_base: $('#cart'),
        });
        __Nav_View.init({
          nav_base: $('header nav')
        });
      });
    });
  });
});
