(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es/reflect/index.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/reflect/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.reflect.apply */ "./node_modules/core-js/modules/es.reflect.apply.js");
__webpack_require__(/*! ../../modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! ../../modules/es.reflect.define-property */ "./node_modules/core-js/modules/es.reflect.define-property.js");
__webpack_require__(/*! ../../modules/es.reflect.delete-property */ "./node_modules/core-js/modules/es.reflect.delete-property.js");
__webpack_require__(/*! ../../modules/es.reflect.get */ "./node_modules/core-js/modules/es.reflect.get.js");
__webpack_require__(/*! ../../modules/es.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../../modules/es.reflect.get-prototype-of */ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js");
__webpack_require__(/*! ../../modules/es.reflect.has */ "./node_modules/core-js/modules/es.reflect.has.js");
__webpack_require__(/*! ../../modules/es.reflect.is-extensible */ "./node_modules/core-js/modules/es.reflect.is-extensible.js");
__webpack_require__(/*! ../../modules/es.reflect.own-keys */ "./node_modules/core-js/modules/es.reflect.own-keys.js");
__webpack_require__(/*! ../../modules/es.reflect.prevent-extensions */ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js");
__webpack_require__(/*! ../../modules/es.reflect.set */ "./node_modules/core-js/modules/es.reflect.set.js");
__webpack_require__(/*! ../../modules/es.reflect.set-prototype-of */ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Reflect;


/***/ }),

/***/ "./node_modules/core-js/features/reflect/index.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/features/reflect/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/reflect */ "./node_modules/core-js/es/reflect/index.js");

__webpack_require__(/*! ../../modules/esnext.reflect.define-metadata */ "./node_modules/core-js/modules/esnext.reflect.define-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.delete-metadata */ "./node_modules/core-js/modules/esnext.reflect.delete-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.get-metadata */ "./node_modules/core-js/modules/esnext.reflect.get-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.get-metadata-keys */ "./node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../../modules/esnext.reflect.get-own-metadata */ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../../modules/esnext.reflect.has-metadata */ "./node_modules/core-js/modules/esnext.reflect.has-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.has-own-metadata */ "./node_modules/core-js/modules/esnext.reflect.has-own-metadata.js");
__webpack_require__(/*! ../../modules/esnext.reflect.metadata */ "./node_modules/core-js/modules/esnext.reflect.metadata.js");


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-weak.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/collection-weak.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var getWeakData = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").getWeakData;
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js");
var $has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(a) {
        nativeMethod.call(this, a === 0 ? 0 : a);
        return this;
      } : KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : nativeMethod.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : nativeMethod.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : nativeMethod.call(this, a === 0 ? 0 : a);
      } : function set(a, b) {
        nativeMethod.call(this, a === 0 ? 0 : a, b);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/reflect-metadata.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/reflect-metadata.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
var Map = __webpack_require__(/*! ../modules/es.map */ "./node_modules/core-js/modules/es.map.js");
var WeakMap = __webpack_require__(/*! ../modules/es.weak-map */ "./node_modules/core-js/modules/es.weak-map.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var metadata = shared('metadata');
var store = metadata.store || (metadata.store = new WeakMap());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};

var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};

var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};

var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};

var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};

var toMetadataKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};

module.exports = {
  store: store,
  getMap: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  toKey: toMetadataKey
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (get) {
  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  nativeApply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.github.io/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    aFunction(target);
    anObject(argumentsList);
    return nativeApply
      ? nativeApply(target, thisArgument, argumentsList)
      : functionApply.call(target, thisArgument, argumentsList);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.delete-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.has.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectIsExtensible = Object.isExtensible;

// `Reflect.isExtensible` method
// https://tc39.github.io/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return objectIsExtensible ? objectIsExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.own-keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

// `Reflect.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");
var objectSetPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

$({ target: 'Reflect', stat: true }, {
  set: set
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (get) {
  return function Set() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var enforceIternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce;
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.github.io/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.define-metadata.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.define-metadata.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.defineMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.delete-metadata.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.delete-metadata.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
var store = ReflectMetadataModule.store;

// `Reflect.deleteMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
var Set = __webpack_require__(/*! ../modules/es.set */ "./node_modules/core-js/modules/es.set.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

var from = function (iter) {
  var result = [];
  iterate(iter, result.push, result);
  return result;
};

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

// `Reflect.getMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.get-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.get-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

// `Reflect.getMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.get-own-metadata.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.has-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.has-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

// `Reflect.hasMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.has-own-metadata.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.has-own-metadata.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.hasOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.reflect.metadata.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.reflect.metadata.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "./node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.metadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, key) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
    };
  }
});


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/alert/alert.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alert/alert.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <app-slider-test></app-slider-test> -->\n<alert></alert>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/classmicromap/classmicromap.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/classmicromap/classmicromap.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\"\n        #graphContainer>\n  </svg>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/computerScience/computerScience.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/computerScience/computerScience.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-12 text-right pb-5\">\n      <form class=\"range-field\" #slider>\n            <input id=\"slider\" type=\"range\" min=\"0\" max=\"2\" step=\"1\"/>\n          </form>\n      </div> -->\n\n<div class=\"container-fluid\" >\n<svg  id=\"graphContainer\"\n      width=\"100%\"\n      height=\"100%\"\n      class=\"associations\">\n\n\n      \n      <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n            <xhtml:pdf-viewer [src]=\"pdfSrc\" \n            [(page)]=\"pageNumber\"\n            [show-all]=\"false\"\n            zoom=\"0.45\"\n            render-text=\"true\"\n            style=\"display: block;\"\n            #pdfViewer>   \n            </pdf-viewer>\n          </foreignObject>\n</svg>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/computerScience/modify1/modify1.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/computerScience/modify1/modify1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/computerScience/test1/test1.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/computerScience/test1/test1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Please fill in the blocks <button id=\"submitBlock\" (click)=\"submitAnswer()\">Submit Answer</button>\n<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n  </svg>\n  </div>\n<button routerLink=\"/computerScience\" style=\"nav-right:auto \" routerLinkActive=\"active\">Back</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n<svg  id=\"graphContainer\"\n      width=\"100%\"\n      height=\"100%\"\n      class=\"associations\"\n      #graphContainer>\n      <router-outlet></router-outlet>\n</svg>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Login\n        </button>\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/micro-map-basic/micro-map-basic.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/micro-map-basic/micro-map-basic.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\"\n        #graphContainer>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\" *ngIf=\"currentUser\">\n  <a class=\"navbar-brand col-sm-2\" href=\"#\">\n    <img src=\"/src/assets/icon.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    ICM\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <form class=\"form-inline my-2 my-lg-0 col-sm-8\">\n      <input class=\"form-control form-control-sm mr-sm-2 col-sm-8\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"border-radius: 1.25rem\">\n      <button class=\"btn btn-sm btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n  <a class=\"nav-link text-right\" href=\"#\">Muster Mann</a>\n  <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n  <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n  <div class=\"col-sm-1 text-right\">\n    <button type=\"button\" class=\"btn btn-sm btn-outline-info\">Login</button>\n  </div>\n</nav>\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Macro Map</li>\n  </ol>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/object/object.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/object/object.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/primitive-type/primitive-type.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/primitive-type/primitive-type.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/modify2/modify2.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/modify2/modify2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/singleChoice/singleChoice.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/singleChoice/singleChoice.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Single Choice Test</h2>\n\n<form autocomplete=\"off\">\n  <fieldset align=\"center\">\n    <legend>Question:{{questionPosition+1}}/{{questions.length}}<br/>{{questions[questionPosition].question}}</legend>\n    <div>\n      <input type=\"radio\" value=\"A\" id=\"A\" name=\"item\" [(ngModel)]=\"questions[questionPosition].userchoice\" ><label for=\"A\"  id='labelA' style=\"cursor:pointer\">{{questions[questionPosition].items[0]}}</label><br/>\n      <input type=\"radio\" value=\"B\" id=\"B\" name=\"item\" [(ngModel)]=\"questions[questionPosition].userchoice\"><label for=\"B\"  id='labelB' style=\"cursor:pointer\">{{questions[questionPosition].items[1]}}</label><br/>\n      <input type=\"radio\" value=\"C\" id=\"C\" name=\"item\" [(ngModel)]=\"questions[questionPosition].userchoice\"> <label for=\"C\" id='labelC'  style=\"cursor:pointer\">{{questions[questionPosition].items[2]}}</label> <br/>\n      <input type=\"radio\" value=\"D\" id=\"D\" name=\"item\" [(ngModel)]=\"questions[questionPosition].userchoice\"><label for=\"D\" id='labelD' style=\"cursor:pointer\">{{questions[questionPosition].items[3]}}</label><br/>\n    </div>\n  </fieldset>\n  <div align=\"center\">\n  <button id = \"previous\" (click)=\"questionPrevious()\">Previous</button>\n  <button id = \"submit\" (click)=\"submitAnswer()\"  [disabled]=\"check()\">Submit</button>\n  <button id = 'next'(click)=\"questionNext()\" >Next</button>\n  </div>\n  <div align=\"center\">\n    <textarea  id = \"explanation\"  readonly value={{textNow}}></textarea>\n  </div>\n</form>\n\n<nav>\n  <button routerLink=\"/program\" style=\"nav-right:auto \" routerLinkActive=\"active\">Back</button>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/test2/test2.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/test2/test2.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Please fill in the blocks <button id=\"submitBlock\" (click)=\"submitAnswer()\">Submit Answer</button>\n<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n  </svg>\n  </div>\n<button routerLink=\"/program\" style=\"nav-right:auto \" routerLinkActive=\"active\">Back</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Register\n        </button>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userlist/userlist.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userlist/userlist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/variable/modify3/modify3.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/variable/modify3/modify3.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/variable/test3/test3.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/variable/test3/test3.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Please fill in the blocks <button id=\"submitBlock\" (click)=\"submitAnswer()\">Submit Answer</button>\n<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n  </svg>\n  </div>\n<button routerLink=\"/variable\" style=\"nav-right:auto \" routerLinkActive=\"active\">Back</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/variable/variable.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/variable/variable.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <svg  id=\"graphContainer\"\n        width=\"100%\"\n        height=\"100%\"\n        class=\"associations\">\n\n\n        <foreignObject x=\"0\" y=\"0\" width=\"350\" height=\"480\" class=\"pdf\">\n          <xhtml:pdf-viewer [src]=\"pdfSrc\" \n          [(page)]=\"pageNumber\"\n          [show-all]=\"false\"\n          zoom=\"0.45\"\n          render-text=\"true\"\n          style=\"display: block;\"\n          #pdfViewer>   \n          </pdf-viewer>\n        </foreignObject>\n  </svg>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _micro_map_basic_micro_map_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./micro-map-basic/micro-map-basic.component */ "./src/app/micro-map-basic/micro-map-basic.component.ts");
/* harmony import */ var _program_modify2_modify2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./program/modify2/modify2.component */ "./src/app/program/modify2/modify2.component.ts");
/* harmony import */ var _program_test2_test2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program/test2/test2.component */ "./src/app/program/test2/test2.component.ts");
/* harmony import */ var _computerScience_modify1_modify1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computerScience/modify1/modify1.component */ "./src/app/computerScience/modify1/modify1.component.ts");
/* harmony import */ var _variable_modify3_modify3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variable/modify3/modify3.component */ "./src/app/variable/modify3/modify3.component.ts");
/* harmony import */ var _variable_variable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./variable/variable.component */ "./src/app/variable/variable.component.ts");
/* harmony import */ var _computerScience_computerScience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./computerScience/computerScience.component */ "./src/app/computerScience/computerScience.component.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony import */ var _program_singleChoice_singleChoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./program/singleChoice/singleChoice.component */ "./src/app/program/singleChoice/singleChoice.component.ts");
/* harmony import */ var _variable_test3_test3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./variable/test3/test3.component */ "./src/app/variable/test3/test3.component.ts");
/* harmony import */ var _computerScience_test1_test1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./computerScience/test1/test1.component */ "./src/app/computerScience/test1/test1.component.ts");
/* harmony import */ var _object_object_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/object.component */ "./src/app/object/object.component.ts");
/* harmony import */ var _primitive_type_primitive_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./primitive-type/primitive-type.component */ "./src/app/primitive-type/primitive-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import page

















