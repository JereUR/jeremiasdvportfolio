;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const i of l.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const l = {}
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const l = n(o)
    fetch(o.href, l)
  }
})()
var Br =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Aa = { exports: {} },
  Qo = {},
  Oa = { exports: {} },
  D = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or = Symbol.for('react.element'),
  Vd = Symbol.for('react.portal'),
  Qd = Symbol.for('react.fragment'),
  Kd = Symbol.for('react.strict_mode'),
  Gd = Symbol.for('react.profiler'),
  Xd = Symbol.for('react.provider'),
  Jd = Symbol.for('react.context'),
  Yd = Symbol.for('react.forward_ref'),
  Zd = Symbol.for('react.suspense'),
  qd = Symbol.for('react.memo'),
  bd = Symbol.for('react.lazy'),
  ou = Symbol.iterator
function ep(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ou && e[ou]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ra = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  _a = Object.assign,
  Da = {}
function Mn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Da),
    (this.updater = n || Ra)
}
Mn.prototype.isReactComponent = {}
Mn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function La() {}
La.prototype = Mn.prototype
function Zi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Da),
    (this.updater = n || Ra)
}
var qi = (Zi.prototype = new La())
qi.constructor = Zi
_a(qi, Mn.prototype)
qi.isPureReactComponent = !0
var lu = Array.isArray,
  Ma = Object.prototype.hasOwnProperty,
  bi = { current: null },
  Ia = { key: !0, ref: !0, __self: !0, __source: !0 }
function za(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Ma.call(t, r) && !Ia.hasOwnProperty(r) && (o[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) o.children = n
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2]
    o.children = u
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
  return { $$typeof: Or, type: e, key: l, ref: i, props: o, _owner: bi.current }
}
function tp(e, t) {
  return {
    $$typeof: Or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function es(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Or
}
function np(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var iu = /\/+/g
function vl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? np('' + e.key)
    : t.toString(36)
}
function lo(e, t, n, r, o) {
  var l = typeof e
  ;(l === 'undefined' || l === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Or:
          case Vd:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + vl(i, 0) : r),
      lu(o)
        ? ((n = ''),
          e != null && (n = e.replace(iu, '$&/') + '/'),
          lo(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (es(o) &&
            (o = tp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(iu, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), lu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s]
      var u = r + vl(l, s)
      i += lo(l, t, n, u, o)
    }
  else if (((u = ep(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + vl(l, s++)), (i += lo(l, t, n, u, o))
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return i
}
function $r(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    lo(e, r, '', '', function (l) {
      return t.call(n, l, o++)
    }),
    r
  )
}
function rp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var de = { current: null },
  io = { transition: null },
  op = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: io,
    ReactCurrentOwner: bi
  }
D.Children = {
  map: $r,
  forEach: function (e, t, n) {
    $r(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      $r(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      $r(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!es(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
D.Component = Mn
D.Fragment = Qd
D.Profiler = Gd
D.PureComponent = Zi
D.StrictMode = Kd
D.Suspense = Zd
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = _a({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = bi.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (u in t)
      Ma.call(t, u) &&
        !Ia.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    s = Array(u)
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2]
    r.children = s
  }
  return { $$typeof: Or, type: e.type, key: o, ref: l, props: r, _owner: i }
}
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Xd, _context: e }),
    (e.Consumer = e)
  )
}
D.createElement = za
D.createFactory = function (e) {
  var t = za.bind(null, e)
  return (t.type = e), t
}
D.createRef = function () {
  return { current: null }
}
D.forwardRef = function (e) {
  return { $$typeof: Yd, render: e }
}
D.isValidElement = es
D.lazy = function (e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: rp }
}
D.memo = function (e, t) {
  return { $$typeof: qd, type: e, compare: t === void 0 ? null : t }
}
D.startTransition = function (e) {
  var t = io.transition
  io.transition = {}
  try {
    e()
  } finally {
    io.transition = t
  }
}
D.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
D.useCallback = function (e, t) {
  return de.current.useCallback(e, t)
}
D.useContext = function (e) {
  return de.current.useContext(e)
}
D.useDebugValue = function () {}
D.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e)
}
D.useEffect = function (e, t) {
  return de.current.useEffect(e, t)
}
D.useId = function () {
  return de.current.useId()
}
D.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n)
}
D.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t)
}
D.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t)
}
D.useMemo = function (e, t) {
  return de.current.useMemo(e, t)
}
D.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n)
}
D.useRef = function (e) {
  return de.current.useRef(e)
}
D.useState = function (e) {
  return de.current.useState(e)
}
D.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n)
}
D.useTransition = function () {
  return de.current.useTransition()
}
D.version = '18.2.0'
Oa.exports = D
var y = Oa.exports
const De = Vo(y)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp = y,
  ip = Symbol.for('react.element'),
  sp = Symbol.for('react.fragment'),
  up = Object.prototype.hasOwnProperty,
  ap = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cp = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ba(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) up.call(t, r) && !cp.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: ip, type: e, key: l, ref: i, props: o, _owner: ap.current }
}
Qo.Fragment = sp
Qo.jsx = Ba
Qo.jsxs = Ba
Aa.exports = Qo
var v = Aa.exports,
  Yl = {},
  $a = { exports: {} },
  Ne = {},
  Fa = { exports: {} },
  Ua = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(C, O) {
    var R = C.length
    C.push(O)
    e: for (; 0 < R; ) {
      var z = (R - 1) >>> 1,
        H = C[z]
      if (0 < o(H, O)) (C[z] = O), (C[R] = H), (R = z)
      else break e
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0]
  }
  function r(C) {
    if (C.length === 0) return null
    var O = C[0],
      R = C.pop()
    if (R !== O) {
      C[0] = R
      e: for (var z = 0, H = C.length, Fe = H >>> 1; z < Fe; ) {
        var xe = 2 * (z + 1) - 1,
          b = C[xe],
          Ee = xe + 1,
          rn = C[Ee]
        if (0 > o(b, R))
          Ee < H && 0 > o(rn, b)
            ? ((C[z] = rn), (C[Ee] = R), (z = Ee))
            : ((C[z] = b), (C[xe] = R), (z = xe))
        else if (Ee < H && 0 > o(rn, R)) (C[z] = rn), (C[Ee] = R), (z = Ee)
        else break e
      }
    }
    return O
  }
  function o(C, O) {
    var R = C.sortIndex - O.sortIndex
    return R !== 0 ? R : C.id - O.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance
    e.unstable_now = function () {
      return l.now()
    }
  } else {
    var i = Date,
      s = i.now()
    e.unstable_now = function () {
      return i.now() - s
    }
  }
  var u = [],
    a = [],
    f = 1,
    p = null,
    d = 3,
    g = !1,
    w = !1,
    x = !1,
    j = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function h(C) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a)
      else if (O.startTime <= C) r(a), (O.sortIndex = O.expirationTime), t(u, O)
      else break
      O = n(a)
    }
  }
  function E(C) {
    if (((x = !1), h(C), !w))
      if (n(u) !== null) (w = !0), Te(N)
      else {
        var O = n(a)
        O !== null && $e(E, O.startTime - C)
      }
  }
  function N(C, O) {
    ;(w = !1), x && ((x = !1), m(T), (T = -1)), (g = !0)
    var R = d
    try {
      for (
        h(O), p = n(u);
        p !== null && (!(p.expirationTime > O) || (C && !ae()));

      ) {
        var z = p.callback
        if (typeof z == 'function') {
          ;(p.callback = null), (d = p.priorityLevel)
          var H = z(p.expirationTime <= O)
          ;(O = e.unstable_now()),
            typeof H == 'function' ? (p.callback = H) : p === n(u) && r(u),
            h(O)
        } else r(u)
        p = n(u)
      }
      if (p !== null) var Fe = !0
      else {
        var xe = n(a)
        xe !== null && $e(E, xe.startTime - O), (Fe = !1)
      }
      return Fe
    } finally {
      ;(p = null), (d = R), (g = !1)
    }
  }
  var k = !1,
    P = null,
    T = -1,
    M = 5,
    _ = -1
  function ae() {
    return !(e.unstable_now() - _ < M)
  }
  function nt() {
    if (P !== null) {
      var C = e.unstable_now()
      _ = C
      var O = !0
      try {
        O = P(!0, C)
      } finally {
        O ? Be() : ((k = !1), (P = null))
      }
    } else k = !1
  }
  var Be
  if (typeof c == 'function')
    Be = function () {
      c(nt)
    }
  else if (typeof MessageChannel < 'u') {
    var zt = new MessageChannel(),
      nn = zt.port2
    ;(zt.port1.onmessage = nt),
      (Be = function () {
        nn.postMessage(null)
      })
  } else
    Be = function () {
      j(nt, 0)
    }
  function Te(C) {
    ;(P = C), k || ((k = !0), Be())
  }
  function $e(C, O) {
    T = j(function () {
      C(e.unstable_now())
    }, O)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Te(N))
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < C ? Math.floor(1e3 / C) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var O = 3
          break
        default:
          O = d
      }
      var R = d
      d = O
      try {
        return C()
      } finally {
        d = R
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, O) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          C = 3
      }
      var R = d
      d = C
      try {
        return O()
      } finally {
        d = R
      }
    }),
    (e.unstable_scheduleCallback = function (C, O, R) {
      var z = e.unstable_now()
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? z + R : z))
          : (R = z),
        C)
      ) {
        case 1:
          var H = -1
          break
        case 2:
          H = 250
          break
        case 5:
          H = 1073741823
          break
        case 4:
          H = 1e4
          break
        default:
          H = 5e3
      }
      return (
        (H = R + H),
        (C = {
          id: f++,
          callback: O,
          priorityLevel: C,
          startTime: R,
          expirationTime: H,
          sortIndex: -1
        }),
        R > z
          ? ((C.sortIndex = R),
            t(a, C),
            n(u) === null &&
              C === n(a) &&
              (x ? (m(T), (T = -1)) : (x = !0), $e(E, R - z)))
          : ((C.sortIndex = H), t(u, C), w || g || ((w = !0), Te(N))),
        C
      )
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (C) {
      var O = d
      return function () {
        var R = d
        d = O
        try {
          return C.apply(this, arguments)
        } finally {
          d = R
        }
      }
    })
})(Ua)
Fa.exports = Ua
var fp = Fa.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ha = y,
  Pe = fp
function S(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Wa = new Set(),
  fr = {}
function en(e, t) {
  Tn(e, t), Tn(e + 'Capture', t)
}
function Tn(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) Wa.add(t[e])
}
var ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zl = Object.prototype.hasOwnProperty,
  dp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  su = {},
  uu = {}
function pp(e) {
  return Zl.call(uu, e)
    ? !0
    : Zl.call(su, e)
    ? !1
    : dp.test(e)
    ? (uu[e] = !0)
    : ((su[e] = !0), !1)
}
function mp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function hp(e, t, n, r) {
  if (t === null || typeof t > 'u' || mp(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function pe(e, t, n, r, o, l, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i)
}
var oe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var ts = /[\-:]([a-z])/g
function ns(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ts, ns)
    oe[t] = new pe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ts, ns)
    oe[t] = new pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ts, ns)
  oe[t] = new pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
