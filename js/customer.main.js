
require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap'], function($) {
    $(function(){
      require(['view/menu.view'], function(__Menu_View) {
        __Menu_View.init({
          menu_base: $('#menu'),
        })

      });
    });
  });
});
