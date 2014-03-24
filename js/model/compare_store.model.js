;define(['underscore'], function(_) {
  return new (function () {
    var __campare_store_list = [];
    var refresh_list = function() {   
      return $.extend([] ,__campare_store_list);   
    };
    var save_list = function(_i_list) {
      __campare_store_list = $.extend([], _i_list);
    };
    var item_exists = function(_item_id) {
      var l = refresh_list();
      if (-1 == _.indexOf(l, _item_id)) 
        return false;
      return true;
    };
    this.add_item = function(_item) {
      if (item_exists(_item._id)) {
      }
      else {
        var l = refresh_list();
        l.push(_item);
        save_list(l);
      }
    };
    this.get_count = function() {
      return __campare_store_list.length;
    };
    this.get_list = function() {
      return refresh_list().reverse();
    };
  })();
});