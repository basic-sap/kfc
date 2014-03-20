
define(['util/conn'], function(__c) {
  function Item(_i) {
    var item = _i || {};
    this._id = item._id || 0;
    this.name = item.name || '';
    this.price = parseInt(item.price || 0);
    this.cost = parseInt(item.cost || 0);
    this.descr = item.descr || '';
    this.img_path = item.img_path || '';
  };

  Item.get_all_items = function(anddothis, object) {
    __c.send_to_server('menu.json', {
    }, function(_d) {
      var _items = _d.items;
      var items = [];
      for (var i = _items.length - 1; i >= 0; i--) {
        items.push(new Item(_items[i]));
      };
      anddothis.call(object, items);
    }, this);
  };
  Item.get_by_id = function(_id, anddothis, object) {
    Item.get_all_items(function(_items){
      for (var i = _items.length - 1; i >= 0; i--) {
        if (_id == _items[i]._id) {
          anddothis.call(object, _items[i]);
        }
      };
    }, this);
  }


  return Item;
});
