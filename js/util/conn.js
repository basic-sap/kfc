define(function() {
  return {
    send_to_server: function(url, data, anddothis, object) {
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: data,
      })
      .done(function(r) {
        anddothis.call(object, r);
      });
    }
  }
});
