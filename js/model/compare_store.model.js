;define(['underscore'], function(_) {
  return new (function () {
    var __campare_store_list = [];
    var refresh_list = function() {      
      return __campare_store_list;
    };
    var save_list = function(_i_list) {
      __campare_store_list = _i_list;
    };
    var item_exists = function(_item_id) {
      var l = refresh_list();
      if (-1 == _.indexOf(l, _item_id)) 
        return false;
      return true;
    };
    this.add_item = function(_item_id) {
      if (item_exists(_item_id)) {
      }
      else {
        var l = refresh_list();
        l.push(_item_id);
        save_list(l);
      }
    };
    this.get_count = function() {
      return __campare_store_list.length;
    };
  })();
});