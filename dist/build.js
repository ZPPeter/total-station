/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/micro0/Sites/total-station";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _app = __webpack_require__(4);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _routerMap = __webpack_require__(17);
	
	var _routerMap2 = _interopRequireDefault(_routerMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  加载vue路由
	_vue2.default.use(_vueRouter2.default);
	
	var router = {};
	
	//  创建路由对象并配置
	router = new _vueRouter2.default({
	    // history: true
	});
	
	//  导入路由Map
	router.map(_routerMap2.default);
	
	router.start(_app2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.18
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} doNotObserve
	 */
	
	function defineReactive(obj, key, val, doNotObserve) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  // if doNotObserve is true, only use the child value observer
	  // if it already exists, and do not attempt to create it.
	  // this allows freezing a large object from the root and
	  // avoid unnecessary observation inside v-for fragments.
	  var childOb = doNotObserve ? isObject(val) && val.__ob__ : observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = doNotObserve ? isObject(newVal) && newVal.__ob__ : observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop.options);
	  }
	  if (assertProp(prop, value)) {
	    defineReactive(vm, key, value, true /* doNotObserve */);
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = Object.create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDepIds = Object.create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value, true /* do not observe */);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    // #2366 or custom terminal directive
	    def: def || resolveAsset(options, 'directives', dirName)
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.');
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains$1(item.$key, search) || contains$1(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains$1(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains$1(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains$1(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains$1(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.18';
	
	// devtools global hook
	/* istanbul ignore next */
	if (config.devtools) {
	  if (devtools) {
	    devtools.emit('init', Vue);
	  } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.11
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root) {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this._stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(5)
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.main {\n\tmargin: 0 auto;\n\tpadding: 0;\n\tbackground: rgba(0, 0, 0, 0) url(" + __webpack_require__(8) + ") no-repeat center;\n\tbackground-size: 100%;\n\tposition: relative;\n}\n\n.left-view {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: 10%;\n\tbackground: red;\n\tborder-radius: 1%;\n}\n\n.right-view {\n\tposition: absolute;\n\ttop: 14%;\n\tright: 9%;\n}\n", "", {"version":3,"sources":["/./src/app.vue?2edfc2fa"],"names":[],"mappings":";AA6KA;CACA,eAAA;CACA,WAAA;CACA,4EAAA;CACA,sBAAA;CACA,mBAAA;CACA;;AAEA;CACA,mBAAA;CACA,SAAA;CACA,UAAA;CACA,gBAAA;CACA,kBAAA;CACA;;AAEA;CACA,mBAAA;CACA,SAAA;CACA,UAAA;CACA","file":"app.vue","sourcesContent":["<template>\n\t<!-- App 页面基本框架 -->\n\t<div class=\"main\" :style=\"mainStyle\">\n\t\t<!-- App 左方界面区 start -->\n\t\t<div class=\"left-view\" :style=\"leftViewStyle\">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t\t<!-- App 左方界面区 end -->\n\t\t<!-- App 右方按键区 start -->\n\t\t<div class=\"right-view\" :style=\"rightViewStyle\">\n\t\t\t<keyboard :warp-style=\"rightViewStyle\"></keyboard>\n\t\t</div>\n\t\t<!-- App 右方按键区 end -->\n\t\t<input>\n\t</div>\n</template>\n\n<script>\nimport keyboard from \"./components/keyboard.vue\";\n\nvar\tproportion = {},\n\tmainStyle = {},\n\trightViewStyle = {},\n\tleftViewStyle = {};\n\n//  页面各个区域所占大小比例\nproportion = {\n\t//  页面基本的长宽比 mainWidth / mainHeight\n\tbaseSize: 1.6,\n\t//  左方界面区所占大小比例\n\tleftView: {\n\t\twidth: 0.5,\n\t\theight: 0.61\n\t},\n\t//  右方按键区所占大小比例\n\trightView: {\n\t\twidth: 0.26,\n\t\theight: 0.75\n\t}\n}\n\n// 计算基本页面大小\nmainStyle = ((sizeProportion) => {\n\tvar style = {},\n\t\tclientWidth = document.documentElement.clientWidth,\n\t\tclientHeight = document.documentElement.clientHeight;\n\tif (clientWidth / sizeProportion <= clientHeight) {\n\t\tstyle = {\n\t\t\twidth: clientWidth + \"px\",\n\t\t\theight: clientWidth / sizeProportion + \"px\"\n\t\t};\n\t} else {\n\t\tstyle = {\n\t\t\twidth: clientHeight * sizeProportion + \"px\",\n\t\t\theight: clientHeight + \"px\"\n\t\t};\n\t}\n\n\treturn style;\n\n})(proportion.baseSize);\t\n\n//  计算左方界面去大小\nleftViewStyle = ((mainStyle, {width: widthProportion, height: heightProportion}) => {\n\treturn {\n\t\twidth: parseInt(mainStyle.width) * widthProportion + \"px\",\n\t\theight: parseInt(mainStyle.height) * heightProportion + \"px\"\n\t}\n})(mainStyle, proportion.leftView);\n\n// 计算右方键盘区大小\nrightViewStyle = ((mainStyle, {width: widthProportion, height: heightProportion}) => {\n\treturn {\n\t\twidth: parseInt(mainStyle.width) * widthProportion + \"px\",\n\t\theight: parseInt(mainStyle.height) * heightProportion + \"px\"\n\t}\n})(mainStyle, proportion.rightView);\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tmainStyle: mainStyle,\n\t\t\tleftViewStyle: leftViewStyle,\n\t\t\trightViewStyle: rightViewStyle,\n\t\t\tisPower: false\n\t\t};\n\t},\n\tcomponents: {\n\t\tkeyboard: keyboard\n\t},\n\tevents: {\n\t\tkeyboardClicked: function({keyType, keyValue, isReplace, sourceTarget}) {\n\t\t\tvar activeElement = document.activeElement,\n\t\t\t\tnodeName = activeElement.nodeName.toUpperCase(),\n\t\t\t\tvalue = activeElement.value;\n\t\t\tif (keyType === \"CHA\" || keyType === \"NUM\"){\n\t\t\t\tif (nodeName === \"INPUT\" || nodeName === \"TEXTAREA\") {\n\t\t\t\t\tif (isReplace) {\n\t\t\t\t\t\tvalue = value.slice(0, value.length - 1) + keyValue;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvalue += keyValue;\n\t\t\t\t\t}\n\n\t\t\t\t\tactiveElement.value = value;\n\t\t\t\t}\n\t\t\t} else if (keyType === \"FUN\") {\n\t\t\t\tswitch (keyValue) {\n\t\t\t\t\tcase \"Power\":\n\t\t\t\t\t\tif (!this.isPower) {\n\t\t\t\t\t\t\tlocation.href += \"home/\";\n\t\t\t\t\t\t\tthis.isPower = !this.isPower;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Start\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"React\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Func\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Ctrl\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Alt\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Del\":\n\t\t\t\t\t\tif (nodeName === \"INPUT\" || nodeName === \"TEXTAREA\") {\n\t\t\t\t\t\t\tactiveElement.value = \"\";\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Tab\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"B.S\":\n\t\t\t\t\t\tif (nodeName === \"INPUT\" || nodeName === \"TEXTAREA\") {\n\t\t\t\t\t\t\tactiveElement.value = value.slice(0, value.length - 1);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"ESC\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"ENT\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Up\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Down\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Left\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"Right\":\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\n\t\t\t\t}\n\t\t\t} \n\t\t\t\n\t\t}\n\t}\n}\n</script>\n\n<style>\n\t.main {\n\t\tmargin: 0 auto;\n\t\tpadding: 0;\n\t\tbackground: rgba(0, 0, 0, 0) url(./static/images/background.png) no-repeat center;\n\t\tbackground-size: 100%;\n\t\tposition: relative;\n\t}\n\n\t.left-view {\n\t\tposition: absolute;\n\t\ttop: 20%;\n\t\tleft: 10%;\n\t\tbackground: red;\n\t\tborder-radius: 1%;\n\t}\n\n\t.right-view {\n\t\tposition: absolute;\n\t\ttop: 14%;\n\t\tright: 9%;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAx8AAAHjCAYAAABCa6LuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAZ61SURBVHja7J13fN3U+YefI+lu7xknHkmcvScJYSbsvctoKaNQRhmFlhbKKKuTVQq0hVKg0DJ+QFlllJlBNllkLzvTseNt330lnd8fsp2YkMQJTmzH5+FzsSPpylc6utL7Pe8SaanJ7AkJCEDKpp/IXTcSomljCRINIYYLwTFSyt4gMkFmArlNL2/TbhUKhUKhUCgUCkXHIQATqAC2A1VADVAGzALmCCFistnOb1IDzba/tB2BoAnN0QhSYhjGHv+g0U4f3ADGgjgLIY8HOVrK5n0rnaFQKBQKhUKhUHRi8nazfA3wuYD3JEwHgt9Z7XxHz4cL+D5wCzBCjZtCoVAoFAqFQnFIUgb8DfgLQlTD/nk+dK/Xs3eF8o2fTb9eALwAXIcTTqVQKBQKhUKhUCgOTZKBycAPAIEQy5DEESDEDpWgadoed6Ltxx8+AicG7P+AMWocFAqFQqFQKBSKbkNP4GGkXAr8QOzjm/fV83EV8BrQW513hUKhUCgUCoWi25ImBOcCWUKITwAb2tfzcZ9E/h3wqHOtUCgUCoVCoVAogBuklK8DKW3ZuC3iwyulfA7kPercKhQKhUKhUCgUitbIs5HyE6Bob1uK1JQ9VrsyQL4FnK5OqkKhUCgUCoVCodgDJZqmTQaxaXcbaJLd/4eUv1XCQ6FQKBQKhUKhULSBvrZtPy+l9O1OX+g+nxchROsXAiH4MfA7dQ4VCoVCoVAoFApFG+kDsqeUvCOd1h+tXrrH7dp1KXIK8BLt1wFdoVAoFAqFQqFQdA9GI4kgmPnNFSIlOemby3oIwWxUOV2FQqFQKBQKhUKxf5hCaCch+HznhZoQsOMlEEL8UgkPhUKhUCgOHaSUSCnViVAoFAcTQ0r7Qcu0NMu0aH7pHrd7xyaCwQL+CrjV+VIoFAqFomtimiaRSIRoNI5lmdi2jWVZxGJxotEYpplA07S9NgNTKBSK70iBEKIEIZa05JZ/o9Tuv0B+X50nhUKhUCi6FlJKwuEItm3Tp09vJh1xBCNHjGTU6NGkp2cAUF1dxaJFi1i69GtmfvklGzduQtc1fD4fQgh1EhUKxYFguRDicKARQKSltoiPo6SU0wB191EoFAqFoosghCAajWKaFhd87wIuv/wKCgsKqdhewapVq1i3di21tbUIIUhLT6e4uJh+xf3IzsmmrKyM5/7xLG+99RZutwuPx6vCsxQKxYG4T/0MeBRaNxl8BeRF6vQoFAqFQtF1aGwMMmjQIP785ydIz8jg+ef/wQfvv09J6camhz5oTdOKdnNRS6CwoBdnn3MOP/rR1WzetIlbb72FdevWkbxrIRqFQqH4rqwAxgCxZvGRCnIZkK/OjUKhUCgUXYOGhiAnnXQCTzz5F1566Z889NBDRCIx+hf34cyzz2bcuPEUFRURCAQACIVCbNm8maXLlvHG6//HylVrCAT83HnnnVx00cX87Naf8vbb75KSogSIQqFod44EZjaLj5NAfqTOiUKhUCgUnR8hHOFx6qmn8tvf/Y4bfvITps/4ksGDB/Lb3/yWk04+BZ/Pt8d9xGIx3nvvXe64/XbWrS9h8rFH85e//o2HH36If/zjeVKVAFEoFO3Lb4E7m8tcnKrOh0KhUCgUXYNIJMrIkSO45ppruejC7zF9xpfcdOMNzJkzj7PPOXevwgPA4/Fw/vkXMG/+V1x7zY/5Yup0TjrxRE4/7XROPulEwuGwOtEKhaI9ORZA93rcepMS6aHOiUKhUCgUnRvbtvF6fdx9z9387ne/ZdmyFTz44AP89ne/x+Px7PP+fD4fp59+BlmZGbz+xht8+eWX3HTTTSxYuIBgMKjK8SoUivYiVyL/I1KSA6OEEAtRVa4UCoVCoej0hMNhLr30h5SVlfHR/z7mvnt/zT2/vvdbt62trWXmzJmEQiEAkpOTOfLII0lJSfnW7Z9//jmuvPJHjBwxnKFDh/Cf//xnvwSNQqFQ7IarDCFEbyU8FAqFQqHo/JimSb9+/UjPSOe551/gR1de8a3CY+3atTz66KO8/vrrVFdXt1qXnZ3NxRdfzM0330zfvn1brbviiispLSnhgQd/Q0FBPnl5eVRWVqLrujr5CoWiPegjUlOSfgw8rc6FQqFQKBSdm0gkwqmnnsb69evYsmULc+fNp3//Aa22mTp1Kueffz7V1dUUFBTwve99j8LCQgBKSkp4/fXXKSsrIysri5deeomTTz651ftrqquZNOlwamqqyc3NpbS0FMMw1MlXKBTtwb80VK6HQqFQKBSdHiklaWlpJCcns3TZCn542eW7CI+PPvqIU089lbq6Oh5//HHWrl3Lww8/zE033cRNN93En/70J9auXctjjz1GQ0MDp512Gs8991yrfWRkZnLd9ddTWVWDy+3G5/OpxoMKhaK96CVSU5L+DlylzoVCoVAoFJ0Xy7LIycmlV69ezJ41i6nTZ3DEEUe0rG9oaGDMmDGUlJTw9ttvc+aZZ+5xf9OnT+fMM8/EMAyWLl1KXl5ey7oNGzYw4bDxuFwGiUSCaDSKECpCW6FQfGeWagL6dfSnkFJimiaJRALbttWwKBQKhULxLWiaYN26tQwcNJDRo0e3WvfMM8+wfv16br311r0KD4Cjjz6a22+/nerqal566aVW63r37s24ceMoLy9XwkOhOETpII9muiZhQEeJjVAoTENDENu2yc/Pp0+fvvh8PiKRCMFgkFgsply9CoVCoVA0Yds2wWCQ4cNH4Pf7W5ZHo1GefPJJ0tLS+OlPf9rm/V166aX4/X5efPHFXSb/RowciW2jhIdCcQiJjUQiQSgUIhqNYhgGtm0TCoUIhYJEo1FM0zzQtrf3oGeQhUIhvF4vRUVFjBo1mvGHHUZBfj5ut4eEZbJl82ZCoSAbN2xk+fJlLF++nGg0itvtVleNQqFQKLotuq5TXV1NYzDM8OHDW62rr69n8+bNnHjiieTn57d5n7169WL48OGsWrWKYDDYqgTv4MGDUS0+FIquj2VZxGIxkpKSKCwqYvTo0QwZMhSkRNM1YrEYGzduZP369WwrK2P79u00NDQSCPgPyOTDQRMf0WgM27b4/vd/wBlnnEF9fT2VlZXMmjWTr5csYd36EizLxu0yKCoqpE+fPvQtLia3Rw/Wr1vHypUrcblcqtyfQqFQKLo1AkhPT2+1rLa2Ftu2ycjI2Of95eTkMH/+fMLhcCvxkZyUrLweCkUXJ5FIkJeXxwknnkhmZibxWJySkvW88PzzrF+/juTkZHr37k2vXvkMGjiICYdNoHfv3qxavYpnnn66qampt2uJDyklDY0hxoweyR2/upNEIsED99/PkqXLAPB5PQwaNJDrr7+OwsIitm7Zwtx5c1mwYAHVNXUE/D4mTz6WYcOHM+2LqVRsr8Dn86mrSaFQKBTdlm8GRTSHTMVisX3eVzQaBZzZUYVCcYjcI6RESklOTg65ubnMnTuXFctXEIsn8HhcDB06lBtvvInKykoWL17EjOnTaGgMIYHcnCzuuutu/v3yK9z761/z9dJlpCT7EaJ9XKEHVHzYto1pmtxxxy857rgT+Ntfn+KNN98iLS2V6669hpNPPpmhw4ZTWFiIy+Vq9b7q6iqWLV3KPffczX/f/5BBAwdw4UUXsmrVaqZPnwoINSOjUCgUim5J+bZtrf7dr18/iouLmTp1KrW1tbt4RnZHWVkZ06dPZ9SoUfTq1avVuk2bNmJbKu9SoeiKwkPX9SZPR4zZs+fSp09vLrjgAk448UQmTpxInz59W2zvRDxOxfYKyrZu5auvvuIPf/wDN950M2eddQZ/+etfees//+GpJ59ENwwM47tHIB3QaM5gMMy9995Hn959Offcs3njzbc479xzmDNnDn/5698486yzKS4ubiU8ADRNIzs7h8lTjuOzz6fy6CMPs2XrVh7/8xO4XAaFhUVqhkahUCgU3RJdFyxbtqzVMrfbzamnnkp1dTUffvhhm/f10UcfEYvFOP3003dZN3XaVDQV6axQdDnhYRgG6enpVFZWUratnNvvuJ2ly5bz0r/+zQ9/eBkDBgxsZXu73G7y8ws4bMJErv/JDXz55UwuuvB7vPPOe5x37rmMHDmSf7/8CiDbpSqtSE1J2gr0bM8DFwLq6oNcccVlnHjiSVx88SUU5PfiiSef5Kyzzt6vfS5bupRbbvkpn372OWmpyaoKlkKhUCi6JYlEgp69ejF37vxWOR4LFixg3Lhx9O3bl3nz5pGZmbnH/WzdupXDDjuM6upqvvrqK4YNG9aybvv27UycMJ6KiopdJggVCkVnn6DQqa9voGevnvzlqb9y+hln7Nd+XnjheW77+c+pqq7hgw/eZ8mSJdxxx69ITUn6Lh+v6oB4PsLhCJMmTeS8887nhp9cT8Dv49XXXtut8EgkEgSDQUKhEOFw+FuFxbDhw/nk08+49pofU1/fqK4shUKhUHRLDMNg44YNfDljRqvlY8eO5d5776WkpIRrr72W2tra3e6jsrKS6667jrKyMh544IFWwgPggw/eZ+PGTUp4KBRdkMbGRqYcN4VpU6fvVnhEIhFCoVBLa4tv4/LLr+Cdd98jKeDjissv58wzz+TUU08mGAx+p8/X7p4P27bxeDw88/dnefCBB1i4aDH//ve/uOSS7++y7dq1a3nppZd45ZVXqK6ubsnhGD9+PNdeey3HH388SUmt1VV1dRVHHXkEJSUl7Z59r1AoFApFVyAcDnPsscfy0f8+QdupHm48Hue0007j008/JTc3l7vuuosTTjiBgoICpJRs2rSJjz76iAcffJCamhpOP/103nnnnVb7iEajnHD8ccybN1cVeFEouuC9Ydy48Xz2+Re7fH/j8TizZs3ib3/7G1988UVLTw+/389ZZ53Fj370I0aNGtXqfgDw978/w49/fA3HTZnMo489xqmnnExtbe3+Tk5Utbv4CIVCnHPOuQwfMYJ77vk1d991J/c/8OAu2913333ce++9gFMysF8/p9F6MBhk9erV2LbNoEGDePvttxk4cGCr97799lt874IL8Pm8KulcoVAoFN2SxsYgf/vb37j6x9e0Wh6JRHjsscf4wx/+QENDAwC5ubnYtk1lZWXLc/fOO+/khhtuwOPxtHr/Q3/8A7/45e3fNbRCoVAcZGzbRkrJO+++x5Qpx7VaV1lZyQUXXMC0adMA6Nu3L5mZmQgh2LJlC2VlZQD88Ic/5Nlnn91FWFx++Q/55z9f4q47f8XAQYP40ZVX4PXulx3e/uIjEonw5yee5Jmnn6a8fBuLFn9NTk5Oq23uuusufvOb39C3b19+9atfceaZZ5Kdnd2yfv78+Tz77LM888wz9OnTh/fff5/Bgwe32sfVV1/F88/9YxfPiEKhUCgU3YFEIkFycjLvvPseEyZM3GX9+vXrefvtt5kzZw6LFi1CCMG4ceOYMGEC55xzDkVFRbu8Z9rUqZx73jnEmrofKxSKrjUhcfnll/OP555vbe1XVXH22Wczc+ZMzjrrLG666SaOOuqoFoERDAb5+OOPeeihh5gzZw6XXnop//jHP1oJkOrqKo48YhIVFRXMnfcVl1/+QxZ89dX+RCG1r/hIJBIMGDiQm2/+KVdccSVX/ehK/v7sP1pt8/zzz3PllVcyaNAgPvzwQ3r37r3b/T300EP84he/YNCgQcydO7dV86P169dzxKSJhEIh1XhQoVAoFN0OIQThcJj8/Hzeefc9hg0bvtttTdME2KOgWLhwAWedeQaVlZUqrFmh6IIEg0H+/fIrXHjhRa2Wn3XWWbz77rtcc801/O1vf9vt+0OhEOeffz4fffQRt912G3/84x9brb/rrjv5zW9+y4cffsCGDaX85PqfkJy8z06A9k04j8ViHHXUUUybOhWA8y+4oNX6cDjM7373OzweD2+++eYehQfAbbfdxk033cSqVat46aWXWq3r27cv/fv3Jx6Pq6tNoVAoFN2O5ljtLVu2cMrJJ/Hhhx/sdlvDMPYoPKZO/YIzzziD7du3qzwPhaILYpkmOTk5TJx4+De+21N59913Oemkk/YoPAACgQCvvPIKxcXFPPXUU2zatKnV+pNPOhmAd999h8MPP4JAwLdfpXfbvdpVIBBgyZLFDBk8iKOPPqbVuhdffJG1a9dy0003MWTIkDbt77bbbiM5OZmHH36YxsYdVa6EEPTvPwDTVP0+FAqFQtG9BUhVVRXnnXcuN974EzZt2tjm91dXV3Pfvb/mnLPPoqqqEr/fr0rZKxRdkHgiQf/+/XcJp3zqqacAuOWWW9q0n7S0NG644QbC4TDPPvtsq3XDR4ygb58ipn7xBY88/BCmae2SnH7QxYeu66SkpBIKhcjOzt5l9uSLL74A4NJLL23zPvPz8znvvPPYsGEDa9asabWuX//+2OoeqVAoFIpuLkA8Hg+GrvPkk39h0qTD+fnPbmXRooUEg41Eo9FWs5PRaJRVq1byyCMPc8Skw7n3vvsxTROv16uEh0LRRUkkLA6fNKnVssrKSt5//32GDh3K8ccf3+Z9XXjhhfj9ft59991Wy1NTUznhhBNZuWoN//r3vxGatl+Fn9o1m8wwDNJS04hEIvgD/l3Wl5SUkJaW9q1JbntizJgxvPDCC2zatImxY8fuWD56DG6XjpRSVb1SKBQKRbdEazIAdF0nPS2F2poaHnn0MZ599u9kZ2cTCARISkomLS2VRMJk27YytmzZQl1dA16vm/S0lJZnqJTt08FYoVAcXHRdMG7c+FbLKioqiEQijBkzZp/yo/Py8hg0aBClpaU0NjaSnJzcsq53nz4ATJw4AbfLxbx583C73R0jPprbuQeSAsRiMVKSU1qtD4VCbNq0idzc3H2uUNWn6UDXrl3bWoGlpapkc4VCoVB0W2zbJi0tjdTUVADq6uowTZPUlCRs22br1q3ouo6maUQiEWh6VhsuFylN26SkpLS8v7a2lrq6uv0KpVAoFB2HlJL4N5oFNpfPHTBgwD7vr3fv3ixcuJCKiopW4kM2TU7cddfdfP7ZZ8yY8WXHiQ8hBKZpEmxsxOV2t8rPACcXpLCwkBUrVlBZWUlubm6b971kyRLASTLfmTVr1hCLxff5oBUKhUKhOBTQNI3a2lpqampansXNwkHTNNxuN5qu4/V40DRtl7CqPb1foVB0JfEBjd/oPN482V9aWrrP+9u6dSsejwe/3/8NQbMVcBwDtbW17E/gUbveYaLRKGXbttG7d2+WLVtKfV1dq/XHH3884XCYWbNm7dN+33vvPQzDYOLE1nXMV61apXI+FAqFopuzc9itEKLbheE2CwZtN/HXtmURDAZ3m8+xt/crFIrOjy2hvr6+1bJRo0ZRUFDAu+++S903bPI9sWzZMubOncuRRx5Jz56tu3GsW7eOjPRU0tLS2bx5035FILX79Ebl9u30K+7Hps1bWfONMKlTTjkFgD/+8Y+EQqE27e+VV15h7ty5HHfcceTn57dat6G0BF1N0CgUCkW3M7Z1XUfXdQzDaDGc1Yz9Hh726twoFIc0ugaLFy1qtczv93P22WdTVVXFE0880eZ9/e53vwPg/PPPb7W8oaGBdevWkZ2dg5Q2W7Zs2a9mpO16NzIMg9INpQwcOBCAxYtbn4Sjjz6aa6+9ljlz5nDdddftdX+zZ8/m6quvxufz8eCDD7Za19jYyIoVK3Zp/65QKBSKQxspJZZlYVkWpmliWRa2bWPbNlJKVbFJoVB0O7xeL1OnfsHGjRtaLf/lL39JcXEx99xzD6+99tpe9/Ob3/yGl19+mSlTpnDFFVe0WvfZZ5+ybn0pJ518MiuWr6Bk/fqOFx8ej4f58+YRDAbJykznySf+vIsL6PHHH2fKlCm89NJLHHPMMaxevfpbHyxPPfUUJ5xwAqFQiOeff55x48a12ualF//JsmXL8Xg86opTKBSKdjbuFQqFQtF1MAyD8vLtvPRi66bcvXr14tVXXyU5OZmLLrqIX/ziF07xiW+wfft2LrnkEu666y4GDBjAv/71r11s7Gf//gwAP/j+D3j+hecwLWu/QjVFakrSVqBnex18LBZj0KDBDB8+jJf+9TJ3330X99//QKttKisrue6663jzzTcJBAIcf/zxDB8+nMzMTEpLS5k+fTqLFy8mMzOTxx9/nO9///ut3l9VVcURkw5n06aNSnwoFIqDZpA3G+WHal6BlBKXy4Wu6y3lVpu9Car8qkKhUHRuEokE2dk5zPhyJgUFBa3WffHFF1x11VWUlJTQr18/pkyZwoABA4hEIqxYsYLPP/+ciooKJkyYwAsvvMCgQYNavX/q1KkcN2UyU6ZM4eFHHuHYY47Bssz9CemsanfxARCJRDj77LNZs2YNa9asYfqMLxk7dtwu27366qvcfvvtbNzYuhur2+3mzDPP5LHHHtslzwPgphtv4MknnyIlJUldaQqF4qAY5YZh4PV6EUIQi8WIx+OHpADZ+ZiUB0ShUCi6FvUNQX7605t57LE/7bKuoaGBe+65h2effXaX3OusrCx++ctf8tOf/nSXUKrK7duZPPkYlq9YxbvvvsM777zNP194nkBgv+zwAyM+bNvG5/Nxwgkn8sYbrzN58mTeevtdvF7vLtvGYjEqKyspKSmhqqqKPn36UFRURHp6+rc+2F968Z9cccUVBAJ+VZVDoVAcNDRNw2jKMbOa8gwUigMldhUKRdenI+xUKSWxWIwnnnyKq6/+8bdu09DQwObNm1m/fj1+v5++ffvSo0ePXcrqNnPJJRfxyiuvcf/995KdncP1113/XRwAB0Z8gOP6Kerdm3gsRknJBo455mieePJJhg0bvt/7/OSTj7nkkosJh0Iq0VyhUHSYUagmPhQ7BIJESpAA0m5eRGv5IHdrkAjEjmWiOaRPa1qmSt8qFF34LoFpJpomqkRLSeuD8Z02TRMp4elnnuEHP7j0O+3r3nt/zX333c95557Dj666iosu/B62bX+XJt8HTnwAWJbVcqKDwRBpaan87ne/5+ofX7NP+6moqOCBB+7juX/8AyGEEh4KhUKhaGcRAUiJbFnmiIpm4SBwxAEINCEQmuZ0DtcNDF3HMFzohgvD5ZT+NXQDWvpnOA9pl+E8u3TdQNN1hABjp2Wi6Xmp607Ig27oSnwoFF1XexCNRmhsqCUUbCQUChIJB4nHY1hNidrN3/UDJUDi8QRXXXUVD/7mt2RkZOzT+0tLS/j1r+/hpZf+zZjRo7j//vu59dZb2bhxw7dGMnUa8fFNEokE0WiM8847j2uuvZYjjjhyjwdQVVXJm2++ycMP/ZF160tJTvKrWuUKhUKh2OtT39EPzWLC3skb0ey90lo119N0vUlEuNENA5fLjcvlwmj+2SwuDANdNzBczu+G7kLTHYHRalaz6Wdr6SBaWybOR2z1790tUygUXY/m4iQSp9lnPBZtESHVVRVUlJe13IcOBLZt0xgMM2L4UH59732cdNLJBAKBPb6npqaGp556gj899idqauuYfOzRnHzyKTz33HOUlpbg9/u/a2jowRUfzTfTYDCMrusMGDiA0049jUmTJqHrOlJKdF1ne2UlH7z/X2bPns3WrWV4PG7cbre6ihUKhaK7yonmh93O3gkpkd/wTDgPch1dN5pEhKtJSOx4ud1u3B4vLre7SVQ4IsLxZGgI0dywcOeqZk1/Se4kbmj6+/Ibn1GhUCi+BWeCQkNoAtu2Kd+6kbWrlxOJhFq8oO0vgCAajWFaFsV9+3L00ccwYeJEcnJySEtLI+APUFJawsKFC/hq/lesXLWSLVvKGD5sCOPGjae8opyZM2cSj8Xxej3tcZ/rCPGx4yYdj8eJxRLoumBnz7JtS0Dg9Xr2q3mJQqFQKLqaoNjJoG/66QgKJ8xJ0x3PQrPXwRERHtweD263Zydx0eStcLsxdANNN9B13cmjEDtyLBzR0CwodvxUIkKhUBwsDMNFKNTA2lXLqNi2xREnB8gLIqUkkUgQi8WRgKE7EzUul4tIJIKm6SQnJ5GcnEzPnj0pKChg7ty5lJWV4fP52jMEtOPEh0KhUCgOQSGxkzG/p9wJITR0XWvKmXC8FEZTuJPb7cXj8eLyePC4PS0eCifkyYVu6N8IcxLs7JloERZKTCgUik6OpukgYOvmUtatXkY8FkM/SBPvzf2rhBAUFBSgaRqNjY00NjYSDAZb+j61M0p8KBQKheLbxUPTP3bxSAAtRn9zTHNL7oSmozclYBuGy/FSuB2vhGEYLTkUzZ4Ko2l583u/Ge60s4BpFhVKUCgUikMNw3ARDNazesUSqirL9ykZXdO079wI1rZtbNtuSoTXD+ShKvGhUCgUHWLg798OdpIEe9r37pOZd1Rtcv6laWKn5GsdTRMtIqA5EVvT9J2Ew47wJrfb05Izoek6hmagGU3hUZreVNGpWaQ4f2+HiNlZWChBcaihqnQp1L1939F1g3g8yvzZUwmHgy2V8vaG2+3GNM3vLEAOElUqoWK/LrCmWbhvhBTscP8rFAplcO3KniqaCNgl1rfZq9D0j1bv13WjZd3O5VyBlnLkhuFyciQMJ6xJbxISmq7vKBPblJyt6XpTOJOGEDtCmpr7Tmja7kVE6wTsHaqnizwIFe3AztegbVtYtoVU46/oJvd9XXc13TOdvGUp7f26/1mWidvjZcDgESxZOLslJGrv77PweDyEw+EuIfyV+NgLO9xQoOt6U1UUY0c4gcuNx+PB4/Hh8XpxuVRVLoWiez6B2Gu1kj260YVA/8Ys186lW5s9Ey2ba6LVuubGdDSJmJZCrzslWbcIhR2/0tpLIr8hKponXWxUQ3fF7kSHrus0NjZQXbWdbdu20dAQJBZLYJrqolEc+ui6wO/3kZQUICUlmczMLJJTUvH5/AghMC0L9sEzYpkmObm9KCgsZkPpmjZVwbIsi1gs1mU8jirsareCw0LTdHx+P+npWWRk5eDzJ+2o9940e7hLwqOKGlAoujF7vgHs/f4g97xkDztQIUuKg250GQaJeIw1q1awZs0qpG1i6JCdDhmp4PepvlyKTm4Et+nOvYf3C4hEJRVVkpoG2KG33WRkZTJgwADyeuajaRqmae7DfjUsy2TBvOk01Ncd6ByMg43K+WgRHJaFLW103cAfSCIjI4vs3J4kp6Th9jiNEKX9jfjktlkTCoVCoVAcUrhcLmprqpk7ewbBYAMjB2hcfb7GmEGSnEzweSQulwpDPlQN9kPB8vG5d6gP24ZoHPbHcWCa0BiC+kYor4Z5ywTTF9gsXGETjEBGZg7Dho8kO6cHlmW1eaJINwxqqytZOH8GUh5SeVRKfDS3uE9JSSU9I5usnB6kpGbgcrmQ0oldVTOKCoVCoVA4GC4XlRXbmPXldAQx7rjKxbUX2CT5bWJxZ/a3qam84hBD15xXwurac69eN7zwDrz6P4muwfXfE5x2DERj+yHGnHZE6BoYuvMybcHajRpPvgKvfWQSN2HI0JEMHjqiJZy/Td81w2Dt6mWUrFu5T9WvOrv40L0e98+A5O72BbJtG9uySMvIYvCQkRQPGEZObi98vkDLeilVspxCoVAoFC3Gp25QV1vNlzOm4XHF+Pu9Lq4+1yQel0Rj0Bze3p2ER3vNR3f2c+Zxw8KVGo+8qHPi4c2Fd7rmmHlc8JfX4NM5sKUCigs0Jo+DWGI/xq3pPFg2JExnHwkTstMlZ06GY8YbLF0rWLpyG5FwmNweeWia3uaJ7aTkFCq2bcGyEoeK9yPc7QIypZSYiQRer5fBw0Yz9rCjyOnRC4HANBNYlqk8HQqFQqFQfNPIFoJEIs78ubOxrShP3+3i3ONMahscw+u74naB3wNej2Po+j3g6sSTvU6X6KbP2w4vrZPblR4XfDxb8OJ7ktKtGu4uPBHv98MpRzUJag3OP0GitXNaRSwODUHJ+KEmbz0Gpx9jsKF0HfPnzmz5Pu0N27ZxuT34A0nY9qFjm3aralemaeJyucjvO4DeffrjCyRhmeY+JQEpFAqFQtEd0XWD1auW0dhQy93XuDhniiM82sUY9MK6zVC23fnd54WaesjNhMI8Jya/0xmwXvhgOvzpXxKvZ//3Y9mQ5IdHfibIzdw5abnzoGnQEBJ8OteZs/7fLMmQS/fPU9Ch17AGfh/MWCD4erVsEb3TvhJEYzBmsKQx3L4enWAYAj6b5+8X3PR7F698uJllXy9kxOjxmIlEGz6zRnJyKtVVFcChkXjeLcRHc95GTm4exf2HkJqWiW1bbRp0hUKhUCi6O5qmEQo1snL5akYO0Lj2ApuGUPsZ8W98LLjlYZtQxPEAuFyCWFxy5rGCFx6AcLQTGlA6bNwGC1Z+9315PcI5dg3oBOKjObdj5zH6fJ7GsrU2YPPuNJ3rvyfwuiQ7T8h35lwQTXNE7H1/hT+/LBnez8nVcBnwj7ckdz8F910nuOpcSdxs3+OIJ8BlSB7+mU3Zdp1pC1aSmppOUZ9+mObebdGk5JRvlExX4qNTY5km/kAS/QcOc8KrhGjTQCsUCoVCodghPupqa4AYF55ikBKwqA9+9/26DNhcLrjzSUkoAhedLEgOwN/fdCy/847vGrWVdF0webwk4NvhpfF5oGSrYMV6KMqDYf0glthRkt/QYdEqwYYy2XSMncO41ARU1goiMa1FgAR88NrHoikXVrKiRPDZPJ1h/SWxuPPxEybkZNh4PZ2z7UDAB0++Ao++JFvEyI5jlsQTcMefJT1zBGceC6FI+/79hAlej82Tv9I56VrB10uX0qNnLwzDvcccYyklfn8Smn7oZEoc0uLDMk2SU9MYMXoCycmpJJSnQ6FQKBSK/UBQUV4OwNhB7Rdu43HDRzMllbWS1CTBfdc7RtoL7zg/e2a3nlnvrHjdkkd/Luib78xyJ/nh6dcFH34pCUcl6zbDVedqXH8RRJq8OMkBuO5BePY/netYfF54Z6rB3U9a+LzgdmkgBJGohRBOu4FYzOSKe8ClgxSCcESQkyF481GN/oUW8U5mbhk6lFfB3990/p2XJRg3VLBgpY2UcNYUwZZXIRiWPP5vmHIY6Hr7h/tFYtCnl8VPf2Dwi8caKVm/liFDR5BI7P4P2bbEF0jC7fESj0VbNZTtspMZh+pt0jRNUtMyGDPuCAKBFCU8FAqFQqHYT6SU1Dc0kpYMBXlOb4P22S/MX+78np8LGSlOuVOjKbTdsrrK+XEMy3DUydlYsAJ++SebvGzJ724WFOUJfvEnyfxlAst2tgtF2u88tifhKPzoHJP7rtewbUF9o019Q5x43GqZoZfSJhqzaQzbBEOSocUa//6d7JTCA8AwYGMZbNzmKNlfXQXHjpctguCSU+AnFznbriqVbKvccQ22r4SHxjBccKLNgCKNlStWEwoF0TRtD9eWjdvtIXAIJZ0fkuLDNBNkZmYzatwk3B4flqUSyhUKhUKh2F+TybYtotEYaclOA8H2CqvRNMjNaHp2W+B2g8ctWrwdXk/r8JiugMcNn89zjPif/kBw+y/hF1eAZUkWrZKduoJXs5BCSm691OQ/j8KA3tq3movODLzOJafq/PcJizGDrE6bgK5rUFW7I49j9CCnGlUzCROGFe8QX7UNB+66syzISrP50Tk60o5Qub0CbS+ltnRdx+dPOmSqsR5yYVeJRIIeefkMHTEWl8uNdaCmTYRAE6KpVJpo6oqpurkqFAqFYrdmXZPx44Su2F2kUYIQjufDsmz8XidPo70+tmnB8YcLnnpNUrpV8vL7GvOX7zAMZy6GvvnOLHRXmfS1beiV4+SqvP4x5GXBv/7rrMvLEl1i9tqWUB+Eo8ZavPQbneN/rNEYas5NaRYpGuceL3jm1xahsCQU7bxWkG1DavKO/KFl6wQZqbKVYFxV6qwP+CA16cBWWIvEHM+LxwVbtmyhqHffvU4AuFxuDpUOOoeU+DDNBD17FTJ0xFg0TW934SGEQNN0hBBYZoJwOEQ8HsM0E8RiUeKxKJYq26tQKBSKb6AbBh6PF7fbi+Fy4XK78fmTMAyXI0SaqjJ2fvnUYgu1ix0UjcFRoyU3X6Lx+Ms21/2mtcV35xNQnC84cZLslBWvdj4dST5I9juhVOceJ5mxUOP5d2y+mO9s8+PzNU47SmLZznbJATq9F8Q0YUuFpLGpLZwQWtN1KgGLDVt1GoOdXxjGEjCsn6R/oWDtJsnD/7S55VKNC05wCgNMXyD4+3+cgxgzWFBcAPEDaM4lEtCv0ObIMRqfza0gEg7h9vqQdvdobn3IiA/LMskv6MOgYaPRhNbm1vVtFR26rhOPxaitr6Surpqaqu0Egw1YloW0baSUSCSqP6FCoVAovs04FU3ecqFp6LpOICmFzKwc0tIySU5Nx+PxOM+UzvwgaeePJqVj5N1zrWRYf8GMBZCTCZlpgq0VcMx4yfghkkisc49vwoJXP4LsdMebo2swZpBTNerjWTBhGAzpK3n2rR15LF43rCzt5EaiDp/M1kDagEZhD42h/eCjmTa2LVm6DpaXaIwaYBGNd97jsG1ISYIrzhL86gmnAMAdf7Y5boKgsg5ufcgmlnBCra4820k2l4kD+zVyGZLBfTU+mxslHAnj9fmxusn98JAQH6aZIL+gD0NHjMO2ZTsKD4FhGCQScTZvXM/mTSVEwkFs20YgcMIipfMwATRN32PSkEKhUCi6J7ZtI20bW0qkaWJZFvGaKmprKtE0DZ8vQEFRMb0KeuNyeZqa38pucm6cMJTzT4ALT2KnZ6vTgC8S7fzRafEEPPCM3K1Sm7bQee1ZnnYuNA1qGwXTFjjh5UeOEfzpNptBfSQvvqfzqyckdQ3w8SzBYUPp1OIDnFyO6y6UbKsSPPGKpCEIb322Y4w0Ifj9zYLzjpft1sNmb8K7Z7Yz7tFIpE0dz5X46CRYpklGRjYDh4x0burSbqcvnY6UNtu2bmRDyRrq62vRNK0pEUtguF1kZmaSmpaG1+PB4/Xi9XjQdB2FQqFQKFoZ2JZFNBolGosRi8Woq6ujtqaGeCzmVEqKhFm1YjFlWzfSu+9Acnv0QrSzF7+z09xXQQDN1UQ78+FLSUtnc793D7JCOL0zrN0ci2U5IVtGJzMfvG6YsVBjVanNrT8U/OJyC5fhGOaXnWkycoDOtQ863c5/+n2BJjp3WeTmimS/vg6mHKbx1KuSVaUSTYPRgwQ/uQjGDXU6nB8s0Z2f6/wejUZAiY+uMlti4fMHGDpyHLrhwm6nHA/DMAiHg6xctoiqyvIWV7mUkvT0dPLz88nJzSU5ORm9SWx0J8WqUCgUiv01gGSTwWkRbAxSXlFO2dat1NTUIIRGsKGepYvmUpady5Bho/EFkrtFLqGug88NQhNYliQYFiAgNUmCdGbVE53sNIQicPYUOHK0aGU3CpwEZrfLMTCjcUE4KkkJOMsSpnM8zd4cKZ1SsLkZdKoytQkT8rJs3npMcPoxFrG487ktW1BZC+OHWXzxrOCTOZrTwdvVFexGQMIZx0pOPkKwvcbpLF/QA7weSWPoIH4WCekpzu/xeKxblSzqsuJDSomm6QwdMZZAILnJRd0ewsNFbU0ly7/+imCwEV3XnZ4hqan0HzCAgoICDMNo+QyWZWGaJolEglgs1q1mqRQKhULRNjRNw+Px4HK5MAwDTdNITUslNS2V4uJiysrKWLtmDbW1jpe9qrKCBfO+ZOiIcWRk5WAegr2qJE6TuoAPKmoEb30GC1YKtlbolFU6Bv3YwTajB0mOHAPF+TbBSOfxhkjpeDz65u9Y5nQ4F3y1QvDpHKfDedl2jZp6Qe9eNhOG2YwdApNGSoSQLaFKEjATnSfQTjYZ6uOHSRqD8M93BXOXCrZs19i2XRA3YfQgm/FDbSYfZpORKgmGO3egoN/rTBQvWeOEiq3fIiiv1qisFeRl2Rw2zGbsYDhytMTlki3NIA/kBdQ8cd3d8oW7rviwbQYMHUVmdo92uynrhkHZ1o2sWr4IM5Foqm6lMXTYMPr27YvP58O2bRKJBMFgkNraWmpqagiHwyQSiaaKJfaBK++rUCgUii4pPHTdqZTocrnw+/2kZ6STkZ5BUlIShmFQVFREjx492LJ5M6tWrSIcDhMJh1i0YBaDB48kL7/3IdWzSgJ+D1TWavz2WcFHs3S2VXkJeF143ToetxNx8OHMBK9/YpIciHLjxQmuOEvickuisc4RpWLbELed/AifR/B//9P4538FS1a50DQvfq+B26XhcQmWrrWYucgklohx7LgYd10tGVpsH5T8gn0dG58bGkMa9/4V/jtdZ9M2L36vG6/HGRtNE3w+z+SdqQm8f49x8yVxfny+UwUrFu9cEURCOGFt/5ut8dxbGvOXu7Cll4BXx+XW8bo1SjZbLF6dIBKNc9iwGPdcYzNuiE1j+EAKA4GmtX3nzRPfSnx0EKZp0rNnAYW9+2Em2s/jUbZ1A8uWzEcgsKUkJSWFMWPGkJ2Tg5SSaDTK9u3b2bJlCw0NDZimidvtxu/34/f7qa+vx+v1kpOTo562CoVCoQBg+/btJBIJUlJSSCQS1NbWUlFRgWEYpKam0qtXL3JycvB4PBT360dWdjZfzf+K6uoqME2Wfj0fiaRXQV9Ms+t7QKSEgB82l2tc+iuNdZuT6NPTR8+sGMFwjGDEpi4ocekCj0ujKM8H+Ln/6SD/nRbhyTtsCvJsop2kApamgd8r+MNzgodfdNMzO5nCPI2GxgiRWIhQRAICj0uQnuwiLSWNr5bHOO2GIHf/2OTys6yWfJfOMDZ+L1TXCy6/W7BwZRJ9evnplR0nGI4RjtjUN42N163RJ88P+Hng7418MT/Ck3dIMtPsThM+JgQk+wV/fV1wz1/cZKcl0yPHoCqWIBgzEQ1hbE2A14U/1aAwL5W1G+Oc/dNGfvZDkxsutonGDlwlU7FPx3LoBGYZXe+mJXG73PQuHtTchvM771M3DGprKlm5fDEgsGybXr16MXLUKAKBAJZlsWXLFjZt2kRDQwOGYZCZmUlWVhZpaWkkJSVhWRazZs3C4/EwaNDAQ6YLpUKhUCi+i/EjaGhwyrKPGDECXdcJhULU1tZSXV1NTU0NS5cuJTk5mcLCQvLz80lJSeGII49gyeLFbNq0CU3TWLViCT5/EhmZ2e0WZtxReD2wdqPG9+/QCIZTGdrXTWlZHW5fCgV9epOalkLA76O+oZH6ugY2lG7Cq0cY3j+VlaUurn2wgTcflRi6xLQ6enzBbQjufELj7296GdYvlUgkSsmWMD0L8inIySItPRXLtKitq6e8fDtrN5XTp2cappXBL/9US3qq5NwpncMD4nHDtiqNH9ypsXlbMiP6+9hQVgeGn6Le/UlLTSYpyU9jY4jqmjo2lG7E77IZ2T+V+ctd/PSPDfz7d86MfmcIj/N7BY+8JPjtsx6G9EmjUVpsLavlh6EYYwUMBhJCY1V9hBnA//k9FPRKISstk/ufriMlEOOqcy3qgwfMqt0PGaLEx0HHsiwKi4pJSU1rlxuwpmlEwiGWf/0VZiKBbdsUFRUxdtw4p7dHPM6aNWvYtGkTLpeLwsJCevXqRUpKCpq2oxLJzrkeiYRqNKhQKBSKHd3Bm58ThmGQlJRESkoKhYWF1NfXs3XrVsrLy1mxYgWNjY0MHDgQt9vNuPHjEUKwYcMGkJLlS79izPij8PkC2LbVZc8HCG7/k6A+mEp+jovVG2rp06+YseOG43YZWJbTOys7Ox1N0xk8uB+zZi9k3aZyigsyWFlqcecTjTz6c7Dsju2vFfDBu1MF/3jLy/D+qVRUNxK1XBx97JEUFPRo6QwvBOTn5zJ82ABWriph0YIl9Mry0jc/jTser2FQb5PifKfXREfiMgT3PCXYsDWZ4nwvqzZUk19UxGHjR+H1upvGxiYrK4N+/XozeFAx8+YtYc2mbfQvTGfmYpPfPRfm7h/bBMMdOwkb8MKMhYI/Pu9maN90KiIxMrbV84FlcbiUO8VT2UwCrhSCc0NRri81ifZKZUjfVO77WzWD+kgOG2YfoF4z3TNPuEs1pbBtG5/PT2Gf/u2U2O0ozVXLFxEMNiClJDMzk5GjRqFpGtFolCVLlrBhwwZSU1MZN24cQ4cOJTU1Fdu2MU3Tqd2uvBwKhUKhaAPNuYFmU6+P1NRUhg4dyvjx40lNTWXjxo0sWbKEWCyGEIIRI0eSlZWFLSWhYCOrli9ESqvLhmAEfPD+dMFXK7z07umlZEstQ0cOY9KkMSAlsVi85dwkEiaxWAyv180Jxx9BZm4vNm+rZ0BREq9/4uXTuRo+TwcaUBqEIoLHX9bolZNEQzBCXHo47bTj6NUrh1gsTjyeaCpMYxGPJ4jHEwwZXMzk445kS2UEr1siZQoPPuPkUXTkqPq9MHsJfD7PTXG+j3Wbquk/aBBHH3UYui52Ghvn+o3FYvh8Xo4//ggKevdl07Y6+hcm88wbLuZ8LTp0bISAhCX488uCrLQkgrZJSlk9nyVMDrdtpyk0tH5JyRnS5mPTxNrWgG1Asj+F3z+nYdmi3fNYJKBrouW+oMRHpxUfFgWFfZtmfb67+NANnarKcqoqy9E0HZ/Px5ixY3G73di2zapVq6ioqCA3N5fRo0eTkpLSclNUKBQKheK70lwxMTk5mdGjR9OjRw8qKipYuXIltm3jdrsZM3YsPr8fTdOpqqygantFl+wppQkIRwTPvKmTnR6gsiZIRnYuw4YOIBaL79YAc4xdi8MnjiaBi3AkRmqSn49mOiV6OwqfB974RLBmo4+UJEFFTZSJh4/B43HtMQIiFovTMy+HMWNHUlpWR06Gi6/Xutha6ZTc7Shj3bIFf/k/neRAgMqaRjJz8hg7ZhjxeAJ7Nw08movwjB83HMOTTDgSxef18+40gcvo2LH5dI5g3jIvmelutm8P8oi0yW0SHXsSBINtm3ujCTZWNJKd6WbFehcr1jtlkttbfRiGtpP46D6hV11GfNi2TVJyKvmFfdun4ocQ2JbFptK1LTNRgwYPJi09HYDS0lLKysrIyclh5MgRuN1uJToUCoVCccBEiMftZsSIEeTm5rJt2zZKSkqQUpKamsqQwYNbJt02b1zX1NeqaxkrhgGbygUbt7lITdKpDyUYPWYYIPc68+tEPngYOXIo1fUR0pMN5i3Tqa4T6B1oycxYJEhP9lJTG6agdyE983LaFHodi8UZNKgvaZnZRGMxGkNupn0l8Lg7aGx02FgGC1capCYbBGNw2IRRbYrusG2JYRiMGDWUyvoI2WluPp6ls3W76LDGiZoGH84UJPl8VMcSnBaMc9o+eBeuFDCqMUaDaWHZHmYsEu0uPiQ7qoLJdsphVuKj3cWHRV7PQtweb7u4p3RNp2p7OTXVlYAgLT2dgoICpG1TXV3N+vXrCQQCDB48GF03VP8OhUKhUBxYAWLb6LrOoEGDCAQClJSUUFVVhZSS/IICMjIyAEFNdSVV27ehG13L+6FrUF4NkZiOZVm4vT5SkgNYVtuer5ZlkZGRhmkLvB5BRbXB+i0dM8MuBJiWoKpW4DY0IjGTHj1y9slWEEKQm5tNKBwn4Pcwd2nHiUlDh63bIRrTscwEgaQkkgL+Nk+6WpZJZmYamu7C7YLKWjdL17W/wd7WsYnGBOs2ayT5DYLRBOOkDbbdJvNeAkLaTLAl9dEEKQE3MxcJ2r/Og0TXnVC7Np3nQ0ibdAnxIaXE4/aS26NXuyXZSWmzdUtJi5AZMGBAi3ejpKQE27YZMGBAS7UrhUKhUCgOuACxLAKBAAMHOlUTN2zYgGVZuFwu+vXr12SDSLZsKmnyfnQh8dE0uy5tjVjcJBAI4HK52jyhaNuSQMCP7nITT5jYtiSRkB3iANIENISgokbD5QJLClJSknYbnrS748nMTCdu2uhCkDBFhyXPGwYsXy8AF7G4Ewao74NLybYlPq8HfyCJeMJCExqRmNYh/T50DWrqobxKw+0RiGiCCftxYofbNomYhWFohCI2tmz//iX7tDtVavfg34x75OUTSEppl5Arp8JVkPq6WiSQlppKXl4eUkoqKyuprq4mJyeHnJycNlXUam5GuONLbKgkdIVCoVAgxA6bQdM0hBB7fT6Ypkl2djY5OTlUVFSwfft28vLy6NmrFxnr11NdXU1dXQ3hUJBAUnKX8sybTdFiUu5f3wIhRNM57PhjcSbTBVrTIGtCsG/T006H684ScBNP0PR55Hccm47PX7AlWLbzKYQEYz8uGKM5JOqAXUBOSWJNtO1aMVyuQ6bXR5cQH5omyM0raMf9OUl7sVgUKSE3NxeXy0UikWipqV5UVNSmQdZ1HSkl9fX12NKpAFFeXq6euAqFQqEA4ZRfl1JSV1dHRkYGuq7v1aMuhKCoqIiqqio2b95MdnY2Lreb7JwcqqqqMBMJqqsqSE5J7TLiw7ahMA/AxuPxUNkQJJFIoGlamybshBCEQiHMeAyPOxkhnFnujrDcbQnJAchOt6mokmjY1NcHycxMa3MYmaZp1FTX4TYESPap23V7Y1kwtFhiywQet4fGxsZ9DiGLRKKEg0Eysn1IGcNldEwZZNuG9BTIybBpDEksr4v5CCbs44WyFInLo2NbNm6XQAjZrtea3OdbifJ8HMSLyCI5JY30zKx2C7mybYuqynIEAk3XyO3RA5puavX19WRkZJCenr7Xh4Ou69TW1lJSUkJ9fX3Tly/C0qVL1QNXoVAoFC1GphCCr7/+mqSkJPr160dmZuYenzGWZZGenk5WVhaVlZU0NjaSmZlJbk4Oa9eswbYtKivKKCgq7jLnwbQgL0vi9VgYuk4sGqShMURGemqbwpt1Xaequg5Dk8QSkJlm0ScfEh0QfSYluF2S7HSbzeUSn9dgW3kFxcWF+7SP8vLtJPk9VNbGGDNIdlhkjWlBQQ/wuCzcLhfbaxtpDIZJCvjaJKYMQ6esrA7bTGBaflKT4wwrtol3QNszW0KSX9K3l2TWYoukgIuZuuAGWyCk3KvRLwApNGYaBqkeF7WVMSaOBJcB0Xbu9SH2qc/HoRNR0wXEhyS3Rz4uw41pfvfuO5qmEQ45IVcIQSAQICUlBaSktra2xd29cwPB3d0E169fz4YNG5BSojfV+xNCtPyuUCgUCsXOz5/GxkYWL15Mnz596Nu37x6NbiEEmZmZbNu2jdraWjIyMkhNSyMpKYmGhgYaG+uJhIP4A10j9Mq0oCAXctIThCKSFL/B0q9XMnnypL2KD00TxONxli1dQVaql5r6BCdMtMjNlDR2UGdwIWDUQPhsbpTiAj8lGzdTOaCYzMy9N0F2u92sXbeB2urtFOVlEPDVcvxESSzeQWNjOl6p/kUmWypsAh5YuGAZkydP3Kv4EEJgWTZLl64kM9XL9poYZx5rUtSz48ZGSpg83ubDLyP0y0zhw4CXL0JxJlttsyNfAZYE3PR3GdTSyORxksQBaQDZPUP0O3XCuZRO+baMzGxsabfTzUIQjUYwzQRSSlJSUvB4PJimSVVVFS6Xi4yM9L0Kj+3bt1NaWqrEhkKhUCjajK7rCCEoKSmhoqJij88P27ZJS0vD7XZTXV2NaZq4XC6SkpKQUmKaJtFotMvEgds2pCZLfnyeRVllkJyMZCq2lbFu/Ua8Xs9uZ/01TcPtdrNw0XKEGcHv9dIQDHPa0ZKOzLmPROGyMyRFeRGCYUlmiot58xa12C67w+NxU1vXwIKvFlPUI4WK6jhjBpsU9uAAVFRq49hI8HkkN19iUV0XJCczmfKyLaxYua5pbMRux8bjcbN02WqiwTr8fi+RWJjzT5AddizNY3P2ZMmIARFq6hJkZAe4XROEhLbH4CUBlGs693nd9MpJYntNnGH94owYwAHpPm8YOrpOm0P1lPj4jrjd7r3eMKWUeH1+/P4kZLvN6gjMRFMzIynxer1Nqt0iGo3i8/nwen0tQuWbr2aPSGlpacs2CoVCoVC0+SnU9DwpKSnBNM2WsKxvvgB8Ph9+v59wOEwikUAIgdfrBSmbBEicrtTvIxSB750oGTskwoZtUXrnpTJ/zlcsWLgM0WTIGoaBrmu4XAYej4dEwuSLqXPYsH49BXlprNnYyMWnxDhhoiQc7bhjsWxIT7H52WU2m7Y1kpYSwIw08MEHX7C9sgaPx43L5ULXdQxDx+124Xa7WLd+E//76Auykg1iCR1Db+Cea2wsW3boPHg4AsdNkEw5LMb6LRH69kpj0YLFzJmzGNkkmr45NrF4nOkz5rNq+UoK89JYu6mR6y+MM2G4TSTWccdiS/B6JL+4XLK9ppFUw0VJdoCTNY2lmiNAdnkJwVRN53ghCGYHMCxBKFzPXT+20bT2z1+R0ulHIgTIbuYBMTrqxuvz+YjFYns03p1Zn0xcHg9WO0loISCRSDg3bsDjcRS9aZokEgmSk5OBpm1289mj0SjRaLRVhSuFQqFQKNqKpmmEw+GWcKrdhR01z/pHIhESiQSBQACP19vUi0CSiCe6VAVOpxCS5KFbJT+4o56KmhT6F6axbtVKtmwuIy8vl6zsDAJ+P3X1DVRX1bBlyzZcxBlQlMn6zVGGFoe57zqbeKLjDbZgBM442mbh+TH+9kY9Q/qm0BiM8MWn08jtmUdOThbZWRkkTJOqqhq2b6+mensFBblJSFys21TLP+6z6F9kd1iIUsvYAPGE5Dc3Si69s4ENZSkMLMpg04Z1lG0rp2deD7Ky0klKTqKhvpHKyiq2btmGS8TpX5jBmo1hjhoT5ueXdawo3FnoHj1WcvuVCX7z91oG9U5jQ5GL47bVc240wThdY6xlYQJfCcEsofGO3012j2Sy0Fm+vp5HbzOZONymPnhgzriuCTQBtmXRnYqkGgf/xiNxuVzQVI5tT+JDAGnpme08pyNIJOItpeTcTeIjFoth2zaNjY3MmTNnr8dg27byeigUCoXiOwmQlStX7nUiqzl/oHlSrDlyQCJJJLqW5wOcpN1+BTZvPgqX39PAypIAxfnpJMw42zatZ2PJOqQUaEh8Xp28dC+29LB8fQOHj4zw2M8lHrckGu/4Y5ESYgnJ/T+xSU+J8vvnbHpmp1Cc76O+sZp1K8pZJZ1EZ5chCPjcFOens2V7DCGqefQ2i9OPlh0uPJqJJyA30+a1hzSuvreBOV9bFOenIWWcyq2lbNmwHpumsfHo9Mr0YUsfy0samDI+yqO3SWxb0llSkMJRyU9/YJMciHHXk7VkpibToyiTd6IJXokmcEcT2EJgeV0EfC6KvS4qKmPUxet54IYEPzjdpiF0IO8BzqR4W3K2DiVt0iHiw+127/VWKaVT0zglNW2fmva0hZ2rZjXH21qWhW3buFwu3G73bsv+CSFIJBJ7FU4KhUKhUOwNXdf32GivuW+CaZotBkrrPJGuZ5IIAaEo9My2efUP8OeXg7zxSYRI1E9GahIBv0ATEomgIWiyYVuU1KQY919vcvlZTsh0JNZ5eq7ZNoQiklsutelfGOPxl6tZUeIhLdlPSrIPgUTTBJGYTU1DnG3VdUw5LM6vr5EMKDqwxu3+jE0kBmlJNi8+KHjqtRCvfBilrtFHZloAn88ZGxA0hExKy6L4PFHuu9bkqnMllu1UIuss1pGUEAxLfnSOpE+vOI+9VMvClW6SA35yfD7w+tA1iMck9dVx1sZDTBge477rJaMGOmNzID0SQjRXOBN7FR66dujkFxsH/0tqk5qaSiQS2WNdb2nbJKWm4Q8kI+XBkdCWZZGZmcmQIUN26wLXdZ3y8nKWLVumEs0VCoVC8Z2eOcXFxfTo0WOPz5zVq1ezYcOG1hZVF0cA4Rgk+21+cyNcfa7klY8aWLRSIxaHYETD45IcPdbmsKGSCSMkvXtKQmEOSKfp9jJyTz9acvxEyWdzI7z1RZS6BkE4KoglBAN724wZbDNhuGTMYMfw7EzCY+exicXBZUjuvNri8jMlr3/SyOwlIWJxQTDizNgfPtJi/DCYMEzSv1ASjDQ1j6TzjU1jCI4dZ3PkaMn0BVHe+CRGZa0gGhOEY4L++TajBttMGCYZN8Qpo3xgQq12FhSiVRPSvakP3dAB1WRwv0lOSaa+vn6PrmZb2iSnpGEYRpu6jLefCm2d7Pdt6xUKhUKhaO/nTnd75gic8rsNQSfU55dXOFV/bCmIJyw0TeL3NoU2xek0oUl7IhgBTUhOOVJy6lFOUrppCUwT/F6JoUPcdI6ns2tIy3bGJj3V5qZL4CcX2UgbYgknT8Hvc5Kw43FoDHf+sQlFHME3ebzkuMPAtMGyBIkE+LwSlwGJprE5eMny+5DIfgjFXR108aHrOl6Pj0gksud8DyFIS8886OdaNlUQ2Z1XRsruWZNZoVAoFAf2udOdnzkJ03k5z3/ZFAffNQTHN7ElLQnXTkSNRNPoFEnYbUUTO47FNCFo7jgeIZyCPc1eqK71XWs9DkJINN0RGx1RnUtg0x2ntA+6+HC73ViWU1lqd2FLTo1sF8nJae1YYlehUCgUCsVBMfIAtwEuffcTtnGTb+3T0VQJv/MaTjp43I6BnrD27MWQTf/b1+NxGc4rnnD+xsE0UJuToAF0Wo+RbBofXXOUiCahM5ppHjcYWnOuBAjNGadvNnHc27UmpbMvt+GMQ7Q9c40kCARCa5586D6T2wdVfFiWRVZWFl6fD8uy9ig+XG43rj0kfisUCoVCoeikxoUGm8tha2WTofoNbAn98iEtpXMar7sTEl431DXAp3MElbWSYf1geH9nXbOR3hzHv78iStdg4zbYuh2KCyA7zQmBOhi4DNhWBdc+IAmG4fFfaowYsKPzuhCOOLn1IViwQvKXOwUjB+4w6iXgdYFhOOejIyqSed3w0n8FH8yQeNyQngL9CmDKBBjS1/lMbR0Xvxf+Ox2e/Q9cfhacNdkRIO0p9Ay9bdWulPjYT4QQRCIRStat32OytpQSr9ePy+VGaQ+FQqFQKLoWfi/85TV47u3dP8R/e6PgJxd3ndAqvxeWrRVc+ivJpvIdxuIPTtX4462gaU6JWSmdEDJjP2vS+Dzw6Ivw6keS+64X3PIDDlpiuscNC1fAnK+df3/4pWT80B3iQuAc38oSWLMRquuc44zt9Nn/8ym89F/JKUcKrj5vV2/DgUbT4PN5kk/mtL727ntacPeP4ebvtz0Ezu2CJWtgxkJJcb7g/OOhfaPnBIjuF9KvHdwLQqOxMUhlVeVexYffH0DTdUCpD4VCoVAouhrNk7kpARhQ6Mw+N7/ycyAv+9vDrjojuu54PG75o2RTuSQ7XdC3l0AA//rA5oV3IeBzjO/f/wNGf0/yzufOsn1FsiOXoiNs0o9n7/h9+gKIxMReQ40kjtckJQBzl8KMhTBzMST5HNHWUT2ZxwwS/PwyjX4FAtuW3Pc3yf9mOZ9pZ7Gi6x1TQU1ojqfLNM1uZe0e9JwPTRM4UYR7voz9/iQEqrKUQqFQKBRdmZMmCf5yp1NtqMXoEk5oji0hJcnJbYg0TSm7DPD7mvtngM/rzK7HE85PTdsR0hSO7DDUdc3Ztnk9OLPu8cR3PwavGz6eKVi4ylFUT98DR4+G7/1C4/N5Nh/Pktx0CSSnOKFmtQ2OtyItxTnWcMQJnfJ6HO9Cc+iO191UpjfSWmh0hPWja1DXIJi3bMcHWbwaVpfC4OI9ezAMDbZUwPL1sL3GWVbb4HhQIjHom++M88GOLhpSDA/9QnLxKYLTfgLl1ZIZC+HUo5zj9XudnjPBEKSnOtdOOHKQBQjdb5rd6IwfSgiB1+dHKq+HQqFQKBRdGo8bsjLA11SOVUpHVOg6vPkJfDoXphwG5x/vGGHrN8Nf/w+y0+GmS+Bv/wfL1sHZkwWVtfD1GqfJ4MiBcPEpjvHmMpx9vjtVsGS1JBSFnAy45FQoynMMzO9i0OsarN7o/D5yoOCIURAIwKhBks/nQX0Q3v3CydVYt8mxXb5cBA8977zn7MmQkQrzl8OXC+CkIwVuF3wy2+n1cf2F4HF1bPUotwsWr5aUbJFkpApSk6B0q2T2EsGoQXsWH1433P83eGfqjgOYtVgy+Srn98duE1x59sEvyZswoa4WBvaWHDEa3vwU5i+DRFMi/8P/FLwzVVJVKykuEFx2huCc4+RBqXzltGqUCK1tclPT9UOm9HanFB+apuP1+VAJHwqFQqFQdG2WrZP87llBPOHMfAd8cN4Jjrj4bB68/rFEE4KLTna237QNXnxPkp4CV5wteP1jWLRK8t40CIXlDgP9PSivEvz6Wic5+6LbYNHq1lPrL7wjePE3gnFD5XfKPTAtR/QAFPRwDPVgGE6YCBXVgrGD4a+vO7kBzbw/Q/L+DMdbM36ooDAPXvsfvPCO5NWPnXyJukZJWjJcdqbA5wXb7LhxchkwtynX46TDYWg/wV1PSj6fL7nqvD2bxxInjC4rFWIJR2T4PM4YR6KQlgxWB5p0tg0Dezu/r9kI22sEj7wo+cdbdpPhLyirlMxYKKmu17j6PHlQSiO3XUtINE3nUGn70+nEh5QSl8uFx+tXla4UCoVCoejiLF7tzKg34/UIjhoDPbP3bT+NIcm4oYILToBXPnT2+dZn8PPL4KEXBItW23g9cOFJAo8L/u9jqKyVPPxPeO2POypQ7Su65oQQLVvn/Dsv0wnPiYZh4gg4fqKz37RkOH6C83eXr4eTJ8HRYx3Dt0eWM9PeHNCxfrNTiemoMYKBvZ3wn44seCSE49n4Yr7z74oacG10PuyClZLyKkFmOti7ydGJxODOq+HeawW3PQovvS85aozg+QecEDOP++CHM32TtJQdv0+dD/9+3/l97NgxFBcXM23aNCoqKvh4tuSqcw9W6Jvct78jOSSanHdC8WHj8fhwuz1KfCgUCoVC0cXp0wsOH+l0+bZsJyk5PWX3yea7S04eUCT4v4egT4FjzF92F9QFJWs2CN6f7tgLt12mcc81Est2Zu6nfgWjBjiei+8Syd2clAw7yt4GfPDfafCH5yQTRwge+TmkBARL1sDy9ZJjxwl+eZXTJTwU+ebxCh75meCyMyWm5VRf6kjxYeiwqVywaJVzkj6ft+NkVdXC7CVw/olNXcK/1XZzzk9SEhiupn0akOR3zl1zFbAOEVZNP9eUOj+z0qG2EaLxJnG1YBELFixq2b5kC9Q1CvxeZYN2I/Eh8fr8GIaB1VXKYCgUCoVCofhWJo0UvPCgE6bUTCTWJAi+ga47xi7sGpJy6lGQmwm1dTuqFbl0KN0qKK92LPcRAyThmGMkn3WsZNQAJ0Qqnvj2fiNtwbIdsTR2sJOPsqXCMaRdBixYCcvWO0Z2LAF1wR2d2mMJaAw6pYS/eSxnHAOXniFpDHWOLuEeN3y9BhpCkiQ/nDNZ4PNKpn4lWLNR8vl8uOCkPU+62zZYJsgmEaUJZ3z8XmesIx3Q4V0T4PM5XdrXbmoWsZASkC0C8qKTbAwDQhHB12ugV444aBngmhAYuiRuW90q1UDrbB9ISvB4vRwygW0KhUKhUHRjEpYjPEKRHa9vm+VPTQIkvDft2/eT0eQtEWKHwW7ZkJkmSfI5NsMHMxyxkZsBj74kOOZHkkvucATBdyn3qgkYPcj5fckap6JTkt9ppAhQXOgkjO+MEJCc7Bi4QjQb7s4HH9LXEUN2J7I3P57tfJhxQwVP3wNP3yO49HRn3awlUFUr0PdWrFQ4ifXghG4tXg3/+A/89TVHrB1sgmFYtFLwm78LvlzkxCxdeLJgWD9nfTgqOGacxiM/F4weBF+vhdIyidAOwsBIp8DS/oYDdmU6YcK5xO32qDK7CoVCoVAcwgh2zKR/NhcefEawZI3kgy+/3RJrJViaNkmY0K9AMHGE5JM58K/3JY0hgcuAd6c5bxg5QJCWLL9TZ+q4CaMHO+FJFdWSm38vKOgheK+putPxE0RLhU6P23nPax873bSXroWiPMEjP5ctB5zoRBPdzd6m2Uucf58w0fl80QZHJAFs2CqZ8zWcdvSeG/SZJhwzVvDYS5L5yyRHXuYIrCNGCa79nrP+YB72+zMk/52xo4nfUWPgpMMlmuZ8ppmLJVf8WnLbY6LF43b4CMfTFToIOSrNHeMty+pWAkTrfDcjgdvtUXdlhUKhUCgOYSzbKUHrMqCqTnLPX2ze/FTi9YhdxMnukBJ0Q3Ln1YKiPEHChDc+lbzykSQUgWH9NO65Fkz7uxm90RhMGA6/usr5RB/OlDzzpk3clJx2lOD4iY5RblpwzfmC9BTB8nWS3z4reW+aZP0W2RTQ0baJ1YNph2rC8RCkJDkhSceMg3hTf5QhxU6+To9Mp5xw8xEUF0B+7q65O5EYTBot+fPtGv2LBAG/IC1ZcMQoJ5TpYB1XeopzXSUFID1FUtRTcNMlGv980GnsJwQ8cTtMHC6wLUdQWrbk/OMFd/3YEY3gCKekpkaR6ant//mbxYcjjrqP+uh8ng8hcHtUsrlCoVAoFF2VaBwuOgWKCwUj+gviiV2f6ZEYnHQEvPIHwdufO40F83Ng1CDBus1OrkBKkuDnl0s2bBUcPUYQiTmldgf3gT/eIkhJcrwRIwdKPvgLvDdVUFYJ1fWSocVO+d6UgCQS/+5FgiJR+MlF0KeXxvQFEq8HBvURnHucxGU4ieOxOIwbKnnpN4JXP3IMy+QAHHeYI06mjIeGoODwEbvvm2FaTgUt03JCgWKJAztWCROyM+C9J5wwIEPf8TdTk+H1h53PYuiOSBHA478Eyxa49B2GejOxOHz/dMnZUxzB4jIgI1Xust2BIhKDX18Lt10uWox751qSxOM7vC8FefDGo1CyWWNblSQ5AOOHOaLYbMrbCYbh8rPg/BMFyf4D4w1p+3V56NjFnU58aJrA5fKAajCoUCgUCkWXJJ5wErQnjYR4wmna9m2pnOEoTB7vhPognG0SpuTY8U6YVTAsOeUIR2BEYtLpVi4cY/na852Z6VDEMRIzU51mfUKAbQskznui8fapTmpLkBacPUVy3vFN5qB0GhrunDwfjMCEEZKjxzqWjK4556Mx5CTNnzPFMdh3d06iMTh3Clx8EkTizr8PdBpscwI9tA5vs23HM+J27QgTEzRV/9J2VP7aZVybmkhmpTvvi8UP3rUnpdPpPuBvfRw7l/oVON4dXYeh/STDBzjbROOtw+GkdLrS+33O+vasSNbSZFC0bVtN1xGahpSyyzcb7FTiQ0qniYphGKq/oEKhUCgUXRQhnNnz5hn0PdlKkZhTltXrdox40xSEI47gSA5Ix3BsMvCb92PZ0BBu/fdMCxpCB96w3dvstyZ2GOamBQlTYFlO4rmuS2IJJ4dkd+dECMcIbvYUHCw7c3eGtaY5BrjjERDETdBtx7iX0mnemDC/fX8dVT54d39bCOc603VnXBImhKLg90rchmPkx74hQDryOHZWH4dSLnQn9HxoGIYL5flQKBQKheLQxtAdo3xzheDVjzRmLBREYxCJCdwuyehBkkkjbcYNhfxcSTDcuSsDBXyOUfvZXMGr/9OoqGoWYYLCHpIjR9uMHyoZOQAk8qB6BPbdHnMqelVUC55/R+PTuYJIFKIxgdBg5ACbI0bZjB0CvXs6OTadeWz8Xsd7NXuJxr8/0Nhc7nikonFBzxzJkaOcsRk1yBGJ36VAQdtVevMJ615FljqZ+JDouoFuGCrnQ6FQKBSKQxQJ+NxQHxQ8/KLGa//TqQ/6yEzx4DI0NA3CEclbn5u8/EGcjNQYP/uhycWnyJbZ9s4UeSIEBHyC/80S/PlljSVr3CT7fQR8Bpom0AR8vcZixsI4toxz8qQ4d14l6ZNv0xjqfGPjcUEsLnjknxov/VenstZLRqoXt0ugawIp4YMZCV7/OE5yIM5tlyX44RkS05KOV4fONTZJPpixUOPxlzXmfO3G7/WRHDDQhFM+eGWJzdylcUwzzpGj49xzrc3QvjaNB1jsCgRCyG5n83aqaldSSlwuN7puoFAoFAqF4hAUHhICXqis1bjolzp/eS2Z1EAmvbIMTDNCTUMDFTX11DU24ncnKMrz4vdm8Ms/+bnwFxrbazS8nagopqZBkk/w55cFP7zTzdaKDPoXpBDwWARDQapq66msacAyI+Sma/TLT2PqV6mceJ3OKx/qJPk7nygMRQSX3aXxh+cDeD2ZFOa6kXaEuoZGKmrqqalvwOs26dPLR3pKBnf82ccP79RpCGm4O5EJJwQkBwQvvqfxvV+4WVWaQd9eKST5TEKhIFV1DVRU15NIhMlKEfQrSGXRqjRO+4nBX1/X8XnEARW5miYwDLBtyxEg3aTHndHZbkgutxtd17E7PMBOoVAoFApFe+P1wIYyjR/8SqOqLoXBvd1sKKvF5U+hR88isjIzSEryU1tXT3V1Hdu2bsOthRlanMrCFW6ue7Ce/3vI6Qz9bV3SD7Zx63EJHnhG48+veBjSJ41QOML6LRGye/SgT0EWWdnpmAmTyqpaqiqrqdhaSWFuMqadyc1/qCMtWXLKkTYNoY73GLgNqK7XuOxujdUbkhla7GXztjpw+cnLK6RfZjrJKUnU1zdQWVnN5q3b8BkWw4pTmbYgzK0PNfLCgwLLlnQGM87vhade1bj3r24GFKURi0UpLYuSm9eDooIMsrMysGybqqoaKitrWL+lnF45Seh6Jr/6cz3J/iiXni5bygwfCLknaJ3M3x18IJ3LxSAlHreny2fxKxQKhUKh+HZjHQQ/f1SwvSaFntkGazbXM2DQQEaOGITb7cKybKSU5ORkoGkawWCY+V99zbrNWyguyGDRapP7/hbktzd1vPgI+OC9qRpPvOJhaN80yqsbwPBz9ORx9OqZC0gsy0YIKCzshUSybt1GFi74mqxknaK8VG57tIb+hVDQw3aqeXXU2ABul+BXTwhWrE+mby8PazfV0ru4L2NGD8PrdWPbNrYtyc3JYNDAvjQ0BFm0aDlrN2+hX2Ean8+3eOylED+/zMnP6eix+XKRxgPPuBjYO42a+hAJ4eHY446mZ142Uu4Ym4L8HoBgw4YtzJ+/mFRfmEG9U7j7KZOBvU1GDrTbPwdEOp4PXXeaDNq2jaZp3eI+0LnCrpC4PV4lPhQKhUKhOAQJ+ODNTwVzl3rp09PLhrJ6xh02hsPGjwQgFotjmiaWZZFImMRicTweN1MmH05B775sLq9jYFESL/7Xy+fzdPzejjsWXXNyVh76p6CwRzINwTCaO4nTTjuOvB7ZxONx4vEElmVhmhbxeJxEPMGA/r058cRjqKxP4PVIYvFk7n/aMUI7Ep8Xps4XfDLLQ/9CH6Vbaxk+agRHTBqLpglisTiJROux8fm8HHvsRAYMHsTmbbX0L0jmzy+7mb+sY0PjNOHkrPzxBUF2WjLxeIyYdHHKyZPpkZtJLPbNsUkQj8fp3bsXJ598LPVhia5ZeN0pPPCMhm0LlGl6iIoPoKm7uRphhUKhUCgOKYNDcxrsPf26Tl5WEpW1IbJze9C/XxHRaHS3Sbe2bROPJxgzeihS8xKJxklN8vHf6XSowe7zwkvvCUq3+kgOaFTVxxl/2CiEEJimudv3xWJx0tNTGT12BBu31dMjy8PClS62lIuWXhsHG6c0suDxlzUyUgNU1jSS3SOPoUP6E43G9jg2sVic4cMG4vanEo5G8Xr8vPEpHZr74fPCO1MFi1f5yEoz2FYdYdzYkbjdLhKJ3Y9NPJ4gJSXAsOFD2FzRSI8sN8vWuVi2TuB2tf/nlNJ5CSG61cR7pxIfQggMlyqzq1AoFArFoYahw+ZyKK92kezXqA8lGDlyCLa992e+bdt4vW6GDR9MdX2EjBQXc77WqajuOI+BlLBwlSAj1Ud1XYhehfn0yM3ao/DYYeTG6d+vN2kZ2URjMYIRD5/MEXjcHXMsLgM2lcHqUhcpAZ1gDMaNG4ltW204DxLD0BkxwhmbnAwP/5vlYkOZk0zdUWLq83kaqUk+6oNRsnJzKSjII5FItGFsTPr3740vKZVINI6UHr6YT/uLDwG2lFg26LqGEKLbWL+dzPMhcLk9qsGgQqFQKBSHoPjYVgXRuI5pWbi9PlJSkttcYMayLDKz0jFtgcctqKzVKd0Krg4QH04ndsH2GoHbEISjJnl5uftULEfTBD3ycgiGYyT5PCxcKTrM/jF02FwBsYROIpEgkJRMUpIfy2rr2JhkZaUjdDcuXVLb4Gb5+o6pfCUEhCOCki2CgF8nFI6TnZ3Z5rApR0wZZGdnEQzHSAm4mb0E2qAp98Pq7Z6RPp1KfGiawOVyozwfCoVCoVAcYgaHBpvKBUiNWNwkEEjC5Wp7Xy/bliQFfBhuD7G4iZRgWXRIpLYmoCEIVbWaUyoVQWpq8j6JD9u2ycxII2FKhADL7jhDVNdh+XqBEC6iCZOUlCR0XduHY5H4fF4CSUnE4iaaEMTNjsmT0DWoaYDtNToelyBhQ1ZWRpuFVLMASUtLIRa30HWNWFxid59KuN1HfEgp0TUdl8utGgwqFAqFQnEI4tizzc/4fX/WS+m8rTPYgELbUb3Lid3f1+MRrUqsdjSG4RT+2bn0676OjZSyUxjomgBNa27eJ/frc8mDcKFJumeH887l+TAMDJdLhV0pFAqFQnGIYdlQlAdCs/G4DUKhEIlEos2JtpomCIUjmIkYLrfTOdxl0CHBEraEFD9kZ0gSpkQXkoaG4D6VStU0QU1NHS5Dw7Ylht5xhrtpwdC+EqSJ2+WisTGItY8hZNFolEgohNtlIKWN1213iD1n2ZCeCrmZNrEEuHRBdXXtPo2NEIL6ugY8Lh3TtPH7NDTR/t3ObVtimqBpTs5HdzGAO5Xnw+VyYxgq4VyhUCgUikNOfFjQIwt8bhtd14lHIzQGw20O79F1nZqaOgxNEotJcjJM+hZAwjz4xyIlGIYkJ90mnpD4vQYV5ZX7ZOBKCRUVlST53TRG4hw2vONsH9OE/FzweixchkGwsZFQKLIPY2NQXVOPZcaJJyAzLc7w/rJD+pZICT6PpF+BTTBsEvC5qKqqoa3eBSGc/KKqqmqS/B4awnGOGCUPWPJ8c7Wr7kQnEx8udF1Xng+FQqFQKA4xTBMKciX5uQkaQxYpfoPFi5c3lRndi7GiaUSjMb5esoLMFB+1jSbjh1pkpTnVgjqKw0dK6hojZKT62bhxI+UVVbjaYKV6PG7WrCmltmo7Ho+bZH+MY8dKYvEOGhsLCvNg5IAE9SGLgAfmzVu8Y0Z+j2MjsCyTJUuWk5Xqo7IuzgkTLfJzOq4JpG3DSZMkwXCElCQfleXb2LSpDHcbSla53W5Wrykl1FCP1+tGE3GOHE2HNoBU4uPAyQ9cLnfTrIFSHwqFQqFQHErYEgJ+ydXnWWyvDpGdkURV+TaWr1iHx+PZrZGraRqGoTN37hJ0O4rf76E+GOakSdJJOO8gIjG48CRJcUGUYFiSm+Zh9uwFxBMmrj007PB43JSXV7Hgq0X07plKVa3JsH4mvXLpMGNdSjB0yXXfs6kPBsnNTKaqvIzFi1fidrv2ODYul4uvFiwjEW4gEPASiUY441jZIR6pncfmxMMlY4dEqaozycsKMG/eQkKhCC6Xaw/Cw0V1dR1fL1lGYY8UqmoTDOqTYGixVOLjkBQfkqZKV6qUgEKhUCgUhyKhCJx1rGTMkBibymP0zU9nyaIlzJ6zCE3T8HjcGIaOrmsYhoHH4yGRMPn005lsL9tCYc801mwMct5xMU6aJInEOlBM2ZDkl9x8icWmikZSk/24ZJT//vdTtpVX4vG4cbkMdF1D13Xcbhcej5tVq0v49NNp9MzyETc1bLuBu6+xkVJ2aORHOApHjZEcOy5OyZYo/QozWbV8BTNmfNUimgzD2Gls3MTicT77bBYb1q+nqGcaazc2ctU5cY4Y2bFjIyW4XZKbL5FU1gbxeTwkuW0++OBzyisq8Xo9LdE2uq7jcjljs2HDVv73v6lkp7iQQqeusYE7rrQw9AM0NrJ72rxGZ/kgssnzocqYKRQKhULRSfmOz2gnvl3y2xttvv+rBipqUhncO4OSknVUVlZTWNiLtNQU/AEfDQ1B6uoaKC3ZiFvE6VeYQcnWKP0LQzx4o03Ckh0eph2KwGlHS354epR/vlfPsOJUguEIUz+fQUFRITk5WaSnpWJaFnV19ZSXV1K+dSt9e6ZiS53VG+v4669MhvWzaQh2/PAmTMn910suuaOejdtSGdgnkw1bN/LhhzUUFRWQlpZCIOCnsTFITU09JSUb8GgJBhRlsmZjmMOGhbnjKptIrOMjWEIROHqs5Kffj/Pwi3UM6ZuGNxrli89mUNSnN1lZ6aSlpSBtSW1tPdsrq9m6aROFPZIxDDfL1tXxu5sSHD3Wpv6Aj033ivgxOtOHcbmV50OhUCgUik6vPb6DrRSJwZBimzcfgcvurmPlhiSK8tKJx6NsWLOShCWxbIEuJB6XIDfVh9CSWb6+geH9Izxxh02Sr2Nn1ncWU6Yp+eMtkJoc5YmXJXnZSfTt5aGuppwV27aQsAQCicsAv9dF/6JMyirjxBP1PHiDyXknyE4hPABiCcjPtXn9YY0r7qln6VqLorxUbCvBpvWrWGe2HpueGX40zcfy9Q0cNizCn2+XCNGxeTg7E41Jbr/Sxu+L8Ztna8lOS6IoL4WGqi1Ubt1IwnYqTLkM8LkN+hdmsL3GpDFcw+1XxrnyHElDSH3vD1nxIYTA7fHuVPNYoVAoFApFxxvY0gmJchtU1zvhOckBYD/zE4SAYAR697J5/SH4078b+GR2mKo6L0l+HyleHbfLkTkNIZNN5Qm83kZ+cUWCa853StKGo52n4ZtlQyQmuetqm4G9ozz/dozl6z24DS9+n5dUQ+ByCSIxm8agSXl1PUeMinLf9ZLh/e1OIzyaxWU4BjkZNq/8XvDnl4O8PyNMeZUzNskBDbch0DSNxqax0bUGbrsswQ0XOT01orHOMza2hGBEctMlNsX5MZ55M87i1R50rel4DKdDfSwhaQgmqChtYNSgKPdfL5kwXNIYkqoI0qEuPjwer8o1VygUCoWik6HrOpmZGZSWVLKlQjByAES+Q3K0wBEx6ak2D98KZZUJPpxpMn+ZoKwSauo1QHDsYIsxgyVHj4FBfWyCEYjGO1+naduGYFhywfGSs48VzFka5ZM5MdZvFlTWQCiq0aenzfhhNuOGOOFAuiY7lfDYeWyiMfB7JPf/xOLGi20+nh1iztIIWyqguk5gWYLDR1qMHSI5YpRkxABJKOKch842NlJCY0hy8pGSkyYJFqyM8r9ZUdZt0qiohsaQRq8cm7Mm24wdIjl2nFOq90CPjcAxebuj2Wt0jgtDoqnu5gqFQqFQdEqkhKzsLEpLVvPGxzBppCBufrdqUwKn/G59EFKSJJefKbniTKdvRyhqI3CWCwGxOF0i/CUYcXJaJo2UHDMWTEsQi0M0bpHkB4/baSoXidGh1aDagmlDQxD8XsnFp0guOdUmYQoikaYmi0mga0554MYuMDbhprEZM0gycThYtk0sLohELfx+R3BYljM24ejBk3rS7n73k07j+XCqDbhRrg+FQqFQKDoXlmXSs1chGZlr+evr28lIc3Hd92zSkuz2je8X4HJBhtsJwpZNU8Mel/PqaoJN1yUBHyT5HYNd2qBrkOTrmteBy5C4UxzhaMvmqlLOa3+xpeMxiSWcnwd6TKJx5wWOGPF6HBHc0FGldLthqnOn8XwYhoFhuJTnQ6FQKBSKTmdIS3RdZ+z4icydNZ0Hn6njnS80LjxZI+CzD7jR2MVPnjoH33ZaAJehkZ6ikZ0OQ4slaSk20SjEzYM3NJYanu4pPgB0w4Wma2pEFAqFQqHohFiWRXJyCsdOOYk1q1ewfM0q7npCdV7bO6qK5+6xm17Qv1Bw+jE6Pzhd0r/QJhSm01TNOvDatHtdI53K86FpupogUCgUCoWiEwsQTdcZNmI0RX2KaaivQ0q52w7YCqcLuOLbicfjxGIxGurr2LB1G4+9FOS5twQ/ucjghottvG6bSPzQNc1t2xFYhq51q+9QJ/F8NDUY1DTkd8leUygUCoVCcWCf2FKSSCTw+wMkJSWrE7JXC0fxbYim/zfb3MNjMSrKy1i+bCm/fbaOaQsMnrxDpyjPIhQ9hH0DErpbh+1O4vkAt8erZk4UCoVCoegi2LaNrZI9FO2ErusUFvUhr2cvli9bwsxFKzn3Fp03HtHp3dPqFE0lFYeQ+ACJ2+1BqLhIhUKhUCi6FB0dVtSeAkgI0aEToVLKdi2805XGptmjJoTO6DGHkRRIYvGi+Vx9n84bj2r4PTamCo5R4qP9ELjdHjUaCoVCoVB0BcGh6+iaRiKRIBoJd1hokaZpeL0+hNCwLAu5H00ThBDouoGUkng8iml2XAMOt9uD2+3GtiWWtX+fQ9d1NE3DNE2i0UiHVRHVNR23x4Ou65iWhWyjEJHSJh5P0H/gEOKJOAuXLeHZN13cfqXdJXq97IPpi21LTKtZJKqcj4N7/gVOmV0VGalQKBQKRee1l4RA13UaG+rZsmUjG0rXEw51ZJtuQUZmFn369iOvZz5ujxdrH8SDpmnYtsWWzRvYULqOyu3lHRpK5vH46JVfQK+CIrKyspGSfRAPAl3XqK+vpWzLZjZv3kCwsaFDjbv0tAx69ymmZ68CPF7/PggqxwvSf8AQSks38o+36vjBaToZaTameeh8nyQSKUFoolsVvOo0ng/dMFRWlkKhUCgUnVd6oGkaq1cuY/myxUgp6dmzJ2PGjsXtPvh9uoQQNDQ0sHrVKhbMn43P52fcYZPIyc1rk/dC13Wi0QhzZk6jpqYKn8/H0GHDyczKOuj5v0IITNNk86ZNlJaspWT9GgqL+jBm3OEIIdp0bl0ug1UrlrJs6SIAeuTlMWLkCLxeb4eNzbq1a1m0cB4rV3zNhMOPJiu7B6bZtvLMUkpcLheDBw9i4VdzeG+a4NrvQaOpvolKfLTTRWoYhhoNhUKhUCg6q8HgMli3egXLli6i/4ABXHvDjRxx1NEkp6Z2WCM9KSXl27bx3ttv8ezf/srMGZ9zzJSTSU/P3OMsu6ZpRKMRZs34grq6Gr5/2WV8/9LLyC8sbJoM7YDjEYJIOMyaVav4+9/+yheffoLb7WHk6PF7FVOGYbB61XKWLV3EwEGDuenWWxkz/jBSUlI67HqxpaS6qor3332Hpx7/E19O/5yjjz2e9IwsrDZWNrUsi9wePQEP702Lc/lZAiGkasugxMd3v3Fomoauwq4UCoVCoeiUaJpOfV0NSxZ/RXG/fvzjpX/To2dPQsEgkXB4n/al6zperxfbtolEIi3LvV5vqwRpJwcjvouh2vx+IQSmZZGTm8vNP/s5g4YM4fqrfsTSJV9x5NHH7dFjoOs669asoq6uhhtvuZWbbv0Z0WiUeDxOPB5vg04Q+P3+luT05hyLSGRHjoXX68Xl2tUjJIQgEolgGMYu65OTUzjymGMYN+EwfnjhhcyZNZMeeb3I6dFzt+FkmqbTUF/H0iULGDhoEE8//wI98/Odsdnp/LZ1XLSmXJ5YLIZt27jdbnw+H6ZpEg6HW3qz+f1+pJSEQqGWRHmfz4fH4yESiRCPx0lLS+PaG26kd+8+3HTdNSz9eiFHHXNC2wWMbePzB8jKyWLJ6q1U1GjkZkgS5p7sSvB7we3aVUMKAQmTPZbuldJ5r98LpgWhyIH8Zgm6Y9iP0TluahqGbqCkrEKhUCgUnQ9d19i6eRMAN95yKz3y8mior9+v531jYyOzvpxBICmJ4SNGtgiNBfPnEww2omkaUkr8/gADBg4kLSODcJOB6/F4CAYbmfrZp1Ru386AwYMZNXoMDQ0NHH/SyZx/4UW8/uor1NbUkJmV/a0z7EIIotEIpSVrGTBoEFddex3BYLDNs/HNIVKPP/Iw2ysq0HWdpORkho0YwfEnnNTUs0Hy+quvsGThQtye1gV1TNPkh1f+iNUrVzL7yxm7rI/HYoybMJHb776H804/ldUrl5Gd02OP53Tz5g0AXHfTzfTMz6e+rq7tVbskuD1ugsEgn3z0EQ31dQwdPoKhw4aBEKxdvZrPPv2E3n36cPyJJ6FpGtsrKnj/vXdJSUnhtDPPwuVyYbhcTPvic5Z+vYQjjzqG4aNGkYjHqa2p4aRTT+X0s87mnf+8SV1tDekZmW0+35oQJAUC1FRCQxDyMve8vdsFn82FxWvA/Q0rN2HCwCLBiZPkbitnuV2wegN8MAOKesKZx+4QJQeC7mj5dhLxoaMbuvJ7KBQKhULRCbFtSXV1JX6/n2EjRhKO7N90sD8Q4I3XXuW3992L1+fj/95+h+J+/amtqeH2n93CtrKyVtv3ys/nhp/ewhlnn4MENm/cwE+uvorSkpKWbc45/wLuuv9+bNvmsIkTef3VV2hsrCcrOxfY1cLUdJ26ygoSiThTjjser89HY0PbE7M1TSMej/P2m29Qvm1bq3VHHn0Mv3v4EXLz8pj+xRd88dmn37qPoydPZvbMGbz9nze/df3WrVu4+NJLGT9hAnNmzSIej+Fyub/VkyOR1FQ5OSvDRowkHArtU7lgt9dD+bYybvjx1axZtapl+U23/pyf3X478+bM5i+P/4lBgwcz5fgT8Pn9lKxfx+MPP0RKSiqTjzuejMwsXIbBG6+9yheffopt2YyfOJFEkxcpHo9z2pln8c5/3qRye/luheFuP6PbjS0hGAaxl+rBLgNe+i+8N+3brcojRklOPVpgWd9u+Hs9MH0B/P45SVEenHC4IOAD1QP7EBIfUkp0XUdXng+FQqFQKDodQggsy6SxsYEePXqQkpqKvR+WmBACM5Fg5vRpAEQjERZ+9RWDhwxDsqOqU4+eeWRmZlFVWcnWLVu476476T9wEP0HDODXv/oVpSUlZGfnMGT4MGZ/+SVvvfE6ubm5/PLue+jRsycAkUh4t0njAtESKta3f//9OpadGTNuHC7DxcIFX/Hl9GnccuNP+Ps/X0TTdQAGDhrM0OHDSSScRGvTNOnTty+ffOTEDvUt7seoMWNa1sdjMUaMGoVlWbhc7jYYUk55Wk3T0LR9y5TXNI1EPM4D99zNmlWryMzMpFd+AV8vWcxTjz/GlOOPx+P1fovttm/nyDRNcnvkomkaDQ11+/z+5nPZlopQlg1TDoPmt3wwQxBPSI4YJeiRLRk5QGDbrYWHEK2PSew4tSAPbCGq7tjhrlN4PgzD6PBGOAqFQqFQKPZg49o2Lpdrv5/Xuq6zvaKCpV9/3bJs5vTpXPSDS1ttd+1PbuTSy69g86ZNfP+C89i6ZQtLFi4gHo8xf+4cAH7z0EOcesZZ3HTt1fzn9deZPvULbrjlVvRmi3Ov9rpjaTo5F9/tvPzg8iu48JLv88gffs+jf/g9X82dy+qVK3G7HeFw0qmnctd997eEqUnAtmxicadl95HHHMODf3yIYGNjyz5t2yYea2NLb+FYz3I/RIHL5WLVyhXMnDEDgDt+fS+nn3U255x6MiuXL2fWzC9JTk5usdAdgbPvIkc2CR1N05D2vp/w5vFqy1+NxeHS0+Hq8wTba2DqfEk8AddeABefIqgPQjgGmoCAD2zbye3wuCD+jVwSTYDf53hTfF6IJyAabz/BIGX3DLvqcItfSoluGGia3mGNcBQKhUKhUOzdyv0uz2mPx8OC+fOoqa5uWfbV/HmUbyvbteKlEK36bYTCYVYtXw5A3+JixowbTyQSZsCgwQBEot9sDtjWfIfvPq0di8aIx+NMOvKoFmG2ft06DMMRQlVVVaxYtoxVK1eycsUKNm4oxbKtb/2zzfkk0UikJXfkQKLrOtvLK7Ati7yePTnqmGMJBAJMnHQEACuWLdtxXqXEtu2ml9zHK6fZ0JYHZao/GodgBMLRXZdFYqALMHR46T34wR1wyvVw8x9gxXqBx7XjrDcE4doH4OTr4Obfw/J1kORrn1FxRtfxwnQ3CdIJPB8SQ3e1uY61QqFQKBSKrqhdBF9Onw44oUplW7dSvm0by77+msOPOLJls6efepI3XnuVqsoqyreVkZaezjGTJ/PP5/4BQH5BAT6fj3AoxITDD+fyq64mv6AAwzD2a1a9PUgkEmRlZZGRmUlVZSUl69a1rHvt3//i9VdebtmuV34+b3/4PyfcHPhy2jRuvu5azESCaDTKlONP4Iyzzz4o4TiarrN+3VoAcnJzAfh6yWImTpqEx+1m7GGHsaEpv2ZDaSnfv+A8NE3b4aXpojFDXg888LTgsX/tELgLVsAbn8C05wVej3Md1TTAu1Od3+cvh3enCl75o2DcEEkkpr7SXVd8SNANY5+SoxQKhUKhUHQddF2ntrqahV/NB+D0s85m5ozplG/bxtTPPmPSkUe1bLutrKxV4vmAAQPJ7ZHH6pUrAScJXdd1wuEw/QcM5P7f/Z5EIkGkqQxsh5gytk0gKYn09HSqKiupqa7CsuyWY3d7PE5rAV1H05siPZrMnpL16yhZv0OsZGdnc84FF+xTp/b9xbbtlr9dUFjEzOnTuPXGG/AH/GBLKirKWyqSRaPRljHoynjcsHw9/O1151q57nuCiSMEDz4jWbtJ8p9PIXenilonHi449Sj488tQskXywNPw+sNOSJat5sy7pviQ0ORuVeJDoVAoFIpDEbfHw9zZs9i8ySnX+/STT7T0oFgwfx51dXVomhOmdPZ55zF2/GGsW7uW/3v538ybO4cn//RoS+5BY2MQu6mnxJxZM3n0j39g4ODB3Pfb3yO0jrElNF2nprq6pfpVUnIyiUQtABdfeik/ufkWgo2NLV27k5KSWsTFxElHcOa55xKLRkkkEgweOpRYNHpQmi9rQpCSmgZAXW0N4aZE/HDI+VlbW9tinhUWFXHHPU6VsiULF/Knh//YJa9F04KsNLj9Snj7C8GydTBjkWRTuaMkKmogO8PZNi0ZnrgdBvSFnHS45A5YulZSXS/ISgdbdVvvmuIDJLpuoBwfCoVCoVAcosaGrjNvzuyWf1dUVLT8vqG0lJXLluH2OAnah008nMt+dBW2bbNxQylTP/uMDSWl9O7blzmzZrFp4wYSiQR+v59VK1awYtkyLMtCCIHogIlMoQmSk5PZXlFBY1M4UkZmJnW1dQD4/QFycnLw7lw1aiejZ8DgQVx6xZUEGxsRQjiNDmMxp9P6AbfAYOBgJ2+mtKSECZMm8dYHH/Lhf//LM395qtW2gaQkjpk8maSkJJD2jh10QVyG4PN5sGiV3SIyMlJgW1XrY0pPcRLOQ6Ediw3d8Xq0x7FL26nO5TaMbjUF3ylKTCnPh0KhUCgUh6ihoWk0NDQwY6pTYvf8iy7irQ8+5OU3/0P/AQORUjJj+lSn2TBg2TammWDtmtVs3LABgKzsbEaOHgPAujVr2FRaimEYLFm8GIAeeXn4fD5saR/04zMTCRbMm8fTTz0BOF6Pk045taVTeiKRIBQKEw7veEnbbhEgZjxBqLGRUDBIsLGxpcrVwbCKLNOksLAIgK1btvDp//7HuPGHUVW5vVkl7WQo24TDYULhMNFo10148Hng41kwbYGNzyN4/JcaHzylMaC3+KYuZFslrCp1QrU+cAqCkZEq8HvbqzuEU+6qu6UedALPh0A3XOrurFAoFArFIYjL5WbN6q9Zt3YNACecdDIjR49BCMGIUaNYu2Y182bPbgn5ee7pp/nv22+zobSEivJyACYddRSjx44lEAgQCoX42c03UlhUxGcffwzA5OOOR9f0Djm+R/7we4KNjS19On7042sYOnxEi4h487XXnMZ7TdW7otEox514Ih63u8PHJpEwKexdRO++fdlQUsITjz7Ca//+N1uautk3G8eHFBIMwzkoW0re/BQeegG2VDjLTHuH5IrG4Qe/gj49JYtWO8tOPkKQkiRbVdJS7OOERIdLD+HUmUb1N1coFAqF4hAUHwazvvwSKSWBQICCoiIaGxqIRaMMGzECcEJ+moVGacl65s6eRUV5OYFAgB9dcy2nnHY6+fkF/PyOXwGwZtUqPv3f/5BSctQxx3LSKacSiUYO2jGJpp4XALU1NSQSCXJycrnz1/dy5TXXEgqFWvJPamtrWL9uLaUl6yktWc+2sq1s3rSxJcelo/JUACzLJCMzi0f+/CTF/fsTDofZUFrSupfLt8zKd8WJetEkPCJxmDwexg8VxOIwfYGkrBJyMpyDWrzKqXLV/K6KasmcpRCLC44aLbjxYki0d65HNzOBjY6/GAQul1s1N1coFAqF4hAkFosxfsIEbr/zbrJzcsjJycU0TWzb5tgpx8EDtBjhzaVybWmTk5PLkOHDyM3tQSzm9NK44KKLSUtP58tp0/B6vfQt7scZ55yNx+PFMq2DcjyWZeH1evnDo4/R0NCIruukpqXSK7+A7OxswuEwtmVxw09v4dwLLtyl8aFlWU7FLsPguBNPorhfv5bk+44gGokwcNAg/vXaG8ydPZP6hgaKi/tRsn4duT160LNXL26/6x565OUhhCAajdJvwADuvu9+/IEk/IEAlmUCkksuvYzxh01kzLhxTq+SDsSyIDkAf/ypoK4RxgxxPBmWBSlJ8PIf4H8zBZEY9M4TFObBjIWQmgwDiiDgE6QmCbweQVWtpGe24KixEpchiZvtExZnSyfno7s12u74sCshMAzl+VAoFAqF4lAkHo8zctRoxk+YiGVZLSVxLdMkLT2diy699FvfJ22bRDxOLBZrKaEbjUY58ZRTOeX0M5xt/p+9sw6P47r68HsHFsVg2TIzUwwxhJmh4YabtuG2KSRfw22SBhpqqKEGGuaGmTmGOImZSbJksbQ4dL8/ZrWxE4McK5bhvs+jx9ZqdnfunNHq/O4hKUkmEti2TSi0ZdOuRo0Zm3UapedlajviWYHRr/8ABg4Z+uPiACFwbBukpF///tiWhWVZHZb33yooQuEQ+x10MEIIXMdhzPjxOI6D6zic9ptBuI5DMpnEsW2Kikv45amnZa+/lBLbtpkweTK77rGHLxbT6Q6tZZASdA2O2d//N5EC2/VFg+1ATsSfhA7gehLHhUG9/YnntgujB4KHREq/wNyVklTaf267rEr496/ntka/dpy6jw4VH1JKNE1DNwwV+VAoFAqFYjsk28EpU4C9phPuui7xWCz7kK7rGKaJ9Dxc18Pz3B/N7khmakM6mnRqw0n/tm3jeR5C0/Bcfx1rTm1vPab1GnU0ruuSyIinH9Laics0A4D0j43F/Ynla9g5nUplr8vWUkQdT67l768hbv1p55rmRx9cFyx7DdFsb02/Q2R/F7aH4vQOj3xomqYiHwqFQqFQ7KBomkY4HEFKj/r6OpYvXUo4EqG4pIScnFwikQiO45BObxsdlgKBAIFgENu2qV61ikQ8RkFRETk5OUQiEUCQTqdwXXerX4sQglA4jK7pxOMxVixfimEYFBQWEolEMQMBbMvCtqxtwovTNX+6OUAyLWhohoZmQWmhpKRQZiMkzlZoGimlEh/tdiPoOrquq8iHQqFQKBQ7GOFwhHg8xuP/fYCpX33J/LlzqKxYSSAQoKCgkOKSEkaNHcfBhx3JwEGD8TxJOp3eKgueNU0jEo0yd/Ys3nrtFebMnsm82bOJx2MUFBZSXFxC5/Ku7HvAQUzadTdy8/K36FR2TdOyDmxbCIb8frLvv/0mn378IfPnzGbJokVohk5xSQklpZ0YvdNYDjjkMHr37YfjOB2earV+EQU5YWhoEbzykeDljwQVqwUNTQYtCUFhnsvg3i5jh0iO3lfStZOkJcEW8E11EG2tXhfbTWLWVpB2paPpOiryoVAoFArFNkAmZTq45tC8DfydT6dS63R4o9Eo33w9jRuvvZqpU6b7TonuDyRMJpPE4wlWrKhg+vRveObxxxi38878/i9/pf/AQetND2ofR1VgmqafEp6p5dhYlMIwDISm8eiD93PXbbdSX9+EwB9mh8Bfy7IKvOnf8OZrr9G7Ty+OPv5ETjrtjDa9/k92bXWdUCiE63lY6TTBYBDDMEilUjjO+p3eSDTKogXzuePmf/LOW2/5RdECDEMgpaSxvpH5cxfy6cef8djDDzJxl104/48X0rN3n5/VNj/J0dXBNAX/elzwyCsG1XVB8nJCRIIaAVPSpVjD8fyBg+9+leaBFxNcdLrLsftJ0pbE/ZlGxwgknhQ75OZ7x6dd6TpCaCgUCoVCodj60XSdlpYW5syaieO4693pllISCAQYPnIkhmGsJUBycnN56bln+PvllxCLJYmEDRzHBQSGaWCaBpZlY9s2QghsO817737AgvkLuOXOfzNk2EgSifZ1cqWU2d3+JYsXU7VqFXl5eXTv2YPCwiIsy1qnSNB1A9u2ufKvf+HVV14jYGqEQ/56NF0nFApkIzaeJzEMjSWLl3Ld1ddQXbWKCy702we3twAxAwHisRi333ITs76bSUtLM/kFBUycNJkjjj6awqJiUsnkj+wXzcnhrdde5spL/kpDQzPhkIHneUjpt00OBEwsy8aybDRNI5GI89orrzN39hxuvP1OBg0ZRiIW2yr68eo66JrgLzdr/PeVEP2759G9s0NNfZxkSoCm++EN6WLq0LdrLikrzO+vb+bDaWlu/rNE17yfTYB4nv/2O9iMwY4WHxJd19E0Nd1coVAoFIptgVA4zAfvvcsfzzu3Tcc+/b+X6NW7d7bgPCcnh08/ep+/XXox6XQq66j37t2T3n16kpOTQzAYIJlM0dzczLx5C6mqrCYSNqlYWcF5v/01d9z3HwYOHrrRou9NUB6EIxFWLl/OdVf/nU8+/BDHcdB1nYLCQo48+mh+e+55BAJBv1NVBr8mIsS1f/sHr77yGuGQgeu6mKbBiBFDKevciWhOBM/1iMXiVFZWMXfOfAxDI6BpPHj/AyQTSf565VUZB799tsENw6ClqYmzf/0rvvvmm7V+9vknn/DsU09y+z330adv37VqacKRCLO+ncEVF/+VlubmjG0cevToRt++vcnNyyUUCpJMpmhoaGTe3AWsXl1LJGyyZPFSzv/Nr7n9vv/Qf+Cg9rPNT0QIMHTBH27QePadCKMG5LK6roXmlGDYsOEUlxSQE40gpaQllqC6upY5s+fSKT/AiAGFPP9OM50K41x1LjT/LMEcgev6kRVdN9ogQPzy/u3BY+7QkIOU/gXXhLbFch4VCoVCoVBs5t9vr21bwT+sMQgEg8yeNZNL//JnUqkUpmmg6zoTJo5jt90n06NHdwoK8giFghQVFdK3bx/22WcPhg0fgud6hEImVVWrufWf1yM9r33qC6QfJahYsYIzf3UaH7z7bjYlyXVd6mpruf/uuznztNNIxONrze0Ih8O89NwzPPbwQ4SCOq7rUV7ehf3334dRo0dQVtaJSDhCTk4O5eVdGD9+DHvutRs5OVE8zyMU1Hn6iSeY9uUXhMLh9hOIoRAP/ef+rPDQdZ0+fftRUFAIwPJly7juqr/jut9HrnTDoL62hiv+ehFNjc0EAv7+9Jixo9hjr13p1acnhYUFWdsMGNCPffffkxEjh+J5HuGwQUXlKt820uvw2o+cMLz0geC5d0KM6JfHiqpGCOZz0EF7MWxYf0pLiggGA4TDQTqXFbPT6CHsv/+exGyTVTXNDOuXy73PBXnmLY1ouP3PTwiwHQ/PA13fmDsu/HtyO/GVt4rIB0ID6apPc4VCoVAotnLSqRTDR43i6uv/+aMBeoFAgAXz53H3HbcDUFJSQnFxcTalyNB1Hrz3blZVrSYSNnFdl0mTd6Z//75YVvoHvpWbdY7H7zwGgJkzZxMOGXz+ySd88O7b7LP/gSQ2s/WuEH4E49qr/sayJUsA6NuvP0ccdRQ1NTU8/8zTxFpa+HraVF56/nlOPeMM4hkR0tBQz123/wsAz/Po3LmMvfbeDV3Xf9RauLXNbvfu5USju/P22++TSqbwJDzx6MOMnzgJIcRmb8aapsnSJUt47umnso9ddOllnHTqaXz1xRec+xv//D//9BOmT53CzhMnkUwmCYfDPPHfh5g1a042DW7ixHEMHjIIy7KwXftHttE1nfHjxxAMBJg69WvCIYNPP/yQD999h733P7DD6j80DZrigjuf1OlWlkNdUwwtkMO+++zitwROW2sIZL+NreO4FBXls//+u/Pqq++SSKbp1imPO55sYL/JNrom8do5/crz/K82CTUpt5vq6I4ttpBgmoHtom2YQqFQKBQ7Ao7jUFbWmaOOPZYjjjpqra/jfnlipp2sz5hx4ykuKcF1XQzDoGb1ar6eNgXT8F+nb7/e9OnTKzNIcH0+l8RxHEaOGkppaQme5+8WP/bwg5nOV5vnQ+i6Tl1tLTPXiBJcf/MtnP/HP3H19Tfw27PPyR77zltvZOtQQqEwH73/HsuWLsc0dYLBIGPHjUbX9Q0Wc1uWTVFRAePHj0EIQTCg8dnHHzFr5ncEAoHNto9uGKyqrKShvh6AvPx8Djz4EFzXZdfd9+Do40/IHvvl55+jGwZCCJKJBB+8+zYa4DguAwf2Y8DA/hlRKNdrG8uyGDxkIF27lfu2kfDoQw+QSiYQHTS5OxLyox4LVoTICUNds82ECTuhadoGa2ts2yEUCjJ23Egqa+Pk5egsqTSZNksQDLT/eUp2zJrnjk27QmKaJkp7KBQKhUKxbSBahwPG42t9JRIJautq+ODdd7LH7rP//tnd2kAgyJeff0rlylUYhkEgEGDo0EFt2un3PI9AIMiw4UOQEgIBwcL586iuqsIwNi+JwzBMKlaupLa2FoCyzp0p79aNhvp6mpuaGD9hYvbYhvoGkskkmqaRTqd49aX/IfDTs/r07UVpp5INCo81BUivXj0o79oFKSXxRJqvp07JDPHbTMdOaDQ3NWW/z83NRdM1vxWubTFk6NDszz58/z1ampsJhkIsnD+PWTO/xTQF4XCY4SOGZdLmNuLLSYlhGAwdMsi3sylYMH8eNatXY+h6h9yjUsIHUzXyc0I0x1KUd+1KWVnbbGPbNj17dKWgqJhYIkXADPLOlwKjnT3mbLcrJT62PP6AQaU+FAqFQqHYljFNk+VLlzFr5kwACouKGDpsOFamoFnTNObNmY0HeJ4kEg0TiUR+NPV7QwIkPy+XQMBECI1YrIXqqlXo+uaJD9dzKS4pIT8/H4BkMonrOJimmR0YqGd28MORMKZpomkaDfX1LJw3F9MUCCEoLS1pcy1MxvuktKQ4K76WLF6ElO2T17Pm67iui+f57+E6Dl27d8/+bFVFBS3NzQTMABUVK0nE00ggPz+XcDjU5g5cruuSl3kOCKx0iqbGRrQOiHxoAhIpwdIKQU5YJ5F0KCoqzF6DtglsKCouJJG0yI2YfDdfYjvt3JVK+JPVPQmiLY2XtiNXuYPFh8AwAygUCoVCodi2CQQCTPnyi2z3pNFjxtC5S5e1dptbU6Sk9MjNycE0zTbXOHieRzgSJhwJIyWkLY9FC+ajG5u3u+7YNj169mTM+PEANNTX8+B995JKpVgwfx43XvcP3Iyo2HnSZMKRSOacJQh/5980TfLycjfJwZWepKioEE3TEMDypUuwLGuz08hc16Frt+7Z69JQX09LSzPBYJBoTg4rl6/4/hzW8sgkIrOevPy8NhRBry12wuEwuXm5SCSpZJrGhno0bctHPjQNGppgdYNOwARHQnFxQZtFrr8eSX5+Hmnb74Pr/Qz1FgKB6/ivqmv6RtWF9LafGEmHig8h/JoPqQYMKhQKhUKxzeLP4nB47523s49N3nW3HxWkr+mcu+6mtZYVwhcgnutmd6CDwcBmdwDyC449fnvOeZSUlADw4P33ceh++3DckUfw2ccfA7Dr7ntw0qmnZVvISuk7hEIIpCc3fU6HANtxsgrAT0Pf/O1tx3UpLSujsLAIgHQ6zXtvv00iEee9d97i35kCefDrW/z3zKRXyTVts2mLkfL7ayA00HSDjhogrelgaBIp/bX582g2bT2u46KJnzHgIMB23Ixg0jZ4rYQAx7HZXgZyd6z4QGCYphpurlAoFArFNoxhGKxaVcHMb78F/FkeEyfvstYMCfCHC7Y6Wy0tLZu00y+ERiKeIJn0nf9wyKB33/44mz2czy9oHzZ8OBN32SUjLCSrKiuJtbRkj9p50kS6dOmC67r+AMVgkHA0ivQktmPT0NC4SdECTWjU1tbhSQ8J9OrTFzMQ2OxuV57rUpRJeWvl5uuv48C99uTM005j2dKl39sjJ4dgMIjnSQLBEEL459XY0IjjOG22jaZpxGJxmptaEMKvGSksKsxGjLYkrgdFedC5xCNtSQKGRk1t3SalgAkhaGhoIhTQsRyX3KhA19q3060ApFQF5x2xVZIpFFPqQ6FQKBSKbZVAMMiXn31OU2MjAEOGDaNb9+5rpVzZts2kXXYlGvHTrePxBLU1dW0uGNd1jYrKKmzbwfM88vIKKOvcBbcNRcQbdEU0DU3TuPCC3/Py//4HQElpKfsecCAHHHQwkWgUgBuvvZY7b7uVUDiM67oUFxczaZfdsF3fWV25ohLX9dq0wy40QSqVYlVlVdYp7ttvQLvYonW2yuVXXc3Q4b4A8TyPmtWrfyQootEcAsEglpVmwMCBlJaV4kmPpqZm6mrr25zSpus61VWrsSzLnxQfDJNfUIjnbvkxClJCOCjp38OjJeGQGw1QXVWD28Yx5UII0qk0q1fXkBsN0RKz2GMs6D+DxyyzcZUdyw/uMPEhpUTTNDRdV9JDoVAoFIptGSn5/JOPs9/usdfeBILBtXbxLdtiwMBB9O0/EMvyowfffDMT27Y3uittGAYNDY3MmT0Pw9CxbMlO48bTqaxs09OdfkA4HObdt9/itZdfBqB337489MST3Hnf/dxx3/1cc/0N2fN76rHHWF1djWH4k8wPPvRwggEdTdOoqKhk6dLlG+1YJQSYhsmsmXOpq6tHSklJcSHjJkzIFudvLn4b4/48+NgT/On//squu+/B+AkTOe8PF3DYkUdmjysoLCQYDGLbNuVduzF+wiRsxy8gnzptBra1cdvouk4sFmPmzDlomoZlS8ZNmEinTptvm5+K68FBu0riiQQ54RDNDXUsXLSsTa2Mg0GTWXMW4lkJTNMgGLDYbQyk7faXHp63YzZc6tDIh6Zp6Jqx3UxsVCgUCoViR0M3DFZXVzN1ypSsUNh54iTsHwzZk55HOBJlvwMPwpN+JKOmppZvvpnp+wPractqmgaO4zB1ygxSqVSm61WUM846h9Zag83zRXRmZzp0ARx97HEMHTqM5qYmmhobOeDgQxg9xh9yuLq6mkULFmCaJul0mmGjRjN5tz1IpX0ne8bX39LQ0EggsO4ZZpqmYZoBFi9eyqxZczAMA8uWHHrkL+jdtx+2vfkerqbrtLS0cNft/+LxR/5Lv/79ueehh/nPI49y8RVXkpeXnz12p7Fjs0X/Ejjw0MPQNX/3v2Z1DdOmzsjadF0iyjANPM9j2tQZtLTEkNIjPy+HX591DkLTNts2P5VkGvaZINl7QpqKmjTdy3KZ8fV3NDQ2+XVC6xSFgmAwQGVlDfPnzqdH5zyWr0oyeZTFgJ4Sq73FhxC4mRoovU0tibcfodLBBeeijRdcoVAoFArF1kgwEGDOrFmsrq4CYNCQIfTu2/dHE74BkskEvzzldA446AASSb+d7czvZvP+ex/R3NyCYRiYppn98tN5anjrzXdZubICw9BJWx7H/vIkhg0fSTqd2nxfBNZKD6uvr8/WKkgp0Q2DvPzvHfbWNrZS+kkzF15yGV3LO+M6Hi0tcd58411mzZyD53lrrcUwDGzbZspX0/jk488BsCyH4uJCjj/plB+JtZ+KoRvU19Vx6z9v4NZ/3sDN11+HbdsYpsmypUt59+231hAf47LRiWQiwW577MVJp51OKu1imibz5i3g3Xc+oL6+AV3X11qPpumsqqzizTffZfHiZRnbSE44+RSGDB+RLczvCKT07fOnUyQpqwXb1SnO0Xnz9feZN28Juq4TCAQwTSPTUtkv9v/mmzm89+5HdCkO0ZyQRCMxLj9T4rjtL6L8+85/XU1s3B33PHe7yc4yOvLNhRAIoam0K4VCoVAotnrkOnfzhaat1eVq9z33IhqN0rJGsfb3DpSHGQhw+VXXsrqqiunTZxAOGSxbtpLa2jqKi4soKioiNzdKQ0Mj9fWN1NXVY1kWuu7PbDj08EP57bnnk0wm1unQtZ5rGx0RJJKyzp2zD73x6iv88pRT6NW7DwAff/A+X3z2GeBPC+/Vuw+27WTEg0XP3n24+Mq/84dzzsZxXNLpNF99NY0FCxZRVFxEaUkxtuNQV1tHfUMjTY3NvqOedsjPz+Pq6/9J1+49SCWT7WIl13UoLS2lpLSUyooKFsyfz6MPPcjRxx7Hfx/8D5UVFQAMHT6cESNHrtUUwLJtzv/jX5g/dw6ff/YF4ZBBZWUVdW++T3FJIUVFheTn5dLY2ERtXT11tfU4joOu6SRTDr84+hf85pzzScQTP7hz/EiJQGwxBzqVhqF9Pe74q8s519RTVlRIzzKTr6dNY86c+RQXF1FaWozredSsrqW+vgEnHadvt3xa4pLK1U08dp1Lr3KP5kT7xx38DlZe9ndIbkSquI6z3XSHNTryQ0zTdLT2bh+gUCgUCoWi3R0lf6p3Gtd1s3UAmqbR3NTIV198nj1254mTNpg+ZFsWuXl53HTn3Vx75aW89eY7mIYglUqzYkUFy5evROCLAiE0NE3gOBLLdjjp1JP488VXAP58jh853pmIhdiIq9gqotLpNLZtM37CBCKRCIlEgoqVKznztFM56NDDqVldzasvvUgy4TvTo0aPprRTJ1z3+0hJPBZjj7334+Y77uSGa/7OihWVBAMajY1N1Nc3snDB4lb3G13XEAKSKYeuXTtzw623M2b8hLW6av3owm/cnfKjMOL76fMlpaWccNIp3HT9tYDf7erft99GPBYDIBQOc/HlVxLNySG5huhxHYdAIMB1N9/Grf+8lpf/9wKeB0KkqaxYRcXKyh/ZxrYlNg6/+vUZ/OHCv+J5MtMWdm1R6Loeruci9C2XdBNPwmF7uBTkSH57VT01jTl0LyvA8xzi9auor64AAeGATmleAE0UsnhlgvLSBI9e67LHOElL4udst6sDbWyYoIYMtoP0kJnIh5purlAoFArFVouUEk03yM3Lp7pqFU2NDdmU6UAwyMxvv2XpkiUA9O7Th4GDB68z5WpNUqkUxcWl3Hj73VxyxRUUFxdjWS6WLXEcsBx/orRleziOx+idRvHPW2/hL5dciZRyncLDMAwqV64EIBKJrHdfU0pJJOJ3sFowbx6O4zB46DBOPv1X2WMWLljAbTffyBOPPkJzczMAncrKuPDSy/xGOT948WQywT4HHMSDTzzDQYccRDAYxLI8bEdmvsB2JKm0S2FhEaedcToPPPYUo8aMW6fw8MWRWCMaIjbolGqahuu4vigSgmQyycmnn84JJ5/iiwrXJdbSkj3vv/z1YsaO33kt4dFKOp2moLCQa/55Czff8W8GDR6IEALLzthkDdt4HkyYtDN33HsvF1x0Ma7r/kh4+LYxqVy5EulJ8vML23dS+EZojsHk0R6v3uFyzL5N1DTUs6LaxnaDmGaYoBkhltJZUZWipqGOEw+K8dqdLnvv7JFI/ryb494O2mq3Q9OudF1HaJr6ZFcoFAqFYitGE4KSkk5UV1UyfepUjjr2eJqaGjEMg2mZQnOAibvsQl5ePvF4bIOvJ4TAstJomsaJp57O3vsfwMxvZvD11CksW+YLmWg0SjgcYeIuu7H73vsSDodJxOPrLGIWQqDpOp9mBgLm5uVnazN+5PB5LgWFxQSDId59603OPv93mKbJeRf8keEjRnLnv25h4YIF2eiNruvsNHYcf7zwIvr06UsikVjn68ZjMTp1KuO6m29jxfJlfPfNDL6eNoXGhgai0SihUIiyzl048NDD6dGzN5aVzkZUfkg4EmH6lK+Y8uWXdO7clWAwuN7OUQJBaacyVlevYvqUKRx17HE0NDQghOCSK65k7PjxfPrRR9TX11FSWspBhxzGuJ0nEIu1rNc2tm3jOA777H8gEybtwsIF8/l62hTmzp6J53lEc3KIRKJMnLwrEybvihkIkEwk1msb0zR48YXnACjtVLZJ08bbg1gSunbyuOnPcM5xNs++7bKy2iOV1oinJN3KYPIoGD1I0rUTpC1JLPHzn1erScUOtg/foWlXQmjtMs1ToVAoFArFz+kkuXTr3pM5s7/jtptvYtSYMfTrP4BEIsGxJ/ySvfbZFyEE5V27YlnpTWomk06nKS0tY/+DD+WAQw7Lzu1onb/heR7pVIpUMrnOtq+GYRCJRnnmySd4+X8v0LlLVwoKi9frrPtzKIL06TuAObO/5fabb+Kvl1+B53nse8CBTN5td1ZVrqS6qhqQFBUV06d/fwzdIJlMbHBtrusihEbP3n3oP3AQvzjmeFzPRRMiu9lqpdPZepUfvpYQgnAkQnNTEzdccw0Ag4YM2+D18zyXbt17Meu7b7j9lpsZPnIUAwYNItYSw3EcDjn8CA474khc10U3/M5hqVSqTUP30uk0wVCYUWPGMnbnidmiZ6GJbLQllUqRXs/rGYZBNBrlqccf483XXqNz564UFBRt8Ra8ArBs/6u8VHLR6a4/2V76/+o6eB6kLT9Va0vRWsiuafoONeqjw8SHb2wdTROq5EOhUCgUiq0Yz/PIyctnpzE7M3XKZ5xx0omc8dszmbzb7uTm5dG9Rw/fmXKc7KDBn+wlrpViJDfolGm6xurqal564XkefeghAoEgw0eO2ejGpuM49Os/iNqaah5+4D/U19dzwskn071HTwCKioopLe3kt0N1XRobGpA/Zbde/GAta/yzrrV7rsenH3/EQ/ffx7ffzGDw0BEUl5StM5VpLdvk5LLT2J2ZPvULzvrVafz2nHMZP3Ei4XCY5qamtc9jc5wusQm20TTq6+t55cX/8eB99xIKhRk2cnSH+9h+ClzH/04JAZblZv6/cSHY1iGJSnxs7MJrIvMho9SHQqFQKBRbM45t07N3XxDwzddT+fvllxHJpBN1FFJK4rEYlmWRX1DI2PGTyM3L3+jUcyklRiDAhMm7M+XLT3n5fy/w2ssvZVvqdlRWhm3btGRqTPoPGMzgISPWKm7fkJjq03cgUsK3M6Zw6UUXdrhtwE9FS6fT5Obms/Ok3cjPL1irrfEO/zu1CWlXnuduN+vu0LQrXTcQQnTYEBqFQqFQKBSb4Cw5Dj179aWsczkrVyynsmI5rut0YAq1pKS0Mz179aGsc3kmFahtzq3nuhiGycTJe1Bbs5plSxcSi7V0aDp4MBii6+AedOvei7z8AjzPa7OPZNsWvfv2p6xzFypXLqeqqgLHcTusnkBKSVFRCT169aFzl67ouqGEx489YcDb4dbdwXM+VM2HQqFQKBTbmgAxA0H69R9E334D6ejshVY/wnXdTa4laC18Lu3UmU5lnbeKzdDWOpefUhfhOg7hcIQBg4bSb+CQDh9lsDm22RHwvB1z3R0nPiRqurlCoVAoFNsg0vNwtiPPqS2pTVvuXDbPSfc8b4t3k1L8VFuvLdJ2FDq0z62KeigUCoVCoVAodjQEYK/Z7WoHqn/uuG5XkK35UCgUCoVCse2hbQWzuqSU7ZIuJYTYKnwST8p2SZfStpI5aioKs3710drtauO2kltVdG6bFR+tv+gKhUKhUCi2LXTDAClJJhMdXieh6wahUOgnpxtpmoam6aTTqQ22tN1ShEIhdMPAdd2fdG11w0B6HqlUssNto2k6oXAYpFQ1H+sUzhrgsrGoh8yI7A1Oulfio02X3P/wQgkQhUKhUCi2BYTQMHSd1TVVzJ75DbU11R1+Tpqm0bNXHwYNHk40Jzc7mbxNTpBhYFlp5s/9hkUL520V4iOak8uAgUPo2asvmqa3ucWqEAJd11m1qoK5s7+jvq5mK7hfBN2692LI0BHk5uVvkm12LPGxY6EiHwqFQqFQKNokPDzPZer0L1m6ZCGBQIA99t6boqKiDtthF0Jj4YL5fDtjBitWLGPY8NH06TuwTSkqumFQW7uaqV9+Sjweo/+AAQwfMRJPyg5rT5tOpfnyi8/5etqXrFyxlHE770IwGN6oAGkdWzB96ucsWbyQUDjMnnvvQ2FhIbIjagkyU9BXLF/OlC+/pLJiBaN2Gk+v3n1Vu91WmwGu3DH94A4VH7puqLtPoVAoFIptAF3X+HbGFJYuWciESZO44MKLGDFyVIfO6xJCw0qnePP117jp+uuYMf0rgqEQ3br12mAUQ9d1Gupr+eTDd9B1nQsvuZTjfnki0ZycnzbJvN3WI6iurubu22/jiUcfYdqUz5k4eY+NXmMhNKZP/YzlyxYzeddduejSy+g/YKA/va7DbCNwHIf33nmba668gmlTPkPXNbr36K0ESAbHyRSc72DdXzvU+99aiqEUCoVCoVBsSHgYrK6uZPGi+ey2x57ced9/0HSNeDz+k19TSkkgGCRgmliWhZSSYDCI7ThY6TQAgUAA0zRxM3MvAqaJ67qkUqm1fIkjjjqawUOHcfJxx/Dt11MpLS3DMMz1OuxCaCxaMBfXdbn5jjs5+LDDaWluJtbS0ianOhQKoWkajuOQSqXQNI1QOIwmBLbjD100dB3LsrAsC4QgmFlL62NCCMxAANPwXTHXdUmn0xQUFvL3667H9Tyefvwxli9bTO8+A9YrpnRdp652NcuXLWbvfffj1rv+jdDaZhspJaZpEggGsyJFSonjOD9KkRJCYJomhmFg2za2bfuT4g2DYDC41rGe52VtesBBB9Onbz9OOf5YZn03g85duqFp2s8mWCUQNCFgfq+7pPSniVubmPUlBAQDoGvfP7/dTluAbftCVxOCHWnedoeJDyEEhmGwI7UWUygUCoViW0TTBNVVVQCc9uvfYBgG8Xhs8xwQw2DxwoUsX7aMnr16EQgEWDB/Pl3Ky+nXvz9mwGTZkiUsWbyEUChEcXExlRUV5OblMWTYsKwD63keTU1NDBoyhKOOPY777/43TY0NlHbqss70KyE0ksk4y5ctYez48eyz/wE0NTa2yRkWQmBbFtOnTiWVStG5Sxf6DxxIKplg+tSppNMpyso6Y9kWdTW19O7bl+49euBJybw5c6isrKRvv350696dQDDI4oULWbZ0KVJKupSXM2jwYFKpFMlEgt+efQ6vv/IyixbMo0fPPuuNfghNY1XlSgBOOu00DNMkHou12Qarq6tZMH9+9noGAgF69OxJt+7dSafTOI5DMBhE0zQWLlhAdVUVPXv1okevXljpNLWrVzNv3rzshrIQgty8PAYMHEgoFPJtM3gwhx/5Cx68/z4aG+spKSn72bo3GTrMWworVoGu+2LB0KFHF+jfE5Ip8OTGBUzA8MXH13OgvhnKimFoX3AccNshOCYA23GzNtyISsR1nO2mSrpjaz40TUkPhUKhUCi2cjzPo66uhtzcXHr26kU6ndrs1wyGQjx437289MLznHDSyYTDYR64717GT5jAY888x7KlS/ntaadSWVHB8JEjGTBwIM89/TRdu3Xn6RdfJBKJrtVBybIshgwdBkBLSzOdOpevs5ZX1zUaG+oBmDh5Fwxdb/MuvGmarFyxgvPP/A2pVIrBQ4fy7MuvMmPabH5z6skAjBq9E7FYCwsXLGDs+PH855HHCAWC3HX7bbz/ztucee55XHz5ldx/z7+56bprSSQSmfMyOOu88zjz3POwbZvyrl0ZPmIkn33yMbZtYZqBdfulnqShoZ5IJELPXr1Jp9pum3A4zLtvv8X1V1+11uORSITjTzqZ355zLnl5eSxZtIh/XnsNn33yCZZlEYlG+fVZZ3P+Hy7gxU8+5oqL//qj1x4zbhzX3HAj5V27kk6n2W3PPXnw/vuoqa6iU6fO/FzNr0Im3PgQvPjB2jYNBeHC0zTOO0FiOxuOYJgGxBLwpxvhf+/LrFw473jBZWf6VTTtkZ0n0QG3TfvwcjsKjXRg3pPA0A0V+FAoFAqFYitGCIHrusTjMco6dya/oKD9Zjes4VB5mf8LoeG4Ln+//FIqKyoIBoNcftXV5BcUZl22dQok16WscxkA6XRqA7vEglQqCUDvPn1wN3ktMlvEvXzpUupra5k9a9ZaQq3VUZz61Vd8+fnnhMOh7FpDoTAfvP8uV11+GYlEgvyCAkpKS3Fdhzv/dSufffIxoXAYKSW6rrX1lPwmPpu8Nf59NMU0Tco6dyESjZJIJHjg3nu45847aGlp4bwzf8MH772HEILikhIS8Ti33XQjLzz7LKFQeK3n5+TkIIRg2pQpXHfV37PRqZKSUnRdJxZr/llTjCTfRzYiIUG3zpCfK0il4e/3SB57BaKhDd3vfprVxbcJ/ve+JBSELiUCISR3POlx2+OCUKB9zlNuSsH5dlSbrnXkh5mq+VAoFAqFYhtBbpkulcFgkHvvvIOP3n8fgL9cfAmTdtmVZDLZJoduUzw1oWk/YRNUZF8/Ho+zfNkylixatN6jn3v6SSTfXztd1/n8k08AKC4p4cFHH+eJ516ga7fuAEyb8pW/OdvWdWROR7J59Qj9Bgzg+Vdf4/V33+ekU08D4L233+KNV19hyeLFaJrGP268idff+4BJu+4KwLtvvYmb6cTVu29fnnvlFV577wP+dNH/AfDpJx+zaOFCTNPMOvZbkgN3ga8eE0x9AvafJADJW1/IDaZdmQYsWgEvf+iL0vsu05j5PPxib//kX/3II5UGbbPXIrLRkx2t+WsHig/QdFXzoVAoFAqF4nu++Xo699x5BwDHHH8CvzzlVGItLT/Pxq+Um72jPOXLL1iyeP3i4/133mHOrFl+UTfgODZLFi8GYPc992Tk6NH06tOHncaOAaCyonKN1rpbzkfSNZ3c3Fy69+jBoUccCUBDQwNffPYpAMNGjOCAgw+msLCQM848C4BVqypJZtLGDMOgtFMZffr1Y+/99s/Wx8RaWvx6kg7w+MJB6FIC5aVQmOc/1hwTeBswu6ZBc8yvDQGY5ZuK846HvcYLdh8rsmJvc8W842a6XWn6DuUPd1DNh0QILXszKhQKhUKhUAA0NTUB0K17dy685FJsy0L8oJvS1sQbr73K6up1D1sUQmBZFi+98DyBgJ+rk4gnWF3tF+8XFZfguC7Sk+QXFGTEx0osy8LIRAu2FEIIDNMgkUzy0Qd+1Km0tFO261XPXr3QhEY6nSY3JxeAmtWrac7Yq6mxkZeef55QKMSrL7+IlJKiomI6d+nSYa11P5omOfpPsGSlYPpc3+Pcf7KfVrU+/9OyYVBv2GUnwcfTJdc94PHwS4ILTha8dBsIJPXNmx+tkMhMq10NTRMb94e3I4e5Q8SHlH7nDE3XVeBDoVAoFIrtHCkloVAIMxDAse21WuWuj8qKCqZPmcJue+65Va9t/ty5PyoGbv1uxMhRfDPja157+SWKiop98ZGI01DvF7znFxQgpURogmhODgDVVVW0tLRQXFKyRdexeNFCTvvl8TTUN7BowQIA9tp3HxYv9KM65V27oek6QtPIzc8jEAjQ1NjI6tW+8KpYuZK//OF3a73mr848k27de3TY5PjlVf5Xq0WiYcHkURsuFnc9CIfggb8JbngIHn0VVtVKLrxF8r/3BDf9Gfr1gLS1+efnehIQmXksGznWcbabuo+toOZDqQ+FQqFQKLZnQqEQb73xOn845yz+99yzBAIB349ax/ZxJBqld+8+eJ7Hv26+kVgshr4VD2Fbs8D8h+y1374MGz6CFcuX89233wBgmgFCYb9IO5VMIvAHAdqW783m5OQSDAa3eHejeDzOV59/wYJ585BSMm7nCZxx5tnZCExTYxOBQIAH772Xe+64nWAohNC0bP2uGQhQ3rVr1lbHn3QSvz37HJLJRIfZZsxgwT//KDjzaEFZsSCelPzfrZBM++lV63SMBcST4HiSq86Ft/4tOGRX/z797BvJH28E226Pmg+ANe7rjbze9uQtd5z4WOOGVSgUCoVCsf1imCZfff45b7z6Ku+98zaBYBAhxBq1Dd8zctQobrztdgKBALNnzuTpxx8nGo1uVc6XlNIfLBj6vm1SUVHRj5zE4uISDj7ssKxIAcjJzaGszO/K1dzcjMik3DTUNwDQrUd3f71beNJ69549ufFft3Pz7Xfy5Av/496HH6aktJQu5eUAVKxcwYL587j91pv533PP0dLcTDQazXYh69O3Ly++/iZ77bsvAPPmzCEWi22RJgXrY3Af+NMpcPdlcNGv/Me+XQDLKsFcj56NhuHF92Dw4ZLDficZ3Ffy9I1wxVm+zzplpmTeMtjsrDgpNjpvZHulw7x/TWhoQtuhJjoqFAqFQrEjIoSgvFs3ABbMm8fq6ipc12XZkqUA5OXnoWWcVNd1GTN+PMee8EsA7rv7LhYvWkgw4Nd9aJpGNJpDTs7aX0IItpRT4bkeBYWF9O7bN7u+4SNH/ei4VCrFoUccSX5+fvaxQCBIz169AZg+dQrpVArbsvjumxkAdO3mpzdtaQoKCjjkiCM48NBDGTJ0GJ7rYVs2ffv1A2DOrFlITzJi1Pfr7NGzFyXFJdlrkJuXx6m/+jVCCL6eNo3XX3mZSDTa4b5e2oL5S/37KxTw06qCAV9oGOuoAIj4gSkWroDlq/zjdxrsP+a4Attpn5oPf9aJyNy7G/sd2o42Izpoz0ClXSkUCoVCsYNg2zZjxo5F0zRWLF/OycceQ3FJSTYVafKuu/HOW2/5HoKUpFMpTj3j17z+yivU1dXyn3vuwQz4W80N9fVc+/e/YRhGdoZENBrlzPPO22JOu0RimgF69+nLnFmziEaj9O3fjw/ff28tv8a2LHr27s2e++zL/557NuNFwsiddoIHH2DWd9/xp9+dTzQaZWGmzmLwkKFIKbe4d+R5Hol43H/vjFqwbYvhI0eRk5tLbW0Nf/rdeX6aWIYDDj6I3Py81otCLB5n7Pjx7HfAgbz5+mv859572Gvf/cjNy+uQ+27KTDj3H7B4JXww1Y8k7ToGenYRXHIHzJgLfz5VMHmURypTw2E7MKSPIBSQ1DfBsX+GccPggyn+83t2gV5dBLaz+Rbyu11pG+12JaXMDNTcPhRIh0Q+/IJzbcdrbKxQKBQKxQ5IOpVi5E5juOjSyzAMg2VLlzJ96lTAb6e76x57Zgf/gT+tvGevXpz+m98C8MwTj2cce4jFYjz1+GM89t+HefyR//LkY4/y6MMPU1/fgGFsiT1VmYmwSAYO9rfDC4uKKOvcZV1H4nkehx55ZPaxZCLBoYcfyeG/OAqAt15/jReefQaA3fbck332P4BkMrlVuJmWZTFg0CAuvvwKNE1j5rffZgUjwPSp07DS6bWui+dJTj79V2i6zuKFC3np+efWSk/bksxbJvn305I3P5OkLRjaV3DNuQLXk7z/leTj6YJlqwRr3jaWDf16SM44UkPTYOEKyROvS1bVQm5UcMMFguJCudkT2qUE2/GAjc+9axXZ2wtGR72xEAIhVM2HQqFQKBQ7AlY6zUmnnc7Y8eOZ+tVXNDc1MWzECCbtsivxWIy999kP0zQZPmIUrucRj8c56thjcRybluZmcnJz2WOvvX/0up7nEYlEKCoqor6u9mddg+O4FBYWcea555Gbm8tue+5Fc1MTvfv0YdiIkZx6xq8ZNGQIqUSCpUuWMGbsOJoaGxk1eif+evkVrFi+nHETJmDbNldddz2777UXH7z7DulUml12352DDj0MXde3WGvatJVm9E5jOPm00+nbv39WMK1JIh7nsCN/Qf+BA5kxfToN9Q2kUgkeuv9+9thrbwYOHswpp/+KXn36oGkayWSC4SNGcumVf2PRwoWUdSnPtuvdEjguHL0v9CwXBEy/s1VhHoweJBjRXxIJS2wHfnu0xqKVglED5Vqdq6T0X+Oq8ySH76nxxXeSeMKPeEwcKejeRWZngGwunmx7pG572q7vsLQrTdM6tAhJoVAoFArFFvzLLyXJRIIBAwcxdPgIhBDZtruWZTFp113Zc7/9sC2LRDyOEIJgKMRZ5/8OIYTfknY9foOUEtdx8DZ3O3pjzqLnEs3N5fd//gue55FOpbjo0stwbBvLsrjkyr9h27Y/M8MwSCYSpNNpNE3jlF+dga7rpFIpEok4mqZxwMGHcOAhh2bXlkwktuhMDCudZsjw4YwZPx7HcUjE4+s8LpVKMWjwEIaPHIWu68RaWth3/wMZPHQoQggu/ftVaz3fdmxOOOlkdMMgnU6vER3ZEoIKDtkNjtrn+xIgKcF2JZblRzYATj7EwzAgkfQfW/PWkhISKdhpsGTCCP9nrgdpS5Jqx6X4pt6YPyyy97gSH5uJUOJDoVAoFIodjnQ6TfoHzqgQAtu2kVJiGAaRaBTPdXFdl3gs1ibHKxQKbZF0bul5tDQ3Z79vHbK35v+FEOi6jmmamIEAnutiWxapzJpaxdT6nP0t5otlppC3tvldH5qmZesOXMfBNAOMHjOWeNy3jb3GNWglvsbaWgcsbpk1+a10kxsQCbru13Z4HgTMzPe2LzDWEl0W2VqQ9hfjkLZcIJi9vutbj+e5OK6z3fjNHThkUMv+8ikUCoVCodgxMU2TQDBIrKWF5UuXsHTJYsKRCEXFxRQUFtG5cxd0wyCVSv3skY32cObD4Qiu57K6uoolCxcQi8UoKSklNz+f4pISiktKcWwHy0pv9T6QYRgEQyES8TjLlixmyeJFBAIBikpKKCgopKxzFwKBIKlUMlMQvTXbxu9wFTCguk5QVQf1zVDbAF1KoH9PKC2UuB7tlla1MTzPFxOiDUlVKu2qXW4CLXMplfhQKBQKhWJ74PtOlm0pkhVEc6JUVqzk8Ycf4ItPP2HF8mXEWpJoOoRCQcKRCGPGjufgw49k/MRJRKM5bZqO3iEiKhBA13VefekFXvnf88yfN4famlpcRxIM6gSCQQqLitn3gAPZ54CDGDxkGJ7nbbE0q1bbbGgo4prHRqJRqlet4qnHHubTjz5i+bIlNDfHEQLC4QChUJjhI0dz8OFHMmmX3cgrKCCVTG51dpH4gkPXBF/PEbzwnuDNz3SaYzqup+G4GrrmUpTvMGqgyymHSvYYJ0ml/dqQn++8hB9pEWL7UhZbr/iQ6LqeiXyoD2uFQqFQKLYX4dHarjUQCKBn2uGu69hwOMw7b7zGjddexbJlFegamIZGIKj7qTy2jdXYyBuvv8lbb7xJ/wH9uPTv/2DchInEWlra1ytZI91rQ+uzbTtbj7ImwWCQ2toabr3hWl564UXf4TUFhqGj6xJPSlKpFBUrV3Lf3ffyyAP/YZ8DDuDSv19LNBollUr9bCk1QgjCkQiObZNIxIlEczBNM2unH6JpGqZp8vrL/+NfN93AsqUr0QSYpkYg0GobB9tq5oP3PuCD9z6gZ6/uXHTZley5z37tbpvNFR7hILTEBRf8U+OdLwKEQ2E6FQXJiwocx0HTfDulLcln39i88VmMEw60+euvJHk5fgve9raM8G860rZE0/WNNmDyPG+rjyxtA+LDj3yokg+FQqFQKLYPotEot918E08+9igAu+2xB1ddd8OP6jsAcnJyePC+u7nhmmsQAiJhE8dxkEAwECAYDJBM+oXoAVND1zXmzVvI78/6Ddff8i8m775nu9ZLmKZJVdUqnn/66fUWttu2zcBBgzngkENw1ujeFAwGqVpVybm/Po358xcRDhlrzGWAnGgU13NJJlOAzP78lZdepb6unmtv/heFhUVYVvsXF+i6jqbrPPbwg7zy4os0NDTQuXNn9thrb355yqlrneeaQuXOm//JHbfdjqGvYRsJgYBJKBTM2sbM2Gb5shX8+fxz+ds/ruPgw39BPB7bKu7JUABq6gWnXa4xZ3Eug3pHicVTVNc14noCIxDyr4GdxtAknYqidCkp5sk3Ynz1XZynboCSAo/0z9CsSyJwbInQxEaFp5QST3rbTYDE6Li3ViEPhUKhUCi2B0KhEDO//ZYH77uPZDIBQMXKlSDEj+o7c3JyePWlF7j5+uswTX/H1/MkAwf1p1u3cvLycgkGg8TjCZqbm1myZDnLl60gHDJobm7ij+edw533P8CYcTuTbKc0n0AgwPy587j3rjs3eNy4nXfm4MMPw3X8NWmZtrhXXX4J8+cvIhI2sS2bgsJ8Bg7sT3FJEXl5ubiuS3NzC7U1dcyZM59EIkkkbPLZp59z4e/P4457H0A3jHad5aBpGmYgwN8vvYSnn3g8+/jypUv56osvWLlyJRddculaaViRaJTXXvof/77jdoIBvzbX81z69etD9x7dyMvLJRwOkUgkaGxoZvHipaxcWUEgoGNZaS7+y58IBoPsfcBBHV5Mr+sQTwhOuVRn8cpcBvQIsayyHi0QZciIkRQXF5KXm4OUHk3NMWpr6pk7ZwEBLcmQ3gUsWKHxxxubefhqgaZJ2nXMhgApBV6bqj0y4ykQSLaPDC1DfWQqFAqFQqH4yX6U8J2i22+5OSs81kcwFOLraVP426UXI6WLEDq5uVHGjx9Dt+5dAYnr+s5wYWEBxcVF9OzVgwXzFzFt6gwAWmIJ7rjlZu59+FGEpiHbwSsUQqOxsWGjx5lmwHcCM1oqGAxy5y038tEHHxEO+eJhyNCBjBg5jEgknEmX8QgEAkSjUbp2Lad7j25M+Wo6lZWriIQNvvziK9575y0OO/Lodo0YhEIh7r3rzqzw0HWdUDhMPBYHJI//92GGDB3KUcceRzweJxAIsGDuHK79+5X4c6AFoXCIceN2onfvHoAvRDxPUlBQQFFRET17dWfx4qVMn/ZNpouZy12338b4SbsQCAQ6NFUoJwz3PSuYvSjC0L5h5i2rp0ev3owdO4JAwMB1/bWARmlJEV06l9KnTw8+/3w6i1dW0b97ER9Mdbjt8Th/PlUSS7Tv+bke2LZfhqBpG4l8eDITkds+PjM6ZsqfBF1XukehUCgUim2dSDTKe2+/lZ1AviEMXefpxx+nqSmGYRgYhs4uu06kR89u2LaNbTvZnXjXdbFtG9d1GTJkEGPGjMJxXMIhg6lffcXbb7xGOBRuHwGlCZoavhcfv//Tn3n2lVd59JlnefRp/+u/Tz7NJX/7WyY9SmKYJqsqKnj6iScImALbdujTtxcTJ40nEAhgWTaO42YL7x3HwbIsCgry2X3PXSgpKcZxXDQBTz32SHb2R3sQDIWYMX06d9x6KwD5+fncdve9vPn+h5xw8snZ41558cXsXJJAMMirL79IbW09hmGgaRq77jKRvn17+zUetp0Vhq22kVIyaFB/dp4wFikloZDBnNlzePmF5wiFwx12TxoGLFsleOBFg15do6ysbqKsSzmTJ49BCLCs79fSup502iIYNNlzr4mEcwupqY/Rp1sOT79lUtsg0NvRYxaA6/jDDfVMzcf6W+1mRJ/rsr1UpneI+JAZBb7DlfcrFAqFQrEdoes6TQ0N3HHLzW06tr6+jhnTp2Lq4Louw4YNoVOnUtJpa4NOQzqdpv+AvvTq3QPXdZESnnnicdLp9inUFgia1phVsfPESey6+x5M3nU3dtl9d8ZPmMBOY8fSrVv3bGpUKBjk/Xffora2Dk1oFBbmM3qnkVkBtT4cxyFgmkyYOI5QKEQgoPPtjK+ZPnUKgWCwXeximiYff/gBjuMXK5zyqzM45LDD6FxezlnnnU9efj4AK1csp6WlBd0waGlu5rOPPkTX/ALnUaNHUN618zprdrKmkZJUKk3PXt0ZMKAfruuia/D044/S2NCApukdcl+GA/Ds24KmljCacEl7JuPG+7bZUKcv1/VASsaPH0VD3ME0JKvrTL6aKQgF2/EEBXgIPLkJo2m2I5e5w8IPUtV8KBQKhUKxTROJRnng3ntYMH8+AAUFhTQ3N63T+Q4EAnzx6SesXL4M3dAJBAL07tMT19t4ao6UEk3TGDCgH8uXrcA0YemSRdTV1lBS2mmz29VK6RGLtWQd96+++JzXXnkZz3UpKS1l9z33YsiwYdk2v0IIkskk7775hr+L7bn07t2TnJwoVnrjheOO41BaWkLXrl1YuHAxjgszv53Brnvsufl+bWZw4DdfT89+v+8BB1BXV8eyZUvp1KmMa66/gUULF1JQWIhpmhiGwZyZ37FwwXx0XZCTE6Vfv944ThvTpiT07debhQsXI4RLzepq6utq6da9B5635VOvXA+mzNLIzwnSHEvRtVs3cnOiGxa5Wdu4lJQUUVLaiVi8gWAwyAfTEhy0a/ueo+eB65IRz2JDl3a7o+Nyn5T2UCgUCoVimyUYDDJ/7lwe/s9/AMjLz+fUM87gXzfduM7jdd1gyeJF2C5ouiQajRAKBZFe2xwC13XJiUYIBgOk0xYtzU1UrVpFWZfyzRYfnpSZWghfGNx+y81r1Svc9++7+OsVV3LMcccTj8fRdZ2G+nqWLF6EafpF9UXFhXhu2+tPpJQUFxexcOFiAJYtXtwuQxQ1XaeutoZ5c+cCfoH/A/fey5SvvqS6qori4mL23Gcf/vLXSygsKqK+rg5NCKqrVpFK2ZimID8/b5NqNlzXJScnSiQSpqUlRjqdoqmxkR69evujw7cgmua31l1RpREJ6dQ2OvQuLNjEYn5JYWE+lUtXkxMOMncxOI4fpWiPERECcF0/7cowjA1G7/xjnXZtRtDRaB32zqrPrkKhUCgU2yy6YXD3HbfT3OynK/3ypJMZu/PObfrTLz1JNCeKaRptnvItpSQUDmVrCVIph8qKlZk07s1zBKXnEYvFsu/jZiIencrKAEgmk/ztkot57523CWdrGWTGGZWYpkE0Gt2kieVSSgoK8v2CY6CiYiXptLXZaWSaEMRjcZIJv0I6Fovx4vPPUbFiBY5tU11VxZOPPsrpJ57A0iWLMQwjaxwh/M5jubm5m1R/4td7hMjNzQUgnbJpamxstxqWTRUfTTFBQ7OGYUg8NAoK8zLF5W1fT25eDrYrs93a2nXPXPjTzR2XjRab+4X+cpPuLSU+1qMoTdNU+kOhUCgUim0NKYlEonzywQe8+tKLAHQqK+O0X/9mg/UBwPcOoBCkUylc12uzs9065M/OzMMwDCgsLGqXblee59HS0pz9/qhjj+V/r7/Bi6+/yT777Q/4u/tvvvbqGhPc/fUIIXAcD8uyNsmvEUKQSCTxPA8PKCws9MXY5vq1mkYymcDKRBxai6rHjBvHwYcdnh2k+O2MGdx/978JhkKAQHoeMlODkEqlNsnZbbVNMpOWZpga4UikzVGtdr09PQgHJZGwh+cJkC6JeHITRZ0glUyjawJ+pga3nhSZ9r2yDdd3+/oI6bDIh9/ZWKkPhUKhUCi2KcdB14kn4tx+6/dF5r//01/o26//WlMLNE0nHApnd9Y96VFSWorA3+2NxRIZh71tvoCmaSQSSVKpNCDJzc2jvFv3zU65ahUWe+69D4cecSRnnXc+f738SvLzCygqKeGk00/PHrd40WKSqRRSQjQnh5KSUlxX4roO9fWbVmAthKC2ri7r5Pfq0xfDMDc7r0e0irw1XuegQw/l4See4s77/8MFf7kw+/jUr74iHmsBAXl5+RiGf16NjU3ZLlhttU08niDWEvNb9IbCFBYWdki9hyehIE9SXuqRTHuETIO6uoZNisK0XoNQ0CCV9uhSIjD09km5arWR60os209H3Nhl9u8RFfnYfGWqPr8VCoVCodjmCIXCPP34Y3z3zTcAdO/Rg+49uvPBe+8wf97c7HEtzU188dknrFyxAk3XsdIWO40dT6dOJXieRyKRoLpqdZvTpjRNsGJ5Ba7r4tiSTp27UNqp02bPkpBS4rkuvz7rbG658y7+8JcL0TSNdDpNKpmkrKwzOTk5AFSvqqS5sRGE3752l933xPX8OSEVKytxXKdNDnurkKpaVZ11igcMGown2yGKk0mBahV9gUCAc373e0DQ3NTE+AkTMU0TgGVLl1KxsgLpefQfNIjyrt3wPElzcws1q2u/T8naCLquU1lZhW3beJ5HJJpDQWGR3z1qS/uXEgImDOkraY7Z5EYDVFWtxnHaahtBIpli9erV5ESCxJJpdh/bzjM2xJriQ9uIEALX8Ws+hFCtdhUKhUKhUOxACOGn9Lz28svZxyoqKjj1lydwzOGHcf3VV2Ufnz1rFicdewz33nUnoVAI13XoXF7O4KHDsGw/Xenrr78lkUhs1MkNBAKsWlXN3Lnz0HUdV8JBhx5GTm7uZhfiCiFIplKsXL6cZUuW0NTQkI1GeJ5HTk4OkYifqpRIJEgmk2iZNKP9DjyISDiIJqCysor5cxcSCAQ2Kjx0XWf69Bk0NDTiuh69e/dk54mTSGfSljbL+fY8IpFI9jyEELiuh+e5uI5DcUkxRcXFAKRTKVYsX4YQgtJOZYyfMAnH9df91VfTiMfjG7WNaZrU19cz87tZ6LqO7cCBhxxKSadOuK7TIfepZcMx+0gkCQKBAMlYIzNnzScYDGz0uYFAgBlfz0L3LHTdIBq2mDDSLw5vP+0hkejIHXQnvsPEh64r3aNQKBQKxbalPvxIwZqpTp7rbrDuolUcSCnRNZ1Djjgym5zV3NzC5599RTKZJBAwf1R8q2kagYBJXW09X3wxBcdxSacchgwZxPEnntIuznokGuW/D9zPvrvvyn6778pLLzxPNFMXoes6dXV1NDY1AlBUXEx+gd85ybIsBg4ewh57703K8tA1nRkzvmPx4iUYhpEZHifWEjmtBfbTp3/DgvmLMA0Dx4XjTz6F0k6d22UiuOd55OXnU9aliy8w0mnq62ozk7Q1YrEY8Xg8e3w0JwfP84vs9z/4EExDAwRNTc18/PHnxGKxjG20ddqmsbGJzz77ilQqjWU59OjejVPO+A32Fu5ytSZpC3YaLDnxIJullQl6lRcw67vZLFy4nEAgsE4fVNd1TNPk2+/msWzJEnp0KWDJygS7j7Hp01Vit7OOsh2/3e7GC87Z7qoUOqzVrppwrlAoFArFtoX0PHRd5+TTTmPB/PnZ9B3wd8CXLV3CKy/6RejlXbtx0KGHMnL0aJyMI5pIxDnw0MNZsXwZ/7rpZkJBnRUrKmh8/R122mkEXbp0JhAIoGn+bn0qlWLp0uV8+80sLMvy530YGude8Edy8vJIrOFE/2Q9JTQikWi2ze13335DIBjETFtEolFqa2qwMoX0ncrKiEajOI6TnVx+0WVXsnjhQubOnU9YwIcffErv3isZOmwQeXl5GKYBEizbpq66nhlff0tlZRWmaZJI2gwePIhDj/gFyWSyXbxOz/PIyc2l/4CBLJg3D4CFCxaw+5574zgO1VVVxFr8mSbRaJTOnbvguv4E80m77MZ5f7iAW268iXDIoGpVNa+/9g6jdxpBt27lBINBNE3DdV2SySRLFi9j1qw52S5dric58/zz6dy5PDs3paNIpiXnHCd5/dMEq2pNepfn8flnX1C5qorhwwcRjYSzKX+O69LUHGP69O+oqaqkb7ciKlZb9CyP8bez/fSodtXwQmBZLo5LJrIkNqg8/MGacrspPFdzPhQKhUKhULTpD7efwuNy5DHHouv6Wh2RIpEo773zVlZ89OjZk8uvuprm5maSiUQ2CpBOpfjtub8jHmvh/nvuwzT81rAfffgZOTlR8vPzCUdCxFriNDU1k0gk0DQNx/EIhUJccc0/2HPv/X8kPCSsEWloo5MhBI5jM2LUKDQh8KTknTff5IlH/suESZNZvKiZO/91S/bwffc/kEAgkN3Vt22bktJOXPPPmzn/zF9TWVlFOGSwaNFSVqyoID8/j/yCPFzHpbGxmVgshuu6mKZBImkzfPhQrr/lNnJz837UKcwvMZZtMcuP0IRg+IgRvPbySwDce9edDB4yhB49e/Hgvfdkjxs+chSdu3TJRrJSqRRnnHUuVasqeeKxJzBNjVQqxWeffkk0GiU/P49IJEwsFqexsclPQdM0XNdD03QuvuJyjjj6uGzb4rVtk2k2tIX8P9uBkgKPR66B0y5rpKouj0E9i6moWsmbKyvIyc3NtkeOx2LEWlrIjej071HC0soUudEW7rnco7jAI55q3+CDAFypZWp8xEZf3Mt0ItteUOEHhUKhUCgU6/dtpe/UG4ZJLBbzW6omkz8aiOc6zlqCwHUdmpqasNLptdKPPM8jnUpxwYUX07N3H/514z+pra3HNASxWJyWllhml1egaRpSQirt0qVzKZdfcx177bt/dud+bR0hshEKTWw4tVvPdKWKtbRgWRbjJkzkwEMP49WXXiSRSHDJhX8hGo3ium52qvmgIUP4xbHHZr9vJZlIMGjIUO5/5HFuuPpKPnj/IzQBjmNTV1dPTU2tf06a5p+j7SEtj113ncTVN95KSUknkon4j/qpakJsdB3f2+j76wX+XJIjjjqal154gTmzZ1GzejVnnHwSgUCAljWu3fEnnkQoFCYej2VtY9s2/3fFVfQbMIh77ryN1avrMA2Ix+PEYj+wDb5tiovyueiyKzn8F8dkIh7yR7axbRvHcTBMc4ulESXSMKCHx3M3wVlXN/HlTIvykiidSzRsxyEZq0UIKAibFEbyaElIZi9u5MBd0vztbL9jVnsLD/+CSFzPb7Urdrysq44cMqg+0BUKhUKh2AbkB7puUFBYSNWqSmpratrcBWl9eJ6fUnXsCSfxwKNPcMhhh1DaqRQQWLafX2/bknTapUt5F/7wpz/y6LP/Y7c996aluXmdMyhM02TJYn9aeDQnd71zKqT0yMnNA+Cbr79GCLAti8uvupqjjj0ue1w8Hs8KjW7du3P5368mEomssy4jmUzSvUdPbv33/Vx0ycUMGjKQYDCEZXn+WhywLA/X9dh5wnhuvv12br37PxQUFq1TeAhNw7IsamtqMq1Y1++uCeGvPZVMkojHsmlRuXl5/OPGG+lS3hXwaz/WFB5HHnMMu+6xB8lkYm0R6bo4jsNJp53Bg48/zVHHHEXnzl0ywmlt25QUl3DmOWfz6HMvcsjhv6ClZd22CQQCzJ09G4DCouItFv0QQCwFpYUeT93gccf/JehcUs/CFc2sqErR0CJpaBGsqE5S09hIeWkdt/9figeu9Cgr9kikfx53VSCwLA8JGLq+0feQ21lleodEPgT+DorKvVIoFAqFYhtAQGmnzqxcsYx33nyd3/3xz9kow5pOa15+Pv36D8C2bfr2658dcLc+h6qlpYVeffpx/S23U1OzmmVLFjNvju+k5uUXkJefz+Ahw+jStSupVCo7tfuH6IaBZVm88eorANmi8HXhuh75BYUUFBTxzptvcM7vfk+nsjKEEFz5j2vZY++9+fiDD5g7e7b//kOHcNyJJ1HetRvxWGy97U7T6TSapnHqr8/kmONPpKJiBXMzUYe8vDxycnIpKe3EsJGjCEciJBMJf2DiOl4vNzeX/z37DLNnzaRP3wEEg8ENzDMRlHftzqrKlbz71luc+4cLsOrrSSaTDBg4iEeefponH3mEGdOnYzs2vfv0Ze/99mfPvffGtu11iimZGbrYvUdP/n79TdTV1rB86VLmzp6ZsXMBeXl5DBg0mO49e2Gl0yQS666/0XUdx7Z55sknAP8+2pLzPwSQtkETkmP3kxy8m2Tq7CRVtYLmGMQSgr7dJUP6SLp3BtOQxFOZiN/PdU4CbEdmhKbY6AL8rmHbj89sdNSHmFDjzRUKhUKh2CZwHYeu3XqyYN4c7r7jDgYNHsq+Bx6IlU5j2zZS+k79sOEjee6VV/3CcE3Dc73MZuP68TwXz/MoLimlc5dyJu26R0aceEgpsS2LVKYY+4cRF03TCASDeK7LTdddy1dffEG//oPIyyvYgLMu0XWTPv0GMH3qF1z6fxdyyx13UVhUhJVOs/9BB3PgIYeSSiYxTAPDMEmnUljpNKa58VatVtoiEAzSf8AgBg8djiY0X4Qh8VwPy0qTTqXQNG2tDlJ+aptBKBRizuxZ3HjtP9B1nQEDh2ywnbDrOnQp7044/A133fYv+vbvzwEHH0I6lcK2bbp0Kef/Lr8C27JwXZdQOOynkyWTCKFhGNoGbOPhWRaFhcWUdipj50mTAbGGbewN2yYQQErJdVf/na+nTaN3n/7k5OThOFu+E5YnoSXhi5DJI0HTJFpm3rXn+e15bYd2Ly5f3z0opQF4O2QikKr5UCgUCoVCsWFXSUoCwSBjx0/kk4/e5XfnnMkJJ57MbnvuRddu3TBNMxvhaHWoNxT1+N7jZpMmT6/9VEFzcxPLli7l+Wee5sP33qO4pJRBQ4ZvdLid4zj07NWXluYmPvv4Y3572imceMqp9OrTh8LCokwNsD+NYVM3nIUmNnmDVQiBbdmsWlXJvDlzePj++1m9ejU7T9yN6EacdSklgUCAnSfuxmefvMeffnc+386YwZhx4+jatRvBUMi3wyauSQix8V35DdDc1ETFygpeev453nrjdTp16szQ4aPbpZ3w5oqQZLqDf6GEyEY+NF1nR6tF6DDxoRKuFAqFQqHYdvAH1JWx+577M23KZ/z3wQf474MPZOYm6D/pNYUQP/m5UkqSyWTWme3Zqw8jRo3DMM0fFcOvywuREoaPGothmnw7Y0am/kMQDAY3KzvjhxGNNiopP4qQqTExTZPxE3ahW49e2TbFG7SN61Jc2onJu+3NlC8+4Z4778i+zk+tz9l82ySyIrBrt57sNHZCG22z/SMEpC3/2vj2kRu6Nfx7XHW72nxauyQoFAqFQqHYNnAcm/yCInbbc39qa6qpr6uloaFu86aM/0RnQEpJXn4RxSWlFBeXUlRcgidlm51bmTl2yNCRlHftTl1tDQ31dX7Hrs3diP4JawqFoHuPQgoK/TVFo7ltEh5Z29g2hYUl7LnPgdTWrKaxsZ76ujo81+EnD4j4qbZBkl9QRFFRMYXFvn0AJTzWEBSe1Ghr2pUqOG+Xi54pOFfqQ6FQKBSKbQrXddA0jS7l3Sjv2h1Pyg77ey6EQAi/NuGnpPO0TmvPyyuksLAYKTvW0dM0gZR+Hcz6a1Y2bBtdNynv2p2u3XpsJbaRmYJpxVq28kT2Ou1odOCQQaU8FAqFQqHYFml12rcX/KL3jt+Vb4/AgJQejuOpm3Qrx2pNuzLNjepDv2HB9oOmzK9QKBQKhUKhUGwZhADHzbTaFdpGolNCtdptD1TMQ6FQKBSKbd2BEtmp3R2J53mbV3OSQdM0hKZ1aN8hKSWe52126pffqUpD63DbyK0iorQ14kkd2DEjVB1T8yEEuqG6/CoUCoVCsS2KDl03sG2L5ubG9Q7+2yLnoglycvKIRKL+MLufkAqmG4bfnSkRJx6LYdtWhwgqKSEUDpOTk0MgEMoIEXfTbWMY2FaaeEsziXisY0QUoGsa0WgOkWgOum50yGyPrZnWVrt+R7Eda1u+g8RHJsykYiAKhUKhUGwzaLqO5zjMWzCT+XNnYVnpreK88gsKGTpsFF26dMP13DZHDgzDpK5uNTO//ZramuqtRtx1696TocNHEYnktrlYW8tMEp87+zsWLpi71Tj7ubl5DBk2kq7derZLVGe7EPCAZbkZ8buxdsbbX8F+x4Qf1H2nUCgUCsW2JTw0nWQizheffkhjYz09e/ViwqTJdOvRAyMTPdiyTrpGIhFj0fwFfPLRh3z2yfv06t2PUTuNRwix0fMxDJOlixcwbernBINB9tpnX/oNHEBhYVGHOMhSSlZVVjJ71kymT5nC6uoqJu+6FwVFxbgbiehomoaVSvLZpx/QUF9H/wEDGDVmDN179FxrAOSWFFCJeJylS5bw6ccf8uXnH9Ovfw3DR41BusoJBPDQgbaJivZIK9zhxYe67RQKhUKh2LYQAmZ+O53Gxnp+fdbZnHHmWRQXF+N5m/5XXctMzl6zFaxfQyLW65hL2dqKVmbf008z0pk3Zw7XXHkFn33yMSWlnejZu98GZ2Touk5tTRXTpn5Ot+7d+cc/b2TniZMy77UhwWKg6zq2ba/lEBqGsdZgwdb0L9M0cRwHKWVWoLWmdNm2nRUFra/rui6pdIoXn3+OKy/+K19P/5Ld9thvI2LKf73p076kob6O35x9Dmeddz45ubn+c6R/Hpqm4ThOtiWxpmnZc3Jdd73DCKWU2Lb9k+4XIQSLFy3kiov/ypeff05uXj59+g5st6hM6yVf0zcXwn/c8zbeWFXXybQ23vB7tGbhteU123ZxoFVPakJrw+HbVzveDky7Uh/kCoVCoVBsC+iGQfWqClauWMYBBx3MRZdeRjwWo7m5edNeR9cJhUI0N8VAQCSaQzqdxnUcJBIrlV6n82uaJrphkEomMUwzu5svhCCdTtO9Rw+uu+lmjj70EL77ZjplncsxzcB6HXYhNBYtnAfAP/55ExN32YWmxsaN+C6C2poa4vEYnTt3IRgOIz0PTdNobGigqanRH6AsPUpKOwGwurqawqIiAmaA1aurMc0AXiYtrLxrt8w0dJ3amtW0tDSTl59PcXEJJ5x0Movmz+eB++5l+dJF9Ok3aL0Ou67r1KxexarKlRz+i6O46JJLaYnFaFnDNtVVVaTTKUo7lRGNRpGAnU5TtaoS3TAoLCqmvq72R9dLSkkwGKJTWdlPjp706NmLG2+7g6MPPZg5s76jW/de6Lr+06MxEgImBAxoioOhQTQMybQvDjwPkikIBTfuiyZT/r8B88eiQgKREKTSEE/4IiQvCpbTPgLEst2s/Tb2eirysZlIKdGE/8um0v4UCoVCodj60YSgalUFAL885VQsy9rk4m7TNEkkEtx280189P77gGT0mLH84S8XUta5M7fddCOPPvQgkWh0reel02kmTJ7MgAEDufffdzF0+HD+ddfd5OTmMnf2LH531plEIhEefeY5jj/pJG67+SYaG+sp69x1nelKmqYRizWzcsUyJu26K2PGjae5qWmjwiMQCHD15Zfx8Ucfcu7v/8D5f/wT8VgMXde59P8u5LOPP8Y0TWzb5s//91fS6TS333Iz+x94ECNGj+af/7iGLuVdSSYTNDY0cNGll/Gbs89h5fLl/OqkX7Ji+XJO/81vuPCSy2hpbuaUX53BSy88z/z5c+jRq+96ox9CCFauWAbAUccdR9qysuvWNA3XdfnLH37H7JkzOezIX3DdzTejazq33XM3d/7rVnr07MkpvzqDf/ztSgxdz+4OCyGwLYuevfvw6DPPEIlEf9Igx0QiQVlZGUcefQx333E79XU1dO7S9Sc1B5DSFwTfLRDc8JDk2/l+9GK/CXDJbwSRiOTi2+ChFyU3/Vlw/AEQT67jXjSgolpw3IUeORHBUzdAbs7ac1ZywvDWZ4Kr75XUNkoEsOd4wXV/8IWIoUMk6IuRRJpNik0IwHU1wN3obryUrZG07WfXvkPmfCjNoVAoFArFtoPrutTWrqakpITeffpgpTet0FzTNCzL4qIL/sCD993LooULWLRwIc8+9SS/P/tMkskkNatX09DQQMXKlWt91dbUsKqykqpVq4i1tLBy+XJ/kremEY/FqayoYPmyZTQ3NzFy9GgAmpua1ttm1o9U1AOw2x57Yhgb34Vvjb707d8fgI8//IBkIoFpmqyqqOCbr79GCEF+QQEAFRUrWbpkMQBLFi9m8cKFAAwfMYI99twLgGeefIJ0KsVbr7/GiuXLiUQjHHjIYdi2jW3blHXuzKChQ4nHWjaYpiSlpKWlmWg0So8ePbEtK/szz/OI5uRw0KGHAfDeO2+zYvlyGhsbeeHZZwDYdfc96FRWhud5WLbtC0vXxbIsPCmxrPRmbxZblsXue+0NQHX1qp/cTSwQgAXL4Zg/S557R7JguWTuEsltT0guu1MSDMDKakkiBfWN36dl/ViwQcqSLKmAhSsklrO2BgiaMHOh4OxrJN8tlKyqhcpa+PhrSFsQDsK02XD65fDUmxAKbPpaPNn2a7C9ZQupfrcKhUKhUCg24PgIPM8jnUpR1rMHkWh0k1NmQuEwr770Ih998D7FxcWcdf7vaGho4N4772DalCk8/dhjnHza6QwYNIjmpibu/Net2LbNb885l/LybvTs3ZN33nprw86c65GXnw+wwXoPENi276CXde6M28aUFtfzmDB5Fx76z/3MmzOHFcuXM2TYMGbPnkU8FqNX795MmLwLTz76CKsqKoln2tzW1dWyKCM+evTqxRFHHc2rL7/E4oUL+e+DD/DS888DcPyJJzNq9OhsKpvneW3e626tCVhXeo6VTnPYkUfy2MMPsaqyknfefJOCggIqKyowTZOjjjueHj178ugzzyI9SU5ODu+98za333IzAPsecCCFhUUkkz+9pbLreeTk5GAYBulk8ienXIUDguffgeVVkn7dBRecDFNm+ZGOB/4Hpx4mCAa+f21D9yMlngTL8v/1rxPkRgX7TPBTtsLB7+s+dA1yo/DVd5L6JsmAnoJ7LoeaelheJQgFJdEwfDsfnn1HYruCU31th+OA67XJYFiWBAS6plrtKhQKhUKhUKzTY/ILv+Um71xrmsbsmTMBKO1Uxim/+hU5OblM+eJzpnz5JQ0N9QweNoxBQ4exbOli7r7jdmzbZv+DDmbMuHEAvP3GGxt16LJObVvPbxOcYNuyGDBoEEXFxdTX1fHdN98waqed+OSjDwEYOHgIQ4YOBWDhggWkUn6+T0tzMwsXzAeguKSEkaNHc8jhR/DCs89w+803+WlJnTtz8um/IpFM/nhRbXBkEb77uq7VOI5DWVkXfnnyKdx0/XU8++QT2VlrBx1yKIMGDyaVSjFq9E7ouo5l21xy0V8A6NW7N2eceVZWrP30O6fVNjKzpJ+2le96sCLTEblfDzjnOGhqgc+/EcxbKlm4AgxdAJJQEOqbYOosiIYFw/pJDB0c1/8qzJP880++2AhlxIcmoCkGdU2wMvM+hXmSrqWCkgLYbYykJQ7zl/nHgJ/WtWgFJFJQmAe5ke9Fzoauh+V4WXG/kZsU27a3q+iHEh8KhUKhUCh+VjzPo3efvgDMnTObw/ffj2N/eSLX3XwLtmWRk5tLQ309hmGSiCeyTnQymSDW0rLeTkyb7KhvBr4TX8boMWN49623mDblS4446ii+njYNgMm77EKXLuUArFyxPPs8y7KwMqlQ5eVdsSyLU884gzdee5VEZkDjb846my7l5cRaWn7keLYHyWSCQ484ksf++zBLFvvpYIZh8MtTTs1OiE+lUuTm5nL/v+/KCsXzL/gTpZ06reO8fhqbuxohYHAf//9vfCoZ90vBn06B1+6EukZBtzJ47h3/XV54D2551E/DAskBkwX/vsQXGroOSytgv7P8KMY79woK8yAShlsfgxselOiZ8RtTZsKwoySWDbddJGiOwaV3fv/z976SjD0BLBvOO15wze+gJb6x6yDwPB1oW9ev7W02iqY+EhUKhUKhUPycJBMJDj3iCE4+/VcYhsHcOXP4+2WX8pff/Y5YS4yiohLkNtDRR9cNJkyaDMDsmbOYMX0ay5YsAWDkTmMoKCr8gbO8tiAqKikmmUgwaMhQJk72X6eouJgDDjmUVDL5swqnLl27cvRxx2cf2/eAAxg+ciSpVAqAYDDIogULePg/92d/fsDBBxOPxbaa65+yJCceBPtP8q/r1FmSEy6SXHI7FOT5AqLVT//ka0l1naR3V4Gu+WLlzc8gHMpcExdiCWiOZ1KlhP/coOnL2NbZf0LzH9MyXbGCgbV/rmV+LoQgHBJtC6ZJSNt+2pXQtI0IDyU+2gXVZVehUCgUih2H1patV19/A088/wK77LY7ANOnTeXEY47iqy8+JxQOb/XrsG2LEaNGIYRg6dIl/Ofee/A8jz59+9K9Rw/y8vKJrtGtq0vXruiZLfJQOExBQQGGYbBowQKmfPEFAPV1dXz8/vuEQqGf9dzT6TT7HnAAhmkCcMRRR2c9Mn9eisE9d91Jc3MzuXl5/O6Pf9rqJpJblp/e9PzNghf/pTFppH/+T74hOex3kpoGkRUFARPu+KvGlMdh8mj/uNpGucH0pVgCfnUkLHld8IcT/QPHDoHpTwm+fVZw4C5wzP7+z/98iv/zfXYWfPOM4Ltn4dzj5Tq7a/0QT0qSSRfQ0DVtg9dYSg/XtVHdrjZHeAiBJ6VfSKVUiEKhUCgU2zVCCHRd57ZbbuS4Iw6job6e/z71NLfceRe5ubmk02ke++9DCCHa5BcIIbIF1mILOxKWZdN/wECGDBtGKpnkg3ffBWDiLruSm5dHNCeHvEzHK4DxO0/ADPitkHJzc8nLL0A3DB596EFaWlqywuS+u++isbEx+/3PIgA9D8MwsylskUgUz/N7y4YjET7+4ANefP45AE779W8YMGgw6U3savZzEgrAE68LRh4DR14gGdBT8vpdcNW5AtOAuUskL30gCYf8e+LIvTROOUwSCEBRXqtzv/G2tsEAdCqBaMR/zDSgtNj/Mgz/+07FkJPRmMFA5udF/uyRtmk1ge22hlbEBo8DqSIf7bUDItWQD4VCoVAodgg0TWPKF1/wxWefMW3KFILBIL88+RQOOfwIAKpWrcKyrPWLCSGy8z8cx8E0TaI5OYjMRHTDNAkGA0jv5/UtpPSIRKOMHL0T8H13qTHjxuG6LqFQiIJMxy2AcTtPICcnB4DS0lKKi4uZN2cOL73wQtbJL+/alcWLFvHc00/+aMZJO8vAzMRzuda5a5pGMhHntptvBGDUTjtx9nnnI4BoNEp4K4pICSCelLz1ueTzb/2uVJeeJdhjnH8frKz+3pcf3l/iOJvQgSqD54Fjf9/9yp+z4T/Wevls5/uZIAIwdT/SEg619T6SJNaIfKxfaPt2ch1XFZy3x82jUCgUCoVi+8dPuQoybMRIpk2ZwgvPPkP3nj3Jzc3NRg5KO3UiEAisd4id67qMGDUqK1RuvO5a9j/4YO689RYAioqKyMvPp6py1c++Hs91mTh5Mo//92EA8vPzGTZ8BOlUilAoRHFJCQCRaJTBQ4dSWFREbU0NnbuUk5uXxyMPPkA8HqNf/wH88cKLMAyDe+68g0cefJCDDjmMwuLijbQKbk+HTBAKh7n/7n8z67vvABg2YgRvvf46yWQSz3XJLyhgwqTJCE106MZxyoITD4GllYIPp0muvtd3+msaYNos/7y6lMLyqozgFfxsw6ylhHxfUzJ/GXwwFRqaYMFywWmH+8XoG3pvKQWWI75XGBt7P+R25T13TLcrpT4UCoVCodhhsG2bgw45hBefe5bV1dVceuFfsj8Lh8OcdOppfn1BxtX6keOZTLLbHntywMEH88arr/LU44/x1OOPZX9+/Eknk59fgOu5P/taLMti+MiRlJSWUltTQ/+Bg+jcpQu2bRMIBinv2i0rSrr36EGnTmUsmDePXn16M3f2bF7MzPX45SmnEI5EOPSII3n04YeoWrWKhx/4DxdefMk6J7P/bOLQ8/h62tTs948+9BCPPvRQ9vvOXbrwzEsvk5OT+5MmnLcn4aDk/34l+GomLF4pOfmS7++Xwb0Fh+0OH0yVWYHws93PDoweBOGgYPZiyQFn+4/36CL55UGCqLn2tPR1CfJkGkBH07QNnqsf+XC2q8+DDhEffqtnlXalUCgUCsWOQDqdZujwETz0xJPccestLFq4ENMwGTRkCEcefQzjJ04kmUhgGAamGaBPnz6kUinCkchaRc9XX/9PSjuV8cVnn2JbNmVdOnPwoYdzxFFHkU6ltsisNsd1KSws4rAjjuSTjz7kyKOP9udjWBZSSoYMG05hUSEjRo0impPDkGHDmPntNwwaPJTGxgb69OtD3379OeTwI2hsaKBX7z6c/uvf8NYbr5NOp7Jtedsbz3OJRqPsPGkS8ViMgsJCXNdFExrDho+gtqaGUCi0lntmWRb9+vensLAQwzDXOcSwTc6m0T7uZjwFe46XPHat4J8P+QXkkZBg4ki/ULysBLp1EhTmS0oK/XQrCfQq9x8rLfw+ncrQBZGQJBrxu2Gtee+4HpQUQFE+dO/sd7Ba89ZKWzCwF9z8Z8FN/4UVVRJPwrghglAA5AYuk1/FIUilPBAamtDY4I27HbrLHRP5kBLHdVAhEIVCoVAodgxSqRR9+vbjX3fdTTweR9c0Ijk5uK5LMjPvwnEciktKeOiJpxCAbhhZZ9xxHHRd5/8uu5x0KoVt20SiEQzdIJFI+C1Lt4RbIf2hbxdceBF//L//w3M9kpk2uYl4nEOPOIIDDj4YXddJJhKcee55/PrMs9ANA13Xefp/L4EQWGkrM18jyZnnnc+Z552HlBIr/fOID9d1ycvP545770MgsCwLO3Ntf3P2Ofz23HN/9BxN04i1xHj3rbdwXe8nFfh7nkdxSQlFxUXZRgE/FQHEkrDbWMluYyCe9IvNcyJ+WlZ9E1z0K/jTKQLDINt5al2PdSmVvH2P3x0rN+q33s2KnCQcsRccsptA03yx8SNBbcPxB0oO3g1W1Qo0Ad07++Jmg6VHAjxP4Lian3IlNrxiz3MzTZpU2lW7/PIqFAqFQqHYcWgVEoZhIKVc7wwJM9MO9oc77a1CRQiBaZpYaYu0TGcd045Yy7rqIAKBwFrT4M3M967rZte05vPSqdQWcS7XFDdrvr+9nhqTUCjE/Llz+P05Z2/W+/bp25cbbvkXmtY+fY5Sad9vN01A+rM6su66gEDg++LwDT3Wu9v3BeQ/cvvX8ZwfEk/6HbB6dSUjkDfu3grAdiTJtIdpGmiavsGD/fvI264+B9SEc4VCoVAoFFuUdaXvaJqGaZoYhpl1jj3pYVkW3g8S6LeGrpnre//Wx3XdwAyYmZx+34N1XTebntXW19sS572+906lUvTtN4Annn8B0zQx17KNxLatjRbHS0+Sm5/nj1pox0GS6xMF63r8h6IjaPpTzoXIiBjDj2R47vdZThsSHWvfy9+ncrUJAZ4rcNyNt5YWbJ8dYjtOfKghHwqFQqFQ7PCYpolpBmhpaWbRwgXM+u4bNKGRX1BAXl4+A4cMpaiomGQqudUX3gohCIfDWJZFbU01M7/7hprVq8nPzycazaW0rBODBg9FNwxSyeRW71Sapkk4HCEYCrJk0UJmfD0V13F82+QXMHjIMLp2745lWRusVTENg/nz5mW6NnWc2xkJgeMKvl0gqKyBphi0xCT9e8KwflBS4A8hTKR+xvMAHFeSTksMI1NwvkFx4yrx0S5qFYnrOqrkQ6FQKBSKHRQhBNFoDsuWLeE/d9/J11OnsKqyklg8lXXSdA369u/HMSecyAEHH0ZhUVG2vmJrIxAMIoBnn3ycl55/lhXLl1JTU48n/bUIIBQ2mTBpF044+VTGTZiEEGK9KU8diaZpRKNRFsyf59tm2hSqq6pJpuysbQC6lHfikMN/wS+OPZ4ePXuRXI+gkplBix3jc/qRDhC89bngvuc0ps4y8aSBrgkkAikdivJs+nZ3+e1Rkv0neaQssH4OV1X4nbDSNui6jhACuYHQyQ+L3ZX42Axc11XaQ6FQKBSK7QRd1wkEAti2jbORCIUQglAozEsvPMOt/7yeyspqdA10XRAMaEhPIjSBEIKFCxZy9ZV/49EH/8NlV13LLrvvQUtLy8/ufBuGgRACx3E22mI2GAqxqrKCm/5xFW++8ZY/eM4QmKaWdcY1TcNzXd57930+eO999tpnL6689p8UFBSSSiX5OXdkW9cDAsexN5j+1Dpl/YF7/81/7rmL2tpGTMO3WcD028IKAZomqF1dw73/vptnn3ycCy78K8f88iTisdhWs1MvgUgQ6ho1zrtW45MZIUoKIvQq1/xif8vx12UE8aTGvKUup18e4/A901x+pqS4QJKy2tcyAnA9geP611C0oeBcettXzYfWUW+shIdCoVAoFNuJM6FpNDc388Vnn1G1ahWarm9QeESjUe6/+3YuvOCPrK6uJhTUMQyNSCRCaWkJPXp2o6iokEAggK4LwiGd5ctXcsG5Z/H2G6/9bJPAW8/N8zwWL1rEvLlzSSYShMPh9RZLB0MhVi5bxpmnnMibb7xFOGRgmgLDNMjLy6Vb966Ul3cmGo2A0AgGNIJBg3fefo/fn/UbqqtWEQgEfza7RHNysutZMH8etm0TjUazIuOHx5umyXVXXcH11/yD5qYmQkEDMAiGIpSUltK7T2+KS0rQjQCuFIRDJi0tzfzt0ot54O47CYVCW01npnAAKqo1jvmLxpTZuQzpnYf0kixd1Ux1k4Oj52KJCNVNNhU1zRiaxaDehbz2cT6H/96gqlYj9DMEbRxHkky1NlbQdjhnWRWcKxQKhUKh2CzyCwq49cZ/8t8H/sPxJ57EFdf8Y72drKLRHJ57+nFuu+kmP8ohJZFImFGjR9ClcxmBYABd13Ech1QqzZIly5j53WwCJiSTCf7y+/P417/vY5fd9yCRadHbXo66pmk88tCDPPnYo6xcvhzP8ygsKuKoY4/j3D9cgGPba0VBdF0nnUpx5SUXsWTpcsIhA9f16NmzB0OHDSI/Pw/TNP0uU5ZFQ0MjX0//ltWra4iETaZNnc4fzzuLex56lGAw1K5D/FrF0sP338fTTz6RXU+X8nIO/8VRnHLGGQTMwFpRqnAkwsP338NTjz9JOGRg2S6hcJjx40dTXl6Gafrtgl3XJZ22WLxkOd/MmIVwPXQdbrj2OoKhMCee+itisZYOvScNHRpbNE68WGd1fR7dywzmL6uja48eTBg+iGg0jJmZP2JZNi2xOF9P/46FK1bTt1shK6oE51/XzOPXSXRN4rZT8EEIcKWGJzPtc4XcoPZwXRcpPYTQtpvPiw5biWq0q1AoFArFtomUEl3XycvPp6CwkE8++pAXn38OYIMpPaFQiC8//5Rr/3Ylui6QUtK1axcOOHBf+vfvQygcgozD5dcdRBg1ahj77b8XObk5aJoglbK5/eYbicfjG4ywbJpDKAgGg1x5ycX8429XsnjhQizLwnEcalav5u47budvl/wVTdPW2tUPBIP8+7Zb+fKLrwiHfMd8110nsPsekyktLck66p7nYZom5eVd2G//vRg6bDCO4xAJG3wz4ztef/klwuFwu9ooEolw03XXct3VV621nhXLl3PHrbdwwTln4zhOVqSEQiGmT/mS2272RaFlu3Tt2pXDDtuPvn17YJo6nudh237aVjBoMnzYQA47bD9KSkvxPDB1uP/fd7Fi+TLMDqzzAIiEBf9+BpauitC9LMCSyibG7DyW3XYbT35eDlompc6fH6NRXJTPPvvsyuBhw1i0spFe5SG+mhnmlkc0Mrdlu2HZEtfxIx8bn32y/RV9aB31oeXYFir5SqFQKBSKbQ/TNKmuquKWG67nsosu5Jxfn0FTY+PGnQ5N4+nHHyUWT6JrGuFwmJ0njCMnJ4JlrV2LIKXE8zwsy6asrBPjxo/O1IoYfPfdTJ576nFCoXbwCqXveH/2ycdZAaVpGjtPnMjk3XbLTud+9qmneP/dd7IiwTQDLF+6hOeffpKA6TuygwcPYMDA/niei+M4a9U+yMxwQk3TGDt2NN27d8WxXXQNnnjkYerr69aZCvVTCIVCfP7ppzz1+GNZcTV2/Hj22HtvopmUtU8//phXX3oxux7dMHjphRdIJPyZIzk5Oey2286Ew6GMbdb2gD1PYlk2ubk5TJ48Dk03MEyDVVXVPHz/PZm1dIyfFzTh2/mCR1426V0eYfmqRvr068uggX2wLDsTTVjbNo7j4rouo0YOoVOXclbVttC3Ww7PvWuwqtYfRtg+QtcvOHdla3RqQ9dI/Og+UuJjswSI+vBWKBQKhWKbFB+BAEsXL+Lft9/GE48+st4UqzUxDIPq6ipmTJtKwADX8xg+fAh5ebnY9oYL1NPpNN26daVPn164rosu4KUXnicea9nswXVC+NGaRx58IOvkHXP8Cfz3qWd4+ImnOOb4E7LHvvDsM1mBFAwGeePVl2lobEYIQUlJEUOGDiKdTm/Qx2l9/thxOxGJRjBNnfnzF/LFp58QDLbPFrum6zz71JPZlKqTTjudR59+lgcfe4Jzf/+H7HHTvvoKmbHN6uoqPv/kQ0wDXA8mTBhDJBLeaPMA27YpKipgxIghWJZD0BS8+dqrVFVWYLSXx76JBALw9FsC14vguTaYYUaNHEJ6I9PjfRFis9PoYcTTfrpVXWOAT78W7Vb74bfaFXge6JreJn22vbnMquBcoVAoFArFJmFbNt169OSEk07m5NNOZ/8DD2qDQxhk6pdfUFlZhabrhMMhevTstkl1Dn379vY7N5mCqlUV1Kyu2exogabrNDY0MG/u3Oxjhx5xBK7jYKXT7HfggdnHV1VUkkwmMQyD5uYm3n3rTXTNFxQ9e/YgFAq1aZfadV0KCvLp2rVLdv3z5sxulwngmqbR0tzM3Dmzs4/tf9BBeJ5HPBZjzPjx2cerqqtwXZdAIMCs776lYmUFQmgUFBTQtWuXjQqP79fj0KtXN7/dsBCkUgkaGxraLS1uU8WkZcPMhYL8nADN8TTl5V0Ih4NttI1HQUEepZ060RJPEQ0HeferdhQAAizbw/XAMA020uwKx7G3O/nRgUMG1Ye3QqFQKBTbpPiwLbp268YVV19DOBzmqy8+583XX9uoU7y6uhqJv8Ocm5tDMBhsc0qJ53nk5EQJhoKkk2liLS1UVqykR69emzUrwzAMVq5cQc3q1QAUFRdT3rUblmVhmiaapq8hVPyaD6FpxFpaWF1dha4LNE2juLhokyZ4Sykp7VTCggWLAMnSJYvb7OxvDMdx6Ne/P9FolOLiYrp27YbjOOTm5VFZUfH9OWRSqYSmUVdbmymq9p1vw9DbfF09TxKNRsnNzaWxoY5UMkV9XR26tuX3uDUBTS2CytUakZBGdZ1DcUnRJk5XlxQVFbK8vppIJMjKKnBcX9hsbuaOX0SuAd5Gu4KJNWykxEc74LkeCoVCoVAotj2EELiuSywWw3EcEom2Df7TNJF1VsPhMIZhtNnhllISCAYIBYOkkilsW1JXV7vZ0QLXcSksKuI3Z59DOp2md5++FBYV4TgOObm5fP7pJ9lje/fpQyQSwbKs7KwLKf1J1eFwaJNy86WU5OTk+F22cKmvq8O2bX/o3GZ4uJ7nEQqFuPG2O7K2si2LeCzGtzNmcM8dd2SP3XnSRAxdByn9mRP4znUkEmFTuuVKKTFNg0gkTH29X9PQ3NyE6ADxITSIpwTxpEZhnsRDIzc350c1KxtbTyQaxnYl0r8q7fi740c+WoXvxqSK6zrbXalCh4kPx3VQKBQKhUKx49C6i6tpgng8geM4bXa2hRCk02mSSX8CejCo06VLOd5mtqd1HJuyss788aL/yw4VTMRi5OTl8f47b/PQ/fdnj91nv/2/XwsgvYxzbzvEE0kKiwo3ScA1NzXjuh4e0LlLOYFggGQ7tA+WUmKl04DfHGDliuWc8+szqFi5MhsBmLzrrpx4ymmkUqlsupgEDF0Qi8U3SQAJIbAsh1gsjiZAMwVFxcWbGG1oHzwP8qOSglwPxxVoSJqamulUWkhbbxUh/GsQMARIEAhEOwoQ1/OVndYGheff36rgXKFQKBQKhWLTHC7XpUfv3hi679zF43HSqXSbB9LpukYsFiedtpBSkpeXT+cu5TjOZs7GyERxWpqbaW5qIhGPk5ufz9fTpvLn3/8uM30cDjvyFxxw8CEkk8lMzUYhPXr1xrH9rlz19Q1ourYJbyuoravLOpa9+/T1C5DbS+hJiZQSIQTJZJJVlZVriYE+/fpTUFCA53m4nkfnLuWYhkDTBE1NzTiO22bbaJpGIpHIiA9BMBSioLCoQ7JcPA9ycyTdOnskUi6RkEF9XcMmR8gaG5oIhwLEkzYDegkMo32aJQkBrf0V2lKv5HnbX6aQEh8KhUKhUCh+diwrzajRY+jarTuu65JMpliydFkbUk9anWlYsGAxUnrYtqR7z16UdCrFbedMiry8PKZ8+QW/P/usbPvgkaN34v8uuzzb9tQfjBhl7/32w8s430uXLieZSLbJyTUMg7q6eipWrkLXdXQNhgwf3q5DBltxHIfSTp04+rjj6dmrV/b8HnnwAe69607C4TC2ZTFoyDC6d++B53o0NjaxbFklptk22+i6zqJFy7FtC8/zyMsroKi4+GdZT1swdNhpsEdTzCI3GqSiYhXxeNtso+s69Q1NrK5eTU4kSDKdZvexst1Sn4SA1lIaTdc3EtOQ22WmkOp2pVAoFAqF4mfHdV2KSkoYMXonbMd38r77djY1NbUENjKQLhgKsmjhYpYsXprdLT76uBMIhcLtOgMhGo3y/DPPcObpp7G6uhqA/gMHctPtt5Obl7dWAXY6nWLPffenuKgAKSX1dfXM+Po7TNPYYMSgdXr7l19MJZlMYlkuw0aMYMy4nUmnU5u9Br8GxSA3N5fc3Fx0XSc/v4Arr7mW/73+JldcfU322OefeZrmpiYkUFxSws6Td8F2fef9iy+m0tDQRCBgbtg2wQBVVTV8991sAqaO5cDhvziaTmWd210YtpVUGo7ZV5IbSQAGJhZTpn7rD/XbgG1ap9xP+eob8iMaricoLbQZP0ySstrv/GxXzwgR0QZ7qshHu0kP27GRas65QqFQKBQ7DJ7rcuwJvyQnJ4Lruti2zaeffJEVIHprNynhp//ouo5pmixetJSpU2agaRrJlMNOY3bigEMOI5VMttu5RXNyePapJ/m/P12QnVvSp18/brv7HrqUd/3Re9m2TbfuPfjFscdh2b7DP3/+QqZNmwGAaRrZiej+ejRM0ySVSvHxx59TVbUawzDwJBx34snk5Oa2S4pNIBBk0YIFXP7X/+Piv/yZLz//DNM0icVaEEJw5NHHMGjwEABWLF/OkiVLMDOF/4ccfgTRiF//YVtp3n33E+rqGgkEAmtNd29dT6vw+PDDzxF42LZD9+5dOfbEk7Asq8PuM9uBvt0kpx7msHRVnO6d86lcsZypU7/FMHQMQ19rLUIIDMNASsnHn0yluaGGsuIcFq2I8Yu9HcqKJe0VxBEC4klflBmGvsFyDinJNGTYvrbsO27IoOehtIdCoVAoFDsOqVSKcTtP4uIrrsRxfSegoaGJt996n3lz5xOLxbFtGykl6bRFc3ML06fN4KMPP8WyLVzXJRQyOft3vycQDLZPPrz0i7JXVVZw+y03Zx8eOnw49z38X3r07EUiHl/nLrWVTnPW+X9gwsSdSaYcNCGY8fV3vPvOh1RVrSaZTPo1Fa5LIpFk5cpK3n7rfZYtXY5pGiSSNiNHjWCvffdfj5DadKfTNE1WrlzBU48/xnNPP8V7b7+dnQTvui6aphHJTDn3PI/6ulo0XSedSrHTuJ05/49/Jm156LqgubmJ/2fvvMPkquo//J7bpm3vPcmmV5KQQgkdKQoCCoIURcQuIti7PxULFhQs2AsKAhZEERCkt0h678mmbDbbd6fPLef3x52dJJDsJiHJbjbnfZ59stmdmb13zp2Zz+d82yOPPMnatRtJpdK4roeu67nzWbRoBf/+93+Jx6IIJI4L73n/B6iqqsZ5A+2PDwfxJFz/VhhZk2BLc4qxDcVsWLOGJ598kc7OHjIZO9eNK53O0NrWwWOPPUvbjq2MqS9h044Uc6cluOU6j0Tq8B6b4xxEbY9UrXYPHyrvSqFQKBSKYwiZ3SV+g6IwHuOyK66ivbWVH3z3exi6v7v78suvYlkWgYCFZVmkUikyGZtMxkbXNdIph7yCPL753e9zymlnkHhNVyjJnt2DDkywiWzr30AwyC9/+tNcqtWsOXP41R/+SFFxMalkkvz8/KwOlCQSiVyql+u6BAJBvnLbt/nwe9/N5s1bCQUNWlp20fqfNgIBi2AwhOd5ufORUmLoOomkzazZJ/KdO+7Mte997fkc0Hm85iau51JWVp77/4vPP8fOnc1U19QihGDTxg2sX7cWgLy8PEY1js4ZhWQiwbXX38Cmjet44L4HsEwNpMMLL8zHskxCoRCBQIBUKkUymcLOZDBNHcfzcBz49Oc/xzveeR3xePx1hyiE3zPqaG08Oy4U5nn86Vtw/Zd62Li9gDEjymjr7OKpJ59BN0ys7JyZTDqD59qU5FtU1xaztilBdVmcOz8jMXRJ+jAGcQSQSPtPgq4bA6yxzLZfVubjMD35yn0oFAqFQjHkLYeUCE3DtCx6erpJpVKEw5HXCaqDebxEPM57P/gRaurq+MF3vkVz8y4MDTJksG0bT8aymkxi25KM7dE4qoEvfu2bnHL6GcSi0dc9rpbtoOWLuv53lvuK3Ds7OgmHwzz3zNP85YH7c78fPWYsD/31L3sZnL75GRe85SLC4XAu6pJOp6hrGMEvfn8v3//W13ns0ccRgGlKUqndrYFB4nkS2wHTELzp/HP56m23U1hU5Ec9XqMw9T3SnA5ojYRA1zRs22ZkYyMjRo6iactmtjY18aH33sC73nMDCME9v/kN0d5eAKbPPJG6+vpcLYvnedi2zWe/9HVGjxnHL3/6Y9o7ujEN8FyIRW2ivRIhsgPwpEcy5VFWUsjHP/05Lr/q6r3M2Z5rk0omcRwH07KOmphOZqCuwuOB2wU3fbuX5xelyY+EqCkPo2v+ZHYhBEZBCNcL0x11Wb2pi7edm+GL75eUFXokM4d5v1xAOt3Xcvr47Ps0KOZDMDxbhykUCoVCMRzRdZ3S0nK2bN7Ajm3bmDRlj85MQqDtIfaF0AacXyClJJVKcdGlb2fy1On89hc/ZfHCBTTv2EEikUYICAZNgqEQk6dM5cKLL+HMs99EQWHhPo0HgGVZrF65EoD8/ML9FqJ7nkdhoT+P46UXnufGD32Y/zz2b+w9Ig/33/unfd43EAgwe+5cChpH7xWpSKdSVFZX8907f8rcP/+JR//5MJs3b6SrswvHBcsQBIIWhYXFnHLa6bzlkss4YeYswE9Fe53xMAy6u7rYtHEjwWCoXzMlhD8UsL1tF62tuygrL6e4uJh3Xnst3/7G1wFYuXw5n7n1lr3uV1BYyM2f+OTr5qz0pWa9+8YPcNKpp/HbX/yMJYsWsKulhVTa8Y2VIbCCAcZNGM25F7yZC95yMbX1DcTj+54PYgUCvPLSiwCUV1Qd1iYBA+nNRBoK8iR/uM3j5WUp7n88zYuLdRIpAykNPKkBSfLDGSaM8rj+rR4XnSFJpf0ic3EEjinjaICbi7z19zrxi/aH14b94EQ+hD/URxV9KBQKhUJxDCAlVdU1bNm8gQf+fB/f+f5cMhm/raquaTz71FO5m77w3DPsbG6mqLi43+nlUkpi0Sg1tXV89Vvfpbe7m21bm9i0cQPhcJiy8gqKioupqa3DsgKkUklfqO+DYDBIZ0cHf3vwAXTd8GdM7GeT0/Nc8guLqKqu5eknn2TV8uWYpnmA+kXsVwhm0v7MkiuveTdve8c7aWnZycZ1a+nt7aWysor8wkLKysqorKrOpWHtT4QX5Bfwu1/+ku3btjF56gxMM5DVTfumrn4kW5s284+//ZUTZ8+hp7ub695zA6PHjuWbX/s/Nm/cuNftJ0ycyKc+/0UmT5tG4jUpUn0GLRaNMmr0GL75vR/S2dnB1i1bWLt6JVYgQHVNLUXFJdTVN1BQWEg6ldrvcMRAIEBvTw9/feB+DMOkvKLyqLbgFfgF6EJI5s2QnHEiNLd5tLTbdHbDri6N2nKP8SOhshRAEo0fweMREE/452/oxoAlHVLVfCgUCoVCoTjecFyX6pp6Kiqr+Ov99zNx0mQuv/Iq8vLzMQyDxrFjmDx1GkIIGkaMIC8/n1AodOAiU0qKiospq6hg9kknI6XEcz1cz83O1vAIBAL7EHICwzRp2bmT22/7Bls2b2ba9BOJRPL2aou7L0HaOGYcLTt38JlbP85177mB/7vtWwhN9GNaPMLhCCNGjsSyrH3OJ5GARGJaFqNGjWbsuAloQmQH+bm4rv+FEARDodcdk67rIARPP/kEv/r5z4jk5dE4emy/LWtd16WisprS0nL+9Pvf0zh6DFddcy2GaXLu+Rcw95RTWbZ4Ma+89CKmaTJrzhxmzppNIBgkmUwSDocHXJ6y8gqqq2s55bQzAH9tPOli2w6e62Ka5usMXN/atLe18Y0vf4ktmzczZeoMAsHQoBSjSwl9GXAlBZLyYtA10DQX1/NnbxzuwvJ9Hgfgehrg0W/+Wfa68Tx32L2fDKL5UDUfCoVCoVAcE2TrPqZNn8WLzz3F17/8Jf7xt79yznnnMXr0GCoqKrjpllvxXBcrYLHwf/OPeHq1pmlEozFWLl/OY//+Fzubm6mqrmVU49h+Iy7gF7hXV9cxZeoMli5ezM7mb/DWy97GlGnTKCsr2+9us5SSV158Yb+/FwdRp7EvE9G0ZQuLFyzg6f8+ieu6nDLvLCwrMGAESdd1Tpx9Mi8+76/NY4/8i1PmncboMWMIhkJYlsXck08GIGPbPPv0U37X0SOl8DSNWDTKujVreOzfj7C1qYm6+hGMGTcR1xn8oXmO638NzmsJUmkPEBi6zv6ygESfmZVSFZwfzmdfJV0pFAqFQnFs4LouBQVFnHXuhaxeuYzlS5eybMmSIXFsgUCAGTPnMLJxDFIeWKqK4ziMnziFvPwCli1dyK/u/tmQea5LSsuYPmMOxSWlAxqpvrXJyy/kjLPOY9nSRbw6fz6vzp8/NISmaTJ12kzGjJuAlGJYDs07SO+B7YicSeu315WUWZOoaj4Ohyf2na9U9kOhUCgUimPJgAQCQWbOOolxEybT29NNIhEftOPRNI28vAIKC4sIhkLZFK0D1xaO41Bb10BFZRW9Pd3EYlEymcwhRy9y6vLQpBHBYJC8/ELy8wvQNP2AjMfutXEIBEPMOWkek6dMJxrtIR6PDeraRCJ5FBQWEwqHcbPpc8c7Uvo1KOAPauxPC0sph2WDJmPwnnw5LItoFAqFQqEYzvh56H79QyQv/40J9cOkJ7zstPRDwXEcNE2npLSC0rLKwd1kluBJD+l6/dZ59Lc2AOFIhEj+4K8NnvTrdgZ54OBQMx9+2pWRnfPR/42Ho1IenFa7wh+C09eXWpkQhUKhUCiOPRPCMNmV3d3SVK2N4sjjF5wPbAy9rLEeblXS2mC+0JXpUCgUCoVCoVAcL/hdt1xAR9f1AbSw3z8NVXB+OPDbhynzoVAoFArFsYmu6wihDXonnr68+DeSGy+EyJ7PIKeQAdKTeNnskEM9F03Ths3aDDvzgcB2fS0s+nEVQghc18F1VcH5Yb0gVcG5QqFQKBTHFprmJ010d3fR29NFT3fXoGwmSunP0yguLqGgsJi8vAJc1znoYzEMk0QiRm9PNz093SQT8UEzIfkFhRQUFFJQWIRpBQ66La2u63ieR1dXB7FYlO6uTqTnHnXxKqXEsgIUFhVRUFBEfkEhruse95vOIuswMxlA1waccD5cMQbryfdcV3U9UCgUCoXiGEI3DBLxGEsW/Y+WnTuOnE4QoOtGthZj4IEMmqYxbsJkJkyciqZpB7TT3hft2LRxDSuWLT7kgvUjQSSSx4wT51JZVdvvZPO9TZRBtLeHRQtfob2tdegIbiEYPXYCU6bOOOC1Gc7uQwLpjMTIRg77w3Vc1e3q8D75quZDoVAoFIpjxnjoOtHeHl587r8kEnHedP4FXPCWt1BdW3sAuesHJ1YzmQzbm5oIRSLU1Na+RoD549eEEKRSKTauX8+D993H6lXL6e3pYs7c0w6omY2maaxZvZyVy5dQV1/PO6+9jgmTJpGXlzc4HYakpLW1lUULFvCXP9/Hi88/xbzTz6WismrAlruartPb28OLzz9FIh7j4ksu5bSzzqK2tg7DNI663hJCkEqmaGrazF/vv5+lixeTTqc4cdZJx32jIc8TOJ5ACDFAhE1kJ+INv+dqUGs+PM/1tzeUCVEoFAqFYsgihMBxHBa++hLJZIKvf/s7XPHOq0GC7dgH9TkuhCAcjuC6Lql0inAoDEAymcDzPIqKivndb37Flz/7GUpKSrj3r39n9JgxJJNJTNMkGArheR7JRAIp4Yyzzubq697N5z55K3//y4OsXbuSSZOn9xsxMAyDbVs3s3L5EiZOnsxdd/+CkaMaSWfSeO6Bjb6WUhIIBLEsCyll7vj3JBAIYOZ+n3zdYxumSSAQyAlyO5PhzRe/lbPPfRMfvvEGXp3/Ame/6c0EAsH97oALIXAdm/kvP0ciHuOrt32Ta959Pa7jHPTck8N6zWgaJ596Khdfchlf/MyneOThhwmHI0yZOvOAozlvlIAFlgnSA9uFdObA7qdpEA6+1jRAxn5jk9EFYDuSZEpimma/kSAh/NktnuepCeeH0+F7UubGxysUCoVCoRia6LrB9m0b6Oxo5z03vo+rr3sX3d3dBy1sNU0jlUzyyMP/oLikhBknzuKJRx9FSo9TTzudcCRCZ2cHyxYvAqC7u5uXXnie2vp6pJQ0Nzfzm1/cTcOIkVxx1TuxAgGee/ppli9dyme/9GXWr1vLimXLaBjRSDgc2a+wk1KyaeM6gqEQ373jR9TU1dHd3XVwAsowWLjgf2xYtw7LCnDyqaeSX1CQ+5uBYIAlixfx1BNPUFpaylsvexuBUCg38yIUCtGycycvPPsMK5YvY+KkyVx40cUEgyFOnjePmz/5KW776lfYuH4NU6aduN9z0XWd5h3b6O3p5sYPfIjrrn/PIa3NkSCVTGKaFl//9u1sWL+edWtWMXr0eKxgMDu5+8gRDsHK9bBkLRTkQWMtTB4jSGVkv12IdQ26o/Dw09luxcL/WWmRYPJoqCqTxJOH7j48T+Bm994PRCv7KlkbVu8ng2Y+PM/L7gAcn8U2CoVCoVAcS7S2tgBw8WVvI5FMHpK4tawAy5Yu4TO33sJJp5zCl7/ewKdvuZlQOMzDj/8HKxDgc5+8lcf//e+cVvjal76IYRhccdU7+dwnbuF/r7ziG5OuLj71uc/z85/8mGVLl3D1u97FJW97OyuWLaOnu4u8vPx9CnZN1+np6aK9rZW3vPWtjB0/nmg0etDnEggE+Muf/8zfHnwAgN/fdz8nzp5NKpUiFArxn8ce5ZMfuylXs/LUk0/ygx//xI+GmCbLly3llo98mF0tLYwYOZIH7r2XR//1L+748U8QQnDZ5Zdz3z1/YPOmDYybMKXf1LbmHVsBeMsll5BIJIZUWpNpGhQWFXL5lVdx21e/QlvbLhpGNOIcQfMRDsFf/gMf+44kle4zaXDLNYJPvkdkxz3s5xo1YeM2+OA3XnsDSX2l4I5PC86aLUmmD8l74DiQSoNh6AOmXflF+gy7yMegzvlQrdcUCoVCoRjqCDzPoauzg6qqKiqrqg56YrWUEsM0KSouoqe7G4BxEyYQj8VwHIfaujpGNY7m7395kMf//W8Mw8h11QL49z//SXt7G+vWrM1tWa5bs4alS5bw4vPPccWVV1FSUsqoxkYAYrHe/Qo7TWj09vQAMGvO3EPOvhBCEAyF/MfUNKyAlRWKAtu2+ePvfofrukyeOpVIXh4vv/gC69as8aM7HR189P3vQ0r4zR/v5evfuZ0bP/gh5r/8Et/7zrfQDZ1wJI+6hgYymbSfpr7f5xZSqRSRvDyKiosPqED/aBEIBPjDb3/NU08+wZy5JwHQ0dF6RMW0ZcLGrfDpO3zjMW2s4ITxAtcVfO8PHg8+Ll+XUrX/NYbZU/z754Vg2y7JLd+VtHWBoR/SS8k3Hxkw9IEfYLiOpRgU8+HnNvqRD6ECHwqFQqFQDF3rIcDz/HqE/MJCAoHAQQsiy7LYsG4dP/re93j4738DoGnLFu695w8ARHt7eeKxR9m+dRsAVVVVBIO7FeKWzZvYuH49sXiMxsZG8vPz6e7u4p7f/hohBJdefgXpdIpQ2K8fGUiA900zLyouxnO9Q3xeNCLZv2cYBoFAECm9XMF8n8m66ppriEQiuefBsiweefgftLe18cnPfpZf/+Jurr3icn7987sBeOXFF+nq7EQIccCbtAJx2DZ1/XMJ7NO8+XUuAQoKCjBNq9/rIBgKsXLFcr799a/zxGOPkZefj2EY2JnMES31tUx4aYmfOlVVCo/+FJ79Ncye7P9+4WrJgXa4DVrwq6/Cc7+F+74jsAzY1iKZv8yvJzkE70HGgUQKDNPoP/Ih+q5TVXB+2JASPNVqV6FQKBSKY8WGHHKDGCsQYPnSJXz3W7flfvbsU0/lvt+xfTu/uvtnnHPeeQDs3LkT13UZN2ECV15zDSDILyjAMAx6entxHIfmHTtYtWIFb3/HlUyeMoVkMon05B4y7wDFyCFvgkoieXmA34K4z5R5nkckEqGuoZ4N69dx949/TOuuXYxqHE3DyJH09vTw8N//TnFxMQ/99a+88NyzjBs/nnVr11JUVETLzp1s3rSRqurqfofQ7aVoD9NGrqZptO7aRVdXJw0NI7Cy5ySEwDRNhBD894n/8PQTT3DZO97BzFmzQUps297LiAghkJ7HXT/4AYFAgHff8N5sK2N5NK5SnKy83NUJ9zwC73873HAZhIJwygl9Q/4ODMcBy4CZE6G4ULCrQ9LeDYcyokMIyNgC24E8feD9fzlMM4QGNe3Kd3Qq9KFQKBQKxXDGtm3GjB3Hmy9+K0XFxQCc/abzqKuvB2DilCmc/abzOO/CtzBm3Lhc5CKZSHLOm87jgx+9ieqaWkrLymhvbyeZTLKzuRnP85hz8sk0NTVhBQIczV1iKXebD8MwCAQD2VoCSTAUYtacuTljVVxSwue/8hVGjmrEcRw6OtoJ5+WxdPEiqmtqOPf8CwA485xz8TyPbVub0HWdo73rHQgG+eH3bufKSy9hxfLlfvQpG4HZtHEjefn5vPrKK/zj739j1fLlFBUVsXnTJhzb3msXPxyJ8J/HHuXF55/jfR/+MOMnTiSTyRyVs0ll4KzZgtoKgZTw2R9K5lwNkRA8+QvBO86DZOrAvWl3L2zYBj+9H3Z1SDQNpk8A2zn4YxMCkilJxvavmf7SfwT4082HYVemQS2fd11PeQ+FQqFQKIY56VSKWXPmcNfdP6ektBSAr3/r20yZNg2AT33u83zs1k9QUVnJPfc/yPlvfjMA27Y2ccn55/HAvfdSUVHJh2+6mXA4QsOIEViWhWEYfOv//o+3nHs2Lz73HMFs296jZT7ysuYjGNzdcjcYCjH/5Zf54+9+m7vtpW+/nOkzT+SO27/N4/9+BNd18VyXaDTKmLHjaMsOBWwYMQKAkpLSo7rrbWZb/gYsCzfbS1YIv2ajsLCQl55/nksvPJ/bvvoVnGzKWjwW57vfvI1LLjiPRx/5F6G++hddJx6L8dM7f0RlVRVXXX0tiUTiqJ1LxoYxDZLHfiZ4x3kCIWDDNsm7viB5xyehtQtM88CNzCUfh1nvhNt+5buAs+f4Xa/Sh9AtWBOQyghcD3RdG0ACC6TnDsuOsINoPiSe6yjvoVAoFArFMCcYDDL/5Zd499VXsX3rVoQQfP7Tn+TV+fMB+PEdd/DN//s/du7YQTwW5drr35PbSe/p6eHOH3yP1tZdvO2KK/jPs89x/XtvJJPJ4LouBQX5JBMJ/vLAnwfoHnT4zUd+QQHgt801DTMrGD3uvutOWnbupLqmBoCH//43PnvrLXzv29/i0X/9k/KKCnY2NwNQVV3N5o1+mlUiEUfTNOobRgw4WPBwIYSgZWczGzesZ+OG9cTjMQB27mxm48YNbN60kZdfegGAX//8bv72wIP+97+4mx//8A4AlixamBPJkUiE+//0RzauX8/Nn/gkZRUVOLZz1NbFNOB/y+GVZZJPvBse/YnG284RGLrgoaclX/+5n0Z1oCRTEteTWCacM1fwnY8LdO3QMhCF8A0NgKEPfBCu56JqPg6v98g+qcp+KBQKhUIxnDFMk82bNvHCs8/mfrZnzceiBa8CkqWLF/LcM89wznnnEY5EyKTTeJ7H5o0bWbN6FSedfArFpaU8/NBDFBeX4Dg2ZnYbe9Xy5XR2tB+1c7Jtm4YRIznnvPMZN2E8gWAQTRPs2rWLxQsXYhgGd/3il3z7619jwfz5/PeJ/wAwbfoM1q9by9rVqwF46YXn6ezoIBAI8MB99zF9xkxq6+qOivnQNJ10OsWHbnwvmzZsQNf1XNH6Vz73OX+AoevysVs/wd2/+R2f/9StdHZ0An6HrXA4zKc+/wUuvfwKf6aHZbG1aQs/u+suTpw9m7e89RLi8TimcfTkpmXCnffCw89IrrtI8IfbJG86GT76LfjZA/DMAujohsJ88CS47v6NRMCCP39HUFvpz/xorPMFbCpzaO1vhYBE0v9j5gE4oKHUueywXneD5z1kLrSnUCgUCoVi+JJOpZl78ilcfOllAIwdP54Pf+xmAMrKy7n105/hQzd9jMrqagA2b9qEbdsUFRXlul6ZhkkgGOSFZ55hyaKFvPO66wgEg/T29mIYBvF4nHQ6fdTOybZtampr+cZ3bue97/9AruA6nUqRyWRwHId4LMZ3f/gjSkpLcvcrr6xkzNixAJwwYwZtra00jhmDruvous7Nn/oUhmniHZUWqxJNE+Tl5WGZJuFwOFtr4qdchUIhDMOgtbWVFcuWknnNiHDbcVi+dCnr165F13UClsWvfvYzYrEoH7n5FkzTHJSi6b6nbu0WWL8V2rqgO+q7hapSyAtDbwzaOv2J5fszEpqAkTUwboRvPGzHT+s61ACbEJC2/TvrBxD58FTB+eFHzflQKBQKhWL4Y9sZxk2YwLzTTwdg7kknc9EllwJQXVPLh266mQve/BYaG0f75mPjRuxMhra2NuLxOCNGjaRxzBgymQx/uuf31Dc0cPmVVwLQ1tqK4zg0jh5NWXn5UTunSCTCv//5T06ecQIf/cD7s2MEJEVFRdTU+ulWH//wh/jubbehabtnOvzszh8xdtx4LMsiEAjw3R/+iN/+6T4uuuRSCgoKmTJ1GpmjZKI8z8MwTH76q9/w6NPP8p9nn2feGWcA8I3v3M4Tz73AiwsWoes6P/7hHSSTSfLz8wEoKfXrUv724AP87le/pKCwkEULF3D/vX/i4ksv46RTTz2qtR57Cvx5M3yB/78VktPfAydfB/c96mvOqy6ESBhu+ApMfbvksRfod+5HJms4MjZvuEWwwE/jAr/Opr/Hk1LiODbDMUNokM2HinwoFAqFQjHcEULgOA5tbW0A1NbXs7WpCYBwOEQ6naKjo4O3vPUSTjv9jFzXqD6uf+/7qKyqYt2aNTz39NNc8653U1vfwPiJE3MZ8SedOo9AIHAUz0kjFvMno3d3duF5Hq7rUVxSwue+/FXKysvp6uzk3//6J+1tbZw4ew4VlZXkFxRw7vkX8IWvfJWFry7g07d8nHPnncLvf/Nrzjz77NxwxaMlOaWURCIRysrLKSkrw7L8ARb5BQWUlpVRUFjIWy+7jPETJnD7D3/E5Ve9E4Ab3vd+7rz750yYOIkrrroK13W5+647MU2TD3zkI7iOMyjXWjIF110k+dT1GgURQUu7ZPMOCfgF6Ne+BWJx6PTnTBJP7qNtrtjnt4fhotld8zFw5MNv2zwcixOMwfzjnjs8C2kUCoVCoVC8RhQmEpx97psoLS3lxNlzMAyDb373+4waPRrbcXAdh8KiYu76xS+557e/4fvf+Tb1I0Zw+w9+yJQTTqC3p4fikhK++o1vcta5byKdSvGdH9zBv/7xDwzD4PKrrmLV8hVH73ySCc4691yKioqpqq5G0zQ8zyOZTHDq6adz31//zssvvkB3dzd1dXWcde6bWL9uLfFYDCEEV1x9DVOnT2fB/PnEYjEmT53KKfNOw7bto54Z4rourutimCbhsD8Q0TBNMrZNKplk7PgJ3Pe3hygtK+PV+a/k7nfRJZdy0imnkpefz7/+8RDPPfMMH7n544wdP4Fob+/gaEsJmgZfeJ/k2rfAuq2C9i6oqxTMnSrpmyn5jY8Kmtvg5GmCRHq3Fk3bMLYBfvVVQcCCitJDa6u7H+9BKhvUMgxjQA3sOPawLI0eRPMh1JBBhUKhUCiOExzHoaa2llGjR5NKpZBSctkVV2DbNplUCoTAtjOEwmFOO/NMvv+db1NXV8esuXPp7enJtba98tprSSYSpNNpIpE8rr/xfbnhfkczo8JxHKqraxh5RSOu45BKpXL6JplIUF5RwRXvvDo3qTyZSDBh4iSEEKRSKYQQjBk3nolTpvqD8RyHVDI5qGuUSqa45dOf4cYPfpDyikrS2XPyXBdN0+jt6WXqtOlsPmUjY8aNo6enB03T6Ozo4M7vf4+a2lqueff1JOKJQT0Pz4NYAqrKoL4adA0cxy8U7wuonXaixND9NCjb3a3xPQ/yI3D5m/zbJlIcvonsApJZo6MbxoBpV/4m/fBzH4Me+ZBSRT4UCoVCoRju9KVeObFY7mfxvu/3qOBNJZNU19Typwf/Sn5BPtHe3pxW8Dwvd5++TkyxqJ/61DcQbzDP57Xm5LW/y2QyufsCZNLpo1bfcSBI6VFQUEBRUTGOs/fUcs/zSKeSXHzZZb5pzGRIJZPk5eXxp9//js2bNvH179xOSWlpbk0GG9vZf9Riz0GDYj/m5bBfM0A6ky041/ofIrnbfAw/Bs18CFCRD4VCoVAoFGiahmmaGKaJlBIhBKeefjqu6xKPxclk0sfU+RimiWmaaJqGlBJNCBAC6UnS6dRRm+FxKPSlYO25NpZl+Tv12XQwIQTBYBDDMLBthwkTJ3Ht9ddzwZvfQiIeH9pro4NlSoTwIxoym6blemDbIpeWdWQMa1/BuYZh6Pu1Hn7zAg/Xc4+mnx7+5gMBnqvMh0KhUCgUxzOhcJhkIsGqlStYs3IFa1avRAhBQWEheXl5zJp7MtOmz0R6HslBTksaCNM0MQyD5h07WLt6JSuXL6W9rY38wkLC4TBlZRWcec6bqK6pJZVKYtv2kD0XIQShcJhYNMqqFctZvWoFq1csx/M8ioqKieTlMXX6DE4+9TTOOOccTjntNBKJxJDtZGoakoAJzW0GLy0N0tGtkUhqJFIatRUO40dlGF3vUFrkkLEFRyLoIKUgkRJZU6f3m88lPZl9LlXa1WFFtdpVKBQKheL4RNcNgsEgTz/5OD//8Y9Yv3YtidTrxXheJMTZ557LFVdfy8xZc0il0sghmDkRieSxa1cLP/vR93nqicfp7OjG3Ye2HPHLn3HxpW/nsiuupKq6ZsgZKiklViCArus89q+H+fXdP2HDunWkbW8fgl5jzklzufLqd3HmuW9C07QhORgvFJDsbDf457Nh/vNyiOZWAyF8WS+EX6Ru6pKyYo8LTk1w5flx8vNckqnDK/w9CfGkBHT0AQYvetLDdZ1h+dof3IJz1xmU4TMKhUKhUCgOo5gwTAzDn2Xhuu6AO/qGaWJnMnz7a7dx7z334DgelqVhmWKvOgNN07DtNA//45889u9HuOXTn+H6932I5BDbYQ+Fwzz/7FN8+2tfYdOmJixTYJgamifpy+sXQqBpGs07mvnxj+7kXw/9je/e+VOmnjAj17J3KBAIBmlva+X73/oGj/7rEYD9ro0QgpdeeJkXX3iZa667lk9/8SvZNRs6EZ28kGTxmgBf+0UR21sMQkGJrqVJJG1SGb/SPGQZaEGLzh6TX/89nxeXBPnoO3uZOTFFKn34DIiUknhSAFo2Ja//20pPqrSrw40npWq0q1AoFArFMYiUEtO0CAQDbN+6lZ3NzUgpqaqpob6hgUwmg53J5Iqr+9B1HQF89fOf5pF/PkIwoCOEIBAIUFxSRHFxEZFwmN7eXrq6eujs7CLgj57g9tu+RTwa4/0fvRnbtodE05pwJMJLzz3DzR/8AOl0mmDAwPNcCgryKS4pprSkGMdx6Ozsoru7h2hvjHDIZOvW7XzkfTfw7R/8kDknnbJHt6zBNZHJRIJP3/xRFry6kFDQwHVdTMOkuKSY4pIi8vPy6Ontpauzm46OTkxTQ9c1/nTPH4lGo3zxa7dhmuaQiIAEA5IXloT4xi+KiCU0AmaG7S1xzFCEoqJyqkqKkJ6ks7OL9u4ePCdOTVkeG7eZfOaOYm6/pYsTJ6VyqVJv/DUjcubDf13st+pjj+5tKu3qsCEEuK6D53m5giyFQqFQKBTHhvEIBAJ0d3Vx1//9gMcfeYTe7FyHvLx8zrvwAj72iU9SUlq2VzcnIQSWZfH9b32DR/75SE7c1tXVcOKs6RQWFuaG7PW1z21p2cWCVxfT1dVNIGDw4zvvoqSsjKvfdcOgRwxMy6J5+za+9qUvkMmksSwd0zSYMmUq48aPwbIshCZA+qnmqVSKpUtXsH7dRgIBg/a2dj5768e5968PUV5ROagRAyEEhqHzrf+7jQWvLiQcMnEch8rKCmbNnkFpaYm/NlnN7Louzc0tLFm8jI6OTsIhg4cf+gfFJcV87stfH/S1CZiSzdstvnZ3Ecm0RjKdoK3b5oTp0xg3blQuUkfWAtgZmxUr1rF61Rpqy8IIEeT23xbyw087lBU72M4bMwECv8QjlvBA13PX+f40svS8YauNB3HCebbNgIp9KBQKhUJxTGEYBqlUik/efBMP3ndfzngAxGJR/vbgg3z8wx8iHoui67tFXigc5pGHH+I3v/o1wYCO4zhMnDSes885g6KiQlzPT9mybRvH8Tcoa2truOCCc6mursLzXEwdfv3zn9HcvB3TNAdVrGtC8L1vfYOtW7djmjrhcJjzzj+baSdMQdf987Mz/vm4rksgEOCUU+ZwyqlzswbOoLW1nQfu/dNRnc6+L0KhME8+/igP3PdnQkED27YZM3Y0bzrvLMrKSnPpdH3n43ke9fW1XHDhuYwc2YBtOwQsjb/cfx9LFy8kGAoNpsJECME9/8qjJ6bheTbtPQ5vOv9MJk8ei5SSTMbOfdkZGyEEJ544hTPOmsfOziS67rCl2eAXfy1A1w7PQTmeIJkGXdNeFxF8LZ4yH0cG13VV0blCoVAoFMcYViDAz+66k/+94k+7DkciXPvu63n3e2+koKAAgCWLFnHfPff48zeyYtB1HP75978BfmSjtLSE6dOnAhLHcfe5H2nbNoGgxaw5M7ACFoZpsGNHC7/75S8wBtF8WIEAK5cv49mnniIY0PA8yfTpUykvLyWTyexTOHqeh207jB07mokTx+E4DpYpeOivD9K0efOgmSl/EKLLv/7xEDJ7nGVlpcyZPRNN0/bbGti2bQxDZ9bsGeTl5SGEIB5P84uf3IVj2wMK7CNFwJLMXx7kqf8FCQclzW1Rpk2fQnlZMen0vtdGSkk6naGhvpox48bS3BolLyx5eWmApp0mpvHGjIAAbFuSTEkMQ0cIrd9bK/NxhFypJz2VbqVQKBQKxbEkHDSN3p5u/vufx3M/+8jHbua2736Pb3zndt793htzP3/26adIp9PZlB6DrU1bWLViGQHTF6XTTphCIBDAHaD1vm07lJWWMHHiOFzHxdDhhWefpqe7G22PyMrRxNANHnn4IZKpDJ4nqa2tpnH0CDKZ/lOnpJQ4jsPUEyZTUlKMEILW1nZenf8K1iBFPwzDYOuWLSxe8D8sU6DrvqGwAtaAtRuO45Kfn8eUKRPwPI+ApbFowau07NyJYRiDdI3CswuD2I4glkiRV1jM+HGjckMe+yOdzjB1yjgwQmRsh56YxqLVAd6oLxQCbEeQSmfrnoTYf8G58Ac+KvNx+G02nutlu10JFAqFQqFQDH0Mw2Bn80527twJQH1DA297x5V0dnbS2dnJmy9+K3n5+QC07NxJNNqbHVQXYMH8+XR09iA0jXA4TEVF2QEXJvsCvwbd0NF1jc7Odjra2/ZK6zp8EsUX4H0i8bXouk5nZzsvPvcshu4bitq6anRdPyDB6HkeoWCIqurKXAbI5k0bDoMakrnjO9CvvgGPa9euprOzByEE+fn5lJaWHvAwRNf1qKyqzEVubDtNb29Pv3UNR1BekrEF23fpmAYkkjYVleXZtTmAZ1BKgsEg5eVlxBJpdA1eXRl443M/BDguftqVriE0jf2VHgjAc12k9AYtejQ8zQcgkf6LVHkPhUKhUCiOGfOxtWkLdnYXeVTjaAoLC3EdB8e2qayqor6+HoD2tjZadrZgGIafkpMtQvY8SV5eBMuyDnh31/M8wuEQwaAfHYhHY+zcsQPjCJgPz/OIxWLEYrF9pocLIUin0sRjUTTNj+oUFxcdVCq5lB5lpSU5cbl1y2Zsx3mDYtO/byKRyB1/f1/RaBTbthFCyzUG8IcIFmCaxkGtTSQSJj8/DySkUmm6uzr9QXpHW9gKiMY12jp1dE2SdlxKS4sPcm0kRcWFpDMumgbxBHieeENtbwWQsSGRAssyEAOIXz87aJi+hwyq+fCyo+NRZecKhUKhUBwLaLrO1qYtuf+X7CGg+3aNK6urWb1qFa7rsmnDeqZM9es6hLb7doFgAF3X/FqPAxSEpmliWhYkkjgudHd3ZXeQDx/hcJif3XUnv//Nr5ASPvrxj/Ou99xIPB57jQEBofmzL/zIjnVQYlFKCIVDaJqGhktPd/cBRxr2h2katLW28v73vJtYNDpgVCiZTHLGWWdzx09+ipZdGyQEgoGDMkH+2vhDIyUS14V4LDYou/ZCSFIZLdseVyLRCIdCB5nCJAkGLZysYTkcpyEEOI7AdiCg6wM8psB1nWGbdjXocz5cx0GFPhQKhUKhODbwXJcN69bl/l9eUblXeo1uGIxqbOSZ//4XgHVr1vgGQZIT55omiEVj2LZzwO32hSZIxpIkE0kEEAgY1NTW4R3meRJC09jVspPeHr+DV0d7B9o+2x35OftCCBzHIRaLUVpafMDpOUIIujq7/eY7QHVtHQHLIpFIvAGBq5HJpGnesZ10Kn1A99nZvCPXBrbveY72xg4qUqBpglQyTW9v1G+nbEJxSemgNBXypCA/4lJc4BFNmOhIOrt6qKgoPeAUPyEEvT0xLEPLGcXDYT7SGYnjgGVa/WtfAZ47fBsyDeKcD4HMDlARynsoFAqFQjHk6RPaO7bvyP0sP1vfsSeVVdW57zs62v3OPZ7H6DFjMQ3/cWKxOPF4gsLCggMShbqm09MTzXWSKioqpKq6+g1HC16H9NvO9hEMBl9njlzXpbikhDFjx/HSCy9hGJLW1nZGjhxxUH+qtbUtN2xuZOPoN1w877oORUXFvO+DHyaVSg1Yc2FnMoyfNImMbVNZVY1l+bfv7u4mlUoRCAQOyEDouk5PT2/OOAWCIYqKirND8o6y+fAgEvKoKnPZtN0kFDToaO9Emzj6wC8BCe3tnYSDJo4LjXUupiHf0KwPAWQcv+5DN/SBvAeu6zBc84IGN+1Ketk3HOU+FAqFQqEY6kgpMUyTuvp6Xp3vt9nt7e153e1assXoABUVVWiaRiKZ4oSZMxk5ajSbN23E8zzWr9/InDknDmg++kzPmtVrfdFsS0Y1jqa0rPywT9JOJhPc8IEPcNnll4MQlJaWEY/HX/c8BIJBLrjoYl584SV0XWfL5q2MHz+GvLy8AY/JNA2am1vYsWOnX/BtuEw9YfobNlKu61JSUspNt9x6QLlCQghs2yYRjzNh0iRGjR7L+rVriccTrFmznpkzTxjQfAjh1/CsXbchO5VbUlxSSml5+aBNOdc1mDLa5rmFQQoiAbbt2EFn1zgK8gdeG8Mw2Lmzla6OdkbVFGI7krnT0nhv0Af4hfDgSTANYwDlK3BcZ9jWfGiD/SZm2xnlPRQKhUKhOFaEg6YxZty43P/bWltx9xCoruOwZfPm3P/HT5yYFaUuhUXFzD1lHo4LhqGzds16du5s6XfAnhCCQCDA2rUbaG5uQdM0dB2uefcNWIHAYc+L9zyPgoJCGseMpXH0GCJ5ednOnHuTSqY465zzqK+vxXFcYrEYSxYvz3WQ6s94pFJpXv3fQlzXJZ12mTXnJGbNmUM6lXqDR+/Ph4hGo0R7ewf86u3pIZlIZIvMiznznHNxPT+SsXLFanZsbz6AtQmyeXMTWzY3YRg6jgtXXXMdZWWDZz4yNlwwL05DlYOmmeQFBAsWLMMw9N21LfsyLdn0uoWLllFWGMBxNRqqHaaMSZOx3+CEcwHpbKdfwxx4799PJ1Stdo+A+8AfQqPeyxUKhUKhOCbwXJe6bDcrgI6OjlxSvBCCTCZD664WX2hbJo1jRuPY/o5+Jp3m2uvfw8hRDaRSfkHtyy/9j61N2zBNE8Mw/AJszW91a5ommqaxcsVqli5ZjmEYJFMOZ57zJs5+03mkkskjco6u65LJZMhkMvvd+Xddh5LSUt7/4Y/iur5g37JlKy+//D/S6TSWZWWNiEDTNAzDwLIsOju7ePaZF+jq6kYTAglcd8ONWFZwUAuMU6kUl13+Durqashk/LV58cX5bNq4GdM0ME3TbxErBLrut+cVQrBmzToWvLoIXdNIJB0mT5nM2698J6lUctDOxXEFlaUuV785TjwFFSV5dLbu4vkXFuB5Essyc22U+9oqBwIWqVSGp55+iUwiSlF+GMeVXH1hnPyIxxsuX8nO+QA/hXDAczjc6YRDiMFNu0Ji2zYq9KFQKBQKxbGB4zg0jBiJaZrYts36tWvp6Ggnv6AQIQS7du5k+7ZtAJSVlVNeUZnNX/drDBpGjuKb372Dj7zvBnp7eojG4jz99POMHTuauvoa8vLysCyLVCpJtDfGxo2baWrajmHopFIOI0fW8/FPfhop5aB3A0omk7z9yneyYvlS7r/3z4SCBqtXrWVncwsTJoyjtKyESCSM53nE4wlad7WxatVaUqkUuq6TTDm87fK3ccq800kmE/tWrEcJ27ZpGDGSL3/jNj72gffjug6pVIpnn32RHTt2MmJEPZG8CMFggGQyRU9PLxs3bmb7th3omk7GdiksyOMTn/0ckfx8kvsonD+aai+ZElxwapxFqy0efynEyJoidmzfwr/b2pk4aRzFxYXkRcJ4UhKLJejo6GLVyrUENJv6ygJ6YnDVhUnefFqcVPqNH3lfwTn4Ub+BFPJg1MscF+YDwLEzqEa7CoVCoVAMdfzPatd1qaqupqKqih3btrGrpYU//u63fOaLX0bXdX76wx/S2+PXgVTX1JCfn797F1cIEvE4M2fP4Zvf/T5f+NQn6Ozq8UX76nWsXbsey7IwTTMXeQB/pz2Zchg/fiw/+MndjBw1mkQi/rpWrrn/H6ApeaPqQ0pJJpPhE5/9Ap3tbTzxn/8SsDSi0RivvLIA0zAIhvyi7XQqg+u6uWF3yZTDNdddy6e+8OX9Gil5IEco/eMQh0Hcx+NxTj/zXD79hS/xnW98jXTaIRQyWL9+Ixs2bMKyLCzLIp1O77E2vokqLy/h9h/exUmnnkY8Ftun+D58z/zAeBIMXfK5G7sJWJKHnwlTV1VCPJFk+eLFSCnQTX/OjOvY6EJSWRwmYIWJJ+H8U5N84PIebOcwdbsCEmkNcNF0vd9nQEqGdTfYQTYfAsexh21BjUKhUCgUx7zlyM6xCIXCtLW10tPTQ3V1NaecOo8H/3wfAL/++c/p7OzENC3+9sD9ufuecdbZWIFANsthN7FolDPPeRO/ve8Bbv/GV3nxhZcB0DUJZEhnB95JKbEdScDSedP55/KZL36V6po6kvswHpqm0dneAYAVsPoRdxLL8usYdmzfjv4G54Q4joMVCPLdO3/GH3/3K+6+6y5icb8dsBAOsZizhyCWZNIOZaVFXHv9Dbz3gx/BcZx91kb0tSc+UGHr3+eNi9VYLMpV176LseMn8MPbv8nChUt8wahJ7OzaCOH/zbTtoTkeM2ZM47Nf+TrTps/Yp/HQNI2e7h4cxyUUjhy1+R+OKzB0j0+/p5vKUpe/PhkhoYWorQghhMRxXDQBmhbGcTUytqQ04nLT1TEuOj2OJyWOe3iOVQiIJ/om0BsDrK3Edd1hmxc0qOZDCLJvSMp9KBQKhUIxVNF1ndKycjasX8P2rVuprqnhpltvZdXKFaxcvhzHcXjwvvv2us/IUaO45G1v328RdTweZ/SYsdz581/z6L8eZsH8V1i7ehXbtjahCYFpWQSDIWafdDJvv/Jqps+chSe9fUY8ACzLYs3qVQDk5xfuNyXL8zyKiksAmP/yS9z4gQ/6guQN7IQ6to2madz4oZuYNecknnjs36xdvYq1q1cTj8cIBAIYhkFJaSkXXnQJb3nrZdQ2NJBMJPZ5nIZp0t7WxprVq8jPL8QwrH60lCC/sJC2tl00b99BRUXVG64XSCQSzJw9h7t/+0ce+ec/WDD/ZdatWcW2rVvRgYAVwDRNJk6dyuVXXs2pp59JIBDYp/EACASCvPT8c4Df/cw7irvOjivQNLjxbb2cf0qSx18M8fSCID1RDcfVsG0oLHAZW59m/Cibc+cmGVFjk0gJpDx88l8A8eTu19NA2td13WFblTBEIh/KfCgUCoVCMVSRUlJeWcWG9Wv485/+yOy5J1FRWcWPfno33/7G13j2qady0Q3dMDjl1Hl86vNfoKy8nFQ/HZz6ZlG8/R1X8/Z3vJPenh62Nm1BCEEkL49wJEJZWXnutlLKfRqPcCTCjh07+Ptf/oJpWhQUFu13SJvneUQiedTU1vPCs8/y6vz5nHTKqUSjvW9Ij3ieRywaZfK06Uw/cTaZdJod27fT3dVJJC+PUChEfn4BhcXFZNJpEq9p39uHpmnk5+Xx0x/9kPa2NqZNPxHDMHAce99rg6Smpp5NG9bx1wf+zOy5c7Ft4w0bkGQigW6YXHnNdbzj6mvp6erKtUjOy88nEolQUVmFaVmkksn9rnM4HKa5eQcP/fUvBAJBf/jgUe6C5XmQSAmqymxufLvNFefHiCY0kilBMqVRWeJSVuJi6JKMLYgnD7/qFwIS2dqRgSbPSymP+nN03JiPviEqficJgYqAKBQKhUIx9HAch6qqWmpqG/jXPx6isqqKGz/4QRrHjOHX9/yJDevWsa2pCQnU1dfnWvGmUiny9jGEcN+aQFBcWkpFVVVOzEtP4roOEojk5e1TR3hSsmnDBv7vi1+gecd2Zpw4l1A4gmPb/Yg7GD1mPM07tvHJm2/iuz+6k9lzT8rWYxweLRIIBhk3YQK6puNJLzdo0fU8AsEggWBwHwJVkEmnue+P9/DLn/2UoqISRo4amyvY36ewdl3KyiuprKrhbw8+SGlpGR/46E3k5+cfNlWlCUFZeQXVNbX+35T+2vizKCThSGS/992yeROf+8StNDc3c8L02VhWcL9G6khjOwLbgYAlCQUchABNA9cVpDOQPoKhBiEgGvdyBr2/y0xKiSeH7xy8wY18CIHnukjpoWm6qv1QKBQKhWIIM+PEOWQyKX7987v51z8e4vQzziSSn49pGBiGLyleesHFzk4hP+IyQhM0b9/B888+QzKZZOy4iYwaNSbX2nd/uK5DRWU1c08+jf+98gI3XHM1J8+bx5ixY/Fc76jVJLzO5LkOSxYuZOWKFYTCYWbPPRXDMPs1H301OXNOmscrLz3HL+/+GY8+8i9OPnUe4XB48CSeJmhrbeXZp54iFosxYdJURo8dP2jGYy/D5oF3lIW9lIJkas9Wu3I/0lj4RfCup2o+jhSu6+J5Ek1DoVAoFArFEMXzPCwryCnzzmLThnVsWL+WB+//85A4tpKSMqbPnEt1TV02m2Jg4+M4DnX1owgGQ6xZtZwXnn2WF559dtDPRdd1RoxsZPzEqeTlF2S7Hg28NoZpMffk01m/bhVbNm3INQMYbAqLSpgzdx51DSMHnJY+nJESYgkJaH6EbYAbS+mpmo8j4ooFuJ6L9Nyh4IMUCoVCoVD0K3JdNE1nwqSpNI4ZTywWxfPcQYsUSE9iWiZ5eQVomnbQdQ6OY1NaVsmpZ1QSi/aSyaQRiEERfX31LOFwhGDQnw3iHsT5eK6LYZhMnTaT8RMmE49F/d1zbZDWRkoMwyA/vwBNM4ZExGNQXzuyr+Dcb0/cX7pPX5qeSrs6MvYDz/VwXRcrG2ZSKBQKhUIxdJHSHxCsaRpFRcVD4ng8zzvkXfW+lKZIJI+8vPxBPx/P8w5ZqEvpYdt+KnthUcngrw0g38D5DLfXTSIlAA3tAArO5TCOEhmD/yJzsy98NeVcoVAoFIpjSUy5w6gjz3BKCRpua3OsI/BrPvyCcwt9gDrnPkMthqk0HtRKCyFE1uE7w/YJVigUCoVCoVAc3+7D9fyOWmhaNhVO7vfGuyN5w1McD3qZt5R94TjlPhQKhUKhUCgUww/HlaTSEtM00LT9p10J4aeqDedShCFgPqTfi1t5D4VCoVAoFMMMXd/dhlhxfCIEuC6kbTAMHW2AFq9udgyFMh9HzHyAbWeU91AoFAqFQjHsjEfTlo1s2rAWXVcG5Lg1H4DtQCoFhmEgtP6aLAk8zx3WbYmHwCshG/lQ9kOhUCgUCsUwQdN0YrFeli1ZgOs4FJeUUVRc2u/AQMXwdR+2A8k0mKbht3Pe303F7siHEMNzCN6QOCvHtTmQgUAKhUKhUCgUx4b50Fi7ZgW2ncGTHqtWLkUiB20mimJQvQe2K0imwTLNAa4Bges6qubjSC+J6zjKeigUCoVCoRgW6IZBe9sumjZv5JzzzufyK6+iZecOdmzbouo/jksjCsmUIGODYRr0m+0jwHGGt/kY9FeAABzX6XfSo0KhUCgUCsWxgUB6fqRDCMGHPnoT5RUV/Pc/j7Ns6UIqKmswDHNYFxQrXnNFCIgn/IJz0zD6HS8h4KAm2x+TZmwIvEaH/ZOsUCgUCoXi+MAwDZp3bKWttYV3vPOdTJk2jaqaGm784IdJJZNs3LAGw9DVE3UcoQmIp3ZfH/3XOQscxx7We/JDJu3KU5EPhUKhUCgUxzBCCOxMmhXLFlNUVMR7P/BB0pkM8Xicd1xzNRMnTWb1ymX09HSj68qAHD/XBcSTvs61LIv+65xltimBqvk4ogviOA7S81QRlkKhUCgUimMWwzDYtHE98XiMd7/3RkaMasTOZPBcl0gkj5s/+UkAVi5frDTPYUJKCAagIA/yI/v+yguzV6qTrkMouPt3wcB+RLIG4aB/m77bmodQsCAEJJL+AZimOaCtGO4d0YZA1ZPAcW1c18EwTPUqUigUCoVCccyhaRrxWIxVy5cwclQjV15zLYlEIvf7ZCLB6WeexfkXvpnHH/03O5u3U11Tj+PY6sl7A1gmPDUfVm7ctzHwPIiE4JKzfSMRsKCjC9Y2wepNvmkZWw/TJ4Jtg+PuNjTpjODpVyU7WiGRhOoymD4BRtRALHFw5iOe8i2HaZj9BjUk4Lkuw3kExeAXnGf7GfvDVASq5a5CoVAoFIpjDV3XWb9uFZ70eP9HPkJJaSmxaHS3qJQS13X58Mdu5rlnnmb5skWUV1QhhBjWnY2ONKYBv/0HPPrC/p/DYEBw8glwwjj4wz8FX/qpR3vXnsYRrnmzxjc+KrEs0DVoboVbvwv//d/ej1tdBnd8SuPckySpzAFqXXZHPgzLZCD34XrDuxnBkKj58FwXz3VQEUiFQqFQKBTHovHo7Ghnw/o1zDnpJC566yXEY7HX3S6dTjNh0iRueP8HiPb2sHnjetV697CwW8yPrBGcOBGmj/e/po6FGeOhtAgefwk+8i1JexcYBjRUCUIBPzpyz788vvRjgWWAlIKPfgv++z/fBNRVCMY2CHQddrbD+/5PsmGbH3U5IKW7R82HaZgDFJP7NR/DWRIPiSGDnufiOA5qyrlCoVAoFIpjkVUrlwLwkZs/jm4Y+41mJJNJrnn39YxqbGT5skXEor1omqaewMPEZ2+Ap38j+PdP/a/H7xb87YdQVQp/eRI8z1+Xm68WrH1Y8JuvaWiarz+fetUjlYaXlkqeX+TfrrRQ8MD3BfP/BBed5t8umpA8/DQEDrRaQEAi5X+jGwYDZfl4rjusJfEQKDgXeJ6H46jIh0KhUCgUimMLwzDZ2bydlp07uPjSS5lz0skkE/svCHAch5KSEm669RNI6bF61XI01fnqsBGwIBL06zvCQf/7gAmehD0nO/znZXh2oeSME+GdF8LsKTB9vEDTBP94evft3nomnDBOErDghAm7f754LbgHmh0lIRr3ZbfRjzGFvvS84b0hPyRifdIb/k+0QqFQKBSK4YUQAsdxWLl8CaFwmPd96CPZTI7+icfjnHv++cw7/XReeO45Ro4aQ1l5xQHdV9E/P/6z5OFn/MJxgFQGzpotuPkaeMf5gr/9FxxXsny95IIPCaaPl3zsarjrs4JwEGJJyaZtux9vZA24rj8gcN4MuOBUgev6KV19f2MgPAm9cQAdQ+8vXOJvyLuup9Kujrj5QPqDBpX3UCgUCoVCcYxgGAZbmzbS29vNde95D+MmTCCdTg+se6RE03RuuuUT6IbO8mUL8dTIgcPCwlXw96fgn8/6X0+8DM8vlKQzcOE8yZ9vF8ydIrLZNpIlayU3fEVy9o3wn5cgk4GtLbsfr7HOj3Ck0n7B+i++DHd/ET50hd8d64DMhyfojkpAR9O1/UY+hNgj8jGML4WhUeUkwXZs5T0UCoVCoVAcE2iaRjKZYPnSRYxsbOTDN92MoRvk5eUf8GPMO+MMPviRm/jJj35I05aNNI4eh22r1rtvhJNPEDTWgZ0NIqUzcNoMP3qxYCWUFUluvxU279D4478kzywEx/FNyLWfF9z3HYFp7DYHvXHfFAQs2NIMl33cL1ifNk7w4Pf9ovP+mlMJ/Na9vTEJuo4mtAGMiqda7R4d7yFx7Awq9KFQKBQKheJYQGga69asxHFsGkaM4O9/ebDfWo99ijDDxHVdNE1j9cplVFRUEwqHs+MHFIfC+98O77oYotmlEAKkB+3d8K4vQNNOSTgoWPBnyVUXwOMvCT76Lcm2FuiNS/7zkmBENazf6t+/qdlv5yslbNwGO1qzJkH6hmTApRJgO4JYwsPQdcQAzQWk5+J67rCugx4y/d38MKXqc61QKBQKxfGKpmmI3M6wRMrdX0PKeAiBY2fY1bITgOeefprnnn76DT1mMpmgo6OVhrzRQ9J87Lk2UnpDcl3ANwOut7cp0DUoiPjDBgESKcnDT/t1ILMnw4RRgm0t/rlUl0NDNTw537/tswuhOyqoKpMsWLn7MaeNhXBgt8nZ/7UCGRviSTBNvd/OZn1NmHbPvlPm48i9iBFk0ik1ZEehUCgUiuPQcGiajus6pJIJYtEeEALDMDEMg3AkPxshcIaMTuir2Zg15xQSifhetRq6YSAkZOw0sWgvtp0hFApjWgFM08QwrKzAdF8jPDVKSkuzDXiG1tp4nks6lSQa7UHTNIKhMKZpYVoBNCFwXXfIrM1df4aHntq7GDyVhkvPhtNnClZt8o/z/+6WPPysYHuLZGvWeFSUCC46XZIfgd88JFi5UTJ/ueRtt/iF5/981n+8SEjwroshcwBL1Wc+YgkwDD1nMPZvnlykN7z18NCIfAhBJpNW5kOhUCgUiuMIwzBJJmJsbdpAZ/su4vEY6XQSJGi6jtAEBQXFjBw1jvKqOgzdGDLiXEpJYVEJxSWlWaGug4CWHVvZ2dxENNpDMhHHdV0Mw8AwTKxAkKqqOqpqG8jPL8TzJFLuFqJDScQbhkk6lWBr0wba21qIx6OkU0mE0DBME8MwKSwspq6+kZKyypxBHGyWrJEsWfP6nxcVCH78ecm2XYJ/Py9JpuGlJbuf67pKwbdvFlRXSKSE339DcPVnBeuaPOYvl8xf7t8uaAm++H7BjImS2AFk2Ql2Rz6soDlgUwHP8/a6JpT5OHLeA9dx8DwXITRlQhQKhUKhGMYIIdB1nZ3NTaxZuZhotBdNE2jC32nvE/fSlXR2tNLZ0UpBYTGTpsykrLwGxxkaRdme5+J5oOsG8XiUNasWs2Pb5lxkRBMiu8GaIZNJE49F6Wjfxbq1K6isqmHSlFlYgQCu6w6ptdE0jeYdm1m3ehm9vT1o2Z/1rY1j29iZDIlYlJad28jLL2Tc+KlU143EOcoF844LF84TFOb5NRj7Ip2B02f6cz9+/w14aalgwUpo7YTaCsG0cZIpY6C4QJJI+fUdo2olf/8h/OcljecX+UZj1mR4y2kwafSBGY8+jZvK+McQLrD6Nx/ZqMhw18FDpOZD4Dg2nuuhG2rKp0KhUCgUw9p4aDprVi1h47qVIMA09559IKXMiTRd96VKT3cXC+Y/x/SZJ1NVO+Koi9z9oesGvb2dLPrfC8RiPRiGmTsHN7eL7Yt3oWkYwk9j2rZ1M4lEnJmz5hEMhYeEARFCIITGquUL2bxxDUKI/a6NEAKy9QvR3m4WL3wR27FpGDH2qJrDtA3XvBne/VbfNOzPANiOn/qkaXDqdDhzFrlWVLbrRyf8KeT+7RNpKC2CGy6TXH+J/9iG7puIePJgnlPffDgOmJZJf7Ucgr7ol7dH7ZMyH0fsYnccB9d10A0TVXiuUCgUCsXwRNd11q1Zxvq1y9F1I2cyPM/DcVw0TWAYOo5tI/FnaQghMAwD13VZtOBFprkudfWjBn0on6Zp2Jk0Sxe9vJfxcBwnm5ZUQCQSwfNc4rE4iWTc1zq6gWmadHa08uorTzPrpDMJBge/y5VuGGxct5JNG1b7tSv7Whv99Wuj6wbS81i+eD6e6zKyccJRMyACSKaB9AHcVvgmIpnO3meAx3UciDq7/38o6lQT/t9yPN9k9591JfyaDylVt6ujges52HaGQDCEyrpSKBQKhWI4Gg+DLZvXsW7Nsr2Mh23bBINBJk6aQm1tA/n5+fT0dLFj+zY2rF+H7dgYhoGmabiuy5qViygtrSAQDA26YF+1YiE93Z0YhomUEsdxaGgYwdyTTqWgsAjTtJBSYtsZOtrbeP75p+ns6MgWn5t0d3WxeeMaJk+dPajnous67a07Wbdm6V7Gw7FtgqEQk6dMoLqmlvy8Anp6utm2dQsbNqzPGi0DoWlIz2Xt6qWUlVcRjhS8rqh+KCDwZ3Poum9GhPBTt2zb75K1Pw5VmgrhF7wDWJY1sB52nWGvg4dM5MNzXWw7o6Z7KhQKhUIxDBFCkMmk2LR+FQKxW9w6DtXVNcw77SyqqmtyRdhV1TVMmDiFMeMm8Nwz/6WnpxvDMNB1nWQywaYNq5g0bfYBDFo4QmLdMGht2c72bZswDCMrHF1mzZ7LrNkno+s6juPmJpdbVoD6hpFccukVPPXkYzQ1bfENiKmzc0cToxonEAwNVvTDrzVYv2YZjuPmzsdxHMorKjnjrHOpqqrNtYGtqq5h/IRJjB2/mZdeeJauzg50w0DTdDLpNJs3rmHq9LkMpY7BQkAoAFIKVm+Glg4/fSqRhJE1gnEjJCWFEs8bOCpysH83nekzH2b/JkaAYzsM9wygIRP58DyPTDoNynwoFAqFQjHs0HSd7radJJNxNF3PiduKikrecvFlBALB7MyvvRkxYhTnX3gx//zHX0in02iahq4bbN+2mfqRY8jLKxqUHXYBNG9vyhYHC2zbpnH0GOaeNA/XdfeaVN43EyOT8dvunn3uBTz80IN0dXWi6wbJZILt2zYxbsIJg2I+NE0jFu2mp6cLfY+1KSoq5s1vuYRIfgHpdCp3+77ylJEjGykoKOShv91PKpXy18Yw2LF9C/Ujx1JQUDzo0Q8JWAbomuD5RYJf/FXwynILx/GjOwIBwqasyGH8SI/3vd3jrFmSREru1a73jZiPeMLXtqZp9esrBOK4iHwMmWoWKSGTSfsXgUKhUCgUimGFANp2NefEtZQSy7KYd/pZBALBvcT6nqTTacorKpl70rxcC1KR7SAV7enud2jbkRTr8ViU9rYWdF1HSo9QKMTcuacipezXQDiOQziSx6nzzkTT9FwBd1dH66AJdU3T6GjflctAkVJiGAannnYmefkF2JnMftemuLiUGTNn545dCIFtZ+jpah+UtXmt8QgFIJkWvO9rGld9JsiSNcXUVxYxsjpMZbFBZalBfWU+llHCotXFXP1Zi8/8UJBMawSsNx6DEAJ64mTNx8B1zX4d0/B2H0OolF6SyaRRKBQKhUIx/HBdl2hvd66Lj+u6lJSUUl5eOWDhuGPbjGocQ35+wR7CXtLb2zVIYl2nq7ONVCqBEBqu61FcXEJhUTHOAXStcmybisoq8gsKsmlZGvFE3N+EHYQMECk92tta6OvE5GXXpq6uYb+mcPe6OowY2UggENzdIlZCKpkY9GsuaEJrp+Dqz2r8d34+kxqLMPQM21p6aem2ScoQcTfArq4MLR1RQpbN+BEl/PGRfN52q0Z7l0bQfOPmozfmf28YxoBRDde1h/17gTF0DkVgZ9JI1elKoVAoFIphhujTpHsIXklBYRG6rg8ocD3PwwoEKCws9udOaBpCCHp7ugYtWuB63m6x7klKSsvQdQPPzhyA2JeYpkVhQRFdnZ0YpkE6mSARj1JcUn7U2+7KrBns8z2eJyktKzvgtQmHIxQUFNLe3uq3RhaQSiUHVdPpOsSTguu+oLNlRwGNtSYbtnZQWlnF6SdPIj8/QsD0azDSGZuenl4WLlxO145Oxo0oZtN2jVu+18sfviHQNHnI9StCQG+875h0+otqSGS2hfTwzgLShtLbkm1nUK2uFAqFQqEYprzmI147iF1+gZ8elJMJsm+q+NAQarquH9ShCCHQdC17bn6qk+d6gyc8xd7L5JuIAzsWTRNour6HhPPPZzD3k/NC8Ku/C9ZuCTOqNsjG7T1MmX4C554zj7LSIr9lsOviui6moVNZUcaFF5zJyLHj2Li9izH1YZ59NcSP7xOEg2/kmhfZyIfI1Tr140p9EzjM3waGTtqV8Iu11HRzhUKhUCiGn+sQQiA0LedAhBD09Pbgeu6AgltoGnYmQ3d3F3q2jkAiKSgsRhukYWx7xnI0TdDR3nbAEYtcXUR3V9ZQeVjBIOG8fDzpDcq5iD3MoaYJ2lp34TrOgGlgfv1LnJ7uLnRdy613IBgatA6mlgmrNmn8+u8mjbURtrd0M7JxFNOmjse2bRzH3Utv9rVI9jyPObOnUVpexa6OXhrr87n3MZPWTsFAvmF/eFLSG5OA3yhhIJ3rOPZwD3wMociH8CMffthPFZ0rFAqFQjGsBIemU1RUgvR88aXrOp0d7XR1dGAY/Ss70zBpatrsp1xlVaBAkF9QxGBsr3ueR2FRCZYVQEqJpml0dnbQ29Odm8jeH4Zh0N7WSm+Pn0LmeZJwKOLXTXhH/3yEEBSXlOfSpPrWpqWlOdd2d3/ousH27U2kUsm9pnIHg6FBu9YCFjzwuCBjh5HSwREBpk+fRCbTfwqZb0JcZsycQm/SwzIkbZ0WLy0RBK1DvFZkX9qVhq7pA/5938CqtKuj5LoFdiaD6zooFAqFQqEYXkgpqaiqRTcM+iIhqVSKl196DillrsXr64yHadLb2838V17c/VieRyAUorCoZFBa03qeS0FhCWXlVbiug6ZpJBIJFi6Yj65r/W6i6rpOJpPm5Zeex8luuErPo7C4NGtcBsFMSUlFZW1uUKIQAttxePml57DtzH4NiGmaxOMxFi98dQ/jIdE0nfyColx3sqOrJ8F2BMvWCwrzLHqiaWpqq4lEDmwgpeu6lJYUUl5RQTSeIhK0eHL+oZsB6Ql6YhLQ0XStn+qCbOrdEBzMOGzNB0LguA6ObavIh0KhUCgUw4w+wR7Jy8+lJ5mmybZtTTz91H9Ip1MEAoHsIEEDwzAJBIJEe3t46snH6e3tyRkU13Wpb2gkEikYtKngQkBt3ajciADDMFi/fi2rV63ITi832HMHWwiBafri/uUXn2fnzp3Z7kcSKxCkYcSYQTsXz/XILyiisKgktzaGYbCrpYWn//sfUql9rU2A3t4ennnqP/RGe/eaD1Jd00BJaeVRL5wH0DToicL2Vo1QUCOZdigrO3iTWlJSTCJlEw4ZNDX7Mz8OVp4K4U9NTyQ9hG5kIx9yv7eVnofnesN+5J0xpN6YXMcvOlfmQ6FQKBSKYYU/O8Jk3PipLF74Ym6H3TBMVq9aSXtbK1OmTqe4uATLskinU3R2drB0ySJ6erqzMxL8NrChSIQRo8Zn60UGB8dxqKiqpbZ+JNu3bcYw/ON75ukn2L69iZknzqGwoAjdsACJbdvsatnJyy8/z47t27As//aO7VDfMJr8gmI/339wVgdNMxg7fgrdXc/m1sY0TdavW0t3dxdTp02nsLAY07LIpNO0t+1i2bLF9Pb27l4bz8M0LcaMmzxoUk5oEEsKYnGNkgKJFBoFBfl4B5HOJqUkkhfODhkUHGo0yo/CQDIFpmkMWHDu5SIfw1sHDxnzIYTA81x/wI0aNKhQKBQKxbDDdR2q60aSTCVYuWwBuu5PmbYsk87ODp55+gkMXUc3DBzHxnE8DEPfS9wKTTBx0gyCoTCuM/ip2pOmziba20NPT1cuPWntmtU0bdlMcXEJJSVluK5DZ2cH3d1d2LadOx/HsSksLmb0uMmDnm7jug7lFbWMn3gCq5YvRDf8tTEtk46Odp7673/6XRt/irvHhEknUlBYPODsliOF50FBRFKY5+G4AiFdenuiVJQXc6CBGCEE8VgcQyc3wf6QDIgA2xYk0n6Uz6/v8foxPd6gRb+OJtpQOhgpZTbyod6gFQqFQqEYjji2w6jGiYwdPxXPc3OiW9d9ISs0Ddd10TQdyzJzU7Jdx0HXNKafeCq19Y1Dwnj0zR+ZNmMukUheLnXcNE0cx6GlZScrVixjzZpVtLe14nleLtXKtm2KS8qZPfdMQqHwkBCdruswavQERo4ej+s6B742roOUkqknzGFk44RBMx4AMms+ais9EmmXUMCgs7PrIKetC7q7ewkFTBIph9H1AtM4+GkQQviRj1Taj3wMVFbg13wM/7SrIWY+wLEzynsoFAqFQjFs8VNLxk+czsxZ8wiFIti2jevubn8qhMgJMcex/XqRomJmzjmNmrqRg5ietA/B7jgUFpVx0rxzqa0fies6OI6dTTMzsCzT3/XO1UTYgKSmroFZc88gFM4blNqI/YlfKSVTps1mxqx5hMN52bVx9lqbvtu6rovj2IQj+cw48RRGjBo/qMbDv7rAMGD6eElPNEN+JEBzcwvJZApNG1hh6rpGd08vrbtayYsESaYynDFLHtIYOgE4B2o+hMBzPZV2NRiXTCaTQYU+FAqFQqEYxvZDSlzXoaZuFEUl5TRtWktnRyvxRIxMOoUmNAzTxDBMiopLqWtopKS0El03shOghxau6xAMhpkxax4VVXW07GgiGuslmYjjeS5CaGiaQNcNqmsaGDFqLEXFZdnJ4s4QXBuXuvpGysoqaWpaT0fbLhLxGOl0MtdaWBMaeYVFjBgxluraEZhWYMiYwlQarjhPcs+/kmh6CcLpYcHC5Zx+2hzS6cx+Z20I4a/Rq/9bSl4ApNQoKcxw0lRIZw7+OISAtC1IpaEo3xjQqLiec1ykXQ0x8yHIpFNq0KBCoVAoFMcBjmMTDIaYOOVEXNchmYwTi/agGyahYAjTsrCsYHZX2B3S7fh90SiorR9Fbd1IMpk0sWgv6VQC0wqg6waWZRHJKwDEkB8t4Dg2ViDI+InTccc6pFNJotFupCcxLQtdNwhH8rGsAO4QWxvbgXENHte+xebuBxOMH1HEms1bWFKQz9Qp4/E8v7Ziz2hO34DEV+YvobNtF+NGlrJyY5T3XupQXe4RSxz8cWgC4klI22CYA02M96/x40EDDynzIQRkMunckBuFQqFQKBTDmz4hCIJwOM8X53J3AfNQSUk6MGSuFsUwTEpKy7M9VP3f7R4id6ytDQRDYUKRvL7TzK3PUEqB25NEGt57qeQfzyTY3moypr6IlcuW0dnRxbQTJhEKWliWhZSSjG3T3ZNk4cLlRDvbGNNQTFNzihPGJfjU9ZJk+hB1rQaJpN9u1zSNfvN6hCBbZ+MN+5ETQ8t8IMhk0nhutpmyioAoFAqFQnGcIP12qMMk7eRYMxoHYkSOpbVxHCgrltxzm8t1X+hm264Cxo8oY2dbK088thPTsggEg775SKexMxmK8kxG15ewcXuS/EiMuz7rEQp6pA7RfGgC4in/ezPbirk/Few6bq7N8XBmSBWcI/qmnLuq6kOhUCgUCoVCccgk0jCm3uMv3/OYMrqXVZt78WSA+sp8qksCFFgOhQGH2tIADVWFSAKs3NTNGbN6+cePXEbWeIcc9cjKWmIJX9Galjng7fcs7B/ODLG0K4HjOLiunR3WoyIfCoVCoVAoFIpD0JX4NReVpR5//q7kmQUJHng8ycvLDBJJ028EIASumyESthldb/PlD0jefq7EdiSJ9BtrgSQE9ER9LWuaVr8JPUKQ7RSmzMdRx/NcXMdBBFXWlUKhUCgUCoXijRmAjA2akJx/suSCk2Fzs8eW5gwt7dDWBXUVMGMi1FeBrkniSV+DisPwt3ti/veWZQ1gLES2RfPwX5MhV3Duua7v/IRKvFIoFAqFQtGnEQRCiOOiFani8ONJPwoCUFMuGVENmpbVnp5vUNKZw7vx7Uc+/O9N0xzwsVXkY3DeWvCk608IHaSqj743t/0V+whlihQKhUJxBD531GdOP2LFMLBtm1QyQSgcUU+IMnpvCNvxv444UhBNSEAcQDmBHPLtl4ep+fC7Q2QyqUELfPR1p+ivQ4XadVEoFArF4cDzvAE/c47n2Ve6riM0jbZdO1m+dBGxeJSzzrmQSCRPfRYfQeORyfjdnwoKi/E8Vz3Xh/r6lhBLSEDDMIx+X8sScB2b42HQ9pA0H+l0alCefF3XaWtro6ura8APC13X1atKoVAoFG/oM2fjxo1s3ry539u5rrv3Z86eu3PD1JdomoauG/T2dLNqxRK2b2/K/dwdIqnZmqahadphS9Px5zwM/pA5XTdYt2YRG9avYczYCYybMIVwOIzjOGoI9CFoWr/blZ6NfPR3Y3Bc57jo9moMxYPKZDJH9B1V2+NNvG8YkK7raJqW+76/F1hfVy6FQqFQKN6IMPEnK+//M6fv88YX4/pen1t9vx9eCEzTIJ1Os3rVMtatWYnneVx40UWkU2meevKJIWM8ent7WL1yaS56deimQ6BpGpZlMWnKdIKhMHKQIw2O7Q8O3LB+Ddu2bmbSlOmMGDkawzCU/jmo17gglpSAjqZrA5i37IDK48B9GEPvbUeQSaeOoLuWmKaVzWWUZDIZpJQEAgE0TSMSiTBjxox+PwjS6TQLFizAcRyVj6tQKBSKQzYfkydPprCwcL9pLUITLFm8hJ6eHkzT3znt+9zSNIExYAedY0iQGAae57G1aRMrli0mkYgzeuxYbvr4rVx2+eV8+XOfHTpaRdNIJRM079iGEIK8/PxDztfXNJ1YNIqu64wZN4lwOMJgjyZ0XJe8vDze96EPc/+9f2Lxwvls3rieqSfMpKKyetgNUDwyejZb5J4A9tjg7u/9wH9OVdrV0V8sIUgm4v4CHIEp51KSfQP3S9pTqTRSSgzDwDTN3Jt6fztRoXCIwsJC2traVPqVQqFQKA4a13UpLS2lqKgoayS0fX4euq5LOp3GMIycOE+l09nNfzHg7IBjAU3zd4Xb23axYukiOjraKCoq5qMf/zjvuPoaInl5pFKpbFbEEFk/x6Gyqpb6hpFs27qFz33py5z9pvOIx2MH9Tj5+fk88Kd7+d53vsXoMeMpLinNRR0G2xh70uOqa6/jHe+8ml/89Cfc+8d7eP7ZJ6mprWfy1OkUFhbjOC5SqnqQ/bkP2xHEEh6mYSCE1q/29TwXx7GPi2avQ898aBqpVAI7k8YKhJCHfUdnd+RDCkkqlUR6HoZhEAqF6OrqIplMkpeXt//ohxSMGjWKjo4OPM8b0M0qFAqFQtFH3+dGY2Njvx2FhBAkEgmSySTFxcXZVp2SVDIJ+N2I/M20Y9N9CCEwDINYLMqaVcvYsnkjhmHw9iuv5EMf/Rj1I0aQiMeJx2Lk5eUNueOXSCZOmsa2rVv44+9+ywUXXUQkUnnAEQHDNOnt7ua+P/4B07QYO34S3hCJJgjhX1axaJTK6mo+++Wv8NbL3sadd3yfp598kp3N2xk/YTJjxk0kGAypepD9PIfpDMQSYJr6gPVBnudlUyqHv/vQhuKbUSaTIZmMo2mHfwGklASCYUzTRAhBT08PqXQKXdcpKyvDtm06Ojr6NRSe51FQUMDYsWPRNF296BQKhUJxQJ8/ffUbY8eOpbCwsF+hqmkanZ2dZDIZSktLMQy/FiIai+WMRyAYOiY/f0zTxPM8Vq9cyhOPPcyWzRs5+dR5/PGBv3Db7d+jvLKSaG/vkE7t8VyXgsIiJk+dzqqVK7nnt7/BsiwcxzmgL8Mw+MXPfsqOHTuYNv1EQqHw0OsqJfz6j2hvL2PHj+cnv/gVd//6t0yYOJE1q1fwxOP/ZNPGdTkjqXiN+bAhuof56G+jwHNdv+BcRT4Ga1fIJZlIUFwqjsBje4TDEQqLSmjbtZNkMklPdw/hcITi4mIMw6C9vZ0RI0b0+ziu61JfX09RURFbtmyhu7s7Z0JUSzqFQqFQ7Gki+sRZUVERY8aMoaCgYEBh7XkenZ2dmKZJcXGxv2HW3U08FgMk+QWFhMPHVstZXTcAybZtW1ixbBHxWIwRI0fykZtv4c0XXwxCEItGj5nzcRyH0aPHs3njen59992cd8GF1NY3kEmn+71fIBhk9coV3PuH31NUVEJ9w6ghX8idSqUQQnDG2Wcz5+STuf/eP/Grn/2URQteYcumDUyZNoOKyuo3XIA/bF732chHPAmRgkC/jRKEELiel30tq5qPQdsdSibjR2zQoKZplJVX0bZrJ67rsmvXLqqqq4lEfAPS2dlJe3s75eXl/b6A3GxB1tSpU4nH4yxYsIBAIMDYsWPVp61CoVAoAFi/fh3pdIaZM2fmUnoHEme6rtPR0UFHRwfFxcX+/YBdra24rosmBOUVNWiadsyYD13X6epsZ/XKpbS0NJNfUMBNt9zCNe++nqLiEuKx2DEXxZFSYloBpkybyf9eeZ6f3XUX3/7BHf2aj74Bfj//8Y/JZDLMOWkGuq4fE12kpJTE43E0TeOG93+A8y68kF/ffTcP/vk+nnvmCRpGjGLipGnkFxQe91khQkAyBbYNpmUOqGk91xn0LmfHtfkQQhCL9R6xIibP8ygtr8QKBMhk0uxq3UU6ncayLEaMGEFHRwdNTU2Ulpb6tSH9vHg8z9sj75Zc+pZKw1IoFAqFELB5s0E6ncGyrAOKjvd97jQ1NSGlZMSIEei6Tiadpq21FU3zC81LyyqPKeOxeuUyVq9aBsBV11zL+z70YeoaGkjE48dUtOO1OI5NXf0ItjZt4uG//41L3345J51yColEYp+3D4fDPP3fJ3ns349QVz+CyqqaY659red5RHt7KSsr5yu3fZNLL7+cu37wA55/9hmad2xj3PjJjB47Idck4Xh97afSkHEgYFkDpFMJXM9V5mMw0TSN3u5OUqkklhU87CbE8zxCoTyKikvZ1dJMb08v27dtY/SYMZSWllJWVkZrays7d+6kvr4e+wA6T+xpNlQPbIVCoVD0CZC+jwcp5QFtTOm6TnNzM21tbVRUVFBWVoYQgq1bt+aG4BYVlxI+xqZ8u56bM1eBYJBAIADDaKNu8pTptOzcwZ0/+B4zTrxvn1EpTdOIx+P8+I4fADBx8gnH9GalbdvYts2kyVP5+W9/xwvPPsO3vv41Vq1cStOWjZxy2lnk5RUctes0EvLTnfYt78F2IZn2b6eLbCvc1O7LMBwEQwfP828X6j9bCvma+7/2tZ/MBsAsyxrwfcJzPTzp9dsVS5mPI/pmrZFMJunubKeqtgHX8Y7A3xDUNTTS3tqCRLJu/Xqqa2oIhUI0NjbS1dXF+vXrKSgoID8/X+UvKhQKheKIo+s60WiUdevWYRgGI0eORNM0UskkGzds8AfSCUH9iNFZkXJsmA/XdZkydQbV1bWsWrGU3//6V/zzob/z3g98kHe882ry8vNJxOPHrBB3XZfiklLGT5jMkkWL+OsD93Pde24g2tu7tziORPjNL3/BqpUrGT9xCoWFRQe0wXksmGzXdUkmkzm9pBvGUZuFJgR4nuCh/0J7j0Tfh353HBhVB6dMF/zlCUlnD5QUwpvn+YZFAv96Fna2Q0EEzpwNDz8D0TjsqweR5/lm5fxTfZPivebS1Q7CfIDAzaapqYLzQURKSVtrC1U1DUfojcKhtKyS0vJK2nbtJBaNsnHjRqZOm0ZxcTFjx45l1apVrFq1ihkzZmBZljIgCoVCoTiixiOTybB69SqSySQTJ06kpKQEIQQbNm4k2tuL0ASl5VWUllUe8lC7wRToZeWVzDvjXLZt3czK5Uv47jdv4x9//Qs33fIJzjnvPH+OSSp1zBqQMeMmsnnTBn7+kx9z1jnnUFZekTMXpmmyY8cOfv3zuwkEgowdN/GY1xWWZWEFArz6yiv86AffY8H8+ZimxdQTTmRU41h0XT8qUQ9dh65euPX7Hl29+7/dGbMEMyZIPn2HzN5O8NuvCS4/T9LRBd/4pWRdExTkwc+/JPj0HZKefka3BC3BUxNgTANk7NcbokTSdxKmNcA8HgG2kzluUvaHbGxH1zW6u9pIpRJHLAQlhEbDyDEITcMwDDasX8/O5maEEDQ0NFBfX09nZyeLFi2it7cX4yi6eIVCoVAcH/R1wopGoyxZsoT29g7q6upoaGhACEFLSwsb1q/3d5LZM+px7NFXhDxy1BjOPe8ixk+Ywvp167jpg+/no++/kfXr1pKXn5+rozyW8FO6w0w9YSZtra385pe/IBgM5n4fCAb53S9/QXtbG1NPmEkwGDpm6yF0XSc/v4BdLS188dOf5Pp3XsmC+fMZMXI0557vr+tRb4YgZU7gCwGVZVBbCTUV/ldRAVSVvu5OfO/3kp5e0I3djXClhGAA6qsFlWVQVbY7+qFp/v8ry6C+Cixz/2lX3bHdJq2/NrsCv6Uxx0m58JCNfAihkUwk6OxopbZuJM4RSL1yXYfS0koqq2vZuWMrQmgsWbyY/Px8IpEI48ePB2Dbtm0sWrSIMWPGUFNTg67rKgqiUCgUisMi4jzPY/v27axfv55UKkVDQwPjx49H0zRisRiLFy/Gdf1J0lXV9cdk1GNvjSixbRvDNJl6wkxGjGxk1cqlPPXkk7z4/PNc8c538r4PfYTKqioS8fgxJdAdx6FhRCNNmzfy5z/+kYveeilTp08HCUsWLeTee35PaVnFMdFad39GORyJEO3t5Sc/uoPf/epX9Pb2UF5RyZSpMygprcDzXGx7cKfRhwJw/+2CkTW7IxJS+mlSPbG9zcLKjZJf/13jpqt3/9B2fKPy6I/9KeUd3XDuByU9UT8l6593CkoL/VSrYMC//b7MR0+2j4JhGAOUNwkc2z4Cg7WHJkN+66S9decRrUeTSCZMmk5BYTEA8XicxYsX4zgOlmUxefJkJk+ejOd5rFixggULFtDW1pbbqdJ1XUVDFAqFQnHA4k3X9Vwkva2tjYULF7J8+XI8z2PSpElMmjQJ0zRxXZelS5Zk53pAQUExEyZPHzbPhed52LZNXn4Bc08+ndPOOJdgKMwff/c7Lr/4Ldz7h98jhCASiXCsJMJLKdE0jSnTZuC6Lnf98AdIz0MI+OmdP8JxXKZMnZ6ddn1sCc1gKIQVsHjskX9x1WWXcOcPvo/jOMw5aR6nnXEuxaXlOI49JMyiEFBWBBUlu7+qyiAvvO8oxc8ekGzaLrDMPdcSwmHIz4e8yO7pGwL/cfLzIRLu/xj6UrZ0Xaf/sIYcdMN2NBnS4yg1Xaejo414vPeIDVLyPA/LCjLlhNks+t/zZDJpWltaeOnFF5kxcyYFBQU0NDRQWFjIli1b2LVrF4sXL6awsJCSkhLKyspyfdtzT6phqFa7CoVCoUCI3bq5b75HNBqlvb2drq4uuru7AaipqWHkyJEUFhYihCCRSLBo4UJaWlrQNA3TNJl8wiwCgdAxHfXYF32ZBBWV1Zx1zoVs27qZFcsW87UvfZG/3P9nPnbrJ3jzxW/FNK1j4nwcx6GsvJLRY8bz0vPP8+R/HicQCPDc008zYmQjZeWVx07UQ/r1CsFQiMULF/Cj732XV156CV3XmTJ1BqNGj8MKBHBsBxg655RKw/VflHsVgqcy8OnrBbMmv/72LR2SO+4BU3/ttenf3/X2ekpwPf93/SbBSOiOSkBD143+rYf0WzYfDwMGh7z5EEKQSafYvnUTEyZNP2Ju2nUdCgqKmTT1RJYufgXwaGtr44Xnn2f6jBnU1NRQVFTEtGnT6OzspKmpie7ubjo7O9m8eTOhUCi3S5VMJlm2bJn6xFUoFAoFAImE3wFoyZIlOI5DMpnEcRwCgQDl5eU0NDRQUlKCpmlomkZHezsLFiygp6cXXfeno0+aOpPCwpKsQBmeOI6DEIJRjWOpqq5l3ZpVrFqxgg/e8B7edsU7jqlZIK7rMm78JJq2bOIH3/k2hmGgaRoTJk3D84b+5qSUvmnOLyigo62Nn/zoDv76wAPZtLJRTJx8Avn5hTiO7dcqDLXn34MFq17/8y3NcNIJu/+vaX2duuCv/5X7bdN7KHiyL/Lhm4/+03j8VMTjJZHGGOoHqOsGO3dspb5hNKFw5IgZEMexKa+s4YQZJ7Fq+ULS6RSpVIpXXnmF0Y2NjBk7lkgkQmlpKcXFxSSTSTo7O+ns7CSZTJJOp3O1IK2trerTVqFQKBRZgaPlOllZlkVlZSUlJSWUlJQQCoXQNN9gJJNJtm5tYt3adWQyGTRNYFkWk6bMpLyqdlgbj92i1xdhlhXghBmzaBjZyMrli/nbgw/knstjYTaI53lE8vKZPHU6Sxe/CsDkqTPIzy84JlrrapoABPf89jfc/6c/0dq6i5KSUqZMO5GKyqpsytzQTRMyDLj8XEFh3u6ohe3AzEmQ2eOwK0sE08bB4y9JUunDfQ1Ad68EdHRDH/C6d1XkY+gghCCdTrF922bGT5x2RHMJXcehorKWUCjCimWv0tPViW4YrF+/nu3btzNmzBhGjBxJMBgkPz+fvLw86urqcF0Xx3FwHOe4neSpUCgUiv4/y0zTzNUK9hkOKSXpdJptW7eyYcMGotEouq4jPY/CohImnzCLgoLi48J4+KLXf24kEs+TlJSUMe/0c9i5YxvLly0mkYj7+fPHgAFxXZcxYyewY/tWHMdm3PhJeMdISrau6cTjce664weEQmFmzz2VhhGN6LqB4zqAQNcNPM8dkmnmARO+/AForNtdcC6EP+tje+veov+WawWvrhR09sjD+Hr35470RCUIA03T+3meRC4l83jBOCZeBLpB8/Yt1DWMIhSKHFGB7zg2efmFzJw9j3Wrl9GycxsCSKfSLF++nC1btvgTZ8vLc7tWhmH4bdT2HGWrUCgUCsUe5sOTEul5SCmJJ+J0dnTS3tZGa2sr0WgUITS0bN5FTd0Ixk86AcsKDnvj4aeb6biuQyzWQ7S3ByH8+knDMMkvKKauoZHS8kri8egRzYI4HKrTN0eQTiWJxbqpr69H1w26OtswTJOCgmJAZMXm0NQMZnYo3sTJ0xg/YSqmadDb201vTxdIiWGa6LpJfkEhViCI6/jd2IYKEsg4u79y52X4X32kMjBpNLz7YsEdfzy8a2E7kEhJDNNA17UBjIqH67oq7WqovWmn0ym2N21i/OTpR/xNx3UdDNNiygmzqakbybatG2lvbcFzXGKxGL29vWzcuJFIJEJ+th9536CdgGWhUCgUCsWepDNpMpkMdsYmk8kQjUaJx+O5zziQ6JqgrKKW+hGjKSmtyO6GOsP6eTFMk1hvD1u3rKO7q4NotBfbTgPCT0DRBIWFxTQ0jKGqdgTFJeXYmfSQPBdN8zsabduynl0tO4j2dpNMxv1zEQLpeeiGQUVlDfUjxlBaVgmIIWekXNdh3ITJjBk3CcPQ2LB2GR0drcSiPWRyz71AE4K8/ELqGhqpqR1BIBgeMtdrOg03fuX1k8ddF95zqSAUlHRnS4hSafjA5XDvo4JdHYfHgAjhm49k2h8u6Uc++jFLnofruai0qyGGrhvs2L6Fqpp6CgpLjvgFLj0PFygpraCktJyuznZ2bN1ER2cbqWQSgEQikfvw6Aunqba7CoVCoXjdZ8prPiNy/+IPnyspKaeuoZHikvKcABzOCCHQNJ0dWzeyetUSEvF4ruBe1/eWJt1dnXR1vsLGjauYNOVEKqsbcIZYvYGuGyQSUVavWMzO5qacGfENSfacszNddmzfws7mrVRU1jDlhLkEQ2HcIdb9KhAI0bxjC2tWLiYej6Fp/nq9dm16e7tZuXwBmzeuZsKkGdQ2NPqdvAY5C8QvON/3MZx3CuwuwRBkbBhdL/noVYIv/eQwmQ+y5iMFlmWiaVq/aVWe9PBU5GNovlHZts2aVUuZOXveUeuR3fcBUFxSRnFpOclEnO7ONtrbdtHd1YFt237OYzaUfrwMiFEoFArFgaNle+5qmoam65iGSWFRCeUVVRSXlBMKRZAM/0jHbuOhsXrlIjatX4XIthKWUuJ5Lp4nc92W+or1QScei7Lo1ReYOn0udfWNQyYdTTcMujvbWfTq8yQSMQzDzBpOLzv3whejQuub8WIigZ3N20mlksyYNY9IpGBIrL0QfpRm+ZJXaNqyHk3Tc9PmXdfF87x9rk0ymWTJopfJZNKMGj3hqLcSdl3Ij8Cn3q2xq1Oyv/puz4PTT4RQQLCjFcqLBZGwpDcOV10IyZQgloC8iKC0SOK6vo/KCwluvU7Q2ikpL4ZICDy3v+dxD/MRNPvdmBZC4LqOinwMVXRdp6uzjY3rVjJ+8vSjulPQ51gDgRA1dSOprh1BOp3CzmSw7Qx2Jk06nTouPjgUCoVCcZDmQzcIBoKYVgDTNDGtAIFAMCs8vGwR7/GBrhtsWLeCjetWomeHLfr57oLSsnJKiksJhyP09vbQ2dlBd3dXLiLieR5LF76E57k0jBgz6PMyNE0jk0qybPHLJBJx31hIieM4hMPh7PmU4DgOXV2ddHS0k06n/WvANOnu6uTVl59mzinnEAqFBz0FS9cN1q9dxpbN63ODMPv0T0lJKcUlpeRFIkSjvXR0tNPd1YWm636TBClZsexVPM9j9NhJR3VtpPQ7XH306oHb5SbTMHsy6Dp4niSa8IvSIyHJZ2/05b+Uklhid6cs05TcfC3omm9goom907n2ZT4ytkYi7VFSOFA6vsB1HDxVcD6037S2Nm2gsLiU6pqGo77z4e9keNmL0cKygtkwmVApVwqFQqHo5/NDAv6uvpTecdXdZs/P8Obtm1m7emnOeDiOTVFRCSefchp19SMwTX+n2PM8MpkM69au5tX/vZRrae95LmtXLaG0rPKIN6EZSDRKYOXyBfT2dmMYZvZYJJMmTWHGzNkUFBblhLnrunR2tPHyyy+wbWtTrvtZNNrLpvUrmTr9pEE1H7pu0LprB+vXLs8ZD8dxyM/P56STT2PEqEYs08rWr0hS6STr1q5i4YL/kUql0HUdXdNZv2YZZeVVFBQWH9VrXEqIxg/kPP2CdM/zTUJedkq540As4f/8UB97T/MRS/ptfS3LGiDy4WfZeJ6n0q6GKn5rQsG61UvJzy8knJc/aG5RSomUx9+Hh0KhUCgUh/L57TgZ1q9djpQSTdOwbZva2jrOu+AiIpE8bNveaw6GbhicMH0m1dU1PPrvfxCLxdB1nVQyycZ1q5g6fS4wOILdMHR27miiefuWXMRDaBrnnHMeY8dNxHU9P51mD41SVlHFRRe/jVdefp7FCxdgWr4Bad7RxIhR48jLL8Lz3EFZG89zWL92GZ7rF8bbtk1VVTXnXXARBQVFfpbHHmtjGBYnTJ9NQ8MoHnv0n3R2dmAYBrZjs2HdCmbMmje0BK/up0u1tAv+8oRgV7sknk2zGlEtmTlRMGm0pChfkkjt24QcKJoG8SQ4HljZtLX+TKzjOP71IzRlPoYqmqaRTCZZs2oJM2adihDakGrxplAoFAqF4rWf3Tod7buIxaLZCIZHKBRi3ulnEQ7nkcm8vohceh7pdJqKympOOmkeTz75GCDRDYPmHVsY2Th4gl1K2LF9S67S03EcZsyYxfgJk0mn0/usS3VsG03TmHvSPLq7OtmyZROGYZJJp9natIEp0+YMjvnQNHq7O+nt6UbLrk0kEuHMs99Efn7hHl2u9jx/j0wmTUlpGafOO4N/P/IPpJQYhknLzu10drRSWlY56BE+CYSD0Nmj8eM/w58f02lpDxIMmH4hvYB0xkWSoaLE5uoLXT54hSQQlCRTh3itCz+KAmBa5kDeA9u2szr2+DAfx+xZGoZBe1sLa1cuQdNUypNCoVAoFEMZIWBXy/acuHYcl0mTp1JRUTXgtOxMJs2YcROoravHcZxsE5oMvT1+PchgGKnenk462nflalEKCgqYPmMWmUym34Y4nuehaTpzT5qHZQVyEZPenq5BqxvVhKB11w4cx87VecycOZvy8oHXJp1O0zBiFKPHjMvVeXieS7S3e0js5BdEYPUmjYtv0rjjj/kYeimj68KU5EsCZgbLzFBRotFQmY8mSrn9dxEuvUVn+XqNcPDQr/W+NK2+BgP9eA9/uvlx1K/omLZYhmGybesmVq9YnOvQoFAoFAqFYshZD1x3b0GqaVBeUYXnDay6/DQtnarK6r3SYXp7uwZHPGkaPd2dZDLpbMqSS1FRMcFQ6IDqNlzXoaCgkIKCwqwZESTiMdLpJGIQzJSUkq7ONkR22rZhGFRUVR+EGRJUVVXvJaBTqcSgX3WRILy4WOPyTxgkUsWMawjR1tXDjo40MlBEVcNoKmobsbV8trcn6erpZeLIPLa3FHPZLQaLVmtEQodmPvrmiBiGMYCx8I308dQt1TjWT0A3/AJ0wzAYN3EaruselRa8CoVCoVAoDl3sBgJBioqKDzjNSEqPsvJKNG33rJRoT/egpClBn570j8XzoKS0DF3XDyjNSGanhBcUFtLW1oqum6TTKRLxGKFQHu5RrmORfecj/GMLhcJEInkHXADveR6FhcV7TPIWpFPJQdVjARO2NGvc8FWdcLAYy3RYvz3G5CkTmThhDJZl5gq8pZQkk2mWLl/D2vUbGFldgKYVctN3Onn4h4KCPIl9EEEpIaA7tof5GMBYOM7x1Sl1WCSXGYbB5k1rWb92BZqmqwiIQqFQKBRD0nXsLVhdx+HAW/z4nbFyA+wkaLrO4LUI2ltQOrZzULP1pJS5kQF+ZEfkpqQPkiPca228g5g70dexaffuvZ9KNphjK0wT7vijwLHzKIhAc3uKc849nRnTJ6Fp/uy4TMb/sm0HyzI45aQZnDLvZLbuilFRbNC8K5+v/1LDMg/uRISAnmjfcZgDXBd918Hxo12HSWWL/4LdtGEVmzasRNeN46ZjgEKhUCgUx4LrEEKg6Vru+0wmQ1d3F/oBphkJTdDa2pKbryCRFBaVoA3S572+x/RyTRN0dLbjus4BbYD21az09PTkhiYHgmHCBxFtOLwqys8kkdJPKUunksSisT0iGQOISU2jq6sT191tDIPBMGKQBHUoAM8v0vjHMxYN1SG27uxh6rRJVFeVk07vuybH8yTpdIbGUfU0jm5kW0sPjXVh/jvfZPMOgWkc1OVOPCEBMWDkQ0qJ4zocT9vmw0ah+xNTDTasW8WqFQuR0s1O3lQoFAqFQjHogkPTKSou3Uv47djedECpOX2CuHnH9pwgFkKQX1A0KLnynudSXFpOKBRGSg9d1+nu6qSrq/OAtIdpmrS07CQa7c2aD49IJC9XgH70NZRGeXl1TiS7nsfmzRsOwkjZbN/WlEuJQ0AoFB60a80w4KGnBUErTDKVJpRfyIQJo8lkBp4NZ9sZpk6dgCssXNchnrR4biEErIO4PiTEkhLQ0bNtmPvDdezjKfAxvHp6CSH8IYRbNrDo1RdIxGMYholCoVAoFIrBRUqPispadN3IFTWvXbOaTRvXEQyG+v1styyLxQtfpa21dXeb3mCYwqKSQYkU+K1o8ymvqMpNZ08mk7zy0vMgRL8GxDQtotFeXnju6exgOX9oX0lpRTbtikE5n5KySizTyq3N8mVLWL9uTb9rA4JgMMjKFUvZurUJw/DX1rIsCotKByeKIyCVFqzdIiiIGPTG01RVV2GYxgEZO8+ThMMhKqoqiMZTFIQDPPWqOKi5H1L2tdrVspGP/m6r0q6GBYZh0tXRzoL/PUdbW3PWgKg6EIVCoVAoBgvP8ygoLCYvvwDPc3O76i88/yxNWzYRsAIYhoGmadlsBi03BXz5siUsXboII5v74rkudSNGEw7n8//snXl8FeW9/9+znDU52UkIewggqxBEQURxQ621Wm5dQFutVq3V2kWrrd3Un/eK91ZbW696bd3qrkjr1lYB64KKgIQlhDWsYQkhe85+Zvn9MSeHhLCEEAjL9/16zStwZuY5s5x55vk8383upqrgtg2Fvfsnix/buFwuKrds4ovPPiYej+N2e9A0LZmNU0XTdDweDw0NdXw45180NNTvFlJ+P737FnVb8HyLmMrIym3jOjbv04+oWLcat9uNrrv2cm80VpaXsWjh/JTgMg2D3n0GJoXhkT8fVYX6Jqiq0fB6VGIJix55OVimdRD31iY7O4tIzMTt1qhvtDCtjocXOeLDsXy0uNXtSylZlnXCuV3px+uJabpOLBph2eIvGTRkBP2LBjsPhSkVyQVBEAThyA/WbTRN56RhYyhdNC/lrhQKBfnHe28xenQJA4sHk5buuB9FwiGag82sXLGctWtXo6kqiqpimgZp6QH6Fw3p1ne6aRrk9ehFv/6D2LxpHbruQtN1lpQuZmvlFkrGjiM/vyd+fxqmZREOB9mxfRuLv1pAMBjElax8bRgmA4uL8PsDTkB999wdVFVjyNBRNDbUYlmO63o0GuGD999jxIhRDDlpOGnp6Xg8XiKRME2NDZSvWE5FxVpUVUVVVSzLwuP1MqD4pA6lUD4cKArEExCLg9/rxF14vO6DdGezcbtdWJ1wgVMUsCyFYNhG0fT9WrMUHBe3g0u8IOLjqEZVNWzbZs2qZTTU11BUPDRpBjS7xRQoCIIgCCcypmnSs7Avw0eeQtnSBaia46Jk2zaLFy9k+bJS/Glp+Hw+gsEgkUgE0zRTA3XLstA0nWEjS/B4falsUd0oqRg2cixNjfXU19eg6y7cbhd1dbXMnfM+Ho+HQCAD0zQIBoMk4glUTW0lPBLk5uZSVDy026were9NXo+eDB0+hrKlC9H03fdm+fKlrFy5Ar/fj8/nJxRy7o1lmuit7g3YDB1eQnp6Rrelj7UsyMqA3CyLWFxBU2zq6hooyM/rsFhVFIWmxmbcumO1UBQFpYOxRQoQSygEwxYul3bAIpi2ZXZbccluG58f7yfYEgdStWMbXy34lNXlS4jFoui6S1LyCoIgCMIRJpGI079oMCcNH41tW1jJmAmXy6kEHQwGqa7eSSQSSbn3ABiJBLquM3bcJAp7DTgKhIcz4NZ1NyeXTCAQyMRIOJYLTdPQdR3DMKitraGhocHZ1qWn3HAS8QR5PQoYN/5sPF7fUTEpahgG/YuGUDxkBJZlpuJZWu5BKBRi167d96ZFeJjJqvMnl5xOv6LBXS887DZ/Dig+0n02vfNtIlETv9dFfV3j7mD4jnydDfX1Dfh9LkIRg5MGKOg6HUql3GJ5CYbB1ep+72tj09x9nUV8HGfouo5lWWzauJZF8z9i4/pVmKaRFCGSllcQBEEQjtwg12TQkFGcOuFs0gOZJBKJ1Oyv48KjJSuHWxhGIlVgcNz4yRQU9u1G96T2mKZBICObCZPOp3/RYEzTxEgkUmJC03bPfpumiWEk0DSNAQMHc8qpZzkWnKPEJdy2bSzLYtiIEsaNn0xGRpZzbwwjWYuk/b2xTJPM7FxOOe1M+vYrTgmwrqQlw1ki0THvJE2DscMsGoIxMtI9bN+2nYaG5gNaIZzxosbOnTXU7qoh3e8lGo8xZYLd4YBzRXFcvppDjvjYn6hQAMM0TjhvHP1EOllFUdB1F9FolDWrllO1vZK+/YvJyy/E63XS5UlMiCAIgnCsv+ucQZaSHPjYKf97Z/ZXcdLT2s7ntt0dAx8b0zTIL+hDICObrVs2UFtTRXNTI/F4DFVV0TQNl9tNbm4BvfoMICcnH0VVjirh0VqAuN1eRo2ZQI+C3lRXVdJQX0s4HEpaR3Q0TcPr9VNQ2JeevfoSCGSmZr2PJmzbTrrH9SM7pwfbKjdQs2snzU31RKPR5FhKR9fd5OTmUdi7P7l5PdE0/bDcG9sGvz8NgMagQkcMGJEYXHUhvPhuhITpw++yWFxaxnnnnUF8H3U+WoSvoqiUlpaRl+kmHLXpnR/ntFE20XgHB9YabK1WqG2EAUWB5AS3uU+lYhpG0von4uO4piUwqrmpkfLli/H508jL70nPwr5kZGaj6y6JCxEEQRCOLcGhaShANBohEg4Si0aJRMJEIiGikTAAXp/js+/1+fF4vPh8aXiTAzvLNI94jQnDSODxeBl80iiKBw93jjccRNU03G4vbpcbl8fjDPANY59juKMBZ8xg0bOwL4W9+hKPxwmFmjANA7fbg+5yO391V9JqcHT7+RtGAl13M3DwCAYUDyMWCRMOB5Opj7243M75KCnXocNzPrZt4/c7NUOWroFLJ3fk2KFfT4tbrzK498kgI4szWbtlOwsWLGVsyQh0Xcds9Xt3BJVGLBbn8y9KCTfVU9AnmxUVjTx4u0lWuk0w0rHjdemwdpPz79y8vP0/t8nrbNl2txXLFPFxpEVIMi1cLBZhy6YKtlVuIpCRRUFBL3r07IXPl5ZKHdcyO9QdxX8EQRAEYa/vsWQGqHgsSkP1DnZVV1Ffv4toJIJlWSmrRovrR+vBlqqouL1esnPyyM/vRXZuPh6PB9Oyjmj6WsuyUpN9Pp8fvz8dsLFtu1UNhGOHlkG4pmlkZeUCSvK6O5amo9Fys++Bv4WRcO6Nx+vD60tre2+OgNXGskwyMrJQtDTmzg9z13UqimIdMP4iGIHvXGLz0VdR5pVqDOmXzZYNFVTt2MmIkUPJy83C6/Ni2zaRcJRdu+ooK1uFToyiPtms2hjiyguiXP9Ni1D0YJ5JhXmlACpZ2blY+7MsJi0fBxpbWpZFTk4OsViMcDh8zMeHKJkZ6duAXtKFk5r5sWwLj8eLPy2dQEYWWdm5pKdn4vX5cLncqRgRx2xNynwtwkQQhMM/GJB+RnDQdJ1oOMTG9WuordlJJBxyZlCT1v0O/Z5aBv6Kgt/vp0d+IUXFQ/F4fUf9zLxw4qDrLpYsXsiG9at542GdC043k0X89o9Lh4ShcNuDKrO/8HNSUYBwJEpNQxhUHZfbC9gkYlEU26IgNw1Nc1FRGWRSSYSn77PwuC06+ih43LC9WuXcG01idi7nT7lwv/22rrtYt6aM9etW7rcotmVZZGdnE4vFiEQix7r4qBHxsZ8XfMuskYKC7nLh9fkJBDLx+9NwJU3BLpcbl8uN7nKjaTqqqkgWLUEQDrUDcv4m+5LWA0mnf1FS/27b3yh7bJdq0Hn5JSdL7JbvsG1Eyhx7OAXrVHZWbWXtqjJCwWZUTeuw4NjfAMcyTdIzMjlp2Mn0yC9s45oiCN2Fqmk0NzYwd/b7TDjZ4u+PKoBFRwwvTl1KhRnPqPz1XR1F8dMrz4uq2himhabYoGhEY7CrIYZLD3HHd0xu+KaTOjjRQeGhquDzKFz/W5W3/m1w6vhJ9OtftB8Rr6AosHjhp9TX1aY8bfY3Lj1OxpciPg5GjNi2jW1ZLa9uFGV3pU9N05LiQxXxIQjCIfc3rYWGpmutXnBaqo9pO8OttEkhrmkamq7h0t24PV6nQrHLjabr6JruVCvWtFR7zm5KUqjQ6q+V1CkyAD0qBmGqhmEkWL+unMrNG9qJ067AqT6u0m/AIIoHDUNNVuEWhO5E110sW7KQinWr+fE1Lmb8yKQxaNORwuWqCn4vrN2s8PzbKv/8TCMcVbEsBdNS8XtN+vY0OHWEzTUX2wwvtgiG6XCGK1WBQJrCg09rzHgmQd9+Azltwhn7tR6qqko4HGLR/I8wDOOAY8eW1M0iPoQ2A4WW2Up5RQuC0MW9TKv+5uDXOQWylFSaTFVT0XVXMgDWCRp1ezy4XJ6kJdflWHXdbly6C93lQtNcyUHubn9vW9xNj6zw0DTisSjLS7+krnYXmq4ftsku23ZiE/LzCxk1Zjy6y93tRfCEExtFUbAti3nz/k1dTTV3X+/irussdN0iHO1YDQ6PC1wuqK5TqG+C5jBEogq9821654PPaxONOXU6OnZMjquVx6Xwp1c0fvVYgsysXCaddS5ut3u/ol3XdbZu2Uj58q/QdP2A5+7xeIhGo8fDrRTxIQiCcKJOllgAtpWydAAoKKAoqKqCqupouobb7cHr9eL3B0hLz8Cflo6nlTWlJa2rjY0tyTkOj/BQNRKJGEu/+iJVSftIYBgJcvMKGDP2dLRkvSxB6C40TSMSCbNg/jzqancxqUTjF99TOP1kC5fLxjAca4V1gO5H1xxriOp0dxgmmOaB9wNnH1V12kgYCms2qzw1E/76jkEgI4szzjwHvz/9gNm/NF1nxdKFbNu6GV3Xj5J+ximIGA6H8Xq9h2tyo3vFhzOzYqTyXJumjaoquFw6ui4uTIIgCEeDUHEsHFbK51hVVDRdx+V24/OlkZ4ewOdPx+vz4fOl4fH6cLlcKIrWqs6EJZaSQxgQmKbBstIvqdm184gPVAwjQUFBL0aVTEBR1SOaCUsQ9iZATMNg2bLFbNpQgaLYnDFG5eIzVYYWQXYGeNzmYXFDURSIxjUammH1Rvjgc4vPl1okDMjr0ZPxEyYli0YaB2hHwTQNFs3/mFAo2OWuk/vDNM02/fHubHMK2dmZnHfe+SiKwty5c2lsaMDr83X1WLx7xEeLqnK53PTt25vcvDwKCnrSv/8AduzYTkVFBdu3baempgYAv98nIkQQBOEoEya7F2cw2iJKPB4vXq8vWVMijbT0AP70AF6vP5kxsHVSDxEjBxqk2LbNiuWLqNpeecQsHnsTIL37DmD4yFPaCFNB6J7nwom1ra3Zydq1a9i+bQfYsZRAUA/jkNGyW7l4KR4KCvIZUFREz8LeTnxUB6LgNV2nbtdOFi/67IgID9u2iUQiWJZNXl4ufr/fsWanpeH3+0jzpxEMBlleVkYoGOKcc85hxMgRVKxbx/z58wkGg/h8vmNHfLQNnLQJhyPYNky5YAo/+ckdTJo0CY/H0ybKP5FIsGtXNQsWLOC5Z55hztw5GIZBWlqaPHGCIAjHjChxahsoioqu63h9fjIzswlkZJEeyCA9PQOX24OqaikR41TiloFtC7ruYvPGtaxcUYrL5e7WYzEScUaMPpW+/YqPqVoVwvGLpjlWwGg0TG1NNY2NjUSjMUzTOiwVw20bNE3F6/WQkZFJbl4+Pr8fBceS0RFR3pJIZFnpfHZV7zhglqtDnbyIxWLYts2ZZ57F1ddcw3nnnU8gEMCVtF47VmrnYi1ZsoRHHv4db8yciQJMnnwWQ4cOpbx8JZ99Nq+rBMjhFR+2bTk+wbqLxsZGYrE4Z545iZ/ddTdf//olHbZmfPHF5zw0YwbvvfcPAoE0sYIIgiAco6KkJWZAU1W8Ph9p6RmkBzLJzMwmPSMLj8frBFIj1hFFUUkkYiya/xGRSOSIumbsDcuy8Pn8nHb62ehuj7hfCUcNLZn/nDpshzeFeDLReXKyxDroOKiWCYVV5UsOuyUzGAySn1/A4088wdSp/9Hh/ebP/4L/fugh3n7nXdLTfNx7771s2rSZx594ksyM9KNdfNgMGzaMiooKvF4ff3j0UaZO/Y9O+asahsEdd/yE/33scREggiAIx4MgsSyspMVDUVQ8Hg9enz8lRpzg9gAejyfpfkSbqt3HO7rLxfo15axbu6Lb3K3av4sTDBw0jCFDTxbrhyAcJJqm0dRUz+IF8zBNI1W0+nDQ3Bxk0qRJ/OXpZxgyZEin2vj3h3O54YYb2Lp1K3/84x9ZuHAhL774EhmHJkBqNK/HfScQ6OqTTiQSDCgqormpie3bq3j2uee4/PIr9jpzY5om8Xg8FXyuaVo7caGqKl/72sVEYxE++uhjPB63/IoFQRCOYVrqJKmqlgyqNolFIjQ21lNTvZ2qHZVUV22jrnYXweZGLMt06pToTp0SRVVTFpLjDVVVCYeCrCpfclQVF1MUlWBzI3n5PfF4fBL7IQgH0d9ZlsWKZQsJhZpRVe0wfQ80NQW59NJL+Pvf36JnYeFet4vH4yQSCQzDcRfbm/tX0cCBnD7xdN566++8994/uPnmmzFNk1WrVuLxeDp7iOHDYvkwDIP8/Hyys7MpXbKMe37xcx6c8VC77SoqKnjttdd4/fXXqampSaX4mjBhAtdddx1TpkzB7/e3a/uyS7/B+++/TyCQLr9mQRCE4xjHOuK4XqmqhsfjwZ8WICsrl0BGJoGMLHw+P2ryxdkZN4ijEV3XWbWilM2bKg7Z6tEywGhp1+U6tPYMw6B3n/6MHH3aAbP6CIKw+5leu7qMDRWrDpslU1EgGAwxZkwJ77//Abl5ee2e3c8++4y//vWvfPjhh5imiW3b+P1+LrvsMq655hrGjh3brt158z7lG5dcAtj8+c9P89BDMw5FgHS925VlWei6zrChQ/lywUKmTJnCu+/9o11nN2PGDH7zm99gmibp6en0798fRVEIBoNs2rQJgFGjRvHmm2+2MxdVrFvHeeedQ01NzSF3ooIgCMIxJEaSQemOq5aC2+0hPZBJICOTzKwcMjNz8Hh9aJqG3SJejrEgdk3TCDY3sujLj5OBswdv9VAUhUgkgmEYDBw4kN69+wA2W7ZsYdOmzbhcLnw+D50xXLRYO8aeegY5uQUiQAThAM+iy+Wiumo7SxZ/kfrscGAYBoFAgH/+631KStqKiNraWqZNm8bcuXMB6NWrFzk5OQDs2LGD2tpaAG644QaeeuqpdiESb7zxOlddNY3rrruWyZMnc+P3vtdZI0CNejhO/JvfnMquml306lXI40882U4gPPDAA/zyl7+ksLCQp556ioqKClasWEFZWRkVFRUsXLiQa6+9lrKyMi6++GLWrVvXZv9Bgwdz++0/JhyJya9aEAThhHqROyk2dd2FpukYhkFd7S42bVjL8iULWDj/I75a8Amrypewc0cl4XAQsJKuWjrqXtx6j7aBCihsWLeKRDzR6WNtampm9OgxvPLqayxY+BUfffwJH338KQsXLebFl15ixMgRNDUFO32MlmVRsbbc8Vvv5kB4QTiaJxJs22bj+jWULVsIh9mFMhSOctVV09oJj4aGBqZOncrcuXO54IILmDt3LuvXr6esrIyysjI2bNjAzJkzGTNmDM8++yw33nhjOwvyt751OePHn8qsN2dSXDyIUaNGEo/HO3ddujLmw7IssrKymT59Oi+//DLXfPvbfPvb32mzzQsvvMCPf/xjBg8ezNy5c5kyZQrp6buVk6qq9O7dm6lTp+Lz+Zg5cyb//ve/ufbaa3G7d8d59MjvwWuvvkI8Hu/2DCCCIAhC9w3W94wbiUbCNNTXUl21naodW9hVvYOmxvpkyknL2V7T0JKLoqgcDXpEURRUTWNDxSoqN69H62QxwVAoxPnnT+Htd97llFPGtUmP6ff7GTXqZKZNm86qVeWsWLGizbu1o6iqSiQcIh6Lkl/QK1WPRBAE5/nQNI36uhpWLF9E5ZaNjvA4jONV27bRdY0HZzxEv37926ybPn06s2fP5sYbb+S1116juLi4jWXD4/EwfPhwpk+fzsKFC3nrrbeIxWKcf/75bc5J13VmzpxF3z69Oeecc3nnnXc7E4PdtTEf8Xic0aPHcO655/LgjId4/vnnuO6676bWRyIRSkpK2LBhA6WlpYwcOfKAbf7whz/k8ccf58knn+SWW25ps+7KKy/nb7NmtREvgiAIgtD6hdziqqXgFPdyuz14PF58aempeiNerx+Px4vL7U5NaNk2qcruh3tg7QSf2lSsLWfj+jXJtKEHr4hisRiDBg3mo48/IW8Pf++9bXvxxRfx6SefdLqOlmEY9Onbn6EjStB1N4ZpgIgQ4QSdCAEFTdOIRsNsXL+abZUbMU3rsNbyaCEajTJy5Ei+mL+gzYTC7NmzufDCC7nooov417/+dcB26urqOO2006isrGTlypUUFxen1tXW1jK2ZDQ5OTk8+sc/cek3Lml17h2ma92uEokERQMHsmrVKly6SklJSZv1L7/8MmvWrOG2227rkPAAuOuuu/D7/Tz88MOEQqE26y666GtSi0oQBEHY74BAVTV0XU9ZEmKxCI0NdWzfupm1q5az9KsvWPTlxyyc/xGliz5jdflStmyqoHZXFZFwCMs0krN+ruSio2kti2M9abG8qKrqZOFKioeWZV/HpmlO5q5oNMSKZQvZWLG608IDIB5P8IMf/OCAwgOc2c477rgTXdc7La50XWdr5WaWLPqc6urtYNuOe9shnIMgHAu0WDdaXEBt2yYej7J96ya++vITNm9clyxKqB2R40kkDMaUlLSzZP7+978H4O677+5QOzk5Odx5553E43Eee+yxNutyc3MZN+5UNmzYQE5ODsXFxSQSB59yW+/KE1cUhfwePZg7dw4jRoxg6NBhbda3BLlcf/31HW6zf//+XHnllTz//POsWbOmTRR+dnY2iiqdmyAIgnAw7yoVRYPWs2+WZRGNhAmHQ9TsqkJBQVFVXC4Xbo8Xr9fnWEh8/uSAQ0dVNacgoqKmXL8UVUVLig9VUVFUJSWA9hQiiUSc+rpd7Nq5g+qd24lGw512tXLaS1BcPJCrpk3v8D5TplzAqFGjWL58OV6vt9MCpK6uhvr6GjIys+ndt4jsnDynYKSmiwgRjjtM0yQSCRONhAg2N9HUWE8o1Ew0EiEejwJKt9TmmTjxjDb/3759Ox9++CGnnnoq55xzTofbmTZtGr/+9a+ZPXs2lmW1CW/o0SOPSDgMNuTnF1BeXt694sPj8TCwuJhdr77CGWdMaqe+Nm7cSGZmJgMGDDiodktKSnj++eeprKzcawowQRAEQTg0QaKAouDMUe6eqTQMg0SimWBzE7uqd+zetqXOcSvrhppsQ21l+WiximianpopbSEcDhEKNjv1SzRnm0MhkUhQVFREbm5uh/dxu90UFBRgmuYhfXfLeTU11NPYUIfL5XZc2bxeicsUjjvi8RjhcAgjHsdMBmarqpKciNC65ZhUVSE7K7vNZ9XV1RiGwejRow+qrezsbIYMGUJ5eTnNzc1kZmam1qWlpZEwbWKxWKcnFrpMfNi2jWVZ9OjRg8zMTGpra9qsD4VCbN68mYKCgoP2LR04cCBAu6xXgiAIgnC4RcnuF6y233egmXRdSg3kbTvlGey4Ndl7tK2mXLW6Asuy6Nmz8KD3C2RkdFlMS0u9FdM0CQabaG5ukB+RcPz1C0nLqKKq6EexuK6qqgI46El/gN69e/Pll19SVVXVRnxkZzvpeUPhUKe9j3Rapm+6oIOOx+Ps2L6D/PwCtm3bRigUSgmNtLQ0+vTpw+rVq6mtrSU/P7/DbS9fvhxwXLAEQRAE4WjLrrTXGUBF4Ug6HGmaxsZNG9u5SRxIsGzZvAW9i/3Sd4s2sXoIQnfRo0cPgE65Rq1fv55AINDOktoS4xGLxTodd60C8a46Scuyqa2rITc3h9raGurr69usP/fccwmFQsyfP/+g2n3vvffQNI3x48e3+XzNmtXJ4lGCIAjCiUSL8Gjt9nSixxZ4PB6WL1tGWdnyDu9TWVlJRcU6XJ1ItysIwtGDZdmUl69o89mIESMoKipi9uzZ7cbk+6OsrIylS5cyceLEdskr5s37lB55OWRmZrJhw/p2xQg7JD4UhRVddeKKAnW1teTl9aCxMcjOpLmnha9//esA/O53vyMcDneozTfeeIP58+dz7rnn0q9fv9TnsViMWW/OwuXS5RcnCIJwAouQ1sveBMmJIkpUVSUUCvGHP/y+w/s8++wz1NXVHrGMPIIgHB5cLp23336bhLE7+5TX6+WSSy6htraWJ598ssNtPfzwwwBMnTq1zecbN25g0aJFjBs3jp1VO9m4cWO7QuIdIKjatrKlKzu+6upqevfpgw18Mf+LNusnT57MTTfdxOeff85tt912wPYWLlzIjTfeiMfj4YEHHmizbs6c2SxdthSPxyO/OEEQBGGvgqSF3cUIj+8UsH6/nxf++iIzHvyvA2770osv8NCMGXi9PvnRCMIxjsfjYdWqlSz8ckGbz++66y4GDBjAr371K2bNmnXAdh566CFeeOEFzjrrLK699to260pLSwmGIpx9zrksX76MRKJTiSrqVLC7THy4XC5Wr17NBRdcQF5uNn989FFqatoGnv/pT39i8uTJPP/880ycOJHPPvusXTtNTU088MADnHfeeTQ3N/P000+3c7l65eWXsU1LUvgJgiAIHRIilmUd91W4FUUhPd3P/fffz5VXfCsVM9mazZs38f2bb+KWW76Py6VLNipBOE6e/VA4yt/f+lubz/v27csrr7xCeno6l19+Obfccgs7duxot//KlSuZOnUq99xzD8XFxbz00kv4fG0nJl577VXAyUI7Z84c3O5OeR/VKJkZ6d8Fnuuqk29uDvKHPzxKOBzinl/+ivvu/S333nd/m2127tzJT3/6U1599VVUVWXMmDGMHz+eXr16sXz5cubNm0dVVRWFhYU88sgjTJ/eNmf5unVrOX3CeGKxmJiKBUEQhBNqgNHy10qm+NyX6AoGQ2RnZzF+woRUqs3yFStYtOgrqqp2kp7u77DwaNluf98pCEL3YhgGWVlZ/POf73PyHul1P/74Y2699VZWrVpFVlYWEydOZNy4cTQ3N7No0SK++uorotEokydP5sknn2TYsLa1+l746/Nc993rufDCKfzsZ3fxH1On4mQXPzgjgAJPK5kZ6RcC73fViScSCfLz83nt9Zlcc/U0GhoaWbBwUZvy7C18+OGH3H///ZSWlrapXl5YWMg111zDPffcQ05OTrv9fvHzu/nv//kdGYE0sXwIgiAIxzB2skKytt/3qmEYZGRkUNCzJ2vXrMHlchGLxQ7ob22aJrFoDMN0RIOmKXg8ngMGiZqmmTomVVXJzMzCNE2amhrllgnCUTw5EQwGOeWUcXwwe06bFLkA0WiUJ554gscff5yNGzemLMFut5thw4Zx9913M3369HZj602bNnHGxNNpampizpy5/PrXv+LTTz/B7/d35jDvUzICaUWKopQBaV118o1NQe66606GDDmJm266mUlnTOTlV15tEzDemoaGBsrLy9m2bRsjR45k0KBB7QoUtnD/ffdy3/3/j759ehGLxYhGoyJABEEQhGN6wLBfebJH7EpLKt1evXqxZcuWLvUAUBSFaDRKdnYOppkgGo21SWss71tBOPppbApyzdXTeenlV/Y5ubBlyxaWLl1KIBBg9OjR5OXl7fX5NgyDKy7/Fm+9/Q5/fuopYvEYt9/+IzIz0jt7eN/WPF5PgwIXA/266qTdLp3S0lJu/9GPyAgEmPnmLP75j3cZP348vXv3abe91+ulX79+jBgxgh49euyzI73rZ3fw4Iz/Zvxpp3LZZd9kfjKgXTpDQRAE4UQiEY/z81/cQyQSYf36zqW73JvwCAaDDB48mN/89l4+/ugjotFoKkhf3rWCcGzgcbtYvLiUeCLO5LPOShX/bEFVVbKzsxk2bBgDBw4kLW3vnkRbtmzh6unTeO8f/+TKKy/nyquu4obrr0fTlM7GijWD8suW2oQLu/KkVVUlGo1y2623cvP3b+GRRx5m7br1XHjhhbz04gu7q792VME1NnLrrT/g4Uf+wMTTx3PZN7/Jyy+/jGma0hkKgiAIJxSK42jNU089xZQpU/B4PMTj8UMOpm9qaqaoaCDPPPscb7/1Frt2VUtcpSAco31ERkY6Dz44g/HjT+Nvf5t10GPv9//1L8488wze/2A23/n2Nfznf/4Xd95xB01NjYfSLywAe5OSmREA+AbY73T1iYdCIXJycnj11dcJhkJce+13aGhoZGzJaH5w621cfvkVZGVl7bON9evX88wzf+HFF19k69btnHfu2Uw4/XT+78knCYfD+3TNEgRBEITjenABJAyDQCBAPB6nZ8+ebNiwEcsy22WoORCJRIJwJMbFX7uIp59+ht/89tc888xzh+JWIQhCN2JZFpmZmZx++kQ++vhjampqOevMM/jNb+/l/POn7HO/6upqVqwo4803Z/KXvzyNrmk89thjnDJuHN+97jrKy8sJBNI7PdGhKMo9wEMt4iMf7HIgr6sFSCwWw7bh/556inHjxvGnPz7K66+/TmNTkIFF/bn00ssYNGQIhQUFNDY1sbWykvXr17Np00aWLl1GY1MzQ08awrRp02hubuYvf/kzpml2iYlZEARBEI5lEokEfr+fD2bPobamll/+8hcsLl2CS9fweDz7dI2wbZt4PE40lqBvn17cdffP+e53r+fOO37C008/S4YID0E45vuGs846i+nTr+bTTz/h5ZdfIRaPc+EFUxg79hRycnLIys4iNzePyspKZn/wAV9+OZ+aWqcS+tiS0Tzx5P9RuWULt9zyfZqam0nz+TgE+6oJjAOWtogPwH4P+PrhuACmaRKLxbnooov40Y9+TJ8+fZj55kyeefovbN6ytd32Xo+bvNxchg0fxuWXX0HPnj2ZNWsWM2e+gaZpYgYWBEEQhFaDjCFDhvDY/z7OpEln8s47b/Pw7/6HpUuXEg6HMffIjqsqTjXkYcOGMf3qa7j55pvZWrmVm276Hl8uWCQWD0E4TgiFQhQWFvLbe++joKCA5597jk8/+Zj6hkZMq62MyAikM3ZsCWeeNZnTTjuNPn368Oorr/DIIw/j8Xg6U8l8T74CZTxgtRIfXe96tecsSzgcAWwmnTmJ22//MaNGnUx9fR2VlVvZtrWSjMxMCgoKyMjIwKW72LR5E6+9+ipz5swmEomSnp4mvyRBEARBaIWiKEQjUUzT5Iorr+DOn93NmDGj2bZtGytWrGDDhg0pf2+3y0V+QQH9+vVjUPEg1lWs44+PPsqsWW9iWRZ+v4/jvA6jIJxQGIZBLBZj6NBhnH322QwePJhARgbRaJRIJEJTYyN9+vZlxPAR1Dc0sGJFGR9+OJclpaXU19fj9/u7JL7atrkReAZAaTXDoQDzgDMO94WIRCKYpsmgQYMYPGQI/fr2Iy0tjaqqKnbs2MGOHdupq6ultrYe27bw+XwSWC4IgiAI+32524RCYTRNZcLpEzj//AsYPnw4AwcWo2saKAq1tTWsW7uWNWvW8OGHc1m5chWmaeL3+6TSuSAcxyQSCeLxOD6fj8zMTPx+P+np6WRlZ5PmT2PDhvVUVFQQixu4XRput7srPY2+smESEANQsjIDrVdOtW37b0fyQiQSCSzLwrZBVZWUW5WmadIRCoIgCEInREg0GiWRcDJC6vrud6llWZimjaKA2+3C7XbL5J4gnGD9Q8timia2bWNZFrqud4Vr1d6/E64GXm35v5KVmbHnJo/btn2r3B5BEARBOD4GG6mXvggNQRCOLJ/bNmc6GiTZD+0lo0VAcdyvRsv1EgRBEARBEAShE5iKonwNmNP6QxXbZo+l2bbtHwJRuWaCIAiCIAiCIBwsiqLcvafwANC8Xg+Kouy5bAGqgEvl0gmCIAiCIAiC0GHhgfInRVXv3YvGQPN4PDiJrtotSxTHP+scuYSCIAiCIAiCIBxQeCjKm4qi3Ah7r0mo+X0+VEXZ66Io6idg9wdK5FIKgiAIgiAIgrAfvgCm2QoRO6k+9lw0v8+LorDPxbJ5F+gNjJXrKQiCIAiCIAjCXpiJolxhQ9P+NtJ8Pu9+W7GdHH3voSgGcDaOT5YgCIIgCIIgCALA74GbUZT4gTbsaBU/G/hPUC4Bdsn1FQRBEARBEIQTHhP4KXAn+4jx2JOOWD6cfygKikIFKDOBPGAooMk1FwRBEARBEIQTjk+AbwMzU590oJCp2okv2qQoyncUOAV4A7Dk2guCIAiCIAjCCcGXOOU4zsYJMD8o1EP44hWgXIWTivfvSFFCQRAEQRAEQTgeiQHzgauBM4F3O9uQkpOdud8NTMtyKp8rCgqpf4JtYzuf4MSg24OBK4GvAycDaXKfBEEQBEEQBOGYpBnHsvEB8C6Ksn53PMa+lIVy4E26UHy07KICvVAoxqYYGAT0A/oABUCu3EtBEARBEARB6HYUnNS4VYrCNlAqbdveDmxLCo8tdkpXKI4QOETx8f8HAOFdOylNyB6NAAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _keyboard = __webpack_require__(11);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var proportion = {},
	    mainStyle = {},
	    rightViewStyle = {},
	    leftViewStyle = {};
	
	//  页面各个区域所占大小比例
	// <template>
	// 	<!-- App 页面基本框架 -->
	// 	<div class="main" :style="mainStyle">
	// 		<!-- App 左方界面区 start -->
	// 		<div class="left-view" :style="leftViewStyle">
	// 			<router-view></router-view>
	// 		</div>
	// 		<!-- App 左方界面区 end -->
	// 		<!-- App 右方按键区 start -->
	// 		<div class="right-view" :style="rightViewStyle">
	// 			<keyboard :warp-style="rightViewStyle"></keyboard>
	// 		</div>
	// 		<!-- App 右方按键区 end -->
	// 		<input>
	// 	</div>
	// </template>
	//
	// <script>
	proportion = {
		//  页面基本的长宽比 mainWidth / mainHeight
		baseSize: 1.6,
		//  左方界面区所占大小比例
		leftView: {
			width: 0.5,
			height: 0.61
		},
		//  右方按键区所占大小比例
		rightView: {
			width: 0.26,
			height: 0.75
		}
	};
	
	// 计算基本页面大小
	mainStyle = function (sizeProportion) {
		var style = {},
		    clientWidth = document.documentElement.clientWidth,
		    clientHeight = document.documentElement.clientHeight;
		if (clientWidth / sizeProportion <= clientHeight) {
			style = {
				width: clientWidth + "px",
				height: clientWidth / sizeProportion + "px"
			};
		} else {
			style = {
				width: clientHeight * sizeProportion + "px",
				height: clientHeight + "px"
			};
		}
	
		return style;
	}(proportion.baseSize);
	
	//  计算左方界面去大小
	leftViewStyle = function (mainStyle, _ref) {
		var widthProportion = _ref.width;
		var heightProportion = _ref.height;
	
		return {
			width: parseInt(mainStyle.width) * widthProportion + "px",
			height: parseInt(mainStyle.height) * heightProportion + "px"
		};
	}(mainStyle, proportion.leftView);
	
	// 计算右方键盘区大小
	rightViewStyle = function (mainStyle, _ref2) {
		var widthProportion = _ref2.width;
		var heightProportion = _ref2.height;
	
		return {
			width: parseInt(mainStyle.width) * widthProportion + "px",
			height: parseInt(mainStyle.height) * heightProportion + "px"
		};
	}(mainStyle, proportion.rightView);
	
	exports.default = {
		data: function data() {
			return {
				mainStyle: mainStyle,
				leftViewStyle: leftViewStyle,
				rightViewStyle: rightViewStyle,
				isPower: false
			};
		},
	
		components: {
			keyboard: _keyboard2.default
		},
		events: {
			keyboardClicked: function keyboardClicked(_ref3) {
				var keyType = _ref3.keyType;
				var keyValue = _ref3.keyValue;
				var isReplace = _ref3.isReplace;
				var sourceTarget = _ref3.sourceTarget;
	
				var activeElement = document.activeElement,
				    nodeName = activeElement.nodeName.toUpperCase(),
				    value = activeElement.value;
				if (keyType === "CHA" || keyType === "NUM") {
					if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
						if (isReplace) {
							value = value.slice(0, value.length - 1) + keyValue;
						} else {
							value += keyValue;
						}
	
						activeElement.value = value;
					}
				} else if (keyType === "FUN") {
					switch (keyValue) {
						case "Power":
							if (!this.isPower) {
								location.href += "home/";
								this.isPower = !this.isPower;
							}
							break;
	
						case "Start":
							break;
	
						case "React":
							break;
	
						case "Func":
							break;
	
						case "Ctrl":
							break;
	
						case "Alt":
							break;
	
						case "Del":
							if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
								activeElement.value = "";
							}
							break;
	
						case "Tab":
							break;
	
						case "B.S":
							if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
								activeElement.value = value.slice(0, value.length - 1);
							}
							break;
						case "ESC":
							break;
	
						case "ENT":
							break;
	
						case "Up":
							break;
	
						case "Down":
							break;
	
						case "Left":
							break;
	
						case "Right":
							break;
	
						default:
							break;
	
					}
				}
			}
		}
	};
	// </script>
	//
	// <style>
	// 	.main {
	// 		margin: 0 auto;
	// 		padding: 0;
	// 		background: rgba(0, 0, 0, 0) url(./static/images/background.png) no-repeat center;
	// 		background-size: 100%;
	// 		position: relative;
	// 	}
	//
	// 	.left-view {
	// 		position: absolute;
	// 		top: 20%;
	// 		left: 10%;
	// 		background: red;
	// 		border-radius: 1%;
	// 	}
	//
	// 	.right-view {
	// 		position: absolute;
	// 		top: 14%;
	// 		right: 9%;
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(12)
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/keyboard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/keyboard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./keyboard.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./keyboard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.key {\n\tmargin: 0;\n\tpadding: 0;\n\t/*opacity: 0;*/\n\tbackground: rgba(0, 0, 0, 0);\n\t/*border: 0;*/\n}\n", "", {"version":3,"sources":["/./src/components/keyboard.vue?7f579828"],"names":[],"mappings":";AAyQA;CACA,UAAA;CACA,WAAA;CACA,eAAA;CACA,6BAAA;CACA,cAAA;CACA","file":"keyboard.vue","sourcesContent":["<template>\n\t<div id='keyboard' @focusin=\"keepFocusConstant\" @click=\"dealWithClicked\">\n\t\t<div class='key-row' v-for='row of keys'>\n\t\t\t<button class=\"key\" type=\"button\" v-for='key of row' :key-type=\"key.slice(0, 3)\" :value=\"key.slice(4)\" :style=\"buttonStyle\" track-by='$index'>{{ key.slice(4) }}</button>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nvar numKeys,\n\tcharacterKeys;\n\n//  数字键盘\nnumKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'],\n\t['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'],\n\t['NUM_7', 'NUM_8', 'NUM_9', 'FUN_Tab'],\n\t['NUM_4', 'NUM_5', 'NUM_6', 'FUN_B.S'],\n\t['NUM_1', 'NUM_2', 'NUM_3', 'FUN_Shift'],\n\t['NUM_0', 'CHA_Dot', 'CHA_-', 'CHA_S.P'],\n\t['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'],\n\t['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];\n\n//  字母键盘\ncharacterKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'],\n\t['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'],\n\t['CHA_abc', 'CHA_def', 'CHA_ghi', 'FUN_Tab'],\n\t['CHA_jkl', 'CHA_mno', 'CHA_pqr', 'FUN_B.S'],\n\t['CHA_stu', 'CHA_vwx', 'CHA_yz_', 'FUN_Shift'],\n\t['CHA_#$%', 'CHA_!&@', 'CHA_+*/', 'CHA_S.P'],\n\t['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'],\n\t['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];\n\n\n/**\n * keyborad点击事件处理函数，通过对点击对象的信息的获取与处理，触发自定义事件，向父组件传递信息。\n * @param  {Event} event 事件对象\n * @return {Undefined | false} 返回值为false时、点击事件被组件内部处理，为undefined时、触发自定义事件，向父组件传递信息       \n */\nfunction dealWithClicked (event) {\n\tvar target = event.target,\n\t\t//  点击按钮的类型\n\t\tkeyType = target.getAttribute(\"key-type\"),\n\t\t//  点击按钮的值\n\t\tkeyValue = target.value,\n\t\t//  是否取代上一次输出的值\n\t\tisReplace = false,\n\t\tsourceTarget = \"keyboard-component\";\n\n\tif (keyType == null || keyValue == null) {\n\t\treturn false;\n\t}\n\n\t//  检查函数是否有lastClick对象，该对象包含上次点击事件发生时的一些信息\n\tif (dealWithClicked.lastClick == null) {\n\t\tdealWithClicked.lastClick = {\n\t\t\t//  上次事件发生的target对象\n\t\t\ttarget: target,\n\t\t\t//  点击同一按钮的次数\n\t\t\tcount: 0,\n\t\t\t//  上次事件发生的事件\n\t\t\ttime: Date.now()\n\t\t}\n\t} else {\n\t\t//  若点击事件的target对象不变则计算两次点击事件的发生的间隔，小于1000ms 则视为连续点击，点击次数加一\n\t\tif (target === dealWithClicked.lastClick.target) {\n\t\t\t//  点击事件的时间间隔\n\t\t\tlet timeInterval = Date.now() - dealWithClicked.lastClick.time;\n\n\t\t\tif (timeInterval <= 1000) {\n\t\t\t\tdealWithClicked.lastClick.count++;\n\t\t\t} else {\n\t\t\t\tdealWithClicked.lastClick.count = 0;\n\t\t\t}\n\n\t\t\t//  更新点击时间发生的时间\n\t\t\tdealWithClicked.lastClick.time = Date.now();\n\t\t} else {\n\t\t\t//  两次点击的target对象不同，则更新lastClick对象\n\n\t\t\tdealWithClicked.lastClick.target = target;\n\t\t\tdealWithClicked.lastClick.count = 0;\n\t\t\tdealWithClicked.lastClick.time = Date.now();\n\t\t}\n\t}\n\n\tif (keyType === \"FUN\") {\t\n\t\t//  类型为FUN\n\t\t\n\t\tswitch (keyValue) {\n\t\t\tcase \"Alpha\": \n\t\t\t\t//  大小写切换，并且立即返回false，不触发自定义事件\n\t\t\t\tthis.isUpper = !this.isUpper;\n\t\t\t\treturn false;\n\t\t\t\tbreak;\n\t\t\tcase \"Shift\":\n\t\t\t\t//  切换字母数字键盘，并且立即返回false，不触发自定义事件\n\t\t\t\tthis.isNumberKey = !this.isNumberKey;\n\t\t\t\treturn false;\n\t\t\t\tbreak;\n\t\t\tcase \"NULL\":\n\t\t\t\t//  空按钮 立即返回false,不处罚自定义事件\n\t\t\t\treturn false;\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\t//  其他FUN类型按钮,向父组件传递按键值\n\t\t\t\tbreak;\n\t\t}\n\t} else if (keyType === \"CHA\") {\n\t\t//  类型为CHA\n\n\t\tlet charCode = 0;\n\n\t\tswitch (keyValue) {\n\t\t\tcase \"S.P\":\n\t\t\t\t//  键值为S.P 即为空格\n\t\t\t\tkeyValue = \" \";\n\t\t\t\tbreak;\n\t\t\tdefault: \n\t\t\t\t//  其他按键经过字符按键处理函数处理\n\t\t\t\t({keyValue, isReplace} = dealWithCharacter(keyValue, dealWithClicked.lastClick.count));\n\t\t}\n\n\t\t//  若按键值为 a-zA-Z 则判断大小写并转换\n\t\tcharCode = keyValue.charCodeAt(0);\n\t\tif (charCode >= 65 && charCode < 91 || charCode >= 97 && charCode < 123) {\n\t\t\tkeyValue = this.isUpper ? keyValue.toUpperCase() : keyValue.toLowerCase();\n\t\t}\n\t} else if (keyType === \"NUM\") {\n\t\t//  类型为NUM\n\t\t//  不做任何处理、直接返回按键类型和按键值\n\t}\n\n\t/** click事件完成，保存事件信息 */\n\tthis.clickInfo = ({keyType, keyValue, isReplace, sourceTarget});\n\tthis.isClickEventComplate = true;\n\n\tthis.dispatchkeyboardClickedEvent();\n}\n\n/**\n * 处理按键类型为CHA的按键信息，通过对点击次数的判断，决定字母键盘所要返回具体值且判断是否取代上次的信息\n * @param  {String} keyValue     按键的值\n * @param  {Number} clickedCount 点击次数\n * @return {Object}              此次按键所产生的按键值与是否要取代上次信息\n */\nfunction dealWithCharacter(keyValue, clickedCount) {\n\tvar isReplace = false,\n\t\tlen = keyValue.length;\n\n\t//  按键值长度大于1、判断是否取代上次的信息\n\tif (len > 1) {\n\t\tif (clickedCount > 0) {\n\t\t\tisReplace = true;\n\t\t}\n\t\tclickedCount = clickedCount % len;\n\t\tkeyValue = keyValue[clickedCount];\n\t}\n\n\treturn ({keyValue, isReplace});\n}\n\n/**\n * 当点击键盘时、若页面有其他元素获得交点，则键盘不获得焦点,函数执行完毕、触发自定义事件\n * @param  {[type]} event [description]\n * @return {[type]}       [description]\n */\nfunction keepFocusConstant(event) {\n\tvar relatedTarget = event.relatedTarget,\n\t\ttarget = event.target,\n\t\tcurrentTarget = event.currentTarget;\n\t\n\t//  有其他元素获得焦点\n\tif (relatedTarget) {\n\t\t//  上一次获得焦点的元素不为键盘本身或键盘子元素\n\t\tif (target !== currentTarget && !isContainsElement(currentTarget, relatedTarget)) {\n\t\t\t//  其他元素继续保持焦点\n\t\t\tevent.relatedTarget.focus();\n\t\t}\n\t}\n\n\t/** 焦点处理事件完成 */\n\tthis.isFocusEventComplate = true;\n\n\tthis.dispatchkeyboardClickedEvent();\n}\n\n/**\n * 判断child元素是否为parent元素的子元素\n * @param  {HTMLElement}  parent 要判断是否包含的父元素\n * @param  {HTMLElement}  child  要判断是否被包含的子元素\n * @return {Boolean}        若包含返回true,不包含返回false\n */\nfunction isContainsElement(parent, child) {\n\t//  若父元素为document或HTML元素，则一定包含子元素\n\tif (parent === document.documentElement || parent.nodeName.toUpperCase() === \"HTML\") {\n\t\treturn true;\n\t}\n\n\t//  子元素循环向上判断父元素是否等于parent元素\n\twhile (child.parentNode) {\n\t\tif (child.parentNode === parent) {\n\t\t\treturn true;\n\t\t}\n\t\tchild = child.parentNode;\n\t}\n\n\treturn false;\n}\n\n/**\n * 判断所有事件是否完成，触发自定义事件，传递信息\n */\nfunction dispatchkeyboardClickedEvent() {\n\tif (this.isClickEventComplate && this.isFocusEventComplate) {\n\t\tthis.$dispatch(\"keyboardClicked\", this.clickInfo);\n\t\tthis.isClickEventComplate = false;\n\t\tthis.isFocusEventComplate = false;\n\t}\n\t\t\n}\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\t//  字母键盘 || 数字键盘\n\t\t\tisNumberKey: true,\n\t\t\t//  是否大小写\n\t\t\tisUpper: false,\n\t\t\t//  点击事件是否处理完成\n\t\t\tisClickEventComplate: false,\n\t\t\t//  点击按钮的信息\n\t\t\tclickInfo: {},\n\t\t\t//  焦点处理事件是否完成\n\t\t\tisFocusEventComplate: false,\n\t\t\t//  键盘布局的行数\n\t\t\trow: 8,\n\t\t\t//  键盘布局的列数\n\t\t\tcol: 4\n\t\t}\n\t},\n\tprops: ['warpStyle'],\n\tcomputed: {\n\t\tbuttonStyle: function () {\n\t\t\tvar warpStyle = this.warpStyle,\n\t\t\t\twidth = parseInt(warpStyle.width) / this.col,\n\t\t\t\theight = parseInt(warpStyle.height) /this.row;\n\n\t\t\treturn {\n\t\t\t\twidth: width + \"px\",\n\t\t\t\theight: height + \"px\"\n\t\t\t}\n\t\t},\n\t\tkeys: function () {\n\t\t\treturn this.isNumberKey ? numKeys : characterKeys;\n\t\t}\n\t},\n\tmethods: {\n\t\tdealWithClicked: dealWithClicked,\n\t\tkeepFocusConstant: keepFocusConstant,\n\t\tdispatchkeyboardClickedEvent: dispatchkeyboardClickedEvent\n\t}\n};\n</script>\n\n<style>\n\t.key {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\t/*opacity: 0;*/\n\t\tbackground: rgba(0, 0, 0, 0);\n\t\t/*border: 0;*/\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div id='keyboard' @focusin="keepFocusConstant" @click="dealWithClicked">
	// 		<div class='key-row' v-for='row of keys'>
	// 			<button class="key" type="button" v-for='key of row' :key-type="key.slice(0, 3)" :value="key.slice(4)" :style="buttonStyle" track-by='$index'>{{ key.slice(4) }}</button>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	var numKeys, characterKeys;
	
	//  数字键盘
	numKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'], ['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'], ['NUM_7', 'NUM_8', 'NUM_9', 'FUN_Tab'], ['NUM_4', 'NUM_5', 'NUM_6', 'FUN_B.S'], ['NUM_1', 'NUM_2', 'NUM_3', 'FUN_Shift'], ['NUM_0', 'CHA_Dot', 'CHA_-', 'CHA_S.P'], ['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'], ['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];
	
	//  字母键盘
	characterKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'], ['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'], ['CHA_abc', 'CHA_def', 'CHA_ghi', 'FUN_Tab'], ['CHA_jkl', 'CHA_mno', 'CHA_pqr', 'FUN_B.S'], ['CHA_stu', 'CHA_vwx', 'CHA_yz_', 'FUN_Shift'], ['CHA_#$%', 'CHA_!&@', 'CHA_+*/', 'CHA_S.P'], ['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'], ['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];
	
	/**
	 * keyborad点击事件处理函数，通过对点击对象的信息的获取与处理，触发自定义事件，向父组件传递信息。
	 * @param  {Event} event 事件对象
	 * @return {Undefined | false} 返回值为false时、点击事件被组件内部处理，为undefined时、触发自定义事件，向父组件传递信息       
	 */
	function dealWithClicked(event) {
		var target = event.target,
	
		//  点击按钮的类型
		keyType = target.getAttribute("key-type"),
	
		//  点击按钮的值
		keyValue = target.value,
	
		//  是否取代上一次输出的值
		isReplace = false,
		    sourceTarget = "keyboard-component";
	
		if (keyType == null || keyValue == null) {
			return false;
		}
	
		//  检查函数是否有lastClick对象，该对象包含上次点击事件发生时的一些信息
		if (dealWithClicked.lastClick == null) {
			dealWithClicked.lastClick = {
				//  上次事件发生的target对象
				target: target,
				//  点击同一按钮的次数
				count: 0,
				//  上次事件发生的事件
				time: Date.now()
			};
		} else {
			//  若点击事件的target对象不变则计算两次点击事件的发生的间隔，小于1000ms 则视为连续点击，点击次数加一
			if (target === dealWithClicked.lastClick.target) {
				//  点击事件的时间间隔
				var timeInterval = Date.now() - dealWithClicked.lastClick.time;
	
				if (timeInterval <= 1000) {
					dealWithClicked.lastClick.count++;
				} else {
					dealWithClicked.lastClick.count = 0;
				}
	
				//  更新点击时间发生的时间
				dealWithClicked.lastClick.time = Date.now();
			} else {
				//  两次点击的target对象不同，则更新lastClick对象
	
				dealWithClicked.lastClick.target = target;
				dealWithClicked.lastClick.count = 0;
				dealWithClicked.lastClick.time = Date.now();
			}
		}
	
		if (keyType === "FUN") {
			//  类型为FUN
	
			switch (keyValue) {
				case "Alpha":
					//  大小写切换，并且立即返回false，不触发自定义事件
					this.isUpper = !this.isUpper;
					return false;
					break;
				case "Shift":
					//  切换字母数字键盘，并且立即返回false，不触发自定义事件
					this.isNumberKey = !this.isNumberKey;
					return false;
					break;
				case "NULL":
					//  空按钮 立即返回false,不处罚自定义事件
					return false;
					break;
				default:
					//  其他FUN类型按钮,向父组件传递按键值
					break;
			}
		} else if (keyType === "CHA") {
			//  类型为CHA
	
			var charCode = 0;
	
			switch (keyValue) {
				case "S.P":
					//  键值为S.P 即为空格
					keyValue = " ";
					break;
				default:
					var _dealWithCharacter = dealWithCharacter(keyValue, dealWithClicked.lastClick.count);
					//  其他按键经过字符按键处理函数处理
	
	
					keyValue = _dealWithCharacter.keyValue;
					isReplace = _dealWithCharacter.isReplace;
	
			}
	
			//  若按键值为 a-zA-Z 则判断大小写并转换
			charCode = keyValue.charCodeAt(0);
			if (charCode >= 65 && charCode < 91 || charCode >= 97 && charCode < 123) {
				keyValue = this.isUpper ? keyValue.toUpperCase() : keyValue.toLowerCase();
			}
		} else if (keyType === "NUM") {}
		//  类型为NUM
		//  不做任何处理、直接返回按键类型和按键值
	
	
		/** click事件完成，保存事件信息 */
		this.clickInfo = { keyType: keyType, keyValue: keyValue, isReplace: isReplace, sourceTarget: sourceTarget };
		this.isClickEventComplate = true;
	
		this.dispatchkeyboardClickedEvent();
	}
	
	/**
	 * 处理按键类型为CHA的按键信息，通过对点击次数的判断，决定字母键盘所要返回具体值且判断是否取代上次的信息
	 * @param  {String} keyValue     按键的值
	 * @param  {Number} clickedCount 点击次数
	 * @return {Object}              此次按键所产生的按键值与是否要取代上次信息
	 */
	function dealWithCharacter(keyValue, clickedCount) {
		var isReplace = false,
		    len = keyValue.length;
	
		//  按键值长度大于1、判断是否取代上次的信息
		if (len > 1) {
			if (clickedCount > 0) {
				isReplace = true;
			}
			clickedCount = clickedCount % len;
			keyValue = keyValue[clickedCount];
		}
	
		return { keyValue: keyValue, isReplace: isReplace };
	}
	
	/**
	 * 当点击键盘时、若页面有其他元素获得交点，则键盘不获得焦点,函数执行完毕、触发自定义事件
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	function keepFocusConstant(event) {
		var relatedTarget = event.relatedTarget,
		    target = event.target,
		    currentTarget = event.currentTarget;
	
		//  有其他元素获得焦点
		if (relatedTarget) {
			//  上一次获得焦点的元素不为键盘本身或键盘子元素
			if (target !== currentTarget && !isContainsElement(currentTarget, relatedTarget)) {
				//  其他元素继续保持焦点
				event.relatedTarget.focus();
			}
		}
	
		/** 焦点处理事件完成 */
		this.isFocusEventComplate = true;
	
		this.dispatchkeyboardClickedEvent();
	}
	
	/**
	 * 判断child元素是否为parent元素的子元素
	 * @param  {HTMLElement}  parent 要判断是否包含的父元素
	 * @param  {HTMLElement}  child  要判断是否被包含的子元素
	 * @return {Boolean}        若包含返回true,不包含返回false
	 */
	function isContainsElement(parent, child) {
		//  若父元素为document或HTML元素，则一定包含子元素
		if (parent === document.documentElement || parent.nodeName.toUpperCase() === "HTML") {
			return true;
		}
	
		//  子元素循环向上判断父元素是否等于parent元素
		while (child.parentNode) {
			if (child.parentNode === parent) {
				return true;
			}
			child = child.parentNode;
		}
	
		return false;
	}
	
	/**
	 * 判断所有事件是否完成，触发自定义事件，传递信息
	 */
	function dispatchkeyboardClickedEvent() {
		if (this.isClickEventComplate && this.isFocusEventComplate) {
			this.$dispatch("keyboardClicked", this.clickInfo);
			this.isClickEventComplate = false;
			this.isFocusEventComplate = false;
		}
	}
	
	exports.default = {
		data: function data() {
			return {
				//  字母键盘 || 数字键盘
				isNumberKey: true,
				//  是否大小写
				isUpper: false,
				//  点击事件是否处理完成
				isClickEventComplate: false,
				//  点击按钮的信息
				clickInfo: {},
				//  焦点处理事件是否完成
				isFocusEventComplate: false,
				//  键盘布局的行数
				row: 8,
				//  键盘布局的列数
				col: 4
			};
		},
	
		props: ['warpStyle'],
		computed: {
			buttonStyle: function buttonStyle() {
				var warpStyle = this.warpStyle,
				    width = parseInt(warpStyle.width) / this.col,
				    height = parseInt(warpStyle.height) / this.row;
	
				return {
					width: width + "px",
					height: height + "px"
				};
			},
			keys: function keys() {
				return this.isNumberKey ? numKeys : characterKeys;
			}
		},
		methods: {
			dealWithClicked: dealWithClicked,
			keepFocusConstant: keepFocusConstant,
			dispatchkeyboardClickedEvent: dispatchkeyboardClickedEvent
		}
	};
	// </script>
	//
	// <style>
	// 	.key {
	// 		margin: 0;
	// 		padding: 0;
	// 		/*opacity: 0;*/
	// 		background: rgba(0, 0, 0, 0);
	// 		/*border: 0;*/
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div id='keyboard' @focusin=\"keepFocusConstant\" @click=\"dealWithClicked\">\n\t<div class='key-row' v-for='row of keys'>\n\t\t<button class=\"key\" type=\"button\" v-for='key of row' :key-type=\"key.slice(0, 3)\" :value=\"key.slice(4)\" :style=\"buttonStyle\" track-by='$index'>{{ key.slice(4) }}</button>\n\t</div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<!-- App 页面基本框架 -->\n<div class=\"main\" :style=\"mainStyle\">\n\t<!-- App 左方界面区 start -->\n\t<div class=\"left-view\" :style=\"leftViewStyle\">\n\t\t<router-view></router-view>\n\t</div>\n\t<!-- App 左方界面区 end -->\n\t<!-- App 右方按键区 start -->\n\t<div class=\"right-view\" :style=\"rightViewStyle\">\n\t\t<keyboard :warp-style=\"rightViewStyle\"></keyboard>\n\t</div>\n\t<!-- App 右方按键区 end -->\n\t<input>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/routerMap.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/routerMap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _menu = __webpack_require__(19);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  路由组件require出错时的替代组件
	var NullComponentPath = "./null.vue"; // <script>
	
	var subMenuComponentPath = "./home/subMenu.vue";
	
	//  路由map对象
	var routerMap = {};
	
	/**
	 * 根据路由树数据生成路由Map对象
	 * @param  {Object} menuTree            包含所有路由对象信息的对象
	 * @param  {Object} routerMap           路由Map对象
	 * @param  {String} componentPathPrefix 组件地址前缀
	 * @return {Object}                     路由Map对象
	 */
	function generateRouterMap(menuTree, routerMap, componentPathPrefix) {
		var subMenu = [],
		    componentPath = "",
		    routerPath = "",
		    menuLevel = 0;
	
		if (generateRouterMap.menuLevel == null) {
			generateRouterMap.menuLevel = 0;
		} else {
			generateRouterMap.menuLevel++;
		}
	
		//  如果路由树是个对象，则在路由Map对象中添加
		if (Object.prototype.toString(menuTree) === "[object Object]") {
			if (menuTree.name) {
				routerPath = "/" + menuTree.name;
				componentPath = "" + componentPathPrefix + menuTree.name + ".vue";
				routerMap[routerPath] = {
					component: function () {
						if (generateRouterMap.menuLevel === 1) {
							return __webpack_require__(20)(subMenuComponentPath);
						}
	
						try {
							return __webpack_require__(20)(componentPath);
						} catch (e) {
							console.log(e);
							return __webpack_require__(20)(NullComponentPath);
						}
					}()
				};
			}
		}
	
		//  判断路由对象是否有子树
		subMenu = menuTree.subMenu;
		if (subMenu != null && Object.prototype.toString(menuTree.subMenu) === "[object Object]") {
			var _subMenu = menuTree.subMenu;
	
			//  有子树、递归添加子树中的路由数据
			routerMap[routerPath].subRoutes = {};
			for (var i = 0, len = _subMenu.length; i < len; i++) {
				generateRouterMap(_subMenu[i], routerMap[routerPath].subRoutes, "" + componentPathPrefix + menuTree.name + "/");
			}
		}
	
		generateRouterMap.menuLevel--;
		return routerMap;
	}
	
	generateRouterMap(_menu2.default, routerMap, "./");
	
	exports.default = routerMap;
	// </script>
	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"name": "home",
		"tag": "主页",
		"subMenu": [
			{
				"name": "projects",
				"tag": "项目",
				"subMenu": [
					{
						"name": "newProject",
						"tag": "新建项目"
					},
					{
						"name": "openProject",
						"tag": "打开项目"
					},
					{
						"name": "deleteProject",
						"tag": "删除项目"
					},
					{
						"name": "projectSaveAs",
						"tag": "另存为"
					},
					{
						"name": "projectTrash",
						"tag": "回收站"
					},
					{
						"name": "projectInfo",
						"tag": "项目信息"
					},
					{
						"name": "importProject",
						"tag": "导入"
					},
					{
						"name": "exportProject",
						"tag": "导出"
					},
					{
						"name": "aboutProject",
						"tag": "关于"
					}
				]
			},
			{
				"name": "conventional",
				"tag": "常规",
				"subMenu": [
					{
						"name": "angleMeasuring",
						"tag": "角度测量"
					},
					{
						"name": "distanceMeasuring",
						"tag": "距离测量"
					},
					{
						"name": "coordinateMeasuring",
						"tag": "坐标测量"
					}
				]
			},
			{
				"name": "data",
				"tag": "数据",
				"subMenu": [
					{
						"name": "originalData",
						"tag": "原始数据"
					},
					{
						"name": "coordinateData",
						"tag": "坐标数据"
					},
					{
						"name": "codeData",
						"tag": "编码数据"
					},
					{
						"name": "graphData",
						"tag": "数据图形"
					},
					{
						"name": "viewGraph",
						"tag": "查看图片"
					}
				]
			},
			{
				"name": "buildStation",
				"tag": "建站",
				"subMenu": [
					{
						"name": "buildStationByKnownPoint",
						"tag": "已知点建站"
					},
					{
						"name": "stationElevation",
						"tag": "测站高程"
					},
					{
						"name": "afterInspection",
						"tag": "后视检查"
					},
					{
						"name": "resection",
						"tag": "后方交会测量"
					},
					{
						"name": "gyro",
						"tag": "陀螺仪寻北"
					},
					{
						"name": "buildStationByLine",
						"tag": "点到直线建站"
					},
					{
						"name": "DirectionalByMutilPoint",
						"tag": "多点定向"
					}
				]
			},
			{
				"name": "calculate",
				"tag": "计算",
				"subMenu": [
					{
						"name": "calculator",
						"tag": "计算器"
					},
					{
						"name": "coordinateTraverse",
						"tag": "坐标正算"
					},
					{
						"name": "coordinateInverse",
						"tag": "坐标反算"
					},
					{
						"name": "areaPerimeter",
						"tag": "面积周长"
					},
					{
						"name": "pointLineInverse",
						"tag": "点线反算"
					},
					{
						"name": "twoPointOfIntersection",
						"tag": "两点计算交点"
					},
					{
						"name": "fourPointOfIntersection",
						"tag": "四点计算交点"
					},
					{
						"name": "volumeCalculation",
						"tag": "体积计算"
					},
					{
						"name": "unitConversion",
						"tag": "单位转换"
					},
					{
						"name": "meridianConvergence",
						"tag": "子午收敛角"
					},
					{
						"name": "measuring",
						"tag": "导线平差"
					}
				]
			},
			{
				"name": "collection",
				"tag": "采集",
				"subMenu": [
					{
						"name": "distanceOfPoint",
						"tag": "点距离"
					},
					{
						"name": "distanceDeviation",
						"tag": "距离偏差"
					},
					{
						"name": "planeAngle",
						"tag": "平面角点"
					},
					{
						"name": "cylindricalCenter",
						"tag": "圆柱中心点"
					},
					{
						"name": "MLM",
						"tag": "对边测量"
					},
					{
						"name": "lineExtendMeasuring",
						"tag": "线和延长点测量"
					},
					{
						"name": "REM",
						"tag": "悬高测量"
					},
					{
						"name": "F1F2",
						"tag": "F1/F2"
					},
					{
						"name": "measuringImage",
						"tag": "影像"
					}
				]
			},
			{
				"name": "setUp",
				"tag": "设置",
				"subMenu": [
					{
						"name": "unitSetting",
						"tag": "单位设置"
					},
					{
						"name": "AngleSetting",
						"tag": "角度相关设置"
					},
					{
						"name": "distanceSetting",
						"tag": "距离相关设置"
					},
					{
						"name": "coordinateSetting",
						"tag": "坐标相关设置"
					},
					{
						"name": "RS232Setting",
						"tag": "RS232通信设置"
					},
					{
						"name": "bluetoothSetting",
						"tag": "蓝牙通信设置"
					},
					{
						"name": "powerSetting",
						"tag": "电源管理"
					},
					{
						"name": "otherSetting",
						"tag": "其他设置"
					},
					{
						"name": "updateFirmware",
						"tag": "固件升级"
					},
					{
						"name": "formatStorage",
						"tag": "格式化存储器"
					},
					{
						"name": "factoryReset",
						"tag": "恢复出厂设置"
					},
					{
						"name": "installSoftware",
						"tag": "应用软件安装"
					}
				]
			},
			{
				"name": "lofting",
				"tag": "放样",
				"subMenu": [
					{
						"name": "pointLofting",
						"tag": "点放样"
					},
					{
						"name": "angleDistanceLofting",
						"tag": "角度距离放样"
					},
					{
						"name": "directionLineLofting",
						"tag": "方向线放样"
					},
					{
						"name": "lineLofting",
						"tag": "直线参考线放样"
					}
				]
			},
			{
				"name": "calibration",
				"tag": "校准",
				"subMenu": [
					{
						"name": "compensatorCalibration",
						"tag": "补偿器校正"
					},
					{
						"name": "VenticalDatumCalibration",
						"tag": "垂直基准校正"
					},
					{
						"name": "correctionCalibration",
						"tag": "仪器加常数校正"
					},
					{
						"name": "touchCalibration",
						"tag": "触摸屏校验"
					},
					{
						"name": "gyroCalibration",
						"tag": "陀螺仪校正"
					},
					{
						"name": "measuringImageCalibration",
						"tag": "影像中心校正"
					}
				]
			},
			{
				"name": "road",
				"tag": "道路",
				"subMenu": [
					{
						"name": "selectRoad",
						"tag": "道路选择"
					},
					{
						"name": "editHorizontalLine",
						"tag": "编辑水平定线"
					},
					{
						"name": "editVerticalLine",
						"tag": "编辑垂直定线"
					},
					{
						"name": "roadLofting",
						"tag": "道路放样"
					},
					{
						"name": "calculateRoadCoordinate",
						"tag": "计算道路坐标"
					}
				]
			}
		]
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./bottomBar.vue": 21,
		"./home.vue": 29,
		"./home/projects/newProject.vue": 60,
		"./home/subMenu.vue": 65,
		"./keyboard.vue": 11,
		"./mainMenu.vue": 70,
		"./null.vue": 44,
		"./routerMap.vue": 17,
		"./topBar.vue": 33
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(22)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/bottomBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/bottomBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bottomBar.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bottomBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.bottom-bar {\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #DDDDDD;\n\tborder-radius: 3px;\n}\n\n.btn {\n\n}\n\n.bottom-bar-time {\n\tmargin: 0 1em;\n\tfloat: right;\n}\n", "", {"version":3,"sources":["/./src/components/bottomBar.vue?61e896a8"],"names":[],"mappings":";AA6BA;CACA,YAAA;CACA,aAAA;CACA,oBAAA;CACA,mBAAA;CACA;;AAEA;;CAEA;;AAEA;CACA,cAAA;CACA,aAAA;CACA","file":"bottomBar.vue","sourcesContent":["<template>\n\t<div class=\"bottom-bar clear-fix\">\n\t\t<button class=\"btn\" v-if=\"isConfirm\">确认</button>\n\t\t<button class=\"btn\" v-if=\"isCancel\">取消</button>\n\t\t<time class=\"bottom-bar-time\">{{ localTime }}</time>\n\t</div>\n</template>\n\n<script>\nimport commonsStyle from \"../static/styles/commons.css\";\n\nvar localTime;\n\nlocalTime = (() => {\n\tvar time = new Date();\n\treturn time.getHours() + \":\" + time.getMinutes();\n})();\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tlocalTime: localTime,\n\t\t}\n\t},\n\tprops: [\"isConfirm\", \"isCancel\"],\n}\n</script>\n\n<style>\n\t.bottom-bar {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: #DDDDDD;\n\t\tborder-radius: 3px;\n\t}\n\n\t.btn {\n\n\t}\n\n\t.bottom-bar-time {\n\t\tmargin: 0 1em;\n\t\tfloat: right;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _commons = __webpack_require__(25);
	
	var _commons2 = _interopRequireDefault(_commons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var localTime; // <template>
	// 	<div class="bottom-bar clear-fix">
	// 		<button class="btn" v-if="isConfirm">确认</button>
	// 		<button class="btn" v-if="isCancel">取消</button>
	// 		<time class="bottom-bar-time">{{ localTime }}</time>
	// 	</div>
	// </template>
	//
	// <script>
	
	
	localTime = function () {
		var time = new Date();
		return time.getHours() + ":" + time.getMinutes();
	}();
	
	exports.default = {
		data: function data() {
			return {
				localTime: localTime
			};
		},
	
		props: ["isConfirm", "isCancel"]
	};
	// </script>
	//
	// <style>
	// 	.bottom-bar {
	// 		width: 100%;
	// 		height: 100%;
	// 		background: #DDDDDD;
	// 		border-radius: 3px;
	// 	}
	//
	// 	.btn {
	//
	// 	}
	//
	// 	.bottom-bar-time {
	// 		margin: 0 1em;
	// 		float: right;
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./commons.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./commons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".clear-fix {\n\toverflow: auto;\n\t*zoom: 1;\n}", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bottom-bar clear-fix\">\n\t<button class=\"btn\" v-if=\"isConfirm\">确认</button>\n\t<button class=\"btn\" v-if=\"isCancel\">取消</button>\n\t<time class=\"bottom-bar-time\">{{ localTime }}</time>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(30)
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.home {\n\theight: 100%;\n}\n\n.header {\n\theight: 13%;\n\tbackground: yellow;\n}\n\n.content {\n\theight: 74%;\n\tbackground: blue;\n\tposition: relative;\n}\n\n\n.footer {\n\theight: 13%;\n\tbackground: green;\n}\n", "", {"version":3,"sources":["/./src/components/home.vue?d5d3a950"],"names":[],"mappings":";AA2CA;CACA,aAAA;CACA;;AAEA;CACA,YAAA;CACA,mBAAA;CACA;;AAEA;CACA,YAAA;CACA,iBAAA;CACA,mBAAA;CACA;;;AAGA;CACA,YAAA;CACA,kBAAA;CACA","file":"home.vue","sourcesContent":["<template>\n\t<!-- 应用主页模板 -->\n\t<div class=\"home\">\n\t\t<!-- 应用页眉 start -->\n\t\t<div class=\"header\">\n\t\t\t<top-bar :top-header=\"topHeader\"></top-bar>\n\t\t</div>\n\t\t<!-- 应用页眉 end -->\n\t\t<!-- 应用内容 start -->\n\t\t<div class=\"content\">\n\t\t\t<main-menu></main-menu>\n\t\t</div>\n\t\t<!-- 应用内容 end -->\n\t\t<!-- 应用页脚 start -->\n\t\t<div class=\"footer\">\n\t\t\t<bottom-bar :is-confirm=\"isConfirm\" :is-cancel=\"isCancel\"></bottom-bar>\n\t\t</div>\n\t\t<!-- 应用页脚 end -->\n\t</div>\n</template>\n\n<script>\nimport TopBar from \"./topBar.vue\";\nimport MainMenu from \"./mainMenu.vue\";\nimport BottomBar from \"./bottomBar.vue\";\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\ttopHeader: \"Hack\",\n\t\t\tisConfirm: true,\n\t\t\tisCancel: true\n\t\t};\n\t},\n\tcomponents: {\n\t\ttopBar: TopBar,\n\t\tmainMenu: MainMenu,\n\t\tbottomBar: BottomBar\n\t}\n}\n</script>\n\n<style>\n\t.home {\n\t\theight: 100%;\n\t}\n\n\t.header {\n\t\theight: 13%;\n\t\tbackground: yellow;\n\t}\n\n\t.content {\n\t\theight: 74%;\n\t\tbackground: blue;\n\t\tposition: relative;\n\t}\n\n\t\n\t.footer {\n\t\theight: 13%;\n\t\tbackground: green;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _topBar = __webpack_require__(33);
	
	var _topBar2 = _interopRequireDefault(_topBar);
	
	var _mainMenu = __webpack_require__(70);
	
	var _mainMenu2 = _interopRequireDefault(_mainMenu);
	
	var _bottomBar = __webpack_require__(21);
	
	var _bottomBar2 = _interopRequireDefault(_bottomBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				topHeader: "Hack",
				isConfirm: true,
				isCancel: true
			};
		},
	
		components: {
			topBar: _topBar2.default,
			mainMenu: _mainMenu2.default,
			bottomBar: _bottomBar2.default
		}
	};
	// </script>
	//
	// <style>
	// 	.home {
	// 		height: 100%;
	// 	}
	//
	// 	.header {
	// 		height: 13%;
	// 		background: yellow;
	// 	}
	//
	// 	.content {
	// 		height: 74%;
	// 		background: blue;
	// 		position: relative;
	// 	}
	//
	//
	// 	.footer {
	// 		height: 13%;
	// 		background: green;
	// 	}
	// </style>
	/* generated by vue-loader */
	// <template>
	// 	<!-- 应用主页模板 -->
	// 	<div class="home">
	// 		<!-- 应用页眉 start -->
	// 		<div class="header">
	// 			<top-bar :top-header="topHeader"></top-bar>
	// 		</div>
	// 		<!-- 应用页眉 end -->
	// 		<!-- 应用内容 start -->
	// 		<div class="content">
	// 			<main-menu></main-menu>
	// 		</div>
	// 		<!-- 应用内容 end -->
	// 		<!-- 应用页脚 start -->
	// 		<div class="footer">
	// 			<bottom-bar :is-confirm="isConfirm" :is-cancel="isCancel"></bottom-bar>
	// 		</div>
	// 		<!-- 应用页脚 end -->
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(34)
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/topBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/topBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topBar.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.top-bar {\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #DDDDDD;\n\tborder-radius: 3px;\n}\n\n.left-top-bar,\n.right-top-bar {\n\twidth: 49%;\n\theight: 100%;\n\tfloat: left;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tborder-left: 1px solid #707079;\n\tborder-radius: 3px;\n}\n", "", {"version":3,"sources":["/./src/components/topBar.vue?8b76833c"],"names":[],"mappings":";AAmBA;CACA,YAAA;CACA,aAAA;CACA,oBAAA;CACA,mBAAA;CACA;;AAEA;;CAEA,WAAA;CACA,aAAA;CACA,YAAA;CACA,mBAAA;CACA,sBAAA;CACA,+BAAA;CACA,mBAAA;CACA","file":"topBar.vue","sourcesContent":["<template>\n\t<div class=\"top-bar clear-fix\">\n\t\t<div class=\"left-top-bar\">{{ topHeader }}</div>\n\t\t<div class=\"right-top-bar\"></div>\n\t</div>\n</template>\n\n<script>\nimport commonsStyle from \"../static/styles/commons.css\";\n\nexport default {\n\tdata () {\n\t\treturn {}\n\t},\n\tprops: [\"topHeader\"],\n}\n</script>\n\n<style>\n\t.top-bar {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: #DDDDDD;\n\t\tborder-radius: 3px;\n\t}\n\n\t.left-top-bar,\n\t.right-top-bar {\n\t\twidth: 49%;\n\t\theight: 100%;\n\t\tfloat: left;\n\t\ttext-align: center;\n\t\tdisplay: inline-block;\n\t\tborder-left: 1px solid #707079;\n\t\tborder-radius: 3px;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _commons = __webpack_require__(25);
	
	var _commons2 = _interopRequireDefault(_commons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {};
		},
	
		props: ["topHeader"]
	};
	// </script>
	//
	// <style>
	// 	.top-bar {
	// 		width: 100%;
	// 		height: 100%;
	// 		background: #DDDDDD;
	// 		border-radius: 3px;
	// 	}
	//
	// 	.left-top-bar,
	// 	.right-top-bar {
	// 		width: 49%;
	// 		height: 100%;
	// 		float: left;
	// 		text-align: center;
	// 		display: inline-block;
	// 		border-left: 1px solid #707079;
	// 		border-radius: 3px;
	// 	}
	// </style>
	/* generated by vue-loader */
	// <template>
	// 	<div class="top-bar clear-fix">
	// 		<div class="left-top-bar">{{ topHeader }}</div>
	// 		<div class="right-top-bar"></div>
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"top-bar clear-fix\">\n\t<div class=\"left-top-bar\">{{ topHeader }}</div>\n\t<div class=\"right-top-bar\"></div>\n</div>\n";

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<!-- 应用主页模板 -->\n<div class=\"home\">\n\t<!-- 应用页眉 start -->\n\t<div class=\"header\">\n\t\t<top-bar :top-header=\"topHeader\"></top-bar>\n\t</div>\n\t<!-- 应用页眉 end -->\n\t<!-- 应用内容 start -->\n\t<div class=\"content\">\n\t\t<main-menu></main-menu>\n\t</div>\n\t<!-- 应用内容 end -->\n\t<!-- 应用页脚 start -->\n\t<div class=\"footer\">\n\t\t<bottom-bar :is-confirm=\"isConfirm\" :is-cancel=\"isCancel\"></bottom-bar>\n\t</div>\n\t<!-- 应用页脚 end -->\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/null.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/null.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	NULL
	// </template>
	//
	// <script>
	exports.default = {};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\nNULL\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/directives/example.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/directives/example.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(61)
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home/projects/newProject.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/home/projects/newProject.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newProject.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newProject.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.new-project {\n\tbackground-color: #041;\n}\n", "", {"version":3,"sources":["/./src/components/home/projects/newProject.vue?46c2176b"],"names":[],"mappings":";AAYA;CACA,uBAAA;CACA","file":"newProject.vue","sourcesContent":["<template>\n\t<div class=\"new-project\">\n\t\tlll\n\t</div>\n</template>\n\n<script>\n\nexport default {};\n</script>\n\n<style>\n\t.new-project {\n\t\tbackground-color: #041;\n\t}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div class="new-project">
	// 		lll
	// 	</div>
	// </template>
	//
	// <script>

	exports.default = {};
	// </script>
	//
	// <style>
	// 	.new-project {
	// 		background-color: #041;
	// 	}
	// </style>

	/* generated by vue-loader */

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"new-project\">\n\tlll\n</div>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(68)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home/subMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/home/subMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./subMenu.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./subMenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.sub-menu-item-warp {\n\theight: 20%;\n\twidth: 100%;\n}\n\n.sub-menu-item-warp:hover {\n\tbackground-color: #B1D6EB;\n}\n\n.sub-menu-item {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: inline-block;\n}\n\n.component-content {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n", "", {"version":3,"sources":["/./src/components/home/subMenu.vue?9d8e78e0"],"names":[],"mappings":";AAuCA;CACA,YAAA;CACA,YAAA;CACA;;AAEA;CACA,0BAAA;CACA;;AAEA;CACA,YAAA;CACA,aAAA;CACA,sBAAA;CACA;;AAEA;CACA,YAAA;CACA,aAAA;CACA,sBAAA;CACA,mBAAA;CACA,OAAA;CACA,SAAA;CACA","file":"subMenu.vue","sourcesContent":["<template>\n\t<div>\n\t\t<div class=\"sub-menu-item-warp\" v-for=\"menu of subMenu\">\n\t\t\t<a v-link=\"subPathPrefix + menu.name\" :name=\"menu.name\" :index=\"$index\" class=\"sub-menu-item\">{{ $index }} {{ menu.tag }}</a>\n\t\t</div>\n\t\t<router-view class=\"component-content\"></router-view>\n\t<div>\n</template>\n\n<script>\n\nexport default {\n\tdata () {\n\t\treturn {\t\t}\n\t},\n\tcomputed: {\n\t\tsubMenu: function () {\n\t\t\tif (this.activeMenu){\n\t\t\t\treturn this.activeMenu.subMenu;\n\t\t\t} else {\n\t\t\t\treturn [];\n\t\t\t}\n\t\t},\n\t\tsubPathPrefix: function () {\n\t\t\tif (this.mainPathPrefix) {\n\t\t\t\treturn `${ this.mainPathPrefix }${ this.activeMenu.name}/`;\n\t\t\t} else {\n\t\t\t\treturn \"\";\n\t\t\t}\n\t\t}\n\t},\n\tprops: [\"activeMenu\", \"mainPathPrefix\"],\n\tmethods: {\n\n\t}\n}\n</script>\n\n<style>\n\t.sub-menu-item-warp {\n\t\theight: 20%;\n\t\twidth: 100%;\n\t}\n\t\n\t.sub-menu-item-warp:hover {\n\t\tbackground-color: #B1D6EB;\n\t}\n\n\t.sub-menu-item {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t}\n\n\t.component-content {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div>
	// 		<div class="sub-menu-item-warp" v-for="menu of subMenu">
	// 			<a v-link="subPathPrefix + menu.name" :name="menu.name" :index="$index" class="sub-menu-item">{{ $index }} {{ menu.tag }}</a>
	// 		</div>
	// 		<router-view class="component-content"></router-view>
	// 	<div>
	// </template>
	//
	// <script>
	
	exports.default = {
		data: function data() {
			return {};
		},
	
		computed: {
			subMenu: function subMenu() {
				if (this.activeMenu) {
					return this.activeMenu.subMenu;
				} else {
					return [];
				}
			},
			subPathPrefix: function subPathPrefix() {
				if (this.mainPathPrefix) {
					return "" + this.mainPathPrefix + this.activeMenu.name + "/";
				} else {
					return "";
				}
			}
		},
		props: ["activeMenu", "mainPathPrefix"],
		methods: {}
	};
	// </script>
	//
	// <style>
	// 	.sub-menu-item-warp {
	// 		height: 20%;
	// 		width: 100%;
	// 	}
	//
	// 	.sub-menu-item-warp:hover {
	// 		background-color: #B1D6EB;
	// 	}
	//
	// 	.sub-menu-item {
	// 		width: 100%;
	// 		height: 100%;
	// 		display: inline-block;
	// 	}
	//
	// 	.component-content {
	// 		width: 100%;
	// 		height: 100%;
	// 		display: inline-block;
	// 		position: absolute;
	// 		top: 0;
	// 		right: 0;
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<div class=\"sub-menu-item-warp\" v-for=\"menu of subMenu\">\n\t\t\t<a v-link=\"subPathPrefix + menu.name\" :name=\"menu.name\" :index=\"$index\" class=\"sub-menu-item\">{{ $index }} {{ menu.tag }}</a>\n\t\t</div>\n\t\t<router-view class=\"component-content\"></router-view>\n\t<div>\n</template>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(71)
	__vue_script__ = __webpack_require__(73)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/mainMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/micro0/Sites/total-station/src/components/mainMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mainMenu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mainMenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\na:link,\na:visited,\na:hover,\na:active {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\n.menu {\n\theight: 100%;\n}\n\n.sub-menu,\n.main-menu {\n\twidth: 50%;\n\theight: 100%;\n\tfloat: left;\n\toverflow: scroll;\n\tborder-top: 1px solid #707070;\n\tborder-bottom: 1px solid #707070;\n}\n\n.main-menu {\n\tbackground: #DDD;\n}\n\n.sub-menu {\n\tbackground: white;\n}\n\n.v-link-active {\n\tbackground-color: #456;\n}\n\n.main-menu-item-warp {\n\twidth: 50%;\n\theight: 20%;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-block;\n\tborder: 0\n}\n\n.main-menu-item {\n\twidth: 99%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-block;\n\tborder: 1px solid #707070;\n\tborder-top: 0;\n\ttext-align: center;\n}\n", "", {"version":3,"sources":["/./src/components/mainMenu.vue?4275fd6c"],"names":[],"mappings":";AA6CA;;;;CAIA,sBAAA;CACA,aAAA;CACA;;AAEA;CACA,aAAA;CACA;;AAEA;;CAEA,WAAA;CACA,aAAA;CACA,YAAA;CACA,iBAAA;CACA,8BAAA;CACA,iCAAA;CACA;;AAEA;CACA,iBAAA;CACA;;AAEA;CACA,kBAAA;CACA;;AAEA;CACA,uBAAA;CACA;;AAEA;CACA,WAAA;CACA,YAAA;CACA,UAAA;CACA,WAAA;CACA,sBAAA;CACA,SAAA;CACA;;AAEA;CACA,WAAA;CACA,aAAA;CACA,UAAA;CACA,WAAA;CACA,sBAAA;CACA,0BAAA;CACA,cAAA;CACA,mBAAA;CACA","file":"mainMenu.vue","sourcesContent":["<template>\n\t<div class=\"menu\">\n\t\t<div class=\"main-menu\" @click=\"changeActiveMenu\">\n\t\t\t<div class=\"main-menu-item-warp\" v-for=\"menu of mainMenu\">\n\t\t\t\t<a v-link=\"mainPathPrefix + menu.name\" :index=\"$index\" :name=\"menu.name\" class=\"main-menu-item\">{{ menu.tag }}</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<router-view class=\"sub-menu\" :active-menu=\"activeMenu\" :main-path-prefix=\"mainPathPrefix\"></router-view>\n\t</div>\n</template>\n\n<script>\nimport Menu from \"../static/data/menu.json\";\nimport example from \"../directives/example.vue\";\n\nvar mainMenu = [],\n\tsubMenu = [],\n\tactiveMenu = {},\n\tmainPathPrefix = \"\",\n\tsubPathPrefix = \"\";\n\nmainMenu = Menu.subMenu;\nmainPathPrefix = `/${ Menu.name }/`;\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tmainMenu: mainMenu,\n\t\t\tmainPathPrefix: mainPathPrefix,\n\t\t\tactiveMenu: activeMenu\n\t\t};\n\t},\n\tmethods: {\n\t\tchangeActiveMenu: function (event) {\n\t\t\tvar activeMenuIndex = event.target.getAttribute(\"index\");\n\n\t\t\tif (activeMenuIndex != null) {\n\t\t\t\tthis.activeMenu = this.mainMenu[activeMenuIndex];\n\t\t\t}\n\t\t},\n\t}\n}\n</script>\n\n<style>\n\ta:link,\n\ta:visited,\n\ta:hover,\n\ta:active {\n\t\ttext-decoration: none;\n\t\tcolor: black;\n\t}\n\n\t.menu {\n\t\theight: 100%;\n\t}\n\n\t.sub-menu,\n\t.main-menu {\n\t\twidth: 50%;\n\t\theight: 100%;\n\t\tfloat: left;\n\t\toverflow: scroll;\n\t\tborder-top: 1px solid #707070;\n\t\tborder-bottom: 1px solid #707070;\n\t}\n\n\t.main-menu {\n\t\tbackground: #DDD;\n\t}\n\n\t.sub-menu {\n\t\tbackground: white;\n\t}\n\n\t.v-link-active {\n\t\tbackground-color: #456;\n\t}\n\n\t.main-menu-item-warp {\n\t\twidth: 50%;\n\t\theight: 20%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tdisplay: inline-block;\n\t\tborder: 0\n\t}\n\n\t.main-menu-item {\n\t\twidth: 99%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tdisplay: inline-block;\n\t\tborder: 1px solid #707070;\n\t\tborder-top: 0;\n\t\ttext-align: center;\n\t}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _menu = __webpack_require__(19);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _example = __webpack_require__(47);
	
	var _example2 = _interopRequireDefault(_example);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="menu">
	// 		<div class="main-menu" @click="changeActiveMenu">
	// 			<div class="main-menu-item-warp" v-for="menu of mainMenu">
	// 				<a v-link="mainPathPrefix + menu.name" :index="$index" :name="menu.name" class="main-menu-item">{{ menu.tag }}</a>
	// 			</div>
	// 		</div>
	// 		<router-view class="sub-menu" :active-menu="activeMenu" :main-path-prefix="mainPathPrefix"></router-view>
	// 	</div>
	// </template>
	//
	// <script>
	
	
	var mainMenu = [],
	    subMenu = [],
	    activeMenu = {},
	    mainPathPrefix = "",
	    subPathPrefix = "";
	
	mainMenu = _menu2.default.subMenu;
	mainPathPrefix = "/" + _menu2.default.name + "/";
	
	exports.default = {
		data: function data() {
			return {
				mainMenu: mainMenu,
				mainPathPrefix: mainPathPrefix,
				activeMenu: activeMenu
			};
		},
	
		methods: {
			changeActiveMenu: function changeActiveMenu(event) {
				var activeMenuIndex = event.target.getAttribute("index");
	
				if (activeMenuIndex != null) {
					this.activeMenu = this.mainMenu[activeMenuIndex];
				}
			}
		}
	};
	// </script>
	//
	// <style>
	// 	a:link,
	// 	a:visited,
	// 	a:hover,
	// 	a:active {
	// 		text-decoration: none;
	// 		color: black;
	// 	}
	//
	// 	.menu {
	// 		height: 100%;
	// 	}
	//
	// 	.sub-menu,
	// 	.main-menu {
	// 		width: 50%;
	// 		height: 100%;
	// 		float: left;
	// 		overflow: scroll;
	// 		border-top: 1px solid #707070;
	// 		border-bottom: 1px solid #707070;
	// 	}
	//
	// 	.main-menu {
	// 		background: #DDD;
	// 	}
	//
	// 	.sub-menu {
	// 		background: white;
	// 	}
	//
	// 	.v-link-active {
	// 		background-color: #456;
	// 	}
	//
	// 	.main-menu-item-warp {
	// 		width: 50%;
	// 		height: 20%;
	// 		margin: 0;
	// 		padding: 0;
	// 		display: inline-block;
	// 		border: 0
	// 	}
	//
	// 	.main-menu-item {
	// 		width: 99%;
	// 		height: 100%;
	// 		margin: 0;
	// 		padding: 0;
	// 		display: inline-block;
	// 		border: 1px solid #707070;
	// 		border-top: 0;
	// 		text-align: center;
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"menu\">\n\t<div class=\"main-menu\" @click=\"changeActiveMenu\">\n\t\t<div class=\"main-menu-item-warp\" v-for=\"menu of mainMenu\">\n\t\t\t<a v-link=\"mainPathPrefix + menu.name\" :index=\"$index\" :name=\"menu.name\" class=\"main-menu-item\">{{ menu.tag }}</a>\n\t\t</div>\n\t</div>\n\t<router-view class=\"sub-menu\" :active-menu=\"activeMenu\" :main-path-prefix=\"mainPathPrefix\"></router-view>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map