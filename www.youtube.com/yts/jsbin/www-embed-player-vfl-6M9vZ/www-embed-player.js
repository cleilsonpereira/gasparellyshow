(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ma:!0},ea={};try{ea.__proto__=da;ca=ea.ma;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function v(){}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==pa(a)}
function qa(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==pa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=va:x=wa;return x.apply(null,arguments)}
function z(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function B(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(C,Error);C.prototype.name="CustomError";var xa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ya(a){if(!za.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ca,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Da,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ea,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Fa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ga,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ha,"&#0;"));return a}
var Ca=/&/g,Da=/</g,Ea=/>/g,Fa=/"/g,Ga=/'/g,Ha=/\x00/g,za=/[\x00&<>"']/;function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ka=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ma=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Na(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Oa(a,b){var c=Ka(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Qa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ra;a:{var Sa=p.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){Ra=Ta;break a}}Ra=""}function E(a){return-1!=Ra.indexOf(a)}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=qa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function cb(a){cb[" "](a);return a}
cb[" "]=v;function db(a,b){var c=eb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var fb=E("Opera"),F=E("Trident")||E("MSIE"),gb=E("Edge"),hb=E("Gecko")&&!(-1!=Ra.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),ib=-1!=Ra.toLowerCase().indexOf("webkit")&&!E("Edge");function kb(){var a=p.document;return a?a.documentMode:void 0}
var lb;a:{var mb="",nb=function(){var a=Ra;if(hb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gb)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(fb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nb&&(mb=nb?nb[1]:"");if(F){var ob=kb();if(null!=ob&&ob>parseFloat(mb)){lb=String(ob);break a}}lb=mb}var pb=lb,eb={};
function G(a){return db(a,function(){for(var b=0,c=xa(String(pb)).split("."),d=xa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ia(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ia(0==g[2].length,0==h[2].length)||Ia(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var qb;var rb=p.document;qb=rb&&F?kb()||("CSS1Compat"==rb.compatMode?parseInt(pb,10):5):void 0;var sb=!F||9<=Number(qb);!hb&&!F||F&&9<=Number(qb)||hb&&G("1.9.1");F&&G("9");function tb(){this.b="";this.g=ub}
tb.prototype.V=!0;tb.prototype.U=function(){return this.b};
function vb(a){return a instanceof tb&&a.constructor===tb&&a.g===ub?a.b:"type_error:TrustedResourceUrl"}
var ub={};function wb(){this.b="";this.g=xb}
wb.prototype.V=!0;wb.prototype.U=function(){return this.b};
function yb(a){return a instanceof wb&&a.constructor===wb&&a.g===xb?a.b:"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof wb)return a;a=a.V?a.U():String(a);zb.test(a)||(a="about:invalid#zClosurez");return Bb(a)}
var xb={};function Bb(a){var b=new wb;b.b=a;return b}
Bb("about:blank");function Cb(){this.b=""}
Cb.prototype.V=!0;Cb.prototype.U=function(){return this.b};
function Db(a){var b=new Cb;b.b=a;return b}
Db("<!DOCTYPE html>");Db("");Db("<br>");function Eb(a,b){var c=b instanceof wb?b:Ab(b);a.href=yb(c)}
function Fb(a,b){a.src=vb(b)}
;function Gb(a,b){this.width=a;this.height=b}
l=Gb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hb(a){var b=document;return r(a)?b.getElementById(a):a}
function Ib(a,b){Ua(b,function(b,d){b&&b.V&&(b=b.U());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Jb.hasOwnProperty(d)?a.setAttribute(Jb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Jb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Kb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!sb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ya(g.name),'"');if(g.type){f.push(' type="',ya(g.type),'"');var h={};bb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Ib(f,g));2<d.length&&Lb(e,f,d);return f}
function Lb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!qa(f)||sa(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(sa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ra(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Pa(f):f,d)}}}
function Mb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Nb(a){Ob();var b=new tb;b.b=a;return b}
var Ob=v;var Pb=document,H=window;function Qb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rb=(new Date).getTime();function Sb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Tb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var P=1518500249}else m=d^f^h,P=1859775393;else 60>c?(m=d&f|h&(d|f),P=2400959708):(m=d^f^h,P=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+P+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(f[m++]=a[d++],y++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,y;a();return{reset:a,update:c,digest:d,oa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Ub(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Vb(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Vb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vb(a){var b=Tb();b.update(a);return b.oa().toLowerCase()}
;function Wb(a){this.b=a||{cookie:""}}
l=Wb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xb=new Wb("undefined"==typeof document?null:document);Xb.g=3950;function Yb(){var a=[],b=Sb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Wb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Wb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Ub(Sb(d),b,a||null)].join(" "):null}return null}
;function Zb(a,b,c){this.h=c;this.f=a;this.i=b;this.g=0;this.b=null}
Zb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function $b(a,b){a.i(b);a.g<a.h&&(a.g++,b.next=a.b,a.b=b)}
;function ac(a){p.setTimeout(function(){throw a;},0)}
var bc;
function cc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.fa;c.fa=null;a()}};
return function(a){d.next={fa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function dc(){this.g=this.b=null}
var fc=new Zb(function(){return new ec},function(a){a.reset()},100);
dc.prototype.add=function(a,b){var c=fc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
dc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function ec(){this.next=this.scope=this.b=null}
ec.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ec.prototype.reset=function(){this.next=this.scope=this.b=null};function gc(a,b){hc||ic();jc||(hc(),jc=!0);kc.add(a,b)}
var hc;function ic(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);hc=function(){a.then(lc)}}else hc=function(){var a=lc;
!ra(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(bc||(bc=cc()),bc(a)):p.setImmediate(a)}}
var jc=!1,kc=new dc;function lc(){for(var a;a=kc.remove();){try{a.b.call(a.scope)}catch(b){ac(b)}$b(fc,a)}jc=!1}
;function I(){this.g=this.g;this.B=this.B}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function mc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
I.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function nc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function oc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];qa(d)?oc.apply(null,d):nc(d)}}
;function pc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function qc(a,b){if(a.classList)var c=a.classList.contains(b);else c=pc(a),c=0<=Ka(c,b);return c}
function rc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):qc(a,"inverted-hdpi")&&(a.className=La(pc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var sc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function tc(){}
tc.prototype.next=function(){throw sc;};
tc.prototype.R=function(){return this};
function uc(a){if(a instanceof tc)return a;if("function"==typeof a.R)return a.R(!1);if(qa(a)){var b=0,c=new tc;c.next=function(){for(;;){if(b>=a.length)throw sc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vc(a,b){if(qa(a))try{D(a,b,void 0)}catch(c){if(c!==sc)throw c;}else{a=uc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sc)throw c;}}}
function wc(a){if(qa(a))return Pa(a);a=uc(a);var b=[];vc(a,function(a){b.push(a)});
return b}
;F&&G("9");!ib||G("528");hb&&G("1.9b")||F&&G("8")||fb&&G("9.5")||ib&&G("528");hb&&!G("8")||F&&G("9");(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",v,b);p.removeEventListener("test",v,b);return a})();function xc(a){var b=[];yc(new zc,a,b);return b.join("")}
function zc(){}
function yc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ac(d,c),c.push(":"),yc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ac(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Bc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Cc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ac(a,b){b.push('"',a.replace(Cc,function(a){var b=Bc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Bc[a]=b);return b}),'"')}
;function Dc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Ec(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=v)try{var c=this;a.call(b,function(a){Fc(c,2,a)},function(a){Fc(c,3,a)})}catch(d){Fc(this,3,d)}}
function Gc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Gc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Hc=new Zb(function(){return new Gc},function(a){a.reset()},100);
function Ic(a,b,c){var d=Hc.get();d.h=a;d.g=b;d.context=c;return d}
function Jc(a){return new J(function(b,c){c(a)})}
function Kc(a,b,c){Lc(a,b,c,null)||gc(z(b,a))}
function Mc(a){return new J(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Kc(e,b,c)})}
function Nc(a){return new J(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Kc(g,z(e,f,!0),z(e,f,!1));
else b(d)})}
J.prototype.then=function(a,b,c){return Oc(this,ra(a)?a:null,ra(b)?b:null,c)};
Dc(J);function Pc(a,b){var c=Ic(b,b,void 0);c.f=!0;Qc(a,c);return a}
function Rc(a,b){return Oc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&gc(function(){var b=new Sc(a);Tc(this,b)},this)};
function Tc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Tc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Uc(c),Vc(c,e,3,b)))}a.f=null}else Fc(a,3,b)}
function Qc(a,b){a.g||2!=a.b&&3!=a.b||Wc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Oc(a,b,c,d){var e=Ic(null,null,null);e.b=new J(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Sc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Qc(a,e);return e.b}
J.prototype.u=function(a){this.b=0;Fc(this,2,a)};
J.prototype.A=function(a){this.b=0;Fc(this,3,a)};
function Fc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Lc(c,a.u,a.A,a)||(a.m=c,a.b=b,a.f=null,Wc(a),3!=b||c instanceof Sc||Xc(a,c)))}
function Lc(a,b,c,d){if(a instanceof J)return Qc(a,Ic(b||v,c||null,d)),!0;if(Ec(a))return a.then(b,c,d),!0;if(sa(a))try{var e=a.then;if(ra(e))return Yc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Yc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Wc(a){a.j||(a.j=!0,gc(a.B,a))}
function Uc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
J.prototype.B=function(){for(var a;a=Uc(this);)Vc(this,a,this.b,this.m);this.j=!1};
function Vc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,Zc(b,c,d);else try{b.f?b.h.call(b.context):Zc(b,c,d)}catch(e){$c.call(null,e)}$b(Hc,b)}
function Zc(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Xc(a,b){a.i=!0;gc(function(){a.i&&$c.call(null,b)})}
var $c=ac;function Sc(a){C.call(this,a)}
B(Sc,C);Sc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
B(K,I);l=K.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function ad(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Na(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.C(b)}}
l.C=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=v):(c&&Oa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.F=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];bd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.C(c)}}return 0!=e}return!1};
function bd(a,b,c){gc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(D(b,this.C,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function cd(a){this.b=a}
cd.prototype.set=function(a,b){q(b)?this.b.set(a,xc(b)):this.b.remove(a)};
cd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cd.prototype.remove=function(a){this.b.remove(a)};function dd(a){this.b=a}
B(dd,cd);function ed(a){this.data=a}
function fd(a){return!q(a)||a instanceof ed?a:new ed(a)}
dd.prototype.set=function(a,b){dd.o.set.call(this,a,fd(b))};
dd.prototype.g=function(a){a=dd.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gd(a){this.b=a}
B(gd,dd);gd.prototype.set=function(a,b,c){if(b=fd(b)){if(c){if(c<A()){gd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}gd.o.set.call(this,a,b)};
gd.prototype.g=function(a,b){var c=gd.o.g.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<A()||!!d&&d>A()}if(d)gd.prototype.remove.call(this,a);else return c}};function hd(a){this.b=a}
B(hd,gd);function id(){}
;function jd(){}
B(jd,id);jd.prototype.clear=function(){var a=wc(this.R(!0)),b=this;D(a,function(a){b.remove(a)})};function kd(a){this.b=a}
B(kd,jd);l=kd.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.R=function(a){var b=0,c=this.b,d=new tc;d.next=function(){if(b>=c.length)throw sc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function ld(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
B(ld,kd);function md(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
B(md,kd);function nd(a){if(!ra(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function od(){var a=null;return Rc(new J(function(b,c){a=nd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var pd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(pd)}
function qd(a){return a?decodeURI(a):a}
function rd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)rd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sd(a){var b=[],c;for(c in a)rd(c,a[c],b);return b.join("&")}
function td(a,b){var c=sd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var ud=!1,vd="";function wd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(ud=!0,a.description)){vd=wd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){ud=!0;vd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],ud=!(!a||!a.enabledPlugin))){vd=wd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ud=!0;vd=wd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ud=!0;vd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ud=!0,vd=wd(b.GetVariable("$version"))}catch(c){}})();
var xd=ud,yd=vd;var zd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ad=/\.(cn|com\.bi|do|sl)$/;function Bd(a){return zd.test(a)&&!Ad.test(a)}
var Cd=p;function Fd(){var a="https://adservice"+M[1]+(M[3]?"/generate_204":"/adsid/integrator.js"),b=["domain="+encodeURIComponent(p.location.hostname)];N[3]>=A()&&b.push("adsid="+encodeURIComponent(N[1]));return a+"?"+b.join("&")}
var N,M;function Gd(){Cd=p;N=Cd.googleToken=Cd.googleToken||{};var a=A();N[1]&&N[3]>a&&0<N[2]||(N[1]="",N[2]=-1,N[3]=-1,N[4]="");M=Cd.googleIMState=Cd.googleIMState||{};Bd(M[1])||(M[1]=".google.com");0!=M[2]&&(M[2]=1);"boolean"==typeof M[3]||(M[3]=!1);"boolean"==typeof M[4]||(M[4]=!1);w(M[5])||(M[5]=[])}
function Hd(){Gd();return N[1]}
function Id(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}}
function Jd(){if(!M[4]){M[4]=!0;var a=p.document;if(0==M[2]){var b=Fd().replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"}),c=cb("script");
a.write("<"+c+' src="'+b+'"></'+c+">"+("<"+c+">processGoogleToken("+(M[3]?'{"newToken":"FBS"}':"{}")+");</"+c+">"))}else{b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
M[3]&&(b.onload=function(){var a={};return p.processGoogleToken((a.newToken="FBA",a))});
c=Nb(Fd());Fb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b)}catch(d){}p.setTimeout(function(){return p.processGoogleToken({},1)},1E3)}}}
function Kd(a){p.processGoogleToken=p.processGoogleToken||Ld;Gd();var b=Cd.googleToken[5]||0;a&&(0!=b||N[3]>=A()?Id(a):(M[5].push(a),Jd()));N[3]>=A()&&N[2]>=A()||Jd()}
var Md=0;
function Ld(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;var c=a.newToken||"",d=a.altDomain||"",e=parseInt(a.freshLifetimeSecs||"",10)||3600,f=parseInt(a.validLifetimeSecs||"",10)||86400,g=a["1p_jar"]||"";Gd();M[4]=!1;if(1E-5>Math.random()){var h="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b;p.google_image_requests||(p.google_image_requests=[]);var k=p.document.createElement("img");k.src=h;p.google_image_requests.push(k)}if(!c&&d&&Bd(d)&&2>=++Md)Bd(d)&&(M[1]=d),Jd();else{d=Cd.googleToken=
Cd.googleToken||{};d[5]=b;0==b&&c&&r(c)&&0<e&&0<f&&r(g)&&(h=A(),d[1]=c,d[2]=h+1E3*e,d[3]=h+1E3*f,d[4]=g,Gd());c=M[5];for(e=0;e<c.length;e++)Id(c[e]);M[5]=[]}}
;function Nd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Od=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Pd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Pd,void 0);function O(a){Nd(Pd,arguments)}
function Q(a,b){return a in Pd?Pd[a]:b}
function R(a){return Q(a,void 0)}
;function Qd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=Q("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),O("ERRORS",c))}
;function T(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function Rd(a){a&&(a.dataset?a.dataset[Sd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Td(a,b){return a?a.dataset?a.dataset[Sd(b)]:a.getAttribute("data-"+b):null}
var Ud={};function Sd(a){return Ud[a]||(Ud[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){ra(a)&&(a=Qd(a));return window.setTimeout(a,b)}
;var Vd=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.C;K.prototype.publish=K.prototype.F;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",Vd,void 0);var Wd=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Wd,void 0);var Xd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Xd,void 0);var Yd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Yd,void 0);
function Zd(a,b){var c=$d();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Wd[d]&&b.apply(window,c)};
try{Yd[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Wd[d]=!0;Xd[a]||(Xd[a]=[]);Xd[a].push(d);return d}return 0}
function ae(a){var b=$d();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete Wd[a]}))}
function be(a,b){var c=$d();c&&c.publish.apply(c,arguments)}
function ce(a){var b=$d();if(b)if(b.clear(a),a)de(a);else for(var c in Xd)de(c)}
function $d(){return u("ytPubsubPubsubInstance")}
function de(a){Xd[a]&&(a=Xd[a],D(a,function(a){Wd[a]&&delete Wd[a]}),a.length=0)}
;var ee=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fe=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ge(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ee,""),c=c.replace(fe,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else he(a,b)}
function he(a,b){var c=ie(a),d=document.getElementById(c),e=d&&Td(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Zd(c,b);var g=""+(b[ta]||(b[ta]=++ua));je[g]=e}f||(d=ke(a,c,function(){Td(d,"loaded")||(Rd(d),be(c),U(z(ce,c),0))}))}}
function ke(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Fb(d,Nb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function le(a){a=ie(a);var b=document.getElementById(a);b&&(ce(a),b.parentNode.removeChild(b))}
function me(a,b){if(a&&b){var c=""+(b[ta]||(b[ta]=++ua));(c=je[c])&&ae(c)}}
function ie(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var je={};var ne=null;function oe(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?ge(b,function(){window.botguard?pe(c):(le(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?pe(c):S(Error("Unable to load Botguard from JS"),"WARNING"))}
function pe(a){ne=new window.botguard.bg(a);T("botguard_periodic_refresh")&&Od()}
function qe(){return null!=ne}
function re(){return ne?ne.invoke():null}
;A();var se=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function te(){if(!se)return null;var a=se();return"open"in a?a:null}
function ue(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ve(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Qa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function we(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=ve(d[1]||"");for(var e in b)d[e]=b[e];return td(a,d)+c}
;var xe={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ye=!1;
function ze(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(a)[1]||null,e=qd(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?qd(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in xe){if((e=d=Q(xe[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=qd(L(a)[3]||null);e=h?(g=g[h])?0<=Ka(g,e):!1:!0}e&&(b[f]=d)}return b}
function Ae(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ra&&(!qd(L(a)[3]||null)||b.withCredentials||qd(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.w&&b.w[c])}
function Be(a,b){var c=b.format||"JSON";b.ta&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=Q("XSRF_FIELD_NAME",void 0),e=Q("XSRF_TOKEN",void 0),f=b.Ma;f&&(f[d]&&delete f[d],a=we(a,f||{}));f=b.postBody||"";var g=b.w;Ae(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=ve(f),bb(d,g),f=b.ga&&"JSON"==b.ga?JSON.stringify(d):sd(d));d=f||g&&!Ya(g);!ye&&d&&"POST"!=b.method&&(ye=!0,S(Error("AJAX request with postData should use POST")));var h=
!1,k,m=Ce(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=ue(a),e=null;if(d||400<=a.status&&500>a.status)e=De(c,a,b.Qa);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.I&&b.I.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.za&&b.za.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.W&&0<b.timeout&&(k=U(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.W.call(b.context||p,m))},b.timeout))}
function De(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ee(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=Fe(a)})}c&&Ge(d);
return d}
function Ge(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b]);a[c]=d}else Ge(a[b])}}
function Ee(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fe(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function He(a,b){b.method="POST";b.w||(b.w={});Be(a,b)}
function Ce(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qd(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=te();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=ze(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Ie={},Je=0;function Ke(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ra,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Kb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?Ce(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ce(a,b,"GET","",d):Le(a,b))}
function Le(a,b){var c=new Image,d=""+Je++;Ie[d]=c;c.onload=c.onerror=function(){b&&Ie[d]&&b();delete Ie[d]};
c.src=a}
;var Me={},Ne=0;
function Oe(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Ne)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(P){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(P){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Me[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Ma:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},w:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.w.stack=k);for(var m in f)h.w["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var y in m)h.w[y]=m[y];Be("/error_204",h);Me[a.message]=!0;Ne++}}}
;var Pe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Pe,void 0);function Qe(a){Nd(Pe,arguments)}
;function Re(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Se(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var Te=[],Ue=!1;function Ve(){function a(){Ue=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)}
ge("//static.doubleclick.net/instream/ad_status.js",a);Te.push(Re(function(){Ue||"google_ad_status"in window||(me("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},1))}
function We(){return parseInt(Q("DCLKSTAT",0),10)}
;var Xe=0;t("ytDomDomGetNextId",u("ytDomDomGetNextId")||function(){return++Xe},void 0);var Ye={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ze(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ye||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ze.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ze.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ze.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Xa,void 0);var $e=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",$e,void 0);function af(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function bf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=af(a,b,c,d);if(e)return e;e=++$e.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Ze(d);if(!Mb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ze(b);
b.currentTarget=a;return c.call(a,b)};
g=Qd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d];return e}
function cf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in Xa){var b=Xa[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[a]}}))}
;function df(){if(null==u("_lact",window)){var a=parseInt(Q("LACT"),10);a=isFinite(a)?A()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&ef();bf(document,"keydown",ef);bf(document,"keyup",ef);bf(document,"mousedown",ef);bf(document,"mouseup",ef);Zd("page-mouse",ef);Zd("page-scroll",ef);Zd("page-resize",ef)}}
function ef(){null==u("_lact",window)&&df();var a=A();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function ff(){var a=u("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;function gf(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
var hf=1;function jf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=jf(a.b));return b}
;var kf={log_event:"events",log_interaction:"interactions"},lf=Object.create(null);lf.log_event="GENERIC_EVENT_LOGGING";lf.log_interaction="INTERACTION_LOGGING";var mf={},nf={},of=0,V=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",V,void 0);var pf=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",pf,void 0);var qf=u("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",qf,void 0);
t("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{},void 0);function rf(a,b){nf[a.endpoint]=b;if(a.T){var c=a.T;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);pf[a.T.token]=d;c=sf(a.endpoint,a.T.token)}else c=sf(a.endpoint);c.push(a.payload);c.length>=(Number(T("web_logging_max_batch")||0)||20)?tf():uf()}
function tf(){window.clearTimeout(of);if(!Ya(V)){for(var a in V){var b=mf[a];if(!b){var c=nf[a];if(!c)continue;b=new c;mf[a]=b}c=void 0;var d=a,e=b,f=kf[d],g=qf[d]||{};qf[d]=g;b=Math.round(Od());for(c in V[d]){var h=e.b;h={client:{hl:h.wa,gl:h.va,clientName:h.ua,clientVersion:h.innertubeContextClientVersion}};Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=sf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var k=pf[c];if(k)a:{var m=h,y=c;if(k.videoId)var P="VIDEO";else if(k.playlistId)P="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:y,scope:P}]}delete pf[c];vf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete V[a]}Ya(V)||
uf()}}
function uf(){window.clearTimeout(of);of=U(tf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function sf(a,b){b||(b="");V[a]=V[a]||{};V[a][b]=V[a][b]||[];return V[a][b]}
;function wf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||Od());f[a]=b;f.context={lastActivityMs:String(d?-1:ff())};rf({endpoint:"log_event",payload:f,T:e},c)}
;function xf(a,b,c){yf(zf,{attachChild:{csn:a,parentVisualElement:jf(b),visualElements:[jf(c)]}})}
function yf(a,b,c){b.eventTimeMs=c?c:Math.round(Od());b.lactMs=ff();rf({endpoint:"log_interaction",payload:b},a)}
;function Af(){if(!Bf&&!Cf||!window.JSON)return null;try{var a=Bf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=Cf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Cf,Df=new ld;Cf=Df.isAvailable()?new hd(Df):null;var Bf,Ef=new md;Bf=Ef.isAvailable()?new hd(Ef):null;function Ff(){var a=Q("ROOT_VE_TYPE",void 0);return a?new gf(void 0,a,void 0):null}
function Gf(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
;function Hf(a,b,c){Xb.set(""+a,b,c,"/","youtube.com",!1)}
;function If(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new gf(a))}}
;function Jf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=qd(L(window.location.href)[3]||null);f&&e.push(f);f=qd(L(d)[3]||null);if(0<=Ka(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=L(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Gf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ja(d).toString(36),e=b?sd(b):"",Hf(d,e,h||5),If(b))}else h="ST-"+Ja(d).toString(36),d=b?sd(b):"",Hf(h,d,5),If(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var y=void 0===y?window:y;c=y.location;a=td(a,k)+m;a=a instanceof wb?a:Ab(a);c.href=yb(a)}return!0}
;t("yt.abuse.botguardInitialized",u("yt.abuse.botguardInitialized")||qe,void 0);t("yt.abuse.invokeBotguard",u("yt.abuse.invokeBotguard")||re,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||We,void 0);t("yt.player.exports.navigate",u("yt.player.exports.navigate")||Jf,void 0);t("yt.util.activity.init",u("yt.util.activity.init")||df,void 0);t("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||ff,void 0);
t("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||ef,void 0);function Kf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function zf(a){this.b=a||{apiaryHost:R("APIARY_HOST"),Na:R("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!Q("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:R("GAPI_HINT_PARAMS"),innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ua:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),wa:R("INNERTUBE_CONTEXT_HL"),va:R("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:R("XHR_APIARY_HOST")||"",xa:R("INNERTUBE_HOST_OVERRIDE")||""}}
function vf(a,b,c){var d={};!Q("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":Q("VISITOR_DATA","")},w:c,ga:"JSON",W:d.W,I:function(a,b){d.I&&d.I(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=Yb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));var g="",h=a.b.xa;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);He(""+g+Kf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function Lf(a){a=a||{};this.url=a.url||"";this.args=a.args||$a(Mf);this.assets=a.assets||{};this.attrs=a.attrs||$a(Nf);this.params=a.params||$a(Of);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Mf={enablejsapi:1},Nf={},Of={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Pf(a){a instanceof Lf||(a=new Lf(a));return a}
function Qf(a){var b=new Lf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==pa(d)?$a(d):d}return b}
;function Rf(){I.call(this);this.b=[]}
n(Rf,I);Rf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Pa)}I.prototype.l.call(this)};var Sf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Tf(a){a=a||"";if(window.spf){var b=a.match(Sf);spf.style.load(a,b?b[1]:"",void 0)}else Uf(a)}
function Uf(a){var b=Vf(a),c=document.getElementById(b),d=c&&Td(c,"loaded");d||c&&!d||(c=Wf(a,b,function(){Td(c,"loaded")||(Rd(c),be(b),U(z(ce,b),0))}))}
function Wf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Nb(a);d.rel="stylesheet";d.href=vb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vf(a){var b=document.createElement("A");a=Bb(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(b)}
;var Xf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Yf;var Zf=Ra;Zf=Zf.toLowerCase();if(-1!=Zf.indexOf("android")){var $f=Zf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if($f)Yf=parseFloat($f[1]);else{var ag=[],bg=0,cg;for(cg in Xf)ag[bg++]=cg;var dg=Zf.match("("+ag.join("|")+")");Yf=dg?Xf[dg[0]]:0}}else Yf=void 0;var eg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],fg=['audio/mp4; codecs="mp4a.40.2"'];var gg=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",gg,void 0);var hg=0;function ig(a){gg[a]=gg[a]||{count:0};var b=gg[a];b.count++;b.time=Od();hg||(hg=Re(jg,0));return 10<b.count?(11==b.count&&Oe(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function jg(){var a=Od(),b;for(b in gg)6E4<a-gg[b].time&&delete gg[b];hg=0}
;function kg(a,b){this.version=a;this.args=b}
;function lg(a){this.topic=a}
lg.prototype.toString=function(){return this.topic};var mg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.C;K.prototype.publish=K.prototype.F;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",mg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",u("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",u("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",u("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ng(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function og(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function pg(){var a=og(),b;for(b in a)Se(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function qg(a,b){kg.call(this,1,arguments)}
n(qg,kg);function rg(a,b){kg.call(this,1,arguments)}
n(rg,kg);var vg=new lg("aft-recorded"),wg=new lg("timing-sent");var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var xg=A().toString();var yg={vc:!0},zg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Ag="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Bg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Cg=!1;
function Dg(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=Eg();var c=Od();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=og();if(c=b[a])Se(c),b[a]=0;Fg()["tick_"+a]=void 0;Od();T("csi_on_gel")?(b=Gg(),"_start"==a?ig("baseline_"+b)||wf("latencyActionBaselined",{clientActionNonce:b},zf,void 0,void 0):ig("tick_"+a+"_"+b)||wf("latencyActionTicked",{tickName:a,clientActionNonce:b},zf,void 0,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");
if(a&&(b=R("TIMING_ACTION"),a=Eg(),u("ytglobal.timingready_")&&b&&a._start&&(b=Hg()))){T("tighter_critical_section")&&!Cg&&(ng(vg,new qg(Math.round(b-a._start),void 0)),Cg=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Ig()}}
function Jg(){var a=Kg().info.yt_lt="hot_bg";Fg().info_yt_lt=a;if(T("csi_on_gel"))if("yt_lt"in zg){var b={},c=zg.yt_lt;0<=Ka(Bg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Gg();c=Object.keys(b).join("");ig("info_"+c+"_"+a)||(b.clientActionNonce=a,wf("latencyActionInfo",b,zf,void 0,void 0))}else 0<=Ka(Ag,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Hg(){var a=Eg();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ig(){pg();if(!T("csi_on_gel")){var a=Eg(),b=Kg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in yg){var f=Ma(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Lg(f,e),Mg(),Ng(),Og(!1,void 0),Q("TIMING_ACTION")&&O("PREVIOUS_ACTION",Q("TIMING_ACTION")),O("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:Q("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+u("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Hg();Pg()&&"youtube"==g&&(Jg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Od();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);Lg(f,e,void 0);ng(wg,new rg(b.aft+(h||0),void 0))}}}
var Ng=x(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||v,X);
function Lg(a,b,c){if(T("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ke(a,void 0,void 0,void 0,f)}catch(g){Ke(a,void 0,void 0,void 0,f)}}else Ke(a);Og(!0,c)}
function Gg(){var a=Kg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=A();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(xg)for(b=1,c=0;c<xg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^xg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Kg().nonce=a}return a}
function Eg(){return Kg().tick}
function Fg(){var a=Kg();"gel"in a||(a.gel={});return a.gel}
function Kg(){return u("ytcsi.data_")||Mg()}
function Mg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Og(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Pg(){var a=Eg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Kg().info.yt_pvis}
;function Qg(a,b){I.call(this);this.m=this.O=a;this.H=b;this.u=!1;this.f={};this.M=this.G=null;this.A=new K;mc(this,z(nc,this.A));this.i={};this.K=this.N=this.h=this.Z=this.b=null;this.J=!1;this.j=this.D=null;this.P={};this.ka=["onReady"];this.Y=null;this.ea=NaN;this.L={};Rg(this);this.S("WATCH_LATER_VIDEO_ADDED",x(this.Aa,this));this.S("WATCH_LATER_VIDEO_REMOVED",x(this.Ba,this));this.S("onAdAnnounce",x(this.na,this));this.la=new Rf;mc(this,z(nc,this.la))}
n(Qg,I);l=Qg.prototype;
l.da=function(a,b){if(!this.g){this.Z=a;this.b=Qf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.H,this.b.attrs.id=this.H);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.H;this.N||(this.N=Sg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;var c=this.b.attrs.width;c&&(this.m.style.width=Qb(Number(c)||c));if(c=this.b.attrs.height)this.m.style.height=Qb(Number(c)||c);
if(!this.g){if(!b&&!q(this.b.disable.html5)){c=!0;void 0!=this.b.args.deviceHasDisplay&&(c=this.b.args.deviceHasDisplay);if(2.2==Yf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?eg:fg;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d=d&&(Tg(this)||this.b.assets.js);this.b.disable.html5=!d;d||(this.b.args.html5_unavailable=
"1")}Ug(this)}this.u&&Vg(this)}};
l.qa=function(){return this.Z};
function Vg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Tg(a){var b=!0,c=Wg(a);c&&a.b&&(a=a.b,b=Td(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
function Ug(a){if(!a.J){var b=Tg(a);if(b&&"html5"==(Wg(a)?"html5":null))a.K="html5",a.u||a.X();else if(Xg(a),a.K="html5",b&&a.j)a.O.appendChild(a.j),a.X();else{a.b.loaded=!0;var c=!1;a.D=x(function(){c=!0;var a=Qf(this.b);u("yt.player.Application.create")(this.O,a);this.X()},a);
a.J=!0;b?a.D():(ge(a.b.assets.js,a.D),Tf(a.b.assets.css),Yg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Wg(a){var b=Hb(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
l.X=function(){if(!this.g){var a=Wg(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.J=!1,!a.isNotServable||!a.isNotServable(this.b.args.video_id)){Rg(this);this.u=!0;a=Wg(this);a.addEventListener&&(this.G=Zg(this,a,"addEventListener"));a.removeEventListener&&(this.M=Zg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Zg(this,a,d))}for(var e in this.i)this.G(e,
this.i[e]);Vg(this);this.N&&this.N(this.f);this.A.F("onReady",this.f)}}else this.ea=U(x(this.X,this),50)}};
function Zg(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,S(e,"WARNING"))}}}
function Rg(a){a.u=!1;if(a.M)for(var b in a.i)a.M(b,a.i[b]);for(var c in a.L)window.clearTimeout(parseInt(c,10));a.L={};a.G=null;a.M=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.S,a);a.f.removeEventListener=x(a.Ea,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.ra,a);a.f.getPlayerType=x(a.sa,a);a.f.getCurrentVideoConfig=x(a.qa,a);a.f.loadNewVideoConfig=x(a.da,a);a.f.isReady=x(a.ya,a)}
l.ya=function(){return this.u};
l.S=function(a,b){if(!this.g){var c=Sg(this,b);if(c){if(!(0<=Ka(this.ka,a)||this.i[a])){var d=$g(this,a);this.G&&this.G(a,d)}this.A.subscribe(a,c);"onReady"==a&&this.u&&U(z(c,this.f),0)}}};
l.Ea=function(a,b){if(!this.g){var c=Sg(this,b);c&&ad(this.A,a,c)}};
function Sg(a,b){var c=b;if("string"==typeof b){if(a.P[b])return a.P[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.P[b]=c}return c?c:null}
function $g(a,b){var c="ytPlayer"+b+a.H,d=x(function(a){if("html5"==(Wg(this)?"html5":null)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.A.F(b,a);return}}var d=U(x(function(){if(!this.g){this.A.F(b,a);var c=this.L,e=String(d);e in c&&delete c[e]}},this),0);
Za(this.L,String(d))},a);
a.i[b]=c;p[c]=d;return c}
l.na=function(a){be("a11y-announce",a)};
l.Aa=function(a){be("WATCH_LATER_VIDEO_ADDED",a)};
l.Ba=function(a){be("WATCH_LATER_VIDEO_REMOVED",a)};
l.sa=function(){return this.K||(Wg(this)?"html5":null)};
l.ra=function(){return this.Y};
function Xg(a){Dg("dcp");a.cancel();Rg(a);a.K=null;a.b&&(a.b.loaded=!1);var b=Wg(a);"html5"==(Wg(a)?"html5":null)&&(Tg(a)||!Yg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.O;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.D&&me(this.b.assets.js,this.D);window.clearTimeout(this.ea);this.J=!1};
l.l=function(){Xg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.P=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.O;delete this.m;I.prototype.l.call(this)};
function Yg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ah={},bh="player_uid_"+(1E9*Math.random()>>>0);function ch(a){var b="player";b=r(b)?Hb(b):b;a=Pf(a);var c=bh+"_"+(b[ta]||(b[ta]=++ua)),d=ah[c];if(d)return d.da(a),d.f;d=new Qg(b,c);ah[c]=d;be("player-added",d.f);mc(d,z(dh,d));U(function(){d.da(a)},0);
return d.f}
function dh(a){delete ah[a.H]}
;function eh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function fh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return gh(a)}
function gh(a,b,c){if(sa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function hh(a,b,c,d){if(sa(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function ih(a){var b=a.video_id||a.videoId;if(r(b)){var c=Af()||{},d=Af()||{};q(void 0)?d[b]=void 0:delete d[b];var e=A()+3E5,f=Cf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function jh(a){I.call(this);this.f=a;this.f.subscribe("command",this.ha,this);this.h={};this.i=!1}
B(jh,I);l=jh.prototype;l.start=function(){this.i||this.g||(this.i=!0,kh(this.f,"RECEIVING"))};
l.ha=function(a,b){if(this.i&&!this.g){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=x(this.Ga,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&lh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=mh(a,b||{}),c=this.b[a].apply(this.b,c),(c=nh(a,c))&&this.i&&!this.g&&kh(this.f,a,c))}}};
l.Ga=function(a,b){this.i&&!this.g&&kh(this.f,a,this.ba(a,b))};
l.ba=function(a,b){if(null!=b)return{value:b}};
function lh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
l.l=function(){var a=this.f;a.g||ad(a.b,"command",this.ha,this);this.f=null;for(var b in this.h)lh(this,b);jh.o.l.call(this)};function oh(a,b){jh.call(this,b);this.b=a;this.start()}
B(oh,jh);oh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
oh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function mh(a,b){switch(a){case "loadVideoById":return b=gh(b),ih(b),[b];case "cueVideoById":return b=gh(b),ih(b),[b];case "loadVideoByPlayerVars":return ih(b),[b];case "cueVideoByPlayerVars":return ih(b),[b];case "loadPlaylist":return b=hh(b),ih(b),[b];case "cuePlaylist":return b=hh(b),ih(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function nh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
oh.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return oh.o.ba.call(this,a,b)};
oh.prototype.l=function(){oh.o.l.call(this);delete this.b};function ph(a,b,c,d){I.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.A,this);window.addEventListener("message",this.m)}
n(ph,I);ph.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ka(this.j,b.func))&&this.i(b.func,b.args)}}};
ph.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=xc(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
ph.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function qh(a,b,c){ph.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(qh,ph);function rh(){var a=this.g=new qh(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Da,this);a.i=b;a.j=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=rh.prototype;l.Da=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,sh(this,c)),this.i[c]=!0)}else this.ja(a,b)};
l.ja=function(){};
function sh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.pa=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");D(this.h,this.ia,this);this.h=[]};
l.ca=function(){return null};
function th(a,b){a.sendMessage("infoDelivery",b)}
l.ia=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.ia({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function uh(a){rh.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ca,this));this.addEventListener("onVideoProgress",x(this.Ka,this));this.addEventListener("onVolumeChange",x(this.La,this));this.addEventListener("onApiChange",x(this.Fa,this));this.addEventListener("onPlaybackQualityChange",x(this.Ha,this));this.addEventListener("onPlaybackRateChange",x(this.Ia,this));this.addEventListener("onStateChange",x(this.Ja,this))}
B(uh,rh);l=uh.prototype;l.ja=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&eh(a)){var c=b;if(sa(c[0])&&!w(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=gh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=fh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=hh.apply(window,c)}c=d}ih(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);eh(a)&&th(this,this.ca())}};
l.Ca=function(){var a=x(this.pa,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();Oa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
l.Ja=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());th(this,a)};
l.Ha=function(a){th(this,{playbackQuality:a})};
l.Ia=function(a){th(this,{playbackRate:a})};
l.Fa=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);if(f){b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}else S(Error("getOptions() returns ["+a.join(", ")+"], but getOption("+e+") returns null."))}this.sendMessage("apiInfoDelivery",b)};
l.La=function(){th(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Ka=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());th(this,a)};
l.dispose=function(){uh.o.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function vh(){I.call(this);this.b=new K;mc(this,z(nc,this.b))}
B(vh,I);vh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
vh.prototype.C=function(a){return this.g?!1:this.b.C(a)};
vh.prototype.j=function(a,b){this.g||this.b.F.apply(this.b,arguments)};function wh(a,b,c){vh.call(this);this.f=a;this.h=b;this.i=c}
B(wh,vh);function kh(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(xc(a),d.h))}}
wh.prototype.l=function(){this.h=this.f=null;wh.o.l.call(this)};function xh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=bf(window,"message",x(this.j,this));this.f=new wh(this,a,b);mc(this,z(nc,this.f))}
B(xh,I);xh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=JSON.parse(a)}catch(d){return}a.command&&(b=this.f,b.g||b.j("command",a.command,a.data))}};
xh.prototype.l=function(){cf(this.i);this.b=null;xh.o.l.call(this)};function yh(){var a=Va(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||Q("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||T("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=$a(zh);return new J(function(c,d){b.I=function(a){ue(a)?c(a):d(new Ah("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new Ah("Unknown request error","net.unknown"))};
b.W=function(){d(new Ah("Request timed out","net.timeout"))};
Be(a,b)})}
function Ah(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Ah,C);function Bh(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
Bh.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Ec(a)?a:Ch(a)):2===this.g&&b?(a=b.call(c,this.b),Ec(a)?a:Dh(a)):this};
Bh.prototype.getValue=function(){return this.b};
Dc(Bh);function Dh(a){var b=new Bh;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function Ch(a){var b=new Bh;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function Eh(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fh;this.isTimeout=a instanceof Ah&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Sc}
n(Eh,C);Eh.prototype.name="BiscottiError";function Fh(){C.call(this,"Biscotti ID is missing from server")}
n(Fh,C);Fh.prototype.name="BiscottiMissingError";var zh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gh=null;function Hh(){if("1"===Va(Q("PLAYER_CONFIG",{}),"args","privembed"))return Jc(Error("Biscotti ID is not available in private embed mode"));Gh||(Gh=Rc(yh().then(Ih),function(a){return Jh(2,a)}));
return Gh}
function Ih(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fh;a=a.id;Kh(a);Gh=Ch(a);Lh(18E5,2);return a}
function Jh(a,b){var c=new Eh(b);Kh("");Gh=Dh(c);0<a&&Lh(12E4,a-1);throw c;}
function Lh(a,b){U(function(){Rc(yh().then(Ih,function(a){return Jh(b,a)}),v)},a)}
function Kh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Mh(){try{var a=u("yt.ads.biscotti.getId_");return a?a():Hh()}catch(b){return Jc(b)}}
;function Nh(a){C.apply(this,arguments)}
n(Nh,C);Nh.prototype.name="MutsuError";function Oh(){var a=new Nh("ID is missing"),b=new Nh("Timeout"),c=null,d=!1;Kd(function(){c=Hd();d=!0});
if(d)return c?Ch(c):Dh(a);var e=new J(function(b,c){Kd(function(){var d=Hd();d?b(d):c(a)})}),f=od().then(function(){return Jc(b)});
return Pc(Mc([e,f]),function(){return f.cancel()})}
;function Ph(a){if("1"!==Va(Q("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Hh,void 0);try{var b=Mh();if(T("enable_mutsu")){u("yt.ads.mutsu.getId_")||(Gd(),M[3]=!0,t("yt.ads.mutsu.getId_",Oh,void 0));try{var c=u("yt.ads.mutsu.getId_")()}catch(d){c=Jc(d)}}else c=Jc(new Nh("unimplemented"));Nc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Rb;c.flash=yd||"0";a:{try{var d=window.top.location.href}catch(jb){d=
2;break a}d=null!=d?d==window.document.location.href?0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?H:h;try{var k=h.history.length}catch(jb){k=0}d.u_his=k;d.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(d.u_h=H.screen.height,d.u_w=H.screen.width,d.u_ah=H.screen.availHeight,d.u_aw=H.screen.availWidth,d.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(d.u_nplug=H.navigator.plugins.length);
H.navigator&&H.navigator.mimeTypes&&(d.u_nmime=H.navigator.mimeTypes.length);d.ca_type=xd?"flash":"image";if(T("enable_server_side_search_pyv")||T("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var y=k.screenY}catch(jb){}try{var P=k.outerWidth;var sg=k.outerHeight}catch(jb){}try{var tg=k.innerWidth;var ug=k.innerHeight}catch(jb){}m=[k.screenLeft,k.screenTop,m,y,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,P,sg,tg,ug];y=window.top;try{if(y.document&&!y.document.body)var W=
new Gb(-1,-1);else{var Aa=(y||window).document,Dd="CSS1Compat"==Aa.compatMode?Aa.documentElement:Aa.body;W=(new Gb(Dd.clientWidth,Dd.clientHeight)).round()}var Ba=W}catch(jb){Ba=new Gb(-12245933,-12245933)}W={};Aa=0;p.SVGElement&&p.document.createElementNS&&(Aa|=1);W.bc=Aa;W.bih=Ba.height;W.biw=Ba.width;W.brdim=m.join();Ba=(W.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Pb.webkitVisibilityState||Pb.mozVisibilityState||Pb.visibilityState||""]||0,W.wgl=!!H.WebGLRenderingContext,W);for(var Ed in Ba)d[Ed]=
Ba[Ed]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Qh++;He("//www.youtube.com/ad_data_204",{ta:!1,w:d})}});
U(Ph,18E5)}catch(d){S(d)}}}
var Qh=0;var Y=u("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Z(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Xb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
Z.prototype.get=function(a,b){Rh(a);Sh(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
Z.prototype.set=function(a,b){Rh(a);Sh(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
Z.prototype.remove=function(a){Rh(a);Sh(a);delete Y[a]};
Z.prototype.clear=function(){for(var a in Y)delete Y[a]};
function Sh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Rh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Th(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Z.b=void 0;Z.getInstance=function(){return Z.b?Z.b:Z.b=new Z};var Uh=null,Vh=null,Wh=null,Xh={};function Yh(a){wf(a.payload_name,a.payload,zf,void 0,void 0)}
function Zh(a){var b=a.id;a=a.ve_type;var c=hf++;a=new gf(void 0,a,c,void 0,void 0);Xh[b]=a;b=Gf();c=Ff();b&&c&&xf(b,c,a)}
function $h(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(O("client-screen-nonce",b),O("ROOT_VE_TYPE",a),a=Ff()))for(var c in Xh){var d=Xh[c];d&&xf(b,a,d)}}
function ai(a){Xh[a.id]=new gf(a.tracking_params)}
function bi(a){var b=Gf();a=Xh[a.id];b&&a&&yf(zf,{click:{csn:b,visualElement:jf(a)}})}
function ci(a){a=a.ids;var b=Gf();if(b)for(var c=0;c<a.length;c++){var d=Xh[a[c]];if(d){var e=b,f=zf;T("interaction_logging_on_gel_web")?wf("visualElementShown",{csn:e,ve:jf(d),eventType:1},f):yf(f,{visibilityUpdate:{csn:e,visualElements:[jf(d)]}},void 0)}}}
function di(){var a=Uh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",O,void 0);t("yt.config.set",O,void 0);t("yt.setMsg",Qe,void 0);t("yt.msgs.set",Qe,void 0);t("yt.logging.errors.log",Oe,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Ph(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ih(a.args);Uh=a=ch(a);a.addEventListener("onScreenChanged",$h);a.addEventListener("onLogClientVeCreated",Zh);a.addEventListener("onLogServerVeCreated",ai);a.addEventListener("onLogToGel",Yh);
a.addEventListener("onLogVeClicked",bi);a.addEventListener("onLogVesShown",ci);a.addEventListener("onReady",di);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Wh=new uh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(Vh=new xh(window.parent,b,c),Wh=new oh(a,Vh.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&oe();Ve()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Ke(a+"mac_204?action_fcts=1");return!0},void 0);
var ei=Qd(function(){Dg("ol");var a=Z.getInstance(),b=!!((Th("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&qc(document.body,"exp-invert-logo"))if(c&&!qc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):qc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&qc(document.body,"inverted-hdpi")&&rc();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Th(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Y[b]:Y[b]=d.toString(16).toString();a=a.b;c=[];for(var e in Y)c.push(e+"="+encodeURIComponent(String(Y[e])));Hf(a,c.join("&"),63072E3)}}),fi=Qd(function(){var a=Uh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(ne=null);a=0;for(var b=Te.length;a<b;a++)Se(Te[a]);Te.length=0;le("//static.doubleclick.net/instream/ad_status.js");Ue=!1;O("DCLKSTAT",0);oc(Wh,Vh);if(a=Uh)a.removeEventListener("onScreenChanged",$h),a.removeEventListener("onLogClientVeCreated",Zh),a.removeEventListener("onLogServerVeCreated",ai),a.removeEventListener("onLogToGel",Yh),a.removeEventListener("onLogVeClicked",bi),a.removeEventListener("onLogVesShown",ci),a.removeEventListener("onReady",
di),a.destroy();Xh={}});
window.addEventListener?(window.addEventListener("load",ei),window.addEventListener("unload",fi)):window.attachEvent&&(window.attachEvent("onload",ei),window.attachEvent("onunload",fi));}).call(this);
