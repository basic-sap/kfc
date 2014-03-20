define(['util/conn'], function(__c) {
  return new (function Cart() {
    var refresh_records = function() {
      return JSON.parse($.cookie('cart_items') || '[]');
    };
    var save_records = function(_rec_list) {
      $.cookie('cart_items', JSON.stringify(_rec_list));
    };
    this.get_all_records = function() {
      return refresh_records();
    };
    var item_exists = function(_item) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i]._id == _item._id) {
          return true;
        }
      };
      return false;
    };
    this.item_inc = function(_item) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item._id == _item._id) {
          record_list[i].count++;
        }
      };
      save_records(record_list);
    };
    this.add_record = function(_item) {
      if (item_exists(_item)) {
        this.item_inc(_item);
      }
      else {
        var record_list = refresh_records();
        record_list.push({
          item: _item,
          count: 1
        });
        save_records(record_list);
      }
    };
  })();
});