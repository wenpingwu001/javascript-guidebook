(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[253],{unr4:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(r);t("5Yjd");n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"generatorprototypereturn"},a.a.createElement("a",{"aria-hidden":"true",href:"#generatorprototypereturn"},a.a.createElement("span",{className:"icon icon-link"})),"Generator.prototype.return"),a.a.createElement("p",null,"Generator \u51fd\u6570\u8fd4\u56de\u7684\u904d\u5386\u5668\u5bf9\u8c61\uff0c\u8fd8\u6709\u4e00\u4e2a ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u8fd4\u56de\u7ed9\u5b9a\u7684\u503c\uff0c\u5e76\u4e14\u7ec8\u7ed3\u904d\u5386 Generator \u51fd\u6570\u3002"),a.a.createElement(o.a,{code:"function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst generator = gen();\n\ngenerator.next()          // { value: 1, done: false }\ngenerator.return('foo')   // { value: \"foo\", done: true }\ngenerator.next()          // { value: undefined, done: true }\n",lang:"js"}),a.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u904d\u5386\u5668\u5bf9\u8c61 ",a.a.createElement("code",null,"generator")," \u8c03\u7528 ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u540e\uff0c\u8fd4\u56de\u503c\u7684 ",a.a.createElement("code",null,"value")," \u5c5e\u6027\u5c31\u662f ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u7684\u53c2\u6570 ",a.a.createElement("code",null,"foo"),"\u3002\u5e76\u4e14\uff0cGenerator \u51fd\u6570\u7684\u904d\u5386\u5c31\u7ec8\u6b62\u4e86\uff0c\u8fd4\u56de\u503c\u7684 ",a.a.createElement("code",null,"done")," \u5c5e\u6027\u4e3a ",a.a.createElement("code",null,"true"),"\uff0c\u4ee5\u540e\u518d\u8c03\u7528 ",a.a.createElement("code",null,"next")," \u65b9\u6cd5\uff0c",a.a.createElement("code",null,"done")," \u5c5e\u6027\u603b\u662f\u8fd4\u56de ",a.a.createElement("code",null,"true"),"\u3002"),a.a.createElement("p",null,"\u5982\u679c ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4e0d\u63d0\u4f9b\u53c2\u6570\uff0c\u5219\u8fd4\u56de\u503c\u7684 ",a.a.createElement("code",null,"value")," \u5c5e\u6027\u4e3a ",a.a.createElement("code",null,"undefined"),"\u3002"),a.a.createElement(o.a,{code:"function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nvar generator = gen();\n\ngenerator.next()        // { value: 1, done: false }\ngenerator.return()      // { value: undefined, done: true }\n",lang:"js"}),a.a.createElement("p",null,"\u5982\u679c Generator \u51fd\u6570\u5185\u90e8\u6709 ",a.a.createElement("code",null,"try...finally")," \u4ee3\u7801\u5757\uff0c\u4e14\u6b63\u5728\u6267\u884c ",a.a.createElement("code",null,"try")," \u4ee3\u7801\u5757\uff0c\u90a3\u4e48 ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u4f1a\u63a8\u8fdf\u5230 ",a.a.createElement("code",null,"finally")," \u4ee3\u7801\u5757\u6267\u884c\u5b8c\u518d\u6267\u884c\u3002"),a.a.createElement(o.a,{code:"function* numbers () {\n  yield 1;\n  try {\n    yield 2;\n    yield 3;\n  } finally {\n    yield 4;\n    yield 5;\n  }\n  yield 6;\n}\nvar generator = numbers();\ngenerator.next()       // { value: 1, done: false }\ngenerator.next()       // { value: 2, done: false }\ngenerator.return(7)    // { value: 4, done: false }\ngenerator.next()       // { value: 5, done: false }\ngenerator.next()       // { value: 7, done: true }\n",lang:"js"}),a.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u8c03\u7528 ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u540e\uff0c\u5c31\u5f00\u59cb\u6267\u884c ",a.a.createElement("code",null,"finally")," \u4ee3\u7801\u5757\uff0c\u7136\u540e\u7b49\u5230 ",a.a.createElement("code",null,"finally")," \u4ee3\u7801\u5757\u6267\u884c\u5b8c\uff0c\u518d\u6267\u884c ",a.a.createElement("code",null,"return")," \u65b9\u6cd5\u3002"),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("strong",null,"\u53c2\u8003\u4e66\u7c4d\uff1a")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw",target:"_blank",rel:"noopener noreferrer"},"\u300aECMAScript 6 \u5165\u95e8\u300b\u962e\u4e00\u5cf0\u8457",a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},a.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),a.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);