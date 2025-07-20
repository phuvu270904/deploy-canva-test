(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [5936], {

        /***/
        623741: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var oD = __c.oD;
                var Vc = __c.Vc;
                var P = __c.P;
                var jr = __c.jr;
                var Xt = __c.Xt;
                var N = __c.N;
                var Lq = __c.Lq;
                var D = __c.D;
                var E = __c.E;
                var Z3 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.AS(b.reference.hi);
                                a = a.vW(b.reference.xi);
                                return c != null && a != null;
                            case 1:
                                return a.AS(b.reference.hi) != null;
                            case 2:
                                return a.vW(b.reference.xi) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    rcc = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.aa.length > 0) return !1;
                                a = a.MF(c.NZ.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.Ly(new __c.Oy, a.XH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return Z3(b, d);
                                        case 1:
                                            return Z3(b,
                                                d.start) && Z3(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    scc = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.la;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Xb === c : g.span.Zc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.ma : c === null || c === void 0 ? void 0 : c.Aa) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.dra, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.RZa, h = h.la === k.la && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Pc === c.Pc && g.Pc === 0 ? g.dra = f : e.push({
                                            RZa: k,
                                            Ewb: l,
                                            dra: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Pc: c.Pc
                                        })
                                    }
                            }
                        return e
                    },
                    tcc = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.la,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Tb === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.na : d === null || d === void 0 ? void 0 : d.Ga) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            la: g,
                                            boundary: "start"
                                        } : {
                                            la: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.qKa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.ira, k = k.la === m.la && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Pc === d.Pc && h.Pc === 0 ? h.ira = g : f.push({
                                            qKa: l,
                                            Qwb: m,
                                            ira: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Pc: d.Pc
                                        })
                                    }
                            }
                        return f
                    },
                    ucc = function(a, b, c, d, e) {
                        const f =
                            a.J0a.Obb(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Sb(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Sb(d[0].la)) && e.push({
                            la: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].la)) && e.push({
                            la: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Sb(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.la : void 0;
                                k = l ? b.layout.rows.Sb(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ga : m === null || m === void 0 ? void 0 : m.na;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Aa : m === null || m === void 0 ?
                                    void 0 : m.ma;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ga : n === null || n === void 0 ? void 0 : n.na;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Aa : l === null || l === void 0 ? void 0 : l.ma;
                                p = __c.Ewa({
                                    ma: n,
                                    Aa: k,
                                    na: l,
                                    Ga: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: v
                                } = (t === null || t === void 0 ? void 0 : t.Pc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set($3(q, r), __c.$v(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    vcc = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = scc(b, c, d, e);
                        f = tcc(b, c, d, e, f);
                        const h = ucc(a, b, c, d, e),
                            k = a.Zhb(b),
                            l = a.rhb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.Ewb,
                                t = n.dra,
                                u = n.RZa;
                            const v = n.color,
                                x = n.weight;
                            n = n.Pc;
                            const y = m ? -1 : 1,
                                z = (p = h.get($3(r, u))) === null || p === void 0 ?
                                void 0 : p.Ga;
                            p = (q = h.get($3(t, u))) === null || q === void 0 ? void 0 : q.na;
                            if (z != null && p != null) {
                                q = D(k.get(u.la));
                                var A = D(l.get(r.column));
                                r = D(l.get(t.column));
                                u = u.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Pc: n,
                                    p1: new Lq(q + z * y, u),
                                    p2: new Lq(t + p * y, u),
                                    ...__c.ew((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.Jb);
                        return [...f.map(n => {
                            var p, q, r = n.qKa,
                                t = n.Qwb,
                                u = n.ira;
                            const v = n.color,
                                x = n.weight;
                            n = n.Pc;
                            const y = (p = h.get($3(r, t))) === null || p === void 0 ? void 0 : p.Aa;
                            p = (q = h.get($3(r,
                                u))) === null || q === void 0 ? void 0 : q.ma;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var z = D(k.get(t.la));
                                t = D(k.get(u.la));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Pc: n,
                                    p1: new Lq(r, q + y),
                                    p2: new Lq(r, u + p),
                                    ...__c.ew(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.Jb), ...a]
                    },
                    wcc = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Uo(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Uo(d, e => `${e.pk}_${e.qk}`);
                            for (const [, e] of a) {
                                const {
                                    qk: f,
                                    pk: g
                                } = e[0];
                                a = __c.Uo(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    pk: g,
                                    qk: f
                                })
                            }
                        }
                        return b
                    },
                    xcc = function(a, b, c, d) {
                        var e = __c.YGb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                la: k,
                                boundary: "start"
                            }, {
                                la: k,
                                boundary: "end"
                            }] : [{
                                la: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.J0a.Ttb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = vcc(e, a, h, f, g, d);
                        return wcc(c)
                    },
                    ycc = function(a) {
                        switch (a) {
                            case 2:
                                return N("ibdecg");
                            case 7:
                                return N("446quA");
                            case 5:
                                return N("j1fbqg");
                            case 1:
                                return N("O5i4AQ");
                            case 6:
                                return N("C0VHsg");
                            case 4:
                                return N("9ND0kg");
                            case -1:
                                return N("RWqnLA");
                            case 9:
                                return N("nQR/7w");
                            case -2:
                                return N("P23rtA");
                            case 3:
                                return N("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    a4 = function() {
                        const [a] = (0, __c.zb)(() => Xt());
                        return a
                    },
                    zcc = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    Acc = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.aHb)(a) / 2 : -(0, __c.ZGb)(a) / 2,
                            c = -(0, __c.$Gb)(a) / 2,
                            d = a.width + (0, __c.ZGb)(a) / 2 + (0, __c.aHb)(a) / 2;
                        a = a.height + (0, __c.$Gb)(a) / 2 + (0, __c.bHb)(a) / 2;
                        return jr({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    Bcc = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.M)(a, { ...b
                            })
                        })
                    },
                    Dcc = function(a) {
                        var b;
                        const c = a.Bz;
                        var d = a.content;
                        const e = a.context;
                        a = a.xp;
                        __c.B((d === null || d === void 0 ? void 0 : (b = d.ng) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.wk;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.Gla) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.kdb.SS({ ...__c.vob,
                                        value: b.value
                                    }),
                                    context: e,
                                    xp: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = Ccc(c, e, d.uA, d.wk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: b4(__c.hR, {
                                        label: ycc(b.error),
                                        children: b4(__c.vv, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: b4(__c.ORb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    Ccc = function(a, b, c, d) {
                        var e;
                        return (e = a.Jla) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    Gcc = function(a) {
                        const b = a.Bz,
                            c = a.pf,
                            d = a.Axb,
                            e = a.Ua;
                        b.Jla = f => __c.cNa({ ...f,
                            Ua: e
                        });
                        b.cHa = f => Dcc({ ...f,
                            Bz: b
                        });
                        b.Gla = Bcc(Ecc({
                            pf: c,
                            pR: void 0
                        }));
                        b.eHa = Fcc(d, e);
                        b.fHa = Bcc(f => b4(c4, { ...f,
                            Ua: e
                        }))
                    },
                    Hcc = function({
                        label: a,
                        Ra: b,
                        width: c,
                        height: d,
                        scale: e,
                        zKa: f
                    }) {
                        return b4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: d4(__c.sv, {
                                className: e4("ivlMMQ", f4(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && b4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    f4 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    Jcc = function({
                        Dd: a,
                        highlight: b,
                        scale: c,
                        cp: d,
                        ep: e,
                        D5a: f
                    }) {
                        const g = g4(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.hz(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return b4(__c.tv, {
                            oq: "light",
                            light: "light",
                            Kt: "light",
                            dark: "light",
                            children: m => b4("div", {
                                className: e4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: b4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: e4("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.hm,
                                    children: b4(__c.lR, {
                                        className: e4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: N("ruWN9A"),
                                        children: b4(Icc, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Lcc = function() {
                        const a = new Kcc,
                            b = new __c.PQ,
                            c = h4(f => {
                                const {
                                    scale: g = 1,
                                    fQa: h,
                                    size: k = "small",
                                    D5a: l = !0
                                } = f, m = i4(n => a.ep({
                                    scale: n,
                                    size: k,
                                    zva: h
                                }), [k, h]);
                                return b4(Jcc, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    Dd: f.sheet.direction === "rtl",
                                    highlight: f.selection != null && a.xlb(f.sheet, f.selection),
                                    ep: m,
                                    D5a: l
                                })
                            }),
                            d = h4(f => {
                                const {
                                    scale: g = 1,
                                    fQa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Bub: n
                                } = f, p = i4(v => a.ep({
                                    scale: v,
                                    size: k,
                                    zva: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = i4(v => m != null && a.xza(m).has(v), [m]), t = i4(v => m != null && a.$ib(l, m).has(v), [l, m]), u = i4(v => {
                                    const x = n != null && l.layout.cols.ge(v, n.Tb) >= 0 && l.layout.cols.ge(v,
                                        n.Ic) <= 0;
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return b4(j4, { ...f,
                                    hd: g,
                                    vd: q,
                                    ep: p,
                                    IE: u,
                                    zF: b
                                })
                            }),
                            e = h4(f => {
                                const {
                                    scale: g = 1,
                                    fQa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Bub: n
                                } = f, p = i4(v => a.ep({
                                    scale: v,
                                    size: k,
                                    zva: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = i4(v => m != null && a.zza(m).has(v), [m]), t = i4(v => m != null && a.ajb(l, m).has(v), [l, m]), u = i4(v => {
                                    const x = n != null && l.layout.rows.ge(v, n.Xb) >= 0 && l.layout.rows.ge(v, n.Zc) <= 0;
                                    return r(v) ?
                                        x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return b4(k4, { ...f,
                                    hd: q,
                                    vd: g,
                                    ep: p,
                                    IE: u,
                                    zF: b
                                })
                            });
                        return {
                            f6a: c,
                            e6a: d,
                            g6a: e
                        }
                    },
                    Mcc = function(a) {
                        const b = a.Zp,
                            c = () => null;
                        return __c.gu(d => b4(l4, { ...d,
                            Zp: b,
                            Hh: c
                        }))
                    },
                    Ncc = function({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        kd: d
                    }) {
                        m4(() => n4(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.na(c.Tb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.ma(c.Xb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    Qcc = function({
                        onScroll: a
                    }) {
                        const b = new Occ(a);
                        return {
                            DC: b,
                            rla: h4(c => b4(Pcc, {
                                sheet: c.sheet,
                                DC: b,
                                children: c.children
                            }))
                        }
                    },
                    Tcc = function(a) {
                        const b = a.Zp,
                            c = a.ne,
                            d = a.L0a,
                            e = ({
                                children: k
                            }) => k,
                            {
                                DC: f,
                                rla: g
                            } = Qcc({
                                onScroll: a.onScroll
                            });
                        class h extends Rcc {
                            get JL() {
                                const k = this.props.fa.Ux;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.t0a(this.props.item, {
                                    Qb: this.props.Qb,
                                    fa: this.props.fa
                                })
                            }
                            componentWillUnmount() {
                                d.Aab(this.props.item, {
                                    Qb: this.props.Qb,
                                    fa: this.props.fa
                                })
                            }
                            render() {
                                d.t0a(this.props.item, {
                                    Qb: this.props.Qb,
                                    fa: this.props.fa
                                });
                                return b4(Scc, { ...this.props,
                                    scaleFactor: this.scaleFactor,
                                    Zp: b,
                                    JL: this.JL,
                                    Hh: this.Hh,
                                    L0a: d,
                                    DC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.scaleFactor = o4(() => {
                                    const l = this.props.item;
                                    var m = this.props.fa,
                                        n = m.Ux;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.eib(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.yw(l, n.Qb, {
                                                zoom: m
                                            }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Hh = h4(l => b4("div", {
                                    className: "wKvivQ",
                                    children: b4(__c.kNa, { ...this.props,
                                        ...l,
                                        ne: c
                                    })
                                }))
                            }
                        }
                        return {
                            f8a: h,
                            DC: f
                        }
                    },
                    Ucc = function(a, b) {
                        if (b != null && b.Tb != null && b.Xb != null && b.Ic != null && b.Zc != null) {
                            var c = a.na(b.Tb),
                                d = a.ma(b.Xb),
                                e = a.na(b.Ic) + b.Ic.width - c;
                            a = a.ma(b.Zc) + b.Zc.height - d;
                            return jr({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    Wcc = function(a) {
                        const b = a.Zp,
                            c = () => null;
                        return d => b4(Vcc, { ...d,
                            Zp: b,
                            Hh: c
                        })
                    },
                    $cc = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                NJa: b,
                                Mv: b,
                                La: {},
                                GA: {}
                            },
                            d = p4(() => a.Mz.style || c, h => {
                                var k;
                                Object.assign(a.f$.style, h.NJa);
                                Object.assign(a.fM.style, h.Mv);
                                Object.assign(a.UD.style, h.La);
                                Object.assign(a.$D.style, h.GA);
                                h = h === null || h === void 0 ? void 0 : (k = h.La) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.UD.classList.toggle("OQx3PQ", h === "underline");
                                a.UD.classList.toggle("_99ezUA", h === "line-through");
                                a.UD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: Xcc
                            }),
                            e = p4(() => a.mua, h => {
                                a.UD.classList.toggle("_84KvRA", !h);
                                a.f$.classList.toggle("_84KvRA", !h);
                                a.fM.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = p4(() => a.renderer, h => {
                                a.T$ && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.T$ = void 0, a.a5.remove()) : a.$D.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.T$ = Ycc(h.node, a.a5);
                                        a.$D.appendChild(a.a5);
                                        break;
                                    case "dom":
                                        h.render(a.$D);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.twa()
                            }, {
                                fireImmediately: !0
                            }),
                            g = Zcc ? p4(() => a.Rsa, h => {
                                a.UD.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) : void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    Xcc = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    bdc = function(a) {
                        const b = a.Dz,
                            c = a.LC,
                            d = a.gD,
                            e = a.U4a,
                            f = a.vy,
                            g = new adc(c),
                            h = (k, l) => f ? rcc(f, k, l) : !1;
                        return k => b4(q4, { ...k,
                            bO: h,
                            gD: d,
                            LC: c,
                            Dz: b,
                            Mta: g,
                            U4a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    $3 = (a, b) => `${a.column.id}-${a.boundary}:${b.la.id}-${b.boundary}`,
                    Ecc = ({
                        pf: a,
                        pR: b
                    }) => c => (0, __c.M)(__c.dHb, { ...c,
                        pf: a,
                        pR: b
                    }),
                    r4 = __webpack_require__(31968),
                    cdc = r4.Fragment,
                    b4 = r4.jsx,
                    d4 = r4.jsxs;
                var ddc = __webpack_require__,
                    edc = ddc(208463),
                    e4 = ddc.n_x(edc)();
                var h4 = __webpack_require__(813494).observer;
                var s4 = __webpack_require__(845212),
                    t4 = s4.Component,
                    Rcc = s4.PureComponent,
                    i4 = s4.useCallback,
                    m4 = s4.useEffect,
                    fdc = s4.useLayoutEffect,
                    g4 = s4.useMemo,
                    u4 = s4.useRef;
                var v4 = __webpack_require__(400770),
                    w4 = v4.action,
                    n4 = v4.autorun,
                    x4 = v4.comparer,
                    o4 = v4.computed,
                    gdc = v4.createAtom,
                    y4 = v4.observable,
                    p4 = v4.reaction,
                    hdc = v4.untracked;
                var z4 = __webpack_require__(206928),
                    A4 = z4.iB,
                    idc = z4.Aj,
                    jdc = z4.uP;
                var B4 = __webpack_require__(277049)._;
                var C4 = __webpack_require__(269018)._;
                var kdc = __webpack_require__(13851).A;
                var Ycc = __webpack_require__(950873).createPortal;
                var ldc = class {
                        static D(a) {
                            P(a, {
                                viewBox: y4.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (ldc.D(this), jr({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Kvb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    mdc = h4(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = u4(new ldc),
                            f = w4(() => {
                                if (a.ika) {
                                    var h = a.ika.current;
                                    h && e.current.Kvb(jr({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        m4(() => {
                            var h, k;
                            f();
                            (h = a.ika.current) === null || h === void 0 || h.addEventListener("scroll",
                                f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.ika.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.ika, f]);
                        const g = g4(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return d4("div", {
                            className: e4("nMvVqA", d),
                            children: [d4("div", {
                                ref: a.kd,
                                className: "_0YOFPg",
                                children: [b4(a.Zp, { ...a,
                                    viewport: g
                                }), b4("div", {
                                    className: e4("Gdl7fQ", d),
                                    children: (c = a.xGa) === null || c === void 0 ? void 0 : (b = c.get()) ===
                                        null || b === void 0 ? void 0 : b.map((h, k) => b4(h, {}, k))
                                })]
                            }), a.qKb === "visible" && d4(cdc, {
                                children: [b4("div", {
                                    className: e4("_32sKQw", d),
                                    children: b4(a.c8a, { ...a
                                    })
                                }), b4("div", {
                                    className: e4("xdIsTQ", d),
                                    children: b4(a.g8a, { ...a
                                    })
                                }), b4("div", {
                                    className: e4("rsTRSA", d),
                                    children: b4(a.e8a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    ndc = h4(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.X;
                            case "text3":
                                return __c.kx.ba(a.value).cells.X();
                            default:
                                throw new E(a);
                        }
                    });
                var Fcc = (a, b) => __c.PMa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Mg: c
                        } = __c.Xg(__c.Eh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            Ja: void 0,
                            writingMode: 1,
                            xd: "start",
                            wg: odc(e, c),
                            Ua: b
                        })
                    }),
                    odc = A4((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.X.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: x4.structural
                    });
                var pdc, qdc, rdc, c4;
                new(pdc = class extends B4 {
                    constructor() {
                        super(c4);
                        qdc()
                    }
                }, (() => {
                    class a extends(rdc = t4) {
                        static D(b) {
                            P(b, {
                                Mg: o4
                            })
                        }
                        get Mg() {
                            return __c.Xg(__c.Eh, this.props.context.attrs).Mg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = b4(this.props.Hh, {
                                content: b,
                                la: c.container.la,
                                col: c.container.column,
                                Mg: this.Mg
                            });
                            return this.Mg === "wrap" ? b4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.D(this)
                        }
                    }({
                        c: [c4, qdc]
                    } = C4(a, [], [Vc], rdc))
                })(), pdc);
                var Kcc = class {
                    ep({
                        size: a,
                        scale: b,
                        zva: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.OU * b : __c.GQb * b
                    }
                    constructor() {
                        this.xlb = A4((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.xza = idc(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Lo
                        });
                        this.zza = idc(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.Lo
                        });
                        this.$ib = A4((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.zza(b).size > 0) return new Set(a.layout.cols);
                            b = this.xza(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.la, e.column);
                                for (const f of zcc(c ? c.span.Tb : e.column, c ? c.span.Ic : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Lo
                        });
                        this.ajb = A4((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.xza(b).size > 0) return new Set(a.layout.rows);
                            b = this.zza(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.la, e.column);
                                for (const f of zcc(c ? c.span.Xb : e.la, c ? c.span.Zc : e.la, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Lo
                        })
                    }
                };
                var sdc, tdc, udc, vdc, wdc, xdc, ydc = parseInt("4px", 10) || 4,
                    zdc = parseInt("0.5px", 10) || .5,
                    Adc = parseInt("1px", 10) || 1,
                    Bdc = parseInt("0.5px", 10) || .5,
                    Cdc = parseInt("0.5px", 10) || .5,
                    Ddc = parseInt("1px", 10) || 1,
                    Edc = parseInt("0.5px", 10) || .5,
                    j4;
                new(sdc = class extends B4 {
                    constructor() {
                        super(j4);
                        udc()
                    }
                }, (() => {
                    class a extends(vdc = t4) {
                        static D(b) {
                            P(b, {
                                Dd: o4,
                                Bq: o4,
                                u6: o4
                            })
                        }
                        get Dd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Bq() {
                            var b;
                            const c = (b = this.props.cp) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.hz(c)
                        }
                        get u6() {
                            var b, c, d;
                            return (c = (d = this.props).msa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return b4(__c.tv, {
                                oq: "light",
                                light: "light",
                                Kt: "light",
                                dark: "light",
                                children: this.Sab
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (j4.D(this), w4(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    hd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = w4(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.iZa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    ep: g,
                                    IE: h,
                                    AKb: k,
                                    hd: l = 1,
                                    vd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.Dd,
                                    gtA7Dw: this.Dd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.Dd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.u6) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return d4("div", {
                                    style: r,
                                    className: e4("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(u => {
                                        var v;
                                        t++;
                                        if (!(c && f.layout.cols.ge(u, c) < 0 || d && f.layout.cols.ge(u, d) > 0)) return b4(Fdc, {
                                            col: u,
                                            label: __c.Ct(t),
                                            Ra: k === null || k === void 0 ? void 0 : (v = k.get()) === null || v === void 0 ? void 0 : v.get(u),
                                            ep: g,
                                            IE: h,
                                            hd: l,
                                            vd: m
                                        }, u.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && b4("div", {
                                        style: {
                                            width: ydc * l
                                        },
                                        className: e4("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.Sab = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.JH ? e.layout.Qd.get(e.view.freeze.JH) : void 0,
                                    g = {
                                        jNbTIg: !this.Dd,
                                        gtA7Dw: this.Dd
                                    };
                                return d4("div", {
                                    ref: (d = this.Bq) === null || d === void 0 ? void 0 : d.hm,
                                    className: e4("xhBZaw", g, c.className),
                                    children: [f && this.iZa(void 0, f, {
                                        sticky: !0
                                    }), this.iZa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [j4, udc]
                    } = C4(a, [], [Vc], vdc))
                })(), sdc);
                var k4;
                new(tdc = class extends B4 {
                    constructor() {
                        super(k4);
                        wdc()
                    }
                }, (() => {
                    class a extends(xdc = t4) {
                        static D(b) {
                            P(b, {
                                Dd: o4,
                                Bq: o4,
                                u6: o4
                            })
                        }
                        get Dd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Bq() {
                            var b;
                            const c = (b = this.props.cp) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.hz(c)
                        }
                        get u6() {
                            var b, c, d;
                            return (c = (d = this.props).msa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return b4(__c.tv, {
                                oq: "light",
                                light: "light",
                                Kt: "light",
                                dark: "light",
                                children: this.jub
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (k4.D(this), w4(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    vd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = w4(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.oZa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    ep: g,
                                    IE: h,
                                    hd: k = 1,
                                    vd: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.Dd,
                                    gtA7Dw: this.Dd
                                };
                                var n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                        top: 0
                                    } : void 0,
                                    p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.u6) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1,
                                    t = 0;
                                n = f.rows.map(u => {
                                    r++;
                                    if (!(c && f.rows.ge(u, c) < 0 || d && f.rows.ge(u, d) > 0)) return t += u.height, b4(Gdc, {
                                        la: u,
                                        label: `${r+1}`,
                                        IE: h,
                                        ep: g,
                                        hd: k,
                                        vd: l,
                                        start: f.ma(u)
                                    }, u.id)
                                });
                                return d4("div", {
                                    style: {
                                        height: t * l,
                                        width: g(k),
                                        ...q
                                    },
                                    className: e4("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [n, (e === null || e === void 0 ? void 0 : e.sticky) && b4("div", {
                                        style: {
                                            height: ydc * l
                                        },
                                        className: e4("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.jub = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.wW ?
                                    e.layout.ae.get(e.view.freeze.wW) : void 0,
                                    g = {
                                        jNbTIg: !this.Dd,
                                        gtA7Dw: this.Dd
                                    };
                                return d4("div", {
                                    ref: (d = this.Bq) === null || d === void 0 ? void 0 : d.hm,
                                    className: e4("An9VeA", g, c.className),
                                    children: [f && this.oZa(void 0, f, {
                                        sticky: !0
                                    }), this.oZa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [k4, wdc]
                    } = C4(a, [], [Vc], xdc))
                })(), tdc);
                var Fdc = h4(a => {
                        const b = a.label,
                            c = a.Ra,
                            d = a.col,
                            e = a.IE,
                            f = a.ep,
                            g = a.hd;
                        a = a.vd;
                        const h = f(a),
                            k = jdc(() => e(d));
                        return b4("div", {
                            className: e4("_83Rssw", "d2uLIA", f4(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${zdc*g}px`,
                                borderBlockStartWidth: `${Adc*g}px`,
                                borderBlockEndWidth: `${Bdc*g}px`
                            },
                            children: b4(Hcc, {
                                label: b,
                                Ra: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                zKa: k
                            })
                        })
                    }),
                    Gdc = h4(a => {
                        const b = a.label,
                            c = a.la,
                            d = a.ep,
                            e = a.IE,
                            f = a.hd,
                            g = a.vd,
                            h = d(f),
                            k = jdc(() => e(c));
                        return b4("div", {
                            className: e4("_83Rssw", "JhBzyw",
                                f4(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${Cdc*g}px`,
                                borderInlineStartWidth: `${Ddc*g}px`,
                                borderInlineEndWidth: `${Edc*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: b4(Hcc, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                zKa: k
                            })
                        })
                    });
                var Hdc = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var Idc = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var Icc = __c.bR({
                    Ao: Hdc,
                    medium: Idc
                });
                var Jdc, Kdc, Ldc, l4;
                new(Jdc = class extends B4 {
                    constructor() {
                        super(l4);
                        Kdc()
                    }
                }, (() => {
                    class a extends(Ldc = t4) {
                        static D(b) {
                            P(b, {
                                pe: o4.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return b4(this.props.Zp, {
                                sheet: b.G.config,
                                container: b,
                                J9: "visible",
                                cp: this.props.cp,
                                fu: this.props.fu,
                                gu: this.props.gu,
                                scaleFactor: this.props.scaleFactor,
                                pe: this.pe,
                                Hh: this.props.Hh,
                                fH: void 0
                            })
                        }
                        get pe() {
                            return __c.Kt(this.props.element.G.altText, this.props.Oe)
                        }
                        constructor(...b) {
                            super(...b);
                            a.D(this)
                        }
                    }({
                        c: [l4, Kdc]
                    } = C4(a, [], [Vc], Ldc))
                })(), Jdc);
                var Mdc = class {
                    constructor() {
                        this.eia = new WeakMap;
                        this.eib = a => this.eia.get(a);
                        this.t0a = (a, b) => {
                            this.eia.set(a, b)
                        };
                        this.Aab = (a, b) => {
                            const c = this.eia.get(a);
                            c && c.fa === b.fa && c.Qb === b.Qb && this.eia.delete(a)
                        }
                    }
                };
                var D4 = parseInt("4px", 10) || 4,
                    Ndc = h4(({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        Xv: d,
                        Yv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.ma(c.Zc) + c.Zc.height, a = a.na(c.Ic) + c.Ic.width, b4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: D4 * b
                                },
                                className: e4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.na(c.Ic) + c.Ic.width, b4("div", {
                                style: {
                                    width: D4 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: e4("aX8dhQ",
                                    "gl1RPg", g)
                            });
                            if (e) return c = a.ma(c.Zc) + c.Zc.height, b4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: D4 * b
                                },
                                className: e4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var E4 = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = a4();
                        Ncc({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            kd: e
                        });
                        return b4("div", {
                            ref: e,
                            className: e4("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    Odc = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = a4();
                        Ncc({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            kd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return b4("div", {
                            className: e4("nstn2A", a, "_9sodyg"),
                            children: b4("div", {
                                ref: e,
                                className: e4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var Pcc = h4(({
                        sheet: a,
                        children: b,
                        DC: c
                    }) => {
                        const d = i4(f => {
                                c.Yza(a, f)
                            }, [c, a]),
                            e = i4(f => {
                                f != null ? c.EC.set(a, f) : c.EC.delete(a)
                            }, [c, a]);
                        return b4(__c.ALb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            Tu: e,
                            children: b
                        })
                    }),
                    Occ = class {
                        Yza(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.G5.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.EC = new WeakMap;
                            this.G5 = y4.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = w4((b, c) => {
                                b = this.EC.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var Scc = h4(a => {
                    const b = a.item,
                        c = a.cp,
                        d = a.cg,
                        e = a.measureRef,
                        f = a.scaleFactor,
                        g = a.hRa,
                        h = a.Qb,
                        k = a.fu,
                        l = a.gu,
                        m = a.Zp,
                        n = a.JL,
                        p = a.Hh,
                        q = a.Oe,
                        r = a.DC;
                    a = g4(() => __c.Kt(b.altText, q), [b, q]);
                    const t = g4(() => h4(({
                            sheet: y,
                            range: z,
                            Xv: A,
                            Yv: C
                        }) => b4(E4, {
                            sheet: y,
                            range: z,
                            scaleFactor: f,
                            children: b4(Ndc, {
                                sheet: y,
                                scaleFactor: f,
                                range: z,
                                Xv: A,
                                Yv: C
                            })
                        })), [f]),
                        u = Acc(b.config),
                        v = f.get(),
                        x = Math.min(u.width * v, h.width);
                    m4(() => n4(() => {
                        var y = b.config.view.freeze.JH ? b.config.layout.Qd.get(b.config.view.freeze.JH) : void 0;
                        if (y != null)
                            if (b.config.na(y) +
                                y.width > x) {
                                if (y = r.EC.get(b)) y.style.overflowX = "hidden"
                            } else if (y = r.EC.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, v, x]);
                    return b4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: b4(n, {
                            sheet: b,
                            children: b4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: u.width * v,
                                    height: u.height * v
                                },
                                children: b4("div", {
                                    className: "W1ir5A",
                                    children: b4(m, {
                                        container: d.uj(b),
                                        sheet: b.config,
                                        J9: "visible",
                                        cp: c,
                                        scaleFactor: f,
                                        fu: k,
                                        gu: l,
                                        pe: a,
                                        Hh: p,
                                        fH: t
                                    })
                                })
                            })
                        })
                    })
                });
                var Pdc = h4(({
                    page: a,
                    range: b,
                    wC: c
                }) => {
                    const d = Ucc(a.sheet, b);
                    return b4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.hr(jr(e)).lp(d) && c(e, f))
                    })
                });
                var Qdc = new __c.PQ,
                    F4 = a => __c.OU * a,
                    Rdc = () => "primary-default",
                    Vcc = h4(({
                        container: a,
                        cp: b,
                        fu: c,
                        gu: d,
                        t1: e,
                        scaleFactor: f,
                        viewport: g,
                        dwb: h,
                        Zp: k,
                        Hh: l,
                        wC: m,
                        kha: n,
                        DCb: p,
                        oBb: q,
                        nBb: r
                    }) => {
                        const t = a.page,
                            u = g4(() => h4(({
                                sheet: v,
                                range: x,
                                Xv: y,
                                Yv: z
                            }) => d4(cdc, {
                                children: [b4(E4, {
                                    sheet: t.sheet,
                                    range: x,
                                    scaleFactor: f,
                                    children: b4(Ndc, {
                                        sheet: v,
                                        scaleFactor: f,
                                        range: x,
                                        Xv: y,
                                        Yv: z
                                    })
                                }), d4(Odc, {
                                    sheet: t.sheet,
                                    range: x,
                                    scaleFactor: f,
                                    children: [p && b4(p, {}), m && b4(Pdc, {
                                        page: t,
                                        wC: m,
                                        range: x
                                    }), r && b4(r, {}), n && n()]
                                }), q && x && b4(E4, {
                                    sheet: t.sheet,
                                    range: x,
                                    scaleFactor: f,
                                    children: b4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? b4(Sdc, {
                            container: a,
                            viewport: g,
                            scaleFactor: f,
                            cp: b,
                            fu: c,
                            gu: d,
                            Zp: k,
                            Hh: l,
                            fH: u
                        }) : b4(k, {
                            sheet: t.sheet,
                            container: a,
                            J9: "hidden",
                            cp: b,
                            fu: c,
                            gu: d,
                            t1: e,
                            scaleFactor: f,
                            viewport: g,
                            Hh: l,
                            fH: u
                        })
                    }),
                    Sdc = h4(a => {
                        const b = a.container,
                            c = a.scaleFactor,
                            d = a.viewport,
                            e = a.cp,
                            f = a.fu,
                            g = a.gu,
                            h = a.Zp,
                            k = a.Hh;
                        a = a.fH;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = u4(null),
                            p = u4(null),
                            q = u4(null);
                        m4(() => {
                            const y = G4({
                                sheet: l.sheet,
                                Jia: !0,
                                Kia: !0,
                                scaleFactor: c,
                                viewport: d
                            });
                            return p4(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = n.current;
                                if (z && A) {
                                    var C = l.sheet.direction === "rtl",
                                        G;
                                    A.style.position = (G = z.position) !== null && G !== void 0 ? G : "sticky";
                                    var J;
                                    A.style.top = (J = z.top) !== null && J !== void 0 ? J : "0px";
                                    var H, K;
                                    C ? A.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" : A.style.left = (K = z.left) !== null && K !== void 0 ? K : "0px";
                                    var O;
                                    A.style.transform = (O = z.transform) !== null && O !== void 0 ? O : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        m4(() => {
                            const y = G4({
                                sheet: l.sheet,
                                Jia: !1,
                                Kia: !0,
                                scaleFactor: c,
                                viewport: d
                            });
                            return p4(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = q.current;
                                if (z && A) {
                                    var C;
                                    A.style.position = (C = z.position) !== null && C !== void 0 ? C : "sticky";
                                    var G;
                                    A.style.top = (G = z.top) !== null && G !== void 0 ? G : "0px";
                                    var J;
                                    A.style.transform = (J = z.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        m4(() => {
                            const y = G4({
                                sheet: l.sheet,
                                Jia: !0,
                                Kia: !1,
                                scaleFactor: c,
                                viewport: d
                            });
                            return p4(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = p.current;
                                if (z && A) {
                                    var C = l.sheet.direction === "rtl",
                                        G;
                                    A.style.position = (G = z.position) !==
                                        null && G !== void 0 ? G : "sticky";
                                    var J, H;
                                    C ? A.style.right = (J = z.right) !== null && J !== void 0 ? J : "0px" : A.style.left = (H = z.left) !== null && H !== void 0 ? H : "0px";
                                    var K;
                                    A.style.transform = (K = z.transform) !== null && K !== void 0 ? K : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = i4((y, z, A) => G4({
                                sheet: y,
                                Jia: z,
                                Kia: A,
                                scaleFactor: c,
                                viewport: d
                            }), [c, d]),
                            t = g4(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            u = g4(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var v;
                        const x = (v = c === null || c === void 0 ? void 0 : c.get()) !== null && v !== void 0 ? v : 1;
                        return d4("div", {
                            className: e4("OsKKIQ",
                                "cbOp6Q"),
                            children: [b4("div", {
                                className: "VDFv_A",
                                children: b4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    J9: "hidden",
                                    cp: e,
                                    fu: f,
                                    gu: g,
                                    t1: r,
                                    scaleFactor: c,
                                    viewport: d,
                                    Hh: k,
                                    fH: a
                                })
                            }), b4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: b4(Jcc, {
                                    Dd: m,
                                    highlight: !1,
                                    ep: F4,
                                    scale: x
                                })
                            }), b4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: b4(j4, {
                                    sheet: l.sheet,
                                    hd: x,
                                    vd: x,
                                    ep: F4,
                                    IE: Rdc,
                                    zF: Qdc,
                                    msa: t
                                })
                            }), b4("div", {
                                ref: p,
                                className: "zm537g",
                                children: b4(k4, {
                                    sheet: l.sheet,
                                    hd: x,
                                    vd: x,
                                    ep: F4,
                                    IE: Rdc,
                                    zF: Qdc,
                                    msa: u
                                })
                            })]
                        })
                    }),
                    G4 = ({
                        sheet: a,
                        Jia: b,
                        Kia: c,
                        scaleFactor: d,
                        viewport: e
                    }) => o4(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.rr(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null && g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new Lq(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var adc = class {
                    constructor(a) {
                        this.LC = a;
                        this.mab = __c.$S;
                        this.Ihb = A4((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.Ahb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !oD(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !oD(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !oD(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !oD(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.mab);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.na(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.na(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.na(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || oD(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || oD(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.na(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = oD(b, c, l)) m = h, n = k, p = b.na(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.Ahb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Ca.ref) && g.span.Xb === g.span.Zc && g.span.Tb === g.span.Ic) {
                                var h = this.LC.Km(b, c, d);
                                b = this.LC.fsa(b, c, d, __c.Gh({
                                    Mg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Mg: k,
                                    textAlign: l
                                } = __c.Xg(__c.Eh, b);
                                if (k === "overflow") return __c.QMa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Ca.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.wk.type : void 0)
                            }
                        }
                    }
                };
                var Tdc = h4(function(a) {
                    const b = a.sheet;
                    var c = a.jh;
                    const d = a.Kzb,
                        e = a.scaleFactor,
                        f = a.Mta,
                        g = a.phb;
                    a = a.overflow;
                    const h = a4();
                    fdc(() => n4(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = i4(p => f.Ihb(b, p, d, g), [f, b, d, g]);
                    var l = i4((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = xcc(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction === "rtl";
                    return b4("svg", {
                        ref: h,
                        role: "presentation",
                        className: e4("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            pk: t,
                            qk: u
                        }) => b4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: v,
                                p2: x
                            }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var Udc;
                Udc = Symbol.iterator;
                var Vdc = class {
                    get size() {
                        return this.tia
                    }
                    get([a, b]) {
                        return (a = this.jF.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.jF.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.jF.get(a);
                        d == null && (d = new Map, this.jF.set(a, d));
                        d.set(b, c);
                        this.tia++;
                        return this
                    }
                    clear() {
                        this.jF.clear();
                        this.tia = 0
                    }
                    delete([a, b]) {
                        const c = this.jF.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.tia--;
                        c.size === 0 && this.jF.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.jF)
                            for (const [d, e] of c) a([b, d], e)
                    }*[Udc]() {
                        for (const [a, b] of this.jF)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.tia = 0;
                        this.jF = new Map
                    }
                };
                var Wdc, Xdc, Ydc, Zdc, $dc, aec, bec, Zcc = __c.Eq("285688d5", !1),
                    cec, dec = class extends t4 {
                        render() {
                            const {
                                $ba: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return d4("div", {
                                ref: this.O0a,
                                className: e4("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.cJa) && b4(H4, { ...b,
                                    sheet: c,
                                    range: a.cJa.range,
                                    Xv: !0,
                                    Yv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.e5a) && b4(H4, { ...b,
                                    sheet: c,
                                    range: a.e5a.range,
                                    Xv: !1,
                                    Yv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.lQa) && b4(H4, { ...b,
                                    sheet: c,
                                    range: a.lQa.range,
                                    Xv: !0,
                                    Yv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.R3a) && b4(H4, { ...b,
                                    sheet: c,
                                    range: a.R3a.range,
                                    Xv: !1,
                                    Yv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = n4(() => {
                                var b = this.props,
                                    c = b.scaleFactor;
                                b = b.sheet;
                                const d = this.O0a.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.Hc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.O0a = Xt()
                        }
                    };
                ({
                    c: [cec, Ydc]
                } = C4(dec, [], [Vc], t4));
                Ydc();
                var H4;
                new(Wdc = class extends B4 {
                    constructor() {
                        super(H4);
                        Zdc()
                    }
                }, (() => {
                    class a extends($dc = t4) {
                        static D(b) {
                            P(b, {
                                nAa: o4,
                                bounds: o4
                            })
                        }
                        get nAa() {
                            const b = this.props.viewport,
                                c = this.props.Xv,
                                d = this.props.Yv;
                            return b == null || !c && !d ? b : o4(() => {
                                const e = __c.rr(b.get());
                                return jr({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.bO,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.fH,
                                g = this.props.Xv,
                                h = this.props.Yv;
                            return d4("div", {
                                ref: this.Cxa,
                                className: e4("i0YQww",
                                    this.props.className),
                                children: [b4("div", {
                                    ref: this.pXa,
                                    className: "vUKoKg",
                                    children: b4("div", {
                                        ref: this.qXa,
                                        children: b4(I4, {
                                            bO: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            cp: this.props.cp,
                                            gD: this.props.gD,
                                            Hh: this.props.Hh,
                                            r_: this.props.r_,
                                            scaleFactor: this.props.scaleFactor,
                                            jh: this.jh,
                                            W7: this.W7,
                                            MS: this.MS
                                        })
                                    })
                                }), b4(this.tla, {}), f && b4(f, {
                                    sheet: c,
                                    range: e,
                                    Xv: g,
                                    Yv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = n4(() => {
                                    var h = this.props,
                                        k = h.scaleFactor,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.Cxa.current;
                                    const p = this.pXa.current;
                                    h = this.qXa.current;
                                    k = k ? k.get() : 1;
                                    const q = m ? l.na(m.Ic) + m.Ic.width - l.na(m.Tb) : l.width,
                                        r = m ? l.ma(m.Zc) + m.Zc.height - l.ma(m.Xb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.na(m.Tb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.ma(m.Xb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.t1;
                            const e = this.props.Xv,
                                f = this.props.Yv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = n4(() => {
                                const h = this.Cxa.current;
                                if (h != null) {
                                    var k = e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var u;
                                        h.style.right = p ? (u = x.right) !== null && u !== void 0 ? u : n : "unset";
                                        var v;
                                        h.style.transform = (v =
                                            x.transform) !== null && v !== void 0 ? v : "unset"
                                    }
                                }
                            });
                            __c.Hc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Tb: void 0,
                                Ic: void 0,
                                Xb: void 0,
                                Zc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Tb: (d = c === null || c === void 0 ? void 0 : c.Tb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Ic: (e = c === null || c === void 0 ? void 0 : c.Ic) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                Xb: (f = c === null || c === void 0 ? void 0 : c.Xb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                Zc: (g = c === null || c ===
                                    void 0 ? void 0 : c.Zc) !== null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.Cxa = (H4.D(this), Xt());
                            this.pXa = Xt();
                            this.qXa = Xt();
                            this.MS = new eec;
                            this.Lzb = o4(() => [...this.jh.get().keys()].sort((c, d) => this.props.sheet.layout.rows.ge(c, d)), {
                                equals: __c.Mo()
                            });
                            this.Jzb = o4(() => [...this.W7.get().keys()].sort((c, d) => this.props.sheet.layout.cols.ge(c, d)), {
                                equals: __c.Mo()
                            });
                            this.tla = h4(() => b4(this.props.b8a, {
                                jh: this.Lzb,
                                Kzb: this.Jzb,
                                phb: this.MS.getContentSize,
                                range: this.props.range
                            }));
                            this.jh =
                                o4(() => {
                                    var c;
                                    const d = this.props.sheet;
                                    var e = this.props.scaleFactor,
                                        f = (c = this.nAa) === null || c === void 0 ? void 0 : c.get();
                                    if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                    c = this.bounds;
                                    e = e.get();
                                    var g = 50 * e;
                                    const h = f ? f.ja.y - g : c.Xb ? d.ma(c.Xb) : 0;
                                    f = f ? f.br.y + g : c.Zc ? d.ma(c.Zc) + c.Zc.height : 0;
                                    g = new Map;
                                    for (let k = c.Xb; k != null && c.Zc != null && d.layout.rows.ge(k, c.Zc) <= 0; k = d.layout.rows.next(k)) {
                                        const l = d.ma(k);
                                        if (!(l + k.height < h)) {
                                            if (l > f) break;
                                            g.set(k, l * e)
                                        }
                                    }
                                    return g
                                }, {
                                    equals: x4.shallow
                                });
                            this.W7 = o4(() => {
                                var c;
                                const d =
                                    this.props.sheet;
                                var e = this.props.scaleFactor,
                                    f = (c = this.nAa) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.ja.x - g : c.Tb ? d.na(c.Tb) : 0;
                                f = f ? f.br.x + g : c.Ic ? d.na(c.Ic) + c.Ic.width : 0;
                                g = new Map;
                                for (let k = c.Tb; k != null && c.Ic != null && d.layout.cols.ge(k, c.Ic) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.na(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: x4.shallow
                            })
                        }
                    }({
                        c: [H4, Zdc]
                    } = C4(a, [], [Vc], $dc))
                })(), Wdc);
                var eec = class {
                        constructor() {
                            this.cells = new Vdc;
                            this.Iya = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = y4.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.getContentSize = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = y4.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.$Ka
                            }
                        }
                    },
                    I4;
                new(Xdc = class extends B4 {
                    constructor() {
                        super(I4);
                        aec()
                    }
                }, (() => {
                    class a extends(bec = t4) {
                        static D(b) {
                            P(b, {
                                uL: y4.shallow,
                                Bq: o4,
                                HIa: w4,
                                baa: w4.bound
                            })
                        }
                        get Bq() {
                            var b;
                            const c = (b = this.props.cp) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.hz(c)
                        }
                        render() {
                            var b;
                            return d4("div", {
                                ref: kdc(this.kd, (b = this.Bq) === null || b === void 0 ? void 0 : b.hm),
                                children: [b4("div", {
                                    ref: this.ooa,
                                    className: "_5YlOqQ"
                                }), b4("div", {
                                    ref: this.qoa,
                                    className: "_XCmKw"
                                }), this.uL.map(c => c.tsb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                p4(() => [this.props.sheet, this.props.W7.get(), this.props.jh.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.Bab();
                                    this.HIa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = n4(() => {
                                    var e = this.props,
                                        f = e.scaleFactor;
                                    e = e.sheet;
                                    const g = this.kd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.uL.map(e => $cc(e));
                            __c.Hc(this, [c, b, ...d])
                        }
                        Bab() {
                            const b = D(this.ooa.current),
                                c = D(this.qoa.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.XEa.length = 0;
                            this.uL.length = 0
                        }
                        HIa(b, c) {
                            const d = D(this.ooa.current),
                                e = D(this.qoa.current),
                                f = [],
                                g = new Map;
                            for (const h of this.XEa) c.has(h.la) ? g.set(h.la, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new fec(this.baa, h), d.appendChild(c.g$), e.appendChild(c.i$), this.XEa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        baa(b, c) {
                            const d = this.props.r_,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.MS;
                            b = new gec(this.props.bO, this.props.gD, this.props.Hh, d(b, c), e, b, c, f, g.Iya, this.sca, this.rca);
                            __c.Hc(this, $cc(b));
                            this.uL.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.kd = (I4.D(this), Xt());
                            this.ooa = Xt();
                            this.qoa = Xt();
                            this.XEa = [];
                            this.uL = [];
                            this.sca = A4(c => {
                                const d = this.props.jh.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.rca = A4(c => {
                                const d = this.props.W7.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [I4, aec]
                    } = C4(a, [], [Vc], bec))
                })(), Xdc);
                var fec = class {
                        static D(a) {
                            P(a, {
                                update: w4
                            })
                        }
                        update(a, b, c) {
                            [this.g$, this.i$].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.la = b;
                            for (const [d] of c) c = this.uL.get(d), c || (c = this.baa(d, b), this.uL.set(d, c), this.g$.appendChild(c.f$), this.i$.appendChild(c.fM)), c.update(b)
                        }
                        hide() {
                            [this.g$, this.i$].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.baa = a;
                            this.la = b;
                            this.g$ = (fec.D(this), document.createElement("div"));
                            this.i$ = document.createElement("div");
                            this.uL = new Map
                        }
                    },
                    gec = class {
                        static D(a) {
                            P(a, {
                                T$: y4.ref,
                                la: y4.ref,
                                Rsa: o4,
                                update: w4,
                                It: o4,
                                attrs: o4.struct,
                                mua: o4,
                                Mv: o4,
                                renderer: o4,
                                $Ka: o4.struct
                            })
                        }
                        get Rsa() {
                            if (!Zcc) return !1;
                            const a = this.It;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.bO(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.la && (this.la = a, this.Mz.la = a, this.qqa && this.qqa(), this.qqa = this.Iya(this.la, this.col, this))
                        }
                        get tsb() {
                            return this.T$
                        }
                        get It() {
                            const a = this.sheet.layout.cells.get(this.la, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.Mz.attrs;
                            return {
                                Mg: a === null || a === void 0 ? void 0 : a.Mg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get mua() {
                            var a = this.Mz.span;
                            if (!a) return !1;
                            if (a.Xb === a.Zc && a.Tb === a.Ic) return !0;
                            var b = this.sca("first");
                            const c = this.sca("last"),
                                d = this.rca("first"),
                                e = this.rca("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.ge(a.Xb, b) >= 0 && this.sheet.layout.rows.ge(a.Xb, c) <=
                                0 ? a.Xb : b;
                            a = this.sheet.layout.cols.ge(a.Tb, d) >= 0 && this.sheet.layout.cols.ge(a.Tb, e) <= 0 ? a.Tb : d;
                            return b === this.la && a === this.col
                        }
                        get Mv() {
                            const a = this.sheet,
                                b = this.la,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                la: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.Frb.$c(c, b);
                                case "sheet-item":
                                    return this.container.mAa.$c(c, b);
                                case "sheet-element":
                                    return this.container.Svb.$c(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.It;
                            if (a && this.mua &&
                                (a.content.ref || a.Ca.ref)) return this.gD({
                                context: {
                                    container: this.Mv,
                                    attrs: this.attrs
                                },
                                xp: this.twa,
                                Hh: this.Hh
                            })
                        }
                        get $Ka() {
                            this.aLa.reportObserved();
                            var a = hdc(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.a5 : this.$D, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, u;
                            this.bO = a;
                            this.gD = b;
                            this.Mz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Iya = k;
                            this.sca = l;
                            this.rca = m;
                            this.f$ =
                                (gec.D(this), document.createElement("div"));
                            this.fM = document.createElement("div");
                            this.UD = document.createElement("div");
                            this.$D = document.createElement("div");
                            this.a5 = document.createElement("div");
                            this.aLa = gdc("content size atom");
                            this.twa = w4(() => this.aLa.reportChanged());
                            this.la = g;
                            this.f$.className = "_2JFriw";
                            this.fM.className = "imy9ug";
                            this.UD.className = e4("pDMp7w", {
                                _0yZ6Qg: ((p = this.It) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.It) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((u = this.It) === null || u === void 0 ? void 0 : (t = u.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.Rsa
                            });
                            this.$D.className = "_30B9pw";
                            this.UD.appendChild(this.$D);
                            this.fM.appendChild(this.UD);
                            this.a5.className = "G7zH2w";
                            this.qqa = k(this.la, this.col, this);
                            this.Hh = v => b4(c, { ...v,
                                xp: this.twa
                            })
                        }
                    };
                var hec, iec, jec, q4;
                new(hec = class extends B4 {
                    constructor() {
                        super(q4);
                        iec()
                    }
                }, (() => {
                    class a extends(jec = t4) {
                        static D(b) {
                            P(b, {
                                $ba: o4
                            })
                        }
                        render() {
                            const {
                                bO: b,
                                sheet: c,
                                container: d,
                                cp: e,
                                t1: f,
                                gD: g,
                                pe: h,
                                Hh: k,
                                viewport: l,
                                fH: m,
                                U4a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return b4("div", {
                                className: e4("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: b4(cec, {
                                    bO: b,
                                    gD: g,
                                    Hh: k,
                                    b8a: this.tla,
                                    r_: this.r_,
                                    sheet: c,
                                    container: d,
                                    cp: e,
                                    t1: f,
                                    scaleFactor: this.scaleFactor,
                                    viewport: l,
                                    fH: m,
                                    $ba: this.$ba
                                })
                            })
                        }
                        get $ba() {
                            var b =
                                this.props.sheet;
                            const c = {},
                                d = b.view.freeze.wW ? b.layout.ae.get(b.view.freeze.wW) : void 0,
                                e = b.view.freeze.JH ? b.layout.Qd.get(b.view.freeze.JH) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.cJa = {
                                    range: {
                                        Tb: h,
                                        Xb: f,
                                        Ic: e,
                                        Zc: d
                                    }
                                });
                                d && l && (c.e5a = {
                                    range: {
                                        Tb: l,
                                        Xb: f,
                                        Ic: k,
                                        Zc: d
                                    }
                                });
                                e && b && (c.lQa = {
                                    range: {
                                        Tb: h,
                                        Xb: b,
                                        Ic: e,
                                        Zc: g
                                    }
                                });
                                b && l && (c.R3a = {
                                    range: {
                                        Tb: l,
                                        Xb: b,
                                        Ic: k,
                                        Zc: g
                                    }
                                });
                                return c
                            }
                        }
                        get scaleFactor() {
                            return this.props.scaleFactor ? this.props.scaleFactor : o4(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.tla = (q4.D(this), h4(c => {
                                const {
                                    sheet: d,
                                    Mta: e,
                                    scaleFactor: f,
                                    J9: g = "hidden"
                                } = this.props;
                                return b4(E4, {
                                    sheet: d,
                                    range: c.range,
                                    scaleFactor: f,
                                    children: b4(Tdc, { ...c,
                                        sheet: d,
                                        scaleFactor: this.scaleFactor,
                                        Mta: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.r_ = (c, d) => new __c.iNa(this.props.LC, this.props.Dz, this.props.sheet, c, d, this.scaleFactor, this.fu, this.gu);
                            this.fu = (c, d) => {
                                var e, f;
                                return (e = (f =
                                    this.props).fu) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.gu = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).gu) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [q4, iec]
                    } = C4(a, [], [Vc], jec))
                })(), hec);
                __c.pNa = {
                    fkb: function(a) {
                        const b = a.du,
                            c = a.zd,
                            d = a.ud,
                            e = a.fm,
                            f = a.LC,
                            g = a.Dz,
                            h = a.wY;
                        Gcc({
                            Bz: a.Bz,
                            pf: a.pf,
                            Axb: a.IP,
                            Ua: a.Ua
                        });
                        const k = bdc({
                            gD: h,
                            LC: f,
                            Dz: g,
                            vy: void 0
                        });
                        b.Nla = Wcc({
                            Zp: k
                        });
                        c.ula = Mcc({
                            Zp: k
                        });
                        ({
                            f8a: a
                        } = Tcc({
                            Zp: k,
                            ne: e(),
                            L0a: new Mdc
                        }));
                        d.Ko.Mla = a;
                        const {
                            f6a: l,
                            g6a: m,
                            e6a: n
                        } = Lcc();
                        return {
                            QGa: h4(p => b4(mdc, { ...p,
                                container: void 0,
                                Zp: k,
                                e8a: l,
                                g8a: m,
                                c8a: n,
                                Hh: ndc
                            }))
                        }
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/694c11c718180cd4.js.map