oe.xlinkHref = new pe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function rs(e, t, n, r) {
  var o = oe.hasOwnProperty(t) ? oe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (hp(t, n, o, r) && (n = null),
    r || o === null
      ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var mt = Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fr = Symbol.for('react.element'),
  un = Symbol.for('react.portal'),
  an = Symbol.for('react.fragment'),
  os = Symbol.for('react.strict_mode'),
  ql = Symbol.for('react.profiler'),
  Va = Symbol.for('react.provider'),
  Qa = Symbol.for('react.context'),
  ls = Symbol.for('react.forward_ref'),
  bl = Symbol.for('react.suspense'),
  ei = Symbol.for('react.suspense_list'),
  is = Symbol.for('react.memo'),
  gt = Symbol.for('react.lazy'),
  Ka = Symbol.for('react.offscreen'),
  au = Symbol.iterator
function Fn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (au && e[au]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Q = Object.assign,
  gl
function Zn(e) {
  if (gl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      gl = (t && t[1]) || ''
    }
  return (
    `
` +
    gl +
    e
  )
}
var yl = !1
function wl(e, t) {
  if (!e || yl) return ''
  yl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                )
              }
            while (1 <= i && 0 <= s)
          break
        }
    }
  } finally {
    ;(yl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Zn(e) : ''
}
function vp(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type)
    case 16:
      return Zn('Lazy')
    case 13:
      return Zn('Suspense')
    case 19:
      return Zn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = wl(e.type, !1)), e
    case 11:
      return (e = wl(e.type.render, !1)), e
    case 1:
      return (e = wl(e.type, !0)), e
    default:
      return ''
  }
}
function ti(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case an:
      return 'Fragment'
    case un:
      return 'Portal'
    case ql:
      return 'Profiler'
    case os:
      return 'StrictMode'
    case bl:
      return 'Suspense'
    case ei:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Qa:
        return (e.displayName || 'Context') + '.Consumer'
      case Va:
        return (e._context.displayName || 'Context') + '.Provider'
      case ls:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case is:
        return (
          (t = e.displayName || null), t !== null ? t : ti(e.type) || 'Memo'
        )
      case gt:
        ;(t = e._payload), (e = e._init)
        try {
          return ti(e(t))
        } catch {}
    }
  return null
}
function gp(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ti(t)
    case 8:
      return t === os ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function _t(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Ga(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function yp(e) {
  var t = Ga(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      l = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (i) {
          ;(r = '' + i), l.call(this, i)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = yp(e))
}
function Xa(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Ga(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function yo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function ni(e, t) {
  var n = t.checked
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function cu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function Ja(e, t) {
  ;(t = t.checked), t != null && rs(e, 'checked', t, !1)
}
function ri(e, t) {
  Ja(e, t)
  var n = _t(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? oi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && oi(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function fu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function oi(e, t, n) {
  ;(t !== 'number' || yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var qn = Array.isArray
function kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + _t(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91))
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function du(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92))
      if (qn(n)) {
        if (1 < n.length) throw Error(S(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: _t(n) }
}
function Ya(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function pu(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Za(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ii(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Za(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Hr,
  qa = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Hr = Hr || document.createElement('div'),
          Hr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function dr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  wp = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(nr).forEach(function (e) {
  wp.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e])
  })
})
function ba(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (nr.hasOwnProperty(e) && nr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function ec(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = ba(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var xp = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function si(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(S(62))
  }
}
function ui(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var ai = null
function ss(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var ci = null,
  Sn = null,
  Cn = null
function mu(e) {
  if ((e = Dr(e))) {
    if (typeof ci != 'function') throw Error(S(280))
    var t = e.stateNode
    t && ((t = Yo(t)), ci(e.stateNode, e.type, t))
  }
}
function tc(e) {
  Sn ? (Cn ? Cn.push(e) : (Cn = [e])) : (Sn = e)
}
function nc() {
  if (Sn) {
    var e = Sn,
      t = Cn
    if (((Cn = Sn = null), mu(e), t)) for (e = 0; e < t.length; e++) mu(t[e])
  }
}
function rc(e, t) {
  return e(t)
}
function oc() {}
var xl = !1
function lc(e, t, n) {
  if (xl) return e(t, n)
  xl = !0
  try {
    return rc(e, t, n)
  } finally {
    ;(xl = !1), (Sn !== null || Cn !== null) && (oc(), nc())
  }
}
function pr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Yo(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(S(231, t, typeof n))
  return n
}
var fi = !1
if (ct)
  try {
    var Un = {}
    Object.defineProperty(Un, 'passive', {
      get: function () {
        fi = !0
      }
    }),
      window.addEventListener('test', Un, Un),
      window.removeEventListener('test', Un, Un)
  } catch {
    fi = !1
  }
function Ep(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (f) {
    this.onError(f)
  }
}
var rr = !1,
  wo = null,
  xo = !1,
  di = null,
  kp = {
    onError: function (e) {
      ;(rr = !0), (wo = e)
    }
  }
function Sp(e, t, n, r, o, l, i, s, u) {
  ;(rr = !1), (wo = null), Ep.apply(kp, arguments)
}
function Cp(e, t, n, r, o, l, i, s, u) {
  if ((Sp.apply(this, arguments), rr)) {
    if (rr) {
      var a = wo
      ;(rr = !1), (wo = null)
    } else throw Error(S(198))
    xo || ((xo = !0), (di = a))
  }
}
function tn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function ic(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function hu(e) {
  if (tn(e) !== e) throw Error(S(188))
}
function Pp(e) {
  var t = e.alternate
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(S(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var l = o.alternate
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return hu(o), e
        if (l === r) return hu(o), t
        l = l.sibling
      }
      throw Error(S(188))
    }
    if (n.return !== r.return) (n = o), (r = l)
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          ;(i = !0), (n = o), (r = l)
          break
        }
        if (s === r) {
          ;(i = !0), (r = o), (n = l)
          break
        }
        s = s.sibling
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            ;(i = !0), (n = l), (r = o)
            break
          }
          if (s === r) {
            ;(i = !0), (r = l), (n = o)
            break
          }
          s = s.sibling
        }
        if (!i) throw Error(S(189))
      }
    }
    if (n.alternate !== r) throw Error(S(190))
  }
  if (n.tag !== 3) throw Error(S(188))
  return n.stateNode.current === n ? e : t
}
function sc(e) {
  return (e = Pp(e)), e !== null ? uc(e) : null
}
function uc(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = uc(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ac = Pe.unstable_scheduleCallback,
  vu = Pe.unstable_cancelCallback,
  Np = Pe.unstable_shouldYield,
  jp = Pe.unstable_requestPaint,
  X = Pe.unstable_now,
  Tp = Pe.unstable_getCurrentPriorityLevel,
  us = Pe.unstable_ImmediatePriority,
  cc = Pe.unstable_UserBlockingPriority,
  Eo = Pe.unstable_NormalPriority,
  Ap = Pe.unstable_LowPriority,
  fc = Pe.unstable_IdlePriority,
  Ko = null,
  et = null
function Op(e) {
  if (et && typeof et.onCommitFiberRoot == 'function')
    try {
      et.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Dp,
  Rp = Math.log,
  _p = Math.LN2
function Dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rp(e) / _p) | 0)) | 0
}
var Wr = 64,
  Vr = 4194304
function bn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function ko(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var s = i & ~o
    s !== 0 ? (r = bn(s)) : ((l &= i), l !== 0 && (r = bn(l)))
  } else (i = n & ~o), i !== 0 ? (r = bn(i)) : l !== 0 && (r = bn(l))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function Lp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Mp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Ge(l),
      s = 1 << i,
      u = o[i]
    u === -1
      ? (!(s & n) || s & r) && (o[i] = Lp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s)
  }
}
function pi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function dc() {
  var e = Wr
  return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Rr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n)
}
function Ip(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ge(n),
      l = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l)
  }
}
function as(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var I = 0
function pc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var mc,
  cs,
  hc,
  vc,
  gc,
  mi = !1,
  Qr = [],
  Ct = null,
  Pt = null,
  Nt = null,
  mr = new Map(),
  hr = new Map(),
  xt = [],
  zp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function gu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ct = null
      break
    case 'dragenter':
    case 'dragleave':
      Pt = null
      break
    case 'mouseover':
    case 'mouseout':
      Nt = null
      break
    case 'pointerover':
    case 'pointerout':
      mr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      hr.delete(t.pointerId)
  }
}
function Hn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o]
      }),
      t !== null && ((t = Dr(t)), t !== null && cs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Bp(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Ct = Hn(Ct, e, t, n, r, o)), !0
    case 'dragenter':
      return (Pt = Hn(Pt, e, t, n, r, o)), !0
    case 'mouseover':
      return (Nt = Hn(Nt, e, t, n, r, o)), !0
    case 'pointerover':
      var l = o.pointerId
      return mr.set(l, Hn(mr.get(l) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (l = o.pointerId), hr.set(l, Hn(hr.get(l) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function yc(e) {
  var t = Ut(e.target)
  if (t !== null) {
    var n = tn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ic(n)), t !== null)) {
          ;(e.blockedOn = t),
            gc(e.priority, function () {
              hc(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function so(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(ai = r), n.target.dispatchEvent(r), (ai = null)
    } else return (t = Dr(n)), t !== null && cs(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function yu(e, t, n) {
  so(e) && n.delete(t)
}
function $p() {
  ;(mi = !1),
    Ct !== null && so(Ct) && (Ct = null),
    Pt !== null && so(Pt) && (Pt = null),
    Nt !== null && so(Nt) && (Nt = null),
    mr.forEach(yu),
    hr.forEach(yu)
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mi ||
      ((mi = !0), Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, $p)))
}
function vr(e) {
  function t(o) {
    return Wn(o, e)
  }
  if (0 < Qr.length) {
    Wn(Qr[0], e)
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ct !== null && Wn(Ct, e),
      Pt !== null && Wn(Pt, e),
      Nt !== null && Wn(Nt, e),
      mr.forEach(t),
      hr.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    yc(n), n.blockedOn === null && xt.shift()
}
var Pn = mt.ReactCurrentBatchConfig,
  So = !0
function Fp(e, t, n, r) {
  var o = I,
    l = Pn.transition
  Pn.transition = null
  try {
    ;(I = 1), fs(e, t, n, r)
  } finally {
    ;(I = o), (Pn.transition = l)
  }
}
function Up(e, t, n, r) {
  var o = I,
    l = Pn.transition
  Pn.transition = null
  try {
    ;(I = 4), fs(e, t, n, r)
  } finally {
    ;(I = o), (Pn.transition = l)
  }
}
function fs(e, t, n, r) {
  if (So) {
    var o = hi(e, t, n, r)
    if (o === null) Rl(e, t, r, Co, n), gu(e, r)
    else if (Bp(o, e, t, n, r)) r.stopPropagation()
    else if ((gu(e, r), t & 4 && -1 < zp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Dr(o)
        if (
          (l !== null && mc(l),
          (l = hi(e, t, n, r)),
          l === null && Rl(e, t, r, Co, n),
          l === o)
        )
          break
        o = l
      }
      o !== null && r.stopPropagation()
    } else Rl(e, t, r, null, n)
  }
}
var Co = null
function hi(e, t, n, r) {
  if (((Co = null), (e = ss(r)), (e = Ut(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = ic(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Co = e), null
}
function wc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Tp()) {
        case us:
          return 1
        case cc:
          return 4
        case Eo:
        case Ap:
          return 16
        case fc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var kt = null,
  ds = null,
  uo = null
function xc() {
  if (uo) return uo
  var e,
    t = ds,
    n = t.length,
    r,
    o = 'value' in kt ? kt.value : kt.textContent,
    l = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (uo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function ao(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Kr() {
  return !0
}
function wu() {
  return !1
}
function je(e) {
  function t(n, r, o, l, i) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]))
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Kr
        : wu),
      (this.isPropagationStopped = wu),
      this
    )
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr))
      },
      persist: function () {},
      isPersistent: Kr
    }),
    t
  )
}
var In = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  ps = je(In),
  _r = Q({}, In, { view: 0, detail: 0 }),
  Hp = je(_r),
  kl,
  Sl,
  Vn,
  Go = Q({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ms,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Vn &&
            (Vn && e.type === 'mousemove'
              ? ((kl = e.screenX - Vn.screenX), (Sl = e.screenY - Vn.screenY))
              : (Sl = kl = 0),
            (Vn = e)),
          kl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Sl
    }
  }),
  xu = je(Go),
  Wp = Q({}, Go, { dataTransfer: 0 }),
  Vp = je(Wp),
  Qp = Q({}, _r, { relatedTarget: 0 }),
  Cl = je(Qp),
  Kp = Q({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = je(Kp),
  Xp = Q({}, In, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Jp = je(Xp),
  Yp = Q({}, In, { data: 0 }),
  Eu = je(Yp),
  Zp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  qp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  bp = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function em(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = bp[e]) ? !!t[e] : !1
}
function ms() {
  return em
}
var tm = Q({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = Zp[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ao(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? qp[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ms,
    charCode: function (e) {
      return e.type === 'keypress' ? ao(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ao(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  nm = je(tm),
  rm = Q({}, Go, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  ku = je(rm),
  om = Q({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ms
  }),
  lm = je(om),
  im = Q({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = je(im),
  um = Q({}, Go, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  am = je(um),
  cm = [9, 13, 27, 32],
  hs = ct && 'CompositionEvent' in window,
  or = null
ct && 'documentMode' in document && (or = document.documentMode)
var fm = ct && 'TextEvent' in window && !or,
  Ec = ct && (!hs || (or && 8 < or && 11 >= or)),
  Su = String.fromCharCode(32),
  Cu = !1
function kc(e, t) {
  switch (e) {
    case 'keyup':
      return cm.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Sc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var cn = !1
function dm(e, t) {
  switch (e) {
    case 'compositionend':
      return Sc(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Cu = !0), Su)
    case 'textInput':
      return (e = t.data), e === Su && Cu ? null : e
    default:
      return null
  }
}
function pm(e, t) {
  if (cn)
    return e === 'compositionend' || (!hs && kc(e, t))
      ? ((e = xc()), (uo = ds = kt = null), (cn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Ec && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var mm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!mm[e.type] : t === 'textarea'
}
function Cc(e, t, n, r) {
  tc(r),
    (t = Po(t, 'onChange')),
    0 < t.length &&
      ((n = new ps('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var lr = null,
  gr = null
function hm(e) {
  Mc(e, 0)
}
function Xo(e) {
  var t = pn(e)
  if (Xa(t)) return e
}
function vm(e, t) {
  if (e === 'change') return t
}
var Pc = !1
if (ct) {
  var Pl
  if (ct) {
    var Nl = 'oninput' in document
    if (!Nl) {
      var Nu = document.createElement('div')
      Nu.setAttribute('oninput', 'return;'),
        (Nl = typeof Nu.oninput == 'function')
    }
    Pl = Nl
  } else Pl = !1
  Pc = Pl && (!document.documentMode || 9 < document.documentMode)
}
function ju() {
  lr && (lr.detachEvent('onpropertychange', Nc), (gr = lr = null))
}
function Nc(e) {
  if (e.propertyName === 'value' && Xo(gr)) {
    var t = []
    Cc(t, gr, e, ss(e)), lc(hm, t)
  }
}
function gm(e, t, n) {
  e === 'focusin'
    ? (ju(), (lr = t), (gr = n), lr.attachEvent('onpropertychange', Nc))
    : e === 'focusout' && ju()
}
function ym(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Xo(gr)
}
function wm(e, t) {
  if (e === 'click') return Xo(t)
}
function xm(e, t) {
  if (e === 'input' || e === 'change') return Xo(t)
}
function Em(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Je = typeof Object.is == 'function' ? Object.is : Em
function yr(e, t) {
  if (Je(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!Zl.call(t, o) || !Je(e[o], t[o])) return !1
  }
  return !0
}
function Tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Au(e, t) {
  var n = Tu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Tu(n)
  }
}
function jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Tc() {
  for (var e = window, t = yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = yo(e.document)
  }
  return t
}
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function km(e) {
  var t = Tc(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          l = Math.min(r.start, o)
        ;(r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Au(n, l))
        var i = Au(n, r)
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Sm = ct && 'documentMode' in document && 11 >= document.documentMode,
  fn = null,
  vi = null,
  ir = null,
  gi = !1
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  gi ||
    fn == null ||
    fn !== yo(r) ||
    ((r = fn),
    'selectionStart' in r && vs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (ir && yr(ir, r)) ||
      ((ir = r),
      (r = Po(vi, 'onSelect')),
      0 < r.length &&
        ((t = new ps('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))))
}
function Gr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var dn = {
    animationend: Gr('Animation', 'AnimationEnd'),
    animationiteration: Gr('Animation', 'AnimationIteration'),
    animationstart: Gr('Animation', 'AnimationStart'),
    transitionend: Gr('Transition', 'TransitionEnd')
  },
  jl = {},
  Ac = {}
ct &&
  ((Ac = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  'TransitionEvent' in window || delete dn.transitionend.transition)
function Jo(e) {
  if (jl[e]) return jl[e]
  if (!dn[e]) return e
  var t = dn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Ac) return (jl[e] = t[n])
  return e
}
var Oc = Jo('animationend'),
  Rc = Jo('animationiteration'),
  _c = Jo('animationstart'),
  Dc = Jo('transitionend'),
  Lc = new Map(),
  Ru =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Lt(e, t) {
  Lc.set(e, t), en(t, [e])
}
for (var Tl = 0; Tl < Ru.length; Tl++) {
  var Al = Ru[Tl],
    Cm = Al.toLowerCase(),
    Pm = Al[0].toUpperCase() + Al.slice(1)
  Lt(Cm, 'on' + Pm)
}
Lt(Oc, 'onAnimationEnd')
Lt(Rc, 'onAnimationIteration')
Lt(_c, 'onAnimationStart')
Lt('dblclick', 'onDoubleClick')
Lt('focusin', 'onFocus')
Lt('focusout', 'onBlur')
Lt(Dc, 'onTransitionEnd')
Tn('onMouseEnter', ['mouseout', 'mouseover'])
Tn('onMouseLeave', ['mouseout', 'mouseover'])
Tn('onPointerEnter', ['pointerout', 'pointerover'])
Tn('onPointerLeave', ['pointerout', 'pointerover'])
en(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
en(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
en('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
en(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
en(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
en(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var er =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Nm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(er))
function _u(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Cp(r, t, void 0, e), (e.currentTarget = null)
}
function Mc(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var l = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e
          _u(o, s, a), (l = u)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e
          _u(o, s, a), (l = u)
        }
    }
  }
  if (xo) throw ((e = di), (xo = !1), (di = null), e)
}
function $(e, t) {
  var n = t[ki]
  n === void 0 && (n = t[ki] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Ic(t, e, 2, !1), n.add(r))
}
function Ol(e, t, n) {
  var r = 0
  t && (r |= 4), Ic(n, e, r, t)
}
var Xr = '_reactListening' + Math.random().toString(36).slice(2)
function wr(e) {
  if (!e[Xr]) {
    ;(e[Xr] = !0),
      Wa.forEach(function (n) {
        n !== 'selectionchange' && (Nm.has(n) || Ol(n, !1, e), Ol(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Xr] || ((t[Xr] = !0), Ol('selectionchange', !1, t))
  }
}
function Ic(e, t, n, r) {
  switch (wc(t)) {
    case 1:
      var o = Fp
      break
    case 4:
      o = Up
      break
    default:
      o = fs
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !fi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Rl(e, t, n, r, o) {
  var l = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return
            i = i.return
          }
        for (; s !== null; ) {
          if (((i = Ut(s)), i === null)) return
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  lc(function () {
    var a = l,
      f = ss(n),
      p = []
    e: {
      var d = Lc.get(e)
      if (d !== void 0) {
        var g = ps,
          w = e
        switch (e) {
          case 'keypress':
            if (ao(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = nm
            break
          case 'focusin':
            ;(w = 'focus'), (g = Cl)
            break
          case 'focusout':
            ;(w = 'blur'), (g = Cl)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Cl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = xu
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Vp
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = lm
            break
          case Oc:
          case Rc:
          case _c:
            g = Gp
            break
          case Dc:
            g = sm
            break
          case 'scroll':
            g = Hp
            break
          case 'wheel':
            g = am
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Jp
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ku
        }
        var x = (t & 4) !== 0,
          j = !x && e === 'scroll',
          m = x ? (d !== null ? d + 'Capture' : null) : d
        x = []
        for (var c = a, h; c !== null; ) {
          h = c
          var E = h.stateNode
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              m !== null && ((E = pr(c, m)), E != null && x.push(xr(c, E, h)))),
            j)
          )
            break
          c = c.return
        }
        0 < x.length &&
          ((d = new g(d, w, null, n, f)), p.push({ event: d, listeners: x }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== ai &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ut(w) || w[ft]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = a),
              (w = w ? Ut(w) : null),
              w !== null &&
                ((j = tn(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = a)),
          g !== w)
        ) {
          if (
            ((x = xu),
            (E = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = ku),
              (E = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (c = 'pointer')),
            (j = g == null ? d : pn(g)),
            (h = w == null ? d : pn(w)),
            (d = new x(E, c + 'leave', g, n, f)),
            (d.target = j),
            (d.relatedTarget = h),
            (E = null),
            Ut(f) === a &&
              ((x = new x(m, c + 'enter', w, n, f)),
              (x.target = h),
              (x.relatedTarget = j),
              (E = x)),
            (j = E),
            g && w)
          )
            t: {
              for (x = g, m = w, c = 0, h = x; h; h = on(h)) c++
              for (h = 0, E = m; E; E = on(E)) h++
              for (; 0 < c - h; ) (x = on(x)), c--
              for (; 0 < h - c; ) (m = on(m)), h--
              for (; c--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t
                ;(x = on(x)), (m = on(m))
              }
              x = null
            }
          else x = null
          g !== null && Du(p, d, g, x, !1),
            w !== null && j !== null && Du(p, j, w, x, !0)
        }
      }
      e: {
        if (
          ((d = a ? pn(a) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var N = vm
        else if (Pu(d))
          if (Pc) N = xm
          else {
            N = ym
            var k = gm
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (N = wm)
        if (N && (N = N(e, a))) {
          Cc(p, N, n, f)
          break e
        }
        k && k(e, d, a),
          e === 'focusout' &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === 'number' &&
            oi(d, 'number', d.value)
      }
      switch (((k = a ? pn(a) : window), e)) {
        case 'focusin':
          ;(Pu(k) || k.contentEditable === 'true') &&
            ((fn = k), (vi = a), (ir = null))
          break
        case 'focusout':
          ir = vi = fn = null
          break
        case 'mousedown':
          gi = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(gi = !1), Ou(p, n, f)
          break
        case 'selectionchange':
          if (Sm) break
        case 'keydown':
        case 'keyup':
          Ou(p, n, f)
      }
      var P
      if (hs)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        cn
          ? kc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (Ec &&
          n.locale !== 'ko' &&
          (cn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && cn && (P = xc())
            : ((kt = f),
              (ds = 'value' in kt ? kt.value : kt.textContent),
              (cn = !0))),
        (k = Po(a, T)),
        0 < k.length &&
          ((T = new Eu(T, e, null, n, f)),
          p.push({ event: T, listeners: k }),
          P ? (T.data = P) : ((P = Sc(n)), P !== null && (T.data = P)))),
        (P = fm ? dm(e, n) : pm(e, n)) &&
          ((a = Po(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new Eu('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: a }),
            (f.data = P)))
    }
    Mc(p, t)
  })
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Po(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      l = o.stateNode
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = pr(e, n)),
      l != null && r.unshift(xr(e, l, o)),
      (l = pr(e, t)),
      l != null && r.push(xr(e, l, o))),
      (e = e.return)
  }
  return r
}
function on(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Du(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode
    if (u !== null && u === r) break
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = pr(n, l)), u != null && i.unshift(xr(n, u, s)))
        : o || ((u = pr(n, l)), u != null && i.push(xr(n, u, s)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var jm = /\r\n?/g,
  Tm = /\u0000|\uFFFD/g
function Lu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jm,
      `
`
    )
    .replace(Tm, '')
}
function Jr(e, t, n) {
  if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(S(425))
}
function No() {}
var yi = null,
  wi = null
function xi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ei = typeof setTimeout == 'function' ? setTimeout : void 0,
  Am = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Mu = typeof Promise == 'function' ? Promise : void 0,
  Om =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Mu < 'u'
      ? function (e) {
          return Mu.resolve(null).then(e).catch(Rm)
        }
      : Ei
function Rm(e) {
  setTimeout(function () {
    throw e
  })
}
function _l(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), vr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  vr(t)
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Iu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var zn = Math.random().toString(36).slice(2),
  be = '__reactFiber$' + zn,
  Er = '__reactProps$' + zn,
  ft = '__reactContainer$' + zn,
  ki = '__reactEvents$' + zn,
  _m = '__reactListeners$' + zn,
  Dm = '__reactHandles$' + zn
function Ut(e) {
  var t = e[be]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[be])) return n
          e = Iu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Dr(e) {
  return (
    (e = e[be] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(S(33))
}
function Yo(e) {
  return e[Er] || null
}
var Si = [],
  mn = -1
function Mt(e) {
  return { current: e }
}
function F(e) {
  0 > mn || ((e.current = Si[mn]), (Si[mn] = null), mn--)
}
function B(e, t) {
  mn++, (Si[mn] = e.current), (e.current = t)
}
var Dt = {},
  ue = Mt(Dt),
  ve = Mt(!1),
  Gt = Dt
function An(e, t) {
  var n = e.type.contextTypes
  if (!n) return Dt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    l
  for (l in n) o[l] = t[l]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function ge(e) {
  return (e = e.childContextTypes), e != null
}
function jo() {
  F(ve), F(ue)
}
function zu(e, t, n) {
  if (ue.current !== Dt) throw Error(S(168))
  B(ue, t), B(ve, n)
}
function zc(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(S(108, gp(e) || 'Unknown', o))
  return Q({}, n, r)
}
function To(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (Gt = ue.current),
    B(ue, e),
    B(ve, ve.current),
    !0
  )
}
function Bu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(S(169))
  n
    ? ((e = zc(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(ue),
      B(ue, e))
    : F(ve),
    B(ve, n)
}
var ot = null,
  Zo = !1,
  Dl = !1
function Bc(e) {
  ot === null ? (ot = [e]) : ot.push(e)
}
function Lm(e) {
  ;(Zo = !0), Bc(e)
}
function It() {
  if (!Dl && ot !== null) {
    Dl = !0
    var e = 0,
      t = I
    try {
      var n = ot
      for (I = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ot = null), (Zo = !1)
    } catch (o) {
      throw (ot !== null && (ot = ot.slice(e + 1)), ac(us, It), o)
    } finally {
      ;(I = t), (Dl = !1)
    }
  }
  return null
}
var hn = [],
  vn = 0,
  Ao = null,
  Oo = 0,
  Oe = [],
  Re = 0,
  Xt = null,
  it = 1,
  st = ''
function Bt(e, t) {
  ;(hn[vn++] = Oo), (hn[vn++] = Ao), (Ao = e), (Oo = t)
}
function $c(e, t, n) {
  ;(Oe[Re++] = it), (Oe[Re++] = st), (Oe[Re++] = Xt), (Xt = e)
  var r = it
  e = st
  var o = 32 - Ge(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var l = 32 - Ge(t) + o
  if (30 < l) {
    var i = o - (o % 5)
    ;(l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (it = (1 << (32 - Ge(t) + o)) | (n << o) | r),
      (st = l + e)
  } else (it = (1 << l) | (n << o) | r), (st = e)
}
function gs(e) {
  e.return !== null && (Bt(e, 1), $c(e, 1, 0))
}
function ys(e) {
  for (; e === Ao; )
    (Ao = hn[--vn]), (hn[vn] = null), (Oo = hn[--vn]), (hn[vn] = null)
  for (; e === Xt; )
    (Xt = Oe[--Re]),
      (Oe[Re] = null),
      (st = Oe[--Re]),
      (Oe[Re] = null),
      (it = Oe[--Re]),
      (Oe[Re] = null)
}
var Ce = null,
  Se = null,
  U = !1,
  Qe = null
function Fc(e, t) {
  var n = Le(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Se = jt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (Se = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: it, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (Se = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Pi(e) {
  if (U) {
    var t = Se
    if (t) {
      var n = t
      if (!$u(e, t)) {
        if (Ci(e)) throw Error(S(418))
        t = jt(n.nextSibling)
        var r = Ce
        t && $u(e, t)
          ? Fc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ce = e))
      }
    } else {
      if (Ci(e)) throw Error(S(418))
      ;(e.flags = (e.flags & -4097) | 2), (U = !1), (Ce = e)
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ce = e
}
function Yr(e) {
  if (e !== Ce) return !1
  if (!U) return Fu(e), (U = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !xi(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Ci(e)) throw (Uc(), Error(S(418)))
    for (; t; ) Fc(e, t), (t = jt(t.nextSibling))
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Se = jt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Se = null
    }
  } else Se = Ce ? jt(e.stateNode.nextSibling) : null
  return !0
}
function Uc() {
  for (var e = Se; e; ) e = jt(e.nextSibling)
}
function On() {
  ;(Se = Ce = null), (U = !1)
}
function ws(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e)
}
var Mm = mt.ReactCurrentBatchConfig
function He(e, t) {
  if (e && e.defaultProps) {
    ;(t = Q({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Ro = Mt(null),
  _o = null,
  gn = null,
  xs = null
function Es() {
  xs = gn = _o = null
}
function ks(e) {
  var t = Ro.current
  F(Ro), (e._currentValue = t)
}
function Ni(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Nn(e, t) {
  ;(_o = e),
    (xs = gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null))
}
function Ie(e) {
  var t = e._currentValue
  if (xs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gn === null)) {
      if (_o === null) throw Error(S(308))
      ;(gn = e), (_o.dependencies = { lanes: 0, firstContext: e })
    } else gn = gn.next = e
  return t
}
var Ht = null
function Ss(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e)
}
function Hc(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Ss(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dt(e, r)
  )
}
function dt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var yt = !1
function Cs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Wc(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Tt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), L & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ss(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dt(e, n)
  )
}
function co(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), as(e, n)
  }
}
function Uu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next)
      } while (n !== null)
      l === null ? (o = l = t) : (l = l.next = t)
    } else o = l = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Do(e, t, n, r) {
  var o = e.updateQueue
  yt = !1
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var u = s,
      a = u.next
    ;(u.next = null), i === null ? (l = a) : (i.next = a), (i = u)
    var f = e.alternate
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== i &&
        (s === null ? (f.firstBaseUpdate = a) : (s.next = a),
        (f.lastBaseUpdate = u)))
  }
  if (l !== null) {
    var p = o.baseState
    ;(i = 0), (f = a = u = null), (s = l)
    do {
      var d = s.lane,
        g = s.eventTime
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            })
        e: {
          var w = e,
            x = s
          switch (((d = t), (g = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == 'function')) {
                p = w.call(g, p, d)
                break e
              }
              p = w
              break e
            case 3:
              w.flags = (w.flags & -65537) | 128
            case 0:
              if (
                ((w = x.payload),
                (d = typeof w == 'function' ? w.call(g, p, d) : w),
                d == null)
              )
                break e
              p = Q({}, p, d)
              break e
            case 2:
              yt = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }),
          f === null ? ((a = f = g), (u = p)) : (f = f.next = g),
          (i |= d)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (f === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (i |= o.lane), (o = o.next)
      while (o !== t)
    } else l === null && (o.shared.lanes = 0)
    ;(Yt |= i), (e.lanes = i), (e.memoizedState = p)
  }
}
function Hu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(S(191, o))
        o.call(r)
      }
    }
}
var Vc = new Ha.Component().refs
function ji(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = fe(),
      o = Ot(e),
      l = ut(r, o)
    ;(l.payload = t),
      n != null && (l.callback = n),
      (t = Tt(e, l, o)),
      t !== null && (Xe(t, e, o, r), co(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = fe(),
      o = Ot(e),
      l = ut(r, o)
    ;(l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Tt(e, l, o)),
      t !== null && (Xe(t, e, o, r), co(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = fe(),
      r = Ot(e),
      o = ut(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Tt(e, o, r)),
      t !== null && (Xe(t, e, r, n), co(t, e, r))
  }
}
function Wu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !yr(n, r) || !yr(o, l)
      : !0
  )
}
function Qc(e, t, n) {
  var r = !1,
    o = Dt,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Ie(l))
      : ((o = ge(t) ? Gt : ue.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? An(e, o) : Dt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  )
}
function Vu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qo.enqueueReplaceState(t, t.state, null)
}
function Ti(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Vc), Cs(e)
  var l = t.contextType
  typeof l == 'object' && l !== null
    ? (o.context = Ie(l))
    : ((l = ge(t) ? Gt : ue.current), (o.context = An(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (ji(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && qo.enqueueReplaceState(o, o.state, null),
      Do(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309))
        var r = n.stateNode
      }
      if (!r) throw Error(S(147, e))
      var o = r,
        l = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs
            s === Vc && (s = o.refs = {}), i === null ? delete s[l] : (s[l] = i)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(S(284))
    if (!n._owner) throw Error(S(290, e))
  }
  return e
}
function Zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Qu(e) {
  var t = e._init
  return t(e._payload)
}
function Kc(e) {
  function t(m, c) {
    if (e) {
      var h = m.deletions
      h === null ? ((m.deletions = [c]), (m.flags |= 16)) : h.push(c)
    }
  }
  function n(m, c) {
    if (!e) return null
    for (; c !== null; ) t(m, c), (c = c.sibling)
    return null
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling)
    return m
  }
  function o(m, c) {
    return (m = Rt(m, c)), (m.index = 0), (m.sibling = null), m
  }
  function l(m, c, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((m.flags |= 2), c) : h)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    )
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, c, h, E) {
    return c === null || c.tag !== 6
      ? ((c = Fl(h, m.mode, E)), (c.return = m), c)
      : ((c = o(c, h)), (c.return = m), c)
  }
  function u(m, c, h, E) {
    var N = h.type
    return N === an
      ? f(m, c, h.props.children, E, h.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == 'object' &&
            N !== null &&
            N.$$typeof === gt &&
            Qu(N) === c.type))
      ? ((E = o(c, h.props)), (E.ref = Qn(m, c, h)), (E.return = m), E)
      : ((E = go(h.type, h.key, h.props, null, m.mode, E)),
        (E.ref = Qn(m, c, h)),
        (E.return = m),
        E)
  }
  function a(m, c, h, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = Ul(h, m.mode, E)), (c.return = m), c)
      : ((c = o(c, h.children || [])), (c.return = m), c)
  }
  function f(m, c, h, E, N) {
    return c === null || c.tag !== 7
      ? ((c = Kt(h, m.mode, E, N)), (c.return = m), c)
      : ((c = o(c, h)), (c.return = m), c)
  }
  function p(m, c, h) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = Fl('' + c, m.mode, h)), (c.return = m), c
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Fr:
          return (
            (h = go(c.type, c.key, c.props, null, m.mode, h)),
            (h.ref = Qn(m, null, c)),
            (h.return = m),
            h
          )
        case un:
          return (c = Ul(c, m.mode, h)), (c.return = m), c
        case gt:
          var E = c._init
          return p(m, E(c._payload), h)
      }
      if (qn(c) || Fn(c)) return (c = Kt(c, m.mode, h, null)), (c.return = m), c
      Zr(m, c)
    }
    return null
  }
  function d(m, c, h, E) {
    var N = c !== null ? c.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return N !== null ? null : s(m, c, '' + h, E)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Fr:
          return h.key === N ? u(m, c, h, E) : null
        case un:
          return h.key === N ? a(m, c, h, E) : null
        case gt:
          return (N = h._init), d(m, c, N(h._payload), E)
      }
      if (qn(h) || Fn(h)) return N !== null ? null : f(m, c, h, E, null)
      Zr(m, h)
    }
    return null
  }
  function g(m, c, h, E, N) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (m = m.get(h) || null), s(c, m, '' + E, N)
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Fr:
          return (m = m.get(E.key === null ? h : E.key) || null), u(c, m, E, N)
        case un:
          return (m = m.get(E.key === null ? h : E.key) || null), a(c, m, E, N)
        case gt:
          var k = E._init
          return g(m, c, h, k(E._payload), N)
      }
      if (qn(E) || Fn(E)) return (m = m.get(h) || null), f(c, m, E, N, null)
      Zr(c, E)
    }
    return null
  }
  function w(m, c, h, E) {
    for (
      var N = null, k = null, P = c, T = (c = 0), M = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling)
      var _ = d(m, P, h[T], E)
      if (_ === null) {
        P === null && (P = M)
        break
      }
      e && P && _.alternate === null && t(m, P),
        (c = l(_, c, T)),
        k === null ? (N = _) : (k.sibling = _),
        (k = _),
        (P = M)
    }
    if (T === h.length) return n(m, P), U && Bt(m, T), N
    if (P === null) {
      for (; T < h.length; T++)
        (P = p(m, h[T], E)),
          P !== null &&
            ((c = l(P, c, T)), k === null ? (N = P) : (k.sibling = P), (k = P))
      return U && Bt(m, T), N
    }
    for (P = r(m, P); T < h.length; T++)
      (M = g(P, m, T, h[T], E)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (c = l(M, c, T)),
          k === null ? (N = M) : (k.sibling = M),
          (k = M))
    return (
      e &&
        P.forEach(function (ae) {
          return t(m, ae)
        }),
      U && Bt(m, T),
      N
    )
  }
  function x(m, c, h, E) {
    var N = Fn(h)
    if (typeof N != 'function') throw Error(S(150))
    if (((h = N.call(h)), h == null)) throw Error(S(151))
    for (
      var k = (N = null), P = c, T = (c = 0), M = null, _ = h.next();
      P !== null && !_.done;
      T++, _ = h.next()
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling)
      var ae = d(m, P, _.value, E)
      if (ae === null) {
        P === null && (P = M)
        break
      }
      e && P && ae.alternate === null && t(m, P),
        (c = l(ae, c, T)),
        k === null ? (N = ae) : (k.sibling = ae),
        (k = ae),
        (P = M)
    }
    if (_.done) return n(m, P), U && Bt(m, T), N
    if (P === null) {
      for (; !_.done; T++, _ = h.next())
        (_ = p(m, _.value, E)),
          _ !== null &&
            ((c = l(_, c, T)), k === null ? (N = _) : (k.sibling = _), (k = _))
      return U && Bt(m, T), N
    }
    for (P = r(m, P); !_.done; T++, _ = h.next())
      (_ = g(P, m, T, _.value, E)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? T : _.key),
          (c = l(_, c, T)),
          k === null ? (N = _) : (k.sibling = _),
          (k = _))
    return (
      e &&
        P.forEach(function (nt) {
          return t(m, nt)
        }),
      U && Bt(m, T),
      N
    )
  }
  function j(m, c, h, E) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === an &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Fr:
          e: {
            for (var N = h.key, k = c; k !== null; ) {
              if (k.key === N) {
                if (((N = h.type), N === an)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (c = o(k, h.props.children)),
                      (c.return = m),
                      (m = c)
                    break e
                  }
                } else if (
                  k.elementType === N ||
                  (typeof N == 'object' &&
                    N !== null &&
                    N.$$typeof === gt &&
                    Qu(N) === k.type)
                ) {
                  n(m, k.sibling),
                    (c = o(k, h.props)),
                    (c.ref = Qn(m, k, h)),
                    (c.return = m),
                    (m = c)
                  break e
                }
                n(m, k)
                break
              } else t(m, k)
              k = k.sibling
            }
            h.type === an
              ? ((c = Kt(h.props.children, m.mode, E, h.key)),
                (c.return = m),
                (m = c))
              : ((E = go(h.type, h.key, h.props, null, m.mode, E)),
                (E.ref = Qn(m, c, h)),
                (E.return = m),
                (m = E))
          }
          return i(m)
        case un:
          e: {
            for (k = h.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(m, c.sibling),
                    (c = o(c, h.children || [])),
                    (c.return = m),
                    (m = c)
                  break e
                } else {
                  n(m, c)
                  break
                }
              else t(m, c)
              c = c.sibling
            }
            ;(c = Ul(h, m.mode, E)), (c.return = m), (m = c)
          }
          return i(m)
        case gt:
          return (k = h._init), j(m, c, k(h._payload), E)
      }
      if (qn(h)) return w(m, c, h, E)
      if (Fn(h)) return x(m, c, h, E)
      Zr(m, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = o(c, h)), (c.return = m), (m = c))
          : (n(m, c), (c = Fl(h, m.mode, E)), (c.return = m), (m = c)),
        i(m))
      : n(m, c)
  }
  return j
}
var Rn = Kc(!0),
  Gc = Kc(!1),
  Lr = {},
  tt = Mt(Lr),
  kr = Mt(Lr),
  Sr = Mt(Lr)
function Wt(e) {
  if (e === Lr) throw Error(S(174))
  return e
}
function Ps(e, t) {
  switch ((B(Sr, t), B(kr, e), B(tt, Lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e))
  }
  F(tt), B(tt, t)
}
function _n() {
  F(tt), F(kr), F(Sr)
}
function Xc(e) {
  Wt(Sr.current)
  var t = Wt(tt.current),
    n = ii(t, e.type)
  t !== n && (B(kr, e), B(tt, n))
}
function Ns(e) {
  kr.current === e && (F(tt), F(kr))
}
var W = Mt(0)
function Lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Ll = []
function js() {
  for (var e = 0; e < Ll.length; e++) Ll[e]._workInProgressVersionPrimary = null
  Ll.length = 0
}
var fo = mt.ReactCurrentDispatcher,
  Ml = mt.ReactCurrentBatchConfig,
  Jt = 0,
  V = null,
  Y = null,
  ee = null,
  Mo = !1,
  sr = !1,
  Cr = 0,
  Im = 0
function le() {
  throw Error(S(321))
}
function Ts(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1
  return !0
}
function As(e, t, n, r, o, l) {
  if (
    ((Jt = l),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fo.current = e === null || e.memoizedState === null ? Fm : Um),
    (e = n(r, o)),
    sr)
  ) {
    l = 0
    do {
      if (((sr = !1), (Cr = 0), 25 <= l)) throw Error(S(301))
      ;(l += 1),
        (ee = Y = null),
        (t.updateQueue = null),
        (fo.current = Hm),
        (e = n(r, o))
    } while (sr)
  }
  if (
    ((fo.current = Io),
    (t = Y !== null && Y.next !== null),
    (Jt = 0),
    (ee = Y = V = null),
    (Mo = !1),
    t)
  )
    throw Error(S(300))
  return e
}
function Os() {
  var e = Cr !== 0
  return (Cr = 0), e
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee
}
function ze() {
  if (Y === null) {
    var e = V.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Y.next
  var t = ee === null ? V.memoizedState : ee.next
  if (t !== null) (ee = t), (Y = e)
  else {
    if (e === null) throw Error(S(310))
    ;(Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e)
  }
  return ee
}
function Pr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Il(e) {
  var t = ze(),
    n = t.queue
  if (n === null) throw Error(S(311))
  n.lastRenderedReducer = e
  var r = Y,
    o = r.baseQueue,
    l = n.pending
  if (l !== null) {
    if (o !== null) {
      var i = o.next
      ;(o.next = l.next), (l.next = i)
    }
    ;(r.baseQueue = o = l), (n.pending = null)
  }
  if (o !== null) {
    ;(l = o.next), (r = r.baseState)
    var s = (i = null),
      u = null,
      a = l
    do {
      var f = a.lane
      if ((Jt & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var p = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        }
        u === null ? ((s = u = p), (i = r)) : (u = u.next = p),
          (V.lanes |= f),
          (Yt |= f)
      }
      a = a.next
    } while (a !== null && a !== l)
    u === null ? (i = r) : (u.next = s),
      Je(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (l = o.lane), (V.lanes |= l), (Yt |= l), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function zl(e) {
  var t = ze(),
    n = t.queue
  if (n === null) throw Error(S(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState
  if (o !== null) {
    n.pending = null
    var i = (o = o.next)
    do (l = e(l, i.action)), (i = i.next)
    while (i !== o)
    Je(l, t.memoizedState) || (he = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l)
  }
  return [l, r]
}
function Jc() {}
function Yc(e, t) {
  var n = V,
    r = ze(),
    o = t(),
    l = !Je(r.memoizedState, o)
  if (
    (l && ((r.memoizedState = o), (he = !0)),
    (r = r.queue),
    Rs(bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, qc.bind(null, n, r, o, t), void 0, null),
      te === null)
    )
      throw Error(S(349))
    Jt & 30 || Zc(n, t, o)
  }
  return o
}
function Zc(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function qc(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), ef(t) && tf(e)
}
function bc(e, t, n) {
  return n(function () {
    ef(t) && tf(e)
  })
}
function ef(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Je(e, n)
  } catch {
    return !0
  }
}
function tf(e) {
  var t = dt(e, 1)
  t !== null && Xe(t, e, 1, -1)
}
function Ku(e) {
  var t = Ze()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = $m.bind(null, V, e)),
    [t.memoizedState, e]
  )
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function nf() {
  return ze().memoizedState
}
function po(e, t, n, r) {
  var o = Ze()
  ;(V.flags |= e),
    (o.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r))
}
function bo(e, t, n, r) {
  var o = ze()
  r = r === void 0 ? null : r
  var l = void 0
  if (Y !== null) {
    var i = Y.memoizedState
    if (((l = i.destroy), r !== null && Ts(r, i.deps))) {
      o.memoizedState = Nr(t, n, l, r)
      return
    }
  }
  ;(V.flags |= e), (o.memoizedState = Nr(1 | t, n, l, r))
}
function Gu(e, t) {
  return po(8390656, 8, e, t)
}
function Rs(e, t) {
  return bo(2048, 8, e, t)
}
function rf(e, t) {
  return bo(4, 2, e, t)
}
function of(e, t) {
  return bo(4, 4, e, t)
}
function lf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function sf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bo(4, 4, lf.bind(null, t, e), n)
  )
}
function _s() {}
function uf(e, t) {
  var n = ze()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ts(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function af(e, t) {
  var n = ze()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ts(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function cf(e, t, n) {
  return Jt & 21
    ? (Je(n, t) || ((n = dc()), (V.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n))
}
function zm(e, t) {
  var n = I
  ;(I = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ml.transition
  Ml.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(I = n), (Ml.transition = r)
  }
}
function ff() {
  return ze().memoizedState
}
function Bm(e, t, n) {
  var r = Ot(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    df(e))
  )
    pf(t, n)
  else if (((n = Hc(e, t, n, r)), n !== null)) {
    var o = fe()
    Xe(n, e, r, o), mf(n, t, r)
  }
}
function $m(e, t, n) {
  var r = Ot(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (df(e)) pf(t, o)
  else {
    var l = e.alternate
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n)
        if (((o.hasEagerState = !0), (o.eagerState = s), Je(s, i))) {
          var u = t.interleaved
          u === null
            ? ((o.next = o), Ss(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Hc(e, t, o, r)),
      n !== null && ((o = fe()), Xe(n, e, r, o), mf(n, t, r))
  }
}
function df(e) {
  var t = e.alternate
  return e === V || (t !== null && t === V)
}
function pf(e, t) {
  sr = Mo = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), as(e, n)
  }
}
var Io = {
    readContext: Ie,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1
  },
  Fm = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ie,
    useEffect: Gu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        po(4194308, 4, lf.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return po(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return po(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Ze()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Ze()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = Bm.bind(null, V, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Ze()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ku,
    useDebugValue: _s,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e)
    },
    useTransition: function () {
      var e = Ku(!1),
        t = e[0]
      return (e = zm.bind(null, e[1])), (Ze().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        o = Ze()
      if (U) {
        if (n === void 0) throw Error(S(407))
        n = n()
      } else {
        if (((n = t()), te === null)) throw Error(S(349))
        Jt & 30 || Zc(r, t, n)
      }
      o.memoizedState = n
      var l = { value: n, getSnapshot: t }
      return (
        (o.queue = l),
        Gu(bc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Nr(9, qc.bind(null, r, l, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Ze(),
        t = te.identifierPrefix
      if (U) {
        var n = st,
          r = it
        ;(n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Cr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Im++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Um = {
    readContext: Ie,
    useCallback: uf,
    useContext: Ie,
    useEffect: Rs,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: af,
    useReducer: Il,
    useRef: nf,
    useState: function () {
      return Il(Pr)
    },
    useDebugValue: _s,
    useDeferredValue: function (e) {
      var t = ze()
      return cf(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Il(Pr)[0],
        t = ze().memoizedState
      return [e, t]
    },
    useMutableSource: Jc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: !1
  },
  Hm = {
    readContext: Ie,
    useCallback: uf,
    useContext: Ie,
    useEffect: Rs,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: af,
    useReducer: zl,
    useRef: nf,
    useState: function () {
      return zl(Pr)
    },
    useDebugValue: _s,
    useDeferredValue: function (e) {
      var t = ze()
      return Y === null ? (t.memoizedState = e) : cf(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = zl(Pr)[0],
        t = ze().memoizedState
      return [e, t]
    },
    useMutableSource: Jc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: !1
  }
function Dn(e, t) {
  try {
    var n = '',
      r = t
    do (n += vp(r)), (r = r.return)
    while (r)
    var o = n
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Ai(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Wm = typeof WeakMap == 'function' ? WeakMap : Map
function hf(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Bo || ((Bo = !0), ($i = r)), Ai(e, t)
    }),
    n
  )
}
function vf(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Ai(e, t)
      })
  }
  var l = e.stateNode
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ai(e, t),
          typeof r != 'function' &&
            (At === null ? (At = new Set([this])) : At.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function Xu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Wm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = rh.bind(null, e, t, n)), t.then(e, e))
}
function Ju(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Yu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Vm = mt.ReactCurrentOwner,
  he = !1
function ce(e, t, n, r) {
  t.child = e === null ? Gc(t, null, n, r) : Rn(t, e.child, n, r)
}
function Zu(e, t, n, r, o) {
  n = n.render
  var l = t.ref
  return (
    Nn(t, o),
    (r = As(e, t, n, r, l, o)),
    (n = Os()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (U && n && gs(t), (t.flags |= 1), ce(e, t, r, o), t.child)
  )
}
function qu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' &&
      !Fs(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), gf(e, t, l, r, o))
      : ((e = go(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : yr), n(i, r) && e.ref === t.ref)
    )
      return pt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Rt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function gf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps
    if (yr(l, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (he = !0)
      else return (t.lanes = e.lanes), pt(e, t, o)
  }
  return Oi(e, t, n, r, o)
}
function yf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(wn, ke),
        (ke |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          B(wn, ke),
          (ke |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(wn, ke),
        (ke |= r)
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(wn, ke),
      (ke |= r)
  return ce(e, t, o, n), t.child
}
function wf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Oi(e, t, n, r, o) {
  var l = ge(n) ? Gt : ue.current
  return (
    (l = An(t, l)),
    Nn(t, o),
    (n = As(e, t, n, r, l, o)),
    (r = Os()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (U && r && gs(t), (t.flags |= 1), ce(e, t, n, o), t.child)
  )
}
function bu(e, t, n, r, o) {
  if (ge(n)) {
    var l = !0
    To(t)
  } else l = !1
  if ((Nn(t, o), t.stateNode === null))
    mo(e, t), Qc(t, n, r), Ti(t, n, r, o), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps
    i.props = s
    var u = i.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = Ie(a))
      : ((a = ge(n) ? Gt : ue.current), (a = An(t, a)))
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && Vu(t, i, r, a)),
      (yt = !1)
    var d = t.memoizedState
    ;(i.state = d),
      Do(t, r, i, o),
      (u = t.memoizedState),
      s !== r || d !== u || ve.current || yt
        ? (typeof f == 'function' && (ji(t, n, f, r), (u = t.memoizedState)),
          (s = yt || Wu(t, n, s, r, d, u, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      Wc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : He(t.type, s)),
      (i.props = a),
      (p = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Ie(u))
        : ((u = ge(n) ? Gt : ue.current), (u = An(t, u)))
    var g = n.getDerivedStateFromProps
    ;(f =
      typeof g == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== p || d !== u) && Vu(t, i, r, u)),
      (yt = !1),
      (d = t.memoizedState),
      (i.state = d),
      Do(t, r, i, o)
    var w = t.memoizedState
    s !== p || d !== w || ve.current || yt
      ? (typeof g == 'function' && (ji(t, n, g, r), (w = t.memoizedState)),
        (a = yt || Wu(t, n, a, r, d, w, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Ri(e, t, n, r, l, o)
}
function Ri(e, t, n, r, o, l) {
  wf(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return o && Bu(t, n, !1), pt(e, t, l)
  ;(r = t.stateNode), (Vm.current = t)
  var s =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Rn(t, e.child, null, l)), (t.child = Rn(t, null, s, l)))
      : ce(e, t, s, l),
    (t.memoizedState = r.state),
    o && Bu(t, n, !0),
    t.child
  )
}
function xf(e) {
  var t = e.stateNode
  t.pendingContext
    ? zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zu(e, t.context, !1),
    Ps(e, t.containerInfo)
}
function ea(e, t, n, r, o) {
  return On(), ws(o), (t.flags |= 256), ce(e, t, n, r), t.child
}
var _i = { dehydrated: null, treeContext: null, retryLane: 0 }
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    o = W.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    B(W, o & 1),
    e === null)
  )
    return (
      Pi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = nl(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Di(n)),
              (t.memoizedState = _i),
              e)
            : Ds(t, i))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Qm(e, t, i, r, s, o, n)
  if (l) {
    ;(l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling)
    var u = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Rt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = Rt(s, l)) : ((l = Kt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Di(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = _i),
      r
    )
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Rt(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Ds(e, t) {
  return (
    (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function qr(e, t, n, r) {
  return (
    r !== null && ws(r),
    Rn(t, e.child, null, n),
    (e = Ds(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Qm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(S(422)))), qr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = nl({ mode: 'visible', children: r.children }, o, 0, null)),
        (l = Kt(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Rn(t, e.child, null, i),
        (t.child.memoizedState = Di(i)),
        (t.memoizedState = _i),
        l)
  if (!(t.mode & 1)) return qr(e, t, i, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (l = Error(S(419))), (r = Bl(l, r, void 0)), qr(e, t, i, r)
  }
  if (((s = (i & e.childLanes) !== 0), he || s)) {
    if (((r = te), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), dt(e, o), Xe(r, e, o, -1))
    }
    return $s(), (r = Bl(Error(S(421)))), qr(e, t, i, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Se = jt(o.nextSibling)),
      (Ce = t),
      (U = !0),
      (Qe = null),
      e !== null &&
        ((Oe[Re++] = it),
        (Oe[Re++] = st),
        (Oe[Re++] = Xt),
        (it = e.id),
        (st = e.overflow),
        (Xt = t)),
      (t = Ds(t, r.children)),
      (t.flags |= 4096),
      t)
}
function ta(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ni(e.return, t, n)
}
function $l(e, t, n, r, o) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o))
}
function kf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ta(e, n, t)
        else if (e.tag === 19) ta(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((B(W, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Lo(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          $l(t, !1, o, n, l)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Lo(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        $l(t, !0, n, null, l)
        break
      case 'together':
        $l(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(S(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Km(e, t, n) {
  switch (t.tag) {
    case 3:
      xf(t), On()
      break
    case 5:
      Xc(t)
      break
    case 1:
      ge(t.type) && To(t)
      break
    case 4:
      Ps(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      B(Ro, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ef(e, t, n)
          : (B(W, W.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null)
      B(W, W.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kf(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        B(W, W.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), yf(e, t, n)
  }
  return pt(e, t, n)
}
var Sf, Li, Cf, Pf
Sf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Li = function () {}
Cf = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Wt(tt.current)
    var l = null
    switch (n) {
      case 'input':
        ;(o = ni(e, o)), (r = ni(e, r)), (l = [])
        break
      case 'select':
        ;(o = Q({}, o, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (l = [])
        break
      case 'textarea':
        ;(o = li(e, o)), (r = li(e, r)), (l = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = No)
    }
    si(n, r)
    var i
    n = null
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var s = o[a]
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (fr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null))
    for (a in r) {
      var u = r[a]
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === 'style')
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]))
          } else n || (l || (l = []), l.push(a, n)), (n = u)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (l = l || []).push(a, '' + u)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (fr.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && $('scroll', e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u))
    }
    n && (l = l || []).push('style', n)
    var a = l
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
Pf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Kn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Gm(e, t, n) {
  var r = t.pendingProps
  switch ((ys(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null
    case 1:
      return ge(t.type) && jo(), ie(t), null
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        F(ve),
        F(ue),
        js(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (Hi(Qe), (Qe = null)))),
        Li(e, t),
        ie(t),
        null
      )
    case 5:
      Ns(t)
      var o = Wt(Sr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Cf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166))
          return ie(t), null
        }
        if (((e = Wt(tt.current)), Yr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var l = t.memoizedProps
          switch (((r[be] = t), (r[Er] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              $('cancel', r), $('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              $('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < er.length; o++) $(er[o], r)
              break
            case 'source':
              $('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              $('error', r), $('load', r)
              break
            case 'details':
              $('toggle', r)
              break
            case 'input':
              cu(r, l), $('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!l.multiple }),
                $('invalid', r)
              break
            case 'textarea':
              du(r, l), $('invalid', r)
          }
          si(n, l), (o = null)
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i]
              i === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : fr.hasOwnProperty(i) &&
                  s != null &&
                  i === 'onScroll' &&
                  $('scroll', r)
            }
          switch (n) {
            case 'input':
              Ur(r), fu(r, l, !0)
              break
            case 'textarea':
              Ur(r), pu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (r.onclick = No)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Za(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[be] = t),
            (e[Er] = r),
            Sf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = ui(n, r)), n)) {
              case 'dialog':
                $('cancel', e), $('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                $('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < er.length; o++) $(er[o], e)
                o = r
                break
              case 'source':
                $('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                $('error', e), $('load', e), (o = r)
                break
              case 'details':
                $('toggle', e), (o = r)
                break
              case 'input':
                cu(e, r), (o = ni(e, r)), $('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Q({}, r, { value: void 0 })),
                  $('invalid', e)
                break
              case 'textarea':
                du(e, r), (o = li(e, r)), $('invalid', e)
                break
              default:
                o = r
            }
            si(n, o), (s = o)
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l]
                l === 'style'
                  ? ec(e, u)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && qa(e, u))
                  : l === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && dr(e, u)
                    : typeof u == 'number' && dr(e, '' + u)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (fr.hasOwnProperty(l)
                      ? u != null && l === 'onScroll' && $('scroll', e)
                      : u != null && rs(e, l, u, i))
              }
            switch (n) {
              case 'input':
                Ur(e), fu(e, r, !1)
                break
              case 'textarea':
                Ur(e), pu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + _t(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? kn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      kn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = No)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return ie(t), null
    case 6:
      if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166))
        if (((n = Wt(Sr.current)), Wt(tt.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (l = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r)
      }
      return ie(t), null
    case 13:
      if (
        (F(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128))
          Uc(), On(), (t.flags |= 98560), (l = !1)
        else if (((l = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(S(318))
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(S(317))
            l[be] = t
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ie(t), (l = !1)
        } else Qe !== null && (Hi(Qe), (Qe = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? Z === 0 && (Z = 3) : $s())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null)
    case 4:
      return (
        _n(), Li(e, t), e === null && wr(t.stateNode.containerInfo), ie(t), null
      )
    case 10:
      return ks(t.type._context), ie(t), null
    case 17:
      return ge(t.type) && jo(), ie(t), null
    case 19:
      if ((F(W), (l = t.memoizedState), l === null)) return ie(t), null
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Kn(l, !1)
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Lo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Kn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling)
                return B(W, (W.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null &&
            X() > Ln &&
            ((t.flags |= 128), (r = !0), Kn(l, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Lo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !i.alternate && !U)
            )
              return ie(t), null
          } else
            2 * X() - l.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kn(l, !1), (t.lanes = 4194304))
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i))
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = X()),
          (t.sibling = null),
          (n = W.current),
          B(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null)
    case 22:
    case 23:
      return (
        Bs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(S(156, t.tag))
}
function Xm(e, t) {
  switch ((ys(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        _n(),
        F(ve),
        F(ue),
        js(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ns(t), null
    case 13:
      if ((F(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340))
        On()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return F(W), null
    case 4:
      return _n(), null
    case 10:
      return ks(t.type._context), null
    case 22:
    case 23:
      return Bs(), null
    case 24:
      return null
    default:
      return null
  }
}
var br = !1,
  se = !1,
  Jm = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null
function yn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        K(e, t, r)
      }
    else n.current = null
}
function Mi(e, t, n) {
  try {
    n()
  } catch (r) {
    K(e, t, r)
  }
}
var na = !1
function Ym(e, t) {
  if (((yi = So), (e = Tc()), vs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            l = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, l.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            f = 0,
            p = e,
            d = null
          t: for (;;) {
            for (
              var g;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (d = p), (p = g)
            for (;;) {
              if (p === e) break t
              if (
                (d === n && ++a === o && (s = i),
                d === l && ++f === r && (u = i),
                (g = p.nextSibling) !== null)
              )
                break
              ;(p = d), (d = p.parentNode)
            }
            p = g
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (wi = { focusedElem: e, selectionRange: n }, So = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e)
    else
      for (; A !== null; ) {
        t = A
        try {
          var w = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    j = w.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : He(t.type, x),
                      j
                    )
                  m.__reactInternalSnapshotBeforeUpdate = c
                }
                break
              case 3:
                var h = t.stateNode.containerInfo
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(S(163))
            }
        } catch (E) {
          K(t, t.return, E)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (A = e)
          break
        }
        A = t.return
      }
  return (w = na), (na = !1), w
}
function ur(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy
        ;(o.destroy = void 0), l !== void 0 && Mi(t, n, l)
      }
      o = o.next
    } while (o !== r)
  }
}
function el(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Ii(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Nf(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Nf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[Er], delete t[ki], delete t[_m], delete t[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function jf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ra(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jf(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function zi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = No))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), (e = e.sibling)
}
function Bi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling)
}
var ne = null,
  We = !1
function vt(e, t, n) {
  for (n = n.child; n !== null; ) Tf(e, t, n), (n = n.sibling)
}
function Tf(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == 'function')
    try {
      et.onCommitFiberUnmount(Ko, n)
    } catch {}
  switch (n.tag) {
    case 5:
      se || yn(n, t)
    case 6:
      var r = ne,
        o = We
      ;(ne = null),
        vt(e, t, n),
        (ne = r),
        (We = o),
        ne !== null &&
          (We
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode))
      break
    case 18:
      ne !== null &&
        (We
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            vr(e))
          : _l(ne, n.stateNode))
      break
    case 4:
      ;(r = ne),
        (o = We),
        (ne = n.stateNode.containerInfo),
        (We = !0),
        vt(e, t, n),
        (ne = r),
        (We = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var l = o,
            i = l.destroy
          ;(l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Mi(n, t, i),
            (o = o.next)
        } while (o !== r)
      }
      vt(e, t, n)
      break
    case 1:
      if (
        !se &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          K(n, t, s)
        }
      vt(e, t, n)
      break
    case 21:
      vt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), vt(e, t, n), (se = r))
        : vt(e, t, n)
      break
    default:
      vt(e, t, n)
  }
}
function oa(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Jm()),
      t.forEach(function (r) {
        var o = lh.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ue(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var l = e,
          i = t,
          s = i
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(ne = s.stateNode), (We = !1)
              break e
            case 3:
              ;(ne = s.stateNode.containerInfo), (We = !0)
              break e
            case 4:
              ;(ne = s.stateNode.containerInfo), (We = !0)
              break e
          }
          s = s.return
        }
        if (ne === null) throw Error(S(160))
        Tf(l, i, o), (ne = null), (We = !1)
        var u = o.alternate
        u !== null && (u.return = null), (o.return = null)
      } catch (a) {
        K(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Af(t, e), (t = t.sibling)
}
function Af(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ye(e), r & 4)) {
        try {
          ur(3, e, e.return), el(3, e)
        } catch (x) {
          K(e, e.return, x)
        }
        try {
          ur(5, e, e.return)
        } catch (x) {
          K(e, e.return, x)
        }
      }
      break
    case 1:
      Ue(t, e), Ye(e), r & 512 && n !== null && yn(n, n.return)
      break
    case 5:
      if (
        (Ue(t, e),
        Ye(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          dr(o, '')
        } catch (x) {
          K(e, e.return, x)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && l.type === 'radio' && l.name != null && Ja(o, l),
              ui(s, i)
            var a = ui(s, l)
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                p = u[i + 1]
              f === 'style'
                ? ec(o, p)
                : f === 'dangerouslySetInnerHTML'
                ? qa(o, p)
                : f === 'children'
                ? dr(o, p)
                : rs(o, f, p, a)
            }
            switch (s) {
              case 'input':
                ri(o, l)
                break
              case 'textarea':
                Ya(o, l)
                break
              case 'select':
                var d = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!l.multiple
                var g = l.value
                g != null
                  ? kn(o, !!l.multiple, g, !1)
                  : d !== !!l.multiple &&
                    (l.defaultValue != null
                      ? kn(o, !!l.multiple, l.defaultValue, !0)
                      : kn(o, !!l.multiple, l.multiple ? [] : '', !1))
            }
            o[Er] = l
          } catch (x) {
            K(e, e.return, x)
          }
      }
      break
    case 6:
      if ((Ue(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162))
        ;(o = e.stateNode), (l = e.memoizedProps)
        try {
          o.nodeValue = l
        } catch (x) {
          K(e, e.return, x)
        }
      }
      break
    case 3:
      if (
        (Ue(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vr(t.containerInfo)
        } catch (x) {
          K(e, e.return, x)
        }
      break
    case 4:
      Ue(t, e), Ye(e)
      break
    case 13:
      Ue(t, e),
        Ye(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Is = X())),
        r & 4 && oa(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || f), Ue(t, e), (se = a)) : Ue(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (A = e, f = e.child; f !== null; ) {
            for (p = A = f; A !== null; ) {
              switch (((d = A), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ur(4, d, d.return)
                  break
                case 1:
                  yn(d, d.return)
                  var w = d.stateNode
                  if (typeof w.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount()
                    } catch (x) {
                      K(r, n, x)
                    }
                  }
                  break
                case 5:
                  yn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    ia(p)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (A = g)) : ia(p)
            }
            f = f.sibling
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p
              try {
                ;(o = p.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = ba('display', i)))
              } catch (x) {
                K(e, e.return, x)
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps
              } catch (x) {
                K(e, e.return, x)
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === e) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e
            f === p && (f = null), (p = p.return)
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      Ue(t, e), Ye(e), r & 4 && oa(e)
      break
    case 21:
      break
    default:
      Ue(t, e), Ye(e)
  }
}
function Ye(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jf(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(S(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (dr(o, ''), (r.flags &= -33))
          var l = ra(e)
          Bi(e, l, o)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = ra(e)
          zi(e, s, i)
          break
        default:
          throw Error(S(161))
      }
    } catch (u) {
      K(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Zm(e, t, n) {
  ;(A = e), Of(e)
}
function Of(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      l = o.child
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || br
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || se
        s = br
        var a = se
        if (((br = i), (se = u) && !a))
          for (A = o; A !== null; )
            (i = A),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? sa(o)
                : u !== null
                ? ((u.return = i), (A = u))
                : sa(o)
        for (; l !== null; ) (A = l), Of(l), (l = l.sibling)
        ;(A = o), (br = s), (se = a)
      }
      la(e)
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (A = l)) : la(e)
  }
}
function la(e) {
  for (; A !== null; ) {
    var t = A
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || el(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var l = t.updateQueue
              l !== null && Hu(t, l, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Hu(t, i, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var u = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus()
                    break
                  case 'img':
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var f = a.memoizedState
                  if (f !== null) {
                    var p = f.dehydrated
                    p !== null && vr(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(S(163))
          }
        se || (t.flags & 512 && Ii(t))
      } catch (d) {
        K(t, t.return, d)
      }
    }
    if (t === e) {
      A = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (A = n)
      break
    }
    A = t.return
  }
}
function ia(e) {
  for (; A !== null; ) {
    var t = A
    if (t === e) {
      A = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (A = n)
      break
    }
    A = t.return
  }
}
function sa(e) {
  for (; A !== null; ) {
    var t = A
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            el(4, t)
          } catch (u) {
            K(t, n, u)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (u) {
              K(t, o, u)
            }
          }
          var l = t.return
          try {
            Ii(t)
          } catch (u) {
            K(t, l, u)
          }
          break
        case 5:
          var i = t.return
          try {
            Ii(t)
          } catch (u) {
            K(t, i, u)
          }
      }
    } catch (u) {
      K(t, t.return, u)
    }
    if (t === e) {
      A = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (A = s)
      break
    }
    A = t.return
  }
}
var qm = Math.ceil,
  zo = mt.ReactCurrentDispatcher,
  Ls = mt.ReactCurrentOwner,
  Me = mt.ReactCurrentBatchConfig,
  L = 0,
  te = null,
  J = null,
  re = 0,
  ke = 0,
  wn = Mt(0),
  Z = 0,
  jr = null,
  Yt = 0,
  tl = 0,
  Ms = 0,
  ar = null,
  me = null,
  Is = 0,
  Ln = 1 / 0,
  rt = null,
  Bo = !1,
  $i = null,
  At = null,
  eo = !1,
  St = null,
  $o = 0,
  cr = 0,
  Fi = null,
  ho = -1,
  vo = 0
function fe() {
  return L & 6 ? X() : ho !== -1 ? ho : (ho = X())
}
function Ot(e) {
  return e.mode & 1
    ? L & 2 && re !== 0
      ? re & -re
      : Mm.transition !== null
      ? (vo === 0 && (vo = dc()), vo)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wc(e.type))),
        e)
    : 1
}
function Xe(e, t, n, r) {
  if (50 < cr) throw ((cr = 0), (Fi = null), Error(S(185)))
  Rr(e, n, r),
    (!(L & 2) || e !== te) &&
      (e === te && (!(L & 2) && (tl |= n), Z === 4 && Et(e, re)),
      ye(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((Ln = X() + 500), Zo && It()))
}
function ye(e, t) {
  var n = e.callbackNode
  Mp(e, t)
  var r = ko(e, e === te ? re : 0)
  if (r === 0)
    n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vu(n), t === 1))
      e.tag === 0 ? Lm(ua.bind(null, e)) : Bc(ua.bind(null, e)),
        Om(function () {
          !(L & 6) && It()
        }),
        (n = null)
    else {
      switch (pc(r)) {
        case 1:
          n = us
          break
        case 4:
          n = cc
          break
        case 16:
          n = Eo
          break
        case 536870912:
          n = fc
          break
        default:
          n = Eo
      }
      n = Bf(n, Rf.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Rf(e, t) {
  if (((ho = -1), (vo = 0), L & 6)) throw Error(S(327))
  var n = e.callbackNode
  if (jn() && e.callbackNode !== n) return null
  var r = ko(e, e === te ? re : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Fo(e, r)
  else {
    t = r
    var o = L
    L |= 2
    var l = Df()
    ;(te !== e || re !== t) && ((rt = null), (Ln = X() + 500), Qt(e, t))
    do
      try {
        th()
        break
      } catch (s) {
        _f(e, s)
      }
    while (1)
    Es(),
      (zo.current = l),
      (L = o),
      J !== null ? (t = 0) : ((te = null), (re = 0), (t = Z))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = pi(e)), o !== 0 && ((r = o), (t = Ui(e, o)))), t === 1)
    )
      throw ((n = jr), Qt(e, 0), Et(e, r), ye(e, X()), n)
    if (t === 6) Et(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !bm(o) &&
          ((t = Fo(e, r)),
          t === 2 && ((l = pi(e)), l !== 0 && ((r = l), (t = Ui(e, l)))),
          t === 1))
      )
        throw ((n = jr), Qt(e, 0), Et(e, r), ye(e, X()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345))
        case 2:
          $t(e, me, rt)
          break
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = Is + 500 - X()), 10 < t))
          ) {
            if (ko(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Ei($t.bind(null, e, me, rt), t)
            break
          }
          $t(e, me, rt)
          break
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ge(r)
            ;(l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l)
          }
          if (
            ((r = o),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ei($t.bind(null, e, me, rt), r)
            break
          }
          $t(e, me, rt)
          break
        case 5:
          $t(e, me, rt)
          break
        default:
          throw Error(S(329))
      }
    }
  }
  return ye(e, X()), e.callbackNode === n ? Rf.bind(null, e) : null
}
function Ui(e, t) {
  var n = ar
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = Fo(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Hi(t)),
    e
  )
}
function Hi(e) {
  me === null ? (me = e) : me.push.apply(me, e)
}
function bm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot
          o = o.value
          try {
            if (!Je(l(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Et(e, t) {
  for (
    t &= ~Ms,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function ua(e) {
  if (L & 6) throw Error(S(327))
  jn()
  var t = ko(e, 0)
  if (!(t & 1)) return ye(e, X()), null
  var n = Fo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = pi(e)
    r !== 0 && ((t = r), (n = Ui(e, r)))
  }
  if (n === 1) throw ((n = jr), Qt(e, 0), Et(e, t), ye(e, X()), n)
  if (n === 6) throw Error(S(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $t(e, me, rt),
    ye(e, X()),
    null
  )
}
function zs(e, t) {
  var n = L
  L |= 1
  try {
    return e(t)
  } finally {
    ;(L = n), L === 0 && ((Ln = X() + 500), Zo && It())
  }
}
function Zt(e) {
  St !== null && St.tag === 0 && !(L & 6) && jn()
  var t = L
  L |= 1
  var n = Me.transition,
    r = I
  try {
    if (((Me.transition = null), (I = 1), e)) return e()
  } finally {
    ;(I = r), (Me.transition = n), (L = t), !(L & 6) && It()
  }
}
function Bs() {
  ;(ke = wn.current), F(wn)
}
function Qt(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Am(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n
      switch ((ys(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && jo()
          break
        case 3:
          _n(), F(ve), F(ue), js()
          break
        case 5:
          Ns(r)
          break
        case 4:
          _n()
          break
        case 13:
          F(W)
          break
        case 19:
          F(W)
          break
        case 10:
          ks(r.type._context)
          break
        case 22:
        case 23:
          Bs()
      }
      n = n.return
    }
  if (
    ((te = e),
    (J = e = Rt(e.current, null)),
    (re = ke = t),
    (Z = 0),
    (jr = null),
    (Ms = tl = Yt = 0),
    (me = ar = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          l = n.pending
        if (l !== null) {
          var i = l.next
          ;(l.next = o), (r.next = i)
        }
        n.pending = r
      }
    Ht = null
  }
  return e
}
function _f(e, t) {
  do {
    var n = J
    try {
      if ((Es(), (fo.current = Io), Mo)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Mo = !1
      }
      if (
        ((Jt = 0),
        (ee = Y = V = null),
        (sr = !1),
        (Cr = 0),
        (Ls.current = null),
        n === null || n.return === null)
      ) {
        ;(Z = 1), (jr = t), (J = null)
        break
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t
        if (
          ((t = re),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            f = s,
            p = f.tag
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = f.alternate
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var g = Ju(i)
          if (g !== null) {
            ;(g.flags &= -257),
              Yu(g, i, s, l, t),
              g.mode & 1 && Xu(l, a, t),
              (t = g),
              (u = a)
            var w = t.updateQueue
            if (w === null) {
              var x = new Set()
              x.add(u), (t.updateQueue = x)
            } else w.add(u)
            break e
          } else {
            if (!(t & 1)) {
              Xu(l, a, t), $s()
              break e
            }
            u = Error(S(426))
          }
        } else if (U && s.mode & 1) {
          var j = Ju(i)
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Yu(j, i, s, l, t),
              ws(Dn(u, s))
            break e
          }
        }
        ;(l = u = Dn(u, s)),
          Z !== 4 && (Z = 2),
          ar === null ? (ar = [l]) : ar.push(l),
          (l = i)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var m = hf(l, u, t)
              Uu(l, m)
              break e
            case 1:
              s = u
              var c = l.type,
                h = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (At === null || !At.has(h))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var E = vf(l, s, t)
                Uu(l, E)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      Mf(n)
    } catch (N) {
      ;(t = N), J === n && n !== null && (J = n = n.return)
      continue
    }
    break
  } while (1)
}
function Df() {
  var e = zo.current
  return (zo.current = Io), e === null ? Io : e
}
function $s() {
  ;(Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    te === null || (!(Yt & 268435455) && !(tl & 268435455)) || Et(te, re)
}
function Fo(e, t) {
  var n = L
  L |= 2
  var r = Df()
  ;(te !== e || re !== t) && ((rt = null), Qt(e, t))
  do
    try {
      eh()
      break
    } catch (o) {
      _f(e, o)
    }
  while (1)
  if ((Es(), (L = n), (zo.current = r), J !== null)) throw Error(S(261))
  return (te = null), (re = 0), Z
}
function eh() {
  for (; J !== null; ) Lf(J)
}
function th() {
  for (; J !== null && !Np(); ) Lf(J)
}
function Lf(e) {
  var t = zf(e.alternate, e, ke)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Mf(e) : (J = t),
    (Ls.current = null)
}
function Mf(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (J = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Z = 6), (J = null)
        return
      }
    } else if (((n = Gm(n, t, ke)), n !== null)) {
      J = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      J = t
      return
    }
    J = t = e
  } while (t !== null)
  Z === 0 && (Z = 5)
}
function $t(e, t, n) {
  var r = I,
    o = Me.transition
  try {
    ;(Me.transition = null), (I = 1), nh(e, t, n, r)
  } finally {
    ;(Me.transition = o), (I = r)
  }
  return null
}
function nh(e, t, n, r) {
  do jn()
  while (St !== null)
  if (L & 6) throw Error(S(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = n.lanes | n.childLanes
  if (
    (Ip(e, l),
    e === te && ((J = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      eo ||
      ((eo = !0),
      Bf(Eo, function () {
        return jn(), null
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ;(l = Me.transition), (Me.transition = null)
    var i = I
    I = 1
    var s = L
    ;(L |= 4),
      (Ls.current = null),
      Ym(e, n),
      Af(n, e),
      km(wi),
      (So = !!yi),
      (wi = yi = null),
      (e.current = n),
      Zm(n),
      jp(),
      (L = s),
      (I = i),
      (Me.transition = l)
  } else e.current = n
  if (
    (eo && ((eo = !1), (St = e), ($o = o)),
    (l = e.pendingLanes),
    l === 0 && (At = null),
    Op(n.stateNode),
    ye(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Bo) throw ((Bo = !1), (e = $i), ($i = null), e)
  return (
    $o & 1 && e.tag !== 0 && jn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Fi ? cr++ : ((cr = 0), (Fi = e))) : (cr = 0),
    It(),
    null
  )
}
function jn() {
  if (St !== null) {
    var e = pc($o),
      t = Me.transition,
      n = I
    try {
      if (((Me.transition = null), (I = 16 > e ? 16 : e), St === null))
        var r = !1
      else {
        if (((e = St), (St = null), ($o = 0), L & 6)) throw Error(S(331))
        var o = L
        for (L |= 4, A = e.current; A !== null; ) {
          var l = A,
            i = l.child
          if (A.flags & 16) {
            var s = l.deletions
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u]
                for (A = a; A !== null; ) {
                  var f = A
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, f, l)
                  }
                  var p = f.child
                  if (p !== null) (p.return = f), (A = p)
                  else
                    for (; A !== null; ) {
                      f = A
                      var d = f.sibling,
                        g = f.return
                      if ((Nf(f), f === a)) {
                        A = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (A = d)
                        break
                      }
                      A = g
                    }
                }
              }
              var w = l.alternate
              if (w !== null) {
                var x = w.child
                if (x !== null) {
                  w.child = null
                  do {
                    var j = x.sibling
                    ;(x.sibling = null), (x = j)
                  } while (x !== null)
                }
              }
              A = l
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (A = i)
          else
            e: for (; A !== null; ) {
              if (((l = A), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ur(9, l, l.return)
                }
              var m = l.sibling
              if (m !== null) {
                ;(m.return = l.return), (A = m)
                break e
              }
              A = l.return
            }
        }
        var c = e.current
        for (A = c; A !== null; ) {
          i = A
          var h = i.child
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (A = h)
          else
            e: for (i = c; A !== null; ) {
              if (((s = A), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, s)
                  }
                } catch (N) {
                  K(s, s.return, N)
                }
              if (s === i) {
                A = null
                break e
              }
              var E = s.sibling
              if (E !== null) {
                ;(E.return = s.return), (A = E)
                break e
              }
              A = s.return
            }
        }
        if (
          ((L = o), It(), et && typeof et.onPostCommitFiberRoot == 'function')
        )
          try {
            et.onPostCommitFiberRoot(Ko, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(I = n), (Me.transition = t)
    }
  }
  return !1
}
function aa(e, t, n) {
  ;(t = Dn(n, t)),
    (t = hf(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = fe()),
    e !== null && (Rr(e, 1, t), ye(e, t))
}
function K(e, t, n) {
  if (e.tag === 3) aa(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        aa(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (At === null || !At.has(r)))
        ) {
          ;(e = Dn(n, e)),
            (e = vf(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = fe()),
            t !== null && (Rr(t, 1, e), ye(t, e))
          break
        }
      }
      t = t.return
    }
}
function rh(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (Z === 4 || (Z === 3 && (re & 130023424) === re && 500 > X() - Is)
        ? Qt(e, 0)
        : (Ms |= n)),
    ye(e, t)
}
function If(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vr), (Vr <<= 1), !(Vr & 130023424) && (Vr = 4194304))
      : (t = 1))
  var n = fe()
  ;(e = dt(e, t)), e !== null && (Rr(e, t, n), ye(e, n))
}
function oh(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), If(e, n)
}
function lh(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(S(314))
  }
  r !== null && r.delete(t), If(e, n)
}
var zf
zf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Km(e, t, n)
      he = !!(e.flags & 131072)
    }
  else (he = !1), U && t.flags & 1048576 && $c(t, Oo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      mo(e, t), (e = t.pendingProps)
      var o = An(t, ue.current)
      Nn(t, n), (o = As(null, t, r, e, o, n))
      var l = Os()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((l = !0), To(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Cs(t),
            (o.updater = qo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ti(t, r, e, n),
            (t = Ri(null, t, r, !0, l, n)))
          : ((t.tag = 0), U && l && gs(t), ce(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (mo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sh(r)),
          (e = He(r, e)),
          o)
        ) {
          case 0:
            t = Oi(null, t, r, e, n)
            break e
          case 1:
            t = bu(null, t, r, e, n)
            break e
          case 11:
            t = Zu(null, t, r, e, n)
            break e
          case 14:
            t = qu(null, t, r, He(r.type, e), n)
            break e
        }
        throw Error(S(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Oi(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        bu(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((xf(t), e === null)) throw Error(S(387))
        ;(r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Wc(e, t),
          Do(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ;(o = Dn(Error(S(423)), t)), (t = ea(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Dn(Error(S(424)), t)), (t = ea(e, t, r, n, o))
            break e
          } else
            for (
              Se = jt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                U = !0,
                Qe = null,
                n = Gc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((On(), r === o)) {
            t = pt(e, t, n)
            break e
          }
          ce(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Xc(t),
        e === null && Pi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        xi(r, o) ? (i = null) : l !== null && xi(r, l) && (t.flags |= 32),
        wf(e, t),
        ce(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && Pi(t), null
    case 13:
      return Ef(e, t, n)
    case 4:
      return (
        Ps(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Zu(e, t, r, o, n)
      )
    case 7:
      return ce(e, t, t.pendingProps, n), t.child
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          B(Ro, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Je(l.value, i)) {
            if (l.children === o.children && !ve.current) {
              t = pt(e, t, n)
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies
              if (s !== null) {
                i = l.child
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      ;(u = ut(-1, n & -n)), (u.tag = 2)
                      var a = l.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var f = a.pending
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (a.pending = u)
                      }
                    }
                    ;(l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Ni(l.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(S(341))
                ;(i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ni(i, n, t),
                  (i = l.sibling)
              } else i = l.child
              if (i !== null) i.return = l
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((l = i.sibling), l !== null)) {
                    ;(l.return = i.return), (i = l)
                    break
                  }
                  i = i.return
                }
              l = i
            }
        ce(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (o = Ie(o)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = He(r, t.pendingProps)),
        (o = He(r.type, o)),
        qu(e, t, r, o, n)
      )
    case 15:
      return gf(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        mo(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), To(t)) : (e = !1),
        Nn(t, n),
        Qc(t, r, o),
        Ti(t, r, o, n),
        Ri(null, t, r, !0, e, n)
      )
    case 19:
      return kf(e, t, n)
    case 22:
      return yf(e, t, n)
  }
  throw Error(S(156, t.tag))
}
function Bf(e, t) {
  return ac(e, t)
}
function ih(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Le(e, t, n, r) {
  return new ih(e, t, n, r)
}
function Fs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function sh(e) {
  if (typeof e == 'function') return Fs(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === ls)) return 11
    if (e === is) return 14
  }
  return 2
}
function Rt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function go(e, t, n, r, o, l) {
  var i = 2
  if (((r = e), typeof e == 'function')) Fs(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case an:
        return Kt(n.children, o, l, t)
      case os:
        ;(i = 8), (o |= 8)
        break
      case ql:
        return (e = Le(12, n, t, o | 2)), (e.elementType = ql), (e.lanes = l), e
      case bl:
        return (e = Le(13, n, t, o)), (e.elementType = bl), (e.lanes = l), e
      case ei:
        return (e = Le(19, n, t, o)), (e.elementType = ei), (e.lanes = l), e
      case Ka:
        return nl(n, o, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Va:
              i = 10
              break e
            case Qa:
              i = 9
              break e
            case ls:
              i = 11
              break e
            case is:
              i = 14
              break e
            case gt:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(S(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Le(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  )
}
function Kt(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e
}
function nl(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = Ka),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Fl(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e
}
function Ul(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function uh(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Us(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new uh(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Le(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Cs(l),
    e
  )
}
function ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: un,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function $f(e) {
  if (!e) return Dt
  e = e._reactInternals
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(S(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(S(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ge(n)) return zc(e, n, t)
  }
  return t
}
function Ff(e, t, n, r, o, l, i, s, u) {
  return (
    (e = Us(n, r, !0, e, o, l, i, s, u)),
    (e.context = $f(null)),
    (n = e.current),
    (r = fe()),
    (o = Ot(n)),
    (l = ut(r, o)),
    (l.callback = t ?? null),
    Tt(n, l, o),
    (e.current.lanes = o),
    Rr(e, o, r),
    ye(e, r),
    e
  )
}
function rl(e, t, n, r) {
  var o = t.current,
    l = fe(),
    i = Ot(o)
  return (
    (n = $f(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(o, t, i)),
    e !== null && (Xe(e, o, i, l), co(e, o, i)),
    i
  )
}
function Uo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Hs(e, t) {
  ca(e, t), (e = e.alternate) && ca(e, t)
}
function ch() {
  return null
}
var Uf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ws(e) {
  this._internalRoot = e
}
ol.prototype.render = Ws.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(S(409))
  rl(e, t, null, null)
}
ol.prototype.unmount = Ws.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Zt(function () {
      rl(null, e, null, null)
    }),
      (t[ft] = null)
  }
}
function ol(e) {
  this._internalRoot = e
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vc()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && yc(e)
  }
}
function Vs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function fa() {}
function fh(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var l = r
      r = function () {
        var a = Uo(i)
        l.call(a)
      }
    }
    var i = Ff(t, r, e, 0, null, !1, !1, '', fa)
    return (
      (e._reactRootContainer = i),
      (e[ft] = i.current),
      wr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var a = Uo(u)
      s.call(a)
    }
  }
  var u = Us(e, 0, !1, null, null, !1, !1, '', fa)
  return (
    (e._reactRootContainer = u),
    (e[ft] = u.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      rl(t, u, n, r)
    }),
    u
  )
}
function il(e, t, n, r, o) {
  var l = n._reactRootContainer
  if (l) {
    var i = l
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var u = Uo(i)
        s.call(u)
      }
    }
    rl(t, i, e, o)
  } else i = fh(n, t, e, o, r)
  return Uo(i)
}
mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes)
        n !== 0 &&
          (as(t, n | 1), ye(t, X()), !(L & 6) && ((Ln = X() + 500), It()))
      }
      break
    case 13:
      Zt(function () {
        var r = dt(e, 1)
        if (r !== null) {
          var o = fe()
          Xe(r, e, 1, o)
        }
      }),
        Hs(e, 1)
  }
}
cs = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728)
    if (t !== null) {
      var n = fe()
      Xe(t, e, 134217728, n)
    }
    Hs(e, 134217728)
  }
}
hc = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = dt(e, t)
    if (n !== null) {
      var r = fe()
      Xe(n, e, t, r)
    }
    Hs(e, t)
  }
}
vc = function () {
  return I
}
gc = function (e, t) {
  var n = I
  try {
    return (I = e), t()
  } finally {
    I = n
  }
}
ci = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ri(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Yo(r)
            if (!o) throw Error(S(90))
            Xa(r), ri(r, o)
          }
        }
      }
      break
    case 'textarea':
      Ya(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && kn(e, !!n.multiple, t, !1)
  }
}
rc = zs
oc = Zt
var dh = { usingClientEntryPoint: !1, Events: [Dr, pn, Yo, tc, nc, zs] },
  Gn = {
    findFiberByHostInstance: Ut,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  ph = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || ch,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!to.isDisabled && to.supportsFiber)
    try {
      ;(Ko = to.inject(ph)), (et = to)
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Vs(t)) throw Error(S(200))
  return ah(e, t, null, n)
}
Ne.createRoot = function (e, t) {
  if (!Vs(e)) throw Error(S(299))
  var n = !1,
    r = '',
    o = Uf
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Us(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    new Ws(t)
  )
}
Ne.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)))
  return (e = sc(t)), (e = e === null ? null : e.stateNode), e
}
Ne.flushSync = function (e) {
  return Zt(e)
}
Ne.hydrate = function (e, t, n) {
  if (!ll(t)) throw Error(S(200))
  return il(null, e, t, !0, n)
}
Ne.hydrateRoot = function (e, t, n) {
  if (!Vs(e)) throw Error(S(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = '',
    i = Uf
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ff(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[ft] = t.current),
    wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new ol(t)
}
Ne.render = function (e, t, n) {
  if (!ll(t)) throw Error(S(200))
  return il(null, e, t, !1, n)
}
Ne.unmountComponentAtNode = function (e) {
  if (!ll(e)) throw Error(S(40))
  return e._reactRootContainer
    ? (Zt(function () {
        il(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[ft] = null)
        })
      }),
      !0)
    : !1
}
Ne.unstable_batchedUpdates = zs
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ll(n)) throw Error(S(200))
  if (e == null || e._reactInternals === void 0) throw Error(S(38))
  return il(e, t, n, !1, r)
}
Ne.version = '18.2.0-next-9e3b772b8-20220608'
function Hf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hf)
    } catch (e) {
      console.error(e)
    }
}
Hf(), ($a.exports = Ne)
var Wf = $a.exports
const xn = Vo(Wf)
var da = Wf
;(Yl.createRoot = da.createRoot), (Yl.hydrateRoot = da.hydrateRoot)
const mh = {
    select: 'EN',
    navbar: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Works/Projects',
      myCV: 'My Curriculum Vitae'
    },
    banner: {
      welcome: 'Welcome to my Portfolio',
      hello: "Hi I'm Jeremías Dominguez Vega",
      presentation:
        'I am a proactive, organized and responsible person, with good interpersonal relationships. I always have the best disposition to carry out my work. I am looking for a position where I can display all my acquired knowledge, as well as continue learning in the area and gain experience.'
    },
    skills: {
      title: 'Skills',
      introduction:
        'My skills as a web developer include a solid understanding of HTML, CSS, and JavaScript, experience with responsive websites, and familiarity with frameworks like React and React Native. I am a passionate problem solver and am always looking for opportunities to grow and learn.'
    },
    projects: {
      title: 'Works/Projects',
      introduction:
        'Allow me to present you a sample of my works, projects and other practices. In my career, I have developed web applications such as Milenium Gym, which offers user management, routines and nutritional plans. I have also updated the web design of Palomba Real Estate in WordPress. Also, I have worked on Handshape Dataset, a library for sign language image processing. In the field of projects, I highlight WhatToWatch, a web app to search for movies and series based on the IMDB database. I have also done various practices in my Github repository, using frameworks and languages ​​like React.Js, Node.Js and Javascript. Explore and discover more about my work!',
      tabOne: 'Works',
      tabTwo: 'Projects',
      tabThree: 'Other Practices',
      works: [
        {
          title1: 'Milenium Gym',
          description1:
            'Web app development for managing gym users. It allows adding routines and nutritional plans to users subscribed to it, as well as notifying them of their next payment.'
        },
        {
          title2: 'Palomba Bienes Raices',
          description2: 'WordPress web design update from Figma template.'
        },
        {
          title3: 'Handshape Dataset',
          description3:
            'Logic and library programming for handling different sign language images countries.'
        }
      ],
      projects: [
        {
          title1: 'WhatToWatch',
          description1:
            'Creation of a web app to search for movies, series, among others, according to the genre that the user is looking for from the IMDB review page database.'
        }
      ],
      others: [
        {
          title1: 'Others projects - Github',
          description1:
            'Various projects in practice mode, using frameworks/languages ​​such as React.Js, Node.Js, Javascript, among others.'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone',
        message: 'Message',
        button: { send: 'Send', sending: 'Sending...' },
        messageStatus: {
          messageTrue: 'Message sent successfully.',
          messageFalse: 'Something went wrong, please try again later.'
        }
      }
    },
    footer: { copyright: 'All Right Reserved' }
  },
  hh = {
    select: 'ES',
    navbar: {
      home: 'Inicio',
      skills: 'Aptitudes',
      projects: 'Trabajos/Proyectos',
      myCV: 'Mi Curriculum Vitae'
    },
    banner: {
      welcome: 'Bienvenido/a a mi Portfolio',
      hello: 'Hola soy Jeremías Dominguez Vega',
      presentation:
        'Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Siempre tengo la mejor disposición para realizar mi trabajo. Busco un puesto donde pueda desplegar todos mis conocimientos adquiridos, así como seguir aprendiendo en el área y adquirir experiencia.'
    },
    skills: {
      title: 'Aptitudes',
      introduction:
        'Mis habilidades como desarrollador web incluyen conocimientos sólidos en HTML, CSS y JavaScript, experiencia en sitios web responsivos y familiaridad con frameworks como React y React Native. Soy un solucionador de problemas apasionado y siempre estoy buscando oportunidades para crecer y aprender.'
    },
    projects: {
      title: 'Trabajos/Proyectos',
      introduction:
        'Permíteme presentarte una muestra de mis trabajos, proyectos y otras prácticas. En mi trayectoria, he desarrollado aplicaciones web como Milenium Gym, que ofrece gestión de usuarios, rutinas y planes nutricionales. También he actualizado el diseño web de Palomba Bienes Raices en WordPress. Además, he trabajado en Handshape Dataset, una biblioteca para procesamiento de imágenes de lengua de señas. En el ámbito de proyectos, destaco WhatToWatch, una app web para buscar películas y series basada en la base de datos de IMDB. También he realizado diversas prácticas en mi repositorio de Github, utilizando frameworks y lenguajes como React.Js, Node.Js y Javascript. ¡Explora y descubre más sobre mi trabajo!',
      tabOne: 'Trabajos',
      tabTwo: 'Proyectos',
      tabThree: 'Otras Prácticas',
      works: [
        {
          title1: 'Milenium Gym',
          description1:
            'Desarrollo app web para manejo de usuarios de gimnasio. Permite añadir rutinas y planes nutricionales a los usuarios suscritos al mismo, así como también notificarles su próximo pago.'
        },
        {
          title2: 'Palomba Bienes Raices',
          description2:
            'Actualización diseño web en WordPress a partir de plantilla Figma.'
        },
        {
          title3: 'Handshape Dataset',
          description3:
            'Lógica y programación de librería para manejo de imágenes de lengua de señas de diferentes países.'
        }
      ],
      projects: [
        {
          title1: 'WhatToWatch',
          description1:
            'Creación de app web para buscar películas, series, entre otros, de acuerdo al género que busque el usuario a partir de base de datos de página de reseñas IMDB.'
        }
      ],
      others: [
        {
          title1: 'Otras Prácticas - Github',
          description1:
            'Diversos proyectos en modo de práctica, utilizando frameworks/lenguajes como por ejemplo React.Js, Node.Js, Javascript, entre otros.'
        }
      ]
    },
    contact: {
      title: 'Ponerse en contacto',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        phone: 'Teléfono',
        message: 'Mensaje',
        button: { send: 'Enviar', sending: 'Enviando...' },
        messageStatus: {
          messageTrue: 'Mensaje enviado con éxito.',
          messageFalse: 'Algo salió mal, inténtalo nuevamente más tarde.'
        }
      }
    },
    footer: { copyright: 'Todos los derechos reservados' }
  },
  Xn = { english: mh, spanish: hh }
var Vf = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var l = arguments[o]
        if (l) {
          var i = typeof l
          if (i === 'string' || i === 'number') r.push(l)
          else if (Array.isArray(l)) {
            if (l.length) {
              var s = n.apply(null, l)
              s && r.push(s)
            }
          } else if (i === 'object') {
            if (
              l.toString !== Object.prototype.toString &&
              !l.toString.toString().includes('[native code]')
            ) {
              r.push(l.toString())
              continue
            }
            for (var u in l) t.call(l, u) && l[u] && r.push(u)
          }
        }
      }
      return r.join(' ')
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(Vf)
var vh = Vf.exports
const q = Vo(vh)
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Wi.apply(this, arguments)
  )
}
function Qf(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function pa(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1)
}
function gh(e) {
  var t = yh(e, 'string')
  return typeof t == 'symbol' ? t : String(t)
}
function yh(e, t) {
  if (typeof e != 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (typeof r != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function wh(e, t, n) {
  var r = y.useRef(e !== void 0),
    o = y.useState(t),
    l = o[0],
    i = o[1],
    s = e !== void 0,
    u = r.current
  return (
    (r.current = s),
    !s && u && l !== t && i(t),
    [
      s ? e : l,
      y.useCallback(
        function (a) {
          for (
            var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), d = 1;
            d < f;
            d++
          )
            p[d - 1] = arguments[d]
          n && n.apply(void 0, [a].concat(p)), i(a)
        },
        [n]
      )
    ]
  )
}
function Kf(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      l = n,
      i = l[pa(r)],
      s = l[r],
      u = Qf(l, [pa(r), r].map(gh)),
      a = t[r],
      f = wh(s, i, e[a]),
      p = f[0],
      d = f[1]
    return Wi({}, u, ((o = {}), (o[r] = p), (o[a] = d), o))
  }, e)
}
function Vi(e, t) {
  return (
    (Vi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r
        }),
    Vi(e, t)
  )
}
function xh(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Vi(e, t)
}
const Eh = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  kh = 'xs',
  Qs = y.createContext({ prefixes: {}, breakpoints: Eh, minBreakpoint: kh })
function we(e, t) {
  const { prefixes: n } = y.useContext(Qs)
  return e || n[t] || t
}
function Gf() {
  const { breakpoints: e } = y.useContext(Qs)
  return e
}
function Xf() {
  const { minBreakpoint: e } = y.useContext(Qs)
  return e
}
function Ks(e) {
  return (e && e.ownerDocument) || document
}
function Sh(e) {
  var t = Ks(e)
  return (t && t.defaultView) || window
}
function Ch(e, t) {
  return Sh(e).getComputedStyle(e, t)
}
var Ph = /([A-Z])/g
function Nh(e) {
  return e.replace(Ph, '-$1').toLowerCase()
}
var jh = /^ms-/
function no(e) {
  return Nh(e).replace(jh, '-ms-')
}
var Th =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
function Ah(e) {
  return !!(e && Th.test(e))
}
function at(e, t) {
  var n = '',
    r = ''
  if (typeof t == 'string')
    return e.style.getPropertyValue(no(t)) || Ch(e).getPropertyValue(no(t))
  Object.keys(t).forEach(function (o) {
    var l = t[o]
    !l && l !== 0
      ? e.style.removeProperty(no(o))
      : Ah(o)
      ? (r += o + '(' + l + ') ')
      : (n += no(o) + ': ' + l + ';')
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n)
}
var Jf = { exports: {} },
  Oh = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Rh = Oh,
  _h = Rh
function Yf() {}
function Zf() {}
Zf.resetWarningCache = Yf
var Dh = function () {
  function e(r, o, l, i, s, u) {
    if (u !== _h) {
      var a = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((a.name = 'Invariant Violation'), a)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Zf,
    resetWarningCache: Yf
  }
  return (n.PropTypes = n), n
}
Jf.exports = Dh()
var qf = Jf.exports
const qe = Vo(qf),
  ma = { disabled: !1 },
  bf = De.createContext(null)
var Lh = function (t) {
    return t.scrollTop
  },
  tr = 'unmounted',
  wt = 'exited',
  Ke = 'entering',
  lt = 'entered',
  Tr = 'exiting',
  ht = (function (e) {
    xh(t, e)
    function t(r, o) {
      var l
      l = e.call(this, r, o) || this
      var i = o,
        s = i && !i.isMounting ? r.enter : r.appear,
        u
      return (
        (l.appearStatus = null),
        r.in
          ? s
            ? ((u = wt), (l.appearStatus = Ke))
            : (u = lt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = tr)
          : (u = wt),
        (l.state = { status: u }),
        (l.nextCallback = null),
        l
      )
    }
    t.getDerivedStateFromProps = function (o, l) {
      var i = o.in
      return i && l.status === tr ? { status: wt } : null
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function (o) {
        var l = null
        if (o !== this.props) {
          var i = this.state.status
          this.props.in
            ? i !== Ke && i !== lt && (l = Ke)
            : (i === Ke || i === lt) && (l = Tr)
        }
        this.updateStatus(!1, l)
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          l,
          i,
          s
        return (
          (l = i = s = o),
          o != null &&
            typeof o != 'number' &&
            ((l = o.exit),
            (i = o.enter),
            (s = o.appear !== void 0 ? o.appear : i)),
          { exit: l, enter: i, appear: s }
        )
      }),
      (n.updateStatus = function (o, l) {
        if ((o === void 0 && (o = !1), l !== null))
          if ((this.cancelNextCallback(), l === Ke)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : xn.findDOMNode(this)
              i && Lh(i)
            }
            this.performEnter(o)
          } else this.performExit()
        else
          this.props.unmountOnExit &&
            this.state.status === wt &&
            this.setState({ status: tr })
      }),
      (n.performEnter = function (o) {
        var l = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          u = this.props.nodeRef ? [s] : [xn.findDOMNode(this), s],
          a = u[0],
          f = u[1],
          p = this.getTimeouts(),
          d = s ? p.appear : p.enter
        if ((!o && !i) || ma.disabled) {
          this.safeSetState({ status: lt }, function () {
            l.props.onEntered(a)
          })
          return
        }
        this.props.onEnter(a, f),
          this.safeSetState({ status: Ke }, function () {
            l.props.onEntering(a, f),
              l.onTransitionEnd(d, function () {
                l.safeSetState({ status: lt }, function () {
                  l.props.onEntered(a, f)
                })
              })
          })
      }),
      (n.performExit = function () {
        var o = this,
          l = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : xn.findDOMNode(this)
        if (!l || ma.disabled) {
          this.safeSetState({ status: wt }, function () {
            o.props.onExited(s)
          })
          return
        }
        this.props.onExit(s),
          this.safeSetState({ status: Tr }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(i.exit, function () {
                o.safeSetState({ status: wt }, function () {
                  o.props.onExited(s)
                })
              })
          })
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function (o, l) {
        ;(l = this.setNextCallback(l)), this.setState(o, l)
      }),
      (n.setNextCallback = function (o) {
        var l = this,
          i = !0
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (l.nextCallback = null), o(s))
          }),
          (this.nextCallback.cancel = function () {
            i = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function (o, l) {
        this.setNextCallback(l)
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : xn.findDOMNode(this),
          s = o == null && !this.props.addEndListener
        if (!i || s) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            a = u[0],
            f = u[1]
          this.props.addEndListener(a, f)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (n.render = function () {
        var o = this.state.status
        if (o === tr) return null
        var l = this.props,
          i = l.children
        l.in,
          l.mountOnEnter,
          l.unmountOnExit,
          l.appear,
          l.enter,
          l.exit,
          l.timeout,
          l.addEndListener,
          l.onEnter,
          l.onEntering,
          l.onEntered,
          l.onExit,
          l.onExiting,
          l.onExited,
          l.nodeRef
        var s = Qf(l, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef'
        ])
        return De.createElement(
          bf.Provider,
          { value: null },
          typeof i == 'function'
            ? i(o, s)
            : De.cloneElement(De.Children.only(i), s)
        )
      }),
      t
    )
  })(De.Component)
ht.contextType = bf
ht.propTypes = {}
function ln() {}
ht.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ln,
  onEntering: ln,
  onEntered: ln,
  onExit: ln,
  onExiting: ln,
  onExited: ln
}
ht.UNMOUNTED = tr
ht.EXITED = wt
ht.ENTERING = Ke
ht.ENTERED = lt
ht.EXITING = Tr
const Mh = ht,
  sl = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
var Qi = !1,
  Ki = !1
try {
  var Hl = {
    get passive() {
      return (Qi = !0)
    },
    get once() {
      return (Ki = Qi = !0)
    }
  }
  sl &&
    (window.addEventListener('test', Hl, Hl),
    window.removeEventListener('test', Hl, !0))
} catch {}
function Ih(e, t, n, r) {
  if (r && typeof r != 'boolean' && !Ki) {
    var o = r.once,
      l = r.capture,
      i = n
    !Ki &&
      o &&
      ((i =
        n.__once ||
        function s(u) {
          this.removeEventListener(t, s, l), n.call(this, u)
        }),
      (n.__once = i)),
      e.addEventListener(t, i, Qi ? r : l)
  }
  e.addEventListener(t, n, r)
}
function zh(e, t, n, r) {
  var o = r && typeof r != 'boolean' ? r.capture : r
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o)
}
function Ho(e, t, n, r) {
  return (
    Ih(e, t, n, r),
    function () {
      zh(e, t, n, r)
    }
  )
}
function Bh(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent('HTMLEvents')
    o.initEvent(t, n, r), e.dispatchEvent(o)
  }
}
function $h(e) {
  var t = at(e, 'transitionDuration') || '',
    n = t.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(t) * n
}
function Fh(e, t, n) {
  n === void 0 && (n = 5)
  var r = !1,
    o = setTimeout(function () {
      r || Bh(e, 'transitionend', !0)
    }, t + n),
    l = Ho(
      e,
      'transitionend',
      function () {
        r = !0
      },
      { once: !0 }
    )
  return function () {
    clearTimeout(o), l()
  }
}
function Uh(e, t, n, r) {
  n == null && (n = $h(e) || 0)
  var o = Fh(e, n, r),
    l = Ho(e, 'transitionend', t)
  return function () {
    o(), l()
  }
}
function ha(e, t) {
  const n = at(e, t) || '',
    r = n.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(n) * r
}
function Gs(e, t) {
  const n = ha(e, 'transitionDuration'),
    r = ha(e, 'transitionDelay'),
    o = Uh(
      e,
      (l) => {
        l.target === e && (o(), t(l))
      },
      n + r
    )
}
function Jn(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != 'function')
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.'
        )
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o)
          }
    }, null)
}
function ed(e) {
  e.offsetHeight
}
var va = function (t) {
  return !t || typeof t == 'function'
    ? t
    : function (n) {
        t.current = n
      }
}
function Hh(e, t) {
  var n = va(e),
    r = va(t)
  return function (o) {
    n && n(o), r && r(o)
  }
}
function ul(e, t) {
  return y.useMemo(
    function () {
      return Hh(e, t)
    },
    [e, t]
  )
}
function Wh(e) {
  return e && 'setState' in e ? xn.findDOMNode(e) : e ?? null
}
const Vh = De.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: l,
        addEndListener: i,
        children: s,
        childRef: u,
        ...a
      },
      f
    ) => {
      const p = y.useRef(null),
        d = ul(p, u),
        g = (k) => {
          d(Wh(k))
        },
        w = (k) => (P) => {
          k && p.current && k(p.current, P)
        },
        x = y.useCallback(w(e), [e]),
        j = y.useCallback(w(t), [t]),
        m = y.useCallback(w(n), [n]),
        c = y.useCallback(w(r), [r]),
        h = y.useCallback(w(o), [o]),
        E = y.useCallback(w(l), [l]),
        N = y.useCallback(w(i), [i])
      return v.jsx(Mh, {
        ref: f,
        ...a,
        onEnter: x,
        onEntered: m,
        onEntering: j,
        onExit: c,
        onExited: E,
        onExiting: h,
        addEndListener: N,
        nodeRef: p,
        children:
          typeof s == 'function'
            ? (k, P) => s(k, { ...P, ref: g })
            : De.cloneElement(s, { ref: g })
      })
    }
  ),
  Xs = Vh,
  Qh = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight']
  }
function Kh(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = Qh[e]
  return r + parseInt(at(t, o[0]), 10) + parseInt(at(t, o[1]), 10)
}
const Gh = {
    [wt]: 'collapse',
    [Tr]: 'collapsing',
    [Ke]: 'collapsing',
    [lt]: 'collapse show'
  },
  Xh = De.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: l,
        children: i,
        dimension: s = 'height',
        in: u = !1,
        timeout: a = 300,
        mountOnEnter: f = !1,
        unmountOnExit: p = !1,
        appear: d = !1,
        getDimensionValue: g = Kh,
        ...w
      },
      x
    ) => {
      const j = typeof s == 'function' ? s() : s,
        m = y.useMemo(
          () =>
            Jn((k) => {
              k.style[j] = '0'
            }, e),
          [j, e]
        ),
        c = y.useMemo(
          () =>
            Jn((k) => {
              const P = `scroll${j[0].toUpperCase()}${j.slice(1)}`
              k.style[j] = `${k[P]}px`
            }, t),
          [j, t]
        ),
        h = y.useMemo(
          () =>
            Jn((k) => {
              k.style[j] = null
            }, n),
          [j, n]
        ),
        E = y.useMemo(
          () =>
            Jn((k) => {
              ;(k.style[j] = `${g(j, k)}px`), ed(k)
            }, r),
          [r, g, j]
        ),
        N = y.useMemo(
          () =>
            Jn((k) => {
              k.style[j] = null
            }, o),
          [j, o]
        )
      return v.jsx(Xs, {
        ref: x,
        addEndListener: Gs,
        ...w,
        'aria-expanded': w.role ? u : null,
        onEnter: m,
        onEntering: c,
        onEntered: h,
        onExit: E,
        onExiting: N,
        childRef: i.ref,
        in: u,
        timeout: a,
        mountOnEnter: f,
        unmountOnExit: p,
        appear: d,
        children: (k, P) =>
          De.cloneElement(i, {
            ...P,
            className: q(
              l,
              i.props.className,
              Gh[k],
              j === 'width' && 'collapse-horizontal'
            )
          })
      })
    }
  ),
  Jh = Xh
function Yh(e) {
  var t = y.useRef(e)
  return (
    y.useEffect(
      function () {
        t.current = e
      },
      [e]
    ),
    t
  )
}
function _e(e) {
  var t = Yh(e)
  return y.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments)
    },
    [t]
  )
}
function Zh() {
  var e = y.useRef(!0),
    t = y.useRef(function () {
      return e.current
    })
  return (
    y.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1
        }
      )
    }, []),
    t.current
  )
}
function qh(e) {
  var t = y.useRef(null)
  return (
    y.useEffect(function () {
      t.current = e
    }),
    t.current
  )
}
var bh =
    typeof global < 'u' &&
    global.navigator &&
    global.navigator.product === 'ReactNative',
  ev = typeof document < 'u'
