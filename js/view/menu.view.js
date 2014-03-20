;define(['model/item.model', 'control/cart.control'], function(__Item, __Cart) {
  return new (function() {
    var __option = {
      elem: {
        menu_base: null,
      },
    };
    this.init = function(_opt) {
      __option.elem = $.extend({}, __option.elem, _opt);
      this.redraw();
      __option.elem.menu_base.on('click', 'button.add_to_cart', function(event){
        __Cart.add_record($(this).attr('item_id'));
      });
    };
    var clear = function() {
      __option.elem.menu_base.html('');
    };
    var add_item = function(_i) {
      __option.elem.menu_base.append(
        $('<div class="menu_item"></div>').append(
          $('<img></img>').attr('src', _i.img_path),
          $('<button></button>').addClass("btn add_to_cart").html('加入购物车').attr('item_id', _i._id)
        )
      );
    };
    var add_end = function() {
      __option.elem.menu_base.append($('<div></div>').css({
        'clear': 'both'
      }));
    };
    this.redraw = function() {
      __Item.get_all_items(function(_items) {
        for (var i = _items.length - 1; i >= 0; i--) {
          add_item(_items[i]);
        };
        add_end();
      }, this);
    };
  })();
});