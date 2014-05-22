(function (Pirkle) {
  Pirkle.Dom = {
    eventHandlerCache: {},
    removeNodes: function (el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    },
    bindOne: function (node, eventName, handler, capture) {
      if (!node || !eventName || !handler) {
        return false;
      }

      var cache = this.eventHandlerCache[eventName],
          i;

      if (cache) {
        for(i=0; i < cache.length; i++) {
          if (cache[i].node === node) {
            node.removeEventListener(eventName, cache[i].handler, cache[i].useCapture);
          }
        }
      }

      this.bind(node, eventName, handler, capture);
    },
    bind: function (node, eventName, handler, capture) {
      if (!node || !eventName || !handler) {
        return false;
      }

      // Handle an array of nodes
      if (node instanceof HTMLCollection) {
        var i;

        for (i = 0; i < node.length; i++) {
          this.bind(node[i], eventName, handler, capture);
        }

        return;
      }

      if (!this.eventHandlerCache[eventName]) {
        this.eventHandlerCache[eventName] = [];
      }

      this.eventHandlerCache[eventName].push({
        node: node,
        handler: handler,
        useCapture: capture
      });

      node.addEventListener(eventName, handler, capture);
    }
  };
}(window.Pirkle = window.Pirkle || {}));