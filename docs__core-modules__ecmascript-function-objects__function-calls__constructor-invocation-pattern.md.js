(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[134],{KbDF:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6784\u9020\u51fd\u6570\u8c03\u7528\u6a21\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6784\u9020\u51fd\u6570\u8c03\u7528\u6a21\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u6784\u9020\u51fd\u6570\u8c03\u7528\u6a21\u5f0f"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6784\u9020\u51fd\u6570\u8c03\u7528\u6a21\u5f0f\uff08Constructor Invocation Pattern\uff09")),l.a.createElement("p",null,"\u6784\u9020\u51fd\u6570\u8c03\u7528\u6a21\u5f0f\u7684\u7279\u5f81\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6784\u9020\u51fd\u6570\u7684\u9996\u5b57\u6bcd\u4e00\u822c\u8981\u5927\u5199"),l.a.createElement("li",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u548c\u5173\u952e\u5b57 ",l.a.createElement("code",null,"new")," \u4e00\u8d77\u4f7f\u7528"),l.a.createElement("li",null,"\u6784\u9020\u51fd\u6570\u4e2d\u7684 ",l.a.createElement("code",null,"this")," \u6307\u5411 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u521b\u5efa\u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61"),l.a.createElement("li",null,"\u9ed8\u8ba4\u8fd4\u56de ",l.a.createElement("code",null,"new")," \u521b\u5efa\u51fa\u6765\u7684\u8fd9\u4e2a\u5bf9\u8c61\uff08",l.a.createElement("code",null,"this"),"\uff09")),l.a.createElement("h2",{id:"\u5173\u952e\u5b57-new"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5173\u952e\u5b57-new"},l.a.createElement("span",{className:"icon icon-link"})),"\u5173\u952e\u5b57 ",l.a.createElement("code",null,"new")),l.a.createElement("p",null,"\u5982\u679c\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u8c03\u7528\u4e4b\u524d\u5e26\u6709\u5173\u952e\u5b57 ",l.a.createElement("code",null,"new"),"\uff0c\u5b83\u5c31\u6784\u6210\u6784\u9020\u51fd\u6570\u8c03\u7528\u3002"),l.a.createElement(r.a,{code:"function fn(){\n  this.a = 1;\n};\n\nconst obj = new fn();\n\nconsole.log(obj.a);\n//  1\n",lang:"js"}),l.a.createElement("h2",{id:"\u5b9e\u53c2\u8868\u8fbe\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u53c2\u8868\u8fbe\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u53c2\u8868\u8fbe\u5f0f"),l.a.createElement("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u8c03\u7528\u5728\u5706\u62ec\u53f7\u5185\u5305\u542b\u4e00\u7ec4\u5b9e\u53c2\u5217\u8868\uff0c\u5148\u8ba1\u7b97\u8fd9\u4e9b\u5b9e\u53c2\u8868\u8fbe\u5f0f\uff0c\u7136\u540e\u4f20\u5165\u51fd\u6570\u5185\u3002"),l.a.createElement(r.a,{code:"function fn(x){\n  this.a = x;\n};\n\nconst obj = new fn(2);\n\nconsole.log(obj.a); // 2\n",lang:"js"}),l.a.createElement("h2",{id:"\u7701\u7565\u5706\u62ec\u53f7"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7701\u7565\u5706\u62ec\u53f7"},l.a.createElement("span",{className:"icon icon-link"})),"\u7701\u7565\u5706\u62ec\u53f7"),l.a.createElement("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u6ca1\u6709\u5f62\u53c2\uff0cJavaScript \u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u8bed\u6cd5\u662f\u5141\u8bb8\u7701\u7565\u5b9e\u53c2\u5217\u8868\u548c\u5706\u62ec\u53f7\u7684\u3002\u51e1\u662f\u6ca1\u6709\u5f62\u53c2\u7684\u6784\u9020\u51fd\u6570\u8c03\u7528\u90fd\u53ef\u4ee5\u7701\u7565\u5706\u62ec\u53f7\u3002"),l.a.createElement(r.a,{code:"const target = new Object();\n//\u7b49\u4ef7\u4e8e\nconst target = new Object;\n",lang:"js"}),l.a.createElement("h2",{id:"\u8c03\u7528\u4e0a\u4e0b\u6587"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8c03\u7528\u4e0a\u4e0b\u6587"},l.a.createElement("span",{className:"icon icon-link"})),"\u8c03\u7528\u4e0a\u4e0b\u6587"),l.a.createElement("p",null,"\u5c3d\u7ba1\u6784\u9020\u51fd\u6570\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u65b9\u6cd5\u8c03\u7528\uff0c\u5b83\u4f9d\u7136\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u4f5c\u4e3a\u8c03\u7528\u4e0a\u4e0b\u6587\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u8868\u8fbe\u5f0f ",l.a.createElement("code",null,"new target.fn()")," \u4e2d\uff0c\u8c03\u7528\u4e0a\u4e0b\u6587\u5e76\u4e0d\u662f ",l.a.createElement("code",null,"target"),"\u3002"),l.a.createElement(r.a,{code:"const target = {\n  fn: function(){\n    return this;\n  }\n}\n\nvar obj = new target.fn();\n\nconsole.log(obj,obj === target);\n//{} false\nconsole.log(obj.constructor === target.fn);\n//true\n",lang:"js"}),l.a.createElement("h2",{id:"\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u8bed\u53e5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u8bed\u53e5"},l.a.createElement("span",{className:"icon icon-link"})),"\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u8bed\u53e5"),l.a.createElement("p",null,"\u6784\u9020\u51fd\u6570\u901a\u5e38\u4e0d\u4f7f\u7528 ",l.a.createElement("code",null,"return")," \u5173\u952e\u5b57\uff0c\u5b83\u4eec\u901a\u5e38\u521d\u59cb\u5316\u65b0\u5bf9\u8c61\uff0c\u5f53\u6784\u9020\u51fd\u6570\u7684\u51fd\u6570\u4f53\u6267\u884c\u5b8c\u6bd5\u65f6\uff0c\u5b83\u4f1a\u663e\u5f0f\u8fd4\u56de\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6784\u9020\u51fd\u6570\u8c03\u7528\u8868\u8fbe\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u5c31\u662f\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u7684\u503c\u3002"),l.a.createElement(r.a,{code:"function fn(){\n  this.a = 2;\n}\n\nconst test = new fn();\n\nconsole.log(test);\n// { a: 2 }\n",lang:"js"}),l.a.createElement("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u4f7f\u7528 ",l.a.createElement("code",null,"return")," \u8bed\u53e5\u4f46\u6ca1\u6709\u6307\u5b9a\u8fd4\u56de\u503c\uff0c\u6216\u8005\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c\uff0c\u90a3\u4e48\u8fd9\u65f6\u5c06\u5ffd\u7565\u8fd4\u56de\u503c\uff0c\u540c\u65f6\u4f7f\u7528\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u4f5c\u4e3a\u8c03\u7528\u7ed3\u679c\u3002"),l.a.createElement(r.a,{code:"function fn(){\n  this.a = 2;\n  return;\n}\n\nconst test = new fn();\n\nconsole.log(test);\n// { a: 2 }\n",lang:"js"}),l.a.createElement("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u663e\u5f0f\u5730\u4f7f\u7528 ",l.a.createElement("code",null,"return")," \u8bed\u53e5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u8c03\u7528\u8868\u8fbe\u5f0f\u7684\u503c\u5c31\u662f\u8fd9\u4e2a\u5bf9\u8c61\u3002"),l.a.createElement(r.a,{code:"const obj = { a: 1 };\n\nfunction fn(){\n  this.a = 2;\n\n  return obj;\n}\n\nconst test = new fn();\n\nconsole.log(test);\n// { a: 1 }\n",lang:"js"})))}}}]);