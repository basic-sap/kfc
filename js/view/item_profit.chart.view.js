;define(['model/order.model', 'model/item.model'], function(__Order, __Item) {
  return new (function() {
    var __option = {
      elem: {
        dom_base: null,
        chart_area: null,
      },
      dataset: [],
      chart_opt: {
        series: {
          pie: {
            show: true
          },
          valueLabels: {
            show: false,
            showAsHtml: false,
          }
        }
      }
    };
    this.init = function(_opt) {
      var _this = this;
      __option.elem = $.extend(__option.elem, _opt);
      __option.elem.chart_area = __option.elem.dom_base.find("div.chart_area");
     
      this.redraw();
    };

    var get_item = function(_item_id, _item_list) {
      for (var i = _item_list.length - 1; i >= 0; i--) {
        if (_item_list[i]._id == _item_id) {
          return _item_list[i];
        }
      };
      return false;
    };

    var gen_item_data = function(_order_list, _item_list) {
      var order_list = $.extend([], _order_list);
      var item_list = $.extend([], _item_list);
      var item_count_pair = [];
      $.each(order_list, function() {
        var items = this.items.split('|');
        $.each(items, function() {
          var item = get_item(this, item_list);
          if (item == false) {
            return;
          }
          for (var i = item_count_pair.length - 1; i >= 0; i--) {
            if (item_count_pair[i].item._id == item._id){
              item_count_pair[i].count++
              return;
            }
          };
          item_count_pair.push({
            item: item,
            count: 1
          });
        });
      });
      var r = [];
      $.each(item_count_pair, function() {
        var n = this.item.name;
        var p = this.item.price - this.item.cost;
        var c = this.count;
        r.push({
          label: n,
          data: p * c,
        });
      });
      return r;
    }
    

    this.redraw = function() {
      var _this = this;
      __Order.get_all_orders(function(_order_list) {
        __Item.get_all_items(function(_item_list) {          
          __option.dataset = gen_item_data(_order_list, _item_list);
          var data = __option.dataset;
          var option = __option.chart_opt;
          $.plot(__option.elem.chart_area, data, option);
        }, _this)
      }, _this);
    };
  })();
});