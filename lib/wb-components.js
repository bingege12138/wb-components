import * as b from "react";
import K, { version as oc, isValidElement as ac, useContext as ze, createContext as fo, useRef as yt, useLayoutEffect as ic, useEffect as St, forwardRef as vo, useMemo as cc, useState as Po, Children as sc, createRef as lc } from "react";
import * as uc from "react-dom";
import Ao from "react-dom";
function fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wn = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function dc() {
  if (jo) return Gt;
  jo = 1;
  var e = K, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, l) {
    var f, d = {}, v = null, C = null;
    l !== void 0 && (v = "" + l), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (C = s.ref);
    for (f in s) n.call(s, f) && !a.hasOwnProperty(f) && (d[f] = s[f]);
    if (c && c.defaultProps) for (f in s = c.defaultProps, s) d[f] === void 0 && (d[f] = s[f]);
    return { $$typeof: t, type: c, key: v, ref: C, props: d, _owner: o.current };
  }
  return Gt.Fragment = r, Gt.jsx = i, Gt.jsxs = i, Gt;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function vc() {
  return Mo || (Mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = K, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), w = Symbol.iterator, g = "@@iterator";
    function p(u) {
      if (u === null || typeof u != "object")
        return null;
      var x = w && u[w] || u[g];
      return typeof x == "function" ? x : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(u) {
      {
        for (var x = arguments.length, $ = new Array(x > 1 ? x - 1 : 0), z = 1; z < x; z++)
          $[z - 1] = arguments[z];
        M("error", u, $);
      }
    }
    function M(u, x, $) {
      {
        var z = T.ReactDebugCurrentFrame, ee = z.getStackAddendum();
        ee !== "" && (x += "%s", $ = $.concat([ee]));
        var q = $.map(function(Z) {
          return String(Z);
        });
        q.unshift("Warning: " + x), Function.prototype.apply.call(console[u], console, q);
      }
    }
    var P = !1, _ = !1, O = !1, E = !1, j = !1, B;
    B = Symbol.for("react.module.reference");
    function W(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || j || u === o || u === l || u === f || E || u === C || P || _ || O || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === d || u.$$typeof === i || u.$$typeof === c || u.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === B || u.getModuleId !== void 0));
    }
    function G(u, x, $) {
      var z = u.displayName;
      if (z)
        return z;
      var ee = x.displayName || x.name || "";
      return ee !== "" ? $ + "(" + ee + ")" : $;
    }
    function V(u) {
      return u.displayName || "Context";
    }
    function N(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            var x = u;
            return V(x) + ".Consumer";
          case i:
            var $ = u;
            return V($._context) + ".Provider";
          case s:
            return G(u, u.render, "ForwardRef");
          case d:
            var z = u.displayName || null;
            return z !== null ? z : N(u.type) || "Memo";
          case v: {
            var ee = u, q = ee._payload, Z = ee._init;
            try {
              return N(Z(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, U = 0, S, h, m, R, L, A, H;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function Q() {
      {
        if (U === 0) {
          S = console.log, h = console.info, m = console.warn, R = console.error, L = console.group, A = console.groupCollapsed, H = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        U++;
      }
    }
    function ue() {
      {
        if (U--, U === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, u, {
              value: S
            }),
            info: I({}, u, {
              value: h
            }),
            warn: I({}, u, {
              value: m
            }),
            error: I({}, u, {
              value: R
            }),
            group: I({}, u, {
              value: L
            }),
            groupCollapsed: I({}, u, {
              value: A
            }),
            groupEnd: I({}, u, {
              value: H
            })
          });
        }
        U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = T.ReactCurrentDispatcher, oe;
    function Se(u, x, $) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (ee) {
            var z = ee.stack.trim().match(/\n( *(at )?)/);
            oe = z && z[1] || "";
          }
        return `
` + oe + u;
      }
    }
    var Ce = !1, xe;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new _e();
    }
    function be(u, x) {
      if (!u || Ce)
        return "";
      {
        var $ = xe.get(u);
        if ($ !== void 0)
          return $;
      }
      var z;
      Ce = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = ae.current, ae.current = null, Q();
      try {
        if (x) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Oe) {
              z = Oe;
            }
            Reflect.construct(u, [], Z);
          } else {
            try {
              Z.call();
            } catch (Oe) {
              z = Oe;
            }
            u.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            z = Oe;
          }
          u();
        }
      } catch (Oe) {
        if (Oe && z && typeof Oe.stack == "string") {
          for (var J = Oe.stack.split(`
`), Ee = z.stack.split(`
`), fe = J.length - 1, ge = Ee.length - 1; fe >= 1 && ge >= 0 && J[fe] !== Ee[ge]; )
            ge--;
          for (; fe >= 1 && ge >= 0; fe--, ge--)
            if (J[fe] !== Ee[ge]) {
              if (fe !== 1 || ge !== 1)
                do
                  if (fe--, ge--, ge < 0 || J[fe] !== Ee[ge]) {
                    var Ne = `
` + J[fe].replace(" at new ", " at ");
                    return u.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", u.displayName)), typeof u == "function" && xe.set(u, Ne), Ne;
                  }
                while (fe >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ae.current = q, ue(), Error.prepareStackTrace = ee;
      }
      var Ot = u ? u.displayName || u.name : "", ht = Ot ? Se(Ot) : "";
      return typeof u == "function" && xe.set(u, ht), ht;
    }
    function Ue(u, x, $) {
      return be(u, !1);
    }
    function D(u) {
      var x = u.prototype;
      return !!(x && x.isReactComponent);
    }
    function we(u, x, $) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return be(u, D(u));
      if (typeof u == "string")
        return Se(u);
      switch (u) {
        case l:
          return Se("Suspense");
        case f:
          return Se("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            return Ue(u.render);
          case d:
            return we(u.type, x, $);
          case v: {
            var z = u, ee = z._payload, q = z._init;
            try {
              return we(q(ee), x, $);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Me = {}, Be = T.ReactDebugCurrentFrame;
    function $e(u) {
      if (u) {
        var x = u._owner, $ = we(u.type, u._source, x ? x.type : null);
        Be.setExtraStackFrame($);
      } else
        Be.setExtraStackFrame(null);
    }
    function de(u, x, $, z, ee) {
      {
        var q = Function.call.bind(ie);
        for (var Z in u)
          if (q(u, Z)) {
            var J = void 0;
            try {
              if (typeof u[Z] != "function") {
                var Ee = Error((z || "React class") + ": " + $ + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              J = u[Z](x, Z, z, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              J = fe;
            }
            J && !(J instanceof Error) && ($e(ee), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", $, Z, typeof J), $e(null)), J instanceof Error && !(J.message in Me) && (Me[J.message] = !0, $e(ee), y("Failed %s type: %s", $, J.message), $e(null));
          }
      }
    }
    var se = Array.isArray;
    function me(u) {
      return se(u);
    }
    function Ie(u) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, $ = x && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return $;
      }
    }
    function ce(u) {
      try {
        return Te(u), !1;
      } catch {
        return !0;
      }
    }
    function Te(u) {
      return "" + u;
    }
    function at(u) {
      if (ce(u))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(u)), Te(u);
    }
    var gt = T.ReactCurrentOwner, Yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, cr, Ft;
    Ft = {};
    function qr(u) {
      if (ie.call(u, "ref")) {
        var x = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Kr(u) {
      if (ie.call(u, "key")) {
        var x = Object.getOwnPropertyDescriptor(u, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Qr(u, x) {
      if (typeof u.ref == "string" && gt.current && x && gt.current.stateNode !== x) {
        var $ = N(gt.current.type);
        Ft[$] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(gt.current.type), u.ref), Ft[$] = !0);
      }
    }
    function Jr(u, x) {
      {
        var $ = function() {
          ir || (ir = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        $.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Zr(u, x) {
      {
        var $ = function() {
          cr || (cr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        $.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var en = function(u, x, $, z, ee, q, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: x,
        ref: $,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function tn(u, x, $, z, ee) {
      {
        var q, Z = {}, J = null, Ee = null;
        $ !== void 0 && (at($), J = "" + $), Kr(x) && (at(x.key), J = "" + x.key), qr(x) && (Ee = x.ref, Qr(x, ee));
        for (q in x)
          ie.call(x, q) && !Yr.hasOwnProperty(q) && (Z[q] = x[q]);
        if (u && u.defaultProps) {
          var fe = u.defaultProps;
          for (q in fe)
            Z[q] === void 0 && (Z[q] = fe[q]);
        }
        if (J || Ee) {
          var ge = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          J && Jr(Z, ge), Ee && Zr(Z, ge);
        }
        return en(u, J, Ee, ee, z, gt.current, Z);
      }
    }
    var zt = T.ReactCurrentOwner, Vt = T.ReactDebugCurrentFrame;
    function Le(u) {
      if (u) {
        var x = u._owner, $ = we(u.type, u._source, x ? x.type : null);
        Vt.setExtraStackFrame($);
      } else
        Vt.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function it(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function wt() {
      {
        if (zt.current) {
          var u = N(zt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function ct(u) {
      return "";
    }
    var qe = {};
    function rn(u) {
      {
        var x = wt();
        if (!x) {
          var $ = typeof u == "string" ? u : u.displayName || u.name;
          $ && (x = `

Check the top-level render call using <` + $ + ">.");
        }
        return x;
      }
    }
    function ve(u, x) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var $ = rn(x);
        if (qe[$])
          return;
        qe[$] = !0;
        var z = "";
        u && u._owner && u._owner !== zt.current && (z = " It was passed a child from " + N(u._owner.type) + "."), Le(u), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, z), Le(null);
      }
    }
    function Wt(u, x) {
      {
        if (typeof u != "object")
          return;
        if (me(u))
          for (var $ = 0; $ < u.length; $++) {
            var z = u[$];
            it(z) && ve(z, x);
          }
        else if (it(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var ee = p(u);
          if (typeof ee == "function" && ee !== u.entries)
            for (var q = ee.call(u), Z; !(Z = q.next()).done; )
              it(Z.value) && ve(Z.value, x);
        }
      }
    }
    function nn(u) {
      {
        var x = u.type;
        if (x == null || typeof x == "string")
          return;
        var $;
        if (typeof x == "function")
          $ = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === d))
          $ = x.propTypes;
        else
          return;
        if ($) {
          var z = N(x);
          de($, u.props, "prop", z, u);
        } else if (x.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var ee = N(x);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function le(u) {
      {
        for (var x = Object.keys(u.props), $ = 0; $ < x.length; $++) {
          var z = x[$];
          if (z !== "children" && z !== "key") {
            Le(u), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Le(null);
            break;
          }
        }
        u.ref !== null && (Le(u), y("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    var pe = {};
    function Re(u, x, $, z, ee, q) {
      {
        var Z = W(u);
        if (!Z) {
          var J = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = ct();
          Ee ? J += Ee : J += wt();
          var fe;
          u === null ? fe = "null" : me(u) ? fe = "array" : u !== void 0 && u.$$typeof === t ? (fe = "<" + (N(u.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof u, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, J);
        }
        var ge = tn(u, x, $, ee, q);
        if (ge == null)
          return ge;
        if (Z) {
          var Ne = x.children;
          if (Ne !== void 0)
            if (z)
              if (me(Ne)) {
                for (var Ot = 0; Ot < Ne.length; Ot++)
                  Wt(Ne[Ot], u);
                Object.freeze && Object.freeze(Ne);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(Ne, u);
        }
        if (ie.call(x, "key")) {
          var ht = N(u), Oe = Object.keys(x).filter(function(nc) {
            return nc !== "key";
          }), an = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pe[ht + an]) {
            var rc = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, an, ht, rc, ht), pe[ht + an] = !0;
          }
        }
        return u === n ? le(ge) : nn(ge), ge;
      }
    }
    function ke(u, x, $) {
      return Re(u, x, $, !0);
    }
    function Tt(u, x, $) {
      return Re(u, x, $, !1);
    }
    var on = Tt, sr = ke;
    Ut.Fragment = n, Ut.jsx = on, Ut.jsxs = sr;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? wn.exports = dc() : wn.exports = vc();
var pc = wn.exports, _a = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var c = arguments[i];
        c && (a = o(a, n(c)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var c in a)
        t.call(a, c) && a[c] && (i = o(i, c));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(_a);
var gc = _a.exports;
const Ve = /* @__PURE__ */ fc(gc);
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jt.apply(null, arguments);
}
var Tn = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function hc() {
  if ($o) return te;
  $o = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var T = p.$$typeof;
      switch (T) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case l:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case s:
                case v:
                case d:
                case a:
                  return p;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = a, te.Element = e, te.ForwardRef = s, te.Fragment = r, te.Lazy = v, te.Memo = d, te.Portal = t, te.Profiler = o, te.StrictMode = n, te.Suspense = l, te.SuspenseList = f, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(p) {
    return g(p) === i;
  }, te.isContextProvider = function(p) {
    return g(p) === a;
  }, te.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, te.isForwardRef = function(p) {
    return g(p) === s;
  }, te.isFragment = function(p) {
    return g(p) === r;
  }, te.isLazy = function(p) {
    return g(p) === v;
  }, te.isMemo = function(p) {
    return g(p) === d;
  }, te.isPortal = function(p) {
    return g(p) === t;
  }, te.isProfiler = function(p) {
    return g(p) === o;
  }, te.isStrictMode = function(p) {
    return g(p) === n;
  }, te.isSuspense = function(p) {
    return g(p) === l;
  }, te.isSuspenseList = function(p) {
    return g(p) === f;
  }, te.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === l || p === f || p === C || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === d || p.$$typeof === a || p.$$typeof === i || p.$$typeof === s || p.$$typeof === w || p.getModuleId !== void 0);
  }, te.typeOf = g, te;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function mc() {
  return Io || (Io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), w = !1, g = !1, p = !1, T = !1, y = !1, M;
    M = Symbol.for("react.module.reference");
    function P(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || y || D === n || D === l || D === f || T || D === C || w || g || p || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === d || D.$$typeof === a || D.$$typeof === i || D.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === M || D.getModuleId !== void 0));
    }
    function _(D) {
      if (typeof D == "object" && D !== null) {
        var we = D.$$typeof;
        switch (we) {
          case e:
            var ie = D.type;
            switch (ie) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return ie;
              default:
                var Me = ie && ie.$$typeof;
                switch (Me) {
                  case c:
                  case i:
                  case s:
                  case v:
                  case d:
                  case a:
                    return Me;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var O = i, E = a, j = e, B = s, W = r, G = v, V = d, N = t, I = o, U = n, S = l, h = f, m = !1, R = !1;
    function L(D) {
      return m || (m = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(D) {
      return R || (R = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(D) {
      return _(D) === i;
    }
    function F(D) {
      return _(D) === a;
    }
    function Q(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ue(D) {
      return _(D) === s;
    }
    function ae(D) {
      return _(D) === r;
    }
    function oe(D) {
      return _(D) === v;
    }
    function Se(D) {
      return _(D) === d;
    }
    function Ce(D) {
      return _(D) === t;
    }
    function xe(D) {
      return _(D) === o;
    }
    function _e(D) {
      return _(D) === n;
    }
    function be(D) {
      return _(D) === l;
    }
    function Ue(D) {
      return _(D) === f;
    }
    re.ContextConsumer = O, re.ContextProvider = E, re.Element = j, re.ForwardRef = B, re.Fragment = W, re.Lazy = G, re.Memo = V, re.Portal = N, re.Profiler = I, re.StrictMode = U, re.Suspense = S, re.SuspenseList = h, re.isAsyncMode = L, re.isConcurrentMode = A, re.isContextConsumer = H, re.isContextProvider = F, re.isElement = Q, re.isForwardRef = ue, re.isFragment = ae, re.isLazy = oe, re.isMemo = Se, re.isPortal = Ce, re.isProfiler = xe, re.isStrictMode = _e, re.isSuspense = be, re.isSuspenseList = Ue, re.isValidElementType = P, re.typeOf = _;
  }()), re;
}
process.env.NODE_ENV === "production" ? Tn.exports = hc() : Tn.exports = mc();
var Sr = Tn.exports, On = {}, po = [], bc = function(t) {
  po.push(t);
};
function go(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = po.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function yc(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = po.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ra() {
  On = {};
}
function Pa(e, t, r) {
  !t && !On[r] && (e(!1, r), On[r] = !0);
}
function pt(e, t) {
  Pa(go, e, t);
}
function Sc(e, t) {
  Pa(yc, e, t);
}
pt.preMessage = bc;
pt.resetWarned = Ra;
pt.noteOnce = Sc;
function ne(e) {
  "@babel/helpers - typeof";
  return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ne(e);
}
function Cc(e, t) {
  if (ne(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ne(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Aa(e) {
  var t = Cc(e, "string");
  return ne(t) == "symbol" ? t : t + "";
}
function X(e, t, r) {
  return (t = Aa(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Lo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lo(Object(r), !0).forEach(function(n) {
      X(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ko(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ec(e) {
  return e && ne(e) === "object" && ko(e.nativeElement) ? e.nativeElement : ko(e) ? e : null;
}
function xc(e) {
  var t = Ec(e);
  if (t)
    return t;
  if (e instanceof K.Component) {
    var r;
    return (r = Ao.findDOMNode) === null || r === void 0 ? void 0 : r.call(Ao, e);
  }
  return null;
}
function ja(e, t, r) {
  var n = b.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Ma = function(t, r) {
  typeof t == "function" ? t(r) : ne(t) === "object" && t && "current" in t && (t.current = r);
}, ho = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      Ma(i, a);
    });
  };
}, $a = function(t) {
  var r, n, o = Sr.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Sr.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Sr.ForwardRef);
};
function No(e) {
  return /* @__PURE__ */ ac(e) && !Sr.isFragment(e);
}
Number(oc.split(".")[0]) >= 19;
function rt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Do(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Aa(n.key), n);
  }
}
function nt(e, t, r) {
  return t && Do(e.prototype, t), r && Do(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _n(e, t) {
  return _n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, _n(e, t);
}
function kr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && _n(e, t);
}
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Rr(e);
}
function Ia() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ia = function() {
    return !!e;
  })();
}
function Ct(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wc(e, t) {
  if (t && (ne(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ct(e);
}
function Nr(e) {
  var t = Ia();
  return function() {
    var r, n = Rr(e);
    if (t) {
      var o = Rr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return wc(this, r);
  };
}
function Tc(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oc(e) {
  if (Array.isArray(e)) return Rn(e);
}
function La(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mo(e, t) {
  if (e) {
    if (typeof e == "string") return Rn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Rn(e, t) : void 0;
  }
}
function _c() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ze(e) {
  return Oc(e) || La(e) || mo(e) || _c();
}
var ka = function(t) {
  return +setTimeout(t, 16);
}, Na = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (ka = function(t) {
  return window.requestAnimationFrame(t);
}, Na = function(t) {
  return window.cancelAnimationFrame(t);
});
var Bo = 0, Dr = /* @__PURE__ */ new Map();
function Da(e) {
  Dr.delete(e);
}
var dt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Bo += 1;
  var n = Bo;
  function o(a) {
    if (a === 0)
      Da(n), t();
    else {
      var i = ka(function() {
        o(a - 1);
      });
      Dr.set(n, i);
    }
  }
  return o(r), n;
};
dt.cancel = function(e) {
  var t = Dr.get(e);
  return Da(e), Na(t);
};
process.env.NODE_ENV !== "production" && (dt.ids = function() {
  return Dr;
});
function Ba(e) {
  if (Array.isArray(e)) return e;
}
function Rc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, c = [], s = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); s = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!s && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return c;
  }
}
function Ha() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Ba(e) || Rc(e, t) || mo(e, t) || Ha();
}
function Kt(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function ot() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Pc(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Ho = "data-rc-order", Fo = "data-rc-priority", Ac = "rc-util-key", Pn = /* @__PURE__ */ new Map();
function Fa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ac;
}
function Br(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bo(e) {
  return Array.from((Pn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ot())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = jc(n), c = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(Ho, i), c && a && s.setAttribute(Fo, "".concat(a)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  var l = Br(t), f = l.firstChild;
  if (n) {
    if (c) {
      var d = (t.styles || bo(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Ho)))
          return !1;
        var C = Number(v.getAttribute(Fo) || 0);
        return a >= C;
      });
      if (d.length)
        return l.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    l.insertBefore(s, f);
  } else
    l.appendChild(s);
  return s;
}
function Va(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Br(t);
  return (t.styles || bo(r)).find(function(n) {
    return n.getAttribute(Fa(t)) === e;
  });
}
function Wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Va(e, t);
  if (r) {
    var n = Br(t);
    n.removeChild(r);
  }
}
function Mc(e, t) {
  var r = Pn.get(e);
  if (!r || !Pc(document, r)) {
    var n = za("", t), o = n.parentNode;
    Pn.set(e, o), e.removeChild(n);
  }
}
function Et(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Br(r), o = bo(n), a = k(k({}, r), {}, {
    styles: o
  });
  Mc(n, a);
  var i = Va(t, a);
  if (i) {
    var c, s;
    if ((c = a.csp) !== null && c !== void 0 && c.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var f = za(e, a);
  return f.setAttribute(Fa(a), t), f;
}
function $c(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Qt(e, t) {
  if (e == null) return {};
  var r, n, o = $c(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Ic(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = n.has(a);
    if (pt(!s, "Warning: There may be circular references"), s)
      return !1;
    if (a === i)
      return !0;
    if (r && c > 1)
      return !1;
    n.add(a);
    var l = c + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var f = 0; f < a.length; f++)
        if (!o(a[f], i[f], l))
          return !1;
      return !0;
    }
    if (a && i && ne(a) === "object" && ne(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return o(a[v], i[v], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Lc = "%";
function An(e) {
  return e.join(Lc);
}
var kc = /* @__PURE__ */ function() {
  function e(t) {
    rt(this, e), X(this, "instanceId", void 0), X(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return nt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(An(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(An(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), Mt = "data-token-hash", We = "data-css-hash", Nc = "data-cache-path", lt = "__cssinjs_instance__";
function Dc() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(We, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[lt] = o[lt] || e, o[lt] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(We, "]"))).forEach(function(o) {
      var a = o.getAttribute(We);
      if (n[a]) {
        if (o[lt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new kc(e);
}
var Bc = /* @__PURE__ */ b.createContext({
  hashPriority: "low",
  cache: Dc(),
  defaultCache: !0
});
const Hr = Bc;
function Hc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var yo = /* @__PURE__ */ function() {
  function e() {
    rt(this, e), X(this, "cache", void 0), X(this, "keys", void 0), X(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return nt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(c) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(c);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(l, f) {
            var d = Y(l, 2), v = d[1];
            return o.internalGet(f)[1] < v ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = Y(a, 1), c = i[0];
          this.delete(c);
        }
        this.keys.push(r);
      }
      var s = this.cache;
      r.forEach(function(l, f) {
        if (f === r.length - 1)
          s.set(l, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = s.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : s.set(l, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Hc(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
X(yo, "MAX_CACHE_SIZE", 20);
X(yo, "MAX_CACHE_OFFSET", 5);
var zo = 0, Ga = /* @__PURE__ */ function() {
  function e(t) {
    rt(this, e), X(this, "derivatives", void 0), X(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = zo, t.length === 0 && go(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), zo += 1;
  }
  return nt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), cn = new yo();
function jn(e) {
  var t = Array.isArray(e) ? e : [e];
  return cn.has(t) || cn.set(t, new Ga(t)), cn.get(t);
}
var Fc = /* @__PURE__ */ new WeakMap(), sn = {};
function zc(e, t) {
  for (var r = Fc, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(sn) || r.set(sn, e()), r.get(sn);
}
var Vo = /* @__PURE__ */ new WeakMap();
function Yt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Vo.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var o = e[n];
    r += n, o instanceof Ga ? r += o.id : o && ne(o) === "object" ? r += Yt(o, t) : r += o;
  }), t && (r = Kt(r)), Vo.set(e, r)), r;
}
function Wo(e, t) {
  return Kt("".concat(t, "_").concat(Yt(e, !0)));
}
var Mn = ot();
function vt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Pr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = k(k({}, n), {}, X(X({}, Mt, t), We, r)), i = Object.keys(a).map(function(c) {
    var s = a[c];
    return s ? "".concat(c, '="').concat(s, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Cr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Vc = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = Y(o, 2), i = a[0], c = a[1];
    return "".concat(i, ":").concat(c, ";");
  }).join(""), "}") : "";
}, Ua = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var c, s, l = Y(i, 2), f = l[0], d = l[1];
    if (n != null && (c = n.preserve) !== null && c !== void 0 && c[f])
      a[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[f])) {
      var v, C = Cr(f, n == null ? void 0 : n.prefix);
      o[C] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[f]) ? "".concat(d, "px") : String(d), a[f] = "var(".concat(C, ")");
    }
  }), [a, Vc(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Go = process.env.NODE_ENV !== "test" && ot() ? b.useLayoutEffect : b.useEffect, Wc = function(t, r) {
  var n = b.useRef(!0);
  Go(function() {
    return t(n.current);
  }, r), Go(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Gc = k({}, b), Uo = Gc.useInsertionEffect, Uc = function(t, r, n) {
  b.useMemo(t, n), Wc(function() {
    return r(!0);
  }, n);
}, Xc = Uo ? function(e, t, r) {
  return Uo(function() {
    return e(), t();
  }, r);
} : Uc;
const Yc = Xc;
var qc = k({}, b), Kc = qc.useInsertionEffect, Qc = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && go(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return b.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Jc = function() {
  return function(t) {
    t();
  };
}, Zc = typeof Kc < "u" ? Qc : Jc;
const es = Zc;
function ts() {
  return !1;
}
var $n = !1;
function rs() {
  return $n;
}
const ns = process.env.NODE_ENV === "production" ? ts : rs;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ln = window;
  if (typeof ln.webpackHotUpdate == "function") {
    var os = ln.webpackHotUpdate;
    ln.webpackHotUpdate = function() {
      return $n = !0, setTimeout(function() {
        $n = !1;
      }, 0), os.apply(void 0, arguments);
    };
  }
}
function So(e, t, r, n, o) {
  var a = b.useContext(Hr), i = a.cache, c = [e].concat(Ze(t)), s = An(c), l = es([s]), f = ns(), d = function(g) {
    i.opUpdate(s, function(p) {
      var T = p || [void 0, void 0], y = Y(T, 2), M = y[0], P = M === void 0 ? 0 : M, _ = y[1], O = _;
      process.env.NODE_ENV !== "production" && _ && f && (n == null || n(O, f), O = null);
      var E = O || r(), j = [P, E];
      return g ? g(j) : j;
    });
  };
  b.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = i.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(s));
  var C = v[1];
  return Yc(function() {
    o == null || o(C);
  }, function(w) {
    return d(function(g) {
      var p = Y(g, 2), T = p[0], y = p[1];
      return w && T === 0 && (o == null || o(C)), [T + 1, y];
    }), function() {
      i.opUpdate(s, function(g) {
        var p = g || [], T = Y(p, 2), y = T[0], M = y === void 0 ? 0 : y, P = T[1], _ = M - 1;
        return _ === 0 ? (l(function() {
          (w || !i.opGet(s)) && (n == null || n(P, !1));
        }), null) : [M - 1, P];
      });
    };
  }, [s]), C;
}
var as = {}, is = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", mt = /* @__PURE__ */ new Map();
function cs(e) {
  mt.set(e, (mt.get(e) || 0) + 1);
}
function ss(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Mt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[lt] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var ls = 0;
function us(e, t) {
  mt.set(e, (mt.get(e) || 0) - 1);
  var r = Array.from(mt.keys()), n = r.filter(function(o) {
    var a = mt.get(o) || 0;
    return a <= 0;
  });
  r.length - n.length > ls && n.forEach(function(o) {
    ss(o, t), mt.delete(o);
  });
}
var fs = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = k(k({}, a), r);
  return o && (i = o(i)), i;
}, Xa = "token";
function ds(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ze(Hr), o = n.cache.instanceId, a = n.container, i = r.salt, c = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? as : s, f = r.formatToken, d = r.getComputedToken, v = r.cssVar, C = zc(function() {
    return Object.assign.apply(Object, [{}].concat(Ze(t)));
  }, t), w = Yt(C), g = Yt(l), p = v ? Yt(v) : "", T = So(Xa, [c, e.id, w, g, p], function() {
    var y, M = d ? d(C, l, e) : fs(C, l, e, f), P = k({}, M), _ = "";
    if (v) {
      var O = Ua(M, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), E = Y(O, 2);
      M = E[0], _ = E[1];
    }
    var j = Wo(M, c);
    M._tokenKey = j, P._tokenKey = Wo(P, c);
    var B = (y = v == null ? void 0 : v.key) !== null && y !== void 0 ? y : j;
    M._themeKey = B, cs(B);
    var W = "".concat(is, "-").concat(Kt(j));
    return M._hashId = W, [M, W, P, _, (v == null ? void 0 : v.key) || ""];
  }, function(y) {
    us(y[0]._themeKey, o);
  }, function(y) {
    var M = Y(y, 4), P = M[0], _ = M[3];
    if (v && _) {
      var O = Et(_, Kt("css-variables-".concat(P._themeKey)), {
        mark: We,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      O[lt] = o, O.setAttribute(Mt, P._themeKey);
    }
  });
  return T;
}
var vs = function(t, r, n) {
  var o = Y(t, 5), a = o[2], i = o[3], c = o[4], s = n || {}, l = s.plain;
  if (!i)
    return null;
  var f = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, C = Pr(i, c, f, v, l);
  return [d, f, C];
}, ps = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ya = "comm", qa = "rule", Ka = "decl", gs = "@import", hs = "@keyframes", ms = "@layer", Qa = Math.abs, Co = String.fromCharCode;
function Ja(e) {
  return e.trim();
}
function Er(e, t, r) {
  return e.replace(t, r);
}
function bs(e, t, r) {
  return e.indexOf(t, r);
}
function Jt(e, t) {
  return e.charCodeAt(t) | 0;
}
function $t(e, t, r) {
  return e.slice(t, r);
}
function Xe(e) {
  return e.length;
}
function ys(e) {
  return e.length;
}
function lr(e, t) {
  return t.push(e), e;
}
var Fr = 1, It = 1, Za = 0, De = 0, he = 0, kt = "";
function Eo(e, t, r, n, o, a, i, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Fr, column: It, length: i, return: "", siblings: c };
}
function Ss() {
  return he;
}
function Cs() {
  return he = De > 0 ? Jt(kt, --De) : 0, It--, he === 10 && (It = 1, Fr--), he;
}
function Ge() {
  return he = De < Za ? Jt(kt, De++) : 0, It++, he === 10 && (It = 1, Fr++), he;
}
function ut() {
  return Jt(kt, De);
}
function xr() {
  return De;
}
function zr(e, t) {
  return $t(kt, e, t);
}
function Zt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Es(e) {
  return Fr = It = 1, Za = Xe(kt = e), De = 0, [];
}
function xs(e) {
  return kt = "", e;
}
function un(e) {
  return Ja(zr(De - 1, In(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ws(e) {
  for (; (he = ut()) && he < 33; )
    Ge();
  return Zt(e) > 2 || Zt(he) > 3 ? "" : " ";
}
function Ts(e, t) {
  for (; --t && Ge() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); )
    ;
  return zr(e, xr() + (t < 6 && ut() == 32 && Ge() == 32));
}
function In(e) {
  for (; Ge(); )
    switch (he) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && In(he);
        break;
      case 40:
        e === 41 && In(e);
        break;
      case 92:
        Ge();
        break;
    }
  return De;
}
function Os(e, t) {
  for (; Ge() && e + he !== 57; )
    if (e + he === 84 && ut() === 47)
      break;
  return "/*" + zr(t, De - 1) + "*" + Co(e === 47 ? e : Ge());
}
function _s(e) {
  for (; !Zt(ut()); )
    Ge();
  return zr(e, De);
}
function Rs(e) {
  return xs(wr("", null, null, null, [""], e = Es(e), 0, [0], e));
}
function wr(e, t, r, n, o, a, i, c, s) {
  for (var l = 0, f = 0, d = i, v = 0, C = 0, w = 0, g = 1, p = 1, T = 1, y = 0, M = "", P = o, _ = a, O = n, E = M; p; )
    switch (w = y, y = Ge()) {
      case 40:
        if (w != 108 && Jt(E, d - 1) == 58) {
          bs(E += Er(un(y), "&", "&\f"), "&\f", Qa(l ? c[l - 1] : 0)) != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += un(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += ws(w);
        break;
      case 92:
        E += Ts(xr() - 1, 7);
        continue;
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            lr(Ps(Os(Ge(), xr()), t, r, s), s), (Zt(w || 1) == 5 || Zt(ut() || 1) == 5) && Xe(E) && $t(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        c[l++] = Xe(E) * T;
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            p = 0;
          case 59 + f:
            T == -1 && (E = Er(E, /\f/g, "")), C > 0 && (Xe(E) - d || g === 0 && w === 47) && lr(C > 32 ? Yo(E + ";", n, r, d - 1, s) : Yo(Er(E, " ", "") + ";", n, r, d - 2, s), s);
            break;
          case 59:
            E += ";";
          default:
            if (lr(O = Xo(E, t, r, l, f, o, c, M, P = [], _ = [], d, a), a), y === 123)
              if (f === 0)
                wr(E, t, O, O, P, a, d, c, _);
              else
                switch (v === 99 && Jt(E, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wr(e, O, O, n && lr(Xo(e, O, O, 0, 0, o, c, M, o, P = [], d, _), _), o, _, d, c, n ? P : _);
                    break;
                  default:
                    wr(E, O, O, O, [""], _, 0, c, _);
                }
        }
        l = f = C = 0, g = T = 1, M = E = "", d = i;
        break;
      case 58:
        d = 1 + Xe(E), C = w;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && Cs() == 125)
            continue;
        }
        switch (E += Co(y), y * g) {
          case 38:
            T = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            c[l++] = (Xe(E) - 1) * T, T = 1;
            break;
          case 64:
            ut() === 45 && (E += un(Ge())), v = ut(), f = d = Xe(M = E += _s(xr())), y++;
            break;
          case 45:
            w === 45 && Xe(E) == 2 && (g = 0);
        }
    }
  return a;
}
function Xo(e, t, r, n, o, a, i, c, s, l, f, d) {
  for (var v = o - 1, C = o === 0 ? a : [""], w = ys(C), g = 0, p = 0, T = 0; g < n; ++g)
    for (var y = 0, M = $t(e, v + 1, v = Qa(p = i[g])), P = e; y < w; ++y)
      (P = Ja(p > 0 ? C[y] + " " + M : Er(M, /&\f/g, C[y]))) && (s[T++] = P);
  return Eo(e, t, r, o === 0 ? qa : c, s, l, f, d);
}
function Ps(e, t, r, n) {
  return Eo(e, t, r, Ya, Co(Ss()), $t(e, 2, -2), 0, n);
}
function Yo(e, t, r, n, o) {
  return Eo(e, t, r, Ka, $t(e, 0, n), $t(e, n + 1, -1), n, o);
}
function Ln(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function As(e, t, r, n) {
  switch (e.type) {
    case ms:
      if (e.children.length) break;
    case gs:
    case Ka:
      return e.return = e.return || e.value;
    case Ya:
      return "";
    case hs:
      return e.return = e.value + "{" + Ln(e.children, n) + "}";
    case qa:
      if (!Xe(e.value = e.props.join(","))) return "";
  }
  return Xe(r = Ln(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ei(e, t) {
  var r = t.path, n = t.parentSelectors;
  pt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var js = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && ei("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Ms = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && ei("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, qo = "data-ant-cssinjs-cache-path", ti = "_FILE_STYLE__", xt, ri = !0;
function $s() {
  if (!xt && (xt = {}, ot())) {
    var e = document.createElement("div");
    e.className = qo, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = Y(a, 2), c = i[0], s = i[1];
      xt[c] = s;
    });
    var r = document.querySelector("style[".concat(qo, "]"));
    if (r) {
      var n;
      ri = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Is(e) {
  return $s(), !!xt[e];
}
function Ls(e) {
  var t = xt[e], r = null;
  if (t && ot())
    if (ri)
      r = ti;
    else {
      var n = document.querySelector("style[".concat(We, '="').concat(xt[e], '"]'));
      n ? r = n.innerHTML : delete xt[e];
    }
  return [r, t];
}
var ni = "_skip_check_", oi = "_multi_value_";
function Tr(e) {
  var t = Ln(Rs(e), As);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function ks(e) {
  return ne(e) === "object" && e && (ni in e || oi in e);
}
function Ko(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var c, s = i.trim().split(/\s+/), l = s[0] || "", f = ((c = l.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Ze(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var Ns = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, c = r.hashId, s = r.layer, l = r.path, f = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, C = r.linters, w = C === void 0 ? [] : C, g = "", p = {};
  function T(P) {
    var _ = P.getName(c);
    if (!p[_]) {
      var O = e(P.style, r, {
        root: !1,
        parentSelectors: i
      }), E = Y(O, 1), j = E[0];
      p[_] = "@keyframes ".concat(P.getName(c)).concat(j);
    }
  }
  function y(P) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return P.forEach(function(O) {
      Array.isArray(O) ? y(O, _) : O && _.push(O);
    }), _;
  }
  var M = y(Array.isArray(t) ? t : [t]);
  return M.forEach(function(P) {
    var _ = typeof P == "string" && !o ? {} : P;
    if (typeof _ == "string")
      g += "".concat(_, `
`);
    else if (_._keyframe)
      T(_);
    else {
      var O = v.reduce(function(E, j) {
        var B;
        return (j == null || (B = j.visit) === null || B === void 0 ? void 0 : B.call(j, E)) || E;
      }, _);
      Object.keys(O).forEach(function(E) {
        var j = O[E];
        if (ne(j) === "object" && j && (E !== "animationName" || !j._keyframe) && !ks(j)) {
          var B = !1, W = E.trim(), G = !1;
          (o || a) && c ? W.startsWith("@") ? B = !0 : W === "&" ? W = Ko("", c, f) : W = Ko(E, c, f) : o && !c && (W === "&" || W === "") && (W = "", G = !0);
          var V = e(j, r, {
            root: G,
            injectHash: B,
            parentSelectors: [].concat(Ze(i), [W])
          }), N = Y(V, 2), I = N[0], U = N[1];
          p = k(k({}, p), U), g += "".concat(W).concat(I);
        } else {
          let m = function(R, L) {
            process.env.NODE_ENV !== "production" && (ne(j) !== "object" || !(j != null && j[ni])) && [js, Ms].concat(Ze(w)).forEach(function(F) {
              return F(R, L, {
                path: l,
                hashId: c,
                parentSelectors: i
              });
            });
            var A = R.replace(/[A-Z]/g, function(F) {
              return "-".concat(F.toLowerCase());
            }), H = L;
            !ps[R] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), R === "animationName" && L !== null && L !== void 0 && L._keyframe && (T(L), H = L.getName(c)), g += "".concat(A, ":").concat(H, ";");
          };
          var S, h = (S = j == null ? void 0 : j.value) !== null && S !== void 0 ? S : j;
          ne(j) === "object" && j !== null && j !== void 0 && j[oi] && Array.isArray(h) ? h.forEach(function(R) {
            m(E, R);
          }) : m(E, h);
        }
      });
    }
  }), o ? s && (g = "@layer ".concat(s.name, " {").concat(g, "}"), s.dependencies && (p["@layer ".concat(s.name)] = s.dependencies.map(function(P) {
    return "@layer ".concat(P, ", ").concat(s.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
};
function ai(e, t) {
  return Kt("".concat(e.join("%")).concat(t));
}
function Ds() {
  return null;
}
var ii = "style";
function kn(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, c = e.clientOnly, s = e.order, l = s === void 0 ? 0 : s, f = b.useContext(Hr), d = f.autoClear, v = f.mock, C = f.defaultCache, w = f.hashPriority, g = f.container, p = f.ssrInline, T = f.transformers, y = f.linters, M = f.cache, P = f.layer, _ = r._tokenKey, O = [_];
  P && O.push("layer"), O.push.apply(O, Ze(n));
  var E = Mn;
  process.env.NODE_ENV !== "production" && v !== void 0 && (E = v === "client");
  var j = So(
    ii,
    O,
    // Create cache if needed
    function() {
      var N = O.join("|");
      if (Is(N)) {
        var I = Ls(N), U = Y(I, 2), S = U[0], h = U[1];
        if (S)
          return [S, _, h, {}, c, l];
      }
      var m = t(), R = Ns(m, {
        hashId: o,
        hashPriority: w,
        layer: P ? a : void 0,
        path: n.join("-"),
        transformers: T,
        linters: y
      }), L = Y(R, 2), A = L[0], H = L[1], F = Tr(A), Q = ai(O, F);
      return [F, _, Q, H, c, l];
    },
    // Remove cache if no need
    function(N, I) {
      var U = Y(N, 3), S = U[2];
      (I || d) && Mn && Wa(S, {
        mark: We
      });
    },
    // Effect: Inject style here
    function(N) {
      var I = Y(N, 4), U = I[0];
      I[1];
      var S = I[2], h = I[3];
      if (E && U !== ti) {
        var m = {
          mark: We,
          prepend: P ? !1 : "queue",
          attachTo: g,
          priority: l
        }, R = typeof i == "function" ? i() : i;
        R && (m.csp = {
          nonce: R
        });
        var L = [], A = [];
        Object.keys(h).forEach(function(F) {
          F.startsWith("@layer") ? L.push(F) : A.push(F);
        }), L.forEach(function(F) {
          Et(Tr(h[F]), "_layer-".concat(F), k(k({}, m), {}, {
            prepend: !0
          }));
        });
        var H = Et(U, S, m);
        H[lt] = M.instanceId, H.setAttribute(Mt, _), process.env.NODE_ENV !== "production" && H.setAttribute(Nc, O.join("|")), A.forEach(function(F) {
          Et(Tr(h[F]), "_effect-".concat(F), m);
        });
      }
    }
  ), B = Y(j, 3), W = B[0], G = B[1], V = B[2];
  return function(N) {
    var I;
    return !p || E || !C ? I = /* @__PURE__ */ b.createElement(Ds, null) : I = /* @__PURE__ */ b.createElement("style", jt({}, X(X({}, Mt, G), We, V), {
      dangerouslySetInnerHTML: {
        __html: W
      }
    })), /* @__PURE__ */ b.createElement(b.Fragment, null, I, N);
  };
}
var Bs = function(t, r, n) {
  var o = Y(t, 6), a = o[0], i = o[1], c = o[2], s = o[3], l = o[4], f = o[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var C = a, w = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return C = Pr(a, i, c, w, v), s && Object.keys(s).forEach(function(g) {
    if (!r[g]) {
      r[g] = !0;
      var p = Tr(s[g]), T = Pr(p, i, "_effect-".concat(g), w, v);
      g.startsWith("@layer") ? C = T + C : C += T;
    }
  }), [f, c, C];
}, ci = "cssVar", Hs = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, c = t.token, s = t.scope, l = s === void 0 ? "" : s, f = ze(Hr), d = f.cache.instanceId, v = f.container, C = c._tokenKey, w = [].concat(Ze(t.path), [n, l, C]), g = So(ci, w, function() {
    var p = r(), T = Ua(p, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), y = Y(T, 2), M = y[0], P = y[1], _ = ai(w, P);
    return [M, P, _, n];
  }, function(p) {
    var T = Y(p, 3), y = T[2];
    Mn && Wa(y, {
      mark: We
    });
  }, function(p) {
    var T = Y(p, 3), y = T[1], M = T[2];
    if (y) {
      var P = Et(y, M, {
        mark: We,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      P[lt] = d, P.setAttribute(Mt, n);
    }
  });
  return g;
}, Fs = function(t, r, n) {
  var o = Y(t, 4), a = o[1], i = o[2], c = o[3], s = n || {}, l = s.plain;
  if (!a)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = Pr(a, c, i, d, l);
  return [f, i, v];
};
X(X(X({}, ii, Bs), Xa, vs), ci, Fs);
function _t(e) {
  return e.notSplit = !0, e;
}
_t(["borderTop", "borderBottom"]), _t(["borderTop"]), _t(["borderBottom"]), _t(["borderLeft", "borderRight"]), _t(["borderLeft"]), _t(["borderRight"]);
var xo = /* @__PURE__ */ fo({});
function zs(e) {
  return Ba(e) || La(e) || mo(e) || Ha();
}
function Nn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function si(e, t, r, n) {
  if (!t.length)
    return r;
  var o = zs(t), a = o[0], i = o.slice(1), c;
  return !e && typeof a == "number" ? c = [] : Array.isArray(e) ? c = Ze(e) : c = k({}, e), n && r === void 0 && i.length === 1 ? delete c[a][i[0]] : c[a] = si(c[a], i, r, n), c;
}
function fn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Nn(e, t.slice(0, -1)) ? e : si(e, t, r, n);
}
function Vs(e) {
  return ne(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Qo(e) {
  return Array.isArray(e) ? [] : {};
}
var Ws = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Gs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Qo(t[0]);
  return t.forEach(function(o) {
    function a(i, c) {
      var s = new Set(c), l = Nn(o, i), f = Array.isArray(l);
      if (f || Vs(l)) {
        if (!s.has(l)) {
          s.add(l);
          var d = Nn(n, i);
          f ? n = fn(n, i, []) : (!d || ne(d) !== "object") && (n = fn(n, i, Qo(l))), Ws(l).forEach(function(v) {
            a([].concat(Ze(i), [v]), s);
          });
        }
      } else
        n = fn(n, i, l);
    }
    a([]);
  }), n;
}
function li() {
}
let Je = null;
function Us() {
  Je = null, Ra();
}
let wo = li;
process.env.NODE_ENV !== "production" && (wo = (e, t, r) => {
  pt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Us();
});
const ui = /* @__PURE__ */ b.createContext({}), Nt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = b.useContext(ui), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = Je;
        Je || (Je = {}), Je[e] = Je[e] || [], Je[e].includes(a || "") || Je[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Je);
      } else
        process.env.NODE_ENV !== "production" && wo(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = li, e;
}, Vr = wo, Xs = /* @__PURE__ */ fo(void 0);
var Ys = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, qs = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ks = k(k({}, qs), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const fi = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Jo = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Ks),
  timePickerLocale: Object.assign({}, fi)
}, Pe = "${label} is not a valid ${type}", Wr = {
  locale: "en",
  Pagination: Ys,
  DatePicker: Jo,
  TimePicker: fi,
  Calendar: Jo,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Pe,
        method: Pe,
        array: Pe,
        object: Pe,
        number: Pe,
        date: Pe,
        boolean: Pe,
        integer: Pe,
        float: Pe,
        regexp: Pe,
        email: Pe,
        url: Pe,
        hex: Pe
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, Wr.Modal);
let Or = [];
const Zo = () => Or.reduce((e, t) => Object.assign(Object.assign({}, e), t), Wr.Modal);
function Qs(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Or.push(t), Zo(), () => {
      Or = Or.filter((r) => r !== t), Zo();
    };
  }
  Object.assign({}, Wr.Modal);
}
const di = /* @__PURE__ */ fo(void 0), vi = "internalMark", pi = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = Nt("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === vi, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  b.useEffect(() => Qs(t == null ? void 0 : t.Modal), [t]);
  const o = b.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ b.createElement(di.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (pi.displayName = "LocaleProvider");
function ye(e, t) {
  Js(e) && (e = "100%");
  var r = Zs(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ur(e) {
  return Math.min(1, Math.max(0, e));
}
function Js(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zs(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function gi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function bt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function el(e, t, r) {
  return {
    r: ye(e, 255) * 255,
    g: ye(t, 255) * 255,
    b: ye(r, 255) * 255
  };
}
function ea(e, t, r) {
  e = ye(e, 255), t = ye(t, 255), r = ye(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = 0, c = (n + o) / 2;
  if (n === o)
    i = 0, a = 0;
  else {
    var s = n - o;
    switch (i = c > 0.5 ? s / (2 - n - o) : s / (n + o), n) {
      case e:
        a = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / s + 2;
        break;
      case r:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l: c };
}
function dn(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tl(e, t, r) {
  var n, o, a;
  if (e = ye(e, 360), t = ye(t, 100), r = ye(r, 100), t === 0)
    o = r, a = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - i;
    n = dn(c, i, e + 1 / 3), o = dn(c, i, e), a = dn(c, i, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function Dn(e, t, r) {
  e = ye(e, 255), t = ye(t, 255), r = ye(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = n, c = n - o, s = n === 0 ? 0 : c / n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / c + 2;
        break;
      case r:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: i };
}
function rl(e, t, r) {
  e = ye(e, 360) * 6, t = ye(t, 100), r = ye(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), i = r * (1 - o * t), c = r * (1 - (1 - o) * t), s = n % 6, l = [r, i, a, a, c, r][s], f = [c, r, r, i, a, a][s], d = [a, a, c, r, r, i][s];
  return { r: l * 255, g: f * 255, b: d * 255 };
}
function Bn(e, t, r, n) {
  var o = [
    bt(Math.round(e).toString(16)),
    bt(Math.round(t).toString(16)),
    bt(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function nl(e, t, r, n, o) {
  var a = [
    bt(Math.round(e).toString(16)),
    bt(Math.round(t).toString(16)),
    bt(Math.round(r).toString(16)),
    bt(ol(n))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function ol(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ta(e) {
  return Ae(e) / 255;
}
function Ae(e) {
  return parseInt(e, 16);
}
function al(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Hn = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Rt(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, a = null, i = !1, c = !1;
  return typeof e == "string" && (e = sl(e)), typeof e == "object" && (Ke(e.r) && Ke(e.g) && Ke(e.b) ? (t = el(e.r, e.g, e.b), i = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ke(e.h) && Ke(e.s) && Ke(e.v) ? (n = fr(e.s), o = fr(e.v), t = rl(e.h, n, o), i = !0, c = "hsv") : Ke(e.h) && Ke(e.s) && Ke(e.l) && (n = fr(e.s), a = fr(e.l), t = tl(e.h, n, a), i = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = gi(r), {
    ok: i,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var il = "[-\\+]?\\d+%?", cl = "[-\\+]?\\d*\\.\\d+%?", ft = "(?:".concat(cl, ")|(?:").concat(il, ")"), vn = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), pn = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), He = {
  CSS_UNIT: new RegExp(ft),
  rgb: new RegExp("rgb" + vn),
  rgba: new RegExp("rgba" + pn),
  hsl: new RegExp("hsl" + vn),
  hsla: new RegExp("hsla" + pn),
  hsv: new RegExp("hsv" + vn),
  hsva: new RegExp("hsva" + pn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function sl(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Hn[e])
    e = Hn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = He.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = He.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = He.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = He.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = He.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = He.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = He.hex8.exec(e), r ? {
    r: Ae(r[1]),
    g: Ae(r[2]),
    b: Ae(r[3]),
    a: ta(r[4]),
    format: t ? "name" : "hex8"
  } : (r = He.hex6.exec(e), r ? {
    r: Ae(r[1]),
    g: Ae(r[2]),
    b: Ae(r[3]),
    format: t ? "name" : "hex"
  } : (r = He.hex4.exec(e), r ? {
    r: Ae(r[1] + r[1]),
    g: Ae(r[2] + r[2]),
    b: Ae(r[3] + r[3]),
    a: ta(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = He.hex3.exec(e), r ? {
    r: Ae(r[1] + r[1]),
    g: Ae(r[2] + r[2]),
    b: Ae(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ke(e) {
  return !!He.CSS_UNIT.exec(String(e));
}
var je = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = al(t)), this.originalInput = t;
      var o = Rt(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, a = t.r / 255, i = t.g / 255, c = t.b / 255;
      return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), c <= 0.03928 ? o = c / 12.92 : o = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = gi(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Dn(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Dn(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ea(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ea(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Bn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), nl(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(ye(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(ye(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Bn(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Hn); r < n.length; r++) {
        var o = n[r], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, a = !r && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = ur(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = ur(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = ur(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = ur(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), a = r / 100, i = {
        r: (o.r - n.r) * a + n.r,
        g: (o.g - n.g) * a + n.g,
        b: (o.b - n.b) * a + n.b,
        a: (o.a - n.a) * a + n.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, a = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, a.push(new e(n));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], c = 1 / t; t--; )
        i.push(new e({ h: n, s: o, v: a })), a = (a + c) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), dr = 2, ra = 0.16, ll = 0.05, ul = 0.05, fl = 0.15, hi = 5, mi = 4, dl = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function na(e) {
  var t = e.r, r = e.g, n = e.b, o = Dn(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function vr(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Bn(t, r, n, !1));
}
function vl(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function oa(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - dr * t : Math.round(e.h) + dr * t : n = r ? Math.round(e.h) + dr * t : Math.round(e.h) - dr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function aa(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - ra * t : t === mi ? n = e.s + ra : n = e.s + ll * t, n > 1 && (n = 1), r && t === hi && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function ia(e, t, r) {
  var n;
  return r ? n = e.v + ul * t : n = e.v - fl * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function er(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Rt(e), o = hi; o > 0; o -= 1) {
    var a = na(n), i = vr(Rt({
      h: oa(a, o, !0),
      s: aa(a, o, !0),
      v: ia(a, o, !0)
    }));
    r.push(i);
  }
  r.push(vr(n));
  for (var c = 1; c <= mi; c += 1) {
    var s = na(n), l = vr(Rt({
      h: oa(s, c),
      s: aa(s, c),
      v: ia(s, c)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? dl.map(function(f) {
    var d = f.index, v = f.opacity, C = vr(vl(Rt(t.backgroundColor || "#141414"), Rt(r[d]), v * 100));
    return C;
  }) : r;
}
var gn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Fn = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Fn.primary = Fn[5];
var zn = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
zn.primary = zn[5];
var Vn = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Vn.primary = Vn[5];
var Wn = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Wn.primary = Wn[5];
var Gn = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Gn.primary = Gn[5];
var Un = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Un.primary = Un[5];
var Xn = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Xn.primary = Xn[5];
var Yn = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Yn.primary = Yn[5];
var Ar = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ar.primary = Ar[5];
var qn = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
qn.primary = qn[5];
var Kn = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Kn.primary = Kn[5];
var Qn = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Qn.primary = Qn[5];
var Jn = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Jn.primary = Jn[5];
var hn = {
  red: Fn,
  volcano: zn,
  orange: Vn,
  gold: Wn,
  yellow: Gn,
  lime: Un,
  green: Xn,
  cyan: Yn,
  blue: Ar,
  geekblue: qn,
  purple: Kn,
  magenta: Qn,
  grey: Jn
};
const bi = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, tr = Object.assign(Object.assign({}, bi), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function pl(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: c,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: f
  } = e, d = r(s), v = r(o), C = r(a), w = r(i), g = r(c), p = n(l, f), T = e.colorLink || e.colorInfo, y = r(T);
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: w[1],
    colorErrorBgHover: w[2],
    colorErrorBgActive: w[3],
    colorErrorBorder: w[3],
    colorErrorBorderHover: w[4],
    colorErrorHover: w[5],
    colorError: w[6],
    colorErrorActive: w[7],
    colorErrorTextHover: w[8],
    colorErrorText: w[9],
    colorErrorTextActive: w[10],
    colorWarningBg: C[1],
    colorWarningBgHover: C[2],
    colorWarningBorder: C[3],
    colorWarningBorderHover: C[4],
    colorWarningHover: C[4],
    colorWarning: C[6],
    colorWarningActive: C[7],
    colorWarningTextHover: C[8],
    colorWarningText: C[9],
    colorWarningTextActive: C[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new je("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const gl = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function hl(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, gl(n));
}
const ml = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function _r(e) {
  return (e + 8) / e;
}
function bl(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: _r(r)
  }));
}
const yl = (e) => {
  const t = bl(e), r = t.map((f) => f.size), n = t.map((f) => f.lineHeight), o = r[1], a = r[0], i = r[2], c = n[1], s = n[0], l = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: c,
    lineHeightLG: l,
    lineHeightSM: s,
    fontHeight: Math.round(c * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(s * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Sl(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Qe = (e, t) => new je(e).setAlpha(t).toRgbString(), Xt = (e, t) => new je(e).darken(t).toHexString(), Cl = (e) => {
  const t = er(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, El = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Qe(n, 0.88),
    colorTextSecondary: Qe(n, 0.65),
    colorTextTertiary: Qe(n, 0.45),
    colorTextQuaternary: Qe(n, 0.25),
    colorFill: Qe(n, 0.15),
    colorFillSecondary: Qe(n, 0.06),
    colorFillTertiary: Qe(n, 0.04),
    colorFillQuaternary: Qe(n, 0.02),
    colorBgLayout: Xt(r, 4),
    colorBgContainer: Xt(r, 0),
    colorBgElevated: Xt(r, 0),
    colorBgSpotlight: Qe(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Xt(r, 15),
    colorBorderSecondary: Xt(r, 6)
  };
};
function xl(e) {
  gn.pink = gn.magenta, hn.pink = hn.magenta;
  const t = Object.keys(bi).map((r) => {
    const n = e[r] === gn[r] ? hn[r] : er(e[r]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), pl(e, {
    generateColorPalettes: Cl,
    generateNeutralColorPalettes: El
  })), yl(e.fontSize)), Sl(e)), ml(e)), hl(e));
}
const yi = jn(xl), Zn = {
  token: tr,
  override: {
    override: tr
  },
  hashed: !0
}, Si = /* @__PURE__ */ K.createContext(Zn), jr = "ant", Ci = "anticon", wl = (e, t) => t || (e ? `${jr}-${e}` : jr), et = /* @__PURE__ */ b.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: wl,
  iconPrefixCls: Ci
}), Tl = `-ant-${Date.now()}-${Math.random()}`;
function Ol(e, t) {
  const r = {}, n = (i, c) => {
    let s = i.clone();
    return s = (c == null ? void 0 : c(s)) || s, s.toRgbString();
  }, o = (i, c) => {
    const s = new je(i), l = er(s.toRgbString());
    r[`${c}-color`] = n(s), r[`${c}-color-disabled`] = l[1], r[`${c}-color-hover`] = l[4], r[`${c}-color-active`] = l[6], r[`${c}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), r[`${c}-color-deprecated-bg`] = l[0], r[`${c}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new je(t.primaryColor), c = er(i.toRgbString());
    c.forEach((l, f) => {
      r[`primary-${f + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(i, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const s = new je(c[0]);
    r["primary-color-active-deprecated-f-30"] = n(s, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(s, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function _l(e, t) {
  const r = Ol(e, t);
  ot() ? Et(r, `${Tl}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Mr = /* @__PURE__ */ b.createContext(!1), Rl = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = b.useContext(Mr);
  return /* @__PURE__ */ b.createElement(Mr.Provider, {
    value: r ?? n
  }, t);
}, Lt = /* @__PURE__ */ b.createContext(void 0), Pl = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = b.useContext(Lt);
  return /* @__PURE__ */ b.createElement(Lt.Provider, {
    value: r || n
  }, t);
};
function Al() {
  const e = ze(Mr), t = ze(Lt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Ei = /* @__PURE__ */ nt(function e() {
  rt(this, e);
}), xi = "CALC_UNIT", jl = new RegExp(xi, "g");
function mn(e) {
  return typeof e == "number" ? "".concat(e).concat(xi) : e;
}
var Ml = /* @__PURE__ */ function(e) {
  kr(r, e);
  var t = Nr(r);
  function r(n, o) {
    var a;
    rt(this, r), a = t.call(this), X(Ct(a), "result", ""), X(Ct(a), "unitlessCssVar", void 0), X(Ct(a), "lowPriority", void 0);
    var i = ne(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = mn(n) : i === "string" && (a.result = n), a;
  }
  return nt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(mn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(mn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, c = i.unit, s = !0;
      return typeof c == "boolean" ? s = c : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (s = !1), this.result = this.result.replace(jl, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(Ei), $l = /* @__PURE__ */ function(e) {
  kr(r, e);
  var t = Nr(r);
  function r(n) {
    var o;
    return rt(this, r), o = t.call(this), X(Ct(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return nt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(Ei), Il = function(t, r) {
  var n = t === "css" ? Ml : $l;
  return function(o) {
    return new n(o, r);
  };
}, ca = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function $r(e) {
  var t = b.useRef();
  t.current = e;
  var r = b.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function eo(e) {
  var t = b.useRef(!1), r = b.useState(e), n = Y(r, 2), o = n[0], a = n[1];
  b.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(c, s) {
    s && t.current || a(c);
  }
  return [o, i];
}
function sa(e, t, r, n) {
  var o = k({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(c) {
      var s = Y(c, 2), l = s[0], f = s[1];
      if (process.env.NODE_ENV !== "production" && pt(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = k(k({}, r), o);
  return Object.keys(i).forEach(function(c) {
    i[c] === t[c] && delete i[c];
  }), i;
}
var wi = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", to = !0;
function Dt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!wi)
    return Object.assign.apply(Object, [{}].concat(t));
  to = !1;
  var n = {};
  return t.forEach(function(o) {
    if (ne(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), to = !0, n;
}
var la = {};
function Ll() {
}
var kl = function(t) {
  var r, n = t, o = Ll;
  return wi && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, c) {
      return to && r.add(c), i[c];
    }
  }), o = function(i, c) {
    var s;
    la[i] = {
      global: Array.from(r),
      component: k(k({}, (s = la[i]) === null || s === void 0 ? void 0 : s.component), c)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function ua(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(Dt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function Nl(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return vt(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return vt(a);
      }).join(","), ")");
    }
  };
}
var Dl = 1e3 * 60 * 10, Bl = /* @__PURE__ */ function() {
  function e() {
    rt(this, e), X(this, "map", /* @__PURE__ */ new Map()), X(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), X(this, "nextID", 0), X(this, "lastAccessBeat", /* @__PURE__ */ new Map()), X(this, "accessBeat", 0);
  }
  return nt(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(a) {
        return a && ne(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(ne(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          n - o > Dl && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), fa = new Bl();
function Hl(e, t) {
  return K.useMemo(function() {
    var r = fa.get(t);
    if (r)
      return r;
    var n = e();
    return fa.set(t, n), n;
  }, t);
}
var Fl = function() {
  return {};
};
function zl(e) {
  var t = e.useCSP, r = t === void 0 ? Fl : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, c = e.getCompUnitless;
  function s(v, C, w, g) {
    var p = Array.isArray(v) ? v[0] : v;
    function T(j) {
      return "".concat(String(p)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var y = (g == null ? void 0 : g.unitless) || {}, M = typeof c == "function" ? c(v) : {}, P = k(k({}, M), {}, X({}, T("zIndexPopup"), !0));
    Object.keys(y).forEach(function(j) {
      P[T(j)] = y[j];
    });
    var _ = k(k({}, g), {}, {
      unitless: P,
      prefixToken: T
    }), O = f(v, C, w, _), E = l(p, w, _);
    return function(j) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, W = O(j, B), G = Y(W, 2), V = G[1], N = E(B), I = Y(N, 2), U = I[0], S = I[1];
      return [U, V, S];
    };
  }
  function l(v, C, w) {
    var g = w.unitless, p = w.injectStyle, T = p === void 0 ? !0 : p, y = w.prefixToken, M = w.ignore, P = function(E) {
      var j = E.rootCls, B = E.cssVar, W = B === void 0 ? {} : B, G = n(), V = G.realToken;
      return Hs({
        path: [v],
        prefix: W.prefix,
        key: W.key,
        unitless: g,
        ignore: M,
        token: V,
        scope: j
      }, function() {
        var N = ua(v, V, C), I = sa(v, V, N, {
          deprecatedTokens: w == null ? void 0 : w.deprecatedTokens
        });
        return Object.keys(N).forEach(function(U) {
          I[y(U)] = I[U], delete I[U];
        }), I;
      }), null;
    }, _ = function(E) {
      var j = n(), B = j.cssVar;
      return [function(W) {
        return T && B ? /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(P, {
          rootCls: E,
          cssVar: B,
          component: v
        }), W) : W;
      }, B == null ? void 0 : B.key];
    };
    return _;
  }
  function f(v, C, w) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(v) ? v : [v, v], T = Y(p, 1), y = T[0], M = p.join("-");
    return function(P) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, O = n(), E = O.theme, j = O.realToken, B = O.hashId, W = O.token, G = O.cssVar, V = o(), N = V.rootPrefixCls, I = V.iconPrefixCls, U = r(), S = G ? "css" : "js", h = Hl(function() {
        var F = /* @__PURE__ */ new Set();
        return G && Object.keys(g.unitless || {}).forEach(function(Q) {
          F.add(Cr(Q, G.prefix)), F.add(Cr(Q, ca(y, G.prefix)));
        }), Il(S, F);
      }, [S, y, G == null ? void 0 : G.prefix]), m = Nl(S), R = m.max, L = m.min, A = {
        theme: E,
        token: W,
        hashId: B,
        nonce: function() {
          return U.nonce;
        },
        clientOnly: g.clientOnly,
        layer: {
          name: "antd"
        },
        // antd is always at top of styles
        order: g.order || -999
      };
      kn(k(k({}, A), {}, {
        clientOnly: !1,
        path: ["Shared", N]
      }), function() {
        return typeof a == "function" ? a(W) : [];
      });
      var H = kn(k(k({}, A), {}, {
        path: [M, P, I]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var F = kl(W), Q = F.token, ue = F.flush, ae = ua(y, j, w), oe = ".".concat(P), Se = sa(y, j, ae, {
          deprecatedTokens: g.deprecatedTokens
        });
        G && ne(ae) === "object" && Object.keys(ae).forEach(function(be) {
          ae[be] = "var(".concat(Cr(be, ca(y, G.prefix)), ")");
        });
        var Ce = Dt(Q, {
          componentCls: oe,
          prefixCls: P,
          iconCls: ".".concat(I),
          antCls: ".".concat(N),
          calc: h,
          // @ts-ignore
          max: R,
          // @ts-ignore
          min: L
        }, G ? ae : Se), xe = C(Ce, {
          hashId: B,
          prefixCls: P,
          rootPrefixCls: N,
          iconPrefixCls: I
        });
        ue(y, Se);
        var _e = typeof i == "function" ? i(Ce, P, _, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : _e, xe];
      });
      return [H, B];
    };
  }
  function d(v, C, w) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = f(v, C, w, k({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), T = function(M) {
      var P = M.prefixCls, _ = M.rootCls, O = _ === void 0 ? P : _;
      return p(P, O), null;
    };
    return process.env.NODE_ENV !== "production" && (T.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), T;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Vl = "5.20.2";
function bn(e) {
  return e >= 0 && e <= 255;
}
function pr(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new je(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: c,
    b: s
  } = new je(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((r - i * (1 - l)) / l), d = Math.round((n - c * (1 - l)) / l), v = Math.round((o - s * (1 - l)) / l);
    if (bn(f) && bn(d) && bn(v))
      return new je({
        r: f,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new je({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Wl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Ti(e) {
  const {
    override: t
  } = e, r = Wl(e, ["override"]), n = Object.assign({}, t);
  Object.keys(tr).forEach((v) => {
    delete n[v];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, c = 768, s = 992, l = 1200, f = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: pr(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: pr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: pr(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: pr(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: c - 1,
    screenMD: c,
    screenMDMin: c,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new je("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new je("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new je("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var da = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Oi = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Gl = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Ul = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, _i = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = da(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Ti(i), a && Object.entries(a).forEach((c) => {
    let [s, l] = c;
    const {
      theme: f
    } = l, d = da(l, ["theme"]);
    let v = d;
    f && (v = _i(Object.assign(Object.assign({}, i), d), {
      override: d
    }, f)), i[s] = v;
  }), i;
};
function or() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = K.useContext(Si), a = `${Vl}-${t || ""}`, i = r || yi, [c, s, l] = ds(i, [tr, e], {
    salt: a,
    override: n,
    getComputedToken: _i,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ti,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Oi,
      ignore: Gl,
      preserve: Ul
    }
  });
  return [i, l, t ? s : "", c, o];
}
const Xl = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Yl = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), ql = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let c = {};
  return n !== !1 && (c = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, c), i), {
      [o]: i
    })
  };
}, Kl = (e) => ({
  outline: `${vt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ql = (e) => ({
  "&:focus-visible": Object.assign({}, Kl(e))
}), Ri = (e, t) => {
  const [r, n] = or();
  return kn({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Xl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: Jl,
  genComponentStyleHook: Zl,
  genSubStyleComponent: eu
} = zl({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = ze(et);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = or();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e,
      iconPrefixCls: t
    } = ze(et);
    return Ri(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Yl(e)
  }],
  getCommonStyle: ql,
  getCompUnitless: () => Oi
}), tu = Object.assign({}, b), {
  useId: va
} = tu, ru = () => "", nu = typeof va > "u" ? ru : va;
function ou(e, t, r) {
  var n, o;
  const a = Nt("ConfigProvider"), i = e || {}, c = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Zn), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Zn.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = nu();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || c.cssVar, f = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || s);
    process.env.NODE_ENV !== "production" && a(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ja(() => {
    var l, f;
    if (!e)
      return t;
    const d = Object.assign({}, c.components);
    Object.keys(e.components || {}).forEach((w) => {
      d[w] = Object.assign(Object.assign({}, d[w]), e.components[w]);
    });
    const v = `css-var-${s.replace(/:/g, "")}`, C = ((l = i.cssVar) !== null && l !== void 0 ? l : c.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof c.cssVar == "object" ? c.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((f = i.cssVar) === null || f === void 0 ? void 0 : f.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, c), i), {
      token: Object.assign(Object.assign({}, c.token), i.token),
      components: d,
      cssVar: C
    });
  }, [i, c], (l, f) => l.some((d, v) => {
    const C = f[v];
    return !Ic(d, C, !0);
  }));
}
var au = ["children"], Pi = /* @__PURE__ */ b.createContext({});
function iu(e) {
  var t = e.children, r = Qt(e, au);
  return /* @__PURE__ */ b.createElement(Pi.Provider, {
    value: r
  }, t);
}
var cu = /* @__PURE__ */ function(e) {
  kr(r, e);
  var t = Nr(r);
  function r() {
    return rt(this, r), t.apply(this, arguments);
  }
  return nt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(b.Component);
function su(e) {
  var t = b.useReducer(function(c) {
    return c + 1;
  }, 0), r = Y(t, 2), n = r[1], o = b.useRef(e), a = $r(function() {
    return o.current;
  }), i = $r(function(c) {
    o.current = typeof c == "function" ? c(o.current) : c, n();
  });
  return [a, i];
}
var st = "none", gr = "appear", hr = "enter", mr = "leave", pa = "none", Fe = "prepare", Pt = "start", At = "active", To = "end", Ai = "prepared";
function ga(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function lu(e, t) {
  var r = {
    animationend: ga("Animation", "AnimationEnd"),
    transitionend: ga("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var uu = lu(ot(), typeof window < "u" ? window : {}), ji = {};
if (ot()) {
  var fu = document.createElement("div");
  ji = fu.style;
}
var br = {};
function Mi(e) {
  if (br[e])
    return br[e];
  var t = uu[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in ji)
        return br[e] = t[a], br[e];
    }
  return "";
}
var $i = Mi("animationend"), Ii = Mi("transitionend"), Li = !!($i && Ii), ha = $i || "animationend", ma = Ii || "transitionend";
function ba(e, t) {
  if (!e) return null;
  if (ne(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const du = function(e) {
  var t = yt();
  function r(o) {
    o && (o.removeEventListener(ma, e), o.removeEventListener(ha, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(ma, e), o.addEventListener(ha, e), t.current = o);
  }
  return b.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var ki = ot() ? ic : St;
const vu = function() {
  var e = b.useRef(null);
  function t() {
    dt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = dt(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return b.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var pu = [Fe, Pt, At, To], gu = [Fe, Ai], Ni = !1, hu = !0;
function Di(e) {
  return e === At || e === To;
}
const mu = function(e, t, r) {
  var n = eo(pa), o = Y(n, 2), a = o[0], i = o[1], c = vu(), s = Y(c, 2), l = s[0], f = s[1];
  function d() {
    i(Fe, !0);
  }
  var v = t ? gu : pu;
  return ki(function() {
    if (a !== pa && a !== To) {
      var C = v.indexOf(a), w = v[C + 1], g = r(a);
      g === Ni ? i(w, !0) : w && l(function(p) {
        function T() {
          p.isCanceled() || i(w, !0);
        }
        g === !0 ? T() : Promise.resolve(g).then(T);
      });
    }
  }, [e, a]), b.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, a];
};
function bu(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, c = i === void 0 ? !0 : i, s = n.motionLeave, l = s === void 0 ? !0 : s, f = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, C = n.onEnterPrepare, w = n.onLeavePrepare, g = n.onAppearStart, p = n.onEnterStart, T = n.onLeaveStart, y = n.onAppearActive, M = n.onEnterActive, P = n.onLeaveActive, _ = n.onAppearEnd, O = n.onEnterEnd, E = n.onLeaveEnd, j = n.onVisibleChanged, B = eo(), W = Y(B, 2), G = W[0], V = W[1], N = su(st), I = Y(N, 2), U = I[0], S = I[1], h = eo(null), m = Y(h, 2), R = m[0], L = m[1], A = U(), H = yt(!1), F = yt(null);
  function Q() {
    return r();
  }
  var ue = yt(!1);
  function ae() {
    S(st), L(null, !0);
  }
  var oe = $r(function(de) {
    var se = U();
    if (se !== st) {
      var me = Q();
      if (!(de && !de.deadline && de.target !== me)) {
        var Ie = ue.current, ce;
        se === gr && Ie ? ce = _ == null ? void 0 : _(me, de) : se === hr && Ie ? ce = O == null ? void 0 : O(me, de) : se === mr && Ie && (ce = E == null ? void 0 : E(me, de)), Ie && ce !== !1 && ae();
      }
    }
  }), Se = du(oe), Ce = Y(Se, 1), xe = Ce[0], _e = function(se) {
    switch (se) {
      case gr:
        return X(X(X({}, Fe, v), Pt, g), At, y);
      case hr:
        return X(X(X({}, Fe, C), Pt, p), At, M);
      case mr:
        return X(X(X({}, Fe, w), Pt, T), At, P);
      default:
        return {};
    }
  }, be = b.useMemo(function() {
    return _e(A);
  }, [A]), Ue = mu(A, !e, function(de) {
    if (de === Fe) {
      var se = be[Fe];
      return se ? se(Q()) : Ni;
    }
    if (ie in be) {
      var me;
      L(((me = be[ie]) === null || me === void 0 ? void 0 : me.call(be, Q(), null)) || null);
    }
    return ie === At && A !== st && (xe(Q()), f > 0 && (clearTimeout(F.current), F.current = setTimeout(function() {
      oe({
        deadline: !0
      });
    }, f))), ie === Ai && ae(), hu;
  }), D = Y(Ue, 2), we = D[0], ie = D[1], Me = Di(ie);
  ue.current = Me, ki(function() {
    V(t);
    var de = H.current;
    H.current = !0;
    var se;
    !de && t && c && (se = gr), de && t && a && (se = hr), (de && !t && l || !de && d && !t && l) && (se = mr);
    var me = _e(se);
    se && (e || me[Fe]) ? (S(se), we()) : S(st);
  }, [t]), St(function() {
    // Cancel appear
    (A === gr && !c || // Cancel enter
    A === hr && !a || // Cancel leave
    A === mr && !l) && S(st);
  }, [c, a, l]), St(function() {
    return function() {
      H.current = !1, clearTimeout(F.current);
    };
  }, []);
  var Be = b.useRef(!1);
  St(function() {
    G && (Be.current = !0), G !== void 0 && A === st && ((Be.current || G) && (j == null || j(G)), Be.current = !0);
  }, [G, A]);
  var $e = R;
  return be[Fe] && ie === Pt && ($e = k({
    transition: "none"
  }, $e)), [A, ie, $e, G ?? t];
}
function yu(e) {
  var t = e;
  ne(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ b.forwardRef(function(o, a) {
    var i = o.visible, c = i === void 0 ? !0 : i, s = o.removeOnLeave, l = s === void 0 ? !0 : s, f = o.forceRender, d = o.children, v = o.motionName, C = o.leavedClassName, w = o.eventProps, g = b.useContext(Pi), p = g.motion, T = r(o, p), y = yt(), M = yt();
    function P() {
      try {
        return y.current instanceof HTMLElement ? y.current : xc(M.current);
      } catch {
        return null;
      }
    }
    var _ = bu(T, c, P, o), O = Y(_, 4), E = O[0], j = O[1], B = O[2], W = O[3], G = b.useRef(W);
    W && (G.current = !0);
    var V = b.useCallback(function(R) {
      y.current = R, Ma(a, R);
    }, [a]), N, I = k(k({}, w), {}, {
      visible: c
    });
    if (!d)
      N = null;
    else if (E === st)
      W ? N = d(k({}, I), V) : !l && G.current && C ? N = d(k(k({}, I), {}, {
        className: C
      }), V) : f || !l && !C ? N = d(k(k({}, I), {}, {
        style: {
          display: "none"
        }
      }), V) : N = null;
    else {
      var U;
      j === Fe ? U = "prepare" : Di(j) ? U = "active" : j === Pt && (U = "start");
      var S = ba(v, "".concat(E, "-").concat(U));
      N = d(k(k({}, I), {}, {
        className: Ve(ba(v, E), X(X({}, S, S && U), v, typeof v == "string")),
        style: B
      }), V);
    }
    if (/* @__PURE__ */ b.isValidElement(N) && $a(N)) {
      var h = N, m = h.ref;
      m || (N = /* @__PURE__ */ b.cloneElement(N, {
        ref: V
      }));
    }
    return /* @__PURE__ */ b.createElement(cu, {
      ref: M
    }, N);
  });
  return n.displayName = "CSSMotion", n;
}
const Oo = yu(Li);
var ro = "add", no = "keep", oo = "remove", yn = "removed";
function Su(e) {
  var t;
  return e && ne(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, k(k({}, t), {}, {
    key: String(t.key)
  });
}
function ao() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Su);
}
function Cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = ao(e), i = ao(t);
  a.forEach(function(l) {
    for (var f = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(C) {
          return k(k({}, C), {}, {
            status: ro
          });
        })), n = d), r.push(k(k({}, v), {}, {
          status: no
        })), n += 1, f = !0;
        break;
      }
    }
    f || r.push(k(k({}, l), {}, {
      status: oo
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(l) {
    return k(k({}, l), {}, {
      status: ro
    });
  })));
  var c = {};
  r.forEach(function(l) {
    var f = l.key;
    c[f] = (c[f] || 0) + 1;
  });
  var s = Object.keys(c).filter(function(l) {
    return c[l] > 1;
  });
  return s.forEach(function(l) {
    r = r.filter(function(f) {
      var d = f.key, v = f.status;
      return d !== l || v !== oo;
    }), r.forEach(function(f) {
      f.key === l && (f.status = no);
    });
  }), r;
}
var Eu = ["component", "children", "onVisibleChanged", "onAllRemoved"], xu = ["status"], wu = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oo, r = /* @__PURE__ */ function(n) {
    kr(a, n);
    var o = Nr(a);
    function a() {
      var i;
      rt(this, a);
      for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++)
        s[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(s)), X(Ct(i), "state", {
        keyEntities: []
      }), X(Ct(i), "removeKey", function(f) {
        var d = i.state.keyEntities, v = d.map(function(C) {
          return C.key !== f ? C : k(k({}, C), {}, {
            status: yn
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(C) {
          var w = C.status;
          return w !== yn;
        }).length;
      }), i;
    }
    return nt(a, [{
      key: "render",
      value: function() {
        var c = this, s = this.state.keyEntities, l = this.props, f = l.component, d = l.children, v = l.onVisibleChanged, C = l.onAllRemoved, w = Qt(l, Eu), g = f || b.Fragment, p = {};
        return wu.forEach(function(T) {
          p[T] = w[T], delete w[T];
        }), delete w.keys, /* @__PURE__ */ b.createElement(g, w, s.map(function(T, y) {
          var M = T.status, P = Qt(T, xu), _ = M === ro || M === no;
          return /* @__PURE__ */ b.createElement(t, jt({}, p, {
            key: P.key,
            visible: _,
            eventProps: P,
            onVisibleChanged: function(E) {
              if (v == null || v(E, {
                key: P.key
              }), !E) {
                var j = c.removeKey(P.key);
                j === 0 && C && C();
              }
            }
          }), function(O, E) {
            return d(k(k({}, O), {}, {
              index: y
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(c, s) {
        var l = c.keys, f = s.keyEntities, d = ao(l), v = Cu(f, d);
        return {
          keyEntities: v.filter(function(C) {
            var w = f.find(function(g) {
              var p = g.key;
              return C.key === p;
            });
            return !(w && w.status === yn && C.status === oo);
          })
        };
      }
    }]), a;
  }(b.Component);
  return X(r, "defaultProps", {
    component: "div"
  }), r;
}
Tu(Li);
function Ou(e) {
  const {
    children: t
  } = e, [, r] = or(), {
    motion: n
  } = r, o = b.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ b.createElement(iu, {
    motion: n
  }, t) : t;
}
const Bi = /* @__PURE__ */ b.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Nt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Bi.displayName = "PropWarning");
const _u = process.env.NODE_ENV !== "production" ? Bi : () => null;
var Ru = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let io = !1;
process.env.NODE_ENV;
const Pu = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Hi;
function Au() {
  return Hi || jr;
}
function ju(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Mu = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (Hi = t), n && ju(n) && (process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), _l(Au(), n));
}, $u = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    form: i,
    locale: c,
    componentSize: s,
    direction: l,
    space: f,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: C,
    popupOverflow: w,
    legacyLocale: g,
    parentContext: p,
    iconPrefixCls: T,
    theme: y,
    componentDisabled: M,
    segmented: P,
    statistic: _,
    spin: O,
    calendar: E,
    carousel: j,
    cascader: B,
    collapse: W,
    typography: G,
    checkbox: V,
    descriptions: N,
    divider: I,
    drawer: U,
    skeleton: S,
    steps: h,
    image: m,
    layout: R,
    list: L,
    mentions: A,
    modal: H,
    progress: F,
    result: Q,
    slider: ue,
    breadcrumb: ae,
    menu: oe,
    pagination: Se,
    input: Ce,
    textArea: xe,
    empty: _e,
    badge: be,
    radio: Ue,
    rate: D,
    switch: we,
    transfer: ie,
    avatar: Me,
    message: Be,
    tag: $e,
    table: de,
    card: se,
    tabs: me,
    timeline: Ie,
    timePicker: ce,
    upload: Te,
    notification: at,
    tree: gt,
    colorPicker: Yr,
    datePicker: ir,
    rangePicker: cr,
    flex: Ft,
    wave: qr,
    dropdown: Kr,
    warning: Qr,
    tour: Jr,
    floatButtonGroup: Zr,
    variant: en,
    inputNumber: tn,
    treeSelect: zt
  } = e, Vt = b.useCallback((le, pe) => {
    const {
      prefixCls: Re
    } = e;
    if (pe)
      return pe;
    const ke = Re || p.getPrefixCls("");
    return le ? `${ke}-${le}` : ke;
  }, [p.getPrefixCls, e.prefixCls]), Le = T || p.iconPrefixCls || Ci, Ye = r || p.csp;
  Ri(Le, Ye);
  const it = ou(y, p.theme, {
    prefixCls: Vt("")
  });
  process.env.NODE_ENV !== "production" && (io = io || !!it);
  const wt = {
    csp: Ye,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: c || g,
    direction: l,
    space: f,
    virtual: d,
    popupMatchSelectWidth: C ?? v,
    popupOverflow: w,
    getPrefixCls: Vt,
    iconPrefixCls: Le,
    theme: it,
    segmented: P,
    statistic: _,
    spin: O,
    calendar: E,
    carousel: j,
    cascader: B,
    collapse: W,
    typography: G,
    checkbox: V,
    descriptions: N,
    divider: I,
    drawer: U,
    skeleton: S,
    steps: h,
    image: m,
    input: Ce,
    textArea: xe,
    layout: R,
    list: L,
    mentions: A,
    modal: H,
    progress: F,
    result: Q,
    slider: ue,
    breadcrumb: ae,
    menu: oe,
    pagination: Se,
    empty: _e,
    badge: be,
    radio: Ue,
    rate: D,
    switch: we,
    transfer: ie,
    avatar: Me,
    message: Be,
    tag: $e,
    table: de,
    card: se,
    tabs: me,
    timeline: Ie,
    timePicker: ce,
    upload: Te,
    notification: at,
    tree: gt,
    colorPicker: Yr,
    datePicker: ir,
    rangePicker: cr,
    flex: Ft,
    wave: qr,
    dropdown: Kr,
    warning: Qr,
    tour: Jr,
    floatButtonGroup: Zr,
    variant: en,
    inputNumber: tn,
    treeSelect: zt
  };
  process.env.NODE_ENV !== "production" && Nt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ct = Object.assign({}, p);
  Object.keys(wt).forEach((le) => {
    wt[le] !== void 0 && (ct[le] = wt[le]);
  }), Pu.forEach((le) => {
    const pe = e[le];
    pe && (ct[le] = pe);
  }), typeof n < "u" && (ct.button = Object.assign({
    autoInsertSpace: n
  }, ct.button));
  const qe = ja(() => ct, ct, (le, pe) => {
    const Re = Object.keys(le), ke = Object.keys(pe);
    return Re.length !== ke.length || Re.some((Tt) => le[Tt] !== pe[Tt]);
  }), rn = b.useMemo(() => ({
    prefixCls: Le,
    csp: Ye
  }), [Le, Ye]);
  let ve = /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(_u, {
    dropdownMatchSelectWidth: v
  }), t);
  const Wt = b.useMemo(() => {
    var le, pe, Re, ke;
    return Gs(((le = Wr.Form) === null || le === void 0 ? void 0 : le.defaultValidateMessages) || {}, ((Re = (pe = qe.locale) === null || pe === void 0 ? void 0 : pe.Form) === null || Re === void 0 ? void 0 : Re.defaultValidateMessages) || {}, ((ke = qe.form) === null || ke === void 0 ? void 0 : ke.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [qe, i == null ? void 0 : i.validateMessages]);
  Object.keys(Wt).length > 0 && (ve = /* @__PURE__ */ b.createElement(Xs.Provider, {
    value: Wt
  }, ve)), c && (ve = /* @__PURE__ */ b.createElement(pi, {
    locale: c,
    _ANT_MARK__: vi
  }, ve)), (Le || Ye) && (ve = /* @__PURE__ */ b.createElement(xo.Provider, {
    value: rn
  }, ve)), s && (ve = /* @__PURE__ */ b.createElement(Pl, {
    size: s
  }, ve)), ve = /* @__PURE__ */ b.createElement(Ou, null, ve);
  const nn = b.useMemo(() => {
    const le = it || {}, {
      algorithm: pe,
      token: Re,
      components: ke,
      cssVar: Tt
    } = le, on = Ru(le, ["algorithm", "token", "components", "cssVar"]), sr = pe && (!Array.isArray(pe) || pe.length > 0) ? jn(pe) : yi, u = {};
    Object.entries(ke || {}).forEach(($) => {
      let [z, ee] = $;
      const q = Object.assign({}, ee);
      "algorithm" in q && (q.algorithm === !0 ? q.theme = sr : (Array.isArray(q.algorithm) || typeof q.algorithm == "function") && (q.theme = jn(q.algorithm)), delete q.algorithm), u[z] = q;
    });
    const x = Object.assign(Object.assign({}, tr), Re);
    return Object.assign(Object.assign({}, on), {
      theme: sr,
      token: x,
      components: u,
      override: Object.assign({
        override: x
      }, u),
      cssVar: Tt
    });
  }, [it]);
  return y && (ve = /* @__PURE__ */ b.createElement(Si.Provider, {
    value: nn
  }, ve)), qe.warning && (ve = /* @__PURE__ */ b.createElement(ui.Provider, {
    value: qe.warning
  }, ve)), M !== void 0 && (ve = /* @__PURE__ */ b.createElement(Rl, {
    disabled: M
  }, ve)), /* @__PURE__ */ b.createElement(et.Provider, {
    value: qe
  }, ve);
}, Bt = (e) => {
  const t = b.useContext(et), r = b.useContext(di);
  return /* @__PURE__ */ b.createElement($u, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Bt.ConfigContext = et;
Bt.SizeContext = Lt;
Bt.config = Mu;
Bt.useConfig = Al;
Object.defineProperty(Bt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Lt)
});
process.env.NODE_ENV !== "production" && (Bt.displayName = "ConfigProvider");
function Fi(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Iu(e) {
  return Fi(e) instanceof ShadowRoot;
}
function Lu(e) {
  return Iu(e) ? Fi(e) : null;
}
function ku(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Nu(e, t) {
  pt(e, "[@ant-design/icons] ".concat(t));
}
function ya(e) {
  return ne(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ne(e.icon) === "object" || typeof e.icon == "function");
}
function Sa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[ku(r)] = n;
    }
    return t;
  }, {});
}
function co(e, t, r) {
  return r ? /* @__PURE__ */ K.createElement(e.tag, k(k({
    key: t
  }, Sa(e.attrs)), r), (e.children || []).map(function(n, o) {
    return co(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ K.createElement(e.tag, k({
    key: t
  }, Sa(e.attrs)), (e.children || []).map(function(n, o) {
    return co(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function zi(e) {
  return er(e)[0];
}
function Vi(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Du = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Bu = function(t) {
  var r = ze(xo), n = r.csp, o = r.prefixCls, a = Du;
  o && (a = a.replace(/anticon/g, o)), St(function() {
    var i = t.current, c = Lu(i);
    Et(a, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: c
    });
  }, []);
}, Hu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], qt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Fu(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  qt.primaryColor = t, qt.secondaryColor = r || zi(t), qt.calculated = !!r;
}
function zu() {
  return k({}, qt);
}
var Ht = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, c = t.secondaryColor, s = Qt(t, Hu), l = b.useRef(), f = qt;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: c || zi(i)
  }), Bu(l), Nu(ya(r), "icon should be icon definiton, but got ".concat(r)), !ya(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = k(k({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), co(d.icon, "svg-".concat(d.name), k(k({
    className: n,
    onClick: o,
    style: a,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: l
  }));
};
Ht.displayName = "IconReact";
Ht.getTwoToneColors = zu;
Ht.setTwoToneColors = Fu;
function Wi(e) {
  var t = Vi(e), r = Y(t, 2), n = r[0], o = r[1];
  return Ht.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Vu() {
  var e = Ht.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Wu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Wi(Ar.primary);
var Gr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, c = e.onClick, s = e.twoToneColor, l = Qt(e, Wu), f = b.useContext(xo), d = f.prefixCls, v = d === void 0 ? "anticon" : d, C = f.rootClassName, w = Ve(C, v, X(X({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!o || n.name === "loading"), r), g = i;
  g === void 0 && c && (g = -1);
  var p = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, T = Vi(s), y = Y(T, 2), M = y[0], P = y[1];
  return /* @__PURE__ */ b.createElement("span", jt({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: g,
    onClick: c,
    className: w
  }), /* @__PURE__ */ b.createElement(Ht, {
    icon: n,
    primaryColor: M,
    secondaryColor: P,
    style: p
  }));
});
Gr.displayName = "AntdIcon";
Gr.getTwoToneColor = Vu;
Gr.setTwoToneColor = Wi;
function Gu(e) {
  return e && /* @__PURE__ */ K.isValidElement(e) && e.type === K.Fragment;
}
const Uu = (e, t, r) => /* @__PURE__ */ K.isValidElement(e) ? /* @__PURE__ */ K.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function Gi(e, t) {
  return Uu(e, e, t);
}
var Xu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Yu = function(t, r) {
  return /* @__PURE__ */ b.createElement(Gr, jt({}, t, {
    ref: r,
    icon: Xu
  }));
}, Ui = /* @__PURE__ */ b.forwardRef(Yu);
process.env.NODE_ENV !== "production" && (Ui.displayName = "LoadingOutlined");
function rr() {
  rr = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(S, h, m) {
    S[h] = m.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
  function l(S, h, m) {
    return Object.defineProperty(S, h, {
      value: m,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), S[h];
  }
  try {
    l({}, "");
  } catch {
    l = function(m, R, L) {
      return m[R] = L;
    };
  }
  function f(S, h, m, R) {
    var L = h && h.prototype instanceof T ? h : T, A = Object.create(L.prototype), H = new I(R || []);
    return o(A, "_invoke", {
      value: W(S, m, H)
    }), A;
  }
  function d(S, h, m) {
    try {
      return {
        type: "normal",
        arg: S.call(h, m)
      };
    } catch (R) {
      return {
        type: "throw",
        arg: R
      };
    }
  }
  t.wrap = f;
  var v = "suspendedStart", C = "suspendedYield", w = "executing", g = "completed", p = {};
  function T() {
  }
  function y() {
  }
  function M() {
  }
  var P = {};
  l(P, i, function() {
    return this;
  });
  var _ = Object.getPrototypeOf, O = _ && _(_(U([])));
  O && O !== r && n.call(O, i) && (P = O);
  var E = M.prototype = T.prototype = Object.create(P);
  function j(S) {
    ["next", "throw", "return"].forEach(function(h) {
      l(S, h, function(m) {
        return this._invoke(h, m);
      });
    });
  }
  function B(S, h) {
    function m(L, A, H, F) {
      var Q = d(S[L], S, A);
      if (Q.type !== "throw") {
        var ue = Q.arg, ae = ue.value;
        return ae && ne(ae) == "object" && n.call(ae, "__await") ? h.resolve(ae.__await).then(function(oe) {
          m("next", oe, H, F);
        }, function(oe) {
          m("throw", oe, H, F);
        }) : h.resolve(ae).then(function(oe) {
          ue.value = oe, H(ue);
        }, function(oe) {
          return m("throw", oe, H, F);
        });
      }
      F(Q.arg);
    }
    var R;
    o(this, "_invoke", {
      value: function(A, H) {
        function F() {
          return new h(function(Q, ue) {
            m(A, H, Q, ue);
          });
        }
        return R = R ? R.then(F, F) : F();
      }
    });
  }
  function W(S, h, m) {
    var R = v;
    return function(L, A) {
      if (R === w) throw Error("Generator is already running");
      if (R === g) {
        if (L === "throw") throw A;
        return {
          value: e,
          done: !0
        };
      }
      for (m.method = L, m.arg = A; ; ) {
        var H = m.delegate;
        if (H) {
          var F = G(H, m);
          if (F) {
            if (F === p) continue;
            return F;
          }
        }
        if (m.method === "next") m.sent = m._sent = m.arg;
        else if (m.method === "throw") {
          if (R === v) throw R = g, m.arg;
          m.dispatchException(m.arg);
        } else m.method === "return" && m.abrupt("return", m.arg);
        R = w;
        var Q = d(S, h, m);
        if (Q.type === "normal") {
          if (R = m.done ? g : C, Q.arg === p) continue;
          return {
            value: Q.arg,
            done: m.done
          };
        }
        Q.type === "throw" && (R = g, m.method = "throw", m.arg = Q.arg);
      }
    };
  }
  function G(S, h) {
    var m = h.method, R = S.iterator[m];
    if (R === e) return h.delegate = null, m === "throw" && S.iterator.return && (h.method = "return", h.arg = e, G(S, h), h.method === "throw") || m !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + m + "' method")), p;
    var L = d(R, S.iterator, h.arg);
    if (L.type === "throw") return h.method = "throw", h.arg = L.arg, h.delegate = null, p;
    var A = L.arg;
    return A ? A.done ? (h[S.resultName] = A.value, h.next = S.nextLoc, h.method !== "return" && (h.method = "next", h.arg = e), h.delegate = null, p) : A : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, p);
  }
  function V(S) {
    var h = {
      tryLoc: S[0]
    };
    1 in S && (h.catchLoc = S[1]), 2 in S && (h.finallyLoc = S[2], h.afterLoc = S[3]), this.tryEntries.push(h);
  }
  function N(S) {
    var h = S.completion || {};
    h.type = "normal", delete h.arg, S.completion = h;
  }
  function I(S) {
    this.tryEntries = [{
      tryLoc: "root"
    }], S.forEach(V, this), this.reset(!0);
  }
  function U(S) {
    if (S || S === "") {
      var h = S[i];
      if (h) return h.call(S);
      if (typeof S.next == "function") return S;
      if (!isNaN(S.length)) {
        var m = -1, R = function L() {
          for (; ++m < S.length; ) if (n.call(S, m)) return L.value = S[m], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return R.next = R;
      }
    }
    throw new TypeError(ne(S) + " is not iterable");
  }
  return y.prototype = M, o(E, "constructor", {
    value: M,
    configurable: !0
  }), o(M, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = l(M, s, "GeneratorFunction"), t.isGeneratorFunction = function(S) {
    var h = typeof S == "function" && S.constructor;
    return !!h && (h === y || (h.displayName || h.name) === "GeneratorFunction");
  }, t.mark = function(S) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(S, M) : (S.__proto__ = M, l(S, s, "GeneratorFunction")), S.prototype = Object.create(E), S;
  }, t.awrap = function(S) {
    return {
      __await: S
    };
  }, j(B.prototype), l(B.prototype, c, function() {
    return this;
  }), t.AsyncIterator = B, t.async = function(S, h, m, R, L) {
    L === void 0 && (L = Promise);
    var A = new B(f(S, h, m, R), L);
    return t.isGeneratorFunction(h) ? A : A.next().then(function(H) {
      return H.done ? H.value : A.next();
    });
  }, j(E), l(E, s, "Generator"), l(E, i, function() {
    return this;
  }), l(E, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(S) {
    var h = Object(S), m = [];
    for (var R in h) m.push(R);
    return m.reverse(), function L() {
      for (; m.length; ) {
        var A = m.pop();
        if (A in h) return L.value = A, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = U, I.prototype = {
    constructor: I,
    reset: function(h) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !h) for (var m in this) m.charAt(0) === "t" && n.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = e);
    },
    stop: function() {
      this.done = !0;
      var h = this.tryEntries[0].completion;
      if (h.type === "throw") throw h.arg;
      return this.rval;
    },
    dispatchException: function(h) {
      if (this.done) throw h;
      var m = this;
      function R(ue, ae) {
        return H.type = "throw", H.arg = h, m.next = ue, ae && (m.method = "next", m.arg = e), !!ae;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var A = this.tryEntries[L], H = A.completion;
        if (A.tryLoc === "root") return R("end");
        if (A.tryLoc <= this.prev) {
          var F = n.call(A, "catchLoc"), Q = n.call(A, "finallyLoc");
          if (F && Q) {
            if (this.prev < A.catchLoc) return R(A.catchLoc, !0);
            if (this.prev < A.finallyLoc) return R(A.finallyLoc);
          } else if (F) {
            if (this.prev < A.catchLoc) return R(A.catchLoc, !0);
          } else {
            if (!Q) throw Error("try statement without catch or finally");
            if (this.prev < A.finallyLoc) return R(A.finallyLoc);
          }
        }
      }
    },
    abrupt: function(h, m) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var L = this.tryEntries[R];
        if (L.tryLoc <= this.prev && n.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var A = L;
          break;
        }
      }
      A && (h === "break" || h === "continue") && A.tryLoc <= m && m <= A.finallyLoc && (A = null);
      var H = A ? A.completion : {};
      return H.type = h, H.arg = m, A ? (this.method = "next", this.next = A.finallyLoc, p) : this.complete(H);
    },
    complete: function(h, m) {
      if (h.type === "throw") throw h.arg;
      return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && m && (this.next = m), p;
    },
    finish: function(h) {
      for (var m = this.tryEntries.length - 1; m >= 0; --m) {
        var R = this.tryEntries[m];
        if (R.finallyLoc === h) return this.complete(R.completion, R.afterLoc), N(R), p;
      }
    },
    catch: function(h) {
      for (var m = this.tryEntries.length - 1; m >= 0; --m) {
        var R = this.tryEntries[m];
        if (R.tryLoc === h) {
          var L = R.completion;
          if (L.type === "throw") {
            var A = L.arg;
            N(R);
          }
          return A;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(h, m, R) {
      return this.delegate = {
        iterator: U(h),
        resultName: m,
        nextLoc: R
      }, this.method === "next" && (this.arg = e), p;
    }
  }, t;
}
function Ca(e, t, r, n, o, a, i) {
  try {
    var c = e[a](i), s = c.value;
  } catch (l) {
    return void r(l);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, o);
}
function Xi(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(s) {
        Ca(a, n, o, i, c, "next", s);
      }
      function c(s) {
        Ca(a, n, o, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var ar = k({}, uc), qu = ar.version, Ku = ar.render, Qu = ar.unmountComponentAtNode, Ur;
try {
  var Ju = Number((qu || "").split(".")[0]);
  Ju >= 18 && (Ur = ar.createRoot);
} catch {
}
function Ea(e) {
  var t = ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ne(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ir = "__rc_react_root__";
function Zu(e, t) {
  Ea(!0);
  var r = t[Ir] || Ur(t);
  Ea(!1), r.render(e), t[Ir] = r;
}
function ef(e, t) {
  Ku(e, t);
}
function tf(e, t) {
  if (Ur) {
    Zu(e, t);
    return;
  }
  ef(e, t);
}
function rf(e) {
  return so.apply(this, arguments);
}
function so() {
  return so = Xi(/* @__PURE__ */ rr().mark(function e(t) {
    return rr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Ir]) === null || o === void 0 || o.unmount(), delete t[Ir];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), so.apply(this, arguments);
}
function nf(e) {
  Qu(e);
}
function of(e) {
  return lo.apply(this, arguments);
}
function lo() {
  return lo = Xi(/* @__PURE__ */ rr().mark(function e(t) {
    return rr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Ur === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", rf(t));
        case 2:
          nf(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), lo.apply(this, arguments);
}
const af = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}, cf = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, sf = Zl("Wave", (e) => [cf(e)]), Yi = `${jr}-wave-target`;
function lf(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Sn(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && lf(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function uf(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Sn(t) ? t : Sn(r) ? r : Sn(n) ? n : null;
}
function Cn(e) {
  return Number.isNaN(e) ? 0 : e;
}
const ff = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, o = b.useRef(null), [a, i] = b.useState(null), [c, s] = b.useState([]), [l, f] = b.useState(0), [d, v] = b.useState(0), [C, w] = b.useState(0), [g, p] = b.useState(0), [T, y] = b.useState(!1), M = {
    left: l,
    top: d,
    width: C,
    height: g,
    borderRadius: c.map((O) => `${O}px`).join(" ")
  };
  a && (M["--wave-color"] = a);
  function P() {
    const O = getComputedStyle(r);
    i(uf(r));
    const E = O.position === "static", {
      borderLeftWidth: j,
      borderTopWidth: B
    } = O;
    f(E ? r.offsetLeft : Cn(-parseFloat(j))), v(E ? r.offsetTop : Cn(-parseFloat(B))), w(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: W,
      borderTopRightRadius: G,
      borderBottomLeftRadius: V,
      borderBottomRightRadius: N
    } = O;
    s([W, G, N, V].map((I) => Cn(parseFloat(I))));
  }
  if (b.useEffect(() => {
    if (r) {
      const O = dt(() => {
        P(), y(!0);
      });
      let E;
      return typeof ResizeObserver < "u" && (E = new ResizeObserver(P), E.observe(r)), () => {
        dt.cancel(O), E == null || E.disconnect();
      };
    }
  }, []), !T)
    return null;
  const _ = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(Yi));
  return /* @__PURE__ */ b.createElement(Oo, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, E) => {
      var j;
      if (E.deadline || E.propertyName === "opacity") {
        const B = (j = o.current) === null || j === void 0 ? void 0 : j.parentElement;
        of(B).then(() => {
          B == null || B.remove();
        });
      }
      return !1;
    }
  }, (O, E) => {
    let {
      className: j
    } = O;
    return /* @__PURE__ */ b.createElement("div", {
      ref: ho(o, E),
      className: Ve(t, j, {
        "wave-quick": _
      }),
      style: M
    });
  });
}, df = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), tf(/* @__PURE__ */ b.createElement(ff, Object.assign({}, t, {
    target: e
  })), o);
}, vf = (e, t, r) => {
  const {
    wave: n
  } = b.useContext(et), [, o, a] = or(), i = $r((l) => {
    const f = e.current;
    if (n != null && n.disabled || !f)
      return;
    const d = f.querySelector(`.${Yi}`) || f, {
      showEffect: v
    } = n || {};
    (v || df)(d, {
      className: t,
      token: o,
      component: r,
      event: l,
      hashId: a
    });
  }), c = b.useRef();
  return (l) => {
    dt.cancel(c.current), c.current = dt(() => {
      i(l);
    });
  };
}, qi = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = ze(et), a = yt(null), i = o("wave"), [, c] = sf(i), s = vf(a, Ve(i, c), n);
  if (K.useEffect(() => {
    const f = a.current;
    if (!f || f.nodeType !== 1 || r)
      return;
    const d = (v) => {
      !af(v.target) || // No need wave
      !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || s(v);
    };
    return f.addEventListener("click", d, !0), () => {
      f.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ K.isValidElement(t))
    return t ?? null;
  const l = $a(t) ? ho(t.ref, a) : a;
  return Gi(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (qi.displayName = "Wave");
const pf = (e) => {
  const t = K.useContext(Lt);
  return K.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, gf = /* @__PURE__ */ b.createContext(null), hf = (e, t) => {
  const r = b.useContext(gf), n = b.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, c = o === "vertical" ? "-vertical-" : "-";
    return Ve(`${e}-compact${c}item`, {
      [`${e}-compact${c}first-item`]: a,
      [`${e}-compact${c}last-item`]: i,
      [`${e}-compact${c}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
};
var mf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ki = /* @__PURE__ */ b.createContext(void 0), bf = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = b.useContext(et), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = mf(e, ["prefixCls", "size", "className"]), c = t("btn-group", n), [, , s] = or();
  let l = "";
  switch (o) {
    case "large":
      l = "lg";
      break;
    case "small":
      l = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const d = Nt("Button.Group");
    process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const f = Ve(c, {
    [`${c}-${l}`]: l,
    [`${c}-rtl`]: r === "rtl"
  }, a, s);
  return /* @__PURE__ */ b.createElement(Ki.Provider, {
    value: o
  }, /* @__PURE__ */ b.createElement("div", Object.assign({}, i, {
    className: f
  })));
}, xa = /^[\u4e00-\u9fa5]{2}$/, uo = xa.test.bind(xa);
function wa(e) {
  return typeof e == "string";
}
function yr(e) {
  return e === "text" || e === "link";
}
function yf(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && wa(e.type) && uo(e.props.children) ? Gi(e, {
    children: e.props.children.split("").join(r)
  }) : wa(e) ? uo(e) ? /* @__PURE__ */ K.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ K.createElement("span", null, e) : Gu(e) ? /* @__PURE__ */ K.createElement("span", null, e) : e;
}
function Sf(e, t) {
  let r = !1;
  const n = [];
  return K.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const c = n.length - 1, s = n[c];
      n[c] = `${s}${o}`;
    } else
      n.push(o);
    r = i;
  }), K.Children.map(n, (o) => yf(o, t));
}
const Qi = /* @__PURE__ */ vo((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = Ve(`${a}-icon`, r);
  return /* @__PURE__ */ K.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), Ta = /* @__PURE__ */ vo((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = Ve(`${r}-loading-icon`, n);
  return /* @__PURE__ */ K.createElement(Qi, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ K.createElement(Ui, {
    className: a
  }));
}), En = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), xn = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Cf = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a
  } = e, i = !!r;
  return n ? /* @__PURE__ */ K.createElement(Ta, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ K.createElement(Oo, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: En,
    onAppearActive: xn,
    onEnterStart: En,
    onEnterActive: xn,
    onLeaveStart: xn,
    onLeaveActive: En
  }, (c, s) => {
    let {
      className: l,
      style: f
    } = c;
    return /* @__PURE__ */ K.createElement(Ta, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, a), f),
      ref: s,
      iconClassName: l
    });
  });
}, Oa = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Ef = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      Oa(`${t}-primary`, o),
      Oa(`${t}-danger`, a)
    ]
  };
}, Ji = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return Dt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, Zi = (e) => {
  var t, r, n, o, a, i;
  const c = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, f = (o = e.contentLineHeight) !== null && o !== void 0 ? o : _r(c), d = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : _r(s), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : _r(l);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    contentFontSize: c,
    contentFontSizeSM: s,
    contentFontSizeLG: l,
    contentLineHeight: f,
    contentLineHeightSM: d,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - c * f) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * v) / 2 - e.lineWidth, 0)
  };
}, xf = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${vt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, Ql(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, tt = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), wf = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Tf = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Of = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), nr = (e, t, r, n, o, a, i, c) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, tt(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, c))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), _o = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Of(e))
}), ec = (e) => Object.assign({}, _o(e)), Lr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), tc = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ec(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), tt(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), nr(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, tt(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), nr(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), _o(e))
}), _f = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ec(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), tt(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), nr(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, tt(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), nr(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), _o(e))
}), Rf = (e) => Object.assign(Object.assign({}, tc(e)), {
  borderStyle: "dashed"
}), Pf = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, tt(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Lr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, tt(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Lr(e))
}), Af = (e) => Object.assign(Object.assign(Object.assign({}, tt(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Lr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Lr(e)), tt(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), jf = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: tc(e),
    [`${t}-primary`]: _f(e),
    [`${t}-dashed`]: Rf(e),
    [`${t}-link`]: Pf(e),
    [`${t}-text`]: Af(e),
    [`${t}-ghost`]: nr(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Ro = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    lineHeight: a,
    borderRadius: i,
    buttonPaddingHorizontal: c,
    iconCls: s,
    buttonPaddingVertical: l
  } = e, f = `${r}-icon-only`;
  return [
    {
      [t]: {
        fontSize: o,
        lineHeight: a,
        height: n,
        padding: `${vt(l)} ${vt(c)}`,
        borderRadius: i,
        [`&${f}`]: {
          width: n,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${r}-compact-item`]: {
            flex: "none"
          },
          [`&${r}-round`]: {
            width: "auto"
          },
          [s]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: wf(e)
    },
    {
      [`${r}${r}-round${t}`]: Tf(e)
    }
  ];
}, Mf = (e) => {
  const t = Dt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Ro(t, e.componentCls);
}, $f = (e) => {
  const t = Dt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Ro(t, `${e.componentCls}-sm`);
}, If = (e) => {
  const t = Dt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Ro(t, `${e.componentCls}-lg`);
}, Lf = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, kf = Jl("Button", (e) => {
  const t = Ji(e);
  return [
    // Shared
    xf(t),
    // Size
    Mf(t),
    $f(t),
    If(t),
    // Block
    Lf(t),
    // Group (type, ghost, danger, loading)
    jf(t),
    // Button Group
    Ef(t)
  ];
}, Zi, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Nf(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: a
  } = r, i = a ? "> *" : "", c = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function Df(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Bf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Nf(e, n, t)), Df(r, n, t))
  };
}
function Hf(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Ff(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function zf(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Hf(e, t)), Ff(e.componentCls, t))
  };
}
const Vf = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${vt(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${vt(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Wf = eu(["Button", "compact"], (e) => {
  const t = Ji(e);
  return [
    // Space Compact
    Bf(t),
    zf(t),
    Vf(t)
  ];
}, Zi);
var Gf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Uf(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Xf = /* @__PURE__ */ K.forwardRef((e, t) => {
  var r, n, o;
  const {
    loading: a = !1,
    prefixCls: i,
    type: c,
    danger: s = !1,
    shape: l = "default",
    size: f,
    styles: d,
    disabled: v,
    className: C,
    rootClassName: w,
    children: g,
    icon: p,
    iconPosition: T = "start",
    ghost: y = !1,
    block: M = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: P = "button",
    classNames: _,
    style: O = {},
    autoInsertSpace: E
  } = e, j = Gf(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), B = c || "default", {
    getPrefixCls: W,
    direction: G,
    button: V
  } = ze(et), N = (r = E ?? (V == null ? void 0 : V.autoInsertSpace)) !== null && r !== void 0 ? r : !0, I = W("btn", i), [U, S, h] = kf(I), m = ze(Mr), R = v ?? m, L = ze(Ki), A = cc(() => Uf(a), [a]), [H, F] = Po(A.loading), [Q, ue] = Po(!1), oe = ho(t, /* @__PURE__ */ lc()), Se = sc.count(g) === 1 && !p && !yr(B);
  St(() => {
    let ce = null;
    A.delay > 0 ? ce = setTimeout(() => {
      ce = null, F(!0);
    }, A.delay) : F(A.loading);
    function Te() {
      ce && (clearTimeout(ce), ce = null);
    }
    return Te;
  }, [A]), St(() => {
    if (!oe || !oe.current || !N)
      return;
    const ce = oe.current.textContent;
    Se && uo(ce) ? Q || ue(!0) : Q && ue(!1);
  }, [oe]);
  const Ce = (ce) => {
    const {
      onClick: Te
    } = e;
    if (H || R) {
      ce.preventDefault();
      return;
    }
    Te == null || Te(ce);
  };
  if (process.env.NODE_ENV !== "production") {
    const ce = Nt("Button");
    process.env.NODE_ENV !== "production" && ce(!(typeof p == "string" && p.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ce(!(y && yr(B)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: xe,
    compactItemClassnames: _e
  } = hf(I, G), be = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Ue = pf((ce) => {
    var Te, at;
    return (at = (Te = f ?? xe) !== null && Te !== void 0 ? Te : L) !== null && at !== void 0 ? at : ce;
  }), D = Ue && be[Ue] || "", we = H ? "loading" : p, ie = Tc(j, ["navigate"]), Me = Ve(I, S, h, {
    [`${I}-${l}`]: l !== "default" && l,
    [`${I}-${B}`]: B,
    [`${I}-${D}`]: D,
    [`${I}-icon-only`]: !g && g !== 0 && !!we,
    [`${I}-background-ghost`]: y && !yr(B),
    [`${I}-loading`]: H,
    [`${I}-two-chinese-chars`]: Q && N && !H,
    [`${I}-block`]: M,
    [`${I}-dangerous`]: s,
    [`${I}-rtl`]: G === "rtl",
    [`${I}-icon-end`]: T === "end"
  }, _e, C, w, V == null ? void 0 : V.className), Be = Object.assign(Object.assign({}, V == null ? void 0 : V.style), O), $e = Ve(_ == null ? void 0 : _.icon, (n = V == null ? void 0 : V.classNames) === null || n === void 0 ? void 0 : n.icon), de = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ((o = V == null ? void 0 : V.styles) === null || o === void 0 ? void 0 : o.icon) || {}), se = p && !H ? /* @__PURE__ */ K.createElement(Qi, {
    prefixCls: I,
    className: $e,
    style: de
  }, p) : /* @__PURE__ */ K.createElement(Cf, {
    existIcon: !!p,
    prefixCls: I,
    loading: H
  }), me = g || g === 0 ? Sf(g, Se && N) : null;
  if (ie.href !== void 0)
    return U(/* @__PURE__ */ K.createElement("a", Object.assign({}, ie, {
      className: Ve(Me, {
        [`${I}-disabled`]: R
      }),
      href: R ? void 0 : ie.href,
      style: Be,
      onClick: Ce,
      ref: oe,
      tabIndex: R ? -1 : 0
    }), se, me));
  let Ie = /* @__PURE__ */ K.createElement("button", Object.assign({}, j, {
    type: P,
    className: Me,
    style: Be,
    onClick: Ce,
    disabled: R,
    ref: oe
  }), se, me, !!_e && /* @__PURE__ */ K.createElement(Wf, {
    key: "compact",
    prefixCls: I
  }));
  return yr(B) || (Ie = /* @__PURE__ */ K.createElement(qi, {
    component: "Button",
    disabled: H
  }, Ie)), U(Ie);
}), Xr = Xf;
Xr.Group = bf;
Xr.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Xr.displayName = "Button");
const Kf = vo(
  (e, t) => {
    const { ...r } = e;
    return /* @__PURE__ */ pc.jsx(Xr, { ref: t, ...r });
  }
);
export {
  Kf as Button
};
