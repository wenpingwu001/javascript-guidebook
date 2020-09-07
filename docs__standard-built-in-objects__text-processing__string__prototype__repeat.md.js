(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[385],{iZ9e:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(l);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"stringprototyperepeat"},r.a.createElement("a",{"aria-hidden":"true",href:"#stringprototyperepeat"},r.a.createElement("span",{className:"icon icon-link"})),"String.prototype.repeat()"),r.a.createElement("p",null,r.a.createElement("code",null,"repeat()")," \u6784\u9020\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u5305\u542b\u88ab\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u6307\u5b9a\u6570\u91cf\u7684\u5b57\u7b26\u4e32\u7684\u526f\u672c\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(c.a,{code:"str.repeat(count);\n",lang:"js"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"count")),r.a.createElement("td",null,"\u4ecb\u4e8e 0 \u4e0e\u6b63\u65e0\u7a77\u5927\u4e4b\u95f4\u7684\u6574\u6570\u3002\u8868\u793a\u5728\u65b0\u6784\u9020\u7684\u5b57\u7b26\u4e32\u4e2d\u91cd\u590d\u4e86\u591a\u5c11\u904d\u539f\u5b57\u7b26\u4e32\u3002"),r.a.createElement("td",null,"number")))),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement(c.a,{code:"const str = 'abc';\n\nstr.repeat(0);\n// ''\n\nstr.repeat(1);\n// 'abc'\n\nstr.repeat(2);\n// 'abcabc'\n\nstr.repeat(3.5);\n// 'abcabcabc'\n\nstr.repeat(1 / 0);\n// RangeError: repeat count must be positive and less than infinity\n\nstr.repeat(-1);\n// RangeError: repeat count mutst be positive and less than infinity\n",lang:"js"}),r.a.createElement("h2",{id:"polyfill"},r.a.createElement("a",{"aria-hidden":"true",href:"#polyfill"},r.a.createElement("span",{className:"icon icon-link"})),"Polyfill"),r.a.createElement(c.a,{code:"if (!String.prototype.repeat) {\n  String.prototype.repeat = function(count) {\n    'use strict';\n\n    if (this === null) {\n      throw new TypeError(\"Can't convert \" + this + ' to object');\n    }\n    var str = '' + this;\n    count = +count;\n\n    if (count !== count) {\n      count = 0;\n    }\n    if (count < 0) {\n      throw new RangeError('repeat count must be non-negative');\n    }\n    if (count === Infinity) {\n      throw new RangeError('repeat count must be less than Infinity');\n    }\n\n    count = Math.floor(count);\n\n    if (str.length === 0 || count === 0) {\n      return '';\n    }\n\n    // \u786e\u4fdd count \u662f\u4e00\u4e2a 31 \u4f4d\u7684\u6574\u6570\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4f18\u5316\u7684\u7b97\u6cd5\n    // \u5f53\u524d\uff0c\u7edd\u5927\u591a\u6570\u6d4f\u89c8\u5668\u90fd\u4e0d\u80fd\u652f\u6301 1<<28 \u957f\u7684\u5b57\u7b26\u4e32\n    if (str.length * count >= 1 << 28) {\n      throw new RangeError('repeat count must not overflow maximum string size');\n    }\n\n    var repeat = '';\n\n    for (;;) {\n      if ((count & 1) === 1) {\n        repeat += str;\n      }\n\n      count >>>= 1;\n\n      if (count === 0) {\n        break;\n      }\n      str += str;\n    }\n    return repeat;\n  };\n}\n",lang:"js"})))}}}]);