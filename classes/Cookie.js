(function (Pirkle) {
  Pirkle.Cookie = {
    get: function (name) {
      var pairs = document.cookie.split('; '),
          pair,
          i;

      for(i = 0; i < pairs.length; i++) {
        pair = pairs[i].split('=');

        if (pair[0] === name) {
          return pair[1];
        }
      }
    },
    set: function (name, value, path, domain) {
      var newCookie = name + '=' + value;

      if (path !== undefined) {
        newCookie += ";path=" + path;
      }
      if (domain !== undefined) {
        newCookie += ";domain=." + domain;
      }

      document.cookie = newCookie;
    },
    expire: function (name, path, domain) {
      var newCookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT';

      if (path !== undefined) {
        newCookie += ";path=" + path;
      }
      if (domain !== undefined) {
        newCookie += ";domain=." + domain;
      }

      document.cookie = newCookie;
    }
  };
}(window.Pirkle = window.Pirkle || {}));