const Gi = ev || bh ? y.useLayoutEffect : y.useEffect,
  tv = ['as', 'disabled']
function nv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function rv(e) {
  return !e || e.trim() === '#'
}
function td({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: l,
  onClick: i,
  tabIndex: s = 0,
  type: u
}) {
  e || (n != null || r != null || o != null ? (e = 'a') : (e = 'button'))
  const a = { tagName: e }
  if (e === 'button') return [{ type: u || 'button', disabled: t }, a]
  const f = (d) => {
      if (((t || (e === 'a' && rv(n))) && d.preventDefault(), t)) {
        d.stopPropagation()
        return
      }
      i == null || i(d)
    },
    p = (d) => {
      d.key === ' ' && (d.preventDefault(), f(d))
    }
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: l ?? 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === 'a' ? r : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? o : void 0,
        onClick: f,
        onKeyDown: p
      },
      a
    ]
  )
}
const nd = y.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = nv(e, tv)
  const [l, { tagName: i }] = td(Object.assign({ tagName: n, disabled: r }, o))
  return v.jsx(i, Object.assign({}, o, l, { ref: t }))
})
nd.displayName = 'Button'
const ov = ['onKeyDown']
function lv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function iv(e) {
  return !e || e.trim() === '#'
}
const rd = y.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = lv(e, ov)
  const [o] = td(Object.assign({ tagName: 'a' }, r)),
    l = _e((i) => {
      o.onKeyDown(i), n == null || n(i)
    })
  return iv(r.href) || r.role === 'button'
    ? v.jsx('a', Object.assign({ ref: t }, r, o, { onKeyDown: l }))
    : v.jsx('a', Object.assign({ ref: t }, r, { onKeyDown: n }))
})
rd.displayName = 'Anchor'
const sv = rd,
  uv = { [Ke]: 'show', [lt]: 'show' },
  od = y.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      l
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o
        },
        s = y.useCallback(
          (u, a) => {
            ed(u), r == null || r(u, a)
          },
          [r]
        )
      return v.jsx(Xs, {
        ref: l,
        addEndListener: Gs,
        ...i,
        onEnter: s,
        childRef: t.ref,
        children: (u, a) =>
          y.cloneElement(t, {
            ...a,
            className: q('fade', e, t.props.className, uv[u], n[u])
          })
      })
    }
  )
