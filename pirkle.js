(function (Pirkle) {

  Pirkle.emptyFn = function () {};

  Pirkle.queue = [];
  Pirkle.queueFn = Pirkle.emptyFn;

  Pirkle.load = function () {
    var me = this,
        argLength = arguments.length,
        script,
        newScript,
        className,
        i;

    for (i = 0; i < argLength; i++) {
      if (typeof arguments[i] !== "function") {
        className = arguments[i];
        newScript = document.createElement("script"),
        script = document.getElementsByTagName("script")[0];

        me.queue.push(className);

        newScript.src="classes/" + className + '.js';
        newScript.onload = function (name) {
          return me.onLoad(name);
        }(className);

        script.parentNode.insertBefore(newScript, script);
      } else {
        me.queueFn = arguments[i];
        me.onLoad();
      }
    }
  };

  Pirkle.onLoad = function (name) {
    var me = this,
        queueLength = me.queue.length;

    while (queueLength--) {
      if (me.queue[queueLength] === name) {
        me.queue.splice(queueLength, 1);
      }
    }

    if (me.queue.length === 0) {
      me.queueFn();
      me.queueFn = me.emptyFn;
    }
  };

}(window.Pirkle = window.Pirkle || {}));
