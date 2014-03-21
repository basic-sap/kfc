;define(['model/cart.model', 'view/cart.view'], function(__Model, __View) {
  return new (function() {
    this.add_record = function(_item) {
      __Model.add_record(_item);
      __View.redraw();
    }
    this.remove_record = function(_item) {
      __Model.remove_record(_item);
      __View.redraw();
    }
  })();
});
 