od.displayName = 'Fade'
const Js = od,
  av = {
    'aria-label': qe.string,
    onClick: qe.func,
    variant: qe.oneOf(['white'])
  },
  Ys = y.forwardRef(
    ({ className: e, variant: t, 'aria-label': n = 'Close', ...r }, o) =>
      v.jsx('button', {
        ref: o,
        type: 'button',
        className: q('btn-close', t && `btn-close-${t}`, e),
        'aria-label': n,
        ...r
      })
  )
Ys.displayName = 'CloseButton'
Ys.propTypes = av
const cv = Ys,
  fv = (e) =>
    y.forwardRef((t, n) =>
      v.jsx('div', { ...t, ref: n, className: q(t.className, e) })
    )
var dv = /-(.)/g
function pv(e) {
  return e.replace(dv, function (t, n) {
    return n.toUpperCase()
  })
}
const mv = (e) => e[0].toUpperCase() + pv(e).slice(1)
function Mr(e, { displayName: t = mv(e), Component: n, defaultProps: r } = {}) {
  const o = y.forwardRef(
    ({ className: l, bsPrefix: i, as: s = n || 'div', ...u }, a) => {
      const f = { ...r, ...u },
        p = we(i, e)
      return v.jsx(s, { ref: a, className: q(l, p), ...f })
    }
  )
  return (o.displayName = t), o
}
const ld = y.createContext(null)
ld.displayName = 'CardHeaderContext'
const hv = ld
function vv(e) {
  var t = y.useRef(e)
  return (t.current = e), t
}
function gv(e) {
  var t = vv(e)
  y.useEffect(function () {
    return function () {
      return t.current()
    }
  }, [])
}
function yv({ as: e, bsPrefix: t, className: n, ...r }) {
  t = we(t, 'col')
  const o = Gf(),
    l = Xf(),
    i = [],
    s = []
  return (
    o.forEach((u) => {
      const a = r[u]
      delete r[u]
      let f, p, d
      typeof a == 'object' && a != null
        ? ({ span: f, offset: p, order: d } = a)
        : (f = a)
      const g = u !== l ? `-${u}` : ''
      f && i.push(f === !0 ? `${t}${g}` : `${t}${g}-${f}`),
        d != null && s.push(`order${g}-${d}`),
        p != null && s.push(`offset${g}-${p}`)
    }),
    [
      { ...r, className: q(n, ...i, ...s) },
      { as: e, bsPrefix: t, spans: i }
    ]
  )
}
const id = y.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = 'div', bsPrefix: l, spans: i }] =
    yv(e)
  return v.jsx(o, { ...r, ref: t, className: q(n, !i.length && l) })
})
id.displayName = 'Col'
const qt = id
var wv = Function.prototype.bind.call(Function.prototype.call, [].slice)
function Ft(e, t) {
  return wv(e.querySelectorAll(t))
}
function xv(e, t, n) {
  const r = y.useRef(e !== void 0),
    [o, l] = y.useState(t),
    i = e !== void 0,
    s = r.current
  return (
    (r.current = i),
    !i && s && o !== t && l(t),
    [
      i ? e : o,
      y.useCallback(
        (u, ...a) => {
          n && n(u, ...a), l(u)
        },
        [n]
      )
    ]
  )
}
function Ev() {
  var e = y.useReducer(function (n) {
      return !n
    }, !1),
    t = e[1]
  return t
}
function ga(e, t) {
  if (e.contains) return e.contains(t)
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16)
}
const sd = {
    prefix: String(Math.round(Math.random() * 1e10)),
    current: 0,
    isSSR: !1
  },
  ud = De.createContext(sd)
