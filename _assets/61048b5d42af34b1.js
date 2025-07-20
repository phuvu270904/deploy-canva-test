(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [41990], {

        /***/
        796909: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(131662);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var E = __c.E;
                var B = __c.B;
                var pec = function(a, b, c, d) {
                        c = new oec(c, d);
                        B(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        B(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.nka(a, b)
                    },
                    rec = function(a) {
                        return { ...__c.CP,
                            ...J4,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.hka.width,
                                height: a.hka.height
                            },
                            ib: a.ib.map(qec)
                        }
                    },
                    sec = function(a) {
                        switch (a.UC) {
                            case 0:
                                var b = __c.Qk.Fb().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.yf("color", a.color);
                                b = b.qb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.vI,
                                    ...K4,
                                    ...J4,
                                    va: (c = a.va) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    lg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.vI,
                                    ...K4,
                                    ...J4,
                                    text: b,
                                    lg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    O4 = function({
                        content: a,
                        fill: b,
                        border: c,
                        Z: d
                    }) {
                        b = { ...__c.tob,
                            fill: L4(b),
                            border: M4(c),
                            Z: N4(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: rec(a)
                                };
                            case "text":
                                return { ...b,
                                    element: sec(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: tec(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    tec = function({
                        cells: a,
                        border: b,
                        fill: c,
                        Z: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.uob,
                            ...K4,
                            ...J4,
                            N: K4.width,
                            Y: K4.height,
                            fill: L4(c),
                            border: M4(b),
                            direction: 1,
                            Z: N4(d),
                            cells: new Map(a.map(k => [k.id, O4(k)])),
                            behavior: {
                                rules: [{
                                    Jg: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        Zg: uec(a)
                                    }
                                }]
                            },
                            jd: void 0
                        }
                    },
                    uec = function(a) {
                        return new Map(a.map(b => [b.id, vec(b)]))
                    },
                    vec = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.xCa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.AP,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    M4 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.Wy,
                            all: a ? { ...__c.pP,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                ue: !0
                            } : void 0
                        }
                    },
                    N4 = function(a) {
                        return { ...__c.zP,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    qec = function(a) {
                        return { ...__c.Iob,
                            ...a,
                            fill: L4(a.fill),
                            stroke: wec(a.stroke)
                        }
                    },
                    wec = function(a) {
                        return a ? { ...__c.pP,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    L4 = function(a) {
                        var b;
                        const c = { ...__c.mF,
                            va: (b = a === null || a === void 0 ? void 0 : a.va) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    Za: a.Za
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    Cec = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        xec(a.cells, c, (e, f) => {
                            let g = !1;
                            yec(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, O4(f));
                                g = !0
                            });
                            g || (P4(e.fill, f.fill), zec(e.border, f.border), Aec(e.Z, f.Z))
                        }, e => O4(e));
                        Bec(a.behavior, b, c);
                        P4(a.fill, b.fill);
                        Aec(a.Z, b.Z);
                        zec(a.border, b.border);
                        var d;
                        a.va = (d = b.va) !== null && d !== void 0 ? d : 0
                    },
                    Bec = function(a, b, c) {
                        Q4(a.rules, [b], d => {
                            Dec(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            Dec(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            xec(d.grid.Zg, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.ma = k === null || k === void 0 ? void 0 : k.ma, g.padding.Aa = k === null || k === void 0 ? void 0 : k.Aa, g.padding.na = k === null || k === void 0 ? void 0 : k.na, g.padding.Ga = k === null || k === void 0 ? void 0 : k.Ga);
                                g.alignSelf = p
                            }, g => vec(g))
                        }, d => {
                            var e, f;
                            return {
                                Jg: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    Zg: uec(d.cells)
                                }
                            }
                        })
                    },
                    Eec = function(a, b) {
                        Q4(a.ib, b.ib, (e, f) => {
                            e.d = f.d;
                            P4(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(wec(f.stroke))
                        }, e => qec(e));
                        const {
                            viewBox: c,
                            width: d
                        } = rec(b);
                        a.width = d;
                        __c.jr(a.viewBox).equals(__c.jr(c)) || (a.viewBox = c)
                    },
                    yec = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? Eec(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.Qk.domain.Nb(__c.Qk.ba(a.text), sec(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? Cec(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    xec = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    Q4 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    P4 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.Za.set(void 0);
                                var c;
                                a.va = (c = b.va) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.Za.ref && __c.Ybb.domain.Nb(a.Za.ref, b.Za)) break;
                                a.color = void 0;
                                a.Za.set(b.Za);
                                var d;
                                a.va = (d = b.va) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.Za.set(void 0)
                        }
                    },
                    Aec = function(a, b) {
                        b = N4(b);
                        a.all = b.all;
                        a.FA = b.FA;
                        a.DA = b.DA;
                        a.EA = b.EA;
                        a.CA = b.CA
                    },
                    zec = function(a, b) {
                        b = M4(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.Xy.domain.Nb(__c.Xy.ba(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    Dec = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    Gec = function(a, b, c, d) {
                        let e = a.kZa.get(b);
                        if (e) return e;
                        e = {
                            Ox: new Fec(c.Qs, b, d, c.uta),
                            yIa: void 0,
                            TSa: void 0,
                            SUa: __c.EU.mode
                        };
                        a.kZa.set(b, e);
                        return e
                    },
                    Iec = function(a, b, c, d, e) {
                        var f, g;
                        e = Gec(a, c, b, e);
                        const h = e.Ox,
                            k = e.TSa,
                            l = e.yIa,
                            m = e.SUa;
                        c = __c.JO.ba(c);
                        const n = ((f = (g = a.fA).Esa) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.EU;
                        h.Sj === k && Hec.structural(c, l) && n.mode === m || (e.yIa = c, e.TSa = h.Sj, e.SUa = n.mode, b = b.render(h, n), a.rob.update(d, b), pec(d, b, (p, q) => a.SQ.Jta.set(p, q), (p, q, r) => a.SQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    Lec = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.kpb());
                        c.push(Jec(() => {
                            a: {
                                var e = new Kec;
                                for (const f of b)
                                    if (e.VQ(f), e.Bra) {
                                        e = e.Bra;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Zb.isLoaded(e) || a.Dua.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B(f.type === "layout"), a.Jk.$ga(f);
                                d()
                            }
                        }));
                        return d
                    },
                    Mec = function(a, b) {
                        return {
                            SA: ({
                                Fe: c
                            }) => {
                                var d;
                                const {
                                    Ox: e
                                } = Gec(a.renderer, c, b, a.z3), f = __c.Tkb.create([]), g = [];
                                g.push(Lec(a.vgb, f));
                                g.push(Jec(() => {
                                    var k, l;
                                    return [(k = (l = a.fA).Esa) === null || k === void 0 ? void 0 : k.call(l, f), __c.JO.ba(c),
                                        e.Sj
                                    ]
                                }, () => {
                                    Iec(a.renderer, b, c, f, a.z3)
                                }, {
                                    fireImmediately: !0,
                                    equals: Hec.structural
                                }));
                                const h = (d = b.lwa) === null || d === void 0 ? void 0 : d.call(b, {
                                    Ox: e
                                });
                                h && g.push(h);
                                return {
                                    Ia: f,
                                    yp: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    R4 = __webpack_require__(400770),
                    Hec = R4.comparer,
                    Nec = R4.computed,
                    S4 = R4.observable,
                    Jec = R4.reaction,
                    Oec = R4.runInAction;
                var Pec = class {
                    static D(a) {
                        __c.P(a, {
                            crb: S4.ref,
                            Ohb: S4.ref
                        })
                    }
                    constructor() {
                        this.Esa = (Pec.D(this), void 0)
                    }
                };
                var Qec = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    Fec = class {
                        static D(a) {
                            __c.P(a, {
                                Pe: Nec
                            })
                        }
                        get USa() {
                            var a = this.z3,
                                b = this.Fe,
                                c = this.uta;
                            let d = a.sources.get(b);
                            d || (d = S4.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Sj() {
                            return this.USa.get()
                        }
                        get Pe() {
                            return this.Qs.ct({
                                type: "dict",
                                value: this.Fe
                            })
                        }
                        gm(a) {
                            this.USa.set(a instanceof Function ? { ...this.Sj,
                                ...a()
                            } : { ...this.Sj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.Qs = a;
                            this.Fe = b;
                            this.z3 = c;
                            this.uta = d;
                            Fec.D(this)
                        }
                    };
                var oec = class {
                    Z7(a, b) {
                        this.ZYa(a, b);
                        b.ref && this.Jya(a, b.ref, b.key)
                    }
                    aY(a, b) {
                        b.ref && this.Jya(a.text, b.ref, b.key)
                    }
                    jFa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B(a.element.type === "shape");
                                this.Z7(a.element, b.content);
                                break;
                            case "text":
                                B(a.element.type === "text");
                                this.aY(a.element, b.content);
                                break;
                            case "layout":
                                B(a.element.type === "layout");
                                this.nka(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    nka(a, b) {
                        this.ZYa(a, b);
                        b.ref && this.Jya(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.jFa(d, a)
                    }
                    constructor(a, b) {
                        this.ZYa = a;
                        this.Jya = b
                    }
                };
                var J4 = {
                        locked: !0,
                        bi: __c.Sda,
                        xh: !0
                    },
                    K4 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var Rec = class {
                    constructor(a) {
                        this.Jk = a;
                        this.update = (b, c) => {
                            Q4(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        Cec(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...tec(d),
                                            ...J4,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            N: d.minWidth,
                                            Y: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) B(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.N = c.minWidth, d.Y = c.minHeight, c.direction && (d.direction = c.direction), this.Jk.$ga(d)
                        }
                    }
                };
                var Sec = class {
                    constructor(a, b, c) {
                        this.rob = a;
                        this.SQ = b;
                        this.fA = c;
                        this.kZa = new WeakMap
                    }
                };
                var Tec = class {
                        static D(a) {
                            __c.P(a, {
                                Dua: S4.shallow
                            })
                        }
                        constructor(a, b) {
                            this.Zb = a;
                            this.Jk = b;
                            this.Dua = (Tec.D(this), new Set);
                            this.Kra = new Set;
                            this.kpb = () => {
                                this.Oba || (this.Oba = __c.Jma(this.Zb).subscribe(d => {
                                    Oec(() => {
                                        this.Dua.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.Kra.add(c);
                                return () => {
                                    this.Kra.delete(c);
                                    this.Kra.size <= 0 && this.Oba && (this.Oba.unsubscribe(), this.Oba = void 0)
                                }
                            }
                        }
                    },
                    Kec = class extends __c.lq {
                        VQ(a, b) {
                            this.Bra || super.VQ(a, b)
                        }
                        aY(a) {
                            this.Bra = (a = a.text.bh("font-family")["font-family"].values().next().value) &&
                                __c.kp(a).id
                        }
                    };
                var Uec = !1,
                    Vec = class {
                        register(a, b) {
                            this.ZD.has(a) || (this.ZD.set(a, b), this.odb || Uec || (__c.KO.set(a, Mec(this, b)), Uec = !0))
                        }
                        get(a) {
                            return this.ZD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.z3 = b;
                            this.fA = c;
                            this.Zb = d;
                            this.Jk = e;
                            this.ZD = new Map;
                            this.odb = __c.Eq("f576b13d", !1);
                            this.vgb = new Tec(this.Zb, this.Jk)
                        }
                    };
                var Wec = class {
                        constructor() {
                            this.Jta = new __c.QA;
                            this.refs = new __c.QA
                        }
                    },
                    Xec = class {
                        getContext(a) {
                            return this.SQ.refs.get(a)
                        }
                        vN(a) {
                            return this.SQ.Jta.get(a)
                        }
                        constructor(a, b, c) {
                            this.SQ = a;
                            this.z3 = b;
                            this.renderer = c
                        }
                    };
                __c.SPa = {
                    mkb: function(a) {
                        const b = new Pec,
                            c = new Wec,
                            d = new Sec(new Rec(a.Jk), c, b),
                            e = new Qec;
                        a = new Vec(d, e, b, a.Zb, a.Jk);
                        return {
                            fA: b,
                            RTb: new Xec(c, e, d),
                            a8: a,
                            SQ: c
                        }
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/61048b5d42af34b1.js.map