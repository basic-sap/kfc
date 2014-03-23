;define(['model/compare_store.model', 'view/nav.view'], function(__Compare_Store, __Nav_View) {
  return new (function() {
    this.add_item = function(_item_id) {
      __Compare_Store.add_item(_item_id);
      __Nav_View.refresh_compare_count();
    };
  })();

});