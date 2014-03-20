;define(['control/menu.control'], function(__Menu_Control) {
  return new (function() {
    var __option = {
      elem: {
        menu_base: null,
      },
    };
    this.init = function(_opt) {
      __option.elem = $.extend({}, __option.elem, _opt);
      this.redraw();
    }
    var clear = function() {
      __option.elem.menu_base.html('');
    };
    var add_item = function(_i) {
      __option.elem.menu_base.append(_i);
    };
    this.redraw = function() {
      __Menu_Control.get_all_items(function(_items) {
        for (var i = _items.length - 1; i >= 0; i--) {
          add_item(_items[i].gen_html());
        };
      }, this);
    };
  })();
});