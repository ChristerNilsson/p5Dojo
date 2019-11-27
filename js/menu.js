// Generated by CoffeeScript 2.4.1
var LINKS, Menu;

LINKS = {
  "p5Dojo": "https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md#p5dojo",
  "p5Color": "https://christernilsson.github.io/p5Color",
  "Links": "https://christernilsson.github.io/Lab",
  "Svelte": "https://github.com/ChristerNilsson/sveltes/wiki/Svelte"
};

Menu = class Menu {
  constructor(items1, table = null, branch = []) {
    this.items = items1;
    this.table = table;
    this.branch = branch;
    this.state = 0;
    this.chapter = '';
    this.exercise = '';
    this.calls = {};
  }

  rensa() {
    return this.table.innerHTML = "";
  }

  clear() {
    return this.branch = [];
  }

  traverse(items = this.items, level = 0, br = []) {
    var b, children, i, item, j, k, key, keywords, l, len, len1, len2, link, ref, ref1, ref2, results, text;
    if (false === goDeeper(this.branch, br)) {
      return;
    }
    if (level === 0) { // chapter
      ref = _.keys(items);
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        key = ref[i];
        if (i === this.branch[level] || this.branch.length === level) {
          this.addTitle(key, level, i, br.concat(i), [BLACK, WHITE]);
        }
        children = items[key];
        this.traverse(children, level + 1, br.concat(i));
      }
    }
    if (this.branch.length === 0) {
      for (text in LINKS) {
        link = LINKS[text];
        b = this.addCommand(text, 0, [DARKGREEN, WHITE]);
        (function(link) {
          return b.onclick = function() {
            return window.open(link, '_blank').focus();
          };
        })(link);
      }
    }
    if (level === 1) { // exercise
      ref1 = _.keys(items);
      for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
        key = ref1[i];
        if (i === this.branch[level] || this.branch.length === level) {
          this.addTitle(key, level, i, br.concat(i), this.hardness(items[key].h));
        }
        keywords = items[key].k.split(' ');
        keywords.sort();
        this.traverse(keywords, level + 1, br.concat(i));
      }
    }
    if (level === 2) {

// keywords
      for (l = 0, len2 = items.length; l < len2; l++) {
        item = items[l];
        if (item !== '') {
          this.addTitle(item, level, i, br, [BLACK, YELLOW]);
        }
      }
      // commands
      this.calls = decorate(data[this.chapter][this.exer()].c);
      for (key in this.calls) {
        if (key !== 'draw()') {
          this.addCommand(key, level, [BLUE, YELLOW]);
        }
      }
      // renew
      if ((localStorage[this.exercise + "/v"] != null) && localStorage[this.exercise + "/v"] !== data[this.chapter][this.exercise].v) {
        b = this.addCommand("Renew", level, [RED, WHITE]);
        b.onclick = function() {
          var exercise;
          print(myCodeMirror.getValue()); // Låt stå!
          exercise = data[meny.chapter][meny.exercise];
          myCodeMirror.setValue(exercise.b);
          localStorage[meny.exercise + "/" + 'v'] = exercise.v;
          return localStorage[meny.exercise + "/" + 'd'] = exercise.b;
        };
      }
      // links
      if (this.exercise !== '') {
        ref2 = data[this.chapter][this.exercise].e;
        results = [];
        for (text in ref2) {
          link = ref2[text];
          b = this.addCommand(text, level, [GREEN, BLACK]);
          results.push((function(link) {
            return b.onclick = function() {
              return window.open(link, '_blank').focus();
            };
          })(link));
        }
        return results;
      }
    }
  }

  handleRow(b) {
    var tr;
    tr = document.createElement("tr");
    addCell(tr, b, 100);
    return this.table.appendChild(tr);
  }

  lineCount() {
    return data[this.chapter][this.exercise].l;
  }

  hardness(h) {
    if (h === 0) {
      return [WHITE, BLACK];
    }
    if (h === 1) {
      return [GREEN, BLACK];
    }
    if (h === 2) {
      return [YELLOW, BLACK];
    }
    if (h === 3) {
      return [RED, WHITE];
    }
    return [RED, WHITE];
  }

  addTitle(title, level, i, br, colors = [BLACK, RED]) {
    var b;
    if (level === 2) {
      b = makeButton(title, level, colors);
    } else if (this.branch[level] === i) {
      if (level === 1) {
        b = makeButton(' - ' + `${title} [${this.lineCount()}]`, level, colors);
      } else {
        b = makeButton(' - ' + title, level, colors);
      }
    } else {
      b = makeButton(' + ' + title, level, colors);
    }
    b.branch = br;
    b.onclick = () => {
      if (level === 0) {
        this.sel1click(b.value);
        this.branch = calcBranch(this.branch, b.branch);
      } else if (level === 1) {
        this.sel2click(b); //.value
        this.branch = calcBranch(this.branch, b.branch);
      } else if (level === 2) {
        this.sel3click(b.value);
      }
      //if level in [0,1] then @branch = calcBranch @branch, b.branch
      return updateTables();
    };
    this.handleRow(b);
    return b;
  }

  addCommand(title, level, colors) {
    var b, code;
    b = makeButton(title, level, colors);
    code = this.calls[title];
    b.onclick = function() {
      if (run1(code) === true) {
        run0(code);
      }
      return compare();
    };
    this.handleRow(b);
    return b;
  }

  exer() {
    if (this.exercise === '' || this.exercise === null) {
      return '';
    }
    return this.exercise; //.split(' ')[0]	
  }

  setState(st) {
    this.state = st;
    //if st==2 then @calls = data[@chapter][@exercise].c else @calls = {}
    if (st === 2 && _.size(this.calls) > 0) {
      $('#input').show();
    } else {
      $('#input').hide();
    }
    if (st === 2) {
      msg.show();
    } else {
      msg.hide();
    }
    if (st === 2) {
      $(".CodeMirror").show();
    } else {
      $(".CodeMirror").hide();
    }
    if (st <= 2) { // 1
      this.calls = {};
      tableClear();
      bg(0.5);
    }
    if (st === 1) {
      return this.exercise = "";
    }
  }

  sel1click(chapter) {
    var value;
    value = chapter.slice(3);
    this.chapter = value;
    this.exercise = "";
    this.calls = {};
    return this.setState(1);
  }

  sel2click(b) {
    var arr, calls, code, exercise, src, value;
    exercise = b.value;
    value = exercise.slice(3);
    arr = value.split(' ');
    this.exercise = arr[0];
    if (this.exer() === "") {
      myCodeMirror.setValue("");
      bg(0.5);
      return;
    }
    this.calls = data[this.chapter][this.exer()].c;
    if (exercise.indexOf('+') >= 0) {
      this.setState(2);
      src = localStorage[this.exer() + "/d"];
      if (src === void 0 || src === null || src === '') {
        if (data[this.chapter][this.exer()]) {
          src = data[this.chapter][this.exer()].b;
          localStorage[this.exer() + "/d"] = src;
          localStorage[this.exer() + "/v"] = data[this.chapter][this.exer()].v;
        }
      }
      myCodeMirror.setValue(src);
      tableClear();
      calls = data[this.chapter][this.exer()].c;
      if (_.size(calls) > 0) {
        code = this.calls["draw()"];
      }
      if (run1(code) === true) {
        run0(code);
      }
      myCodeMirror.focus();
      return compare();
    } else {
      return this.setState(1);
    }
  }

  sel3click(keyword) {
    var url, win;
    url = buildLink(keyword);
    if (url != null) {
      win = window.open(url, '_blank');
      return win.focus();
    }
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxtZW51LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSxLQUFBLEVBQUE7O0FBQUEsS0FBQSxHQUNDO0VBQUEsUUFBQSxFQUFpQix3RUFBakI7RUFDQSxTQUFBLEVBQWlCLDJDQURqQjtFQUVBLE9BQUEsRUFBYyx1Q0FGZDtFQUdBLFFBQUEsRUFBYztBQUhkOztBQUtLLE9BQU4sTUFBQSxLQUFBO0VBQ0MsV0FBYyxPQUFBLFVBQWdCLElBQWhCLFdBQThCLEVBQTlCLENBQUE7SUFBQyxJQUFDLENBQUE7SUFBTyxJQUFDLENBQUE7SUFBWSxJQUFDLENBQUE7SUFDcEMsSUFBQyxDQUFBLEtBQUQsR0FBUztJQUNULElBQUMsQ0FBQSxPQUFELEdBQVc7SUFDWCxJQUFDLENBQUEsUUFBRCxHQUFZO0lBQ1osSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUFBO0VBSkk7O0VBS2QsS0FBUSxDQUFBLENBQUE7V0FBRyxJQUFDLENBQUEsS0FBSyxDQUFDLFNBQVAsR0FBbUI7RUFBdEI7O0VBQ1IsS0FBUSxDQUFBLENBQUE7V0FBRyxJQUFDLENBQUEsTUFBRCxHQUFVO0VBQWI7O0VBRVIsUUFBVyxDQUFDLFFBQU0sSUFBQyxDQUFBLEtBQVIsRUFBZSxRQUFNLENBQXJCLEVBQXdCLEtBQUcsRUFBM0IsQ0FBQTtBQUNWLFFBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtJQUFBLElBQUcsS0FBQSxLQUFTLFFBQUEsQ0FBUyxJQUFDLENBQUEsTUFBVixFQUFpQixFQUFqQixDQUFaO0FBQXFDLGFBQXJDOztJQUVBLElB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LENBQUEsR0FBVSxJQUFWLENBQWIsR0FBK0I7VUFDL0IsWUFBYSxDQUFBLElBQUMsQ0FBQSxJQUFELENBQUEsQ0FBQSxHQUFVLElBQVYsQ0FBYixHQUErQixJQUFLLENBQUEsSUFBQyxDQUFBLE9BQUQsQ0FBVSxDQUFBLElBQUMsQ0FBQSxJQUFELENBQUEsQ0FBQSxDQUFRLENBQUMsRUFIeEQ7U0FERDs7TUFLQSxZQUFZLENBQUMsUUFBYixDQUFzQixHQUF0QjtNQUVBLFVBQUEsQ0FBQTtNQUVBLEtBQUEsR0FBUSxJQUFLLENBQUEsSUFBQyxDQUFBLE9BQUQsQ0FBVSxDQUFBLElBQUMsQ0FBQSxJQUFELENBQUEsQ0FBQSxDQUFRLENBQUM7TUFDaEMsSUFBRyxDQUFDLENBQUMsSUFBRixDQUFPLEtBQVAsQ0FBQSxHQUFnQixDQUFuQjtRQUNDLElBQUEsR0FBTyxJQUFDLENBQUEsS0FBTSxDQUFBLFFBQUEsRUFEZjs7TUFFQSxJQUFHLElBQUEsQ0FBSyxJQUFMLENBQUEsS0FBYyxJQUFqQjtRQUNDLElBQUEsQ0FBSyxJQUFMLEVBREQ7O01BR0EsWUFBWSxDQUFDLEtBQWIsQ0FBQTthQUNBLE9BQUEsQ0FBQSxFQW5CRDtLQUFBLE1BQUE7YUFxQkMsSUFBQyxDQUFBLFFBQUQsQ0FBVSxDQUFWLEVBckJEOztFQVZXOztFQWtDWixTQUFZLENBQUMsT0FBRCxDQUFBO0FBQ1gsUUFBQSxHQUFBLEVBQUE7SUFBQSxHQUFBLEdBQU0sU0FBQSxDQUFVLE9BQVY7SUFDTixJQUFHLFdBQUg7TUFDQyxHQUFBLEdBQU0sTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBQWlCLFFBQWpCO2FBQ04sR0FBRyxDQUFDLEtBQUosQ0FBQSxFQUZEOztFQUZXOztBQXhLYiIsInNvdXJjZXNDb250ZW50IjpbIkxJTktTID0gXHJcblx0XCJwNURvam9cIiAgICAgICA6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NocmlzdGVyTmlsc3Nvbi9wNURvam8vYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI3A1ZG9qb1wiXHJcblx0XCJwNUNvbG9yXCIgICAgICA6IFwiaHR0cHM6Ly9jaHJpc3Rlcm5pbHNzb24uZ2l0aHViLmlvL3A1Q29sb3JcIlxyXG5cdFwiTGlua3NcIiBcdFx0XHQgOiBcImh0dHBzOi8vY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pby9MYWJcIlxyXG5cdFwiU3ZlbHRlXCJcdFx0XHQgOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9DaHJpc3Rlck5pbHNzb24vc3ZlbHRlcy93aWtpL1N2ZWx0ZVwiXHJcblx0XHJcbmNsYXNzIE1lbnVcclxuXHRjb25zdHJ1Y3RvciA6IChAaXRlbXMsIEB0YWJsZT1udWxsLCBAYnJhbmNoPVtdKSAtPlxyXG5cdFx0QHN0YXRlID0gMFxyXG5cdFx0QGNoYXB0ZXIgPSAnJ1xyXG5cdFx0QGV4ZXJjaXNlID0gJydcclxuXHRcdEBjYWxscyA9IHt9XHJcblx0cmVuc2EgOiAtPiBAdGFibGUuaW5uZXJIVE1MID0gXCJcIlxyXG5cdGNsZWFyIDogLT4gQGJyYW5jaCA9IFtdXHJcblxyXG5cdHRyYXZlcnNlIDogKGl0ZW1zPUBpdGVtcywgbGV2ZWw9MCwgYnI9W10pIC0+XHJcblx0XHRpZiBmYWxzZSA9PSBnb0RlZXBlciBAYnJhbmNoLGJyIHRoZW4gcmV0dXJuXHJcblxyXG5cdFx0aWYgbGV2ZWwgPT0gMCAjIGNoYXB0ZXJcclxuXHRcdFx0Zm9yIGtleSxpIGluIF8ua2V5cyBpdGVtc1xyXG5cdFx0XHRcdGlmIGkgPT0gQGJyYW5jaFtsZXZlbF0gb3IgQGJyYW5jaC5sZW5ndGggPT0gbGV2ZWxcclxuXHRcdFx0XHRcdEBhZGRUaXRsZSBrZXksIGxldmVsLCBpLCBici5jb25jYXQoaSksIFtCTEFDSyxXSElURV1cclxuXHRcdFx0XHRjaGlsZHJlbiA9IGl0ZW1zW2tleV1cclxuXHRcdFx0XHRAdHJhdmVyc2UgY2hpbGRyZW4sIGxldmVsKzEsIGJyLmNvbmNhdCBpXHJcblxyXG5cdFx0aWYgQGJyYW5jaC5sZW5ndGggPT0gMFxyXG5cdFx0XHRmb3IgdGV4dCxsaW5rIG9mIExJTktTIFxyXG5cdFx0XHRcdGIgPSBAYWRkQ29tbWFuZCB0ZXh0LCAwLCBbREFSS0dSRUVOLCBXSElURV1cclxuXHRcdFx0XHRkbyAobGluaykgLT4gYi5vbmNsaWNrID0gLT4gd2luZG93Lm9wZW4obGluaywgJ19ibGFuaycpLmZvY3VzKClcdFx0XHRcdFxyXG5cclxuXHRcdGlmIGxldmVsID09IDEgIyBleGVyY2lzZVxyXG5cdFx0XHRmb3Iga2V5LGkgaW4gXy5rZXlzIGl0ZW1zXHJcblx0XHRcdFx0aWYgaSA9PSBAYnJhbmNoW2xldmVsXSBvciBAYnJhbmNoLmxlbmd0aCA9PSBsZXZlbFxyXG5cdFx0XHRcdFx0QGFkZFRpdGxlIGtleSwgbGV2ZWwsIGksIGJyLmNvbmNhdChpKSwgQGhhcmRuZXNzIGl0ZW1zW2tleV0uaFxyXG5cdFx0XHRcdGtleXdvcmRzID0gaXRlbXNba2V5XS5rLnNwbGl0ICcgJ1xyXG5cdFx0XHRcdGtleXdvcmRzLnNvcnQoKVxyXG5cdFx0XHRcdEB0cmF2ZXJzZSBrZXl3b3JkcywgbGV2ZWwrMSwgYnIuY29uY2F0IGlcclxuXHJcblx0XHRpZiBsZXZlbCA9PSAyIFxyXG5cdFx0XHQjIGtleXdvcmRzXHJcblx0XHRcdGZvciBpdGVtIGluIGl0ZW1zIFxyXG5cdFx0XHRcdGlmIGl0ZW0gIT0gJycgdGhlbiBAYWRkVGl0bGUgaXRlbSwgbGV2ZWwsIGksIGJyLCBbQkxBQ0ssWUVMTE9XXVxyXG5cclxuXHRcdFx0IyBjb21tYW5kc1xyXG5cdFx0XHRAY2FsbHMgPSBkZWNvcmF0ZSBkYXRhW0BjaGFwdGVyXVtAZXhlcigpXS5jXHJcblx0XHRcdGZvciBrZXkgb2YgQGNhbGxzXHJcblx0XHRcdFx0aWYga2V5ICE9ICdkcmF3KCknIHRoZW4gQGFkZENvbW1hbmQga2V5LCBsZXZlbCwgW0JMVUUsIFlFTExPV11cclxuXHJcblx0XHRcdCMgcmVuZXdcclxuXHRcdFx0aWYgbG9jYWxTdG9yYWdlW0BleGVyY2lzZSArIFwiL3ZcIl0/IGFuZCBsb2NhbFN0b3JhZ2VbQGV4ZXJjaXNlICsgXCIvdlwiXSAhPSBkYXRhW0BjaGFwdGVyXVtAZXhlcmNpc2VdLnZcclxuXHRcdFx0XHRiID0gQGFkZENvbW1hbmQgXCJSZW5ld1wiLCBsZXZlbCwgW1JFRCwgV0hJVEVdXHJcblx0XHRcdFx0Yi5vbmNsaWNrID0gLT5cclxuXHRcdFx0XHRcdHByaW50IG15Q29kZU1pcnJvci5nZXRWYWx1ZSgpICMgTMOldCBzdMOlIVxyXG5cdFx0XHRcdFx0ZXhlcmNpc2UgPSBkYXRhW21lbnkuY2hhcHRlcl1bbWVueS5leGVyY2lzZV1cclxuXHRcdFx0XHRcdG15Q29kZU1pcnJvci5zZXRWYWx1ZSBleGVyY2lzZS5iXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2VbbWVueS5leGVyY2lzZSArIFwiL1wiICsgJ3YnXSA9IGV4ZXJjaXNlLnZcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZVttZW55LmV4ZXJjaXNlICsgXCIvXCIgKyAnZCddID0gZXhlcmNpc2UuYlxyXG5cclxuXHRcdFx0IyBsaW5rc1xyXG5cdFx0XHRpZiBAZXhlcmNpc2UgIT0gJydcclxuXHRcdFx0XHRmb3IgdGV4dCxsaW5rIG9mIGRhdGFbQGNoYXB0ZXJdW0BleGVyY2lzZV0uZVxyXG5cdFx0XHRcdFx0YiA9IEBhZGRDb21tYW5kIHRleHQsIGxldmVsLCBbR1JFRU4sIEJMQUNLXVxyXG5cdFx0XHRcdFx0ZG8gKGxpbmspIC0+IGIub25jbGljayA9IC0+IHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKS5mb2N1cygpXHJcblxyXG5cdGhhbmRsZVJvdyA6IChiKSAtPlxyXG5cdFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwidHJcIlxyXG5cdFx0YWRkQ2VsbCB0cixiLDEwMFxyXG5cdFx0QHRhYmxlLmFwcGVuZENoaWxkIHRyXHJcblxyXG5cdGxpbmVDb3VudCA6IC0+IGRhdGFbQGNoYXB0ZXJdW0BleGVyY2lzZV0ubFxyXG5cclxuXHRoYXJkbmVzcyA6IChoKSAtPlxyXG5cdFx0aWYgaD09MCB0aGVuIHJldHVybiBbV0hJVEUsQkxBQ0tdXHJcblx0XHRpZiBoPT0xIHRoZW4gcmV0dXJuIFtHUkVFTixCTEFDS10gXHJcblx0XHRpZiBoPT0yIHRoZW4gcmV0dXJuIFtZRUxMT1csQkxBQ0tdXHJcblx0XHRpZiBoPT0zIHRoZW4gcmV0dXJuIFtSRUQsV0hJVEVdXHJcblx0XHRbUkVELFdISVRFXVxyXG5cclxuXHRhZGRUaXRsZSA6ICh0aXRsZSxsZXZlbCxpLGJyLGNvbG9ycz1bQkxBQ0ssUkVEXSkgLT5cclxuXHRcdGlmIGxldmVsID09IDIgXHJcblx0XHRcdGIgPSBtYWtlQnV0dG9uIHRpdGxlLCBsZXZlbCwgY29sb3JzXHJcblx0XHRlbHNlIGlmIEBicmFuY2hbbGV2ZWxdID09IGkgXHJcblx0XHRcdGlmIGxldmVsID09IDFcclxuXHRcdFx0XHRiID0gbWFrZUJ1dHRvbiAnIC0gJyArIFwiI3t0aXRsZX0gWyN7QGxpbmVDb3VudCgpfV1cIiwgbGV2ZWwsIGNvbG9yc1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdGIgPSBtYWtlQnV0dG9uICcgLSAnICsgdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdGVsc2UgXHJcblx0XHRcdGIgPSBtYWtlQnV0dG9uICcgKyAnICsgdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdFxyXG5cdFx0Yi5icmFuY2ggPSBiclxyXG5cclxuXHRcdGIub25jbGljayA9ID0+IFxyXG5cdFx0XHRpZiBsZXZlbCA9PSAwIFxyXG5cdFx0XHRcdEBzZWwxY2xpY2sgYi52YWx1ZVxyXG5cdFx0XHRcdEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHJcblx0XHRcdGVsc2UgaWYgbGV2ZWwgPT0gMSBcclxuXHRcdFx0XHRAc2VsMmNsaWNrIGIgIy52YWx1ZVxyXG5cdFx0XHRcdEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHRcdFx0XHRcclxuXHRcdFx0ZWxzZSBpZiBsZXZlbCA9PSAyIHRoZW4gQHNlbDNjbGljayBiLnZhbHVlXHJcblx0XHRcdCNpZiBsZXZlbCBpbiBbMCwxXSB0aGVuIEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHJcblx0XHRcdHVwZGF0ZVRhYmxlcygpXHJcblxyXG5cdFx0QGhhbmRsZVJvdyBiXHJcblx0XHRiXHJcblxyXG5cdGFkZENvbW1hbmQgOiAodGl0bGUsbGV2ZWwsY29sb3JzKSAtPlxyXG5cdFx0YiA9IG1ha2VCdXR0b24gdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdGNvZGUgPSBAY2FsbHNbdGl0bGVdXHJcblx0XHRiLm9uY2xpY2sgPSAtPiBcclxuXHRcdFx0aWYgcnVuMShjb2RlKSA9PSB0cnVlIHRoZW4gcnVuMCBjb2RlXHJcblx0XHRcdGNvbXBhcmUoKVxyXG5cdFx0QGhhbmRsZVJvdyBiXHJcblx0XHRiXHJcblxyXG5cdGV4ZXIgOiAtPiBcclxuXHRcdGlmIEBleGVyY2lzZSA9PSAnJyBvciBAZXhlcmNpc2UgPT0gbnVsbCB0aGVuIHJldHVybiAnJ1xyXG5cdFx0QGV4ZXJjaXNlICMuc3BsaXQoJyAnKVswXVx0XHJcblxyXG5cdHNldFN0YXRlIDogKHN0KSAtPlxyXG5cdFx0QHN0YXRlID0gc3RcclxuXHJcblx0XHQjaWYgc3Q9PTIgdGhlbiBAY2FsbHMgPSBkYXRhW0BjaGFwdGVyXVtAZXhlcmNpc2VdLmMgZWxzZSBAY2FsbHMgPSB7fVxyXG5cdFx0aWYgc3Q9PTIgYW5kIF8uc2l6ZShAY2FsbHMpID4gMCB0aGVuICQoJyNpbnB1dCcpLnNob3coKSBlbHNlICQoJyNpbnB1dCcpLmhpZGUoKVxyXG5cdFx0aWYgc3Q9PTIgdGhlbiBtc2cuc2hvdygpIGVsc2UgbXNnLmhpZGUoKVxyXG5cdFx0aWYgc3Q9PTIgdGhlbiAkKFwiLkNvZGVNaXJyb3JcIikuc2hvdygpIGVsc2UgJChcIi5Db2RlTWlycm9yXCIpLmhpZGUoKVxyXG5cclxuXHRcdGlmIHN0PD0yICMgMVxyXG5cdFx0XHRAY2FsbHMgPSB7fVxyXG5cdFx0XHR0YWJsZUNsZWFyKClcclxuXHRcdFx0YmcgMC41XHJcblxyXG5cdFx0aWYgc3Q9PTEgdGhlblx0QGV4ZXJjaXNlID0gXCJcIlxyXG5cclxuXHRzZWwxY2xpY2sgOiAoY2hhcHRlcikgLT5cclxuXHRcdHZhbHVlID0gY2hhcHRlclszLi5dXHJcblx0XHRAY2hhcHRlciA9IHZhbHVlXHJcblx0XHRAZXhlcmNpc2UgPSBcIlwiXHJcblx0XHRAY2FsbHMgPSB7fVxyXG5cdFx0QHNldFN0YXRlIDFcclxuXHJcblx0c2VsMmNsaWNrIDogKGIpIC0+XHJcblx0XHRleGVyY2lzZSA9IGIudmFsdWUgXHJcblx0XHR2YWx1ZSA9IGV4ZXJjaXNlWzMuLl1cclxuXHRcdGFyciA9IHZhbHVlLnNwbGl0ICcgJ1xyXG5cdFx0QGV4ZXJjaXNlID0gYXJyWzBdXHJcblx0XHRpZiBAZXhlcigpID09IFwiXCJcclxuXHRcdFx0bXlDb2RlTWlycm9yLnNldFZhbHVlIFwiXCJcclxuXHRcdFx0YmcgMC41XHJcblx0XHRcdHJldHVyblxyXG5cdFx0QGNhbGxzID0gZGF0YVtAY2hhcHRlcl1bQGV4ZXIoKV0uY1xyXG5cdFx0aWYgZXhlcmNpc2UuaW5kZXhPZignKycpID49IDBcclxuXHRcdFx0QHNldFN0YXRlIDJcclxuXHRcdFx0c3JjID0gbG9jYWxTdG9yYWdlW0BleGVyKCkgKyBcIi9kXCJdXHJcblx0XHRcdGlmIHNyYyA9PSB1bmRlZmluZWQgb3Igc3JjID09IG51bGwgb3Igc3JjID09ICcnXHJcblx0XHRcdFx0aWYgZGF0YVtAY2hhcHRlcl1bQGV4ZXIoKV0gXHJcblx0XHRcdFx0XHRzcmMgPSBkYXRhW0BjaGFwdGVyXVtAZXhlcigpXS5iXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2VbQGV4ZXIoKSArIFwiL2RcIl0gPSBzcmNcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZVtAZXhlcigpICsgXCIvdlwiXSA9IGRhdGFbQGNoYXB0ZXJdW0BleGVyKCldLnZcclxuXHRcdFx0bXlDb2RlTWlycm9yLnNldFZhbHVlIHNyY1xyXG5cclxuXHRcdFx0dGFibGVDbGVhcigpXHJcblxyXG5cdFx0XHRjYWxscyA9IGRhdGFbQGNoYXB0ZXJdW0BleGVyKCldLmNcdFx0XHJcblx0XHRcdGlmIF8uc2l6ZShjYWxscykgPiAwIFxyXG5cdFx0XHRcdGNvZGUgPSBAY2FsbHNbXCJkcmF3KClcIl1cclxuXHRcdFx0aWYgcnVuMShjb2RlKSA9PSB0cnVlXHJcblx0XHRcdFx0cnVuMCBjb2RlIFxyXG5cclxuXHRcdFx0bXlDb2RlTWlycm9yLmZvY3VzKClcclxuXHRcdFx0Y29tcGFyZSgpXHJcblx0XHRlbHNlXHJcblx0XHRcdEBzZXRTdGF0ZSAxXHJcblxyXG5cdFxyXG5cdHNlbDNjbGljayA6IChrZXl3b3JkKSAtPlxyXG5cdFx0dXJsID0gYnVpbGRMaW5rIGtleXdvcmRcclxuXHRcdGlmIHVybD9cclxuXHRcdFx0d2luID0gd2luZG93Lm9wZW4gdXJsLCAnX2JsYW5rJ1xyXG5cdFx0XHR3aW4uZm9jdXMoKVxyXG5cdCJdfQ==
//# sourceURL=c:\github\p5Dojo\coffee\menu.coffee