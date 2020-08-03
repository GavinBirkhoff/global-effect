(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.deleteGlobalEffectKey = exports.setGlobalEffect = exports.getGlobalEffect = void 0;
    var win;

    var __globalEffect = Symbol("GlobalEffect");

    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }

    function getGlobalEffect(key) {
      if (win[__globalEffect] === undefined) {
        console.warn("Please preset global-effect");
        return;
      }

      var value = win[__globalEffect].get(key);

      if (value !== undefined) {
        return value;
      } else {
        console.warn("Please use existing value not is " + key);
        return undefined;
      }
    }

    exports.getGlobalEffect = getGlobalEffect;

    function setGlobalEffect(key, value) {
      if (win[__globalEffect] === undefined) {
        win[__globalEffect] = new Map();
      }

      if (win[__globalEffect].has(key)) {
        throw new Error("You cannot set this value of " + key + " for global-effect");
      } else {
        return win[__globalEffect].set(key, value);
      }
    }

    exports.setGlobalEffect = setGlobalEffect;

    function deleteGlobalEffectKey(key) {
      if (win[__globalEffect] === undefined) {
        console.warn("Please preset global-effect");
        return false;
      }

      if (win[__globalEffect].has(key)) {
        return win[__globalEffect].delete(key);
      } else {
        console.warn("If you will delete some keys, Please use existing value not is " + key);
      }

      return false;
    }

    exports.deleteGlobalEffectKey = deleteGlobalEffectKey;

})));
