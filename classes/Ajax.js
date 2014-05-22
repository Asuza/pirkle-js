(function (Pirkle) {
  Pirkle.Ajax = {
    request: function (options) {
      var useAsync = options.async === false ? false : true,
          request;

      if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
      } else if(window.ActiveXObject) {
        try {
          request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            request = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
            request = false;
          }
        }
      }

      if (request === false) {
        return false;
      }

      request.callback = options.callback || Pirkle.emptyFn;
      request.options = options;

      if (request.addEventListener) {
        request.addEventListener("load", this.transferComplete, false);
        request.addEventListener("error", this.transferFailed, false);
        request.addEventListener("abort", this.transferCanceled, false);
      } else if (request.attachEvent) {
        request.attachEvent("onload", this.transferComplete);
        request.attachEvent("onerror", this.transferFailed);
        request.attachEvent("onabort", this.transferCanceled);
      } else {
        request.onreadystatechange = function() {
          if (request.readyState !== 4) {
            return false;
          }
          if (request.status !== 200) {
            request.callback(
              {
              success: false,
              response: null,
              request: request
              }
            );
            return false;
          }
          request.callback(
            {
              success: true,
              response: request.responseText,
              request: request
            }
          );
          return true;
        };
      }

      request.open(options.method, options.url, useAsync);
      if (options.headers) {
        for (var header in options.headers) {
          if(options.headers.hasOwnProperty(header)){
            request.setRequestHeader(header, options.headers[header]);
          }
        }
      } else {
        request.setRequestHeader("Content-Type", "application/json");
      }
      request.send(options.data);

      return request;
    },
    post: function (options) {
      options.method = "POST";

      return this.request(options);
    },
    get: function (options) {
      options.method = "GET";

      return this.request(options);
    },
    transferComplete: function () {
      this.callback({
        success: true,
        response: this.responseText,
        request: this
      });
    },
    transferFailed: function () {
      this.callback({
        success: false,
        response: null,
        request: this
      });
    },
    transferCanceled: function () {
      this.callback({
        success: false,
        response: null,
        request: this
      });
    }
  };
}(window.Pirkle = window.Pirkle || {}));