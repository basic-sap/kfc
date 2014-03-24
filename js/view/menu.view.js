;define(['model/item.model', 'control/cart.control', 'control/compare.control'], function(__Item, __Cart, __Compare) {
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
        __Cart.add_record($(this).data("item"));
      });
      __option.elem.menu_base.on('click', 'button.add_to_compare', function(event){
        __Compare.add_item($(this).attr('item_id'));
      });
    };
    var clear = function() {
      __option.elem.menu_base.html('');
    };
    var add_item = function(_i) {
      __option.elem.menu_base.append(
        $('<div class="menu_item"></div>').append(
          $('<img></img>').attr('src', _i.img_path),
          $('<div></div>').append(
            $('<label></label>').html(_i.name).addClass("menu_item_name"),
            $('<label></label>').html(_i.price + '元/份').addClass("menu_item_price")),
          $('<div></div>').addClass("menu_item_opera").append(          
            $('<button></button>').addClass("btn btn-default btn-xs add_to_compare").html('加入比较').attr('item_id', _i._id),
            $('<button></button>').addClass("btn btn-primary btn-xs add_to_cart").append(
              $('<span></span>').addClass('glyphicon glyphicon-shopping-cart'),
              ' 加入购物车'
              ).data('item', _i))
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