// Create Path Here
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'computerScience', component: _computerScience_computerScience_component__WEBPACK_IMPORTED_MODULE_9__["ComputerScienceComponent"] },
    { path: 'program', component: _program_program_component__WEBPACK_IMPORTED_MODULE_10__["ProgramComponent"] },
    { path: 'variable', component: _variable_variable_component__WEBPACK_IMPORTED_MODULE_8__["VariableComponent"] },
    { path: 'object', component: _object_object_component__WEBPACK_IMPORTED_MODULE_17__["ObjectComponent"] },
    { path: 'primitiveType', component: _primitive_type_primitive_type_component__WEBPACK_IMPORTED_MODULE_18__["PrimitiveTypeComponent"] },
    // don't use children here because svg will be covered by the parent svg
    // children: [
    //   {
    //     path: 'modify2', component: Modify2Component
    //   }]
    { path: 'program/modify2', component: _program_modify2_modify2_component__WEBPACK_IMPORTED_MODULE_4__["Modify2Component"] },
    { path: 'program/test2', component: _program_test2_test2_component__WEBPACK_IMPORTED_MODULE_5__["Test2Component"] },
    { path: 'computerScience/modify1', component: _computerScience_modify1_modify1_component__WEBPACK_IMPORTED_MODULE_6__["Modify1Component"] },
    { path: 'computerScience/test1', component: _computerScience_test1_test1_component__WEBPACK_IMPORTED_MODULE_16__["Test1Component"] },
    { path: 'variable/modify3', component: _variable_modify3_modify3_component__WEBPACK_IMPORTED_MODULE_7__["Modify3Component"] },
    { path: 'variable/test3', component: _variable_test3_test3_component__WEBPACK_IMPORTED_MODULE_15__["Test3Component"] },
    { path: 'micro-basic', component: _micro_map_basic_micro_map_basic_component__WEBPACK_IMPORTED_MODULE_3__["MicroMapBasicComponent"] },
    { path: 'program/singleChoice', component: _program_singleChoice_singleChoice_component__WEBPACK_IMPORTED_MODULE_14__["SingleChoiceComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep text {\n    font: 5px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkJLIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6Om5nLWRlZXAgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCBwYXRoLmxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIDo6bmctZGVlcCB0ZXh0IHtcbiAgICBmb250OiA1cHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/fake-backend */ "./src/app/helpers/fake-backend.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _computerScience_computerScience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./computerScience/computerScience.component */ "./src/app/computerScience/computerScience.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _micro_map_basic_micro_map_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./micro-map-basic/micro-map-basic.component */ "./src/app/micro-map-basic/micro-map-basic.component.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _program_modify2_modify2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./program/modify2/modify2.component */ "./src/app/program/modify2/modify2.component.ts");
/* harmony import */ var _program_test2_test2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./program/test2/test2.component */ "./src/app/program/test2/test2.component.ts");
/* harmony import */ var _computerScience_modify1_modify1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./computerScience/modify1/modify1.component */ "./src/app/computerScience/modify1/modify1.component.ts");
/* harmony import */ var _variable_modify3_modify3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variable/modify3/modify3.component */ "./src/app/variable/modify3/modify3.component.ts");
/* harmony import */ var _variable_variable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./variable/variable.component */ "./src/app/variable/variable.component.ts");
/* harmony import */ var _program_singleChoice_singleChoice_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./program/singleChoice/singleChoice.component */ "./src/app/program/singleChoice/singleChoice.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _classmicromap_classmicromap_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./classmicromap/classmicromap.component */ "./src/app/classmicromap/classmicromap.component.ts");
/* harmony import */ var _modifyMap_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modifyMap.service */ "./src/app/modifyMap.service.ts");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./testMap.service */ "./src/app/testMap.service.ts");
/* harmony import */ var _computerScience_test1_test1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./computerScience/test1/test1.component */ "./src/app/computerScience/test1/test1.component.ts");
/* harmony import */ var _variable_test3_test3_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./variable/test3/test3.component */ "./src/app/variable/test3/test3.component.ts");
/* harmony import */ var _object_object_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./object/object.component */ "./src/app/object/object.component.ts");
/* harmony import */ var _primitive_type_primitive_type_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./primitive-type/primitive-type.component */ "./src/app/primitive-type/primitive-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// used to create fake backend





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _computerScience_computerScience_component__WEBPACK_IMPORTED_MODULE_10__["ComputerScienceComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _micro_map_basic_micro_map_basic_component__WEBPACK_IMPORTED_MODULE_12__["MicroMapBasicComponent"],
                _program_singleChoice_singleChoice_component__WEBPACK_IMPORTED_MODULE_20__["SingleChoiceComponent"],
                _program_program_component__WEBPACK_IMPORTED_MODULE_13__["ProgramComponent"],
                _variable_variable_component__WEBPACK_IMPORTED_MODULE_19__["VariableComponent"],
                _program_modify2_modify2_component__WEBPACK_IMPORTED_MODULE_15__["Modify2Component"],
                _program_test2_test2_component__WEBPACK_IMPORTED_MODULE_16__["Test2Component"],
                _computerScience_modify1_modify1_component__WEBPACK_IMPORTED_MODULE_17__["Modify1Component"],
                _variable_modify3_modify3_component__WEBPACK_IMPORTED_MODULE_18__["Modify3Component"],
                _computerScience_test1_test1_component__WEBPACK_IMPORTED_MODULE_29__["Test1Component"],
                _variable_test3_test3_component__WEBPACK_IMPORTED_MODULE_30__["Test3Component"],
                _object_object_component__WEBPACK_IMPORTED_MODULE_31__["ObjectComponent"],
                _primitive_type_primitive_type_component__WEBPACK_IMPORTED_MODULE_32__["PrimitiveTypeComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__["AlertComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__["UserlistComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _classmicromap_classmicromap_component__WEBPACK_IMPORTED_MODULE_25__["ClassmicromapComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_27__["BuildMapService"], _modifyMap_service__WEBPACK_IMPORTED_MODULE_26__["ModifyMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_28__["TestMapService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buildMap.service.ts":
/*!*************************************!*\
  !*** ./src/app/buildMap.service.ts ***!
  \*************************************/
/*! exports provided: BuildMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildMapService", function() { return BuildMapService; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildMapService = /** @class */ (function () {
    function BuildMapService(testMapService) {
        this.testMapService = testMapService;
    }
    // wrap function for automatically breaking lines to fit the text field
    BuildMapService.prototype.wrap = function (text, width) {
        text.each(function () {
            // let r = 0;
            var text = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this), words = text.text().split('').reverse(), word, line = [], lineNumber = 0, 
            // this should be set manually, otherwise problem when continuelly click on different nodes
            lineHeight = 5, 
            // lineHeight = text.node().getBoundingClientRect().height,
            x = +text.attr('x'), y = +text.attr('y'), tspan = text.text(null).append('tspan').attr('x', x).attr('y', y);
            while (word = words.pop()) {
                line.push(word);
                var dash = lineNumber > 0 ? '-' : '';
                tspan.text(dash + line.join(''));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(''));
                    line = [word];
                    tspan = text.append('tspan').attr('x', x).attr('y', ++lineNumber * lineHeight + y).text(word);
                }
            }
        });
    };
    BuildMapService.prototype.initSvg = function (svg, width, height, path, circle, linkword, glossary, gText, gImage, sliderCircle, circleNextMap, toNextMapRect, linkwords, toNextMapButton, gButton) {
        svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .attr('oncontextmenu', 'return false;')
            .attr('width', width)
            .attr('height', height)
            .attr('ready', false);
        // var logo = svg. append('image') . attr('xlink:href', 'assets/icon.jpg') . attr('width', 100) . attr('height', 50);
        svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        // arrow styles
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        path = svg.append('svg:g').selectAll('path.link');
        circle = svg.append('svg:g').selectAll('g');
        circleNextMap = svg.append('svg:g').selectAll('gNextMap');
        // circleNextMap = svg.append('svg:g').selectAll('g');
        linkword = svg.append('svg:g').selectAll('text.linkword');
        glossary = svg.append('svg:g').selectAll('rect.gRect');
        gText = svg.append('svg:g').selectAll('text.gText');
        gImage = svg.append('svg:g').selectAll('image.gImage');
        gButton = svg.append('svg:g').selectAll('foreignObject.gButton');
        ;
        // link word should only be created once, therefore moved into ngAfterInit
        // create link words
        linkword = linkword.data(linkwords, function (d) { return d.id; });
        linkword.exit().remove();
        // const g1 = linkword.enter().append('svg:g');
        linkword = linkword.enter()
            .append('svg:g')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('length', function (d) { return d.text.length; })
            .merge(linkword);
        svg.selectAll('g.linkword')
            .append('svg:ellipse')
            .attr('class', 'linkword')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y - 1; })
            .attr('rx', '10')
            .attr('ry', '10')
            .attr('fill', 'lightgrey');
        svg.selectAll('g.linkword')
            .append('svg:text')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        console.log(linkwords.length);
        for (var id = 0; id < parseInt(linkwords.length); id++) {
            var textLength = svg.selectAll('g.linkword').filter(function (a, i) {
                return i === id;
            }).attr('length');
            //  console.log(parseInt(textLength)+1);
            svg.selectAll('ellipse.linkword').filter(function (a, i) {
                return i === id;
            }).attr('rx', parseInt(textLength) * 2.5 + 8);
        }
        // create slider bar
        var data = [1, 2, 3, 4];
        var scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([1, d3__WEBPACK_IMPORTED_MODULE_0__["max"](data)])
            .range([0, 300]);
        var x_axis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scale)
            .ticks(3, "f");
        svg.append("g")
            .attr('class', 'slider')
            .attr("transform", "translate(900, 10)")
            .call(x_axis);
        // create ball on the slider bar
        sliderCircle = svg.append("circle")
            .attr('class', 'ball')
            .attr("cx", 900)
            .attr("cy", 10)
            .attr("r", 7)
            .style("fill", "purple");
        svg
            .append('svg:text')
            .attr('class', 'slider')
            .attr('x', 780)
            .attr('y', 16)
            .attr('text-anchor', 'left')
            // .attr('fill', 'purple')
            .text('Difficult Level:');
        // create rectangular for asking if switch to the next map
        toNextMapRect = svg.append('rect')
            .attr('class', 'toNext')
            .attr('x', '200')
            .attr('y', '100')
            .attr('width', '800')
            .attr('height', '120')
            .attr('rx', '30')
            .attr('ry', '30')
            .style('fill', 'yellow')
            .style('opacity', '0.9')
            .attr('visibility', 'hidden');
        toNextMapRect = svg.append('svg:text')
            .attr('class', 'toNext')
            .attr('x', '460')
            .attr('y', '140')
            .attr('font-size', '30px')
            .attr('text-anchor', 'left')
            .attr('fill', 'purple')
            .text('Go to next map?')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        });
        toNextMapButton = svg.append('foreignObject')
            .attr('class', 'toNext')
            .attr('x', '320')
            .attr('y', '150')
            .attr('width', '150')
            .attr('height', '60')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('text.toNext').attr('routerLink', '/variable');
        });
        ;
        toNextMapButton
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-success btn-lg btn-block">Yes</button>');
        toNextMapButton = svg.append('foreignObject')
            .attr('class', 'toNext')
            .attr('x', '690')
            .attr('y', '150')
            .attr('width', '150')
            .attr('height', '60')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'hidden');
            svg.select('text.toNext').attr('visibility', 'hidden');
            svg.selectAll('foreignObject.toNext').attr('visibility', 'hidden');
        });
        toNextMapButton
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-danger btn-lg btn-block">No</button>');
        return [svg, path, circle, linkword, glossary, gText, gImage, sliderCircle, circleNextMap, toNextMapRect, gButton];
    };
    BuildMapService.prototype.buildMicroMap = function (svg, path, links, glossary, glossaries, gText, gTexts, gImage, gButton, circle, nodes, linkword, linkwords, sliderCircle, nodesNextMap, circleNextMap, offset, mapName) {
        // bind the paths with data
        path = path.data(links);
        // bind the white rectangulars with data
        glossary = glossary.data(glossaries);
        gText = gText.data(gTexts);
        gImage = gImage.data(gTexts);
        gButton = gButton.data(gTexts);
        path.exit().remove();
        // create paths
        path = path
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', function (d) {
            var deltaX = d.target.x - d.source.x;
            var deltaY = d.target.y - d.source.y;
            var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var normX = deltaX / dist;
            var normY = deltaY / dist;
            var xy = Math.abs(deltaX / deltaY);
            var sourcePadding = 8;
            var targetPadding = 0;
            targetPadding = 0;
            sourcePadding = 0;
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(path);
        // bind the circle with data
        circle = circle.data(nodes, function (d) { return d.id; });
        circle.exit().remove();
        circleNextMap = circleNextMap.data(nodesNextMap, function (d) { return d.id; });
        circleNextMap.exit().remove();
        // for each node create a g element
        var g = circle.enter().append('svg:g');
        var gNextMap = circleNextMap.enter().append('svg:g');
        gNextMap.append('svg:ellipse')
            .attr('class', 'nodeNextMap')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return 'grey'; })
            .style('opacity', '0.9')
            .style('stroke', 'white')
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'visible');
            svg.select('text.toNext').attr('visibility', 'visible');
            svg.selectAll('foreignObject.toNext').attr('visibility', 'visible');
        });
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) {
            return 'grey';
        })
            .style('stroke', function (d) { return (!d.reflexive) ? 'black' : 'white'; })
            .attr('locked', 'true')
            .on('mousedown', function (d) {
            // this code is needed for initialize the mousedown function before dragging the slider bar
            if (parseInt(svg.select('circle.ball').attr('cx')) === 900) {
                window.alert("Node locked");
            }
            else {
            }
        })
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'black'; })
                .style('stroke-width', '3px');
        })
            .on('mouseout', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'white'; })
                .style('stroke-width', '1.5px');
        });
        // create texts
        g.append('svg:text')
            .attr('class', 'eText')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        gNextMap.append('svg:text')
            .attr('class', 'eTextNextMap')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        circleNextMap = gNextMap.merge(circleNextMap);
        circleNextMap.exit().remove();
        circle = g.merge(circle);
        circle.exit().remove();
        glossary.exit().remove();
        glossary = glossary
            .enter()
            .append('svg:rect')
            .attr('class', 'gRect')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x;
            }
            else {
                return d.target.x - 60;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y;
            }
            else {
                return d.target.y - 80;
            }
        })
            .attr('fill', 'orange')
            .attr('width', '60')
            .attr('height', '80')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .attr('stroke', 'black')
            // .on('mousedown', (d)=>{
            //   d3.select('svg').attr('clickOnNode', 'true');
            //   svg.select('foreignObject.pdf')
            //   .attr('visibility','visible')
            //   .transition()
            //   .duration(0)
            //   .attr('transform', 'translate('+ (d.target.x-180) + ", 0)");
            //   // make sure that the pdf view will be fixed on the top of page
            //     svg.transition().duration(0).attr('transform','translate(' + (1240 + 2*offset) * 3 / 2  + ',' + (310+d.target.y*2) * 3 / 2 + ')scale(' + 3 + ')translate(' + -d.target.x + ',' + -d.target.y + ')');
            //   // make sure the pdf could be fully shown even if click on node on the left border
            //   if(d.target.x<150){
            //     svg.select('foreignObject.pdf')
            //     .attr('visibility','visible')
            //     .transition()
            //     .duration(0)
            //     .attr('transform', 'translate('+ (d.target.x-65) + ", 0)");
            //     svg.transition().duration(0).attr('transform','translate(' + (1240 + 2*offset - 65*3) * 3 / 2  + ',' + (310+d.target.y*2) * 3 / 2 + ')scale(' + 3 + ')translate(' + -d.target.x + ',' + -d.target.y + ')');
            //   }
            //   svg.attr('page', parseInt(d.page)+18);
            //   console.log("current page: " + d.page);
            // })
            .merge(glossary);
        gText.exit().remove();
        gImage.exit().remove();
        gText = gText
            .enter()
            .append('svg:text')
            .attr('class', 'gText')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x + 10;
            }
            else {
                return d.target.x - 50;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y + 10;
            }
            else {
                return d.target.y - 70;
            }
        })
            .attr('fill', 'black')
            .attr('font-size', '4')
            .attr('text-anchor', 'left')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .text(function (d) { return d.text; })
            .call(this.wrap, 40)
            .on('mousedown', function (d) {
        })
            .merge(gText);
        ;
        gImage = gImage
            .enter()
            .append('svg:image')
            .attr('class', 'gImage')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x + 10;
            }
            else {
                return d.target.x - 50;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y + 60;
            }
            else {
                return d.target.y - 20;
            }
        })
            .attr('xlink:href', 'assets/icon.jpg')
            .attr('width', 20)
            .attr('height', 15)
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .merge(gImage);
        gButton = gButton
            .enter()
            .append('foreignObject')
            .attr('class', 'gButton')
            .attr('visibility', 'hidden')
            .attr("width", 50)
            .attr("height", 25)
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x + 15;
            }
            else {
                return d.target.x - 45;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y + 50;
            }
            else {
                return d.target.y - 30;
            }
        })
            .on('mousedown', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
            svg.select('foreignObject.pdf')
                .attr('visibility', 'visible')
                .transition()
                .duration(0)
                .attr('transform', 'translate(' + (d.target.x - 180) + ", 0)");
            // make sure that the pdf view will be fixed on the top of page
            svg.transition().duration(0).attr('transform', 'translate(' + (1240 + 2 * offset) * 3 / 2 + ',' + (310 + d.target.y * 2) * 3 / 2 + ')scale(' + 3 + ')translate(' + -d.target.x + ',' + -d.target.y + ')');
            // make sure the pdf could be fully shown even if click on node on the left border
            if (d.target.x < 150) {
                svg.select('foreignObject.pdf')
                    .attr('visibility', 'visible')
                    .transition()
                    .duration(0)
                    .attr('transform', 'translate(' + (d.target.x - 65) + ", 0)");
                svg.transition().duration(0).attr('transform', 'translate(' + (1240 + 2 * offset - 65 * 3) * 3 / 2 + ',' + (310 + d.target.y * 2) * 3 / 2 + ')scale(' + 3 + ')translate(' + -d.target.x + ',' + -d.target.y + ')');
            }
            svg.attr('page', parseInt(d.page) + 18);
            console.log("current page: " + d.page);
        })
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-link btn-sm">Book</button>')
            .merge(gButton);
        var testMapService = this.testMapService;
        sliderCircle.call(d3__WEBPACK_IMPORTED_MODULE_0__["drag"]()
            .on('start', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["event"].sourceEvent.stopPropagation();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this)
                .classed("dragging", true);
        })
            .on('drag', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr("cx", function (d) {
                // console.log(this);
                if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].x < 950) {
                    return 900;
                }
                else if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].x <= 1050) {
                    return 1000;
                }
                else if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].x <= 1150) {
                    return 1100;
                }
                else {
                    return 1200;
                }
            });
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr("cy", 10);
            var cx = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('cx'));
            if (cx === 900) {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').style('fill', 'grey').attr('locked', 'true')
                    .on('mousedown', function (d) { return window.alert("Node locked"); });
            }
            else if (cx === 1000) {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').attr('locked', 'false');
                testMapService.callServerTest().subscribe(function (data) {
                    for (var t = 0; t < nodes.length; t++) {
                        if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                            return a['id'] === t;
                        }).attr('locked') === 'false') {
                            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                                return a['id'] === t;
                            })
                                .style('fill', function (d) {
                                var correct = parseInt(data[mapName]['blocktest']['node' + t]['true']);
                                var wrong = parseInt(data[mapName]['blocktest']['node' + t]['false']);
                                if (correct === 0 && wrong === 0) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 0, 0).toString();
                                }
                                else if (correct === wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125, 0).toString();
                                }
                                else if (correct > wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125 * wrong / correct, 125, 0).toString();
                                }
                                else {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125 * correct / wrong, 0).toString();
                                }
                            });
                        }
                    }
                });
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').on('mousedown', function (d) {
                    // d3.select('svg').selectAll('ellipse.node').on('click', (d)=>{
                    var id = d['id'];
                    if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                    }
                    else {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'visible' : 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    var k = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 1 : 3;
                    // console.log(k);
                    var x = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 620 : d['x'];
                    var y = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 240 : d['y'];
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').transition()
                        .duration(750)
                        .attr('transform', 'translate(' + (1240 + 2 * offset) * k / 2 + ',' + 480 * k / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
                });
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (d, i) {
                    return d['level'] > 1;
                }).style('fill', 'grey').attr('locked', 'true');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (d, i) {
                    return d['level'] > 1;
                }).on('mousedown', function (d) { return window.alert("Node locked"); });
            }
            else if (cx === 1100) {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').attr('locked', 'false');
                testMapService.callServerTest().subscribe(function (data) {
                    for (var t = 0; t < nodes.length; t++) {
                        if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                            return a['id'] === t;
                        }).attr('locked') === 'false') {
                            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                                return a['id'] === t;
                            })
                                .style('fill', function (d) {
                                var correct = parseInt(data[mapName]['blocktest']['node' + t]['true']);
                                var wrong = parseInt(data[mapName]['blocktest']['node' + t]['false']);
                                if (correct === 0 && wrong === 0) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 0, 0).toString();
                                }
                                else if (correct === wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125, 0).toString();
                                }
                                else if (correct > wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125 * wrong / correct, 125, 0).toString();
                                }
                                else {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125 * correct / wrong, 0).toString();
                                }
                            });
                        }
                    }
                });
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').on('mousedown', function (d) {
                    // d3.select('svg').selectAll('ellipse.node').on('click', (d)=>{
                    var id = d['id'];
                    if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                    }
                    else {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'visible' : 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    var k = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 1 : 3;
                    // console.log(k);
                    var x = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 620 : d['x'];
                    var y = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 240 : d['y'];
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').transition()
                        .duration(750)
                        .attr('transform', 'translate(' + (1240 + 2 * offset) * k / 2 + ',' + 480 * k / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
                });
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (d, i) {
                    return d['level'] > 2;
                }).style('fill', 'grey').attr('locked', 'true');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (d, i) {
                    return d['level'] > 2;
                }).on('mousedown', function (d) { return window.alert("Node locked"); });
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').attr('locked', 'false')
                    .on('mousedown', function (d) {
                    var id = d['id'];
                    if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                    }
                    else {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'visible' : 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('foreignObject.gButton').filter(function (a, i) {
                        return i !== id;
                    }).attr('visibility', 'hidden');
                    var k = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 1 : 3;
                    var x = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 620 : d['x'];
                    var y = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                        return i === id;
                    }).attr('visibility') === 'hidden') ? 240 : d['y'];
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').transition()
                        .duration(750)
                        .attr('transform', 'translate(' + (1240 + 2 * offset) * k / 2 + ',' + 480 * k / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
                });
                testMapService.callServerTest().subscribe(function (data) {
                    for (var t = 0; t < nodes.length; t++) {
                        if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                            return a['id'] === t;
                        }).attr('locked') === 'false') {
                            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                                return a['id'] === t;
                            })
                                .style('fill', function (d) {
                                var correct = parseInt(data[mapName]['blocktest']['node' + t]['true']);
                                var wrong = parseInt(data[mapName]['blocktest']['node' + t]['false']);
                                if (correct === 0 && wrong === 0) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 0, 0).toString();
                                }
                                else if (correct === wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125, 0).toString();
                                }
                                else if (correct > wrong) {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125 * wrong / correct, 125, 0).toString();
                                }
                                else {
                                    return Object(d3__WEBPACK_IMPORTED_MODULE_0__["rgb"])(125, 125 * correct / wrong, 0).toString();
                                }
                            });
                        }
                    }
                });
            }
        })
            .on('end', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed("dragging", false);
        }));
        for (var i = 0; i < glossaries.length; i++) {
            glossaries[i].hidden = true;
            gTexts[i].hidden = true;
        }
        var routerLink = svg.select('text.toNext').attr('routerLink');
        // console.log(routerLink);
        return [svg, circle, path, glossary, gText, gImage, linkword, circleNextMap, routerLink, gButton];
    };
    BuildMapService.ctorParameters = function () { return [
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"] }
    ]; };
    BuildMapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"]])
    ], BuildMapService);
    return BuildMapService;
}());



/***/ }),

/***/ "./src/app/classmicromap/classmicromap.component.css":
/*!***********************************************************!*\
  !*** ./src/app/classmicromap/classmicromap.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  text {\n    font: 5px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhc3NtaWNyb21hcC9jbGFzc21pY3JvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUM7SUFDQyxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2xhc3NtaWNyb21hcC9jbGFzc21pY3JvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCBwYXRoLmxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gICB0ZXh0IHtcbiAgICBmb250OiA1cHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/classmicromap/classmicromap.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/classmicromap/classmicromap.component.ts ***!
  \**********************************************************/
/*! exports provided: ClassmicromapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassmicromapComponent", function() { return ClassmicromapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassmicromapComponent = /** @class */ (function () {
    function ClassmicromapComponent() {
        this.title = 'Class Micro Map';
        this.width = 1240;
        this.height = 570;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        // store the nodes
        this.nodes = [
            { id: 0, text: 'class', x: 300, y: 70, reflexive: true },
            { id: 1, text: 'package', x: 210, y: 140, reflexive: true },
            { id: 2, text: 'comment', x: 350, y: 160, reflexive: true },
            { id: 3, text: 'composition', x: 120, y: 210, reflexive: true },
            { id: 4, text: 'inheritance', x: 270, y: 230, reflexive: true },
            { id: 5, text: 'java library', x: 410, y: 230, reflexive: true },
            { id: 6, text: 'tag', x: 480, y: 210, reflexive: true },
            { id: 7, text: 'Java Doc', x: 230, y: 300, reflexive: true },
            { id: 8, text: 'object', x: 485, y: 280, reflexive: true },
        ]; //Object is from other map
        // store the link words
        this.linkwords = [
            { id: 0, text: 'is template of', x: 255, y: 105, reflexive: false },
            { id: 1, text: 'forms', x: 165, y: 175, reflexive: false },
            { id: 2, text: 'can have', x: 328, y: 120, reflexive: false },
            { id: 3, text: 'can be from', x: 350, y: 195, reflexive: false },
            { id: 4, text: 'has type of relationships', x: 415, y: 185, reflexive: false },
            { id: 5, text: 'begin with', x: 250, y: 265, reflexive: false },
            { id: 6, text: 'organized by', x: 415, y: 265, reflexive: false },
        ];
        // store the links
        this.links = [
            { source: this.nodes[0], target: this.linkwords[0], left: false, right: false },
            { source: this.linkwords[0], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[1], target: this.linkwords[1], left: false, right: false },
            { source: this.linkwords[1], target: this.nodes[1], left: false, right: true },
            { source: this.nodes[0], target: this.linkwords[2], left: false, right: false },
            { source: this.linkwords[2], target: this.nodes[2], left: false, right: true },
            { source: this.nodes[0], target: this.linkwords[3], left: false, right: false },
            { source: this.linkwords[3], target: this.nodes[5], left: false, right: true },
            { source: this.linkwords[3], target: this.nodes[5], left: false, right: true },
            { source: this.nodes[2], target: this.linkwords[4], left: false, right: false },
            { source: this.linkwords[4], target: this.nodes[6], left: false, right: true },
            { source: this.nodes[4], target: this.linkwords[5], left: false, right: false },
            { source: this.linkwords[5], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[5], target: this.linkwords[6], left: false, right: false },
            { source: this.linkwords[6], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[6], target: this.linkwords[7], left: false, right: false },
            { source: this.linkwords[7], target: this.nodes[9], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[8], left: false, right: false },
            { source: this.linkwords[8], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[9], left: false, right: false },
            { source: this.linkwords[9], target: this.nodes[10], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[11], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[12], left: false, right: true },
            { source: this.nodes[13], target: this.linkwords[10], left: false, right: false },
            { source: this.linkwords[10], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[8], target: this.linkwords[11], left: false, right: false },
            { source: this.linkwords[11], target: this.nodes[13], left: false, right: true },
            { source: this.linkwords[11], target: this.nodes[14], left: false, right: true },
        ];
    }
    ClassmicromapComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClassmicromapComponent.prototype, "graphContainer", void 0);
    ClassmicromapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classmicromap',
            template: __webpack_require__(/*! raw-loader!./classmicromap.component.html */ "./node_modules/raw-loader/index.js!./src/app/classmicromap/classmicromap.component.html"),
            styles: [__webpack_require__(/*! ./classmicromap.component.css */ "./src/app/classmicromap/classmicromap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassmicromapComponent);
    return ClassmicromapComponent;
}());



/***/ }),

/***/ "./src/app/computerScience/computerScience.component.css":
/*!***************************************************************!*\
  !*** ./src/app/computerScience/computerScience.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n  background-color: lightgray;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n::ng-deep ellipse.node {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep ellipse.nodeNextMap {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep circle.ball {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep rect.button {\n  cursor: pointer;\n}\n\n::ng-deep path.link {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.dragLine {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.temp {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep text{\n  font: 10px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.gText{\n  font: 4px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.slider{\n  fill: rgb(77, 3, 67);\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 15px;\n  pointer-events: none;\n}\n\n::ng-deep text.toNext{\n  font: 30px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep svg:not(.active):not(.ctrl) {\n  cursor: crosshair;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHV0ZXJTY2llbmNlL2NvbXB1dGVyU2NpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXB1dGVyU2NpZW5jZS9jb21wdXRlclNjaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBzdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbjo6bmctZGVlcCBlbGxpcHNlLm5vZGUge1xuICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCBlbGxpcHNlLm5vZGVOZXh0TWFwIHtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgY2lyY2xlLmJhbGwge1xuICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCByZWN0LmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIHBhdGgubGluayB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOjpuZy1kZWVwIHBhdGguZHJhZ0xpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMwMDA7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjo6bmctZGVlcCBwYXRoLnRlbXAge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMwMDA7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjo6bmctZGVlcCB0ZXh0e1xuICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG46Om5nLWRlZXAgdGV4dC5nVGV4dHtcbiAgZm9udDogNHB4IHNhbnMtc2VyaWY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG46Om5nLWRlZXAgdGV4dC5zbGlkZXJ7XG4gIGZpbGw6IHJnYig3NywgMywgNjcpO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG46Om5nLWRlZXAgdGV4dC50b05leHR7XG4gIGZvbnQ6IDMwcHggc2Fucy1zZXJpZjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/computerScience/computerScience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/computerScience/computerScience.component.ts ***!
  \**************************************************************/
/*! exports provided: ComputerScienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerScienceComponent", function() { return ComputerScienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';




var ComputerScienceComponent = /** @class */ (function () {
    function ComputerScienceComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    ComputerScienceComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes1;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap1;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords1;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links1;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_4__.glossaries1;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_4__.gTexts1;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    ComputerScienceComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.nodesNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,5 250,30 80,100 0,160 250,450 500,450 1100,450 1050,200")
            .style("fill", "lightgreen")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['computer science']['choicetest']['true']) + parseInt(data['computer science']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['computer science']['choicetest']['true']) / (parseInt(data['computer science']['choicetest']['true']) + parseInt(data['computer science']['choicetest']['false']));
                }
                if ((parseInt(data['computer science']['blocktest']['total']['true']) + parseInt(data['computer science']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['computer science']['blocktest']['total']['true']) / (parseInt(data['computer science']['blocktest']['total']['true']) + parseInt(data['computer science']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.selectAll('rect.progress').remove();
                _this.svg.selectAll('text.progress').remove();
            }
        });
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/computerScience/modify1" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/computerScience/test1" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    ComputerScienceComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            //  console.log('this is my : ' + this.selectedNode );
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        }
        this.restart();
    };
    ComputerScienceComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    // refresh function
    ComputerScienceComponent.prototype.restart = function () {
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, 0, 'computer science');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        this.routerLink = buildMap[8];
        console.log(this.routerLink);
        this.router.navigate[this.routerLink];
    };
    ComputerScienceComponent.ctorParameters = function () { return [
        { type: _buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComputerScienceComponent.prototype, "graphContainer", void 0);
    ComputerScienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-computerScience',
            template: __webpack_require__(/*! raw-loader!./computerScience.component.html */ "./node_modules/raw-loader/index.js!./src/app/computerScience/computerScience.component.html"),
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]],
            styles: [__webpack_require__(/*! ./computerScience.component.css */ "./src/app/computerScience/computerScience.component.css")]
        }),
        __metadata("design:paramtypes", [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]])
    ], ComputerScienceComponent);
    return ComputerScienceComponent;
}());



/***/ }),

/***/ "./src/app/computerScience/modify1/modify1.component.css":
/*!***************************************************************!*\
  !*** ./src/app/computerScience/modify1/modify1.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHV0ZXJTY2llbmNlL21vZGlmeTEvbW9kaWZ5MS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCOztFQUlBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFHQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXB1dGVyU2NpZW5jZS9tb2RpZnkxL21vZGlmeTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGUge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZU5leHRNYXAge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOjpuZy1kZWVwIGNpcmNsZS5iYWxsIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCByZWN0LmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOjpuZy1kZWVwIHBhdGgubGluayB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgOjpuZy1kZWVwIHBhdGguZHJhZ0xpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIDo6bmctZGVlcCBwYXRoLnRlbXAge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIDo6bmctZGVlcCB0ZXh0e1xuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCB0ZXh0LmdUZXh0e1xuICAgIGZvbnQ6IDRweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cblxuXG4gIDo6bmctZGVlcCB0ZXh0LnRvTmV4dHtcbiAgICBmb250OiAzMHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBcbiAgOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/computerScience/modify1/modify1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/computerScience/modify1/modify1.component.ts ***!
  \**************************************************************/
/*! exports provided: Modify1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modify1Component", function() { return Modify1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modifyMap.service */ "./src/app/modifyMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';

// import example from '../assets/example.json';


