!function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o={1:0},l=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{0:1,2:1}[e]&&t.push(a[e]=new Promise((function(t,n){for(var r=({0:"App",2:"vendors~App"}[e]||e)+".css",o=c.p+r,l=document.getElementsByTagName("link"),u=0;u<l.length;u++){var i=(d=l[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===r||i===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){var d;if((i=(d=s[u]).getAttribute("data-href"))===r||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(r){if(f.onerror=f.onload=null,"load"===r.type)t();else{var l=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=c,delete a[e],f.parentNode.removeChild(f),n(u)}},f.href=o,document.head.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=function(e){return c.p+""+({0:"App",2:"vendors~App"}[e]||e)+".js"}(e);var i=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=i;l.push([52,3]),n()}({43:function(e,t,n){"use strict";(function(e){var r,a=n(15),o=n.n(a),l=n(0),c=n.n(l),u=n(67),i=n(51);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=Object(i.a)((function(e){return{page:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},loading:{display:"flex",flexDirection:"column",alignItems:"center"},dots:{display:"inline",color:e.palette.primary.light}}})),f=function(){var e=Object(l.useState)(0),t=o()(e,2),n=t[0],r=t[1],a=d();Object(l.useEffect)((function(){var e=setInterval((function(){r(n+1)}),300);return function(){return clearInterval(e)}}),[n]);return c.a.createElement("div",{style:{marginTop:"1rem"}},c.a.createElement("h1",{style:{display:"inline"}},"Loading"),c.a.createElement("h1",{className:a.dots},function(){switch(n%3){case 0:return".  ";case 1:return".. ";case 2:return"..."}}()))};s(f,"useState{[counter, changeCounter](0)}\nuseStyles{classes}\nuseEffect{}",(function(){return[d]}));var h,p,m=function(){var e=d();return c.a.createElement("div",{className:e.page},c.a.createElement("div",{className:e.loading},c.a.createElement(u.a,null),c.a.createElement(f,null),"Your app will be ready soon..."))};s(m,"useStyles{classes}",(function(){return[d]})),t.a=m,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(d,"useStyles","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\App\\Loading.js"),h.register(f,"LoadingTitle","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\App\\Loading.js"),h.register(m,"default","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\App\\Loading.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,n(20)(e))},52:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t),function(e){var t,r=n(15),a=n.n(r),o=n(18),l=n.n(o),c=n(0),u=n.n(c),i=n(25),s=n(29),d=n(46),f=n(69),h=n(68),p=(n(64),n(9)),m=n(43);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return b((function(n){var r=n.history,o=n.location,l=n.match,i=Object(c.useState)(t),s=a()(i,2),d=s[0],f=s[1];return Object(c.useEffect)((function(){e().then((function(e){f(u.a.createElement(e.default,{history:r,location:o,match:l}))}))}),[]),d}),"useState{[content, setContent](loadingComponent)}\nuseEffect{}")},g=v((function(){return Promise.all([n.e(2),n.e(0)]).then(n.bind(null,75))}),u.a.createElement(m.a,null)),y=function(){var e=Object(s.b)((function(e){return e.theme}));return u.a.createElement(h.a,{theme:e},u.a.createElement(f.a,null),u.a.createElement(g,null))};b(y,"useSelector{theme}",(function(){return[s.b]}));var E,L,A=function(){var e=Object(d.a)(["theme"]),t=a()(e,3),n=t[0],r=t[1],o=(t[2],{theme:"light"===n.theme?p.b:p.a}),l=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=e;return"CHANGE_THEME"===t.type&&(n.theme=n.theme===p.a?p.b:p.a,r("theme",n.theme.palette.type)),n}));return u.a.createElement(s.a,{store:l},u.a.createElement(y,null))};b(A,"useCookies{[cookies, setCookie, removeCookie]}",(function(){return[d.a]})),l.a.render(u.a.createElement(A,null),document.getElementById("root")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(!1,"useServiceWorker","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\index.js"),E.register(v,"Loadable","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\index.js"),E.register(g,"App","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\index.js"),E.register(y,"ThemedApp","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\index.js"),E.register(A,"ReduxApp","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\index.js")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}.call(this,n(20)(e))},9:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r,a=n(10),o=n(22);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,u=Object(o.a)({palette:{type:"light",primary:a.a}}),i=Object(o.a)({palette:{type:"dark",primary:a.a}});(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"lightTheme","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\theme.js"),l.register(i,"darkTheme","E:\\Users\\Jonathan\\Documents\\UniKramFh-Aachen\\SL2_Versuch2\\GastabbellenRechnerREACT\\src\\theme.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,n(20)(e))}});