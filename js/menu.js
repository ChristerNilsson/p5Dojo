// Generated by CoffeeScript 2.4.1
var LINKS, Menu;

LINKS = {
  "p5Dojo": "https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md#p5dojo",
  "p5Color": "https://christernilsson.github.io/p5Color",
  "Links": "https://christernilsson.github.io/Lab",
  "p5Dojo2": "https://github.com/ChristerNilsson/p5Dojo2/wiki",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxtZW51LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSxLQUFBLEVBQUE7O0FBQUEsS0FBQSxHQUNDO0VBQUEsUUFBQSxFQUFpQix3RUFBakI7RUFDQSxTQUFBLEVBQWlCLDJDQURqQjtFQUVBLE9BQUEsRUFBYyx1Q0FGZDtFQUdBLFNBQUEsRUFBaUIsaURBSGpCO0VBSUEsUUFBQSxFQUFjO0FBSmQ7O0FBTUssT0FBTixNQUFBLEtBQUE7RUFDQyxXQUFjLE9BQUEsVUFBZ0IsSUFBaEIsV0FBOEIsRUFBOUIsQ0FBQTtJQUFDLElBQUMsQ0FBQTtJQUFPLElBQUMsQ0FBQTtJQUFZLElBQUMsQ0FBQTtJQUNwQyxJQUFDLENBQUEsS0FBRCxHQUFTO0lBQ1QsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxRQUFELEdBQVk7SUFDWixJQUFDLENBQUEsS0FBRCxHQUFTLENBQUE7RUFKSTs7RUFLZCxLQUFRLENBQUEsQ0FBQTtXQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBUCxHQUFtQjtFQUF0Qjs7RUFDUixLQUFRLENBQUEsQ0FBQTtXQUFHLElBQUMsQ0FBQSxNQUFELEdBQVU7RUFBYjs7RUFFUixRQUFXLENBQUMsUUFBTSxJQUFDLENBQUEsS0FBUixFQUFlLFFBQU0sQ0FBckIsRUFBd0IsS0FBRyxFQUEzQixDQUFBO0FBQ1YsUUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0lBQUEsSUFBRyxLQUFBLEtBQVMsUUFBQSxDQUFTLElBQUMsQ0FBQSxNQUFWLEVBQWlCLEVBQWpCLENB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QUFBLElBQUMsQ0FBQSxJQUFELENBQUEsQ0FBQSxHQUFVLElBQVYsQ0FBYixHQUErQjtVQUMvQixZQUFhLENBQUEsSUFBQyxDQUFBLElBQUQsQ0FBQSxDQUFBLEdBQVUsSUFBVixDQUFiLEdBQStCLElBQUssQ0FBQSxJQUFDLENBQUEsT0FBRCxDQUFVLENBQUEsSUFBQyxDQUFBLElBQUQsQ0FBQSxDQUFBLENBQVEsQ0FBQyxFQUh4RDtTQUREOztNQUtBLFlBQVksQ0FBQyxRQUFiLENBQXNCLEdBQXRCO01BRUEsVUFBQSxDQUFBO01BRUEsS0FBQSxHQUFRLElBQUssQ0FBQSxJQUFDLENBQUEsT0FBRCxDQUFVLENBQUEsSUFBQyxDQUFBLElBQUQsQ0FBQSxDQUFBLENBQVEsQ0FBQztNQUNoQyxJQUFHLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBUCxDQUFBLEdBQWdCLENBQW5CO1FBQ0MsSUFBQSxHQUFPLElBQUMsQ0FBQSxLQUFNLENBQUEsUUFBQSxFQURmOztNQUVBLElBQUcsSUFBQSxDQUFLLElBQUwsQ0FBQSxLQUFjLElBQWpCO1FBQ0MsSUFBQSxDQUFLLElBQUwsRUFERDs7TUFHQSxZQUFZLENBQUMsS0FBYixDQUFBO2FBQ0EsT0FBQSxDQUFBLEVBbkJEO0tBQUEsTUFBQTthQXFCQyxJQUFDLENBQUEsUUFBRCxDQUFVLENBQVYsRUFyQkQ7O0VBVlc7O0VBa0NaLFNBQVksQ0FBQyxPQUFELENBQUE7QUFDWCxRQUFBLEdBQUEsRUFBQTtJQUFBLEdBQUEsR0FBTSxTQUFBLENBQVUsT0FBVjtJQUNOLElBQUcsV0FBSDtNQUNDLEdBQUEsR0FBTSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosRUFBaUIsUUFBakI7YUFDTixHQUFHLENBQUMsS0FBSixDQUFBLEVBRkQ7O0VBRlc7O0FBeEtiIiwic291cmNlc0NvbnRlbnQiOlsiTElOS1MgPSBcclxuXHRcInA1RG9qb1wiICAgICAgIDogXCJodHRwczovL2dpdGh1Yi5jb20vQ2hyaXN0ZXJOaWxzc29uL3A1RG9qby9ibG9iL21hc3Rlci9SRUFETUUubWQjcDVkb2pvXCJcclxuXHRcInA1Q29sb3JcIiAgICAgIDogXCJodHRwczovL2NocmlzdGVybmlsc3Nvbi5naXRodWIuaW8vcDVDb2xvclwiXHJcblx0XCJMaW5rc1wiIFx0XHRcdCA6IFwiaHR0cHM6Ly9jaHJpc3Rlcm5pbHNzb24uZ2l0aHViLmlvL0xhYlwiXHJcblx0XCJwNURvam8yXCIgICAgICA6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NocmlzdGVyTmlsc3Nvbi9wNURvam8yL3dpa2lcIlxyXG5cdFwiU3ZlbHRlXCJcdFx0XHQgOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9DaHJpc3Rlck5pbHNzb24vc3ZlbHRlcy93aWtpL1N2ZWx0ZVwiXHJcblx0XHJcbmNsYXNzIE1lbnVcclxuXHRjb25zdHJ1Y3RvciA6IChAaXRlbXMsIEB0YWJsZT1udWxsLCBAYnJhbmNoPVtdKSAtPlxyXG5cdFx0QHN0YXRlID0gMFxyXG5cdFx0QGNoYXB0ZXIgPSAnJ1xyXG5cdFx0QGV4ZXJjaXNlID0gJydcclxuXHRcdEBjYWxscyA9IHt9XHJcblx0cmVuc2EgOiAtPiBAdGFibGUuaW5uZXJIVE1MID0gXCJcIlxyXG5cdGNsZWFyIDogLT4gQGJyYW5jaCA9IFtdXHJcblxyXG5cdHRyYXZlcnNlIDogKGl0ZW1zPUBpdGVtcywgbGV2ZWw9MCwgYnI9W10pIC0+XHJcblx0XHRpZiBmYWxzZSA9PSBnb0RlZXBlciBAYnJhbmNoLGJyIHRoZW4gcmV0dXJuXHJcblxyXG5cdFx0aWYgbGV2ZWwgPT0gMCAjIGNoYXB0ZXJcclxuXHRcdFx0Zm9yIGtleSxpIGluIF8ua2V5cyBpdGVtc1xyXG5cdFx0XHRcdGlmIGkgPT0gQGJyYW5jaFtsZXZlbF0gb3IgQGJyYW5jaC5sZW5ndGggPT0gbGV2ZWxcclxuXHRcdFx0XHRcdEBhZGRUaXRsZSBrZXksIGxldmVsLCBpLCBici5jb25jYXQoaSksIFtCTEFDSyxXSElURV1cclxuXHRcdFx0XHRjaGlsZHJlbiA9IGl0ZW1zW2tleV1cclxuXHRcdFx0XHRAdHJhdmVyc2UgY2hpbGRyZW4sIGxldmVsKzEsIGJyLmNvbmNhdCBpXHJcblxyXG5cdFx0aWYgQGJyYW5jaC5sZW5ndGggPT0gMFxyXG5cdFx0XHRmb3IgdGV4dCxsaW5rIG9mIExJTktTIFxyXG5cdFx0XHRcdGIgPSBAYWRkQ29tbWFuZCB0ZXh0LCAwLCBbREFSS0dSRUVOLCBXSElURV1cclxuXHRcdFx0XHRkbyAobGluaykgLT4gYi5vbmNsaWNrID0gLT4gd2luZG93Lm9wZW4obGluaywgJ19ibGFuaycpLmZvY3VzKClcdFx0XHRcdFxyXG5cclxuXHRcdGlmIGxldmVsID09IDEgIyBleGVyY2lzZVxyXG5cdFx0XHRmb3Iga2V5LGkgaW4gXy5rZXlzIGl0ZW1zXHJcblx0XHRcdFx0aWYgaSA9PSBAYnJhbmNoW2xldmVsXSBvciBAYnJhbmNoLmxlbmd0aCA9PSBsZXZlbFxyXG5cdFx0XHRcdFx0QGFkZFRpdGxlIGtleSwgbGV2ZWwsIGksIGJyLmNvbmNhdChpKSwgQGhhcmRuZXNzIGl0ZW1zW2tleV0uaFxyXG5cdFx0XHRcdGtleXdvcmRzID0gaXRlbXNba2V5XS5rLnNwbGl0ICcgJ1xyXG5cdFx0XHRcdGtleXdvcmRzLnNvcnQoKVxyXG5cdFx0XHRcdEB0cmF2ZXJzZSBrZXl3b3JkcywgbGV2ZWwrMSwgYnIuY29uY2F0IGlcclxuXHJcblx0XHRpZiBsZXZlbCA9PSAyIFxyXG5cdFx0XHQjIGtleXdvcmRzXHJcblx0XHRcdGZvciBpdGVtIGluIGl0ZW1zIFxyXG5cdFx0XHRcdGlmIGl0ZW0gIT0gJycgdGhlbiBAYWRkVGl0bGUgaXRlbSwgbGV2ZWwsIGksIGJyLCBbQkxBQ0ssWUVMTE9XXVxyXG5cclxuXHRcdFx0IyBjb21tYW5kc1xyXG5cdFx0XHRAY2FsbHMgPSBkZWNvcmF0ZSBkYXRhW0BjaGFwdGVyXVtAZXhlcigpXS5jXHJcblx0XHRcdGZvciBrZXkgb2YgQGNhbGxzXHJcblx0XHRcdFx0aWYga2V5ICE9ICdkcmF3KCknIHRoZW4gQGFkZENvbW1hbmQga2V5LCBsZXZlbCwgW0JMVUUsIFlFTExPV11cclxuXHJcblx0XHRcdCMgcmVuZXdcclxuXHRcdFx0aWYgbG9jYWxTdG9yYWdlW0BleGVyY2lzZSArIFwiL3ZcIl0/IGFuZCBsb2NhbFN0b3JhZ2VbQGV4ZXJjaXNlICsgXCIvdlwiXSAhPSBkYXRhW0BjaGFwdGVyXVtAZXhlcmNpc2VdLnZcclxuXHRcdFx0XHRiID0gQGFkZENvbW1hbmQgXCJSZW5ld1wiLCBsZXZlbCwgW1JFRCwgV0hJVEVdXHJcblx0XHRcdFx0Yi5vbmNsaWNrID0gLT5cclxuXHRcdFx0XHRcdHByaW50IG15Q29kZU1pcnJvci5nZXRWYWx1ZSgpICMgTMOldCBzdMOlIVxyXG5cdFx0XHRcdFx0ZXhlcmNpc2UgPSBkYXRhW21lbnkuY2hhcHRlcl1bbWVueS5leGVyY2lzZV1cclxuXHRcdFx0XHRcdG15Q29kZU1pcnJvci5zZXRWYWx1ZSBleGVyY2lzZS5iXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2VbbWVueS5leGVyY2lzZSArIFwiL1wiICsgJ3YnXSA9IGV4ZXJjaXNlLnZcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZVttZW55LmV4ZXJjaXNlICsgXCIvXCIgKyAnZCddID0gZXhlcmNpc2UuYlxyXG5cclxuXHRcdFx0IyBsaW5rc1xyXG5cdFx0XHRpZiBAZXhlcmNpc2UgIT0gJydcclxuXHRcdFx0XHRmb3IgdGV4dCxsaW5rIG9mIGRhdGFbQGNoYXB0ZXJdW0BleGVyY2lzZV0uZVxyXG5cdFx0XHRcdFx0YiA9IEBhZGRDb21tYW5kIHRleHQsIGxldmVsLCBbR1JFRU4sIEJMQUNLXVxyXG5cdFx0XHRcdFx0ZG8gKGxpbmspIC0+IGIub25jbGljayA9IC0+IHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKS5mb2N1cygpXHJcblxyXG5cdGhhbmRsZVJvdyA6IChiKSAtPlxyXG5cdFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwidHJcIlxyXG5cdFx0YWRkQ2VsbCB0cixiLDEwMFxyXG5cdFx0QHRhYmxlLmFwcGVuZENoaWxkIHRyXHJcblxyXG5cdGxpbmVDb3VudCA6IC0+IGRhdGFbQGNoYXB0ZXJdW0BleGVyY2lzZV0ubFxyXG5cclxuXHRoYXJkbmVzcyA6IChoKSAtPlxyXG5cdFx0aWYgaD09MCB0aGVuIHJldHVybiBbV0hJVEUsQkxBQ0tdXHJcblx0XHRpZiBoPT0xIHRoZW4gcmV0dXJuIFtHUkVFTixCTEFDS10gXHJcblx0XHRpZiBoPT0yIHRoZW4gcmV0dXJuIFtZRUxMT1csQkxBQ0tdXHJcblx0XHRpZiBoPT0zIHRoZW4gcmV0dXJuIFtSRUQsV0hJVEVdXHJcblx0XHRbUkVELFdISVRFXVxyXG5cclxuXHRhZGRUaXRsZSA6ICh0aXRsZSxsZXZlbCxpLGJyLGNvbG9ycz1bQkxBQ0ssUkVEXSkgLT5cclxuXHRcdGlmIGxldmVsID09IDIgXHJcblx0XHRcdGIgPSBtYWtlQnV0dG9uIHRpdGxlLCBsZXZlbCwgY29sb3JzXHJcblx0XHRlbHNlIGlmIEBicmFuY2hbbGV2ZWxdID09IGkgXHJcblx0XHRcdGlmIGxldmVsID09IDFcclxuXHRcdFx0XHRiID0gbWFrZUJ1dHRvbiAnIC0gJyArIFwiI3t0aXRsZX0gWyN7QGxpbmVDb3VudCgpfV1cIiwgbGV2ZWwsIGNvbG9yc1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdGIgPSBtYWtlQnV0dG9uICcgLSAnICsgdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdGVsc2UgXHJcblx0XHRcdGIgPSBtYWtlQnV0dG9uICcgKyAnICsgdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdFxyXG5cdFx0Yi5icmFuY2ggPSBiclxyXG5cclxuXHRcdGIub25jbGljayA9ID0+IFxyXG5cdFx0XHRpZiBsZXZlbCA9PSAwIFxyXG5cdFx0XHRcdEBzZWwxY2xpY2sgYi52YWx1ZVxyXG5cdFx0XHRcdEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHJcblx0XHRcdGVsc2UgaWYgbGV2ZWwgPT0gMSBcclxuXHRcdFx0XHRAc2VsMmNsaWNrIGIgIy52YWx1ZVxyXG5cdFx0XHRcdEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHRcdFx0XHRcclxuXHRcdFx0ZWxzZSBpZiBsZXZlbCA9PSAyIHRoZW4gQHNlbDNjbGljayBiLnZhbHVlXHJcblx0XHRcdCNpZiBsZXZlbCBpbiBbMCwxXSB0aGVuIEBicmFuY2ggPSBjYWxjQnJhbmNoIEBicmFuY2gsIGIuYnJhbmNoXHJcblx0XHRcdHVwZGF0ZVRhYmxlcygpXHJcblxyXG5cdFx0QGhhbmRsZVJvdyBiXHJcblx0XHRiXHJcblxyXG5cdGFkZENvbW1hbmQgOiAodGl0bGUsbGV2ZWwsY29sb3JzKSAtPlxyXG5cdFx0YiA9IG1ha2VCdXR0b24gdGl0bGUsIGxldmVsLCBjb2xvcnNcclxuXHRcdGNvZGUgPSBAY2FsbHNbdGl0bGVdXHJcblx0XHRiLm9uY2xpY2sgPSAtPiBcclxuXHRcdFx0aWYgcnVuMShjb2RlKSA9PSB0cnVlIHRoZW4gcnVuMCBjb2RlXHJcblx0XHRcdGNvbXBhcmUoKVxyXG5cdFx0QGhhbmRsZVJvdyBiXHJcblx0XHRiXHJcblxyXG5cdGV4ZXIgOiAtPiBcclxuXHRcdGlmIEBleGVyY2lzZSA9PSAnJyBvciBAZXhlcmNpc2UgPT0gbnVsbCB0aGVuIHJldHVybiAnJ1xyXG5cdFx0QGV4ZXJjaXNlICMuc3BsaXQoJyAnKVswXVx0XHJcblxyXG5cdHNldFN0YXRlIDogKHN0KSAtPlxyXG5cdFx0QHN0YXRlID0gc3RcclxuXHJcblx0XHQjaWYgc3Q9PTIgdGhlbiBAY2FsbHMgPSBkYXRhW0BjaGFwdGVyXVtAZXhlcmNpc2VdLmMgZWxzZSBAY2FsbHMgPSB7fVxyXG5cdFx0aWYgc3Q9PTIgYW5kIF8uc2l6ZShAY2FsbHMpID4gMCB0aGVuICQoJyNpbnB1dCcpLnNob3coKSBlbHNlICQoJyNpbnB1dCcpLmhpZGUoKVxyXG5cdFx0aWYgc3Q9PTIgdGhlbiBtc2cuc2hvdygpIGVsc2UgbXNnLmhpZGUoKVxyXG5cdFx0aWYgc3Q9PTIgdGhlbiAkKFwiLkNvZGVNaXJyb3JcIikuc2hvdygpIGVsc2UgJChcIi5Db2RlTWlycm9yXCIpLmhpZGUoKVxyXG5cclxuXHRcdGlmIHN0PD0yICMgMVxyXG5cdFx0XHRAY2FsbHMgPSB7fVxyXG5cdFx0XHR0YWJsZUNsZWFyKClcclxuXHRcdFx0YmcgMC41XHJcblxyXG5cdFx0aWYgc3Q9PTEgdGhlblx0QGV4ZXJjaXNlID0gXCJcIlxyXG5cclxuXHRzZWwxY2xpY2sgOiAoY2hhcHRlcikgLT5cclxuXHRcdHZhbHVlID0gY2hhcHRlclszLi5dXHJcblx0XHRAY2hhcHRlciA9IHZhbHVlXHJcblx0XHRAZXhlcmNpc2UgPSBcIlwiXHJcblx0XHRAY2FsbHMgPSB7fVxyXG5cdFx0QHNldFN0YXRlIDFcclxuXHJcblx0c2VsMmNsaWNrIDogKGIpIC0+XHJcblx0XHRleGVyY2lzZSA9IGIudmFsdWUgXHJcblx0XHR2YWx1ZSA9IGV4ZXJjaXNlWzMuLl1cclxuXHRcdGFyciA9IHZhbHVlLnNwbGl0ICcgJ1xyXG5cdFx0QGV4ZXJjaXNlID0gYXJyWzBdXHJcblx0XHRpZiBAZXhlcigpID09IFwiXCJcclxuXHRcdFx0bXlDb2RlTWlycm9yLnNldFZhbHVlIFwiXCJcclxuXHRcdFx0YmcgMC41XHJcblx0XHRcdHJldHVyblxyXG5cdFx0QGNhbGxzID0gZGF0YVtAY2hhcHRlcl1bQGV4ZXIoKV0uY1xyXG5cdFx0aWYgZXhlcmNpc2UuaW5kZXhPZignKycpID49IDBcclxuXHRcdFx0QHNldFN0YXRlIDJcclxuXHRcdFx0c3JjID0gbG9jYWxTdG9yYWdlW0BleGVyKCkgKyBcIi9kXCJdXHJcblx0XHRcdGlmIHNyYyA9PSB1bmRlZmluZWQgb3Igc3JjID09IG51bGwgb3Igc3JjID09ICcnXHJcblx0XHRcdFx0aWYgZGF0YVtAY2hhcHRlcl1bQGV4ZXIoKV0gXHJcblx0XHRcdFx0XHRzcmMgPSBkYXRhW0BjaGFwdGVyXVtAZXhlcigpXS5iXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2VbQGV4ZXIoKSArIFwiL2RcIl0gPSBzcmNcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZVtAZXhlcigpICsgXCIvdlwiXSA9IGRhdGFbQGNoYXB0ZXJdW0BleGVyKCldLnZcclxuXHRcdFx0bXlDb2RlTWlycm9yLnNldFZhbHVlIHNyY1xyXG5cclxuXHRcdFx0dGFibGVDbGVhcigpXHJcblxyXG5cdFx0XHRjYWxscyA9IGRhdGFbQGNoYXB0ZXJdW0BleGVyKCldLmNcdFx0XHJcblx0XHRcdGlmIF8uc2l6ZShjYWxscykgPiAwIFxyXG5cdFx0XHRcdGNvZGUgPSBAY2FsbHNbXCJkcmF3KClcIl1cclxuXHRcdFx0aWYgcnVuMShjb2RlKSA9PSB0cnVlXHJcblx0XHRcdFx0cnVuMCBjb2RlIFxyXG5cclxuXHRcdFx0bXlDb2RlTWlycm9yLmZvY3VzKClcclxuXHRcdFx0Y29tcGFyZSgpXHJcblx0XHRlbHNlXHJcblx0XHRcdEBzZXRTdGF0ZSAxXHJcblxyXG5cdFxyXG5cdHNlbDNjbGljayA6IChrZXl3b3JkKSAtPlxyXG5cdFx0dXJsID0gYnVpbGRMaW5rIGtleXdvcmRcclxuXHRcdGlmIHVybD9cclxuXHRcdFx0d2luID0gd2luZG93Lm9wZW4gdXJsLCAnX2JsYW5rJ1xyXG5cdFx0XHR3aW4uZm9jdXMoKVxyXG5cdCJdfQ==
//# sourceURL=c:\github\p5Dojo\coffee\menu.coffee