var Modify1Component = /** @class */ (function () {
    function Modify1Component(modifyMapService, router) {
        this.modifyMapService = modifyMapService;
        this.router = router;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    Modify1Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodes1;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodesNextMap1;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_3__.linkwords1;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_3__.links1;
        // console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true, "id": null };
            link.id = temp[i].id;
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i].source);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_3__.glossaries1;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null, 'id': null };
            glossary.page = temp2[i].page;
            glossary.id = temp2[i].id;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_3__.gTexts1;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null, 'id': null };
            gText.page = temp3[i].page;
            gText.id = temp3[i].id;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    Modify1Component.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.modifyMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.modifyMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.circleNextMap = svgArray[7];
        this.toNextMapRect = svgArray[8];
        // this part works with normal html element
        // this.svg.append("foreignObject")
        // .attr("width", 800)
        // .attr("height", 400)
        // .append("xhtml:div")
        // .style("font", "14px 'Helvetica Neue'")
        // .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");
        //this part dosen't work with pdf-viewer
        // this.svg.append("foreignObject")
        // .attr('y',200)
        // .attr("width", 800)
        // .attr("height", 480)
        // .append("xhtml:pdf-viewer")
        // .style("display", "block")
        // .attr("src", this.pdfSrc)
        // // .attr('ng-reflect-src', 'https://cors-anywhere.herokuap')
        // .attr("render-text", true)
        // // .attr('ng-reflect-render-text',true)
        // .attr("page", "21")
        // // .attr('ng-reflect-page', '21')
        // // .attr('ng-reflect-zoom', '0.5')
        // // .attr('ng-reflect-show-all', false)
        // // .src(this.pdfSrc)
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Modify1Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        console.log('mousedown');
        if (this.svg.attr('clickOnNode') === 'false') {
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
            this.restart();
        }
        this.restart();
    };
    Modify1Component.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        this.svg.attr('clickOnNode', 'false');
    };
    Modify1Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Modify1Component.prototype.restart = function () {
        // console.log('restart');
        var _this = this;
        var offset = 0;
        var buildMap = this.modifyMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('foreignObject.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Modify1Component.ctorParameters = function () { return [
        { type: _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Modify1Component.prototype, "pdfViewers", void 0);
    Modify1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify1',
            template: __webpack_require__(/*! raw-loader!./modify1.component.html */ "./node_modules/raw-loader/index.js!./src/app/computerScience/modify1/modify1.component.html"),
            providers: [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"]],
            styles: [__webpack_require__(/*! ./modify1.component.css */ "./src/app/computerScience/modify1/modify1.component.css")]
        }),
        __metadata("design:paramtypes", [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Modify1Component);
    return Modify1Component;
}());



/***/ }),

/***/ "./src/app/computerScience/test1/test1.component.css":
/*!***********************************************************!*\
  !*** ./src/app/computerScience/test1/test1.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  \n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n  \n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHV0ZXJTY2llbmNlL3Rlc3QxL3Rlc3QxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7RUFDdEI7O0VBSUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUdBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcHV0ZXJTY2llbmNlL3Rlc3QxL3Rlc3QxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGUge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlTmV4dE1hcCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBjaXJjbGUuYmFsbCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCByZWN0LmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcGF0aC5saW5rIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBwYXRoLmRyYWdMaW5lIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBwYXRoLnRlbXAge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHRleHR7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgdGV4dC5nVGV4dHtcbiAgICBmb250OiA0cHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgXG4gIFxuICA6Om5nLWRlZXAgdGV4dC50b05leHR7XG4gICAgZm9udDogMzBweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICBcbiAgOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/computerScience/test1/test1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/computerScience/test1/test1.component.ts ***!
  \**********************************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testMap.service */ "./src/app/testMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Test1Component = /** @class */ (function () {
    function Test1Component(testMapService, router) {
        this.testMapService = testMapService;
        this.router = router;
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.randomItem = [];
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
    }
    Test1Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes1;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap1;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords1;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links1;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        // console.log(this.nodes[0]);
    };
    Test1Component.prototype.ngAfterContentInit = function () {
        var _this = this;
        var svgArray = this.testMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.circleNextMap = svgArray[4];
        this.toNextMapRect = svgArray[5];
        this.randomItem = this.testMapService.random_item(this.nodes.length);
        for (var i = 0; i < this.randomItem.length; i++) {
            this.svg.append('foreignObject')
                .attr('width', 110)
                .attr('height', 70)
                .attr('x', this.nodes[this.randomItem[i]].x - 55)
                .attr('y', this.nodes[this.randomItem[i]].y - 8)
                .append('xhtml:input')
                .attr('type', 'text')
                .attr('class', 'form-control')
                .style('height', '10px')
                .style('font-size', '1px')
                .attr('id', i.toString());
        }
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Test1Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    Test1Component.prototype.mouseup = function (source) {
        console.log('mouseup');
        this.svg.classed('active', false);
    };
    Test1Component.prototype.submitAnswer = function () {
        var resultAnswer = {};
        for (var i = 0; i < this.randomItem.length; i++) {
            if (document.getElementById(i.toString()).value === this.nodes[this.randomItem[i]].text) {
                resultAnswer['node' + this.randomItem[i].toString()] = "true";
                document.getElementById(i.toString()).style.backgroundColor = 'aquamarine';
            }
            else {
                resultAnswer['node' + this.randomItem[i].toString()] = "false";
                document.getElementById(i.toString()).style.backgroundColor = 'lightSalmon';
            }
        }
        for (var key in resultAnswer) {
            console.log(resultAnswer[key]);
        }
        document.getElementById('submitBlock').disabled = true;
        this.testMapService.callServer('computer science', resultAnswer, "blocktest");
    };
    Test1Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Test1Component.prototype.restart = function () {
        var _this = this;
        var offset = 0;
        var buildMap = this.testMapService.buildMicroMap(this.svg, this.path, this.links, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.linkword = buildMap[3];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[4];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[5];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('rect.button').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Test1Component.ctorParameters = function () { return [
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! raw-loader!./test1.component.html */ "./node_modules/raw-loader/index.js!./src/app/computerScience/test1/test1.component.html"),
            providers: [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"]],
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/computerScience/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/data.json":
/*!***************************!*\
  !*** ./src/app/data.json ***!
  \***************************/
/*! exports provided: nodes1, linkwords1, links1, nodesNextMap1, glossaries1, gTexts1, nodes2, linkwords2, links2, nodesNextMap2, glossaries2, gTexts2, nodes3, linkwords3, links3, nodesNextMap3, glossaries3, gTexts3, default */
/***/ (function(module) {

module.exports = {"nodes1":[{"id":0,"text":"computer science","x":300,"y":70,"reflexive":true,"level":1},{"id":1,"text":"algorithm","x":210,"y":140,"reflexive":true,"level":1},{"id":2,"text":"programming","x":514,"y":177,"reflexive":true,"level":1},{"id":3,"text":"problem solving","x":120,"y":210,"reflexive":true,"level":2},{"id":4,"text":"low-level language","x":324,"y":249,"reflexive":true,"level":2},{"id":5,"text":"high-level language","x":526,"y":256,"reflexive":true,"level":2},{"id":6,"text":"debugging","x":792,"y":235,"reflexive":true,"level":2},{"id":7,"text":"machine code","x":301,"y":334,"reflexive":true,"level":2},{"id":8,"text":"source code","x":582,"y":324,"reflexive":true,"level":2},{"id":9,"text":"bug","x":806,"y":311,"reflexive":true,"level":2},{"id":10,"text":"logic error","x":756,"y":408,"reflexive":true,"level":3},{"id":11,"text":"compile-time error","x":1000,"y":346,"reflexive":true,"level":3},{"id":12,"text":"run-time error","x":904,"y":404,"reflexive":true,"level":3},{"id":13,"text":"interpreter","x":376,"y":417,"reflexive":true,"level":3},{"id":14,"text":"compiler","x":609,"y":412,"reflexive":true,"level":3}],"linkwords1":[{"id":0,"text":"is science of","x":255,"y":105},{"id":1,"text":"for","x":165,"y":175},{"id":2,"text":"is about","x":414,"y":126},{"id":3,"text":"has","x":441,"y":202},{"id":4,"text":"uses","x":638,"y":203},{"id":5,"text":"is called","x":314,"y":299},{"id":6,"text":"is called","x":544,"y":293},{"id":7,"text":"to find","x":802,"y":274},{"id":8,"text":"in","x":656,"y":316},{"id":9,"text":"includes","x":808,"y":358},{"id":10,"text":"into","x":338,"y":387},{"id":11,"text":"is translated with","x":565,"y":367}],"links1":[{"id":"a0 b0","source":"nodes[0]","target":"linkwords[0]"},{"id":"b0 a1","source":"linkwords[0]","target":"nodes[1]"},{"id":"a1 b1","source":"nodes[1]","target":"linkwords[1]"},{"id":"b1 a3","source":"linkwords[1]","target":"nodes[3]"},{"id":"a0 b2","source":"nodes[0]","target":"linkwords[2]"},{"id":"b2 a2","source":"linkwords[2]","target":"nodes[2]"},{"id":"a2 b3","source":"nodes[2]","target":"linkwords[3]"},{"id":"b3 a4","source":"linkwords[3]","target":"nodes[4]"},{"id":"b3 a5","source":"linkwords[3]","target":"nodes[5]"},{"id":"a2 b4","source":"nodes[2]","target":"linkwords[4]"},{"id":"b4 a6","source":"linkwords[4]","target":"nodes[6]"},{"id":"a4 b5","source":"nodes[4]","target":"linkwords[5]"},{"id":"b5 a7","source":"linkwords[5]","target":"nodes[7]"},{"id":"a5 b6","source":"nodes[5]","target":"linkwords[6]"},{"id":"b6 a8","source":"linkwords[6]","target":"nodes[8]"},{"id":"a6 b7","source":"nodes[6]","target":"linkwords[7]"},{"id":"b7 a9","source":"linkwords[7]","target":"nodes[9]"},{"id":"a9 b8","source":"nodes[9]","target":"linkwords[8]"},{"id":"b8 a8","source":"linkwords[8]","target":"nodes[8]"},{"id":"a9 b9","source":"nodes[9]","target":"linkwords[9]"},{"id":"b9 a10","source":"linkwords[9]","target":"nodes[10]"},{"id":"b9 a11","source":"linkwords[9]","target":"nodes[11]"},{"id":"b9 a12","source":"linkwords[9]","target":"nodes[12]"},{"id":"a13 b10","source":"nodes[13]","target":"linkwords[10]"},{"id":"b10 a7","source":"linkwords[10]","target":"nodes[7]"},{"id":"a8 b11","source":"nodes[8]","target":"linkwords[11]"},{"id":"b11 a13","source":"linkwords[11]","target":"nodes[13]"},{"id":"b11 a14","source":"linkwords[11]","target":"nodes[14]"}],"nodesNextMap1":[],"glossaries1":[{"id":"0","target":"nodes[0]","hidden":true,"width":60,"height":80,"page":"2"},{"id":"1","target":"nodes[1]","hidden":true,"width":60,"height":80,"page":"2"},{"id":"2","target":"nodes[2]","hidden":true,"width":60,"height":80,"page":"2"},{"id":"3","target":"nodes[3]","hidden":true,"width":60,"height":80,"page":"1"},{"id":"4","target":"nodes[4]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"5","target":"nodes[5]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"6","target":"nodes[6]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"7","target":"nodes[7]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"8","target":"nodes[8]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"9","target":"nodes[9]","hidden":true,"width":60,"height":80,"page":"11"},{"id":"10","target":"nodes[10]","hidden":true,"width":60,"height":80,"page":"27"},{"id":"11","target":"nodes[11]","hidden":true,"width":60,"height":80,"page":"25"},{"id":"12","target":"nodes[12]","hidden":true,"width":60,"height":80,"page":"27"},{"id":"13","target":"nodes[13]","hidden":true,"width":60,"height":80,"page":"3"},{"id":"14","target":"nodes[14]","hidden":true,"width":60,"height":80,"page":"3"}],"gTexts1":[{"id":"0","text":"Computer science is the science of algorithms, including their discovery and analysis. ","target":"nodes[0]","hidden":true,"page":"2"},{"id":"1","text":"An algorithm is a sequence of steps that specifies how to solve a problem. ","target":"nodes[1]","hidden":true,"page":"2"},{"id":"2","text":"So you can think of programming as the process of breaking down a large, complex task into smaller and smaller subtasks. ","target":"nodes[2]","hidden":true,"page":"2"},{"id":"3","text":"The single most important skill for a computer scientist is problem solving. It involves the ability to formulate problems, think creatively about solutions, and express solutions clearly and accurately. ","target":"nodes[3]","hidden":true,"page":"1"},{"id":"4","text":"low-level language: A programming language that is designed to be easy for a computer to run. Also called “machine language” or “assembly language”. ","target":"nodes[4]","hidden":true,"page":"11"},{"id":"5","text":"high-level language: A programming language that is designed to be easy for humans to read and write. ","target":"nodes[5]","hidden":true,"page":"11"},{"id":"6","text":"debugging: The process of finding and removing errors. ","target":"nodes[6]","hidden":true,"page":"11"},{"id":"7","text":"low-level language: A programming language that is designed to be easy for a computer to run. Also called “machine language” or “assembly language”. ","target":"nodes[7]","hidden":true,"page":"11"},{"id":"8","text":"source code: A program in a high-level language, before being compiled. ","target":"nodes[8]","hidden":true,"page":"11"},{"id":"9","text":"bug: An error in a program. ","target":"nodes[9]","hidden":true,"page":"11"},{"id":"10","text":"The third type of error is the logic error. If your program has a logic error, it will compile and run without generating error messages, but it will not do the right thing. ","target":"nodes[10]","hidden":true,"page":"27"},{"id":"11","text":"Compile-time errors occur when you violate the syntax rules of the Java language. ","target":"nodes[11]","hidden":true,"page":"25"},{"id":"12","text":"The second type of error is a run-time error, so-called because it does not appear until after the program has started running. ","target":"nodes[12]","hidden":true,"page":"27"},{"id":"13","text":"An interpreter reads a high-level program and executes it, meaning that it does what the program says. It processes the program a little at a time, alternately reading lines and performing computations. ","target":"nodes[13]","hidden":true,"page":"3"},{"id":"14","text":"In contrast, a compiler reads the entire program and translates it completely before the program starts running. ","target":"nodes[14]","hidden":true,"page":"3"}],"nodes2":[{"id":0,"text":"program","x":400,"y":40,"reflexive":true,"level":1},{"id":1,"text":"statement","x":400,"y":140,"reflexive":true,"level":1},{"id":2,"text":"conditional statement","x":234,"y":147,"reflexive":true,"level":1},{"id":3,"text":"chaining","x":88,"y":70,"reflexive":true,"level":2},{"id":4,"text":"nesting","x":58,"y":117,"reflexive":true,"level":2},{"id":5,"text":"relational operator","x":64,"y":177,"reflexive":true,"level":2},{"id":6,"text":"logical operator","x":228,"y":194,"reflexive":true,"level":2},{"id":7,"text":"assignment","x":258,"y":251,"reflexive":true,"level":2},{"id":8,"text":"declaration","x":390,"y":250,"reflexive":true,"level":2},{"id":9,"text":"initialization","x":518,"y":250,"reflexive":true,"level":2},{"id":10,"text":"print statement","x":933,"y":220,"reflexive":true,"level":2},{"id":11,"text":"input","x":812,"y":290,"reflexive":true,"level":2},{"id":12,"text":"output","x":927,"y":289,"reflexive":true,"level":2},{"id":13,"text":"Scanner class","x":820,"y":396,"reflexive":true,"level":3},{"id":14,"text":"System class","x":980,"y":390,"reflexive":true,"level":3},{"id":15,"text":"loop","x":639,"y":331,"reflexive":true,"level":2},{"id":16,"text":"loop body","x":126,"y":283,"reflexive":true,"level":3},{"id":17,"text":"loop variable","x":173,"y":361,"reflexive":true,"level":3},{"id":18,"text":"infinite loop","x":280,"y":418,"reflexive":true,"level":3},{"id":19,"text":"pretest loop","x":438,"y":432,"reflexive":true,"level":3},{"id":20,"text":"posttest loop","x":592,"y":424,"reflexive":true,"level":3}],"linkwords2":[{"id":0,"text":"has","x":400,"y":100},{"id":1,"text":"put","x":350,"y":100},{"id":2,"text":"has type","x":400,"y":190},{"id":3,"text":"has","x":150,"y":102},{"id":4,"text":"may use","x":151,"y":130},{"id":5,"text":"can have","x":160,"y":165},{"id":6,"text":"put first","x":508,"y":140},{"id":7,"text":"has","x":750,"y":185},{"id":8,"text":"create","x":1162,"y":156},{"id":9,"text":"shows","x":934,"y":253},{"id":10,"text":"by","x":828,"y":341},{"id":11,"text":"by","x":906,"y":328},{"id":12,"text":"contains","x":382,"y":327},{"id":13,"text":"has type","x":498,"y":365},{"id":14,"text":"can be repeated in","x":659,"y":273},{"id":15,"text":"into","x":1450,"y":160},{"id":16,"text":"declared with final type","x":1450,"y":300},{"id":17,"text":"has type","x":1600,"y":340}],"links2":[{"id":"a0 b0","source":"nodes[0]","target":"linkwords[0]"},{"id":"a0 b7","source":"nodes[0]","target":"linkwords[7]"},{"id":"b0 a1","source":"linkwords[0]","target":"nodes[1]"},{"id":"a1 b2","source":"nodes[1]","target":"linkwords[2]"},{"id":"b2 a2","source":"linkwords[2]","target":"nodes[2]"},{"id":"b2 a7","source":"linkwords[2]","target":"nodes[7]"},{"id":"b2 a8","source":"linkwords[2]","target":"nodes[8]"},{"id":"b2 a9","source":"linkwords[2]","target":"nodes[9]"},{"id":"b2 a10","source":"linkwords[2]","target":"nodes[10]"},{"id":"a2 b3","source":"nodes[2]","target":"linkwords[3]"},{"id":"a2 b4","source":"nodes[2]","target":"linkwords[4]"},{"id":"a2 b5","source":"nodes[2]","target":"linkwords[5]"},{"id":"b3 a3","source":"linkwords[3]","target":"nodes[3]"},{"id":"b4 a4","source":"linkwords[4]","target":"nodes[4]"},{"id":"b5 a5","source":"linkwords[5]","target":"nodes[5]"},{"id":"b5 a6","source":"linkwords[5]","target":"nodes[6]"},{"id":"a7 b1","source":"nodes[7]","target":"linkwords[1]"},{"id":"a8 b6","source":"nodes[8]","target":"linkwords[6]"},{"id":"a9 b8","source":"nodes[9]","target":"linkwords[8]"},{"id":"b7 a11","source":"linkwords[7]","target":"nodes[11]"},{"id":"b7 a12","source":"linkwords[7]","target":"nodes[12]"},{"id":"a12 b9","source":"nodes[12]","target":"linkwords[9]"},{"id":"b9 a10","source":"linkwords[9]","target":"nodes[10]"},{"id":"a11 b10","source":"nodes[11]","target":"linkwords[10]"},{"id":"b10 a13","source":"linkwords[10]","target":"nodes[13]"},{"id":"a12 b11","source":"nodes[12]","target":"linkwords[11]"},{"id":"b11 a14","source":"linkwords[11]","target":"nodes[14]"},{"id":"a1 b14","source":"nodes[1]","target":"linkwords[14]"},{"id":"b14 a15","source":"linkwords[14]","target":"nodes[15]"},{"id":"a15 b12","source":"nodes[15]","target":"linkwords[12]"},{"id":"a15 b13","source":"nodes[15]","target":"linkwords[13]"},{"id":"b12 a16","source":"linkwords[12]","target":"nodes[16]"},{"id":"b12 a17","source":"linkwords[12]","target":"nodes[17]"},{"id":"b13 a18","source":"linkwords[13]","target":"nodes[18]"},{"id":"b13 a19","source":"linkwords[13]","target":"nodes[19]"},{"id":"b13 a20","source":"linkwords[13]","target":"nodes[20]"},{"id":"b1 c0","source":"linkwords[1]","target":"nodesNextMap[0]"},{"id":"b6 c0","source":"linkwords[6]","target":"nodesNextMap[0]"},{"id":"b8 c1","source":"linkwords[8]","target":"nodesNextMap[1]"},{"id":"c0 b15","source":"nodesNextMap[0]","target":"linkwords[15]"},{"id":"b15 c1","source":"linkwords[15]","target":"nodesNextMap[1]"},{"id":"c1 b16","source":"nodesNextMap[1]","target":"linkwords[16]"},{"id":"b16 c2","source":"linkwords[16]","target":"nodesNextMap[2]"},{"id":"c1 b17","source":"nodesNextMap[1]","target":"linkwords[17]"},{"id":"b17 c3","source":"linkwords[17]","target":"nodesNextMap[3]"},{"id":"b17 c4","source":"linkwords[17]","target":"nodesNextMap[4]"},{"id":"b17 c5","source":"linkwords[17]","target":"nodesNextMap[5]"}],"nodesNextMap2":[{"id":0,"text":"value","x":1170,"y":100,"reflexive":true},{"id":1,"text":"variable","x":1685,"y":300,"reflexive":true},{"id":2,"text":"constant","x":1200,"y":300,"reflexive":true},{"id":3,"text":"instance variable","x":1480,"y":380,"reflexive":true},{"id":4,"text":"local variable","x":1600,"y":395,"reflexive":true},{"id":5,"text":"class variable","x":1700,"y":380,"reflexive":true}],"glossaries2":[{"id":"0","target":"nodes[0]","hidden":true,"width":60,"height":80,"page":"1"},{"id":"1","target":"nodes[1]","hidden":true,"width":60,"height":80,"page":"5"},{"id":"2","target":"nodes[2]","hidden":true,"width":60,"height":80,"page":"69"},{"id":"3","target":"nodes[3]","hidden":true,"width":60,"height":80,"page":"71"},{"id":"4","target":"nodes[4]","hidden":true,"width":60,"height":80,"page":"71"},{"id":"5","target":"nodes[5]","hidden":true,"width":60,"height":80,"page":"67"},{"id":"6","target":"nodes[6]","hidden":true,"width":60,"height":80,"page":"68"},{"id":"7","target":"nodes[7]","hidden":true,"width":60,"height":80,"page":"16"},{"id":"8","target":"nodes[8]","hidden":true,"width":60,"height":80,"page":"15"},{"id":"9","target":"nodes[9]","hidden":true,"width":60,"height":80,"page":"28"},{"id":"10","target":"nodes[10]","hidden":true,"width":60,"height":80,"page":"6"},{"id":"11","target":"nodes[11]","hidden":true,"width":60,"height":80,"page":"33"},{"id":"12","target":"nodes[12]","hidden":true,"width":60,"height":80,"page":"33"},{"id":"13","target":"nodes[13]","hidden":true,"width":60,"height":80,"page":"34"},{"id":"14","target":"nodes[14]","hidden":true,"width":60,"height":80,"page":"33"},{"id":"15","target":"nodes[15]","hidden":true,"width":60,"height":80,"page":"106"},{"id":"16","target":"nodes[16]","hidden":true,"width":60,"height":80,"page":"106"},{"id":"17","target":"nodes[17]","hidden":true,"width":60,"height":80,"page":"110"},{"id":"18","target":"nodes[18]","hidden":true,"width":60,"height":80,"page":"106"},{"id":"19","target":"nodes[19]","hidden":true,"width":60,"height":80,"page":"115"},{"id":"20","target":"nodes[20]","hidden":true,"width":60,"height":80,"page":"116"}],"gTexts2":[{"id":"0","text":"A program is a sequence of instructions that specifies how to perform a computation. ","target":"nodes[0]","hidden":true,"page":"1"},{"id":"1","text":"A statement is a line of code that performs a basic operation.","target":"nodes[1]","hidden":true,"page":"5"},{"id":"2","text":"To write useful programs, we almost always need to check conditions and react accordingly. Conditional statements give us this ability. The simplest conditional statement in Java is the if statement.","target":"nodes[2]","hidden":true,"page":"69"},{"id":"3","text":"Sometimes you want to check related conditions and choose one of several actions. One way to do this is by chaining a series of if and else statements.","target":"nodes[3]","hidden":true,"page":"71"},{"id":"4","text":"In addition to chaining, you can also make complex decisions by nesting one conditional statement inside another.","target":"nodes[4]","hidden":true,"page":"71"},{"id":"5","text":"Relational operators are used to check conditions like whether two values are equal, or whether one is greater than the other.","target":"nodes[5]","hidden":true,"page":"67"},{"id":"6","text":"Java has three logical operators: &&, ||, and !, which respectively stand for and, or, and not. The results of these operators are similar to their meanings in English.","target":"nodes[6]","hidden":true,"page":"68"},{"id":"7","text":"Now that we have declared variables, we want to use them to store values. We do that with an assignment statement.","target":"nodes[7]","hidden":true,"page":"16"},{"id":"8","text":"This statement is a declaration, because it declares that the variable named message has the type String.","target":"nodes[8]","hidden":true,"page":"15"},{"id":"9","text":"initialize: To assign a variable for the first time.","target":"nodes[9]","hidden":true,"page":"28"},{"id":"10","text":"In the hello world program, this line is a print statement that displays a message on the screen.","target":"nodes[10]","hidden":true,"page":"6"},{"id":"11","text":"input: Get data from the keyboard, a file, a sensor, or some other device.","target":"nodes[11]","hidden":true,"page":"33"},{"id":"12","text":"output: Display data on the screen, or send data to a file or other device.","target":"nodes[12]","hidden":true,"page":"33"},{"id":"13","text":"For example, Scanner is a class that provides methods for inputting words, numbers, and other data.","target":"nodes[13]","hidden":true,"page":"34"},{"id":"14","text":"System is a class that provides methods related to the “system” or environment where programs run.t","target":"nodes[14]","hidden":true,"page":"33"},{"id":"15","text":"This type of flow is called a loop, because the last step loops back around to the first.","target":"nodes[15]","hidden":true,"page":"106"},{"id":"16","text":"The statements in braces are called the body.","target":"nodes[16]","hidden":true,"page":"106"},{"id":"17","text":"The first line initializes a variable named i, which is going to act as a loop variable","target":"nodes[17]","hidden":true,"page":"110"},{"id":"18","text":"Otherwise the loop will repeat forever, which is called an infinite loop.","target":"nodes[18]","hidden":true,"page":"106"},{"id":"19","text":"The while and for statements are pretest loops; that is, they test the condition first and at the beginning of each pass through the loop.","target":"nodes[19]","hidden":true,"page":"115"},{"id":"20","text":"Java also provides a posttest loop: the do-while statement. This type of loop is useful when you need to run the body of the loop at least once.","target":"nodes[20]","hidden":true,"page":"116"}],"nodes3":[{"id":0,"text":"value","x":270,"y":100,"reflexive":true,"level":1},{"id":1,"text":"variable","x":785,"y":300,"reflexive":true,"level":1},{"id":2,"text":"constant","x":300,"y":300,"reflexive":true,"level":2},{"id":3,"text":"instance variable","x":580,"y":380,"reflexive":true,"level":3},{"id":4,"text":"local variable","x":700,"y":395,"reflexive":true,"level":3},{"id":5,"text":"class variable","x":800,"y":380,"reflexive":true,"level":3}],"linkwords3":[{"id":0,"text":"into","x":550,"y":160},{"id":1,"text":"declared with final type","x":550,"y":300},{"id":2,"text":"has type","x":700,"y":340},{"id":3,"text":"put","x":-550,"y":100},{"id":4,"text":"put first","x":-392,"y":140},{"id":5,"text":"create","x":262,"y":156},{"id":6,"text":"shows","x":34,"y":253},{"id":7,"text":"by","x":6,"y":328}],"links3":[{"id":"a0 b0","source":"nodes[0]","target":"linkwords[0]"},{"id":"b0 a1","source":"linkwords[0]","target":"nodes[1]"},{"id":"a1 b1","source":"nodes[1]","target":"linkwords[1]"},{"id":"b1 a2","source":"linkwords[1]","target":"nodes[2]"},{"id":"a1 b2","source":"nodes[1]","target":"linkwords[2]"},{"id":"b2 a3","source":"linkwords[2]","target":"nodes[3]"},{"id":"b2 a4","source":"linkwords[2]","target":"nodes[4]"},{"id":"b2 a5","source":"linkwords[2]","target":"nodes[5]"},{"id":"c0 b5","source":"nodesNextMap[0]","target":"linkwords[5]"},{"id":"b5 a1","source":"linkwords[5]","target":"nodes[1]"},{"id":"b3 a0","source":"linkwords[3]","target":"nodes[0]"},{"id":"b4 a0","source":"linkwords[4]","target":"nodes[0]"},{"id":"c1 b6","source":"nodesNextMap[1]","target":"linkwords[6]"},{"id":"b6 c2","source":"linkwords[6]","target":"nodesNextMap[2]"},{"id":"c2 b7","source":"nodesNextMap[2]","target":"linkwords[7]"},{"id":"b7 c3","source":"linkwords[7]","target":"nodesNextMap[3]"}],"nodesNextMap3":[{"id":0,"text":"initialization","x":-482,"y":250,"reflexive":true},{"id":1,"text":"print statement","x":33,"y":220,"reflexive":true},{"id":2,"text":"output","x":27,"y":289,"reflexive":true},{"id":3,"text":"System class","x":80,"y":390,"reflexive":true}],"glossaries3":[{"id":"0","target":"nodes[0]","hidden":true,"width":60,"height":80,"page":"15"},{"id":"1","target":"nodes[1]","hidden":true,"width":60,"height":80,"page":"15"},{"id":"2","target":"nodes[2]","hidden":true,"width":60,"height":80,"page":"38"},{"id":"3","target":"nodes[3]","hidden":true,"width":60,"height":80,"page":"172"},{"id":"4","target":"nodes[4]","hidden":true,"width":60,"height":80,"page":"56"},{"id":"5","target":"nodes[5]","hidden":true,"width":60,"height":80,"page":"193"}],"gTexts3":[{"id":"0","text":"One of the most powerful features of a programming language is the ability to define and manipulate variables. A variable is a named location that stores a value.","target":"nodes[0]","hidden":true,"page":"15"},{"id":"1","text":"Values may be numbers, text, images, sounds, and other types of data. To store a value, you first have to declare a variable.","target":"nodes[1]","hidden":true,"page":"15"},{"id":"2","text":"Variables declared as final are called constants. By convention, names for constants are all uppercase, with the underscore character (_) between words.  ","target":"nodes[2]","hidden":true,"page":"38"},{"id":"3","text":"Attributes are also called instance variables, because each instance has its own variables (as opposed to class variables, coming up in Section 12.3). ","target":"nodes[3]","hidden":true,"page":"172"},{"id":"4","text":"Because variables only exist inside the methods where they are defined, they are often called local variables. ","target":"nodes[4]","hidden":true,"page":"56"},{"id":"5","text":"Like instance variables, class variables are defined in a class definition, before the method definitions. Butthey are identified by the keyword static. ","target":"nodes[5]","hidden":true,"page":"193"}]};

/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* The auth guard is used to prevent unauthenticated users from accessing restricted routes,
 * in this example it's used in app.routing.ts to protect the home page route.
 *
 *
 *
 * NOTE: While technically it's possible to bypass this client side authentication check by
 * manually adding a 'currentUser' object to local storage using browser dev tools, this would
 * only give access to the client side routes/components. This bypass will not work with real
 * backend system, because a valid authentication token (JWT) is required.
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* The Error Interceptor intercepts http responses from the api to check if there were any errors.
 * If there is a 401 Unauthorized response the user is automatically logged out of the application,
 * all other errors are re-thrown up to the calling service so an alert can be displayed to the user.
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/fake-backend.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/fake-backend.ts ***!
  \*****************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* The fake backend provider enables the example to run without a backend / backendless, it uses
 * HTML5 local storage for storing registered user data and provides fake implementations for authentication and CRUD methods,
 * these would be handled by a real api and database in a production application
 */
// array in local storage for registered users
var users = JSON.parse(localStorage.getItem('users')) || [];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            // check there is a user
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                token: 'fake-jwt-token'
            });
        }
        function register() {
            var user = body;
            // uniqueness check of username
            if (users.find(function (x) { return x.username === user.username; })) {
                return error('Username "' + user.username + '" is already taken');
            }
            // give users an id to store them in JSON
            user.id = users.length ? Math.max.apply(Math, users.map(function (x) { return x.id; })) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            // successfull register
            return ok();
        }
        function getUsers() {
            // if not registered and logged in, limit its routes
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            // if not registered and logged in, limit its routes
            users = users.filter(function (x) { return x.id !== idFromUrl(); });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* The JWT Interceptor intercepts http requests from the application to add a JWT auth token
 * to the Authorization header if the user is logged in.
 */
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: rgb(0, 0, 0);\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgcGF0aC5saW5rIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogcmdiKDAsIDAsIDApO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIDo6bmctZGVlcCB0ZXh0e1xuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCB0ZXh0LmdUZXh0e1xuICAgIGZvbnQ6IDRweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIH1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 570;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [
            { id: 0, text: 'java', x: 300, y: 70, reflexive: false },
            { id: 1, text: 'computer science', x: 150, y: 100, reflexive: false },
            { id: 2, text: 'program', x: 250, y: 300, reflexive: false },
            { id: 3, text: 'variable', x: 350, y: 275, reflexive: false },
            { id: 4, text: 'primitive type', x: 430, y: 240, reflexive: false },
            { id: 5, text: 'object', x: 520, y: 180, reflexive: false },
            { id: 6, text: 'class', x: 500, y: 120, reflexive: false },
            { id: 7, text: 'method', x: 520, y: 50, reflexive: false },
        ];
        // store the links
        this.links = [
            { source: this.nodes[0], target: this.nodes[1], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[2], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[3], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[4], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[5], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[6], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[7], left: false, right: true },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var rect = this.graphContainer.nativeElement.getBoundingClientRect();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#graphContainer')
            .attr('oncontextmenu', 'return false;')
            .attr('width', this.width)
            .attr('height', this.height);
        // arrow styles
        this.svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        this.svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        this.path = this.svg.append('svg:g').selectAll('path');
        this.circle = this.svg.append('svg:g').selectAll('g');
        this.info = this.svg.append('svg:g').selectAll('rect');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    HomeComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.clickOnNode === false) {
            // if (this.mousedownNode === this.selectedNode || this.mousedownNode === null) {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            console.log('this is my : ' + this.selectedNode);
            this.restart();
            // }
        }
        this.restart();
    };
    HomeComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        this.mousedownNode = null;
        this.mouseupNode = null;
        this.mousedownLink = null;
        this.clickOnNode = false;
        // remove all white rectangulars when the scale is 1
        if (this.k === 1) {
            this.svg.selectAll('rect').remove();
        }
    };
    HomeComponent.prototype.toMicro = function (id) {
        this.svg.selectAll('ellipse').remove();
        this.svg.selectAll('path').remove();
        this.svg.selectAll('text').remove();
        if (id === 1) {
            this.router.navigate(['/computerScience']);
        }
        else if (id === 2) {
            this.router.navigate(['/program']);
        }
        else if (id === 3) {
            this.router.navigate(['/variable']);
        }
        else if (id === 4) {
            this.router.navigate(['/primitiveType']);
        }
        else if (id === 5) {
            this.router.navigate(['/object']);
        }
        // this.router.navigate(['/page'+id]);
        //  this.router.navigate(['test/singleChoice']);
        // this.router.navigate(['/micro-basic']);
    };
    // refresh function
    HomeComponent.prototype.restart = function () {
        var _this = this;
        // bind the paths with data
        this.path = this.path.data(this.links);
        // bind the white rectangulars with data
        // this.info = this.info.data(this.infos);
        this.path.exit().remove();
        // create paths
        this.path = this.path
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', function (d) {
            var deltaX = d.target.x - d.source.x;
            var deltaY = d.target.y - d.source.y;
            var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var normX = deltaX / dist;
            var normY = deltaY / dist;
            var xy = Math.abs(deltaX / deltaY);
            var sourcePadding = 0;
            var targetPadding = 0;
            if (Math.abs(d.source.x - d.target.x) > 10 * Math.abs(d.source.y - d.target.y) || Math.abs(d.source.x - d.target.x) === 10 * Math.abs(d.source.y - d.target.y)) {
                targetPadding = d.right ? 27 - 0.25 * (2 - xy) : 17 - 0.25 * (2 - xy);
                // targetPadding = d.right ? 27-800000*(2-xy)*Math.pow((dist/2310),5) : 17-400000*(2-xy)*Math.pow((dist/2310),5);
            }
            else if (Math.abs(d.source.x - d.target.x) > 3 * Math.abs(d.source.y - d.target.y) || (Math.abs(d.source.x - d.target.x) === 3 * Math.abs(d.source.y - d.target.y))) {
                targetPadding = d.right ? 27 - 0.8 * (2 - xy) : 17 - 0.8 * (2 - xy);
            }
            else if (Math.abs(d.source.x - d.target.x) < 3 * Math.abs(d.source.y - d.target.y)) {
                targetPadding = d.right ? 27 - 4 * (2 - xy) : 17 - 2 * (2 - xy);
            }
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + d.source.x + "," + d.source.y + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(this.path);
        this.info.exit().remove();
        this.info = this.info
            .enter()
            .append('svg:rect')
            .attr('class', 'info')
            .attr('x', function (d) { return d.target.x; })
            .attr('y', function (d) { return d.target.y; })
            .attr('fill', 'white')
            .attr('width', '60')
            .attr('height', '80')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; });
        // bind the circle with data
        this.circle = this.circle.data(this.nodes, function (d) { return d.id; });
        // create ellipses
        this.circle.selectAll('ellipse')
            .style('fill', function (d) { return (d === _this.selectedNode) ? d3__WEBPACK_IMPORTED_MODULE_1__["rgb"](_this.colors(d.id)).brighter().toString() : _this.colors(d.id); })
            .style('stroke', function (d) { return (d === _this.selectedNode) ? 'black' : 'white'; });
        this.circle.exit().remove();
        // for each ellipse create a g element
        var g = this.circle.enter().append('svg:g');
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return (d === _this.selectedNode) ? d3__WEBPACK_IMPORTED_MODULE_1__["rgb"](_this.colors(d.id)).brighter().toString() : _this.colors(d.id); })
            .style('stroke', function (d) { return (d === _this.selectedNode) ? 'black' : 'white'; })
            .on('mousedown', function (d) {
            // select node
            _this.mousedownNode = d;
            _this.selectedNode = (_this.mousedownNode === _this.selectedNode) ? null : _this.mousedownNode;
            // if click on the same node twice, focus and zoom will be reset
            _this.centerx = _this.centered !== d ? d.x : _this.width / 2;
            _this.centery = _this.centered !== d ? d.y : _this.height / 2;
            _this.k = _this.centered !== d ? 3 : 1;
            _this.centered = _this.centered !== d ? d : null;
            _this.clickOnNode = true;
            _this.svg.selectAll('rect').remove();
            _this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + _this.width * _this.k / 2 + ',' + _this.height * _this.k / 2 + ')scale(' + _this.k + ')translate(' + -_this.centerx + ',' + -_this.centery + ')');
            if (d.id <= 5) {
                setTimeout(function () { _this.toMicro(d.id); }, 700);
                // this.toMicro(d.id);
            }
        })
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'black'; })
                .style('stroke-width', '3px');
        })
            .on('mouseout', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'white'; })
                .style('stroke-width', '1.5px');
        });
        // create texts
        g.append('svg:text')
            .attr('class', 'text')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        this.circle = g.merge(this.circle);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "graphContainer", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/micro-map-basic/micro-map-basic.component.css":
