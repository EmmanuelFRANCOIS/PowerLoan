/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 353:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// UNUSED EXPORTS: common, simple, simpleLoan

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/helpers/validation.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * A namespace for validation functions.
 * @namespace validation
 * @private
 */
var validation = {
  /**
   * Checks if a value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a number, false otherwise.
   * @private
   */
  isNumber: function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  },
  /**
   * Checks if a value is an integer.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an integer, false otherwise.
   * @private
   */
  isInteger: function isInteger(value) {
    return Number.isInteger(value);
  },
  /**
   * Checks if a value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a string, false otherwise.
   * @private
   */
  isString: function isString(value) {
    return typeof value === 'string';
  },
  /**
   * Checks if a value is a boolean.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a boolean, false otherwise.
   * @private
   */
  isBoolean: function isBoolean(value) {
    return typeof value === 'boolean';
  },
  /**
   * Checks if a value is a Date object.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a Date object, false otherwise.
   * @private
   */
  isDate: function isDate(value) {
    var date = new Date(value);
    return !isNaN(date.getTime());
  },
  /**
   * Checks if a value is an object (excluding arrays and null).
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an object, false otherwise.
   * @private
   */
  isObject: function isObject(value) {
    return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
  },
  /**
   * Checks if a value is an array.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an array, false otherwise.
   * @private
   */
  isArray: function isArray(value) {
    return Array.isArray(value);
  },
  /**
   * Checks if a value is a valid email address (RFC 5322 official standard regex).
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid email address, false otherwise.
   * @private
   */
  isEmail: function isEmail(value) {
    //const regex = /^\S+@\S+\.\S+$/;
    var regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/;
    return validation.isString(value) && regex.test(value);
  },
  /**
   * Checks if a value is a valid UUID.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid UUID, false otherwise.
   * @private
   */
  isUUID: function isUUID(value) {
    var regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return validation.isString(value) && regex.test(value);
  },
  /**
   * Checks if a value is a valid Url.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid Url, false otherwise.
   * @private
   */
  isUrl: function isUrl(value) {
    var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return validation.isString(value) && regex.test(value);
  },
  /**
   * Checks if a value is a valid phone number. Note: This is a basic validation and might need to be localized.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid phone number, false otherwise.
   * @private
   */
  isPhone: function isPhone(value) {
    var regex = /^\+?[0-9]{7,}$/; // Very basic validation, consider more specific regex for actual use
    return validation.isString(value) && regex.test(value);
  }
};
/* harmony default export */ const helpers_validation = (validation);
;// CONCATENATED MODULE: ./src/helpers/eventEmitter.js
function eventEmitter_typeof(o) { "@babel/helpers - typeof"; return eventEmitter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, eventEmitter_typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == eventEmitter_typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != eventEmitter_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != eventEmitter_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// EventEmitter.js
/**
 * A simple event emitter class that allows objects to subscribe to,
 * emit, and unsubscribe from events.
 * @private
 */
var EventEmitter = /*#__PURE__*/function () {
  /**
   * Constructs the EventEmitter instance.
   */
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this.listeners = {};
  }

  /**
   * Registers an event listener for the specified event.
   * @param {string} event - The name of the event to listen for.
   * @param {Function} listener - The callback function to register.
   */
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }

    /**
     * Removes an event listener for the specified event.
     * @param {string} event - The name of the event to remove the listener for.
     * @param {Function} listener - The callback function to remove.
     */
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.listeners[event]) return;
      var index = this.listeners[event].indexOf(listener);
      if (index > -1) {
        this.listeners[event].splice(index, 1);
      }
    }

    /**
     * Emits an event, calling all registered listeners for this event.
     * @param {string} event - The name of the event to emit.
     * @param {...any} args - Arguments to pass to the event listeners.
     */
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (!this.listeners[event]) return;
      this.listeners[event].forEach(function (listener) {
        listener.apply(void 0, args);
      });
    }
  }]);
  return EventEmitter;
}();
/* harmony default export */ const eventEmitter = (EventEmitter);
;// CONCATENATED MODULE: ./src/simpleLoan/simpleLoan.js
function simpleLoan_typeof(o) { "@babel/helpers - typeof"; return simpleLoan_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, simpleLoan_typeof(o); }
function simpleLoan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function simpleLoan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, simpleLoan_toPropertyKey(descriptor.key), descriptor); } }
function simpleLoan_createClass(Constructor, protoProps, staticProps) { if (protoProps) simpleLoan_defineProperties(Constructor.prototype, protoProps); if (staticProps) simpleLoan_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (simpleLoan_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = simpleLoan_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function simpleLoan_toPropertyKey(t) { var i = simpleLoan_toPrimitive(t, "string"); return "symbol" == simpleLoan_typeof(i) ? i : String(i); }
function simpleLoan_toPrimitive(t, r) { if ("object" != simpleLoan_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != simpleLoan_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 // For generating UUIDs
 // For date manipulation



/**
 * Represents a Simple Loan.
 * Extends EventEmitter to emit events.
 * @class
 * @constructor
 * @property {integer} id loan id. Auto increment (from db)
 * @property {string} uuid unique identifier of user/device. Generated with uuid JS library. Default : ""
 * @property {string} title title of the loan. Default : "My Simple Loan"
 * @property {string} description description of the loan. Default : ""
 * @property {string} destination loan's destination : "realEstate", "car", "consumer", "student", "business" or "other". Default : "realEstate"
 * @property {string} destinationOther custom loan's destination when destination is "other". Default : ""
 * @property {boolean} active Real contracted loan or simulation. True if the loan is a real contracted loan. False if the loan is only a simulation. Default : false
 * @property {string} calculationMode Define the result we want to get : "capital", "duration", "interest", "repayment". Default : "repayment"
 * @property {integer} capital borrowed capital ($). Default : 100000
 * @property {date} releaseDate date of capital release. Default : 1rst of next month from today at 08:00:00
 * @property {date} beginDate date of loan beginning (first repayment). Default : releaseDate + one month
 * @property {date} endDate date of loan ending (last repayment). Default : beginDate + (durationTime - 1) (in months)
 * @property {integer} durationPeriods number of period of repayment. Default : 120
 * @property {integer} durationTime duration of loan in months. Default : 120
 * @property {decimal} interestRate raw annual interest rate. Default: 0.0350
 * @property {decimal} repayment periodic repayment ($) (only if constant repayment. If variable repayment, it must be calculated for each period.). Default : 1000
 * @property {string} lender lender name. Default : ""
 * @property {string} lenderContact lender's contact name. Default : ""
 * @property {string} lenderAddress lender's address. Default : ""
 * @property {string} lenderContactPhone lender's contact phone number. Default : ""
 * @property {string} lenderContactEmail lender's contact email. Default : ""
 * @property {string} lenderContractRef reference of the loan contract. Default : ""
 * @property {date} lenderContractDate date of loan contract. Default : null
 * @property {date} createdAt date of loan creation. Default : Now
 * @property {date} modifiedAt date of last loan modification. Default : Now
 * @public
 */
var simpleLoan_SimpleLoan = /*#__PURE__*/function (_EventEmitter) {
  _inherits(SimpleLoan, _EventEmitter);
  /**
   * Constructs a new SimpleLoan instance.
   * @param {Object} loanData - The loanData JS object to initialize the loan with.
   */
  function SimpleLoan() {
    var _this;
    var loanData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    simpleLoan_classCallCheck(this, SimpleLoan);
    // Initialize the EventEmitter
    _this = _callSuper(this, SimpleLoan);

    // Initialize properties from loanData or default values
    Object.keys(SimpleLoan.defaultSimpleLoan).forEach(function (key) {
      _this["_".concat(key)] = loanData[key] || SimpleLoan.defaultSimpleLoan[key];
    });
    return _this;
  }

  /** 
   * ==========================================================================
   *  PROPERTIES GETTERS & SETTERS
   * ==========================================================================
   */

  // ID Getter and Setter
  /**
   * Gets the loan ID.
   * @returns {number} The ID of the loan.
   */
  simpleLoan_createClass(SimpleLoan, [{
    key: "id",
    get: function get() {
      return this._id;
    }

    /**
     * Sets the loan ID.
     * @param {number} value - The new ID of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('id', value);
    }

    // UUID Getter and Setter
    /**
     * Gets the loan UUID.
     * @returns {string} The UUID of the loan.
     */
  }, {
    key: "uuid",
    get: function get() {
      return this._uuid;
    }

    /**
     * Sets the loan UUID.
     * @param {string} value - The new UUID of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('uuid', value);
    }

    // Title Getter and Setter
    /**
     * Gets the loan title.
     * @returns {string} The title of the loan.
     */
  }, {
    key: "title",
    get: function get() {
      return this._title;
    }

    /**
     * Sets the loan title.
     * @param {string} value - The new title of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('title', value);
    }

    // Description Getter and Setter
    /**
     * Gets the loan description.
     * @returns {string} The description of the loan.
     */
  }, {
    key: "description",
    get: function get() {
      return this._description;
    }

    /**
     * Sets the loan description.
     * @param {string} value - The new description of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('description', value);
    }

    // Destination Getter and Setter
    /**
     * Gets the loan's destination.
     * @returns {string} The destination of the loan.
     */
  }, {
    key: "destination",
    get: function get() {
      return this._destination;
    }

    /**
     * Sets the loan's destination.
     * @param {string} value - The new destination of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('destination', value);
    }

    // DestinationOther Getter and Setter
    /**
     * Gets the loan's other destination description.
     * @returns {string} The custom destination of the loan when 'other' is selected.
     */
  }, {
    key: "destinationOther",
    get: function get() {
      return this._destinationOther;
    }

    /**
     * Sets the loan's other destination description.
     * @param {string} value - The new custom destination of the loan when 'other' is selected.
     */,
    set: function set(value) {
      this._validateAndSetProperty('destinationOther', value);
    }

    // Active Getter and Setter
    /**
     * Gets the loan's active status.
     * @returns {boolean} True if the loan is active, false otherwise.
     */
  }, {
    key: "active",
    get: function get() {
      return this._active;
    }

    /**
     * Sets the loan's active status.
     * @param {boolean} value - The new active status of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('active', value);
    }

    // CalculationMode Getter and Setter
    /**
     * Gets the loan's calculation mode.
     * @returns {string} The calculation mode of the loan.
     */
  }, {
    key: "calculationMode",
    get: function get() {
      return this._calculationMode;
    }

    /**
     * Sets the loan's calculation mode.
     * @param {string} value - The new calculation mode of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('calculationMode', value);
      this.calculateLoan();
    }

    // Capital Getter and Setter
    /**
     * Gets the loan's capital.
     * @returns {number} The capital of the loan.
     */
  }, {
    key: "capital",
    get: function get() {
      return this._capital;
    }

    /**
     * Sets the loan's capital.
     * @param {number} value - The new capital of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('capital', value);
      this.calculateLoan();
    }

    // ReleaseDate Getter and Setter
    /**
     * Gets the loan's release date.
     * @returns {string} The release date of the loan in ISO 8601 format.
     */
  }, {
    key: "releaseDate",
    get: function get() {
      return this._releaseDate;
    }

    /**
     * Sets the loan's release date.
     * @param {string} value - The new release date of the loan in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('releaseDate', value);
      this._adjustBeginDate();
    }

    // BeginDate Getter and Setter
    /**
     * Gets the loan's begin date.
     * @returns {string} The begin date of the loan in ISO 8601 format.
     */
  }, {
    key: "beginDate",
    get: function get() {
      return this._beginDate;
    }

    /**
     * Sets the loan's begin date.
     * @param {string} value - The new begin date of the loan in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('beginDate', value);
      this._adjustReleaseDate();
      this._adjustEndDate();
      this.calculateLoan();
    }

    // EndDate Getter and Setter
    /**
     * Gets the loan's end date.
     * @returns {string} The end date of the loan in ISO 8601 format.
     */
  }, {
    key: "endDate",
    get: function get() {
      return this._endDate;
    }

    /**
     * Sets the loan's end date.
     * @param {string} value - The new end date of the loan in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('endDate', value);
      this._adjustDurationPeriods();
      this.calculateLoan();
    }

    // DurationPeriods Getter and Setter
    /**
     * Gets the loan's duration in periods.
     * @returns {number} The number of repayment periods for the loan.
     */
  }, {
    key: "durationPeriods",
    get: function get() {
      return this._durationPeriods;
    }

    /**
     * Sets the loan's duration in periods.
     * @param {number} value - The new number of repayment periods for the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('durationPeriods', value);
      this._adjustEndDate();
      this.calculateLoan();
    }

    // DurationTime Getter and Setter
    /**
     * Gets the loan's duration in time (months).
     * @returns {number} The duration of the loan in months.
     */
  }, {
    key: "durationTime",
    get: function get() {
      return this._durationTime;
    }

    /**
     * Sets the loan's duration in time (months).
     * @param {number} value - The new duration of the loan in months.
     */,
    set: function set(value) {
      this._validateAndSetProperty('durationTime', value);
      this._adjustEndDate();
      this._adjustDurationPeriods();
      this.calculateLoan();
    }

    // InterestRate Getter and Setter
    /**
     * Gets the loan's interest rate.
     * @returns {number} The interest rate of the loan.
     */
  }, {
    key: "interestRate",
    get: function get() {
      return this._interestRate;
    }

    /**
     * Sets the loan's interest rate.
     * @param {number} value - The new interest rate of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('interestRate', value);
      this.calculateLoan();
    }

    // Repayment Getter and Setter
    /**
     * Gets the loan's periodic repayment amount.
     * @returns {number} The periodic repayment amount of the loan.
     */
  }, {
    key: "repayment",
    get: function get() {
      return this._repayment;
    }

    /**
     * Sets the loan's periodic repayment amount.
     * @param {number} value - The new periodic repayment amount of the loan.
     */,
    set: function set(value) {
      this._validateAndSetProperty('repayment', value);
      this.calculateLoan();
    }

    // Lender Getter and Setter
    /**
     * Gets the loan's lender name.
     * @returns {string} The name of the lender.
     */
  }, {
    key: "lender",
    get: function get() {
      return this._lender;
    }

    /**
     * Sets the loan's lender name.
     * @param {string} value - The new name of the lender.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lender', value);
    }

    // LenderContact Getter and Setter
    /**
     * Gets the contact name for the loan's lender.
     * @returns {string} The contact name of the lender.
     */
  }, {
    key: "lenderContact",
    get: function get() {
      return this._lenderContact;
    }

    /**
     * Sets the contact name for the loan's lender.
     * @param {string} value - The new contact name of the lender.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderContact', value);
    }

    // LenderAddress Getter and Setter
    /**
     * Gets the address of the loan's lender.
     * @returns {string} The address of the lender.
     */
  }, {
    key: "lenderAddress",
    get: function get() {
      return this._lenderAddress;
    }

    /**
     * Sets the address of the loan's lender.
     * @param {string} value - The new address of the lender.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderAddress', value);
    }

    // LenderContactPhone Getter and Setter
    /**
     * Gets the contact phone number for the loan's lender.
     * @returns {string} The contact phone number of the lender.
     */
  }, {
    key: "lenderContactPhone",
    get: function get() {
      return this._lenderContactPhone;
    }

    /**
     * Sets the contact phone number for the loan's lender.
     * @param {string} value - The new contact phone number of the lender.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderContactPhone', value);
    }

    // LenderContactEmail Getter and Setter
    /**
     * Gets the contact email for the loan's lender.
     * @returns {string} The contact email of the lender.
     */
  }, {
    key: "lenderContactEmail",
    get: function get() {
      return this._lenderContactEmail;
    }

    /**
     * Sets the contact email for the loan's lender.
     * @param {string} value - The new contact email of the lender.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderContactEmail', value);
    }

    // LenderContractRef Getter and Setter
    /**
     * Gets the loan contract reference number.
     * @returns {string} The contract reference number.
     */
  }, {
    key: "lenderContractRef",
    get: function get() {
      return this._lenderContractRef;
    }

    /**
     * Sets the loan contract reference number.
     * @param {string} value - The new contract reference number.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderContractRef', value);
    }

    // LenderContractDate Getter and Setter
    /**
     * Gets the date of the loan contract.
     * @returns {string} The date of the loan contract in ISO 8601 format.
     */
  }, {
    key: "lenderContractDate",
    get: function get() {
      return this._lenderContractDate;
    }

    /**
     * Sets the date of the loan contract.
     * @param {string} value - The new date of the loan contract in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('lenderContractDate', value);
    }

    // CreatedAt Getter and Setter
    /**
     * Gets the creation date of the loan.
     * @returns {string} The creation date of the loan in ISO 8601 format.
     */
  }, {
    key: "createdAt",
    get: function get() {
      return this._createdAt;
    }

    /**
     * Sets the creation date of the loan.
     * @param {string} value - The new creation date of the loan in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('createdAt', value);
    }

    // ModifiedAt Getter and Setter
    /**
     * Gets the last modification date of the loan.
     * @returns {string} The last modification date of the loan in ISO 8601 format.
     */
  }, {
    key: "modifiedAt",
    get: function get() {
      return this._modifiedAt;
    }

    /**
     * Sets the last modification date of the loan.
     * @param {string} value - The new last modification date of the loan in ISO 8601 format.
     */,
    set: function set(value) {
      this._validateAndSetProperty('modifiedAt', value);
    }

    /** 
     * ==========================================================================
     *  PUBLIC METHODS
     * ==========================================================================
     */

    /**
     * Calculate loan according to [calculationMode] and update the target loan's property of calculation.
     * @method
     */
  }, {
    key: "calculateLoan",
    value: function calculateLoan() {
      switch (this._calculationMode) {
        case "capital":
          this._capital = calcCapital();
          break;
        case "duration":
          this._durationPeriods = calcDurationPeriods();
          this._durationTime = this._durationPeriods;
          break;
        case "interest":
          this._interestRate = calcInterestRate();
          break;
        case "repayment":
        default:
          this._repayment = calcRepayment();
          break;
      }
      // Emit a [calculated] event
      this.emit('calculated', {
        timestamp: dayjs_min_default()().format("yyyy-MM-ddTHH:mm:ss.SSSZ"),
        calculationMode: this._calculationMode
      });
    }

    /**
     * Validates all properties and aggregates errors.
     * @param {Object} loanData - The loan data to validate.
     * @returns {Object} An object containing a valid flag and a list of errors.
     * @method
     */
  }, {
    key: "validateLoanData",
    value: function validateLoanData(loanData) {
      var _this2 = this;
      var errors = [];

      // Iterate over each property to validate
      Object.keys(SimpleLoan.defaultSimpleLoan).forEach(function (key) {
        var validationResult = _this2._validateProperty(key, loanData[key]);
        if (validationResult !== true) {
          // Collect errors instead of throwing them
          errors.push(validationResult);
        }
      });
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    }

    /**
     * Validates and sets the property values of the loan.
     * If validation fails for any property, it aggregates errors.
     * @param {Object} loanData - The loan data to initialize or update the loan with.
     * @method
     */
  }, {
    key: "setLoanData",
    value: function setLoanData() {
      var _this3 = this;
      var loanData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var validation = this.validateLoanData(loanData);
      if (!validation.isValid) {
        // Handle or throw aggregated errors
        // For example, you could throw a single error with a joined message:
        var errorMessage = validation.errors.map(function (err) {
          return "".concat(err.propertyName, ": ").concat(err.message);
        }).join('\n');
        throw new Error("Loan data validation failed:\n".concat(errorMessage));
      }

      // If validation passed for all, set the property values
      var oldProperties = {};
      var newProperties = {};
      Object.keys(SimpleLoan.defaultSimpleLoan).forEach(function (key) {
        if (loanData.hasOwnProperty(key) && loanData[key] !== _this3["_".concat(key)]) {
          oldProperties[key] = _this3["_".concat(key)];
          _this3["_".concat(key)] = loanData[key];
          newProperties[key] = _this3["_".concat(key)];
        }
      });

      // Emit a [propertiesChanged] event
      if (Object.keys(newProperties).length > 0) {
        this.emit('propertiesChanged', {
          'timestamp': dayjs_min_default()().format("yyyy-MM-ddTHH:mm:ss.SSSZ"),
          'oldProperties': oldProperties,
          'newProperties': newProperties
        });
      }
    }

    /**
     * Calculates the loan's capital.
     * @returns {number} The loan's borrowed capital.
     * @method
     */
  }, {
    key: "calcCapital",
    value: function calcCapital() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's duration in periods.
     * @returns {number} The loan's duration in periods.
     * @method
     */
  }, {
    key: "calcDurationPeriods",
    value: function calcDurationPeriods() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's interest rate.
     * @returns {number} The loan's interest rate.
     * @method
     */
  }, {
    key: "calcInterestRate",
    value: function calcInterestRate() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's periodic repayment amount.
     * @returns {number} The periodic repayment amount of the loan.
     * @method
     */
  }, {
    key: "calcRepayment",
    value: function calcRepayment() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's total repayments amount.
     * @returns {number} The total repayments amount of the loan.
     * @method
     */
  }, {
    key: "calcTotalRepayments",
    value: function calcTotalRepayments() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's total interests amount.
     * @returns {number} The total interests amount of the loan.
     * @method
     */
  }, {
    key: "calcTotalInterests",
    value: function calcTotalInterests() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's repayment amount at one specific period.
     * @returns {number} The repayment amount at one specific period of the loan.
     * @method
     */
  }, {
    key: "calcRepaymentAtPeriod",
    value: function calcRepaymentAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's principal amount at one specific period.
     * @returns {number} The principal amount at one specific period of the loan.
     * @method
     */
  }, {
    key: "calcPrincipalAtPeriod",
    value: function calcPrincipalAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's interests amount at one specific period.
     * @returns {number} The interests amount at one specific period of the loan.
     * @method
     */
  }, {
    key: "calcInterestsAtPeriod",
    value: function calcInterestsAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's remaining capital amount at one specific period.
     * @returns {number} The remaining capital amount at one specific period of the loan.
     * @method
     */
  }, {
    key: "calcRemainingCapitalAtPeriod",
    value: function calcRemainingCapitalAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's total remaining repayment amount.
     * @returns {number} The total remaining repayment amount of the loan.
     * @method
     */
  }, {
    key: "calcRemainingRepaymentsAmountAtPeriod",
    value: function calcRemainingRepaymentsAmountAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Calculates the loan's total remaining repayment number.
     * @returns {number} The total remaining repayment number of the loan.
     * @method
     */
  }, {
    key: "calcRemainingRepaymentsNumberAtPeriod",
    value: function calcRemainingRepaymentsNumberAtPeriod() {
      // Placeholder implementation
    }

    /**
     * Serialize a [SimpleLoan] instance into a JSON object (for DB storage)
     * @returns {number} A JSON object (for DB storage), serialization of the [SimpleLoan] instance.
     * @method
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      // Placeholder implementation
    }

    /**
     * Deserialize a JSON object (from DB storage) into a [SimpleLoan] instance.
     * @returns {number} A [SimpleLoan] instance, deserialization of a JSON object (from DB storage).
     * @method
     */
  }, {
    key: "fromJSON",
    value: function fromJSON() {
      // Placeholder implementation
    }

    /** 
     * ==========================================================================
     *  EVENTS
     * ==========================================================================
     */

    /**
     * An event raised when one [SimpleLoan] property has been changed.
     * @event SimpleLoan#propertyChanged
     * @type {object}
     * @property {string} timestamp - The date and time the change has been made.
     * @property {string} propertyName - The name of the property that changed.
     * @property {*} oldValue - The previous value of the property, before change.
     * @property {*} newValue - The new value of the property, after change.
     */

    /**
     * An event raised when multiple [SimpleLoan] properties have been changed simultaneously with the [setloanData] method.
     * @event SimpleLoan#propertiesChanged
     * @type {object}
     * @property {string} timestamp - The date and time the changes have been made.
     * @property {object} oldProperties - An object with previous properties values, before change.
     * @property {object} newProperties - An object with new properties values, after change.
     */

    /**
     * An event raised when [SimpleLoan] has been calculated with the [calculateLoan] method.
     * @event SimpleLoan#calculated
     * @type {object}
     * @property {string} timestamp - The date and time the calculation has been made.
     * @property {*} calculationMode - The calculation mode that has been applied.
     */

    /** 
     * ==========================================================================
     *  PRIVATE METHODS
     * ==========================================================================
     */

    /**
     * Adjust [releaseDate] of the loan's.
     * @method
     * @private
     */
  }, {
    key: "_adjustReleaseDate",
    value: function _adjustReleaseDate() {
      this._releaseDate = dayjs_min_default()(this._beginDate).subtract(1, "months").format('YYYY-MM-01T08:00:00Z');
    }

    /**
     * Adjust [beginDate] of the loan's.
     * @method
     * @private
     */
  }, {
    key: "_adjustBeginDate",
    value: function _adjustBeginDate() {
      this._beginDate = dayjs_min_default()(this._releaseDate).add(1, "months").format('YYYY-MM-01T08:00:00Z');
      this._adjustEndDate();
    }

    /**
     * Adjust [endDate] of the loan's.
     * @method
     * @private
     */
  }, {
    key: "_adjustEndDate",
    value: function _adjustEndDate() {
      this._endDate = dayjs_min_default()(this._beginDate).add(this._durationPeriods, "months").format('YYYY-MM-01T08:00:00Z');
    }

    /**
     * Adjust [durationPeriods] of the loan's.
     * @method
     * @private
     */
  }, {
    key: "_adjustDurationPeriods",
    value: function _adjustDurationPeriods() {
      this._durationPeriods = dayjs_min_default()(this._endDate).diff(this._beginDate, "month");
      this._durationTime = this._durationPeriods;
    }

    /**
     * Validates and sets the property value if valid, otherwise throws an error.
     * @param {string} propertyName - The name of the property to validate and set.
     * @param {*} value - The value to set for the property.
     * @fires SimpleLoan#propertyChanged - Fires the [propertyChanged] event if property value changed
     * @method
     * @private
     */
  }, {
    key: "_validateAndSetProperty",
    value: function _validateAndSetProperty(propertyName, propertyValue) {
      var validationResult = this._validateProperty(propertyName, propertyValue);
      if (validationResult === true) {
        // Check if the new value is different from the current value
        // If true, update the property and raise event
        var oldValue = this["_".concat(propertyName)];
        if (oldValue !== propertyValue) {
          // Update the property value
          this["_".concat(propertyName)] = propertyValue;
          // Emit a [propertyChanged] event
          this.emit('propertyChanged', {
            timestamp: dayjs_min_default()().format("yyyy-MM-ddTHH:mm:ss.SSSZ"),
            propertyName: propertyName,
            oldValue: oldValue,
            newValue: propertyValue
          });
        }
      } else {
        throw new Error("Invalid property [".concat(validationResult.propertyName, "] value [").concat(validationResult.propertyValue, "]:\n").concat(validationResult.message));
      }
    }

    /**
     * Validates a property's value.
     * @param {string} propertyName - The name of the property to validate.
     * @param {*} value - The value of the property to validate.
     * @returns {Object|null} An error object if validation fails, or null if validation succeeds.
     * @method
     * @private
     */
  }, {
    key: "_validateProperty",
    value: function _validateProperty(propertyName, propertyValue) {
      var isValid = true;
      var message = '';
      var options = null;
      switch (propertyName) {
        case 'id':
          if (!helpers_validation.isInteger(propertyValue) || propertyValue < 1) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive integer >= 1.");
          }
          break;
        case 'uuid':
          if (!helpers_validation.isUUID(propertyValue)) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") is not valid UUID.");
          }
          break;
        case 'title':
          if (!helpers_validation.isString(propertyValue) || !propertyValue.trim()) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a non-empty string.");
          }
          break;
        case 'description':
          break;
        case 'destination':
          options = ["realEstate", "car", "consumer", "student", "business", "other"];
          if (!options.includes(propertyValue)) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a non empty string, either \"realEstate\", \"car\", \"consumer\", \"student\", \"business\" or \"other\".");
          }
          break;
        case 'destinationOther':
          break;
        case 'active':
          if (!helpers_validation.isBoolean(propertyValue)) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a boolean.");
          }
          break;
        case 'calculationMode':
          options = ["capital", "duration", "interest", "repayment"];
          if (!options.includes(propertyValue)) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a non empty string, either \"capital\", \"duration\", \"interest\" or \"repayment\".");
          }
          break;
        case 'capital':
          if (!helpers_validation.isInteger(propertyValue) || propertyValue < 100 || propertyValue > 1000000000) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive integer between 100 and 1,000,000,000.");
          }
          break;
        case 'releaseDate':
          if (!helpers_validation.isDate(propertyValue) || !dayjs_min_default()(propertyValue).isValid() || dayjs_min_default()(propertyValue).isBefore(dayjs_min_default()('1900-01-01')) || dayjs_min_default()(propertyValue).isAfter(dayjs_min_default()('2100-12-12'))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].");
          }
          if (dayjs_min_default()(propertyValue).isAfter(dayjs_min_default()(this.beginDate))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be before [beginDate].");
          }
          break;
        case 'beginDate':
          if (!helpers_validation.isDate(propertyValue) || !dayjs_min_default()(propertyValue).isValid() || dayjs_min_default()(propertyValue).isBefore(dayjs_min_default()('1900-01-01').add(1, 'month')) || dayjs_min_default()(propertyValue).isAfter(dayjs_min_default()('2100-12-12'))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].");
          }
          if (dayjs_min_default()(propertyValue).isBefore(dayjs_min_default()(this.releaseDate)) || dayjs_min_default()(propertyValue).isAfter(dayjs_min_default()(this.endDate))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be after [releaseDate] (").concat(dayjs_min_default()(this.releaseDate), ") and before [endDate] (").concat(dayjs_min_default()(this.endDate), ").");
          }
          break;
        case 'endDate':
          if (!helpers_validation.isDate(propertyValue) || !dayjs_min_default()(propertyValue).isValid() || dayjs_min_default()(propertyValue).isBefore(dayjs_min_default()('1900-01-01')) || dayjs_min_default()(propertyValue).isAfter(dayjs_min_default()('2100-12-12'))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].");
          }
          if (dayjs_min_default()(propertyValue).isBefore(dayjs_min_default()(this.beginDate))) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") (").concat(propertyValue, ") must be after [beginDate] (").concat(dayjs_min_default()(this.beginDate), ").");
          }
          break;
        case 'durationPeriods':
          if (!helpers_validation.isInteger(propertyValue) || propertyValue < 1 || propertyValue > 2400) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive integer between 1 and 2400 months.");
          }
          break;
        case 'durationTime':
          if (!helpers_validation.isInteger(propertyValue) || propertyValue < 1 || propertyValue > 2400) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive integer between 1 and 2400 months.");
          }
          break;
        case 'interestRate':
          if (!helpers_validation.isNumber(propertyValue) || propertyValue < 0 || propertyValue > 1) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive decimal number between 0 and 1.");
          }
          break;
        case 'repayment':
          if (!helpers_validation.isNumber(propertyValue) || propertyValue < 1 || propertyValue > this._capital) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a positive decimal number between 1 and [capital] (").concat(this._capital, ").");
          }
          break;
        case 'lender':
        case 'lenderContact':
        case 'lenderAddress':
        case 'lenderContactPhone':
        case 'lenderContactEmail':
        case 'lenderContractRef':
        case 'lenderContractDate':
          break;
        case 'createdAt':
        case 'modifiedAt':
          if (!helpers_validation.isDate(propertyValue) || !dayjs_min_default()(propertyValue).isValid()) {
            isValid = false;
            message = "[".concat(propertyName, "] (").concat(propertyValue, ") must be a valid ISO 8601 date string.");
          }
          break;
        default:
          isValid = false;
          message = "Validation for [".concat(propertyName, "] is not implemented.");
      }
      return isValid ? true : {
        propertyName: propertyName,
        propertyValue: propertyValue,
        message: message
      };
    }
  }]);
  return SimpleLoan;
}(eventEmitter);
/**
 * Default values for a simple loan.
 */