let kv = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Wl = new WeakMap()
function Sv(e = !1) {
  let t = y.useContext(ud),
    n = y.useRef(null)
  if (n.current === null && !e) {
    var r, o
    let l =
      (r = De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      r === void 0 ||
      (o = r.ReactCurrentOwner) === null ||
      o === void 0
        ? void 0
        : o.current
    if (l) {
      let i = Wl.get(l)
      i == null
        ? Wl.set(l, { id: t.current, state: l.memoizedState })
        : l.memoizedState !== i.state && ((t.current = i.id), Wl.delete(l))
    }
    n.current = ++t.current
  }
  return n.current
}
function Cv(e) {
  let t = y.useContext(ud)
  t === sd &&
    !kv &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    )
  let n = Sv(!!e)
  return e || `react-aria${t.prefix}-${n}`
}
const Pv = y.createContext(null),
  Ar = (e, t = null) => (e != null ? String(e) : t || null),
  bt = Pv,
  ad = y.createContext(null)
ad.displayName = 'NavContext'
const cd = ad,
  Nv = 'data-rr-ui-',
  jv = 'rrUi'
function al(e) {
  return `${Nv}${e}`
}
function Tv(e) {
  return `${jv}${e}`
}
const fd = y.createContext(sl ? window : void 0)
fd.Provider
function Zs() {
  return y.useContext(fd)
}
const dd = y.createContext(null)
dd.displayName = 'NavbarContext'
const Bn = dd,
  pd = y.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = 'div', className: r, ...o }, l) => {
      const i = we(e, 'container'),
        s = typeof t == 'string' ? `-${t}` : '-fluid'
      return v.jsx(n, { ref: l, ...o, className: q(r, t ? `${i}${s}` : i) })
    }
  )