/*!***************************************************************!*\
  !*** ./src/app/micro-map-basic/micro-map-basic.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  text {\n    font: 5px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm8tbWFwLWJhc2ljL21pY3JvLW1hcC1iYXNpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVDO0lBQ0Msb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL21pY3JvLW1hcC1iYXNpYy9taWNyby1tYXAtYmFzaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGUge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOjpuZy1kZWVwIHBhdGgubGluayB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgIHRleHQge1xuICAgIGZvbnQ6IDVweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/micro-map-basic/micro-map-basic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/micro-map-basic/micro-map-basic.component.ts ***!
  \**************************************************************/
/*! exports provided: MicroMapBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroMapBasicComponent", function() { return MicroMapBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MicroMapBasicComponent = /** @class */ (function () {
    function MicroMapBasicComponent() {
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 570;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        // store the nodes
        this.nodes = [
            { id: 0, text: 'computer science', x: 300, y: 70, reflexive: true },
            { id: 1, text: 'algorithm', x: 210, y: 140, reflexive: true },
            { id: 2, text: 'programming', x: 350, y: 160, reflexive: true },
            { id: 3, text: 'problem solving', x: 120, y: 210, reflexive: true },
            { id: 4, text: 'low-level language', x: 270, y: 230, reflexive: true },
            { id: 5, text: 'high-level language', x: 410, y: 230, reflexive: true },
            { id: 6, text: 'debugging', x: 480, y: 210, reflexive: true },
            { id: 7, text: 'machine code', x: 230, y: 300, reflexive: true },
            { id: 8, text: 'source code', x: 420, y: 300, reflexive: true },
            { id: 9, text: 'bug', x: 550, y: 260, reflexive: true },
            { id: 10, text: 'logic error', x: 510, y: 320, reflexive: true },
            { id: 11, text: 'compile-time error', x: 670, y: 320, reflexive: true },
            { id: 12, text: 'run-time error', x: 590, y: 320, reflexive: true },
            { id: 13, text: 'intepreter', x: 340, y: 360, reflexive: true },
            { id: 14, text: 'compiler', x: 480, y: 360, reflexive: true },
        ];
        // store the link words
        this.linkwords = [
            { id: 0, text: 'is science of', x: 255, y: 105, reflexive: false },
            { id: 1, text: 'for', x: 165, y: 175, reflexive: false },
            { id: 2, text: 'is about', x: 328, y: 120, reflexive: false },
            { id: 3, text: 'has', x: 350, y: 195, reflexive: false },
            { id: 4, text: 'uses', x: 415, y: 185, reflexive: false },
            { id: 5, text: 'is called', x: 250, y: 265, reflexive: false },
            { id: 6, text: 'is called', x: 415, y: 265, reflexive: false },
            { id: 7, text: 'to find', x: 515, y: 235, reflexive: false },
            { id: 8, text: 'in', x: 485, y: 280, reflexive: false },
            { id: 9, text: 'includes', x: 570, y: 290, reflexive: false },
            { id: 10, text: 'into', x: 285, y: 330, reflexive: false },
            { id: 11, text: 'is translated with', x: 410, y: 335, reflexive: false },
        ];
        // store the links
        this.links = [
            { source: this.nodes[0], target: this.linkwords[0], left: false, right: false },
            { source: this.linkwords[0], target: this.nodes[1], left: false, right: true },
            { source: this.nodes[1], target: this.linkwords[1], left: false, right: false },
            { source: this.linkwords[1], target: this.nodes[3], left: false, right: true },
            { source: this.nodes[0], target: this.linkwords[2], left: false, right: false },
            { source: this.linkwords[2], target: this.nodes[2], left: false, right: true },
            { source: this.nodes[2], target: this.linkwords[3], left: false, right: false },
            { source: this.linkwords[3], target: this.nodes[4], left: false, right: true },
            { source: this.linkwords[3], target: this.nodes[5], left: false, right: true },
            { source: this.nodes[2], target: this.linkwords[4], left: false, right: false },
            { source: this.linkwords[4], target: this.nodes[6], left: false, right: true },
            { source: this.nodes[4], target: this.linkwords[5], left: false, right: false },
            { source: this.linkwords[5], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[5], target: this.linkwords[6], left: false, right: false },
            { source: this.linkwords[6], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[6], target: this.linkwords[7], left: false, right: false },
            { source: this.linkwords[7], target: this.nodes[9], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[8], left: false, right: false },
            { source: this.linkwords[8], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[9], left: false, right: false },
            { source: this.linkwords[9], target: this.nodes[10], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[11], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[12], left: false, right: true },
            { source: this.nodes[13], target: this.linkwords[10], left: false, right: false },
            { source: this.linkwords[10], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[8], target: this.linkwords[11], left: false, right: false },
            { source: this.linkwords[11], target: this.nodes[13], left: false, right: true },
            { source: this.linkwords[11], target: this.nodes[14], left: false, right: true },
        ];
    }
    MicroMapBasicComponent.prototype.ngOnInit = function () {
    };
    MicroMapBasicComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#graphContainer')
            .attr('oncontextmenu', 'return false;')
            .attr('width', this.width)
            .attr('height', this.height);
        // arrow styles
        this.svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        this.svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        this.path = this.svg.append('svg:g').selectAll('path');
        this.circle = this.svg.append('svg:g').selectAll('g');
        this.linkword = this.svg.append('svg:g').selectAll('text');
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    MicroMapBasicComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    MicroMapBasicComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
    };
    // refresh function
    MicroMapBasicComponent.prototype.restart = function () {
        var _this = this;
        // bind the paths with data
        this.path = this.path.data(this.links);
        // bind the white rectangulars with data
        this.path.exit().remove();
        // create paths
        this.path = this.path
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', function (d) {
            var deltaX = d.target.x - d.source.x;
            var deltaY = d.target.y - d.source.y;
            var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var normX = deltaX / dist;
            var normY = deltaY / dist;
            var xy = Math.abs(deltaX / deltaY);
            var sourcePadding = 8;
            var targetPadding = 0;
            if (d.target.reflexive) {
                if (Math.abs(d.source.x - d.target.x) > 10 * Math.abs(d.source.y - d.target.y) || Math.abs(d.source.x - d.target.x) === 10 * Math.abs(d.source.y - d.target.y)) {
                    targetPadding = d.right ? 27 - 0.25 * (2 - xy) : 17 - 0.25 * (2 - xy);
                    // targetPadding = d.right ? 27-800000*(2-xy)*Math.pow((dist/2310),5) : 17-400000*(2-xy)*Math.pow((dist/2310),5);
                }
                else if (Math.abs(d.source.x - d.target.x) > 3 * Math.abs(d.source.y - d.target.y) || (Math.abs(d.source.x - d.target.x) === 3 * Math.abs(d.source.y - d.target.y))) {
                    targetPadding = d.right ? 27 - 0.8 * (2 - xy) : 17 - 0.8 * (2 - xy);
                }
                else if (Math.abs(d.source.x - d.target.x) < 3 * Math.abs(d.source.y - d.target.y)) {
                    targetPadding = d.right ? 27 - 4 * (2 - xy) : 17 - 2 * (2 - xy);
                }
            }
            else {
                targetPadding = 8;
            }
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(this.path);
        // bind the circle with data
        this.circle = this.circle.data(this.nodes, function (d) { return d.id; });
        // create ellipses
        this.circle.selectAll('ellipse')
            .style('fill', function (d) { return _this.colors(d.id); })
            .style('stroke', function (d) { return ('white'); });
        this.circle.exit().remove();
        // for each ellipse create a g element
        var g = this.circle.enter().append('svg:g');
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 25)
            .attr('ry', 15)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return _this.colors(d.id); })
            .style('stroke', function (d) { return 'white'; });
        // create texts
        g.append('svg:text')
            .attr('class', 'text')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        this.circle = g.merge(this.circle);
        // create link words
        this.linkword = this.linkword.data(this.linkwords, function (d) { return d.id; });
        this.linkword.exit().remove();
        // const g1 = this.linkword.enter().append('svg:g');
        this.linkword = this.linkword.enter()
            .append('svg:text')
            .attr('class', 'text')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MicroMapBasicComponent.prototype, "graphContainer", void 0);
    MicroMapBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-micro-map-basic',
            template: __webpack_require__(/*! raw-loader!./micro-map-basic.component.html */ "./node_modules/raw-loader/index.js!./src/app/micro-map-basic/micro-map-basic.component.html"),
            styles: [__webpack_require__(/*! ./micro-map-basic.component.css */ "./src/app/micro-map-basic/micro-map-basic.component.css")]
        })
    ], MicroMapBasicComponent);
    return MicroMapBasicComponent;
}());



