var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g,m,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
k("object"==typeof self&&self)||k("object"==typeof y&&y)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||w||Function("return this")();var E={},S={};// Detect IE8's incomplete defineProperty implementation
E=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},L={};L=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;j=L?O.bind(O):function(){return O.apply(O,arguments)};var P={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;o=$&&!P.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:P;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},H={},q=Function.prototype,A=q.call,I=L&&q.bind.bind(A,A),N={},F=(H=L?I:function(e){return function(){return A.apply(e,arguments)}})({}.toString),C=H("".slice);N=function(e){return C(F(e),8,-1)};var D=Object,R=H("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
T=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?R(e,""):D(e)}:D;var z={},W={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
W=function(e){return null==e};var G=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
z=function(e){if(W(e))throw new G("Can't call method on "+e);return e},x=function(e){return T(z(e))};var B={},U={},J={},V={},Y={},Q="object"==typeof document&&document.all,K=(Y={all:Q,IS_HTMLDDA:void 0===Q&&void 0!==Q}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
V=Y.IS_HTMLDDA?function(e){return"function"==typeof e||e===K}:function(e){return"function"==typeof e};var X=Y.all;J=Y.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:V(e)||e===X}:function(e){return"object"==typeof e?null!==e:V(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=w[e],V(r)?r:void 0):w[e]&&w[e][t]};var et={};et=H({}.isPrototypeOf);var er={},en={},ei={},eo={};eo="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ea=w.process,es=w.Deno,ec=ea&&ea.versions||es&&es.version,eu=ec&&ec.v8;eu&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=eu.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eo&&(!(a=eo.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eo.match(/Chrome\/(\d+)/))&&(s=+a[1]),ei=s;var el=w.String;er=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(en=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!el(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ei&&ei<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return V(t)&&et(t.prototype,ed(e))};var ep={},ef={},eh={},ev=String;eh=function(e){try{return ev(e)}catch(e){return"Object"}};var eg=TypeError;// `Assert: IsCallable(argument) is true`
ef=function(e){if(V(e))return e;throw new eg(eh(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ep=function(e,t){var r=e[t];return W(r)?void 0:ef(r)};var em={},ey=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!J(n=j(r,e))||V(r=e.valueOf)&&!J(n=j(r,e))||"string"!==t&&V(r=e.toString)&&!J(n=j(r,e)))return n;throw new ey("Can't convert object to primitive value")};var eb={},e_={};e_=!1;var ew={},ek={},eE=Object.defineProperty;ek=function(e,t){try{eE(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var eS="__core-js_shared__";ew=w[eS]||ek(eS,{}),(eb=function(e,t){return ew[e]||(ew[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:e_?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},eL={},eO=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eL=function(e){return eO(z(e))};var eP=H({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ej=Object.hasOwn||function(e,t){return eP(eL(e),t)};var e$={},eM=0,ex=Math.random(),eT=H(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eM+ex,36)};var eH=w.Symbol,eq=eb("wks"),eA=er?eH.for||eH:eH&&eH.withoutSetter||e$,eI=TypeError,eN=(ej(eq,e="toPrimitive")||(eq[e]=en&&ej(eH,e)?eH[e]:eA("Symbol."+e)),eq[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
U=function(e,t){if(!J(e)||Z(e))return e;var r,n=ep(e,eN);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!J(r)||Z(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
B=function(e){var t=U(e,"string");return Z(t)?t:t+""};var eF={},eC={},eD=w.document,eR=J(eD)&&J(eD.createElement);eC=function(e){return eR?eD.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eF=!E&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var ez=Object.getOwnPropertyDescriptor;i=E?ez:function(e,t){if(e=x(e),t=B(t),eF)try{return ez(e,t)}catch(e){}if(ej(e,t))return M(!j(o,e,t),e[t])};var eW={},eG={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eG=E&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eU=String,eJ=TypeError;// `Assert: Type(argument) is Object`
eB=function(e){if(J(e))return e;throw new eJ(eU(e)+" is not an object")};var eV=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eK="enumerable",eX="configurable",eZ="writable";c=E?eG?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eZ in r&&!r[eZ]){var n=eQ(e,t);n&&n[eZ]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eB(e),t=B(t),eB(r),eF)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=E?function(e,t,r){return c(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var e0={},e1={},e2=Function.prototype,e4=E&&Object.getOwnPropertyDescriptor,e3=ej(e2,"name")&&(!E||E&&e4(e2,"name").configurable),e8={},e7=H(Function.toString);V(ew.inspectSource)||(ew.inspectSource=function(e){return e7(e)}),e8=ew.inspectSource;var e9={},e5={},e6=w.WeakMap;e5=V(e6)&&/native code/.test(String(e6));var te={},tt=eb("keys");te=function(e){return tt[e]||(tt[e]=e$(e))};var tr={};tr={};var tn="Object already initialized",ti=w.TypeError,to=w.WeakMap;if(e5||ew.state){var ta=ew.state||(ew.state=new to);/* eslint-disable no-self-assign -- prototype methods protection */ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(ta.has(e))throw new ti(tn);return t.facade=e,ta.set(e,t),t},l=function(e){return ta.get(e)||{}},d=function(e){return ta.has(e)}}else{var ts=te("state");tr[ts]=!0,u=function(e,t){if(ej(e,ts))throw new ti(tn);return t.facade=e,eW(e,ts,t),t},l=function(e){return ej(e,ts)?e[ts]:{}},d=function(e){return ej(e,ts)}}var tc=(e9={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e9.get,tl=String,tp=Object.defineProperty,tf=H("".slice),th=H("".replace),tv=H([].join),tg=E&&!S(function(){return 8!==tp(function(){},"length",{value:8}).length}),tm=String(String).split("String"),ty=e1=function(e,t,r){"Symbol("===tf(tl(t),0,7)&&(t="["+th(tl(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e3&&e.name!==t)&&(E?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&ej(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?E&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return ej(n,"source")||(n.source=tv(tm,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ty(function(){return V(this)&&tu(this).source||e8(this)},"toString"),e0=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(V(r)&&e1(r,o,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},t_={},tw={},tk={},tE={},tS={},tj=Math.ceil,tL=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tS=Math.trunc||function(e){var t=+e;return(t>0?tL:tj)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tE=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tS(t)};var tO=Math.max,tP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tP(r,t)};var t$={},tM={},tx=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tM=function(e){return e>0?tx(tE(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t$=function(e){return tM(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tT=function(e){return function(t,r,n){var i,o=x(t),a=t$(o),s=tk(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tH={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tT(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tT(!1)}.indexOf,tq=H([].push);tw=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!ej(tr,r)&&ej(n,r)&&tq(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)ej(n,r=t[i++])&&(~tH(o,r)||tq(o,r));return o};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tw(e,tA)},f=Object.getOwnPropertySymbols;var tI=H([].concat);// all object keys, includes non-enumerable and symbols
t_=ee("Reflect","ownKeys")||function(e){var t=p(eB(e));return f?tI(t,f(e)):t},tb=function(e,t,r){for(var n=t_(t),o=0;o<n.length;o++){var a=n[o];ej(e,a)||r&&ej(r,a)||c(e,a,i(t,a))}};var tN={},tF=/#|\.prototype\./,tC=function(e,t){var r=tR[tD(e)];return r===tW||r!==tz&&(V(t)?S(t):!!t)},tD=tC.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tR=tC.data={},tz=tC.NATIVE="N",tW=tC.POLYFILL="P";tN=tC,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/_=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||ek(c,{}):(w[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tN(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tb(a,o)}(e.sham||o&&o.sham)&&eW(a,"sham",!0),e0(r,n,a,e)}};var tG={},tB={},tU=Function.prototype,tJ=tU.apply,tV=tU.call;// eslint-disable-next-line es/no-reflect -- safe
tB="object"==typeof Reflect&&Reflect.apply||(L?tV.bind(tJ):function(){return tV.apply(tJ,arguments)});var tY={},tQ={},tK=(tQ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===N(e))return H(e)})(tQ.bind);// optional / simple context binding
tY=function(e,t){return ef(e),void 0===t?e:L?tK(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=ee("document","documentElement");var tZ={};tZ=H([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw new t1("Not enough arguments");return e};var t2={};// eslint-disable-next-line redos/no-vulnerable -- safe
t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(eo);var t4={};t4="process"===N(w.process);var t3=w.setImmediate,t8=w.clearImmediate,t7=w.process,t9=w.Dispatch,t5=w.Function,t6=w.MessageChannel,re=w.String,rt=0,rr={},rn="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=w.location});var ri=function(e){if(ej(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rs=function(e){// old engines have not location.origin
w.postMessage(re(e),h.protocol+"//"+h.host)};t3&&t8||(t3=function(e){t0(arguments.length,1);var t=V(e)?e:t5(e),r=tZ(arguments,1);return rr[++rt]=function(){tB(t,void 0,r)},v(rt),rt},t8=function(e){delete rr[e]},t4?v=function(e){t7.nextTick(ro(e))}:t9&&t9.now?v=function(e){t9.now(ro(e))}:t6&&!t2?(m=(g=new t6).port2,g.port1.onmessage=ra,v=tY(m.postMessage,m)):w.addEventListener&&V(w.postMessage)&&!w.importScripts&&h&&"file:"!==h.protocol&&!S(rs)?(v=rs,w.addEventListener("message",ra,!1)):v=rn in eC("script")?function(e){tX.appendChild(eC("script"))[rn]=function(){tX.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rc=(tG={set:t3,clear:t8}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
_({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rc},{clearImmediate:rc});var ru=tG.set,rl={},rd={};/* global Bun -- Deno case */rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=w.Function,rf=/MSIE .\./.test(eo)||rd&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(e,t){var r=t?2:1;return rf?function(n,i/* , ...arguments */){var o=t0(arguments.length,1)>r,a=V(n)?n:rp(n),s=o?tZ(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rh=w.setImmediate?rl(ru,!1):ru;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
_({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rh},{setImmediate:rh});const rv="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="c682ea3e-a484-48c6-aa40-e6d57d385544",rm=function(e){return new Promise((t,r)=>{setTimeout(()=>{r(Error(`Request Took too long! Timeout after ${e} seconds`))},1e3*e)})},ry=async function(e){try{// 1. Fetch Data
let t=await Promise.race([fetch(e),rm(10)]);// 2. Throw Error on not 200 responses
if(!t.ok)throw Error("We could not find that recipe. Please try another one!");// 3. Jsonify response
let r=await t.json();// 4. Return data
return r}catch(e){throw e}},rb=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rm(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${i.status})`);return i}catch(e){throw e}},r_={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rw=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rk=async function(e){// Fetch recipe data and handle data
try{let t=`${rv}${e}?key=${rg}`,r=await ry(t);r_.recipe=rw(r),r_.bookmarks.some(t=>t.id===e)?r_.recipe.bookmarked=!0:r_.recipe.bookmarked=!1}catch(e){throw e}},rE=async function(e){// Fetch & Handle results`
try{r_.search.query=e;let{data:t}=await ry(`${rv}?search=${e}&key=${rg}`);if(0===t.recipes.length)throw Error("No recipes found for your query! Please try again.");r_.search.page=1,r_.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}},rS=function(e=r_.search.page){r_.search.page=e;let t=(e-1)*r_.search.resultsPerPage,r=e*r_.search.resultsPerPage;return r_.search.results.slice(t,r)},rj=function(e){r_.recipe.ingredients.forEach(t=>{t.quantity*=e/r_.recipe.servings}),r_.recipe.servings=e},rL=function(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))},rO=function(e){r_.bookmarks.push(e),e.id===r_.recipe.id&&(r_.recipe.bookmarked=!0),rL()},rP=function(e){let t=r_.bookmarks.findIndex(t=>t.id===e);r_.bookmarks.splice(t,1),e===r_.recipe.id&&(r_.recipe.bookmarked=!1),rL()};!function(){let e=localStorage.getItem("bookmarks");e&&(r_.bookmarks=JSON.parse(e))}();const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format.");let[r,n,i]=t;return{quantity:+r?r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rb(`${rv}?key=${rg}`,r);r_.recipe=rw(n),rO(r_.recipe)}catch(e){throw e}};var rM={};rM=new URL("icons.c14567a0.svg",import.meta.url).toString();class rx{render(e,t=!0){this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// Update to new data
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];r.isEqualNode(e)||r.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/b(rM)}#icon-loader"></use>
          </svg>
        </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e,t=!0){let r=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${/*@__PURE__*/b(rM)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${e}</p>
            </div>
            `;if(!1===t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e,t=!0){let r=`
        <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/b(rM)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
    `;if(!1===t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*//* Fractions *//* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 *//*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */const rT=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new rT(r).add(new rT(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new rT(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()};rT.prototype.clone=function(){return new rT(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */rT.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */rT.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},rT.prototype.add=function(e){var t=this.clone();return e=e instanceof rT?e.clone():new rT(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},rT.prototype.subtract=function(e){var t=this.clone();return e=e instanceof rT?e.clone():new rT(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},rT.prototype.multiply=function(e){var t=this.clone();if(e instanceof rT)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new rT(e));t.numerator*=e}return t.normalize()},rT.prototype.divide=function(e){var t=this.clone();if(e instanceof rT)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new rT(e));t.denominator*=e}return t.normalize()},rT.prototype.equals=function(e){e instanceof rT||(e=new rT(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */rT.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=rT.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */rT.gcf=function(e,t){var r=[],n=rT.primeFactors(e),i=rT.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
rT.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
};class rH extends rx{_parentElement=document.querySelector(".recipe");_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/b(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/b(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/b(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/b(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/b(rM)}#icon-user"></use>
            </svg>
          </div>

          
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/b(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>

    `}_generateMarkupIngredient(e){return console.log(rT),`
             <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/b(rM)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new rT(e.quantity):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}}var rq=new rH;class rA{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rA;class rN{render(e,t=!0){this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// Update to new data
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];r.isEqualNode(e)||r.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/b(rM)}#icon-loader"></use>
          </svg>
        </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e,t=!0){let r=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${/*@__PURE__*/b(rM)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${e}</p>
            </div>
            `;if(!1===t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e,t=!0){let r=`
        <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/b(rM)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
    `;if(!1===t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var rF=new class extends rx{_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>

                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/b(rM)}#icon-user"></use>
                  </svg>
                </div>

              </div>
            </a>
        </li>
    `}};class rC extends rN{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(e=>rF.render(e,!1)).join("")}}var rD=new rC;class rR extends rx{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._generateNextPage():t===e&&e>1?this._generatePrevPage():t>1&&this._data.page<e?this._generatePrevPage()+this._generateNextPage():""}_generateNextPage(){return`
        <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rM)}#icon-arrow-right"></use>
            </svg>
        </button>

    `}_generatePrevPage(){return`
        <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page-1}</span>
        </button>
       `}addHandlerPagination(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rz=new rR;class rW extends rx{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}}var rG=new rW;class rB extends rx{_parentElement=document.querySelector(".bookmarks__list");_generateMarkup(){return this._data.length?this._data.map(e=>rF.render(e,!1)).join(""):this.renderMessage("No bookmarks yet. Find a nice recipe and bookmark it.",!1)}addHandlerBookmarks(e){window.addEventListener("load",e)}}var rU=new rB,rJ=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rJ}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rJ:Function("r","regeneratorRuntime = r")(rJ)}const rV=async function(){try{// 1.Get Recipe ID
let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rD.update(rS()),rU.update(r_.bookmarks),// 3.Load Recipe
await rk(e),rq.render(r_.recipe)}catch(e){rq.renderError(e.message)}},rY=async function(){try{// Get Search Query
let e=rI.getQuery();if(!e)return;rD.renderSpinner(),// 2. Load Search Results
await rE(e),rD.render(rS()),rz.render(r_.search)}catch(e){rD.renderError(e.message)}},rQ=async function(e){try{rG.renderSpinner(),await r$(e),rq.render(r_.recipe),rG.renderMessage("Recipe uploaded successfully."),rU.render(r_.bookmarks),// change URL
window.history.pushState(null,"",`#${r_.recipe.id}`),setTimeout(()=>{rG.toggleWindow()},2e3)}catch(e){console.error(e),rG.renderError(e.message)}};rU.addHandlerBookmarks(function(){rU.render(r_.bookmarks)}),rq.addHandlerRender(rV),rq.addHandlerUpdateServings(function(e){// Update servings in the state
rj(e),rq.update(r_.recipe)}),rq.addHandlerAddBookmark(function(){r_.recipe.bookmarked?rP(r_.recipe.id):rO(r_.recipe),rq.update(r_.recipe),rU.render(r_.bookmarks)}),rI.addHandlerSearch(rY),rz.addHandlerPagination(function(e){rD.render(rS(e)),rz.render(r_.search)}),rG.addHandlerUpload(rQ);//# sourceMappingURL=index.33e6903f.js.map

//# sourceMappingURL=index.33e6903f.js.map