pd.displayName = 'Container'
const Ir = pd,
  Av = y.createContext(null),
  $n = Av,
  Ov = ['as', 'active', 'eventKey']
function Rv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function md({ key: e, onClick: t, active: n, id: r, role: o, disabled: l }) {
  const i = y.useContext(bt),
    s = y.useContext(cd),
    u = y.useContext($n)
  let a = n
  const f = { role: o }
  if (s) {
    !o && s.role === 'tablist' && (f.role = 'tab')
    const p = s.getControllerId(e ?? null),
      d = s.getControlledId(e ?? null)
    ;(f[al('event-key')] = e),
      (f.id = p || r),
      (a = n == null && e != null ? s.activeKey === e : n),
      (a ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (f['aria-controls'] = d)
  }
  return (
    f.role === 'tab' &&
      ((f['aria-selected'] = a),
      a || (f.tabIndex = -1),
      l && ((f.tabIndex = -1), (f['aria-disabled'] = !0))),
    (f.onClick = _e((p) => {
      l ||
        (t == null || t(p),
        e != null && i && !p.isPropagationStopped() && i(e, p))
    })),
    [f, { isActive: a }]
  )
}
const hd = y.forwardRef((e, t) => {
  let { as: n = nd, active: r, eventKey: o } = e,
    l = Rv(e, Ov)
  const [i, s] = md(Object.assign({ key: Ar(o, l.href), active: r }, l))
  return (
    (i[al('active')] = s.isActive),
    v.jsx(n, Object.assign({}, l, i, { ref: t }))
  )
})
hd.displayName = 'NavItem'
const _v = hd,
  Dv = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown']
function Lv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
const ya = () => {},
  wa = al('event-key'),
  vd = y.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: o, role: l, onKeyDown: i } = e,
      s = Lv(e, Dv)
    const u = Ev(),
      a = y.useRef(!1),
      f = y.useContext(bt),
      p = y.useContext($n)
    let d, g
    p &&
      ((l = l || 'tablist'),
      (o = p.activeKey),
      (d = p.getControlledId),
      (g = p.getControllerId))
    const w = y.useRef(null),
      x = (h) => {
        const E = w.current
        if (!E) return null
        const N = Ft(E, `[${wa}]:not([aria-disabled=true])`),
          k = E.querySelector('[aria-selected=true]')
        if (!k || k !== document.activeElement) return null
        const P = N.indexOf(k)
        if (P === -1) return null
        let T = P + h
        return T >= N.length && (T = 0), T < 0 && (T = N.length - 1), N[T]
      },
      j = (h, E) => {
        h != null && (r == null || r(h, E), f == null || f(h, E))
      },
      m = (h) => {
        if ((i == null || i(h), !p)) return
        let E
        switch (h.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            E = x(-1)
            break
          case 'ArrowRight':
          case 'ArrowDown':
            E = x(1)
            break
          default:
            return
        }
        E &&
          (h.preventDefault(),
          j(E.dataset[Tv('EventKey')] || null, h),
          (a.current = !0),
          u())
      }
    y.useEffect(() => {
      if (w.current && a.current) {
        const h = w.current.querySelector(`[${wa}][aria-selected=true]`)
        h == null || h.focus()
      }
      a.current = !1
    })
    const c = ul(t, w)
    return v.jsx(bt.Provider, {
      value: j,
      children: v.jsx(cd.Provider, {
        value: {
          role: l,
          activeKey: Ar(o),
          getControlledId: d || ya,
          getControllerId: g || ya
        },
        children: v.jsx(
          n,
          Object.assign({}, s, { onKeyDown: m, ref: c, role: l })
        )
      })
    })
  })
vd.displayName = 'Nav'
const Mv = Object.assign(vd, { Item: _v })
function Vl(e) {
  e === void 0 && (e = Ks())
  try {
    var t = e.activeElement
    return !t || !t.nodeName ? null : t
  } catch {
    return e.body
  }
}
function Iv(e = document) {
  const t = e.defaultView
  return Math.abs(t.innerWidth - e.documentElement.clientWidth)
}
const xa = al('modal-open')
class zv {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1
  } = {}) {
    ;(this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t)
  }
  getScrollbarWidth() {
    return Iv(this.ownerDocument)
  }
  getElement() {
    return (this.ownerDocument || document).body
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: 'hidden' },
      r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.getElement()
    ;(t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(at(o, r) || '0', 10) + t.scrollBarWidth}px`),
      o.setAttribute(xa, ''),
      at(o, n)
  }
  reset() {
    ;[...this.modals].forEach((t) => this.remove(t))
  }
  removeContainerStyle(t) {
    const n = this.getElement()
    n.removeAttribute(xa), Object.assign(n.style, t.style)
  }
  add(t) {
    let n = this.modals.indexOf(t)
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    )
  }
  remove(t) {
    const n = this.modals.indexOf(t)
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t))
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t
  }
}
const qs = zv,
  Ql = (e, t) =>
    sl
      ? e == null
        ? (t || Ks()).body
        : (typeof e == 'function' && (e = e()),
          e && 'current' in e && (e = e.current),
          e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
      : null
function Bv(e, t) {
  const n = Zs(),
    [r, o] = y.useState(() => Ql(e, n == null ? void 0 : n.document))
  if (!r) {
    const l = Ql(e)
    l && o(l)
  }
  return (
    y.useEffect(() => {
      t && r && t(r)
    }, [t, r]),
    y.useEffect(() => {
      const l = Ql(e)
      l !== r && o(l)
    }, [e, r]),
    r
  )
}
function bs({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o
}) {
  const l = y.useRef(null),
    i = y.useRef(t),
    s = _e(n)
  y.useEffect(() => {
    t ? (i.current = !0) : s(l.current)
  }, [t, s])
  const u = ul(l, e.ref),
    a = y.cloneElement(e, { ref: u })
  return t ? a : o || (!i.current && r) ? null : a
}
function $v({ in: e, onTransition: t }) {
  const n = y.useRef(null),
    r = y.useRef(!0),
    o = _e(t)
  return (
    Gi(() => {
      if (!n.current) return
      let l = !1
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => l }),
        () => {
          l = !0
        }
      )
    }, [e, o]),
    Gi(
      () => (
        (r.current = !1),
        () => {
          r.current = !0
        }
      ),
      []
    ),
    n
  )
}
function Fv({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [l, i] = y.useState(!t)
  t && l && i(!1)
  const s = $v({
      in: !!t,
      onTransition: (a) => {
        const f = () => {
          a.isStale() ||
            (a.in
              ? r == null || r(a.element, a.initial)
              : (i(!0), n == null || n(a.element)))
        }
        Promise.resolve(o(a)).then(f, (p) => {
          throw (a.in || i(!0), p)
        })
      }
    }),
    u = ul(s, e.ref)
  return l && !t ? null : y.cloneElement(e, { ref: u })
}
function Ea(e, t, n) {
  return e
    ? v.jsx(e, Object.assign({}, n))
    : t
    ? v.jsx(Fv, Object.assign({}, n, { transition: t }))
    : v.jsx(bs, Object.assign({}, n))
}
function Uv(e) {
  return e.code === 'Escape' || e.keyCode === 27
}
const Hv = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'runTransition',
  'backdropTransition',
  'runBackdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered'
]
function Wv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
let Kl
function Vv(e) {
  return (
    Kl || (Kl = new qs({ ownerDocument: e == null ? void 0 : e.document })), Kl
  )
}
function Qv(e) {
  const t = Zs(),
    n = e || Vv(t),
    r = y.useRef({ dialog: null, backdrop: null })
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: y.useCallback((o) => {
      r.current.dialog = o
    }, []),
    setBackdropRef: y.useCallback((o) => {
      r.current.backdrop = o
    }, [])
  })
}
const gd = y.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = 'dialog',
      className: o,
      style: l,
      children: i,
      backdrop: s = !0,
      keyboard: u = !0,
      onBackdropClick: a,
      onEscapeKeyDown: f,
      transition: p,
      runTransition: d,
      backdropTransition: g,
      runBackdropTransition: w,
      autoFocus: x = !0,
      enforceFocus: j = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: c,
      renderDialog: h,
      renderBackdrop: E = (G) => v.jsx('div', Object.assign({}, G)),
      manager: N,
      container: k,
      onShow: P,
      onHide: T = () => {},
      onExit: M,
      onExited: _,
      onExiting: ae,
      onEnter: nt,
      onEntering: Be,
      onEntered: zt
    } = e,
    nn = Wv(e, Hv)
  const Te = Zs(),
    $e = Bv(k),
    C = Qv(N),
    O = Zh(),
    R = qh(n),
    [z, H] = y.useState(!n),
    Fe = y.useRef(null)
  y.useImperativeHandle(t, () => C, [C]),
    sl && !R && n && (Fe.current = Vl(Te == null ? void 0 : Te.document)),
    n && z && H(!1)
  const xe = _e(() => {
      if (
        (C.add(),
        (pl.current = Ho(document, 'keydown', Hd)),
        (dl.current = Ho(document, 'focus', () => setTimeout(Ee), !0)),
        P && P(),
        x)
      ) {
        var G, ru
        const hl = Vl(
          (G = (ru = C.dialog) == null ? void 0 : ru.ownerDocument) != null
            ? G
            : Te == null
            ? void 0
            : Te.document
        )
        C.dialog &&
          hl &&
          !ga(C.dialog, hl) &&
          ((Fe.current = hl), C.dialog.focus())
      }
    }),
    b = _e(() => {
      if (
        (C.remove(),
        pl.current == null || pl.current(),
        dl.current == null || dl.current(),
        m)
      ) {
        var G
        ;(G = Fe.current) == null || G.focus == null || G.focus(c),
          (Fe.current = null)
      }
    })
  y.useEffect(() => {
    !n || !$e || xe()
  }, [n, $e, xe]),
    y.useEffect(() => {
      z && b()
    }, [z, b]),
    gv(() => {
      b()
    })
  const Ee = _e(() => {
      if (!j || !O() || !C.isTopModal()) return
      const G = Vl(Te == null ? void 0 : Te.document)
      C.dialog && G && !ga(C.dialog, G) && C.dialog.focus()
    }),
    rn = _e((G) => {
      G.target === G.currentTarget && (a == null || a(G), s === !0 && T())
    }),
    Hd = _e((G) => {
      u &&
        Uv(G) &&
        C.isTopModal() &&
        (f == null || f(G), G.defaultPrevented || T())
    }),
    dl = y.useRef(),
    pl = y.useRef(),
    Wd = (...G) => {
      H(!0), _ == null || _(...G)
    }
  if (!$e) return null
  const nu = Object.assign(
    {
      role: r,
      ref: C.setDialogRef,
      'aria-modal': r === 'dialog' ? !0 : void 0
    },
    nn,
    { style: l, className: o, tabIndex: -1 }
  )
  let ml = h
    ? h(nu)
    : v.jsx(
        'div',
        Object.assign({}, nu, {
          children: y.cloneElement(i, { role: 'document' })
        })
      )
  ml = Ea(p, d, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: M,
    onExiting: ae,
    onExited: Wd,
    onEnter: nt,
    onEntering: Be,
    onEntered: zt,
    children: ml
  })
  let zr = null
  return (
    s &&
      ((zr = E({ ref: C.setBackdropRef, onClick: rn })),
      (zr = Ea(g, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: zr
      }))),
    v.jsx(v.Fragment, {
      children: xn.createPortal(v.jsxs(v.Fragment, { children: [zr, ml] }), $e)
    })
  )
})
gd.displayName = 'Modal'
const Kv = Object.assign(gd, { Manager: qs })
function Gv(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' '
      ) !== -1
}
function Xv(e, t) {
  e.classList
    ? e.classList.add(t)
    : Gv(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t
          ))
}
function ka(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
function Jv(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = ka(e.className, t))
    : e.setAttribute('class', ka((e.className && e.className.baseVal) || '', t))
}
const sn = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
}
class yd extends qs {
  adjustAndStore(t, n, r) {
    const o = n.style[t]
    ;(n.dataset[t] = o), at(n, { [t]: `${parseFloat(at(n, t)) + r}px` })
  }
  restore(t, n) {
    const r = n.dataset[t]
    r !== void 0 && (delete n.dataset[t], at(n, { [t]: r }))
  }
  setContainerStyle(t) {
    super.setContainerStyle(t)
    const n = this.getElement()
    if ((Xv(n, 'modal-open'), !t.scrollBarWidth)) return
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight'
    Ft(n, sn.FIXED_CONTENT).forEach((l) =>
      this.adjustAndStore(r, l, t.scrollBarWidth)
    ),
      Ft(n, sn.STICKY_CONTENT).forEach((l) =>
        this.adjustAndStore(o, l, -t.scrollBarWidth)
      ),
      Ft(n, sn.NAVBAR_TOGGLER).forEach((l) =>
        this.adjustAndStore(o, l, t.scrollBarWidth)
      )
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t)
    const n = this.getElement()
    Jv(n, 'modal-open')
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight'
    Ft(n, sn.FIXED_CONTENT).forEach((l) => this.restore(r, l)),
      Ft(n, sn.STICKY_CONTENT).forEach((l) => this.restore(o, l)),
      Ft(n, sn.NAVBAR_TOGGLER).forEach((l) => this.restore(o, l))
  }
}
let Gl
function Yv(e) {
  return Gl || (Gl = new yd(e)), Gl
}
const Zv = yd,
  qv = y.createContext({ onHide() {} }),
  wd = qv,
  bv = y.forwardRef(
    (
      {
        closeLabel: e = 'Close',
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...l
      },
      i
    ) => {
      const s = y.useContext(wd),
        u = _e(() => {
          s == null || s.onHide(), r == null || r()
        })
      return v.jsxs('div', {
        ref: i,
        ...l,
        children: [
          o,
          n && v.jsx(cv, { 'aria-label': e, variant: t, onClick: u })
        ]
      })
    }
  ),
  eg = bv
var Sa = { exports: {} },
  Xi = { exports: {} }
;(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n)
  function n(r) {
    function o(i, s, u, a, f, p) {
      var d = a || '<<anonymous>>',
        g = p || u
      if (s[u] == null)
        return i
          ? new Error(
              'Required ' +
                f +
                ' `' +
                g +
                '` was not specified ' +
                ('in `' + d + '`.')
            )
          : null
      for (
        var w = arguments.length, x = Array(w > 6 ? w - 6 : 0), j = 6;
        j < w;
        j++
      )
        x[j - 6] = arguments[j]
      return r.apply(void 0, [s, u, d, f, g].concat(x))
    }
    var l = o.bind(null, !1)
    return (l.isRequired = o.bind(null, !0)), l
  }
  e.exports = t.default
})(Xi, Xi.exports)
var tg = Xi.exports
;(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = l)
  var n = tg,
    r = o(n)
  function o(i) {
    return i && i.__esModule ? i : { default: i }
  }
  function l() {
    for (var i = arguments.length, s = Array(i), u = 0; u < i; u++)
      s[u] = arguments[u]
    function a() {
      for (var f = arguments.length, p = Array(f), d = 0; d < f; d++)
        p[d] = arguments[d]
      var g = null
      return (
        s.forEach(function (w) {
          if (g == null) {
            var x = w.apply(void 0, p)
            x != null && (g = x)
          }
        }),
        g
      )
    }
    return (0, r.default)(a)
  }
  e.exports = t.default
})(Sa, Sa.exports)
const ng = Mr('nav-item'),
  xd = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = sv,
        active: r,
        eventKey: o,
        disabled: l = !1,
        ...i
      },
      s
    ) => {
      e = we(e, 'nav-link')
      const [u, a] = md({ key: Ar(o, i.href), active: r, disabled: l, ...i })
      return v.jsx(n, {
        ...i,
        ...u,
        ref: s,
        disabled: l,
        className: q(t, e, l && 'disabled', a.isActive && 'active')
      })
    }
  )