/***/ }),

/***/ "./src/app/modifyMap.service.ts":
/*!**************************************!*\
  !*** ./src/app/modifyMap.service.ts ***!
  \**************************************/
/*! exports provided: ModifyMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyMapService", function() { return ModifyMapService; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModifyMapService = /** @class */ (function () {
    function ModifyMapService() {
    }
    // // store the numbers of ellipse, when create one new node then add one (ignore deleting)
    //   ellipseNumber: any;
    // wrap function for automatically breaking lines to fit the text field
    ModifyMapService.prototype.wrap = function (text, width) {
        text.each(function () {
            // let r = 0;
            var text = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this), words = text.text().split('').reverse(), word, line = [], lineNumber = 0, 
            // this should be set manually, otherwise problem when continuelly click on different nodes
            lineHeight = 5, 
            // lineHeight = text.node().getBoundingClientRect().height,
            x = +text.attr('x'), y = +text.attr('y'), tspan = text.text(null).append('tspan').attr('x', x).attr('y', y);
            while (word = words.pop()) {
                line.push(word);
                var dash = lineNumber > 0 ? '-' : '';
                tspan.text(dash + line.join(''));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(''));
                    line = [word];
                    tspan = text.append('tspan').attr('x', x).attr('y', ++lineNumber * lineHeight + y).text(word);
                }
            }
        });
    };
    ModifyMapService.prototype.removeNode = function (id, nodes, links, glossaries, gTexts) {
        var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
            return parseInt(a['id']) === id;
        }).nodes()[0];
        var x = ellipse['cx']['baseVal']['value'];
        var y = ellipse['cy']['baseVal']['value'];
        var text;
        for (var i = 0; i < nodes.length; i++) {
            if (parseInt(nodes[i]['id']) === id) {
                text = nodes[i]['text'];
            }
        }
        // remove connected links
        for (var i = 0; i < links.length; i++) {
            for (var t = 0; t < nodes.length; t++) {
                var nodeId = nodes[t]['id'];
                for (var j = 0; j < links.length; j++) {
                    if (links[j]['id'].split(' ')[0] === ('a' + nodeId)) {
                        links[j]['source'] = nodes[t];
                    }
                    else if (links[j]['id'].split(' ')[1] === ('a' + nodeId)) {
                        links[j]['target'] = nodes[t];
                    }
                    if ((links[j]['id'].split(' ')[0].includes('a')) && (links[j]['source']['id'] === id)
                        || (links[j]['id'].split(' ')[1].includes('a')) && (links[j]['target']['id'] === id)) {
                        links.splice(j, 1);
                    }
                }
            }
        }
        // remove node
        for (var i = 0; i < nodes.length; i++) {
            if (parseInt(nodes[i]['id']) === id) {
                nodes.splice(i, 1);
            }
        }
        // remove glossary and text conten in glossary
        for (var i = 0; i < glossaries.length; i++) {
            if (parseInt(glossaries[i]['id']) === id) {
                glossaries.splice(i, 1);
            }
        }
        for (var i = 0; i < gTexts.length; i++) {
            if (parseInt(gTexts[i]['id']) === id) {
                gTexts.splice(i, 1);
            }
        }
        console.log(gTexts);
        console.log(glossaries);
        console.log(nodes);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
    };
    ModifyMapService.prototype.modifyNode = function (id, nodes, gTexts, glossaries) {
        var _this = this;
        var x;
        var y;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i]['id'] === id) {
                x = parseInt(nodes[i]['x']);
                y = parseInt(nodes[i]['y']);
            }
        }
        var g = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').append('svg:g')
            .attr('class', 'modify')
            .attr('x', x)
            .attr('y', y)
            .attr('visibility', 'visible');
        var inputField = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 80)
            .attr("height", 50)
            .attr('x', x)
            .attr('y', y);
        inputField.append("xhtml:input")
            .attr('type', 'text')
            .style('height', '20px')
            .style('font-size', '1px')
            .attr('placeholder', 'enter name')
            .attr('id', 100);
        var inputButton = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 60)
            .attr("height", 35)
            .attr('x', x + 80)
            .attr('y', y - 5);
        inputButton.append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-success btn-sm">Enter</button>');
        inputButton.on('mousedown', function (d) {
            // get input value from input field, warning could be ignored
            var textNew = document.getElementById('100').value;
            document.querySelectorAll('[id^="eText' + id.toString() + '"]')[0].textContent = textNew;
            // document.getElementById(id.toString()).textContent=textNew;
            var index;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i]['id'] === id) {
                    index = i;
                }
            }
            nodes[index]['text'] = textNew;
            inputField.remove();
            inputButton.remove();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.modify').remove();
            _this.modifyGlossary(id, nodes, gTexts, glossaries);
        });
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
    };
    ModifyMapService.prototype.draggingNode = function (id, nodes) {
        var _this = this;
        var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var x = ellipse.attr('cx');
        var y = ellipse.attr('cy');
        var gRect = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var gText = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var gImage = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var w = d3__WEBPACK_IMPORTED_MODULE_0__["select"](window)
            .on("mousemove", function (d) {
            // change d attribute of connected path to set them to point to new position of dragged node
            for (var i = 0; i < document.querySelectorAll('[id^="a' + id.toString()).length; i++) {
                var dOld = document.querySelectorAll('[id^="a' + id.toString())[i].getAttribute('d');
                var dNew = 'M' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ',' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110) + 'L' + dOld.split('L')[1];
                document.querySelectorAll('[id^="a' + id.toString())[i].setAttribute('d', dNew);
                // console.log(dNew);
            }
            for (var i = 0; i < document.querySelectorAll('[id$="a' + id.toString()).length; i++) {
                var dOld = document.querySelectorAll('[id$="a' + id.toString())[i].getAttribute('d');
                var dNew = dOld.split('L')[0] + 'L' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ',' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
                document.querySelectorAll('[id$="a' + id.toString())[i].setAttribute('d', dNew);
            }
            for (var i = 0; i < nodes.length; i++) {
                if (parseInt(nodes[i]['id']) === id) {
                    nodes[i]['x'] = d3__WEBPACK_IMPORTED_MODULE_0__["event"].x;
                    nodes[i]['y'] = (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
                }
            }
            ellipse
                .attr('cx', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('cy', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110)
                .attr('opacity', '0.6');
            gRect
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
            gText
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + 10)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 100)
                .call(_this.wrap, 40);
            gImage
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + 10)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 50);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.eText').filter(function (a, i) {
                return parseInt(a['id']) === id;
            })
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
        })
            .on('mouseup', function (d) {
            // d3.select('svg').classed('active',false);
            var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return parseInt(a['id']) === id;
            })
                .attr('opacity', '1');
            w.on("mousemove", null).on("mouseup", null);
            console.log('x' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ' ' + 'y' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110));
        });
    };
    ModifyMapService.prototype.modifyGlossary = function (id, nodes, gTexts, glossaries) {
        var _this = this;
        var x;
        var y;
        for (var i = 0; i < nodes.length; i++) {
            if (parseInt(nodes[i]['id']) === id) {
                x = parseInt(nodes[i]['x']);
                y = parseInt(nodes[i]['y']);
            }
        }
        var g = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').append('svg:g')
            .attr('class', 'modify')
            .attr('x', x)
            .attr('y', y)
            .attr('visibility', 'visible');
        var inputField = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 120)
            .attr("height", 50)
            .attr('x', x)
            .attr('y', y);
        inputField.append("xhtml:input")
            .attr('type', 'text')
            .style('height', '20px')
            .style('font-size', '1px')
            .attr('id', 300)
            .attr('placeholder', 'enter glossary text');
        var inputFieldPage = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 120)
            .attr("height", 50)
            .attr('x', x)
            .attr('y', y + 22);
        inputFieldPage.append("xhtml:input")
            .attr('type', 'text')
            .style('height', '20px')
            .style('font-size', '1px')
            .attr('id', 400)
            .attr('placeholder', 'enter page number');
        var inputButton = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 60)
            .attr("height", 70)
            .attr('x', x + 120)
            .attr('y', y + 5);
        inputButton.append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-success btn-sm">Enter</button>');
        inputButton.on('mousedown', function (d) {
            // get input value from input field, warning could be ignored
            var textNew = document.getElementById('300').value;
            var pageNew = document.getElementById('400').value;
            for (var i = 0; i < gTexts.length; i++) {
                if (parseInt(gTexts[i]['id']) === id) {
                    gTexts[i]['text'] = textNew;
                    gTexts[i]['page'] = pageNew;
                }
            }
            var gText = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                return parseInt(a['id']) === id;
            });
            console.log(id);
            console.log(gText);
            gText
                .text(textNew)
                .call(_this.wrap, 40);
            console.log(gText);
            for (var i = 0; i < glossaries.length; i++) {
                if (parseInt(glossaries[i]['id']) === id) {
                    glossaries[i]['page'] = pageNew;
                }
            }
            console.log(gTexts);
            // document.querySelectorAll('[id^="eText'+id.toString()+'"]')[0].textContent=textNew;
            inputField.remove();
            inputButton.remove();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.modify').remove();
        });
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
    };
    ModifyMapService.prototype.removeLinkword = function (id, linkwords, links) {
        var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
            return parseInt(a['id']) === id;
        }).nodes()[0];
        var x = ellipse['cx']['baseVal']['value'];
        var y = ellipse['cy']['baseVal']['value'];
        // remove connected links
        for (var i = 0; i < links.length; i++) {
            for (var t = 0; t < linkwords.length; t++) {
                var linkwordId = linkwords[t]['id'];
                for (var j = 0; j < links.length; j++) {
                    if (links[j]['id'].split(' ')[0] === ('b' + linkwordId)) {
                        links[j]['source'] = linkwords[t];
                    }
                    else if (links[j]['id'].split(' ')[1] === ('b' + linkwordId)) {
                        links[j]['target'] = linkwords[t];
                    }
                    if ((links[j]['id'].split(' ')[0].includes('b')) && (links[j]['source']['id'] === id)
                        || (links[j]['id'].split(' ')[1].includes('b')) && (links[j]['target']['id'] === id)) {
                        links.splice(j, 1);
                    }
                }
            }
        }
        // remove node
        for (var i = 0; i < linkwords.length; i++) {
            if (parseInt(linkwords[i]['id']) === id) {
                linkwords.splice(i, 1);
            }
        }
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
    };
    ModifyMapService.prototype.modifyLinkword = function (id, linkwords) {
        console.log(linkwords);
        console.log(id);
        var x;
        var y;
        for (var i = 0; i < linkwords.length; i++) {
            if (linkwords[i]['id'] === id) {
                x = parseInt(linkwords[i]['x']);
                y = parseInt(linkwords[i]['y']);
            }
        }
        console.log(x);
        var g = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').append('svg:g')
            .attr('class', 'modify')
            .attr('x', x)
            .attr('y', y)
            .attr('visibility', 'visible');
        var inputField = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 80)
            .attr("height", 50)
            .attr('x', x)
            .attr('y', y);
        inputField.append("xhtml:input")
            .attr('type', 'text')
            .style('height', '20px')
            .style('font-size', '1px')
            .attr('id', 200);
        var inputButton = g.append("foreignObject")
            .attr('class', 'modify')
            .attr("width", 60)
            .attr("height", 35)
            .attr('x', x + 80)
            .attr('y', y - 5);
        inputButton.append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-success btn-sm">Enter</button>');
        inputButton.on('mousedown', function (d) {
            // get input value from input field, warning could be ignored
            var textNew = document.getElementById('200').value;
            document.querySelectorAll('[id^="lText' + id.toString() + '"]')[0].textContent = textNew;
            var index;
            for (var i = 0; i < linkwords.length; i++) {
                if (linkwords[i]['id'] === id) {
                    index = i;
                }
            }
            linkwords[index]['text'] = textNew;
            inputField.remove();
            inputButton.remove();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.modify').remove();
        });
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
    };
    ModifyMapService.prototype.draggingLinkword = function (id, linkwords) {
        var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var x = ellipse.attr('cx');
        var y = ellipse.attr('cy');
        var g = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('g.linkword').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var lText = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.linkword').filter(function (a, i) {
            return parseInt(a['id']) === id;
        });
        var w = d3__WEBPACK_IMPORTED_MODULE_0__["select"](window)
            .on("mousemove", function (d) {
            // change d attribute of connected path to set them to point to new position of dragged node
            for (var i = 0; i < document.querySelectorAll('[id^="b' + id.toString()).length; i++) {
                var dOld = document.querySelectorAll('[id^="b' + id.toString())[i].getAttribute('d');
                var dNew = 'M' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ',' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110) + 'L' + dOld.split('L')[1];
                document.querySelectorAll('[id^="b' + id.toString())[i].setAttribute('d', dNew);
                // console.log(dNew);
            }
            for (var i = 0; i < document.querySelectorAll('[id$="b' + id.toString()).length; i++) {
                var dOld = document.querySelectorAll('[id$="b' + id.toString())[i].getAttribute('d');
                var dNew = dOld.split('L')[0] + 'L' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ',' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
                document.querySelectorAll('[id$="b' + id.toString())[i].setAttribute('d', dNew);
            }
            for (var i = 0; i < linkwords.length; i++) {
                if (parseInt(linkwords[i]['id']) === id) {
                    linkwords[i]['x'] = d3__WEBPACK_IMPORTED_MODULE_0__["event"].x;
                    linkwords[i]['y'] = (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
                }
            }
            ellipse
                .attr('cx', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('cy', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110)
                .attr('opacity', '0.6');
            g
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.linkword').filter(function (a, i) {
                return parseInt(a['id']) === id;
            })
                .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x)
                .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
        })
            .on('mouseup', function (d) {
            // d3.select('svg').classed('active',false);
            var ellipse = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
                return parseInt(a['id']) === id;
            })
                .attr('opacity', '1');
            w.on("mousemove", null).on("mouseup", null);
            console.log('x' + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + ' ' + 'y' + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 110));
        });
    };
    ModifyMapService.prototype.initSvg = function (svg, width, height, path, circle, linkword, glossary, gText, gImage, circleNextMap, toNextMapRect, linkwords, toNextMapButton) {
        svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .attr('oncontextmenu', 'return false;')
            .attr('width', width)
            .attr('height', height)
            .attr('ready', false)
            // store the total number of ellipse to give id for new created ellipse (ignore delete action)
            .attr('nodeTotalNumber', 0);
        // var logo = svg. append('image') . attr('xlink:href', 'assets/icon.jpg') . attr('width', 100) . attr('height', 50);
        svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        // arrow styles
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        path = svg.append('svg:g').selectAll('path.link');
        circle = svg.append('svg:g').selectAll('g');
        circleNextMap = svg.append('svg:g').selectAll('gNextMap');
        // circleNextMap = svg.append('svg:g').selectAll('g');
        linkword = svg.append('svg:g').selectAll('text.linkword');
        glossary = svg.append('svg:g').selectAll('rect.gRect');
        gText = svg.append('svg:g').selectAll('text.gText');
        gImage = svg.append('svg:g').selectAll('image.gImage');
        ;
        // create rectangular for asking if switch to the next map
        toNextMapRect = svg.append('rect')
            .attr('class', 'toNext')
            .attr('x', '200')
            .attr('y', '100')
            .attr('width', '800')
            .attr('height', '120')
            .attr('rx', '30')
            .attr('ry', '30')
            .style('fill', 'yellow')
            .style('opacity', '0.9')
            .attr('visibility', 'hidden');
        toNextMapRect = svg.append('svg:text')
            .attr('class', 'toNext')
            .attr('x', '460')
            .attr('y', '140')
            .attr('font-size', '30px')
            .attr('text-anchor', 'left')
            .attr('fill', 'purple')
            .text('Go to next map?')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        });
        toNextMapButton = svg.append('foreignObject')
            .attr('class', 'toNext')
            .attr('x', '320')
            .attr('y', '150')
            .attr('width', '150')
            .attr('height', '60')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('text.toNext').attr('routerLink', '/variable');
        });
        ;
        toNextMapButton
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-success btn-lg btn-block">Yes</button>');
        toNextMapButton = svg.append('foreignObject')
            .attr('class', 'toNext')
            .attr('x', '690')
            .attr('y', '150')
            .attr('width', '150')
            .attr('height', '60')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'hidden');
            svg.select('text.toNext').attr('visibility', 'hidden');
            svg.selectAll('foreignObject.toNext').attr('visibility', 'hidden');
        });
        toNextMapButton
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-danger btn-lg btn-block">No</button>');
        // dropdown menu
        var dropdown = svg.append('svg:g')
            .attr('class', 'dropdown')
            .attr('x', '0')
            .attr('y', '0')
            .style('cursor', 'pointer')
            .attr('visibility', 'hidden');
        var button1 = dropdown.append("foreignObject")
            .attr('class', 'dropdown1')
            .attr("width", 70)
            .attr("height", 35)
            .attr('x', '0')
            .attr('y', '0')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm btn-block">drag</button>');
        var button2 = dropdown.append("foreignObject")
            .attr('class', 'dropdown2')
            .attr("width", 70)
            .attr("height", 35)
            .attr('x', '0')
            .attr('y', '35')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm btn-block">modify</button>');
        var button3 = dropdown.append("foreignObject")
            .attr('class', 'dropdown3')
            .attr("width", 70)
            .attr("height", 35)
            .attr('x', '0')
            .attr('y', '70')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm btn-block">delete</button>');
        // create menu
        var create = svg.append('svg:g')
            .attr('class', 'create')
            .attr('x', '0')
            .attr('y', '0')
            .style('cursor', 'pointer')
            .attr('visibility', 'hidden');
        var button4 = create.append("foreignObject")
            .attr('class', 'create1')
            .attr("width", 80)
            .attr("height", 35)
            .attr('x', '0')
            .attr('y', '0');
        button4.append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm btn-block">concept</button>');
        var button5 = create.append("foreignObject")
            .attr('class', 'create2')
            .attr("width", 80)
            .attr("height", 35)
            .attr('x', '0')
            .attr('y', '35')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm btn-block">linkword</button>');
        // input for enter the text in ellipse
        var eInput = svg.append('svg:g')
            .attr('class', 'create')
            .attr('x', '0')
            .attr('y', '0')
            .style('cursor', 'pointer')
            .attr('visibility', 'hidden');
        // save the data into json file
        var saveButton = svg.append("foreignObject")
            .attr('class', 'save')
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<button type="button" class="btn btn-primary btn-sm active btn-block">Save</button>');
        return [svg, path, circle, linkword, glossary, gText, gImage, circleNextMap, toNextMapRect];
    };
    ModifyMapService.prototype.buildMicroMap = function (svg, path, links, glossary, glossaries, gText, gTexts, gImage, circle, nodes, linkword, linkwords, nodesNextMap, circleNextMap, offset) {
        var _this = this;
        // transform the data into a consistent form with the original json data
        var nodesJSON = nodes;
        var linkwordsJSON = linkwords;
        var nodesNextMapJSON = nodesNextMap;
        var linksJSON = [];
        for (var i = 0; i < links.length; i++) {
            var linkJSON = { id: null, source: null, target: null };
            linkJSON['id'] = links[i]['id'];
            var sourceId = links[i]['id'].split(' ')[0];
            var targetId = links[i]['id'].split(' ')[1];
            if (sourceId.includes('a')) {
                linkJSON['source'] = 'nodes[' + sourceId.split('a')[1] + ']';
            }
            else if (sourceId.includes('b')) {
                linkJSON['source'] = 'linkwords[' + sourceId.split('b')[1] + ']';
            }
            else if (sourceId.includes('c')) {
                linkJSON['source'] = 'nodesNextMap[' + sourceId.split('c')[1] + ']';
            }
            if (targetId.includes('a')) {
                linkJSON['target'] = 'nodes[' + targetId.split('a')[1] + ']';
            }
            else if (targetId.includes('b')) {
                linkJSON['target'] = 'linkwords[' + targetId.split('b')[1] + ']';
            }
            else if (targetId.includes('c')) {
                linkJSON['target'] = 'nodesNextMap[' + targetId.split('c')[1] + ']';
            }
            linksJSON.push(linkJSON);
        }
        var gTextsJSON = [];
        for (var i = 0; i < gTexts.length; i++) {
            var gTextJSON = { id: null, text: null, target: null, hidden: true, page: null };
            gTextJSON['id'] = gTexts[i]['id'];
            gTextJSON['text'] = gTexts[i]['text'];
            gTextJSON['page'] = gTexts[i]['page'];
            gTextJSON['target'] = 'nodes[' + gTexts[i]['target']['id'] + ']';
            gTextsJSON.push(gTextJSON);
        }
        var glossariesJSON = [];
        for (var i = 0; i < glossaries.length; i++) {
            var glossaryJSON = { id: null, target: null, hidden: true, width: 60, height: 80, page: null };
            glossaryJSON['id'] = glossaries[i]['id'];
            glossaryJSON['page'] = glossaries[i]['page'];
            glossaryJSON['target'] = 'nodes[' + glossaries[i]['target']['id'] + ']';
            glossariesJSON.push(glossaryJSON);
        }
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.save')
            .on('click', function (d) {
            var blob = new Blob(["{\"nodes\":" + JSON.stringify(nodesJSON) + ",\n\n\n" + "\"linkwords\":" + JSON.stringify(linkwordsJSON) + ",\n\n\n" + "\"links\":" + JSON.stringify(linksJSON) + ",\n\n\n" + "\"nodesNextMap\":" + JSON.stringify(nodesNextMapJSON) + ",\n\n\n" + "\"glossaries\":" + JSON.stringify(glossariesJSON) + ",\n\n\n" + "\"gTexts\":" + JSON.stringify(gTextsJSON) + '}'], { type: "" });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "modifiedMap.json");
        });
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.temp').remove();
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('nodeTotalNumber', function (d) {
            return nodes.length;
        });
        // svg.select('text.toNext').attr('font-size', '30px')
        // .attr('visibility', (d)=>{
        //   return svg.select('rect.toNext').attr('visibility');
        // });
        // bind the paths with data
        path = path.data(links, function (d) { return d.id; });
        // bind the white rectangulars with data
        glossary = glossary.data(glossaries, function (d) { return d.id; });
        gText = gText.data(gTexts, function (d) { return d.id; });
        gImage = gImage.data(gTexts, function (d) { return d.id; });
        linkword = linkword.data(linkwords, function (d) { return d.id; });
        path.exit().remove();
        var gPath = path.enter().append('svg:g');
        // create paths
        gPath
            .append('svg:path')
            .attr('class', 'link')
            .attr('id', function (d) { return d.id; })
            // .attr('id', (d)=>d.source.x.toString()+','+d.source.y.toString()+' '+d.target.x.toString()+','+d.target.y.toString())
            .attr('source', function (d) { return d.source; })
            .attr('target', function (d) { return d.target; })
            .attr('sourceX', function (d) { return d.source.x; })
            .attr('sourceY', function (d) { return d.source.y; })
            .attr('targetX', function (d) { return d.target.x; })
            .attr('targetY', function (d) { return d.target.y; })
            .attr('d', function (d) {
            // calculate the d attribute for path
            return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; });
        // .merge(path);
        path = gPath.merge(path);
        path.exit().remove();
        // bind the circle with data
        circle = circle.data(nodes, function (d) { return d.id; });
        circle.exit().remove();
        circleNextMap = circleNextMap.data(nodesNextMap, function (d) { return d.id; });
        circleNextMap.exit().remove();
        // for each node create a g element
        var g = circle.enter().append('svg:g');
        var gNextMap = circleNextMap.enter().append('svg:g');
        gNextMap.append('svg:ellipse')
            .attr('class', 'nodeNextMap')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return 'grey'; })
            .style('opacity', '0.9')
            .style('stroke', 'white')
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'visible');
            svg.select('text.toNext').attr('visibility', 'visible');
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('foreignObject.toNext').attr('visibility', 'visible');
        });
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            .attr('id', function (d) { return d.id; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) {
            return 'green';
        })
            .style('stroke', function (d) { return (!d.reflexive) ? 'black' : 'white'; })
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('fill', 'lightgreen');
            // store the destination for new generated path
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId', d.id);
        })
            .on('mouseout', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('fill', 'green');
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId', null);
        })
            .on('mousedown', function (d) {
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 0) {
                // this code is needed for initialize the mousedown function before dragging the slider bar
                if (parseInt(svg.select('circle.ball').attr('cx')) === 900) {
                    window.alert("Node locked");
                    // console.log("clicked lock")
                }
                else {
                }
            }
        })
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["drag"]()
            .on('start', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["event"].sourceEvent.stopPropagation();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this)
                .classed("dragging", true);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                .append('svg:path')
                .attr('class', 'dragLine')
                .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('targetX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('targetY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('d', function (d) {
                // calculate the d attribute for path
                return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y) + "L" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + d3__WEBPACK_IMPORTED_MODULE_0__["event"].y;
            });
            // d3.select('svg').attr('drag',true);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('startNodeId', this.id);
        })
            .on('drag', function (d) {
            var _this = this;
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('path.dragLine')
                .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                .attr('targetX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('targetY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('d', function (d) {
                // calculate the d attribute for path
                return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + d3__WEBPACK_IMPORTED_MODULE_0__["event"].y;
            })
                // set arrow style
                .style('marker-end', 'url(#end-arrow)');
        })
            .on('end', function (d) {
            var _this = this;
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed("dragging", false);
            var targetNodeId;
            var targetLinkwordId;
            if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId') !== null) {
                targetNodeId = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId'));
            }
            if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId') !== null) {
                targetLinkwordId = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId'));
            }
            // avoid create path to itself
            if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('startNodeId')) === targetNodeId) {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                return;
            }
            if (targetLinkwordId === undefined && targetNodeId === undefined) {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                return;
            }
            var sourceNode;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i]['id'] === parseInt(this.id)) {
                    sourceNode = nodes[i];
                }
            }
            if (targetNodeId === undefined) {
                var endLinkword;
                for (var i = 0; i < linkwords.length; i++) {
                    if (linkwords[i]['id'] === parseInt(targetLinkwordId)) {
                        endLinkword = linkwords[i];
                    }
                }
                //don't create duplicated link
                var duplicated = false;
                for (var i = 0; i < links.length; i++) {
                    if (links[i]['id'] === 'a' + this.id + ' b' + targetLinkwordId) {
                        duplicated = true;
                        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                        return;
                    }
                }
                links.push({
                    source: sourceNode,
                    target: endLinkword,
                    left: false,
                    right: true,
                    id: 'a' + this.id + ' b' + targetLinkwordId
                });
                // append a temporaty path because the path generated from data will be shown by next click
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                    .append('svg:path')
                    .attr('class', 'temp')
                    .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                    .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                    .attr('targetX', function (d) { return endLinkword['x']; })
                    .attr('targetY', function (d) { return endLinkword['y']; })
                    .attr('d', function (d) {
                    // calculate the d attribute for path
                    return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + endLinkword['x'] + "," + endLinkword['y'];
                })
                    // set arrow style
                    .style('marker-end', 'url(#end-arrow)');
            }
            else {
                var endNode;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i]['id'] === parseInt(targetNodeId)) {
                        endNode = nodes[i];
                    }
                }
                //don't create duplicated link
                var duplicated = false;
                for (var i = 0; i < links.length; i++) {
                    if (links[i]['id'] === 'a' + this.id + ' a' + targetNodeId) {
                        duplicated = true;
                        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                        return;
                    }
                }
                links.push({
                    source: sourceNode,
                    target: endNode,
                    left: false,
                    right: true,
                    id: 'a' + this.id + ' a' + targetNodeId
                });
                // append a temporaty path because the path generated from data will be shown by next click
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                    .append('svg:path')
                    .attr('class', 'temp')
                    .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                    .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                    .attr('targetX', function (d) { return endNode['x']; })
                    .attr('targetY', function (d) { return endNode['y']; })
                    .attr('d', function (d) {
                    // calculate the d attribute for path
                    return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + endNode['x'] + "," + endNode['y'];
                })
                    // set arrow style
                    .style('marker-end', 'url(#end-arrow)');
            }
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
        }));
        // create texts
        g.append('svg:text')
            .attr('class', 'eText')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('id', function (d) { return 'eText' + d.id.toString(); })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .attr('text', function (d) { return d.text; })
            .text(function (d) { return d.text; });
        gNextMap.append('svg:text')
            .attr('class', 'eTextNextMap')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        circleNextMap = gNextMap.merge(circleNextMap);
        circleNextMap.exit().remove();
        circle = g.merge(circle);
        circle.exit().remove();
        glossary.exit().remove();
        var gGlossary = glossary.enter().append('svg:g');
        gGlossary
            .append('svg:rect')
            .attr('class', 'gRect')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x;
            }
            else {
                return d.target.x - 60;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y;
            }
            else {
                return d.target.y - 80;
            }
        })
            .attr('fill', 'orange')
            .attr('width', '60')
            .attr('height', '80')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .attr('id', function (d) { return d.id; })
            .attr('stroke', 'black')
            .on('mousedown', function (d) {
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 0) {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                svg.select('foreignObject.pdf')
                    .attr('visibility', 'visible')
                    .transition()
                    .duration(0)
                    .attr('transform', 'translate(' + (d.target.x - 180) + ", 0)");
                // make sure that the pdf view will be fixed on the top of page
                //   svg.transition().duration(0).attr('transform','translate(' + (1240 + 2*offset) * 3 / 2  + ',' + (310+d.target.y*2) * 3 / 2 + ')scale(' + 3 + ')translate(' + -d.target.x + ',' + -d.target.y + ')');
                // make sure the pdf could be fully shown even if click on node on the left border
                if (d.target.x < 150) {
                    svg.select('foreignObject.pdf')
                        .attr('visibility', 'visible')
                        .transition()
                        .duration(0)
                        .attr('transform', 'translate(' + (d.target.x - 65) + ", 0)");
                }
                svg.attr('page', parseInt(d.page) + 18);
                console.log(d.page);
                // console.log("current page: " + d.page);
            }
        });
        glossary = gGlossary.merge(glossary);
        gText.exit().remove();
        gImage.exit().remove();
        gText = gText
            .enter()
            .append('svg:text')
            .attr('class', 'gText')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x + 10;
            }
            else {
                return d.target.x - 50;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y + 10;
            }
            else {
                return d.target.y - 70;
            }
        })
            .attr('id', function (d) { return d.id; })
            .attr('fill', 'black')
            .attr('font-size', '4')
            .attr('text-anchor', 'left')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .text(function (d) { return d.text; })
            .call(this.wrap, 40)
            .on('mousedown', function (d) {
        })
            .merge(gText);
        ;
        gImage = gImage
            .enter()
            .append('svg:image')
            .attr('class', 'gImage')
            .attr('x', function (d) {
            if (d.target.x + 60 <= svg.attr('width')) {
                return d.target.x + 10;
            }
            else {
                return d.target.x - 50;
            }
        })
            .attr('y', function (d) {
            if (d.target.y + 80 <= svg.attr('height')) {
                return d.target.y + 60;
            }
            else {
                return d.target.y - 20;
            }
        })
            .attr('xlink:href', 'assets/icon.jpg')
            .attr('width', 20)
            .attr('height', 15)
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; })
            .merge(gImage);
        //todo
        // link word should only be created once, therefore moved into ngAfterInit
        // create link words
        //  linkword.exit().remove();
        // const g1 = linkword.enter().append('svg:g');
        linkword.exit().remove();
        var gLinkWord = linkword.enter()
            .append('svg:g')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('id', function (d) { return d.id; })
            .attr('length', function (d) { return d.text.length; });
        linkword = gLinkWord.merge(linkword);
        gLinkWord
            .append('svg:ellipse')
            .attr('class', 'linkword')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y - 1; })
            .attr('id', function (d) { return d.id; })
            .attr('rx', '10')
            .attr('ry', '10')
            .attr('fill', 'lightgrey')
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('ellipse.linkword')
                .filter(function (a, i) {
                return a['id'] === d.id;
            })
                .attr('fill', 'grey');
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId', d.id);
        })
            .on('mouseout', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('fill', 'lightgrey');
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId', null);
        })
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["drag"]()
            .on('start', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["event"].sourceEvent.stopPropagation();
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this)
                .classed("dragging", true);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                .append('svg:path')
                .attr('class', 'dragLine')
                .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('targetX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('targetY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('d', function (d) {
                // calculate the d attribute for path
                return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + (d3__WEBPACK_IMPORTED_MODULE_0__["event"].y) + "L" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + d3__WEBPACK_IMPORTED_MODULE_0__["event"].y;
            });
            // d3.select('svg').attr('drag',true);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('startLinkwordId', this.id);
        })
            .on('drag', function (d) {
            var _this = this;
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('path.dragLine')
                .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                .attr('targetX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].x; })
                .attr('targetY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].y; })
                .attr('d', function (d) {
                // calculate the d attribute for path
                return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + d3__WEBPACK_IMPORTED_MODULE_0__["event"].x + "," + d3__WEBPACK_IMPORTED_MODULE_0__["event"].y;
            })
                // set arrow style
                .style('marker-end', 'url(#end-arrow)');
        })
            .on('end', function (d) {
            var _this = this;
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed("dragging", false);
            var targetNodeId;
            var targetLinkwordId;
            if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId') !== null) {
                targetNodeId = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endNodeId'));
            }
            if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId') !== null) {
                targetLinkwordId = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('endLinkwordId'));
            }
            // avoid create path to itself
            if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('startLinkwordId')) === targetLinkwordId) {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                return;
            }
            if (targetLinkwordId === undefined && targetNodeId === undefined) {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                return;
            }
            var sourceLinkword;
            for (var i = 0; i < linkwords.length; i++) {
                if (linkwords[i]['id'] === parseInt(this.id)) {
                    sourceLinkword = linkwords[i];
                }
            }
            if (targetNodeId === undefined) {
                var endLinkword;
                for (var i = 0; i < linkwords.length; i++) {
                    if (linkwords[i]['id'] === parseInt(targetLinkwordId)) {
                        endLinkword = linkwords[i];
                    }
                }
                //don't create duplicated link
                var duplicated = false;
                for (var i = 0; i < links.length; i++) {
                    if (links[i]['id'] === 'b' + this.id + ' b' + targetLinkwordId) {
                        duplicated = true;
                        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                        return;
                    }
                }
                links.push({
                    source: sourceLinkword,
                    target: endLinkword,
                    left: false,
                    right: true,
                    id: 'b' + this.id + ' b' + targetLinkwordId
                });
                // append a temporaty path because the path generated from data will be shown by next click
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                    .append('svg:path')
                    .attr('class', 'temp')
                    .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                    .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                    .attr('targetX', function (d) { return endLinkword['x']; })
                    .attr('targetY', function (d) { return endLinkword['y']; })
                    .attr('d', function (d) {
                    // calculate the d attribute for path
                    return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + endLinkword['x'] + "," + endLinkword['y'];
                })
                    // set arrow style
                    .style('marker-end', 'url(#end-arrow)');
            }
            else {
                var endNode;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i]['id'] === parseInt(targetNodeId)) {
                        endNode = nodes[i];
                    }
                }
                //don't create duplicated link
                var duplicated = false;
                for (var i = 0; i < links.length; i++) {
                    if (links[i]['id'] === 'b' + this.id + ' a' + targetNodeId) {
                        duplicated = true;
                        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
                        return;
                    }
                }
                links.push({
                    source: sourceLinkword,
                    target: endNode,
                    left: false,
                    right: true,
                    id: 'b' + this.id + ' a' + targetNodeId
                });
                // append a temporaty path because the path generated from data will be shown by next click
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
                    .append('svg:path')
                    .attr('class', 'temp')
                    .attr('sourceX', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx'); })
                    .attr('sourceY', function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy'); })
                    .attr('targetX', function (d) { return endNode['x']; })
                    .attr('targetY', function (d) { return endNode['y']; })
                    .attr('d', function (d) {
                    // calculate the d attribute for path
                    return "M" + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cx') + "," + d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this).attr('cy') + "L" + endNode['x'] + "," + endNode['y'];
                })
                    // set arrow style
                    .style('marker-end', 'url(#end-arrow)');
            }
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('path.dragLine').remove();
        }))
            .on('contextmenu', function (d) {
            // right click
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 2) {
                svg.select('g.dropdown').attr('visibility', 'visible');
                svg.selectAll('g.modify').attr('visibility', 'hidden')
                    .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
                    return a['id'] === d['id'];
                }).attr('cx'));
                for (var i = 1; i < 4; i++) {
                    svg.selectAll('foreignObject.dropdown' + i).attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
                        return a['id'] === d['id'];
                    }).attr('cx'));
                    svg.selectAll('foreignObject.dropdown' + i).attr('y', parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.linkword').filter(function (a, i) {
                        return a['id'] === d['id'];
                    }).attr('cy')) + (i - 1) * 35)
                        .attr('linkwordId', d['id'])
                        .on('mousedown', function (d) {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.create').attr('visibility', 'hidden');
                        // if click on delete button
                        if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('y'))) {
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('linkwordId'));
                            _this.removeLinkword(id, linkwords, links);
                        }
                        // if click on modify
                        else if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown2').attr('y'))) {
                            // console.log('modify')
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('linkwordId'));
                            _this.modifyLinkword(id, linkwords);
                        }
                        // if click on dragging button
                        else if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown1').attr('y'))) {
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('linkwordId'));
                            _this.draggingLinkword(id, linkwords);
                        }
                    });
                }
            }
        });
        gLinkWord
            .append('svg:text')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('id', function (d) { return 'lText' + d.id; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        // change the size of ellipse to cover the text
        for (var id = 0; id < parseInt(linkwords.length); id++) {
            var textLength = svg.selectAll('g.linkword').filter(function (a, i) {
                return i === id;
            }).attr('length');
            svg.selectAll('ellipse.linkword').filter(function (a, i) {
                return i === id;
            }).attr('rx', parseInt(textLength) * 2.5 + 8);
        }
        // start state
        // d3.select('svg').attr('clickOnNode', 'false');
        //   d3.select('svg').selectAll('rect.gRect').attr('visibility', 'hidden');
        //     d3.select('svg').selectAll('text.gText').attr('visibility', 'hidden');
        //     d3.select('svg').selectAll('image.gImage').attr('visibility', 'hidden');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').on('click', function (d) {
            var id = d['id'];
            //  important: in modification mode svg will return to start state after dragging slider
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 0 && d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                return parseInt(a['id']) === id;
            }).style('fill') !== 'grey') {
                if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility') === 'hidden') {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                }
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility') === 'hidden' ? 'visible' : 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) === id;
                }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return parseInt(a['id']) !== id;
                }).attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                    return parseInt(a['id']) !== id;
                }).attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                    return parseInt(a['id']) !== id;
                }).attr('visibility', 'hidden');
            }
        })
            .on('contextmenu', function (d) {
            // right click
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 2) {
                svg.select('g.dropdown').attr('visibility', 'visible');
                svg.selectAll('g.modify').attr('visibility', 'hidden')
                    .attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                    // console.log(d);
                    // console.log(a);
                    return a['id'] === d['id'];
                }).attr('cx'));
                for (var i = 1; i < 4; i++) {
                    svg.selectAll('foreignObject.dropdown' + i).attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                        return a['id'] === d['id'];
                    }).attr('cx'));
                    svg.selectAll('foreignObject.dropdown' + i).attr('y', parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').filter(function (a, i) {
                        return a['id'] === d['id'];
                    }).attr('cy')) + (i - 1) * 35)
                        .attr('nodeId', d['id'])
                        .on('mousedown', function (d) {
                        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.create').attr('visibility', 'hidden');
                        // // get cy of the clicked ellipse
                        // var y = d3.select('svg').selectAll('ellipse.node').filter(function(a,i){
                        //   var id = parseInt(d3.select('foreignObject.dropdown3').attr('nodeId'));
                        //   return a['id']===id;
                        // }).nodes()[0]['cy']['baseVal']['value']
                        // console.log(d3.event['path'][2]['y']['baseVal']['value'])
                        // console.log(d3.select('foreignObject.dropdown3').attr('y'))
                        // if click on delete button
                        if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('y'))) {
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('nodeId'));
                            _this.removeNode(id, nodes, links, glossaries, gTexts);
                        }
                        // if click on modify
                        else if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown2').attr('y'))) {
                            // console.log('modify')
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('nodeId'));
                            _this.modifyNode(id, nodes, gTexts, glossaries);
                        }
                        // if click on dragging button
                        else if (parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["event"]['path'][2]['y']['baseVal']['value']) === parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown1').attr('y'))) {
                            var id = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.dropdown3').attr('nodeId'));
                            _this.draggingNode(id, nodes);
                        }
                    });
                }
            }
        });
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').attr('visibility', 'hidden');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').attr('visibility', 'hidden');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').attr('visibility', 'hidden');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('ellipse.node').style('fill', 'green').on('mousedown', function (d) {
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 0) {
                var id = d['id'];
                if (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden') {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'true');
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('clickOnNode', 'false');
                }
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden' ? 'visible' : 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                    return i === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                    return i === id;
                }).attr('visibility', d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden' ? 'hidden' : 'visible');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i !== id;
                }).attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('text.gText').filter(function (a, i) {
                    return i !== id;
                }).attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('image.gImage').filter(function (a, i) {
                    return i !== id;
                }).attr('visibility', 'hidden');
                var k = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden') ? 1 : 3;
                var x = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden') ? 620 : d['x'];
                var y = (d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').selectAll('rect.gRect').filter(function (a, i) {
                    return i === id;
                }).attr('visibility') === 'hidden') ? 240 : d['y'];
                //  d3.select('svg').transition()
                // .duration(750)
                // .attr('transform', 'translate(' + (1240 + 2*offset) * k / 2  + ',' + 480 * k / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
            }
        });
        for (var i_1 = 0; i_1 < glossaries.length; i_1++) {
            glossaries[i_1].hidden = true;
            gTexts[i_1].hidden = true;
        }
        var routerLink = svg.select('text.toNext').attr('routerLink');
        // console.log(routerLink);
        var w = d3__WEBPACK_IMPORTED_MODULE_0__["select"](window);
        w.on('mousedown', function (d) {
            // if click on the background
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].button === 0) {
                if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].path.length === 8) {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.dropdown').attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.create').attr('visibility', 'hidden');
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('g.modify').remove();
                }
            }
        })
            .on('contextmenu', function (d) {
            // console.log(d3.event.path.length)
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.create').attr('visibility', 'hidden');
            if (d3__WEBPACK_IMPORTED_MODULE_0__["event"].path.length <= 8) {
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.dropdown').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('g.modify').remove();
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g.create').attr('visibility', 'visible');
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create1').attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x - 14)
                    .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 120);
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create2').attr('x', d3__WEBPACK_IMPORTED_MODULE_0__["event"].x - 14)
                    .attr('y', d3__WEBPACK_IMPORTED_MODULE_0__["event"].y - 85);
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('foreignObject.create1')
                    .on('mousedown', function (d) {
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('nodeTotalNumber', function (d) {
                        return parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').attr('nodeTotalNumber')) + 1;
                    });
                    var id = parseInt(nodes.length);
                    nodes.push({ id: parseInt(nodes.length), text: "", x: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create1')
                            .attr('x'), y: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create1')
                            .attr('y'), reflexive: true });
                    glossaries.push({ id: id,
                        target: nodes[id],
                        hidden: true,
                        width: 60,
                        height: 80,
                        page: '1'
                    });
                    gTexts.push({ text: 'example text',
                        target: nodes[id],
                        hidden: true,
                        page: '1',
                        id: id.toString(),
                    });
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.create').attr('visibility', 'hidden');
                    // input the text in created ellipse
                    _this.modifyNode(id, nodes, gTexts, glossaries);
                });
                d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('foreignObject.create2')
                    .on('mousedown', function (d) {
                    var idLinkWord = parseInt(linkwords.length);
                    linkwords.push({ id: parseInt(linkwords.length), text: "default", x: parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create1')
                            .attr('x')),
                        y: parseInt(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('foreignObject.create1')
                            .attr('y')) });
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').select('g.create').attr('visibility', 'hidden');
                    _this.modifyLinkword(id, linkwords);
                });
            }
        });
        return [svg, circle, path, glossary, gText, gImage, linkword, circleNextMap, routerLink];
    };
    ModifyMapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ModifyMapService);
    return ModifyMapService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/object/object.component.css":
