;define(['model/cart.model', 'model/item.model'], function(__Cart, __Item){
  return new (function() {
    var __option = {
      elem: {
        cart_base: null,
        cart_record_area: null,
        cart_sum: null,
      }
    };
    this.init = function(_opt) {
      var _this = this;
      __option.elem = $.extend({}, __option.elem, _opt);
      __option.elem.cart_record_area = __option.elem.cart_base.find($('table tbody'));
      __option.elem.cart_sum = __option.elem.cart_base.find($('span#order_sum'));
      this.redraw();
      __option.elem.cart_record_area.on('click', 'span.cart_remove_record', function() {
        __Cart.remove_record($(this).attr('item_id'));
        _this.redraw();
      });
    };

    var clear_record = function() {
      //__option.elem.cart_record_area.hide();
      __option.elem.cart_record_area.html('');
      //__option.elem.cart_record_area.fadeIn();
    };
    var add_record = function(_record) {
      var item = _record.item;
      __option.elem.cart_record_area.append(
        $('<tr></tr>').append(
          $('<td></td>').html(item.name),
          $('<td></td>').html(_record.count),
          $('<td></td>').html(item.price * _record.count),
          $('<td></td>').append(
            $('<span></span>').addClass('cart_remove_record').attr('item_id', _record.item_id).html('x')
          )
        )
      );
    };

    this.redraw = function() {
      clear_record();
      var records = __Cart.get_all_records();
      for (var i = records.length - 1; i >= 0; i--) {
        add_record(records[i]);
      };
      __option.elem.cart_sum.html(__Cart.get_order_price_sum());
    };
  })();

});