// Generated by CoffeeScript 1.11.1
var Application,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Application = (function() {
  function Application(_name1) {
    var _name, classes, i, key, klass, len, obj, ref, ref1, value;
    this._name = _name1 != null ? _name1 : 'b';
    classes = {};
    ref = this.classes();
    for (i = 0, len = ref.length; i < len; i++) {
      klass = ref[i];
      classes[klass.name] = klass;
    }
    _name = exercise + "/" + this._name;
    obj = localStorage.getItem(_name);
    if (obj) {
      ref1 = JSON.parse(obj);
      for (key in ref1) {
        value = ref1[key];
        this[key] = this.deserialize(value, classes);
      }
    }
  }

  Application.prototype.classes = function() {
    return [];
  };

  Application.prototype.deserialize = function(obj, classes) {
    var item, key, o, res, value;
    if (_.isObject(obj)) {
      if (_.isArray(obj)) {
        return (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = obj.length; i < len; i++) {
            item = obj[i];
            results.push(this.deserialize(item, classes));
          }
          return results;
        }).call(this);
      }
      if (indexOf.call(_.keys(obj), '_type') >= 0) {
        if (classes[obj["_type"]] === void 0) {
          print("Please define classes : -> [" + obj["_type"] + "] in your Application");
          return;
        }
        o = _.create(classes[obj["_type"]].prototype, {});
        for (key in obj) {
          value = obj[key];
          if (key !== '_type') {
            o[key] = this.deserialize(value, classes);
          }
        }
        return o;
      } else {
        res = {};
        for (key in obj) {
          value = obj[key];
          res[key] = this.deserialize(value, classes);
        }
        return res;
      }
    }
    return obj;
  };

  Application.prototype.draw = function() {};

  Application.prototype.mark = function(obj) {
    var i, item, len, ref, results, value;
    if (obj == null) {
      obj = this;
    }
    if (_.isNull(obj)) {
      return;
    }
    if (_.isArray(obj)) {
      return (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = obj.length; i < len; i++) {
          item = obj[i];
          results.push(this.mark(item));
        }
        return results;
      }).call(this);
    }
    if (_.isObject(obj)) {
      if (obj.constructor.name !== 'Object') {
        obj['_type'] = obj.constructor.name;
      }
      ref = _.values(obj);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        value = ref[i];
        results.push(this.mark(value));
      }
      return results;
    }
  };

  Application.prototype.mousePressed = function(mx, my) {};

  Application.prototype.store = function() {
    var _name, obj;
    _name = exercise + "/" + this._name;
    this.mark();
    obj = JSON.stringify(this);
    localStorage.setItem(_name, obj);
    return fillTable(exercise + "/a", exercise + "/b");
  };

  Application.prototype.readText = function() {
    return $('#input').val();
  };

  Application.prototype.readInt = function() {
    return parseInt(this.readText());
  };

  Application.prototype.readFloat = function() {
    return parseFloat(this.readText());
  };

  Application.prototype.reset = function() {
    var i, key, len, ref, results;
    ref = _.keys(this);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      key = ref[i];
      if (key !== "_name") {
        results.push(delete this[key]);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return Application;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcYXBwbGljYXRpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFdBQUE7RUFBQTs7QUFBTTtFQUVTLHFCQUFDLE1BQUQ7QUFDYixRQUFBO0lBRGMsSUFBQyxDQUFBLHlCQUFELFNBQU87SUFDckIsT0FBQSxHQUFVO0FBQ1Y7QUFBQSxTQUFBLHFDQUFBOztNQUFBLE9BQVEsQ0FBQSxLQUFLLENBQUMsSUFBTixDQUFSLEdBQXNCO0FBQXRCO0lBRUEsS0FBQSxHQUFRLFFBQUEsR0FBVyxHQUFYLEdBQWlCLElBQUMsQ0FBQTtJQUMxQixHQUFBLEdBQU0sWUFBWSxDQUFDLE9BQWIsQ0FBcUIsS0FBckI7SUFDTixJQUFHLEdBQUg7QUFDQztBQUFBLFdBQUEsV0FBQTs7UUFDQyxJQUFFLENBQUEsR0FBQSxDQUFGLEdBQVMsSUFBQyxDQUFBLFdBQUQsQ0FBYSxLQUFiLEVBQW1CLE9BQW5CO0FBRFYsT0FERDs7RUFOYTs7d0JBVWQsT0FBQSxHQUFVLFNBQUE7V0FBRztFQUFIOzt3QkFFVixXQUFBLEdBQWMsU0FBQyxHQUFELEVBQUssT0FBTDtBQUNiLFFBQUE7SUFBQSxJQUFHLENBQUMsQ0FBQyxRQUFGLENBQVcsR0FBWCxDQUFIO01BQ0MsSUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLEdBQVYsQ0FBSDtBQUF1Qjs7QUFBUTtlQUFBLHFDQUFBOzt5QkFBQSxJQUFDLENBQUEsV0FBRCxDQUFhLElBQWIsRUFBa0IsT0FBbEI7QUFBQTs7c0JBQS9COztNQUNBLElBQUcsYUFBVyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBWCxFQUFBLE9BQUEsTUFBSDtRQUNDLElBQUcsT0FBUSxDQUFBLEdBQUksQ0FBQSxPQUFBLENBQUosQ0FBUixLQUF5QixNQUE1QjtVQUNDLEtBQUEsQ0FBTSw4QkFBQSxHQUFpQyxHQUFJLENBQUEsT0FBQSxDQUFyQyxHQUFnRCx1QkFBdEQ7QUFDQSxpQkFGRDs7UUFHQSxDQUFBLEdBQUksQ0FBQyxDQUFDLE1BQUYsQ0FBUyxPQUFRLENBQUEsR0FBSSxDQUFBLE9BQUEsQ0FBSixDQUFhLENBQUMsU0FBL0IsRUFBMEMsRUFBMUM7QUFDSixhQUFBLFVBQUE7O1VBQ0MsSUFBd0MsR0FBQSxLQUFPLE9BQS9DO1lBQUEsQ0FBRSxDQUFBLEdBQUEsQ0FBRixHQUFTLElBQUMsQ0FBQSxXQUFELENBQWEsS0FBYixFQUFtQixPQUFuQixFQUFUOztBQUREO0FBRUEsZUFBTyxFQVBSO09BQUEsTUFBQTtRQVNDLEdBQUEsR0FBTTtBQUNOLGFBQUEsVUFBQTs7VUFDQyxHQUFJLENBQUEsR0FBQSxDQUFKLEdBQVcsSUFBQyxDQUFBLFdBQUQsQ0FBYSxLQUFiLEVBQW1CLE9BQW5CO0FBRFo7QUFFQSxlQUFPLElBWlI7T0FGRDs7QUFlQSxXQUFPO0VBaEJNOzt3QkFrQmQsSUFBQSxHQUFPLFNBQUEsR0FBQTs7d0JBRVAsSUFBQSxHQUFPLFNBQUMsR0FBRDtBQUNOLFFBQUE7O01BRE8sTUFBSTs7SUFDWCxJQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsR0FBVCxDQUFIO0FBQXNCLGFBQXRCOztJQUNBLElBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxHQUFWLENBQUg7QUFBdUI7O0FBQVE7YUFBQSxxQ0FBQTs7dUJBQUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxJQUFOO0FBQUE7O29CQUEvQjs7SUFDQSxJQUFHLENBQUMsQ0FBQyxRQUFGLENBQVcsR0FBWCxDQUFIO01BQ0MsSUFBdUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFoQixLQUF3QixRQUEvRDtRQUFBLEdBQUksQ0FBQSxPQUFBLENBQUosR0FBZSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQS9COztBQUNBO0FBQUE7V0FBQSxxQ0FBQTs7cUJBQ0MsSUFBQyxDQUFBLElBQUQsQ0FBTSxLQUFOO0FBREQ7cUJBRkQ7O0VBSE07O3dCQVFQLFlBQUEsR0FBZSxTQUFDLEVBQUQsRUFBSSxFQUFKLEdBQUE7O3dCQUVmLEtBQUEsR0FBUSxTQUFBO0FBQ1AsUUFBQTtJQUFBLEtBQUEsR0FBUSxRQUFBLEdBQVcsR0FBWCxHQUFpQixJQUFDLENBQUE7SUFDMUIsSUFBQyxDQUFBLElBQUQsQ0FBQTtJQUNBLEdBQUEsR0FBTSxJQUFJLENBQUMsU0FBTCxDQUFlLElBQWY7SUFDTixZQUFZLENBQUMsT0FBYixDQUFxQixLQUFyQixFQUE0QixHQUE1QjtXQUNBLFNBQUEsQ0FBVSxRQUFBLEdBQVcsSUFBckIsRUFBMkIsUUFBQSxHQUFXLElBQXRDO0VBTE87O3dCQU9SLFFBQUEsR0FBVyxTQUFBO1dBQUcsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEdBQVosQ0FBQTtFQUFIOzt3QkFDWCxPQUFBLEdBQVUsU0FBQTtXQUFHLFFBQUEsQ0FBUyxJQUFDLENBQUEsUUFBRCxDQUFBLENBQVQ7RUFBSDs7d0JBQ1YsU0FBQSxHQUFZLFNBQUE7V0FBRyxVQUFBLENBQVcsSUFBQyxDQUFBLFFBQUQsQ0FBQSxDQUFYO0VBQUg7O3dCQUNaLEtBQUEsR0FBUyxTQUFBO0FBQ1IsUUFBQTtBQUFBO0FBQUE7U0FBQSxxQ0FBQTs7TUFDQyxJQUFHLEdBQUEsS0FBTyxPQUFWO3FCQUF1QixPQUFPLElBQUUsQ0FBQSxHQUFBLEdBQWhDO09BQUEsTUFBQTs2QkFBQTs7QUFERDs7RUFEUSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcGxpY2F0aW9uXG5cblx0Y29uc3RydWN0b3IgOiAoQF9uYW1lPSdiJykgLT5cblx0XHRjbGFzc2VzID0ge31cblx0XHRjbGFzc2VzW2tsYXNzLm5hbWVdID0ga2xhc3MgZm9yIGtsYXNzIGluIEBjbGFzc2VzKClcblxuXHRcdF9uYW1lID0gZXhlcmNpc2UgKyBcIi9cIiArIEBfbmFtZVxuXHRcdG9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtIF9uYW1lXG5cdFx0aWYgb2JqXG5cdFx0XHRmb3Iga2V5LHZhbHVlIG9mIEpTT04ucGFyc2Ugb2JqXG5cdFx0XHRcdEBba2V5XSA9IEBkZXNlcmlhbGl6ZSB2YWx1ZSxjbGFzc2VzXG5cblx0Y2xhc3NlcyA6IC0+IFtdXG5cblx0ZGVzZXJpYWxpemUgOiAob2JqLGNsYXNzZXMpIC0+XG5cdFx0aWYgXy5pc09iamVjdChvYmopXG5cdFx0XHRpZiBfLmlzQXJyYXkob2JqKSB0aGVuIHJldHVybiAoQGRlc2VyaWFsaXplKGl0ZW0sY2xhc3NlcykgZm9yIGl0ZW0gaW4gb2JqKSAjIGFycmF5XG5cdFx0XHRpZiAnX3R5cGUnIGluIF8ua2V5cyhvYmopXG5cdFx0XHRcdGlmIGNsYXNzZXNbb2JqW1wiX3R5cGVcIl1dID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHByaW50IFwiUGxlYXNlIGRlZmluZSBjbGFzc2VzIDogLT4gW1wiICsgb2JqW1wiX3R5cGVcIl0gKyBcIl0gaW4geW91ciBBcHBsaWNhdGlvblwiXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdG8gPSBfLmNyZWF0ZSBjbGFzc2VzW29ialtcIl90eXBlXCJdXS5wcm90b3R5cGUsIHt9XG5cdFx0XHRcdGZvciBrZXksdmFsdWUgb2Ygb2JqXG5cdFx0XHRcdFx0b1trZXldID0gQGRlc2VyaWFsaXplKHZhbHVlLGNsYXNzZXMpIGlmIGtleSAhPSAnX3R5cGUnXG5cdFx0XHRcdHJldHVybiBvXG5cdFx0XHRlbHNlICMgZGljdFxuXHRcdFx0XHRyZXMgPSB7fVxuXHRcdFx0XHRmb3Iga2V5LHZhbHVlIG9mIG9ialxuXHRcdFx0XHRcdHJlc1trZXldID0gQGRlc2VyaWFsaXplKHZhbHVlLGNsYXNzZXMpXG5cdFx0XHRcdHJldHVybiByZXNcblx0XHRyZXR1cm4gb2JqICMgY2F0Y2hlcyBOdW1iZXIsIFN0cmluZywgQm9vbGVhbiwgbnVsbCBldGNcblxuXHRkcmF3IDogLT5cblxuXHRtYXJrIDogKG9iaj1AKSAtPlxuXHRcdGlmIF8uaXNOdWxsKG9iaikgdGhlbiByZXR1cm5cblx0XHRpZiBfLmlzQXJyYXkob2JqKSB0aGVuIHJldHVyblx0KEBtYXJrKGl0ZW0pIGZvciBpdGVtIGluIG9iaikgIyBhcnJheVxuXHRcdGlmIF8uaXNPYmplY3Qob2JqKVxuXHRcdFx0b2JqWydfdHlwZSddID0gb2JqLmNvbnN0cnVjdG9yLm5hbWUgaWYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gJ09iamVjdCdcblx0XHRcdGZvciB2YWx1ZSBpbiBfLnZhbHVlcyBvYmogIyBhbm5hcnMga29tbWVyIG1ldG9kZXJuYSBtZWQuXG5cdFx0XHRcdEBtYXJrIHZhbHVlXG5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPiAjIHByaW50IFwibW91c2VQcmVzc2VkXCIsIG14LCBteFxuXG5cdHN0b3JlIDogLT5cblx0XHRfbmFtZSA9IGV4ZXJjaXNlICsgXCIvXCIgKyBAX25hbWVcblx0XHRAbWFyaygpXG5cdFx0b2JqID0gSlNPTi5zdHJpbmdpZnkgQFxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtIF9uYW1lLCBvYmpcblx0XHRmaWxsVGFibGUgZXhlcmNpc2UgKyBcIi9hXCIsIGV4ZXJjaXNlICsgXCIvYlwiXG5cblx0cmVhZFRleHQgOiAtPiAkKCcjaW5wdXQnKS52YWwoKVxuXHRyZWFkSW50IDogLT4gcGFyc2VJbnQgQHJlYWRUZXh0KClcblx0cmVhZEZsb2F0IDogLT4gcGFyc2VGbG9hdCBAcmVhZFRleHQoKVxuXHRyZXNldCA6ICAtPlxuXHRcdGZvciBrZXkgaW4gXy5rZXlzIEBcblx0XHRcdGlmIGtleSAhPSBcIl9uYW1lXCIgdGhlbiBkZWxldGUgQFtrZXldXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\application.coffee