/*!*********************************************!*\
  !*** ./src/app/object/object.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  \n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n  \n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.slider{\n    fill: rgb(77, 3, 67);\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 15px;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JqZWN0L29iamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHFEQUFxRDtJQUNyRCxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFHQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL29iamVjdC9vYmplY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGVOZXh0TWFwIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGNpcmNsZS5iYWxsIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHJlY3QuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBwYXRoLmxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGguZHJhZ0xpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGgudGVtcCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgdGV4dHtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCB0ZXh0LmdUZXh0e1xuICAgIGZvbnQ6IDRweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgdGV4dC5zbGlkZXJ7XG4gICAgZmlsbDogcmdiKDc3LCAzLCA2Nyk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICBcbiAgOjpuZy1kZWVwIHRleHQudG9OZXh0e1xuICAgIGZvbnQ6IDMwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgXG4gIDo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB9XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/object/object.component.ts":
/*!********************************************!*\
  !*** ./src/app/object/object.component.ts ***!
  \********************************************/
/*! exports provided: ObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectComponent", function() { return ObjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';




var ObjectComponent = /** @class */ (function () {
    function ObjectComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    ObjectComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes5;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap5;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords5;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links5;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_4__.glossaries5;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_4__.gTexts5;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    ObjectComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.nodesNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,5 250,30 80,100 0,160 250,450 500,450 1100,450 1050,200")
            .style("fill", "lightgreen")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['object']['choicetest']['true']) + parseInt(data['object']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['object']['choicetest']['true']) / (parseInt(data['object']['choicetest']['true']) + parseInt(data['object']['choicetest']['false']));
                }
                if ((parseInt(data['object']['blocktest']['total']['true']) + parseInt(data['object']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['object']['blocktest']['total']['true']) / (parseInt(data['object']['blocktest']['total']['true']) + parseInt(data['object']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.selectAll('rect.progress').remove();
                _this.svg.selectAll('text.progress').remove();
            }
        });
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/object/modify5" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/object/test5" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    ObjectComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            //  console.log('this is my : ' + this.selectedNode );
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        }
        this.restart();
    };
    ObjectComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    // refresh function
    ObjectComponent.prototype.restart = function () {
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, 0, 'object');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        this.routerLink = buildMap[8];
        console.log(this.routerLink);
        this.router.navigate[this.routerLink];
    };
    ObjectComponent.ctorParameters = function () { return [
        { type: _buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ObjectComponent.prototype, "graphContainer", void 0);
    ObjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-object',
            template: __webpack_require__(/*! raw-loader!./object.component.html */ "./node_modules/raw-loader/index.js!./src/app/object/object.component.html"),
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]],
            styles: [__webpack_require__(/*! ./object.component.css */ "./src/app/object/object.component.css")]
        }),
        __metadata("design:paramtypes", [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]])
    ], ObjectComponent);
    return ObjectComponent;
}());



