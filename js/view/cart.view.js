;define(['model/cart.model'], function(__Cart){
  return new (function() {
    var __option = {
      elem: {
        cart_base: null,
        cart_record_area: null,
      }
    };
    this.init = function(_opt) {
      __option.elem = $.extend({}, __option.elem, _opt);
      __option.elem.cart_record_area = __option.elem.cart_base.find($('table tbody'));
      this.redraw();
    };

    var clear_record = function() {
      __option.elem.cart_record_area.html('');      
    };
    var add_record = function(_record) {
      __option.elem.cart_record_area.append(
        $('<tr></tr>').append(
          $('<td></td>').html(_record.item.name),
          $('<td></td>').html(_record.count),
          $('<td></td>').html(_record.item.price * _record.count),
          $('<td></td>').html('x')
        )
      );
    }

    this.redraw = function() {
      clear_record();
      var records = __Cart.get_all_records();
      for (var i = records.length - 1; i >= 0; i--) {
        add_record(records[i]);
      };
    };
  })();

});