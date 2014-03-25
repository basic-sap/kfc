
require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap', 'flot', 'flot_time', 'flot_valuelabels', 'flot_pie'
   ], function($, _) {
    $(function(){
      require(['view/daily_fi.chart.view', 'view/item_profit.chart.view'], function(__Daily_Fi_Chart, __Item_Profit_Chart) {
        __Daily_Fi_Chart.init({
          dom_base: $('#daily_fi_chart'),
        });
        __Item_Profit_Chart.init({
          dom_base: $('#sec_chart_item_profit'),
        });
      });
    });
  });
});