_defineProperty(simpleLoan_SimpleLoan, "defaultSimpleLoan", {
  id: null,
  // Auto-incremented from DB
  uuid: esm_browser_v4(),
  title: "My Simple Loan",
  description: "My Simple Loan",
  destination: "realEstate",
  destinationOther: "",
  active: false,
  calculationMode: "repayment",
  capital: 100000,
  releaseDate: dayjs_min_default()().add(1, 'month').format('YYYY-MM-01T08:00:00Z'),
  // 1st of next month
  beginDate: dayjs_min_default()().add(2, 'month').format('YYYY-MM-01T08:00:00Z'),
  // 1st of 1 month after next month
  endDate: dayjs_min_default()().add(121, 'month').format('YYYY-MM-01T08:00:00Z'),
  // beginDate + 120 months
  durationPeriods: 120,
  durationTime: 120,
  interestRate: 0.035,
  repayment: 1000,
  lender: "",
  lenderContact: "",
  lenderAddress: "",
  lenderContactPhone: "",
  lenderContactEmail: "",
  lenderContractRef: "",
  lenderContractDate: null,
  createdAt: dayjs_min_default()().format('YYYY-MM-DDTHH:mm:ssZ'),
  modifiedAt: dayjs_min_default()().format('YYYY-MM-DDTHH:mm:ssZ')
});
/* harmony default export */ const simpleLoan = ((/* unused pure expression or super */ null && (simpleLoan_SimpleLoan)));
;// CONCATENATED MODULE: ./src/common/calcBeginDate.js
function calcBeginDate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcBeginDate = (calcBeginDate);
;// CONCATENATED MODULE: ./src/common/calcEndDate.js
function calcEndDate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcEndDate = (calcEndDate);
;// CONCATENATED MODULE: ./src/common/calcDurationPeriods.js
function calcDurationPeriods_calcDurationPeriods() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcDurationPeriods = (calcDurationPeriods_calcDurationPeriods);
;// CONCATENATED MODULE: ./src/common/calcDurationTime.js
function calcDurationTime() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcDurationTime = (calcDurationTime);
;// CONCATENATED MODULE: ./src/common/calcPresentValueCompoundInterest.js
function calcPresentValueCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcPresentValueCompoundInterest = (calcPresentValueCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcPresentValueSimpleInterest.js
function calcPresentValueSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcPresentValueSimpleInterest = (calcPresentValueSimpleInterest);
;// CONCATENATED MODULE: ./src/common/calcFutureValueCompoundInterest.js
function calcFutureValueCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcFutureValueCompoundInterest = (calcFutureValueCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcFutureValueSimpleInterest.js
function calcFutureValueSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcFutureValueSimpleInterest = (calcFutureValueSimpleInterest);
;// CONCATENATED MODULE: ./src/common/calcInterestRateByPeriod.js
function calcInterestRateByPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateByPeriod = (calcInterestRateByPeriod);
;// CONCATENATED MODULE: ./src/common/calcInterestRateCompoundInterest.js
function calcInterestRateCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateCompoundInterest = (calcInterestRateCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcInterestRateSimpleInterest.js
function calcInterestRateSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateSimpleInterest = (calcInterestRateSimpleInterest);
;// CONCATENATED MODULE: ./src/common/index.js
// src/common/index.js

// Import each function from its file












// Optionally, provide named exports for individual imports


// Group all functions under the "common" namespace
var common = {
  calcBeginDate: common_calcBeginDate,
  calcEndDate: common_calcEndDate,
  calcDurationPeriods: common_calcDurationPeriods,
  calcDurationTime: common_calcDurationTime,
  calcPresentValueCompoundInterest: common_calcPresentValueCompoundInterest,
  calcPresentValueSimpleInterest: common_calcPresentValueSimpleInterest,
  calcFutureValueCompoundInterest: common_calcFutureValueCompoundInterest,
  calcFutureValueSimpleInterest: common_calcFutureValueSimpleInterest,
  calcInterestRateByPeriod: common_calcInterestRateByPeriod,
  calcInterestRateCompoundInterest: common_calcInterestRateCompoundInterest,
  calcInterestRateSimpleInterest: common_calcInterestRateSimpleInterest
};

// Using ES6 default export for the common namespace
/* harmony default export */ const src_common = ((/* unused pure expression or super */ null && (common)));
;// CONCATENATED MODULE: ./src/simple/calcCapital.js
function calcCapital_calcCapital() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcCapital = (calcCapital_calcCapital);
;// CONCATENATED MODULE: ./src/simple/calcInterestRate.js
function calcInterestRate_calcInterestRate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcInterestRate = (calcInterestRate_calcInterestRate);
;// CONCATENATED MODULE: ./src/simple/calcRepayment.js
function calcRepayment_calcRepayment() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRepayment = (calcRepayment_calcRepayment);
;// CONCATENATED MODULE: ./src/simple/calcTotalRepayments.js
function calcTotalRepayments() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcTotalRepayments = (calcTotalRepayments);
;// CONCATENATED MODULE: ./src/simple/calcTotalInterests.js
function calcTotalInterests() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcTotalInterests = (calcTotalInterests);
;// CONCATENATED MODULE: ./src/simple/calcRepaymentAtPeriod.js
function calcRepaymentAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRepaymentAtPeriod = (calcRepaymentAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcPrincipalAtPeriod.js
function calcPrincipalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcPrincipalAtPeriod = (calcPrincipalAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcInterestsAtPeriod.js
function calcInterestsAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcInterestsAtPeriod = (calcInterestsAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingCapitalAtPeriod.js
function calcRemainingCapitalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingCapitalAtPeriod = (calcRemainingCapitalAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingRepaymentsAmountAtPeriod.js
function calcRemainingRepaymentsAmountAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingRepaymentsAmountAtPeriod = (calcRemainingRepaymentsAmountAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingRepaymentsNumberAtPeriod.js
function calcRemainingRepaymentsNumberAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingRepaymentsNumberAtPeriod = (calcRemainingRepaymentsNumberAtPeriod);
;// CONCATENATED MODULE: ./src/simple/index.js
// src/simple/index.js

// Import each function from its respective file












// Optionally, provide named exports for individual imports


// Export all functions under the "simple" namespace
var simple = {
  calcCapital: simple_calcCapital,
  calcInterestRate: simple_calcInterestRate,
  calcRepayment: simple_calcRepayment,
  calcTotalRepayments: simple_calcTotalRepayments,
  calcTotalInterests: simple_calcTotalInterests,
  calcRepaymentAtPeriod: simple_calcRepaymentAtPeriod,
  calcPrincipalAtPeriod: simple_calcPrincipalAtPeriod,
  calcInterestsAtPeriod: simple_calcInterestsAtPeriod,
  calcRemainingCapitalAtPeriod: simple_calcRemainingCapitalAtPeriod,
  calcRemainingRepaymentsAmountAtPeriod: simple_calcRemainingRepaymentsAmountAtPeriod,
  calcRemainingRepaymentsNumberAtPeriod: simple_calcRemainingRepaymentsNumberAtPeriod
};

// Using ES6 default export for the simple namespace
/* harmony default export */ const src_simple = ((/* unused pure expression or super */ null && (simple)));
;// CONCATENATED MODULE: ./src/simpleLoan/index.js
// src/simpleLoan/index.js

// Import the SimpleLoan class


// Import common functions


// Import simple functions


// Re-export common and simple functions for external use


// Export SimpleLoan class as the default export
/* harmony default export */ const src_simpleLoan = ((/* unused pure expression or super */ null && (SimpleLoan)));
;// CONCATENATED MODULE: ./src/index-light.js
// src/index-light.js

// Importing namespaces and classes from simpleLoan module



// Exporting all the imported modules, classes, and namespaces for external use

})();

/******/ })()
;
//# sourceMappingURL=powerLoan-prod-light.js.map