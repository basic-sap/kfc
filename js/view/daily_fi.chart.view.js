;define(['model/order.model', 'util/date.format'], function(__Order) {
  return new (function() {
    var __option = {
      elem: {
        dom_base: null,
        chart_area: null,
        button_area: null,
        button_sell: null,
        button_profit: null
      },
      dataset: {
        'sell': {
          label: '日销售',
          data:[],
          color: 0,
          display: true
        },
        'profit': {
          label: '日利润',
          data:[],
          color: 1,
          display: true
        }
      },
      chart_opt: {
        lines: {
          show: true,
          lineWidth: 1
        },
        xaxis: {
          mode: "time",
          timeformat: "%Y/%m/%d",
          minTickSize: [1, "day"],
          tickLength: 1,
          //min: new Date(Math.ceil((new Date) / (24*60*60*1000)) * (24*60*60*1000) - 4*24*60*60*1000)
        },
        yaxis: {
          max: 1000,
          min: 0,
        },
        series: {
          valueLabels: {
            show: true,
            showAsHtml: true,
          }
        },
        grid: {
          show: true,
          backgroundColor: '#f7f6f6',
          borderWidth: 1,
          borderColor: '#aaa',
        }

      }
    };
    this.init = function(_opt) {
      var _this = this;
      __option.elem = $.extend(__option.elem, _opt);
      __option.elem.chart_area = __option.elem.dom_base.find("div.chart_area");
      __option.elem.button_area = __option.elem.dom_base.find('div.button_area');
      __option.elem.button_sell = __option.elem.button_area.find('button#chart_item_sell');
      __option.elem.button_profit = __option.elem.button_area.find('button#chart_item_profit');
      __option.elem.button_area.find('button').addClass('active');

      __option.elem.button_sell.click(function() {
        if ($(this).hasClass('active')) {
          __option.dataset.sell.display = false;
          $(this).removeClass('active');
        }
        else {
          __option.dataset.sell.display = true;
          $(this).addClass('active');
        }
        _this.redraw();
      });
      __option.elem.button_profit.click(function() {
        if ($(this).hasClass('active')) {
          __option.dataset.profit.display = false;
          $(this).removeClass('active');
        }
        else {
          __option.dataset.profit.display = true;
          $(this).addClass('active');
        }
        _this.redraw();
      });
      this.redraw();
    };
    var gen_daily_data = function(_l, _value_fun) {
      var list = $.extend([], _l);
      list.sort(function(a, b) {
        return a.order_time - b.order_time;
      });
      var r = [];
      $.each(list, function() {
        for (var i = r.length - 1; i >= 0; i--) {
          if (r[i][0] - new Date(this.order_time.format('yyyy-MM-dd')) == 0) {
            r[i][1] += _value_fun(this);
            return;
          }
        };
        var pair = [];
        pair[0] = new Date(this.order_time.format('yyyy-MM-dd'));
        pair[1] = _value_fun(this);
        r.push(pair);
      });
      return r;
    };

    var gen_display_data = function() {
      var r = [];
      $.each(__option.dataset, function() {
        if (this.display) {
          r.push(this);
        };
      });
      return r;
    };

    this.redraw = function() {
      __Order.get_all_orders(function(_order_list) {
        __option.dataset.sell.data = gen_daily_data(_order_list, function(_o){
          return _o.price;
        });
        __option.dataset.profit.data = gen_daily_data(_order_list, function(_o) {
          return _o.price - _o.cost;
        });
        var data = gen_display_data();
        var option = __option.chart_opt;
        console.log(data);
        $.plot(__option.elem.chart_area, data, option);
      }, this);
    };
  })();
});