/*! For license information please see loader-v2.js.LICENSE.txt */
(()=>{var e={389:(e,t)=>{t.defaults={},t.set=function(e,r,o){var n=o||{},a=t.defaults,i=n.expires||a.expires,c=n.domain||a.domain,s=void 0!==n.path?n.path:void 0!==a.path?a.path:"/",l=void 0!==n.secure?n.secure:a.secure,u=void 0!==n.httponly?n.httponly:a.httponly,p=void 0!==n.samesite?n.samesite:a.samesite,d=i?new Date("number"==typeof i?(new Date).getTime()+864e5*i:i):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+r.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(d&&d.getTime()>=0?";expires="+d.toUTCString():"")+(c?";domain="+c:"")+(s?";path="+s:"")+(l?";secure":"")+(u?";httponly":"")+(p?";samesite="+p:"")},t.get=function(e){for(var t=document.cookie.split(";");t.length;){var r=t.pop(),o=r.indexOf("=");if(o=o<0?r.length:o,decodeURIComponent(r.slice(0,o).replace(/^\s+/,""))===e)return decodeURIComponent(r.slice(o+1))}return null},t.erase=function(e,r){t.set(e,"",{expires:-1,domain:r&&r.domain,path:r&&r.path,secure:0,httponly:0})},t.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var r=t.pop(),o=r.indexOf("=");o=o<0?r.length:o,e[decodeURIComponent(r.slice(0,o).replace(/^\s+/,""))]=decodeURIComponent(r.slice(o+1))}return e}},805:e=>{"use strict";e.exports=n,e.exports.isMobile=n,e.exports.default=n;const t=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,r=/CrOS/,o=/android|ipad|playbook|silk/i;function n(e){e||(e={});let n=e.ua;if(n||"undefined"==typeof navigator||(n=navigator.userAgent),n&&n.headers&&"string"==typeof n.headers["user-agent"]&&(n=n.headers["user-agent"]),"string"!=typeof n)return!1;let a=t.test(n)&&!r.test(n)||!!e.tablet&&o.test(n);return!a&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==n.indexOf("Macintosh")&&-1!==n.indexOf("Safari")&&(a=!0),a}},349:e=>{e.exports=(e=0)=>new Promise((t=>setTimeout(t,e)))},61:(e,t,r)=>{var o=r(698).default;function n(){"use strict";e.exports=n=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function p(e,t,r,o){var n=t&&t.prototype instanceof h?t:h,a=Object.create(n.prototype),i=new R(o||[]);return a._invoke=function(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=d(e,t,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var f={};function h(){}function v(){}function m(){}var g={};u(g,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(L([])));w&&w!==r&&a.call(w,c)&&(g=w);var x=m.prototype=h.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(n,i,c,s){var l=d(e[n],e,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==o(p)&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(p).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,s)}))}s(l.arg)}var n;this._invoke=function(e,o){function a(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(a,a):a()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},b(S.prototype),u(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new S(p(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(x),u(x,l,"Generator"),u(x,c,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=L,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),s=a.call(n,"finallyLoc");if(c&&s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=t,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},687:(e,t,r)=>{var o=r(61)();e.exports=o;try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t,r,o,n,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(o,n)}var o=r(687),n=r.n(o),a=r(805),i=r.n(a),c=r(389),s=r(349),l=r.n(s);const u=function(e){try{var t=(new Date).getTime(),r=Math.round(t/6e4).toString(36),o=document.createElement("script");o.src="".concat(e.sdkOrigin,"/upsell.min.js?").concat(r),document.body.appendChild(o)}catch(e){console.error(e)}},p=function(e){try{var t=(new Date).getTime(),r=Math.round(t/6e4).toString(36),o=document.createElement("script");o.src="".concat(e.sdkOrigin,"/thankYou.min.js?").concat(r),document.body.appendChild(o)}catch(e){console.error(e)}};var d=window.console&&window.localStorage&&"true"===window.localStorage.getItem("carroLogging"),f=!d&&!!window._fs_host,h={log:function(){try{for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=window.FS).log.apply(e,["log"].concat(r))}catch(e){}},warn:function(){try{for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=window.FS).log.apply(e,["warn"].concat(r))}catch(e){}},error:function(){try{for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=window.FS).log.apply(e,["error"].concat(r))}catch(e){}},enabled:!0},v={log:d?window.console.log:function(){},warn:d?window.console.warn:function(){},error:d?window.console.error:function(){},enabled:d};const m=f?h:v;var g=function(){var r,o=(r=n().mark((function t(){var r,o,a,s,d,f,h,v;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()(200);case 2:t.prev=2,sessionStorage.setItem("carroTest",!0),localStorage.setItem("carroTest",!0),new URLSearchParams,t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(2),window.carroUnsupportedBrowser=!0,m.log("Unsupported browser",t.t0),t.abrupt("return");case 13:t.prev=13;try{window.sessionStorage&&sessionStorage.removeItem("carroTest"),window.localStorage&&localStorage.removeItem("carroTest")}catch(e){m.error(e)}return t.finish(13);case 16:if(r=window.vyrlSdkLoaderConfig){t.next=20;break}return m.log("Missing vyrlSdkLoaderConfig"),t.abrupt("return");case 20:if(!r.sdkInjected){t.next=23;break}return m.log("SDK already injected"),t.abrupt("return");case 23:o=(new Date).getTime(),r.cb=Math.round(o/6e4).toString(36),r.pageId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),a=i()(),r.sdkInjected=!0,console.log("%cLoaded Carro SDK ".concat("1.37.0"," ").concat("HEAD"),"color: cyan; font-weight: bold"),m.log("loaderConfig",r),function(e,t){if(e.vyrlco=e.vyrlco||{},"MISSING_ENV_VAR".BACON_SRC){var o;e.vyrlco.bacon={preq:[],fire:function(t,r){e.vyrlco.bacon.preq.push({pce:t,data:Object.assign({},r)})},pres:[],set:function(t,r){e.vyrlco.bacon.pres.push({pce:t,data:Object.assign({},r)})}};var n=t.createElement("script");n.src="MISSING_ENV_VAR".BACON_SRC+"?"+Math.round((new Date).getTime()/1e5),t.head.appendChild(n),window.vyrlco.bacon.set("",{sdk_version:"1.37.0",source_ctoken:function(){return c.get("cart")},page_id:r.pageId}),null!==(o=r.carro)&&void 0!==o&&o.shop&&window.vyrlco.bacon.set("",{source:r.carro.shop.type||"shopify",source_id:r.carro.shop.permanent_domain})}else console.warn("BACON_SRC not defined")}(window,document),s=new URLSearchParams(window.location.search.substr(1)),m.log("sp",s),(s.has("carro")||s.has("carroReset"))&&(sessionStorage.setItem("carroQv",!0),sessionStorage.removeItem("carroTipsComplete"),sessionStorage.removeItem("carroNextTip"),sessionStorage.removeItem("carroPollCart"),sessionStorage.removeItem("carroCart"),sessionStorage.removeItem("carroRegularCheckout")),s.has("carroShowReviewsTest")&&localStorage.setItem("carroShowReviewsTest","true"),d=window.__st,(f="nomadgoods.com"===window.location.host)&&console.log("isUtmTestHost",f),f&&null===localStorage.getItem("carroShowReviewsTest")&&(console.log("New UTM test user"),"carro"===s.get("utm_medium")&&Math.random()>.5?localStorage.setItem("carroShowReviewsTest","true"):localStorage.setItem("carroShowReviewsTest","false")),d&&"object"===e(d)&&d.rid&&"product"===d.rtyp&&"true"==="MISSING_ENV_VAR".REVIEWS_ENABLED&&r.reviews&&!r.reviewsInjected&&(s.has("carroShowReviewsTest")?(localStorage.setItem("carroShowReviewsTest","true"),localStorage.setItem("carroShowReviewsMask","true")):null===localStorage.getItem("carroShowReviewsTest")&&localStorage.setItem("carroShowReviewsTest",String(Math.random()>.5)),h="true"===localStorage.getItem("carroShowReviewsTest"),r.reviewsInjected=!0,v="true"===localStorage.getItem("carroShowReviewsMask"),"MISSING_ENV_VAR".BACON_SRC&&(window.vyrlco.bacon.set("Review.Display",{review_enabled:h,product_id:d.rid,is_mobile:a,block_mobile_reviews:!!r.reviews.blockMobile}),window.vyrlco.bacon.set("Cart",{product_id:d.rid,review_enabled:h,is_mobile:a,block_mobile_reviews:!!r.reviews.blockMobile}),window.vyrlco.bacon.fire("Review.Display.showReviews",{mask:v}))),r.upsell&&u(r.upsell),r.thankYouUpsell&&p(r.thankYouUpsell);case 43:case"end":return t.stop()}}),t,null,[[2,8,13,16]])})),function(){var e=this,o=arguments;return new Promise((function(n,a){var i=r.apply(e,o);function c(e){t(i,n,a,c,s,"next",e)}function s(e){t(i,n,a,c,s,"throw",e)}c(void 0)}))});return function(){return o.apply(this,arguments)}}();try{g()}catch(e){m.error(e)}})()})();