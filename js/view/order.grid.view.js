;define(['model/grid_data.model', 'model/order.model', 'util/date.format'], function(__Grid_Data, __Order) {
  return new (function() {
    var __option = {
      elem: {
        grid_base: null,
        grid_table: null,
      }
    };
    this.init = function(_opt) {
      var _this = this;
      __option.elem = $.extend(__option.elem, _opt);
      __option.elem.grid_table = __option.elem.grid_base.find('table#order_grid_table');
      this.redraw();
    };
    this.redraw = function() {
      var columns = function() {
        var columns = {
          'order_time': {
            property: 'order_time_disp',
            label: '下单时间',
            sortable: true
          },
          'price': {
            property: 'price',
            label: '售价',
            sortable: true
          },
          'cost': {
            property: 'cost',
            label: '成本',
            sortable: true            
          },
          'profit': {
            property: 'profit',
            label: '利润',
            sortable: true
          },
          'verified': {
            property: 'verified_disp',
            label: '审核',
            sortable: true
          },
          'paid': {
            property: 'paid_disp',
            label: '已付款',
            sortable: true
          },
          'deliveried': {
            property: 'deliveried_disp',
            label: '已送货',
            sortable: true
          },
          'deliveried_time': {
            property: 'deliveried_time_disp',
            label: '送达时间',
            sortable: true
          },
          'items': {
            property: 'items',
            label: '详单',
            sortable: true
          },
        };
        if ($(window).width() < 600) {
          return [
            columns.order_time,
            columns.price,
            columns.verified,
            columns.deliveried
          ];
        }
        else {
          var r_c = [];
          for (var k in columns) {
            r_c.push(columns[k]);
          }
          return r_c;
        }

      }();
      __Order.get_all_orders(function(_orders){
        var data_source = new __Grid_Data({
          columns: columns,
          data: _orders,
          delay: 250,
          formatter: function(_orders) {
            $.each(_orders, function(_i, _o){
              _o.order_time_disp = _o.order_time ? _o.order_time.format('yyyy-MM-dd hh:mm') : '';
              _o.deliveried_time_disp = _o.deliveried_time ? _o.deliveried_time.format('yyyy-MM-dd hh:mm') : '';
              _o.verified_disp = _o.verified ? '<span class="label label-default">已审核</span>': '<button class="btn btn-sm btn-default">审核</button>';
              _o.paid_disp = _o.paid ? '<span class="label label-default">已付款</span>' : '<span class="label label-warning">未付款</span>';
              _o.deliveried_disp = _o.deliveried ? '<span class="label label-default">已送</span>' : '<span class="label label-warning">未送</span>';
            });
          }
        });
        __option.elem.grid_table.datagrid({dataSource: data_source});
      }, this);
    };
  })();
});