xd.displayName = 'NavLink'
const rg = xd,
  Ed = y.forwardRef((e, t) => {
    const {
        as: n = 'div',
        bsPrefix: r,
        variant: o,
        fill: l = !1,
        justify: i = !1,
        navbar: s,
        navbarScroll: u,
        className: a,
        activeKey: f,
        ...p
      } = Kf(e, { activeKey: 'onSelect' }),
      d = we(r, 'nav')
    let g,
      w,
      x = !1
    const j = y.useContext(Bn),
      m = y.useContext(hv)
    return (
      j
        ? ((g = j.bsPrefix), (x = s ?? !0))
        : m && ({ cardHeaderBsPrefix: w } = m),
      v.jsx(Mv, {
        as: n,
        ref: t,
        activeKey: f,
        className: q(a, {
          [d]: !x,
          [`${g}-nav`]: x,
          [`${g}-nav-scroll`]: x && u,
          [`${w}-${o}`]: !!w,
          [`${d}-${o}`]: !!o,
          [`${d}-fill`]: l,
          [`${d}-justified`]: i
        }),
        ...p
      })
    )
  })
Ed.displayName = 'Nav'
const Ve = Object.assign(Ed, { Item: ng, Link: rg }),
  kd = y.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = we(e, 'navbar-brand')
    const l = n || (r.href ? 'a' : 'span')
    return v.jsx(l, { ...r, ref: o, className: q(t, e) })
  })
kd.displayName = 'NavbarBrand'
const og = kd,
  Sd = y.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = we(t, 'navbar-collapse')
    const o = y.useContext(Bn)
    return v.jsx(Jh, {
      in: !!(o && o.expanded),
      ...n,
      children: v.jsx('div', { ref: r, className: t, children: e })
    })
  })
Sd.displayName = 'NavbarCollapse'
const lg = Sd,
  Cd = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = 'Toggle navigation',
        as: o = 'button',
        onClick: l,
        ...i
      },
      s
    ) => {
      e = we(e, 'navbar-toggler')
      const { onToggle: u, expanded: a } = y.useContext(Bn) || {},
        f = _e((p) => {
          l && l(p), u && u()
        })
      return (
        o === 'button' && (i.type = 'button'),
        v.jsx(o, {
          ...i,
          ref: s,
          onClick: f,
          'aria-label': r,
          className: q(t, e, !a && 'collapsed'),
          children: n || v.jsx('span', { className: `${e}-icon` })
        })
      )
    }
  )
Cd.displayName = 'NavbarToggle'
const ig = Cd
var Ji = new WeakMap(),
  Ca = function (t, n) {
    if (!(!t || !n)) {
      var r = Ji.get(n) || new Map()
      Ji.set(n, r)
      var o = r.get(t)
      return (
        o || ((o = n.matchMedia(t)), (o.refCount = 0), r.set(o.media, o)), o
      )
    }
  }
function sg(e, t) {
  t === void 0 && (t = typeof window > 'u' ? void 0 : window)
  var n = Ca(e, t),
    r = y.useState(function () {
      return n ? n.matches : !1
    }),
    o = r[0],
    l = r[1]
  return (
    Gi(
      function () {
        var i = Ca(e, t)
        if (!i) return l(!1)
        var s = Ji.get(t),
          u = function () {
            l(i.matches)
          }
        return (
          i.refCount++,
          i.addListener(u),
          u(),
          function () {
            i.removeListener(u),
              i.refCount--,
              i.refCount <= 0 && (s == null || s.delete(i.media)),
              (i = void 0)
          }
        )
      },
      [e]
    ),
    o
  )
}
function ug(e) {
  var t = Object.keys(e)
  function n(s, u) {
    return s === u ? u : s ? s + ' and ' + u : u
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)]
  }
  function o(s) {
    var u = r(s),
      a = e[u]
    return (
      typeof a == 'number'
        ? (a = a - 0.2 + 'px')
        : (a = 'calc(' + a + ' - 0.2px)'),
      '(max-width: ' + a + ')'
    )
  }
  function l(s) {
    var u = e[s]
    return typeof u == 'number' && (u = u + 'px'), '(min-width: ' + u + ')'
  }
  function i(s, u, a) {
    var f
    if (typeof s == 'object') (f = s), (a = u), (u = !0)
    else {
      var p
      ;(u = u || !0), (f = ((p = {}), (p[s] = u), p))
    }
    var d = y.useMemo(
      function () {
        return Object.entries(f).reduce(function (g, w) {
          var x = w[0],
            j = w[1]
          return (
            (j === 'up' || j === !0) && (g = n(g, l(x))),
            (j === 'down' || j === !0) && (g = n(g, o(x))),
            g
          )
        }, '')
      },
      [JSON.stringify(f)]
    )
    return sg(d, a)
  }
  return i
}
var ag = ug({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 })
const cg = Mr('offcanvas-body'),
  fg = { [Ke]: 'show', [lt]: 'show' },
  Pd = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: l = !1,
        appear: i = !1,
        ...s
      },
      u
    ) => (
      (e = we(e, 'offcanvas')),
      v.jsx(Xs, {
        ref: u,
        addEndListener: Gs,
        in: r,
        mountOnEnter: o,
        unmountOnExit: l,
        appear: i,
        ...s,
        childRef: n.ref,
        children: (a, f) =>
          y.cloneElement(n, {
            ...f,
            className: q(
              t,
              n.props.className,
              (a === Ke || a === Tr) && `${e}-toggling`,
              fg[a]
            )
          })
      })
    )
  )
Pd.displayName = 'OffcanvasToggling'
const dg = Pd,
  Nd = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = 'Close',
        closeButton: r = !1,
        ...o
      },
      l
    ) => (
      (e = we(e, 'offcanvas-header')),
      v.jsx(eg, {
        ref: l,
        ...o,
        className: q(t, e),
        closeLabel: n,
        closeButton: r
      })
    )
  )
Nd.displayName = 'OffcanvasHeader'
const pg = Nd,
  mg = fv('h5'),
  hg = Mr('offcanvas-title', { Component: mg })
function vg(e) {
  return v.jsx(dg, { ...e })
}
function gg(e) {
  return v.jsx(Js, { ...e })
}
const jd = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': r,
      placement: o = 'start',
      responsive: l,
      show: i = !1,
      backdrop: s = !0,
      keyboard: u = !0,
      scroll: a = !1,
      onEscapeKeyDown: f,
      onShow: p,
      onHide: d,
      container: g,
      autoFocus: w = !0,
      enforceFocus: x = !0,
      restoreFocus: j = !0,
      restoreFocusOptions: m,
      onEntered: c,
      onExit: h,
      onExiting: E,
      onEnter: N,
      onEntering: k,
      onExited: P,
      backdropClassName: T,
      manager: M,
      renderStaticNode: _ = !1,
      ...ae
    },
    nt
  ) => {
    const Be = y.useRef()
    e = we(e, 'offcanvas')
    const { onToggle: zt } = y.useContext(Bn) || {},
      [nn, Te] = y.useState(!1),
      $e = ag(l || 'xs', 'up')
    y.useEffect(() => {
      Te(l ? i && !$e : i)
    }, [i, l, $e])
    const C = _e(() => {
        zt == null || zt(), d == null || d()
      }),
      O = y.useMemo(() => ({ onHide: C }), [C])
    function R() {
      return (
        M ||
        (a
          ? (Be.current ||
              (Be.current = new Zv({ handleContainerOverflow: !1 })),
            Be.current)
          : Yv())
      )
    }
    const z = (b, ...Ee) => {
        b && (b.style.visibility = 'visible'), N == null || N(b, ...Ee)
      },
      H = (b, ...Ee) => {
        b && (b.style.visibility = ''), P == null || P(...Ee)
      },
      Fe = y.useCallback(
        (b) => v.jsx('div', { ...b, className: q(`${e}-backdrop`, T) }),
        [T, e]
      ),
      xe = (b) =>
        v.jsx('div', {
          ...b,
          ...ae,
          className: q(t, l ? `${e}-${l}` : e, `${e}-${o}`),
          'aria-labelledby': r,
          children: n
        })
    return v.jsxs(v.Fragment, {
      children: [
        !nn && (l || _) && xe({}),
        v.jsx(wd.Provider, {
          value: O,
          children: v.jsx(Kv, {
            show: nn,
            ref: nt,
            backdrop: s,
            container: g,
            keyboard: u,
            autoFocus: w,
            enforceFocus: x && !a,
            restoreFocus: j,
            restoreFocusOptions: m,
            onEscapeKeyDown: f,
            onShow: p,
            onHide: C,
            onEnter: z,
            onEntering: k,
            onEntered: c,
            onExit: h,
            onExiting: E,
            onExited: H,
            manager: R(),
            transition: vg,
            backdropTransition: gg,
            renderBackdrop: Fe,
            renderDialog: xe
          })
        })
      ]
    })
  }
)
jd.displayName = 'Offcanvas'
const yg = Object.assign(jd, { Body: cg, Header: pg, Title: hg }),
  Td = y.forwardRef((e, t) => {
    const n = y.useContext(Bn)
    return v.jsx(yg, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0
    })
  })
Td.displayName = 'NavbarOffcanvas'
const wg = Td,
  xg = Mr('navbar-text', { Component: 'span' }),
  Ad = y.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = 'light',
        bg: l,
        fixed: i,
        sticky: s,
        className: u,
        as: a = 'nav',
        expanded: f,
        onToggle: p,
        onSelect: d,
        collapseOnSelect: g = !1,
        ...w
      } = Kf(e, { expanded: 'onToggle' }),
      x = we(n, 'navbar'),
      j = y.useCallback(
        (...h) => {
          d == null || d(...h), g && f && (p == null || p(!1))
        },
        [d, g, f, p]
      )
    w.role === void 0 && a !== 'nav' && (w.role = 'navigation')
    let m = `${x}-expand`
    typeof r == 'string' && (m = `${m}-${r}`)
    const c = y.useMemo(
      () => ({
        onToggle: () => (p == null ? void 0 : p(!f)),
        bsPrefix: x,
        expanded: !!f,
        expand: r
      }),
      [x, f, r, p]
    )
    return v.jsx(Bn.Provider, {
      value: c,
      children: v.jsx(bt.Provider, {
        value: j,
        children: v.jsx(a, {
          ref: t,
          ...w,
          className: q(
            u,
            x,
            r && m,
            o && `${x}-${o}`,
            l && `bg-${l}`,
            s && `sticky-${s}`,
            i && `fixed-${i}`
          )
        })
      })
    })
  })
Ad.displayName = 'Navbar'
const ro = Object.assign(Ad, {
    Brand: og,
    Collapse: lg,
    Offcanvas: wg,
    Text: xg,
    Toggle: ig
  }),
  Od = y.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const l = we(e, 'row'),
      i = Gf(),
      s = Xf(),
      u = `${l}-cols`,
      a = []
    return (
      i.forEach((f) => {
        const p = r[f]
        delete r[f]
        let d
        p != null && typeof p == 'object' ? ({ cols: d } = p) : (d = p)
        const g = f !== s ? `-${f}` : ''
        d != null && a.push(`${u}${g}-${d}`)
      }),
      v.jsx(n, { ref: o, ...r, className: q(t, l, ...a) })
    )
  })
Od.displayName = 'Row'
const Vt = Od,
  Eg = [
    'active',
    'eventKey',
    'mountOnEnter',
    'transition',
    'unmountOnExit',
    'role',
    'onEnter',
    'onEntering',
    'onEntered',
    'onExit',
    'onExiting',
    'onExited'
  ],
  kg = ['activeKey', 'getControlledId', 'getControllerId'],
  Sg = ['as']
function Yi(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Rd(e) {
  let {
      active: t,
      eventKey: n,
      mountOnEnter: r,
      transition: o,
      unmountOnExit: l,
      role: i = 'tabpanel',
      onEnter: s,
      onEntering: u,
      onEntered: a,
      onExit: f,
      onExiting: p,
      onExited: d
    } = e,
    g = Yi(e, Eg)
  const w = y.useContext($n)
  if (!w)
    return [
      Object.assign({}, g, { role: i }),
      {
        eventKey: n,
        isActive: t,
        mountOnEnter: r,
        transition: o,
        unmountOnExit: l,
        onEnter: s,
        onEntering: u,
        onEntered: a,
        onExit: f,
        onExiting: p,
        onExited: d
      }
    ]
  const { activeKey: x, getControlledId: j, getControllerId: m } = w,
    c = Yi(w, kg),
    h = Ar(n)
  return [
    Object.assign({}, g, { role: i, id: j(n), 'aria-labelledby': m(n) }),
    {
      eventKey: n,
      isActive: t == null && h != null ? Ar(x) === h : t,
      transition: o || c.transition,
      mountOnEnter: r ?? c.mountOnEnter,
      unmountOnExit: l ?? c.unmountOnExit,
      onEnter: s,
      onEntering: u,
      onEntered: a,
      onExit: f,
      onExiting: p,
      onExited: d
    }
  ]
}
const _d = y.forwardRef((e, t) => {
  let { as: n = 'div' } = e,
    r = Yi(e, Sg)
  const [
    o,
    {
      isActive: l,
      onEnter: i,
      onEntering: s,
      onEntered: u,
      onExit: a,
      onExiting: f,
      onExited: p,
      mountOnEnter: d,
      unmountOnExit: g,
      transition: w = bs
    }
  ] = Rd(r)
  return v.jsx($n.Provider, {
    value: null,
    children: v.jsx(bt.Provider, {
      value: null,
      children: v.jsx(w, {
        in: l,
        onEnter: i,
        onEntering: s,
        onEntered: u,
        onExit: a,
        onExiting: f,
        onExited: p,
        mountOnEnter: d,
        unmountOnExit: g,
        children: v.jsx(
          n,
          Object.assign({}, o, { ref: t, hidden: !l, 'aria-hidden': !l })
        )
      })
    })
  })
})
_d.displayName = 'TabPanel'
const Dd = (e) => {
  const {
      id: t,
      generateChildId: n,
      onSelect: r,
      activeKey: o,
      defaultActiveKey: l,
      transition: i,
      mountOnEnter: s,
      unmountOnExit: u,
      children: a
    } = e,
    [f, p] = xv(o, l, r),
    d = Cv(t),
    g = y.useMemo(() => n || ((x, j) => (d ? `${d}-${j}-${x}` : null)), [d, n]),
    w = y.useMemo(
      () => ({
        onSelect: p,
        activeKey: f,
        transition: i,
        mountOnEnter: s || !1,
        unmountOnExit: u || !1,
        getControlledId: (x) => g(x, 'tabpane'),
        getControllerId: (x) => g(x, 'tab')
      }),
      [p, f, i, s, u, g]
    )
  return v.jsx($n.Provider, {
    value: w,
    children: v.jsx(bt.Provider, { value: p || null, children: a })
  })
}
Dd.Panel = _d
const Cg = Dd
function Ld(e) {
  return typeof e == 'boolean' ? (e ? Js : bs) : e
}
const Md = ({ transition: e, ...t }) => v.jsx(Cg, { ...t, transition: Ld(e) })
Md.displayName = 'TabContainer'
const Pg = Md,
  Ng = Mr('tab-content'),
  Id = y.forwardRef(({ bsPrefix: e, transition: t, ...n }, r) => {
    const [
        { className: o, as: l = 'div', ...i },
        {
          isActive: s,
          onEnter: u,
          onEntering: a,
          onEntered: f,
          onExit: p,
          onExiting: d,
          onExited: g,
          mountOnEnter: w,
          unmountOnExit: x,
          transition: j = Js
        }
      ] = Rd({ ...n, transition: Ld(t) }),
      m = we(e, 'tab-pane')
    return v.jsx($n.Provider, {
      value: null,
      children: v.jsx(bt.Provider, {
        value: null,
        children: v.jsx(j, {
          in: s,
          onEnter: u,
          onEntering: a,
          onEntered: f,
          onExit: p,
          onExiting: d,
          onExited: g,
          mountOnEnter: w,
          unmountOnExit: x,
          children: v.jsx(l, {
            ...i,
            ref: r,
            className: q(o, m, s && 'active')
          })
        })
      })
    })
  })
Id.displayName = 'TabPane'
const jg = Id,
  Tg = {
    eventKey: qe.oneOfType([qe.string, qe.number]),
    title: qe.node.isRequired,
    disabled: qe.bool,
    tabClassName: qe.string,
    tabAttrs: qe.object
  },
  zd = () => {
    throw new Error(
      "ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly"
    )
  }
zd.propTypes = Tg
const Yn = Object.assign(zd, { Container: Pg, Content: Ng, Pane: jg })
var cl = {},
  Bd = 'Expected a function',
  Pa = 0 / 0,
  Ag = '[object Symbol]',
  Og = /^\s+|\s+$/g,
  Rg = /^[-+]0x[0-9a-f]+$/i,
  _g = /^0b[01]+$/i,
  Dg = /^0o[0-7]+$/i,
  Lg = parseInt,
  Mg = typeof Br == 'object' && Br && Br.Object === Object && Br,
  Ig = typeof self == 'object' && self && self.Object === Object && self,
  zg = Mg || Ig || Function('return this')(),
  Bg = Object.prototype,
  $g = Bg.toString,
  Fg = Math.max,
  Ug = Math.min,
  Xl = function () {
    return zg.Date.now()
  }
function Hg(e, t, n) {
  var r,
    o,
    l,
    i,
    s,
    u,
    a = 0,
    f = !1,
    p = !1,
    d = !0
  if (typeof e != 'function') throw new TypeError(Bd)
  ;(t = Na(t) || 0),
    Wo(n) &&
      ((f = !!n.leading),
      (p = 'maxWait' in n),
      (l = p ? Fg(Na(n.maxWait) || 0, t) : l),
      (d = 'trailing' in n ? !!n.trailing : d))
  function g(k) {
    var P = r,
      T = o
    return (r = o = void 0), (a = k), (i = e.apply(T, P)), i
  }
  function w(k) {
    return (a = k), (s = setTimeout(m, t)), f ? g(k) : i
  }
  function x(k) {
    var P = k - u,
      T = k - a,
      M = t - P
    return p ? Ug(M, l - T) : M
  }
  function j(k) {
    var P = k - u,
      T = k - a
    return u === void 0 || P >= t || P < 0 || (p && T >= l)
  }
  function m() {
    var k = Xl()
    if (j(k)) return c(k)
    s = setTimeout(m, x(k))
  }
  function c(k) {
    return (s = void 0), d && r ? g(k) : ((r = o = void 0), i)
  }
  function h() {
    s !== void 0 && clearTimeout(s), (a = 0), (r = u = o = s = void 0)
  }
  function E() {
    return s === void 0 ? i : c(Xl())
  }
  function N() {
    var k = Xl(),
      P = j(k)
    if (((r = arguments), (o = this), (u = k), P)) {
      if (s === void 0) return w(u)
      if (p) return (s = setTimeout(m, t)), g(u)
    }
    return s === void 0 && (s = setTimeout(m, t)), i
  }
  return (N.cancel = h), (N.flush = E), N
}
function Wg(e, t, n) {
  var r = !0,
    o = !0
  if (typeof e != 'function') throw new TypeError(Bd)
  return (
    Wo(n) &&
      ((r = 'leading' in n ? !!n.leading : r),
      (o = 'trailing' in n ? !!n.trailing : o)),
    Hg(e, t, { leading: r, maxWait: t, trailing: o })
  )
}
function Wo(e) {
  var t = typeof e
  return !!e && (t == 'object' || t == 'function')
}
function Vg(e) {
  return !!e && typeof e == 'object'
}
function Qg(e) {
  return typeof e == 'symbol' || (Vg(e) && $g.call(e) == Ag)
}
function Na(e) {
  if (typeof e == 'number') return e
  if (Qg(e)) return Pa
  if (Wo(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = Wo(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = e.replace(Og, '')
  var n = _g.test(e)
  return n || Dg.test(e) ? Lg(e.slice(2), n ? 2 : 8) : Rg.test(e) ? Pa : +e
}
var Kg = Wg,
  Gg = function (t, n, r, o) {
    var l = r ? r.call(o, t, n) : void 0
    if (l !== void 0) return !!l
    if (t === n) return !0
    if (typeof t != 'object' || !t || typeof n != 'object' || !n) return !1
    var i = Object.keys(t),
      s = Object.keys(n)
    if (i.length !== s.length) return !1
    for (
      var u = Object.prototype.hasOwnProperty.bind(n), a = 0;
      a < i.length;
      a++
    ) {
      var f = i[a]
      if (!u(f)) return !1
      var p = t[f],
        d = n[f]
      if (
        ((l = r ? r.call(o, p, d, f) : void 0),
        l === !1 || (l === void 0 && p !== d))
      )
        return !1
    }
    return !0
  }
cl.__esModule = !0
cl.default = void 0
var oo = Yg(y),
  Ae = eu(qf),
  Xg = eu(Kg),
  Jg = eu(Gg)
function eu(e) {
  return e && e.__esModule ? e : { default: e }
}
function Yg(e) {
  if (e && e.__esModule) return e
  var t = {}
  if (e != null) {
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r =
          Object.defineProperty && Object.getOwnPropertyDescriptor
            ? Object.getOwnPropertyDescriptor(e, n)
            : {}
        r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n])
      }
  }
  return (t.default = e), t
}
function En() {
  return (
    (En =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }),
    En.apply(this, arguments)
  )
}
function Zg(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t)
}
var tu = (function (e) {
  Zg(t, e)
  function t(r) {
    var o
    return (
      (o = e.call(this, r) || this),
      (o.isVisible = function (l, i, s) {
        var u = l.top,
          a = l.left,
          f = l.bottom,
          p = l.right,
          d = l.width,
          g = l.height,
          w = o.props,
          x = w.offset,
          j = w.partialVisibility
        if (u + p + f + a === 0) return !1
        var m = 0 - x,
          c = 0 - x,
          h = i + x,
          E = s + x
        return j
          ? u + g >= m && a + d >= c && f - g <= E && p - d <= h
          : u >= m && a >= c && f <= E && p <= h
      }),
      (o.isComponentVisible = function () {
        setTimeout(function () {
          if (!(!o.nodeRef || !o.nodeRef.getBoundingClientRect)) {
            var l = document.documentElement,
              i = o.props.once,
              s = o.nodeRef.getBoundingClientRect(),
              u = window.innerWidth || l.clientWidth,
              a = window.innerHeight || l.clientHeight,
              f = o.isVisible(s, u, a)
            f && i && o.removeListener(), o.setState({ isVisible: f })
          }
        }, 0)
      }),
      (o.setNodeRef = function (l) {
        return (o.nodeRef = l)
      }),
      (o.ownProps = Object.keys(t.propTypes)),
      (o.state = { isVisible: !1 }),
      (o.throttleCb = (0, Xg.default)(
        o.isComponentVisible,
        o.props.throttleInterval
      )),
      r.nodeRef && o.setNodeRef(r.nodeRef),
      o
    )
  }
  var n = t.prototype
  return (
    (n.componentDidMount = function () {
      this.attachListener(), this.isComponentVisible()
    }),
    (n.componentDidUpdate = function (o) {
      ;(0, Jg.default)(this.getChildProps(this.props), this.getChildProps(o)) ||
        this.isComponentVisible()
    }),
    (n.componentWillUnmount = function () {
      this.removeListener()
    }),
    (n.attachListener = function () {
      window.addEventListener('scroll', this.throttleCb),
        window.addEventListener('resize', this.throttleCb)
    }),
    (n.removeListener = function () {
      window.removeEventListener('scroll', this.throttleCb),
        window.removeEventListener('resize', this.throttleCb)
    }),
    (n.getChildProps = function (o) {
      var l = this
      o === void 0 && (o = this.props)
      var i = {}
      return (
        Object.keys(o).forEach(function (s) {
          l.ownProps.indexOf(s) === -1 && (i[s] = o[s])
        }),
        i
      )
    }),
    (n.getChildren = function () {
      var o = this
      return typeof this.props.children == 'function'
        ? this.props.children(
            En({}, this.getChildProps(), { isVisible: this.state.isVisible })
          )
        : oo.default.Children.map(this.props.children, function (l) {
            return oo.default.cloneElement(
              l,
              En({}, o.getChildProps(), { isVisible: o.state.isVisible })
            )
          })
    }),
    (n.render = function () {
      var o = this.props,
        l = o.className,
        i = o.style,
        s = o.nodeRef,
        u = o.tag,
        a = En({}, l && { className: l }, i && { style: i })
      return oo.default.createElement(
        u,
        En({ ref: !s && this.setNodeRef }, a),
        this.getChildren()
      )
    }),
    t
  )
})(oo.PureComponent)
cl.default = tu
tu.propTypes = {
  once: Ae.default.bool,
  throttleInterval: function (t, n, r) {
    var o = t[n]
    return !Number.isInteger(o) || o < 0
      ? new Error(
          'The ' +
            n +
            ' prop you provided to ' +
            r +
            ' is not a valid integer >= 0.'
        )
      : null
  },
  children: Ae.default.oneOfType([
    Ae.default.func,
    Ae.default.element,
    Ae.default.arrayOf(Ae.default.element)
  ]),
  style: Ae.default.object,
  className: Ae.default.string,
  offset: Ae.default.number,
  partialVisibility: Ae.default.bool,
  nodeRef: Ae.default.object,
  tag: Ae.default.string
}
tu.defaultProps = {
  once: !1,
  throttleInterval: 150,
  offset: 0,
  partialVisibility: !1,
  tag: 'div'
}
var fl = void 0,
  qg = bg(cl)
