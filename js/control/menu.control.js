define(['model/item.model', 'model/item_disp.model'], function(__Item, __Item_Disp){
  return new (function(){
    this.get_all_items = function(_anddothis, object) {
      var i = new __Item();
      i.get_all_items(function(_items) {
        var items = [];
        for (var i = _items.length - 1; i >= 0; i--) {
          items.push(new __Item_Disp(_items[i]));
        };
        _anddothis.call(object, items);
      }, this);
    };

  })();
})