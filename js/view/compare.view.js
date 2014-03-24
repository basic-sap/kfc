;define(['model/compare_store.model'], function(__Compare_Store) {
  return new (function() {
    var __option = {
      elem: {
        compare_base: null,
        compare_null_text: null,
        compare_table: null
      },
    };
    this.init = function(_opt) {
      __option.elem = $.extend(__option.elem, _opt);
      __option.elem.compare_null_text = __option.elem.compare_base.find($('p#compare_null'));
      __option.elem.compare_table = __option.elem.compare_base.find($('table'));
    };
    var item_select = function(_i_list) {
      var d_sel = $('<select class="form-control"></select>');
      $.each(_i_list, function(_i) {
        var item = this;
        d_sel.append(
          $('<option></option>').attr('value', _i).html(item.name)
        );
      })
      return d_sel;
    };
    var redraw_table = function(_i_list) {
      var _table = __option.elem.compare_table;
      var c_1 = _table.find('td#compare_item_select_1 select').val() || 0;
      var c_2 = _table.find('td#compare_item_select_2 select').val() || 0;
      _table.find('td#compare_item_pic_1').html('').append(
        $('<img></img>').attr('src', _i_list[c_1].img_path)
      );
      _table.find('td#compare_item_pic_2').html('').append(
        $('<img></img>').attr('src', _i_list[c_2].img_path)
      );
      _table.find('td#compare_item_price_1').html(_i_list[c_1].price + '元/份');
      _table.find('td#compare_item_price_2').html(_i_list[c_2].price + '元/份');
    }
    this.show = function() {
      if (__Compare_Store.get_count() < 2) {
        __option.elem.compare_null_text.show();
        __option.elem.compare_table.hide();
      }
      else {
        __option.elem.compare_null_text.hide();
        __option.elem.compare_table.show();
        var item_list = __Compare_Store.get_list();
        __option.elem.compare_table.find('td.compare_item_select').html('').append(item_select(item_list)).change(function() {
          redraw_table(__Compare_Store.get_list());
        });
        redraw_table(item_list);
      }
      __option.elem.compare_base.modal('show');
    }
  })();
});