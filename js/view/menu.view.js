;define(['model/item.model'], function(__Item) {
  return new (function() {
    var __option = {
      elem: {
        menu_base: null,
      },
    };
    this.init = function(_opt) {
      __option.elem = $.extend({}, __option.elem, _opt);
      this.redraw();
    };
    var clear = function() {
      __option.elem.menu_base.html('');
    };
    var add_item = function(_i) {
      __option.elem.menu_base.append(
        $('<div class="menu_item"></div>').append(
          $('<img></img>').attr('src', _i.img_path),
          $('<button></button>').addClass("btn add_to_cart").html('加入购物车')
        )
      );
    };
    var add_end = function(_i) {
      __option.elem.menu_base.append($('<div></div>').css('clear', 'both'));
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