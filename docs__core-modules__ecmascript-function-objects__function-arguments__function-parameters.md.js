(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{iOxX:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u51fd\u6570\u53c2\u6570"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u53c2\u6570"},t.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u53c2\u6570"),t.a.createElement("h2",{id:"arguments"},t.a.createElement("a",{"aria-hidden":"true",href:"#arguments"},t.a.createElement("span",{className:"icon icon-link"})),"arguments"),t.a.createElement("p",null,"JavaScript \u4e2d\u7684\u51fd\u6570\u5b9a\u4e49\u5e76\u672a\u6307\u5b9a\u51fd\u6570\u5f62\u53c2\u7684\u7c7b\u578b\uff0c\u51fd\u6570\u8c03\u7528\u4e5f\u672a\u5bf9\u4f20\u5165\u7684\u5b9e\u53c2\u503c\u505a\u4efb\u4f55\u7c7b\u578b\u68c0\u67e5\u3002\u5b9e\u9645\u4e0a\uff0cJavaScript \u51fd\u6570\u8c03\u7528\u751a\u81f3\u4e0d\u68c0\u67e5\u4f20\u5165\u5f62\u53c2\u7684\u4e2a\u6570\u3002"),t.a.createElement(c.a,{code:"function foo(x){\n    return x + 1;\n}\n\nconsole.log(foo(1));\n// 2\nconsole.log(foo('1'));\n// '11'\nconsole.log(foo());\n// NaN\nconsole.log(foo(1,2));\n// 2\n",lang:"js"}),t.a.createElement("h3",{id:"\u540c\u540d\u5f62\u53c2"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u540c\u540d\u5f62\u53c2"},t.a.createElement("span",{className:"icon icon-link"})),"\u540c\u540d\u5f62\u53c2"),t.a.createElement("p",null,"\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u51fd\u6570\u4e2d\u53ef\u4ee5\u51fa\u73b0\u540c\u540d\u5f62\u53c2\uff0c\u4e14\u53ea\u80fd\u8bbf\u95ee\u6700\u540e\u51fa\u73b0\u7684\u8be5\u540d\u79f0\u7684\u5f62\u53c2\u3002"),t.a.createElement(c.a,{code:"function foo(x, x, x ){\n  console.log(x);\n}\n\nfoo(1, 2, 3);\n// 3\n",lang:"js"}),t.a.createElement("p",null,"\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u51fa\u73b0\u540c\u540d\u5f62\u53c2\u4f1a\u629b\u51fa\u8bed\u6cd5\u9519\u8bef\u3002"),t.a.createElement(c.a,{code:"function foo(x, x, x){\n  'use strict';\n  console.log(x);\n}\n\nfoo(1, 2, 3);\n// SyntaxError: Duplicate parameter name not allowed in this context\n",lang:"js"}),t.a.createElement("h3",{id:"\u53c2\u6570\u6570\u91cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570\u6570\u91cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u6570\u91cf"),t.a.createElement("p",null,"\u5f53\u5b9e\u53c2\u6bd4\u51fd\u6570\u58f0\u660e\u6307\u5b9a\u7684\u5f62\u53c2\u4e2a\u6570\u8981\u5c11\uff0c\u5269\u4e0b\u7684\u5f62\u53c2\u90fd\u5c06\u8bbe\u7f6e\u4e3a ",t.a.createElement("code",null,"undefined")," \u503c\u3002"),t.a.createElement(c.a,{code:"function foo( x, y ){\n  console.log(x, y);\n  // 1 undefined\n}\n\nfoo(1);\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("strong",null,"\u9ed8\u8ba4\u503c\u8bbe\u7f6e\uff1a")),t.a.createElement("p",null,"\u5e38\u5e38\u4f7f\u7528\u903b\u8f91\u6216\u8fd0\u7b97\u7b26\u7ed9\u7701\u7565\u7684\u53c2\u6570\u8bbe\u7f6e\u4e00\u4e2a\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u3002"),t.a.createElement(c.a,{code:"function foo( x, y ){\n  y = y || 2;\n  console.log(x, y);\n  // 1 2\n}\n\nfoo(1);\n",lang:"js"}),t.a.createElement("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4f7f\u7528 ",t.a.createElement("code",null,"y || 2")," \u662f\u4e0d\u4e25\u8c28\u7684\uff0c\u663e\u5f0f\u5730\u8bbe\u7f6e\u5047\u503c(",t.a.createElement("code",null,"undefined"),"\u3001",t.a.createElement("code",null,"null"),"\u3001",t.a.createElement("code",null,"false"),"\u3001",t.a.createElement("code",null,"0"),"\u3001",t.a.createElement("code",null,"-0"),"\u3001",t.a.createElement("code",null,"''"),"\u3001",t.a.createElement("code",null,"NaN"),")\u4e5f\u4f1a\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\u3002\u6240\u4ee5\u5e94\u8be5\u6839\u636e\u5b9e\u9645\u573a\u666f\u8fdb\u884c\u5408\u7406\u8bbe\u7f6e\u3002"),t.a.createElement("p",null,"\u5f53\u5b9e\u53c2\u6bd4\u5f62\u53c2\u4e2a\u6570\u8981\u591a\u65f6\uff0c\u5269\u4e0b\u7684\u5b9e\u53c2\u6ca1\u6709\u529e\u6cd5\u76f4\u63a5\u83b7\u5f97\uff0c\u9700\u8981\u4f7f\u7528\u5373\u5c06\u63d0\u5230\u7684 ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u3002"),t.a.createElement("p",null,"JavaScript \u4e2d\u7684\u53c2\u6570\u5728\u5185\u90e8\u7528\u4e00\u4e2a\u6570\u7ec4\u8868\u793a\u3002\u51fd\u6570\u63a5\u6536\u5230\u7684\u59cb\u7ec8\u90fd\u662f\u8fd9\u4e2a\u6570\u7ec4\uff0c\u800c\u4e0d\u5173\u5fc3\u6570\u7ec4\u4e2d\u5305\u542b\u54ea\u4e9b\u53c2\u6570\u3002\u5728\u51fd\u6570\u4f53\u5185\u53ef\u4ee5\u901a\u8fc7 ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u6765\u8bbf\u95ee\u8fd9\u4e2a\u53c2\u6570\u6570\u7ec4\uff0c\u4ece\u800c\u83b7\u53d6\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u3002"),t.a.createElement("p",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u5e76\u4e0d\u662f ",t.a.createElement("code",null,"Array")," \u7684\u5b9e\u4f8b\uff0c\u5b83\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528\u65b9\u62ec\u53f7\u8bed\u6cd5\u8bbf\u95ee\u5b83\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u3002"),t.a.createElement(c.a,{code:"function foo(x){\n  console.log(arguments[0], arguments[1], arguments[2])\n  // 1 2 3\n  return x + 1;\n}\nfoo(1,2,3);\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684 ",t.a.createElement("code",null,"length")," \u5c5e\u6027\u663e\u793a\u5b9e\u53c2\u7684\u4e2a\u6570\uff0c\u51fd\u6570\u7684 ",t.a.createElement("code",null,"length")," \u5c5e\u6027\u663e\u793a\u5f62\u53c2\u7684\u4e2a\u6570\u3002"),t.a.createElement(c.a,{code:"function fn(x, y){\n    console.log(arguments.length)\n    // 3\n}\n\nfn(1, 2, 3);\nconsole.log(fn.length);\n// 2\n",lang:"js"}),t.a.createElement("p",null,"\u5f62\u53c2\u53ea\u662f\u63d0\u4f9b\u4fbf\u5229\uff0c\u4f46\u4e0d\u662f\u5fc5\u9700\u7684\u3002"),t.a.createElement(c.a,{code:"function foo(){\n    console.log(arguments[0]);\n    // 1\n    console.log(arguments[1]);\n    // 2\n}\n",lang:"js"}),t.a.createElement("p",null,"\u5f53\u4e00\u4e2a\u51fd\u6570\u5305\u542b\u8d85\u8fc7 3 \u4e2a\u5f62\u53c2\u65f6\uff0c\u8981\u8bb0\u4f4f\u8c03\u7528\u51fd\u6570\u4e2d\u5b9e\u53c2\u7684\u6b63\u786e\u987a\u5e8f\u5b9e\u5728\u8ba9\u4eba\u5934\u75bc\u3002"),t.a.createElement(c.a,{code:"function fn(/*array*/from, /*index*/form_start, /*array*/to, /*index*/to_start, /*integer*/length){\n  // do something\n}\n",lang:"js"}),t.a.createElement("p",null,"\u901a\u8fc7\u952e/\u503c\u5bf9\u7684\u5f62\u5f0f\u6765\u4f20\u5165\u53c2\u6570\uff0c\u8fd9\u6837\u53c2\u6570\u7684\u987a\u5e8f\u5c31\u65e0\u5173\u7d27\u8981\u4e86\u3002\u5b9a\u4e49\u51fd\u6570\u7684\u65f6\u5019\uff0c\u4f20\u5165\u7684\u5b9e\u53c2\u90fd\u5199\u5165\u4e00\u4e2a\u5355\u72ec\u7684\u5bf9\u8c61\u4e4b\u4e2d\uff0c\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4e2d\u7684\u540d/\u503c\u5bf9\u662f\u771f\u6b63\u9700\u8981\u7684\u5b9e\u53c2\u6570\u636e\u3002"),t.a.createElement(c.a,{code:"function fn(args){\n  fn(args.from, args.from_start || 0, args.to,args.to_start || 0, args.length);\n}\n\nconst a = [1,2,3,4],b =[];\n\nfn({from:a, to:b, length:4});\n",lang:"js"}),t.a.createElement("p",null,"ES6 \u7684 ",t.a.createElement("a",{href:"rest-parameters.md"},"\u5269\u4f59\u53c2\u6570\uff08Rest \u53c2\u6570\uff09")," \u6709\u6548\u5730\u89e3\u51b3\u4e86\u51fd\u6570\u53c2\u6570\u8fc7\u591a\u548c\u53c2\u6570\u5148\u540e\u987a\u5e8f\u7684\u95ee\u9898\u3002"),t.a.createElement("h3",{id:"\u540c\u6b65"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u540c\u6b65"},t.a.createElement("span",{className:"icon icon-link"})),"\u540c\u6b65"),t.a.createElement("p",null,"\u5f53\u5f62\u53c2\u4e0e\u5b9e\u53c2\u7684\u4e2a\u6570\u76f8\u540c\u65f6\uff0c",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u503c\u548c\u5bf9\u5e94\u5f62\u53c2\u7684\u503c\u4fdd\u6301\u540c\u6b65\u3002"),t.a.createElement(c.a,{code:"function foo(num1,num2){\n  console.log(num1,arguments[0]);\n  // 1 1\n\n  arguments[0] = 2;\n  console.log(num1,arguments[0]);\n  // 2 2\n\n  num1 = 10;\n  console.log(num1,arguments[0]);\n  // 10 10\n}\n\nfoo(1);\n",lang:"js"}),t.a.createElement("p",null,"\u867d\u7136\u547d\u540d\u53c2\u6570\u548c\u5bf9\u5e94 ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u503c\u76f8\u540c\uff0c\u4f46\u5e76\u4e0d\u662f\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u3002\u5b83\u4eec\u7684\u547d\u540d\u7a7a\u95f4\u662f\u72ec\u7acb\u7684\uff0c\u4f46\u503c\u662f\u540c\u6b65\u7684\u3002"),t.a.createElement("p",null,"\u4f46\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u503c\u548c\u5f62\u53c2\u7684\u503c\u662f\u72ec\u7acb\u7684\u3002"),t.a.createElement(c.a,{code:"function fn(num1, num2){\n  'use strict';\n  console.log(num1,arguments[0]);\n  // 1 1\n\n  arguments[0] = 2;\n  console.log(num1,arguments[0]);\n  // 1 2\n\n  num1 = 10;\n  console.log(num1,arguments[0]);\n  // 10 2\n}\n\nfn(1);\n",lang:"js"}),t.a.createElement("p",null,"\u5f53\u5f62\u53c2\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5b9e\u53c2\u65f6\uff0c",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u503c\u4e0e\u5f62\u53c2\u7684\u503c\u5e76\u4e0d\u5bf9\u5e94\u3002"),t.a.createElement(c.a,{code:"function fn(num1, num2){\n  console.log(num1,arguments[0]);//undefined,undefined\n\n  num1 = 10;\n\n  arguments[0] = 5;\n\n  console.log(num1,arguments[0]);//10,5\n}\n\nfn();\n",lang:"js"}),t.a.createElement("h2",{id:"\u5185\u90e8\u5c5e\u6027"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5185\u90e8\u5c5e\u6027"},t.a.createElement("span",{className:"icon icon-link"})),"\u5185\u90e8\u5c5e\u6027"),t.a.createElement("h3",{id:"callee"},t.a.createElement("a",{"aria-hidden":"true",href:"#callee"},t.a.createElement("span",{className:"icon icon-link"})),"callee"),t.a.createElement("p",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u6709\u4e00\u4e2a\u540d\u4e3a ",t.a.createElement("code",null,"callee")," \u7684\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u62e5\u6709\u8fd9\u4e2a ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u51fd\u6570\u3002"),t.a.createElement("p",null,"\u4e0b\u9762\u662f\u7ecf\u5178\u7684\u9636\u4e58\u51fd\u6570\uff1a"),t.a.createElement(c.a,{code:"function fn(num){\n    if(num <=1){\n        return 1;\n    }else{\n        return num * fn(num-1);\n    }\n}\nconsole.log(fn(5)); // 120\n",lang:"js"}),t.a.createElement("p",null,"\u4f46\u662f\uff0c\u4e0a\u9762\u8fd9\u4e2a\u51fd\u6570\u7684\u6267\u884c\u4e0e\u51fd\u6570\u540d\u7d27\u7d27\u8026\u5408\u5728\u4e86\u4e00\u8d77\uff0c\u53ef\u4ee5\u4f7f\u7528 ",t.a.createElement("code",null,"arguments.callee")," \u53ef\u4ee5\u6d88\u9664\u51fd\u6570\u89e3\u8026\u3002"),t.a.createElement(c.a,{code:"function fn(num){\n  if(num <=1){\n    return 1;\n  }else{\n    return num * arguments.callee(num-1);\n  }\n}\nconsole.log(fn(5));\n// 120\n",lang:"js"}),t.a.createElement("p",null,"\u4f46\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8bbf\u95ee\u8fd9\u4e2a\u5c5e\u6027\u4f1a\u629b\u51fa TypeError \u9519\u8bef\u3002"),t.a.createElement(c.a,{code:"function fn(num){\n  'use strict';\n  if(num <=1){\n    return 1;\n  }else{\n    return num* arguments.callee(num-1);\n  }\n}\n\nconsole.log(fn(5));\n// TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them\n",lang:"js"}),t.a.createElement("p",null,"\u8fd9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5177\u540d\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u3002"),t.a.createElement(c.a,{code:"const fn = function fn(num){\n  if(num <=1){\n    return 1;\n  }else{\n    return num * fn(num-1);\n  }\n};\nconsole.log(fn(5));//120\n",lang:"js"}),t.a.createElement("h3",{id:"caller"},t.a.createElement("a",{"aria-hidden":"true",href:"#caller"},t.a.createElement("span",{className:"icon icon-link"})),"caller"),t.a.createElement("p",null,"\u5b9e\u9645\u4e0a\u6709\u4e24\u4e2a ",t.a.createElement("code",null,"caller")," \u5c5e\u6027\u3002"),t.a.createElement("h4",{id:"\u51fd\u6570\u7684-caller"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u7684-caller"},t.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u7684 caller"),t.a.createElement("p",null,"\u51fd\u6570\u7684 ",t.a.createElement("code",null,"caller")," \u5c5e\u6027\u4fdd\u5b58\u7740\u8c03\u7528\u5f53\u524d\u51fd\u6570\u7684\u51fd\u6570\u7684\u5f15\u7528\uff0c\u5982\u679c\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u8c03\u7528\u5f53\u524d\u51fd\u6570\uff0c\u5b83\u7684\u503c\u662f ",t.a.createElement("code",null,"null"),"\u3002"),t.a.createElement(c.a,{code:"function foo(){\n  bar();\n}\n\nfunction bar(){\n  console.log(bar.caller);\n  // foo(){ bar(); }\n}\n\nfoo();\n",lang:"js"}),t.a.createElement(c.a,{code:"function foo(){\n  console.log(foo.caller);\n  // null\n}\nfoo();\n",lang:"js"}),t.a.createElement("p",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8bbf\u95ee\u8fd9\u4e2a\u5c5e\u6027\u4f1a\u629b\u51fa TypeError \u9519\u8bef\u3002"),t.a.createElement(c.a,{code:"function foo(){\n  'use strict';\n  // TypeError: 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context\n  console.log(foo.caller);\n}\nfoo();\n",lang:"js"}),t.a.createElement("h4",{id:"arguments-\u5bf9\u8c61\u7684-caller"},t.a.createElement("a",{"aria-hidden":"true",href:"#arguments-\u5bf9\u8c61\u7684-caller"},t.a.createElement("span",{className:"icon icon-link"})),"arguments \u5bf9\u8c61\u7684 caller"),t.a.createElement("p",null,"\u8be5\u5c5e\u6027\u59cb\u7ec8\u662f ",t.a.createElement("code",null,"undefined"),"\uff0c\u5b9a\u4e49\u8fd9\u4e2a\u5c5e\u6027\u662f\u4e3a\u4e86\u5206\u6e05 ",t.a.createElement("code",null,"arguments.caller")," \u548c\u51fd\u6570\u7684 ",t.a.createElement("code",null,"caller")," \u5c5e\u6027\u3002"),t.a.createElement(c.a,{code:"function foo(x){\n  console.log(arguments.caller);\n  // undefined\n}\nfoo(1);\n",lang:"js"}),t.a.createElement("p",null,"\u540c\u6837\u5730\uff0c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8bbf\u95ee\u8fd9\u4e2a\u5c5e\u6027\u4f1a\u629b\u51fa TypeError \u9519\u8bef\u3002"),t.a.createElement(c.a,{code:"function foo(x){\n  'use strict';\n  // TypeError: 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context\n  console.log(arguments.caller);\n}\nfoo(1);\n",lang:"js"}),t.a.createElement("h2",{id:"\u51fd\u6570\u91cd\u8f7d"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u91cd\u8f7d"},t.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u91cd\u8f7d"),t.a.createElement("p",null,"JavaScript \u51fd\u6570\u4e0d\u80fd\u50cf\u4f20\u7edf\u610f\u4e49\u4e0a\u90a3\u6837\u5b9e\u73b0\u91cd\u8f7d\u3002\u800c\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\uff0c\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u51fd\u6570\u7f16\u5199\u4e24\u4e2a\u5b9a\u4e49\uff0c\u53ea\u8981\u8fd9\u4e24\u4e2a\u5b9a\u4e49\u7684\u7b7e\u540d(\u63a5\u53d7\u7684\u53c2\u6570\u7684\u7c7b\u578b\u548c\u6570\u91cf)\u4e0d\u540c\u5373\u53ef"),t.a.createElement("p",null,"JavaScript \u51fd\u6570\u6ca1\u6709\u7b7e\u540d\uff0c\u56e0\u4e3a\u5176\u53c2\u6570\u662f\u7531\u5305\u542b 0 \u6216\u591a\u4e2a\u503c\u7684\u6570\u7ec4\u6765\u8868\u793a\u7684\u3002\u800c\u6ca1\u6709\u51fd\u6570\u7b7e\u540d\uff0c\u771f\u6b63\u7684\u91cd\u8f7d\u662f\u4e0d\u53ef\u80fd\u505a\u5230\u7684"),t.a.createElement(c.a,{code:"//\u540e\u9762\u7684\u58f0\u660e\u8986\u76d6\u4e86\u524d\u9762\u7684\u58f0\u660e\nfunction addSomeNumber(num){\n  return num + 100;\n}\nfunction addSomeNumber(num){\n  return num + 200;\n}\nvar result = addSomeNumber(100);\n//300\n",lang:"js"}),t.a.createElement("p",null,"\u53ea\u80fd\u901a\u8fc7\u68c0\u67e5\u4f20\u5165\u51fd\u6570\u4e2d\u53c2\u6570\u7684\u7c7b\u578b\u548c\u6570\u91cf\u5e76\u4f5c\u51fa\u4e0d\u540c\u7684\u53cd\u5e94\uff0c\u6765\u6a21\u4eff\u65b9\u6cd5\u7684\u91cd\u8f7d"),t.a.createElement(c.a,{code:"function doAdd(){\n  if(arguments.length == 1){\n    alert(arguments[0] + 10);\n  }else if(arguments.length == 2){\n    alert(arguments[0] + arguments[1]);\n  }\n}\n\ndoAdd(10);\n// 20\ndoAdd(30,20);\n// 50\n",lang:"js"}),t.a.createElement("h2",{id:"\u53c2\u6570\u4f20\u9012"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570\u4f20\u9012"},t.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u4f20\u9012"),t.a.createElement("p",null,"JavaScript \u4e2d\u6240\u6709\u51fd\u6570\u7684\u53c2\u6570\u90fd\u662f\u6309\u503c\u4f20\u9012\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u628a\u51fd\u6570\u5916\u90e8\u7684\u503c\u590d\u5236\u5230\u51fd\u6570\u5185\u90e8\u7684\u53c2\u6570\uff0c\u5c31\u548c\u628a\u503c\u4ece\u4e00\u4e2a\u53d8\u91cf\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u53d8\u91cf\u4e00\u6837\u3002"),t.a.createElement("h3",{id:"\u57fa\u672c\u7c7b\u578b\u503c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u7c7b\u578b\u503c"},t.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7c7b\u578b\u503c"),t.a.createElement("p",null,"\u5728\u5411\u53c2\u6570\u4f20\u9012\u57fa\u672c\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u88ab\u4f20\u9012\u7684\u503c\u4f1a\u88ab\u590d\u5236\u7ed9\u4e00\u4e2a\u5c40\u90e8\u53d8\u91cf\uff08\u547d\u540d\u53c2\u6570\u6216 ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u7684\u4e00\u4e2a\u5143\u7d20\uff09"),t.a.createElement(c.a,{code:"function foo(x){\n  x = 1;\n  return x;\n}\nlet y = 2;\nlet r = foo(y);\n\nconsole.log(y);\n// 2 \u6ca1\u6709\u53d8\u5316\nconsole.log(r);\n// 1\n",lang:"js"}),t.a.createElement("h3",{id:"\u5f15\u7528\u7c7b\u578b\u503c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5f15\u7528\u7c7b\u578b\u503c"},t.a.createElement("span",{className:"icon icon-link"})),"\u5f15\u7528\u7c7b\u578b\u503c"),t.a.createElement("p",null,"\u5728\u5411\u53c2\u6570\u4f20\u9012\u5f15\u7528\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u4f1a\u628a\u8fd9\u4e2a\u503c\u5728\u5185\u5b58\u4e2d\u7684\u5730\u5740\u590d\u5236\u7ed9\u4e00\u4e2a\u5c40\u90e8\u53d8\u91cf\uff0c\u56e0\u6b64\u8fd9\u4e2a\u5c40\u90e8\u53d8\u91cf\u7684\u53d8\u5316\u4f1a\u53cd\u6620\u5728\u51fd\u6570\u7684\u5916\u90e8\u3002"),t.a.createElement(c.a,{code:"function foo(bar){\n  bar.name = 'ABC';\n}\n\nvar baz = {};\nfoo(baz);\n\nconsole.log(baz.name);\n// 'ABC'\n",lang:"js"}),t.a.createElement("p",null,"\u5f53\u5728\u51fd\u6570\u5185\u90e8\u91cd\u5199\u5f15\u7528\u7c7b\u578b\u7684\u5f62\u53c2\u65f6\uff0c\u8fd9\u4e2a\u53d8\u91cf\u5f15\u7528\u7684\u5c31\u662f\u4e00\u4e2a\u5c40\u90e8\u5bf9\u8c61\u4e86\u3002\u800c\u8fd9\u4e2a\u5c40\u90e8\u5bf9\u8c61\u4f1a\u5728\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\u7acb\u5373\u88ab\u9500\u6bc1\u3002"),t.a.createElement(c.a,{code:"function foo(obj){\n  obj.name = 'black';\n  console.log(person.name); // 'black'\n\n  obj = {};\n  obj.name = 'white';\n\n  console.log(person.name); // 'black'\n}\n\nvar person = {};\nfoo(person);\n",lang:"js"})))}}}]);