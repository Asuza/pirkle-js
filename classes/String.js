(function (Pirkle) {
  Pirkle.String = {
    upperAtIndex: function (string, index) {
      return string.slice(index, 1).toUpperCase() + string.substring(index + 1);
    }
  };
}(window.Pirkle = window.Pirkle || {}));