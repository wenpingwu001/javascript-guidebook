(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{lrhb:function(e,l,a){"use strict";a.r(l);var t=a("55Ip"),n=a("q1tI"),r=a.n(n);a("B2uJ"),a("+su7"),a("qOys"),a("5Yjd");l["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"http-cors-\u8de8\u57df\u8d44\u6e90\u5171\u4eab"},r.a.createElement("a",{"aria-hidden":"true",href:"#http-cors-\u8de8\u57df\u8d44\u6e90\u5171\u4eab"},r.a.createElement("span",{className:"icon icon-link"})),"HTTP CORS \u8de8\u57df\u8d44\u6e90\u5171\u4eab"),r.a.createElement("p",null,"\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff08CORS\uff1aCross-Origin Resource Sharing\uff09\u662f\u4e00\u79cd\u673a\u5236\uff0c\u5b83\u4f7f\u7528\u989d\u5916\u7684 \xa0HTTP \u5934\u6765\u544a\u8bc9\u6d4f\u89c8\u5668\uff0c\u8ba9\u8fd0\u884c\u5728\u76f8\u540c\u57df\uff08Origin\uff09\u4e0a\u7684 Web \u5e94\u7528\u88ab\u51c6\u8bb8\u8bbf\u95ee\u6765\u81ea\u4e0d\u540c\u6e90\u670d\u52a1\u5668\u4e0a\u7684\u6307\u5b9a\u7684\u8d44\u6e90\uff08\u4e5f\u5373\u662f ",r.a.createElement(t["a"],{to:"../frontend-security/same-origin-policy"},"\u540c\u6e90\u7b56\u7565")," \u7684 HTTP \u89e3\u51b3\u65b9\u6848\uff09\u3002\u5f53\u4e00\u4e2a\u8d44\u6e90\u4ece\u4e0e\u8be5\u8d44\u6e90\u672c\u8eab\u6240\u5728\u7684\u670d\u52a1\u5668",r.a.createElement("strong",null,"\u4e0d\u540c\u7684\u57df\u3001\u534f\u8bae\u6216\u7aef\u53e3"),"\u8bf7\u6c42\u4e00\u4e2a\u8d44\u6e90\u65f6\uff0c\u8d44\u6e90\u4f1a\u53d1\u8d77\u4e00\u4e2a",r.a.createElement("strong",null,"\u8de8\u57df HTTP \u8bf7\u6c42"),"\u3002"),r.a.createElement("p",null,"CORS \u673a\u5236\u662f\u4e3a\u4e86\u5728\u8ba4\u53ef\u7528\u6237\u53d1\u8d77\u7684\u8bf7\u6c42\u7684\u540c\u65f6\uff0c\u963b\u6b62\u6076\u610f\u6ce8\u5165\u811a\u672c\uff1b\u5e76\u5728\u4ee5\u4e0b\u60c5\u51b5\u53d1\u8d77\u7684 HTTP \u8bf7\u6c42\u65f6\u89e6\u53d1\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4e0d\u540c\u7684\u57df\uff1a\u6bd4\u5982\u4ece ",r.a.createElement("code",null,"example.com")," \u8c03\u7528 ",r.a.createElement("code",null,"api.com")),r.a.createElement("li",null,"\u4e0d\u540c\u7684\u5b50\u57df\uff1a\u6bd4\u5982\u4ece ",r.a.createElement("code",null,"example.com")," \u8c03\u7528 ",r.a.createElement("code",null,"api.example.com")),r.a.createElement("li",null,"\u4e0d\u540c\u7684\u7aef\u53e3\uff1a\u6bd4\u5982\u4ece ",r.a.createElement("code",null,"example.com")," \u8c03\u7528 ",r.a.createElement("code",null,"example.com:3001")),r.a.createElement("li",null,"\u4e0d\u540c\u7684\u534f\u8bae\uff1a\u6bd4\u5982\u4ece ",r.a.createElement("code",null,"https://example.com")," \u8c03\u7528 ",r.a.createElement("code",null,"http://example.com"))),r.a.createElement("h2",{id:"\u5b9e\u73b0\u6761\u4ef6"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u73b0\u6761\u4ef6"},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u6761\u4ef6"),r.a.createElement("p",null,"\u6d4f\u89c8\u5668\u5c06 CORS \u8bf7\u6c42\u5206\u6210\u4e24\u7c7b\uff1a\u7b80\u5355\u8bf7\u6c42\uff08simple request\uff09\u548c\u975e\u7b80\u5355\u8bf7\u6c42\uff08not-so-simple request\uff09\u3002"),r.a.createElement("h3",{id:"\u7b80\u5355\u8bf7\u6c42"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b80\u5355\u8bf7\u6c42"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u8bf7\u6c42"),r.a.createElement("p",null,"\u53ea\u8981\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u5927\u6761\u4ef6\uff0c\u5c31\u5c5e\u4e8e\u7b80\u5355\u8bf7\u6c42\uff1a"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u60c5\u51b5\u4e00\uff1a")," \u8bf7\u6c42\u65b9\u6cd5\u662f\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5\u4e4b\u4e00"),r.a.createElement("ul",null,r.a.createElement("li",null,"HEAD"),r.a.createElement("li",null,"GET"),r.a.createElement("li",null,"POST")),r.a.createElement("p",null,r.a.createElement("strong",null,"\u60c5\u51b5\u4e8c\uff1a")," \u4eba\u4e3a\u8bbe\u7f6e\u4e00\u4e0b\u96c6\u5408\u5916\u7684\u8bf7\u6c42\u5934"),r.a.createElement("ul",null,r.a.createElement("li",null,"Accept"),r.a.createElement("li",null,"Accept-Language"),r.a.createElement("li",null,"Content-Language"),r.a.createElement("li",null,"Content-Type\uff08\u4f8b\u5982 ",r.a.createElement("code",null,"application/json")," \u4e3a\u975e\u7b80\u5355\u8bf7\u6c42\uff09",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"text/plain")),r.a.createElement("li",null,r.a.createElement("code",null,"multipart/form-data")),r.a.createElement("li",null,r.a.createElement("code",null,"application/x-www-form-urlencoded")))),r.a.createElement("li",null,"DPR"),r.a.createElement("li",null,"Downlink"),r.a.createElement("li",null,"Save-Data"),r.a.createElement("li",null,"Viewport-Width"),r.a.createElement("li",null,"Width"),r.a.createElement("li",null,"Last-Event-ID")),r.a.createElement("p",null,r.a.createElement("strong",null,"\u60c5\u51b5\u4e09\uff1a")," \u8bf7\u6c42\u4e2d\u7684\u4efb\u610f XMLHttpRequestUpload \u5bf9\u8c61\u5747\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u4e8b\u4ef6\u76d1\u542c\u5668\uff1bXMLHttpRequestUpload \u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528 ",r.a.createElement("code",null,"XMLHttpRequest.upload")," \u5c5e\u6027\u8bbf\u95ee\u3002"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u60c5\u51b5\u56db\uff1a")," \u8bf7\u6c42\u4e2d\u6ca1\u6709 ReadableStream \u5bf9\u8c61\u3002"),r.a.createElement("h3",{id:"\u975e\u7b80\u5355\u8bf7\u6c42"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u975e\u7b80\u5355\u8bf7\u6c42"},r.a.createElement("span",{className:"icon icon-link"})),"\u975e\u7b80\u5355\u8bf7\u6c42"),r.a.createElement("p",null,"\u9664\u4e86\u7b80\u5355\u8bf7\u6c42\u8fd9\u4e9b\u9650\u5236\u5916\u7684\u90fd\u4e3a\u975e\u7b80\u5355\u8bf7\u6c42\u3002"),r.a.createElement("p",null,"\u975e\u7b80\u5355\u8bf7\u6c42\u9700\u8981\u6ee1\u8db3\u4f7f\u7528\u4ee5\u4e0b\u4efb\u610f\u65b9\u6cd5\u7684\u6761\u4ef6\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"PUT"),r.a.createElement("li",null,"DELETE"),r.a.createElement("li",null,"CONNECT"),r.a.createElement("li",null,"OPTIONS"),r.a.createElement("li",null,"TRACE"),r.a.createElement("li",null,"PATCH")),r.a.createElement("p",null,"\u6700\u5e38\u7528\u4e8e\u5224\u65ad\u662f\u5426\u4e3a\u7b80\u5355\u548c\u975e\u7b80\u5355\u8bf7\u6c42\u7684\u65b9\u6cd5\u4e3b\u8981\u662f\u901a\u8fc7\u8bf7\u6c42\u65b9\u6cd5\u548c ",r.a.createElement("code",null,"Content-Type")," \u7684\u503c\u3002"),r.a.createElement("h2",{id:"\u9884\u8bf7\u6c42-preflight"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u9884\u8bf7\u6c42-preflight"},r.a.createElement("span",{className:"icon icon-link"})),"\u9884\u8bf7\u6c42 Preflight"),r.a.createElement("p",null,"\u9884\u8bf7\u6c42\u662f OPTIONS \u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u6dfb\u52a0 ",r.a.createElement("code",null,"Access-Control-Allow-Headers")," \u548c ",r.a.createElement("code",null,"Access-Control-Allow-Methods"),"\u3002"),r.a.createElement("p",null,"\u9700\u8981\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u54cd\u5e94\u5934 ",r.a.createElement("code",null,"Access-Control-Allow-Headers"),"\u3001",r.a.createElement("code",null,"Access-Control-Allow-Methods")," \u548c ",r.a.createElement("code",null,"Access-Control-Allow-Origin"),"\u3002"),r.a.createElement("p",null,"\u9664\u4e86 ",r.a.createElement("code",null,"Access-Control-Allow-Origin")," \u662f\u5fc5\u987b\u7684\u4e4b\u5916\uff0c\u5176\u4ed6\u4e24\u79cd\u53ea\u6709\u5728\u4e0d\u7b26\u5408\u7b80\u5355\u8bf7\u6c42\u9700\u8981\u7684\u65f6\u5019\u670d\u52a1\u5668\u624d\u9700\u8981\u6dfb\u52a0\uff0c\u6bd4\u5982\u5728\u7b80\u5355\u8bf7\u6c42\u7684\u57fa\u7840\u4e0a\u81ea\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8bf7\u6c42\u5934 ",r.a.createElement("code",null,"X-xx-name: chris"),"\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u53ea\u9700\u8981\u5728\u54cd\u5e94\u5934\u4e2d\u6dfb\u52a0 ",r.a.createElement("code",null,"Access-Control-Allow-Headers"),"\u3002\u6bcf\u79cd\u54cd\u5e94\u5934\u90fd\u53ef\u4ee5\u4f7f\u7528 ",r.a.createElement("code",null,"*")," \u901a\u914d\u7b26\u6765\u8868\u793a\u6240\u6709\u3002"),r.a.createElement("h2",{id:"\u6b63\u5e38\u8bf7\u6c42"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6b63\u5e38\u8bf7\u6c42"},r.a.createElement("span",{className:"icon icon-link"})),"\u6b63\u5e38\u8bf7\u6c42"),r.a.createElement("p",null,"\u9884\u8bf7\u6c42\u5b8c\u4e4b\u540e\u5c31\u53ef\u4ee5\u53d1\u9001\u6b63\u5e38\u8bf7\u6c42\u4e86\uff0c\u6b63\u5e38\u8bf7\u6c42\u7684\u6b65\u9aa4\u4e0e\u7b80\u5355\u8bf7\u6c42\u4e00\u81f4\uff0c\u4e5f\u9700\u8981\u6dfb\u52a0 ",r.a.createElement("code",null,"Access-Control-Allow-Origin")," \u54cd\u5e94\u5934\u3002"),r.a.createElement("h3",{id:"\u51cf\u5c11\u9884\u8bf7\u6c42\u6b21\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u51cf\u5c11\u9884\u8bf7\u6c42\u6b21\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u51cf\u5c11\u9884\u8bf7\u6c42\u6b21\u6570"),r.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",r.a.createElement("code",null,"Access-Control-Max-Aage")," \u6765\u51cf\u5c11\u9884\u8bf7\u6c42\u7684\u6b21\u6570\uff0c\u9700\u8981\u5305\u542b\u5728\u9884\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u4e2d\uff0c\u6307\u5b9a\u5728\u8be5\u65f6\u95f4\u5185\u9884\u8bf7\u6c42\u9a8c\u8bc1\u6709\u6548\uff0c\u4e0d\u5fc5\u6bcf\u6b21\u90fd\u8fdb\u884c\u9884\u8bf7\u6c42\uff0c\u5b83\u7684\u5355\u4f4d\u662f ",r.a.createElement("code",null,"s"),"\u3002\u5982 ",r.a.createElement("code",null,"Access-Control-Max-Age: 1728000"),"\uff0c\u5373\u6709\u6548\u671f\u4e3a 20 \u5929\u3002"),r.a.createElement("h2",{id:"\u4f7f\u7528\u573a\u666f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528\u573a\u666f"},r.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u573a\u666f"),r.a.createElement("p",null,"\u8de8\u57df\u8d44\u6e90\u5171\u4eab\u6807\u51c6\uff08Cross-Origin Sharing Standard\uff09\u5141\u8bb8\u5728\u4e0b\u5217\u573a\u666f\u4e2d\u4f7f\u7528\u8de8\u57df HTTP \u8bf7\u6c42\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u524d\u6587\u63d0\u5230\u7684\u7531 XMLHttpRequest \u6216 Fetch \u53d1\u8d77\u7684\u8de8\u57df HTTP \u8bf7\u6c42"),r.a.createElement("li",null,"Web \u5b57\u4f53\uff08CSS \u901a\u8fc7 ",r.a.createElement("code",null,"@font-face")," \u4f7f\u7528\u8de8\u57df\u5b57\u4f53\u8d44\u6e90\uff09"),r.a.createElement("li",null,"WebGL \u8d34\u56fe"),r.a.createElement("li",null,"\u4f7f\u7528 ",r.a.createElement("code",null,"drawImage")," \u5c06 ",r.a.createElement("code",null,"Images/viedo")," \u753b\u9762\u7ed8\u5236\u5230 Canvas"),r.a.createElement("li",null,"\u6837\u5f0f\u8868\uff08\u4f7f\u7528 CSSOM \uff09")),r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u26a0\ufe0f \u6ce8\u610f\uff1aHTML \u4e2d ",r.a.createElement("code",null,"<link>"),"\u3001",r.a.createElement("code",null,"<script>"),"\u3001",r.a.createElement("code",null,"<img>")," \u7b49\u6807\u7b7e\u81ea\u5e26\u8fde\u63a5\u5c5e\u6027\u8fdb\u884c HTTP \u8bf7\u6c42\u662f\u80fd\u591f\u65e0\u89c6\u540c\u6e90\u7b56\u7565\u7684\u3002")),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcd6 MDN HTTP Access control CORS",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://juejin.im/post/5a97b5a3f265da23766ab19a",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u7406\u89e3 CORS",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u962e\u4e00\u5cf0 \u8de8\u57df\u8d44\u6e90\u5171\u4eab CORS \u8be6\u89e3",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://juejin.im/post/58f816198d6d81005874fd97",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u7531\u540c\u6e90\u7b56\u7565\u5230\u524d\u7aef\u8de8\u57df",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);