/***/ }),

/***/ "./src/app/primitive-type/primitive-type.component.css":
/*!*************************************************************!*\
  !*** ./src/app/primitive-type/primitive-type.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  \n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n  \n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.slider{\n    fill: rgb(77, 3, 67);\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 15px;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbWl0aXZlLXR5cGUvcHJpbWl0aXZlLXR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixxREFBcUQ7SUFDckQsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFHQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcmltaXRpdmUtdHlwZS9wcmltaXRpdmUtdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZU5leHRNYXAge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgY2lyY2xlLmJhbGwge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcmVjdC5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGgubGluayB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcGF0aC5kcmFnTGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcGF0aC50ZW1wIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCB0ZXh0e1xuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHRleHQuZ1RleHR7XG4gICAgZm9udDogNHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCB0ZXh0LnNsaWRlcntcbiAgICBmaWxsOiByZ2IoNzcsIDMsIDY3KTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICA6Om5nLWRlZXAgdGV4dC50b05leHR7XG4gICAgZm9udDogMzBweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICBcbiAgOjpuZy1kZWVwIHN2Zzpub3QoLmFjdGl2ZSk6bm90KC5jdHJsKSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIH1cbiAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/primitive-type/primitive-type.component.ts":
/*!************************************************************!*\
  !*** ./src/app/primitive-type/primitive-type.component.ts ***!
  \************************************************************/
/*! exports provided: PrimitiveTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveTypeComponent", function() { return PrimitiveTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';




var PrimitiveTypeComponent = /** @class */ (function () {
    function PrimitiveTypeComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    PrimitiveTypeComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes4;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap4;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords4;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links4;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_4__.glossaries4;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_4__.gTexts4;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    PrimitiveTypeComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.nodesNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,5 250,30 80,100 0,160 250,450 500,450 1100,450 1050,200")
            .style("fill", "lightgreen")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['primitive type']['choicetest']['true']) + parseInt(data['primitive type']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['primitive type']['choicetest']['true']) / (parseInt(data['primitive type']['choicetest']['true']) + parseInt(data['primitive type']['choicetest']['false']));
                }
                if ((parseInt(data['primitive type']['blocktest']['total']['true']) + parseInt(data['primitive type']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['primitive type']['blocktest']['total']['true']) / (parseInt(data['primitive type']['blocktest']['total']['true']) + parseInt(data['primitive type']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.selectAll('rect.progress').remove();
                _this.svg.selectAll('text.progress').remove();
            }
        });
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/primitiveType/modify4" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/primitiveType/test4" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    PrimitiveTypeComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            //  console.log('this is my : ' + this.selectedNode );
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        }
        this.restart();
    };
    PrimitiveTypeComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    // refresh function
    PrimitiveTypeComponent.prototype.restart = function () {
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, 0, 'primitive type');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        this.routerLink = buildMap[8];
        console.log(this.routerLink);
        this.router.navigate[this.routerLink];
    };
    PrimitiveTypeComponent.ctorParameters = function () { return [
        { type: _buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrimitiveTypeComponent.prototype, "graphContainer", void 0);
    PrimitiveTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primitive-type',
            template: __webpack_require__(/*! raw-loader!./primitive-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/primitive-type/primitive-type.component.html"),
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]],
            styles: [__webpack_require__(/*! ./primitive-type.component.css */ "./src/app/primitive-type/primitive-type.component.css")]
        }),
        __metadata("design:paramtypes", [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]])
    ], PrimitiveTypeComponent);
    return PrimitiveTypeComponent;
}());



/***/ }),

/***/ "./src/app/program/modify2/modify2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/program/modify2/modify2.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9tb2RpZnkyL21vZGlmeTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0Qjs7RUFJQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL21vZGlmeTIvbW9kaWZ5Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlTmV4dE1hcCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgY2lyY2xlLmJhbGwge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOjpuZy1kZWVwIHJlY3QuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgcGF0aC5saW5rIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICA6Om5nLWRlZXAgcGF0aC5kcmFnTGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgOjpuZy1kZWVwIHBhdGgudGVtcCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgOjpuZy1kZWVwIHRleHR7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIHRleHQuZ1RleHR7XG4gICAgZm9udDogNHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuXG5cbiAgOjpuZy1kZWVwIHRleHQudG9OZXh0e1xuICAgIGZvbnQ6IDMwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIFxuICA6Om5nLWRlZXAgc3ZnOm5vdCguYWN0aXZlKTpub3QoLmN0cmwpIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/program/modify2/modify2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/program/modify2/modify2.component.ts ***!
  \******************************************************/
/*! exports provided: Modify2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modify2Component", function() { return Modify2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modifyMap.service */ "./src/app/modifyMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';

// import example from '../assets/example.json';


var Modify2Component = /** @class */ (function () {
    function Modify2Component(modifyMapService, router) {
        this.modifyMapService = modifyMapService;
        this.router = router;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    Modify2Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodes2;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodesNextMap2;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_3__.linkwords2;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_3__.links2;
        // console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true, "id": null };
            link.id = temp[i].id;
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i].source);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_3__.glossaries2;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null, 'id': null };
            glossary.page = temp2[i].page;
            glossary.id = temp2[i].id;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_3__.gTexts2;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null, 'id': null };
            gText.page = temp3[i].page;
            gText.id = temp3[i].id;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    Modify2Component.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.modifyMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.modifyMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.circleNextMap = svgArray[7];
        this.toNextMapRect = svgArray[8];
        // this part works with normal html element
        // this.svg.append("foreignObject")
        // .attr("width", 800)
        // .attr("height", 400)
        // .append("xhtml:div")
        // .style("font", "14px 'Helvetica Neue'")
        // .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");
        //this part dosen't work with pdf-viewer
        // this.svg.append("foreignObject")
        // .attr('y',200)
        // .attr("width", 800)
        // .attr("height", 480)
        // .append("xhtml:pdf-viewer")
        // .style("display", "block")
        // .attr("src", this.pdfSrc)
        // // .attr('ng-reflect-src', 'https://cors-anywhere.herokuap')
        // .attr("render-text", true)
        // // .attr('ng-reflect-render-text',true)
        // .attr("page", "21")
        // // .attr('ng-reflect-page', '21')
        // // .attr('ng-reflect-zoom', '0.5')
        // // .attr('ng-reflect-show-all', false)
        // // .src(this.pdfSrc)
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Modify2Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        console.log('mousedown');
        if (this.svg.attr('clickOnNode') === 'false') {
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
            this.restart();
        }
        this.restart();
    };
    Modify2Component.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        this.svg.attr('clickOnNode', 'false');
    };
    Modify2Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Modify2Component.prototype.restart = function () {
        // console.log('restart');
        var _this = this;
        var offset = 0;
        var buildMap = this.modifyMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('foreignObject.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Modify2Component.ctorParameters = function () { return [
        { type: _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Modify2Component.prototype, "pdfViewers", void 0);
    Modify2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify2',
            template: __webpack_require__(/*! raw-loader!./modify2.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/modify2/modify2.component.html"),
            providers: [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"]],
            styles: [__webpack_require__(/*! ./modify2.component.css */ "./src/app/program/modify2/modify2.component.css")]
        }),
        __metadata("design:paramtypes", [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Modify2Component);
    return Modify2Component;
}());



/***/ }),

/***/ "./src/app/program/program.component.css":
/*!***********************************************!*\
  !*** ./src/app/program/program.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n  background-color: lightgray;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n::ng-deep ellipse.node {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep ellipse.nodeNextMap {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep circle.ball {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep rect.button {\n  cursor: pointer;\n}\n\n::ng-deep path.link {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.dragLine {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.temp {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep text{\n  font: 10px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.gText{\n  font: 4px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.slider{\n  fill: rgb(77, 3, 67);\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 15px;\n  pointer-events: none;\n}\n\n::ng-deep text.toNext{\n  font: 30px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep svg:not(.active):not(.ctrl) {\n  cursor: crosshair;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscURBQXFEO0VBQ3JELGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgc3ZnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgZWxsaXBzZS5ub2RlTmV4dE1hcCB7XG4gIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIGNpcmNsZS5iYWxsIHtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgcmVjdC5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCBwYXRoLmxpbmsge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMwMDA7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjo6bmctZGVlcCBwYXRoLmRyYWdMaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjMDAwO1xuICBzdHJva2Utd2lkdGg6IDRweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG46Om5nLWRlZXAgcGF0aC50ZW1wIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjMDAwO1xuICBzdHJva2Utd2lkdGg6IDRweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG46Om5nLWRlZXAgdGV4dHtcbiAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHRleHQuZ1RleHR7XG4gIGZvbnQ6IDRweCBzYW5zLXNlcmlmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHRleHQuc2xpZGVye1xuICBmaWxsOiByZ2IoNzcsIDMsIDY3KTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuOjpuZy1kZWVwIHRleHQudG9OZXh0e1xuICBmb250OiAzMHB4IHNhbnMtc2VyaWY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cbjo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/program/program.component.ts":
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';


// import example from '../assets/example.json';


var ProgramComponent = /** @class */ (function () {
    function ProgramComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    ProgramComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes2;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap2;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords2;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links2;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_4__.glossaries2;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_4__.gTexts2;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
    };
    ProgramComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,5 250,80 40,30 0,160 160,450 500,450 1050,450 1000,200")
            .style("fill", "lightgreen")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['program']['choicetest']['true']) + parseInt(data['program']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['program']['choicetest']['true']) / (parseInt(data['program']['choicetest']['true']) + parseInt(data['program']['choicetest']['false']));
                }
                if ((parseInt(data['program']['blocktest']['total']['true']) + parseInt(data['program']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['program']['blocktest']['total']['true']) / (parseInt(data['program']['blocktest']['total']['true']) + parseInt(data['program']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append("polygon")
            .attr('class', 'clusterNextMap')
            .attr("points", "1050,450 1000,200 1050,70 1200,20 1240,120 1240,450")
            .style("fill", "lightyellow")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden')
            .on('mousedown', function (d) {
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            // if(this.svg.selectAll('polygon').attr('visibility')==='hidden'){
            //   this.svg.selectAll('rect.progress').remove();
            // }
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.selectAll('rect.progress').remove();
                _this.svg.selectAll('text.progress').remove();
            }
        });
        // this part works with normal html element
        // this.svg.append("foreignObject")
        // .attr("width", 800)
        // .attr("height", 400)
        // .append("xhtml:div")
        // .style("font", "14px 'Helvetica Neue'")
        // .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");
        //this part dosen't work with pdf-viewer
        // this.svg.append("foreignObject")
        // .attr('y',200)
        // .attr("width", 800)
        // .attr("height", 480)
        // .append("xhtml:pdf-viewer")
        // .style("display", "block")
        // .attr("src", this.pdfSrc)
        // // .attr('ng-reflect-src', 'https://cors-anywhere.herokuap')
        // .attr("render-text", true)
        // // .attr('ng-reflect-render-text',true)
        // .attr("page", "21")
        // // .attr('ng-reflect-page', '21')
        // // .attr('ng-reflect-zoom', '0.5')
        // // .attr('ng-reflect-show-all', false)
        // // .src(this.pdfSrc)
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/program/modify2" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/program/test2" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    ProgramComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
            this.restart();
        }
        this.restart();
    };
    ProgramComponent.prototype.mouseup = function (source) {
        console.log('mouseup');
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    ProgramComponent.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    ProgramComponent.prototype.restart = function () {
        var _this = this;
        var offset = 0;
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, offset, 'program');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        // this.testMapService.callServerTest().subscribe(data=>{
        //   for(var t = 0; t<this.nodes.length; t++){
        //     if (this.svg.selectAll('ellipse.node').filter(function(a,i){
        //       return a['id']===t;
        //     }).attr('locked')==='false'){
        //       this.svg.selectAll('ellipse.node').filter(function(a,i){
        //         return a['id']===t;
        //       })
        //       .style('fill',(d)=>{
        //         var correct = parseInt(data['program']['blocktest']['node'+t]['true']);
        //         var wrong = parseInt(data['program']['blocktest']['node'+t]['false']);
        //         if(correct===0&&wrong===0){
        //           return rgb(125,0,0);
        //         }
        //         else if(correct===wrong){
        //           return rgb(125,125,0);
        //         }
        //         else if(correct>wrong){
        //           return rgb(125*wrong/correct,125,0);
        //         }
        //         else{
        //           return rgb(125,125*correct/wrong,0)
        //         }
        //       })
        //     }
        //   }
        // })
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('rect.button').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    ProgramComponent.ctorParameters = function () { return [
        { type: _buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProgramComponent.prototype, "pdfViewers", void 0);
    ProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! raw-loader!./program.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/program.component.html"),
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]],
            styles: [__webpack_require__(/*! ./program.component.css */ "./src/app/program/program.component.css")]
        }),
        __metadata("design:paramtypes", [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/program/singleChoice/singleChoice.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/program/singleChoice/singleChoice.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: gray;\n  font-family: \"Apple Color Emoji\";\n  text-align: center;\n}\nbutton{\n  margin-top: 20px;\n  margin-bottom:20px;\n  padding: 5px 10px;\n  width: 90px;\n  height: 30px;\n  padding-top: 0px;\n  border-radius: 4px;\n}\n#explanation{\n  height: 150px;\n  width: 250px;\n  padding-left: 2px;\n  padding-right: 2px;\n  word-wrap:break-word;\n  word-break:break-all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9zaW5nbGVDaG9pY2Uvc2luZ2xlQ2hvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vc2luZ2xlQ2hvaWNlL3NpbmdsZUNob2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1mYW1pbHk6IFwiQXBwbGUgQ29sb3IgRW1vamlcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9ue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNleHBsYW5hdGlvbntcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICB3b3JkLXdyYXA6YnJlYWstd29yZDtcbiAgd29yZC1icmVhazpicmVhay1hbGw7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/program/singleChoice/singleChoice.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/program/singleChoice/singleChoice.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoiceComponent", function() { return SingleChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleChoiceComponent = /** @class */ (function () {
    function SingleChoiceComponent(testMapService) {
        this.testMapService = testMapService;
        this.questions = [
            { question: "Which languange does java belong to?",
                items: ["A. Machine Language", "B.Assembly Language", "C. High-Level Language", "None of them"],
                userchoice: "",
                rightanswer: "C",
                explanation: "explanation for the question 1"
            },
            { question: "Which one is the division operator?",
                items: ["A.   /   ", "B.  \\  ", "C.  *   ", "D.   %   "],
                userchoice: "",
                rightanswer: 'A',
                explanation: "explanation for the question 2"
            }
        ];
        this.questionPosition = 0;
        //public thisQuestion: Question = this.questions[this.questionPosition];
        this.textNow = '';
    }
    SingleChoiceComponent.prototype.ngOnInit = function () {
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
    };
    SingleChoiceComponent.prototype.submitAnswer = function () {
        var storeresult = [];
        for (var j = 0; j < this.questions.length; j++) {
            if (this.questions[j].userchoice === this.questions[j].rightanswer) {
                storeresult.push({ "result": true });
            }
            else {
                storeresult.push({ "result": false });
            }
        }
        var str = '';
        var resultAnswer = { "true": "0", "false": "0" };
        for (var i = 0; i < this.questions.length; i++) {
            str += 'Question' + (i + 1).toString() + '\n';
            if (storeresult[i]['result']) {
                resultAnswer['true'] = (parseInt(resultAnswer['true']) + 1).toString();
                str += "Your answer is right.\n" + this.questions[i].explanation + '\n';
            }
            else {
                resultAnswer['false'] = (parseInt(resultAnswer['false']) + 1).toString();
                str += "Your answer is wrong.\n" + this.questions[i].explanation + '\n';
            }
            this.textNow = str;
            this.testMapService.callServer('program', resultAnswer, 'choicetest');
        }
        document.getElementById('submit').disabled = true;
        this.textNow = str;
        //const blob = new Blob([JSON.stringify(storeresult)],{type:'application/json'});
        //saveAs(blob,'user1.json');
    };
    SingleChoiceComponent.prototype.questionPrevious = function () {
        this.questionPosition -= 1;
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
        document.getElementById('next').disabled = false;
    };
    SingleChoiceComponent.prototype.questionNext = function () {
        this.questionPosition += 1;
        if (this.questionPosition === this.questions.length - 1) {
            document.getElementById('next').disabled = true;
        }
        document.getElementById('previous').disabled = false;
    };
    SingleChoiceComponent.prototype.check = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].userchoice === '')
                return true;
        }
        return false;
    };
    SingleChoiceComponent.ctorParameters = function () { return [
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_1__["TestMapService"] }
    ]; };
    SingleChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singleChoice',
            template: __webpack_require__(/*! raw-loader!./singleChoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/singleChoice/singleChoice.component.html"),
            providers: [_testMap_service__WEBPACK_IMPORTED_MODULE_1__["TestMapService"]],
            styles: [__webpack_require__(/*! ./singleChoice.component.css */ "./src/app/program/singleChoice/singleChoice.component.css")]
        }),
        __metadata("design:paramtypes", [_testMap_service__WEBPACK_IMPORTED_MODULE_1__["TestMapService"]])
    ], SingleChoiceComponent);
    return SingleChoiceComponent;
}());



/***/ }),

/***/ "./src/app/program/test2/test2.component.css":
/*!***************************************************!*\
  !*** ./src/app/program/test2/test2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  \n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n  \n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS90ZXN0Mi90ZXN0Mi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCOztFQUlBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFHQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vdGVzdDIvdGVzdDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGVOZXh0TWFwIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGNpcmNsZS5iYWxsIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHJlY3QuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCBwYXRoLmxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGguZHJhZ0xpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGgudGVtcCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgdGV4dHtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCB0ZXh0LmdUZXh0e1xuICAgIGZvbnQ6IDRweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICBcbiAgXG4gIDo6bmctZGVlcCB0ZXh0LnRvTmV4dHtcbiAgICBmb250OiAzMHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICA6Om5nLWRlZXAgc3ZnOm5vdCguYWN0aXZlKTpub3QoLmN0cmwpIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/program/test2/test2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/program/test2/test2.component.ts ***!
  \**************************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testMap.service */ "./src/app/testMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';


// import example from '../assets/example.json';

