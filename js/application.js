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
    _name = chapter + "/" + exercise + "/" + this._name;
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
    var item, results, value;
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
      results = [];
      for (value in _.values(obj)) {
        results.push(this.mark(value));
      }
      return results;
    }
  };

  Application.prototype.mousePressed = function(mx, my) {};

  Application.prototype.store = function() {
    var _name, obj;
    _name = chapter + "/" + exercise + "/" + this._name;
    this.mark();
    obj = JSON.stringify(this);
    localStorage.setItem(_name, obj);
    return fillTable(chapter + "/" + exercise + "/a", chapter + "/" + exercise + "/b");
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
