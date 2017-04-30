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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcYXBwbGljYXRpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFdBQUE7RUFBQTs7QUFBTTtFQUVTLHFCQUFDLE1BQUQ7QUFFYixRQUFBO0lBRmMsSUFBQyxDQUFBLHlCQUFELFNBQU87SUFFckIsT0FBQSxHQUFVO0FBQ1Y7QUFBQSxTQUFBLHFDQUFBOztNQUFBLE9BQVEsQ0FBQSxLQUFLLENBQUMsSUFBTixDQUFSLEdBQXNCO0FBQXRCO0lBRUEsS0FBQSxHQUFRLFFBQUEsR0FBVyxHQUFYLEdBQWlCLElBQUMsQ0FBQTtJQUMxQixHQUFBLEdBQU0sWUFBWSxDQUFDLE9BQWIsQ0FBcUIsS0FBckI7SUFDTixJQUFHLEdBQUg7QUFDQztBQUFBLFdBQUEsV0FBQTs7UUFDQyxJQUFFLENBQUEsR0FBQSxDQUFGLEdBQVMsSUFBQyxDQUFBLFdBQUQsQ0FBYSxLQUFiLEVBQW1CLE9BQW5CO0FBRFYsT0FERDs7RUFQYTs7d0JBV2QsT0FBQSxHQUFVLFNBQUE7V0FBRztFQUFIOzt3QkFFVixXQUFBLEdBQWMsU0FBQyxHQUFELEVBQUssT0FBTDtBQUNiLFFBQUE7SUFBQSxJQUFHLENBQUMsQ0FBQyxRQUFGLENBQVcsR0FBWCxDQUFIO01BQ0MsSUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLEdBQVYsQ0FBSDtBQUF1Qjs7QUFBUTtlQUFBLHFDQUFBOzt5QkFBQSxJQUFDLENBQUEsV0FBRCxDQUFhLElBQWIsRUFBa0IsT0FBbEI7QUFBQTs7c0JBQS9COztNQUNBLElBQUcsYUFBVyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBWCxFQUFBLE9BQUEsTUFBSDtRQUNDLElBQUcsT0FBUSxDQUFBLEdBQUksQ0FBQSxPQUFBLENBQUosQ0FBUixLQUF5QixNQUE1QjtVQUNDLEtBQUEsQ0FBTSw4QkFBQSxHQUFpQyxHQUFJLENBQUEsT0FBQSxDQUFyQyxHQUFnRCx1QkFBdEQ7QUFDQSxpQkFGRDs7UUFHQSxDQUFBLEdBQUksQ0FBQyxDQUFDLE1BQUYsQ0FBUyxPQUFRLENBQUEsR0FBSSxDQUFBLE9BQUEsQ0FBSixDQUFhLENBQUMsU0FBL0IsRUFBMEMsRUFBMUM7QUFDSixhQUFBLFVBQUE7O1VBQ0MsSUFBd0MsR0FBQSxLQUFPLE9BQS9DO1lBQUEsQ0FBRSxDQUFBLEdBQUEsQ0FBRixHQUFTLElBQUMsQ0FBQSxXQUFELENBQWEsS0FBYixFQUFtQixPQUFuQixFQUFUOztBQUREO0FBRUEsZUFBTyxFQVBSO09BQUEsTUFBQTtRQVNDLEdBQUEsR0FBTTtBQUNOLGFBQUEsVUFBQTs7VUFDQyxHQUFJLENBQUEsR0FBQSxDQUFKLEdBQVcsSUFBQyxDQUFBLFdBQUQsQ0FBYSxLQUFiLEVBQW1CLE9BQW5CO0FBRFo7QUFFQSxlQUFPLElBWlI7T0FGRDs7QUFlQSxXQUFPO0VBaEJNOzt3QkFrQmQsSUFBQSxHQUFPLFNBQUEsR0FBQTs7d0JBRVAsSUFBQSxHQUFPLFNBQUMsR0FBRDtBQUNOLFFBQUE7O01BRE8sTUFBSTs7SUFDWCxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsR0FBVixDQUFIO0FBQXVCOztBQUFRO2FBQUEscUNBQUE7O3VCQUFBLElBQUMsQ0FBQSxJQUFELENBQU0sSUFBTjtBQUFBOztvQkFBL0I7O0lBQ0EsSUFBRyxDQUFDLENBQUMsUUFBRixDQUFXLEdBQVgsQ0FBSDtNQUNDLElBQXVDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBaEIsS0FBd0IsUUFBL0Q7UUFBQSxHQUFJLENBQUEsT0FBQSxDQUFKLEdBQWUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUEvQjs7QUFDQTtBQUFBO1dBQUEscUNBQUE7O3FCQUNDLElBQUMsQ0FBQSxJQUFELENBQU0sS0FBTjtBQUREO3FCQUZEOztFQUZNOzt3QkFPUCxZQUFBLEdBQWUsU0FBQyxFQUFELEVBQUksRUFBSixHQUFBOzt3QkFFZixLQUFBLEdBQVEsU0FBQTtBQUNQLFFBQUE7SUFBQSxLQUFBLEdBQVEsUUFBQSxHQUFXLEdBQVgsR0FBaUIsSUFBQyxDQUFBO0lBQzFCLElBQUMsQ0FBQSxJQUFELENBQUE7SUFDQSxHQUFBLEdBQU0sSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmO0lBQ04sWUFBWSxDQUFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsR0FBNUI7V0FDQSxTQUFBLENBQVUsUUFBQSxHQUFXLElBQXJCLEVBQTJCLFFBQUEsR0FBVyxJQUF0QztFQUxPOzt3QkFPUixRQUFBLEdBQVcsU0FBQTtXQUFHLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxHQUFaLENBQUE7RUFBSDs7d0JBQ1gsT0FBQSxHQUFVLFNBQUE7V0FBRyxRQUFBLENBQVMsSUFBQyxDQUFBLFFBQUQsQ0FBQSxDQUFUO0VBQUg7O3dCQUNWLFNBQUEsR0FBWSxTQUFBO1dBQUcsVUFBQSxDQUFXLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBWDtFQUFIOzt3QkFDWixLQUFBLEdBQVMsU0FBQTtBQUNSLFFBQUE7QUFBQTtBQUFBO1NBQUEscUNBQUE7O01BQ0MsSUFBRyxHQUFBLEtBQU8sT0FBVjtxQkFBdUIsT0FBTyxJQUFFLENBQUEsR0FBQSxHQUFoQztPQUFBLE1BQUE7NkJBQUE7O0FBREQ7O0VBRFEiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHBsaWNhdGlvblxuXG5cdGNvbnN0cnVjdG9yIDogKEBfbmFtZT0nYicpIC0+XG5cblx0XHRjbGFzc2VzID0ge31cblx0XHRjbGFzc2VzW2tsYXNzLm5hbWVdID0ga2xhc3MgZm9yIGtsYXNzIGluIEBjbGFzc2VzKClcblxuXHRcdF9uYW1lID0gZXhlcmNpc2UgKyBcIi9cIiArIEBfbmFtZVxuXHRcdG9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtIF9uYW1lXG5cdFx0aWYgb2JqXG5cdFx0XHRmb3Iga2V5LHZhbHVlIG9mIEpTT04ucGFyc2Ugb2JqXG5cdFx0XHRcdEBba2V5XSA9IEBkZXNlcmlhbGl6ZSB2YWx1ZSxjbGFzc2VzXG5cblx0Y2xhc3NlcyA6IC0+IFtdXG5cblx0ZGVzZXJpYWxpemUgOiAob2JqLGNsYXNzZXMpIC0+XG5cdFx0aWYgXy5pc09iamVjdChvYmopXG5cdFx0XHRpZiBfLmlzQXJyYXkob2JqKSB0aGVuIHJldHVybiAoQGRlc2VyaWFsaXplKGl0ZW0sY2xhc3NlcykgZm9yIGl0ZW0gaW4gb2JqKSAjIGFycmF5XG5cdFx0XHRpZiAnX3R5cGUnIGluIF8ua2V5cyhvYmopXG5cdFx0XHRcdGlmIGNsYXNzZXNbb2JqW1wiX3R5cGVcIl1dID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHByaW50IFwiUGxlYXNlIGRlZmluZSBjbGFzc2VzIDogLT4gW1wiICsgb2JqW1wiX3R5cGVcIl0gKyBcIl0gaW4geW91ciBBcHBsaWNhdGlvblwiXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdG8gPSBfLmNyZWF0ZSBjbGFzc2VzW29ialtcIl90eXBlXCJdXS5wcm90b3R5cGUsIHt9XG5cdFx0XHRcdGZvciBrZXksdmFsdWUgb2Ygb2JqXG5cdFx0XHRcdFx0b1trZXldID0gQGRlc2VyaWFsaXplKHZhbHVlLGNsYXNzZXMpIGlmIGtleSAhPSAnX3R5cGUnXG5cdFx0XHRcdHJldHVybiBvXG5cdFx0XHRlbHNlICMgZGljdFxuXHRcdFx0XHRyZXMgPSB7fVxuXHRcdFx0XHRmb3Iga2V5LHZhbHVlIG9mIG9ialxuXHRcdFx0XHRcdHJlc1trZXldID0gQGRlc2VyaWFsaXplKHZhbHVlLGNsYXNzZXMpXG5cdFx0XHRcdHJldHVybiByZXNcblx0XHRyZXR1cm4gb2JqICMgY2F0Y2hlcyBOdW1iZXIsIFN0cmluZywgQm9vbGVhbiwgbnVsbCBldGNcblxuXHRkcmF3IDogLT5cblxuXHRtYXJrIDogKG9iaj1AKSAtPlxuXHRcdGlmIF8uaXNBcnJheShvYmopIHRoZW4gcmV0dXJuXHQoQG1hcmsoaXRlbSkgZm9yIGl0ZW0gaW4gb2JqKSAjIGFycmF5XG5cdFx0aWYgXy5pc09iamVjdChvYmopXG5cdFx0XHRvYmpbJ190eXBlJ10gPSBvYmouY29uc3RydWN0b3IubmFtZSBpZiBvYmouY29uc3RydWN0b3IubmFtZSAhPSAnT2JqZWN0J1xuXHRcdFx0Zm9yIHZhbHVlIGluIF8udmFsdWVzIG9iaiAjIGFubmFycyBrb21tZXIgbWV0b2Rlcm5hIG1lZC5cblx0XHRcdFx0QG1hcmsgdmFsdWVcblxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+ICMgcHJpbnQgXCJtb3VzZVByZXNzZWRcIiwgbXgsIG14XG5cblx0c3RvcmUgOiAtPlxuXHRcdF9uYW1lID0gZXhlcmNpc2UgKyBcIi9cIiArIEBfbmFtZVxuXHRcdEBtYXJrKClcblx0XHRvYmogPSBKU09OLnN0cmluZ2lmeSBAXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0gX25hbWUsIG9ialxuXHRcdGZpbGxUYWJsZSBleGVyY2lzZSArIFwiL2FcIiwgZXhlcmNpc2UgKyBcIi9iXCJcblxuXHRyZWFkVGV4dCA6IC0+ICQoJyNpbnB1dCcpLnZhbCgpXG5cdHJlYWRJbnQgOiAtPiBwYXJzZUludCBAcmVhZFRleHQoKVxuXHRyZWFkRmxvYXQgOiAtPiBwYXJzZUZsb2F0IEByZWFkVGV4dCgpXG5cdHJlc2V0IDogIC0+XG5cdFx0Zm9yIGtleSBpbiBfLmtleXMgQFxuXHRcdFx0aWYga2V5ICE9IFwiX25hbWVcIiB0aGVuIGRlbGV0ZSBAW2tleV1cbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\application.coffee