var Test2Component = /** @class */ (function () {
    function Test2Component(testMapService, router) {
        this.testMapService = testMapService;
        this.router = router;
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.randomItem = [];
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
    }
    Test2Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes2;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap2;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords2;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links2;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        // console.log(this.nodes[0]);
    };
    Test2Component.prototype.ngAfterContentInit = function () {
        var _this = this;
        var svgArray = this.testMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.circleNextMap = svgArray[4];
        this.toNextMapRect = svgArray[5];
        this.randomItem = this.testMapService.random_item(this.nodes.length);
        for (var i = 0; i < this.randomItem.length; i++) {
            this.svg.append('foreignObject')
                .attr('width', 110)
                .attr('height', 70)
                .attr('x', this.nodes[this.randomItem[i]].x - 55)
                .attr('y', this.nodes[this.randomItem[i]].y - 8)
                .append('xhtml:input')
                .attr('type', 'text')
                .attr('class', 'form-control')
                .style('height', '10px')
                .style('font-size', '1px')
                .attr('id', i.toString());
        }
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Test2Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    Test2Component.prototype.mouseup = function (source) {
        console.log('mouseup');
        this.svg.classed('active', false);
    };
    Test2Component.prototype.submitAnswer = function () {
        var resultAnswer = {};
        for (var i = 0; i < this.randomItem.length; i++) {
            if (document.getElementById(i.toString()).value === this.nodes[this.randomItem[i]].text) {
                resultAnswer['node' + this.randomItem[i].toString()] = "true";
                document.getElementById(i.toString()).style.backgroundColor = 'aquamarine';
            }
            else {
                resultAnswer['node' + this.randomItem[i].toString()] = "false";
                document.getElementById(i.toString()).style.backgroundColor = 'lightSalmon';
            }
        }
        for (var key in resultAnswer) {
            console.log(resultAnswer[key]);
        }
        document.getElementById('submitBlock').disabled = true;
        this.testMapService.callServer('program', resultAnswer, "blocktest");
    };
    Test2Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Test2Component.prototype.restart = function () {
        var _this = this;
        var offset = 0;
        var buildMap = this.testMapService.buildMicroMap(this.svg, this.path, this.links, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.linkword = buildMap[3];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[4];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[5];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('rect.button').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Test2Component.ctorParameters = function () { return [
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Test2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__(/*! raw-loader!./test2.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/test2/test2.component.html"),
            providers: [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"]],
            styles: [__webpack_require__(/*! ./test2.component.css */ "./src/app/program/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]] // minimum 6 length password
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* The alert service enables any component in the application to
 * display alert messages at the top of the page via the alert component.
 * It has methods for displaying success and error messages, and a getMessage()
 * that returns an Observable that is used by the alert component to subscribe to
 * notifications for whenever a message should be displayed.
 */
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* The authentication service is used to login and logout of the application, to login
 * it posts the users credentials to the api and checks the response for a JWT token,
 * if there is one it means authentication was successful so the user details including
 *  the token are added to local storage (JSON file). The logged in user details are stored
 *  in local storage so the user will stay logged in if they refresh the browser and also between
 *  browser sessions until they logout.
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(config.apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // fake logout function
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* The user service contains a standard set of CRUD methods
 * for managing users, it acts as the interface between the
 * Angular application and the backend api.
 */
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(config.apiUrl + "/users");
    };
    UserService.prototype.register = function (user) {
        return this.http.post(config.apiUrl + "/users/register", user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(config.apiUrl + "/users/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/testMap.service.ts":
/*!************************************!*\
  !*** ./src/app/testMap.service.ts ***!
  \************************************/
/*! exports provided: TestMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMapService", function() { return TestMapService; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestMapService = /** @class */ (function () {
    function TestMapService(http) {
        this.http = http;
    }
    TestMapService.prototype.initSvg = function (svg, width, height, path, circle, linkword, circleNextMap, toNextMapRect, linkwords, toNextMapButton) {
        svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .attr('oncontextmenu', 'return false;')
            .attr('width', width)
            .attr('height', height)
            .attr('ready', false);
        // arrow styles
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        path = svg.append('svg:g').selectAll('path.link');
        circle = svg.append('svg:g').selectAll('g');
        circleNextMap = svg.append('svg:g').selectAll('gNextMap');
        // circleNextMap = svg.append('svg:g').selectAll('g');
        linkword = svg.append('svg:g').selectAll('text.linkword');
        // link word should only be created once, therefore moved into ngAfterInit
        // create link words
        linkword = linkword.data(linkwords, function (d) { return d.id; });
        linkword.exit().remove();
        // const g1 = linkword.enter().append('svg:g');
        linkword = linkword.enter()
            .append('svg:g')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('length', function (d) { return d.text.length; })
            .merge(linkword);
        svg.selectAll('g.linkword')
            .append('svg:ellipse')
            .attr('class', 'linkword')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y - 1; })
            .attr('rx', '10')
            .attr('ry', '10')
            .attr('fill', 'lightgrey');
        svg.selectAll('g.linkword')
            .append('svg:text')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        console.log(linkwords.length);
        var _loop_1 = function (id) {
            var textLength = svg.selectAll('g.linkword').filter(function (a, i) {
                return i === id;
            }).attr('length');
            //  console.log(parseInt(textLength)+1);
            svg.selectAll('ellipse.linkword').filter(function (a, i) {
                return i === id;
            }).attr('rx', parseInt(textLength) * 2.5 + 8);
        };
        for (var id = 0; id < parseInt(linkwords.length); id++) {
            _loop_1(id);
        }
        // create rectangular for asking if switch to the next map
        toNextMapRect = svg.append('rect')
            .attr('class', 'toNext')
            .attr('x', '200')
            .attr('y', '100')
            .attr('width', '800')
            .attr('height', '120')
            .attr('rx', '30')
            .attr('ry', '30')
            .style('fill', 'yellow')
            .style('opacity', '0.9')
            .attr('visibility', 'hidden');
        toNextMapRect = svg.append('svg:text')
            .attr('class', 'toNext')
            .attr('x', '460')
            .attr('y', '140')
            .attr('font-size', '30px')
            .attr('text-anchor', 'left')
            .attr('fill', 'purple')
            .text('Go to next map?')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        });
        toNextMapButton = svg.append('svg:rect')
            .attr('class', 'button')
            .attr('x', '320')
            .attr('y', '170')
            .attr('width', '150')
            .attr('height', '30')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('opacity', '0.9')
            .attr('fill', 'green')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('text.toNext').attr('routerLink', '/variable');
        });
        toNextMapButton = svg.append('svg:rect')
            .attr('class', 'button')
            .attr('x', '690')
            .attr('y', '170')
            .attr('width', '150')
            .attr('height', '30')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('opacity', '0.9')
            .attr('fill', 'red')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'hidden');
            svg.select('text.toNext').attr('visibility', 'hidden');
            svg.selectAll('rect.button').attr('visibility', 'hidden');
        });
        return [svg, path, circle, linkword, circleNextMap, toNextMapRect];
    };
    TestMapService.prototype.buildMicroMap = function (svg, path, links, circle, nodes, linkword, linkwords, nodesNextMap, circleNextMap, offset) {
        // svg.select('text.toNext').attr('font-size', '30px')
        // .attr('visibility', (d)=>{
        //   return svg.select('rect.toNext').attr('visibility');
        // });
        // bind the paths with data
        path = path.data(links);
        // bind the white rectangulars with data
        path.exit().remove();
        // create paths
        path = path
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', function (d) {
            var deltaX = d.target.x - d.source.x;
            var deltaY = d.target.y - d.source.y;
            var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var normX = deltaX / dist;
            var normY = deltaY / dist;
            var xy = Math.abs(deltaX / deltaY);
            var sourcePadding = 8;
            var targetPadding = 0;
            targetPadding = 0;
            sourcePadding = 0;
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(path);
        // bind the circle with data
        circle = circle.data(nodes, function (d) { return d.id; });
        circle.exit().remove();
        circleNextMap = circleNextMap.data(nodesNextMap, function (d) { return d.id; });
        circleNextMap.exit().remove();
        // for each node create a g element
        var g = circle.enter().append('svg:g');
        var gNextMap = circleNextMap.enter().append('svg:g');
        gNextMap.append('svg:ellipse')
            .attr('class', 'nodeNextMap')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return 'grey'; })
            .style('opacity', '0.9')
            .style('stroke', 'white')
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'visible');
            svg.select('text.toNext').attr('visibility', 'visible');
            svg.selectAll('rect.button').attr('visibility', 'visible');
        });
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) {
            return 'green';
        })
            .style('stroke', function (d) { return (!d.reflexive) ? 'black' : 'white'; })
            .on('mousedown', function (d) {
            // this code is needed for initialize the mousedown function before dragging the slider bar
            if (parseInt(svg.select('circle.ball').attr('cx')) === 900) {
                window.alert('Node locked');
            }
            else {
            }
        });
        // create texts
        g.append('svg:text')
            .attr('class', 'eText')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        gNextMap.append('svg:text')
            .attr('class', 'eTextNextMap')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        circleNextMap = gNextMap.merge(circleNextMap);
        circleNextMap.exit().remove();
        circle = g.merge(circle);
        circle.exit().remove();
        var routerLink = svg.select('text.toNext').attr('routerLink');
        // console.log(routerLink);
        return [svg, circle, path, linkword, circleNextMap, routerLink];
    };
    TestMapService.prototype.random_item = function (length) {
        var randomitem = [];
        while (randomitem.length <= (length / 4)) {
            var i = Math.floor(Math.random() * Math.floor(length));
            if (!randomitem.includes(i)) {
                randomitem.push(i);
            }
        }
        console.log(randomitem);
        return randomitem;
    };
    TestMapService.prototype.callServer = function (mapName, resultAnswer, testMode) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://127.0.0.1:3000/get').subscribe(function (data) {
            console.log('origin' + JSON.stringify(data));
            if (testMode === 'blocktest') {
                for (var key in resultAnswer) {
                    data[mapName][testMode][key][resultAnswer[key]] = parseInt(data[mapName].blocktest[key][resultAnswer[key]]) + 1;
                    data[mapName][testMode].total[resultAnswer[key]] = parseInt(data[mapName].blocktest.total[resultAnswer[key]]) + 1;
                }
            }
            else if (testMode === 'choicetest') {
                for (var key in resultAnswer) {
                    data[mapName][testMode][key] = parseInt(data[mapName][testMode][key]) + parseInt(resultAnswer[key]);
                }
            }
            else {
                _this.resultChoicetest = parseInt(data[mapName]['choicetest']['true']) / (parseInt(data[mapName]['choicetest']['true']) + parseInt(data[mapName]['choicetest']['false']));
                _this.resultBlocktest = parseInt(data[mapName]['blocktest']['total']['true']) / (parseInt(data[mapName]['blocktest']['total']['true']) + parseInt(data[mapName]['blocktest']['total']['false']));
            }
            console.log('get: ' + JSON.stringify(data[mapName]['choicetest']));
            console.log('success');
            _this.http.post('http://127.0.0.1:3000/post', JSON.stringify(data), {
                headers: headers
            })
                .subscribe(function (data) {
                // console.log('send: ' + JSON.stringify(data));
            });
        }, function (err) {
            console.log('Error occured.' + JSON.stringify(err));
        });
        if (testMode === 'getresult') {
            return 'Choice Test result: ' + this.resultChoicetest.toString() + '%          \nBlock Test result: ' + this.resultBlocktest + "%";
        }
    };
    TestMapService.prototype.callServerTest = function () {
        return this.http.get('http://127.0.0.1:3000/get').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    TestMapService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TestMapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TestMapService);
    return TestMapService;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    UserlistComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function () { return _this.loadAllUsers(); });
    };
    UserlistComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (users) { return _this.users = users; });
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/variable/modify3/modify3.component.css":
/*!********************************************************!*\
  !*** ./src/app/variable/modify3/modify3.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n\n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n\n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n\n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n\n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFyaWFibGUvbW9kaWZ5My9tb2RpZnkzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7RUFDdEI7O0VBSUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUdBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmFyaWFibGUvbW9kaWZ5My9tb2RpZnkzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCBlbGxpcHNlLm5vZGVOZXh0TWFwIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCBjaXJjbGUuYmFsbCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Om5nLWRlZXAgcmVjdC5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIDo6bmctZGVlcCBwYXRoLmxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIDo6bmctZGVlcCBwYXRoLmRyYWdMaW5lIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICA6Om5nLWRlZXAgcGF0aC50ZW1wIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICA6Om5nLWRlZXAgdGV4dHtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICA6Om5nLWRlZXAgdGV4dC5nVGV4dHtcbiAgICBmb250OiA0cHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG5cblxuICA6Om5nLWRlZXAgdGV4dC50b05leHR7XG4gICAgZm9udDogMzBweCBzYW5zLXNlcmlmO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgXG4gIDo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/variable/modify3/modify3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/variable/modify3/modify3.component.ts ***!
  \*******************************************************/
/*! exports provided: Modify3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modify3Component", function() { return Modify3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modifyMap.service */ "./src/app/modifyMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';

// import example from '../assets/example.json';


var Modify3Component = /** @class */ (function () {
    function Modify3Component(modifyMapService, router) {
        this.modifyMapService = modifyMapService;
        this.router = router;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    Modify3Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodes3;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_3__.nodesNextMap3;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_3__.linkwords3;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_3__.links3;
        // console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true, "id": null };
            link.id = temp[i].id;
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i].source);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_3__.glossaries3;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null, 'id': null };
            glossary.page = temp2[i].page;
            glossary.id = temp2[i].id;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_3__.gTexts3;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null, 'id': null };
            gText.page = temp3[i].page;
            gText.id = temp3[i].id;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    Modify3Component.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.modifyMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.modifyMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.circleNextMap = svgArray[7];
        this.toNextMapRect = svgArray[8];
        // this part works with normal html element
        // this.svg.append("foreignObject")
        // .attr("width", 800)
        // .attr("height", 400)
        // .append("xhtml:div")
        // .style("font", "14px 'Helvetica Neue'")
        // .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");
        //this part dosen't work with pdf-viewer
        // this.svg.append("foreignObject")
        // .attr('y',200)
        // .attr("width", 800)
        // .attr("height", 480)
        // .append("xhtml:pdf-viewer")
        // .style("display", "block")
        // .attr("src", this.pdfSrc)
        // // .attr('ng-reflect-src', 'https://cors-anywhere.herokuap')
        // .attr("render-text", true)
        // // .attr('ng-reflect-render-text',true)
        // .attr("page", "21")
        // // .attr('ng-reflect-page', '21')
        // // .attr('ng-reflect-zoom', '0.5')
        // // .attr('ng-reflect-show-all', false)
        // // .src(this.pdfSrc)
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Modify3Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        console.log('mousedown');
        if (this.svg.attr('clickOnNode') === 'false') {
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
            this.restart();
        }
        this.restart();
    };
    Modify3Component.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        this.svg.attr('clickOnNode', 'false');
    };
    Modify3Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Modify3Component.prototype.restart = function () {
        // console.log('restart');
        var _this = this;
        var offset = 0;
        var buildMap = this.modifyMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -900 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('foreignObject.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Modify3Component.ctorParameters = function () { return [
        { type: _modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Modify3Component.prototype, "pdfViewers", void 0);
    Modify3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify3',
            template: __webpack_require__(/*! raw-loader!./modify3.component.html */ "./node_modules/raw-loader/index.js!./src/app/variable/modify3/modify3.component.html"),
            providers: [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"]],
            styles: [__webpack_require__(/*! ./modify3.component.css */ "./src/app/variable/modify3/modify3.component.css")]
        }),
        __metadata("design:paramtypes", [_modifyMap_service__WEBPACK_IMPORTED_MODULE_4__["ModifyMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Modify3Component);
    return Modify3Component;
}());



/***/ }),

/***/ "./src/app/variable/test3/test3.component.css":
/*!****************************************************!*\
  !*** ./src/app/variable/test3/test3.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n    background-color: lightgray;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  \n  ::ng-deep ellipse.node {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep ellipse.nodeNextMap {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep circle.ball {\n    stroke-width: 1.5px;\n    cursor: pointer;\n  }\n  \n  ::ng-deep rect.button {\n    cursor: pointer;\n  }\n  \n  ::ng-deep path.link {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.dragLine {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep path.temp {\n    fill: none;\n    stroke: #000;\n    stroke-width: 4px;\n    cursor: default;\n  }\n  \n  ::ng-deep text{\n    font: 10px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.gText{\n    font: 4px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep text.toNext{\n    font: 30px sans-serif;\n    pointer-events: none;\n  }\n  \n  ::ng-deep svg:not(.active):not(.ctrl) {\n    cursor: crosshair;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFyaWFibGUvdGVzdDMvdGVzdDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0Qjs7RUFJQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC92YXJpYWJsZS90ZXN0My90ZXN0My5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgZWxsaXBzZS5ub2RlIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIGVsbGlwc2Uubm9kZU5leHRNYXAge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgY2lyY2xlLmJhbGwge1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcmVjdC5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHBhdGgubGluayB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcGF0aC5kcmFnTGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgcGF0aC50ZW1wIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogIzAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCB0ZXh0e1xuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIHRleHQuZ1RleHR7XG4gICAgZm9udDogNHB4IHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICBcbiAgOjpuZy1kZWVwIHRleHQudG9OZXh0e1xuICAgIGZvbnQ6IDMwcHggc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgXG4gIDo6bmctZGVlcCBzdmc6bm90KC5hY3RpdmUpOm5vdCguY3RybCkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/variable/test3/test3.component.ts":
/*!***************************************************!*\
  !*** ./src/app/variable/test3/test3.component.ts ***!
  \***************************************************/
/*! exports provided: Test3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test3Component", function() { return Test3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testMap.service */ "./src/app/testMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/app/data.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Test3Component = /** @class */ (function () {
    function Test3Component(testMapService, router) {
        this.testMapService = testMapService;
        this.router = router;
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.randomItem = [];
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
    }
    Test3Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes3;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap3;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords3;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links3;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        // console.log(this.nodes[0]);
    };
    Test3Component.prototype.ngAfterContentInit = function () {
        var _this = this;
        var svgArray = this.testMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.circleNextMap = svgArray[4];
        this.toNextMapRect = svgArray[5];
        this.randomItem = this.testMapService.random_item(this.nodes.length);
        for (var i = 0; i < this.randomItem.length; i++) {
            this.svg.append('foreignObject')
                .attr('width', 110)
                .attr('height', 70)
                .attr('x', this.nodes[this.randomItem[i]].x - 55)
                .attr('y', this.nodes[this.randomItem[i]].y - 8)
                .append('xhtml:input')
                .attr('type', 'text')
                .attr('class', 'form-control')
                .style('height', '10px')
                .style('font-size', '1px')
                .attr('id', i.toString());
        }
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Test3Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    Test3Component.prototype.mouseup = function (source) {
        console.log('mouseup');
        this.svg.classed('active', false);
    };
    Test3Component.prototype.submitAnswer = function () {
        var resultAnswer = {};
        for (var i = 0; i < this.randomItem.length; i++) {
            if (document.getElementById(i.toString()).value === this.nodes[this.randomItem[i]].text) {
                resultAnswer['node' + this.randomItem[i].toString()] = "true";
                document.getElementById(i.toString()).style.backgroundColor = 'aquamarine';
            }
            else {
                resultAnswer['node' + this.randomItem[i].toString()] = "false";
                document.getElementById(i.toString()).style.backgroundColor = 'lightSalmon';
            }
        }
        for (var key in resultAnswer) {
            console.log(resultAnswer[key]);
        }
        document.getElementById('submitBlock').disabled = true;
        this.testMapService.callServer('variable', resultAnswer, "blocktest");
    };
    Test3Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Test3Component.prototype.restart = function () {
        var _this = this;
        var offset = 0;
        var buildMap = this.testMapService.buildMicroMap(this.svg, this.path, this.links, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.linkword = buildMap[3];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[4];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[5];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            setTimeout(function () {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('rect.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('text.toNext').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('rect.button').attr('visibility', 'hidden');
                d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Test3Component.ctorParameters = function () { return [
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Test3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test3',
            template: __webpack_require__(/*! raw-loader!./test3.component.html */ "./node_modules/raw-loader/index.js!./src/app/variable/test3/test3.component.html"),
            providers: [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"]],
            styles: [__webpack_require__(/*! ./test3.component.css */ "./src/app/variable/test3/test3.component.css")]
        }),
        __metadata("design:paramtypes", [_testMap_service__WEBPACK_IMPORTED_MODULE_2__["TestMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Test3Component);
    return Test3Component;
}());



/***/ }),

/***/ "./src/app/variable/variable.component.css":
/*!*************************************************!*\
  !*** ./src/app/variable/variable.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep svg {\n  background-color: lightgray;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n::ng-deep ellipse.node {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep ellipse.nodeNextMap {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep circle.ball {\n  stroke-width: 1.5px;\n  cursor: pointer;\n}\n\n::ng-deep rect.button {\n  cursor: pointer;\n}\n\n::ng-deep path.link {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.dragLine {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep path.temp {\n  fill: none;\n  stroke: #000;\n  stroke-width: 4px;\n  cursor: default;\n}\n\n::ng-deep text{\n  font: 10px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.gText{\n  font: 4px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep text.slider{\n  fill: rgb(77, 3, 67);\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 15px;\n  pointer-events: none;\n}\n\n::ng-deep text.toNext{\n  font: 30px sans-serif;\n  pointer-events: none;\n}\n\n::ng-deep svg:not(.active):not(.ctrl) {\n  cursor: crosshair;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFyaWFibGUvdmFyaWFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxREFBcUQ7RUFDckQsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92YXJpYWJsZS92YXJpYWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHN2ZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuOjpuZy1kZWVwIGVsbGlwc2Uubm9kZSB7XG4gIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIGVsbGlwc2Uubm9kZU5leHRNYXAge1xuICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCBjaXJjbGUuYmFsbCB7XG4gIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIHJlY3QuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgcGF0aC5saW5rIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjMDAwO1xuICBzdHJva2Utd2lkdGg6IDRweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG46Om5nLWRlZXAgcGF0aC5kcmFnTGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOjpuZy1kZWVwIHBhdGgudGVtcCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOjpuZy1kZWVwIHRleHR7XG4gIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB0ZXh0LmdUZXh0e1xuICBmb250OiA0cHggc2Fucy1zZXJpZjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB0ZXh0LnNsaWRlcntcbiAgZmlsbDogcmdiKDc3LCAzLCA2Nyk7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cbjo6bmctZGVlcCB0ZXh0LnRvTmV4dHtcbiAgZm9udDogMzBweCBzYW5zLXNlcmlmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG46Om5nLWRlZXAgc3ZnOm5vdCguYWN0aXZlKTpub3QoLmN0cmwpIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/variable/variable.component.ts":
/*!************************************************!*\
  !*** ./src/app/variable/variable.component.ts ***!
  \************************************************/
/*! exports provided: VariableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableComponent", function() { return VariableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _buildMap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildMap.service */ "./src/app/buildMap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./src/app/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./src/app/data.json", 1);
/* harmony import */ var _testMap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testMap.service */ "./src/app/testMap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { svg } from 'd3';




var VariableComponent = /** @class */ (function () {
    function VariableComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    VariableComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodes3;
        this.nodesNextMap = _data_json__WEBPACK_IMPORTED_MODULE_4__.nodesNextMap3;
        this.linkwords = _data_json__WEBPACK_IMPORTED_MODULE_4__.linkwords3;
        var temp = _data_json__WEBPACK_IMPORTED_MODULE_4__.links3;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = _data_json__WEBPACK_IMPORTED_MODULE_4__.glossaries3;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = _data_json__WEBPACK_IMPORTED_MODULE_4__.gTexts3;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    VariableComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.nodesNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,5 250,30 80,100 0,160 480,450 500,450 950,450 800,200")
            .style("fill", "lightgreen")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['variable']['choicetest']['true']) + parseInt(data['variable']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['variable']['choicetest']['true']) / (parseInt(data['variable']['choicetest']['true']) + parseInt(data['variable']['choicetest']['false']));
                }
                if ((parseInt(data['variable']['blocktest']['total']['true']) + parseInt(data['variable']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['variable']['blocktest']['total']['true']) / (parseInt(data['variable']['blocktest']['total']['true']) + parseInt(data['variable']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.selectAll('rect.progress').remove();
                _this.svg.selectAll('text.progress').remove();
            }
        });
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '550')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/variable/modify3" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '10')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/variable/test3" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    VariableComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            //  console.log('this is my : ' + this.selectedNode );
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        }
        this.restart();
    };
    VariableComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    // refresh function
    VariableComponent.prototype.restart = function () {
        var offset = 0;
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, offset, 'variable');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        // this.svg.selectAll('ellipse').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('text.eText').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('text.linkword').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('path.link').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('ellipse.linkword').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('rect.gRect').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('text.gText').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('image.gImage').transition()
        // .duration(0)
        // .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        // this.svg.selectAll('text.eTextNextMap').transition()
        //   .duration(0)
        //   .attr('transform', 'translate(' + -600  + ',' + 0 + ')');
        this.routerLink = buildMap[8];
        console.log(this.routerLink);
    };
    VariableComponent.ctorParameters = function () { return [
        { type: _buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VariableComponent.prototype, "graphContainer", void 0);
    VariableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-variable',
            template: __webpack_require__(/*! raw-loader!./variable.component.html */ "./node_modules/raw-loader/index.js!./src/app/variable/variable.component.html"),
            providers: [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]],
            styles: [__webpack_require__(/*! ./variable.component.css */ "./src/app/variable/variable.component.css")]
        }),
        __metadata("design:paramtypes", [_buildMap_service__WEBPACK_IMPORTED_MODULE_2__["BuildMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _testMap_service__WEBPACK_IMPORTED_MODULE_5__["TestMapService"]])
    ], VariableComponent);
    return VariableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_features_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/features/reflect */ "./node_modules/core-js/features/reflect/index.js");
/* harmony import */ var core_js_features_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_features_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
//import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Polyfills are used to add support for features where necessary
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yasemin/eclipse-workspace/tutorial-angular101/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map