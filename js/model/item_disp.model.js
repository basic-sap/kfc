
define(function() {
  function Item_Disp(_i) {
    this.item = _i || {};
  };
  Item_Disp.prototype.gen_html = function() {
    return $('<div class="menu_item"><img src="' + this.item.img_path + '" /><button class="btn"> 加入购物车 </button></div>');
  };


  return Item_Disp;
});
