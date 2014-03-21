define(function() {
  return new (function Cart() {
    var cookie_record_list = [];
    var refresh_records = function() {      
      //return JSON.parse($.cookie('cart_records') || '[]');
      return cookie_record_list;
    };
    var save_records = function(_rec_list) {
      //$.cookie('cart_records', JSON.stringify(_rec_list), {path:'/'});
      cookie_record_list = _rec_list;
    };
    this.get_all_records = function() {
      return refresh_records();
    };
    var item_exists = function(_item_id) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item_id == _item_id) {
          return true;
        }
      };
      return false;
    };
    this.item_inc = function(_item_id) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item_id == _item_id) {
          record_list[i].count++;
        }
      };
      save_records(record_list);
    };
    this.add_record = function(_item_id) {
      if (item_exists(_item_id)) {
        this.item_inc(_item_id);
      }
      else {
        var record_list = refresh_records();
        record_list.push({
          item_id: _item_id,
          count: 1
        });
        save_records(record_list);
      }
    };
    this.remove_record = function(_item_id) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item_id == _item_id) {
          record_list.splice(i, 1);
        }
      };
        
    };
  })();
});