(function (Pirkle) {
  Pirkle.Array = {
    filterBy: function (data, key, value) {
      return data.filter(function (element) {
        return (element[key] == value);
      });
    },
    find: function (data, value, key) {
      var result;

      data.forEach(function (item) {
        if (key && item[key] == value) {
          result = item;
        } else if (item == value) {
          result = item;
        }
      });

      return result;
    },
    search: function (data, value) {
      var results = [],
          searchRe = new RegExp(value, 'i');

      data.forEach(function (item) {
        var key;

        if (typeof item === "object") {
          for (key in item) {
            if (item.hasOwnProperty(key) && item[key] && searchRe.test(item[key].toString())) {
              results.push(item);
              break;
            }
          }
        } else if (item && searchRe.test(item.toString())) {
          results.push(item);
        }
      });

      return results;
    }
  };
}(window.Pirkle = window.Pirkle || {}));