function bg(e) {
  return e && e.__esModule ? e : { default: e }
}
var ey = qg.default
fl = ey
const ty = '/assets/header-img-a389b465.svg',
  ny = ({ languageLines: e, language: t }) => {
    const [n, r] = y.useState(0),
      [o, l] = y.useState(!1),
      i = [
        'FrontEnd Developer',
        'Computer Engineer',
        'Web Developer',
        'React.Js Developer'
      ],
      [s, u] = y.useState(''),
      [a, f] = y.useState(300 - Math.random() * 100),
      p = 2e3
    y.useEffect(() => {
      let g = setInterval(() => {
        d()
      }, a)
      return () => {
        clearInterval(g)
      }
    }, [s])
    const d = () => {
      let g = n % i.length,
        w = i[g],
        x = o ? w.substring(0, s.length - 1) : w.substring(0, s.length + 1)
      u(x),
        o && f((j) => j / 2),
        !o && x === w
          ? (l(!0), f(p))
          : o && x === '' && (l(!1), r(n + 1), f(500))
    }
    return v.jsx('section', {
      className: 'banner',
      id: 'home',
      children: v.jsx(Ir, {
        children: v.jsxs(Vt, {
          className: 'align-items-center',
          children: [
            v.jsx(qt, {
              xs: 12,
              md: 6,
              xl: 7,
              children: v.jsx(fl, {
                children: ({ isVisible: g }) =>
                  v.jsxs('div', {
                    className: g ? 'animate__animated animate__pulse' : '',
                    children: [
                      v.jsx('span', {
                        className: 'tagline',
                        children: e[t].banner.welcome
                      }),
                      v.jsxs('h1', {
                        children: [
                          e[t].banner.hello,
                          v.jsxs('span', {
                            className: 'wrap',
                            children: [' - ', s]
                          }),
                          v.jsxs('p', {
                            children: ['         ', e[t].banner.presentation]
                          })
                        ]
                      })
                    ]
                  })
              })
            }),
            v.jsx(qt, {
              xs: 12,
              md: 6,
              xl: 5,
              children: v.jsx('img', { src: ty, alt: 'Header Img' })
            })
          ]
        })
      })
    })
  },
  $d = '/assets/Logo-b4b5c9c1.png',
  Fd = '/assets/nav-icon1-4b80d06c.svg',
  Ud = '/assets/nav-icon3-77b0edd4.svg',
  ry = '/assets/language-cb1e9445.png',
  oy = '/assets/language-inv-f3449f2c.png',
  ly = ({ languageLines: e, language: t, handleChangeLanguage: n }) => {
    const [r, o] = y.useState('home'),
      [l, i] = y.useState(!1),
      [s, u] = y.useState(!1)
    y.useEffect(() => {
      const f = () => {
        window.scrollY > 50 ? i(!0) : i(!1)
      }
      return (
        window.addEventListener('scroll', f),
        () => window.removeEventListener('scroll', f)
      )
    }, [])
    const a = (f) => {
      o(f)
    }
    return v.jsx(ro, {
      expand: 'md',
      className: l ? 'scrolled' : '',
      children: v.jsxs(Ir, {
        children: [
          v.jsx(ro.Brand, {
            href: '/',
            children: v.jsx('img', {
              src: $d,
              alt: 'Logo',
              style: { width: 120, height: 'auto' }
            })
          }),
          v.jsx(ro.Toggle, {
            'aria-controls': 'basic-navbar-nav',
            children: v.jsx('span', { className: 'navbar-toggler-icon' })
          }),
          v.jsxs(ro.Collapse, {
            id: 'basic-navbar-nav',
            children: [
              v.jsxs(Ve, {
                className: 'ms-auto',
                children: [
                  v.jsx(Ve.Link, {
                    href: '#home',
                    className:
                      r === 'home' ? 'active navbar-link' : 'navbar-link',
                    onClick: () => a('home'),
                    children: e[t].navbar.home
                  }),
                  v.jsx(Ve.Link, {
                    href: '#skills',
                    className:
                      r === 'skills' ? 'active navbar-link' : 'navbar-link',
                    onClick: () => a('skills'),
                    children: e[t].navbar.skills
                  }),
                  v.jsx(Ve.Link, {
                    href: '#projects',
                    className:
                      r === 'projects' ? 'active navbar-link' : 'navbar-link',
                    onClick: () => a('projects'),
                    children: e[t].navbar.projects
                  })
                ]
              }),
              v.jsxs('span', {
                className: 'navbar-text',
                children: [
                  v.jsxs('div', {
                    className: 'social-icon',
                    children: [
                      v.jsx('a', {
                        href: 'https://www.linkedin.com/in/jeremias-dominguez-vega/',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: v.jsx('img', {
                          src: Fd,
                          alt: 'linkedin',
                          className: 'image'
                        })
                      }),
                      v.jsx('a', {
                        href: 'https://www.instagram.com/jere.dvega/?hl=es-la',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: v.jsx('img', {
                          src: Ud,
                          alt: 'instagram',
                          className: 'image'
                        })
                      }),
                      v.jsx('a', {
                        className: 'translate',
                        onClick: n,
                        onMouseEnter: () => u(!0),
                        onMouseLeave: () => u(!1),
                        children: v.jsx('img', {
                          src: s ? oy : ry,
                          alt: 'translate',
                          className: 'translate-img'
                        })
                      })
                    ]
                  }),
                  v.jsx('button', {
                    className: 'vvd',
                    onClick: () =>
                      window.open(
                        '/src/assets/CV/CV Jeremias Dominguez Vega.pdf',
                        '_blank'
                      ),
                    children: v.jsx('span', { children: e[t].navbar.myCV })
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  }
const iy = '/assets/color-sharp-cc2e99e4.png',
  sy = '/assets/reactJs-463ca45c.png',
  uy = '/assets/reactNative-4bc2f28a.png',
  ja = '/assets/JavaScript-3e47ef65.png',
  ay = '/assets/html-b1957254.png',
  cy = '/assets/css-141f1046.png',
  Ta = '/assets/typescript-8d935917.png',
  fy = '/assets/c-aa633bde.png',
  dy = '/assets/bootstrap-85eb13fd.png',
  py = '/assets/axios-21cdaeb4.png',
  my = '/assets/node-9c3d9739.png',
  hy =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAAF/CAMAAACWmjlVAAAAM1BMVEXwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPNJiJ+AAAAEHRSTlMA8DAQ0KDAQGCA4CCQUHCw+BUOAQAACLtJREFUeAHs0YNhRQEAwMBv4+0/bW0zxWWE3Oi3tl8vNsN548VuPx19Y1rOx8PdjntXvqvVZnikzcqZ72iyGJ5otnTny1sPz7Tz52ubHodnm009+sr9s+GFZluXkv1XjSc+BfsBBPsBBPsBZPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBtPt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7AP8BAAAgAAAEAIAABAEAIAAABACAAAD4N38BpPtncwBNV28BpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsB1PsB9PsB9PsB9PsB9Ps/DnDC3n0gWYoDURR9QgaE+7n/1c6Eb28yWnGJRG8FXed28W2J1s7ee21lBvDx+wOkun1ps96fGcDB7wjws+WtAAHC8fsDSGsLEIDn9wfQWgIE4Pn9AdRngC/4gQDLHiAAz29W5+HdJL8/gGqgAH7+GQDlRwMUOADPzwbIOxqA56cDLAYG4Pn5ADcZgOfnAxQwAM/PB1gNDMDz8wEaGIDn5wOsBgSIyG92ybMGBAjJn7I824wLwPPzDwDZgAAB+e2Sbx8gQEB+y9xrMD4Az1/k3GJAgHD8dso7AwKE47cu7woQIBy/rfKuGReA5+f9TwMCROO3Rd51AwJE4zdx/nwAnt8y588H4PltBf39AXh+3v9jQIBo/LZxzz/5ADy/dXmXDAgQjd8+cu4wAwJE47ck5y7jAvD8/AuwakCAePx2y7fduAA8P/8BQDIuAM/PX4AWIEBEfquaAUB+s2MGIPmtagYA+c2WGYDkt6YZAOQ3u2cAkt9smQFIfkt5BgD5zcoMwPDPADz/DMDzm+1LgAA0/3wayvP7144IAXh+/84cIADP71+qOUAAnt+/VXED+Pl5/yVAAD8/79+2AAH8/Ly/RQjg5+f9IwTw8/P+EQL4+Xn/CAH8/Lx/hAB+ft4/QgA/P+8fIYCfn/ePEMDPz/tHCODn5/0jBPDz8/4RAvj5ef8IAfz8vH+EAH5+3j9CAD8/7x8hgJ+f948QwM/P+wcIkIsF8H9iAIAf8H9wAIAf8H9wAIAf8PcFKLVv6/+7+tmAAAP4AX9ngHau+mrruQMBcrGI/rbJsaUOCQDwo/7+ADrOEQEAftbfH0BHGxAA4If9/QG0pQEBAH7Y3x9gKQMCAPywvz9AbgMCAPyAvyMAcDtbgB/wf1gAgB/w9wcY7JOOEef08v6jAqSRf8vcLYz/qADrwBN1FovjPyzAOe5Y5RbIf1iAvI86UWezQP7jAmyjrkB7JP+BAfYx91VcLZK/IwD8C1Df55/k2phHgPQ+//qUp0BVuux9/stTbueZpP4+/yQ95wLU3uf/eczbcHZrf5//LT3lJUCVvc9/1XPeBHqjf37O/ZzTG/31HH97of8u8n5607+F8/dv+ifjNv3LgKSBr//F/vGaTuM2n/+cuozbfP6/KRu3+fr3kD6v8+9y7h5xY8vLqM33P+9Xfv6eHnM78/zG75+YXXJtGXRXxTI//2UuP4fjYT2Cf8qP+A7u6fhgP4S/3U/49GvPjtfVMfx3ObaP+yFyeZe/df7J/+04giKMf8r01b9KQADa3/8a7DOAHwjA+vu/g3sN4AcD8P5pAW+cVCU2AO9vJWN//1gdkcP5W8kcPx+A97eSOX4+AO9vJXP8fADe39JKPPQCAWh//wvhbsP4+QC8v5VVv9haRvLzAXh/s/bTAsfHBvPzAXh/s7bpB7uaAfxAANzfLNXt0BfLV00G8AMBUP8vt7fe73W9e2+7mQH8QADAH1qVuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lUKHWDv2eEP8IcMkLrk+MImwB8ywCfrV1t3nj9wgHTpN8snzR84QDkcd0wG+IMGaNn7L+T5+QDxv79dpcABmuNfCPBHDVAydlInz88HSAt3Wg/Pzwe4gKPKaX4+gP+8niMB/GEDpEN/uw7whw3QkfPyeH4+gP/Azg3gDxrglGcJ4I8Z4JBnHeAPGaDItQPgDxnglm8F4I8Y4JBvJ8AfMMAu51aAP2CAj7wD+AMG6PJuB/jjBbjkXQP44wVY5d0J8vMBeP8O8McLIMSf5+cD8P48Px9gAf15fj7A6vcH+fkAvH8D+OMF6PKugPx8AP7njcDPByhybgH4IwbI8u0G+CMG2OTbh+PnA/A/dA7CzwfI8mwD+fkA/AWoAPwxA+xybAX5+QD8L0AD+KMG2DP435/n5wN08rNfnp8PsIBvffL8fICSwasPz88HqOBfv1RpBujs/XpngO3p/DPA5OcfAw6AP1wA/wkcVxrHPwOky3H8D8AfNoC1Qz/fto/mnwGsHg59gD9sAGtb1rc7+m6T3xHAt09fv7C/zmI2+V0B/Ev/tUcXBw5AARBCiUzc+q927bTufyJQAm/x1OlfCgjQKyCA+8cDuF+AgADuHw/gfgECArh/PID7BQgI4P7xAO4XICCA+8cDuF+AgADuHw/gfgECArh/PID7BQjcKID7BQgIcKP7BQgIcKP7BQgIcKP7BQjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjfzLZz91ebza9ivwChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmADhPxNgcfqwA/+brU/vt1ny39l0cXqn3YwB2fJNgWwZlE0zOT1rfpgxNAkOWTwizBe71ZYL7Q7H02m600+YOAAAAABJRU5ErkJggg==',
  vy = './assets/visual-b22df1bb.svg',
  gy = './assets/jquery-9414b509.png',
  yy = './assets/tailwind-8f456613.png',
  wy = './assets/sql-66acefd6.png',
  xy = './assets/c__-a578d67b.png',
  Ey = './assets/php-8581c7db.png',
  ky = './assets/json-fc1b613a.png',
  Sy = './assets/python-f28da9a3.png',
  Cy = './assets/redux-f1510b06.png',
  Py = './assets/wordpress-0f0bdff1.png',
  Ny = ({ languageLines: e, language: t }) => {
    const n = [
      sy,
      ja,
      ay,
      cy,
      ky,
      Ta,
      uy,
      py,
      dy,
      hy,
      vy,
      yy,
      Cy,
      my,
      wy,
      gy,
      Ey,
      fy,
      xy,
      Sy,
      Py
    ]
    return v.jsxs('section', {
      className: 'skill',
      id: 'skills',
      children: [
        v.jsx(Ir, {
          children: v.jsx(Vt, {
            children: v.jsx(qt, {
              children: v.jsx(fl, {
                children: ({ isVisible: r }) =>
                  v.jsx('div', {
                    className: r ? 'animate__animated animate__pulse' : '',
                    children: v.jsxs('div', {
                      className: 'skill-bx',
                      children: [
                        v.jsx('h2', { children: e[t].skills.title }),
                        v.jsx('p', { children: e[t].skills.introduction }),
                        n.map((o, l) =>
                          v.jsx(
                            'img',
                            {
                              src: o,
                              alt: `skill${l}`,
                              className:
                                o === ja || o === Ta
                                  ? 'logo-skill rounded-skill'
                                  : 'logo-skill'
                            },
                            l
                          )
                        )
                      ]
                    })
                  })
              })
            })
          })
        }),
        v.jsx('img', { src: iy, className: 'background-image-left' })
      ]
    })
  },
  jy = './assets/project-milenium-6fc46520.png',
  Ty = './assets/project-que-mirar-d42a1dcf.png',
  Ay = './assets/project-palomba-6c95ef56.png',
  Oy = './assets/project-handshape-be1b3d05.png',
  Ry = './assets/project-github-66279bef.png',
  Jl = ({ title: e, description: t, imgUrl: n, url: r }) =>
    v.jsx(qt, {
      sm: 6,
      md: 4,
      children: v.jsxs('div', {
        className: 'proj-imgbx',
        onClick: () => window.open(r, '_blank'),
        children: [
          v.jsx('img', { src: n }),
          v.jsxs('div', {
            className: 'proj-txtx',
            children: [
              v.jsx('h4', { children: e }),
              v.jsx('span', { children: t })
            ]
          })
        ]
      })
    }),
  _y = '/assets/color-sharp2-5b36e133.png',
  Dy = ({ languageLines: e, language: t }) => {
    const n = [
        {
          title: e[t].projects.works[0].title1,
          description: e[t].projects.works[0].description1,
          imgUrl: jy,
          url: 'https://mileniumgimnasio.xyz/'
        },
        {
          title: e[t].projects.works[1].title2,
          description: e[t].projects.works[1].description2,
          imgUrl: Ay,
          url: 'https://palombabienesraices.com.ar/'
        },
        {
          title: e[t].projects.works[2].title3,
          description: e[t].projects.works[2].description3,
          imgUrl: Oy,
          url: 'https://pypi.org/project/handshape-datasets/'
        }
      ],
      r = [
        {
          title: e[t].projects.projects[0].title1,
          description: e[t].projects.projects[0].description1,
          imgUrl: Ty,
          url: 'https://whattowatch-nine.vercel.app/'
        }
      ],
      o = [
        {
          title: e[t].projects.others[0].title1,
          description: e[t].projects.others[0].description1,
          imgUrl: Ry,
          url: 'https://github.com/JereUR'
        }
      ]
    return v.jsxs('section', {
      className: 'project',
      id: 'projects',
      children: [
        v.jsx(Ir, {
          children: v.jsx(Vt, {
            children: v.jsx(qt, {
              children: v.jsx(fl, {
                children: ({ isVisible: l }) =>
                  v.jsxs('div', {
                    className: l ? 'animate__animated animate__pulse' : '',
                    children: [
                      v.jsx('h2', { children: e[t].projects.title }),
                      v.jsx('p', { children: e[t].projects.introduction }),
                      v.jsxs(Yn.Container, {
                        id: 'projects-tabs',
                        defaultActiveKey: 'first',
                        children: [
                          v.jsxs(Ve, {
                            variant: 'pills',
                            className:
                              'nav-pills mb-5 justify-content-center align-items-center',
                            id: 'pills-tab',
                            children: [
                              v.jsx(Ve.Item, {
                                children: v.jsx(Ve.Link, {
                                  eventKey: 'first',
                                  children: e[t].projects.tabOne
                                })
                              }),
                              v.jsx(Ve.Item, {
                                children: v.jsx(Ve.Link, {
                                  eventKey: 'second',
                                  children: e[t].projects.tabTwo
                                })
                              }),
                              v.jsx(Ve.Item, {
                                children: v.jsx(Ve.Link, {
                                  eventKey: 'third',
                                  children: e[t].projects.tabThree
                                })
                              })
                            ]
                          }),
                          v.jsxs(Yn.Content, {
                            children: [
                              v.jsx(Yn.Pane, {
                                eventKey: 'first',
                                className: 'tab-cards',
                                children: v.jsx(Vt, {
                                  children: n.map((i, s) =>
                                    v.jsx(Jl, { ...i }, s)
                                  )
                                })
                              }),
                              v.jsx(Yn.Pane, {
                                eventKey: 'second',
                                className: 'tab-cards',
                                children: v.jsx(Vt, {
                                  children: r.map((i, s) =>
                                    v.jsx(Jl, { ...i }, s)
                                  )
                                })
                              }),
                              v.jsx(Yn.Pane, {
                                eventKey: 'third',
                                className: 'tab-cards',
                                children: v.jsx(Vt, {
                                  children: o.map((i, s) =>
                                    v.jsx(Jl, { ...i }, s)
                                  )
                                })
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
              })
            })
          })
        }),
        v.jsx('img', { src: _y, className: 'background-image-right' })
      ]
    })
  },
  Ly = ({ languageLines: e, language: t }) =>
    v.jsx('footer', {
      className: 'footer',
      children: v.jsx(Ir, {
        children: v.jsxs(Vt, {
          className: 'align-items-center',
          children: [
            v.jsx(qt, {
              sm: 6,
              children: v.jsx('img', { src: $d, alt: 'Logo' })
            }),
            v.jsxs(qt, {
              sm: 6,
              className: 'text-center text-sm-end',
              children: [
                v.jsxs('div', {
                  className: 'social-icon',
                  children: [
                    v.jsx('a', {
                      href: 'https://www.linkedin.com/in/jeremias-dominguez-vega/',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: v.jsx('img', { src: Fd, className: 'image' })
                    }),
                    v.jsx('a', {
                      href: 'https://www.instagram.com/jere.dvega/?hl=es-la',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: v.jsx('img', { src: Ud, className: 'image' })
                    })
                  ]
                }),
                v.jsxs('p', {
                  children: ['CopyRight 2023. ', e[t].footer.copyright]
                })
              ]
            })
          ]
        })
      })
    })
function My() {
  const [e, t] = y.useState('english'),
    n = () => {
      t(e === 'english' ? 'spanish' : 'english')
    }
  return v.jsxs('div', {
    className: 'App',
    children: [
      v.jsx(ly, { languageLines: Xn, language: e, handleChangeLanguage: n }),
      v.jsx(ny, { languageLines: Xn, language: e }),
      v.jsx(Ny, { languageLines: Xn, language: e }),
      v.jsx(Dy, { languageLines: Xn, language: e }),
      v.jsx(Ly, { languageLines: Xn, language: e })
    ]
  })
}
Yl.createRoot(document.getElementById('root')).render(
  v.jsx(De.StrictMode, { children: v.jsx(My, {}) })
)
