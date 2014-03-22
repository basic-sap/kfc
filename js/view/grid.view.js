;define(['model/grid_data.model', 'model/order.model'], function(__Grid_Data, __Order) {
  return new (function() {
    var __option = {
      elem: {
        grid_base: null,
        grid_table: null,
      }
    };
    this.init = function(_opt) {
      __option.elem = $.extend(__option.elem, _opt);
      __option.elem.grid_table = __option.elem.grid_base.find('table#order_grid_table');
      this.redraw();
    };
    this.redraw = function() {
      __Order.get_all_orders(function(_orders){
        var data_source = new __Grid_Data({
          columns: [
            {
              property: 'order_time',
              label: 'Order Time',
              sortable: true
            },
            {
              property: 'price',
              label: 'Price',
              sortable: true
            }
          ],
          data: _orders,
          delay: 250
        });
        __option.elem.grid_table.datagrid({dataSource: data_source});
      }, this);
    };
  })();
});