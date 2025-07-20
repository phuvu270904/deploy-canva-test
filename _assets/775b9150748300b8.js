(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [66905], {

        /***/
        975058: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var Jkc = function(a) {
                        return D6(function(b) {
                            return E6("div", {
                                className: "gcYy_A",
                                children: E6(__c.MD, {
                                    u0: "both",
                                    children: ({
                                        width: c,
                                        height: d
                                    }) => E6(a.fi, {
                                        fill: b.fill,
                                        Cb: c,
                                        jc: d,
                                        Le: void 0,
                                        animation: void 0,
                                        MC: !1,
                                        scaleFactor: void 0,
                                        fa: void 0
                                    })
                                })
                            })
                        })
                    },
                    Kkc = function(a) {
                        a.LL && (a.LL(), a.LL = null);
                        const b = a.props.Mdb;
                        b.forEach(c => {
                            window.addEventListener(c, a.rHa)
                        });
                        a.LL = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.rHa)
                            })
                        }
                    },
                    Rkc = function(a) {
                        const b = Lkc(c => {
                            const d = Mkc(() => {
                                a.Ur.QY(c.url)
                            }, [c.url]);
                            var e;
                            return E6(__c.sx, {
                                url: c.url,
                                store: a.Uv,
                                qo: a.Ur,
                                ky: a.ky,
                                zP: a.Dk > 10,
                                Am: (e = c.Am) !== null && e !== void 0 ? e : !1,
                                eg: d,
                                Qy: c.Qy,
                                VO: c.VO
                            })
                        });
                        return a.T$a ? Lkc(function(c) {
                            const [{
                                store: d,
                                xa: e
                            }] = Nkc(() => {
                                const f = new Okc,
                                    g = new Pkc(f);
                                return {
                                    store: f,
                                    xa: g
                                }
                            });
                            return E6(Qkc, {
                                s4: e.reset,
                                children: E6(__c.PCb, {
                                    okb: e,
                                    pkb: d,
                                    NRa: a.Uv.contains(c.url),
                                    children: ({
                                        Am: f
                                    }) => E6(b, { ...c,
                                        Am: f
                                    })
                                })
                            })
                        }) : b
                    },
                    Skc = function(a) {
                        const b = new __c.pT({
                            Ac: a.Ac,
                            Cg: void 0,
                            Ma: a.Ma,
                            qt: !1,
                            jy: !1
                        });
                        return D6(function(c) {
                            const d = c.ugb,
                                e = c.yc,
                                f = c.GIa,
                                g = c.ariaInvalid,
                                h = c.className,
                                k = c.disabled,
                                l = c.id,
                                m = c.name,
                                n = c.onBlur,
                                p = c.onChange,
                                q = c.placeholder,
                                r = c.type,
                                t = c.value;
                            c = {
                                color: c.Qi,
                                borderRadius: c.borderRadius,
                                border: c.border
                            };
                            d && (c.fontFamily = b.EP(d));
                            return E6("div", {
                                className: "BHOPhg",
                                children: E6("input", {
                                    "aria-describedby": e,
                                    "aria-errormessage": f,
                                    "aria-invalid": g,
                                    className: h,
                                    disabled: k,
                                    id: l,
                                    name: m,
                                    onBlur: n,
                                    onChange: p,
                                    placeholder: q,
                                    type: r,
                                    value: t,
                                    style: c
                                })
                            })
                        })
                    },
                    Tkc = function() {
                        return () => E6(__c.zR, {
                            mediaType: "embed",
                            failed: !1
                        })
                    },
                    Ukc = function(a) {
                        return D6(function(b) {
                            return E6("div", {
                                className: "oUJNhQ",
                                children: E6(a.ne, {
                                    text: b.text,
                                    animation: void 0,
                                    xd: void 0,
                                    Ja: void 0,
                                    Ua: void 0,
                                    wg: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    Vkc = function(a) {
                        const b = new __c.pT({
                            Ac: a.Ac,
                            Cg: void 0,
                            Ma: a.Ma,
                            qt: !1,
                            jy: !1
                        });
                        return D6(function(c) {
                            const d = c.ugb,
                                e = c.yc,
                                f = c.GIa,
                                g = c.ariaInvalid,
                                h = c.className,
                                k = c.disabled,
                                l = c.id,
                                m = c.name,
                                n = c.onBlur,
                                p = c.onChange,
                                q = c.placeholder,
                                r = c.rows,
                                t = c.value;
                            c = {
                                color: c.Qi,
                                borderRadius: c.borderRadius,
                                border: c.border
                            };
                            d && (c.fontFamily = b.EP(d));
                            return E6("div", {
                                className: "BHOPhg",
                                children: E6("textarea", {
                                    "aria-describedby": e,
                                    "aria-errormessage": f,
                                    "aria-invalid": g,
                                    className: h,
                                    disabled: k,
                                    id: l,
                                    name: m,
                                    onBlur: n,
                                    onChange: p,
                                    placeholder: q,
                                    rows: r,
                                    style: c,
                                    value: t
                                })
                            })
                        })
                    },
                    E6 = __webpack_require__(31968).jsx;
                var F6 = __webpack_require__(845212),
                    Wkc = F6.Component,
                    D6 = F6.memo,
                    Mkc = F6.useCallback,
                    Nkc = F6.useState;
                var Xkc = __webpack_require__(400770),
                    G6 = Xkc.action,
                    Ykc = Xkc.observable;
                var Lkc = __webpack_require__(813494).observer;
                var Zkc = class extends Wkc {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            atb: c,
                            vfa: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.J8a;
                            return f
                        }, {}));
                        return E6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.vfa && Kkc(this)
                    }
                    componentDidUpdate() {
                        this.props.vfa && Kkc(this)
                    }
                    componentWillUnmount() {
                        this.LL && (this.LL(), this.LL = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.cma = this.LL = null;
                        this.J8a = b => {
                            this.cma = b.nativeEvent
                        };
                        this.rHa = b => {
                            const c = this.props.vfa,
                                d = this.cma === b;
                            c && !d &&
                                c(b);
                            this.cma = null
                        }
                    }
                };
                var Qkc = a => E6(Zkc, {
                    atb: ["onMouseDown", "onTouchStart"],
                    Mdb: ["mousedown", "touchstart"],
                    vfa: a.s4,
                    children: a.children
                });
                var Okc = class {
                        static D(a) {
                            __c.P(a, {
                                Am: Ykc.ref
                            })
                        }
                        constructor() {
                            this.Am = (Okc.D(this), !0)
                        }
                    },
                    Pkc = class {
                        static D(a) {
                            __c.P(a, {
                                onDoubleClick: G6.bound,
                                onTouchEnd: G6.bound,
                                reset: G6.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Am = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.uQ ? (window.clearTimeout(this.uQ), this.uQ = void 0, this.store.Am = !1) : this.uQ = window.setTimeout(() => this.uQ = void 0, 300))
                        }
                        reset() {
                            this.store.Am = !0
                        }
                        vS() {
                            this.uQ && window.clearTimeout(this.uQ)
                        }
                        constructor(a) {
                            this.store = a;
                            this.uQ = (Pkc.D(this), void 0)
                        }
                    };
                __c.aH = {};
                __c.aH.lFb = Rkc;
                __c.aH.nFb = Tkc;
                __c.aH.jkb = function(a) {
                    const b = Rkc({
                            Dk: a.Dk,
                            ky: (h, k) => a.I.error(h, {
                                se: "widget: ",
                                extra: new Map(Object.entries(k))
                            }),
                            Uv: a.Uv,
                            Ur: a.Ur,
                            T$a: !0
                        }),
                        c = Tkc(),
                        d = Ukc({
                            ne: a.ne
                        }),
                        e = Jkc({
                            fi: a.pf
                        }),
                        f = Skc({
                            Ma: a.Ma,
                            Ac: a.Ac
                        }),
                        g = Vkc({
                            Ma: a.Ma,
                            Ac: a.Ac
                        });
                    return {
                        h7a: b,
                        y7a: c,
                        ij: d,
                        tx: e,
                        rY: f,
                        yY: g
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/775b9150748300b8.js.map