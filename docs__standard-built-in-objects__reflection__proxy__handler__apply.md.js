(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[347],{MShg:function(e,a,n){"use strict";n.r(a);var l=n("q1tI"),t=n.n(l),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");a["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"proxy---handlerapply"},t.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlerapply"},t.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.apply"),t.a.createElement("p",null,t.a.createElement("code",null,"handler.apply()")," \u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528\u3001",t.a.createElement("code",null,"call")," \u548c ",t.a.createElement("code",null,"apply")," \u64cd\u4f5c\u3002"),t.a.createElement("h2",{id:"\u8bed\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),t.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  apply: function(target, context, args) {\n    return Reflect.apply(...arguments);\n  },\n});\n",lang:"js"}),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53c2\u6570"),t.a.createElement("th",null,"\u8bf4\u660e"),t.a.createElement("th",null,"\u7c7b\u578b"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"target")),t.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),t.a.createElement("td",null,"function")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"context")),t.a.createElement("td",null,"\u88ab\u8c03\u7528\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61"),t.a.createElement("td",null,"this")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"args")),t.a.createElement("td",null,"\u53c2\u6570\u5217\u8868"),t.a.createElement("td",null,"typed array")))),t.a.createElement("h2",{id:"\u8bf4\u660e"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},t.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),t.a.createElement("h3",{id:"\u62e6\u622a"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},t.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),t.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"proxy(...args)")),t.a.createElement("li",null,t.a.createElement("code",null,"Function.prototype.apply()")," \u548c ",t.a.createElement("code",null,"Function.prototype.call()")),t.a.createElement("li",null,t.a.createElement("code",null,"Reflect.apply()"))),t.a.createElement("h3",{id:"\u7ea6\u675f"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},t.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),t.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",t.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff1a"),t.a.createElement("p",null,t.a.createElement("code",null,"target")," \u5fc5\u987b\u662f\u53ef\u88ab\u8c03\u7528\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u5fc5\u987b\u662f\u4e00\u4e2a\u51fd\u6570\u5bf9\u8c61\u3002"),t.a.createElement("h2",{id:"\u793a\u4f8b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},t.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),t.a.createElement(c.a,{code:"const proxy = new Proxy(function() {}, {\n  apply: function(target, context, args) {\n    console.log('Called:' + args.join(', '));\n    return args[0] + args[1] + args[2];\n  },\n});\n\nconsole.log(proxy(1, 2, 3));\n// 'Called: 1, 2, 3'\n",lang:"js"}),t.a.createElement("p",null,"\u5f53 Proxy \u7684\u5b9e\u4f8b ",t.a.createElement("code",null,"proxy")," \u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u88ab ",t.a.createElement("code",null,"apply")," \u65b9\u6cd5\u62e6\u622a\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),t.a.createElement("h3",{id:"\u7b97\u672f\u8fd0\u7b97"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u672f\u8fd0\u7b97"},t.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u672f\u8fd0\u7b97"),t.a.createElement(c.a,{code:"const twice = {\n  apply(target, context, args) {\n    return Reflect.apply(...args) * 2;\n  },\n};\n\nconst sum = function(left, right) {\n  return left + right;\n};\n\nconst proxy = new Proxy(sum, twice);\n\nconsole.log(proxy(1, 2));\n// 6\n\nconsole.log(proxy.call(null, 5, 6));\n// 22\n\nconsole.log(proxy.apply(null, [7, 8]));\n// 30\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6bcf\u5f53\u6267\u884c ",t.a.createElement("code",null,"proxy")," \u51fd\u6570\uff08\u76f4\u63a5\u8c03\u7528\u6216 ",t.a.createElement("code",null,"call")," \u548c ",t.a.createElement("code",null,"apply")," \u8c03\u7528\uff09\uff0c\u5c31\u4f1a\u88ab ",t.a.createElement("code",null,"apply")," \u65b9\u6cd5\u62e6\u622a\u3002"),t.a.createElement("p",null,"\u53e6\u5916\uff0c\u76f4\u63a5\u8c03\u7528 ",t.a.createElement("code",null,"Reflect.apply")," \u65b9\u6cd5\uff0c\u4e5f\u4f1a\u88ab\u62e6\u622a\u3002")))}}}]);