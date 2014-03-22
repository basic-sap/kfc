define(['util/conn'], function(__c) {
  function Order(_i) {
    var order = _i || {};
    this._id = order._id || 0;
    this.order_time = order.order_time ? new Date(order.order_time) : false;
    this.price = parseFloat(order.price || 0);
    this.cost = parseFloat(order.cost || 0);
    this.profit = this.price - this.cost;
    this.verified = order.verified || false;
    this.paid = order.paid || false;
    this.deliveried = order.deliveried || false;
    this.deliveried_time = order.deliveried_time ? new Date(order.deliveried_time) : false;
    this.items = order.items || '';
    this.descr = order.descr || '';
  };

  Order.get_all_orders = function(anddothis, object) {
    __c.send_to_server('order.json', {
    }, function(_d) {
      var _orders = _d.orders;
      var orders = [];
      for (var i = _orders.length - 1; i >= 0; i--) {
        orders.push(new Order(_orders[i]));
      };
      anddothis.call(object, orders);
    }, this);
  };

  return Order;
});