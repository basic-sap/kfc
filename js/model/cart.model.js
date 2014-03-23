define(['model/item.model'], function(__Item) {
  return new (function Cart() {
    var cookie_record_list = [];
    var refresh_records = function() {      
      //return JSON.parse($.cookie('cart_records') || '[]');
      return $.extend([] ,cookie_record_list);
    };
    var save_records = function(_rec_list) {
      //$.cookie('cart_records', JSON.stringify(_rec_list), {path:'/'});
      cookie_record_list = $.extend([], _rec_list);
    };
    this.get_all_records = function() {
      return refresh_records().reverse();
    };
    var item_exists = function(_item) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item._id == _item._id) {
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
    this.remove_record = function(_item_id) {
      var record_list = refresh_records();
      for (var i = record_list.length - 1; i >= 0; i--) {
        if (record_list[i].item._id == _item_id) {
          record_list.splice(i, 1);
          break;
        }
      };
      save_records(record_list);
    };
    this.get_order_price_sum = function() {
      var sum = 0;
      var record_list = refresh_records();
      $.each(record_list, function(_i, _record) {
        sum += _record.item.price * _record.count;
      });
      return sum;
    };
  })();
});