;define(['model/compare_store.model'], function(__Compare_Store) {
  return new (function() {
    var __option = {
      elem: {
        nav_base: null,
        nav_compare_count: null,
      }
    };
    this.init = function(_opt) {
      var _this = this;
      __option.elem = $.extend({}, __option.elem, _opt);
      __option.elem.nav_compare_count = __option.elem.nav_base.find($("span.compare_count"));
      __option.elem.nav_compare_count.html(__Compare_Store.get_count());
    };
    this.refresh_compare_count = function(_count) {
      __option.elem.nav_compare_count.html(__Compare_Store.get_count());
    }
  })();
});