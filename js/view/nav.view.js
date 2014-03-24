;define(['model/compare_store.model', 'view/compare.view'], function(__Compare_Store, __Compare_View) {
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
      __option.elem.nav_base.find($('a.modal_compare')).click(function(_e) {
        _e.preventDefault();
        __Compare_View.show();
      })
    };
    this.refresh_compare_count = function(_count) {
      __option.elem.nav_compare_count.html(__Compare_Store.get_count());
    }
  })();
});