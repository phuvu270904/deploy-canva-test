/*! For license information please see f90d92d25d1cd0e3.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
    [98821], {
        1408: (t, e, n) => {
            "use strict";
            n.d(e, {
                X: () => r
            });
            var r = function(t) {
                return t && "number" == typeof t.length && "function" != typeof t
            }
        },
        13851: (t, e) => {
            "use strict";
            e.A = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 2 === t.length ? r(t[0], t[1]) || null : t.slice(1).reduce((function(t, e) {
                    return r(t, e)
                }), t[0]) || null
            };
            var n = new WeakMap;

            function r(t, e) {
                if (t && e) {
                    var r = n.get(t) || new WeakMap;
                    n.set(t, r);
                    var i = r.get(e) || function(n) {
                        o(t, n), o(e, n)
                    };
                    return r.set(e, i), i
                }
                return t || e
            }

            function o(t, e) {
                "function" == typeof t ? t(e) : t.current = e
            }
        },
        15924: (t, e, n) => {
            "use strict";
            var r, o;

            function i(t) {
                return t.type === r.literal
            }

            function s(t) {
                return t.type === r.argument
            }

            function a(t) {
                return t.type === r.number
            }

            function u(t) {
                return t.type === r.date
            }

            function c(t) {
                return t.type === r.time
            }

            function l(t) {
                return t.type === r.select
            }

            function f(t) {
                return t.type === r.plural
            }

            function h(t) {
                return t.type === r.pound
            }

            function p(t) {
                return t.type === r.tag
            }

            function d(t) {
                return !(!t || "object" != typeof t || t.type !== o.number)
            }

            function v(t) {
                return !(!t || "object" != typeof t || t.type !== o.dateTime)
            }
            n.d(e, {
                    Im: () => s,
                    Jp: () => l,
                    N1: () => d,
                    N6: () => f,
                    Qh: () => c,
                    Tu: () => v,
                    ZE: () => r,
                    eW: () => i,
                    jA: () => h,
                    oF: () => a,
                    rq: () => o,
                    tv: () => u,
                    xm: () => p
                }),
                function(t) {
                    t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag"
                }(r || (r = {})),
                function(t) {
                    t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime"
                }(o || (o = {}))
        },
        22626: (t, e, n) => {
            "use strict";
            n.d(e, {
                dw: () => s,
                p7: () => o,
                qX: () => a
            });
            var r = n(845212);

            function o(t, e) {
                var n = Object.create(null);
                return t && r.Children.map(t, (function(t) {
                    return t
                })).forEach((function(t) {
                    n[t.key] = function(t) {
                        return e && (0, r.isValidElement)(t) ? e(t) : t
                    }(t)
                })), n
            }

            function i(t, e, n) {
                return null != n[e] ? n[e] : t.props[e]
            }

            function s(t, e) {
                return o(t.children, (function(n) {
                    return (0, r.cloneElement)(n, {
                        onExited: e.bind(null, n),
                        in: !0,
                        appear: i(n, "appear", t),
                        enter: i(n, "enter", t),
                        exit: i(n, "exit", t)
                    })
                }))
            }

            function a(t, e, n) {
                var s = o(t.children),
                    a = function(t, e) {
                        function n(n) {
                            return n in e ? e[n] : t[n]
                        }
                        t = t || {}, e = e || {};
                        var r, o = Object.create(null),
                            i = [];
                        for (var s in t) s in e ? i.length && (o[s] = i, i = []) : i.push(s);
                        var a = {};
                        for (var u in e) {
                            if (o[u])
                                for (r = 0; r < o[u].length; r++) {
                                    var c = o[u][r];
                                    a[o[u][r]] = n(c)
                                }
                            a[u] = n(u)
                        }
                        for (r = 0; r < i.length; r++) a[i[r]] = n(i[r]);
                        return a
                    }(e, s);
                return Object.keys(a).forEach((function(o) {
                    var u = a[o];
                    if ((0, r.isValidElement)(u)) {
                        var c = o in e,
                            l = o in s,
                            f = e[o],
                            h = (0, r.isValidElement)(f) && !f.props.in;
                        !l || c && !h ? l || !c || h ? l && c && (0, r.isValidElement)(f) && (a[o] = (0, r.cloneElement)(u, {
                            onExited: n.bind(null, u),
                            in: f.props.in,
                            exit: i(u, "exit", t),
                            enter: i(u, "enter", t)
                        })) : a[o] = (0, r.cloneElement)(u, { in: !1
                        }) : a[o] = (0, r.cloneElement)(u, {
                            onExited: n.bind(null, u),
                            in: !0,
                            exit: i(u, "exit", t),
                            enter: i(u, "enter", t)
                        })
                    }
                })), a
            }
        },
        27950: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => h
            });
            var r = n(897010),
                o = n(165669),
                i = n(710821),
                s = n(434008),
                a = n(951265),
                u = n(845212),
                c = n(833299),
                l = function(t, e) {
                    return t && e && e.split(" ").forEach((function(e) {
                        return (0, a.A)(t, e)
                    }))
                },
                f = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, e.onEnter = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                o = r[0],
                                i = r[1];
                            e.removeClasses(o, "exit"), e.addClass(o, i ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(t, n)
                        }, e.onEntering = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                o = r[0],
                                i = r[1] ? "appear" : "enter";
                            e.addClass(o, i, "active"), e.props.onEntering && e.props.onEntering(t, n)
                        }, e.onEntered = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                o = r[0],
                                i = r[1] ? "appear" : "enter";
                            e.removeClasses(o, i), e.addClass(o, i, "done"), e.props.onEntered && e.props.onEntered(t, n)
                        }, e.onExit = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), e.addClass(n, "exit", "base"), e.props.onExit && e.props.onExit(t)
                        }, e.onExiting = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.addClass(n, "exit", "active"), e.props.onExiting && e.props.onExiting(t)
                        }, e.onExited = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.removeClasses(n, "exit"), e.addClass(n, "exit", "done"), e.props.onExited && e.props.onExited(t)
                        }, e.resolveArguments = function(t, n) {
                            return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n]
                        }, e.getClassNames = function(t) {
                            var n = e.props.classNames,
                                r = "string" == typeof n,
                                o = r ? "" + (r && n ? n + "-" : "") + t : n[t];
                            return {
                                baseClassName: o,
                                activeClassName: r ? o + "-active" : n[t + "Active"],
                                doneClassName: r ? o + "-done" : n[t + "Done"]
                            }
                        }, e
                    }(0, i.A)(e, t);
                    var n = e.prototype;
                    return n.addClass = function(t, e, n) {
                        var r = this.getClassNames(e)[n + "ClassName"],
                            o = this.getClassNames("enter").doneClassName;
                        "appear" === e && "done" === n && o && (r += " " + o), "active" === n && t && t.scrollTop, r && (this.appliedClasses[e][n] = r, function(t, e) {
                            t && e && e.split(" ").forEach((function(e) {
                                return (0, s.A)(t, e)
                            }))
                        }(t, r))
                    }, n.removeClasses = function(t, e) {
                        var n = this.appliedClasses[e],
                            r = n.base,
                            o = n.active,
                            i = n.done;
                        this.appliedClasses[e] = {}, r && l(t, r), o && l(t, o), i && l(t, i)
                    }, n.render = function() {
                        var t = this.props,
                            e = (t.classNames, (0, o.A)(t, ["classNames"]));
                        return u.createElement(c.Ay, (0, r.A)({}, e, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, e
                }(u.Component);
            f.defaultProps = {
                classNames: ""
            }, f.propTypes = {};
            const h = f
        },
        37186: (t, e, n) => {
            "use strict";
            n.d(e, {
                F: () => o
            });
            var r = n(599884),
                o = function(t) {
                    return function(e) {
                        return t.then((function(t) {
                            e.closed || (e.next(t), e.complete())
                        }), (function(t) {
                            return e.error(t)
                        })).then(null, r.T), e
                    }
                }
        },
        47911: (t, e, n) => {
            "use strict";

            function r(t) {
                return null !== t && "object" == typeof t
            }
            n.d(e, {
                G: () => r
            })
        },
        59329: (t, e, n) => {
            "use strict";
            n.d(e, {
                r: () => o
            });
            var r = n(998083),
                o = function(t) {
                    function e(e, n) {
                        return t.call(this) || this
                    }
                    return r.C6(e, t), e.prototype.schedule = function(t, e) {
                        return void 0 === e && (e = 0), this
                    }, e
                }(n(997752).y)
        },
        72231: (t, e, n) => {
            "use strict";

            function r(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            n.d(e, {
                y: () => r
            })
        },
        76901: (t, e, n) => {
            "use strict";
            var r = n(754838);

            function o() {}

            function i() {}
            i.resetWarningCache = o, t.exports = function() {
                function t(t, e, n, o, i, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        105572: (t, e, n) => {
            var r = n(876461),
                o = n(493668),
                i = n(334986),
                s = n(565800),
                a = n(451118),
                u = n(999208),
                c = n(689420);
            c.alea = r, c.xor128 = o, c.xorwow = i, c.xorshift7 = s, c.xor4096 = a, c.tychei = u, t.exports = c
        },
        106853: (t, e, n) => {
            "use strict";
            n.d(e, {
                R: () => r
            });
            var r = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i
        },
        111283: (t, e, n) => {
            "use strict";
            n.d(e, {
                B: () => i
            });
            var r = n(998083),
                o = n(335679);

            function i() {
                return function(t) {
                    return t.lift(new s(t))
                }
            }
            var s = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new a(t, n),
                            o = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), o
                    }, t
                }(),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return r.C6(e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(o.v)
        },
        114496: (t, e, n) => {
            "use strict";
            n.d(e, {
                u: () => a
            });
            var r = n(460537),
                o = n(111283),
                i = n(450117);

            function s() {
                return new i.B7
            }

            function a() {
                return function(t) {
                    return (0, o.B)()((0, r.f)(s)(t))
                }
            }
        },
        124105: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => s
            });
            var r = n(226260),
                o = n(997752),
                i = n(977305);

            function s(t, e) {
                return new r.c((function(n) {
                    var r = new o.y;
                    return r.add(e.schedule((function() {
                        var o = t[i.s]();
                        r.add(o.subscribe({
                            next: function(t) {
                                r.add(e.schedule((function() {
                                    return n.next(t)
                                })))
                            },
                            error: function(t) {
                                r.add(e.schedule((function() {
                                    return n.error(t)
                                })))
                            },
                            complete: function() {
                                r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            }
                        }))
                    }))), r
                }))
            }
        },
        152060: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => h
            });
            var r = n(165669),
                o = n(897010),
                i = n(787475),
                s = n(710821),
                a = n(845212),
                u = n(158385),
                c = n(22626),
                l = Object.values || function(t) {
                    return Object.keys(t).map((function(e) {
                        return t[e]
                    }))
                },
                f = function(t) {
                    function e(e, n) {
                        var r, o = (r = t.call(this, e, n) || this).handleExited.bind((0, i.A)(r));
                        return r.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: o,
                            firstRender: !0
                        }, r
                    }(0, s.A)(e, t);
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, n.componentWillUnmount = function() {
                        this.mounted = !1
                    }, e.getDerivedStateFromProps = function(t, e) {
                        var n = e.children,
                            r = e.handleExited;
                        return {
                            children: e.firstRender ? (0, c.dw)(t, r) : (0, c.qX)(t, n, r),
                            firstRender: !1
                        }
                    }, n.handleExited = function(t, e) {
                        var n = (0, c.p7)(this.props.children);
                        t.key in n || (t.props.onExited && t.props.onExited(e), this.mounted && this.setState((function(e) {
                            var n = (0, o.A)({}, e.children);
                            return delete n[t.key], {
                                children: n
                            }
                        })))
                    }, n.render = function() {
                        var t = this.props,
                            e = t.component,
                            n = t.childFactory,
                            o = (0, r.A)(t, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            s = l(this.state.children).map(n);
                        return delete o.appear, delete o.enter, delete o.exit, null === e ? a.createElement(u.A.Provider, {
                            value: i
                        }, s) : a.createElement(u.A.Provider, {
                            value: i
                        }, a.createElement(e, o, s))
                    }, e
                }(a.Component);
            f.propTypes = {}, f.defaultProps = {
                component: "div",
                childFactory: function(t) {
                    return t
                }
            };
            const h = f
        },
        153181: (t, e, n) => {
            "use strict";
            n.d(e, {
                j: () => s
            });
            var r = n(998083),
                o = n(335679),
                i = n(997752);

            function s(t) {
                return function(e) {
                    return e.lift(new a(t))
                }
            }
            var a = function() {
                    function t(t) {
                        this.callback = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new u(t, this.callback))
                    }, t
                }(),
                u = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.add(new i.y(n)), r
                    }
                    return r.C6(e, t), e
                }(o.v)
        },
        158385: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => r
            });
            const r = n(845212).createContext(null)
        },
        162773: (t, e, n) => {
            "use strict";
            n.d(e, {
                n: () => a
            });
            var r = n(998083),
                o = n(535921),
                i = n(212943),
                s = n(914941);

            function a(t, e) {
                return "function" == typeof e ? function(n) {
                    return n.pipe(a((function(n, r) {
                        return (0, i.H)(t(n, r)).pipe((0, o.T)((function(t, o) {
                            return e(n, t, r, o)
                        })))
                    })))
                } : function(e) {
                    return e.lift(new u(t))
                }
            }
            var u = function() {
                    function t(t) {
                        this.project = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.project))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.project = n, r.index = 0, r
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = this.innerSubscription;
                        e && e.unsubscribe();
                        var n = new s.zA(this),
                            r = this.destination;
                        r.add(n), this.innerSubscription = (0, s.tS)(t, n), this.innerSubscription !== n && r.add(this.innerSubscription)
                    }, e.prototype._complete = function() {
                        var e = this.innerSubscription;
                        e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
                    }, e.prototype._unsubscribe = function() {
                        this.innerSubscription = void 0
                    }, e.prototype.notifyComplete = function() {
                        this.innerSubscription = void 0, this.isStopped && t.prototype._complete.call(this)
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e
                }(s.gn)
        },
        165669: (t, e, n) => {
            "use strict";

            function r(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            n.d(e, {
                A: () => r
            })
        },
        167921: (t, e, n) => {
            "use strict";
            n.d(e, {
                S: () => c
            });
            var r = n(944339),
                o = n(607597),
                i = n(919010),
                s = n(853469);

            function a(t, e) {
                return e ? Object.keys(t).reduce((function(n, o) {
                    var i, s;
                    return n[o] = (i = t[o], (s = e[o]) ? (0, r.Cl)((0, r.Cl)((0, r.Cl)({}, i || {}), s || {}), Object.keys(i).reduce((function(t, e) {
                        return t[e] = (0, r.Cl)((0, r.Cl)({}, i[e]), s[e] || {}), t
                    }), {})) : i), n
                }), (0, r.Cl)({}, t)) : t
            }

            function u(t) {
                return {
                    create: function() {
                        return {
                            get: function(e) {
                                return t[e]
                            },
                            set: function(e, n) {
                                t[e] = n
                            }
                        }
                    }
                }
            }
            var c = function() {
                function t(e, n, o, c) {
                    var l, f = this;
                    if (void 0 === n && (n = t.defaultLocale), this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(t) {
                            var e = f.formatToParts(t);
                            if (1 === e.length) return e[0].value;
                            var n = e.reduce((function(t, e) {
                                return t.length && e.type === s.TT.literal && "string" == typeof t[t.length - 1] ? t[t.length - 1] += e.value : t.push(e.value), t
                            }), []);
                            return n.length <= 1 ? n[0] || "" : n
                        }, this.formatToParts = function(t) {
                            return (0, s.hN)(f.ast, f.locales, f.formatters, f.formats, t, void 0, f.message)
                        }, this.resolvedOptions = function() {
                            var t;
                            return {
                                locale: (null === (t = f.resolvedLocale) || void 0 === t ? void 0 : t.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
                            }
                        }, this.getAst = function() {
                            return f.ast
                        }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), "string" == typeof e) {
                        if (this.message = e, !t.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var h = c || {},
                            p = (h.formatters, (0, r.Tt)(h, ["formatters"]));
                        this.ast = t.__parse(e, (0, r.Cl)((0, r.Cl)({}, p), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = e;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    this.formats = a(t.formats, o), this.formatters = c && c.formatters || (void 0 === (l = this.formatterCache) && (l = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: (0, i.B)((function() {
                            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return new((t = Intl.NumberFormat).bind.apply(t, (0, r.fX)([void 0], e, !1)))
                        }), {
                            cache: u(l.number),
                            strategy: i.W.variadic
                        }),
                        getDateTimeFormat: (0, i.B)((function() {
                            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return new((t = Intl.DateTimeFormat).bind.apply(t, (0, r.fX)([void 0], e, !1)))
                        }), {
                            cache: u(l.dateTime),
                            strategy: i.W.variadic
                        }),
                        getPluralRules: (0, i.B)((function() {
                            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return new((t = Intl.PluralRules).bind.apply(t, (0, r.fX)([void 0], e, !1)))
                        }), {
                            cache: u(l.pluralRules),
                            strategy: i.W.variadic
                        })
                    })
                }
                return Object.defineProperty(t, "defaultLocale", {
                    get: function() {
                        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), t.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.memoizedDefaultLocale = null, t.resolveLocale = function(t) {
                    if (void 0 !== Intl.Locale) {
                        var e = Intl.NumberFormat.supportedLocalesOf(t);
                        return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0])
                    }
                }, t.__parse = o.qg, t.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, t
            }()
        },
        168287: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => i
            });
            var r = n(226260),
                o = n(997752);

            function i(t, e) {
                return new r.c((function(n) {
                    var r = new o.y;
                    return r.add(e.schedule((function() {
                        return t.then((function(t) {
                            r.add(e.schedule((function() {
                                n.next(t), r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            })))
                        }), (function(t) {
                            r.add(e.schedule((function() {
                                return n.error(t)
                            })))
                        }))
                    }))), r
                }))
            }
        },
        174762: (t, e, n) => {
            "use strict";
            n.d(e, {
                Ak: () => s,
                s: () => a,
                tz: () => i
            });
            var r, o = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function i() {
                if (r) return r;
                if (!o || !window.document.body) return "indeterminate";
                var t = window.document.createElement("div");
                return t.appendChild(document.createTextNode("ABCD")), t.dir = "rtl", t.style.fontSize = "14px", t.style.width = "4px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.overflow = "scroll", document.body.appendChild(t), r = "reverse", t.scrollLeft > 0 ? r = "default" : (t.scrollLeft = 2, t.scrollLeft < 2 && (r = "negative")), document.body.removeChild(t), r
            }

            function s(t, e) {
                var n = t.scrollLeft;
                if ("rtl" !== e) return n;
                var r = i();
                if ("indeterminate" === r) return Number.NaN;
                switch (r) {
                    case "negative":
                        return t.scrollWidth - t.clientWidth + n;
                    case "reverse":
                        return t.scrollWidth - t.clientWidth - n
                }
                return n
            }

            function a(t, e, n) {
                if ("rtl" === n) {
                    var r = i();
                    if ("indeterminate" !== r) switch (r) {
                        case "negative":
                            t.scrollLeft = t.clientWidth - t.scrollWidth + e;
                            break;
                        case "reverse":
                            t.scrollLeft = t.scrollWidth - t.clientWidth - e;
                            break;
                        default:
                            t.scrollLeft = e
                    }
                } else t.scrollLeft = e
            }
        },
        179210: (t, e, n) => {
            "use strict";
            n.d(e, {
                H: () => o
            });
            var r = n(335679);

            function o(t) {
                for (; t;) {
                    var e = t,
                        n = e.closed,
                        o = e.destination,
                        i = e.isStopped;
                    if (n || i) return !1;
                    t = o && o instanceof r.v ? o : null
                }
                return !0
            }
        },
        190418: (t, e, n) => {
            "use strict";
            n.d(e, {
                X: () => o
            });
            var r = n(977305),
                o = function(t) {
                    return function(e) {
                        var n = t[r.s]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e)
                    }
                }
        },
        192897: (t, e, n) => {
            var r;
            ! function() {
                function o(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }

                function i(t, e, n) {
                    if (!t) throw Error();
                    if (2 < arguments.length) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, r), t.apply(e, n)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function s(t, e, n) {
                    return (s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? o : i).apply(null, arguments)
                }
                var a = Date.now || function() {
                    return +new Date
                };

                function u(t, e) {
                    this.a = t, this.o = e || t, this.c = this.o.document
                }
                var c = !!window.FontFace;

                function l(t, e, n, r) {
                    if (e = t.c.createElement(e), n)
                        for (var o in n) n.hasOwnProperty(o) && ("style" == o ? e.style.cssText = n[o] : e.setAttribute(o, n[o]));
                    return r && e.appendChild(t.c.createTextNode(r)), e
                }

                function f(t, e, n) {
                    (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(n, t.lastChild)
                }

                function h(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }

                function p(t, e, n) {
                    e = e || [], n = n || [];
                    for (var r = t.className.split(/\s+/), o = 0; o < e.length; o += 1) {
                        for (var i = !1, s = 0; s < r.length; s += 1)
                            if (e[o] === r[s]) {
                                i = !0;
                                break
                            }
                        i || r.push(e[o])
                    }
                    for (e = [], o = 0; o < r.length; o += 1) {
                        for (i = !1, s = 0; s < n.length; s += 1)
                            if (r[o] === n[s]) {
                                i = !0;
                                break
                            }
                        i || e.push(r[o])
                    }
                    t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
                }

                function d(t, e) {
                    for (var n = t.className.split(/\s+/), r = 0, o = n.length; r < o; r++)
                        if (n[r] == e) return !0;
                    return !1
                }

                function v(t, e, n) {
                    function r() {
                        a && o && i && (a(s), a = null)
                    }
                    e = l(t, "link", {
                        rel: "stylesheet",
                        href: e,
                        media: "all"
                    });
                    var o = !1,
                        i = !0,
                        s = null,
                        a = n || null;
                    c ? (e.onload = function() {
                        o = !0, r()
                    }, e.onerror = function() {
                        o = !0, s = Error("Stylesheet failed to load"), r()
                    }) : setTimeout((function() {
                        o = !0, r()
                    }), 0), f(t, "head", e)
                }

                function y(t, e, n, r) {
                    var o = t.c.getElementsByTagName("head")[0];
                    if (o) {
                        var i = l(t, "script", {
                                src: e
                            }),
                            s = !1;
                        return i.onload = i.onreadystatechange = function() {
                            s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, n && n(null), i.onload = i.onreadystatechange = null, "HEAD" == i.parentNode.tagName && o.removeChild(i))
                        }, o.appendChild(i), setTimeout((function() {
                            s || (s = !0, n && n(Error("Script load timeout")))
                        }), r || 5e3), i
                    }
                    return null
                }

                function m() {
                    this.a = 0, this.c = null
                }

                function b(t) {
                    return t.a++,
                        function() {
                            t.a--, E(t)
                        }
                }

                function g(t, e) {
                    t.c = e, E(t)
                }

                function E(t) {
                    0 == t.a && t.c && (t.c(), t.c = null)
                }

                function w(t) {
                    this.a = t || "-"
                }

                function _(t, e) {
                    this.c = t, this.f = 4, this.a = "n";
                    var n = (e || "n4").match(/^([nio])([1-9])$/i);
                    n && (this.a = n[1], this.f = parseInt(n[2], 10))
                }

                function T(t) {
                    var e = [];
                    t = t.split(/,\s*/);
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n].replace(/['"]/g, ""); - 1 != r.indexOf(" ") || /^\d/.test(r) ? e.push("'" + r + "'") : e.push(r)
                    }
                    return e.join(",")
                }

                function A(t) {
                    return t.a + t.f
                }

                function x(t) {
                    var e = "normal";
                    return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
                }

                function O(t) {
                    var e = 4,
                        n = "n",
                        r = null;
                    return t && ((r = t.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()), (r = t.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? e = 7 : /[1-9]00/.test(r[1]) && (e = parseInt(r[1].substr(0, 1), 10)))), n + e
                }

                function R(t, e) {
                    this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new w("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
                }

                function N(t) {
                    if (t.g) {
                        var e = d(t.f, t.a.c("wf", "active")),
                            n = [],
                            r = [t.a.c("wf", "loading")];
                        e || n.push(t.a.c("wf", "inactive")), p(t.f, n, r)
                    }
                    S(t, "inactive")
                }

                function S(t, e, n) {
                    t.j && t.h[e] && (n ? t.h[e](n.c, A(n)) : t.h[e]())
                }

                function C() {
                    this.c = {}
                }

                function P(t, e) {
                    this.c = t, this.f = e, this.a = l(this.c, "span", {
                        "aria-hidden": "true"
                    }, this.f)
                }

                function L(t) {
                    f(t.c, "body", t.a)
                }

                function j(t) {
                    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + T(t.c) + ";font-style:" + x(t) + ";font-weight:" + t.f + "00;"
                }

                function I(t, e, n, r, o, i) {
                    this.g = t, this.j = e, this.a = r, this.c = n, this.f = o || 3e3, this.h = i || void 0
                }

                function k(t, e, n, r, o, i, s) {
                    this.v = t, this.B = e, this.c = n, this.a = r, this.s = s || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = i || null, this.m = this.j = this.h = this.g = null, this.g = new P(this.c, this.s), this.h = new P(this.c, this.s), this.j = new P(this.c, this.s), this.m = new P(this.c, this.s), t = j(t = new _(this.a.c + ",serif", A(this.a))), this.g.a.style.cssText = t, t = j(t = new _(this.a.c + ",sans-serif", A(this.a))), this.h.a.style.cssText = t, t = j(t = new _("serif", A(this.a))), this.j.a.style.cssText = t, t = j(t = new _("sans-serif", A(this.a))), this.m.a.style.cssText = t, L(this.g), L(this.h), L(this.j), L(this.m)
                }
                w.prototype.c = function(t) {
                    for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                    return e.join(this.a)
                }, I.prototype.start = function() {
                    var t = this.c.o.document,
                        e = this,
                        n = a(),
                        r = new Promise((function(r, o) {
                            ! function i() {
                                a() - n >= e.f ? o() : t.fonts.load(function(t) {
                                    return x(t) + " " + t.f + "00 300px " + T(t.c)
                                }(e.a), e.h).then((function(t) {
                                    1 <= t.length ? r() : setTimeout(i, 25)
                                }), (function() {
                                    o()
                                }))
                            }()
                        })),
                        o = null,
                        i = new Promise((function(t, n) {
                            o = setTimeout(n, e.f)
                        }));
                    Promise.race([i, r]).then((function() {
                        o && (clearTimeout(o), o = null), e.g(e.a)
                    }), (function() {
                        e.j(e.a)
                    }))
                };
                var B = {
                        D: "serif",
                        C: "sans-serif"
                    },
                    M = null;

                function D() {
                    if (null === M) {
                        var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        M = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
                    }
                    return M
                }

                function F(t, e, n) {
                    for (var r in B)
                        if (B.hasOwnProperty(r) && e === t.f[B[r]] && n === t.f[B[r]]) return !0;
                    return !1
                }

                function U(t) {
                    var e, n = t.g.a.offsetWidth,
                        r = t.h.a.offsetWidth;
                    (e = n === t.f.serif && r === t.f["sans-serif"]) || (e = D() && F(t, n, r)), e ? a() - t.A >= t.w ? D() && F(t, n, r) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? H(t, t.v) : H(t, t.B) : function(t) {
                        setTimeout(s((function() {
                            U(this)
                        }), t), 50)
                    }(t) : H(t, t.v)
                }

                function H(t, e) {
                    setTimeout(s((function() {
                        h(this.g.a), h(this.h.a), h(this.j.a), h(this.m.a), e(this.a)
                    }), t), 0)
                }

                function G(t, e, n) {
                    this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = n
                }
                k.prototype.start = function() {
                    this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = a(), U(this)
                };
                var V = null;

                function q(t) {
                    0 == --t.f && t.j && (t.m ? ((t = t.a).g && p(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), S(t, "active")) : N(t.a))
                }

                function z(t) {
                    this.j = t, this.a = new C, this.h = 0, this.f = this.g = !0
                }

                function X(t, e, n, r, o) {
                    var i = 0 == --t.h;
                    (t.f || t.g) && setTimeout((function() {
                        var t = o || null,
                            a = r || {};
                        if (0 === n.length && i) N(e.a);
                        else {
                            e.f += n.length, i && (e.j = i);
                            var u, c = [];
                            for (u = 0; u < n.length; u++) {
                                var l = n[u],
                                    f = a[l.c],
                                    h = e.a,
                                    d = l;
                                if (h.g && p(h.f, [h.a.c("wf", d.c, A(d).toString(), "loading")]), S(h, "fontloading", d), h = null, null === V)
                                    if (window.FontFace) {
                                        d = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                        var v = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                        V = d ? 42 < parseInt(d[1], 10) : !v
                                    } else V = !1;
                                h = V ? new I(s(e.g, e), s(e.h, e), e.c, l, e.s, f) : new k(s(e.g, e), s(e.h, e), e.c, l, e.s, t, f), c.push(h)
                            }
                            for (u = 0; u < c.length; u++) c[u].start()
                        }
                    }), 0)
                }

                function W(t, e) {
                    this.c = t, this.a = e
                }

                function K(t, e) {
                    this.c = t, this.a = e
                }

                function Y(t, e) {
                    this.c = t || $, this.a = [], this.f = [], this.g = e || ""
                }
                G.prototype.g = function(t) {
                    var e = this.a;
                    e.g && p(e.f, [e.a.c("wf", t.c, A(t).toString(), "active")], [e.a.c("wf", t.c, A(t).toString(), "loading"), e.a.c("wf", t.c, A(t).toString(), "inactive")]), S(e, "fontactive", t), this.m = !0, q(this)
                }, G.prototype.h = function(t) {
                    var e = this.a;
                    if (e.g) {
                        var n = d(e.f, e.a.c("wf", t.c, A(t).toString(), "active")),
                            r = [],
                            o = [e.a.c("wf", t.c, A(t).toString(), "loading")];
                        n || r.push(e.a.c("wf", t.c, A(t).toString(), "inactive")), p(e.f, r, o)
                    }
                    S(e, "fontinactive", t), q(this)
                }, z.prototype.load = function(t) {
                    this.c = new u(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes,
                        function(t, e, n) {
                            var r = [],
                                o = n.timeout;
                            ! function(t) {
                                t.g && p(t.f, [t.a.c("wf", "loading")]), S(t, "loading")
                            }(e);
                            r = function(t, e, n) {
                                var r, o = [];
                                for (r in e)
                                    if (e.hasOwnProperty(r)) {
                                        var i = t.c[r];
                                        i && o.push(i(e[r], n))
                                    }
                                return o
                            }(t.a, n, t.c);
                            var i = new G(t.c, e, o);
                            for (t.h = r.length, e = 0, n = r.length; e < n; e++) r[e].load((function(e, n, r) {
                                X(t, i, e, n, r)
                            }))
                        }(this, new R(this.c, t), t)
                }, W.prototype.load = function(t) {
                    function e() {
                        if (i["__mti_fntLst" + r]) {
                            var n, o = i["__mti_fntLst" + r](),
                                s = [];
                            if (o)
                                for (var a = 0; a < o.length; a++) {
                                    var u = o[a].fontfamily;
                                    null != o[a].fontStyle && null != o[a].fontWeight ? (n = o[a].fontStyle + o[a].fontWeight, s.push(new _(u, n))) : s.push(new _(u))
                                }
                            t(s)
                        } else setTimeout((function() {
                            e()
                        }), 50)
                    }
                    var n = this,
                        r = n.a.projectId,
                        o = n.a.version;
                    if (r) {
                        var i = n.c.o;
                        y(this.c, (n.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (o ? "?v=" + o : ""), (function(o) {
                            o ? t([]) : (i["__MonotypeConfiguration__" + r] = function() {
                                return n.a
                            }, e())
                        })).id = "__MonotypeAPIScript__" + r
                    } else t([])
                }, K.prototype.load = function(t) {
                    var e, n, r = this.a.urls || [],
                        o = this.a.families || [],
                        i = this.a.testStrings || {},
                        s = new m;
                    for (e = 0, n = r.length; e < n; e++) v(this.c, r[e], b(s));
                    var a = [];
                    for (e = 0, n = o.length; e < n; e++)
                        if ((r = o[e].split(":"))[1])
                            for (var u = r[1].split(","), c = 0; c < u.length; c += 1) a.push(new _(r[0], u[c]));
                        else a.push(new _(r[0]));
                    g(s, (function() {
                        t(a, i)
                    }))
                };
                var $ = "https://fonts.googleapis.com/css";

                function Z(t) {
                    this.f = t, this.a = [], this.c = {}
                }
                var J = {
                        latin: "BESbswy",
                        "latin-ext": "çöüğş",
                        cyrillic: "йяЖ",
                        greek: "αβΣ",
                        khmer: "កខគ",
                        Hanuman: "កខគ"
                    },
                    Q = {
                        thin: "1",
                        extralight: "2",
                        "extra-light": "2",
                        ultralight: "2",
                        "ultra-light": "2",
                        light: "3",
                        regular: "4",
                        book: "4",
                        medium: "5",
                        "semi-bold": "6",
                        semibold: "6",
                        "demi-bold": "6",
                        demibold: "6",
                        bold: "7",
                        "extra-bold": "8",
                        extrabold: "8",
                        "ultra-bold": "8",
                        ultrabold: "8",
                        black: "9",
                        heavy: "9",
                        l: "3",
                        r: "4",
                        b: "7"
                    },
                    tt = {
                        i: "i",
                        italic: "i",
                        n: "n",
                        normal: "n"
                    },
                    et = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

                function nt(t, e) {
                    this.c = t, this.a = e
                }
                var rt = {
                    Arimo: !0,
                    Cousine: !0,
                    Tinos: !0
                };

                function ot(t, e) {
                    this.c = t, this.a = e
                }

                function it(t, e) {
                    this.c = t, this.f = e, this.a = []
                }
                nt.prototype.load = function(t) {
                    var e = new m,
                        n = this.c,
                        r = new Y(this.a.api, this.a.text),
                        o = this.a.families;
                    ! function(t, e) {
                        for (var n = e.length, r = 0; r < n; r++) {
                            var o = e[r].split(":");
                            3 == o.length && t.f.push(o.pop());
                            var i = "";
                            2 == o.length && "" != o[1] && (i = ":"), t.a.push(o.join(i))
                        }
                    }(r, o);
                    var i = new Z(o);
                    ! function(t) {
                        for (var e = t.f.length, n = 0; n < e; n++) {
                            var r = t.f[n].split(":"),
                                o = r[0].replace(/\+/g, " "),
                                i = ["n4"];
                            if (2 <= r.length) {
                                var s;
                                if (s = [], a = r[1])
                                    for (var a, u = (a = a.split(",")).length, c = 0; c < u; c++) {
                                        var l;
                                        if ((l = a[c]).match(/^[\w-]+$/))
                                            if (null == (f = et.exec(l.toLowerCase()))) l = "";
                                            else {
                                                if (l = null == (l = f[2]) || "" == l ? "n" : tt[l], null == (f = f[1]) || "" == f) f = "4";
                                                else var f = Q[f] || (isNaN(f) ? "4" : f.substr(0, 1));
                                                l = [l, f].join("")
                                            }
                                        else l = "";
                                        l && s.push(l)
                                    }
                                0 < s.length && (i = s), 3 == r.length && (s = [], 0 < (r = (r = r[2]) ? r.split(",") : s).length && (r = J[r[0]]) && (t.c[o] = r))
                            }
                            for (t.c[o] || (r = J[o]) && (t.c[o] = r), r = 0; r < i.length; r += 1) t.a.push(new _(o, i[r]))
                        }
                    }(i), v(n, function(t) {
                        if (0 == t.a.length) throw Error("No fonts to load!");
                        if (-1 != t.c.indexOf("kit=")) return t.c;
                        for (var e = t.a.length, n = [], r = 0; r < e; r++) n.push(t.a[r].replace(/ /g, "+"));
                        return e = t.c + "?family=" + n.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
                    }(r), b(e)), g(e, (function() {
                        t(i.a, i.c, rt)
                    }))
                }, ot.prototype.load = function(t) {
                    var e = this.a.id,
                        n = this.c.o;
                    e ? y(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", (function(e) {
                        if (e) t([]);
                        else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                            e = n.Typekit.config.fn;
                            for (var r = [], o = 0; o < e.length; o += 2)
                                for (var i = e[o], s = e[o + 1], a = 0; a < s.length; a++) r.push(new _(i, s[a]));
                            try {
                                n.Typekit.load({
                                    events: !1,
                                    classes: !1,
                                    async: !0
                                })
                            } catch (u) {}
                            t(r)
                        }
                    }), 2e3) : t([])
                }, it.prototype.load = function(t) {
                    var e = this.f.id,
                        n = this.c.o,
                        r = this;
                    e ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[e] = function(e, n) {
                        for (var o = 0, i = n.fonts.length; o < i; ++o) {
                            var s = n.fonts[o];
                            r.a.push(new _(s.name, O("font-weight:" + s.weight + ";font-style:" + s.style)))
                        }
                        t(r.a)
                    }, y(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(t) {
                        return t.o.location.hostname || t.a.location.hostname
                    }(this.c) + "/" + e + ".js", (function(e) {
                        e && t([])
                    }))) : t([])
                };
                var st = new z(window);
                st.a.c.custom = function(t, e) {
                    return new K(e, t)
                }, st.a.c.fontdeck = function(t, e) {
                    return new it(e, t)
                }, st.a.c.monotype = function(t, e) {
                    return new W(e, t)
                }, st.a.c.typekit = function(t, e) {
                    return new ot(e, t)
                }, st.a.c.google = function(t, e) {
                    return new nt(e, t)
                };
                var at = {
                    load: s(st.load, st)
                };
                void 0 === (r = function() {
                    return at
                }.call(e, n, e, t)) || (t.exports = r)
            }()
        },
        206928: (t, e, n) => {
            "use strict";
            n.d(e, {
                Aj: () => A,
                Sx: () => h,
                Z8: () => g,
                _y: () => v,
                eG: () => u,
                iB: () => P,
                tB: () => w,
                uP: () => _
            });
            var r = n(400770),
                o = function() {};

            function i(t, e) {
                void 0 === e && (e = "Illegal state"), t || function(t) {
                    throw new Error("[mobx-utils] " + t)
                }(e)
            }
            var s = function(t) {
                    return t && t !== Object.prototype && Object.getOwnPropertyNames(t).concat(s(Object.getPrototypeOf(t)) || [])
                },
                a = function(t) {
                    return function(t) {
                        var e = s(t);
                        return e.filter((function(t, n) {
                            return e.indexOf(t) === n
                        }))
                    }(t).filter((function(t) {
                        return "constructor" !== t && !~t.indexOf("__")
                    }))
                },
                u = "pending",
                c = "fulfilled",
                l = "rejected";

            function f(t) {
                switch (this.state) {
                    case u:
                        return t.pending && t.pending(this.value);
                    case l:
                        return t.rejected && t.rejected(this.value);
                    case c:
                        return t.fulfilled ? t.fulfilled(this.value) : this.value
                }
            }

            function h(t, e) {
                if (i(arguments.length <= 2, "fromPromise expects up to two arguments"), i("function" == typeof t || "object" == typeof t && t && "function" == typeof t.then, "Please pass a promise or function to fromPromise"), !0 === t.isPromiseBasedObservable) return t;
                "function" == typeof t && (t = new Promise(t));
                var n = t;
                t.then((0, r.action)("observableFromPromise-resolve", (function(t) {
                    n.value = t, n.state = c
                })), (0, r.action)("observableFromPromise-reject", (function(t) {
                    n.value = t, n.state = l
                }))), n.isPromiseBasedObservable = !0, n.case = f;
                var o = !e || e.state !== c && e.state !== u ? void 0 : e.value;
                return (0, r.extendObservable)(n, {
                    value: o,
                    state: u
                }, {}, {
                    deep: !1
                }), n
            }! function(t) {
                t.reject = (0, r.action)("fromPromise.reject", (function(e) {
                    var n = t(Promise.reject(e));
                    return n.state = l, n.value = e, n
                })), t.resolve = (0, r.action)("fromPromise.resolve", (function(e) {
                    void 0 === e && (e = void 0);
                    var n = t(Promise.resolve(e));
                    return n.state = c, n.value = e, n
                }))
            }(h || (h = {}));

            function p(t, e, n) {
                void 0 === e && (e = o), void 0 === n && (n = void 0);
                var s = !1,
                    a = !1,
                    u = n,
                    c = function() {
                        s && (s = !1, e())
                    },
                    l = (0, r.createAtom)("ResourceBasedObservable", (function() {
                        i(!s && !a), s = !0, t((function(t) {
                            (0, r._allowStateChanges)(!0, (function() {
                                u = t, l.reportChanged()
                            }))
                        }))
                    }), c);
                return {
                    current: function() {
                        return i(!a, "subscribingObservable has already been disposed"), l.reportObserved() || s || console.warn("Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started"), u
                    },
                    dispose: function() {
                        a = !0, c()
                    },
                    isAlive: function() {
                        return s
                    }
                }
            }
            var d = function(t, e, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                else
                    for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
                return i > 3 && s && Object.defineProperty(e, n, s), s
            };

            function v(t, e) {
                var n;
                void 0 === e && (e = !1);
                var o = (0, r.computed)(t);
                return (n = {
                    subscribe: function(t) {
                        return "function" == typeof t ? {
                            unsubscribe: (0, r.observe)(o, (function(e) {
                                var n = e.newValue;
                                return t(n)
                            }), e)
                        } : t && "object" == typeof t && t.next ? {
                            unsubscribe: (0, r.observe)(o, (function(e) {
                                var n = e.newValue;
                                return t.next(n)
                            }), e)
                        } : {
                            unsubscribe: function() {}
                        }
                    }
                })["function" == typeof Symbol && Symbol.observable || "@@observable"] = function() {
                    return this
                }, n
            }! function() {
                function t(t, e) {
                    var n = this;
                    Object.defineProperty(this, "current", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "subscription", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), (0, r.makeObservable)(this), (0, r.runInAction)((function() {
                        n.current = e, n.subscription = t.subscribe(n)
                    }))
                }
                Object.defineProperty(t.prototype, "dispose", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        this.subscription && this.subscription.unsubscribe()
                    }
                }), Object.defineProperty(t.prototype, "next", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function(t) {
                        this.current = t
                    }
                }), Object.defineProperty(t.prototype, "complete", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        this.dispose()
                    }
                }), Object.defineProperty(t.prototype, "error", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function(t) {
                        this.current = t, this.dispose()
                    }
                }), d([r.observable.ref], t.prototype, "current", void 0), d([r.action.bound], t.prototype, "next", null), d([r.action.bound], t.prototype, "complete", null), d([r.action.bound], t.prototype, "error", null)
            }();
            var y = function() {
                    return y = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, y.apply(this, arguments)
                },
                m = function(t, e, n, r) {
                    var o, i = arguments.length,
                        s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
                    return i > 3 && s && Object.defineProperty(e, n, s), s
                },
                b = ["model", "reset", "submit", "isDirty", "isPropertyDirty", "resetProperty"];
            ! function() {
                function t(t) {
                    var e = this;
                    Object.defineProperty(this, "model", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    }), Object.defineProperty(this, "localValues", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r.observable.map({})
                    }), Object.defineProperty(this, "localComputedValues", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r.observable.map({})
                    }), Object.defineProperty(this, "isPropertyDirty", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            return e.localValues.has(t)
                        }
                    }), (0, r.makeObservable)(this), i((0, r.isObservableObject)(t), "createViewModel expects an observable object");
                    var n = a(this);
                    a(t).forEach((function(o) {
                        var s;
                        if (!n.includes(o) && o !== r.$mobx && "__mobxDidRunLazyInitializers" !== o) {
                            if (i(-1 === b.indexOf(o), "The propertyname " + o + " is reserved and cannot be used with viewModels"), (0, r.isComputedProp)(t, o)) {
                                var a = (0, r._getAdministration)(t, o),
                                    u = a.derivation.bind(e),
                                    c = null === (s = a.setter_) || void 0 === s ? void 0 : s.bind(e);
                                e.localComputedValues.set(o, (0, r.computed)(u, {
                                    set: c
                                }))
                            }
                            var l = Object.getOwnPropertyDescriptor(t, o),
                                f = l ? {
                                    enumerable: l.enumerable
                                } : {};
                            Object.defineProperty(e, o, y(y({}, f), {
                                configurable: !0,
                                get: function() {
                                    return (0, r.isComputedProp)(t, o) ? e.localComputedValues.get(o).get() : e.isPropertyDirty(o) ? e.localValues.get(o) : e.model[o]
                                },
                                set: (0, r.action)((function(n) {
                                    (0, r.isComputedProp)(t, o) ? e.localComputedValues.get(o).set(n): n !== e.model[o] ? e.localValues.set(o, n) : e.localValues.delete(o)
                                }))
                            }))
                        }
                    }))
                }
                Object.defineProperty(t.prototype, "isDirty", {
                    get: function() {
                        return this.localValues.size > 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "changedValues", {
                    get: function() {
                        return new Map(this.localValues)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "submit", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        var t = this;
                        (0, r.keys)(this.localValues).forEach((function(e) {
                            var n = t.localValues.get(e),
                                o = t.model[e];
                            (0, r.isObservableArray)(o) ? o.replace(n): (0, r.isObservableMap)(o) ? (o.clear(), o.merge(n)) : (0, r.isComputed)(n) || (t.model[e] = n)
                        })), this.localValues.clear()
                    }
                }), Object.defineProperty(t.prototype, "reset", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        this.localValues.clear()
                    }
                }), Object.defineProperty(t.prototype, "resetProperty", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function(t) {
                        this.localValues.delete(t)
                    }
                }), m([r.computed], t.prototype, "isDirty", null), m([r.computed], t.prototype, "changedValues", null), m([r.action.bound], t.prototype, "submit", null), m([r.action.bound], t.prototype, "reset", null), m([r.action.bound], t.prototype, "resetProperty", null)
            }();

            function g(t, e) {
                var n = (0, r.getAtom)(t, e);
                if (!n) throw new Error("No computed provided, please provide an object created with `computed(() => expr)` or an object + property name");
                return (0, r.observe)(n, (function() {}))
            }
            var E = {};

            function w(t) {
                return void 0 === t && (t = 1e3), (0, r._isComputingDerivation)() ? (E[t] || (E[t] = "number" == typeof t ? function(t) {
                    var e;
                    return p((function(n) {
                        n(Date.now()), e = setInterval((function() {
                            return n(Date.now())
                        }), t)
                    }), (function() {
                        clearInterval(e)
                    }), Date.now())
                }(t) : e = p((function(t) {
                    function n() {
                        window.requestAnimationFrame((function() {
                            t(Date.now()), e.isAlive() && n()
                        }))
                    }
                    t(Date.now()), n()
                }), (function() {}), Date.now())), E[t].current()) : Date.now();
                var e
            }

            function _(t) {
                return (0, r._isComputingDerivation)() || console.warn("'expr' should only be used inside other reactive functions."), (0, r.computed)(t).get()
            }
            var T = function() {
                return T = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, T.apply(this, arguments)
            };

            function A(t, e) {
                i("function" == typeof t && t.length < 2, "createTransformer expects a function that accepts one argument");
                var n = new Map,
                    o = function(t) {
                        return "object" == typeof t ? t : "function" == typeof t ? {
                            onCleanup: t
                        } : {}
                    }(e),
                    s = o.debugNameGenerator,
                    a = o.keepAlive,
                    u = o.onCleanup;
                var c = !1;
                return function(e) {
                    var i;
                    ! function(t) {
                        var e = typeof t;
                        if (null === t || "object" !== e && "function" !== e && "string" !== e && "number" !== e) throw new Error("[mobx-utils] transform expected an object, function, string or number, got: " + String(t))
                    }(e);
                    var l = n.get(e);
                    if (l) return l.get();
                    if (!a && !(0, r._isComputingDerivation)()) {
                        !c && (null !== (i = o.requiresReaction) && void 0 !== i ? i : (0, r._getGlobalState)().computedRequiresReaction) && (console.warn("Invoking a transformer from outside a reactive context won't be memoized and is cleaned up immediately, unless keepAlive is set."), c = !0);
                        var f = t(e);
                        return u && u(f, e), f
                    }
                    return l = function(e) {
                        var i, c = typeof e,
                            l = s ? s(e) : "Transformer-" + t.name + "-" + ("string" === c || "number" === c ? e : "object"),
                            f = (0, r.computed)((function() {
                                return i = t(e)
                            }), T(T({}, o), {
                                name: l
                            }));
                        if (!a) var h = (0, r.onBecomeUnobserved)(f, (function() {
                            n.delete(e), h(), u && u(i, e)
                        }));
                        return f
                    }(e), n.set(e, l), l.get()
                }
            }
            var x, O = (x = function(t, e) {
                    return x = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }, x(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    x(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                R = (function(t) {
                    function e(e, n, o) {
                        var i = void 0 === o ? {} : o,
                            s = i.name,
                            a = void 0 === s ? "ogm" + (1e3 * Math.random() | 0) : s,
                            u = i.keyToName,
                            c = void 0 === u ? function(t) {
                                return "" + t
                            } : u,
                            l = t.call(this) || this;
                        Object.defineProperty(l, "_base", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(l, "_ogmInfoKey", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(l, "_groupBy", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(l, "_keyToName", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(l, "_disposeBaseObserver", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), l._keyToName = c, l._groupBy = n, l._ogmInfoKey = Symbol("ogmInfo" + a), l._base = e;
                        for (var f = 0; f < e.length; f++) l._addItem(e[f]);
                        return l._disposeBaseObserver = (0, r.observe)(l._base, (function(t) {
                            if ("splice" === t.type)(0, r.transaction)((function() {
                                for (var e = 0, n = t.removed; e < n.length; e++) {
                                    var r = n[e];
                                    l._removeItem(r)
                                }
                                for (var o = 0, i = t.added; o < i.length; o++) {
                                    var s = i[o];
                                    l._addItem(s)
                                }
                            }));
                            else {
                                if ("update" !== t.type) throw new Error("illegal state");
                                (0, r.transaction)((function() {
                                    l._removeItem(t.oldValue), l._addItem(t.newValue)
                                }))
                            }
                        })), l
                    }
                    O(e, t), Object.defineProperty(e.prototype, "clear", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            throw new Error("not supported")
                        }
                    }), Object.defineProperty(e.prototype, "delete", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            throw new Error("not supported")
                        }
                    }), Object.defineProperty(e.prototype, "set", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t, e) {
                            throw new Error("not supported")
                        }
                    }), Object.defineProperty(e.prototype, "dispose", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            this._disposeBaseObserver();
                            for (var t = 0; t < this._base.length; t++) {
                                var e = this._base[t];
                                e[this._ogmInfoKey].reaction(), delete e[this._ogmInfoKey]
                            }
                        }
                    }), Object.defineProperty(e.prototype, "_getGroupArr", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(e) {
                            var n = t.prototype.get.call(this, e);
                            return void 0 === n && (n = (0, r.observable)([], {
                                name: "GroupArray[" + this._keyToName(e) + "]",
                                deep: !1
                            }), t.prototype.set.call(this, e, n)), n
                        }
                    }), Object.defineProperty(e.prototype, "_removeFromGroupArr", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(e, n) {
                            var r = t.prototype.get.call(this, e);
                            1 === r.length ? t.prototype.delete.call(this, e) : (n === r.length - 1 || (r[n] = r[r.length - 1], r[n][this._ogmInfoKey].groupArrIndex = n), r.length--)
                        }
                    }), Object.defineProperty(e.prototype, "_addItem", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            var e = this,
                                n = this._groupBy(t),
                                o = this._getGroupArr(n),
                                i = {
                                    groupByValue: n,
                                    groupArrIndex: o.length,
                                    reaction: (0, r.reaction)((function() {
                                        return e._groupBy(t)
                                    }), (function(n, r) {
                                        var o = t[e._ogmInfoKey];
                                        e._removeFromGroupArr(o.groupByValue, o.groupArrIndex);
                                        var i = e._getGroupArr(n),
                                            s = i.length;
                                        i.push(t), o.groupByValue = n, o.groupArrIndex = s
                                    }))
                                };
                            Object.defineProperty(t, this._ogmInfoKey, {
                                configurable: !0,
                                enumerable: !1,
                                value: i
                            }), o.push(t)
                        }
                    }), Object.defineProperty(e.prototype, "_removeItem", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            var e = t[this._ogmInfoKey];
                            this._removeFromGroupArr(e.groupByValue, e.groupArrIndex), e.reaction(), delete t[this._ogmInfoKey]
                        }
                    })
                }(r.ObservableMap), function() {
                    function t(t, e, n, r) {
                        Object.defineProperty(this, "base", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        }), Object.defineProperty(this, "args", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        }), Object.defineProperty(this, "version", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        }), Object.defineProperty(this, "versionChecker", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: r
                        }), Object.defineProperty(this, "root", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "closest", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "closestIdx", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: 0
                        });
                        for (var o = this.closest = this.root = t, i = 0; i < this.args.length - 1 && (o = o.get(e[i])); i++) this.closest = o;
                        this.closestIdx = i
                    }
                    return Object.defineProperty(t.prototype, "exists", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            this.assertCurrentVersion();
                            var t = this.args.length;
                            return this.closestIdx >= t - 1 && this.closest.has(this.args[t - 1])
                        }
                    }), Object.defineProperty(t.prototype, "get", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            if (this.assertCurrentVersion(), !this.exists()) throw new Error("Entry doesn't exist");
                            return this.closest.get(this.args[this.args.length - 1])
                        }
                    }), Object.defineProperty(t.prototype, "set", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            this.assertCurrentVersion();
                            for (var e = this.args.length, n = this.closest, r = this.closestIdx; r < e - 1; r++) {
                                var o = new Map;
                                n.set(this.args[r], o), n = o
                            }
                            this.closestIdx = e - 1, this.closest = n, n.set(this.args[e - 1], t)
                        }
                    }), Object.defineProperty(t.prototype, "delete", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            if (this.assertCurrentVersion(), !this.exists()) throw new Error("Entry doesn't exist");
                            var t = this.args.length;
                            this.closest.delete(this.args[t - 1]);
                            for (var e = this.root, n = [e], r = 0; r < t - 1; r++) e = e.get(this.args[r]), n.push(e);
                            for (r = n.length - 1; r > 0; r--) 0 === n[r].size && n[r - 1].delete(this.args[r - 1])
                        }
                    }), Object.defineProperty(t.prototype, "assertCurrentVersion", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            if (!this.versionChecker(this.version)) throw new Error("Concurrent modification exception")
                        }
                    }), t
                }()),
                N = function() {
                    function t() {
                        var t = this;
                        Object.defineProperty(this, "store", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Map
                        }), Object.defineProperty(this, "argsLength", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: -1
                        }), Object.defineProperty(this, "currentVersion", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: 0
                        }), Object.defineProperty(this, "checkVersion", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function(e) {
                                return t.currentVersion === e
                            }
                        })
                    }
                    return Object.defineProperty(t.prototype, "entry", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            if (-1 === this.argsLength) this.argsLength = t.length;
                            else if (this.argsLength !== t.length) throw new Error("DeepMap should be used with functions with a consistent length, expected: " + this.argsLength + ", got: " + t.length);
                            return this.currentVersion >= Number.MAX_SAFE_INTEGER && (this.currentVersion = 0), this.currentVersion++, new R(this.store, t, this.currentVersion, this.checkVersion)
                        }
                    }), t
                }(),
                S = function() {
                    return S = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, S.apply(this, arguments)
                },
                C = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        o = 0;
                    for (e = 0; e < n; e++)
                        for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                    return r
                };

            function P(t, e) {
                if (void 0 === e && (e = !1), (0, r.isAction)(t)) throw new Error("computedFn shouldn't be used on actions");
                var n = !1,
                    o = 0,
                    i = "boolean" == typeof e ? {
                        keepAlive: e
                    } : e,
                    s = new N;
                return function() {
                    for (var e, a = this, u = [], c = 0; c < arguments.length; c++) u[c] = arguments[c];
                    var l, f = s.entry(u);
                    if (f.exists()) return f.get().get();
                    if (!i.keepAlive && !(0, r._isComputingDerivation)()) {
                        !n && (null !== (e = i.requiresReaction) && void 0 !== e ? e : (0, r._getGlobalState)().computedRequiresReaction) && (console.warn("Invoking a computedFn from outside a reactive context won't be memoized and is cleaned up immediately, unless keepAlive is set."), n = !0);
                        var h = t.apply(this, u);
                        return i.onCleanup && i.onCleanup.apply(i, C([h], u)), h
                    }
                    var p = (0, r.computed)((function() {
                        return l = t.apply(a, u)
                    }), S(S({}, i), {
                        name: "computedFn(" + (i.name || t.name) + "#" + ++o + ")"
                    }));
                    return f.set(p), i.keepAlive || (0, r.onBecomeUnobserved)(p, (function() {
                        s.entry(u).delete(), i.onCleanup && i.onCleanup.apply(i, C([l], u)), l = void 0
                    })), p.get()
                }
            }
        },
        208463: (t, e) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var t = "", e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        n && (t = s(t, i(n)))
                    }
                    return t
                }

                function i(t) {
                    if ("string" == typeof t || "number" == typeof t) return t;
                    if ("object" != typeof t) return "";
                    if (Array.isArray(t)) return o.apply(null, t);
                    if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                    var e = "";
                    for (var n in t) r.call(t, n) && t[n] && (e = s(e, n));
                    return e
                }

                function s(t, e) {
                    return e ? t ? t + " " + e : t + e : t
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() {
                    return o
                }.apply(e, [])) || (t.exports = n)
            }()
        },
        211794: (t, e, n) => {
            "use strict";

            function r() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            n.d(e, {
                lJ: () => o
            });
            var o = r()
        },
        212943: (t, e, n) => {
            "use strict";
            n.d(e, {
                H: () => s
            });
            var r = n(226260),
                o = n(664191),
                i = n(502678);

            function s(t, e) {
                return e ? (0, i.c)(t, e) : t instanceof r.c ? t : new r.c((0, o.i)(t))
            }
        },
        213427: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => a
            });
            var r = n(226260),
                o = n(453535),
                i = n(290676),
                s = n(550742);

            function a() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = Number.POSITIVE_INFINITY,
                    a = null,
                    u = t[t.length - 1];
                return (0, o.m)(u) ? (a = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof u && (n = t.pop()), null === a && 1 === t.length && t[0] instanceof r.c ? t[0] : (0, i.U)(n)((0, s.c)(t, a))
            }
        },
        218651: (t, e, n) => {
            "use strict";
            n.d(e, {
                v: () => i
            });
            var r = n(998083),
                o = n(335679);

            function i(t, e) {
                return void 0 === e && (e = !1),
                    function(n) {
                        return n.lift(new s(t, e))
                    }
            }
            var s = function() {
                    function t(t, e) {
                        this.predicate = t, this.inclusive = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.predicate, this.inclusive))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.inclusive = r, o.index = 0, o
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        var e, n = this.destination;
                        try {
                            e = this.predicate(t, this.index++)
                        } catch (r) {
                            return void n.error(r)
                        }
                        this.nextOrComplete(t, e)
                    }, e.prototype.nextOrComplete = function(t, e) {
                        var n = this.destination;
                        Boolean(e) ? n.next(t) : (this.inclusive && n.next(t), n.complete())
                    }, e
                }(o.v)
        },
        226260: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => u
            });
            var r = n(179210),
                o = n(248203),
                i = n(977305),
                s = n(228120),
                a = n(558279),
                u = function() {
                    function t(t) {
                        this._isScalar = !1, t && (this._subscribe = t)
                    }
                    return t.prototype.lift = function(e) {
                        var n = new t;
                        return n.source = this, n.operator = e, n
                    }, t.prototype.subscribe = function(t, e, n) {
                        var r = this.operator,
                            i = (0, o.u)(t, e, n);
                        if (r ? i.add(r.call(i, this.source)) : i.add(this.source || a.$.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), a.$.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                        return i
                    }, t.prototype._trySubscribe = function(t) {
                        try {
                            return this._subscribe(t)
                        } catch (e) {
                            a.$.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), (0, r.H)(t) ? t.error(e) : console.warn(e)
                        }
                    }, t.prototype.forEach = function(t, e) {
                        var n = this;
                        return new(e = c(e))((function(e, r) {
                            var o;
                            o = n.subscribe((function(e) {
                                try {
                                    t(e)
                                } catch (n) {
                                    r(n), o && o.unsubscribe()
                                }
                            }), r, e)
                        }))
                    }, t.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e && e.subscribe(t)
                    }, t.prototype[i.s] = function() {
                        return this
                    }, t.prototype.pipe = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return 0 === t.length ? this : (0, s.m)(t)(this)
                    }, t.prototype.toPromise = function(t) {
                        var e = this;
                        return new(t = c(t))((function(t, n) {
                            var r;
                            e.subscribe((function(t) {
                                return r = t
                            }), (function(t) {
                                return n(t)
                            }), (function() {
                                return t(r)
                            }))
                        }))
                    }, t.create = function(e) {
                        return new t(e)
                    }, t
                }();

            function c(t) {
                if (t || (t = a.$.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
        },
        228120: (t, e, n) => {
            "use strict";
            n.d(e, {
                m: () => o
            });
            var r = n(897210);

            function o(t) {
                return 0 === t.length ? r.D : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
        },
        237157: (t, e, n) => {
            "use strict";
            n.d(e, {
                R: () => o
            });
            var r = n(998083),
                o = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e, n) || this;
                        return r.scheduler = e, r.work = n, r.pending = !1, r
                    }
                    return r.C6(e, t), e.prototype.schedule = function(t, e) {
                        if (void 0 === e && (e = 0), this.closed) return this;
                        this.state = t;
                        var n = this.id,
                            r = this.scheduler;
                        return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                    }, e.prototype.requestAsyncId = function(t, e, n) {
                        return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
                    }, e.prototype.recycleAsyncId = function(t, e, n) {
                        if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                        clearInterval(e)
                    }, e.prototype.execute = function(t, e) {
                        if (this.closed) return new Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(t, e);
                        if (n) return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, e.prototype._execute = function(t, e) {
                        var n = !1,
                            r = void 0;
                        try {
                            this.work(t)
                        } catch (o) {
                            n = !0, r = !!o && o || new Error(o)
                        }
                        if (n) return this.unsubscribe(), r
                    }, e.prototype._unsubscribe = function() {
                        var t = this.id,
                            e = this.scheduler,
                            n = e.actions,
                            r = n.indexOf(this);
                        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                    }, e
                }(n(59329).r)
        },
        248203: (t, e, n) => {
            "use strict";
            n.d(e, {
                u: () => s
            });
            var r = n(335679),
                o = n(623276),
                i = n(537727);

            function s(t, e, n) {
                if (t) {
                    if (t instanceof r.v) return t;
                    if (t[o.D]) return t[o.D]()
                }
                return t || e || n ? new r.v(t, e, n) : new r.v(i.I)
            }
        },
        268245: (t, e, n) => {
            "use strict";
            n.d(e, {
                p: () => i
            });
            var r = n(998083),
                o = n(335679);

            function i(t, e) {
                return function(n) {
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.predicate, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.thisArg = r, o.count = 0, o
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e && this.destination.next(t)
                    }, e
                }(o.v)
        },
        269018: (t, e, n) => {
            "use strict";

            function r(t, e, n, o) {
                function i(t, e) {
                    return function(n) {
                        ! function(t, e) {
                            if (t.v) throw new Error("attempted to call " + e + " after decoration was finished")
                        }(e, "addInitializer"), a(n, "An initializer"), t.push(n)
                    }
                }

                function s(t, e, n, r, o, s, a, u, c) {
                    var l;
                    switch (o) {
                        case 1:
                            l = "accessor";
                            break;
                        case 2:
                            l = "method";
                            break;
                        case 3:
                            l = "getter";
                            break;
                        case 4:
                            l = "setter";
                            break;
                        default:
                            l = "field"
                    }
                    var f, h, p = {
                            kind: l,
                            name: a ? "#" + e : e,
                            static: s,
                            private: a,
                            metadata: u
                        },
                        d = {
                            v: !1
                        };
                    p.addInitializer = i(r, d), 0 === o ? a ? (f = n.get, h = n.set) : (f = function() {
                        return this[e]
                    }, h = function(t) {
                        this[e] = t
                    }) : 2 === o ? f = function() {
                        return n.value
                    } : (1 !== o && 3 !== o || (f = function() {
                        return n.get.call(this)
                    }), 1 !== o && 4 !== o || (h = function(t) {
                        n.set.call(this, t)
                    })), p.access = f && h ? {
                        get: f,
                        set: h
                    } : f ? {
                        get: f
                    } : {
                        set: h
                    };
                    try {
                        return t(c, p)
                    } finally {
                        d.v = !0
                    }
                }

                function a(t, e) {
                    if ("function" != typeof t) throw new TypeError(e + " must be a function")
                }

                function u(t, e) {
                    var n = typeof e;
                    if (1 === t) {
                        if ("object" !== n || null === e) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
                        void 0 !== e.get && a(e.get, "accessor.get"), void 0 !== e.set && a(e.set, "accessor.set"), void 0 !== e.init && a(e.init, "accessor.init")
                    } else if ("function" !== n) {
                        var r;
                        throw r = 0 === t ? "field" : 10 === t ? "class" : "method", new TypeError(r + " decorators must return a function or void 0")
                    }
                }

                function c(t, e, n, r, o, i, a, c, l) {
                    var f, h, p, d, v, y, m = n[0];
                    if (a ? f = 0 === o || 1 === o ? {
                            get: n[3],
                            set: n[4]
                        } : 3 === o ? {
                            get: n[3]
                        } : 4 === o ? {
                            set: n[3]
                        } : {
                            value: n[3]
                        } : 0 !== o && (f = Object.getOwnPropertyDescriptor(e, r)), 1 === o ? p = {
                            get: f.get,
                            set: f.set
                        } : 2 === o ? p = f.value : 3 === o ? p = f.get : 4 === o && (p = f.set), "function" == typeof m) void 0 !== (d = s(m, r, f, c, o, i, a, l, p)) && (u(o, d), 0 === o ? h = d : 1 === o ? (h = d.init, v = d.get || p.get, y = d.set || p.set, p = {
                        get: v,
                        set: y
                    }) : p = d);
                    else
                        for (var b = m.length - 1; b >= 0; b--) {
                            var g;
                            if (void 0 !== (d = s(m[b], r, f, c, o, i, a, l, p))) u(o, d), 0 === o ? g = d : 1 === o ? (g = d.init, v = d.get || p.get, y = d.set || p.set, p = {
                                get: v,
                                set: y
                            }) : p = d, void 0 !== g && (void 0 === h ? h = g : "function" == typeof h ? h = [h, g] : h.push(g))
                        }
                    if (0 === o || 1 === o) {
                        if (void 0 === h) h = function(t, e) {
                            return e
                        };
                        else if ("function" != typeof h) {
                            var E = h;
                            h = function(t, e) {
                                for (var n = e, r = 0; r < E.length; r++) n = E[r].call(t, n);
                                return n
                            }
                        } else {
                            var w = h;
                            h = function(t, e) {
                                return w.call(t, e)
                            }
                        }
                        t.push(h)
                    }
                    0 !== o && (1 === o ? (f.get = p.get, f.set = p.set) : 2 === o ? f.value = p : 3 === o ? f.get = p : 4 === o && (f.set = p), a ? 1 === o ? (t.push((function(t, e) {
                        return p.get.call(t, e)
                    })), t.push((function(t, e) {
                        return p.set.call(t, e)
                    }))) : 2 === o ? t.push(p) : t.push((function(t, e) {
                        return p.call(t, e)
                    })) : Object.defineProperty(e, r, f))
                }

                function l(t, e) {
                    e && t.push((function(t) {
                        for (var n = 0; n < e.length; n++) e[n].call(t);
                        return t
                    }))
                }

                function f(t, e) {
                    return Object.defineProperty(t, Symbol.metadata || Symbol.for("Symbol.metadata"), {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    })
                }
                return r = function(t, e, n, r) {
                    if (void 0 !== r) var o = r[Symbol.metadata || Symbol.for("Symbol.metadata")];
                    var s = Object.create(void 0 === o ? null : o),
                        a = function(t, e, n) {
                            for (var r, o, i = [], s = new Map, a = new Map, u = 0; u < e.length; u++) {
                                var f = e[u];
                                if (Array.isArray(f)) {
                                    var h, p, d = f[1],
                                        v = f[2],
                                        y = f.length > 3,
                                        m = d >= 5;
                                    if (m ? (h = t, d -= 5, p = o = o || []) : (h = t.prototype, p = r = r || []), 0 !== d && !y) {
                                        var b = m ? a : s,
                                            g = b.get(v) || 0;
                                        if (!0 === g || 3 === g && 4 !== d || 4 === g && 3 !== d) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + v);
                                        !g && d > 2 ? b.set(v, d) : b.set(v, !0)
                                    }
                                    c(i, h, f, v, d, m, y, p, n)
                                }
                            }
                            return l(i, r), l(i, o), i
                        }(t, e, s);
                    return n.length || f(t, s), {
                        e: a,
                        get c() {
                            return function(t, e, n) {
                                if (e.length > 0) {
                                    for (var r = [], o = t, s = t.name, a = e.length - 1; a >= 0; a--) {
                                        var c = {
                                            v: !1
                                        };
                                        try {
                                            var l = e[a](o, {
                                                kind: "class",
                                                name: s,
                                                addInitializer: i(r, c),
                                                metadata: n
                                            })
                                        } finally {
                                            c.v = !0
                                        }
                                        void 0 !== l && (u(10, l), o = l)
                                    }
                                    return [f(o, n), function() {
                                        for (var t = 0; t < r.length; t++) r[t].call(o)
                                    }]
                                }
                            }(t, n, s)
                        }
                    }
                }, r(t, e, n, o)
            }
            n.d(e, {
                _: () => r
            })
        },
        270713: (t, e, n) => {
            "use strict";
            n.d(e, {
                Ay: () => r
            });
            const r = n(167921).S
        },
        276089: (t, e, n) => {
            "use strict";

            function r(t) {
                return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function o(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function i(t) {
                var e;
                return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function s(t) {
                return t instanceof Node || t instanceof o(t).Node
            }

            function a(t) {
                return t instanceof Element || t instanceof o(t).Element
            }

            function u(t) {
                return t instanceof HTMLElement || t instanceof o(t).HTMLElement
            }

            function c(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof o(t).ShadowRoot)
            }

            function l(t) {
                const {
                    overflow: e,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = y(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o)
            }

            function f(t) {
                return ["table", "td", "th"].includes(r(t))
            }

            function h(t) {
                const e = d(),
                    n = y(t);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
            }

            function p(t) {
                let e = b(t);
                for (; u(e) && !v(e);) {
                    if (h(e)) return e;
                    e = b(e)
                }
                return null
            }

            function d() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function v(t) {
                return ["html", "body", "#document"].includes(r(t))
            }

            function y(t) {
                return o(t).getComputedStyle(t)
            }

            function m(t) {
                return a(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function b(t) {
                if ("html" === r(t)) return t;
                const e = t.assignedSlot || t.parentNode || c(t) && t.host || i(t);
                return c(e) ? e.host : e
            }

            function g(t) {
                const e = b(t);
                return v(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : u(e) && l(e) ? e : g(e)
            }

            function E(t, e, n) {
                var r;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                const i = g(t),
                    s = i === (null == (r = t.ownerDocument) ? void 0 : r.body),
                    a = o(i);
                return s ? e.concat(a, a.visualViewport || [], l(i) ? i : [], a.frameElement && n ? E(a.frameElement) : []) : e.concat(i, E(i, [], n))
            }
            n.d(e, {
                $4: () => b,
                CP: () => m,
                L9: () => y,
                Lv: () => f,
                Ng: () => c,
                Tc: () => d,
                ZU: () => l,
                ep: () => i,
                eu: () => v,
                gJ: () => p,
                mq: () => r,
                sQ: () => h,
                sb: () => u,
                v9: () => E,
                vq: () => a,
                zk: () => o
            })
        },
        277049: (t, e, n) => {
            "use strict";

            function r(t) {
                return t
            }
            n.d(e, {
                _: () => r
            })
        },
        290676: (t, e, n) => {
            "use strict";
            n.d(e, {
                U: () => i
            });
            var r = n(895693),
                o = n(897210);

            function i(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), (0, r.ZZ)(o.D, t)
            }
        },
        291650: (t, e, n) => {
            "use strict";
            n.d(e, {
                I: () => i,
                w: () => o
            });
            var r = n(226260),
                o = new r.c((function(t) {
                    return t.complete()
                }));

            function i(t) {
                return t ? function(t) {
                    return new r.c((function(e) {
                        return t.schedule((function() {
                            return e.complete()
                        }))
                    }))
                }(t) : o
            }
        },
        294462: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => A
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some((function(t, r) {
                            return t[0] === e && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var n = t(this.__entries__, e),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, e.prototype.set = function(e, n) {
                            var r = t(this.__entries__, e);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                        }, e.prototype.delete = function(e) {
                            var n = this.__entries__,
                                r = t(n, e);
                            ~r && n.splice(r, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var o = r[n];
                                t.call(e, o[1], o[0])
                            }
                        }, e
                    }()
                }(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                u = "undefined" != typeof MutationObserver,
                c = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                r = !1,
                                o = 0;

                            function i() {
                                n && (n = !1, t()), r && u()
                            }

                            function a() {
                                s(i)
                            }

                            function u() {
                                var t = Date.now();
                                if (n) {
                                    if (t - o < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(a, e);
                                o = t
                            }
                            return u
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        a.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                l = function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(t, o, {
                            value: e[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                f = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || i
                },
                h = b(0, 0, 0, 0);

            function p(t) {
                return parseFloat(t) || 0
            }

            function d(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function(e, n) {
                    return e + p(t["border-" + n + "-width"])
                }), 0)
            }

            function v(t) {
                var e = t.clientWidth,
                    n = t.clientHeight;
                if (!e && !n) return h;
                var r = f(t).getComputedStyle(t),
                    o = function(t) {
                        for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n],
                                i = t["padding-" + o];
                            e[o] = p(i)
                        }
                        return e
                    }(r),
                    i = o.left + o.right,
                    s = o.top + o.bottom,
                    a = p(r.width),
                    u = p(r.height);
                if ("border-box" === r.boxSizing && (Math.round(a + i) !== e && (a -= d(r, "left", "right") + i), Math.round(u + s) !== n && (u -= d(r, "top", "bottom") + s)), ! function(t) {
                        return t === f(t).document.documentElement
                    }(t)) {
                    var c = Math.round(a + i) - e,
                        l = Math.round(u + s) - n;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
                }
                return b(o.left, o.top, a, u)
            }
            var y = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof f(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof f(t).SVGElement && "function" == typeof t.getBBox
            };

            function m(t) {
                return o ? y(t) ? function(t) {
                    var e = t.getBBox();
                    return b(0, 0, e.width, e.height)
                }(t) : v(t) : h
            }

            function b(t, e, n, r) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }
            }
            var g = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = m(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                E = function(t, e) {
                    var n, r, o, i, s, a, u, c = (r = (n = e).x, o = n.y, i = n.width, s = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u = Object.create(a.prototype), l(u, {
                        x: r,
                        y: o,
                        width: i,
                        height: s,
                        top: o,
                        right: r + i,
                        bottom: s + o,
                        left: r
                    }), u);
                    l(this, {
                        target: t,
                        contentRect: c
                    })
                },
                w = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new E(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                _ = "undefined" != typeof WeakMap ? new WeakMap : new r,
                T = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = c.getInstance(),
                        r = new w(e, n, this);
                    _.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                T.prototype[t] = function() {
                    var e;
                    return (e = _.get(this))[t].apply(e, arguments)
                }
            }));
            const A = void 0 !== i.ResizeObserver ? i.ResizeObserver : T
        },
        316440: (t, e, n) => {
            "use strict";
            n.d(e, {
                s: () => a
            });
            var r = n(998083),
                o = n(335679),
                i = n(936791),
                s = n(291650);

            function a(t) {
                return function(e) {
                    return 0 === t ? (0, s.I)() : e.lift(new u(t))
                }
            }
            var u = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new i.k
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.total))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(o.v)
        },
        316620: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => v,
                m: () => p
            });
            var r = n(897010),
                o = n(165669),
                i = n(710821),
                s = n(845212),
                a = n(484201),
                u = n.n(a),
                c = n(294462),
                l = ["client", "offset", "scroll", "bounds", "margin"];

            function f(t) {
                var e = [];
                return l.forEach((function(n) {
                    t[n] && e.push(n)
                })), e
            }

            function h(t, e) {
                var n = {};
                if (e.indexOf("client") > -1 && (n.client = {
                        top: t.clientTop,
                        left: t.clientLeft,
                        width: t.clientWidth,
                        height: t.clientHeight
                    }), e.indexOf("offset") > -1 && (n.offset = {
                        top: t.offsetTop,
                        left: t.offsetLeft,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }), e.indexOf("scroll") > -1 && (n.scroll = {
                        top: t.scrollTop,
                        left: t.scrollLeft,
                        width: t.scrollWidth,
                        height: t.scrollHeight
                    }), e.indexOf("bounds") > -1) {
                    var r = t.getBoundingClientRect();
                    n.bounds = {
                        top: r.top,
                        right: r.right,
                        bottom: r.bottom,
                        left: r.left,
                        width: r.width,
                        height: r.height
                    }
                }
                if (e.indexOf("margin") > -1) {
                    var o = getComputedStyle(t);
                    n.margin = {
                        top: o ? parseInt(o.marginTop) : 0,
                        right: o ? parseInt(o.marginRight) : 0,
                        bottom: o ? parseInt(o.marginBottom) : 0,
                        left: o ? parseInt(o.marginLeft) : 0
                    }
                }
                return n
            }

            function p(t) {
                return function(e) {
                    var n, a;
                    return a = n = function(n) {
                        function a() {
                            for (var e, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            return (e = n.call.apply(n, [this].concat(o)) || this).state = {
                                contentRect: {
                                    entry: {},
                                    client: {},
                                    offset: {},
                                    scroll: {},
                                    bounds: {},
                                    margin: {}
                                }
                            }, e._animationFrameID = null, e._resizeObserver = null, e._node = null, e._window = null, e.measure = function(n) {
                                var r = h(e._node, t || f(e.props));
                                n && (r.entry = n[0].contentRect), e._animationFrameID = e._window.requestAnimationFrame((function() {
                                    null !== e._resizeObserver && (e.setState({
                                        contentRect: r
                                    }), "function" == typeof e.props.onResize && e.props.onResize(r))
                                }))
                            }, e._handleRef = function(t) {
                                var n;
                                null !== e._resizeObserver && null !== e._node && e._resizeObserver.unobserve(e._node), e._node = t, e._window = (n = e._node) && n.ownerDocument && n.ownerDocument.defaultView || window;
                                var r = e.props.innerRef;
                                r && ("function" == typeof r ? r(e._node) : r.current = e._node), null !== e._resizeObserver && null !== e._node && e._resizeObserver.observe(e._node)
                            }, e
                        }(0, i.A)(a, n);
                        var u = a.prototype;
                        return u.componentDidMount = function() {
                            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new c.A(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" == typeof this.props.onResize && this.props.onResize(h(this._node, t || f(this.props))))
                        }, u.componentWillUnmount = function() {
                            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null)
                        }, u.render = function() {
                            var t = this.props,
                                n = (t.innerRef, t.onResize, (0, o.A)(t, ["innerRef", "onResize"]));
                            return (0, s.createElement)(e, (0, r.A)({}, n, {
                                measureRef: this._handleRef,
                                measure: this.measure,
                                contentRect: this.state.contentRect
                            }))
                        }, a
                    }(s.Component), n.propTypes = {
                        client: u().bool,
                        offset: u().bool,
                        scroll: u().bool,
                        bounds: u().bool,
                        margin: u().bool,
                        innerRef: u().oneOfType([u().object, u().func]),
                        onResize: u().func
                    }, a
                }
            }
            var d = p()((function(t) {
                var e = t.measure,
                    n = t.measureRef,
                    r = t.contentRect;
                return (0, t.children)({
                    measure: e,
                    measureRef: n,
                    contentRect: r
                })
            }));
            d.displayName = "Measure", d.propTypes.children = u().func;
            const v = d
        },
        322546: (t, e, n) => {
            "use strict";
            n.d(e, { of: () => s
            });
            var r = n(453535),
                o = n(550742),
                i = n(363295);

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = t[t.length - 1];
                return (0, r.m)(n) ? (t.pop(), (0, i.V)(t, n)) : (0, o.c)(t)
            }
        },
        332386: (t, e, n) => {
            "use strict";
            n.d(e, {
                i: () => P
            });
            var r, o = n(944339),
                i = n(810487),
                s = n(15924),
                a = n(688125),
                u = n(680811),
                c = n(553824),
                l = n(358892),
                f = new RegExp("^".concat(a.r.source, "*")),
                h = new RegExp("".concat(a.r.source, "*$"));

            function p(t, e) {
                return {
                    start: t,
                    end: e
                }
            }
            var d = !!String.prototype.startsWith && "_a".startsWith("a", 1),
                v = !!String.fromCodePoint,
                y = !!Object.fromEntries,
                m = !!String.prototype.codePointAt,
                b = !!String.prototype.trimStart,
                g = !!String.prototype.trimEnd,
                E = !!Number.isSafeInteger ? Number.isSafeInteger : function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
                },
                w = !0;
            try {
                w = "a" === (null === (r = S("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === r ? void 0 : r[0])
            } catch (k) {
                w = !1
            }
            var _, T = d ? function(t, e, n) {
                    return t.startsWith(e, n)
                } : function(t, e, n) {
                    return t.slice(n, n + e.length) === e
                },
                A = v ? String.fromCodePoint : function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n, r = "", o = t.length, i = 0; o > i;) {
                        if ((n = t[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
                        r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
                    }
                    return r
                },
                x = y ? Object.fromEntries : function(t) {
                    for (var e = {}, n = 0, r = t; n < r.length; n++) {
                        var o = r[n],
                            i = o[0],
                            s = o[1];
                        e[i] = s
                    }
                    return e
                },
                O = m ? function(t, e) {
                    return t.codePointAt(e)
                } : function(t, e) {
                    var n = t.length;
                    if (!(e < 0 || e >= n)) {
                        var r, o = t.charCodeAt(e);
                        return o < 55296 || o > 56319 || e + 1 === n || (r = t.charCodeAt(e + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
                    }
                },
                R = b ? function(t) {
                    return t.trimStart()
                } : function(t) {
                    return t.replace(f, "")
                },
                N = g ? function(t) {
                    return t.trimEnd()
                } : function(t) {
                    return t.replace(h, "")
                };

            function S(t, e) {
                return new RegExp(t, e)
            }
            if (w) {
                var C = S("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                _ = function(t, e) {
                    var n;
                    return C.lastIndex = e, null !== (n = C.exec(t)[1]) && void 0 !== n ? n : ""
                }
            } else _ = function(t, e) {
                for (var n = [];;) {
                    var r = O(t, e);
                    if (void 0 === r || j(r) || I(r)) break;
                    n.push(r), e += r >= 65536 ? 2 : 1
                }
                return A.apply(void 0, n)
            };
            var P = function() {
                function t(t, e) {
                    void 0 === e && (e = {}), this.message = t, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
                }
                return t.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, t.prototype.parseMessage = function(t, e, n) {
                    for (var r = []; !this.isEOF();) {
                        var o = this.char();
                        if (123 === o) {
                            if ((a = this.parseArgument(t, n)).err) return a;
                            r.push(a.val)
                        } else {
                            if (125 === o && t > 0) break;
                            if (35 !== o || "plural" !== e && "selectordinal" !== e) {
                                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                                    if (n) break;
                                    return this.error(i.F.UNMATCHED_CLOSING_TAG, p(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === o && !this.ignoreTag && L(this.peek() || 0)) {
                                    if ((a = this.parseTag(t, e)).err) return a;
                                    r.push(a.val)
                                } else {
                                    var a;
                                    if ((a = this.parseLiteral(t, e)).err) return a;
                                    r.push(a.val)
                                }
                            } else {
                                var u = this.clonePosition();
                                this.bump(), r.push({
                                    type: s.ZE.pound,
                                    location: p(u, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: r,
                        err: null
                    }
                }, t.prototype.parseTag = function(t, e) {
                    var n = this.clonePosition();
                    this.bump();
                    var r = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: s.ZE.literal,
                            value: "<".concat(r, "/>"),
                            location: p(n, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var o = this.parseMessage(t + 1, e, !0);
                        if (o.err) return o;
                        var a = o.val,
                            u = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !L(this.char())) return this.error(i.F.INVALID_TAG, p(u, this.clonePosition()));
                            var c = this.clonePosition();
                            return r !== this.parseTagName() ? this.error(i.F.UNMATCHED_CLOSING_TAG, p(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: s.ZE.tag,
                                    value: r,
                                    children: a,
                                    location: p(n, this.clonePosition())
                                },
                                err: null
                            } : this.error(i.F.INVALID_TAG, p(u, this.clonePosition())))
                        }
                        return this.error(i.F.UNCLOSED_TAG, p(n, this.clonePosition()))
                    }
                    return this.error(i.F.INVALID_TAG, p(n, this.clonePosition()))
                }, t.prototype.parseTagName = function() {
                    var t, e = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (t = this.char()) || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039);) this.bump();
                    return this.message.slice(e, this.offset())
                }, t.prototype.parseLiteral = function(t, e) {
                    for (var n = this.clonePosition(), r = "";;) {
                        var o = this.tryParseQuote(e);
                        if (o) r += o;
                        else {
                            var i = this.tryParseUnquoted(t, e);
                            if (i) r += i;
                            else {
                                var a = this.tryParseLeftAngleBracket();
                                if (!a) break;
                                r += a
                            }
                        }
                    }
                    var u = p(n, this.clonePosition());
                    return {
                        val: {
                            type: s.ZE.literal,
                            value: r,
                            location: u
                        },
                        err: null
                    }
                }, t.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (L(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
                    var t
                }, t.prototype.tryParseQuote = function(t) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === t || "selectordinal" === t) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var e = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var n = this.char();
                        if (39 === n) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            e.push(39), this.bump()
                        } else e.push(n);
                        this.bump()
                    }
                    return A.apply(void 0, e)
                }, t.prototype.tryParseUnquoted = function(t, e) {
                    if (this.isEOF()) return null;
                    var n = this.char();
                    return 60 === n || 123 === n || 35 === n && ("plural" === e || "selectordinal" === e) || 125 === n && t > 0 ? null : (this.bump(), A(n))
                }, t.prototype.parseArgument = function(t, e) {
                    var n = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(i.F.EXPECT_ARGUMENT_CLOSING_BRACE, p(n, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(i.F.EMPTY_ARGUMENT, p(n, this.clonePosition()));
                    var r = this.parseIdentifierIfPossible().value;
                    if (!r) return this.error(i.F.MALFORMED_ARGUMENT, p(n, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(i.F.EXPECT_ARGUMENT_CLOSING_BRACE, p(n, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: s.ZE.argument,
                                    value: r,
                                    location: p(n, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(i.F.EXPECT_ARGUMENT_CLOSING_BRACE, p(n, this.clonePosition())) : this.parseArgumentOptions(t, e, r, n);
                        default:
                            return this.error(i.F.MALFORMED_ARGUMENT, p(n, this.clonePosition()))
                    }
                }, t.prototype.parseIdentifierIfPossible = function() {
                    var t = this.clonePosition(),
                        e = this.offset(),
                        n = _(this.message, e),
                        r = e + n.length;
                    return this.bumpTo(r), {
                        value: n,
                        location: p(t, this.clonePosition())
                    }
                }, t.prototype.parseArgumentOptions = function(t, e, n, r) {
                    var a, c = this.clonePosition(),
                        f = this.parseIdentifierIfPossible().value,
                        h = this.clonePosition();
                    switch (f) {
                        case "":
                            return this.error(i.F.EXPECT_ARGUMENT_TYPE, p(c, h));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var d = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var v = this.clonePosition();
                                if ((A = this.parseSimpleArgStyleIfPossible()).err) return A;
                                if (0 === (g = N(A.val)).length) return this.error(i.F.EXPECT_ARGUMENT_STYLE, p(this.clonePosition(), this.clonePosition()));
                                d = {
                                    style: g,
                                    styleLocation: p(v, this.clonePosition())
                                }
                            }
                            if ((O = this.tryParseArgumentClose(r)).err) return O;
                            var y = p(r, this.clonePosition());
                            if (d && T(null == d ? void 0 : d.style, "::", 0)) {
                                var m = R(d.style.slice(2));
                                if ("number" === f) return (A = this.parseNumberSkeletonFromString(m, d.styleLocation)).err ? A : {
                                    val: {
                                        type: s.ZE.number,
                                        value: n,
                                        location: y,
                                        style: A.val
                                    },
                                    err: null
                                };
                                if (0 === m.length) return this.error(i.F.EXPECT_DATE_TIME_SKELETON, y);
                                var b = m;
                                this.locale && (b = (0, l.d)(m, this.locale));
                                var g = {
                                    type: s.rq.dateTime,
                                    pattern: b,
                                    location: d.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (0, u.e)(b) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === f ? s.ZE.date : s.ZE.time,
                                        value: n,
                                        location: y,
                                        style: g
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === f ? s.ZE.number : "date" === f ? s.ZE.date : s.ZE.time,
                                    value: n,
                                    location: y,
                                    style: null !== (a = null == d ? void 0 : d.style) && void 0 !== a ? a : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var E = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(i.F.EXPECT_SELECT_ARGUMENT_OPTIONS, p(E, (0, o.Cl)({}, E)));
                            this.bumpSpace();
                            var w = this.parseIdentifierIfPossible(),
                                _ = 0;
                            if ("select" !== f && "offset" === w.value) {
                                if (!this.bumpIf(":")) return this.error(i.F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p(this.clonePosition(), this.clonePosition()));
                                var A;
                                if (this.bumpSpace(), (A = this.tryParseDecimalInteger(i.F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, i.F.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return A;
                                this.bumpSpace(), w = this.parseIdentifierIfPossible(), _ = A.val
                            }
                            var O, S = this.tryParsePluralOrSelectOptions(t, f, e, w);
                            if (S.err) return S;
                            if ((O = this.tryParseArgumentClose(r)).err) return O;
                            var C = p(r, this.clonePosition());
                            return "select" === f ? {
                                val: {
                                    type: s.ZE.select,
                                    value: n,
                                    options: x(S.val),
                                    location: C
                                },
                                err: null
                            } : {
                                val: {
                                    type: s.ZE.plural,
                                    value: n,
                                    options: x(S.val),
                                    offset: _,
                                    pluralType: "plural" === f ? "cardinal" : "ordinal",
                                    location: C
                                },
                                err: null
                            };
                        default:
                            return this.error(i.F.INVALID_ARGUMENT_TYPE, p(c, h))
                    }
                }, t.prototype.tryParseArgumentClose = function(t) {
                    return this.isEOF() || 125 !== this.char() ? this.error(i.F.EXPECT_ARGUMENT_CLOSING_BRACE, p(t, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, t.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var t = 0, e = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var n = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(i.F.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, p(n, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                t += 1, this.bump();
                                break;
                            case 125:
                                if (!(t > 0)) return {
                                    val: this.message.slice(e.offset, this.offset()),
                                    err: null
                                };
                                t -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(e.offset, this.offset()),
                        err: null
                    }
                }, t.prototype.parseNumberSkeletonFromString = function(t, e) {
                    var n = [];
                    try {
                        n = (0, c.r)(t)
                    } catch (r) {
                        return this.error(i.F.INVALID_NUMBER_SKELETON, e)
                    }
                    return {
                        val: {
                            type: s.rq.number,
                            tokens: n,
                            location: e,
                            parsedOptions: this.shouldParseSkeletons ? (0, c.e)(n) : {}
                        },
                        err: null
                    }
                }, t.prototype.tryParsePluralOrSelectOptions = function(t, e, n, r) {
                    for (var o, s = !1, a = [], u = new Set, c = r.value, l = r.location;;) {
                        if (0 === c.length) {
                            var f = this.clonePosition();
                            if ("select" === e || !this.bumpIf("=")) break;
                            var h = this.tryParseDecimalInteger(i.F.EXPECT_PLURAL_ARGUMENT_SELECTOR, i.F.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (h.err) return h;
                            l = p(f, this.clonePosition()), c = this.message.slice(f.offset, this.offset())
                        }
                        if (u.has(c)) return this.error("select" === e ? i.F.DUPLICATE_SELECT_ARGUMENT_SELECTOR : i.F.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
                        "other" === c && (s = !0), this.bumpSpace();
                        var d = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === e ? i.F.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : i.F.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, p(this.clonePosition(), this.clonePosition()));
                        var v = this.parseMessage(t + 1, e, n);
                        if (v.err) return v;
                        var y = this.tryParseArgumentClose(d);
                        if (y.err) return y;
                        a.push([c, {
                            value: v.val,
                            location: p(d, this.clonePosition())
                        }]), u.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, l = o.location
                    }
                    return 0 === a.length ? this.error("select" === e ? i.F.EXPECT_SELECT_ARGUMENT_SELECTOR : i.F.EXPECT_PLURAL_ARGUMENT_SELECTOR, p(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(i.F.MISSING_OTHER_CLAUSE, p(this.clonePosition(), this.clonePosition())) : {
                        val: a,
                        err: null
                    }
                }, t.prototype.tryParseDecimalInteger = function(t, e) {
                    var n = 1,
                        r = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (n = -1);
                    for (var o = !1, i = 0; !this.isEOF();) {
                        var s = this.char();
                        if (!(s >= 48 && s <= 57)) break;
                        o = !0, i = 10 * i + (s - 48), this.bump()
                    }
                    var a = p(r, this.clonePosition());
                    return o ? E(i *= n) ? {
                        val: i,
                        err: null
                    } : this.error(e, a) : this.error(t, a)
                }, t.prototype.offset = function() {
                    return this.position.offset
                }, t.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, t.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, t.prototype.char = function() {
                    var t = this.position.offset;
                    if (t >= this.message.length) throw Error("out of bound");
                    var e = O(this.message, t);
                    if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                    return e
                }, t.prototype.error = function(t, e) {
                    return {
                        val: null,
                        err: {
                            kind: t,
                            message: this.message,
                            location: e
                        }
                    }
                }, t.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var t = this.char();
                        10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
                    }
                }, t.prototype.bumpIf = function(t) {
                    if (T(this.message, t, this.offset())) {
                        for (var e = 0; e < t.length; e++) this.bump();
                        return !0
                    }
                    return !1
                }, t.prototype.bumpUntil = function(t) {
                    var e = this.offset(),
                        n = this.message.indexOf(t, e);
                    return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
                }, t.prototype.bumpTo = function(t) {
                    if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (t = Math.min(t, this.message.length);;) {
                        var e = this.offset();
                        if (e === t) break;
                        if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, t.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && j(this.char());) this.bump()
                }, t.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var t = this.char(),
                        e = this.offset(),
                        n = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
                    return null != n ? n : null
                }, t
            }();

            function L(t) {
                return t >= 97 && t <= 122 || t >= 65 && t <= 90
            }

            function j(t) {
                return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
            }

            function I(t) {
                return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094
            }
        },
        334986: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this,
                        n = "";
                    e.next = function() {
                        var t = e.x ^ e.x >>> 2;
                        return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
                    }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.v = 0, t === (0 | t) ? e.x = t : n += t;
                    for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), r == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
                }

                function a(t, e) {
                    return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
                }

                function u(t, e) {
                    var n = new s(t),
                        r = e && e.state,
                        o = function() {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function() {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.xorwow = u
            }(0, t = n.nmd(t), n.amdD)
        },
        335679: (t, e, n) => {
            "use strict";
            n.d(e, {
                v: () => l
            });
            var r = n(998083),
                o = n(387904),
                i = n(537727),
                s = n(997752),
                a = n(623276),
                u = n(558279),
                c = n(599884),
                l = function(t) {
                    function e(n, r, o) {
                        var s = t.call(this) || this;
                        switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
                            case 0:
                                s.destination = i.I;
                                break;
                            case 1:
                                if (!n) {
                                    s.destination = i.I;
                                    break
                                }
                                if ("object" == typeof n) {
                                    n instanceof e ? (s.syncErrorThrowable = n.syncErrorThrowable, s.destination = n, n.add(s)) : (s.syncErrorThrowable = !0, s.destination = new f(s, n));
                                    break
                                }
                            default:
                                s.syncErrorThrowable = !0, s.destination = new f(s, n, r, o)
                        }
                        return s
                    }
                    return r.C6(e, t), e.prototype[a.D] = function() {
                        return this
                    }, e.create = function(t, n, r) {
                        var o = new e(t, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(s.y),
                f = function(t) {
                    function e(e, n, r, s) {
                        var a, u = t.call(this) || this;
                        u._parentSubscriber = e;
                        var c = u;
                        return (0, o.T)(n) ? a = n : n && (a = n.next, r = n.error, s = n.complete, n !== i.I && (c = Object.create(n), (0, o.T)(c.unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(u))), u._context = c, u._next = a, u._error = r, u._complete = s, u
                    }
                    return r.C6(e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            u.$.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = u.$.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : (0, c.T)(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw t;
                                (0, c.T)(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return t._complete.call(t._context)
                                };
                                u.$.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (n) {
                            if (this.unsubscribe(), u.$.useDeprecatedSynchronousErrorHandling) throw n;
                            (0, c.T)(n)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, n) {
                        if (!u.$.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (r) {
                            return u.$.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : ((0, c.T)(r), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(l)
        },
        353514: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => r
            });
            var r = {
                "001": ["H", "h"],
                AC: ["H", "h", "hb", "hB"],
                AD: ["H", "hB"],
                AE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AI: ["H", "h", "hb", "hB"],
                AL: ["h", "H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AR: ["H", "h", "hB", "hb"],
                AS: ["h", "H"],
                AT: ["H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                AW: ["H", "hB"],
                AX: ["H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BB: ["h", "hb", "H", "hB"],
                BD: ["h", "hB", "H"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BG: ["H", "hB", "h"],
                BH: ["h", "hB", "hb", "H"],
                BI: ["H", "h"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BN: ["hb", "hB", "h", "H"],
                BO: ["H", "hB", "h", "hb"],
                BQ: ["H"],
                BR: ["H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                BT: ["h", "H"],
                BW: ["H", "h", "hb", "hB"],
                BY: ["H", "h"],
                BZ: ["H", "h", "hb", "hB"],
                CA: ["h", "hb", "H", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CD: ["hB", "H"],
                CF: ["H", "h", "hB"],
                CG: ["H", "hB"],
                CH: ["H", "hB", "h"],
                CI: ["H", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CL: ["H", "h", "hB", "hb"],
                CM: ["H", "h", "hB"],
                CN: ["H", "hB", "hb", "h"],
                CO: ["h", "H", "hB", "hb"],
                CP: ["H"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                CV: ["H", "hB"],
                CW: ["H", "hB"],
                CX: ["H", "h", "hb", "hB"],
                CY: ["h", "H", "hb", "hB"],
                CZ: ["H"],
                DE: ["H", "hB"],
                DG: ["H", "h", "hb", "hB"],
                DJ: ["h", "H"],
                DK: ["H"],
                DM: ["h", "hb", "H", "hB"],
                DO: ["h", "H", "hB", "hb"],
                DZ: ["h", "hB", "hb", "H"],
                EA: ["H", "h", "hB", "hb"],
                EC: ["H", "hB", "h", "hb"],
                EE: ["H", "hB"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                ER: ["h", "H"],
                ES: ["H", "hB", "h", "hb"],
                ET: ["hB", "hb", "h", "H"],
                FI: ["H"],
                FJ: ["h", "hb", "H", "hB"],
                FK: ["H", "h", "hb", "hB"],
                FM: ["h", "hb", "H", "hB"],
                FO: ["H", "h"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GE: ["H", "hB", "h"],
                GF: ["H", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GH: ["h", "H"],
                GI: ["H", "h", "hb", "hB"],
                GL: ["H", "h"],
                GM: ["h", "hb", "H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GQ: ["H", "hB", "h", "hb"],
                GR: ["h", "H", "hb", "hB"],
                GT: ["H", "h", "hB", "hb"],
                GU: ["h", "hb", "H", "hB"],
                GW: ["H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                HK: ["h", "hB", "hb", "H"],
                HN: ["H", "h", "hB", "hb"],
                HR: ["H", "hB"],
                HU: ["H", "h"],
                IC: ["H", "h", "hB", "hb"],
                ID: ["H"],
                IE: ["H", "h", "hb", "hB"],
                IL: ["H", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IN: ["h", "H"],
                IO: ["H", "h", "hb", "hB"],
                IQ: ["h", "hB", "hb", "H"],
                IR: ["hB", "H"],
                IS: ["H"],
                IT: ["H", "hB"],
                JE: ["H", "h", "hb", "hB"],
                JM: ["h", "hb", "H", "hB"],
                JO: ["h", "hB", "hb", "H"],
                JP: ["H", "K", "h"],
                KE: ["hB", "hb", "H", "h"],
                KG: ["H", "h", "hB", "hb"],
                KH: ["hB", "h", "H", "hb"],
                KI: ["h", "hb", "H", "hB"],
                KM: ["H", "h", "hB", "hb"],
                KN: ["h", "hb", "H", "hB"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                KW: ["h", "hB", "hb", "H"],
                KY: ["h", "hb", "H", "hB"],
                KZ: ["H", "hB"],
                LA: ["H", "hb", "hB", "h"],
                LB: ["h", "hB", "hb", "H"],
                LC: ["h", "hb", "H", "hB"],
                LI: ["H", "hB", "h"],
                LK: ["H", "h", "hB", "hb"],
                LR: ["h", "hb", "H", "hB"],
                LS: ["h", "H"],
                LT: ["H", "h", "hb", "hB"],
                LU: ["H", "h", "hB"],
                LV: ["H", "hB", "hb", "h"],
                LY: ["h", "hB", "hb", "H"],
                MA: ["H", "h", "hB", "hb"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                ME: ["H", "hB", "h"],
                MF: ["H", "hB"],
                MG: ["H", "h"],
                MH: ["h", "hb", "H", "hB"],
                MK: ["H", "h", "hb", "hB"],
                ML: ["H"],
                MM: ["hB", "hb", "H", "h"],
                MN: ["H", "h", "hb", "hB"],
                MO: ["h", "hB", "hb", "H"],
                MP: ["h", "hb", "H", "hB"],
                MQ: ["H", "hB"],
                MR: ["h", "hB", "hb", "H"],
                MS: ["H", "h", "hb", "hB"],
                MT: ["H", "h"],
                MU: ["H", "h"],
                MV: ["H", "h"],
                MW: ["h", "hb", "H", "hB"],
                MX: ["H", "h", "hB", "hb"],
                MY: ["hb", "hB", "h", "H"],
                MZ: ["H", "hB"],
                NA: ["h", "H", "hB", "hb"],
                NC: ["H", "hB"],
                NE: ["H"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NI: ["H", "h", "hB", "hb"],
                NL: ["H", "hB"],
                NO: ["H", "h"],
                NP: ["H", "h", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                OM: ["h", "hB", "hb", "H"],
                PA: ["h", "H", "hB", "hb"],
                PE: ["H", "hB", "h", "hb"],
                PF: ["H", "h", "hB"],
                PG: ["h", "H"],
                PH: ["h", "hB", "hb", "H"],
                PK: ["h", "hB", "H"],
                PL: ["H", "h"],
                PM: ["H", "hB"],
                PN: ["H", "h", "hb", "hB"],
                PR: ["h", "H", "hB", "hb"],
                PS: ["h", "hB", "hb", "H"],
                PT: ["H", "hB"],
                PW: ["h", "H"],
                PY: ["H", "h", "hB", "hb"],
                QA: ["h", "hB", "hb", "H"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                RS: ["H", "hB", "h"],
                RU: ["H"],
                RW: ["H", "h"],
                SA: ["h", "hB", "hb", "H"],
                SB: ["h", "hb", "H", "hB"],
                SC: ["H", "h", "hB"],
                SD: ["h", "hB", "hb", "H"],
                SE: ["H"],
                SG: ["h", "hb", "H", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SI: ["H", "hB"],
                SJ: ["H"],
                SK: ["H"],
                SL: ["h", "hb", "H", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                SO: ["h", "H"],
                SR: ["H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                ST: ["H", "hB"],
                SV: ["H", "h", "hB", "hb"],
                SX: ["H", "h", "hb", "hB"],
                SY: ["h", "hB", "hb", "H"],
                SZ: ["h", "hb", "H", "hB"],
                TA: ["H", "h", "hb", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TD: ["h", "H", "hB"],
                TF: ["H", "h", "hB"],
                TG: ["H", "hB"],
                TH: ["H", "h"],
                TJ: ["H", "h"],
                TL: ["H", "hB", "hb", "h"],
                TM: ["H", "h"],
                TN: ["h", "hB", "hb", "H"],
                TO: ["h", "H"],
                TR: ["H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                TW: ["hB", "hb", "h", "H"],
                TZ: ["hB", "hb", "H", "h"],
                UA: ["H", "hB", "h"],
                UG: ["hB", "hb", "H", "h"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                UY: ["H", "h", "hB", "hb"],
                UZ: ["H", "hB", "h"],
                VA: ["H", "h", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VE: ["h", "H", "hB", "hb"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                VN: ["H", "h"],
                VU: ["h", "H"],
                WF: ["H", "hB"],
                WS: ["h", "H"],
                XK: ["H", "hB", "h"],
                YE: ["h", "hB", "hb", "H"],
                YT: ["H", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                ZW: ["H", "h"],
                "af-ZA": ["H", "h", "hB", "hb"],
                "ar-001": ["h", "hB", "hb", "H"],
                "ca-ES": ["H", "h", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "hi-IN": ["hB", "h", "H"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                "ta-IN": ["hB", "h", "hb", "H"],
                "te-IN": ["hB", "h", "H"],
                "zu-ZA": ["H", "hB", "hb", "h"]
            }
        },
        358892: (t, e, n) => {
            "use strict";
            n.d(e, {
                d: () => o
            });
            var r = n(353514);

            function o(t, e) {
                for (var n = "", r = 0; r < t.length; r++) {
                    var o = t.charAt(r);
                    if ("j" === o) {
                        for (var s = 0; r + 1 < t.length && t.charAt(r + 1) === o;) s++, r++;
                        var a = 1 + (1 & s),
                            u = s < 2 ? 1 : 3 + (s >> 1),
                            c = i(e);
                        for ("H" != c && "k" != c || (u = 0); u-- > 0;) n += "a";
                        for (; a-- > 0;) n = c + n
                    } else n += "J" === o ? "H" : o
                }
                return n
            }

            function i(t) {
                var e = t.hourCycle;
                if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var n, o = t.language;
                return "root" !== o && (n = t.maximize().region), (r.c[n || ""] || r.c[o || ""] || r.c["".concat(o, "-001")] || r.c["001"])[0]
            }
        },
        363295: (t, e, n) => {
            "use strict";
            n.d(e, {
                V: () => i
            });
            var r = n(226260),
                o = n(997752);

            function i(t, e) {
                return new r.c((function(n) {
                    var r = new o.y,
                        i = 0;
                    return r.add(e.schedule((function() {
                        i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
                    }))), r
                }))
            }
        },
        374560: (t, e, n) => {
            "use strict";
            n.d(e, {
                BN: () => y,
                ER: () => m,
                Ej: () => b,
                RK: () => u,
                UE: () => a,
                UU: () => c,
                __: () => s,
                cY: () => v,
                jD: () => h,
                mG: () => d,
                rD: () => i
            });
            var r = n(612151);

            function o(t, e, n) {
                let {
                    reference: o,
                    floating: i
                } = t;
                const s = (0, r.TV)(e),
                    a = (0, r.Dz)(e),
                    u = (0, r.sq)(a),
                    c = (0, r.C0)(e),
                    l = "y" === s,
                    f = o.x + o.width / 2 - i.width / 2,
                    h = o.y + o.height / 2 - i.height / 2,
                    p = o[u] / 2 - i[u] / 2;
                let d;
                switch (c) {
                    case "top":
                        d = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        d = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        d = {
                            x: o.x + o.width,
                            y: h
                        };
                        break;
                    case "left":
                        d = {
                            x: o.x - i.width,
                            y: h
                        };
                        break;
                    default:
                        d = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch ((0, r.Sg)(e)) {
                    case "start":
                        d[a] -= p * (n && l ? -1 : 1);
                        break;
                    case "end":
                        d[a] += p * (n && l ? -1 : 1)
                }
                return d
            }
            const i = async (t, e, n) => {
                const {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: s = [],
                    platform: a
                } = n, u = s.filter(Boolean), c = await (null == a.isRTL ? void 0 : a.isRTL(e));
                let l = await a.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: i
                    }),
                    {
                        x: f,
                        y: h
                    } = o(l, r, c),
                    p = r,
                    d = {},
                    v = 0;
                for (let y = 0; y < u.length; y++) {
                    const {
                        name: n,
                        fn: s
                    } = u[y], {
                        x: m,
                        y: b,
                        data: g,
                        reset: E
                    } = await s({
                        x: f,
                        y: h,
                        initialPlacement: r,
                        placement: p,
                        strategy: i,
                        middlewareData: d,
                        rects: l,
                        platform: a,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    f = null != m ? m : f, h = null != b ? b : h, d = { ...d,
                        [n]: { ...d[n],
                            ...g
                        }
                    }, E && v <= 50 && (v++, "object" == typeof E && (E.placement && (p = E.placement), E.rects && (l = !0 === E.rects ? await a.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: i
                    }) : E.rects), ({
                        x: f,
                        y: h
                    } = o(l, p, c))), y = -1)
                }
                return {
                    x: f,
                    y: h,
                    placement: p,
                    strategy: i,
                    middlewareData: d
                }
            };
            async function s(t, e) {
                var n;
                void 0 === e && (e = {});
                const {
                    x: o,
                    y: i,
                    platform: s,
                    rects: a,
                    elements: u,
                    strategy: c
                } = t, {
                    boundary: l = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: h = "floating",
                    altBoundary: p = !1,
                    padding: d = 0
                } = (0, r._3)(e, t), v = (0, r.nI)(d), y = u[p ? "floating" === h ? "reference" : "floating" : h], m = (0, r.B1)(await s.getClippingRect({
                    element: null == (n = await (null == s.isElement ? void 0 : s.isElement(y))) || n ? y : y.contextElement || await (null == s.getDocumentElement ? void 0 : s.getDocumentElement(u.floating)),
                    boundary: l,
                    rootBoundary: f,
                    strategy: c
                })), b = "floating" === h ? {
                    x: o,
                    y: i,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, g = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u.floating)), E = await (null == s.isElement ? void 0 : s.isElement(g)) && await (null == s.getScale ? void 0 : s.getScale(g)) || {
                    x: 1,
                    y: 1
                }, w = (0, r.B1)(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: u,
                    rect: b,
                    offsetParent: g,
                    strategy: c
                }) : b);
                return {
                    top: (m.top - w.top + v.top) / E.y,
                    bottom: (w.bottom - m.bottom + v.bottom) / E.y,
                    left: (m.left - w.left + v.left) / E.x,
                    right: (w.right - m.right + v.right) / E.x
                }
            }
            const a = t => ({
                name: "arrow",
                options: t,
                async fn(e) {
                    const {
                        x: n,
                        y: o,
                        placement: i,
                        rects: s,
                        platform: a,
                        elements: u,
                        middlewareData: c
                    } = e, {
                        element: l,
                        padding: f = 0
                    } = (0, r._3)(t, e) || {};
                    if (null == l) return {};
                    const h = (0, r.nI)(f),
                        p = {
                            x: n,
                            y: o
                        },
                        d = (0, r.Dz)(i),
                        v = (0, r.sq)(d),
                        y = await a.getDimensions(l),
                        m = "y" === d,
                        b = m ? "top" : "left",
                        g = m ? "bottom" : "right",
                        E = m ? "clientHeight" : "clientWidth",
                        w = s.reference[v] + s.reference[d] - p[d] - s.floating[v],
                        _ = p[d] - s.reference[d],
                        T = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l));
                    let A = T ? T[E] : 0;
                    A && await (null == a.isElement ? void 0 : a.isElement(T)) || (A = u.floating[E] || s.floating[v]);
                    const x = w / 2 - _ / 2,
                        O = A / 2 - y[v] / 2 - 1,
                        R = (0, r.jk)(h[b], O),
                        N = (0, r.jk)(h[g], O),
                        S = R,
                        C = A - y[v] - N,
                        P = A / 2 - y[v] / 2 + x,
                        L = (0, r.qE)(S, P, C),
                        j = !c.arrow && null != (0, r.Sg)(i) && P !== L && s.reference[v] / 2 - (P < S ? R : N) - y[v] / 2 < 0,
                        I = j ? P < S ? P - S : P - C : 0;
                    return {
                        [d]: p[d] + I,
                        data: {
                            [d]: L,
                            centerOffset: P - L - I,
                            ...j && {
                                alignmentOffset: I
                            }
                        },
                        reset: j
                    }
                }
            });
            const u = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "autoPlacement",
                        options: t,
                        async fn(e) {
                            var n, o, i;
                            const {
                                rects: a,
                                middlewareData: u,
                                placement: c,
                                platform: l,
                                elements: f
                            } = e, {
                                crossAxis: h = !1,
                                alignment: p,
                                allowedPlacements: d = r.DD,
                                autoAlignment: v = !0,
                                ...y
                            } = (0, r._3)(t, e), m = void 0 !== p || d === r.DD ? function(t, e, n) {
                                return (t ? [...n.filter((e => (0, r.Sg)(e) === t)), ...n.filter((e => (0, r.Sg)(e) !== t))] : n.filter((t => (0, r.C0)(t) === t))).filter((n => !t || (0, r.Sg)(n) === t || !!e && (0, r.aD)(n) !== n))
                            }(p || null, v, d) : d, b = await s(e, y), g = (null == (n = u.autoPlacement) ? void 0 : n.index) || 0, E = m[g];
                            if (null == E) return {};
                            const w = (0, r.w7)(E, a, await (null == l.isRTL ? void 0 : l.isRTL(f.floating)));
                            if (c !== E) return {
                                reset: {
                                    placement: m[0]
                                }
                            };
                            const _ = [b[(0, r.C0)(E)], b[w[0]], b[w[1]]],
                                T = [...(null == (o = u.autoPlacement) ? void 0 : o.overflows) || [], {
                                    placement: E,
                                    overflows: _
                                }],
                                A = m[g + 1];
                            if (A) return {
                                data: {
                                    index: g + 1,
                                    overflows: T
                                },
                                reset: {
                                    placement: A
                                }
                            };
                            const x = T.map((t => {
                                    const e = (0, r.Sg)(t.placement);
                                    return [t.placement, e && h ? t.overflows.slice(0, 2).reduce(((t, e) => t + e), 0) : t.overflows[0], t.overflows]
                                })).sort(((t, e) => t[1] - e[1])),
                                O = (null == (i = x.filter((t => t[2].slice(0, (0, r.Sg)(t[0]) ? 2 : 3).every((t => t <= 0))))[0]) ? void 0 : i[0]) || x[0][0];
                            return O !== c ? {
                                data: {
                                    index: g + 1,
                                    overflows: T
                                },
                                reset: {
                                    placement: O
                                }
                            } : {}
                        }
                    }
                },
                c = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n, o;
                            const {
                                placement: i,
                                middlewareData: a,
                                rects: u,
                                initialPlacement: c,
                                platform: l,
                                elements: f
                            } = e, {
                                mainAxis: h = !0,
                                crossAxis: p = !0,
                                fallbackPlacements: d,
                                fallbackStrategy: v = "bestFit",
                                fallbackAxisSideDirection: y = "none",
                                flipAlignment: m = !0,
                                ...b
                            } = (0, r._3)(t, e);
                            if (null != (n = a.arrow) && n.alignmentOffset) return {};
                            const g = (0, r.C0)(i),
                                E = (0, r.C0)(c) === c,
                                w = await (null == l.isRTL ? void 0 : l.isRTL(f.floating)),
                                _ = d || (E || !m ? [(0, r.bV)(c)] : (0, r.WJ)(c));
                            d || "none" === y || _.push(...(0, r.lP)(c, m, y, w));
                            const T = [c, ..._],
                                A = await s(e, b),
                                x = [];
                            let O = (null == (o = a.flip) ? void 0 : o.overflows) || [];
                            if (h && x.push(A[g]), p) {
                                const t = (0, r.w7)(i, u, w);
                                x.push(A[t[0]], A[t[1]])
                            }
                            if (O = [...O, {
                                    placement: i,
                                    overflows: x
                                }], !x.every((t => t <= 0))) {
                                var R, N;
                                const t = ((null == (R = a.flip) ? void 0 : R.index) || 0) + 1,
                                    e = T[t];
                                if (e) return {
                                    data: {
                                        index: t,
                                        overflows: O
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = null == (N = O.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : N.placement;
                                if (!n) switch (v) {
                                    case "bestFit":
                                        {
                                            var S;
                                            const t = null == (S = O.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : S[0];t && (n = t);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = c
                                }
                                if (i !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function l(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function f(t) {
                return r.r_.some((e => t[e] >= 0))
            }
            const h = function(t) {
                return void 0 === t && (t = {}), {
                    name: "hide",
                    options: t,
                    async fn(e) {
                        const {
                            rects: n
                        } = e, {
                            strategy: o = "referenceHidden",
                            ...i
                        } = (0, r._3)(t, e);
                        switch (o) {
                            case "referenceHidden":
                                {
                                    const t = l(await s(e, { ...i,
                                        elementContext: "reference"
                                    }), n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: t,
                                            referenceHidden: f(t)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    const t = l(await s(e, { ...i,
                                        altBoundary: !0
                                    }), n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: t,
                                            escaped: f(t)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };

            function p(t) {
                const e = (0, r.jk)(...t.map((t => t.left))),
                    n = (0, r.jk)(...t.map((t => t.top)));
                return {
                    x: e,
                    y: n,
                    width: (0, r.T9)(...t.map((t => t.right))) - e,
                    height: (0, r.T9)(...t.map((t => t.bottom))) - n
                }
            }
            const d = function(t) {
                return void 0 === t && (t = {}), {
                    name: "inline",
                    options: t,
                    async fn(e) {
                        const {
                            placement: n,
                            elements: o,
                            rects: i,
                            platform: s,
                            strategy: a
                        } = e, {
                            padding: u = 2,
                            x: c,
                            y: l
                        } = (0, r._3)(t, e), f = Array.from(await (null == s.getClientRects ? void 0 : s.getClientRects(o.reference)) || []), h = function(t) {
                            const e = t.slice().sort(((t, e) => t.y - e.y)),
                                n = [];
                            let o = null;
                            for (let r = 0; r < e.length; r++) {
                                const t = e[r];
                                !o || t.y - o.y > o.height / 2 ? n.push([t]) : n[n.length - 1].push(t), o = t
                            }
                            return n.map((t => (0, r.B1)(p(t))))
                        }(f), d = (0, r.B1)(p(f)), v = (0, r.nI)(u);
                        const y = await s.getElementRects({
                            reference: {
                                getBoundingClientRect: function() {
                                    if (2 === h.length && h[0].left > h[1].right && null != c && null != l) return h.find((t => c > t.left - v.left && c < t.right + v.right && l > t.top - v.top && l < t.bottom + v.bottom)) || d;
                                    if (h.length >= 2) {
                                        if ("y" === (0, r.TV)(n)) {
                                            const t = h[0],
                                                e = h[h.length - 1],
                                                o = "top" === (0, r.C0)(n),
                                                i = t.top,
                                                s = e.bottom,
                                                a = o ? t.left : e.left,
                                                u = o ? t.right : e.right;
                                            return {
                                                top: i,
                                                bottom: s,
                                                left: a,
                                                right: u,
                                                width: u - a,
                                                height: s - i,
                                                x: a,
                                                y: i
                                            }
                                        }
                                        const t = "left" === (0, r.C0)(n),
                                            e = (0, r.T9)(...h.map((t => t.right))),
                                            o = (0, r.jk)(...h.map((t => t.left))),
                                            i = h.filter((n => t ? n.left === o : n.right === e)),
                                            s = i[0].top,
                                            a = i[i.length - 1].bottom;
                                        return {
                                            top: s,
                                            bottom: a,
                                            left: o,
                                            right: e,
                                            width: e - o,
                                            height: a - s,
                                            x: o,
                                            y: s
                                        }
                                    }
                                    return d
                                }
                            },
                            floating: o.floating,
                            strategy: a
                        });
                        return i.reference.x !== y.reference.x || i.reference.y !== y.reference.y || i.reference.width !== y.reference.width || i.reference.height !== y.reference.height ? {
                            reset: {
                                rects: y
                            }
                        } : {}
                    }
                }
            };
            const v = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            var n, o;
                            const {
                                x: i,
                                y: s,
                                placement: a,
                                middlewareData: u
                            } = e, c = await async function(t, e) {
                                const {
                                    placement: n,
                                    platform: o,
                                    elements: i
                                } = t, s = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), a = (0, r.C0)(n), u = (0, r.Sg)(n), c = "y" === (0, r.TV)(n), l = ["left", "top"].includes(a) ? -1 : 1, f = s && c ? -1 : 1, h = (0, r._3)(e, t);
                                let {
                                    mainAxis: p,
                                    crossAxis: d,
                                    alignmentAxis: v
                                } = "number" == typeof h ? {
                                    mainAxis: h,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...h
                                };
                                return u && "number" == typeof v && (d = "end" === u ? -1 * v : v), c ? {
                                    x: d * f,
                                    y: p * l
                                } : {
                                    x: p * l,
                                    y: d * f
                                }
                            }(e, t);
                            return a === (null == (n = u.offset) ? void 0 : n.placement) && null != (o = u.arrow) && o.alignmentOffset ? {} : {
                                x: i + c.x,
                                y: s + c.y,
                                data: { ...c,
                                    placement: a
                                }
                            }
                        }
                    }
                },
                y = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            const {
                                x: n,
                                y: o,
                                placement: i
                            } = e, {
                                mainAxis: a = !0,
                                crossAxis: u = !1,
                                limiter: c = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...l
                            } = (0, r._3)(t, e), f = {
                                x: n,
                                y: o
                            }, h = await s(e, l), p = (0, r.TV)((0, r.C0)(i)), d = (0, r.PG)(p);
                            let v = f[d],
                                y = f[p];
                            if (a) {
                                const t = "y" === d ? "bottom" : "right",
                                    e = v + h["y" === d ? "top" : "left"],
                                    n = v - h[t];
                                v = (0, r.qE)(e, v, n)
                            }
                            if (u) {
                                const t = "y" === p ? "bottom" : "right",
                                    e = y + h["y" === p ? "top" : "left"],
                                    n = y - h[t];
                                y = (0, r.qE)(e, y, n)
                            }
                            const m = c.fn({ ...e,
                                [d]: v,
                                [p]: y
                            });
                            return { ...m,
                                data: {
                                    x: m.x - n,
                                    y: m.y - o
                                }
                            }
                        }
                    }
                },
                m = function(t) {
                    return void 0 === t && (t = {}), {
                        options: t,
                        fn(e) {
                            const {
                                x: n,
                                y: o,
                                placement: i,
                                rects: s,
                                middlewareData: a
                            } = e, {
                                offset: u = 0,
                                mainAxis: c = !0,
                                crossAxis: l = !0
                            } = (0, r._3)(t, e), f = {
                                x: n,
                                y: o
                            }, h = (0, r.TV)(i), p = (0, r.PG)(h);
                            let d = f[p],
                                v = f[h];
                            const y = (0, r._3)(u, e),
                                m = "number" == typeof y ? {
                                    mainAxis: y,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...y
                                };
                            if (c) {
                                const t = "y" === p ? "height" : "width",
                                    e = s.reference[p] - s.floating[t] + m.mainAxis,
                                    n = s.reference[p] + s.reference[t] - m.mainAxis;
                                d < e ? d = e : d > n && (d = n)
                            }
                            if (l) {
                                var b, g;
                                const t = "y" === p ? "width" : "height",
                                    e = ["top", "left"].includes((0, r.C0)(i)),
                                    n = s.reference[h] - s.floating[t] + (e && (null == (b = a.offset) ? void 0 : b[h]) || 0) + (e ? 0 : m.crossAxis),
                                    o = s.reference[h] + s.reference[t] + (e ? 0 : (null == (g = a.offset) ? void 0 : g[h]) || 0) - (e ? m.crossAxis : 0);
                                v < n ? v = n : v > o && (v = o)
                            }
                            return {
                                [p]: d,
                                [h]: v
                            }
                        }
                    }
                },
                b = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            const {
                                placement: n,
                                rects: o,
                                platform: i,
                                elements: a
                            } = e, {
                                apply: u = (() => {}),
                                ...c
                            } = (0, r._3)(t, e), l = await s(e, c), f = (0, r.C0)(n), h = (0, r.Sg)(n), p = "y" === (0, r.TV)(n), {
                                width: d,
                                height: v
                            } = o.floating;
                            let y, m;
                            "top" === f || "bottom" === f ? (y = f, m = h === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = f, y = "end" === h ? "top" : "bottom");
                            const b = v - l.top - l.bottom,
                                g = d - l.left - l.right,
                                E = (0, r.jk)(v - l[y], b),
                                w = (0, r.jk)(d - l[m], g),
                                _ = !e.middlewareData.shift;
                            let T = E,
                                A = w;
                            if (p ? A = h || _ ? (0, r.jk)(w, g) : g : T = h || _ ? (0, r.jk)(E, b) : b, _ && !h) {
                                const t = (0, r.T9)(l.left, 0),
                                    e = (0, r.T9)(l.right, 0),
                                    n = (0, r.T9)(l.top, 0),
                                    o = (0, r.T9)(l.bottom, 0);
                                p ? A = d - 2 * (0 !== t || 0 !== e ? t + e : (0, r.T9)(l.left, l.right)) : T = v - 2 * (0 !== n || 0 !== o ? n + o : (0, r.T9)(l.top, l.bottom))
                            }
                            await u({ ...e,
                                availableWidth: A,
                                availableHeight: T
                            });
                            const x = await i.getDimensions(a.floating);
                            return d !== x.width || v !== x.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        375527: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => r
            });
            var r = function() {
                return Array.isArray || function(t) {
                    return t && "number" == typeof t.length
                }
            }()
        },
        387904: (t, e, n) => {
            "use strict";

            function r(t) {
                return "function" == typeof t
            }
            n.d(e, {
                T: () => r
            })
        },
        388909: (t, e, n) => {
            "use strict";
            n.d(e, {
                t: () => i
            });
            var r = n(226260),
                o = n(506104),
                i = new r.c(o.l)
        },
        395528: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            var r = "Invariant failed";
            const o = function(t, e) {
                if (!t) throw new Error(r)
            }
        },
        410826: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => o
            });
            var r = n(211794);

            function o(t) {
                return t && "function" == typeof t[r.lJ]
            }
        },
        421346: t => {
            "use strict";
            t.exports = function(t) {
                return !(!t || t.length < 8) && (137 === t[0] && 80 === t[1] && 78 === t[2] && 71 === t[3] && 13 === t[4] && 10 === t[5] && 26 === t[6] && 10 === t[7])
            }
        },
        426242: (t, e, n) => {
            "use strict";
            n.d(e, {
                S: () => s
            });
            var r = n(226260),
                o = n(997752),
                i = n(211794);

            function s(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new r.c((function(n) {
                    var r, s = new o.y;
                    return s.add((function() {
                        r && "function" == typeof r.return && r.return()
                    })), s.add(e.schedule((function() {
                        r = t[i.lJ](), s.add(e.schedule((function() {
                            if (!n.closed) {
                                var t, e;
                                try {
                                    var o = r.next();
                                    t = o.value, e = o.done
                                } catch (i) {
                                    return void n.error(i)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        })))
                    }))), s
                }))
            }
        },
        434008: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            var r = n(675421);

            function o(t, e) {
                t.classList ? t.classList.add(e) : (0, r.A)(t, e) || ("string" == typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e))
            }
        },
        447524: (t, e) => {
            "use strict";
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            });
            class n extends Error {}
            class r extends n {}
            class o extends n {}
            class i extends n {}
            class s extends n {}
            class a extends n {}
            class u extends n {}
            class c extends n {
                constructor(t) {
                    super(`unhandled case: ${JSON.stringify(t)}`)
                }
            }
            let l = 0;

            function f() {
                return l++
            }

            function h(t) {
                return null != t
            }

            function p(t) {
                return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Float32Array
            }

            function d(t) {
                switch (t) {
                    case "i8":
                        return 5120;
                    case "u8":
                        return 5121;
                    case "i16":
                        return 5122;
                    case "u16":
                        return 5123;
                    case "i32":
                        return 5124;
                    case "u32":
                        return 5125;
                    case "f32":
                        return 5126;
                    default:
                        throw new c(t)
                }
            }
            const v = {
                    FLOAT: {
                        type: "float",
                        name: "float",
                        length: 1
                    },
                    VEC2: {
                        type: "float",
                        name: "vec2",
                        length: 2
                    },
                    VEC3: {
                        type: "float",
                        name: "vec3",
                        length: 3
                    },
                    VEC4: {
                        type: "float",
                        name: "vec4",
                        length: 4
                    }
                },
                y = {
                    MAT2: {
                        type: "matrix",
                        name: "mat2",
                        length: 4
                    },
                    MAT3: {
                        type: "matrix",
                        name: "mat3",
                        length: 9
                    },
                    MAT4: {
                        type: "matrix",
                        name: "mat4",
                        length: 16
                    }
                },
                m = {
                    INT: {
                        type: "int",
                        name: "int",
                        length: 1
                    },
                    IVEC2: {
                        type: "int",
                        name: "ivec2",
                        length: 2
                    },
                    IVEC3: {
                        type: "int",
                        name: "ivec3",
                        length: 3
                    },
                    IVEC4: {
                        type: "int",
                        name: "ivec4",
                        length: 4
                    },
                    SAMPLER2D: {
                        type: "int",
                        name: "sampler2D",
                        length: 1
                    }
                },
                b = new Map([
                    [5126, v.FLOAT],
                    [35664, v.VEC2],
                    [35665, v.VEC3],
                    [35666, v.VEC4],
                    [35674, y.MAT2],
                    [35675, y.MAT3],
                    [35676, y.MAT4],
                    [5124, m.INT],
                    [35667, m.IVEC2],
                    [35668, m.IVEC3],
                    [35669, m.IVEC4],
                    [35678, m.SAMPLER2D]
                ]);
            class g {
                constructor(t) {
                    var e;
                    this.id = f(), this.source = t, t instanceof ArrayBuffer ? this.dataType = "f32" : (e = t, "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer ? this.dataType = "f32" : this.dataType = function(t) {
                        if (t instanceof Float32Array) return "f32";
                        if (t instanceof Uint8Array) return "u8";
                        if (t instanceof Int32Array) return "i32";
                        if (t instanceof Uint32Array) return "u32";
                        if (t instanceof Uint8ClampedArray) return "u8";
                        if (t instanceof Int8Array) return "i8";
                        if (t instanceof Int16Array) return "i16";
                        if (t instanceof Uint16Array) return "u16";
                        throw new c(t)
                    }(t)), this.length = t.byteLength / function(t) {
                        switch (t) {
                            case "i8":
                            case "u8":
                                return 1;
                            case "i16":
                            case "u16":
                                return 2;
                            case "i32":
                            case "u32":
                            case "f32":
                                return 4;
                            default:
                                throw new c(t)
                        }
                    }(this.dataType)
                }
            }
            class E extends g {
                constructor() {
                    super(...arguments), this.resourceType = "buffer"
                }
            }
            class w extends g {
                constructor() {
                    super(...arguments), this.resourceType = "elements"
                }
            }
            const _ = {
                    points: 0,
                    lines: 1,
                    "line loop": 2,
                    "line strip": 3,
                    triangles: 4,
                    "triangle strip": 5,
                    "triangle fan": 6
                },
                T = {
                    zero: 0,
                    one: 1,
                    "src color": 768,
                    "one minus src color": 769,
                    "dst color": 774,
                    "one minus dst color": 775,
                    "src alpha": 770,
                    "one minus src alpha": 771,
                    "dst alpha": 772,
                    "one minus dst alpha": 773,
                    "constant color": 32769,
                    "one minus constant color": 32770,
                    "constant alpha": 32771,
                    "one minus constant alpha": 32772,
                    "src alpha saturate": 776
                },
                A = {
                    front: 1028,
                    back: 1029,
                    "front and back": 1032
                },
                x = {
                    cw: 2304,
                    ccw: 2305
                },
                O = {
                    add: 32774,
                    subtract: 32778,
                    "reverse subtract": 32779
                },
                R = {
                    source: "one",
                    destination: "zero",
                    equation: "add"
                };
            const N = {
                never: 512,
                less: 513,
                equal: 514,
                lequal: 515,
                greater: 516,
                notequal: 517,
                gequal: 518,
                always: 519
            };
            class S {
                constructor({
                    primitive: t = "triangles",
                    shader: e,
                    attributes: n,
                    indices: r,
                    count: o = 0,
                    instances: i,
                    uniforms: s = {},
                    textures: a = {},
                    blend: u,
                    depthTest: c,
                    cullFace: l,
                    frontFace: f,
                    renderTarget: h
                }) {
                    var d;
                    this.primitive = _[t], this.shader = e, this.attributes = function(t) {
                        const e = Object.create(null);
                        for (const [n, r] of Object.entries(t)) {
                            let t;
                            t = "buffer" in r && !p(r) ? { ...r,
                                buffer: C(r.buffer)
                            } : {
                                buffer: C(r)
                            }, e[n] = t
                        }
                        return e
                    }(n), this.indices = r ? (d = r, Array.isArray(d) && (d = new Uint16Array(d)), p(d) && (d = new w(d)), d) : void 0, this.count = o, this.instances = i, this.uniforms = s, this.textures = a, this._cullFace = l ? A[l] : void 0, this._frontFace = f ? x[f] : 2305, this.blend = u ? function(t) {
                        var e, n;
                        const r = { ...R,
                                ...null != (e = t.rgb) ? e : t
                            },
                            o = { ...R,
                                ...null != (n = t.alpha) ? n : t
                            };
                        return {
                            rgb: {
                                source: T[r.source],
                                destination: T[r.destination],
                                equation: O[r.equation]
                            },
                            alpha: {
                                source: T[o.source],
                                destination: T[o.destination],
                                equation: O[o.equation]
                            }
                        }
                    }(u) : void 0, this.depthTest = c ? function(t) {
                        var e, n;
                        return {
                            mask: null == (e = t.mask) || e,
                            func: N[null != (n = t.func) ? n : "less"],
                            range: {
                                near: 0,
                                far: 1,
                                ...t.range
                            }
                        }
                    }(c) : void 0, this.renderTarget = h
                }
                get cullFace() {
                    return this._cullFace
                }
                set cullFace(t) {
                    this._cullFace = void 0 !== t ? A[t] : void 0
                }
                get frontFace() {
                    return this._frontFace
                }
                set frontFace(t) {
                    t in x && (this._frontFace = x[t])
                }
                get resources() {
                    return [this.shader, ...Object.values(this.attributes).map((t => t.buffer)), ...Object.values(this.textures), this.indices, this.renderTarget].filter(h)
                }
            }

            function C(t) {
                return Array.isArray(t) && (t = new Float32Array(t)), p(t) && (t = new E(t)), t
            }
            class P {
                constructor(t) {
                    this.id = f(), this.resourceType = "shader", this.vertexSource = t.vertexSource, this.fragmentSource = t.fragmentSource
                }
            }
            const L = "preserve",
                j = "fixed";
            class I {
                constructor(t) {
                    var e;
                    this.id = f(), this.resourceType = "texture", this.textureType = "image", this.size = j, this.numberFormat = "u8", this.source = t.source, this.name = t.name, this.alpha = t.alpha || L, this.anisotropy = null != (e = t.anisotropy) ? e : 0, this.colorFormat = t.colorFormat || "rgba"
                }
                get width() {
                    return this.source.width
                }
                get height() {
                    return this.source.height
                }
            }
            class k {
                constructor(t) {
                    var e;
                    this.id = f(), this.resourceType = "texture", this.textureType = "binary", this.size = j, this.source = t.source, this.name = t.name, this.alpha = t.alpha || L, this.width = t.width, this.height = t.height, this.anisotropy = null != (e = t.anisotropy) ? e : 0
                }
                get colorFormat() {
                    const t = this.source.length / (this.width * this.height);
                    if (1 === t) return "r";
                    if (3 === t) return "rgb";
                    if (4 === t) return "rgba";
                    throw new a(`Invalid number of color channels for binary texture with ID: ${this.id}. Number of channels must be 1 (R) or 3 (RGB) or 4 (RGBA) but the provided data has ${t} channels.`)
                }
                get numberFormat() {
                    return this.source instanceof Uint8Array ? "u8" : "f32"
                }
            }
            class B {
                constructor(t) {
                    var e;
                    this.id = f(), this.resourceType = "texture", this.textureType = "render", this.source = null, this.name = t.name, this.alpha = t.alpha || L, this.size = t.size || j, this.width = t.width || ("fixed" === this.size ? 0 : 1), this.height = t.height || ("fixed" === this.size ? 0 : 1), this.colorFormat = t.colorFormat, this.numberFormat = t.numberFormat, this.anisotropy = null != (e = t.anisotropy) ? e : 0
                }
            }

            function M(t, e) {
                return {
                    width: "fixed" === t.size ? t.width || e.width : (t.width || 1) * e.width,
                    height: "fixed" === t.size ? t.height || e.height : (t.height || 1) * e.height
                }
            }

            function D(t, e) {
                if ("u32" === e.dataType && !t.getExtension("OES_element_index_uint")) throw new s("UNSIGNED_INT indices are not supported on this device.");
                const n = t.createBuffer(),
                    r = "buffer" === e.resourceType ? t.ARRAY_BUFFER : t.ELEMENT_ARRAY_BUFFER;
                return t.bindBuffer(r, n), t.bufferData(r, e.source, t.STATIC_DRAW), t.bindBuffer(r, null), n
            }
            class F {
                constructor(t, e, n) {
                    this.name = t.name, this.length = t.size, this.location = e;
                    const r = b.get(t.type);
                    if (!r) throw new a(`Type of uniform '${t.name}' is not supported.`);
                    this.meta = r, this._data = this.parseData(n)
                }
                parseData(t) {
                    if (!t) return new Array(this.meta.length).fill(0);
                    const e = this.meta.length * this.length;
                    if (t.flat().length !== e) throw new a(`Could not set uniform '${this.meta.type} ${this.name}'. Expected data with a length of ${e} but your data has a length of ${t.length}.`);
                    return t
                }
                equals(t) {
                    const e = this._data,
                        n = t;
                    if (e.length !== n.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (e[r] !== n[r]) return !1;
                    return !0
                }
                get data() {
                    return this._data
                }
                set data(t) {
                    this._data = this.parseData(t)
                }
            }

            function U(t, e) {
                const {
                    meta: n,
                    name: r,
                    location: o,
                    data: i
                } = e, s = i.flat();
                if ("int" === n.type) switch (n.length) {
                    case 1:
                        t.uniform1iv(o, s);
                        break;
                    case 2:
                        t.uniform2iv(o, s);
                        break;
                    case 3:
                        t.uniform3iv(o, s);
                        break;
                    case 4:
                        t.uniform4iv(o, s);
                        break;
                    default:
                        throw new a(`Could not set the value for uniform '${r}'. Make sure its length is between 1 and 4 (inclusive).`)
                } else if ("float" === n.type) switch (n.length) {
                    case 1:
                        t.uniform1fv(o, s);
                        break;
                    case 2:
                        t.uniform2fv(o, s);
                        break;
                    case 3:
                        t.uniform3fv(o, s);
                        break;
                    case 4:
                        t.uniform4fv(o, s);
                        break;
                    default:
                        throw new a(`Could not set the value for uniform '${r}'. Make sure its length is between 1 and 4 (inclusive).`)
                } else switch (n.length) {
                    case 4:
                        t.uniformMatrix2fv(o, !1, s);
                        break;
                    case 9:
                        t.uniformMatrix3fv(o, !1, s);
                        break;
                    case 16:
                        t.uniformMatrix4fv(o, !1, s);
                        break;
                    default:
                        throw new a(`Could not set the value for uniform '${r}'. Make sure its length is between 2 and 4 (inclusive).`)
                }
            }

            function H(t, e, n) {
                (function(t) {
                    const e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                    return !!e && e.precision > 10
                })(t) && (n = function(t) {
                    return t.replace("precision mediump float;", "precision highp float;")
                }(n));
                const i = t.createShader(e);
                if (!i) throw new o("Could not create shader");
                if (t.shaderSource(i, n), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS)) return i; {
                    const n = t.getShaderInfoLog(i);
                    t.deleteShader(i);
                    const o = e === t.VERTEX_SHADER ? "vertex" : "fragment";
                    throw new r(`Could not compile ${o} shader. Details: ${n}`)
                }
            }

            function G(t, e) {
                const n = function(t, e, n) {
                    const i = t.createProgram();
                    if (!i) throw new o("Could not create program");
                    const s = H(t, t.VERTEX_SHADER, e),
                        a = H(t, t.FRAGMENT_SHADER, n);
                    if (t.attachShader(i, s), t.attachShader(i, a), t.linkProgram(i), t.deleteShader(s), t.deleteShader(a), t.getProgramParameter(i, t.LINK_STATUS)) return i;
                    throw new r(`Could not link program. Details: ${t.getProgramInfoLog(i)}`)
                }(t, e.vertexSource, e.fragmentSource);
                t.useProgram(n);
                const i = t.getProgramParameter(n, t.ACTIVE_ATTRIBUTES),
                    s = new Map;
                for (let r = 0; r < i; r++) {
                    const e = t.getActiveAttrib(n, r),
                        o = e ? t.getAttribLocation(n, e.name) : -1;
                    if (!e || -1 === o) throw new u(`Could not cache attribute. Could not find attribute or location at index ${r}. This is likely a bug with the renderer.`);
                    const i = b.get(e.type);
                    if (!i) throw new a(`Type of attribute '${e.name}' is not supported.`);
                    t.enableVertexAttribArray(o), s.set(e.name, {
                        location: o,
                        meta: i
                    })
                }
                const c = t.getProgramParameter(n, t.ACTIVE_UNIFORMS),
                    l = new Map,
                    f = new Map;
                let h = 0;
                for (let r = 0; r < c; r++) {
                    const e = t.getActiveUniform(n, r),
                        o = e ? t.getUniformLocation(n, e.name) : null;
                    if (!e || !o) throw new u(`Could not cache uniform. Could not find uniform or location at index ${r}. This is likely a bug with the renderer.`);
                    const i = e.name.endsWith("[0]") ? e.name.slice(0, -3) : e.name;
                    if (e.type === t.SAMPLER_2D || e.type === t.SAMPLER_CUBE) {
                        const n = new F(e, o, [h]);
                        l.set(i, n), U(t, n), h++
                    } else {
                        const n = new F(e, o);
                        f.set(i, n), U(t, n)
                    }
                }
                return t.useProgram(null), {
                    program: n,
                    attributes: s,
                    textures: l,
                    uniforms: f
                }
            }
            let V;

            function q(t, e) {
                return M(e, {
                    width: t.drawingBufferWidth,
                    height: t.drawingBufferHeight
                })
            }

            function z(t, e, n) {
                var r;
                if ("undefined" != typeof WebGLRenderingContext && t instanceof WebGLRenderingContext && "f32" === e.numberFormat && !t.getExtension("OES_texture_float")) throw new s("No support for floating point textures");
                const i = t.TEXTURE_2D,
                    a = null != (r = null == n ? void 0 : n.texture) ? r : t.createTexture();
                if (!a) throw new o(`Could not create \`WebGLTexture\` for texture: ${function(t){return JSON.stringify(t,(function(t,e){if("resourceType"!==t){if(e instanceof Uint8Array||e instanceof Float32Array){const{length:t}=e;return{length:t}}if(e instanceof HTMLImageElement||e instanceof HTMLVideoElement){const{src:t,width:n,height:r}=e;return{src:t,width:n,height:r}}return e}console.log("stripping resource type",e)}),2)}(e)}`);
                t.bindTexture(i, a), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, "premultiply" === e.alpha), t.pixelStorei(t.UNPACK_ALIGNMENT, "r" === e.colorFormat ? 1 : 4);
                const u = "f32" === e.numberFormat ? t.FLOAT : t.UNSIGNED_BYTE,
                    l = function(t, e) {
                        if ("image" === e.textureType) {
                            const t = e.source;
                            if ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) return t;
                            if (t instanceof HTMLImageElement) return `${t.src}:${t.currentSrc}:${W(e)}`;
                            if (t instanceof HTMLVideoElement) return `${t.src}:${t.currentSrc}:${t.currentTime}:${W(e)}`
                        } else if ("render" === e.textureType) {
                            const {
                                width: n,
                                height: r
                            } = q(t, e);
                            return `${n}:${r}`
                        }
                    }(t, e),
                    f = W(e),
                    h = !n || !l || l !== n.hash,
                    p = X(t, e.colorFormat),
                    d = function(t, e, n) {
                        if (!("undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext && "f32" === n)) return X(t, e);
                        switch (e) {
                            case "r":
                                throw t.R32F;
                            case "rgb":
                                return t.RGB32F;
                            case "rgba":
                                return t.RGBA32F;
                            default:
                                throw new c(e)
                        }
                    }(t, e.colorFormat, e.numberFormat);
                if (f && h)
                    if ("image" !== e.textureType) {
                        const n = e.source,
                            {
                                width: r,
                                height: o
                            } = q(t, e);
                        t.texImage2D(i, 0, d, r, o, 0, p, u, n)
                    } else {
                        const n = e.source;
                        (function(t) {
                            return "tagName" in t && "IMG" === t.tagName
                        })(n) && function(t) {
                            const e = document.createElement("a");
                            return e.href = t, !("data:" === e.protocol || "blob:" === e.protocol)
                        }(n.src) && !n.crossOrigin && console.warn(`Fragl warning: ${n.src} image may come from a different origin but you did not set the crossOrigin attribute.`), t.texImage2D(i, 0, d, p, u, n)
                    }
                const v = "f32" === e.numberFormat ? t.NEAREST : t.LINEAR;
                t.texParameteri(i, t.TEXTURE_MIN_FILTER, v), t.texParameteri(i, t.TEXTURE_MAG_FILTER, v), t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
                const {
                    anisotropy: y
                } = e, m = y ? t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") : null;
                return y && m && (null != V || (V = t.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), t.texParameterf(t.TEXTURE_2D, m.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y, V))), t.bindTexture(i, null), {
                    texture: a,
                    hash: l
                }
            }

            function X(t, e) {
                switch (e) {
                    case "r":
                        return t.LUMINANCE;
                    case "rgb":
                        return t.RGB;
                    case "rgba":
                        return t.RGBA;
                    default:
                        throw new c(e)
                }
            }

            function W(t) {
                if ("image" === t.textureType) {
                    const e = t.source;
                    if (e instanceof HTMLImageElement) return e.complete;
                    if (e instanceof HTMLVideoElement) return e.readyState >= 2
                }
                return !0
            }
            class K {
                constructor(t) {
                    this.gl = t, this.maxAttribs = Number(t.getParameter(t.MAX_VERTEX_ATTRIBS)), this.shouldEnable = Array.from({
                        length: this.maxAttribs
                    }).fill(!1), this.hasEnabled = Array.from({
                        length: this.maxAttribs
                    }).fill(!1)
                }
                setEnabled(t, e) {
                    if (t < 0) throw new Error(`Attribute index ${t} is out of bounds`);
                    if (t >= this.maxAttribs) throw new Error(`Attribute index ${t} exceeds the maximum number of attributes supported by this device: ${this.maxAttribs}`);
                    this.shouldEnable[t] = e
                }
                update() {
                    for (let t = 0; t < this.maxAttribs; t++) this.shouldEnable[t] !== this.hasEnabled[t] && (this.hasEnabled[t] = this.shouldEnable[t], this.shouldEnable[t] ? this.gl.enableVertexAttribArray(t) : this.gl.disableVertexAttribArray(t))
                }
                reset() {
                    for (let t = 0; t < this.maxAttribs; t++) this.shouldEnable[t] = !1
                }
            }
            class Y {
                constructor(t, e) {
                    this.gl = t, this.bufferCache = new Map, this.shaderCache = new Map, this.textureCache = new Map, this.handleContextLost = t => {
                        if (this.onContextLost) {
                            let e = "No WebGLContextEvent";
                            t && (e = (null == t ? void 0 : t.statusMessage) || "No statusMessage"), this.onContextLost(new i(`Error: WebGL context lost - ${e}`))
                        }
                    }, this.env = (null == e ? void 0 : e.env) || window || {
                        devicePixelRatio: 1
                    };
                    const n = t.canvas;
                    if (!n) throw new i("Unexpected canvas type: " + typeof n);
                    this.onDispose = null == e ? void 0 : e.onDispose, this.canvas = n;
                    const [r, o] = this.canvasSize;
                    this.canvas.width = ((null == e ? void 0 : e.width) || r) * this.env.devicePixelRatio, this.canvas.height = ((null == e ? void 0 : e.height) || o) * this.env.devicePixelRatio, this.canvas.addEventListener("webglcontextlost", this.handleContextLost, {
                        once: !0
                    }), this.fbo = t.createFramebuffer(), this.vertexAttribArrayState = new K(t)
                }
                flush() {
                    this.gl.flush()
                }
                resize(...t) {
                    let e, n;
                    "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? [e = this.canvas.clientWidth, n = this.canvas.clientHeight] = t : [e, n] = t, this.canvas.width = e * this.env.devicePixelRatio, this.canvas.height = n * this.env.devicePixelRatio
                }
                load(t) {
                    const e = this.gl,
                        n = Array.isArray(t) ? t : t.resources;
                    for (const r of n) switch (r.resourceType) {
                        case "buffer":
                        case "elements":
                            this.bufferCache.has(r.id) || this.bufferCache.set(r.id, D(e, r));
                            break;
                        case "shader":
                            this.shaderCache.has(r.id) || this.shaderCache.set(r.id, G(e, r));
                            break;
                        case "texture":
                            this.textureCache.has(r.id) || this.textureCache.set(r.id, z(e, r));
                            break;
                        default:
                            throw new c(r)
                    }
                }
                update(t) {
                    const e = this.gl,
                        n = Array.isArray(t) ? t : t.resources;
                    for (const r of n)
                        if ("texture" === r.resourceType) {
                            const t = this.textureCache.get(r.id);
                            if (!t) throw new i(`Could not update texture with ID: '${r.id}'. Did you remember to use load()?`);
                            this.textureCache.set(r.id, z(e, r, t))
                        }
                }
                clear(t, e) {
                    var n;
                    const r = this.gl;
                    if (e) {
                        const t = null == (n = this.textureCache.get(e.id)) ? void 0 : n.texture;
                        if (!t) throw new i(`Could not find render target with ID: ${e.id}. Did you remember to use load()?`);
                        r.bindFramebuffer(r.FRAMEBUFFER, this.fbo), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0)
                    } else r.bindFramebuffer(r.FRAMEBUFFER, null);
                    const o = Array.isArray(t),
                        s = o ? t : t.color,
                        a = o ? 1 : t.depth,
                        u = o ? 255 : t.stencil,
                        c = void 0 !== s,
                        l = void 0 !== a,
                        f = void 0 !== u;
                    c && r.clearColor(...s), l && r.clearDepth(a), f && r.clearStencil(u);
                    const h = (c ? r.COLOR_BUFFER_BIT : 0) | (l ? r.DEPTH_BUFFER_BIT : 0) | (f ? r.STENCIL_BUFFER_BIT : 0);
                    r.clear(h)
                }
                render(t) {
                    var e, n, r, o, u, c, l;
                    const f = this.gl,
                        h = Array.isArray(t) ? t : t.renderables;
                    for (const p of h) {
                        const t = this.shaderCache.get(p.shader.id);
                        if (!t) throw new i(`Could not find shader with ID: ${p.shader.id}. Did you remember to use load()?`);
                        if (p.blend) {
                            const {
                                rgb: t,
                                alpha: e
                            } = p.blend;
                            f.enable(f.BLEND), f.blendFuncSeparate(t.source, t.destination, e.source, e.destination), f.blendEquationSeparate(t.equation, e.equation)
                        } else f.disable(f.BLEND);
                        if (p.depthTest) {
                            const {
                                depthTest: t
                            } = p;
                            f.enable(f.DEPTH_TEST), f.depthMask(t.mask), f.depthFunc(t.func), f.depthRange(t.range.near, t.range.far)
                        } else f.disable(f.DEPTH_TEST);
                        if (p.cullFace ? (f.enable(f.CULL_FACE), f.frontFace(p.frontFace), f.cullFace(p.cullFace)) : f.disable(f.CULL_FACE), f.useProgram(t.program), p.indices) {
                            const t = this.getBuffer(p.indices);
                            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, t)
                        } else f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, null);
                        const h = p.instances ? f.getExtension("ANGLE_instanced_arrays") : null;
                        if (p.instances && !h) throw new s("Instancing is required but not supported on this device");
                        this.vertexAttribArrayState.reset();
                        for (const [s, {
                                location: a,
                                meta: u
                            }] of t.attributes.entries()) {
                            this.vertexAttribArrayState.setEnabled(a, !0);
                            const t = p.attributes[s];
                            if (!t) throw new i(`Could not locate shader attribute ${s} within Renderable's attributes.`);
                            const c = d(null != (e = t.type) ? e : t.buffer.dataType),
                                l = this.getBuffer(t.buffer);
                            f.bindBuffer(f.ARRAY_BUFFER, l), f.vertexAttribPointer(a, u.length, c, null != (n = t.normalized) && n, null != (r = t.stride) ? r : 0, null != (o = t.offset) ? o : 0), p.instances && t.divisor && h.vertexAttribDivisorANGLE(a, t.divisor)
                        }
                        this.vertexAttribArrayState.update();
                        const v = { ...p.uniforms,
                            ...this.commonUniforms
                        };
                        for (const [e, n] of t.uniforms.entries()) {
                            const t = v[e];
                            if (!t) throw new a(`Could not find a value for uniform '${e}'. Make sure you provide a value.`);
                            n.equals(t) || (n.data = t, U(f, n))
                        }
                        for (const [e, n] of t.textures.entries()) {
                            f.activeTexture(f.TEXTURE0 + n.data.flat()[0]), f.bindTexture(f.TEXTURE_2D, null);
                            const t = p.textures[e];
                            if (!t) throw new a(`Could not find a texture associated with uniform '${e}'. Make sure you provide a value.`);
                            const r = null == (u = this.textureCache.get(t.id)) ? void 0 : u.texture;
                            if (!r) throw new i(`Could not find texture with ID: ${t.id}. Did you remember to use load()?`);
                            f.bindTexture(f.TEXTURE_2D, r)
                        }
                        if (p.renderTarget) {
                            const t = null == (c = this.textureCache.get(p.renderTarget.id)) ? void 0 : c.texture;
                            if (!t) throw new i(`Could not find render target with ID: ${p.renderTarget.id}. Did you remember to use load()?`);
                            const {
                                width: e,
                                height: n
                            } = q(f, p.renderTarget);
                            f.bindFramebuffer(f.FRAMEBUFFER, this.fbo), f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_2D, t, 0), f.viewport(0, 0, e, n)
                        } else f.bindFramebuffer(f.FRAMEBUFFER, null), f.viewport(0, 0, f.drawingBufferWidth, f.drawingBufferHeight);
                        p.instances ? p.indices ? h.drawElementsInstancedANGLE(p.primitive, p.indices.length, d(p.indices.dataType), 0, p.instances) : h.drawArraysInstancedANGLE(p.primitive, 0, p.count, p.instances) : p.indices ? f.drawElements(p.primitive, p.indices.length, d(p.indices.dataType), 0) : f.drawArrays(p.primitive, 0, null != (l = p.count) ? l : 0)
                    }
                }
                release(t) {
                    const e = Array.isArray(t) ? t : t.resources;
                    for (const n of e) this.deleteResource(n.id, n.resourceType)
                }
                readPixels(t) {
                    var e;
                    const n = this.gl;
                    let r;
                    if (t) {
                        const o = null == (e = this.textureCache.get(t.id)) ? void 0 : e.texture;
                        if (!o) throw new i(`Could not find render target with ID: ${t.id}. Did you remember to use load()?`);
                        r = q(n, t), n.bindFramebuffer(n.FRAMEBUFFER, this.fbo), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, o, 0)
                    } else n.bindFramebuffer(n.FRAMEBUFFER, null), r = {
                        width: n.drawingBufferWidth,
                        height: n.drawingBufferHeight
                    };
                    const o = new Uint8Array(r.width * r.height * 4);
                    return n.readPixels(0, 0, r.width, r.height, n.RGBA, n.UNSIGNED_BYTE, o), new ImageData(new Uint8ClampedArray(o.buffer), r.width, r.height)
                }
                dispose() {
                    var t;
                    const e = this.gl;
                    for (const r of this.bufferCache.keys()) this.deleteResource(r, "buffer");
                    for (const r of this.shaderCache.keys()) this.deleteResource(r, "shader");
                    for (const r of this.textureCache.keys()) this.deleteResource(r, "texture");
                    this.bufferCache.clear(), this.shaderCache.clear(), this.textureCache.clear(), e.deleteFramebuffer(this.fbo), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindRenderbuffer(e.RENDERBUFFER, null), e.bindFramebuffer(e.FRAMEBUFFER, null);
                    const n = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
                    for (let r = 0; r < n; r++) e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, null), e.bindTexture(e.TEXTURE_CUBE_MAP, null);
                    this.canvas.width = this.canvas.height = 0, this.canvas.removeEventListener("webglcontextlost", this.handleContextLost), null == (t = this.onDispose) || t.call(this)
                }
                deleteResource(t, e) {
                    var n;
                    const r = this.gl;
                    switch (e) {
                        case "buffer":
                        case "elements":
                            const o = this.bufferCache.get(t) || null;
                            r.deleteBuffer(o), this.bufferCache.delete(t);
                            break;
                        case "shader":
                            const i = this.shaderCache.get(t);
                            r.deleteProgram((null == i ? void 0 : i.program) || null), this.shaderCache.delete(t);
                            break;
                        case "texture":
                            const s = null == (n = this.textureCache.get(t)) ? void 0 : n.texture;
                            r.deleteTexture(s || null), this.textureCache.delete(t);
                            break;
                        default:
                            throw new c(e)
                    }
                }
                getBuffer(t) {
                    const e = this.bufferCache.get(t.id);
                    if (!e) throw new i(`Could not find buffer with ID: ${t.id}. Did you remember to use load()?`);
                    return e
                }
                get commonUniforms() {
                    return {
                        uResolution: [this.gl.drawingBufferWidth, this.gl.drawingBufferHeight],
                        uViewSize: this.canvasSize,
                        uDevicePixelRatio: [this.env.devicePixelRatio]
                    }
                }
                get canvasSize() {
                    return "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? [this.canvas.clientWidth, this.canvas.clientHeight] : [this.canvas.width, this.canvas.height]
                }
            }
            const $ = "uPrevResult",
                Z = {
                    attributes: {
                        aPosition: new E(new Float32Array([-1, -1, 3, -1, -1, 3]))
                    },
                    count: 3
                },
                J = {
                    attributes: {
                        aPosition: new E(new Float32Array([-1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1]))
                    },
                    count: 6
                };

            function Q(t) {
                return t.replace(/void\s+main\(\s*\)\s*{([\s\S]*?)}\s*$/, ((t, e) => `void main() {${e}gl_FragColor.rgb *= gl_FragColor.a;\n}`))
            }

            function tt(t) {
                return function(t) {
                    return Array.isArray(t)
                }(t) ? t : [t]
            }
            const et = [],
                nt = et;

            function rt(t, e, n, r, o = et) {
                const i = o,
                    s = i.find((o => !t.includes(o.texture) && e === o.width && n === o.height && r === o.size));
                if (s) return s.texture;
                const a = function(t, e, n, r) {
                    return new B({
                        name: t,
                        width: e,
                        height: n,
                        size: r || "relative",
                        colorFormat: "rgba",
                        numberFormat: "u8"
                    })
                }(`pooled-render-texture-${i.length.toString()}`, e, n, r);
                return i.push({
                    texture: a,
                    width: e,
                    height: n,
                    size: r
                }), a
            }
            class ot {
                constructor(t) {
                    this.index = 0, this._textures = null != t ? t : [new B({
                        colorFormat: "rgba",
                        numberFormat: "u8"
                    }), new B({
                        colorFormat: "rgba",
                        numberFormat: "u8"
                    })]
                }
                get textures() {
                    return this._textures
                }
                currentBuffer() {
                    return this._textures[this.index]
                }
                nextBuffer() {
                    return this.index = (this.index + 1) % this._textures.length, this._textures[this.index]
                }
            }
            const it = class t {
                static createPingpongBuffers({
                    width: t,
                    height: e,
                    size: n
                } = {}) {
                    const r = rt([], t, e, n),
                        o = rt([r], t, e, n);
                    return new ot([r, o])
                }
                constructor({
                    passes: e,
                    uniforms: n,
                    textures: r,
                    options: {
                        buffers: o,
                        renderTarget: i,
                        enableOneTriangleOptimisation: s
                    } = {}
                }) {
                    this.enableOneTriangleOptimisation = null != s ? s : t.enableOneTriangleOptimisation;
                    const a = null != o ? o : t.createPingpongBuffers(i),
                        {
                            passes: u,
                            uniforms: c
                        } = this.convertShorthands(e, n);
                    this.uniforms = c;
                    const l = u[u.length - 1];
                    this.finalPassShaderForCanvas = this.getShader(l, !0), this.finalPassShaderForRenderTexture = this.getShader(l, !1);
                    const f = this.createRenderTextures(u, a, i);
                    this.renderables = this.getRenderables(u, f, a, r, i)
                }
                convertShorthands(t, e) {
                    return {
                        passes: t.map((t => "string" == typeof t ? {
                            fragment: t
                        } : t)),
                        uniforms: Object.fromEntries(Object.entries(null != e ? e : {}).map((([t, e]) => [t, tt(e)])))
                    }
                }
                createRenderTextures(t, e, n) {
                    const r = new Map;
                    for (const o of t) o.output && r.set(o.output, rt([...e.textures, ...r.values()], null == n ? void 0 : n.width, null == n ? void 0 : n.height, null == n ? void 0 : n.size));
                    return r
                }
                getRenderables(t, e, n, r, o) {
                    const i = t.slice(0, -1).map((t => {
                            const o = this.getShader(t, !1),
                                i = n.currentBuffer(),
                                s = t.output ? this.getRenderTexture(t.output, e) : n.nextBuffer();
                            return this.getRenderable(t, o, i, s, e, r)
                        })),
                        s = o ? this.finalPassShaderForRenderTexture : this.finalPassShaderForCanvas;
                    return [...i, this.getRenderable(t[t.length - 1], s, n.currentBuffer(), o, e, r)]
                }
                getRenderable(t, e, n, r, o, i) {
                    const s = this.uniforms,
                        a = this.getTextures(t, { ...i,
                            [$]: n
                        }, o),
                        u = this.enableOneTriangleOptimisation ? Z : J;
                    return new S({ ...u,
                        shader: e,
                        uniforms: s,
                        textures: a,
                        renderTarget: r
                    })
                }
                getShader(t, e) {
                    const n = `\nattribute vec2 aPosition;\nvarying vec2 vTexCoord;\n\nvoid main()\n{\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTexCoord = aPosition * 0.5 + 0.5;\n    ${e?"vTexCoord.y = 1.0 - vTexCoord.y;":""}\n}\n  `,
                        r = this.getFragmentSource(t.fragment, e);
                    return new P({
                        vertexSource: n,
                        fragmentSource: r
                    })
                }
                getFragmentSource(t, e) {
                    return e ? Q(t) : t
                }
                getRenderTexture(t, e) {
                    const n = e.get(t);
                    if (!n) throw new a(`Unable to assign texture. Could not find texture '${t}'.`);
                    return n
                }
                getTextures(t, e, n) {
                    if (t.inputs)
                        for (const r of t.inputs) e[r] = this.getRenderTexture(r, n);
                    return e
                }
                update({
                    textures: t,
                    uniforms: e,
                    renderTarget: n
                }) {
                    if (t)
                        for (const [r, o] of Object.entries(t))
                            if (o)
                                for (const t of this.renderables) t.textures[r] = o;
                    if (e)
                        for (const [r, o] of Object.entries(e)) this.uniforms[r] && (this.uniforms[r] = tt(o));
                    if (void 0 !== n) {
                        const t = this.renderables[this.renderables.length - 1],
                            e = null === n ? this.finalPassShaderForCanvas : this.finalPassShaderForRenderTexture;
                        t.renderTarget = null != n ? n : void 0, t.shader = e
                    }
                }
                get resources() {
                    return [...new Set([...this.renderables.flatMap((t => t.resources)), this.finalPassShaderForCanvas, this.finalPassShaderForRenderTexture])]
                }
            };
            it.enableOneTriangleOptimisation = !1;
            let st, at, ut = it;

            function ct(t, e) {
                if (!(st && at || (st = document.createElement("canvas"), at = st.getContext("2d"), at))) throw new n("Unable to establish `CanvasRenderingContext2D` for debugging");
                return st.width = t, st.height = e, {
                    canvas: st,
                    context: at
                }
            }

            function lt(t, e) {
                const n = t.readPixels(e),
                    {
                        width: r,
                        height: o
                    } = n,
                    {
                        canvas: i,
                        context: s
                    } = ct(r, o);
                s.putImageData(n, 0, 0);
                const a = i.toDataURL();
                pt(null != e ? e : t.canvas, a, r / o)
            }

            function ft(t) {
                const {
                    width: e,
                    height: n
                } = t, {
                    canvas: r,
                    context: o
                } = ct(e, n);
                t.source instanceof ImageData ? o.putImageData(t.source, 0, 0) : o.drawImage(t.source, 0, 0);
                pt(t, r.toDataURL(), e / n)
            }

            function ht(t) {
                const {
                    source: e,
                    colorFormat: n,
                    width: r,
                    height: o
                } = t, {
                    canvas: i,
                    context: s
                } = ct(r, o), a = "rgba" === n, u = s.createImageData(r, o), c = u.data;
                for (let l = 0, f = 0; l < e.length; l += a ? 4 : 3, f += 4) c[f] = e[l], c[f + 1] = e[l + 1], c[f + 2] = e[l + 2], c[f + 3] = a ? e[l + 3] : 255;
                s.putImageData(u, 0, 0);
                pt(t, i.toDataURL(), r / o)
            }

            function pt(t, e, n) {
                const r = `\n    font-size: 0;\n    padding-left: 256px;\n    padding-bottom: ${256/n}px;\n    vertical-align: top;\n    background-image: \n      url(${e}),\n      url('data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n    <rect width="10" height="10" fill="#ccc"/>\n    <rect x="10" y="10" width="10" height="10" fill="#ccc"/>\n    <rect x="10" y="0" width="10" height="10" fill="white"/>\n    <rect y="10" width="10" height="10" fill="white"/>\n  </svg>')}');\n    background-position: center, 0 0;\n    background-size: contain, 20px 20px;\n    background-repeat: no-repeat, repeat;\n  `;
                console.group("Debugging", t), console.log("%c ", r), console.groupEnd()
            }
            const dt = "LkEaxkGQc",
                vt = "mXA59BV4k",
                yt = "x8cqPYjGq",
                mt = "zAvK5sktl",
                bt = "j5BD_wqsh",
                gt = "Flt8u8M0x",
                Et = "m5a6RRSnk",
                wt = "MpMrqOkTf",
                _t = "ihJIFSpvi",
                Tt = "mjiW1vcGg",
                At = "T1GP6ZTnQ",
                xt = "zztE2SnZx",
                Ot = "LPlLw5zPI",
                Rt = "MLGoNA0wv";
            var Nt = 1e-6,
                St = "undefined" != typeof Float32Array ? Float32Array : Array;

            function Ct() {
                var t = new St(9);
                return St != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
            }

            function Pt() {
                var t = new St(16);
                return St != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
            }

            function Lt(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }

            function jt(t, e, n) {
                var r = e[0],
                    o = e[1],
                    i = e[2],
                    s = e[3],
                    a = e[4],
                    u = e[5],
                    c = e[6],
                    l = e[7],
                    f = e[8],
                    h = e[9],
                    p = e[10],
                    d = e[11],
                    v = e[12],
                    y = e[13],
                    m = e[14],
                    b = e[15],
                    g = n[0],
                    E = n[1],
                    w = n[2],
                    _ = n[3];
                return t[0] = g * r + E * a + w * f + _ * v, t[1] = g * o + E * u + w * h + _ * y, t[2] = g * i + E * c + w * p + _ * m, t[3] = g * s + E * l + w * d + _ * b, g = n[4], E = n[5], w = n[6], _ = n[7], t[4] = g * r + E * a + w * f + _ * v, t[5] = g * o + E * u + w * h + _ * y, t[6] = g * i + E * c + w * p + _ * m, t[7] = g * s + E * l + w * d + _ * b, g = n[8], E = n[9], w = n[10], _ = n[11], t[8] = g * r + E * a + w * f + _ * v, t[9] = g * o + E * u + w * h + _ * y, t[10] = g * i + E * c + w * p + _ * m, t[11] = g * s + E * l + w * d + _ * b, g = n[12], E = n[13], w = n[14], _ = n[15], t[12] = g * r + E * a + w * f + _ * v, t[13] = g * o + E * u + w * h + _ * y, t[14] = g * i + E * c + w * p + _ * m, t[15] = g * s + E * l + w * d + _ * b, t
            }

            function It(t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
            }

            function kt(t, e) {
                var n = e[0],
                    r = e[1],
                    o = e[2],
                    i = e[3],
                    s = n + n,
                    a = r + r,
                    u = o + o,
                    c = n * s,
                    l = r * s,
                    f = r * a,
                    h = o * s,
                    p = o * a,
                    d = o * u,
                    v = i * s,
                    y = i * a,
                    m = i * u;
                return t[0] = 1 - f - d, t[1] = l + m, t[2] = h - y, t[3] = 0, t[4] = l - m, t[5] = 1 - c - d, t[6] = p + v, t[7] = 0, t[8] = h + y, t[9] = p - v, t[10] = 1 - c - f, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }
            Math.hypot || (Math.hypot = function() {
                for (var t = 0, e = arguments.length; e--;) t += arguments[e] * arguments[e];
                return Math.sqrt(t)
            });
            var Bt = function(t, e, n, r, o) {
                var i, s = 1 / Math.tan(e / 2);
                return t[0] = s / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != o && o !== 1 / 0 ? (i = 1 / (r - o), t[10] = (o + r) * i, t[14] = 2 * o * r * i) : (t[10] = -1, t[14] = -2 * r), t
            };

            function Mt(t, e, n, r) {
                var o, i, s, a, u, c, l, f, h, p, d = e[0],
                    v = e[1],
                    y = e[2],
                    m = r[0],
                    b = r[1],
                    g = r[2],
                    E = n[0],
                    w = n[1],
                    _ = n[2];
                return Math.abs(d - E) < Nt && Math.abs(v - w) < Nt && Math.abs(y - _) < Nt ? Lt(t) : (l = d - E, f = v - w, h = y - _, o = b * (h *= p = 1 / Math.hypot(l, f, h)) - g * (f *= p), i = g * (l *= p) - m * h, s = m * f - b * l, (p = Math.hypot(o, i, s)) ? (o *= p = 1 / p, i *= p, s *= p) : (o = 0, i = 0, s = 0), a = f * s - h * i, u = h * o - l * s, c = l * i - f * o, (p = Math.hypot(a, u, c)) ? (a *= p = 1 / p, u *= p, c *= p) : (a = 0, u = 0, c = 0), t[0] = o, t[1] = a, t[2] = l, t[3] = 0, t[4] = i, t[5] = u, t[6] = f, t[7] = 0, t[8] = s, t[9] = c, t[10] = h, t[11] = 0, t[12] = -(o * d + i * v + s * y), t[13] = -(a * d + u * v + c * y), t[14] = -(l * d + f * v + h * y), t[15] = 1, t)
            }

            function Dt() {
                var t = new St(3);
                return St != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
            }

            function Ft(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2];
                return Math.hypot(e, n, r)
            }

            function Ut(t, e, n) {
                var r = new St(3);
                return r[0] = t, r[1] = e, r[2] = n, r
            }

            function Ht() {
                var t = new St(4);
                return St != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
            }
            Dt(),
                function() {
                    var t = function() {
                        var t = new St(4);
                        return St != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
                    }()
                }();
            var Gt = function(t, e, n, r) {
                var o = new St(4);
                return o[0] = t, o[1] = e, o[2] = n, o[3] = r, o
            };
            ! function() {
                var t = Dt(),
                    e = Ut(1, 0, 0),
                    n = Ut(0, 1, 0)
            }(),
            function() {
                var t = Ht(),
                    e = Ht()
            }(),
            function() {
                var t = Ct()
            }();
            const Vt = new k({
                width: 1,
                height: 1,
                source: new Uint8Array([0, 0, 0, 0])
            });
            const qt = t => {
                    if (void 0 === t.camera) return {
                        cameraKind: "perspective",
                        perspective: {
                            aspectRatio: 1.7777777,
                            yfov: .39959652046304894,
                            znear: .10000000149011612,
                            zfar: 1e3
                        },
                        id: -1,
                        name: "default camera",
                        rotation: [0, 0, 0, 0],
                        scale: [1, 1, 1],
                        translation: [0, 0, .3499999940395355]
                    };
                    const e = void 0 !== t.camera.perspective ? "perspective" : "orthographic";
                    return "perspective" === e ? {
                        name: t.name,
                        id: t.id,
                        translation: t.translation,
                        rotation: t.rotation,
                        scale: t.scale,
                        cameraKind: e,
                        perspective: t.camera.perspective
                    } : {
                        name: t.name,
                        id: t.id,
                        translation: t.translation,
                        rotation: t.rotation,
                        scale: t.scale,
                        cameraKind: e,
                        orthographic: t.camera.orthographic
                    }
                },
                zt = 1313821514,
                Xt = 5130562;
            var Wt = (t => (t[t.GLTF_BUFFER_TYPE_BYTE = 5120] = "GLTF_BUFFER_TYPE_BYTE", t[t.GLTF_BUFFER_TYPE_UNSIGNED_BYTE = 5121] = "GLTF_BUFFER_TYPE_UNSIGNED_BYTE", t[t.GLTF_BUFFER_TYPE_SHORT = 5122] = "GLTF_BUFFER_TYPE_SHORT", t[t.GLTF_BUFFER_TYPE_UNSIGNED_SHORT = 5123] = "GLTF_BUFFER_TYPE_UNSIGNED_SHORT", t[t.GLTF_BUFFER_TYPE_UNSIGNED_INT = 5125] = "GLTF_BUFFER_TYPE_UNSIGNED_INT", t[t.GLTF_BUFFER_TYPE_FLOAT = 5126] = "GLTF_BUFFER_TYPE_FLOAT", t))(Wt || {});
            const Kt = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                Yt = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                $t = async t => (await fetch(t)).arrayBuffer(),
                Zt = t => (new TextDecoder).decode(t);
            class Jt {
                constructor(t, e, n) {
                    this.chunks = [], this.bufferCache = [], this.imageCache = [], this.baseUrl = "", this.gltf = e, this.chunks = n, this.baseUrl = t
                }
                async accessorData(t) {
                    if (!this.gltf.accessors) throw new Error("No accessors views found.");
                    const e = this.gltf.accessors[t],
                        n = Yt[e.type];
                    return {
                        buffer: await this.getBufferViewFromAccessor(e),
                        elementsPerType: n
                    }
                }
                async getBufferViewFromAccessor(t) {
                    if (void 0 !== t.bufferView) {
                        const e = await this.bufferViewData(t.bufferView, t.componentType);
                        return t.sparse ? new Uint8Array(e) : e
                    }
                    const e = Yt[t.type],
                        n = Kt[t.componentType].BYTES_PER_ELEMENT * e * t.count;
                    return new Uint8Array(n)
                }
                async bufferViewData(t, e) {
                    if (!this.gltf.bufferViews) throw new Error("No buffer views found.");
                    const n = this.gltf.bufferViews[t],
                        r = await this.getBufferData(n.buffer),
                        o = n.byteLength || 0,
                        i = n.byteOffset || 0,
                        s = r.buffer,
                        a = r.byteOffset;
                    switch (e) {
                        case Wt.GLTF_BUFFER_TYPE_BYTE:
                            return new Int8Array(s, a + i, o);
                        case Wt.GLTF_BUFFER_TYPE_UNSIGNED_BYTE:
                            return new Uint8Array(s, a + i, o);
                        case Wt.GLTF_BUFFER_TYPE_SHORT:
                            return new Int16Array(s, a + i, o / 2);
                        case Wt.GLTF_BUFFER_TYPE_UNSIGNED_SHORT:
                            return new Uint16Array(s, a + i, o / 2);
                        case Wt.GLTF_BUFFER_TYPE_UNSIGNED_INT:
                            return new Uint32Array(s, a + i, o / 4);
                        case Wt.GLTF_BUFFER_TYPE_FLOAT:
                            return new Float32Array(s, a + i, o / 4)
                    }
                    return new Uint8Array(s, a + i, o)
                }
                async getBufferData(t) {
                    if (void 0 !== this.bufferCache[t]) return this.bufferCache[t];
                    if (!this.gltf.buffers) throw new Error("No buffers found.");
                    const e = this.gltf.buffers[t];
                    if (void 0 === e.uri) {
                        if (0 !== t) throw new Error("GLB container is required to be the first buffer");
                        if (void 0 === this.chunks) throw new Error("invalid gltf: buffer has no uri nor is there a GLB buffer");
                        return this.chunks[t]
                    }
                    let n = new ArrayBuffer(0);
                    n = e.uri.includes("data:application") ? (t => {
                        try {
                            const e = t.split("base64,")[1];
                            return Uint8Array.from(atob(e), (t => t.charCodeAt(0))).buffer
                        } catch {
                            return new ArrayBuffer(0)
                        }
                    })(e.uri) : await $t(this.baseUrl + e.uri);
                    const r = new Uint8Array(n);
                    return this.bufferCache[t] = r, r
                }
                async getImageData(t) {
                    if (void 0 !== this.imageCache[t]) return this.imageCache[t];
                    if (!this.gltf.images) throw new Error("No images found.");
                    const e = this.gltf.images[t];
                    let n;
                    if (void 0 !== e.bufferView) {
                        const t = await this.bufferViewData(e.bufferView, Wt.GLTF_BUFFER_TYPE_BYTE),
                            r = new Blob([t], {
                                type: e.mimeType
                            });
                        n = URL.createObjectURL(r)
                    } else {
                        if (void 0 === e.uri) throw new Error("Invalid glTF: image must either have a `uri` or a `bufferView`");
                        n = e.uri.includes("base64") ? e.uri : this.baseUrl + e.uri
                    }
                    const r = await (async t => new Promise(((e, n) => {
                        const r = new Image;
                        r.onload = () => {
                            e(r)
                        }, r.onerror = t => {
                            n(t)
                        }, r.crossOrigin = "anonymous", r.src = t
                    })))(n);
                    return this.imageCache[t] = r, r
                }
            }
            const Qt = t => {
                    let e = "";
                    try {
                        const n = new URL(t),
                            r = n.href.split("/");
                        e = n.href.replace(r[r.length - 1], "")
                    } catch {
                        e = ""
                    }
                    return e
                },
                te = async t => {
                    let e, n, r = [];
                    if (!(t.startsWith("blob:") || t.startsWith("http://") || t.startsWith("https://"))) return console.log("fetch retunr external "), null;
                    try {
                        e = await (async t => await (await fetch(t)).json())(t), n = {
                            magic: "glTF",
                            version: parseFloat(e.asset.version),
                            length: 0
                        }
                    } catch {
                        let o = await $t(t);
                        n = (t => {
                            const e = new DataView(t, 0, 12);
                            return {
                                magic: Zt(new Uint8Array(t, 0, 4)),
                                version: e.getUint32(4, !0),
                                length: e.getUint32(8, !0)
                            }
                        })(o), ({
                            json: e,
                            chunks: r
                        } = ne(o))
                    }
                    return {
                        json: e,
                        header: n,
                        chunks: r
                    }
                },
                ee = async t => {
                    var e;
                    if ("string" != typeof t) throw new Error("Invalid URI: String is expected.");
                    const n = null != (e = await te(t)) ? e : (t => {
                        try {
                            const e = JSON.parse(t);
                            return {
                                json: e,
                                header: {
                                    magic: "glTF",
                                    version: parseFloat(e.asset.version),
                                    length: 0
                                },
                                chunks: []
                            }
                        } catch {
                            return null
                        }
                    })(t);
                    if (null === n) throw new Error("Failed to fetch data.");
                    const {
                        json: r,
                        header: o,
                        chunks: i
                    } = n;
                    if ("glTF" !== o.magic || o.version < 2) throw new Error(`File format is not supported! Current header magic: ${o.magic}, version ${o.version}`);
                    if (void 0 === r) throw new Error("JSON content not found.");
                    if (void 0 === r.asset || parseFloat(r.asset.version) < 2) throw new Error("Unsupported asset. glTF versions >= 2.0 are supported.");
                    return {
                        json: r,
                        chunks: i
                    }
                },
                ne = t => {
                    const e = [];
                    let n;
                    const r = new DataView(t, 12);
                    let o = 0;
                    for (; o < r.byteLength;) {
                        const i = r.getUint32(o, !0);
                        o += 4;
                        const s = r.getUint32(o, !0);
                        if (o += 4, s === zt) {
                            const e = new Uint8Array(t, 12 + o, i);
                            n = JSON.parse(Zt(e))
                        } else if (s === Xt) {
                            const n = 12 + o;
                            e.push(new Uint8Array(t, n, i))
                        }
                        o += i
                    }
                    return {
                        json: n,
                        chunks: e
                    }
                },
                re = "placeholder",
                oe = t => t instanceof Uint16Array ? 5123 : t instanceof Uint32Array ? 5125 : 5121,
                ie = t => {
                    const e = [];
                    return t.forEach(((t, n) => {
                        var r, o;
                        t.name.toLowerCase().includes(re) ? e.push({
                            meshIndex: n,
                            name: t.name
                        }) : null != (r = t.material) && r.name.toLowerCase().includes(re) && e.push({
                            meshIndex: n,
                            name: null == (o = t.material) ? void 0 : o.name
                        })
                    })), e
                },
                se = t => {
                    const e = [];
                    return t.forEach((t => {
                        t.targets.length > 0 && e.push(...t.targets)
                    })), e
                },
                ae = (t, e) => {
                    const n = (t => {
                            const e = [];
                            return t.mesh.forEach(((n, r) => {
                                const o = n.uvs && n.uvs.length ? n.uvs : new Float32Array(n.positions.length / 3 * 2);
                                e.push({
                                    name: t.name + "_" + (r + 1).toString(),
                                    vertices: n.positions,
                                    normals: n.normals,
                                    uvs: o,
                                    tangent: n.tangent,
                                    indices: n.indices,
                                    material: n.material,
                                    id: r,
                                    renderingContextBase: oe(n.indices)
                                })
                            })), e
                        })(t),
                        r = (t => {
                            let e = 0;
                            return t.forEach((t => {
                                e += t.positions.length
                            })), e
                        })(t.mesh);
                    return {
                        mesh: n,
                        placeholder: ie(n),
                        targets: se(t.mesh),
                        transform: t.translation.length > 0 ? It(Pt(), Ut(t.translation[0], t.translation[1], t.translation[2])) : Pt(),
                        rotation: t.rotation.length > 0 ? kt(Pt(), Gt(t.rotation[0], t.rotation[1], t.rotation[2], t.rotation[3])) : Pt(),
                        scale: t.scale.length > 0 ? Ut(t.scale[0], t.scale[1], t.scale[2]) : Ut(1, 1, 1),
                        name: t.name,
                        parrent: e,
                        positionPrevious: new Float32Array(r),
                        positionNext: new Float32Array(r),
                        animation: {
                            rotation: {
                                times: new Uint8Array,
                                values: [],
                                interpolation: ""
                            },
                            transform: {
                                times: new Uint8Array,
                                values: [],
                                interpolation: ""
                            },
                            scale: {
                                times: new Uint8Array,
                                values: [],
                                interpolation: ""
                            },
                            weights: {
                                times: new Uint8Array,
                                values: new Float32Array,
                                targets: [],
                                interpolation: "",
                                positions: []
                            }
                        },
                        progression: 0,
                        extras: t.extras
                    }
                },
                ue = (t = -1, e = "", n = []) => ({
                    id: t,
                    name: e,
                    children: n,
                    mesh: [],
                    scale: [],
                    rotation: [],
                    translation: [],
                    camera: void 0,
                    extras: {
                        highlightCorrection: 1,
                        shadowCorrection: 1
                    }
                });
            const ce = Ut(0, 1, 0),
                le = [.5 * Math.PI, .5 * Math.PI];
            e.AdditiveBlending = {
                source: "src alpha",
                destination: "one",
                equation: "add"
            }, e.BinaryTexture = k, e.Buffer = E, e.Effect = ut, e.ElementsBuffer = w, e.FraglAllocationError = o, e.FraglCompilationError = r, e.FraglError = n, e.FraglInternalError = u, e.FraglPlatformError = s, e.FraglRuntimeError = i, e.FraglValidationError = a, e.GltfParser = class {
                constructor(t) {
                    this.src = t, this.camera = ue(), this.cameraModel = qt(this.camera), this.nodes = [], this.clips = [], this.model = [], this.images = [], this.textures = [], this.samplers = []
                }
                async parse(t = {}) {
                    return this.model = [], this.asset = await (async t => {
                        const e = Qt(t),
                            n = await ee(t);
                        return new Jt(e, n.json, n.chunks)
                    })(this.src), this.images = await this.getTextureImages(t.imageFilesToReplace), this.updateTexturesData(), this.camera = ue(), this.nodes = await this.getSubNodes(), this.cameraModel = this.getCameraModel(), this.clips = await this.getClips(), this.model = await this.getModel(), this.updateAnimation(), {
                        camera: this.cameraModel,
                        model: this.model,
                        images: this.images,
                        textures: this.textures,
                        samplers: this.samplers
                    }
                }
                async getModel(t, e, n = []) {
                    const r = (void 0 === t ? this.nodes : t).map((t => {
                        const r = ae(t, e);
                        return t.children.length > 0 && this.getModel(t.children, t, n), r
                    }));
                    return n.push(...await Promise.all(r)), n
                }
                updateAnimation() {
                    this.clips.forEach((t => {
                        t.tracks.forEach((t => {
                            const e = this.model.findIndex((e => e.name === t.targetObject));
                            if (e > -1) {
                                const n = this.model[e];
                                switch (t.targetProperty.toLocaleLowerCase()) {
                                    case "translation":
                                        n.animation.transform.values = this.decodeVector3Animation(t.values, t.valuesElements), n.animation.transform.times = t.times, n.animation.transform.interpolation = t.interpolation;
                                        break;
                                    case "rotation":
                                        n.animation.rotation.values = this.decodeQuaternionAnimation(t.values, t.valuesElements), n.animation.rotation.times = t.times, n.animation.rotation.interpolation = t.interpolation;
                                        break;
                                    case "scale":
                                        n.animation.scale.values = this.decodeVector3Animation(t.values, t.valuesElements), n.animation.scale.times = t.times, n.animation.scale.interpolation = t.interpolation;
                                        break;
                                    case "weights":
                                        n.targets.length > 0 && (n.animation.weights.targets = this.model[e].targets, n.animation.weights.times = t.times, n.animation.weights.values = t.values, n.animation.weights.interpolation = t.interpolation, ((t, e) => {
                                            const n = t.values.length / t.targets.length;
                                            for (let r = 0; r < n; r++) {
                                                const n = r * t.targets.length,
                                                    o = [];
                                                for (let r = 0; r < e; r += 3) {
                                                    o[r] = 0, o[r + 1] = 0, o[r + 2] = 0;
                                                    for (let e = 0; e < t.targets.length; e++) {
                                                        const i = n + e;
                                                        o[r] += t.targets[e].positions[r] * t.values[i], o[r + 1] += t.targets[e].positions[r + 1] * t.values[i], o[r + 2] += t.targets[e].positions[r + 2] * t.values[i]
                                                    }
                                                }
                                                t.positions[r] = new Float32Array(o)
                                            }
                                        })(n.animation.weights, this.getModelVerticesLength(n.mesh)))
                                }
                            }
                        }))
                    })), this.cameraModel.id > -1 && (this.cameraModel.animation = this.model[this.cameraModel.id].animation, this.model = this.model.filter((t => !t.name.toLocaleLowerCase().includes("camera"))))
                }
                getModelVerticesLength(t) {
                    let e = 0;
                    return t.forEach((t => {
                        e += t.vertices.length
                    })), e
                }
                decodeQuaternionAnimation(t, e) {
                    const n = [];
                    let r = 0;
                    for (let o = 0; o < t.length; o += e) {
                        const i = Ht();
                        for (let n = 0; n < e; n++) i[n] = t[o + n];
                        n[r] = i, r++
                    }
                    return n
                }
                decodeVector3Animation(t, e) {
                    const n = [];
                    let r = 0;
                    for (let o = 0; o < t.length; o += e) {
                        const i = Dt();
                        for (let n = 0; n < e; n++) i[n] = t[o + n];
                        n[r] = i, r++
                    }
                    return n
                }
                async getClips(t = []) {
                    const e = this.getGltfFromAsset();
                    if (void 0 === e.animations) return t;
                    const n = e.animations.map((async t => {
                        const e = await this.getTracks(t);
                        return {
                            name: t.name,
                            tracks: e
                        }
                    }));
                    return t.push(...await Promise.all(n)), t
                }
                getTracks(t) {
                    const e = this.getAsset();
                    return Promise.all(t.channels.map((async n => {
                        var r;
                        const o = t.samplers[n.sampler],
                            i = await e.accessorData(o.input),
                            s = await e.accessorData(o.output);
                        return {
                            targetIndex: n.target.node,
                            targetObject: e.gltf.nodes[n.target.node].name,
                            targetProperty: n.target.path,
                            interpolation: null != (r = o.interpolation) ? r : "LINEAR",
                            times: i.buffer,
                            timesElements: i.elementsPerType,
                            values: s.buffer,
                            valuesElements: s.elementsPerType
                        }
                    })))
                }
                getCameraModel() {
                    return qt(this.camera)
                }
                updateTexturesData() {
                    var t;
                    this.textures = [], this.samplers = [];
                    const e = this.getGltfFromAsset();
                    this.samplers = null != (t = e.samplers) ? t : [], void 0 !== e.textures && e.textures.forEach(((t, e) => {
                        t && (this.textures[e] = {
                            sampler: t.sampler,
                            source: t.source
                        })
                    }))
                }
                replaceImages(t, e) {
                    const n = e.find((e => {
                        var n;
                        if (null != (n = t.name) && n.includes(e.name)) return e
                    }));
                    if (!n) throw new a(`No image file found with the name of: ${t.name}`);
                    return n
                }
                async getTextureImages(t) {
                    if (void 0 === this.asset || void 0 === this.asset.gltf.images) return [];
                    const e = this.asset.gltf.images.map((async (e, n) => {
                        var r;
                        return t ? this.replaceImages(e, t) : {
                            mimeType: e.mimeType,
                            name: e.name,
                            img: await (null == (r = this.asset) ? void 0 : r.getImageData(n))
                        }
                    }));
                    return Promise.all(e)
                }
                async getSubNodes(t, e) {
                    const n = this.getGltfFromAsset(),
                        r = 0 | n.scene,
                        o = n.scenes[r],
                        i = (void 0 === t ? o.nodes : t).map((async t => {
                            const r = n.nodes[t],
                                o = ue(t, r.name);
                            return void 0 !== r.children && (o.children = await this.getSubNodes(r.children, r)), void 0 !== r.mesh && (o.mesh = await this.getSubMesh(n.meshes[r.mesh])), o.rotation = [0, 0, 0, 0], void 0 !== r.rotation ? o.rotation = r.rotation : void 0 !== e && void 0 !== e.rotation && (o.rotation[0] = o.rotation[0] * e.rotation[0], o.rotation[1] = o.rotation[1] * e.rotation[1], o.rotation[2] = o.rotation[2] * e.rotation[2], o.rotation[3] = o.rotation[3] * e.rotation[3]), o.translation = [0, 0, 0], void 0 !== r.translation ? o.translation = r.translation : void 0 !== e && void 0 !== e.translation && (o.translation[0] = o.translation[0] * e.translation[0], o.translation[1] = o.translation[1] * e.translation[1], o.translation[2] = o.translation[2] * e.translation[2]), o.scale = [1, 1, 1], void 0 !== r.scale ? o.scale = r.scale : void 0 !== e && void 0 !== e.scale && (o.scale[0] = o.scale[0] * e.scale[0], o.scale[1] = o.scale[1] * e.scale[1], o.scale[2] = o.scale[2] * e.scale[2]), void 0 !== r.camera && (o.camera = n.cameras[r.camera], this.camera = o), o.extras = void 0, void 0 !== r.extras && (o.extras = {
                                highlightCorrection: 1,
                                shadowCorrection: 1
                            }, o.extras.highlightCorrection = void 0 !== r.extras.Highlight_Correction ? r.extras.Highlight_Correction : 1, o.extras.shadowCorrection = void 0 !== r.extras.Shadow_Correction ? r.extras.Shadow_Correction : 1), o
                        }));
                    return Promise.all(i)
                }
                getMaterial(t) {
                    const e = this.getAsset().gltf.materials[t];
                    return void 0 !== e.pbrMetallicRoughness && (void 0 === e.pbrMetallicRoughness.metallicFactor && (e.pbrMetallicRoughness.metallicFactor = 1), void 0 === e.pbrMetallicRoughness.roughnessFactor && (e.pbrMetallicRoughness.roughnessFactor = 1), void 0 === e.pbrMetallicRoughness.baseColorFactor && (e.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1])), e
                }
                async getTargets(t) {
                    const e = this.getAsset(),
                        n = t.targets.map((async t => {
                            const n = {
                                normals: new Uint8Array(0),
                                positions: new Uint8Array(0),
                                tangent: new Uint8Array(0)
                            };
                            return void 0 !== t.POSITION && (n.positions = (await e.accessorData(t.POSITION)).buffer), void 0 !== t.NORMAL && (n.normals = (await e.accessorData(t.NORMAL)).buffer), void 0 !== t.TANGENT && (n.tangent = (await e.accessorData(t.TANGENT)).buffer), n
                        }));
                    return Promise.all(n)
                }
                async getSubMesh(t) {
                    const e = this.getAsset(),
                        n = t.primitives.map((async t => {
                            const n = {
                                positions: new Uint8Array(0),
                                normals: new Uint8Array(0),
                                uvs: new Uint8Array(0),
                                tangent: new Uint8Array(0),
                                indices: new Uint8Array(0),
                                targets: [],
                                material: void 0
                            };
                            if (void 0 !== t.attributes.POSITION && (n.positions = (await e.accessorData(t.attributes.POSITION)).buffer), void 0 !== t.attributes.NORMAL && (n.normals = (await e.accessorData(t.attributes.NORMAL)).buffer), void 0 !== t.attributes.TEXCOORD_0 && (n.uvs = (await e.accessorData(t.attributes.TEXCOORD_0)).buffer, 0 === n.uvs.length && (n.uvs = new Float32Array(n.positions.length / 3 * 2))), void 0 !== t.attributes.TANGENT && (n.tangent = (await e.accessorData(t.attributes.TANGENT)).buffer), void 0 !== t.indices) {
                                const r = await e.accessorData(t.indices);
                                n.indices = r.buffer
                            }
                            return void 0 !== t.targets && (n.targets = await this.getTargets(t)), void 0 !== t.material && (n.material = this.getMaterial(t.material)), n
                        }));
                    return Promise.all(n)
                }
                getAsset() {
                    if (void 0 === this.asset) throw new Error("Asset is undefined");
                    return this.asset
                }
                getGltfFromAsset() {
                    return this.getAsset().gltf
                }
            }, e.ImageTexture = I, e.MockWebGLRenderingContext = class {
                constructor(t) {
                    this.canvas = t, this.drawingBufferColorSpace = "srgb", this.DEPTH_BUFFER_BIT = 256, this.STENCIL_BUFFER_BIT = 1024, this.COLOR_BUFFER_BIT = 16384, this.POINTS = 0, this.LINES = 1, this.LINE_LOOP = 2, this.LINE_STRIP = 3, this.TRIANGLES = 4, this.TRIANGLE_STRIP = 5, this.TRIANGLE_FAN = 6, this.ZERO = 0, this.ONE = 1, this.SRC_COLOR = 768, this.ONE_MINUS_SRC_COLOR = 769, this.SRC_ALPHA = 770, this.ONE_MINUS_SRC_ALPHA = 771, this.DST_ALPHA = 772, this.ONE_MINUS_DST_ALPHA = 773, this.DST_COLOR = 774, this.ONE_MINUS_DST_COLOR = 775, this.SRC_ALPHA_SATURATE = 776, this.FUNC_ADD = 32774, this.BLEND_EQUATION = 32777, this.BLEND_EQUATION_RGB = 32777, this.BLEND_EQUATION_ALPHA = 34877, this.FUNC_SUBTRACT = 32778, this.FUNC_REVERSE_SUBTRACT = 32779, this.BLEND_DST_RGB = 32968, this.BLEND_SRC_RGB = 32969, this.BLEND_DST_ALPHA = 32970, this.BLEND_SRC_ALPHA = 32971, this.CONSTANT_COLOR = 32769, this.ONE_MINUS_CONSTANT_COLOR = 32770, this.CONSTANT_ALPHA = 32771, this.ONE_MINUS_CONSTANT_ALPHA = 32772, this.BLEND_COLOR = 32773, this.ARRAY_BUFFER = 34962, this.ELEMENT_ARRAY_BUFFER = 34963, this.ARRAY_BUFFER_BINDING = 34964, this.ELEMENT_ARRAY_BUFFER_BINDING = 34965, this.STREAM_DRAW = 35040, this.STATIC_DRAW = 35044, this.DYNAMIC_DRAW = 35048, this.BUFFER_SIZE = 34660, this.BUFFER_USAGE = 34661, this.CURRENT_VERTEX_ATTRIB = 34342, this.FRONT = 1028, this.BACK = 1029, this.FRONT_AND_BACK = 1032, this.CULL_FACE = 2884, this.BLEND = 3042, this.DITHER = 3024, this.STENCIL_TEST = 2960, this.DEPTH_TEST = 2929, this.SCISSOR_TEST = 3089, this.POLYGON_OFFSET_FILL = 32823, this.SAMPLE_ALPHA_TO_COVERAGE = 32926, this.SAMPLE_COVERAGE = 32928, this.NO_ERROR = 0, this.INVALID_ENUM = 1280, this.INVALID_VALUE = 1281, this.INVALID_OPERATION = 1282, this.OUT_OF_MEMORY = 1285, this.CW = 2304, this.CCW = 2305, this.LINE_WIDTH = 2849, this.ALIASED_POINT_SIZE_RANGE = 33901, this.ALIASED_LINE_WIDTH_RANGE = 33902, this.CULL_FACE_MODE = 2885, this.FRONT_FACE = 2886, this.DEPTH_RANGE = 2928, this.DEPTH_WRITEMASK = 2930, this.DEPTH_CLEAR_VALUE = 2931, this.DEPTH_FUNC = 2932, this.STENCIL_CLEAR_VALUE = 2961, this.STENCIL_FUNC = 2962, this.STENCIL_FAIL = 2964, this.STENCIL_PASS_DEPTH_FAIL = 2965, this.STENCIL_PASS_DEPTH_PASS = 2966, this.STENCIL_REF = 2967, this.STENCIL_VALUE_MASK = 2963, this.STENCIL_WRITEMASK = 2968, this.STENCIL_BACK_FUNC = 34816, this.STENCIL_BACK_FAIL = 34817, this.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, this.STENCIL_BACK_PASS_DEPTH_PASS = 34819, this.STENCIL_BACK_REF = 36003, this.STENCIL_BACK_VALUE_MASK = 36004, this.STENCIL_BACK_WRITEMASK = 36005, this.VIEWPORT = 2978, this.SCISSOR_BOX = 3088, this.COLOR_CLEAR_VALUE = 3106, this.COLOR_WRITEMASK = 3107, this.UNPACK_ALIGNMENT = 3317, this.PACK_ALIGNMENT = 3333, this.MAX_TEXTURE_SIZE = 3379, this.MAX_VIEWPORT_DIMS = 3386, this.SUBPIXEL_BITS = 3408, this.RED_BITS = 3410, this.GREEN_BITS = 3411, this.BLUE_BITS = 3412, this.ALPHA_BITS = 3413, this.DEPTH_BITS = 3414, this.STENCIL_BITS = 3415, this.POLYGON_OFFSET_UNITS = 10752, this.POLYGON_OFFSET_FACTOR = 32824, this.TEXTURE_BINDING_2D = 32873, this.SAMPLE_BUFFERS = 32936, this.SAMPLES = 32937, this.SAMPLE_COVERAGE_VALUE = 32938, this.SAMPLE_COVERAGE_INVERT = 32939, this.COMPRESSED_TEXTURE_FORMATS = 34467, this.DONT_CARE = 4352, this.FASTEST = 4353, this.NICEST = 4354, this.GENERATE_MIPMAP_HINT = 33170, this.BYTE = 5120, this.UNSIGNED_BYTE = 5121, this.SHORT = 5122, this.UNSIGNED_SHORT = 5123, this.INT = 5124, this.UNSIGNED_INT = 5125, this.FLOAT = 5126, this.DEPTH_COMPONENT = 6402, this.ALPHA = 6406, this.RGB = 6407, this.RGBA = 6408, this.LUMINANCE = 6409, this.LUMINANCE_ALPHA = 6410, this.UNSIGNED_SHORT_4_4_4_4 = 32819, this.UNSIGNED_SHORT_5_5_5_1 = 32820, this.UNSIGNED_SHORT_5_6_5 = 33635, this.FRAGMENT_SHADER = 35632, this.VERTEX_SHADER = 35633, this.MAX_VERTEX_ATTRIBS = 34921, this.MAX_VERTEX_UNIFORM_VECTORS = 36347, this.MAX_VARYING_VECTORS = 36348, this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, this.MAX_TEXTURE_IMAGE_UNITS = 34930, this.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, this.SHADER_TYPE = 35663, this.DELETE_STATUS = 35712, this.LINK_STATUS = 35714, this.VALIDATE_STATUS = 35715, this.ATTACHED_SHADERS = 35717, this.ACTIVE_UNIFORMS = 35718, this.ACTIVE_ATTRIBUTES = 35721, this.SHADING_LANGUAGE_VERSION = 35724, this.CURRENT_PROGRAM = 35725, this.NEVER = 512, this.LESS = 513, this.EQUAL = 514, this.LEQUAL = 515, this.GREATER = 516, this.NOTEQUAL = 517, this.GEQUAL = 518, this.ALWAYS = 519, this.KEEP = 7680, this.REPLACE = 7681, this.INCR = 7682, this.DECR = 7683, this.INVERT = 5386, this.INCR_WRAP = 34055, this.DECR_WRAP = 34056, this.VENDOR = 7936, this.RENDERER = 7937, this.VERSION = 7938, this.NEAREST = 9728, this.LINEAR = 9729, this.NEAREST_MIPMAP_NEAREST = 9984, this.LINEAR_MIPMAP_NEAREST = 9985, this.NEAREST_MIPMAP_LINEAR = 9986, this.LINEAR_MIPMAP_LINEAR = 9987, this.TEXTURE_MAG_FILTER = 10240, this.TEXTURE_MIN_FILTER = 10241, this.TEXTURE_WRAP_S = 10242, this.TEXTURE_WRAP_T = 10243, this.TEXTURE_2D = 3553, this.TEXTURE = 5890, this.TEXTURE_CUBE_MAP = 34067, this.TEXTURE_BINDING_CUBE_MAP = 34068, this.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, this.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, this.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, this.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, this.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, this.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, this.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, this.TEXTURE0 = 33984, this.TEXTURE1 = 33985, this.TEXTURE2 = 33986, this.TEXTURE3 = 33987, this.TEXTURE4 = 33988, this.TEXTURE5 = 33989, this.TEXTURE6 = 33990, this.TEXTURE7 = 33991, this.TEXTURE8 = 33992, this.TEXTURE9 = 33993, this.TEXTURE10 = 33994, this.TEXTURE11 = 33995, this.TEXTURE12 = 33996, this.TEXTURE13 = 33997, this.TEXTURE14 = 33998, this.TEXTURE15 = 33999, this.TEXTURE16 = 34e3, this.TEXTURE17 = 34001, this.TEXTURE18 = 34002, this.TEXTURE19 = 34003, this.TEXTURE20 = 34004, this.TEXTURE21 = 34005, this.TEXTURE22 = 34006, this.TEXTURE23 = 34007, this.TEXTURE24 = 34008, this.TEXTURE25 = 34009, this.TEXTURE26 = 34010, this.TEXTURE27 = 34011, this.TEXTURE28 = 34012, this.TEXTURE29 = 34013, this.TEXTURE30 = 34014, this.TEXTURE31 = 34015, this.ACTIVE_TEXTURE = 34016, this.REPEAT = 10497, this.CLAMP_TO_EDGE = 33071, this.MIRRORED_REPEAT = 33648, this.FLOAT_VEC2 = 35664, this.FLOAT_VEC3 = 35665, this.FLOAT_VEC4 = 35666, this.INT_VEC2 = 35667, this.INT_VEC3 = 35668, this.INT_VEC4 = 35669, this.BOOL = 35670, this.BOOL_VEC2 = 35671, this.BOOL_VEC3 = 35672, this.BOOL_VEC4 = 35673, this.FLOAT_MAT2 = 35674, this.FLOAT_MAT3 = 35675, this.FLOAT_MAT4 = 35676, this.SAMPLER_2D = 35678, this.SAMPLER_CUBE = 35680, this.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, this.VERTEX_ATTRIB_ARRAY_SIZE = 34339, this.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, this.VERTEX_ATTRIB_ARRAY_TYPE = 34341, this.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, this.VERTEX_ATTRIB_ARRAY_POINTER = 34373, this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, this.IMPLEMENTATION_COLOR_READ_TYPE = 35738, this.IMPLEMENTATION_COLOR_READ_FORMAT = 35739, this.COMPILE_STATUS = 35713, this.LOW_FLOAT = 36336, this.MEDIUM_FLOAT = 36337, this.HIGH_FLOAT = 36338, this.LOW_INT = 36339, this.MEDIUM_INT = 36340, this.HIGH_INT = 36341, this.FRAMEBUFFER = 36160, this.RENDERBUFFER = 36161, this.RGBA4 = 32854, this.RGB5_A1 = 32855, this.RGBA8 = 32856, this.RGB565 = 36194, this.DEPTH_COMPONENT16 = 33189, this.STENCIL_INDEX8 = 36168, this.DEPTH_STENCIL = 34041, this.RENDERBUFFER_WIDTH = 36162, this.RENDERBUFFER_HEIGHT = 36163, this.RENDERBUFFER_INTERNAL_FORMAT = 36164, this.RENDERBUFFER_RED_SIZE = 36176, this.RENDERBUFFER_GREEN_SIZE = 36177, this.RENDERBUFFER_BLUE_SIZE = 36178, this.RENDERBUFFER_ALPHA_SIZE = 36179, this.RENDERBUFFER_DEPTH_SIZE = 36180, this.RENDERBUFFER_STENCIL_SIZE = 36181, this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, this.COLOR_ATTACHMENT0 = 36064, this.DEPTH_ATTACHMENT = 36096, this.STENCIL_ATTACHMENT = 36128, this.DEPTH_STENCIL_ATTACHMENT = 33306, this.NONE = 0, this.FRAMEBUFFER_COMPLETE = 36053, this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, this.FRAMEBUFFER_UNSUPPORTED = 36061, this.FRAMEBUFFER_BINDING = 36006, this.RENDERBUFFER_BINDING = 36007, this.MAX_RENDERBUFFER_SIZE = 34024, this.INVALID_FRAMEBUFFER_OPERATION = 1286, this.UNPACK_FLIP_Y_WEBGL = 37440, this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, this.CONTEXT_LOST_WEBGL = 37442, this.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, this.BROWSER_DEFAULT_WEBGL = 37444
                }
                get drawingBufferWidth() {
                    return this.canvas.width
                }
                get drawingBufferHeight() {
                    return this.canvas.height
                }
                activeTexture() {}
                attachShader() {}
                bindAttribLocation() {}
                bindBuffer() {}
                bindFramebuffer() {}
                bindRenderbuffer() {}
                bindTexture() {}
                blendColor() {}
                blendEquation() {}
                blendEquationSeparate() {}
                blendFunc() {}
                blendFuncSeparate() {}
                bufferData() {}
                bufferSubData() {}
                checkFramebufferStatus() {
                    return this.FRAMEBUFFER_COMPLETE
                }
                clear() {}
                clearColor() {}
                clearDepth() {}
                clearStencil() {}
                colorMask() {}
                compileShader() {}
                compressedTexImage2D() {}
                compressedTexSubImage2D() {}
                copyTexImage2D() {}
                copyTexSubImage2D() {}
                createBuffer() {
                    return {}
                }
                createFramebuffer() {
                    return {}
                }
                createProgram() {
                    return {}
                }
                createRenderbuffer() {
                    return {}
                }
                createShader() {
                    return {}
                }
                createTexture() {
                    return {}
                }
                cullFace() {}
                deleteBuffer() {}
                deleteFramebuffer() {}
                deleteProgram() {}
                deleteRenderbuffer() {}
                deleteShader() {}
                deleteTexture() {}
                depthFunc() {}
                depthMask() {}
                depthRange() {}
                detachShader() {}
                disable() {}
                disableVertexAttribArray() {}
                drawArrays() {}
                drawElements() {}
                enable() {}
                enableVertexAttribArray() {}
                finish() {}
                flush() {}
                framebufferRenderbuffer() {}
                framebufferTexture2D() {}
                frontFace() {}
                generateMipmap() {}
                getActiveAttrib() {
                    return {}
                }
                getActiveUniform() {
                    return null
                }
                getAttachedShaders() {
                    return []
                }
                getAttribLocation() {
                    return 0
                }
                getBufferParameter() {
                    return 0
                }
                getContextAttributes() {
                    return {}
                }
                getError() {
                    return this.NO_ERROR
                }
                getExtension() {
                    return null
                }
                getFramebufferAttachmentParameter() {
                    return 0
                }
                getParameter() {
                    return 0
                }
                getProgramInfoLog() {
                    return ""
                }
                getProgramParameter() {
                    return {}
                }
                getRenderbufferParameter() {
                    return 0
                }
                getShaderInfoLog() {
                    return ""
                }
                getShaderParameter() {
                    return !0
                }
                getShaderPrecisionFormat() {
                    return {
                        rangeMin: 127,
                        rangeMax: 127,
                        precision: 127
                    }
                }
                getShaderSource() {
                    return ""
                }
                getSupportedExtensions() {
                    return []
                }
                getTexParameter() {
                    return 0
                }
                getUniform() {
                    return 0
                }
                getUniformLocation() {
                    return null
                }
                getVertexAttrib() {
                    return 0
                }
                getVertexAttribOffset() {
                    return 0
                }
                hint() {}
                isBuffer() {
                    return !1
                }
                isContextLost() {
                    return !1
                }
                isEnabled() {
                    return !1
                }
                isFramebuffer() {
                    return !1
                }
                isProgram() {
                    return !1
                }
                isRenderbuffer() {
                    return !1
                }
                isShader() {
                    return !1
                }
                isTexture() {
                    return !1
                }
                lineWidth() {}
                linkProgram() {}
                pixelStorei() {}
                polygonOffset() {}
                readPixels() {}
                renderbufferStorage() {}
                sampleCoverage() {}
                scissor() {}
                shaderSource() {}
                stencilFunc() {}
                stencilFuncSeparate() {}
                stencilMask() {}
                stencilMaskSeparate() {}
                stencilOp() {}
                stencilOpSeparate() {}
                texImage2D() {}
                texParameterf() {}
                texParameteri() {}
                texSubImage2D() {}
                uniform1f() {}
                uniform1fv() {}
                uniform1i() {}
                uniform1iv() {}
                uniform2f() {}
                uniform2fv() {}
                uniform2i() {}
                uniform2iv() {}
                uniform3f() {}
                uniform3fv() {}
                uniform3i() {}
                uniform3iv() {}
                uniform4f() {}
                uniform4fv() {}
                uniform4i() {}
                uniform4iv() {}
                uniformMatrix2fv() {}
                uniformMatrix3fv() {}
                uniformMatrix4fv() {}
                useProgram() {}
                validateProgram() {}
                vertexAttrib1f() {}
                vertexAttrib1fv() {}
                vertexAttrib2f() {}
                vertexAttrib2fv() {}
                vertexAttrib3f() {}
                vertexAttrib3fv() {}
                vertexAttrib4f() {}
                vertexAttrib4fv() {}
                vertexAttribPointer() {}
                viewport() {}
            }, e.ModelViewer = class {
                constructor(t) {
                    this._renderables = {}, this._renderables = t
                }
                get renderables() {
                    return Object.values(this._renderables)
                }
                get resources() {
                    return this.renderables.flatMap((t => t.resources))
                }
                getUniformsToUpdateView(t, e) {
                    return t.getUniformsToUpdateView(e)
                }
                updateAll({
                    uniforms: t
                }) {
                    if (t)
                        for (const e of this.renderables) t.uCameraPosition && (e.uniforms[Rt] = t.uCameraPosition), t.uMVPMatrix && (e.uniforms[At] = t.uMVPMatrix), t.uNormalMatrix && (e.uniforms[Ot] = t.uNormalMatrix)
                }
                updateOne({
                    id: t,
                    textures: e
                }) {
                    const n = this._renderables[t];
                    if (!n) throw new a(`Renderable with id ${t} not found`);
                    e && e.uPlaceholderTexture && (n.textures[gt] = e.uPlaceholderTexture)
                }
            }, e.ModelViewerGltfData = class {
                constructor(t, e = !1) {
                    this.gltf = t, this.meshes = this.gltf.model.map((t => t.mesh)).flat(), this.shader = new P({
                        vertexSource: "#extension GL_OES_standard_derivatives:enable\nprecision highp float;attribute vec2 zztE2SnZx;attribute vec3 ihJIFSpvi,mjiW1vcGg;uniform mat4 T1GP6ZTnQ;uniform mat3 LPlLw5zPI;uniform vec3 MLGoNA0wv;varying vec2 m;varying vec3 j,p,L,s;void main(){mat4 a=T1GP6ZTnQ;gl_Position=a*vec4(ihJIFSpvi,1.),j=ihJIFSpvi,s=MLGoNA0wv,m=zztE2SnZx,p=LPlLw5zPI*mjiW1vcGg,L=normalize(mjiW1vcGg);}vec3 l=vec3(1.);",
                        fragmentSource: e ? "#extension GL_OES_standard_derivatives:enable\nprecision highp float;uniform vec4 LkEaxkGQc;uniform float x8cqPYjGq,zAvK5sktl;uniform sampler2D j5BD_wqsh,m5a6RRSnk,Flt8u8M0x,MpMrqOkTf;varying vec2 m;varying vec3 j,p,s;uniform ivec4 mXA59BV4k;bool D(){return mXA59BV4k.x==1;}bool E(){return mXA59BV4k.y==1;}bool F(){return mXA59BV4k.z==1;}bool G(){return mXA59BV4k.w==1;}float u(vec3 d,vec3 e,float a){float c=a*a*a*a,b=max(dot(d,e),0.),f=b*b*(c-1.)+1.;return c/(3.141593*f*f);}float v(float b,float c){float a=c+1.,d=a*a*.125;return b/(b*(1.-d)+d);}float w(vec3 a,vec3 b,vec3 c,float d){float e=max(dot(a,c),0.),f=max(dot(a,b),0.);return v(e,d)*v(f,d);}vec3 x(float b,vec3 a){return a+(1.-a)*pow(1.-b,5.);}vec3 H(sampler2D e,vec3 b,const vec2 a,vec3 f){vec3 o=texture2D(e,a).xyz*2.-1.,g=dFdx(b),h=dFdy(b);vec2 i=dFdx(a),k=dFdy(a);vec3 c=normalize(f),d=normalize(g*k.t-h*i.t),n=-normalize(cross(c,d));mat3 q=mat3(d,n,c);return normalize(q*o);}vec3 l=vec3(1.);vec3 r(vec3 I,vec3 a,vec3 b,vec3 c,vec3 k,float d,float n,float J){vec3 e=vec3(.04);e=mix(e,I,n);vec3 f=normalize(c+b);float o=u(a,f,d),q=w(a,b,c,d);vec3 g=x(max(dot(f,b),0.),e),y=g,i=vec3(1.)-y;i*=1.-n;float h=max(dot(a,c),0.);vec3 z=o*q*g;float A=4.*max(dot(a,b),0.)*h+1e-3;vec3 B=z/A,C=i,K=(C+B)*k*h;return J*K;}void main(){vec3 b[6];b[0]=normalize(vec3(0.,0.,1.5)),b[1]=normalize(vec3(-1.,0.,.3)),b[2]=normalize(vec3(1.,0.,.3)),b[3]=normalize(vec3(0.,1.,1.5));vec3 c=p,a=LkEaxkGQc.rgb;float g=LkEaxkGQc.a;if(D())a=texture2D(j5BD_wqsh,m).rgb,g=texture2D(j5BD_wqsh,m).a;c=E()?H(m5a6RRSnk,j,m,p):c;float d=x8cqPYjGq;d=G()?texture2D(MpMrqOkTf,m).r:d;float h=zAvK5sktl;vec3 i=normalize(s-j),e=vec3(0.);e=r(a,c,i,b[0]-j,l,d,h,1.5),e+=r(a,c,i,normalize(b[1]-j),l,d,h,.75),e+=r(a,c,i,normalize(b[2]-j),l,d,h,.75),e+=r(a,c,i,normalize(b[3]-j),l,d,h,.75);if(F()){vec4 f=texture2D(Flt8u8M0x,m);a=g==0.?f.rgb*f.a:f.rgb*f.a+a*(1.-f.a),g=max(g,f.a);}a=pow(a,vec3(2.2));vec3 k=a*e*.45;k=pow(k,vec3(.454545)),gl_FragColor=vec4(k,g);}" : "#extension GL_OES_standard_derivatives:enable\nprecision highp float;uniform vec4 LkEaxkGQc;uniform float x8cqPYjGq,zAvK5sktl;uniform sampler2D j5BD_wqsh,m5a6RRSnk,Flt8u8M0x,MpMrqOkTf;varying vec2 m;varying vec3 j,p,s;uniform ivec4 mXA59BV4k;bool D(){return mXA59BV4k.x==1;}bool E(){return mXA59BV4k.y==1;}bool F(){return mXA59BV4k.z==1;}bool G(){return mXA59BV4k.w==1;}float u(vec3 d,vec3 e,float a){float c=a*a*a*a,b=max(dot(d,e),0.),f=b*b*(c-1.)+1.;return c/(3.141593*f*f);}float v(float b,float c){float a=c+1.,d=a*a*.125;return b/(b*(1.-d)+d);}float w(vec3 a,vec3 b,vec3 c,float d){float e=max(dot(a,c),0.),f=max(dot(a,b),0.);return v(e,d)*v(f,d);}vec3 x(float b,vec3 a){return a+(1.-a)*pow(1.-b,5.);}vec3 H(sampler2D e,vec3 b,const vec2 a,vec3 f){vec3 o=texture2D(e,a).xyz*2.-1.,g=dFdx(b),h=dFdy(b);vec2 i=dFdx(a),k=dFdy(a);vec3 c=normalize(f),d=normalize(g*k.t-h*i.t),n=-normalize(cross(c,d));mat3 q=mat3(d,n,c);return normalize(q*o);}vec3 l=vec3(1.);vec3 t(vec3 b,vec3 c,vec3 d,vec3 e,float h){float f=max(dot(c,d),0.);vec3 g=f*e*b,a=g;a=clamp(a,0.,1.);return h*a;}vec3 r(vec3 I,vec3 a,vec3 b,vec3 c,vec3 k,float d,float n,float J){vec3 e=vec3(.04);e=mix(e,I,n);vec3 f=normalize(c+b);float o=u(a,f,d),q=w(a,b,c,d);vec3 g=x(max(dot(f,b),0.),e),y=g,i=vec3(1.)-y;i*=1.-n;float h=max(dot(a,c),0.);vec3 z=o*q*g;float A=4.*max(dot(a,b),0.)*h+1e-3;vec3 B=z/A,C=i,K=(C+B)*k*h;return J*K;}void main(){vec3 a[6];a[0]=normalize(vec3(1.,-.5,1.)),a[1]=normalize(vec3(-1.,1.5,1.)),a[2]=normalize(vec3(.4,.4,-1.)),a[3]=normalize(vec3(0.,-1.,0.)),a[4]=normalize(vec3(-1.,0.,0.)),a[5]=normalize(vec3(1.,0.,0.));vec3 c=p,b=LkEaxkGQc.rgb;float g=LkEaxkGQc.a;if(D())b=texture2D(j5BD_wqsh,m).rgb,g=texture2D(j5BD_wqsh,m).a,b=pow(b,vec3(2.2));c=E()?H(m5a6RRSnk,j,m,p):c;float h=x8cqPYjGq;h=G()?texture2D(MpMrqOkTf,m).r:h;float k=zAvK5sktl;vec3 n=normalize(s-j),i=vec3(0.);i=r(b,c,n,a[0]-j,l,h,k,.1),i+=r(b,c,n,normalize(a[1]-j),l,h,k,.1),i+=r(b,c,n,normalize(a[2]-j),l,h,k,.1);vec3 d=t(b,c,a[0]-j,l,1.);d+=t(b,c,a[1]-j,l,1.),d+=t(b,c,a[2]-j,l,1.45),d+=t(b,c,a[3]-j,l,.65),d+=t(b,c,a[4]-j,l,.65),d+=t(b,c,a[5]-j,l,.25);vec3 e=LkEaxkGQc.rgb;if(F()){vec4 f=texture2D(Flt8u8M0x,m);e=g==0.?f.rgb*f.a:f.rgb*f.a+e*(1.-f.a),e=pow(e,vec3(2.2)),g=max(g,f.a);}vec3 o=e*(d+i);o=pow(o,vec3(.454545)),gl_FragColor=vec4(o,g);}"
                    })
                }
                getRenderables() {
                    return Object.fromEntries(this.meshes.map((t => [t.name, this.gltfMeshToRenderable(t)])))
                }
                gltfMeshToRenderable(t) {
                    if (!t.material) throw new s("Mesh material not found");
                    const {
                        baseColorFactor: e,
                        baseColorTexture: n,
                        isBaseColorTexture: r,
                        metallicFactor: o,
                        roughnessFactor: i,
                        roughnessTexture: a,
                        isRoughnessTexture: u,
                        normalTexture: c,
                        isNormalTexture: l,
                        placeholder: f,
                        isPlaceholderTexture: h,
                        isDoubleSided: p
                    } = this.gltfMaterialToTextures(t.material, this.gltf.images, this.gltf.textures), d = r ? 1 : 0, v = l ? 1 : 0, y = h ? 1 : 0, m = u ? 1 : 0;
                    return new S({
                        attributes: {
                            [_t]: new E(t.vertices),
                            [Tt]: new E(t.normals),
                            [xt]: new E(t.uvs)
                        },
                        textures: {
                            [bt]: n,
                            [gt]: f,
                            [Et]: c,
                            [wt]: a
                        },
                        uniforms: {
                            [Rt]: [0, 0, 0],
                            [dt]: [e[0], e[1], e[2], e[3]],
                            [mt]: [o],
                            [yt]: [i],
                            [vt]: [d, v, y, m],
                            [At]: Array.from(Pt()),
                            [Ot]: Array.from(Ct())
                        },
                        shader: this.shader,
                        indices: new w(t.indices),
                        depthTest: {
                            mask: !0,
                            func: "less",
                            range: {
                                near: 0,
                                far: 1
                            }
                        },
                        ...!p && {
                            cullFace: "back"
                        }
                    })
                }
                gltfMaterialToTextures(t, e, n) {
                    const r = t.pbrMetallicRoughness.baseColorFactor,
                        o = t.pbrMetallicRoughness.metallicFactor,
                        i = t.pbrMetallicRoughness.roughnessFactor,
                        s = void 0 !== t.pbrMetallicRoughness.baseColorTexture,
                        a = t.pbrMetallicRoughness.baseColorTexture ? new I({
                            source: e[n[t.pbrMetallicRoughness.baseColorTexture.index].source].img,
                            anisotropy: 16
                        }) : Vt,
                        u = t.normalTexture ? new I({
                            source: e[n[t.normalTexture.index].source].img,
                            anisotropy: 16
                        }) : Vt,
                        c = void 0 !== t.normalTexture,
                        l = t.pbrMetallicRoughness.metallicRoughnessTexture ? new I({
                            source: e[n[t.pbrMetallicRoughness.metallicRoughnessTexture.index].source].img,
                            anisotropy: 16
                        }) : Vt,
                        f = void 0 !== t.pbrMetallicRoughness.metallicRoughnessTexture,
                        h = t.name.includes("placeholder");
                    return {
                        baseColorFactor: r,
                        baseColorTexture: a,
                        metallicFactor: o,
                        roughnessFactor: i,
                        roughnessTexture: l,
                        isRoughnessTexture: f,
                        isBaseColorTexture: s,
                        normalTexture: u,
                        isNormalTexture: c,
                        placeholder: Vt,
                        isPlaceholderTexture: h,
                        isDoubleSided: t.doubleSided
                    }
                }
                getDataToUpdateAllPlaceholders(t) {
                    return this.meshes.filter((t => {
                        var e;
                        return null == (e = t.material) ? void 0 : e.name.includes("placeholder")
                    })).map((e => ({
                        id: e.name,
                        textures: {
                            uPlaceholderTexture: new I({
                                source: t,
                                anisotropy: 16
                            })
                        }
                    })))
                }
                getDataToUpdateSinglePlaceholder(t, e) {
                    if (!this.meshes.find((e => {
                            var n;
                            return e.name === t && (null == (n = e.material) ? void 0 : n.name.includes("placeholder"))
                        }))) throw new s("Mesh not found");
                    return {
                        id: t,
                        textures: {
                            uPlaceholderTexture: new I({
                                source: e,
                                anisotropy: 16
                            })
                        }
                    }
                }
            }, e.OrbitControls = class {
                constructor(t, {
                    initialDistance: e,
                    minDistance: n,
                    maxDistance: r,
                    initialRotation: o,
                    rotationTarget: i,
                    enableZooming: s = !1
                }) {
                    if (this.container = t, this.velocity = [0, 0], this.mousePosition = [0, 0], this.clientSizeRatio = [1, 1], this.isMouseDown = !1, this.projectionMatrix = Pt(), this.viewMatrix = Pt(), this.modelMatrix = Pt(), this.modelViewProjectionMatrix = Pt(), this.cameraPosition = Dt(), this.onMouseDown = t => {
                            t.preventDefault(), this.mousePosition[0] = t.x, this.mousePosition[1] = t.y, this.clientSizeRatio[0] = window.innerWidth / this.container.clientWidth, this.clientSizeRatio[1] = window.innerHeight / this.container.clientHeight, this.isMouseDown = !0
                        }, this.onMouseMove = t => {
                            if (!this.isMouseDown) return;
                            const {
                                x: e,
                                y: n
                            } = t, r = e - this.mousePosition[0], o = n - this.mousePosition[1], i = .3 * Math.sqrt(this.distance);
                            this.velocity[0] = r * i * this.clientSizeRatio[0], this.velocity[1] = o * i * this.clientSizeRatio[1], this.mousePosition[0] = e, this.mousePosition[1] = n, this.tick()
                        }, this.onMouseUp = t => {
                            this.isMouseDown = !1, t.target === this.container && t.preventDefault()
                        }, this.onWheelMove = t => {
                            t.preventDefault(), t.stopPropagation();
                            const {
                                deltaY: e
                            } = t;
                            if (Number.isNaN(e)) return;
                            const n = this.distance + e * this.distance * 5e-4;
                            this.zoomToDistance(n)
                        }, this.toggleZooming = t => {
                            t ? this.container.addEventListener("wheel", this.onWheelMove, !1) : this.container.removeEventListener("wheel", this.onWheelMove, !1)
                        }, this.tick = () => {
                            this.rotation[0] += .01 * this.velocity[0], this.rotation[1] -= .01 * this.velocity[1], this.rotation[0] = (this.rotation[0] + 2 * Math.PI) % (2 * Math.PI), this.rotation[1] = Math.min(.99 * Math.PI, Math.max(.01, this.rotation[1])), this.velocity[0] *= .95, this.velocity[1] *= .95;
                            const t = this.velocity[0] * this.velocity[0],
                                e = this.velocity[1] * this.velocity[1];
                            return Math.sqrt(t + e) < 5e-5 && (this.velocity[0] = 0, this.velocity[1] = 0), this.updateCameraPosition(), this
                        }, this.moveToRotation = (t, e) => {
                            null != t && (this.rotation[0] = (t + 2 * Math.PI) % (2 * Math.PI)), null != e && (this.rotation[1] = Math.min(.99 * Math.PI, Math.max(.01, e))), this.velocity[0] = 0, this.velocity[1] = 0
                        }, this.loadCameraSettings = ({
                            initialCameraDistance: t,
                            cameraDistanceRange: e
                        }) => {
                            this.zoomToDistance(t), this.enableZooming && null != e ? (this.minDistance = e.min, this.maxDistance = e.max, this.toggleZooming(!0)) : this.toggleZooming(!1)
                        }, this.zoomToDistance = t => {
                            null != t && (this.distance = Math.min(this.maxDistance, Math.max(t, this.minDistance)))
                        }, this.checkCamera = () => {}, void 0 !== n && n <= 0) throw new a("Invalid value of minDistance. Expected value must be greater than 0.");
                    this.enableZooming = s, this.distance = null != e ? e : 1.5, this.minDistance = null != n ? n : .1, this.maxDistance = null != r ? r : 20, this.rotationTarget = null != i ? i : "camera", this.rotation = null != o ? o : le, this.updateCameraPosition(), this.container.addEventListener("mousedown", this.onMouseDown, !1), window.addEventListener("mousemove", this.onMouseMove, !1), window.addEventListener("mouseup", this.onMouseUp, !1)
                }
                dispose() {
                    this.container.removeEventListener("mousedown", this.onMouseDown, !1), window.removeEventListener("mousemove", this.onMouseMove, !1), window.removeEventListener("mouseup", this.onMouseUp, !1), this.toggleZooming(!1)
                }
                getUniformsToUpdateView(t) {
                    return {
                        uniforms: {
                            uCameraPosition: [this.cameraPosition[0], this.cameraPosition[1], this.cameraPosition[2]],
                            uMVPMatrix: this.createMVPMatrix(t),
                            uNormalMatrix: this.createNormalMatrix()
                        }
                    }
                }
                createViewMatrix(t) {
                    if ("model" === this.rotationTarget) {
                        const e = [0, 0, Ft(t)];
                        Mt(this.viewMatrix, e, t, ce)
                    } else Mt(this.viewMatrix, t, t, ce);
                    return this.viewMatrix
                }
                createModelMatrix() {
                    if (Lt(this.modelMatrix), "model" === this.rotationTarget) {
                        const [t, e] = this.rotation;
                        (function(t, e, n) {
                            var r = Math.sin(n),
                                o = Math.cos(n),
                                i = e[4],
                                s = e[5],
                                a = e[6],
                                u = e[7],
                                c = e[8],
                                l = e[9],
                                f = e[10],
                                h = e[11];
                            e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = i * o + c * r, t[5] = s * o + l * r, t[6] = a * o + f * r, t[7] = u * o + h * r, t[8] = c * o - i * r, t[9] = l * o - s * r, t[10] = f * o - a * r, t[11] = h * o - u * r
                        })(this.modelMatrix, this.modelMatrix, -e + Math.PI / 2),
                        function(t, e, n) {
                            var r = Math.sin(n),
                                o = Math.cos(n),
                                i = e[0],
                                s = e[1],
                                a = e[2],
                                u = e[3],
                                c = e[8],
                                l = e[9],
                                f = e[10],
                                h = e[11];
                            e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = i * o - c * r, t[1] = s * o - l * r, t[2] = a * o - f * r, t[3] = u * o - h * r, t[8] = i * r + c * o, t[9] = s * r + l * o, t[10] = a * r + f * o, t[11] = u * r + h * o
                        }(this.modelMatrix, this.modelMatrix, t - Math.PI / 2)
                    }
                    return this.modelMatrix
                }
                createMVPMatrix(t) {
                    this.createModelMatrix(), this.createViewMatrix(this.cameraPosition), Bt(this.projectionMatrix, .4, t, .01, 1e3);
                    const e = Ut(0, 0, 0),
                        n = Ut(0, 1, 0);
                    return Mt(this.viewMatrix, this.cameraPosition, e, n), jt(this.modelViewProjectionMatrix, this.viewMatrix, this.modelMatrix), jt(this.modelViewProjectionMatrix, this.projectionMatrix, this.modelViewProjectionMatrix), Array.from(this.modelViewProjectionMatrix)
                }
                updateCameraPosition() {
                    const [t, e] = "camera" === this.rotationTarget ? this.rotation : le;
                    this.cameraPosition[0] = this.distance * Math.cos(t) * Math.sin(e), this.cameraPosition[1] = this.distance * Math.cos(e), this.cameraPosition[2] = this.distance * Math.sin(t) * Math.sin(e)
                }
                createNormalMatrix() {
                    const t = Ct();
                    return function(t, e) {
                        var n = e[0],
                            r = e[1],
                            o = e[2],
                            i = e[3],
                            s = e[4],
                            a = e[5],
                            u = e[6],
                            c = e[7],
                            l = e[8],
                            f = e[9],
                            h = e[10],
                            p = e[11],
                            d = e[12],
                            v = e[13],
                            y = e[14],
                            m = e[15],
                            b = n * a - r * s,
                            g = n * u - o * s,
                            E = n * c - i * s,
                            w = r * u - o * a,
                            _ = r * c - i * a,
                            T = o * c - i * u,
                            A = l * v - f * d,
                            x = l * y - h * d,
                            O = l * m - p * d,
                            R = f * y - h * v,
                            N = f * m - p * v,
                            S = h * m - p * y,
                            C = b * S - g * N + E * R + w * O - _ * x + T * A;
                        C && (C = 1 / C, t[0] = (a * S - u * N + c * R) * C, t[1] = (u * O - s * S - c * x) * C, t[2] = (s * N - a * O + c * A) * C, t[3] = (o * N - r * S - i * R) * C, t[4] = (n * S - o * O + i * x) * C, t[5] = (r * O - n * N - i * A) * C, t[6] = (v * T - y * _ + m * w) * C, t[7] = (y * E - d * T - m * g) * C, t[8] = (d * _ - v * E + m * b) * C)
                    }(t, this.modelMatrix), Array.from(t)
                }
            }, e.PingpongBuffers = ot, e.PremultipliedNormalBlending = {
                source: "one",
                destination: "one minus src alpha",
                equation: "add"
            }, e.RenderTexture = B, e.Renderable = S, e.Renderer = class {
                constructor(t) {
                    this.resources = new Map, this.create = t, this.backend = this.createBackend()
                }
                createBackend() {
                    const t = this.create();
                    return t.onContextLost = t => {
                        var e;
                        null == (e = this.onContextLost) || e.call(this, t)
                    }, t
                }
                load(t) {
                    this.backend.load(t);
                    const e = Array.isArray(t) ? t : t.resources;
                    for (const n of e) this.resources.set(n.id, n)
                }
                update(t) {
                    this.backend.update(t)
                }
                clear(t, e) {
                    this.backend.clear(t, e)
                }
                render(t) {
                    this.backend.render(t)
                }
                readPixels(t) {
                    return this.backend.readPixels(t)
                }
                flush() {
                    this.backend.flush()
                }
                release(t) {
                    this.backend.release(t);
                    const e = Array.isArray(t) ? t : t.resources;
                    for (const n of e) this.resources.delete(n.id)
                }
                dispose() {
                    this.backend.dispose(), this.resources.clear()
                }
                restore() {
                    this.backend.dispose(), this.backend = this.createBackend(), this.backend.load(Array.from(this.resources.values()))
                }
                resize(...t) {
                    const [e, n] = t;
                    if (e === this.canvas.width && n === this.canvas.height) return;
                    this.backend.resize(...t);
                    const r = Array.from(this.resources.values()).filter((t => "texture" === t.resourceType && !t.source && "relative" === t.size));
                    this.backend.update(r)
                }
                get canvas() {
                    return this.backend.canvas
                }
            }, e.Shader = P, e.WebGlRenderer = Y, e._renderTexturePool = nt, e.createWebGlRenderer = function(t, e) {
                var n, r, i;
                const s = document.createElement("canvas");
                t.append(s), s.style.width = "100%", s.style.height = "100%";
                let a = "Unknown";
                const u = t => {
                    t.statusMessage && (a = t.statusMessage)
                };
                s.addEventListener("webglcontextcreationerror", u);
                const c = {
                        alpha: null == (n = null == e ? void 0 : e.alpha) || n,
                        antialias: null == (r = null == e ? void 0 : e.antialias) || r,
                        depth: null != (i = null == e ? void 0 : e.depth) && i,
                        stencil: !1,
                        preserveDrawingBuffer: !(null == e || !e.preserveDrawingBuffer),
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: !(null == e || !e.failIfMajorPerformanceCaveat)
                    },
                    l = null != e && e.useWebGl2 ? s.getContext("webgl2", c) : s.getContext("webgl", c);
                if (s.removeEventListener("webglcontextcreationerror", u), !l) throw new o(`A WebGL context could not be created. Reason: ${a}`);
                return new Y(l, { ...e,
                    onDispose: () => {
                        s.remove()
                    }
                })
            }, e.debugBinaryTexture = ht, e.debugImageTexture = ft, e.debugRenderTexture = lt, e.debugTexture = function(t, e) {
                e && "render" !== e.textureType ? "image" === e.textureType ? ft(e) : ht(e) : lt(t, e)
            }, e.getAbsoluteTextureSize = M, e.getPooledRenderTexture = rt, e.injectAlphaPremultiplication = Q, e.paddedTuple = function(t, e, n) {
                if (t.length > n) return t.slice(0, n);
                const r = [...t];
                for (; r.length < n;) r.push(e);
                return r
            }
        },
        450117: (t, e, n) => {
            "use strict";
            n.d(e, {
                B7: () => f,
                PJ: () => l
            });
            var r = n(998083),
                o = n(226260),
                i = n(335679),
                s = n(997752),
                a = n(878796),
                u = n(630084),
                c = n(623276),
                l = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return r.C6(e, t), e
                }(i.v),
                f = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return r.C6(e, t), e.prototype[c.D] = function() {
                        return new l(this)
                    }, e.prototype.lift = function(t) {
                        var e = new h(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new a.P;
                        if (!this.isStopped)
                            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new a.P;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new a.P;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new a.P;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new a.P;
                        return this.hasError ? (t.error(this.thrownError), s.y.EMPTY) : this.isStopped ? (t.complete(), s.y.EMPTY) : (this.observers.push(t), new u.Y(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new o.c;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new h(t, e)
                    }, e
                }(o.c),
                h = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return r.C6(e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        return this.source ? this.source.subscribe(t) : s.y.EMPTY
                    }, e
                }(f)
        },
        451118: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this;
                    e.next = function() {
                            var t, n, r = e.w,
                                o = e.X,
                                i = e.i;
                            return e.w = r = r + 1640531527 | 0, n = o[i + 34 & 127], t = o[i = i + 1 & 127], n ^= n << 13, t ^= t << 17, n ^= n >>> 15, t ^= t >>> 12, n = o[i] = n ^ t, e.i = i, n + (r ^ r >>> 16) | 0
                        },
                        function(t, e) {
                            var n, r, o, i, s, a = [],
                                u = 128;
                            for (e === (0 | e) ? (r = e, e = null) : (e += "\0", r = 0, u = Math.max(u, e.length)), o = 0, i = -32; i < u; ++i) e && (r ^= e.charCodeAt((i + 32) % e.length)), 0 === i && (s = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, i >= 0 && (s = s + 1640531527 | 0, o = 0 == (n = a[127 & i] ^= r + s) ? o + 1 : 0);
                            for (o >= 128 && (a[127 & (e && e.length || 0)] = -1), o = 127, i = 512; i > 0; --i) r = a[o + 34 & 127], n = a[o = o + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, a[o] = r ^ n;
                            t.w = s, t.X = a, t.i = o
                        }(e, t)
                }

                function a(t, e) {
                    return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
                }

                function u(t, e) {
                    null == t && (t = +new Date);
                    var n = new s(t),
                        r = e && e.state,
                        o = function() {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function() {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && (r.X && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.xor4096 = u
            }(0, t = n.nmd(t), n.amdD)
        },
        453535: (t, e, n) => {
            "use strict";

            function r(t) {
                return t && "function" == typeof t.schedule
            }
            n.d(e, {
                m: () => r
            })
        },
        460537: (t, e, n) => {
            "use strict";
            n.d(e, {
                f: () => o
            });
            var r = n(725e3);

            function o(t, e) {
                return function(n) {
                    var o;
                    if (o = "function" == typeof t ? t : function() {
                            return t
                        }, "function" == typeof e) return n.lift(new i(o, e));
                    var s = Object.create(n, r.f);
                    return s.source = n, s.subjectFactory = o, s
                }
            }
            var i = function() {
                function t(t, e) {
                    this.subjectFactory = t, this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var n = this.selector,
                        r = this.subjectFactory(),
                        o = n(r).subscribe(t);
                    return o.add(e.subscribe(r)), o
                }, t
            }()
        },
        484201: (t, e, n) => {
            t.exports = n(76901)()
        },
        493668: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this,
                        n = "";
                    e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function() {
                        var t = e.x ^ e.x << 11;
                        return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                    }, t === (0 | t) ? e.x = t : n += t;
                    for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), e.next()
                }

                function a(t, e) {
                    return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
                }

                function u(t, e) {
                    var n = new s(t),
                        r = e && e.state,
                        o = function() {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function() {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.xor128 = u
            }(0, t = n.nmd(t), n.amdD)
        },
        499401: () => {},
        500926: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            const o = function t(e, n) {
                if (e === n) return !0;
                if (null == e || null == n) return !1;
                if (Array.isArray(e)) return Array.isArray(n) && e.length === n.length && e.every((function(e, r) {
                    return t(e, n[r])
                }));
                var o = void 0 === e ? "undefined" : r(e);
                if (o !== (void 0 === n ? "undefined" : r(n))) return !1;
                if ("object" === o) {
                    var i = e.valueOf(),
                        s = n.valueOf();
                    if (i !== e || s !== n) return t(i, s);
                    var a = Object.keys(e),
                        u = Object.keys(n);
                    return a.length === u.length && a.every((function(r) {
                        return t(e[r], n[r])
                    }))
                }
                return !1
            }
        },
        502678: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => f
            });
            var r = n(124105),
                o = n(168287),
                i = n(363295),
                s = n(426242),
                a = n(928662),
                u = n(72231),
                c = n(1408),
                l = n(410826);

            function f(t, e) {
                if (null != t) {
                    if ((0, a.l)(t)) return (0, r.x)(t, e);
                    if ((0, u.y)(t)) return (0, o.P)(t, e);
                    if ((0, c.X)(t)) return (0, i.V)(t, e);
                    if ((0, l.x)(t) || "string" == typeof t) return (0, s.S)(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }
        },
        506104: (t, e, n) => {
            "use strict";

            function r() {}
            n.d(e, {
                l: () => r
            })
        },
        512586: (t, e, n) => {
            "use strict";

            function r(t) {
                return "/" === t.charAt(0)
            }

            function o(t, e) {
                for (var n = e, r = n + 1, o = t.length; r < o; n += 1, r += 1) t[n] = t[r];
                t.pop()
            }
            n.d(e, {
                A: () => i
            });
            const i = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = t && t.split("/") || [],
                    i = e && e.split("/") || [],
                    s = t && r(t),
                    a = e && r(e),
                    u = s || a;
                if (t && r(t) ? i = n : n.length && (i.pop(), i = i.concat(n)), !i.length) return "/";
                var c = void 0;
                if (i.length) {
                    var l = i[i.length - 1];
                    c = "." === l || ".." === l || "" === l
                } else c = !1;
                for (var f = 0, h = i.length; h >= 0; h--) {
                    var p = i[h];
                    "." === p ? o(i, h) : ".." === p ? (o(i, h), f++) : f && (o(i, h), f--)
                }
                if (!u)
                    for (; f--; f) i.unshift("..");
                !u || "" === i[0] || i[0] && r(i[0]) || i.unshift("");
                var d = i.join("/");
                return c && "/" !== d.substr(-1) && (d += "/"), d
            }
        },
        523546: (t, e, n) => {
            "use strict";
            n.d(e, {
                AO: () => T,
                Kr: () => _
            });
            var r = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
                o = r.join(","),
                i = "undefined" == typeof Element,
                s = i ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                a = !i && Element.prototype.getRootNode ? function(t) {
                    var e;
                    return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t)
                } : function(t) {
                    return null == t ? void 0 : t.ownerDocument
                },
                u = function t(e, n) {
                    var r;
                    void 0 === n && (n = !0);
                    var o = null == e || null === (r = e.getAttribute) || void 0 === r ? void 0 : r.call(e, "inert");
                    return "" === o || "true" === o || n && e && t(e.parentNode)
                },
                c = function(t, e, n) {
                    if (u(t)) return [];
                    var r = Array.prototype.slice.apply(t.querySelectorAll(o));
                    return e && s.call(t, o) && r.unshift(t), r = r.filter(n)
                },
                l = function t(e, n, r) {
                    for (var i = [], a = Array.from(e); a.length;) {
                        var c = a.shift();
                        if (!u(c, !1))
                            if ("SLOT" === c.tagName) {
                                var l = c.assignedElements(),
                                    f = t(l.length ? l : c.children, !0, r);
                                r.flatten ? i.push.apply(i, f) : i.push({
                                    scopeParent: c,
                                    candidates: f
                                })
                            } else {
                                s.call(c, o) && r.filter(c) && (n || !e.includes(c)) && i.push(c);
                                var h = c.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(c),
                                    p = !u(h, !1) && (!r.shadowRootFilter || r.shadowRootFilter(c));
                                if (h && p) {
                                    var d = t(!0 === h ? c.children : h.children, !0, r);
                                    r.flatten ? i.push.apply(i, d) : i.push({
                                        scopeParent: c,
                                        candidates: d
                                    })
                                } else a.unshift.apply(a, c.children)
                            }
                    }
                    return i
                },
                f = function(t) {
                    return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
                },
                h = function(t) {
                    if (!t) throw new Error("No node provided");
                    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || function(t) {
                        var e, n = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
                        return "" === n || "true" === n
                    }(t)) && !f(t) ? 0 : t.tabIndex
                },
                p = function(t, e) {
                    return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
                },
                d = function(t) {
                    return "INPUT" === t.tagName
                },
                v = function(t) {
                    return function(t) {
                        return d(t) && "radio" === t.type
                    }(t) && ! function(t) {
                        if (!t.name) return !0;
                        var e, n = t.form || a(t),
                            r = function(t) {
                                return n.querySelectorAll('input[type="radio"][name="' + t + '"]')
                            };
                        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = r(window.CSS.escape(t.name));
                        else try {
                            e = r(t.name)
                        } catch (i) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1
                        }
                        var o = function(t, e) {
                            for (var n = 0; n < t.length; n++)
                                if (t[n].checked && t[n].form === e) return t[n]
                        }(e, t.form);
                        return !o || o === t
                    }(t)
                },
                y = function(t) {
                    var e = t.getBoundingClientRect(),
                        n = e.width,
                        r = e.height;
                    return 0 === n && 0 === r
                },
                m = function(t, e) {
                    var n = e.displayCheck,
                        r = e.getShadowRoot;
                    if ("hidden" === getComputedStyle(t).visibility) return !0;
                    var o = s.call(t, "details>summary:first-of-type") ? t.parentElement : t;
                    if (s.call(o, "details:not([open]) *")) return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n) return y(t)
                    } else {
                        if ("function" == typeof r) {
                            for (var i = t; t;) {
                                var u = t.parentElement,
                                    c = a(t);
                                if (u && !u.shadowRoot && !0 === r(u)) return y(t);
                                t = t.assignedSlot ? t.assignedSlot : u || c === t.ownerDocument ? u : c.host
                            }
                            t = i
                        }
                        if (function(t) {
                                var e, n, r, o, i = t && a(t),
                                    s = null === (e = i) || void 0 === e ? void 0 : e.host,
                                    u = !1;
                                if (i && i !== t)
                                    for (u = !!(null !== (n = s) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(s) || null != t && null !== (o = t.ownerDocument) && void 0 !== o && o.contains(t)); !u && s;) {
                                        var c, l, f;
                                        u = !(null === (l = s = null === (c = i = a(s)) || void 0 === c ? void 0 : c.host) || void 0 === l || null === (f = l.ownerDocument) || void 0 === f || !f.contains(s))
                                    }
                                return u
                            }(t)) return !t.getClientRects().length;
                        if ("legacy-full" !== n) return !0
                    }
                    return !1
                },
                b = function(t, e) {
                    return !(e.disabled || u(e) || function(t) {
                        return d(t) && "hidden" === t.type
                    }(e) || m(e, t) || function(t) {
                        return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
                            return "SUMMARY" === t.tagName
                        }))
                    }(e) || function(t) {
                        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                            for (var e = t.parentElement; e;) {
                                if ("FIELDSET" === e.tagName && e.disabled) {
                                    for (var n = 0; n < e.children.length; n++) {
                                        var r = e.children.item(n);
                                        if ("LEGEND" === r.tagName) return !!s.call(e, "fieldset[disabled] *") || !r.contains(t)
                                    }
                                    return !0
                                }
                                e = e.parentElement
                            }
                        return !1
                    }(e))
                },
                g = function(t, e) {
                    return !(v(e) || h(e) < 0 || !b(t, e))
                },
                E = function(t) {
                    var e = parseInt(t.getAttribute("tabindex"), 10);
                    return !!(isNaN(e) || e >= 0)
                },
                w = function t(e) {
                    var n = [],
                        r = [];
                    return e.forEach((function(e, o) {
                        var i = !!e.scopeParent,
                            s = i ? e.scopeParent : e,
                            a = function(t, e) {
                                var n = h(t);
                                return n < 0 && e && !f(t) ? 0 : n
                            }(s, i),
                            u = i ? t(e.candidates) : s;
                        0 === a ? i ? n.push.apply(n, u) : n.push(s) : r.push({
                            documentOrder: o,
                            tabIndex: a,
                            item: e,
                            isScope: i,
                            content: u
                        })
                    })), r.sort(p).reduce((function(t, e) {
                        return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
                    }), []).concat(n)
                },
                _ = function(t, e) {
                    var n;
                    return n = (e = e || {}).getShadowRoot ? l([t], e.includeContainer, {
                        filter: g.bind(null, e),
                        flatten: !1,
                        getShadowRoot: e.getShadowRoot,
                        shadowRootFilter: E
                    }) : c(t, e.includeContainer, g.bind(null, e)), w(n)
                },
                T = function(t, e) {
                    if (e = e || {}, !t) throw new Error("No node provided");
                    return !1 !== s.call(t, o) && g(e, t)
                }
        },
        535921: (t, e, n) => {
            "use strict";
            n.d(e, {
                T: () => i
            });
            var r = n(998083),
                o = n(335679);

            function i(t, e) {
                return function(n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.project, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(e)
                    }, e
                }(o.v)
        },
        537727: (t, e, n) => {
            "use strict";
            n.d(e, {
                I: () => i
            });
            var r = n(558279),
                o = n(599884),
                i = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (r.$.useDeprecatedSynchronousErrorHandling) throw t;
                        (0, o.T)(t)
                    },
                    complete: function() {}
                }
        },
        550742: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => s
            });
            var r = n(226260),
                o = n(750150),
                i = n(363295);

            function s(t, e) {
                return e ? (0, i.V)(t, e) : new r.c((0, o.v)(t))
            }
        },
        553824: (t, e, n) => {
            "use strict";
            n.d(e, {
                e: () => d,
                r: () => i
            });
            var r = n(944339),
                o = n(106853);

            function i(t) {
                if (0 === t.length) throw new Error("Number skeleton cannot be empty");
                for (var e = [], n = 0, r = t.split(o.R).filter((function(t) {
                        return t.length > 0
                    })); n < r.length; n++) {
                    var i = r[n].split("/");
                    if (0 === i.length) throw new Error("Invalid number skeleton");
                    for (var s = i[0], a = i.slice(1), u = 0, c = a; u < c.length; u++) {
                        if (0 === c[u].length) throw new Error("Invalid number skeleton")
                    }
                    e.push({
                        stem: s,
                        options: a
                    })
                }
                return e
            }
            var s = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                a = /^(@+)?(\+|#+)?[rs]?$/g,
                u = /(\*)(0+)|(#+)(0+)|(0+)/g,
                c = /^(0+)$/;

            function l(t) {
                var e = {};
                return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(a, (function(t, n, r) {
                    return "string" != typeof r ? (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length) : "+" === r ? e.minimumSignificantDigits = n.length : "#" === n[0] ? e.maximumSignificantDigits = n.length : (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
                })), e
            }

            function f(t) {
                switch (t) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function h(t) {
                var e;
                if ("E" === t[0] && "E" === t[1] ? (e = {
                        notation: "engineering"
                    }, t = t.slice(2)) : "E" === t[0] && (e = {
                        notation: "scientific"
                    }, t = t.slice(1)), e) {
                    var n = t.slice(0, 2);
                    if ("+!" === n ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === n && (e.signDisplay = "exceptZero", t = t.slice(2)), !c.test(t)) throw new Error("Malformed concise eng/scientific notation");
                    e.minimumIntegerDigits = t.length
                }
                return e
            }

            function p(t) {
                var e = f(t);
                return e || {}
            }

            function d(t) {
                for (var e = {}, n = 0, o = t; n < o.length; n++) {
                    var i = o[n];
                    switch (i.stem) {
                        case "percent":
                        case "%":
                            e.style = "percent";
                            continue;
                        case "%x100":
                            e.style = "percent", e.scale = 100;
                            continue;
                        case "currency":
                            e.style = "currency", e.currency = i.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            e.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            e.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            e.style = "unit", e.unit = i.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            e.notation = "compact", e.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            e.notation = "compact", e.compactDisplay = "long";
                            continue;
                        case "scientific":
                            e = (0, r.Cl)((0, r.Cl)((0, r.Cl)({}, e), {
                                notation: "scientific"
                            }), i.options.reduce((function(t, e) {
                                return (0, r.Cl)((0, r.Cl)({}, t), p(e))
                            }), {}));
                            continue;
                        case "engineering":
                            e = (0, r.Cl)((0, r.Cl)((0, r.Cl)({}, e), {
                                notation: "engineering"
                            }), i.options.reduce((function(t, e) {
                                return (0, r.Cl)((0, r.Cl)({}, t), p(e))
                            }), {}));
                            continue;
                        case "notation-simple":
                            e.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            e.currencyDisplay = "code", e.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            e.currencyDisplay = "name", e.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            e.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            e.scale = parseFloat(i.options[0]);
                            continue;
                        case "rounding-mode-floor":
                            e.roundingMode = "floor";
                            continue;
                        case "rounding-mode-ceiling":
                            e.roundingMode = "ceil";
                            continue;
                        case "rounding-mode-down":
                            e.roundingMode = "trunc";
                            continue;
                        case "rounding-mode-up":
                            e.roundingMode = "expand";
                            continue;
                        case "rounding-mode-half-even":
                            e.roundingMode = "halfEven";
                            continue;
                        case "rounding-mode-half-down":
                            e.roundingMode = "halfTrunc";
                            continue;
                        case "rounding-mode-half-up":
                            e.roundingMode = "halfExpand";
                            continue;
                        case "integer-width":
                            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            i.options[0].replace(u, (function(t, n, r, o, i, s) {
                                if (n) e.minimumIntegerDigits = r.length;
                                else {
                                    if (o && i) throw new Error("We currently do not support maximum integer digits");
                                    if (s) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (c.test(i.stem)) e.minimumIntegerDigits = i.stem.length;
                    else if (s.test(i.stem)) {
                        if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        i.stem.replace(s, (function(t, n, r, o, i, s) {
                            return "*" === r ? e.minimumFractionDigits = n.length : o && "#" === o[0] ? e.maximumFractionDigits = o.length : i && s ? (e.minimumFractionDigits = i.length, e.maximumFractionDigits = i.length + s.length) : (e.minimumFractionDigits = n.length, e.maximumFractionDigits = n.length), ""
                        }));
                        var d = i.options[0];
                        "w" === d ? e = (0, r.Cl)((0, r.Cl)({}, e), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : d && (e = (0, r.Cl)((0, r.Cl)({}, e), l(d)))
                    } else if (a.test(i.stem)) e = (0, r.Cl)((0, r.Cl)({}, e), l(i.stem));
                    else {
                        var v = f(i.stem);
                        v && (e = (0, r.Cl)((0, r.Cl)({}, e), v));
                        var y = h(i.stem);
                        y && (e = (0, r.Cl)((0, r.Cl)({}, e), y))
                    }
                }
                return e
            }
        },
        556020: (t, e, n) => {
            "use strict";
            n.d(e, {
                BN: () => d,
                UE: () => m,
                UU: () => v,
                cY: () => p,
                jD: () => y,
                we: () => f
            });
            var r = n(821046),
                o = n(845212),
                i = n(950873),
                s = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function a(t, e) {
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                let n, r, o;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if (n = t.length, n !== e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!a(t[r], e[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!{}.hasOwnProperty.call(e, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !t.$$typeof) && !a(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function u(t) {
                if ("undefined" == typeof window) return 1;
                return (t.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function c(t, e) {
                const n = u(t);
                return Math.round(e * n) / n
            }

            function l(t) {
                const e = o.useRef(t);
                return s((() => {
                    e.current = t
                })), e
            }

            function f(t) {
                void 0 === t && (t = {});
                const {
                    placement: e = "bottom",
                    strategy: n = "absolute",
                    middleware: f = [],
                    platform: h,
                    elements: {
                        reference: p,
                        floating: d
                    } = {},
                    transform: v = !0,
                    whileElementsMounted: y,
                    open: m
                } = t, [b, g] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: e,
                    middlewareData: {},
                    isPositioned: !1
                }), [E, w] = o.useState(f);
                a(E, f) || w(f);
                const [_, T] = o.useState(null), [A, x] = o.useState(null), O = o.useCallback((t => {
                    t !== C.current && (C.current = t, T(t))
                }), []), R = o.useCallback((t => {
                    t !== P.current && (P.current = t, x(t))
                }), []), N = p || _, S = d || A, C = o.useRef(null), P = o.useRef(null), L = o.useRef(b), j = null != y, I = l(y), k = l(h), B = o.useCallback((() => {
                    if (!C.current || !P.current) return;
                    const t = {
                        placement: e,
                        strategy: n,
                        middleware: E
                    };
                    k.current && (t.platform = k.current), (0, r.rD)(C.current, P.current, t).then((t => {
                        const e = { ...t,
                            isPositioned: !0
                        };
                        M.current && !a(L.current, e) && (L.current = e, i.flushSync((() => {
                            g(e)
                        })))
                    }))
                }), [E, e, n, k]);
                s((() => {
                    !1 === m && L.current.isPositioned && (L.current.isPositioned = !1, g((t => ({ ...t,
                        isPositioned: !1
                    }))))
                }), [m]);
                const M = o.useRef(!1);
                s((() => (M.current = !0, () => {
                    M.current = !1
                })), []), s((() => {
                    if (N && (C.current = N), S && (P.current = S), N && S) {
                        if (I.current) return I.current(N, S, B);
                        B()
                    }
                }), [N, S, B, I, j]);
                const D = o.useMemo((() => ({
                        reference: C,
                        floating: P,
                        setReference: O,
                        setFloating: R
                    })), [O, R]),
                    F = o.useMemo((() => ({
                        reference: N,
                        floating: S
                    })), [N, S]),
                    U = o.useMemo((() => {
                        const t = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!F.floating) return t;
                        const e = c(F.floating, b.x),
                            r = c(F.floating, b.y);
                        return v ? { ...t,
                            transform: "translate(" + e + "px, " + r + "px)",
                            ...u(F.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: e,
                            top: r
                        }
                    }), [n, v, F.floating, b.x, b.y]);
                return o.useMemo((() => ({ ...b,
                    update: B,
                    refs: D,
                    elements: F,
                    floatingStyles: U
                })), [b, B, D, F, U])
            }
            const h = t => ({
                    name: "arrow",
                    options: t,
                    fn(e) {
                        const {
                            element: n,
                            padding: o
                        } = "function" == typeof t ? t(e) : t;
                        return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, r.UE)({
                            element: n.current,
                            padding: o
                        }).fn(e) : {} : n ? (0, r.UE)({
                            element: n,
                            padding: o
                        }).fn(e) : {};
                        var i
                    }
                }),
                p = (t, e) => ({ ...(0, r.cY)(t),
                    options: [t, e]
                }),
                d = (t, e) => ({ ...(0, r.BN)(t),
                    options: [t, e]
                }),
                v = (t, e) => ({ ...(0, r.UU)(t),
                    options: [t, e]
                }),
                y = (t, e) => ({ ...(0, r.jD)(t),
                    options: [t, e]
                }),
                m = (t, e) => ({ ...h(t),
                    options: [t, e]
                })
        },
        558279: (t, e, n) => {
            "use strict";
            n.d(e, {
                $: () => o
            });
            var r = !1,
                o = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        t && (new Error).stack;
                        r = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return r
                    }
                }
        },
        565800: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this;
                    e.next = function() {
                            var t, n, r = e.x,
                                o = e.i;
                            return t = r[o], n = (t ^= t >>> 7) ^ t << 24, n ^= (t = r[o + 1 & 7]) ^ t >>> 10, n ^= (t = r[o + 3 & 7]) ^ t >>> 3, n ^= (t = r[o + 4 & 7]) ^ t << 7, t = r[o + 7 & 7], n ^= (t ^= t << 13) ^ t << 9, r[o] = n, e.i = o + 1 & 7, n
                        },
                        function(t, e) {
                            var n, r = [];
                            if (e === (0 | e)) r[0] = e;
                            else
                                for (e = "" + e, n = 0; n < e.length; ++n) r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                            for (; r.length < 8;) r.push(0);
                            for (n = 0; n < 8 && 0 === r[n]; ++n);
                            for (8 == n ? r[7] = -1 : r[n], t.x = r, t.i = 0, n = 256; n > 0; --n) t.next()
                        }(e, t)
                }

                function a(t, e) {
                    return e.x = t.x.slice(), e.i = t.i, e
                }

                function u(t, e) {
                    null == t && (t = +new Date);
                    var n = new s(t),
                        r = e && e.state,
                        o = function() {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function() {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && (r.x && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.xorshift7 = u
            }(0, t = n.nmd(t), n.amdD)
        },
        588587: (t, e, n) => {
            "use strict";
            var r, o = n(776266);
            t = n.hmd(t), r = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : t;
            (0, o.A)(r)
        },
        599079: (t, e, n) => {
            "use strict";
            n.d(e, {
                R: () => a
            });
            var r = n(226260),
                o = n(375527),
                i = n(387904),
                s = n(535921);

            function a(t, e, n, c) {
                return (0, i.T)(n) && (c = n, n = void 0), c ? a(t, e, n).pipe((0, s.T)((function(t) {
                    return (0, o.c)(t) ? c.apply(void 0, t) : c(t)
                }))) : new r.c((function(r) {
                    u(t, e, (function(t) {
                        arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
                    }), r, n)
                }))
            }

            function u(t, e, n, r, o) {
                var i;
                if (function(t) {
                        return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                    }(t)) {
                    var s = t;
                    t.addEventListener(e, n, o), i = function() {
                        return s.removeEventListener(e, n, o)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.on && "function" == typeof t.off
                    }(t)) {
                    var a = t;
                    t.on(e, n), i = function() {
                        return a.off(e, n)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                    }(t)) {
                    var c = t;
                    t.addListener(e, n), i = function() {
                        return c.removeListener(e, n)
                    }
                } else {
                    if (!t || !t.length) throw new TypeError("Invalid event target");
                    for (var l = 0, f = t.length; l < f; l++) u(t[l], e, n, r, o)
                }
                r.add(i)
            }
        },
        599884: (t, e, n) => {
            "use strict";

            function r(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
            n.d(e, {
                T: () => r
            })
        },
        607597: (t, e, n) => {
            "use strict";
            n.d(e, {
                Im: () => s.Im,
                Jp: () => s.Jp,
                N1: () => s.N1,
                N6: () => s.N6,
                Qh: () => s.Qh,
                Tu: () => s.Tu,
                eW: () => s.eW,
                jA: () => s.jA,
                oF: () => s.oF,
                qg: () => u,
                tv: () => s.tv,
                xm: () => s.xm
            });
            var r = n(944339),
                o = n(810487),
                i = n(332386),
                s = n(15924);

            function a(t) {
                t.forEach((function(t) {
                    if (delete t.location, (0, s.Jp)(t) || (0, s.N6)(t))
                        for (var e in t.options) delete t.options[e].location, a(t.options[e].value);
                    else(0, s.oF)(t) && (0, s.N1)(t.style) || ((0, s.tv)(t) || (0, s.Qh)(t)) && (0, s.Tu)(t.style) ? delete t.style.location : (0, s.xm)(t) && a(t.children)
                }))
            }

            function u(t, e) {
                void 0 === e && (e = {}), e = (0, r.Cl)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, e);
                var n = new i.i(t, e).parse();
                if (n.err) {
                    var s = SyntaxError(o.F[n.err.kind]);
                    throw s.location = n.err.location, s.originalMessage = n.err.message, s
                }
                return (null == e ? void 0 : e.captureLocation) || a(n.val), n.val
            }
            i.i
        },
        609971: (t, e, n) => {
            "use strict";
            n.d(e, {
                F: () => i
            });
            var r = n(998083),
                o = n(335679);

            function i(t, e) {
                return function(n) {
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.compare = t, this.keySelector = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.compare, this.keySelector))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.keySelector = r, o.hasKey = !1, "function" == typeof n && (o.compare = n), o
                    }
                    return r.C6(e, t), e.prototype.compare = function(t, e) {
                        return t === e
                    }, e.prototype._next = function(t) {
                        var e;
                        try {
                            var n = this.keySelector;
                            e = n ? n(t) : t
                        } catch (o) {
                            return this.destination.error(o)
                        }
                        var r = !1;
                        if (this.hasKey) try {
                            r = (0, this.compare)(this.key, e)
                        } catch (o) {
                            return this.destination.error(o)
                        } else this.hasKey = !0;
                        r || (this.key = e, this.destination.next(t))
                    }, e
                }(o.v)
        },
        612151: (t, e, n) => {
            "use strict";
            n.d(e, {
                B1: () => R,
                C0: () => v,
                DD: () => i,
                Dz: () => E,
                Jx: () => l,
                LI: () => u,
                PG: () => m,
                RI: () => c,
                Sg: () => y,
                T9: () => a,
                TV: () => g,
                WJ: () => _,
                _3: () => d,
                aD: () => T,
                bV: () => x,
                jk: () => s,
                lP: () => A,
                nI: () => O,
                qE: () => p,
                r_: () => r,
                sq: () => b,
                w7: () => w
            });
            const r = ["top", "right", "bottom", "left"],
                o = ["start", "end"],
                i = r.reduce(((t, e) => t.concat(e, e + "-" + o[0], e + "-" + o[1])), []),
                s = Math.min,
                a = Math.max,
                u = Math.round,
                c = Math.floor,
                l = t => ({
                    x: t,
                    y: t
                }),
                f = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                h = {
                    start: "end",
                    end: "start"
                };

            function p(t, e, n) {
                return a(t, s(e, n))
            }

            function d(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function v(t) {
                return t.split("-")[0]
            }

            function y(t) {
                return t.split("-")[1]
            }

            function m(t) {
                return "x" === t ? "y" : "x"
            }

            function b(t) {
                return "y" === t ? "height" : "width"
            }

            function g(t) {
                return ["top", "bottom"].includes(v(t)) ? "y" : "x"
            }

            function E(t) {
                return m(g(t))
            }

            function w(t, e, n) {
                void 0 === n && (n = !1);
                const r = y(t),
                    o = E(t),
                    i = b(o);
                let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return e.reference[i] > e.floating[i] && (s = x(s)), [s, x(s)]
            }

            function _(t) {
                const e = x(t);
                return [T(t), e, T(e)]
            }

            function T(t) {
                return t.replace(/start|end/g, (t => h[t]))
            }

            function A(t, e, n, r) {
                const o = y(t);
                let i = function(t, e, n) {
                    const r = ["left", "right"],
                        o = ["right", "left"],
                        i = ["top", "bottom"],
                        s = ["bottom", "top"];
                    switch (t) {
                        case "top":
                        case "bottom":
                            return n ? e ? o : r : e ? r : o;
                        case "left":
                        case "right":
                            return e ? i : s;
                        default:
                            return []
                    }
                }(v(t), "start" === n, r);
                return o && (i = i.map((t => t + "-" + o)), e && (i = i.concat(i.map(T)))), i
            }

            function x(t) {
                return t.replace(/left|right|bottom|top/g, (t => f[t]))
            }

            function O(t) {
                return "number" != typeof t ? function(t) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...t
                    }
                }(t) : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function R(t) {
                const {
                    x: e,
                    y: n,
                    width: r,
                    height: o
                } = t;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: e,
                    right: e + r,
                    bottom: n + o,
                    x: e,
                    y: n
                }
            }
        },
        621680: (t, e, n) => {
            "use strict";
            t.exports = n(447524)
        },
        623276: (t, e, n) => {
            "use strict";
            n.d(e, {
                D: () => r
            });
            var r = function() {
                return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
            }()
        },
        630084: (t, e, n) => {
            "use strict";
            n.d(e, {
                Y: () => o
            });
            var r = n(998083),
                o = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return r.C6(e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(n(997752).y)
        },
        664191: (t, e, n) => {
            "use strict";
            n.d(e, {
                i: () => h
            });
            var r = n(750150),
                o = n(37186),
                i = n(771909),
                s = n(190418),
                a = n(1408),
                u = n(72231),
                c = n(47911),
                l = n(211794),
                f = n(977305),
                h = function(t) {
                    if (t && "function" == typeof t[f.s]) return (0, s.X)(t);
                    if ((0, a.X)(t)) return (0, r.v)(t);
                    if ((0, u.y)(t)) return (0, o.F)(t);
                    if (t && "function" == typeof t[l.lJ]) return (0, i.S)(t);
                    var e = (0, c.G)(t) ? "an invalid object" : "'" + t + "'";
                    throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
                }
        },
        675421: (t, e, n) => {
            "use strict";

            function r(t, e) {
                return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
            }
            n.d(e, {
                A: () => r
            })
        },
        680811: (t, e, n) => {
            "use strict";
            n.d(e, {
                e: () => o
            });
            var r = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function o(t) {
                var e = {};
                return t.replace(r, (function(t) {
                    var n = t.length;
                    switch (t[0]) {
                        case "G":
                            e.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                            break;
                        case "y":
                            e.year = 2 === n ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            e.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            e.day = ["numeric", "2-digit"][n - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            e.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                            break;
                        case "e":
                            if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][n - 4];
                            break;
                        case "c":
                            if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][n - 4];
                            break;
                        case "a":
                            e.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][n - 1];
                            break;
                        case "H":
                            e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][n - 1];
                            break;
                        case "K":
                            e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][n - 1];
                            break;
                        case "k":
                            e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][n - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            e.minute = ["numeric", "2-digit"][n - 1];
                            break;
                        case "s":
                            e.second = ["numeric", "2-digit"][n - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            e.timeZoneName = n < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), e
            }
        },
        682560: (t, e, n) => {
            "use strict";
            n.d(e, {
                _: () => r
            });
            var r = function() {
                function t(e, n) {
                    void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
                }
                return t.prototype.schedule = function(t, e, n) {
                    return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
                }, t.now = function() {
                    return Date.now()
                }, t
            }()
        },
        688125: (t, e, n) => {
            "use strict";
            n.d(e, {
                r: () => r
            });
            var r = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
        },
        689420: function(t, e, n) {
            var r;
            ! function(o, i, s) {
                var a, u = 256,
                    c = s.pow(u, 6),
                    l = s.pow(2, 52),
                    f = 2 * l,
                    h = u - 1;

                function p(t, e, n) {
                    var r = [],
                        h = m(y((e = 1 == e ? {
                            entropy: !0
                        } : e || {}).entropy ? [t, b(i)] : null == t ? function() {
                            try {
                                var t;
                                return a && (t = a.randomBytes) ? t = t(u) : (t = new Uint8Array(u), (o.crypto || o.msCrypto).getRandomValues(t)), b(t)
                            } catch (r) {
                                var e = o.navigator,
                                    n = e && e.plugins;
                                return [+new Date, o, n, o.screen, b(i)]
                            }
                        }() : t, 3), r),
                        p = new d(r),
                        g = function() {
                            for (var t = p.g(6), e = c, n = 0; t < l;) t = (t + n) * u, e *= u, n = p.g(1);
                            for (; t >= f;) t /= 2, e /= 2, n >>>= 1;
                            return (t + n) / e
                        };
                    return g.int32 = function() {
                        return 0 | p.g(4)
                    }, g.quick = function() {
                        return p.g(4) / 4294967296
                    }, g.double = g, m(b(p.S), i), (e.pass || n || function(t, e, n, r) {
                        return r && (r.S && v(r, p), t.state = function() {
                            return v(p, {})
                        }), n ? (s.random = t, e) : t
                    })(g, h, "global" in e ? e.global : this == s, e.state)
                }

                function d(t) {
                    var e, n = t.length,
                        r = this,
                        o = 0,
                        i = r.i = r.j = 0,
                        s = r.S = [];
                    for (n || (t = [n++]); o < u;) s[o] = o++;
                    for (o = 0; o < u; o++) s[o] = s[i = h & i + t[o % n] + (e = s[o])], s[i] = e;
                    (r.g = function(t) {
                        for (var e, n = 0, o = r.i, i = r.j, s = r.S; t--;) e = s[o = h & o + 1], n = n * u + s[h & (s[o] = s[i = h & i + e]) + (s[i] = e)];
                        return r.i = o, r.j = i, n
                    })(u)
                }

                function v(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }

                function y(t, e) {
                    var n, r = [],
                        o = typeof t;
                    if (e && "object" == o)
                        for (n in t) try {
                            r.push(y(t[n], e - 1))
                        } catch (i) {}
                    return r.length ? r : "string" == o ? t : t + "\0"
                }

                function m(t, e) {
                    for (var n, r = t + "", o = 0; o < r.length;) e[h & o] = h & (n ^= 19 * e[h & o]) + r.charCodeAt(o++);
                    return b(e)
                }

                function b(t) {
                    return String.fromCharCode.apply(0, t)
                }
                if (m(s.random(), i), t.exports) {
                    t.exports = p;
                    try {
                        a = n(499401)
                    } catch (g) {}
                } else void 0 === (r = function() {
                    return p
                }.call(e, n, e, t)) || (t.exports = r)
            }("undefined" != typeof self ? self : this, [], Math)
        },
        710821: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            var r = n(982828);

            function o(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, (0, r.A)(t, e)
            }
        },
        725e3: (t, e, n) => {
            "use strict";
            n.d(e, {
                f: () => l
            });
            var r = n(998083),
                o = n(450117),
                i = n(226260),
                s = n(335679),
                a = n(997752),
                u = n(111283),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return r.C6(e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new a.y).add(this.source.subscribe(new f(this.getSubject(), this))), t.closed && (this._connection = null, t = a.y.EMPTY)), t
                    }, e.prototype.refCount = function() {
                        return (0, u.B)()(this)
                    }, e
                }(i.c),
                l = function() {
                    var t = c.prototype;
                    return {
                        operator: {
                            value: null
                        },
                        _refCount: {
                            value: 0,
                            writable: !0
                        },
                        _subject: {
                            value: null,
                            writable: !0
                        },
                        _connection: {
                            value: null,
                            writable: !0
                        },
                        _subscribe: {
                            value: t._subscribe
                        },
                        _isComplete: {
                            value: t._isComplete,
                            writable: !0
                        },
                        getSubject: {
                            value: t.getSubject
                        },
                        connect: {
                            value: t.connect
                        },
                        refCount: {
                            value: t.refCount
                        }
                    }
                }(),
                f = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return r.C6(e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(o.PJ);
            s.v
        },
        728543: (t, e, n) => {
            "use strict";
            n.d(e, {
                zR: () => m
            });
            var r = n(897010),
                o = n(512586),
                i = (n(500926), n(395528));

            function s(t) {
                return "/" === t.charAt(0) ? t : "/" + t
            }

            function a(t, e) {
                return function(t, e) {
                    return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t)
                }(t, e) ? t.substr(e.length) : t
            }

            function u(t) {
                return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
            }

            function c(t) {
                var e = t.pathname,
                    n = t.search,
                    r = t.hash,
                    o = e || "/";
                return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
            }

            function l(t, e, n, i) {
                var s;
                "string" == typeof t ? (s = function(t) {
                    var e = t || "/",
                        n = "",
                        r = "",
                        o = e.indexOf("#"); - 1 !== o && (r = e.substr(o), e = e.substr(0, o));
                    var i = e.indexOf("?");
                    return -1 !== i && (n = e.substr(i), e = e.substr(0, i)), {
                        pathname: e,
                        search: "?" === n ? "" : n,
                        hash: "#" === r ? "" : r
                    }
                }(t), s.state = e) : (void 0 === (s = (0, r.A)({}, t)).pathname && (s.pathname = ""), s.search ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search) : s.search = "", s.hash ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash) : s.hash = "", void 0 !== e && void 0 === s.state && (s.state = e));
                try {
                    s.pathname = decodeURI(s.pathname)
                } catch (a) {
                    throw a instanceof URIError ? new URIError('Pathname "' + s.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : a
                }
                return n && (s.key = n), i ? s.pathname ? "/" !== s.pathname.charAt(0) && (s.pathname = (0, o.A)(s.pathname, i.pathname)) : s.pathname = i.pathname : s.pathname || (s.pathname = "/"), s
            }

            function f() {
                var t = null;
                var e = [];
                return {
                    setPrompt: function(e) {
                        return t = e,
                            function() {
                                t === e && (t = null)
                            }
                    },
                    confirmTransitionTo: function(e, n, r, o) {
                        if (null != t) {
                            var i = "function" == typeof t ? t(e, n) : t;
                            "string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
                        } else o(!0)
                    },
                    appendListener: function(t) {
                        var n = !0;

                        function r() {
                            n && t.apply(void 0, arguments)
                        }
                        return e.push(r),
                            function() {
                                n = !1, e = e.filter((function(t) {
                                    return t !== r
                                }))
                            }
                    },
                    notifyListeners: function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.forEach((function(t) {
                            return t.apply(void 0, n)
                        }))
                    }
                }
            }
            var h = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function p(t, e) {
                e(window.confirm(t))
            }
            var d = "popstate",
                v = "hashchange";

            function y() {
                try {
                    return window.history.state || {}
                } catch (t) {
                    return {}
                }
            }

            function m(t) {
                void 0 === t && (t = {}), h || (0, i.A)(!1);
                var e, n = window.history,
                    o = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                    m = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                    b = t,
                    g = b.forceRefresh,
                    E = void 0 !== g && g,
                    w = b.getUserConfirmation,
                    _ = void 0 === w ? p : w,
                    T = b.keyLength,
                    A = void 0 === T ? 6 : T,
                    x = t.basename ? u(s(t.basename)) : "";

                function O(t) {
                    var e = t || {},
                        n = e.key,
                        r = e.state,
                        o = window.location,
                        i = o.pathname + o.search + o.hash;
                    return x && (i = a(i, x)), l(i, r, n)
                }

                function R() {
                    return Math.random().toString(36).substr(2, A)
                }
                var N = f();

                function S(t) {
                    (0, r.A)(H, t), H.length = n.length, N.notifyListeners(H.location, H.action)
                }

                function C(t) {
                    (function(t) {
                        void 0 === t.state && navigator.userAgent.indexOf("CriOS")
                    })(t) || j(O(t.state))
                }

                function P() {
                    j(O(y()))
                }
                var L = !1;

                function j(t) {
                    if (L) L = !1, S();
                    else {
                        N.confirmTransitionTo(t, "POP", _, (function(e) {
                            e ? S({
                                action: "POP",
                                location: t
                            }) : function(t) {
                                var e = H.location,
                                    n = k.indexOf(e.key); - 1 === n && (n = 0);
                                var r = k.indexOf(t.key); - 1 === r && (r = 0);
                                var o = n - r;
                                o && (L = !0, M(o))
                            }(t)
                        }))
                    }
                }
                var I = O(y()),
                    k = [I.key];

                function B(t) {
                    return x + c(t)
                }

                function M(t) {
                    n.go(t)
                }
                var D = 0;

                function F(t) {
                    1 === (D += t) && 1 === t ? (window.addEventListener(d, C), m && window.addEventListener(v, P)) : 0 === D && (window.removeEventListener(d, C), m && window.removeEventListener(v, P))
                }
                var U = !1;
                var H = {
                    length: n.length,
                    action: "POP",
                    location: I,
                    createHref: B,
                    push: function(t, e) {
                        var r = "PUSH",
                            i = l(t, e, R(), H.location);
                        N.confirmTransitionTo(i, r, _, (function(t) {
                            if (t) {
                                var e = B(i),
                                    s = i.key,
                                    a = i.state;
                                if (o)
                                    if (n.pushState({
                                            key: s,
                                            state: a
                                        }, null, e), E) window.location.href = e;
                                    else {
                                        var u = k.indexOf(H.location.key),
                                            c = k.slice(0, -1 === u ? 0 : u + 1);
                                        c.push(i.key), k = c, S({
                                            action: r,
                                            location: i
                                        })
                                    }
                                else window.location.href = e
                            }
                        }))
                    },
                    replace: function(t, e) {
                        var r = "REPLACE",
                            i = l(t, e, R(), H.location);
                        N.confirmTransitionTo(i, r, _, (function(t) {
                            if (t) {
                                var e = B(i),
                                    s = i.key,
                                    a = i.state;
                                if (o)
                                    if (n.replaceState({
                                            key: s,
                                            state: a
                                        }, null, e), E) window.location.replace(e);
                                    else {
                                        var u = k.indexOf(H.location.key); - 1 !== u && (k[u] = i.key), S({
                                            action: r,
                                            location: i
                                        })
                                    }
                                else window.location.replace(e)
                            }
                        }))
                    },
                    go: M,
                    goBack: function() {
                        M(-1)
                    },
                    goForward: function() {
                        M(1)
                    },
                    block: function(t) {
                        void 0 === t && (t = !1);
                        var e = N.setPrompt(t);
                        return U || (F(1), U = !0),
                            function() {
                                return U && (U = !1, F(-1)), e()
                            }
                    },
                    listen: function(t) {
                        var e = N.appendListener(t);
                        return F(1),
                            function() {
                                F(-1), e()
                            }
                    }
                };
                return H
            }
        },
        750150: (t, e, n) => {
            "use strict";
            n.d(e, {
                v: () => r
            });
            var r = function(t) {
                return function(e) {
                    for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                    e.complete()
                }
            }
        },
        754838: t => {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        771909: (t, e, n) => {
            "use strict";
            n.d(e, {
                S: () => o
            });
            var r = n(211794),
                o = function(t) {
                    return function(e) {
                        for (var n = t[r.lJ]();;) {
                            var o = void 0;
                            try {
                                o = n.next()
                            } catch (i) {
                                return e.error(i), e
                            }
                            if (o.done) {
                                e.complete();
                                break
                            }
                            if (e.next(o.value), e.closed) break
                        }
                        return "function" == typeof n.return && e.add((function() {
                            n.return && n.return()
                        })), e
                    }
                }
        },
        776266: (t, e, n) => {
            "use strict";

            function r(t) {
                var e, n = t.Symbol;
                if ("function" == typeof n)
                    if (n.observable) e = n.observable;
                    else {
                        e = "function" == typeof n.for ? n.for("https://github.com/benlesh/symbol-observable") : n("https://github.com/benlesh/symbol-observable");
                        try {
                            n.observable = e
                        } catch (r) {}
                    }
                else e = "@@observable";
                return e
            }
            n.d(e, {
                A: () => r
            })
        },
        787475: (t, e, n) => {
            "use strict";

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            n.d(e, {
                A: () => r
            })
        },
        799214: (t, e, n) => {
            "use strict";
            n.d(e, {
                q: () => i
            });
            var r = n(998083),
                o = n(682560),
                i = function(t) {
                    function e(n, r) {
                        void 0 === r && (r = o._.now);
                        var i = t.call(this, n, (function() {
                            return e.delegate && e.delegate !== i ? e.delegate.now() : r()
                        })) || this;
                        return i.actions = [], i.active = !1, i.scheduled = void 0, i
                    }
                    return r.C6(e, t), e.prototype.schedule = function(n, r, o) {
                        return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, o) : t.prototype.schedule.call(this, n, r, o)
                    }, e.prototype.flush = function(t) {
                        var e = this.actions;
                        if (this.active) e.push(t);
                        else {
                            var n;
                            this.active = !0;
                            do {
                                if (n = t.execute(t.state, t.delay)) break
                            } while (t = e.shift());
                            if (this.active = !1, n) {
                                for (; t = e.shift();) t.unsubscribe();
                                throw n
                            }
                        }
                    }, e
                }(o._)
        },
        810487: (t, e, n) => {
            "use strict";
            var r;
            n.d(e, {
                    F: () => r
                }),
                function(t) {
                    t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
                }(r || (r = {}))
        },
        818334: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            var r = function() {
                function t(t) {
                    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                        return e + 1 + ") " + t.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        821046: (t, e, n) => {
            "use strict";
            n.d(e, {
                BN: () => O,
                ER: () => L,
                Ej: () => N,
                RK: () => x,
                UE: () => C,
                UU: () => R,
                __: () => T,
                cY: () => A,
                iD: () => w,
                jD: () => S,
                ll: () => _,
                mG: () => P,
                rD: () => j
            });
            var r = n(612151),
                o = n(374560),
                i = n(276089);

            function s(t) {
                const e = (0, i.L9)(t);
                let n = parseFloat(e.width) || 0,
                    o = parseFloat(e.height) || 0;
                const s = (0, i.sb)(t),
                    a = s ? t.offsetWidth : n,
                    u = s ? t.offsetHeight : o,
                    c = (0, r.LI)(n) !== a || (0, r.LI)(o) !== u;
                return c && (n = a, o = u), {
                    width: n,
                    height: o,
                    $: c
                }
            }

            function a(t) {
                return (0, i.vq)(t) ? t : t.contextElement
            }

            function u(t) {
                const e = a(t);
                if (!(0, i.sb)(e)) return (0, r.Jx)(1);
                const n = e.getBoundingClientRect(),
                    {
                        width: o,
                        height: u,
                        $: c
                    } = s(e);
                let l = (c ? (0, r.LI)(n.width) : n.width) / o,
                    f = (c ? (0, r.LI)(n.height) : n.height) / u;
                return l && Number.isFinite(l) || (l = 1), f && Number.isFinite(f) || (f = 1), {
                    x: l,
                    y: f
                }
            }
            const c = (0, r.Jx)(0);

            function l(t) {
                const e = (0, i.zk)(t);
                return (0, i.Tc)() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : c
            }

            function f(t, e, n, o) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const s = t.getBoundingClientRect(),
                    c = a(t);
                let f = (0, r.Jx)(1);
                e && (o ? (0, i.vq)(o) && (f = u(o)) : f = u(t));
                const h = function(t, e, n) {
                    return void 0 === e && (e = !1), !(!n || e && n !== (0, i.zk)(t)) && e
                }(c, n, o) ? l(c) : (0, r.Jx)(0);
                let p = (s.left + h.x) / f.x,
                    d = (s.top + h.y) / f.y,
                    v = s.width / f.x,
                    y = s.height / f.y;
                if (c) {
                    const t = (0, i.zk)(c),
                        e = o && (0, i.vq)(o) ? (0, i.zk)(o) : o;
                    let n = t,
                        r = n.frameElement;
                    for (; r && o && e !== n;) {
                        const t = u(r),
                            e = r.getBoundingClientRect(),
                            o = (0, i.L9)(r),
                            s = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                            a = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
                        p *= t.x, d *= t.y, v *= t.x, y *= t.y, p += s, d += a, n = (0, i.zk)(r), r = n.frameElement
                    }
                }
                return (0, r.B1)({
                    width: v,
                    height: y,
                    x: p,
                    y: d
                })
            }
            const h = [":popover-open", ":modal"];

            function p(t) {
                return h.some((e => {
                    try {
                        return t.matches(e)
                    } catch (n) {
                        return !1
                    }
                }))
            }

            function d(t) {
                return f((0, i.ep)(t)).left + (0, i.CP)(t).scrollLeft
            }

            function v(t, e, n) {
                let o;
                if ("viewport" === e) o = function(t, e) {
                    const n = (0, i.zk)(t),
                        r = (0, i.ep)(t),
                        o = n.visualViewport;
                    let s = r.clientWidth,
                        a = r.clientHeight,
                        u = 0,
                        c = 0;
                    if (o) {
                        s = o.width, a = o.height;
                        const t = (0, i.Tc)();
                        (!t || t && "fixed" === e) && (u = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: s,
                        height: a,
                        x: u,
                        y: c
                    }
                }(t, n);
                else if ("document" === e) o = function(t) {
                    const e = (0, i.ep)(t),
                        n = (0, i.CP)(t),
                        o = t.ownerDocument.body,
                        s = (0, r.T9)(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
                        a = (0, r.T9)(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
                    let u = -n.scrollLeft + d(t);
                    const c = -n.scrollTop;
                    return "rtl" === (0, i.L9)(o).direction && (u += (0, r.T9)(e.clientWidth, o.clientWidth) - s), {
                        width: s,
                        height: a,
                        x: u,
                        y: c
                    }
                }((0, i.ep)(t));
                else if ((0, i.vq)(e)) o = function(t, e) {
                    const n = f(t, !0, "fixed" === e),
                        o = n.top + t.clientTop,
                        s = n.left + t.clientLeft,
                        a = (0, i.sb)(t) ? u(t) : (0, r.Jx)(1);
                    return {
                        width: t.clientWidth * a.x,
                        height: t.clientHeight * a.y,
                        x: s * a.x,
                        y: o * a.y
                    }
                }(e, n);
                else {
                    const n = l(t);
                    o = { ...e,
                        x: e.x - n.x,
                        y: e.y - n.y
                    }
                }
                return (0, r.B1)(o)
            }

            function y(t, e) {
                const n = (0, i.$4)(t);
                return !(n === e || !(0, i.vq)(n) || (0, i.eu)(n)) && ("fixed" === (0, i.L9)(n).position || y(n, e))
            }

            function m(t, e, n) {
                const o = (0, i.sb)(e),
                    s = (0, i.ep)(e),
                    a = "fixed" === n,
                    u = f(t, !0, a, e);
                let c = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const l = (0, r.Jx)(0);
                if (o || !o && !a)
                    if (("body" !== (0, i.mq)(e) || (0, i.ZU)(s)) && (c = (0, i.CP)(e)), o) {
                        const t = f(e, !0, a, e);
                        l.x = t.x + e.clientLeft, l.y = t.y + e.clientTop
                    } else s && (l.x = d(s));
                return {
                    x: u.left + c.scrollLeft - l.x,
                    y: u.top + c.scrollTop - l.y,
                    width: u.width,
                    height: u.height
                }
            }

            function b(t) {
                return "static" === (0, i.L9)(t).position
            }

            function g(t, e) {
                return (0, i.sb)(t) && "fixed" !== (0, i.L9)(t).position ? e ? e(t) : t.offsetParent : null
            }

            function E(t, e) {
                const n = (0, i.zk)(t);
                if (p(t)) return n;
                if (!(0, i.sb)(t)) {
                    let e = (0, i.$4)(t);
                    for (; e && !(0, i.eu)(e);) {
                        if ((0, i.vq)(e) && !b(e)) return e;
                        e = (0, i.$4)(e)
                    }
                    return n
                }
                let r = g(t, e);
                for (; r && (0, i.Lv)(r) && b(r);) r = g(r, e);
                return r && (0, i.eu)(r) && b(r) && !(0, i.sQ)(r) ? n : r || (0, i.gJ)(t) || n
            }
            const w = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    let {
                        elements: e,
                        rect: n,
                        offsetParent: o,
                        strategy: s
                    } = t;
                    const a = "fixed" === s,
                        c = (0, i.ep)(o),
                        l = !!e && p(e.floating);
                    if (o === c || l && a) return n;
                    let h = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        d = (0, r.Jx)(1);
                    const v = (0, r.Jx)(0),
                        y = (0, i.sb)(o);
                    if ((y || !y && !a) && (("body" !== (0, i.mq)(o) || (0, i.ZU)(c)) && (h = (0, i.CP)(o)), (0, i.sb)(o))) {
                        const t = f(o);
                        d = u(o), v.x = t.x + o.clientLeft, v.y = t.y + o.clientTop
                    }
                    return {
                        width: n.width * d.x,
                        height: n.height * d.y,
                        x: n.x * d.x - h.scrollLeft * d.x + v.x,
                        y: n.y * d.y - h.scrollTop * d.y + v.y
                    }
                },
                getDocumentElement: i.ep,
                getClippingRect: function(t) {
                    let {
                        element: e,
                        boundary: n,
                        rootBoundary: o,
                        strategy: s
                    } = t;
                    const a = [..."clippingAncestors" === n ? p(e) ? [] : function(t, e) {
                            const n = e.get(t);
                            if (n) return n;
                            let r = (0, i.v9)(t, [], !1).filter((t => (0, i.vq)(t) && "body" !== (0, i.mq)(t))),
                                o = null;
                            const s = "fixed" === (0, i.L9)(t).position;
                            let a = s ? (0, i.$4)(t) : t;
                            for (;
                                (0, i.vq)(a) && !(0, i.eu)(a);) {
                                const e = (0, i.L9)(a),
                                    n = (0, i.sQ)(a);
                                n || "fixed" !== e.position || (o = null), (s ? !n && !o : !n && "static" === e.position && o && ["absolute", "fixed"].includes(o.position) || (0, i.ZU)(a) && !n && y(t, a)) ? r = r.filter((t => t !== a)) : o = e, a = (0, i.$4)(a)
                            }
                            return e.set(t, r), r
                        }(e, this._c) : [].concat(n), o],
                        u = a[0],
                        c = a.reduce(((t, n) => {
                            const o = v(e, n, s);
                            return t.top = (0, r.T9)(o.top, t.top), t.right = (0, r.jk)(o.right, t.right), t.bottom = (0, r.jk)(o.bottom, t.bottom), t.left = (0, r.T9)(o.left, t.left), t
                        }), v(e, u, s));
                    return {
                        width: c.right - c.left,
                        height: c.bottom - c.top,
                        x: c.left,
                        y: c.top
                    }
                },
                getOffsetParent: E,
                getElementRects: async function(t) {
                    const e = this.getOffsetParent || E,
                        n = this.getDimensions,
                        r = await n(t.floating);
                    return {
                        reference: m(t.reference, await e(t.floating), t.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                getClientRects: function(t) {
                    return Array.from(t.getClientRects())
                },
                getDimensions: function(t) {
                    const {
                        width: e,
                        height: n
                    } = s(t);
                    return {
                        width: e,
                        height: n
                    }
                },
                getScale: u,
                isElement: i.vq,
                isRTL: function(t) {
                    return "rtl" === (0, i.L9)(t).direction
                }
            };

            function _(t, e, n, o) {
                void 0 === o && (o = {});
                const {
                    ancestorScroll: s = !0,
                    ancestorResize: u = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: l = "function" == typeof IntersectionObserver,
                    animationFrame: h = !1
                } = o, p = a(t), d = s || u ? [...p ? (0, i.v9)(p) : [], ...(0, i.v9)(e)] : [];
                d.forEach((t => {
                    s && t.addEventListener("scroll", n, {
                        passive: !0
                    }), u && t.addEventListener("resize", n)
                }));
                const v = p && l ? function(t, e) {
                    let n, o = null;
                    const s = (0, i.ep)(t);

                    function a() {
                        var t;
                        clearTimeout(n), null == (t = o) || t.disconnect(), o = null
                    }
                    return function i(u, c) {
                        void 0 === u && (u = !1), void 0 === c && (c = 1), a();
                        const {
                            left: l,
                            top: f,
                            width: h,
                            height: p
                        } = t.getBoundingClientRect();
                        if (u || e(), !h || !p) return;
                        const d = {
                            rootMargin: -(0, r.RI)(f) + "px " + -(0, r.RI)(s.clientWidth - (l + h)) + "px " + -(0, r.RI)(s.clientHeight - (f + p)) + "px " + -(0, r.RI)(l) + "px",
                            threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1
                        };
                        let v = !0;

                        function y(t) {
                            const e = t[0].intersectionRatio;
                            if (e !== c) {
                                if (!v) return i();
                                e ? i(!1, e) : n = setTimeout((() => {
                                    i(!1, 1e-7)
                                }), 1e3)
                            }
                            v = !1
                        }
                        try {
                            o = new IntersectionObserver(y, { ...d,
                                root: s.ownerDocument
                            })
                        } catch (m) {
                            o = new IntersectionObserver(y, d)
                        }
                        o.observe(t)
                    }(!0), a
                }(p, n) : null;
                let y, m = -1,
                    b = null;
                c && (b = new ResizeObserver((t => {
                    let [r] = t;
                    r && r.target === p && b && (b.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame((() => {
                        var t;
                        null == (t = b) || t.observe(e)
                    }))), n()
                })), p && !h && b.observe(p), b.observe(e));
                let g = h ? f(t) : null;
                return h && function e() {
                    const r = f(t);
                    !g || r.x === g.x && r.y === g.y && r.width === g.width && r.height === g.height || n();
                    g = r, y = requestAnimationFrame(e)
                }(), n(), () => {
                    var t;
                    d.forEach((t => {
                        s && t.removeEventListener("scroll", n), u && t.removeEventListener("resize", n)
                    })), null == v || v(), null == (t = b) || t.disconnect(), b = null, h && cancelAnimationFrame(y)
                }
            }
            const T = o.__,
                A = o.cY,
                x = o.RK,
                O = o.BN,
                R = o.UU,
                N = o.Ej,
                S = o.jD,
                C = o.UE,
                P = o.mG,
                L = o.ER,
                j = (t, e, n) => {
                    const r = new Map,
                        i = {
                            platform: w,
                            ...n
                        },
                        s = { ...i.platform,
                            _c: r
                        };
                    return (0, o.rD)(t, e, { ...i,
                        platform: s
                    })
                }
        },
        833299: (t, e, n) => {
            "use strict";
            n.d(e, {
                Ay: () => y,
                _K: () => h,
                kp: () => l,
                ns: () => f,
                qD: () => c,
                ze: () => p
            });
            var r = n(165669),
                o = n(710821),
                i = n(845212),
                s = n(950873),
                a = n(964130),
                u = n(158385),
                c = "unmounted",
                l = "exited",
                f = "entering",
                h = "entered",
                p = "exiting",
                d = function(t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var o, i = n && !n.isMounting ? e.enter : e.appear;
                        return r.appearStatus = null, e.in ? i ? (o = l, r.appearStatus = f) : o = h : o = e.unmountOnExit || e.mountOnEnter ? c : l, r.state = {
                            status: o
                        }, r.nextCallback = null, r
                    }(0, o.A)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === c ? {
                            status: l
                        } : null
                    };
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        if (t !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== f && n !== h && (e = f) : n !== f && n !== h || (e = p)
                        }
                        this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n, r = this.props.timeout;
                        return t = e = n = r, null != r && "number" != typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), {
                            exit: t,
                            enter: e,
                            appear: n
                        }
                    }, n.updateStatus = function(t, e) {
                        void 0 === t && (t = !1), null !== e ? (this.cancelNextCallback(), e === f ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && this.state.status === l && this.setState({
                            status: c
                        })
                    }, n.performEnter = function(t) {
                        var e = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : t,
                            o = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                            i = o[0],
                            u = o[1],
                            c = this.getTimeouts(),
                            l = r ? c.appear : c.enter;
                        !t && !n || a.A.disabled ? this.safeSetState({
                            status: h
                        }, (function() {
                            e.props.onEntered(i)
                        })) : (this.props.onEnter(i, u), this.safeSetState({
                            status: f
                        }, (function() {
                            e.props.onEntering(i, u), e.onTransitionEnd(l, (function() {
                                e.safeSetState({
                                    status: h
                                }, (function() {
                                    e.props.onEntered(i, u)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var t = this,
                            e = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                        e && !a.A.disabled ? (this.props.onExit(r), this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onExiting(r), t.onTransitionEnd(n.exit, (function() {
                                t.safeSetState({
                                    status: l
                                }, (function() {
                                    t.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: l
                        }, (function() {
                            t.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(t) {
                        var e = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, e.nextCallback = null, t(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e) {
                        this.setNextCallback(e);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                            r = null == t && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    i = o[0],
                                    a = o[1];
                                this.props.addEndListener(i, a)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === c) return null;
                        var e = this.props,
                            n = e.children,
                            o = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, (0, r.A)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return i.createElement(u.A.Provider, {
                            value: null
                        }, "function" == typeof n ? n(t, o) : i.cloneElement(i.Children.only(n), o))
                    }, e
                }(i.Component);

            function v() {}
            d.contextType = u.A, d.propTypes = {}, d.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: v,
                onEntering: v,
                onEntered: v,
                onExit: v,
                onExiting: v,
                onExited: v
            }, d.UNMOUNTED = c, d.EXITED = l, d.ENTERING = f, d.ENTERED = h, d.EXITING = p;
            const y = d
        },
        853469: (t, e, n) => {
            "use strict";
            n.d(e, {
                TT: () => r,
                hN: () => a
            });
            var r, o = n(607597),
                i = n(873066);

            function s(t) {
                return "function" == typeof t
            }

            function a(t, e, n, u, c, l, f) {
                if (1 === t.length && (0, o.eW)(t[0])) return [{
                    type: r.literal,
                    value: t[0].value
                }];
                for (var h = [], p = 0, d = t; p < d.length; p++) {
                    var v = d[p];
                    if ((0, o.eW)(v)) h.push({
                        type: r.literal,
                        value: v.value
                    });
                    else if ((0, o.jA)(v)) "number" == typeof l && h.push({
                        type: r.literal,
                        value: n.getNumberFormat(e).format(l)
                    });
                    else {
                        var y = v.value;
                        if (!c || !(y in c)) throw new i.Ei(y, f);
                        var m = c[y];
                        if ((0, o.Im)(v)) m && "string" != typeof m && "number" != typeof m || (m = "string" == typeof m || "number" == typeof m ? String(m) : ""), h.push({
                            type: "string" == typeof m ? r.literal : r.object,
                            value: m
                        });
                        else if ((0, o.tv)(v)) {
                            var b = "string" == typeof v.style ? u.date[v.style] : (0, o.Tu)(v.style) ? v.style.parsedOptions : void 0;
                            h.push({
                                type: r.literal,
                                value: n.getDateTimeFormat(e, b).format(m)
                            })
                        } else if ((0, o.Qh)(v)) {
                            b = "string" == typeof v.style ? u.time[v.style] : (0, o.Tu)(v.style) ? v.style.parsedOptions : u.time.medium;
                            h.push({
                                type: r.literal,
                                value: n.getDateTimeFormat(e, b).format(m)
                            })
                        } else if ((0, o.oF)(v)) {
                            (b = "string" == typeof v.style ? u.number[v.style] : (0, o.N1)(v.style) ? v.style.parsedOptions : void 0) && b.scale && (m *= b.scale || 1), h.push({
                                type: r.literal,
                                value: n.getNumberFormat(e, b).format(m)
                            })
                        } else {
                            if ((0, o.xm)(v)) {
                                var g = v.children,
                                    E = v.value,
                                    w = c[E];
                                if (!s(w)) throw new i.Zo(E, "function", f);
                                var _ = w(a(g, e, n, u, c, l).map((function(t) {
                                    return t.value
                                })));
                                Array.isArray(_) || (_ = [_]), h.push.apply(h, _.map((function(t) {
                                    return {
                                        type: "string" == typeof t ? r.literal : r.object,
                                        value: t
                                    }
                                })))
                            }
                            if ((0, o.Jp)(v)) {
                                if (!(T = v.options[m] || v.options.other)) throw new i.$x(v.value, m, Object.keys(v.options), f);
                                h.push.apply(h, a(T.value, e, n, u, c))
                            } else if ((0, o.N6)(v)) {
                                var T;
                                if (!(T = v.options["=".concat(m)])) {
                                    if (!Intl.PluralRules) throw new i.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', i.O4.MISSING_INTL_API, f);
                                    var A = n.getPluralRules(e, {
                                        type: v.pluralType
                                    }).select(m - (v.offset || 0));
                                    T = v.options[A] || v.options.other
                                }
                                if (!T) throw new i.$x(v.value, m, Object.keys(v.options), f);
                                h.push.apply(h, a(T.value, e, n, u, c, m - (v.offset || 0)))
                            } else;
                        }
                    }
                }
                return function(t) {
                    return t.length < 2 ? t : t.reduce((function(t, e) {
                        var n = t[t.length - 1];
                        return n && n.type === r.literal && e.type === r.literal ? n.value += e.value : t.push(e), t
                    }), [])
                }(h)
            }! function(t) {
                t[t.literal = 0] = "literal", t[t.object = 1] = "object"
            }(r || (r = {}))
        },
        873066: (t, e, n) => {
            "use strict";
            n.d(e, {
                $x: () => s,
                Ei: () => u,
                IF: () => i,
                O4: () => r,
                Zo: () => a
            });
            var r, o = n(944339);
            ! function(t) {
                t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API"
            }(r || (r = {}));
            var i = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.code = n, o.originalMessage = r, o
                    }
                    return (0, o.C6)(e, t), e.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, e
                }(Error),
                s = function(t) {
                    function e(e, n, o, i) {
                        return t.call(this, 'Invalid values for "'.concat(e, '": "').concat(n, '". Options are "').concat(Object.keys(o).join('", "'), '"'), r.INVALID_VALUE, i) || this
                    }
                    return (0, o.C6)(e, t), e
                }(i),
                a = function(t) {
                    function e(e, n, o) {
                        return t.call(this, 'Value for "'.concat(e, '" must be of type ').concat(n), r.INVALID_VALUE, o) || this
                    }
                    return (0, o.C6)(e, t), e
                }(i),
                u = function(t) {
                    function e(e, n) {
                        return t.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(n, '"'), r.MISSING_VALUE, n) || this
                    }
                    return (0, o.C6)(e, t), e
                }(i)
        },
        876461: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this,
                        n = function() {
                            var t = 4022871197,
                                e = function(e) {
                                    e = String(e);
                                    for (var n = 0; n < e.length; n++) {
                                        var r = .02519603282416938 * (t += e.charCodeAt(n));
                                        r -= t = r >>> 0, t = (r *= t) >>> 0, t += 4294967296 * (r -= t)
                                    }
                                    return 2.3283064365386963e-10 * (t >>> 0)
                                };
                            return e
                        }();
                    e.next = function() {
                        var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
                        return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
                    }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
                }

                function a(t, e) {
                    return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
                }

                function u(t, e) {
                    var n = new s(t),
                        r = e && e.state,
                        o = n.next;
                    return o.int32 = function() {
                        return 4294967296 * n.next() | 0
                    }, o.double = function() {
                        return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                    }, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.alea = u
            }(0, t = n.nmd(t), n.amdD)
        },
        878796: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => r
            });
            var r = function() {
                function t() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        882262: t => {
            ! function() {
                function e(t, e) {
                    var n, r, o, i, s, a, u, c;
                    for (n = 3 & t.length, r = t.length - n, o = e, s = 3432918353, a = 461845907, c = 0; c < r;) u = 255 & t.charCodeAt(c) | (255 & t.charCodeAt(++c)) << 8 | (255 & t.charCodeAt(++c)) << 16 | (255 & t.charCodeAt(++c)) << 24, ++c, o = 27492 + (65535 & (i = 5 * (65535 & (o = (o ^= u = (65535 & (u = (u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
                    switch (u = 0, n) {
                        case 3:
                            u ^= (255 & t.charCodeAt(c + 2)) << 16;
                        case 2:
                            u ^= (255 & t.charCodeAt(c + 1)) << 8;
                        case 1:
                            o ^= u = (65535 & (u = (u = (65535 & (u ^= 255 & t.charCodeAt(c))) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295
                    }
                    return o ^= t.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0
                }
                var n = e;
                n.v2 = function(t, e) {
                    for (var n, r = t.length, o = e ^ r, i = 0; r >= 4;) n = 1540483477 * (65535 & (n = 255 & t.charCodeAt(i) | (255 & t.charCodeAt(++i)) << 8 | (255 & t.charCodeAt(++i)) << 16 | (255 & t.charCodeAt(++i)) << 24)) + ((1540483477 * (n >>> 16) & 65535) << 16), o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16) ^ (n = 1540483477 * (65535 & (n ^= n >>> 24)) + ((1540483477 * (n >>> 16) & 65535) << 16)), r -= 4, ++i;
                    switch (r) {
                        case 3:
                            o ^= (255 & t.charCodeAt(i + 2)) << 16;
                        case 2:
                            o ^= (255 & t.charCodeAt(i + 1)) << 8;
                        case 1:
                            o = 1540483477 * (65535 & (o ^= 255 & t.charCodeAt(i))) + ((1540483477 * (o >>> 16) & 65535) << 16)
                    }
                    return o = 1540483477 * (65535 & (o ^= o >>> 13)) + ((1540483477 * (o >>> 16) & 65535) << 16), (o ^= o >>> 15) >>> 0
                }, n.v3 = e, t.exports = n
            }()
        },
        895590: (t, e, n) => {
            "use strict";
            n.d(e, {
                $t: () => a,
                $u: () => E,
                EW: () => b,
                F2: () => m,
                Go: () => p,
                O_: () => d,
                Pg: () => c,
                RS: () => o,
                WZ: () => _,
                YE: () => y,
                YF: () => u,
                cX: () => h,
                gR: () => i,
                jo: () => w,
                nr: () => l,
                tZ: () => v,
                uo: () => s
            });
            var r = n(276089);

            function o(t) {
                let e = t.activeElement;
                for (; null != (null == (n = e) || null == (n = n.shadowRoot) ? void 0 : n.activeElement);) {
                    var n;
                    e = e.shadowRoot.activeElement
                }
                return e
            }

            function i(t, e) {
                if (!t || !e) return !1;
                const n = null == e.getRootNode ? void 0 : e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && (0, r.Ng)(n)) {
                    let n = e;
                    for (; n;) {
                        if (t === n) return !0;
                        n = n.parentNode || n.host
                    }
                }
                return !1
            }

            function s() {
                const t = navigator.userAgentData;
                return null != t && t.platform ? t.platform : navigator.platform
            }

            function a() {
                const t = navigator.userAgentData;
                return t && Array.isArray(t.brands) ? t.brands.map((t => {
                    let {
                        brand: e,
                        version: n
                    } = t;
                    return e + "/" + n
                })).join(" ") : navigator.userAgent
            }

            function u(t) {
                return !(0 !== t.mozInputSource || !t.isTrusted) || (f() && t.pointerType ? "click" === t.type && 1 === t.buttons : 0 === t.detail && !t.pointerType)
            }

            function c(t) {
                return !a().includes("jsdom/") && (!f() && 0 === t.width && 0 === t.height || f() && 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && "mouse" === t.pointerType || t.width < 1 && t.height < 1 && 0 === t.pressure && 0 === t.detail && "touch" === t.pointerType)
            }

            function l() {
                return /apple/i.test(navigator.vendor)
            }

            function f() {
                const t = /android/i;
                return t.test(s()) || t.test(a())
            }

            function h() {
                return s().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
            }

            function p(t, e) {
                const n = ["mouse", "pen"];
                return e || n.push("", void 0), n.includes(t)
            }

            function d(t) {
                return "nativeEvent" in t
            }

            function v(t) {
                return t.matches("html,body")
            }

            function y(t) {
                return (null == t ? void 0 : t.ownerDocument) || document
            }

            function m(t, e) {
                if (null == e) return !1;
                if ("composedPath" in t) return t.composedPath().includes(e);
                const n = t;
                return null != n.target && e.contains(n.target)
            }

            function b(t) {
                return "composedPath" in t ? t.composedPath()[0] : t.target
            }
            const g = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

            function E(t) {
                return (0, r.sb)(t) && t.matches(g)
            }

            function w(t) {
                t.preventDefault(), t.stopPropagation()
            }

            function _(t) {
                return !!t && ("combobox" === t.getAttribute("role") && E(t))
            }
        },
        895693: (t, e, n) => {
            "use strict";
            n.d(e, {
                ZZ: () => a
            });
            var r = n(998083),
                o = n(535921),
                i = n(212943),
                s = n(914941);

            function a(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
                    return r.pipe(a((function(n, r) {
                        return (0, i.H)(t(n, r)).pipe((0, o.T)((function(t, o) {
                            return e(n, t, r, o)
                        })))
                    }), n))
                } : ("number" == typeof e && (n = e), function(e) {
                    return e.lift(new u(t, n))
                })
            }
            var u = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.project, this.concurrent))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.active++, this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = new s.zA(this),
                            n = this.destination;
                        n.add(e);
                        var r = (0, s.tS)(t, e);
                        r !== e && n.add(r)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyComplete = function() {
                        var t = this.buffer;
                        this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(s.gn)
        },
        897010: (t, e, n) => {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            n.d(e, {
                A: () => r
            })
        },
        897210: (t, e, n) => {
            "use strict";

            function r(t) {
                return t
            }
            n.d(e, {
                D: () => r
            })
        },
        911832: t => {
            "use strict";
            t.exports = t => !(!t || t.length < 3) && (255 === t[0] && 216 === t[1] && 255 === t[2])
        },
        914941: (t, e, n) => {
            "use strict";
            n.d(e, {
                gn: () => u,
                tS: () => c,
                zA: () => a
            });
            var r = n(998083),
                o = n(335679),
                i = n(226260),
                s = n(664191),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.parent = e, n
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(t)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(), this.unsubscribe()
                    }, e
                }(o.v),
                u = (o.v, function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r.C6(e, t), e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyError = function(t) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function() {
                        this.destination.complete()
                    }, e
                }(o.v));
            o.v;

            function c(t, e) {
                if (!e.closed) {
                    if (t instanceof i.c) return t.subscribe(e);
                    var n;
                    try {
                        n = (0, s.i)(t)(e)
                    } catch (r) {
                        e.error(r)
                    }
                    return n
                }
            }
        },
        919010: (t, e, n) => {
            "use strict";

            function r(t, e) {
                var n = e && e.cache ? e.cache : l,
                    r = e && e.serializer ? e.serializer : u;
                return (e && e.strategy ? e.strategy : a)(t, {
                    cache: n,
                    serializer: r
                })
            }

            function o(t, e, n, r) {
                var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
                    s = e.get(i);
                return void 0 === s && (s = t.call(this, r), e.set(i, s)), s
            }

            function i(t, e, n) {
                var r = Array.prototype.slice.call(arguments, 3),
                    o = n(r),
                    i = e.get(o);
                return void 0 === i && (i = t.apply(this, r), e.set(o, i)), i
            }

            function s(t, e, n, r, o) {
                return n.bind(e, t, r, o)
            }

            function a(t, e) {
                return s(t, this, 1 === t.length ? o : i, e.cache.create(), e.serializer)
            }
            n.d(e, {
                B: () => r,
                W: () => f
            });
            var u = function() {
                return JSON.stringify(arguments)
            };

            function c() {
                this.cache = Object.create(null)
            }
            c.prototype.get = function(t) {
                return this.cache[t]
            }, c.prototype.set = function(t, e) {
                this.cache[t] = e
            };
            var l = {
                    create: function() {
                        return new c
                    }
                },
                f = {
                    variadic: function(t, e) {
                        return s(t, this, i, e.cache.create(), e.serializer)
                    },
                    monadic: function(t, e) {
                        return s(t, this, o, e.cache.create(), e.serializer)
                    }
                }
        },
        922211: t => {
            var e;
            window, e = function() {
                return function(t) {
                    var e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var o = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var o in t) n.d(r, o, function(e) {
                                return t[e]
                            }.bind(null, o));
                        return r
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 85)
                }([function(t, e, n) {
                    "use strict";
                    n.d(e, "c", (function() {
                        return T
                    })), n.d(e, "b", (function() {
                        return x
                    })), n.d(e, "d", (function() {
                        return R
                    })), n.d(e, "a", (function() {
                        return A
                    }));
                    var r = n(1),
                        o = n.n(r),
                        i = n(10),
                        s = n.n(i),
                        a = n(17),
                        u = n.n(a),
                        c = n(2),
                        l = n(5),
                        f = n(3),
                        h = n(9),
                        p = n(6),
                        d = n(25),
                        v = n(11),
                        y = n(20);

                    function m(t) {
                        return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, m(t)
                    }

                    function b(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function g(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return E(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function E(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function w(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var _ = Object(v.a)("quill"),
                        T = new c.Registry;
                    c.ParentBlot.uiClass = "ql-ui";
                    var A = function() {
                        function t(e) {
                            var n = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.options = x(e, r), this.container = this.options.container, null == this.container) return _.error("Invalid Quill container", e);
                            this.options.debug && t.debug(this.options.debug);
                            var o = this.container.innerHTML.trim();
                            this.container.classList.add("ql-container"), this.container.innerHTML = "", d.a.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new f.a;
                            var i = this.options.registry.query(c.ScrollBlot.blotName);
                            this.scroll = new i(this.options.registry, this.root, {
                                emitter: this.emitter
                            }), this.editor = new l.a(this.scroll), this.selection = new p.b(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.init(), this.emitter.on(f.a.events.EDITOR_CHANGE, (function(t) {
                                t === f.a.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
                            })), this.emitter.on(f.a.events.SCROLL_UPDATE, (function(t, e, r) {
                                var o = n.selection.lastRange,
                                    i = g(n.selection.getRange(), 1)[0],
                                    s = o && i ? {
                                        oldRange: o,
                                        newRange: i
                                    } : void 0;
                                O.call(n, (function() {
                                    return n.editor.update(null, e, s)
                                }), t), null != r && Object.entries(r).forEach((function(t) {
                                    var e = g(t, 2),
                                        r = e[0],
                                        o = e[1];
                                    return n.selection.format(r, o)
                                }))
                            }));
                            var s = this.clipboard.convert({
                                html: "".concat(o, "<p><br></p>"),
                                text: "\n"
                            });
                            this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1
                        }
                        var e, n, r;
                        return e = t, n = [{
                            key: "addContainer",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if ("string" == typeof t) {
                                    var n = t;
                                    (t = document.createElement("div")).classList.add(n)
                                }
                                return this.container.insertBefore(t, e), t
                            }
                        }, {
                            key: "blur",
                            value: function() {
                                this.selection.setRange(null)
                            }
                        }, {
                            key: "deleteText",
                            value: function(t, e, n) {
                                var r = this,
                                    o = g(R(t, e, n), 4);
                                return t = o[0], e = o[1], n = o[3], O.call(this, (function() {
                                    return r.editor.deleteText(t, e)
                                }), n, t, -1 * e)
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this.enable(!1)
                            }
                        }, {
                            key: "editReadOnly",
                            value: function(t) {
                                this.allowReadOnlyEdits = !0;
                                var e = t();
                                return this.allowReadOnlyEdits = !1, e
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                            }
                        }, {
                            key: "focus",
                            value: function() {
                                var t = this.scrollingContainer.scrollTop;
                                this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.a.sources.API;
                                return O.call(this, (function() {
                                    var r = n.getSelection(!0),
                                        i = new o.a;
                                    if (null == r) return i;
                                    if (n.scroll.query(t, c.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, b({}, t, e));
                                    else {
                                        if (0 === r.length) return n.selection.format(t, e), i;
                                        i = n.editor.formatText(r.index, r.length, b({}, t, e))
                                    }
                                    return n.setSelection(r, f.a.sources.SILENT), i
                                }), r)
                            }
                        }, {
                            key: "formatLine",
                            value: function(t, e, n, r, o) {
                                var i, s = this,
                                    a = g(R(t, e, n, r, o), 4);
                                return t = a[0], e = a[1], i = a[2], o = a[3], O.call(this, (function() {
                                    return s.editor.formatLine(t, e, i)
                                }), o, t, 0)
                            }
                        }, {
                            key: "formatText",
                            value: function(t, e, n, r, o) {
                                var i, s = this,
                                    a = g(R(t, e, n, r, o), 4);
                                return t = a[0], e = a[1], i = a[2], o = a[3], O.call(this, (function() {
                                    return s.editor.formatText(t, e, i)
                                }), o, t, 0)
                            }
                        }, {
                            key: "getBounds",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                if (!(e = "number" == typeof t ? this.selection.getBounds(t, n) : this.selection.getBounds(t.index, t.length))) return null;
                                var r = this.container.getBoundingClientRect();
                                return {
                                    bottom: e.bottom - r.top,
                                    height: e.height,
                                    left: e.left - r.left,
                                    right: e.right - r.left,
                                    top: e.top - r.top,
                                    width: e.width
                                }
                            }
                        }, {
                            key: "getContents",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = g(R(t, e), 2);
                                return t = n[0], e = n[1], this.editor.getContents(t, e)
                            }
                        }, {
                            key: "getFormat",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                            }
                        }, {
                            key: "getIndex",
                            value: function(t) {
                                return t.offset(this.scroll)
                            }
                        }, {
                            key: "getLength",
                            value: function() {
                                return this.scroll.length()
                            }
                        }, {
                            key: "getLeaf",
                            value: function(t) {
                                return this.scroll.leaf(t)
                            }
                        }, {
                            key: "getLine",
                            value: function(t) {
                                return this.scroll.line(t)
                            }
                        }, {
                            key: "getLines",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                            }
                        }, {
                            key: "getModule",
                            value: function(t) {
                                return this.theme.modules[t]
                            }
                        }, {
                            key: "getSelection",
                            value: function() {
                                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
                            }
                        }, {
                            key: "getSemanticHTML",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = g(R(t, e), 2);
                                return t = n[0], e = n[1], this.editor.getHTML(t, e)
                            }
                        }, {
                            key: "getText",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = g(R(t, e), 2);
                                return t = n[0], e = n[1], this.editor.getText(t, e)
                            }
                        }, {
                            key: "hasFocus",
                            value: function() {
                                return this.selection.hasFocus()
                            }
                        }, {
                            key: "insertEmbed",
                            value: function(e, n, r) {
                                var o = this,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                                return O.call(this, (function() {
                                    return o.editor.insertEmbed(e, n, r)
                                }), i, e)
                            }
                        }, {
                            key: "insertText",
                            value: function(t, e, n, r, o) {
                                var i, s = this,
                                    a = g(R(t, 0, n, r, o), 4);
                                return t = a[0], i = a[2], o = a[3], O.call(this, (function() {
                                    return s.editor.insertText(t, e, i)
                                }), o, t, e.length)
                            }
                        }, {
                            key: "isEnabled",
                            value: function() {
                                return this.scroll.isEnabled()
                            }
                        }, {
                            key: "off",
                            value: function() {
                                var t;
                                return (t = this.emitter).off.apply(t, arguments)
                            }
                        }, {
                            key: "on",
                            value: function() {
                                var t;
                                return (t = this.emitter).on.apply(t, arguments)
                            }
                        }, {
                            key: "once",
                            value: function() {
                                var t;
                                return (t = this.emitter).once.apply(t, arguments)
                            }
                        }, {
                            key: "removeFormat",
                            value: function(t, e, n) {
                                var r = this,
                                    o = g(R(t, e, n), 4);
                                return t = o[0], e = o[1], n = o[3], O.call(this, (function() {
                                    return r.editor.removeFormat(t, e)
                                }), n, t)
                            }
                        }, {
                            key: "scrollIntoView",
                            value: function() {
                                this.selection.scrollIntoView(this.scrollingContainer)
                            }
                        }, {
                            key: "setContents",
                            value: function(t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a.sources.API;
                                return O.call(this, (function() {
                                    t = new o.a(t);
                                    var n = e.getLength(),
                                        r = e.editor.deleteText(0, n),
                                        i = e.editor.applyDelta(t),
                                        s = e.editor.deleteText(e.getLength() - 1, 1);
                                    return r.compose(i).compose(s)
                                }), n)
                            }
                        }, {
                            key: "setSelection",
                            value: function(e, n, r) {
                                if (null == e) this.selection.setRange(null, n || t.sources.API);
                                else {
                                    var o = g(R(e, n, r), 4);
                                    e = o[0], n = o[1], r = o[3], this.selection.setRange(new p.a(Math.max(0, e), n), r), r !== f.a.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                }
                            }
                        }, {
                            key: "setText",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a.sources.API,
                                    n = (new o.a).insert(t);
                                return this.setContents(n, e)
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a.sources.USER,
                                    e = this.scroll.update(t);
                                return this.selection.update(t), e
                            }
                        }, {
                            key: "updateContents",
                            value: function(t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a.sources.API;
                                return O.call(this, (function() {
                                    return t = new o.a(t), e.editor.applyDelta(t, n)
                                }), n, !0)
                            }
                        }], r = [{
                            key: "debug",
                            value: function(t) {
                                !0 === t && (t = "log"), v.a.level(t)
                            }
                        }, {
                            key: "find",
                            value: function(t) {
                                return d.a.get(t) || T.find(t)
                            }
                        }, {
                            key: "import",
                            value: function(t) {
                                return null == this.imports[t] && _.error("Cannot import ".concat(t, ". Are you sure it was registered?")), this.imports[t]
                            }
                        }, {
                            key: "register",
                            value: function(t, e) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if ("string" != typeof t) {
                                    var o = t.attrName || t.blotName;
                                    "string" == typeof o ? this.register("formats/".concat(o), t, e) : Object.keys(t).forEach((function(r) {
                                        n.register(r, t[r], e)
                                    }))
                                } else null == this.imports[t] || r || _.warn("Overwriting ".concat(t, " with"), e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName && T.register(e), "function" == typeof e.register && e.register(T)
                            }
                        }], n && w(e.prototype, n), r && w(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();

                    function x(t, e) {
                        if ((e = u()({
                                container: t,
                                modules: {
                                    clipboard: !0,
                                    keyboard: !0,
                                    history: !0,
                                    uploader: !0
                                }
                            }, e)).theme && e.theme !== A.DEFAULTS.theme) {
                            if (e.theme = A.import("themes/".concat(e.theme)), null == e.theme) throw new Error("Invalid theme ".concat(e.theme, ". Did you register it?"))
                        } else e.theme = y.a;
                        var n = s()(e.theme.DEFAULTS);
                        [n, e].forEach((function(t) {
                            t.modules = t.modules || {}, Object.keys(t.modules).forEach((function(e) {
                                !0 === t.modules[e] && (t.modules[e] = {})
                            }))
                        }));
                        var r = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t, e) {
                            var n = A.import("modules/".concat(e));
                            return null == n ? _.error("Cannot load ".concat(e, " module. Are you sure you registered it?")) : t[e] = n.DEFAULTS || {}, t
                        }), {});
                        return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                            container: e.modules.toolbar
                        }), e = u()({}, A.DEFAULTS, {
                            modules: r
                        }, n, e), ["bounds", "container", "scrollingContainer"].forEach((function(t) {
                            "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        })), e.modules = Object.keys(e.modules).reduce((function(t, n) {
                            return e.modules[n] && (t[n] = e.modules[n]), t
                        }), {}), e
                    }

                    function O(t, e, n, r) {
                        if (!this.isEnabled() && e === f.a.sources.USER && !this.allowReadOnlyEdits) return new o.a;
                        var i = null == n ? null : this.getSelection(),
                            s = this.editor.delta,
                            a = t();
                        if (null != i && (!0 === n && (n = i.index), null == r ? i = N(i, a, e) : 0 !== r && (i = N(i, n, r, e)), this.setSelection(i, f.a.sources.SILENT)), a.length() > 0) {
                            var u, c, l = [f.a.events.TEXT_CHANGE, a, s, e];
                            (u = this.emitter).emit.apply(u, [f.a.events.EDITOR_CHANGE].concat(l)), e !== f.a.sources.SILENT && (c = this.emitter).emit.apply(c, l)
                        }
                        return a
                    }

                    function R(t, e, n, r, o) {
                        var i = {};
                        return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === m(n) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), [t, e, i, o = o || f.a.sources.API]
                    }

                    function N(t, e, n, r) {
                        if (null == t) return null;
                        var i, s;
                        if (e instanceof o.a) {
                            var a = g([t.index, t.index + t.length].map((function(t) {
                                return e.transformPosition(t, r !== f.a.sources.USER)
                            })), 2);
                            i = a[0], s = a[1]
                        } else {
                            var u = g([t.index, t.index + t.length].map((function(t) {
                                return t < e || t === e && r === f.a.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                            })), 2);
                            i = u[0], s = u[1]
                        }
                        return new p.a(i, s - i)
                    }
                    A.DEFAULTS = {
                        bounds: null,
                        modules: {},
                        placeholder: "",
                        readOnly: !1,
                        registry: T,
                        scrollingContainer: null,
                        theme: "default"
                    }, A.events = f.a.events, A.sources = f.a.sources, A.version = "2.0.0-dev.46", A.imports = {
                        delta: o.a,
                        parchment: c,
                        "core/module": h.a,
                        "core/theme": y.a
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        },
                        o = r(n(50)),
                        i = r(n(10)),
                        s = r(n(18)),
                        a = r(n(51)),
                        u = r(n(42)),
                        c = String.fromCharCode(0),
                        l = function() {
                            function t(t) {
                                Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
                            }
                            return t.prototype.insert = function(t, e) {
                                var n = {};
                                return "string" == typeof t && 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
                            }, t.prototype.delete = function(t) {
                                return t <= 0 ? this : this.push({
                                    delete: t
                                })
                            }, t.prototype.retain = function(t, e) {
                                if (t <= 0) return this;
                                var n = {
                                    retain: t
                                };
                                return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
                            }, t.prototype.push = function(t) {
                                var e = this.ops.length,
                                    n = this.ops[e - 1];
                                if (t = i.default(t), "object" == typeof n) {
                                    if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
                                        delete: n.delete + t.delete
                                    }, this;
                                    if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;
                                    if (s.default(t.attributes, n.attributes)) {
                                        if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                                            insert: n.insert + t.insert
                                        }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                                        if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                                            retain: n.retain + t.retain
                                        }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                                    }
                                }
                                return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
                            }, t.prototype.chop = function() {
                                var t = this.ops[this.ops.length - 1];
                                return t && t.retain && !t.attributes && this.ops.pop(), this
                            }, t.prototype.filter = function(t) {
                                return this.ops.filter(t)
                            }, t.prototype.forEach = function(t) {
                                this.ops.forEach(t)
                            }, t.prototype.map = function(t) {
                                return this.ops.map(t)
                            }, t.prototype.partition = function(t) {
                                var e = [],
                                    n = [];
                                return this.forEach((function(r) {
                                    (t(r) ? e : n).push(r)
                                })), [e, n]
                            }, t.prototype.reduce = function(t, e) {
                                return this.ops.reduce(t, e)
                            }, t.prototype.changeLength = function() {
                                return this.reduce((function(t, e) {
                                    return e.insert ? t + u.default.length(e) : e.delete ? t - e.delete : t
                                }), 0)
                            }, t.prototype.length = function() {
                                return this.reduce((function(t, e) {
                                    return t + u.default.length(e)
                                }), 0)
                            }, t.prototype.slice = function(e, n) {
                                void 0 === e && (e = 0), void 0 === n && (n = 1 / 0);
                                for (var r = [], o = u.default.iterator(this.ops), i = 0; i < n && o.hasNext();) {
                                    var s = void 0;
                                    i < e ? s = o.next(e - i) : (s = o.next(n - i), r.push(s)), i += u.default.length(s)
                                }
                                return new t(r)
                            }, t.prototype.compose = function(e) {
                                var n = u.default.iterator(this.ops),
                                    r = u.default.iterator(e.ops),
                                    o = [],
                                    i = r.peek();
                                if (null != i && "number" == typeof i.retain && null == i.attributes) {
                                    for (var c = i.retain;
                                        "insert" === n.peekType() && n.peekLength() <= c;) c -= n.peekLength(), o.push(n.next());
                                    i.retain - c > 0 && r.next(i.retain - c)
                                }
                                for (var l = new t(o); n.hasNext() || r.hasNext();)
                                    if ("insert" === r.peekType()) l.push(r.next());
                                    else if ("delete" === n.peekType()) l.push(n.next());
                                else {
                                    var f = Math.min(n.peekLength(), r.peekLength()),
                                        h = n.next(f),
                                        p = r.next(f);
                                    if ("number" == typeof p.retain) {
                                        var d = {};
                                        "number" == typeof h.retain ? d.retain = f : d.insert = h.insert;
                                        var v = a.default.compose(h.attributes, p.attributes, "number" == typeof h.retain);
                                        if (v && (d.attributes = v), l.push(d), !r.hasNext() && s.default(l.ops[l.ops.length - 1], d)) {
                                            var y = new t(n.rest());
                                            return l.concat(y).chop()
                                        }
                                    } else "number" == typeof p.delete && "number" == typeof h.retain && l.push(p)
                                }
                                return l.chop()
                            }, t.prototype.concat = function(e) {
                                var n = new t(this.ops.slice());
                                return e.ops.length > 0 && (n.push(e.ops[0]), n.ops = n.ops.concat(e.ops.slice(1))), n
                            }, t.prototype.diff = function(e, n) {
                                if (this.ops === e.ops) return new t;
                                var r = [this, e].map((function(t) {
                                        return t.map((function(n) {
                                            if (null != n.insert) return "string" == typeof n.insert ? n.insert : c;
                                            throw new Error("diff() called " + (t === e ? "on" : "with") + " non-document")
                                        })).join("")
                                    })),
                                    i = new t,
                                    l = o.default(r[0], r[1], n),
                                    f = u.default.iterator(this.ops),
                                    h = u.default.iterator(e.ops);
                                return l.forEach((function(t) {
                                    for (var e = t[1].length; e > 0;) {
                                        var n = 0;
                                        switch (t[0]) {
                                            case o.default.INSERT:
                                                n = Math.min(h.peekLength(), e), i.push(h.next(n));
                                                break;
                                            case o.default.DELETE:
                                                n = Math.min(e, f.peekLength()), f.next(n), i.delete(n);
                                                break;
                                            case o.default.EQUAL:
                                                n = Math.min(f.peekLength(), h.peekLength(), e);
                                                var r = f.next(n),
                                                    u = h.next(n);
                                                s.default(r.insert, u.insert) ? i.retain(n, a.default.diff(r.attributes, u.attributes)) : i.push(u).delete(n)
                                        }
                                        e -= n
                                    }
                                })), i.chop()
                            }, t.prototype.eachLine = function(e, n) {
                                void 0 === n && (n = "\n");
                                for (var r = u.default.iterator(this.ops), o = new t, i = 0; r.hasNext();) {
                                    if ("insert" !== r.peekType()) return;
                                    var s = r.peek(),
                                        a = u.default.length(s) - r.peekLength(),
                                        c = "string" == typeof s.insert ? s.insert.indexOf(n, a) - a : -1;
                                    if (c < 0) o.push(r.next());
                                    else if (c > 0) o.push(r.next(c));
                                    else {
                                        if (!1 === e(o, r.next(1).attributes || {}, i)) return;
                                        i += 1, o = new t
                                    }
                                }
                                o.length() > 0 && e(o, {}, i)
                            }, t.prototype.invert = function(e) {
                                var n = new t;
                                return this.reduce((function(t, r) {
                                    if (r.insert) n.delete(u.default.length(r));
                                    else {
                                        if (r.retain && null == r.attributes) return n.retain(r.retain), t + r.retain;
                                        if (r.delete || r.retain && r.attributes) {
                                            var o = r.delete || r.retain;
                                            return e.slice(t, t + o).forEach((function(t) {
                                                r.delete ? n.push(t) : r.retain && r.attributes && n.retain(u.default.length(t), a.default.invert(r.attributes, t.attributes))
                                            })), t + o
                                        }
                                    }
                                    return t
                                }), 0), n.chop()
                            }, t.prototype.transform = function(e, n) {
                                if (void 0 === n && (n = !1), n = !!n, "number" == typeof e) return this.transformPosition(e, n);
                                for (var r = e, o = u.default.iterator(this.ops), i = u.default.iterator(r.ops), s = new t; o.hasNext() || i.hasNext();)
                                    if ("insert" !== o.peekType() || !n && "insert" === i.peekType())
                                        if ("insert" === i.peekType()) s.push(i.next());
                                        else {
                                            var c = Math.min(o.peekLength(), i.peekLength()),
                                                l = o.next(c),
                                                f = i.next(c);
                                            if (l.delete) continue;
                                            f.delete ? s.push(f) : s.retain(c, a.default.transform(l.attributes, f.attributes, n))
                                        }
                                else s.retain(u.default.length(o.next()));
                                return s.chop()
                            }, t.prototype.transformPosition = function(t, e) {
                                void 0 === e && (e = !1), e = !!e;
                                for (var n = u.default.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
                                    var o = n.peekLength(),
                                        i = n.peekType();
                                    n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
                                }
                                return t
                            }, t.Op = u.default, t.AttributeMap = a.default, t
                        }();
                    t.exports = l
                }, function(t, e, n) {
                    "use strict";
                    n.r(e), n.d(e, "Blot", (function() {
                        return o.Blot
                    })), n.d(e, "ParentBlot", (function() {
                        return y
                    })), n.d(e, "ContainerBlot", (function() {
                        return g
                    })), n.d(e, "LeafBlot", (function() {
                        return _
                    })), n.d(e, "EmbedBlot", (function() {
                        return D
                    })), n.d(e, "ScrollBlot", (function() {
                        return G
                    })), n.d(e, "BlockBlot", (function() {
                        return k
                    })), n.d(e, "InlineBlot", (function() {
                        return j
                    })), n.d(e, "TextBlot", (function() {
                        return q
                    })), n.d(e, "Formattable", (function() {
                        return o.Formattable
                    })), n.d(e, "Attributor", (function() {
                        return T
                    })), n.d(e, "ClassAttributor", (function() {
                        return R
                    })), n.d(e, "StyleAttributor", (function() {
                        return C
                    })), n.d(e, "AttributorStore", (function() {
                        return P
                    })), n.d(e, "Registry", (function() {
                        return h
                    })), n.d(e, "Scope", (function() {
                        return s
                    }));
                    var r, o = n(41);
                    ! function(t) {
                        t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
                    }(r || (r = {}));
                    var i, s = r,
                        a = function() {
                            function t() {
                                this.head = null, this.tail = null, this.length = 0
                            }
                            return t.prototype.append = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                if (this.insertBefore(t[0], null), t.length > 1) {
                                    var n = t.slice(1);
                                    this.append.apply(this, n)
                                }
                            }, t.prototype.at = function(t) {
                                for (var e = this.iterator(), n = e(); n && t > 0;) t -= 1, n = e();
                                return n
                            }, t.prototype.contains = function(t) {
                                for (var e = this.iterator(), n = e(); n;) {
                                    if (n === t) return !0;
                                    n = e()
                                }
                                return !1
                            }, t.prototype.indexOf = function(t) {
                                for (var e = this.iterator(), n = e(), r = 0; n;) {
                                    if (n === t) return r;
                                    r += 1, n = e()
                                }
                                return -1
                            }, t.prototype.insertBefore = function(t, e) {
                                null != t && t !== e && (this.remove(t), t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
                            }, t.prototype.offset = function(t) {
                                for (var e = 0, n = this.head; null != n;) {
                                    if (n === t) return e;
                                    e += n.length(), n = n.next
                                }
                                return -1
                            }, t.prototype.remove = function(t) {
                                this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
                            }, t.prototype.iterator = function(t) {
                                return void 0 === t && (t = this.head),
                                    function() {
                                        var e = t;
                                        return null != t && (t = t.next), e
                                    }
                            }, t.prototype.find = function(t, e) {
                                void 0 === e && (e = !1);
                                for (var n = this.iterator(), r = n(); r;) {
                                    var o = r.length();
                                    if (t < o || e && t === o && (null == r.next || 0 !== r.next.length())) return [r, t];
                                    t -= o, r = n()
                                }
                                return [null, 0]
                            }, t.prototype.forEach = function(t) {
                                for (var e = this.iterator(), n = e(); n;) t(n), n = e()
                            }, t.prototype.forEachAt = function(t, e, n) {
                                if (!(e <= 0))
                                    for (var r = this.find(t), o = r[0], i = t - r[1], s = this.iterator(o), a = s(); a && i < t + e;) {
                                        var u = a.length();
                                        t > i ? n(a, t - i, Math.min(e, i + u - t)) : n(a, 0, Math.min(u, t + e - i)), i += u, a = s()
                                    }
                            }, t.prototype.map = function(t) {
                                return this.reduce((function(e, n) {
                                    return e.push(t(n)), e
                                }), [])
                            }, t.prototype.reduce = function(t, e) {
                                for (var n = this.iterator(), r = n(); r;) e = t(e, r), r = n();
                                return e
                            }, t
                        }(),
                        u = a,
                        c = (i = function(t, e) {
                            return i = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            }, i(t, e)
                        }, function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        l = function(t) {
                            function e(e) {
                                var n = this;
                                return e = "[Parchment] " + e, (n = t.call(this, e) || this).message = e, n.name = n.constructor.name, n
                            }
                            return c(e, t), e
                        }(Error),
                        f = function() {
                            function t() {
                                this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {}
                            }
                            return t.find = function(t, e) {
                                return void 0 === e && (e = !1), null == t ? null : this.blots.has(t) ? this.blots.get(t) || null : e ? this.find(t.parentNode, e) : null
                            }, t.prototype.create = function(e, n, r) {
                                var o = this.query(n);
                                if (null == o) throw new l("Unable to create " + n + " blot");
                                var i = o,
                                    s = n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : i.create(r),
                                    a = new i(e, s, r);
                                return t.blots.set(a.domNode, a), a
                            }, t.prototype.find = function(e, n) {
                                return void 0 === n && (n = !1), t.find(e, n)
                            }, t.prototype.query = function(t, e) {
                                var n, r = this;
                                return void 0 === e && (e = s.ANY), "string" == typeof t ? n = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? n = this.types.text : "number" == typeof t ? t & s.LEVEL & s.BLOCK ? n = this.types.block : t & s.LEVEL & s.INLINE && (n = this.types.inline) : t instanceof HTMLElement && ((t.getAttribute("class") || "").split(/\s+/).some((function(t) {
                                    return !!(n = r.classes[t])
                                })), n = n || this.tags[t.tagName]), null == n ? null : e & s.LEVEL & n.scope && e & s.TYPE & n.scope ? n : null
                            }, t.prototype.register = function() {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                if (e.length > 1) return e.map((function(e) {
                                    return t.register(e)
                                }));
                                var r = e[0];
                                if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new l("Invalid definition");
                                if ("abstract" === r.blotName) throw new l("Cannot register abstract class");
                                return this.types[r.blotName || r.attrName] = r, "string" == typeof r.keyName ? this.attributes[r.keyName] = r : (null != r.className && (this.classes[r.className] = r), null != r.tagName && (Array.isArray(r.tagName) ? r.tagName = r.tagName.map((function(t) {
                                    return t.toUpperCase()
                                })) : r.tagName = r.tagName.toUpperCase(), (Array.isArray(r.tagName) ? r.tagName : [r.tagName]).forEach((function(e) {
                                    null != t.tags[e] && null != r.className || (t.tags[e] = r)
                                })))), r
                            }, t.blots = new WeakMap, t
                        }(),
                        h = f,
                        p = function() {
                            function t(t, e) {
                                this.scroll = t, this.domNode = e, h.blots.set(e, this), this.prev = null, this.next = null
                            }
                            return t.create = function(t) {
                                if (null == this.tagName) throw new l("Blot definition missing tagName");
                                var e;
                                return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t, 10).toString() === t && (t = parseInt(t, 10))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                            }, Object.defineProperty(t.prototype, "statics", {
                                get: function() {
                                    return this.constructor
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.attach = function() {}, t.prototype.clone = function() {
                                var t = this.domNode.cloneNode(!1);
                                return this.scroll.create(t)
                            }, t.prototype.detach = function() {
                                null != this.parent && this.parent.removeChild(this), h.blots.delete(this.domNode)
                            }, t.prototype.deleteAt = function(t, e) {
                                this.isolate(t, e).remove()
                            }, t.prototype.formatAt = function(t, e, n, r) {
                                var o = this.isolate(t, e);
                                if (null != this.scroll.query(n, s.BLOT) && r) o.wrap(n, r);
                                else if (null != this.scroll.query(n, s.ATTRIBUTE)) {
                                    var i = this.scroll.create(this.statics.scope);
                                    o.wrap(i), i.format(n, r)
                                }
                            }, t.prototype.insertAt = function(t, e, n) {
                                var r = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n),
                                    o = this.split(t);
                                this.parent.insertBefore(r, o || void 0)
                            }, t.prototype.isolate = function(t, e) {
                                var n = this.split(t);
                                if (null == n) throw new Error("Attempt to isolate at end");
                                return n.split(e), n
                            }, t.prototype.length = function() {
                                return 1
                            }, t.prototype.offset = function(t) {
                                return void 0 === t && (t = this.parent), null == this.parent || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                            }, t.prototype.optimize = function(t) {
                                !this.statics.requiredContainer || this.parent instanceof this.statics.requiredContainer || this.wrap(this.statics.requiredContainer.blotName)
                            }, t.prototype.remove = function() {
                                null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                            }, t.prototype.replaceWith = function(t, e) {
                                var n = "string" == typeof t ? this.scroll.create(t, e) : t;
                                return null != this.parent && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n
                            }, t.prototype.split = function(t, e) {
                                return 0 === t ? this : this.next
                            }, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) {
                                var n = "string" == typeof t ? this.scroll.create(t, e) : t;
                                if (null != this.parent && this.parent.insertBefore(n, this.next || void 0), "function" != typeof n.appendChild) throw new l("Cannot wrap " + t);
                                return n.appendChild(this), n
                            }, t.blotName = "abstract", t
                        }(),
                        d = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }();

                    function v(t, e) {
                        var n = e.find(t);
                        if (null == n) try {
                            n = e.create(t)
                        } catch (r) {
                            n = e.create(s.INLINE), Array.from(t.childNodes).forEach((function(t) {
                                n.domNode.appendChild(t)
                            })), t.parentNode && t.parentNode.replaceChild(n.domNode, t), n.attach()
                        }
                        return n
                    }
                    var y = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.uiNode = null, r.build(), r
                            }
                            return d(e, t), e.prototype.appendChild = function(t) {
                                this.insertBefore(t)
                            }, e.prototype.attach = function() {
                                t.prototype.attach.call(this), this.children.forEach((function(t) {
                                    t.attach()
                                }))
                            }, e.prototype.attachUI = function(t) {
                                null != this.uiNode && this.uiNode.remove(), this.uiNode = t, e.uiClass && this.uiNode.classList.add(e.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild)
                            }, e.prototype.build = function() {
                                var t = this;
                                this.children = new u, Array.from(this.domNode.childNodes).filter((function(e) {
                                    return e !== t.uiNode
                                })).reverse().forEach((function(e) {
                                    try {
                                        var n = v(e, t.scroll);
                                        t.insertBefore(n, t.children.head || void 0)
                                    } catch (r) {
                                        if (r instanceof l) return;
                                        throw r
                                    }
                                }))
                            }, e.prototype.deleteAt = function(t, e) {
                                if (0 === t && e === this.length()) return this.remove();
                                this.children.forEachAt(t, e, (function(t, e, n) {
                                    t.deleteAt(e, n)
                                }))
                            }, e.prototype.descendant = function(t, n) {
                                void 0 === n && (n = 0);
                                var r = this.children.find(n),
                                    o = r[0],
                                    i = r[1];
                                return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                            }, e.prototype.descendants = function(t, n, r) {
                                void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
                                var o = [],
                                    i = r;
                                return this.children.forEachAt(n, r, (function(n, r, s) {
                                    (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= s
                                })), o
                            }, e.prototype.detach = function() {
                                this.children.forEach((function(t) {
                                    t.detach()
                                })), t.prototype.detach.call(this)
                            }, e.prototype.enforceAllowedChildren = function() {
                                var t = this,
                                    n = !1;
                                this.children.forEach((function(r) {
                                    n || t.statics.allowedChildren.some((function(t) {
                                        return r instanceof t
                                    })) || (r.statics.scope === s.BLOCK_BLOT ? (null != r.next && t.splitAfter(r), null != r.prev && t.splitAfter(r.prev), r.parent.unwrap(), n = !0) : r instanceof e ? r.unwrap() : r.remove())
                                }))
                            }, e.prototype.formatAt = function(t, e, n, r) {
                                this.children.forEachAt(t, e, (function(t, e, o) {
                                    t.formatAt(e, o, n, r)
                                }))
                            }, e.prototype.insertAt = function(t, e, n) {
                                var r = this.children.find(t),
                                    o = r[0],
                                    i = r[1];
                                if (o) o.insertAt(i, e, n);
                                else {
                                    var s = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n);
                                    this.appendChild(s)
                                }
                            }, e.prototype.insertBefore = function(t, e) {
                                if (t !== e) {
                                    null != t.parent && t.parent.children.remove(t);
                                    var n = null;
                                    this.children.insertBefore(t, e || null), t.parent = this, null != e && (n = e.domNode), t.domNode.parentNode === this.domNode && t.domNode.nextSibling === n || this.domNode.insertBefore(t.domNode, n), t.attach()
                                }
                            }, e.prototype.length = function() {
                                return this.children.reduce((function(t, e) {
                                    return t + e.length()
                                }), 0)
                            }, e.prototype.moveChildren = function(t, e) {
                                this.children.forEach((function(n) {
                                    t.insertBefore(n, e)
                                }))
                            }, e.prototype.optimize = function(e) {
                                if (t.prototype.optimize.call(this, e), this.enforceAllowedChildren(), null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), 0 === this.children.length)
                                    if (null != this.statics.defaultChild) {
                                        var n = this.scroll.create(this.statics.defaultChild.blotName);
                                        this.appendChild(n)
                                    } else this.remove()
                            }, e.prototype.path = function(t, n) {
                                void 0 === n && (n = !1);
                                var r = this.children.find(t, n),
                                    o = r[0],
                                    i = r[1],
                                    s = [
                                        [this, t]
                                    ];
                                return o instanceof e ? s.concat(o.path(i, n)) : (null != o && s.push([o, i]), s)
                            }, e.prototype.removeChild = function(t) {
                                this.children.remove(t)
                            }, e.prototype.replaceWith = function(n, r) {
                                var o = "string" == typeof n ? this.scroll.create(n, r) : n;
                                return o instanceof e && this.moveChildren(o), t.prototype.replaceWith.call(this, o)
                            }, e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1), !e) {
                                    if (0 === t) return this;
                                    if (t === this.length()) return this.next
                                }
                                var n = this.clone();
                                return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(t, this.length(), (function(t, r, o) {
                                    var i = t.split(r, e);
                                    null != i && n.appendChild(i)
                                })), n
                            }, e.prototype.splitAfter = function(t) {
                                for (var e = this.clone(); null != t.next;) e.appendChild(t.next);
                                return this.parent && this.parent.insertBefore(e, this.next || void 0), e
                            }, e.prototype.unwrap = function() {
                                this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove()
                            }, e.prototype.update = function(t, e) {
                                var n = this,
                                    r = [],
                                    o = [];
                                t.forEach((function(t) {
                                    t.target === n.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes), o.push.apply(o, t.removedNodes))
                                })), o.forEach((function(t) {
                                    if (null == t.parentNode || t instanceof Element && ("IFRAME" === t.tagName || null != t.querySelector("iframe")) || !(document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                        var e = n.scroll.find(t);
                                        null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                                    }
                                })), r.filter((function(t) {
                                    return t.parentNode === n.domNode || t === n.uiNode
                                })).sort((function(t, e) {
                                    return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                                })).forEach((function(t) {
                                    var e = null;
                                    null != t.nextSibling && (e = n.scroll.find(t.nextSibling));
                                    var r = v(t, n.scroll);
                                    r.next === e && null != r.next || (null != r.parent && r.parent.removeChild(n), n.insertBefore(r, e || void 0))
                                })), this.enforceAllowedChildren()
                            }, e.uiClass = "", e
                        }(p),
                        m = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        b = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return m(e, t), e.prototype.checkMerge = function() {
                                return null !== this.next && this.next.statics.blotName === this.statics.blotName
                            }, e.prototype.deleteAt = function(e, n) {
                                t.prototype.deleteAt.call(this, e, n), this.enforceAllowedChildren()
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                t.prototype.formatAt.call(this, e, n, r, o), this.enforceAllowedChildren()
                            }, e.prototype.insertAt = function(e, n, r) {
                                t.prototype.insertAt.call(this, e, n, r), this.enforceAllowedChildren()
                            }, e.prototype.optimize = function(e) {
                                t.prototype.optimize.call(this, e), this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this), this.next.remove())
                            }, e.blotName = "container", e.scope = s.BLOCK_BLOT, e
                        }(y),
                        g = b,
                        E = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        w = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return E(e, t), e.value = function(t) {
                                return !0
                            }, e.prototype.index = function(t, e) {
                                return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                            }, e.prototype.position = function(t, e) {
                                var n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
                                return t > 0 && (n += 1), [this.parent.domNode, n]
                            }, e.prototype.value = function() {
                                var t;
                                return (t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, t
                            }, e.scope = s.INLINE_BLOT, e
                        }(p),
                        _ = w,
                        T = function() {
                            function t(t, e, n) {
                                void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                                var r = s.TYPE & s.ATTRIBUTE;
                                this.scope = null != n.scope ? n.scope & s.LEVEL | r : s.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                            }
                            return t.keys = function(t) {
                                return Array.from(t.attributes).map((function(t) {
                                    return t.name
                                }))
                            }, t.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                            }, t.prototype.canAdd = function(t, e) {
                                return null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1)
                            }, t.prototype.remove = function(t) {
                                t.removeAttribute(this.keyName)
                            }, t.prototype.value = function(t) {
                                var e = t.getAttribute(this.keyName);
                                return this.canAdd(t, e) && e ? e : ""
                            }, t
                        }(),
                        A = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }();

                    function x(t, e) {
                        return (t.getAttribute("class") || "").split(/\s+/).filter((function(t) {
                            return 0 === t.indexOf(e + "-")
                        }))
                    }
                    var O = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return A(e, t), e.keys = function(t) {
                                return (t.getAttribute("class") || "").split(/\s+/).map((function(t) {
                                    return t.split("-").slice(0, -1).join("-")
                                }))
                            }, e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
                            }, e.prototype.remove = function(t) {
                                x(t, this.keyName).forEach((function(e) {
                                    t.classList.remove(e)
                                })), 0 === t.classList.length && t.removeAttribute("class")
                            }, e.prototype.value = function(t) {
                                var e = (x(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                                return this.canAdd(t, e) ? e : ""
                            }, e
                        }(T),
                        R = O,
                        N = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        S = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return N(e, t), e.keys = function(t) {
                                return (t.getAttribute("style") || "").split(";").map((function(t) {
                                    return t.split(":")[0].trim()
                                }))
                            }, e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.style.setProperty(this.keyName, e), !0)
                            }, e.prototype.remove = function(t) {
                                t.style.removeProperty(this.keyName), t.getAttribute("style") || t.removeAttribute("style")
                            }, e.prototype.value = function(t) {
                                var e = t.style.getPropertyValue(this.keyName).trim();
                                return this.canAdd(t, e) ? e : ""
                            }, e
                        }(T),
                        C = S,
                        P = function() {
                            function t(t) {
                                this.attributes = {}, this.domNode = t, this.build()
                            }
                            return t.prototype.attribute = function(t, e) {
                                e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                            }, t.prototype.build = function() {
                                var t = this;
                                this.attributes = {};
                                var e = h.find(this.domNode);
                                if (null != e) {
                                    var n = T.keys(this.domNode),
                                        r = R.keys(this.domNode),
                                        o = C.keys(this.domNode);
                                    n.concat(r).concat(o).forEach((function(n) {
                                        var r = e.scroll.query(n, s.ATTRIBUTE);
                                        r instanceof T && (t.attributes[r.attrName] = r)
                                    }))
                                }
                            }, t.prototype.copy = function(t) {
                                var e = this;
                                Object.keys(this.attributes).forEach((function(n) {
                                    var r = e.attributes[n].value(e.domNode);
                                    t.format(n, r)
                                }))
                            }, t.prototype.move = function(t) {
                                var e = this;
                                this.copy(t), Object.keys(this.attributes).forEach((function(t) {
                                    e.attributes[t].remove(e.domNode)
                                })), this.attributes = {}
                            }, t.prototype.values = function() {
                                var t = this;
                                return Object.keys(this.attributes).reduce((function(e, n) {
                                    return e[n] = t.attributes[n].value(t.domNode), e
                                }), {})
                            }, t
                        }(),
                        L = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        j = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.attributes = new P(r.domNode), r
                            }
                            return L(e, t), e.formats = function(t, n) {
                                var r = n.query(e.blotName);
                                if (null == r || t.tagName !== r.tagName) return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                            }, e.prototype.format = function(t, n) {
                                var r = this;
                                if (t !== this.statics.blotName || n) {
                                    var o = this.scroll.query(t, s.INLINE);
                                    if (null == o) return;
                                    o instanceof T ? this.attributes.attribute(o, n) : !n || t === this.statics.blotName && this.formats()[t] === n || this.replaceWith(t, n)
                                } else this.children.forEach((function(t) {
                                    t instanceof e || (t = t.wrap(e.blotName, !0)), r.attributes.copy(t)
                                })), this.unwrap()
                            }, e.prototype.formats = function() {
                                var t = this.attributes.values(),
                                    e = this.statics.formats(this.domNode, this.scroll);
                                return null != e && (t[this.statics.blotName] = e), t
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                null != this.formats()[r] || this.scroll.query(r, s.ATTRIBUTE) ? this.isolate(e, n).format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n);
                                var r = this.formats();
                                if (0 === Object.keys(r).length) return this.unwrap();
                                var o = this.next;
                                o instanceof e && o.prev === this && function(t, e) {
                                    if (Object.keys(t).length !== Object.keys(e).length) return !1;
                                    for (var n in t)
                                        if (t[n] !== e[n]) return !1;
                                    return !0
                                }(r, o.formats()) && (o.moveChildren(this), o.remove())
                            }, e.prototype.replaceWith = function(e, n) {
                                var r = t.prototype.replaceWith.call(this, e, n);
                                return this.attributes.copy(r), r
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n), e.some((function(t) {
                                    return t.target === r.domNode && "attributes" === t.type
                                })) && this.attributes.build()
                            }, e.prototype.wrap = function(n, r) {
                                var o = t.prototype.wrap.call(this, n, r);
                                return o instanceof e && this.attributes.move(o), o
                            }, e.allowedChildren = [e, _], e.blotName = "inline", e.scope = s.INLINE_BLOT, e.tagName = "SPAN", e
                        }(y),
                        I = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        k = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.attributes = new P(r.domNode), r
                            }
                            return I(e, t), e.formats = function(t, n) {
                                var r = n.query(e.blotName);
                                if (null == r || t.tagName !== r.tagName) return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                            }, e.prototype.format = function(t, n) {
                                var r = this.scroll.query(t, s.BLOCK);
                                null != r && (r instanceof T ? this.attributes.attribute(r, n) : t !== this.statics.blotName || n ? !n || t === this.statics.blotName && this.formats()[t] === n || this.replaceWith(t, n) : this.replaceWith(e.blotName))
                            }, e.prototype.formats = function() {
                                var t = this.attributes.values(),
                                    e = this.statics.formats(this.domNode, this.scroll);
                                return null != e && (t[this.statics.blotName] = e), t
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                null != this.scroll.query(r, s.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.insertAt = function(e, n, r) {
                                if (null == r || null != this.scroll.query(n, s.INLINE)) t.prototype.insertAt.call(this, e, n, r);
                                else {
                                    var o = this.split(e);
                                    if (null == o) throw new Error("Attempt to insertAt after block boundaries");
                                    var i = this.scroll.create(n, r);
                                    o.parent.insertBefore(i, o)
                                }
                            }, e.prototype.replaceWith = function(e, n) {
                                var r = t.prototype.replaceWith.call(this, e, n);
                                return this.attributes.copy(r), r
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n), e.some((function(t) {
                                    return t.target === r.domNode && "attributes" === t.type
                                })) && this.attributes.build()
                            }, e.blotName = "block", e.scope = s.BLOCK_BLOT, e.tagName = "P", e.allowedChildren = [j, e, _], e
                        }(y),
                        B = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        M = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return B(e, t), e.formats = function(t, e) {}, e.prototype.format = function(e, n) {
                                t.prototype.formatAt.call(this, 0, this.length(), e, n)
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.formats = function() {
                                return this.statics.formats(this.domNode, this.scroll)
                            }, e
                        }(_),
                        D = M,
                        F = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        U = {
                            attributes: !0,
                            characterData: !0,
                            characterDataOldValue: !0,
                            childList: !0,
                            subtree: !0
                        },
                        H = function(t) {
                            function e(e, n) {
                                var r = t.call(this, null, n) || this;
                                return r.registry = e, r.scroll = r, r.build(), r.observer = new MutationObserver((function(t) {
                                    r.update(t)
                                })), r.observer.observe(r.domNode, U), r.attach(), r
                            }
                            return F(e, t), e.prototype.create = function(t, e) {
                                return this.registry.create(this, t, e)
                            }, e.prototype.find = function(t, e) {
                                void 0 === e && (e = !1);
                                var n = this.registry.find(t, e);
                                return n ? n.scroll === this ? n : e ? this.find(n.scroll.domNode.parentNode, !0) : null : null
                            }, e.prototype.query = function(t, e) {
                                return void 0 === e && (e = s.ANY), this.registry.query(t, e)
                            }, e.prototype.register = function() {
                                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return (t = this.registry).register.apply(t, e)
                            }, e.prototype.build = function() {
                                null != this.scroll && t.prototype.build.call(this)
                            }, e.prototype.detach = function() {
                                t.prototype.detach.call(this), this.observer.disconnect()
                            }, e.prototype.deleteAt = function(e, n) {
                                this.update(), 0 === e && n === this.length() ? this.children.forEach((function(t) {
                                    t.remove()
                                })) : t.prototype.deleteAt.call(this, e, n)
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                this.update(), t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.insertAt = function(e, n, r) {
                                this.update(), t.prototype.insertAt.call(this, e, n, r)
                            }, e.prototype.optimize = function(e, n) {
                                var r = this;
                                void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
                                for (var o = n.mutationsMap || new WeakMap, i = Array.from(this.observer.takeRecords()); i.length > 0;) e.push(i.pop());
                                for (var s = function(t, e) {
                                        void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (o.has(t.domNode) || o.set(t.domNode, []), e && s(t.parent))
                                    }, a = function(t) {
                                        o.has(t.domNode) && (t instanceof y && t.children.forEach(a), o.delete(t.domNode), t.optimize(n))
                                    }, u = e, c = 0; u.length > 0; c += 1) {
                                    if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                                    for (u.forEach((function(t) {
                                            var e = r.find(t.target, !0);
                                            null != e && (e.domNode === t.target && ("childList" === t.type ? (s(r.find(t.previousSibling, !1)), Array.from(t.addedNodes).forEach((function(t) {
                                                var e = r.find(t, !1);
                                                s(e, !1), e instanceof y && e.children.forEach((function(t) {
                                                    s(t, !1)
                                                }))
                                            }))) : "attributes" === t.type && s(e.prev)), s(e))
                                        })), this.children.forEach(a), i = (u = Array.from(this.observer.takeRecords())).slice(); i.length > 0;) e.push(i.pop())
                                }
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                void 0 === n && (n = {}), e = e || this.observer.takeRecords();
                                var o = new WeakMap;
                                e.map((function(t) {
                                    var e = r.find(t.target, !0);
                                    return null == e ? null : o.has(e.domNode) ? (o.get(e.domNode).push(t), null) : (o.set(e.domNode, [t]), e)
                                })).forEach((function(t) {
                                    null != t && t !== r && o.has(t.domNode) && t.update(o.get(t.domNode) || [], n)
                                })), n.mutationsMap = o, o.has(this.domNode) && t.prototype.update.call(this, o.get(this.domNode), n), this.optimize(e, n)
                            }, e.blotName = "scroll", e.defaultChild = k, e.allowedChildren = [k, g], e.scope = s.BLOCK_BLOT, e.tagName = "DIV", e
                        }(y),
                        G = H,
                        V = function() {
                            var t = function(e, n) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                }, t(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        q = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.text = r.statics.value(r.domNode), r
                            }
                            return V(e, t), e.create = function(t) {
                                return document.createTextNode(t)
                            }, e.value = function(t) {
                                return t.data
                            }, e.prototype.deleteAt = function(t, e) {
                                this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                            }, e.prototype.index = function(t, e) {
                                return this.domNode === t ? e : -1
                            }, e.prototype.insertAt = function(e, n, r) {
                                null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
                            }, e.prototype.length = function() {
                                return this.text.length
                            }, e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                            }, e.prototype.position = function(t, e) {
                                return void 0 === e && (e = !1), [this.domNode, t]
                            }, e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1), !e) {
                                    if (0 === t) return this;
                                    if (t === this.length()) return this.next
                                }
                                var n = this.scroll.create(this.domNode.splitText(t));
                                return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n
                            }, e.prototype.update = function(t, e) {
                                var n = this;
                                t.some((function(t) {
                                    return "characterData" === t.type && t.target === n.domNode
                                })) && (this.text = this.statics.value(this.domNode))
                            }, e.prototype.value = function() {
                                return this.text
                            }, e.blotName = "text", e.scope = s.INLINE_BLOT, e
                        }(_)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(43),
                        o = n.n(r),
                        i = n(25),
                        s = n(11);

                    function a(t) {
                        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, a(t)
                    }

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function c() {
                        return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, c.apply(this, arguments)
                    }

                    function l(t, e) {
                        return l = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, l(t, e)
                    }

                    function f(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = h(t);
                            if (e) {
                                var o = h(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === a(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function h(t) {
                        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, h(t)
                    }
                    var p = Object(s.a)("quill:events");
                    ["selectionchange", "mousedown", "mouseup", "click"].forEach((function(t) {
                        document.addEventListener(t, (function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Array.from(document.querySelectorAll(".ql-container")).forEach((function(t) {
                                var n, r = i.a.get(t);
                                r && r.emitter && (n = r.emitter).handleDOM.apply(n, e)
                            }))
                        }))
                    }));
                    var d = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && l(t, e)
                        }(i, t);
                        var e, n, r, o = f(i);

                        function i() {
                            var t;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, i), (t = o.call(this)).listeners = {}, t.on("error", p.error), t
                        }
                        return e = i, n = [{
                            key: "emit",
                            value: function() {
                                for (var t, e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                (t = p.log).call.apply(t, [p].concat(r)), (e = c(h(i.prototype), "emit", this)).call.apply(e, [this].concat(r))
                            }
                        }, {
                            key: "handleDOM",
                            value: function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                (this.listeners[t.type] || []).forEach((function(e) {
                                    var r = e.node,
                                        o = e.handler;
                                    (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
                                }))
                            }
                        }, {
                            key: "listenDOM",
                            value: function(t, e, n) {
                                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                                    node: e,
                                    handler: n
                                })
                            }
                        }], n && u(e.prototype, n), r && u(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), i
                    }(o.a);
                    d.events = {
                        EDITOR_CHANGE: "editor-change",
                        SCROLL_BEFORE_UPDATE: "scroll-before-update",
                        SCROLL_BLOT_MOUNT: "scroll-blot-mount",
                        SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
                        SCROLL_OPTIMIZE: "scroll-optimize",
                        SCROLL_UPDATE: "scroll-update",
                        SELECTION_CHANGE: "selection-change",
                        TEXT_CHANGE: "text-change"
                    }, d.sources = {
                        API: "api",
                        SILENT: "silent",
                        USER: "user"
                    }, e.a = d
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return T
                    })), n.d(e, "c", (function() {
                        return A
                    })), n.d(e, "a", (function() {
                        return _
                    })), n.d(e, "d", (function() {
                        return w
                    }));
                    var r = n(1),
                        o = n.n(r),
                        i = n(2),
                        s = n(8),
                        a = n(12),
                        u = n(7);

                    function c(t) {
                        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, c(t)
                    }

                    function l(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function f(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? l(Object(n), !0).forEach((function(e) {
                                h(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function h(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function p(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function d(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function v(t, e, n) {
                        return e && d(t.prototype, e), n && d(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }

                    function y() {
                        return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = E(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, y.apply(this, arguments)
                    }

                    function m(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && b(t, e)
                    }

                    function b(t, e) {
                        return b = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, b(t, e)
                    }

                    function g(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = E(t);
                            if (e) {
                                var o = E(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === c(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function E(t) {
                        return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, E(t)
                    }
                    var w = function(t) {
                        m(n, t);
                        var e = g(n);

                        function n(t, r) {
                            var o;
                            return p(this, n), (o = e.call(this, t, r)).cache = {}, o
                        }
                        return v(n, [{
                            key: "delta",
                            value: function() {
                                return null == this.cache.delta && (this.cache.delta = T(this)), this.cache.delta
                            }
                        }, {
                            key: "deleteAt",
                            value: function(t, e) {
                                y(E(n.prototype), "deleteAt", this).call(this, t, e), this.cache = {}
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, r, o) {
                                e <= 0 || (this.scroll.query(r, i.Scope.BLOCK) ? t + e === this.length() && this.format(r, o) : y(E(n.prototype), "formatAt", this).call(this, t, Math.min(e, this.length() - t - 1), r, o), this.cache = {})
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, r) {
                                if (null != r) return y(E(n.prototype), "insertAt", this).call(this, t, e, r), void(this.cache = {});
                                if (0 !== e.length) {
                                    var o = e.split("\n"),
                                        i = o.shift();
                                    i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? y(E(n.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                                    var s = this;
                                    o.reduce((function(t, e) {
                                        return (s = s.split(t, !0)).insertAt(0, e), e.length
                                    }), t + i.length)
                                }
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, e) {
                                var r = this.children.head;
                                y(E(n.prototype), "insertBefore", this).call(this, t, e), r instanceof s.a && r.remove(), this.cache = {}
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return null == this.cache.length && (this.cache.length = y(E(n.prototype), "length", this).call(this) + 1), this.cache.length
                            }
                        }, {
                            key: "moveChildren",
                            value: function(t, e) {
                                y(E(n.prototype), "moveChildren", this).call(this, t, e), this.cache = {}
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                y(E(n.prototype), "optimize", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "path",
                            value: function(t) {
                                return y(E(n.prototype), "path", this).call(this, t, !0)
                            }
                        }, {
                            key: "removeChild",
                            value: function(t) {
                                y(E(n.prototype), "removeChild", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "split",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (e && (0 === t || t >= this.length() - 1)) {
                                    var r = this.clone();
                                    return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
                                }
                                var o = y(E(n.prototype), "split", this).call(this, t, e);
                                return this.cache = {}, o
                            }
                        }]), n
                    }(i.BlockBlot);
                    w.blotName = "block", w.tagName = "P", w.defaultChild = s.a, w.allowedChildren = [s.a, a.a, i.EmbedBlot, u.a];
                    var _ = function(t) {
                        m(n, t);
                        var e = g(n);

                        function n() {
                            return p(this, n), e.apply(this, arguments)
                        }
                        return v(n, [{
                            key: "attach",
                            value: function() {
                                y(E(n.prototype), "attach", this).call(this), this.attributes = new i.AttributorStore(this.domNode)
                            }
                        }, {
                            key: "delta",
                            value: function() {
                                return (new o.a).insert(this.value(), f(f({}, this.formats()), this.attributes.values()))
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                var n = this.scroll.query(t, i.Scope.BLOCK_ATTRIBUTE);
                                null != n && this.attributes.attribute(n, e)
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, n, r) {
                                this.format(n, r)
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, r) {
                                if ("string" == typeof e && e.endsWith("\n")) {
                                    var o = this.scroll.create(w.blotName);
                                    this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, e.slice(0, -1))
                                } else y(E(n.prototype), "insertAt", this).call(this, t, e, r)
                            }
                        }]), n
                    }(i.EmbedBlot);

                    function T(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return t.descendants(i.LeafBlot).reduce((function(t, n) {
                            return 0 === n.length() ? t : t.insert(n.value(), A(n, {}, e))
                        }), new o.a).insert("\n", A(t))
                    }

                    function A(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return null == t ? e : ("function" == typeof t.formats && (e = f(f({}, e), t.formats()), n && delete e["code-token"]), null == t.parent || "scroll" === t.parent.statics.blotName || t.parent.statics.scope !== t.statics.scope ? e : A(t.parent, e, n))
                    }
                    _.scope = i.Scope.BLOCK_BLOT
                }, function(t, e, n) {
                    "use strict";
                    var r = n(10),
                        o = n.n(r),
                        i = n(18),
                        s = n.n(i),
                        a = n(17),
                        u = n.n(a),
                        c = n(1),
                        l = n.n(c),
                        f = n(2),
                        h = n(6),
                        p = n(16),
                        d = n(4),
                        v = n(8),
                        y = n(7);

                    function m(t) {
                        return O(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || A(t) || T()
                    }

                    function b(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function g(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? b(Object(n), !0).forEach((function(e) {
                                E(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function E(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function w(t) {
                        return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, w(t)
                    }

                    function _(t, e) {
                        return O(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || A(t, e) || T()
                    }

                    function T() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    function A(t, e) {
                        if (t) {
                            if ("string" == typeof t) return x(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(t, e) : void 0
                        }
                    }

                    function x(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function O(t) {
                        if (Array.isArray(t)) return t
                    }

                    function R(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var N = /^[ -~]*$/,
                        S = function() {
                            function t(e) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.scroll = e, this.delta = this.getDelta()
                            }
                            var e, n, r;
                            return e = t, n = [{
                                key: "applyDelta",
                                value: function(t) {
                                    var e = this;
                                    this.scroll.update();
                                    var n = this.scroll.length();
                                    this.scroll.batchStart();
                                    var r = function(t) {
                                            return t.reduce((function(t, e) {
                                                if ("string" == typeof e.insert) {
                                                    var n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                                    return t.insert(n, e.attributes)
                                                }
                                                return t.push(e)
                                            }), new l.a)
                                        }(t),
                                        o = new l.a;
                                    return r.reduce((function(t, r) {
                                        var i = c.Op.length(r),
                                            s = r.attributes || {},
                                            a = !1;
                                        if (null != r.insert) {
                                            if (o.retain(i), "string" == typeof r.insert) {
                                                var l = r.insert;
                                                a = !l.endsWith("\n") && (n <= t || e.scroll.descendant(d.a, t)[0]), e.scroll.insertAt(t, l);
                                                var h = _(e.scroll.line(t), 2),
                                                    p = h[0],
                                                    v = h[1],
                                                    y = u()({}, Object(d.c)(p));
                                                if (p instanceof d.d) {
                                                    var m = _(p.descendant(f.LeafBlot, v), 1)[0];
                                                    y = u()(y, Object(d.c)(m))
                                                }
                                                s = c.AttributeMap.diff(y, s) || {}
                                            } else if ("object" === w(r.insert)) {
                                                var b = Object.keys(r.insert)[0];
                                                if (null == b) return t;
                                                a = null != e.scroll.query(b, f.Scope.INLINE) && (n <= t || e.scroll.descendant(d.a, t)[0]), e.scroll.insertAt(t, b, r.insert[b])
                                            }
                                            n += i
                                        } else o.push(r);
                                        Object.keys(s).forEach((function(n) {
                                            e.scroll.formatAt(t, i, n, s[n])
                                        }));
                                        var g = a ? 1 : 0;
                                        return n += g, o.delete(g), t + i + g
                                    }), 0), o.reduce((function(t, n) {
                                        return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + c.Op.length(n)
                                    }), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r)
                                }
                            }, {
                                key: "deleteText",
                                value: function(t, e) {
                                    return this.scroll.deleteAt(t, e), this.update((new l.a).retain(t).delete(e))
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    this.scroll.update(), Object.keys(r).forEach((function(o) {
                                        n.scroll.lines(t, Math.max(e, 1)).forEach((function(t) {
                                            t.format(o, r[o])
                                        }))
                                    })), this.scroll.optimize();
                                    var i = (new l.a).retain(t).retain(e, o()(r));
                                    return this.update(i)
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    Object.keys(r).forEach((function(o) {
                                        n.scroll.formatAt(t, e, o, r[o])
                                    }));
                                    var i = (new l.a).retain(t).retain(e, o()(r));
                                    return this.update(i)
                                }
                            }, {
                                key: "getContents",
                                value: function(t, e) {
                                    return this.delta.slice(t, t + e)
                                }
                            }, {
                                key: "getDelta",
                                value: function() {
                                    return this.scroll.lines().reduce((function(t, e) {
                                        return t.concat(e.delta())
                                    }), new l.a)
                                }
                            }, {
                                key: "getFormat",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = [],
                                        r = [];
                                    0 === e ? this.scroll.path(t).forEach((function(t) {
                                        var e = _(t, 1)[0];
                                        e instanceof d.d ? n.push(e) : e instanceof f.LeafBlot && r.push(e)
                                    })) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(f.LeafBlot, t, e));
                                    var o = _([n, r].map((function(t) {
                                        if (0 === t.length) return {};
                                        for (var e = Object(d.c)(t.shift()); Object.keys(e).length > 0;) {
                                            var n = t.shift();
                                            if (null == n) return e;
                                            e = L(Object(d.c)(n), e)
                                        }
                                        return e
                                    })), 2);
                                    return n = o[0], r = o[1], g(g({}, n), r)
                                }
                            }, {
                                key: "getHTML",
                                value: function(t, e) {
                                    var n = _(this.scroll.line(t), 2),
                                        r = n[0],
                                        o = n[1];
                                    return r.length() >= o + e ? P(r, o, e, !0) : P(this.scroll, t, e, !0)
                                }
                            }, {
                                key: "getText",
                                value: function(t, e) {
                                    return this.getContents(t, e).filter((function(t) {
                                        return "string" == typeof t.insert
                                    })).map((function(t) {
                                        return t.insert
                                    })).join("")
                                }
                            }, {
                                key: "insertEmbed",
                                value: function(t, e, n) {
                                    return this.scroll.insertAt(t, e, n), this.update((new l.a).retain(t).insert(E({}, e, n)))
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach((function(o) {
                                        n.scroll.formatAt(t, e.length, o, r[o])
                                    })), this.update((new l.a).retain(t).insert(e, o()(r)))
                                }
                            }, {
                                key: "isBlank",
                                value: function() {
                                    if (0 === this.scroll.children.length) return !0;
                                    if (this.scroll.children.length > 1) return !1;
                                    var t = this.scroll.children.head;
                                    return t.statics.blotName === d.d.blotName && !(t.children.length > 1) && t.children.head instanceof v.a
                                }
                            }, {
                                key: "removeFormat",
                                value: function(t, e) {
                                    var n = this.getText(t, e),
                                        r = _(this.scroll.line(t + e), 2),
                                        o = r[0],
                                        i = r[1],
                                        s = 0,
                                        a = new l.a;
                                    null != o && (s = o.length() - i, a = o.delta().slice(i, i + s - 1).insert("\n"));
                                    var u = this.getContents(t, e + s).diff((new l.a).insert(n).concat(a)),
                                        c = (new l.a).retain(t).concat(u);
                                    return this.applyDelta(c)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                        r = this.delta;
                                    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(N) && this.scroll.find(e[0].target)) {
                                        var o = this.scroll.find(e[0].target),
                                            i = Object(d.c)(o),
                                            a = o.offset(this.scroll),
                                            u = e[0].oldValue.replace(p.a.CONTENTS, ""),
                                            c = (new l.a).insert(u),
                                            f = (new l.a).insert(o.value()),
                                            h = n && {
                                                oldRange: I(n.oldRange, -a),
                                                newRange: I(n.newRange, -a)
                                            };
                                        t = (new l.a).retain(a).concat(c.diff(f, h)).reduce((function(t, e) {
                                            return e.insert ? t.insert(e.insert, i) : t.push(e)
                                        }), new l.a), this.delta = r.compose(t)
                                    } else this.delta = this.getDelta(), t && s()(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
                                    return t
                                }
                            }], n && R(e.prototype, n), r && R(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }();

                    function C(t, e, n) {
                        if (0 === t.length) {
                            var r = _(j(n.pop()), 1)[0];
                            return e <= 0 ? "</li></".concat(r, ">") : "</li></".concat(r, ">").concat(C([], e - 1, n))
                        }
                        var o = m(t),
                            i = o[0],
                            s = i.child,
                            a = i.offset,
                            u = i.length,
                            c = i.indent,
                            l = i.type,
                            f = o.slice(1),
                            h = _(j(l), 2),
                            p = h[0],
                            d = h[1];
                        if (c > e) return n.push(l), c === e + 1 ? "<".concat(p, "><li").concat(d, ">").concat(P(s, a, u)).concat(C(f, c, n)) : "<".concat(p, "><li>").concat(C(t, e + 1, n));
                        var v = n[n.length - 1];
                        if (c === e && l === v) return "</li><li".concat(d, ">").concat(P(s, a, u)).concat(C(f, c, n));
                        var y = _(j(n.pop()), 1)[0];
                        return "</li></".concat(y, ">").concat(C(t, e - 1, n))
                    }

                    function P(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if ("function" == typeof t.html) return t.html(e, n);
                        if (t instanceof y.a) return Object(y.b)(t.value().slice(e, e + n));
                        if (t.children) {
                            if ("list-container" === t.statics.blotName) {
                                var o = [];
                                return t.children.forEachAt(e, n, (function(t, e, n) {
                                    var r = t.formats();
                                    o.push({
                                        child: t,
                                        offset: e,
                                        length: n,
                                        indent: r.indent || (r["list-level"] ? r["list-level"] - 1 : 0),
                                        type: r.list
                                    })
                                })), C(o, -1, [])
                            }
                            var i = [];
                            if (t.children.forEachAt(e, n, (function(t, e, n) {
                                    i.push(P(t, e, n))
                                })), r || "list" === t.statics.blotName) return i.join("");
                            var s = t.domNode,
                                a = s.outerHTML,
                                u = s.innerHTML,
                                c = _(a.split(">".concat(u, "<")), 2),
                                l = c[0],
                                f = c[1];
                            return "<table" === l ? '<table style="border: 1px solid #000;">'.concat(i.join(""), "<").concat(f) : "".concat(l, ">").concat(i.join(""), "<").concat(f)
                        }
                        return t.domNode.outerHTML
                    }

                    function L(t, e) {
                        return Object.keys(e).reduce((function(n, r) {
                            return null == t[r] || (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]]), n
                        }), {})
                    }

                    function j(t) {
                        var e = "ordered" === t ? "ol" : "ul";
                        switch (t) {
                            case "checked":
                                return [e, ' data-list="checked"'];
                            case "unchecked":
                                return [e, ' data-list="unchecked"'];
                            default:
                                return [e, ""]
                        }
                    }

                    function I(t, e) {
                        var n = t.index,
                            r = t.length;
                        return new h.a(n + e, r)
                    }
                    e.a = S
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return b
                    })), n.d(e, "b", (function() {
                        return g
                    }));
                    var r = n(2),
                        o = n(10),
                        i = n.n(o),
                        s = n(18),
                        a = n.n(s),
                        u = n(3),
                        c = n(11);

                    function l(t) {
                        return function(t) {
                            if (Array.isArray(t)) return p(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || h(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function f(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || h(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function h(t, e) {
                        if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                        }
                    }

                    function p(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function d(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function v(t, e, n) {
                        return e && d(t.prototype, e), n && d(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }

                    function y(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var m = Object(c.a)("quill:selection"),
                        b = v((function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            y(this, t), this.index = e, this.length = n
                        })),
                        g = function() {
                            function t(e, n) {
                                var r = this;
                                y(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new b(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (function() {
                                    r.mouseDown || setTimeout(r.update.bind(r, u.a.sources.USER), 1)
                                })), this.emitter.on(u.a.events.SCROLL_BEFORE_UPDATE, (function() {
                                    if (r.hasFocus()) {
                                        var t = r.getNativeRange();
                                        null != t && t.start.node !== r.cursor.textNode && r.emitter.once(u.a.events.SCROLL_UPDATE, (function() {
                                            try {
                                                r.root.contains(t.start.node) && r.root.contains(t.end.node) && r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset), r.update(u.a.sources.SILENT)
                                            } catch (e) {}
                                        }))
                                    }
                                })), this.emitter.on(u.a.events.SCROLL_OPTIMIZE, (function(t, e) {
                                    if (e.range) {
                                        var n = e.range,
                                            o = n.startNode,
                                            i = n.startOffset,
                                            s = n.endNode,
                                            a = n.endOffset;
                                        r.setNativeRange(o, i, s, a), r.update(u.a.sources.SILENT)
                                    }
                                })), this.update(u.a.sources.SILENT)
                            }
                            return v(t, [{
                                key: "handleComposition",
                                value: function() {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", (function() {
                                        t.composing = !0
                                    })), this.root.addEventListener("compositionend", (function() {
                                        if (t.composing = !1, t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e) return;
                                            setTimeout((function() {
                                                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                            }), 1)
                                        }
                                    }))
                                }
                            }, {
                                key: "handleDragging",
                                value: function() {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, (function() {
                                        t.mouseDown = !0
                                    })), this.emitter.listenDOM("mouseup", document.body, (function() {
                                        t.mouseDown = !1, t.update(u.a.sources.USER)
                                    }))
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    this.scroll.update();
                                    var n = this.getNativeRange();
                                    if (null != n && n.native.collapsed && !this.scroll.query(t, r.Scope.BLOCK)) {
                                        if (n.start.node !== this.cursor.textNode) {
                                            var o = this.scroll.find(n.start.node, !1);
                                            if (null == o) return;
                                            if (o instanceof r.LeafBlot) {
                                                var i = o.split(n.start.offset);
                                                o.parent.insertBefore(this.cursor, i)
                                            } else o.insertBefore(this.cursor, n.start.node);
                                            this.cursor.attach()
                                        }
                                        this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                                    }
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        r = this.scroll.length();
                                    t = Math.min(t, r - 1), n = Math.min(t + n, r - 1) - t;
                                    var o = f(this.scroll.leaf(t), 2),
                                        i = o[0],
                                        s = o[1];
                                    if (null == i) return null;
                                    var a = f(i.position(s, !0), 2);
                                    e = a[0], s = a[1];
                                    var u = document.createRange();
                                    if (n > 0) {
                                        u.setStart(e, s);
                                        var c = f(this.scroll.leaf(t + n), 2);
                                        if (i = c[0], s = c[1], null == i) return null;
                                        var l = f(i.position(s, !0), 2);
                                        return e = l[0], s = l[1], u.setEnd(e, s), u.getBoundingClientRect()
                                    }
                                    var h, p = "left";
                                    if (e instanceof Text) {
                                        if (!e.data.length) return null;
                                        s < e.data.length ? (u.setStart(e, s), u.setEnd(e, s + 1)) : (u.setStart(e, s - 1), u.setEnd(e, s), p = "right"), h = u.getBoundingClientRect()
                                    } else h = i.domNode.getBoundingClientRect(), s > 0 && (p = "right");
                                    return {
                                        bottom: h.top + h.height,
                                        height: h.height,
                                        left: h[p],
                                        right: h[p],
                                        top: h.top,
                                        width: 0
                                    }
                                }
                            }, {
                                key: "getNativeRange",
                                value: function() {
                                    var t, e = document.getSelection();
                                    if (null == e || e.rangeCount <= 0) return null;
                                    try {
                                        t = e.getRangeAt(0)
                                    } catch (r) {
                                        return null
                                    }
                                    if (null == t) return null;
                                    var n = this.normalizeNative(t);
                                    return m.info("getNativeRange", n), n
                                }
                            }, {
                                key: "getRange",
                                value: function() {
                                    var t = this.scroll.domNode;
                                    if ("isConnected" in t && !t.isConnected) return [null, null];
                                    var e = this.getNativeRange();
                                    return null == e ? [null, null] : [this.normalizedToRange(e), e]
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return document.activeElement === this.root || E(this.scroll, document.activeElement)
                                }
                            }, {
                                key: "normalizedToRange",
                                value: function(t) {
                                    var e = this,
                                        n = [
                                            [t.start.node, t.start.offset]
                                        ];
                                    t.native.collapsed || n.push([t.end.node, t.end.offset]);
                                    var o = n.map((function(t) {
                                            var n = f(t, 2),
                                                o = n[0],
                                                i = n[1],
                                                s = e.scroll.find(o, !0),
                                                a = s.offset(e.scroll);
                                            return 0 === i ? a : s instanceof r.ContainerBlot ? a + s.length() : a + s.index(o, i)
                                        })),
                                        i = Math.min(Math.max.apply(Math, l(o)), this.scroll.length() - 1),
                                        s = Math.min.apply(Math, [i].concat(l(o)));
                                    return new b(s, i - s)
                                }
                            }, {
                                key: "normalizeNative",
                                value: function(t) {
                                    if (!E(this.scroll, t.startContainer) || !t.collapsed && !E(this.scroll, t.endContainer)) return null;
                                    var e = {
                                        start: {
                                            node: t.startContainer,
                                            offset: t.startOffset
                                        },
                                        end: {
                                            node: t.endContainer,
                                            offset: t.endOffset
                                        },
                                        native: t
                                    };
                                    return [e.start, e.end].forEach((function(t) {
                                        for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                            if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                            else {
                                                if (e.childNodes.length !== n) break;
                                                n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length > 0 ? e.childNodes.length : e.childNodes.length + 1
                                            }
                                        t.node = e, t.offset = n
                                    })), e
                                }
                            }, {
                                key: "rangeToNative",
                                value: function(t) {
                                    var e = this,
                                        n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                        r = [],
                                        o = this.scroll.length();
                                    return n.forEach((function(t, n) {
                                        t = Math.min(o - 1, t);
                                        var i = f(e.scroll.leaf(t), 2),
                                            s = i[0],
                                            a = i[1],
                                            u = f(s.position(a, 0 !== n), 2),
                                            c = u[0],
                                            l = u[1];
                                        r.push(c, l)
                                    })), r.length < 2 ? r.concat(r) : r
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function(t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var n = this.getBounds(e.index, e.length);
                                        if (null != n) {
                                            var r = this.scroll.length() - 1,
                                                o = f(this.scroll.line(Math.min(e.index, r)), 1)[0],
                                                i = o;
                                            if (e.length > 0 && (i = f(this.scroll.line(Math.min(e.index + e.length, r)), 1)[0]), null != o && null != i) {
                                                var s = t.getBoundingClientRect();
                                                n.top < s.top ? t.scrollTop -= s.top - n.top : n.bottom > s.bottom && (t.scrollTop += n.bottom - s.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (m.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                                        var i = document.getSelection();
                                        if (null != i)
                                            if (null != t) {
                                                this.hasFocus() || this.root.focus();
                                                var s = (this.getNativeRange() || {}).native;
                                                if (null == s || o || t !== s.startContainer || e !== s.startOffset || n !== s.endContainer || r !== s.endOffset) {
                                                    "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), "BR" === n.tagName && (r = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
                                                    var a = document.createRange();
                                                    a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a)
                                                }
                                            } else i.removeAllRanges(), this.root.blur()
                                    }
                                }
                            }, {
                                key: "setRange",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.a.sources.API;
                                    if ("string" == typeof e && (n = e, e = !1), m.info("setRange", t), null != t) {
                                        var r = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, l(r).concat([e]))
                                    } else this.setNativeRange(null);
                                    this.update(n)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.sources.USER,
                                        e = this.lastRange,
                                        n = f(this.getRange(), 2),
                                        r = n[0],
                                        o = n[1];
                                    if (this.lastRange = r, this.lastNative = o, null != this.lastRange && (this.savedRange = this.lastRange), !a()(e, this.lastRange)) {
                                        var s;
                                        if (!this.composing && null != o && o.native.collapsed && o.start.node !== this.cursor.textNode) {
                                            var c = this.cursor.restore();
                                            c && this.setNativeRange(c.startNode, c.startOffset, c.endNode, c.endOffset)
                                        }
                                        var l, h = [u.a.events.SELECTION_CHANGE, i()(this.lastRange), i()(e), t];
                                        (s = this.emitter).emit.apply(s, [u.a.events.EDITOR_CHANGE].concat(h)), t !== u.a.sources.SILENT && (l = this.emitter).emit.apply(l, h)
                                    }
                                }
                            }]), t
                        }();

                    function E(t, e) {
                        try {
                            e.parentNode
                        } catch (r) {
                            return !1
                        }
                        if (!t.domNode.contains(e)) return !1;
                        var n = t.registry.find(e, !0);
                        return n && n.scroll === t
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, r(t)
                    }

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function i(t, e) {
                        return i = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, i(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, o = a(t);
                            if (e) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === r(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function a(t) {
                        return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, a(t)
                    }
                    n.d(e, "a", (function() {
                        return u
                    })), n.d(e, "b", (function() {
                        return c
                    }));
                    var u = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && i(t, e)
                        }(u, t);
                        var e, n, r, a = s(u);

                        function u() {
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, u), a.apply(this, arguments)
                        }
                        return e = u, n && o(e.prototype, n), r && o(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                    }(n(2).TextBlot);

                    function c(t) {
                        return t.replace(/[&<>"']/g, (function(t) {
                            return {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            }[t]
                        }))
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, r(t)
                    }

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function i(t, e) {
                        return i = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, i(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, o = a(t);
                            if (e) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === r(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function a(t) {
                        return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, a(t)
                    }
                    var u = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && i(t, e)
                        }(u, t);
                        var e, n, r, a = s(u);

                        function u() {
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, u), a.apply(this, arguments)
                        }
                        return e = u, r = [{
                            key: "value",
                            value: function() {}
                        }], (n = [{
                            key: "optimize",
                            value: function() {
                                (this.prev || this.next) && this.remove()
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return 0
                            }
                        }, {
                            key: "value",
                            value: function() {
                                return ""
                            }
                        }]) && o(e.prototype, n), r && o(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), u
                    }(n(2).EmbedBlot);
                    u.blotName = "break", u.tagName = "BR", e.a = u
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function o(t, e, n) {
                        return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }
                    var i = o((function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.quill = e, this.options = n
                    }));
                    i.DEFAULTS = {}, e.a = i
                }, function(t, e, n) {
                    (function(t, n) {
                        var r = "__lodash_hash_undefined__",
                            o = 9007199254740991,
                            i = "[object Arguments]",
                            s = "[object Boolean]",
                            a = "[object Date]",
                            u = "[object Function]",
                            c = "[object GeneratorFunction]",
                            l = "[object Map]",
                            f = "[object Number]",
                            h = "[object Object]",
                            p = "[object Promise]",
                            d = "[object RegExp]",
                            v = "[object Set]",
                            y = "[object String]",
                            m = "[object Symbol]",
                            b = "[object WeakMap]",
                            g = "[object ArrayBuffer]",
                            E = "[object DataView]",
                            w = "[object Float32Array]",
                            _ = "[object Float64Array]",
                            T = "[object Int8Array]",
                            A = "[object Int16Array]",
                            x = "[object Int32Array]",
                            O = "[object Uint8Array]",
                            R = "[object Uint8ClampedArray]",
                            N = "[object Uint16Array]",
                            S = "[object Uint32Array]",
                            C = /\w*$/,
                            P = /^\[object .+?Constructor\]$/,
                            L = /^(?:0|[1-9]\d*)$/,
                            j = {};
                        j[i] = j["[object Array]"] = j[g] = j[E] = j[s] = j[a] = j[w] = j[_] = j[T] = j[A] = j[x] = j[l] = j[f] = j[h] = j[d] = j[v] = j[y] = j[m] = j[O] = j[R] = j[N] = j[S] = !0, j["[object Error]"] = j[u] = j[b] = !1;
                        var I = "object" == typeof t && t && t.Object === Object && t,
                            k = "object" == typeof self && self && self.Object === Object && self,
                            B = I || k || Function("return this")(),
                            M = e && !e.nodeType && e,
                            D = M && "object" == typeof n && n && !n.nodeType && n,
                            F = D && D.exports === M;

                        function U(t, e) {
                            return t.set(e[0], e[1]), t
                        }

                        function H(t, e) {
                            return t.add(e), t
                        }

                        function G(t, e, n, r) {
                            var o = -1,
                                i = t ? t.length : 0;
                            for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);
                            return n
                        }

                        function V(t) {
                            var e = !1;
                            if (null != t && "function" != typeof t.toString) try {
                                e = !!(t + "")
                            } catch (n) {}
                            return e
                        }

                        function q(t) {
                            var e = -1,
                                n = Array(t.size);
                            return t.forEach((function(t, r) {
                                n[++e] = [r, t]
                            })), n
                        }

                        function z(t, e) {
                            return function(n) {
                                return t(e(n))
                            }
                        }

                        function X(t) {
                            var e = -1,
                                n = Array(t.size);
                            return t.forEach((function(t) {
                                n[++e] = t
                            })), n
                        }
                        var W, K = Array.prototype,
                            Y = Function.prototype,
                            $ = Object.prototype,
                            Z = B["__core-js_shared__"],
                            J = (W = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "",
                            Q = Y.toString,
                            tt = $.hasOwnProperty,
                            et = $.toString,
                            nt = RegExp("^" + Q.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            rt = F ? B.Buffer : void 0,
                            ot = B.Symbol,
                            it = B.Uint8Array,
                            st = z(Object.getPrototypeOf, Object),
                            at = Object.create,
                            ut = $.propertyIsEnumerable,
                            ct = K.splice,
                            lt = Object.getOwnPropertySymbols,
                            ft = rt ? rt.isBuffer : void 0,
                            ht = z(Object.keys, Object),
                            pt = Dt(B, "DataView"),
                            dt = Dt(B, "Map"),
                            vt = Dt(B, "Promise"),
                            yt = Dt(B, "Set"),
                            mt = Dt(B, "WeakMap"),
                            bt = Dt(Object, "create"),
                            gt = Vt(pt),
                            Et = Vt(dt),
                            wt = Vt(vt),
                            _t = Vt(yt),
                            Tt = Vt(mt),
                            At = ot ? ot.prototype : void 0,
                            xt = At ? At.valueOf : void 0;

                        function Ot(t) {
                            var e = -1,
                                n = t ? t.length : 0;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function Rt(t) {
                            var e = -1,
                                n = t ? t.length : 0;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function Nt(t) {
                            var e = -1,
                                n = t ? t.length : 0;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function St(t) {
                            this.__data__ = new Rt(t)
                        }

                        function Ct(t, e) {
                            var n = zt(t) || function(t) {
                                    return function(t) {
                                        return function(t) {
                                            return !!t && "object" == typeof t
                                        }(t) && Xt(t)
                                    }(t) && tt.call(t, "callee") && (!ut.call(t, "callee") || et.call(t) == i)
                                }(t) ? function(t, e) {
                                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                    return r
                                }(t.length, String) : [],
                                r = n.length,
                                o = !!r;
                            for (var s in t) !e && !tt.call(t, s) || o && ("length" == s || Ht(s, r)) || n.push(s);
                            return n
                        }

                        function Pt(t, e, n) {
                            var r = t[e];
                            tt.call(t, e) && qt(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                        }

                        function Lt(t, e) {
                            for (var n = t.length; n--;)
                                if (qt(t[n][0], e)) return n;
                            return -1
                        }

                        function jt(t, e, n, r, o, p, b) {
                            var P;
                            if (r && (P = p ? r(t, o, p, b) : r(t)), void 0 !== P) return P;
                            if (!Yt(t)) return t;
                            var L = zt(t);
                            if (L) {
                                if (P = function(t) {
                                        var e = t.length,
                                            n = t.constructor(e);
                                        return e && "string" == typeof t[0] && tt.call(t, "index") && (n.index = t.index, n.input = t.input), n
                                    }(t), !e) return function(t, e) {
                                    var n = -1,
                                        r = t.length;
                                    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                                    return e
                                }(t, P)
                            } else {
                                var I = Ut(t),
                                    k = I == u || I == c;
                                if (Wt(t)) return function(t, e) {
                                    if (e) return t.slice();
                                    var n = new t.constructor(t.length);
                                    return t.copy(n), n
                                }(t, e);
                                if (I == h || I == i || k && !p) {
                                    if (V(t)) return p ? t : {};
                                    if (P = function(t) {
                                            return "function" != typeof t.constructor || Gt(t) ? {} : Yt(e = st(t)) ? at(e) : {};
                                            var e
                                        }(k ? {} : t), !e) return function(t, e) {
                                        return Bt(t, Ft(t), e)
                                    }(t, function(t, e) {
                                        return t && Bt(e, $t(e), t)
                                    }(P, t))
                                } else {
                                    if (!j[I]) return p ? t : {};
                                    P = function(t, e, n, r) {
                                        var o, i = t.constructor;
                                        switch (e) {
                                            case g:
                                                return kt(t);
                                            case s:
                                            case a:
                                                return new i(+t);
                                            case E:
                                                return function(t, e) {
                                                    var n = e ? kt(t.buffer) : t.buffer;
                                                    return new t.constructor(n, t.byteOffset, t.byteLength)
                                                }(t, r);
                                            case w:
                                            case _:
                                            case T:
                                            case A:
                                            case x:
                                            case O:
                                            case R:
                                            case N:
                                            case S:
                                                return function(t, e) {
                                                    var n = e ? kt(t.buffer) : t.buffer;
                                                    return new t.constructor(n, t.byteOffset, t.length)
                                                }(t, r);
                                            case l:
                                                return function(t, e, n) {
                                                    var r = e ? n(q(t), !0) : q(t);
                                                    return G(r, U, new t.constructor)
                                                }(t, r, n);
                                            case f:
                                            case y:
                                                return new i(t);
                                            case d:
                                                return function(t) {
                                                    var e = new t.constructor(t.source, C.exec(t));
                                                    return e.lastIndex = t.lastIndex, e
                                                }(t);
                                            case v:
                                                return function(t, e, n) {
                                                    var r = e ? n(X(t), !0) : X(t);
                                                    return G(r, H, new t.constructor)
                                                }(t, r, n);
                                            case m:
                                                return o = t, xt ? Object(xt.call(o)) : {}
                                        }
                                    }(t, I, jt, e)
                                }
                            }
                            b || (b = new St);
                            var B = b.get(t);
                            if (B) return B;
                            if (b.set(t, P), !L) var M = n ? function(t) {
                                return function(t, e, n) {
                                    var r = e(t);
                                    return zt(t) ? r : function(t, e) {
                                        for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                                        return t
                                    }(r, n(t))
                                }(t, $t, Ft)
                            }(t) : $t(t);
                            return function(t, e) {
                                for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t););
                            }(M || t, (function(o, i) {
                                M && (o = t[i = o]), Pt(P, i, jt(o, e, n, r, i, t, b))
                            })), P
                        }

                        function It(t) {
                            return !(!Yt(t) || (e = t, J && J in e)) && (Kt(t) || V(t) ? nt : P).test(Vt(t));
                            var e
                        }

                        function kt(t) {
                            var e = new t.constructor(t.byteLength);
                            return new it(e).set(new it(t)), e
                        }

                        function Bt(t, e, n, r) {
                            n || (n = {});
                            for (var o = -1, i = e.length; ++o < i;) {
                                var s = e[o],
                                    a = r ? r(n[s], t[s], s, n, t) : void 0;
                                Pt(n, s, void 0 === a ? t[s] : a)
                            }
                            return n
                        }

                        function Mt(t, e) {
                            var n, r, o = t.__data__;
                            return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map
                        }

                        function Dt(t, e) {
                            var n = function(t, e) {
                                return null == t ? void 0 : t[e]
                            }(t, e);
                            return It(n) ? n : void 0
                        }
                        Ot.prototype.clear = function() {
                            this.__data__ = bt ? bt(null) : {}
                        }, Ot.prototype.delete = function(t) {
                            return this.has(t) && delete this.__data__[t]
                        }, Ot.prototype.get = function(t) {
                            var e = this.__data__;
                            if (bt) {
                                var n = e[t];
                                return n === r ? void 0 : n
                            }
                            return tt.call(e, t) ? e[t] : void 0
                        }, Ot.prototype.has = function(t) {
                            var e = this.__data__;
                            return bt ? void 0 !== e[t] : tt.call(e, t)
                        }, Ot.prototype.set = function(t, e) {
                            return this.__data__[t] = bt && void 0 === e ? r : e, this
                        }, Rt.prototype.clear = function() {
                            this.__data__ = []
                        }, Rt.prototype.delete = function(t) {
                            var e = this.__data__,
                                n = Lt(e, t);
                            return !(n < 0 || (n == e.length - 1 ? e.pop() : ct.call(e, n, 1), 0))
                        }, Rt.prototype.get = function(t) {
                            var e = this.__data__,
                                n = Lt(e, t);
                            return n < 0 ? void 0 : e[n][1]
                        }, Rt.prototype.has = function(t) {
                            return Lt(this.__data__, t) > -1
                        }, Rt.prototype.set = function(t, e) {
                            var n = this.__data__,
                                r = Lt(n, t);
                            return r < 0 ? n.push([t, e]) : n[r][1] = e, this
                        }, Nt.prototype.clear = function() {
                            this.__data__ = {
                                hash: new Ot,
                                map: new(dt || Rt),
                                string: new Ot
                            }
                        }, Nt.prototype.delete = function(t) {
                            return Mt(this, t).delete(t)
                        }, Nt.prototype.get = function(t) {
                            return Mt(this, t).get(t)
                        }, Nt.prototype.has = function(t) {
                            return Mt(this, t).has(t)
                        }, Nt.prototype.set = function(t, e) {
                            return Mt(this, t).set(t, e), this
                        }, St.prototype.clear = function() {
                            this.__data__ = new Rt
                        }, St.prototype.delete = function(t) {
                            return this.__data__.delete(t)
                        }, St.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, St.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, St.prototype.set = function(t, e) {
                            var n = this.__data__;
                            if (n instanceof Rt) {
                                var r = n.__data__;
                                if (!dt || r.length < 199) return r.push([t, e]), this;
                                n = this.__data__ = new Nt(r)
                            }
                            return n.set(t, e), this
                        };
                        var Ft = lt ? z(lt, Object) : function() {
                                return []
                            },
                            Ut = function(t) {
                                return et.call(t)
                            };

                        function Ht(t, e) {
                            return !!(e = null == e ? o : e) && ("number" == typeof t || L.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function Gt(t) {
                            var e = t && t.constructor;
                            return t === ("function" == typeof e && e.prototype || $)
                        }

                        function Vt(t) {
                            if (null != t) {
                                try {
                                    return Q.call(t)
                                } catch (e) {}
                                try {
                                    return t + ""
                                } catch (e) {}
                            }
                            return ""
                        }

                        function qt(t, e) {
                            return t === e || t != t && e != e
                        }(pt && Ut(new pt(new ArrayBuffer(1))) != E || dt && Ut(new dt) != l || vt && Ut(vt.resolve()) != p || yt && Ut(new yt) != v || mt && Ut(new mt) != b) && (Ut = function(t) {
                            var e = et.call(t),
                                n = e == h ? t.constructor : void 0,
                                r = n ? Vt(n) : void 0;
                            if (r) switch (r) {
                                case gt:
                                    return E;
                                case Et:
                                    return l;
                                case wt:
                                    return p;
                                case _t:
                                    return v;
                                case Tt:
                                    return b
                            }
                            return e
                        });
                        var zt = Array.isArray;

                        function Xt(t) {
                            return null != t && function(t) {
                                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
                            }(t.length) && !Kt(t)
                        }
                        var Wt = ft || function() {
                            return !1
                        };

                        function Kt(t) {
                            var e = Yt(t) ? et.call(t) : "";
                            return e == u || e == c
                        }

                        function Yt(t) {
                            var e = typeof t;
                            return !!t && ("object" == e || "function" == e)
                        }

                        function $t(t) {
                            return Xt(t) ? Ct(t) : function(t) {
                                if (!Gt(t)) return ht(t);
                                var e = [];
                                for (var n in Object(t)) tt.call(t, n) && "constructor" != n && e.push(n);
                                return e
                            }(t)
                        }
                        n.exports = function(t) {
                            return jt(t, !0, !0)
                        }
                    }).call(this, n(39), n(40)(t))
                }, function(t, e, n) {
                    "use strict";
                    var r = ["error", "warn", "log", "info"],
                        o = "warn";

                    function i(t) {
                        if (r.indexOf(t) <= r.indexOf(o)) {
                            for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
                            (e = console)[t].apply(e, i)
                        }
                    }

                    function s(t) {
                        return r.reduce((function(e, n) {
                            return e[n] = i.bind(console, n, t), e
                        }), {})
                    }
                    s.level = function(t) {
                        o = t
                    }, i.level = s.level, e.a = s
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(8),
                        i = n(7);

                    function s(t) {
                        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, s(t)
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u() {
                        return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, u.apply(this, arguments)
                    }

                    function c(t, e) {
                        return c = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, c(t, e)
                    }

                    function l(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === s(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function f(t) {
                        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, f(t)
                    }
                    var h = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && c(t, e)
                        }(s, t);
                        var e, n, o, i = l(s);

                        function s() {
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, s), i.apply(this, arguments)
                        }
                        return e = s, o = [{
                            key: "compare",
                            value: function(t, e) {
                                var n = s.order.indexOf(t),
                                    r = s.order.indexOf(e);
                                return n >= 0 || r >= 0 ? n - r : t === e ? 0 : t < e ? -1 : 1
                            }
                        }], (n = [{
                            key: "formatAt",
                            value: function(t, e, n, o) {
                                if (s.compare(this.statics.blotName, n) < 0 && this.scroll.query(n, r.Scope.BLOT)) {
                                    var i = this.isolate(t, e);
                                    o && i.wrap(n, o)
                                } else u(f(s.prototype), "formatAt", this).call(this, t, e, n, o)
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                if (u(f(s.prototype), "optimize", this).call(this, t), this.parent instanceof s && s.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                    var e = this.parent.isolate(this.offset(), this.length());
                                    this.moveChildren(e), e.wrap(this)
                                }
                            }
                        }]) && a(e.prototype, n), o && a(e, o), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), s
                    }(r.InlineBlot);
                    h.allowedChildren = [h, o.a, r.EmbedBlot, i.a], h.order = ["cursor", "inline", "link", "underline", "strike", "italic", "bold", "script", "code"], e.a = h
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return w
                    })), n.d(e, "b", (function() {
                        return g
                    })), n.d(e, "c", (function() {
                        return E
                    }));
                    var r = n(4),
                        o = n(8),
                        i = n(16),
                        s = n(12),
                        a = n(7),
                        u = n(15),
                        c = n(0);

                    function l(t) {
                        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, l(t)
                    }

                    function f(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function h(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function p(t, e, n) {
                        return e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }

                    function d() {
                        return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = b(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, d.apply(this, arguments)
                    }

                    function v(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && y(t, e)
                    }

                    function y(t, e) {
                        return y = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, y(t, e)
                    }

                    function m(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = b(t);
                            if (e) {
                                var o = b(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === l(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function b(t) {
                        return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, b(t)
                    }
                    var g = function(t) {
                            v(n, t);
                            var e = m(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return p(n, [{
                                key: "code",
                                value: function(t, e) {
                                    return this.children.map((function(t) {
                                        return t.length() <= 1 ? "" : t.domNode.innerText
                                    })).join("\n").slice(t, t + e)
                                }
                            }, {
                                key: "html",
                                value: function(t, e) {
                                    return "<pre>\n".concat(Object(a.b)(this.code(t, e)), "\n</pre>")
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var e = d(b(n), "create", this).call(this, t);
                                    return e.setAttribute("spellcheck", !1), e
                                }
                            }]), n
                        }(u.a),
                        E = function(t) {
                            v(n, t);
                            var e = m(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return p(n, null, [{
                                key: "register",
                                value: function() {
                                    c.a.register(g)
                                }
                            }]), n
                        }(r.d),
                        w = function(t) {
                            v(n, t);
                            var e = m(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return p(n)
                        }(s.a);
                    w.blotName = "code", w.tagName = "CODE", E.blotName = "code-block", E.className = "ql-code-block", E.tagName = "DIV", g.blotName = "code-block-container", g.className = "ql-code-block-container", g.tagName = "DIV", g.allowedChildren = [E], E.allowedChildren = [a.a, o.a, i.a], E.requiredContainer = g, E.TAB = "  "
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(3),
                        i = n(4),
                        s = n(8),
                        a = n(15),
                        u = n(32);

                    function c(t) {
                        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, c(t)
                    }

                    function l(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return f(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function f(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function h(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function p() {
                        return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = y(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, p.apply(this, arguments)
                    }

                    function d(t, e) {
                        return d = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, d(t, e)
                    }

                    function v(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = y(t);
                            if (e) {
                                var o = y(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === c(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function y(t) {
                        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, y(t)
                    }

                    function m(t) {
                        return t instanceof i.d || t instanceof i.a
                    }
                    var b = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && d(t, e)
                        }(f, t);
                        var e, n, a, c = v(f);

                        function f(t, e, n) {
                            var r, o = n.emitter;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, f), (r = c.call(this, t, e)).defaultUpdateAttributes = void 0, r.emitter = o, r.optimize(), r.enable(), r.domNode.addEventListener("dragstart", (function(t) {
                                return r.handleDragStart(t)
                            })), r
                        }
                        return e = f, n = [{
                            key: "batchStart",
                            value: function() {
                                this.batch = !0
                            }
                        }, {
                            key: "batchEnd",
                            value: function() {
                                this.batch = !1, this.optimize()
                            }
                        }, {
                            key: "emitMount",
                            value: function(t) {
                                this.emitter.emit(o.a.events.SCROLL_BLOT_MOUNT, t)
                            }
                        }, {
                            key: "emitUnmount",
                            value: function(t) {
                                this.emitter.emit(o.a.events.SCROLL_BLOT_UNMOUNT, t)
                            }
                        }, {
                            key: "deleteAt",
                            value: function(t, e) {
                                var n = l(this.line(t), 2),
                                    r = n[0],
                                    o = n[1],
                                    a = l(this.line(t + e), 1)[0];
                                if (p(y(f.prototype), "deleteAt", this).call(this, t, e), null != a && r !== a && o > 0) {
                                    if (r instanceof i.a || a instanceof i.a) return void this.optimize();
                                    var u = a.children.head instanceof s.a ? null : a.children.head;
                                    r.moveChildren(a, u), r.remove()
                                }
                                this.optimize()
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.domNode.setAttribute("contenteditable", t)
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, n, r) {
                                p(y(f.prototype), "formatAt", this).call(this, t, e, n, r), this.optimize()
                            }
                        }, {
                            key: "handleDragStart",
                            value: function(t) {
                                t.preventDefault()
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, n) {
                                if (t >= this.length())
                                    if (null == n || null == this.scroll.query(e, r.Scope.BLOCK)) {
                                        var o = this.scroll.create(this.statics.defaultChild.blotName);
                                        this.appendChild(o), null == n && e.endsWith("\n") ? o.insertAt(0, e.slice(0, -1), n) : o.insertAt(0, e, n)
                                    } else {
                                        var i = this.scroll.create(e, n);
                                        this.appendChild(i)
                                    }
                                else p(y(f.prototype), "insertAt", this).call(this, t, e, n);
                                this.optimize()
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, e) {
                                if (t.statics.scope === r.Scope.INLINE_BLOT) {
                                    var n = this.scroll.create(this.statics.defaultChild.blotName);
                                    if (n.appendChild(t), p(y(f.prototype), "insertBefore", this).call(this, n, e), null == this.defaultUpdateAttributes) return;
                                    var o = this.defaultUpdateAttributes,
                                        i = o.paraAttributes,
                                        s = o.charAttributes,
                                        a = t.domNode;
                                    a.nodeType === Node.TEXT_NODE && Object.entries(s).forEach((function(t) {
                                        var e = l(t, 2),
                                            r = e[0],
                                            o = e[1];
                                        return n.formatAt(0, a.length, r, o)
                                    })), Object.entries(i).forEach((function(t) {
                                        var e = l(t, 2),
                                            r = e[0],
                                            o = e[1];
                                        return n.format(r, o)
                                    }))
                                } else p(y(f.prototype), "insertBefore", this).call(this, t, e)
                            }
                        }, {
                            key: "isEnabled",
                            value: function() {
                                return "true" === this.domNode.getAttribute("contenteditable")
                            }
                        }, {
                            key: "leaf",
                            value: function(t) {
                                var e = this.path(t).pop();
                                return e && e[0] instanceof r.LeafBlot ? e : [null, -1]
                            }
                        }, {
                            key: "line",
                            value: function(t) {
                                return t === this.length() ? this.line(t - 1) : this.descendant(m, t)
                            }
                        }, {
                            key: "lines",
                            value: function() {
                                return function t(e, n, o) {
                                    var i = [],
                                        s = o;
                                    return e.children.forEachAt(n, o, (function(e, n, o) {
                                        m(e) ? i.push(e) : e instanceof r.ContainerBlot && (i = i.concat(t(e, n, s))), s -= o
                                    })), i
                                }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE)
                            }
                        }, {
                            key: "optimize",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                !0 !== this.batch && (p(y(f.prototype), "optimize", this).call(this, t, e), t.length > 0 && this.emitter.emit(o.a.events.SCROLL_OPTIMIZE, t, e))
                            }
                        }, {
                            key: "path",
                            value: function(t) {
                                return p(y(f.prototype), "path", this).call(this, t).slice(1)
                            }
                        }, {
                            key: "remove",
                            value: function() {}
                        }, {
                            key: "update",
                            value: function(t) {
                                var e = this;
                                if (!0 !== this.batch) {
                                    var n = o.a.sources.USER;
                                    if ("string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((function(t) {
                                            var n = t.target,
                                                r = e.find(n, !0);
                                            return r && r.scroll === e
                                        })), 1 === t.length && "childList" === t[0].type && 1 === t[0].removedNodes.length && t[0].removedNodes[0].tagName === u.b.tagName && 0 === t[0].target.childElementCount) {
                                        var r = t[0],
                                            s = this.registry.find(r.target);
                                        if (s instanceof u.a) {
                                            var a = r.removedNodes[0].cloneNode(!1),
                                                c = this.scroll.create(a);
                                            return s.appendChild(c), void s.deleteAt(0, c.length())
                                        }
                                    }
                                    t.length > 0 && this.emitter.emit(o.a.events.SCROLL_BEFORE_UPDATE, n, t);
                                    var l, h = 0 === this.domNode.childElementCount,
                                        d = 1 === this.domNode.childElementCount && "BR" === this.domNode.firstElementChild.tagName;
                                    if ((h || d) && (l = t.find((function(t) {
                                            return "childList" === t.type && t.target === e.domNode && t.removedNodes.length > 0
                                        }))), l) {
                                        var v, m = l.removedNodes[0],
                                            b = this.registry.find(m);
                                        b && (b instanceof i.d ? v = b.delta() : b.children && b.children.head instanceof i.d && (v = b.children.head.delta()), v && v.eachLine((function(t, n) {
                                            var r = t.ops.length > 0 && t.ops[0].attributes || {};
                                            return e.defaultUpdateAttributes = {
                                                charAttributes: r,
                                                paraAttributes: n
                                            }, !1
                                        })))
                                    }
                                    p(y(f.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(o.a.events.SCROLL_UPDATE, n, t, d && this.defaultUpdateAttributes ? this.defaultUpdateAttributes.charAttributes : null), this.defaultUpdateAttributes && (this.defaultUpdateAttributes = void 0)
                                }
                            }
                        }], n && h(e.prototype, n), a && h(e, a), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), f
                    }(r.ScrollBlot);
                    b.blotName = "scroll", b.className = "ql-editor", b.tagName = "DIV", b.defaultChild = i.d, b.allowedChildren = [i.d, i.a, a.a], e.a = b
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, r(t)
                    }

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function i(t, e) {
                        return i = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, i(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, o = a(t);
                            if (e) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === r(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function a(t) {
                        return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, a(t)
                    }
                    var u = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && i(t, e)
                        }(u, t);
                        var e, n, r, a = s(u);

                        function u() {
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, u), a.apply(this, arguments)
                        }
                        return e = u, n && o(e.prototype, n), r && o(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                    }(n(2).ContainerBlot);
                    e.a = u
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(7);

                    function i(t) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, i(t)
                    }

                    function s(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function a() {
                        return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, a.apply(this, arguments)
                    }

                    function u(t, e) {
                        return u = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, u(t, e)
                    }

                    function c(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = l(t);
                            if (e) {
                                var o = l(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function l(t) {
                        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, l(t)
                    }
                    var f = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && u(t, e)
                        }(h, t);
                        var e, n, i, f = c(h);

                        function h(t, e, n) {
                            var r;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, h), (r = f.call(this, t, e)).selection = n, r.textNode = document.createTextNode(h.CONTENTS), r.domNode.appendChild(r.textNode), r.savedLength = 0, r
                        }
                        return e = h, i = [{
                            key: "value",
                            value: function() {}
                        }], (n = [{
                            key: "detach",
                            value: function() {
                                null != this.parent && this.parent.removeChild(this)
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                if (0 === this.savedLength) {
                                    for (var n = this, o = 0; null != n && n.statics.scope !== r.Scope.BLOCK_BLOT;) o += n.offset(n.parent), n = n.parent;
                                    null != n && (this.savedLength = h.CONTENTS.length, n.optimize(), n.formatAt(o, h.CONTENTS.length, t, e), this.savedLength = 0)
                                } else a(l(h.prototype), "format", this).call(this, t, e)
                            }
                        }, {
                            key: "index",
                            value: function(t, e) {
                                return t === this.textNode ? 0 : a(l(h.prototype), "index", this).call(this, t, e)
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return this.savedLength
                            }
                        }, {
                            key: "position",
                            value: function() {
                                return [this.textNode, this.textNode.data.length]
                            }
                        }, {
                            key: "remove",
                            value: function() {
                                a(l(h.prototype), "remove", this).call(this), this.parent = null
                            }
                        }, {
                            key: "restore",
                            value: function() {
                                if (this.selection.composing || null == this.parent) return null;
                                for (var t = this.selection.getNativeRange(); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                var e, n = this.prev instanceof o.a ? this.prev : null,
                                    r = n ? n.length() : 0,
                                    i = this.next instanceof o.a ? this.next : null,
                                    s = i ? i.text : "",
                                    a = this.textNode,
                                    u = a.data.split(h.CONTENTS).join("");
                                a.data = h.CONTENTS;
                                var c = !1;
                                if (n) e = n, (u || i) && (n.insertAt(n.length(), u + s), i && i.remove());
                                else if (i) e = i, i.insertAt(0, u);
                                else {
                                    var l = document.createTextNode(u);
                                    e = this.scroll.create(l), this.parent.insertBefore(e, this), c = !0
                                }
                                if (this.remove(), t) {
                                    var f = function(t, e) {
                                            return n && t === n.domNode ? e : t === a ? r + e - 1 : i && t === i.domNode ? r + u.length + e : null
                                        },
                                        p = f(t.start.node, t.start.offset),
                                        d = f(t.end.node, t.end.offset);
                                    if (c && p === d && 0 === p && t.start.node === t.end.node && t.start.node === a && (d = p = e.domNode.data.length), null !== p && null !== d) return {
                                        startNode: e.domNode,
                                        startOffset: p,
                                        endNode: e.domNode,
                                        endOffset: d
                                    }
                                }
                                return null
                            }
                        }, {
                            key: "update",
                            value: function(t, e) {
                                var n = this,
                                    r = !1;
                                if (t.forEach((function(t) {
                                        t.target === n.textNode && "characterData" === t.type ? r = !0 : t.target === n.domNode && "childList" === t.type && t.addedNodes.forEach((function(t) {
                                            t.nodeType === Node.ELEMENT_NODE && "BR" === t.tagName && n.domNode.removeChild(t)
                                        }))
                                    })), r) {
                                    var o = this.restore();
                                    o && (e.range = o)
                                }
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                a(l(h.prototype), "optimize", this).call(this, t);
                                for (var e = this.parent; e;) {
                                    if ("A" === e.domNode.tagName) {
                                        this.savedLength = h.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
                                        break
                                    }
                                    e = e.parent
                                }
                            }
                        }, {
                            key: "value",
                            value: function() {
                                return ""
                            }
                        }]) && s(e.prototype, n), i && s(e, i), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), h
                    }(r.EmbedBlot);
                    f.blotName = "cursor", f.className = "ql-cursor", f.tagName = "span", f.CONTENTS = "\ufeff", e.a = f
                }, function(t, e, n) {
                    (function(t, n) {
                        var r = "__lodash_hash_undefined__",
                            o = 9007199254740991,
                            i = "[object Arguments]",
                            s = "[object AsyncFunction]",
                            a = "[object Function]",
                            u = "[object GeneratorFunction]",
                            c = "[object Null]",
                            l = "[object Object]",
                            f = "[object Proxy]",
                            h = "[object Undefined]",
                            p = /^\[object .+?Constructor\]$/,
                            d = /^(?:0|[1-9]\d*)$/,
                            v = {};
                        v["[object Float32Array]"] = v["[object Float64Array]"] = v["[object Int8Array]"] = v["[object Int16Array]"] = v["[object Int32Array]"] = v["[object Uint8Array]"] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v["[object Uint32Array]"] = !0, v[i] = v["[object Array]"] = v["[object ArrayBuffer]"] = v["[object Boolean]"] = v["[object DataView]"] = v["[object Date]"] = v["[object Error]"] = v[a] = v["[object Map]"] = v["[object Number]"] = v[l] = v["[object RegExp]"] = v["[object Set]"] = v["[object String]"] = v["[object WeakMap]"] = !1;
                        var y, m, b, g = "object" == typeof t && t && t.Object === Object && t,
                            E = "object" == typeof self && self && self.Object === Object && self,
                            w = g || E || Function("return this")(),
                            _ = e && !e.nodeType && e,
                            T = _ && "object" == typeof n && n && !n.nodeType && n,
                            A = T && T.exports === _,
                            x = A && g.process,
                            O = function() {
                                try {
                                    var t = T && T.require && T.require("util").types;
                                    return t || x && x.binding && x.binding("util")
                                } catch (e) {}
                            }(),
                            R = O && O.isTypedArray,
                            N = Array.prototype,
                            S = Function.prototype,
                            C = Object.prototype,
                            P = w["__core-js_shared__"],
                            L = S.toString,
                            j = C.hasOwnProperty,
                            I = (y = /[^.]+$/.exec(P && P.keys && P.keys.IE_PROTO || "")) ? "Symbol(src)_1." + y : "",
                            k = C.toString,
                            B = L.call(Object),
                            M = RegExp("^" + L.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            D = A ? w.Buffer : void 0,
                            F = w.Symbol,
                            U = w.Uint8Array,
                            H = D ? D.allocUnsafe : void 0,
                            G = (m = Object.getPrototypeOf, b = Object, function(t) {
                                return m(b(t))
                            }),
                            V = Object.create,
                            q = C.propertyIsEnumerable,
                            z = N.splice,
                            X = F ? F.toStringTag : void 0,
                            W = function() {
                                try {
                                    var t = gt(Object, "defineProperty");
                                    return t({}, "", {}), t
                                } catch (e) {}
                            }(),
                            K = D ? D.isBuffer : void 0,
                            Y = Math.max,
                            $ = Date.now,
                            Z = gt(w, "Map"),
                            J = gt(Object, "create"),
                            Q = function() {
                                function t() {}
                                return function(e) {
                                    if (!Pt(e)) return {};
                                    if (V) return V(e);
                                    t.prototype = e;
                                    var n = new t;
                                    return t.prototype = void 0, n
                                }
                            }();

                        function tt(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function et(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function nt(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function rt(t) {
                            var e = this.__data__ = new et(t);
                            this.size = e.size
                        }

                        function ot(t, e) {
                            var n = Ot(t),
                                r = !n && xt(t),
                                o = !n && !r && Nt(t),
                                i = !n && !r && !o && jt(t),
                                s = n || r || o || i,
                                a = s ? function(t, e) {
                                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                    return r
                                }(t.length, String) : [],
                                u = a.length;
                            for (var c in t) !e && !j.call(t, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Et(c, u)) || a.push(c);
                            return a
                        }

                        function it(t, e, n) {
                            (void 0 !== n && !At(t[e], n) || void 0 === n && !(e in t)) && ut(t, e, n)
                        }

                        function st(t, e, n) {
                            var r = t[e];
                            j.call(t, e) && At(r, n) && (void 0 !== n || e in t) || ut(t, e, n)
                        }

                        function at(t, e) {
                            for (var n = t.length; n--;)
                                if (At(t[n][0], e)) return n;
                            return -1
                        }

                        function ut(t, e, n) {
                            "__proto__" == e && W ? W(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: n,
                                writable: !0
                            }) : t[e] = n
                        }
                        tt.prototype.clear = function() {
                            this.__data__ = J ? J(null) : {}, this.size = 0
                        }, tt.prototype.delete = function(t) {
                            var e = this.has(t) && delete this.__data__[t];
                            return this.size -= e ? 1 : 0, e
                        }, tt.prototype.get = function(t) {
                            var e = this.__data__;
                            if (J) {
                                var n = e[t];
                                return n === r ? void 0 : n
                            }
                            return j.call(e, t) ? e[t] : void 0
                        }, tt.prototype.has = function(t) {
                            var e = this.__data__;
                            return J ? void 0 !== e[t] : j.call(e, t)
                        }, tt.prototype.set = function(t, e) {
                            var n = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, n[t] = J && void 0 === e ? r : e, this
                        }, et.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, et.prototype.delete = function(t) {
                            var e = this.__data__,
                                n = at(e, t);
                            return !(n < 0 || (n == e.length - 1 ? e.pop() : z.call(e, n, 1), --this.size, 0))
                        }, et.prototype.get = function(t) {
                            var e = this.__data__,
                                n = at(e, t);
                            return n < 0 ? void 0 : e[n][1]
                        }, et.prototype.has = function(t) {
                            return at(this.__data__, t) > -1
                        }, et.prototype.set = function(t, e) {
                            var n = this.__data__,
                                r = at(n, t);
                            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                        }, nt.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new tt,
                                map: new(Z || et),
                                string: new tt
                            }
                        }, nt.prototype.delete = function(t) {
                            var e = bt(this, t).delete(t);
                            return this.size -= e ? 1 : 0, e
                        }, nt.prototype.get = function(t) {
                            return bt(this, t).get(t)
                        }, nt.prototype.has = function(t) {
                            return bt(this, t).has(t)
                        }, nt.prototype.set = function(t, e) {
                            var n = bt(this, t),
                                r = n.size;
                            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                        }, rt.prototype.clear = function() {
                            this.__data__ = new et, this.size = 0
                        }, rt.prototype.delete = function(t) {
                            var e = this.__data__,
                                n = e.delete(t);
                            return this.size = e.size, n
                        }, rt.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, rt.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, rt.prototype.set = function(t, e) {
                            var n = this.__data__;
                            if (n instanceof et) {
                                var r = n.__data__;
                                if (!Z || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                                n = this.__data__ = new nt(r)
                            }
                            return n.set(t, e), this.size = n.size, this
                        };
                        var ct, lt = function(t, e, n) {
                            for (var r = -1, o = Object(t), i = n(t), s = i.length; s--;) {
                                var a = i[ct ? s : ++r];
                                if (!1 === e(o[a], a, o)) break
                            }
                            return t
                        };

                        function ft(t) {
                            return null == t ? void 0 === t ? h : c : X && X in Object(t) ? function(t) {
                                var e = j.call(t, X),
                                    n = t[X];
                                try {
                                    t[X] = void 0;
                                    var r = !0
                                } catch (i) {}
                                var o = k.call(t);
                                return r && (e ? t[X] = n : delete t[X]), o
                            }(t) : function(t) {
                                return k.call(t)
                            }(t)
                        }

                        function ht(t) {
                            return Lt(t) && ft(t) == i
                        }

                        function pt(t) {
                            return !(!Pt(t) || function(t) {
                                return !!I && I in t
                            }(t)) && (St(t) ? M : p).test(function(t) {
                                if (null != t) {
                                    try {
                                        return L.call(t)
                                    } catch (e) {}
                                    try {
                                        return t + ""
                                    } catch (e) {}
                                }
                                return ""
                            }(t))
                        }

                        function dt(t) {
                            if (!Pt(t)) return function(t) {
                                var e = [];
                                if (null != t)
                                    for (var n in Object(t)) e.push(n);
                                return e
                            }(t);
                            var e = wt(t),
                                n = [];
                            for (var r in t)("constructor" != r || !e && j.call(t, r)) && n.push(r);
                            return n
                        }

                        function vt(t, e, n, r, o) {
                            t !== e && lt(e, (function(i, s) {
                                if (o || (o = new rt), Pt(i)) ! function(t, e, n, r, o, i, s) {
                                    var a = _t(t, n),
                                        u = _t(e, n),
                                        c = s.get(u);
                                    if (c) it(t, n, c);
                                    else {
                                        var f, h, p, d, v, y = i ? i(a, u, n + "", t, e, s) : void 0,
                                            m = void 0 === y;
                                        if (m) {
                                            var b = Ot(u),
                                                g = !b && Nt(u),
                                                E = !b && !g && jt(u);
                                            y = u, b || g || E ? Ot(a) ? y = a : Lt(v = a) && Rt(v) ? y = function(t, e) {
                                                var n = -1,
                                                    r = t.length;
                                                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                                                return e
                                            }(a) : g ? (m = !1, y = function(t, e) {
                                                if (e) return t.slice();
                                                var n = t.length,
                                                    r = H ? H(n) : new t.constructor(n);
                                                return t.copy(r), r
                                            }(u, !0)) : E ? (m = !1, p = (f = u).buffer, d = new p.constructor(p.byteLength), new U(d).set(new U(p)), h = d, y = new f.constructor(h, f.byteOffset, f.length)) : y = [] : function(t) {
                                                if (!Lt(t) || ft(t) != l) return !1;
                                                var e = G(t);
                                                if (null === e) return !0;
                                                var n = j.call(e, "constructor") && e.constructor;
                                                return "function" == typeof n && n instanceof n && L.call(n) == B
                                            }(u) || xt(u) ? (y = a, xt(a) ? y = function(t) {
                                                return function(t, e, n, r) {
                                                    var o = !n;
                                                    n || (n = {});
                                                    for (var i = -1, s = e.length; ++i < s;) {
                                                        var a = e[i],
                                                            u = r ? r(n[a], t[a], a, n, t) : void 0;
                                                        void 0 === u && (u = t[a]), o ? ut(n, a, u) : st(n, a, u)
                                                    }
                                                    return n
                                                }(t, It(t))
                                            }(a) : Pt(a) && !St(a) || (y = function(t) {
                                                return "function" != typeof t.constructor || wt(t) ? {} : Q(G(t))
                                            }(u))) : m = !1
                                        }
                                        m && (s.set(u, y), o(y, u, r, i, s), s.delete(u)), it(t, n, y)
                                    }
                                }(t, e, s, n, vt, r, o);
                                else {
                                    var a = r ? r(_t(t, s), i, s + "", t, e, o) : void 0;
                                    void 0 === a && (a = i), it(t, s, a)
                                }
                            }), It)
                        }

                        function yt(t, e) {
                            return Tt(function(t, e, n) {
                                return e = Y(void 0 === e ? t.length - 1 : e, 0),
                                    function() {
                                        for (var r = arguments, o = -1, i = Y(r.length - e, 0), s = Array(i); ++o < i;) s[o] = r[e + o];
                                        o = -1;
                                        for (var a = Array(e + 1); ++o < e;) a[o] = r[o];
                                        return a[e] = n(s),
                                            function(t, e, n) {
                                                switch (n.length) {
                                                    case 0:
                                                        return t.call(e);
                                                    case 1:
                                                        return t.call(e, n[0]);
                                                    case 2:
                                                        return t.call(e, n[0], n[1]);
                                                    case 3:
                                                        return t.call(e, n[0], n[1], n[2])
                                                }
                                                return t.apply(e, n)
                                            }(t, this, a)
                                    }
                            }(t, e, Mt), t + "")
                        }
                        var mt = W ? function(t, e) {
                            return W(t, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: (n = e, function() {
                                    return n
                                }),
                                writable: !0
                            });
                            var n
                        } : Mt;

                        function bt(t, e) {
                            var n, r, o = t.__data__;
                            return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map
                        }

                        function gt(t, e) {
                            var n = function(t, e) {
                                return null == t ? void 0 : t[e]
                            }(t, e);
                            return pt(n) ? n : void 0
                        }

                        function Et(t, e) {
                            var n = typeof t;
                            return !!(e = null == e ? o : e) && ("number" == n || "symbol" != n && d.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function wt(t) {
                            var e = t && t.constructor;
                            return t === ("function" == typeof e && e.prototype || C)
                        }

                        function _t(t, e) {
                            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                        }
                        var Tt = function(t) {
                            var e = 0,
                                n = 0;
                            return function() {
                                var r = $(),
                                    o = 16 - (r - n);
                                if (n = r, o > 0) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0;
                                return t.apply(void 0, arguments)
                            }
                        }(mt);

                        function At(t, e) {
                            return t === e || t != t && e != e
                        }
                        var xt = ht(function() {
                                return arguments
                            }()) ? ht : function(t) {
                                return Lt(t) && j.call(t, "callee") && !q.call(t, "callee")
                            },
                            Ot = Array.isArray;

                        function Rt(t) {
                            return null != t && Ct(t.length) && !St(t)
                        }
                        var Nt = K || function() {
                            return !1
                        };

                        function St(t) {
                            if (!Pt(t)) return !1;
                            var e = ft(t);
                            return e == a || e == u || e == s || e == f
                        }

                        function Ct(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
                        }

                        function Pt(t) {
                            var e = typeof t;
                            return null != t && ("object" == e || "function" == e)
                        }

                        function Lt(t) {
                            return null != t && "object" == typeof t
                        }
                        var jt = R ? function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(R) : function(t) {
                            return Lt(t) && Ct(t.length) && !!v[ft(t)]
                        };

                        function It(t) {
                            return Rt(t) ? ot(t, !0) : dt(t)
                        }
                        var kt, Bt = (kt = function(t, e, n) {
                            vt(t, e, n)
                        }, yt((function(t, e) {
                            var n = -1,
                                r = e.length,
                                o = r > 1 ? e[r - 1] : void 0,
                                i = r > 2 ? e[2] : void 0;
                            for (o = kt.length > 3 && "function" == typeof o ? (r--, o) : void 0, i && function(t, e, n) {
                                    if (!Pt(n)) return !1;
                                    var r = typeof e;
                                    return !!("number" == r ? Rt(n) && Et(e, n.length) : "string" == r && e in n) && At(n[e], t)
                                }(e[0], e[1], i) && (o = r < 3 ? void 0 : o, r = 1), t = Object(t); ++n < r;) {
                                var s = e[n];
                                s && kt(t, s, n, o)
                            }
                            return t
                        })));

                        function Mt(t) {
                            return t
                        }
                        n.exports = Bt
                    }).call(this, n(39), n(40)(t))
                }, function(t, e, n) {
                    (function(t, n) {
                        var r = "__lodash_hash_undefined__",
                            o = 1,
                            i = 2,
                            s = 9007199254740991,
                            a = "[object Arguments]",
                            u = "[object Array]",
                            c = "[object AsyncFunction]",
                            l = "[object Boolean]",
                            f = "[object Date]",
                            h = "[object Error]",
                            p = "[object Function]",
                            d = "[object GeneratorFunction]",
                            v = "[object Map]",
                            y = "[object Number]",
                            m = "[object Null]",
                            b = "[object Object]",
                            g = "[object Promise]",
                            E = "[object Proxy]",
                            w = "[object RegExp]",
                            _ = "[object Set]",
                            T = "[object String]",
                            A = "[object Symbol]",
                            x = "[object Undefined]",
                            O = "[object WeakMap]",
                            R = "[object ArrayBuffer]",
                            N = "[object DataView]",
                            S = /^\[object .+?Constructor\]$/,
                            C = /^(?:0|[1-9]\d*)$/,
                            P = {};
                        P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P[a] = P[u] = P[R] = P[l] = P[N] = P[f] = P[h] = P[p] = P[v] = P[y] = P[b] = P[w] = P[_] = P[T] = P[O] = !1;
                        var L = "object" == typeof t && t && t.Object === Object && t,
                            j = "object" == typeof self && self && self.Object === Object && self,
                            I = L || j || Function("return this")(),
                            k = e && !e.nodeType && e,
                            B = k && "object" == typeof n && n && !n.nodeType && n,
                            M = B && B.exports === k,
                            D = M && L.process,
                            F = function() {
                                try {
                                    return D && D.binding && D.binding("util")
                                } catch (t) {}
                            }(),
                            U = F && F.isTypedArray;

                        function H(t, e) {
                            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                                if (e(t[n], n, t)) return !0;
                            return !1
                        }

                        function G(t) {
                            var e = -1,
                                n = Array(t.size);
                            return t.forEach((function(t, r) {
                                n[++e] = [r, t]
                            })), n
                        }

                        function V(t) {
                            var e = -1,
                                n = Array(t.size);
                            return t.forEach((function(t) {
                                n[++e] = t
                            })), n
                        }
                        var q, z, X, W = Array.prototype,
                            K = Function.prototype,
                            Y = Object.prototype,
                            $ = I["__core-js_shared__"],
                            Z = K.toString,
                            J = Y.hasOwnProperty,
                            Q = (q = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q : "",
                            tt = Y.toString,
                            et = RegExp("^" + Z.call(J).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            nt = M ? I.Buffer : void 0,
                            rt = I.Symbol,
                            ot = I.Uint8Array,
                            it = Y.propertyIsEnumerable,
                            st = W.splice,
                            at = rt ? rt.toStringTag : void 0,
                            ut = Object.getOwnPropertySymbols,
                            ct = nt ? nt.isBuffer : void 0,
                            lt = (z = Object.keys, X = Object, function(t) {
                                return z(X(t))
                            }),
                            ft = Ft(I, "DataView"),
                            ht = Ft(I, "Map"),
                            pt = Ft(I, "Promise"),
                            dt = Ft(I, "Set"),
                            vt = Ft(I, "WeakMap"),
                            yt = Ft(Object, "create"),
                            mt = Vt(ft),
                            bt = Vt(ht),
                            gt = Vt(pt),
                            Et = Vt(dt),
                            wt = Vt(vt),
                            _t = rt ? rt.prototype : void 0,
                            Tt = _t ? _t.valueOf : void 0;

                        function At(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function xt(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function Ot(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.clear(); ++e < n;) {
                                var r = t[e];
                                this.set(r[0], r[1])
                            }
                        }

                        function Rt(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length;
                            for (this.__data__ = new Ot; ++e < n;) this.add(t[e])
                        }

                        function Nt(t) {
                            var e = this.__data__ = new xt(t);
                            this.size = e.size
                        }

                        function St(t, e) {
                            var n = Xt(t),
                                r = !n && zt(t),
                                o = !n && !r && Wt(t),
                                i = !n && !r && !o && Jt(t),
                                s = n || r || o || i,
                                a = s ? function(t, e) {
                                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                    return r
                                }(t.length, String) : [],
                                u = a.length;
                            for (var c in t) !e && !J.call(t, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Gt(c, u)) || a.push(c);
                            return a
                        }

                        function Ct(t, e) {
                            for (var n = t.length; n--;)
                                if (qt(t[n][0], e)) return n;
                            return -1
                        }

                        function Pt(t) {
                            return null == t ? void 0 === t ? x : m : at && at in Object(t) ? function(t) {
                                var e = J.call(t, at),
                                    n = t[at];
                                try {
                                    t[at] = void 0;
                                    var r = !0
                                } catch (i) {}
                                var o = tt.call(t);
                                return r && (e ? t[at] = n : delete t[at]), o
                            }(t) : function(t) {
                                return tt.call(t)
                            }(t)
                        }

                        function Lt(t) {
                            return Zt(t) && Pt(t) == a
                        }

                        function jt(t, e, n, r, s) {
                            return t === e || (null == t || null == e || !Zt(t) && !Zt(e) ? t != t && e != e : function(t, e, n, r, s, c) {
                                var p = Xt(t),
                                    d = Xt(e),
                                    m = p ? u : Ht(t),
                                    g = d ? u : Ht(e),
                                    E = (m = m == a ? b : m) == b,
                                    x = (g = g == a ? b : g) == b,
                                    O = m == g;
                                if (O && Wt(t)) {
                                    if (!Wt(e)) return !1;
                                    p = !0, E = !1
                                }
                                if (O && !E) return c || (c = new Nt), p || Jt(t) ? Bt(t, e, n, r, s, c) : function(t, e, n, r, s, a, u) {
                                    switch (n) {
                                        case N:
                                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                            t = t.buffer, e = e.buffer;
                                        case R:
                                            return !(t.byteLength != e.byteLength || !a(new ot(t), new ot(e)));
                                        case l:
                                        case f:
                                        case y:
                                            return qt(+t, +e);
                                        case h:
                                            return t.name == e.name && t.message == e.message;
                                        case w:
                                        case T:
                                            return t == e + "";
                                        case v:
                                            var c = G;
                                        case _:
                                            var p = r & o;
                                            if (c || (c = V), t.size != e.size && !p) return !1;
                                            var d = u.get(t);
                                            if (d) return d == e;
                                            r |= i, u.set(t, e);
                                            var m = Bt(c(t), c(e), r, s, a, u);
                                            return u.delete(t), m;
                                        case A:
                                            if (Tt) return Tt.call(t) == Tt.call(e)
                                    }
                                    return !1
                                }(t, e, m, n, r, s, c);
                                if (!(n & o)) {
                                    var S = E && J.call(t, "__wrapped__"),
                                        C = x && J.call(e, "__wrapped__");
                                    if (S || C) {
                                        var P = S ? t.value() : t,
                                            L = C ? e.value() : e;
                                        return c || (c = new Nt), s(P, L, n, r, c)
                                    }
                                }
                                return !!O && (c || (c = new Nt), function(t, e, n, r, i, s) {
                                    var a = n & o,
                                        u = Mt(t),
                                        c = u.length,
                                        l = Mt(e),
                                        f = l.length;
                                    if (c != f && !a) return !1;
                                    for (var h = c; h--;) {
                                        var p = u[h];
                                        if (!(a ? p in e : J.call(e, p))) return !1
                                    }
                                    var d = s.get(t);
                                    if (d && s.get(e)) return d == e;
                                    var v = !0;
                                    s.set(t, e), s.set(e, t);
                                    for (var y = a; ++h < c;) {
                                        var m = t[p = u[h]],
                                            b = e[p];
                                        if (r) var g = a ? r(b, m, p, e, t, s) : r(m, b, p, t, e, s);
                                        if (!(void 0 === g ? m === b || i(m, b, n, r, s) : g)) {
                                            v = !1;
                                            break
                                        }
                                        y || (y = "constructor" == p)
                                    }
                                    if (v && !y) {
                                        var E = t.constructor,
                                            w = e.constructor;
                                        E == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof E && E instanceof E && "function" == typeof w && w instanceof w || (v = !1)
                                    }
                                    return s.delete(t), s.delete(e), v
                                }(t, e, n, r, s, c))
                            }(t, e, n, r, jt, s))
                        }

                        function It(t) {
                            return !(!$t(t) || function(t) {
                                return !!Q && Q in t
                            }(t)) && (Kt(t) ? et : S).test(Vt(t))
                        }

                        function kt(t) {
                            if (n = (e = t) && e.constructor, r = "function" == typeof n && n.prototype || Y, e !== r) return lt(t);
                            var e, n, r, o = [];
                            for (var i in Object(t)) J.call(t, i) && "constructor" != i && o.push(i);
                            return o
                        }

                        function Bt(t, e, n, r, s, a) {
                            var u = n & o,
                                c = t.length,
                                l = e.length;
                            if (c != l && !(u && l > c)) return !1;
                            var f = a.get(t);
                            if (f && a.get(e)) return f == e;
                            var h = -1,
                                p = !0,
                                d = n & i ? new Rt : void 0;
                            for (a.set(t, e), a.set(e, t); ++h < c;) {
                                var v = t[h],
                                    y = e[h];
                                if (r) var m = u ? r(y, v, h, e, t, a) : r(v, y, h, t, e, a);
                                if (void 0 !== m) {
                                    if (m) continue;
                                    p = !1;
                                    break
                                }
                                if (d) {
                                    if (!H(e, (function(t, e) {
                                            if (o = e, !d.has(o) && (v === t || s(v, t, n, r, a))) return d.push(e);
                                            var o
                                        }))) {
                                        p = !1;
                                        break
                                    }
                                } else if (v !== y && !s(v, y, n, r, a)) {
                                    p = !1;
                                    break
                                }
                            }
                            return a.delete(t), a.delete(e), p
                        }

                        function Mt(t) {
                            return function(t, e, n) {
                                var r = e(t);
                                return Xt(t) ? r : function(t, e) {
                                    for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                                    return t
                                }(r, n(t))
                            }(t, Qt, Ut)
                        }

                        function Dt(t, e) {
                            var n, r, o = t.__data__;
                            return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map
                        }

                        function Ft(t, e) {
                            var n = function(t, e) {
                                return null == t ? void 0 : t[e]
                            }(t, e);
                            return It(n) ? n : void 0
                        }
                        At.prototype.clear = function() {
                            this.__data__ = yt ? yt(null) : {}, this.size = 0
                        }, At.prototype.delete = function(t) {
                            var e = this.has(t) && delete this.__data__[t];
                            return this.size -= e ? 1 : 0, e
                        }, At.prototype.get = function(t) {
                            var e = this.__data__;
                            if (yt) {
                                var n = e[t];
                                return n === r ? void 0 : n
                            }
                            return J.call(e, t) ? e[t] : void 0
                        }, At.prototype.has = function(t) {
                            var e = this.__data__;
                            return yt ? void 0 !== e[t] : J.call(e, t)
                        }, At.prototype.set = function(t, e) {
                            var n = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, n[t] = yt && void 0 === e ? r : e, this
                        }, xt.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, xt.prototype.delete = function(t) {
                            var e = this.__data__,
                                n = Ct(e, t);
                            return !(n < 0 || (n == e.length - 1 ? e.pop() : st.call(e, n, 1), --this.size, 0))
                        }, xt.prototype.get = function(t) {
                            var e = this.__data__,
                                n = Ct(e, t);
                            return n < 0 ? void 0 : e[n][1]
                        }, xt.prototype.has = function(t) {
                            return Ct(this.__data__, t) > -1
                        }, xt.prototype.set = function(t, e) {
                            var n = this.__data__,
                                r = Ct(n, t);
                            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                        }, Ot.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new At,
                                map: new(ht || xt),
                                string: new At
                            }
                        }, Ot.prototype.delete = function(t) {
                            var e = Dt(this, t).delete(t);
                            return this.size -= e ? 1 : 0, e
                        }, Ot.prototype.get = function(t) {
                            return Dt(this, t).get(t)
                        }, Ot.prototype.has = function(t) {
                            return Dt(this, t).has(t)
                        }, Ot.prototype.set = function(t, e) {
                            var n = Dt(this, t),
                                r = n.size;
                            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                        }, Rt.prototype.add = Rt.prototype.push = function(t) {
                            return this.__data__.set(t, r), this
                        }, Rt.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Nt.prototype.clear = function() {
                            this.__data__ = new xt, this.size = 0
                        }, Nt.prototype.delete = function(t) {
                            var e = this.__data__,
                                n = e.delete(t);
                            return this.size = e.size, n
                        }, Nt.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, Nt.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Nt.prototype.set = function(t, e) {
                            var n = this.__data__;
                            if (n instanceof xt) {
                                var r = n.__data__;
                                if (!ht || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                                n = this.__data__ = new Ot(r)
                            }
                            return n.set(t, e), this.size = n.size, this
                        };
                        var Ut = ut ? function(t) {
                                return null == t ? [] : (t = Object(t), function(t, e) {
                                    for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                                        var s = t[n];
                                        e(s, n, t) && (i[o++] = s)
                                    }
                                    return i
                                }(ut(t), (function(e) {
                                    return it.call(t, e)
                                })))
                            } : function() {
                                return []
                            },
                            Ht = Pt;

                        function Gt(t, e) {
                            return !!(e = null == e ? s : e) && ("number" == typeof t || C.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function Vt(t) {
                            if (null != t) {
                                try {
                                    return Z.call(t)
                                } catch (e) {}
                                try {
                                    return t + ""
                                } catch (e) {}
                            }
                            return ""
                        }

                        function qt(t, e) {
                            return t === e || t != t && e != e
                        }(ft && Ht(new ft(new ArrayBuffer(1))) != N || ht && Ht(new ht) != v || pt && Ht(pt.resolve()) != g || dt && Ht(new dt) != _ || vt && Ht(new vt) != O) && (Ht = function(t) {
                            var e = Pt(t),
                                n = e == b ? t.constructor : void 0,
                                r = n ? Vt(n) : "";
                            if (r) switch (r) {
                                case mt:
                                    return N;
                                case bt:
                                    return v;
                                case gt:
                                    return g;
                                case Et:
                                    return _;
                                case wt:
                                    return O
                            }
                            return e
                        });
                        var zt = Lt(function() {
                                return arguments
                            }()) ? Lt : function(t) {
                                return Zt(t) && J.call(t, "callee") && !it.call(t, "callee")
                            },
                            Xt = Array.isArray,
                            Wt = ct || function() {
                                return !1
                            };

                        function Kt(t) {
                            if (!$t(t)) return !1;
                            var e = Pt(t);
                            return e == p || e == d || e == c || e == E
                        }

                        function Yt(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s
                        }

                        function $t(t) {
                            var e = typeof t;
                            return null != t && ("object" == e || "function" == e)
                        }

                        function Zt(t) {
                            return null != t && "object" == typeof t
                        }
                        var Jt = U ? function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(U) : function(t) {
                            return Zt(t) && Yt(t.length) && !!P[Pt(t)]
                        };

                        function Qt(t) {
                            return null != (e = t) && Yt(e.length) && !Kt(e) ? St(t) : kt(t);
                            var e
                        }
                        n.exports = function(t, e) {
                            return jt(t, e)
                        }
                    }).call(this, n(39), n(40)(t))
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return x
                    })), n.d(e, "a", (function() {
                        return A
                    })), n.d(e, "d", (function() {
                        return C
                    })), n.d(e, "c", (function() {
                        return P
                    }));
                    var r = n(10),
                        o = n.n(r),
                        i = n(18),
                        s = n.n(i),
                        a = n(1),
                        u = n.n(a),
                        c = n(2),
                        l = n(0),
                        f = n(11),
                        h = n(9);

                    function p(t) {
                        return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, p(t)
                    }

                    function d(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return v(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function v(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function y(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function m(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? y(Object(n), !0).forEach((function(e) {
                                b(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function b(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function g(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function E(t, e) {
                        return E = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, E(t, e)
                    }

                    function w(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = _(t);
                            if (e) {
                                var o = _(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === p(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function _(t) {
                        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, _(t)
                    }
                    var T = Object(f.a)("quill:keyboard"),
                        A = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                        x = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && E(t, e)
                            }(i, t);
                            var e, n, r, o = w(i);

                            function i(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, i), (n = o.call(this, t, e)).bindings = {}, Object.keys(n.options.bindings).forEach((function(t) {
                                    n.options.bindings[t] && n.addBinding(n.options.bindings[t])
                                })), n.addBinding({
                                    key: "Enter",
                                    shiftKey: null
                                }, n.handleEnter), n.addBinding({
                                    key: "Enter",
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null
                                }, (function() {})), /Firefox/i.test(navigator.userAgent) ? (n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !0
                                }, n.handleBackspace), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !0
                                }, n.handleDelete)) : (n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !0,
                                    prefix: /^.?$/
                                }, n.handleBackspace), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !0,
                                    suffix: /^.?$/
                                }, n.handleDelete)), n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !1
                                }, n.handleDeleteRange), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !1
                                }, n.handleDeleteRange), n.addBinding({
                                    key: "Backspace",
                                    altKey: null,
                                    ctrlKey: null,
                                    metaKey: null,
                                    shiftKey: null
                                }, {
                                    collapsed: !0,
                                    offset: 0
                                }, n.handleBackspace), n.listen(), n
                            }
                            return e = i, n = [{
                                key: "addBinding",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = C(t);
                                    null != o ? ("function" == typeof n && (n = {
                                        handler: n
                                    }), "function" == typeof r && (r = {
                                        handler: r
                                    }), (Array.isArray(o.key) ? o.key : [o.key]).forEach((function(t) {
                                        var i = m(m(m({}, o), {}, {
                                            key: t
                                        }, n), r);
                                        e.bindings[i.key] = e.bindings[i.key] || [], e.bindings[i.key].push(i)
                                    }))) : T.warn("Attempted to add invalid keyboard binding", o)
                                }
                            }, {
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", (function(e) {
                                        var n = "Enter" === e.key && 229 === e.which,
                                            r = e.isComposing || n;
                                        if (!e.defaultPrevented && !r) {
                                            var o = (t.bindings[e.key] || []).concat(t.bindings[e.which] || []).filter((function(t) {
                                                return i.match(e, t)
                                            }));
                                            if (0 !== o.length) {
                                                var a = t.quill.getSelection();
                                                if (null != a && t.quill.hasFocus()) {
                                                    var u = d(t.quill.getLine(a.index), 2),
                                                        l = u[0],
                                                        f = u[1],
                                                        h = d(t.quill.getLeaf(a.index), 2),
                                                        v = h[0],
                                                        y = h[1],
                                                        m = d(0 === a.length ? [v, y] : t.quill.getLeaf(a.index + a.length), 2),
                                                        b = m[0],
                                                        g = m[1],
                                                        E = v instanceof c.TextBlot ? v.value().slice(0, y) : "",
                                                        w = b instanceof c.TextBlot ? b.value().slice(g) : "",
                                                        _ = {
                                                            collapsed: 0 === a.length,
                                                            empty: 0 === a.length && l.length() <= 1,
                                                            format: t.quill.getFormat(a),
                                                            line: l,
                                                            offset: f,
                                                            prefix: E,
                                                            suffix: w,
                                                            event: e
                                                        };
                                                    o.some((function(e) {
                                                        if (null != e.collapsed && e.collapsed !== _.collapsed) return !1;
                                                        if (null != e.empty && e.empty !== _.empty) return !1;
                                                        if (null != e.offset && e.offset !== _.offset) return !1;
                                                        if (Array.isArray(e.format)) {
                                                            if (e.format.every((function(t) {
                                                                    return null == _.format[t]
                                                                }))) return !1
                                                        } else if ("object" === p(e.format) && !Object.keys(e.format).every((function(t) {
                                                                return !0 === e.format[t] ? null != _.format[t] : !1 === e.format[t] ? null == _.format[t] : s()(e.format[t], _.format[t])
                                                            }))) return !1;
                                                        return !(null != e.prefix && !e.prefix.test(_.prefix) || null != e.suffix && !e.suffix.test(_.suffix) || !0 === e.handler.call(t, a, _, e))
                                                    })) && e.preventDefault()
                                                }
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "handleBackspace",
                                value: function(t, e) {
                                    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                                    if (!(0 === t.index || this.quill.getLength() <= 1)) {
                                        var r = {},
                                            o = d(this.quill.getLine(t.index), 1)[0],
                                            i = (new u.a).retain(t.index - n).delete(n);
                                        if (0 === e.offset) {
                                            var s = d(this.quill.getLine(t.index - 1), 1)[0];
                                            if (s && !("block" === s.statics.blotName && s.length() <= 1)) {
                                                var c = o.formats(),
                                                    f = this.quill.getFormat(t.index - 1, 1);
                                                if (r = a.AttributeMap.diff(c, f) || {}, Object.keys(r).length > 0) {
                                                    var h = (new u.a).retain(t.index + o.length() - 2).retain(1, r);
                                                    i = i.compose(h)
                                                }
                                            }
                                        }
                                        this.quill.updateContents(i, l.a.sources.USER), this.quill.focus()
                                    }
                                }
                            }, {
                                key: "handleDelete",
                                value: function(t, e) {
                                    var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                                    if (!(t.index >= this.quill.getLength() - n)) {
                                        var r = {},
                                            o = d(this.quill.getLine(t.index), 1)[0],
                                            i = (new u.a).retain(t.index).delete(n);
                                        if (e.offset >= o.length() - 1) {
                                            var s = d(this.quill.getLine(t.index + 1), 1)[0];
                                            if (s) {
                                                var c = o.formats(),
                                                    f = this.quill.getFormat(t.index, 1);
                                                r = a.AttributeMap.diff(c, f) || {}, Object.keys(r).length > 0 && (i = i.retain(s.length() - 1).retain(1, r))
                                            }
                                        }
                                        this.quill.updateContents(i, l.a.sources.USER), this.quill.focus()
                                    }
                                }
                            }, {
                                key: "handleDeleteRange",
                                value: function(t) {
                                    P({
                                        range: t,
                                        quill: this.quill
                                    }), this.quill.focus()
                                }
                            }, {
                                key: "handleEnter",
                                value: function(t, e) {
                                    var n = this,
                                        r = Object.keys(e.format).reduce((function(t, r) {
                                            return n.quill.scroll.query(r, c.Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]), t
                                        }), {}),
                                        o = (new u.a).retain(t.index).delete(t.length).insert("\n", r);
                                    this.quill.updateContents(o, l.a.sources.USER), this.quill.setSelection(t.index + 1, l.a.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach((function(t) {
                                        null == r[t] && (Array.isArray(e.format[t]) || "code" !== t && "link" !== t && n.quill.format(t, e.format[t], l.a.sources.USER))
                                    }))
                                }
                            }], r = [{
                                key: "match",
                                value: function(t, e) {
                                    return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((function(n) {
                                        return !!e[n] !== t[n] && null !== e[n]
                                    })) && (e.key === t.key || e.key === t.which)
                                }
                            }], n && g(e.prototype, n), r && g(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), i
                        }(h.a);

                    function O(t) {
                        return {
                            key: "Tab",
                            shiftKey: !t,
                            format: {
                                "code-block": !0
                            },
                            handler: function(e) {
                                var n = this.quill.scroll.query("code-block"),
                                    r = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e),
                                    o = e.index,
                                    i = e.length;
                                r.forEach((function(e, r) {
                                    t ? (e.insertAt(0, n.TAB), 0 === r ? o += n.TAB.length : i += n.TAB.length) : e.domNode.textContent.startsWith(n.TAB) && (e.deleteAt(0, n.TAB.length), 0 === r ? o -= n.TAB.length : i -= n.TAB.length)
                                })), this.quill.update(l.a.sources.USER), this.quill.setSelection(o, i, l.a.sources.SILENT)
                            }
                        }
                    }

                    function R(t, e) {
                        var n;
                        return b(n = {
                            key: t,
                            shiftKey: e,
                            altKey: null
                        }, "ArrowLeft" === t ? "prefix" : "suffix", /^$/), b(n, "handler", (function(n) {
                            var r = n.index;
                            return "ArrowRight" === t && (r += n.length + 1), !(d(this.quill.getLeaf(r), 1)[0] instanceof c.EmbedBlot && ("ArrowLeft" === t ? e ? this.quill.setSelection(n.index - 1, n.length + 1, l.a.sources.USER) : this.quill.setSelection(n.index - 1, l.a.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, l.a.sources.USER) : this.quill.setSelection(n.index + n.length + 1, l.a.sources.USER), 1))
                        })), n
                    }

                    function N(t) {
                        return {
                            key: t[0],
                            shortKey: !0,
                            handler: function(e, n) {
                                this.quill.format(t, !n.format[t], l.a.sources.USER)
                            }
                        }
                    }

                    function S(t) {
                        return {
                            key: t ? "ArrowUp" : "ArrowDown",
                            collapsed: !0,
                            format: ["table"],
                            handler: function(e, n) {
                                var r = t ? "prev" : "next",
                                    o = n.line,
                                    i = o.parent[r];
                                if (null != i) {
                                    if ("table-row" === i.statics.blotName) {
                                        for (var s = i.children.head, a = o; null != a.prev;) a = a.prev, s = s.next;
                                        var u = s.offset(this.quill.scroll) + Math.min(n.offset, s.length() - 1);
                                        this.quill.setSelection(u, 0, l.a.sources.USER)
                                    }
                                } else {
                                    var c = o.table()[r];
                                    null != c && (t ? this.quill.setSelection(c.offset(this.quill.scroll) + c.length() - 1, 0, l.a.sources.USER) : this.quill.setSelection(c.offset(this.quill.scroll), 0, l.a.sources.USER))
                                }
                                return !1
                            }
                        }
                    }

                    function C(t) {
                        if ("string" == typeof t || "number" == typeof t) t = {
                            key: t
                        };
                        else {
                            if ("object" !== p(t)) return null;
                            t = o()(t)
                        }
                        return t.shortKey && (t[A] = t.shortKey, delete t.shortKey), t
                    }

                    function P(t) {
                        var e = t.quill,
                            n = t.range,
                            r = e.getLines(n),
                            o = {};
                        if (r.length > 1) {
                            var i = r[0].formats(),
                                s = r[r.length - 1].formats();
                            o = a.AttributeMap.diff(s, i) || {}
                        }
                        e.deleteText(n, l.a.sources.USER), Object.keys(o).length > 0 && e.formatLine(n.index, 1, o, l.a.sources.USER), e.setSelection(n.index, l.a.sources.SILENT)
                    }
                    x.DEFAULTS = {
                        bindings: {
                            bold: N("bold"),
                            italic: N("italic"),
                            underline: N("underline"),
                            indent: {
                                key: "Tab",
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "+1", l.a.sources.USER), !1)
                                }
                            },
                            outdent: {
                                key: "Tab",
                                shiftKey: !0,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "-1", l.a.sources.USER), !1)
                                }
                            },
                            "outdent backspace": {
                                key: "Backspace",
                                collapsed: !0,
                                shiftKey: null,
                                metaKey: null,
                                ctrlKey: null,
                                altKey: null,
                                format: ["indent", "list"],
                                offset: 0,
                                handler: function(t, e) {
                                    null != e.format.indent ? this.quill.format("indent", "-1", l.a.sources.USER) : null != e.format.list && this.quill.format("list", !1, l.a.sources.USER)
                                }
                            },
                            "indent code-block": O(!0),
                            "outdent code-block": O(!1),
                            "remove tab": {
                                key: "Tab",
                                shiftKey: !0,
                                collapsed: !0,
                                prefix: /\t$/,
                                handler: function(t) {
                                    this.quill.deleteText(t.index - 1, 1, l.a.sources.USER)
                                }
                            },
                            tab: {
                                key: "Tab",
                                handler: function(t, e) {
                                    if (e.format.table) return !0;
                                    this.quill.history.cutoff();
                                    var n = (new u.a).retain(t.index).delete(t.length).insert("\t");
                                    return this.quill.updateContents(n, l.a.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, l.a.sources.SILENT), !1
                                }
                            },
                            "blockquote empty enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["blockquote"],
                                empty: !0,
                                handler: function() {
                                    this.quill.format("blockquote", !1, l.a.sources.USER)
                                }
                            },
                            "list empty enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["list"],
                                empty: !0,
                                handler: function(t, e) {
                                    var n = {
                                        list: !1
                                    };
                                    e.format.indent && (n.indent = !1), this.quill.formatLine(t.index, t.length, n, l.a.sources.USER)
                                }
                            },
                            "checklist enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: {
                                    list: "checked"
                                },
                                handler: function(t) {
                                    var e = d(this.quill.getLine(t.index), 2),
                                        n = e[0],
                                        r = e[1],
                                        o = m(m({}, n.formats()), {}, {
                                            list: "checked"
                                        }),
                                        i = (new u.a).retain(t.index).insert("\n", o).retain(n.length() - r - 1).retain(1, {
                                            list: "unchecked"
                                        });
                                    this.quill.updateContents(i, l.a.sources.USER), this.quill.setSelection(t.index + 1, l.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "header enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["header"],
                                suffix: /^$/,
                                handler: function(t, e) {
                                    var n = d(this.quill.getLine(t.index), 2),
                                        r = n[0],
                                        o = n[1],
                                        i = (new u.a).retain(t.index).insert("\n", e.format).retain(r.length() - o - 1).retain(1, {
                                            header: null
                                        });
                                    this.quill.updateContents(i, l.a.sources.USER), this.quill.setSelection(t.index + 1, l.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "table backspace": {
                                key: "Backspace",
                                format: ["table"],
                                collapsed: !0,
                                offset: 0,
                                handler: function() {}
                            },
                            "table delete": {
                                key: "Delete",
                                format: ["table"],
                                collapsed: !0,
                                suffix: /^$/,
                                handler: function() {}
                            },
                            "table enter": {
                                key: "Enter",
                                shiftKey: null,
                                format: ["table"],
                                handler: function(t) {
                                    var e = this.quill.getModule("table");
                                    if (e) {
                                        var n = d(e.getTable(t), 4),
                                            r = n[0],
                                            o = function(t, e, n, r) {
                                                return null == e.prev && null == e.next ? null == n.prev && null == n.next ? 0 === r ? -1 : 1 : null == n.prev ? -1 : 1 : null == e.prev ? -1 : null == e.next ? 1 : null
                                            }(0, n[1], n[2], n[3]);
                                        if (null == o) return;
                                        var i = r.offset();
                                        if (o < 0) {
                                            var s = (new u.a).retain(i).insert("\n");
                                            this.quill.updateContents(s, l.a.sources.USER), this.quill.setSelection(t.index + 1, t.length, l.a.sources.SILENT)
                                        } else if (o > 0) {
                                            i += r.length();
                                            var a = (new u.a).retain(i).insert("\n");
                                            this.quill.updateContents(a, l.a.sources.USER), this.quill.setSelection(i, l.a.sources.USER)
                                        }
                                    }
                                }
                            },
                            "table tab": {
                                key: "Tab",
                                shiftKey: null,
                                format: ["table"],
                                handler: function(t, e) {
                                    var n = e.event,
                                        r = e.line,
                                        o = r.offset(this.quill.scroll);
                                    n.shiftKey ? this.quill.setSelection(o - 1, l.a.sources.USER) : this.quill.setSelection(o + r.length(), l.a.sources.USER)
                                }
                            },
                            "list autofill": {
                                key: " ",
                                shiftKey: null,
                                collapsed: !0,
                                format: {
                                    "code-block": !1,
                                    blockquote: !1,
                                    table: !1
                                },
                                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                handler: function(t, e) {
                                    if (null == this.quill.scroll.query("list")) return !0;
                                    var n, r = e.prefix.length,
                                        o = d(this.quill.getLine(t.index), 2),
                                        i = o[0],
                                        s = o[1];
                                    if (s > r) return !0;
                                    switch (e.prefix.trim()) {
                                        case "[]":
                                        case "[ ]":
                                            n = "unchecked";
                                            break;
                                        case "[x]":
                                            n = "checked";
                                            break;
                                        case "-":
                                        case "*":
                                            n = "bullet";
                                            break;
                                        default:
                                            n = "ordered"
                                    }
                                    this.quill.insertText(t.index, " ", l.a.sources.USER), this.quill.history.cutoff();
                                    var a = (new u.a).retain(t.index - s).delete(r + 1).retain(i.length() - 2 - s).retain(1, {
                                        list: n
                                    });
                                    return this.quill.updateContents(a, l.a.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - r, l.a.sources.SILENT), !1
                                }
                            },
                            "code exit": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["code-block"],
                                prefix: /^$/,
                                suffix: /^\s*$/,
                                handler: function(t) {
                                    for (var e = d(this.quill.getLine(t.index), 2), n = e[0], r = e[1], o = 2, i = n; null != i && i.length() <= 1 && i.formats()["code-block"];)
                                        if (i = i.prev, (o -= 1) <= 0) {
                                            var s = (new u.a).retain(t.index + n.length() - r - 2).retain(1, {
                                                "code-block": null
                                            }).delete(1);
                                            return this.quill.updateContents(s, l.a.sources.USER), this.quill.setSelection(t.index - 1, l.a.sources.SILENT), !1
                                        }
                                    return !0
                                }
                            },
                            "embed left": R("ArrowLeft", !1),
                            "embed left shift": R("ArrowLeft", !0),
                            "embed right": R("ArrowRight", !1),
                            "embed right shift": R("ArrowRight", !0),
                            "table down": S(!1),
                            "table up": S(!0)
                        }
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var o = function() {
                        function t(e, n) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.quill = e, this.options = n, this.modules = {}
                        }
                        var e, n, o;
                        return e = t, (n = [{
                            key: "init",
                            value: function() {
                                var t = this;
                                Object.keys(this.options.modules).forEach((function(e) {
                                    null == t.modules[e] && t.addModule(e)
                                }))
                            }
                        }, {
                            key: "addModule",
                            value: function(t) {
                                var e = this.quill.constructor.import("modules/".concat(t));
                                return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                            }
                        }]) && r(e.prototype, n), o && r(e, o), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();
                    o.DEFAULTS = {
                        modules: {}
                    }, o.themes = {
                        default: o
                    }, e.a = o
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return l
                    })), n.d(e, "b", (function() {
                        return f
                    })), n.d(e, "c", (function() {
                        return h
                    }));
                    var r = n(2);

                    function o(t) {
                        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, o(t)
                    }

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function s() {
                        return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, s.apply(this, arguments)
                    }

                    function a(t, e) {
                        return a = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, a(t, e)
                    }

                    function u(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = c(t);
                            if (e) {
                                var i = c(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function c(t) {
                        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, c(t)
                    }
                    var l = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && a(t, e)
                            }(l, t);
                            var e, n, r, o = u(l);

                            function l() {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, l), o.apply(this, arguments)
                            }
                            return e = l, (n = [{
                                key: "value",
                                value: function(t) {
                                    var e = s(c(l.prototype), "value", this).call(this, t);
                                    if (!e.startsWith("rgb(")) return e;
                                    e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
                                    var n = e.split(",").map((function(t) {
                                        return "00".concat(parseInt(t, 10).toString(16)).slice(-2)
                                    })).join("");
                                    return "#".concat(n)
                                }
                            }]) && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), l
                        }(r.StyleAttributor),
                        f = new r.ClassAttributor("color", "ql-color", {
                            scope: r.Scope.INLINE
                        }),
                        h = new l("color", "color", {
                            scope: r.Scope.INLINE
                        })
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return s
                    })), n.d(e, "c", (function() {
                        return a
                    }));
                    var r = n(2),
                        o = {
                            scope: r.Scope.BLOCK,
                            whitelist: ["rtl"]
                        },
                        i = new r.Attributor("direction", "dir", o),
                        s = new r.ClassAttributor("direction", "ql-direction", o),
                        a = new r.StyleAttributor("direction", "direction", o)
                }, , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return s
                    })), n.d(e, "c", (function() {
                        return a
                    }));
                    var r = n(2),
                        o = {
                            scope: r.Scope.BLOCK,
                            whitelist: ["right", "center", "justify"]
                        },
                        i = new r.Attributor("align", "align", o),
                        s = new r.ClassAttributor("align", "ql-align", o),
                        a = new r.StyleAttributor("align", "text-align", o)
                }, function(t, e, n) {
                    "use strict";
                    e.a = new WeakMap
                }, , , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return s
                    }));
                    var r = n(2),
                        o = n(21),
                        i = new r.ClassAttributor("background", "ql-bg", {
                            scope: r.Scope.INLINE
                        }),
                        s = new o.a("background", "background-color", {
                            scope: r.Scope.INLINE
                        })
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return p
                    })), n.d(e, "a", (function() {
                        return f
                    }));
                    var r = n(2);

                    function o(t) {
                        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, o(t)
                    }

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function s() {
                        return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, s.apply(this, arguments)
                    }

                    function a(t, e) {
                        return a = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, a(t, e)
                    }

                    function u(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = c(t);
                            if (e) {
                                var i = c(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function c(t) {
                        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, c(t)
                    }
                    var l = {
                            scope: r.Scope.INLINE,
                            whitelist: ["serif", "monospace"]
                        },
                        f = new r.ClassAttributor("font", "ql-font", l),
                        h = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && a(t, e)
                            }(l, t);
                            var e, n, r, o = u(l);

                            function l() {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, l), o.apply(this, arguments)
                            }
                            return e = l, (n = [{
                                key: "value",
                                value: function(t) {
                                    return s(c(l.prototype), "value", this).call(this, t).replace(/["']/g, "")
                                }
                            }]) && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), l
                        }(r.StyleAttributor),
                        p = new h("font", "font-family", l)
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return o
                    })), n.d(e, "b", (function() {
                        return i
                    }));
                    var r = n(2),
                        o = new r.ClassAttributor("size", "ql-size", {
                            scope: r.Scope.INLINE,
                            whitelist: ["small", "large", "huge"]
                        }),
                        i = new r.StyleAttributor("size", "font-size", {
                            scope: r.Scope.INLINE,
                            whitelist: ["10px", "18px", "32px"]
                        })
                }, , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return v
                    })), n.d(e, "b", (function() {
                        return y
                    }));
                    var r = n(4),
                        o = n(15),
                        i = n(0);

                    function s(t) {
                        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, s(t)
                    }

                    function a() {
                        return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, a.apply(this, arguments)
                    }

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function c(t, e, n) {
                        return e && u(t.prototype, e), n && u(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }

                    function l(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function f(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && h(t, e)
                    }

                    function h(t, e) {
                        return h = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, h(t, e)
                    }

                    function p(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = d(t);
                            if (e) {
                                var o = d(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === s(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function d(t) {
                        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, d(t)
                    }
                    var v = function(t) {
                        f(n, t);
                        var e = p(n);

                        function n() {
                            return l(this, n), e.apply(this, arguments)
                        }
                        return c(n)
                    }(o.a);
                    v.blotName = "list-container", v.tagName = "OL";
                    var y = function(t) {
                        f(n, t);
                        var e = p(n);

                        function n(t, r) {
                            var o;
                            l(this, n), o = e.call(this, t, r);
                            var i = r.ownerDocument.createElement("span"),
                                s = function(e) {
                                    if (t.isEnabled()) {
                                        var n = o.statics.formats(r, t);
                                        "checked" === n ? (o.format("list", "unchecked"), e.preventDefault()) : "unchecked" === n && (o.format("list", "checked"), e.preventDefault())
                                    }
                                };
                            return i.addEventListener("mousedown", s), i.addEventListener("touchstart", s), o.attachUI(i), o
                        }
                        return c(n, [{
                            key: "format",
                            value: function(t, e) {
                                t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : a(d(n.prototype), "format", this).call(this, t, e)
                            }
                        }], [{
                            key: "create",
                            value: function(t) {
                                var e = a(d(n), "create", this).call(this);
                                return e.setAttribute("data-list", t), e
                            }
                        }, {
                            key: "formats",
                            value: function(t) {
                                return t.getAttribute("data-list") || void 0
                            }
                        }, {
                            key: "register",
                            value: function() {
                                i.a.register(v)
                            }
                        }]), n
                    }(r.d);
                    y.blotName = "list", y.tagName = "LI", v.allowedChildren = [y], y.requiredContainer = v
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return f
                    })), n.d(e, "b", (function() {
                        return p
                    }));
                    var r = n(2),
                        o = n(0);

                    function i(t) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, i(t)
                    }

                    function s(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function a(t, e) {
                        return a = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, a(t, e)
                    }

                    function u(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = l(t);
                            if (e) {
                                var o = l(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return c(t)
                            }(this, n)
                        }
                    }

                    function c(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }

                    function l(t) {
                        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, l(t)
                    }
                    var f = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && a(t, e)
                        }(l, t);
                        var e, n, r, i = u(l);

                        function l(t, e) {
                            var n;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, l), (n = i.call(this, t, e)).lastRecorded = 0, n.ignoreChange = !1, n.clear(), n.quill.on(o.a.events.EDITOR_CHANGE, (function(t, e, r, i) {
                                t !== o.a.events.TEXT_CHANGE || n.ignoreChange || (n.options.userOnly && i !== o.a.sources.USER ? n.transform(e) : n.record(e, r))
                            })), n.quill.keyboard.addBinding({
                                key: "z",
                                shortKey: !0
                            }, n.undo.bind(c(n))), n.quill.keyboard.addBinding({
                                key: "z",
                                shortKey: !0,
                                shiftKey: !0
                            }, n.redo.bind(c(n))), /Win/i.test(navigator.platform) && n.quill.keyboard.addBinding({
                                key: "y",
                                shortKey: !0
                            }, n.redo.bind(c(n))), n.quill.root.addEventListener("beforeinput", (function(t) {
                                "historyUndo" === t.inputType ? (n.undo(), t.preventDefault()) : "historyRedo" === t.inputType && (n.redo(), t.preventDefault())
                            })), n
                        }
                        return e = l, (n = [{
                            key: "change",
                            value: function(t, e) {
                                if (0 !== this.stack[t].length) {
                                    var n = this.stack[t].pop(),
                                        r = this.quill.getContents(),
                                        i = n.invert(r);
                                    this.stack[e].push(i), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n, o.a.sources.USER), this.ignoreChange = !1;
                                    var s = p(this.quill.scroll, n);
                                    this.quill.setSelection(s)
                                }
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                this.stack = {
                                    undo: [],
                                    redo: []
                                }
                            }
                        }, {
                            key: "cutoff",
                            value: function() {
                                this.lastRecorded = 0
                            }
                        }, {
                            key: "record",
                            value: function(t, e) {
                                if (0 !== t.ops.length) {
                                    this.stack.redo = [];
                                    var n = t.invert(e),
                                        r = Date.now();
                                    if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                        var o = this.stack.undo.pop();
                                        n = n.compose(o)
                                    } else this.lastRecorded = r;
                                    0 !== n.length() && (this.stack.undo.push(n), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift())
                                }
                            }
                        }, {
                            key: "redo",
                            value: function() {
                                this.change("redo", "undo")
                            }
                        }, {
                            key: "transform",
                            value: function(t) {
                                h(this.stack.undo, t), h(this.stack.redo, t)
                            }
                        }, {
                            key: "undo",
                            value: function() {
                                this.change("undo", "redo")
                            }
                        }]) && s(e.prototype, n), r && s(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), l
                    }(n(9).a);

                    function h(t, e) {
                        for (var n = e, r = t.length - 1; r >= 0; r -= 1) {
                            var o = t[r];
                            t[r] = n.transform(o, !0), n = o.transform(n), 0 === t[r].length() && t.splice(r, 1)
                        }
                    }

                    function p(t, e) {
                        var n = e.reduce((function(t, e) {
                                return t + (e.delete || 0)
                            }), 0),
                            o = e.length() - n;
                        return function(t, e) {
                            var n = e.ops[e.ops.length - 1];
                            return null != n && (null != n.insert ? "string" == typeof n.insert && n.insert.endsWith("\n") : null != n.attributes && Object.keys(n.attributes).some((function(e) {
                                return null != t.query(e, r.Scope.BLOCK)
                            })))
                        }(t, e) && (o -= 1), o
                    }
                    f.DEFAULTS = {
                        delay: 1e3,
                        maxStack: 100,
                        userOnly: !1
                    }
                }, , , function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var r = n(0),
                        o = n(4),
                        i = n(8),
                        s = n(15),
                        a = n(16),
                        u = n(37),
                        c = n(12),
                        l = n(14),
                        f = n(7),
                        h = n(38),
                        p = n(33),
                        d = n(19),
                        v = n(1),
                        y = n.n(v),
                        m = n(3);

                    function b(t) {
                        return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, b(t)
                    }

                    function g(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function E(t, e) {
                        return E = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, E(t, e)
                    }

                    function w(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = _(t);
                            if (e) {
                                var o = _(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === b(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function _(t) {
                        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, _(t)
                    }
                    var T = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && E(t, e)
                        }(i, t);
                        var e, n, r, o = w(i);

                        function i(t, e) {
                            var n;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, i), n = o.call(this, t, e), t.root.addEventListener("drop", (function(e) {
                                var r;
                                if (e.preventDefault(), document.caretRangeFromPoint) r = document.caretRangeFromPoint(e.clientX, e.clientY);
                                else {
                                    if (!document.caretPositionFromPoint) return;
                                    var o = document.caretPositionFromPoint(e.clientX, e.clientY);
                                    (r = document.createRange()).setStart(o.offsetNode, o.offset), r.setEnd(o.offsetNode, o.offset)
                                }
                                var i = t.selection.normalizeNative(r),
                                    s = t.selection.normalizedToRange(i);
                                n.upload(s, e.dataTransfer.files)
                            })), n
                        }
                        return e = i, (n = [{
                            key: "upload",
                            value: function(t, e) {
                                var n = this,
                                    r = [];
                                Array.from(e).forEach((function(t) {
                                    t && n.options.mimetypes.includes(t.type) && r.push(t)
                                })), r.length > 0 && this.options.handler.call(this, t, r)
                            }
                        }]) && g(e.prototype, n), r && g(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), i
                    }(n(9).a);
                    T.DEFAULTS = {
                        mimetypes: ["image/png", "image/jpeg"],
                        handler: function(t, e) {
                            var n = this,
                                r = e.map((function(t) {
                                    return new Promise((function(e) {
                                        var n = new FileReader;
                                        n.onload = function(t) {
                                            e(t.target.result)
                                        }, n.readAsDataURL(t)
                                    }))
                                }));
                            Promise.all(r).then((function(e) {
                                var r = e.reduce((function(t, e) {
                                    return t.insert({
                                        image: e
                                    })
                                }), (new y.a).retain(t.index).delete(t.length));
                                n.quill.updateContents(r, m.a.sources.USER), n.quill.setSelection(t.index + e.length, m.a.sources.SILENT)
                            }))
                        }
                    };
                    var A = T;
                    r.a.register({
                        "blots/block": o.d,
                        "blots/block/embed": o.a,
                        "blots/break": i.a,
                        "blots/container": s.a,
                        "blots/cursor": a.a,
                        "blots/embed": u.a,
                        "blots/inline": c.a,
                        "blots/scroll": l.a,
                        "blots/text": f.a,
                        "modules/clipboard": h.a,
                        "modules/history": p.a,
                        "modules/keyboard": d.b,
                        "modules/uploader": A
                    }), e.default = {
                        Quill: r.a
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(7);

                    function i(t) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, i(t)
                    }

                    function s(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function a() {
                        return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                            }
                        }, a.apply(this, arguments)
                    }

                    function u(t, e) {
                        return u = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, u(t, e)
                    }

                    function c(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = l(t);
                            if (e) {
                                var o = l(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, n)
                        }
                    }

                    function l(t) {
                        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, l(t)
                    }
                    var f = "\ufeff",
                        h = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && u(t, e)
                            }(h, t);
                            var e, n, r, i = c(h);

                            function h(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, h), (n = i.call(this, t, e)).contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), Array.from(n.domNode.childNodes).forEach((function(t) {
                                    n.contentNode.appendChild(t)
                                })), n.leftGuard = document.createTextNode(f), n.rightGuard = document.createTextNode(f), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
                            }
                            return e = h, (n = [{
                                key: "index",
                                value: function(t, e) {
                                    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : a(l(h.prototype), "index", this).call(this, t, e)
                                }
                            }, {
                                key: "restore",
                                value: function(t) {
                                    var e, n, r = t.data.split(f).join("");
                                    if (t === this.leftGuard)
                                        if (this.prev instanceof o.a) {
                                            var i = this.prev.length();
                                            this.prev.insertAt(i, r), e = {
                                                startNode: this.prev.domNode,
                                                startOffset: i + r.length
                                            }
                                        } else n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this), e = {
                                            startNode: n,
                                            startOffset: r.length
                                        };
                                    else t === this.rightGuard && (this.next instanceof o.a ? (this.next.insertAt(0, r), e = {
                                        startNode: this.next.domNode,
                                        startOffset: r.length
                                    }) : (n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this.next), e = {
                                        startNode: n,
                                        startOffset: r.length
                                    }));
                                    return t.data = f, e
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    t.forEach((function(t) {
                                        if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                            var r = n.restore(t.target);
                                            r && (e.range = r)
                                        }
                                    }))
                                }
                            }]) && s(e.prototype, n), r && s(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), h
                        }(r.EmbedBlot);
                    e.a = h
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return j
                    })), n.d(e, "b", (function() {
                        return F
                    }));
                    var r = n(1),
                        o = n.n(r),
                        i = n(2),
                        s = n(4),
                        a = n(0),
                        u = n(11),
                        c = n(9),
                        l = n(24),
                        f = n(28),
                        h = n(13),
                        p = n(21),
                        d = n(22),
                        v = n(29),
                        y = n(30),
                        m = n(19);

                    function b(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function g(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? b(Object(n), !0).forEach((function(e) {
                                w(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function E(t) {
                        return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, E(t)
                    }

                    function w(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function _(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, o, i = [],
                                    s = !0,
                                    a = !1;
                                try {
                                    for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                                } catch (u) {
                                    a = !0, o = u
                                } finally {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return T(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function T(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function A(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function x(t, e) {
                        return x = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, x(t, e)
                    }

                    function O(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = N(t);
                            if (e) {
                                var o = N(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return R(t)
                            }(this, n)
                        }
                    }

                    function R(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }

                    function N(t) {
                        return N = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, N(t)
                    }
                    var S = Object(u.a)("quill:clipboard"),
                        C = [
                            [Node.TEXT_NODE, function(t, e) {
                                var n = t.data;
                                if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                                if (0 === n.trim().length && n.includes("\n")) return e;
                                if (!D(t)) {
                                    var r = function(t, e) {
                                        var n = e.replace(/[^\u00a0]/g, "");
                                        return n.length < 1 && t ? " " : n
                                    };
                                    n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && B(t.parentNode) || null != t.previousSibling && B(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && B(t.parentNode) || null != t.nextSibling && B(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
                                }
                                return e.insert(n)
                            }],
                            [Node.TEXT_NODE, H],
                            ["br", function(t, e) {
                                return k(e, "\n") || e.insert("\n"), e
                            }],
                            [Node.ELEMENT_NODE, H],
                            [Node.ELEMENT_NODE, function(t, e, n) {
                                var r = n.query(t);
                                if (null == r) return e;
                                if (r.prototype instanceof i.EmbedBlot) {
                                    var s = {},
                                        a = r.value(t);
                                    if (null != a) return s[r.blotName] = a, (new o.a).insert(s, r.formats(t, n))
                                } else if (r.prototype instanceof i.BlockBlot && !k(e, "\n") && e.insert("\n"), "function" == typeof r.formats) return I(e, r.blotName, r.formats(t, n));
                                return e
                            }],
                            [Node.ELEMENT_NODE, function(t, e, n) {
                                var r = i.Attributor.keys(t),
                                    o = i.ClassAttributor.keys(t),
                                    s = i.StyleAttributor.keys(t),
                                    a = {};
                                return r.concat(o).concat(s).forEach((function(e) {
                                    var r = n.query(e, i.Scope.ATTRIBUTE);
                                    null != r && (a[r.attrName] = r.value(t), a[r.attrName]) || (null == (r = P[e]) || r.attrName !== e && r.keyName !== e || (a[r.attrName] = r.value(t) || void 0), null == (r = L[e]) || r.attrName !== e && r.keyName !== e || (r = L[e], a[r.attrName] = r.value(t) || void 0))
                                })), Object.keys(a).length > 0 ? I(e, a) : e
                            }],
                            [Node.ELEMENT_NODE, function(t, e) {
                                var n = {},
                                    r = t.style || {};
                                return "italic" === r.fontStyle && (n.italic = !0), "underline" === r.textDecoration && (n.underline = !0), "line-through" === r.textDecoration && (n.strike = !0), (r.fontWeight.startsWith("bold") || parseInt(r.fontWeight, 10) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = I(e, n)), parseFloat(r.textIndent || 0) > 0 ? (new o.a).insert("\t").concat(e) : e
                            }],
                            ["li", function(t, e, n) {
                                var r = n.query(t);
                                if (null == r || "list" !== r.blotName || !k(e, "\n")) return e;
                                for (var i = -1, s = t.parentNode; null != s;)["OL", "UL"].includes(s.tagName) && (i += 1), s = s.parentNode;
                                return i <= 0 ? e : e.reduce((function(t, e) {
                                    return e.attributes && "number" == typeof e.attributes.indent ? t.push(e) : t.insert(e.insert, g({
                                        indent: i
                                    }, e.attributes || {}))
                                }), new o.a)
                            }],
                            ["ol, ul", function(t, e) {
                                var n = "OL" === t.tagName ? "ordered" : "bullet";
                                return I(e, "list", n)
                            }],
                            ["pre", function(t, e, n) {
                                var r = n.query("code-block"),
                                    o = !r || r.formats(t, n);
                                return I(e, "code-block", o)
                            }],
                            ["tr", function(t, e) {
                                var n = "TABLE" === t.parentNode.tagName ? t.parentNode : t.parentNode.parentNode,
                                    r = Array.from(n.querySelectorAll("tr")).indexOf(t) + 1;
                                return I(e, "table", r)
                            }],
                            ["b", U.bind(U, "bold")],
                            ["i", U.bind(U, "italic")],
                            ["strike", U.bind(U, "strike")],
                            ["style", function() {
                                return new o.a
                            }]
                        ],
                        P = [l.a, d.a].reduce((function(t, e) {
                            return t[e.keyName] = e, t
                        }), {}),
                        L = [l.c, f.b, p.c, d.c, v.b, y.b].reduce((function(t, e) {
                            return t[e.keyName] = e, t
                        }), {}),
                        j = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && x(t, e)
                            }(s, t);
                            var e, n, r, i = O(s);

                            function s(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, s), (n = i.call(this, t, e)).quill.root.addEventListener("copy", (function(t) {
                                    return n.onCaptureCopy(t, !1)
                                })), n.quill.root.addEventListener("cut", (function(t) {
                                    return n.onCaptureCopy(t, !0)
                                })), n.quill.root.addEventListener("paste", n.onCapturePaste.bind(R(n))), n.matchers = [], C.concat(n.options.matchers).forEach((function(t) {
                                    var e = _(t, 2),
                                        r = e[0],
                                        o = e[1];
                                    n.addMatcher(r, o)
                                })), n
                            }
                            return e = s, n = [{
                                key: "addMatcher",
                                value: function(t, e) {
                                    this.matchers.push([t, e])
                                }
                            }, {
                                key: "convert",
                                value: function(t) {
                                    var e = t.html,
                                        n = t.text,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (r[h.c.blotName]) return (new o.a).insert(n, w({}, h.c.blotName, r[h.c.blotName]));
                                    if (!e) return (new o.a).insert(n || "");
                                    var i = this.convertHTML(e);
                                    return k(i, "\n") && (null == i.ops[i.ops.length - 1].attributes || r.table) ? i.compose((new o.a).retain(i.length() - 1).delete(1)) : i
                                }
                            }, {
                                key: "convertHTML",
                                value: function(t) {
                                    var e = (new DOMParser).parseFromString(t, "text/html").body,
                                        n = new WeakMap,
                                        r = _(this.prepareMatching(e, n), 2),
                                        o = r[0],
                                        i = r[1];
                                    return F(this.quill.scroll, e, o, i, n)
                                }
                            }, {
                                key: "dangerouslyPasteHTML",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.a.sources.API;
                                    if ("string" == typeof t) {
                                        var r = this.convert({
                                            html: t,
                                            text: ""
                                        });
                                        this.quill.setContents(r, e), this.quill.setSelection(0, a.a.sources.SILENT)
                                    } else {
                                        var i = this.convert({
                                            html: e,
                                            text: ""
                                        });
                                        this.quill.updateContents((new o.a).retain(t).concat(i), n), this.quill.setSelection(t + i.length(), a.a.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onCaptureCopy",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (!t.defaultPrevented) {
                                        t.preventDefault();
                                        var n = _(this.quill.selection.getRange(), 1)[0];
                                        if (null != n) {
                                            var r = this.onCopy(n, e),
                                                o = r.html,
                                                i = r.text;
                                            t.clipboardData.setData("text/plain", i), t.clipboardData.setData("text/html", o), e && Object(m.c)({
                                                range: n,
                                                quill: this.quill
                                            })
                                        }
                                    }
                                }
                            }, {
                                key: "onCapturePaste",
                                value: function(t) {
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        t.preventDefault();
                                        var e = this.quill.getSelection(!0);
                                        if (null != e) {
                                            var n = t.clipboardData.getData("text/html"),
                                                r = t.clipboardData.getData("text/plain"),
                                                o = Array.from(t.clipboardData.files || []);
                                            if (!n && o.length > 0) this.quill.uploader.upload(e, o);
                                            else {
                                                if (n && o.length > 0) {
                                                    var i = (new DOMParser).parseFromString(n, "text/html");
                                                    if (1 === i.body.childElementCount && "IMG" === i.body.firstElementChild.tagName) return void this.quill.uploader.upload(e, o)
                                                }
                                                this.onPaste(e, {
                                                    html: n,
                                                    text: r
                                                })
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "onCopy",
                                value: function(t) {
                                    var e = this.quill.getText(t);
                                    return {
                                        html: this.quill.getSemanticHTML(t),
                                        text: e
                                    }
                                }
                            }, {
                                key: "onPaste",
                                value: function(t, e) {
                                    var n = e.text,
                                        r = e.html,
                                        i = this.quill.getFormat(t.index),
                                        s = this.convert({
                                            text: n,
                                            html: r
                                        }, i);
                                    S.log("onPaste", s, {
                                        text: n,
                                        html: r
                                    });
                                    var u = (new o.a).retain(t.index).delete(t.length).concat(s);
                                    this.quill.updateContents(u, a.a.sources.USER), this.quill.setSelection(u.length() - t.length, a.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            }, {
                                key: "prepareMatching",
                                value: function(t, e) {
                                    var n = [],
                                        r = [];
                                    return this.matchers.forEach((function(o) {
                                        var i = _(o, 2),
                                            s = i[0],
                                            a = i[1];
                                        switch (s) {
                                            case Node.TEXT_NODE:
                                                r.push(a);
                                                break;
                                            case Node.ELEMENT_NODE:
                                                n.push(a);
                                                break;
                                            default:
                                                Array.from(t.querySelectorAll(s)).forEach((function(t) {
                                                    e.has(t) ? e.get(t).push(a) : e.set(t, [a])
                                                }))
                                        }
                                    })), [n, r]
                                }
                            }], n && A(e.prototype, n), r && A(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), s
                        }(c.a);

                    function I(t, e, n) {
                        return "object" === E(e) ? Object.keys(e).reduce((function(t, n) {
                            return I(t, n, e[n])
                        }), t) : t.reduce((function(t, r) {
                            if (r.attributes && r.attributes[e]) return t.push(r);
                            var o = n ? w({}, e, n) : {};
                            return t.insert(r.insert, g(g({}, o), r.attributes))
                        }), new o.a)
                    }

                    function k(t, e) {
                        for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                            var o = t.ops[r];
                            if ("string" != typeof o.insert) break;
                            n = o.insert + n
                        }
                        return n.slice(-1 * e.length) === e
                    }

                    function B(t) {
                        return 0 !== t.childNodes.length && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase())
                    }
                    j.DEFAULTS = {
                        matchers: []
                    };
                    var M = new WeakMap;

                    function D(t) {
                        return null != t && (M.has(t) || ("PRE" === t.tagName ? M.set(t, !0) : M.set(t, D(t.parentNode))), M.get(t))
                    }

                    function F(t, e, n, r, i) {
                        return e.nodeType === e.TEXT_NODE ? r.reduce((function(n, r) {
                            return r(e, n, t)
                        }), new o.a) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((function(o, s) {
                            var a = F(t, s, n, r, i);
                            return s.nodeType === e.ELEMENT_NODE && (a = n.reduce((function(e, n) {
                                return n(s, e, t)
                            }), a), a = (i.get(s) || []).reduce((function(e, n) {
                                return n(s, e, t)
                            }), a)), o.concat(a)
                        }), new o.a) : new o.a
                    }

                    function U(t, e, n) {
                        return I(n, t, !0)
                    }

                    function H(t, e, n) {
                        if (!k(e, "\n")) {
                            if (B(t)) return e.insert("\n");
                            if (e.length() > 0 && t.nextSibling)
                                for (var r = t.nextSibling; null != r;) {
                                    if (B(r)) return e.insert("\n");
                                    var o = n.query(r);
                                    if (o && o.prototype instanceof s.a) return e.insert("\n");
                                    r = r.firstChild
                                }
                        }
                        return e
                    }
                }, function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || new Function("return this")()
                    } catch (r) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                }, function(t, e) {
                    t.exports = function(t) {
                        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function() {
                                return t.l
                            }
                        }), Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function() {
                                return t.i
                            }
                        }), t.webpackPolyfill = 1), t
                    }
                }, function(t, e) {}, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o, i = r(n(52));
                    ! function(t) {
                        t.iterator = function(t) {
                            return new i.default(t)
                        }, t.length = function(t) {
                            return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                        }
                    }(o || (o = {})), e.default = o
                }, function(t, e) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        r = "~";

                    function o() {}

                    function i(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }

                    function s(t, e, n, o, s) {
                        if ("function" != typeof n) throw new TypeError("The listener must be a function");
                        var a = new i(n, o || t, s),
                            u = r ? r + e : e;
                        return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a, t._eventsCount++), t
                    }

                    function a(t, e) {
                        0 == --t._eventsCount ? t._events = new o : delete t._events[e]
                    }

                    function u() {
                        this._events = new o, this._eventsCount = 0
                    }
                    Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), u.prototype.eventNames = function() {
                        var t, e, o = [];
                        if (0 === this._eventsCount) return o;
                        for (e in t = this._events) n.call(t, e) && o.push(r ? e.slice(1) : e);
                        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
                    }, u.prototype.listeners = function(t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var o = 0, i = n.length, s = new Array(i); o < i; o++) s[o] = n[o].fn;
                        return s
                    }, u.prototype.listenerCount = function(t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        return n ? n.fn ? 1 : n.length : 0
                    }, u.prototype.emit = function(t, e, n, o, i, s) {
                        var a = r ? r + t : t;
                        if (!this._events[a]) return !1;
                        var u, c, l = this._events[a],
                            f = arguments.length;
                        if (l.fn) {
                            switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                                case 1:
                                    return l.fn.call(l.context), !0;
                                case 2:
                                    return l.fn.call(l.context, e), !0;
                                case 3:
                                    return l.fn.call(l.context, e, n), !0;
                                case 4:
                                    return l.fn.call(l.context, e, n, o), !0;
                                case 5:
                                    return l.fn.call(l.context, e, n, o, i), !0;
                                case 6:
                                    return l.fn.call(l.context, e, n, o, i, s), !0
                            }
                            for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                            l.fn.apply(l.context, u)
                        } else {
                            var h, p = l.length;
                            for (c = 0; c < p; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), f) {
                                case 1:
                                    l[c].fn.call(l[c].context);
                                    break;
                                case 2:
                                    l[c].fn.call(l[c].context, e);
                                    break;
                                case 3:
                                    l[c].fn.call(l[c].context, e, n);
                                    break;
                                case 4:
                                    l[c].fn.call(l[c].context, e, n, o);
                                    break;
                                default:
                                    if (!u)
                                        for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                                    l[c].fn.apply(l[c].context, u)
                            }
                        }
                        return !0
                    }, u.prototype.on = function(t, e, n) {
                        return s(this, t, e, n, !1)
                    }, u.prototype.once = function(t, e, n) {
                        return s(this, t, e, n, !0)
                    }, u.prototype.removeListener = function(t, e, n, o) {
                        var i = r ? r + t : t;
                        if (!this._events[i]) return this;
                        if (!e) return a(this, i), this;
                        var s = this._events[i];
                        if (s.fn) s.fn !== e || o && !s.once || n && s.context !== n || a(this, i);
                        else {
                            for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== e || o && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                            c.length ? this._events[i] = 1 === c.length ? c[0] : c : a(this, i)
                        }
                        return this
                    }, u.prototype.removeAllListeners = function(t) {
                        var e;
                        return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new o, this._eventsCount = 0), this
                    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, void 0 !== t && (t.exports = u)
                }, , , , , , , function(t, e) {
                    var n = -1,
                        r = 1,
                        o = 0;

                    function i(t, e, l, f) {
                        if (t === e) return t ? [
                            [o, t]
                        ] : [];
                        if (null != l) {
                            var h = function(t, e, n) {
                                var r = "number" == typeof n ? {
                                        index: n,
                                        length: 0
                                    } : n.oldRange,
                                    o = "number" == typeof n ? null : n.newRange,
                                    i = t.length,
                                    s = e.length;
                                if (0 === r.length && (null === o || 0 === o.length)) {
                                    var a = r.index,
                                        u = t.slice(0, a),
                                        c = t.slice(a),
                                        l = o ? o.index : null,
                                        f = a + s - i;
                                    if ((null === l || l === f) && !(f < 0 || f > s)) {
                                        var h = e.slice(0, f);
                                        if ((y = e.slice(f)) === c) {
                                            var p = Math.min(a, f);
                                            if ((b = u.slice(0, p)) === (E = h.slice(0, p))) return d(b, u.slice(p), h.slice(p), c)
                                        }
                                    }
                                    if (null === l || l === a) {
                                        var v = a,
                                            y = (h = e.slice(0, v), e.slice(v));
                                        if (h === u) {
                                            var m = Math.min(i - v, s - v);
                                            if ((g = c.slice(c.length - m)) === (w = y.slice(y.length - m))) return d(u, c.slice(0, c.length - m), y.slice(0, y.length - m), g)
                                        }
                                    }
                                }
                                if (r.length > 0 && o && 0 === o.length) {
                                    var b = t.slice(0, r.index),
                                        g = t.slice(r.index + r.length);
                                    if (!(s < (p = b.length) + (m = g.length))) {
                                        var E = e.slice(0, p),
                                            w = e.slice(s - m);
                                        if (b === E && g === w) return d(b, t.slice(p, i - m), e.slice(p, s - m), g)
                                    }
                                }
                                return null
                            }(t, e, l);
                            if (h) return h
                        }
                        var p = a(t, e),
                            v = t.substring(0, p);
                        p = u(t = t.substring(p), e = e.substring(p));
                        var y = t.substring(t.length - p),
                            m = function(t, e) {
                                var c;
                                if (!t) return [
                                    [r, e]
                                ];
                                if (!e) return [
                                    [n, t]
                                ];
                                var l = t.length > e.length ? t : e,
                                    f = t.length > e.length ? e : t,
                                    h = l.indexOf(f);
                                if (-1 !== h) return c = [
                                    [r, l.substring(0, h)],
                                    [o, f],
                                    [r, l.substring(h + f.length)]
                                ], t.length > e.length && (c[0][0] = c[2][0] = n), c;
                                if (1 === f.length) return [
                                    [n, t],
                                    [r, e]
                                ];
                                var p = function(t, e) {
                                    var n = t.length > e.length ? t : e,
                                        r = t.length > e.length ? e : t;
                                    if (n.length < 4 || 2 * r.length < n.length) return null;

                                    function o(t, e, n) {
                                        for (var r, o, i, s, c = t.substring(n, n + Math.floor(t.length / 4)), l = -1, f = ""; - 1 !== (l = e.indexOf(c, l + 1));) {
                                            var h = a(t.substring(n), e.substring(l)),
                                                p = u(t.substring(0, n), e.substring(0, l));
                                            f.length < p + h && (f = e.substring(l - p, l) + e.substring(l, l + h), r = t.substring(0, n - p), o = t.substring(n + h), i = e.substring(0, l - p), s = e.substring(l + h))
                                        }
                                        return 2 * f.length >= t.length ? [r, o, i, s, f] : null
                                    }
                                    var i, s, c, l, f, h = o(n, r, Math.ceil(n.length / 4)),
                                        p = o(n, r, Math.ceil(n.length / 2));
                                    if (!h && !p) return null;
                                    i = p ? h && h[4].length > p[4].length ? h : p : h, t.length > e.length ? (s = i[0], c = i[1], l = i[2], f = i[3]) : (l = i[0], f = i[1], s = i[2], c = i[3]);
                                    var d = i[4];
                                    return [s, c, l, f, d]
                                }(t, e);
                                if (p) {
                                    var d = p[0],
                                        v = p[1],
                                        y = p[2],
                                        m = p[3],
                                        b = p[4],
                                        g = i(d, y),
                                        E = i(v, m);
                                    return g.concat([
                                        [o, b]
                                    ], E)
                                }
                                return function(t, e) {
                                    for (var o = t.length, i = e.length, a = Math.ceil((o + i) / 2), u = a, c = 2 * a, l = new Array(c), f = new Array(c), h = 0; h < c; h++) l[h] = -1, f[h] = -1;
                                    l[u + 1] = 0, f[u + 1] = 0;
                                    for (var p = o - i, d = p % 2 != 0, v = 0, y = 0, m = 0, b = 0, g = 0; g < a; g++) {
                                        for (var E = -g + v; E <= g - y; E += 2) {
                                            for (var w = u + E, _ = (R = E === -g || E !== g && l[w - 1] < l[w + 1] ? l[w + 1] : l[w - 1] + 1) - E; R < o && _ < i && t.charAt(R) === e.charAt(_);) R++, _++;
                                            if (l[w] = R, R > o) y += 2;
                                            else if (_ > i) v += 2;
                                            else if (d && (x = u + p - E) >= 0 && x < c && -1 !== f[x] && R >= (A = o - f[x])) return s(t, e, R, _)
                                        }
                                        for (var T = -g + m; T <= g - b; T += 2) {
                                            for (var A, x = u + T, O = (A = T === -g || T !== g && f[x - 1] < f[x + 1] ? f[x + 1] : f[x - 1] + 1) - T; A < o && O < i && t.charAt(o - A - 1) === e.charAt(i - O - 1);) A++, O++;
                                            if (f[x] = A, A > o) b += 2;
                                            else if (O > i) m += 2;
                                            else if (!d) {
                                                var R;
                                                if ((w = u + p - T) >= 0 && w < c && -1 !== l[w])
                                                    if (_ = u + (R = l[w]) - w, R >= (A = o - A)) return s(t, e, R, _)
                                            }
                                        }
                                    }
                                    return [
                                        [n, t],
                                        [r, e]
                                    ]
                                }(t, e)
                            }(t = t.substring(0, t.length - p), e = e.substring(0, e.length - p));
                        return v && m.unshift([o, v]), y && m.push([o, y]), c(m, f), m
                    }

                    function s(t, e, n, r) {
                        var o = t.substring(0, n),
                            s = e.substring(0, r),
                            a = t.substring(n),
                            u = e.substring(r),
                            c = i(o, s),
                            l = i(a, u);
                        return c.concat(l)
                    }

                    function a(t, e) {
                        if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
                        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                        return l(t.charCodeAt(o - 1)) && o--, o
                    }

                    function u(t, e) {
                        if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
                        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                        return f(t.charCodeAt(t.length - o)) && o--, o
                    }

                    function c(t, e) {
                        t.push([o, ""]);
                        for (var i, s = 0, l = 0, f = 0, d = "", v = ""; s < t.length;)
                            if (s < t.length - 1 && !t[s][1]) t.splice(s, 1);
                            else switch (t[s][0]) {
                                case r:
                                    f++, v += t[s][1], s++;
                                    break;
                                case n:
                                    l++, d += t[s][1], s++;
                                    break;
                                case o:
                                    var y = s - f - l - 1;
                                    if (e) {
                                        if (y >= 0 && p(t[y][1])) {
                                            var m = t[y][1].slice(-1);
                                            if (t[y][1] = t[y][1].slice(0, -1), d = m + d, v = m + v, !t[y][1]) {
                                                t.splice(y, 1), s--;
                                                var b = y - 1;
                                                t[b] && t[b][0] === r && (f++, v = t[b][1] + v, b--), t[b] && t[b][0] === n && (l++, d = t[b][1] + d, b--), y = b
                                            }
                                        }
                                        h(t[s][1]) && (m = t[s][1].charAt(0), t[s][1] = t[s][1].slice(1), d += m, v += m)
                                    }
                                    if (s < t.length - 1 && !t[s][1]) {
                                        t.splice(s, 1);
                                        break
                                    }
                                    if (d.length > 0 || v.length > 0) {
                                        d.length > 0 && v.length > 0 && (0 !== (i = a(v, d)) && (y >= 0 ? t[y][1] += v.substring(0, i) : (t.splice(0, 0, [o, v.substring(0, i)]), s++), v = v.substring(i), d = d.substring(i)), 0 !== (i = u(v, d)) && (t[s][1] = v.substring(v.length - i) + t[s][1], v = v.substring(0, v.length - i), d = d.substring(0, d.length - i)));
                                        var g = f + l;
                                        0 === d.length && 0 === v.length ? (t.splice(s - g, g), s -= g) : 0 === d.length ? (t.splice(s - g, g, [r, v]), s = s - g + 1) : 0 === v.length ? (t.splice(s - g, g, [n, d]), s = s - g + 1) : (t.splice(s - g, g, [n, d], [r, v]), s = s - g + 2)
                                    }
                                    0 !== s && t[s - 1][0] === o ? (t[s - 1][1] += t[s][1], t.splice(s, 1)) : s++, f = 0, l = 0, d = "", v = ""
                            }
                        "" === t[t.length - 1][1] && t.pop();
                        var E = !1;
                        for (s = 1; s < t.length - 1;) t[s - 1][0] === o && t[s + 1][0] === o && (t[s][1].substring(t[s][1].length - t[s - 1][1].length) === t[s - 1][1] ? (t[s][1] = t[s - 1][1] + t[s][1].substring(0, t[s][1].length - t[s - 1][1].length), t[s + 1][1] = t[s - 1][1] + t[s + 1][1], t.splice(s - 1, 1), E = !0) : t[s][1].substring(0, t[s + 1][1].length) == t[s + 1][1] && (t[s - 1][1] += t[s + 1][1], t[s][1] = t[s][1].substring(t[s + 1][1].length) + t[s + 1][1], t.splice(s + 1, 1), E = !0)), s++;
                        E && c(t, e)
                    }

                    function l(t) {
                        return t >= 55296 && t <= 56319
                    }

                    function f(t) {
                        return t >= 56320 && t <= 57343
                    }

                    function h(t) {
                        return f(t.charCodeAt(0))
                    }

                    function p(t) {
                        return l(t.charCodeAt(t.length - 1))
                    }

                    function d(t, e, i, s) {
                        return p(t) || h(s) ? null : function(t) {
                            for (var e = [], n = 0; n < t.length; n++) t[n][1].length > 0 && e.push(t[n]);
                            return e
                        }([
                            [o, t],
                            [n, e],
                            [r, i],
                            [o, s]
                        ])
                    }

                    function v(t, e, n) {
                        return i(t, e, n, !0)
                    }
                    v.INSERT = r, v.DELETE = n, v.EQUAL = o, t.exports = v
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o, i = r(n(10)),
                        s = r(n(18));
                    ! function(t) {
                        t.compose = function(t, e, n) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                            var r = i.default(e);
                            for (var o in n || (r = Object.keys(r).reduce((function(t, e) {
                                    return null != r[e] && (t[e] = r[e]), t
                                }), {})), t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
                            return Object.keys(r).length > 0 ? r : void 0
                        }, t.diff = function(t, e) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                            var n = Object.keys(t).concat(Object.keys(e)).reduce((function(n, r) {
                                return s.default(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                            }), {});
                            return Object.keys(n).length > 0 ? n : void 0
                        }, t.invert = function(t, e) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), t = t || {};
                            var n = Object.keys(e).reduce((function(n, r) {
                                return e[r] !== t[r] && void 0 !== t[r] && (n[r] = e[r]), n
                            }), {});
                            return Object.keys(t).reduce((function(n, r) {
                                return t[r] !== e[r] && void 0 === e[r] && (n[r] = null), n
                            }), n)
                        }, t.transform = function(t, e, n) {
                            if (void 0 === n && (n = !1), "object" != typeof t) return e;
                            if ("object" == typeof e) {
                                if (!n) return e;
                                var r = Object.keys(e).reduce((function(n, r) {
                                    return void 0 === t[r] && (n[r] = e[r]), n
                                }), {});
                                return Object.keys(r).length > 0 ? r : void 0
                            }
                        }
                    }(o || (o = {})), e.default = o
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = r(n(42)),
                        i = function() {
                            function t(t) {
                                this.ops = t, this.index = 0, this.offset = 0
                            }
                            return t.prototype.hasNext = function() {
                                return this.peekLength() < 1 / 0
                            }, t.prototype.next = function(t) {
                                t || (t = 1 / 0);
                                var e = this.ops[this.index];
                                if (e) {
                                    var n = this.offset,
                                        r = o.default.length(e);
                                    if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
                                        delete: t
                                    };
                                    var i = {};
                                    return e.attributes && (i.attributes = e.attributes), "number" == typeof e.retain ? i.retain = t : "string" == typeof e.insert ? i.insert = e.insert.substr(n, t) : i.insert = e.insert, i
                                }
                                return {
                                    retain: 1 / 0
                                }
                            }, t.prototype.peek = function() {
                                return this.ops[this.index]
                            }, t.prototype.peekLength = function() {
                                return this.ops[this.index] ? o.default.length(this.ops[this.index]) - this.offset : 1 / 0
                            }, t.prototype.peekType = function() {
                                return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
                            }, t.prototype.rest = function() {
                                if (this.hasNext()) {
                                    if (0 === this.offset) return this.ops.slice(this.index);
                                    var t = this.offset,
                                        e = this.index,
                                        n = this.next(),
                                        r = this.ops.slice(this.index);
                                    return this.offset = t, this.index = e, [n].concat(r)
                                }
                                return []
                            }, t
                        }();
                    e.default = i
                }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
                    t.exports = n(36)
                }]).default
            }, t.exports = e()
        },
        928662: (t, e, n) => {
            "use strict";
            n.d(e, {
                l: () => o
            });
            var r = n(977305);

            function o(t) {
                return t && "function" == typeof t[r.s]
            }
        },
        936791: (t, e, n) => {
            "use strict";
            n.d(e, {
                k: () => r
            });
            var r = function() {
                function t() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        944339: (t, e, n) => {
            "use strict";
            n.d(e, {
                C6: () => o,
                Cl: () => i,
                Tt: () => s,
                fX: () => a
            });
            var r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, r(t, e)
            };

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function s(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }
            Object.create;

            function a(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            Object.create;
            "function" == typeof SuppressedError && SuppressedError
        },
        949359: (t, e, n) => {
            "use strict";
            n.d(e, {
                b: () => o
            });
            var r = n(237157),
                o = new(n(799214).q)(r.R)
        },
        951265: (t, e, n) => {
            "use strict";

            function r(t, e) {
                return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }

            function o(t, e) {
                t.classList ? t.classList.remove(e) : "string" == typeof t.className ? t.className = r(t.className, e) : t.setAttribute("class", r(t.className && t.className.baseVal || "", e))
            }
            n.d(e, {
                A: () => o
            })
        },
        964130: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => r
            });
            const r = {
                disabled: !1
            }
        },
        968975: (t, e, n) => {
            "use strict";
            var r;
            n.d(e, {
                we: () => O
            });
            var o = n(845212),
                i = (n(895590), n(612151), n(821046), n(276089)),
                s = n(556020);
            n(523546), n(950873);
            const a = { ...r || (r = n.t(o, 2))
                },
                u = a.useInsertionEffect || (t => t());

            function c(t) {
                const e = o.useRef((() => {
                    0
                }));
                return u((() => {
                    e.current = t
                })), o.useCallback((function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null == e.current ? void 0 : e.current(...n)
                }), [])
            }
            const l = "ArrowUp",
                f = "ArrowDown",
                h = "ArrowLeft",
                p = "ArrowRight";
            var d = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
            const v = [h, p],
                y = [l, f];
            let m = !1,
                b = 0;
            const g = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + b++;
            const E = a.useId || function() {
                const [t, e] = o.useState((() => m ? g() : void 0));
                return d((() => {
                    null == t && e(g())
                }), []), o.useEffect((() => {
                    m = !0
                }), []), t
            };

            function w() {
                const t = new Map;
                return {
                    emit(e, n) {
                        var r;
                        null == (r = t.get(e)) || r.forEach((t => t(n)))
                    },
                    on(e, n) {
                        t.set(e, [...t.get(e) || [], n])
                    },
                    off(e, n) {
                        var r;
                        t.set(e, (null == (r = t.get(e)) ? void 0 : r.filter((t => t !== n))) || [])
                    }
                }
            }
            const _ = o.createContext(null),
                T = o.createContext(null),
                A = () => {
                    var t;
                    return (null == (t = o.useContext(_)) ? void 0 : t.id) || null
                },
                x = () => o.useContext(T);

            function O(t) {
                void 0 === t && (t = {});
                const {
                    nodeId: e
                } = t, n = function(t) {
                    const {
                        open: e = !1,
                        onOpenChange: n,
                        elements: r
                    } = t, i = E(), s = o.useRef({}), [a] = o.useState((() => w())), u = null != A(), [l, f] = o.useState(r.reference), h = c(((t, e, r) => {
                        s.current.openEvent = t ? e : void 0, a.emit("openchange", {
                            open: t,
                            event: e,
                            reason: r,
                            nested: u
                        }), null == n || n(t, e, r)
                    })), p = o.useMemo((() => ({
                        setPositionReference: f
                    })), []), d = o.useMemo((() => ({
                        reference: l || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference
                    })), [l, r.reference, r.floating]);
                    return o.useMemo((() => ({
                        dataRef: s,
                        open: e,
                        onOpenChange: h,
                        elements: d,
                        events: a,
                        floatingId: i,
                        refs: p
                    })), [e, h, d, a, i, p])
                }({ ...t,
                    elements: {
                        reference: null,
                        floating: null,
                        ...t.elements
                    }
                }), r = t.rootContext || n, a = r.elements, [u, l] = o.useState(null), [f, h] = o.useState(null), p = (null == a ? void 0 : a.reference) || u, v = o.useRef(null), y = x();
                d((() => {
                    p && (v.current = p)
                }), [p]);
                const m = (0, s.we)({ ...t,
                        elements: { ...a,
                            ...f && {
                                reference: f
                            }
                        }
                    }),
                    b = o.useCallback((t => {
                        const e = (0, i.vq)(t) ? {
                            getBoundingClientRect: () => t.getBoundingClientRect(),
                            contextElement: t
                        } : t;
                        h(e), m.refs.setReference(e)
                    }), [m.refs]),
                    g = o.useCallback((t => {
                        ((0, i.vq)(t) || null === t) && (v.current = t, l(t)), ((0, i.vq)(m.refs.reference.current) || null === m.refs.reference.current || null !== t && !(0, i.vq)(t)) && m.refs.setReference(t)
                    }), [m.refs]),
                    _ = o.useMemo((() => ({ ...m.refs,
                        setReference: g,
                        setPositionReference: b,
                        domReference: v
                    })), [m.refs, g, b]),
                    T = o.useMemo((() => ({ ...m.elements,
                        domReference: p
                    })), [m.elements, p]),
                    O = o.useMemo((() => ({ ...m,
                        ...r,
                        refs: _,
                        elements: T,
                        nodeId: e
                    })), [m, _, T, e, r]);
                return d((() => {
                    r.dataRef.current.floatingContext = O;
                    const t = null == y ? void 0 : y.nodesRef.current.find((t => t.id === e));
                    t && (t.context = O)
                })), o.useMemo((() => ({ ...m,
                    context: O,
                    refs: _,
                    elements: T
                })), [m, _, T, O])
            }
        },
        976373: (t, e, n) => {
            "use strict";
            n.d(e, {
                B: () => s
            });
            var r = n(998083),
                o = n(335679),
                i = n(949359);

            function s(t, e) {
                return void 0 === e && (e = i.b),
                    function(n) {
                        return n.lift(new a(t, e))
                    }
            }
            var a = function() {
                    function t(t, e) {
                        this.dueTime = t, this.scheduler = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new u(t, this.dueTime, this.scheduler))
                    }, t
                }(),
                u = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.dueTime = n, o.scheduler = r, o.debouncedSubscription = null, o.lastValue = null, o.hasValue = !1, o
                    }
                    return r.C6(e, t), e.prototype._next = function(t) {
                        this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(c, this.dueTime, this))
                    }, e.prototype._complete = function() {
                        this.debouncedNext(), this.destination.complete()
                    }, e.prototype.debouncedNext = function() {
                        if (this.clearDebounce(), this.hasValue) {
                            var t = this.lastValue;
                            this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                        }
                    }, e.prototype.clearDebounce = function() {
                        var t = this.debouncedSubscription;
                        null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
                    }, e
                }(o.v);

            function c(t) {
                t.debouncedNext()
            }
        },
        977305: (t, e, n) => {
            "use strict";
            n.d(e, {
                s: () => r
            });
            var r = function() {
                return "function" == typeof Symbol && Symbol.observable || "@@observable"
            }()
        },
        982828: (t, e, n) => {
            "use strict";

            function r(t, e) {
                return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, r(t, e)
            }
            n.d(e, {
                A: () => r
            })
        },
        997752: (t, e, n) => {
            "use strict";
            n.d(e, {
                y: () => a
            });
            var r = n(375527),
                o = n(47911),
                i = n(387904),
                s = n(818334),
                a = function() {
                    function t(t) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var n = this,
                                a = n._parentOrParents,
                                c = n._ctorUnsubscribe,
                                l = n._unsubscribe,
                                f = n._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, a instanceof t) a.remove(this);
                            else if (null !== a)
                                for (var h = 0; h < a.length; ++h) {
                                    a[h].remove(this)
                                }
                            if ((0, i.T)(l)) {
                                c && (this._unsubscribe = void 0);
                                try {
                                    l.call(this)
                                } catch (v) {
                                    e = v instanceof s.Z ? u(v.errors) : [v]
                                }
                            }
                            if ((0, r.c)(f)) {
                                h = -1;
                                for (var p = f.length; ++h < p;) {
                                    var d = f[h];
                                    if ((0, o.G)(d)) try {
                                        d.unsubscribe()
                                    } catch (v) {
                                        e = e || [], v instanceof s.Z ? e = e.concat(u(v.errors)) : e.push(v)
                                    }
                                }
                            }
                            if (e) throw new s.Z(e)
                        }
                    }, t.prototype.add = function(e) {
                        var n = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof t)) {
                                    var r = n;
                                    (n = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var o = n._parentOrParents;
                        if (null === o) n._parentOrParents = this;
                        else if (o instanceof t) {
                            if (o === this) return n;
                            n._parentOrParents = [o, this]
                        } else {
                            if (-1 !== o.indexOf(this)) return n;
                            o.push(this)
                        }
                        var i = this._subscriptions;
                        return null === i ? this._subscriptions = [n] : i.push(n), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();

            function u(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof s.Z ? e.errors : e)
                }), [])
            }
        },
        998083: (t, e, n) => {
            "use strict";
            n.d(e, {
                C6: () => o
            });
            var r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                }, r(t, e)
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
        },
        999208: function(t, e, n) {
            var r;
            ! function(t, o, i) {
                function s(t) {
                    var e = this,
                        n = "";
                    e.next = function() {
                        var t = e.b,
                            n = e.c,
                            r = e.d,
                            o = e.a;
                        return t = t << 25 ^ t >>> 7 ^ n, n = n - r | 0, r = r << 24 ^ r >>> 8 ^ o, o = o - t | 0, e.b = t = t << 20 ^ t >>> 12 ^ n, e.c = n = n - r | 0, e.d = r << 16 ^ n >>> 16 ^ o, e.a = o - t | 0
                    }, e.a = 0, e.b = 0, e.c = -1640531527, e.d = 1367130551, t === Math.floor(t) ? (e.a = t / 4294967296 | 0, e.b = 0 | t) : n += t;
                    for (var r = 0; r < n.length + 20; r++) e.b ^= 0 | n.charCodeAt(r), e.next()
                }

                function a(t, e) {
                    return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
                }

                function u(t, e) {
                    var n = new s(t),
                        r = e && e.state,
                        o = function() {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function() {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function() {
                        return a(n, {})
                    }), o
                }
                o && o.exports ? o.exports = u : n.amdD && n.amdO ? void 0 === (r = function() {
                    return u
                }.call(e, n, e, o)) || (o.exports = r) : this.tychei = u
            }(0, t = n.nmd(t), n.amdD)
        }
    }
]);
//# sourceMappingURL=sourcemaps/f90d92d25d1cd0e3.vendor.js.map