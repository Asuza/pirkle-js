(function (Pirkle) {
  Pirkle.Object = {
    serialize: function (values) {
      var data = [],
          key;

      for(key in values) {
        if (values.hasOwnProperty(key)) {
          data.push(encodeURIComponent(key) + '=' + encodeURIComponent(values[key]));
        }
      }

      return data.join('&');
    }
  };
}(window.Pirkle = window.Pirkle || {}));