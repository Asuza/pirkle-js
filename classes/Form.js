(function (Pirkle) {
  Pirkle.Form = {
    select: {
      setValue: function (selectEl, value) {
        var options = selectEl.childNodes,
            i;

        for(i = 0; i < options.length; i++) {
          if (options[i].value == value) {
            break;
          }
        }

        selectEl.selectedIndex = i;

        return i;
      }
    },
    getValues: function (form) {
      var fields = form.elements,
          length = form.elements.length,
          data = {},
          i;

      for(i = 0; i < length; i++) {
        if (fields[i].name) {
          data[fields[i].name] = fields[i].value;
        }
      }

      return data;
    },
    setValues: function (form, data) {
      var fields = form.elements,
          length = form.elements.length,
          field,
          name,
          i;

      for(i = 0; i < length; i++) {
        field = fields[i];
        name = field.name;

        if (name) {
          if (data[name] !== undefined) {
            field.value = data[name];
          } else {
            delete field.value;
          }
        }
      }

      return data;
    },
    clearValues: function (form) {
      var fields = form.elements,
          length = form.elements.length,
          field,
          name,
          i;

      for(i = 0; i < length; i++) {
        field = fields[i];
        name = field.name;

        if (name) {
          field.value = null;
        }
      }
    }
  };
}(window.Pirkle = window.Pirkle || {}));