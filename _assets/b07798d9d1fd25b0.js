(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [75067], {

        /***/
        711112: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(635048);
            __web_req__(744054);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var P = __c.P;
                var D = __c.D;
                var Rd = __c.Rd;
                var pg = __c.pg;
                var E = __c.E;
                var w = __c.w;
                var nic = function(a, b, c) {
                        return new mic(a, b, c)
                    },
                    oic = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].vM.forEach((e, f) => c.set(f, e));
                        return {
                            vM: c,
                            apply: d => {
                                const e = new Map,
                                    f = {};
                                for (const g in d) {
                                    const h = a[g].apply(d[g]);
                                    h.jza.forEach((k, l) => e.set(l, k));
                                    f[g] = h.data
                                }
                                return {
                                    jza: e,
                                    data: f
                                }
                            }
                        }
                    },
                    pic = function(a) {
                        return () => a
                    },
                    qic = function(a) {
                        return a()
                    },
                    U5 = function(a, b, c) {
                        return new T5([a], b, c)
                    },
                    V5 = function(a, b, c, d) {
                        return new T5([a, b], c, d)
                    },
                    W5 = function(a, b, c, d) {
                        return new ric(a, b, c, d)
                    },
                    sic = function(a, b) {
                        return b(a)
                    },
                    X5 = function(a, b) {
                        return a === b || b.map(c => a.Ota(tic(c)))
                    },
                    vic = function(a, b) {
                        return a.Mva(b).map(c => new uic(c, d => d.props[b]))
                    },
                    tic = function(a) {
                        w(a instanceof Y5);
                        return a
                    },
                    Z5 = function(a) {
                        const b = new WeakMap;
                        return function(c) {
                            let d = b.get(c);
                            d == null && (d = a.call(this, c), b.set(c, d));
                            return d
                        }
                    },
                    a6 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind === "array" && $5(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : $5([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : $5([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && wic(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    $5 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!a6(a[c], b[c])) return !1;
                        return !0
                    },
                    wic = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!a6(a[f], b[f])) return !1;
                        return !0
                    },
                    b6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    yic = function(a, b) {
                        return a.map(c => b.map(d => xic[0](c, d)))
                    },
                    Aic = function(a, b, c) {
                        return b.map(d =>
                            zic[a](d, c))
                    },
                    Bic = function(a, b) {
                        return new c6(new d6(new Map(b), a.vars), a.d1)
                    },
                    Dic = function(a, b, c) {
                        for (const [e, f] of c.d1) {
                            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
                            d = Cic(b, d, g => e6(a, g, f.body));
                            b = new c6(b.vars, b.d1.define(e, d))
                        }
                        return e6(a, b, c.body)
                    },
                    e6 = function(a, b, c) {
                        switch (c.kind) {
                            case 1:
                                return Eic(c.value);
                            case 2:
                                const f = c.args.map(q => e6(a, b, q));
                                c = c.name;
                                return typeof c === "string" ? b.d1.resolve(c).map(q => Fic(q, f)) : Gic[c].map(q => f6(q, f));
                            case 3:
                                const g = c.args.map(q => q.kind !== 13 ? new Hic(e6(a,
                                    b, q)) : new Iic(e6(a, b, q.oLb)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = g.map(q => q.Era(r => r.type, r => r.type.hO()));
                                        return g6.union(...d).map(Jic[c]).map(q => Kic(q, g));
                                    default:
                                        return Lic[c].map(q => Kic(q, g))
                                }
                            case 4:
                                d = c.name;
                                var e = c.param;
                                const h = c.body,
                                    k = e6(a, b, c.CS);
                                c = k.type.hO();
                                const l = Cic(b, [
                                    [e, c]
                                ], q => e6(a, q, h));
                                return Aic(d, c, l.resultType).map(q => Mic(q, k, l));
                            case 5:
                                const m = c.entries.map(([q, r]) => [e6(a, b, q), e6(a, b, r)]);
                                c = g6.union(...m.map(([q]) => q.type));
                                d = g6.union(...m.map(([, q]) => q.type));
                                if (!X5(c,
                                        g6.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return yic(c, d).map(q => Nic(q, m));
                            case 6:
                                const n = pg(c.fields, q => e6(a, b, q));
                                c = pg(n, q => q.type);
                                return (0, Oic[0])(c).map(q => Pic(q, n));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = e6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.Kob.map(q => f6(q, [p], {
                                    vp: !0
                                }));
                            case 8:
                                return d = e6(a, b, c.base), Qic(d, c.GPb);
                            case 9:
                                return Ric(b, c.name);
                            case 10:
                                return d = Rd(c.defs, q => e6(a, b, q)), Sic(a, b, d, c.body);
                            case 11:
                                return d =
                                    e6(a, b, c.test).as(g6.boolean), e = e6(a, b, c.TEb), c = e6(a, b, c.alternate), Tic(d, e, c);
                            case 12:
                                return e6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    Eic = function(a) {
                        switch (typeof a) {
                            case "string":
                                return h6(g6.string, a);
                            case "number":
                                return h6(g6.number, a);
                            case "boolean":
                                return h6(g6.boolean, a);
                            case "undefined":
                                return h6(g6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    Qic = function(a, b) {
                        return a.map(c => vic(c, b).map(({
                            type: d,
                            get: e
                        }) => f6(new T5([c], d, e), [a])))
                    },
                    Ric = function(a, b) {
                        return a.vars.resolve(b).map(c =>
                            i6.of(c, d => d.resolve(b)))
                    },
                    Sic = function(a, b, c, d) {
                        const e = Rd(c, g => g.type),
                            f = Rd(c, g => g.evaluate);
                        return Uic(e6(a, Bic(b, e), d), g => {
                            const h = Rd(f, k => k(g));
                            return new d6(new Map(h), g)
                        })
                    },
                    Tic = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = g6.union(d, f);
                            return i6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    j6 = function(a) {
                        return b => b(a)
                    },
                    Fic = function({
                        iga: a,
                        resultType: b,
                        evaluate: c
                    }, d) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const e =
                            Vic(a, (f, g) => d[g].as(f));
                        return i6.of(b, f => {
                            const g = e.map(j6(f));
                            return c(f)(...g)
                        })
                    },
                    f6 = function({
                        iga: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const f = Vic(a, (g, h) => d[h].as(g));
                        return i6.of(b, g => {
                            g = f.map(j6(g));
                            return Wic((e === null || e === void 0 ? 0 : e.vp) ? Xic(c) : c, g)
                        })
                    },
                    Kic = function({
                        Zrb: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.xna(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = g6.CS(a))));
                        return new i6(b, g => {
                            const h =
                                j6(g),
                                k = f.map(l => l.xna(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.Era(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    Mic = function({
                        itemType: a,
                        X9a: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as([a], b),
                            h = e.as(g6.CS(a));
                        return new i6(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = Xic(p => {
                                    p = p.map(pic);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    Nic = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new i6(c, g => {
                            const h = f.map(([k, l]) => [k(g),
                                l(g)
                            ]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    Pic = function({
                        E9a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = Yic(a, (g, h) => d[h].as(g));
                        return new i6(b, g => {
                            const h = pg(f, j6(g));
                            return () => {
                                var k = pg(h, qic);
                                return c(k)
                            }
                        })
                    },
                    h6 = function(a, b) {
                        const c = pic(b);
                        return new i6(a, () => c)
                    },
                    Uic = function(a, b) {
                        const c = a.evaluate;
                        return new i6(a.type, d => c(b(d)))
                    },
                    Cic = function(a, b, c) {
                        const d = b.map(f => f[0]),
                            e = b.map(f =>
                                f[1]);
                        return sic(e, f => c(Bic(a, new Map(b))).map((g, h) => new Zic(f, g, k => (...l) => {
                            const m = new Map(d.map((n, p) => [n, l[p]]));
                            return h(new d6(new Map(m), k))
                        })))
                    },
                    Wic = function(a, b) {
                        switch (b.length) {
                            case 0:
                                return a;
                            case 1:
                                const [c] = b;
                                return () => a(c());
                            case 2:
                                const [d, e] = b;
                                return () => a(d(), e());
                            default:
                                return () => {
                                    var f = b.map(qic);
                                    return a(...f)
                                }
                        }
                    },
                    Xic = function(a) {
                        let b;
                        return (...c) => {
                            if (b && b.L4a.length === c.length && b.L4a.every((e, f) => k6.Ig(e, c[f]))) return b.v;
                            const d = a(...c);
                            b = {
                                L4a: c,
                                v: d
                            };
                            return d
                        }
                    },
                    Yic = function(a,
                        b) {
                        return pg(a, b)
                    },
                    Vic = function(a, b) {
                        return a.map(b)
                    },
                    ajc = function(a, b, c) {
                        return new $ic(a, b, c)
                    },
                    bjc = function(a, b) {
                        return [...a].map(b)[Symbol.iterator]()
                    },
                    l6 = function(a, b, c, d) {
                        if (d == null) throw a.error(b.BI(c), "not found");
                        return d
                    },
                    ojc = function(a) {
                        function b(r) {
                            return m[r.kind](r)
                        }
                        const c = a.types,
                            d = a.values;
                        class e {
                            static of (r, t, u, v, x, y) {
                                return new e(r, u, v, cjc(x, djc(t)), ejc(y, djc(t)))
                            }
                            map(r) {
                                return r(this)
                            }
                            validate(r) {
                                return r ? new e(this.dataType, this.D7, this.Y6, fjc(this.decode, r), cjc(this.encode,
                                    r)) : this
                            }
                            constructor(r, t, u, v, x) {
                                this.dataType = r;
                                this.D7 = t;
                                this.Y6 = u;
                                this.decode = v;
                                this.encode = x
                            }
                        }
                        const f = e.of({
                                kind: 0
                            }, "string", c.string, r => r, (r, t, u) => u.value, (r, t, u) => ({
                                type: "string",
                                value: u
                            })),
                            g = e.of({
                                kind: 1
                            }, "boolean", c.boolean, r => r, (r, t, u) => u.value, (r, t, u) => ({
                                type: "boolean",
                                value: u
                            })),
                            h = e.of({
                                kind: 2
                            }, "double", c.number, r => r, (r, t, u) => u.value, (r, t, u) => ({
                                type: "double",
                                value: u
                            })).validate((r, t, u) => {
                                if (!Number.isFinite(u)) throw r.error(t, `number is not finite: ${u}`);
                            }),
                            k = e.of({
                                    kind: 3
                                }, "int32", c.number,
                                r => r, (r, t, u) => u.value, (r, t, u) => ({
                                    type: "int32",
                                    value: u
                                })).validate((r, t, u) => {
                                if (!Number.isInteger(u) || u < -2147483648 || u > 2147483647) throw r.error(t, `number is not an int32: ${u}`);
                            }),
                            l = {
                                Fill: e.of({
                                    kind: 7,
                                    name: "Fill"
                                }, "fill", c.instance("Fill"), r => d.instance("Fill", r), (r, t, u) => u.value, (r, t, u) => ({
                                    type: "fill",
                                    value: u
                                })),
                                Stroke: e.of({
                                    kind: 7,
                                    name: "Stroke"
                                }, "stroke", c.instance("Stroke"), r => d.instance("Stroke", r), (r, t, u) => u.value, (r, t, u) => ({
                                    type: "stroke",
                                    value: u
                                })),
                                Richtext2: e.of({
                                        kind: 7,
                                        name: "Richtext2"
                                    }, "text2",
                                    c.instance("Richtext2"), r => d.instance("Richtext2", r), (r, t, u) => u.value, (r, t, u) => ({
                                        type: "text2",
                                        value: u
                                    }))
                            },
                            m = {
                                [0]: r => f.validate(gjc(r.rK)),
                                [1]: () => g,
                                [2]: r => h.validate(hjc(r.range)),
                                [3]: r => k.validate(hjc(r.range)),
                                [4]: r => e.of({
                                    kind: 4,
                                    values: r.values
                                }, ijc, c.primitive, t => t, (t, u, v) => v.value, (t, u, v) => {
                                    a: switch (typeof v) {
                                        case "string":
                                            t = {
                                                type: "string",
                                                value: v
                                            };
                                            break a;
                                        case "boolean":
                                            t = {
                                                type: "boolean",
                                                value: v
                                            };
                                            break a;
                                        case "number":
                                            t = {
                                                type: "int32",
                                                value: v
                                            };
                                            break a;
                                        default:
                                            throw new E(v);
                                    }
                                    return t
                                }).validate(jjc(r.values)),
                                [5]: r => {
                                    const {
                                        dataType: t,
                                        D7: u,
                                        Y6: v,
                                        decode: x,
                                        encode: y
                                    } = b(r.itemType);
                                    return e.of({
                                        kind: 5,
                                        itemType: t
                                    }, "list", c.array(u), z => d.array(z.map(v)), (z, A, C) => C.value.toArray().map((G, J) => x(z, A.pN(J), G)), (z, A, C) => ({
                                        type: "list",
                                        value: C.map((G, J) => y(z, A.pN(J), G))
                                    }))
                                },
                                [6]: r => {
                                    const {
                                        dataType: t,
                                        D7: u,
                                        Y6: v,
                                        decode: x,
                                        encode: y
                                    } = b(r.itemType);
                                    return e.of({
                                        kind: 6,
                                        itemType: t
                                    }, "dict", c.map(c.string, u), z => d.map(Rd(z, v)), (z, A, C) => Rd(C.value.ek(), (G, J) => x(z, A.T0(J), G)), (z, A, C) => ({
                                        type: "dict",
                                        value: Rd(C, (G, J) => y(z, A.T0(J),
                                            G))
                                    }))
                                },
                                [7]: r => l[r.name],
                                [8]: r => {
                                    const {
                                        dataType: t,
                                        decode: u,
                                        encode: v
                                    } = b(r.itemType);
                                    return e.of({
                                        kind: 8,
                                        itemType: t
                                    }, "list", c.undefined, () => {}, (x, y, z) => nic(z.value, A => v(x, y.pN("*"), A), kjc(u, x, y.pN("*"))), (x, y, z) => ({
                                        type: "list",
                                        value: z.map((A, C) => v(x, y.pN(C), A))
                                    }))
                                },
                                [9]: r => {
                                    const {
                                        dataType: t,
                                        decode: u,
                                        encode: v
                                    } = b(r.itemType);
                                    return e.of({
                                        kind: 9,
                                        itemType: t
                                    }, "dict", c.undefined, () => {}, (x, y, z) => ajc(z.value, A => v(x, y.T0("*"), A), kjc(u, x, y.pN("*"))), (x, y, z) => ({
                                        type: "dict",
                                        value: Rd(z, (A, C) => v(x, y.T0(C), A))
                                    }))
                                },
                                [10]: r => {
                                    const {
                                        decode: t,
                                        encode: u
                                    } = p.$Sa(r.fields);
                                    return e.of({
                                        kind: 10,
                                        fields: r.fields
                                    }, "dict", c.undefined, () => {}, t, u)
                                },
                                [11]: r => {
                                    function t(G, J, H, K) {
                                        H = H.get(K);
                                        if (H == null) throw G.error(J, `unknown case for discriminator value: ${K}`);
                                        return H
                                    }
                                    const u = r.FMa;
                                    r = r.Yf;
                                    var v = Object.keys(u);
                                    w(v.length >= 1, "missing discriminator props");
                                    w(v.length <= 1, "too many discriminator props: {}", v);
                                    const x = v[0];
                                    w(r.length >= 1, "discriminated union has no cases");
                                    v = new Map;
                                    for (const G of r) {
                                        const J = G.fields[x].type.values,
                                            H = b(G);
                                        for (const K of J) w(!v.has(K), "discriminator values are not unique across cases: {}", K), v.set(K, H)
                                    }
                                    const {
                                        decode: y,
                                        encode: z
                                    } = b({
                                        kind: 4,
                                        values: new Set(v.keys())
                                    }), A = Rd(v, G => G.decode), C = Rd(v, G => G.encode);
                                    return e.of({
                                        kind: 11,
                                        FMa: u,
                                        Yf: r
                                    }, "dict", c.undefined, () => {}, (G, J, H) => {
                                        var K = l6(G, J, "k", H.value.get("k"));
                                        H = l6(G, J, "v", H.value.get("v"));
                                        ljc(G, J, "dict", H);
                                        K = y(G, J, K);
                                        return t(G, J, A, K)(G, J, H)
                                    }, (G, J, H) => {
                                        const K = H[x],
                                            O = t(G, J, C, K);
                                        return {
                                            type: "dict",
                                            value: new Map([
                                                ["k", z(G, J, K)],
                                                ["v", O(G, J, H)]
                                            ])
                                        }
                                    })
                                }
                            },
                            n = Symbol("$impl");
                        class p {
                            static $Sa(r) {
                                r = pg(r, v => q.of(v));
                                const t = pg(r, v => v.Uxb()),
                                    u = Object.entries(r);
                                return {
                                    vM: new Map(u.map(([, v]) => v.Pxb())),
                                    Vxb: v => {
                                        const x = v[n];
                                        return new Map(u.map(([, y]) => y.Wxb(x)))
                                    },
                                    decode: (v, x, y) => {
                                        const z = Object.create(null, t);
                                        Object.defineProperty(z, n, {
                                            enumerable: !1,
                                            writable: !1,
                                            value: new p(v, x, y.value)
                                        });
                                        return z
                                    },
                                    encode: (v, x, y) => {
                                        const z = u.map(([A, C]) => C.encode(v, x, y[A]));
                                        return {
                                            type: "dict",
                                            value: new Map(z.filter(__c.Jb))
                                        }
                                    }
                                }
                            }
                            wPa(r, t) {
                                const u = l6(this.e, this.p, t, this.data.get(t));
                                return m6(this.YNa, r.decode, this.e, this.p.BI(t), u)
                            }
                            pPa(r, t) {
                                const u = this.data.get(t);
                                if (u != null) return m6(this.YNa, r.decode, this.e, this.p.BI(t), u)
                            }
                            Evb(r, t, u) {
                                this.data.set(t, r.encode(this.e, this.p.BI(t), u))
                            }
                            Avb(r, t, u) {
                                u != null ? this.data.set(t, r.encode(this.e, this.p.BI(t), u)) : this.data.delete(t)
                            }
                            constructor(r, t, u) {
                                this.e = r;
                                this.p = t;
                                this.data = u;
                                this.YNa = new WeakMap
                            }
                        }
                        class q {
                            static of (r) {
                                return new q(r, b(r.type))
                            }
                            get key() {
                                return this.rb.key
                            }
                            Pxb() {
                                const r = this.rb,
                                    t = this.type,
                                    u = r.key;
                                switch (r.hK) {
                                    case 0:
                                        return [u,
                                            t.D7
                                        ];
                                    case 1:
                                        return [u, c.optional(t.D7)];
                                    default:
                                        throw new E(r.hK);
                                }
                            }
                            Wxb(r) {
                                const t = this.rb,
                                    u = this.type,
                                    v = t.key;
                                switch (t.hK) {
                                    case 0:
                                        return [v, () => u.Y6(r.wPa(u, v))];
                                    case 1:
                                        return [v, () => {
                                            const x = r.pPa(u, v);
                                            return x != null ? u.Y6(x) : void 0
                                        }];
                                    default:
                                        throw new E(t.hK);
                                }
                            }
                            Uxb() {
                                const r = this.rb,
                                    t = this.type,
                                    u = r.key;
                                let v;
                                switch (r.hK) {
                                    case 0:
                                        v = {
                                            enumerable: !0,
                                            get() {
                                                return this[n].wPa(t, u)
                                            },
                                            set(x) {
                                                this[n].Evb(t, u, x)
                                            }
                                        };
                                        break;
                                    case 1:
                                        v = {
                                            enumerable: !0,
                                            get() {
                                                return this[n].pPa(t, u)
                                            },
                                            set(x) {
                                                this[n].Avb(t, u, x)
                                            }
                                        };
                                        break;
                                    default:
                                        throw new E(r.hK);
                                }
                                switch (r.fAa) {
                                    case 0:
                                        v.set = void 0;
                                        break;
                                    case 1:
                                        break;
                                    default:
                                        throw new E(r.fAa);
                                }
                                return v
                            }
                            encode(r, t, u) {
                                const v = this.rb,
                                    x = this.type,
                                    y = v.key;
                                switch (v.hK) {
                                    case 0:
                                        return [y, x.encode(r, t.BI(y), l6(r, t, y, u))];
                                    case 1:
                                        return u != null ? [y, x.encode(r, t.BI(y), u)] : void 0;
                                    default:
                                        throw new E(v.hK);
                                }
                            }
                            constructor(r, t) {
                                this.rb = r;
                                this.type = t
                            }
                        }
                        return (r, t) => {
                            const u = new mjc(r),
                                v = new njc,
                                {
                                    vM: x,
                                    Vxb: y,
                                    decode: z
                                } = p.$Sa(t);
                            return {
                                vM: x,
                                apply: A => {
                                    A = z(u, v, {
                                        type: "dict",
                                        value: A
                                    });
                                    return {
                                        jza: y(A),
                                        data: A
                                    }
                                }
                            }
                        }
                    },
                    kjc = function(a, b, c) {
                        const d = new WeakMap;
                        return e => m6(d, a, b, c, e)
                    },
                    m6 = function(a, b, c, d, e) {
                        let f = a.get(e);
                        f == null && (f = b(c, d, e), a.set(e, f));
                        return f
                    },
                    cjc = function(a, b) {
                        return (c, d, e) => {
                            b(c, d, e);
                            return a(c, d, e)
                        }
                    },
                    fjc = function(a, b) {
                        return (c, d, e) => {
                            e = a(c, d, e);
                            b(c, d, e);
                            return e
                        }
                    },
                    ejc = function(a, b) {
                        var c = pjc();
                        return (d, e, f) => {
                            f = a(d, e, f);
                            b(d, e, f);
                            c(d, e, f);
                            return f
                        }
                    },
                    ljc = function(a, b, c, d) {
                        if (d.type !== c) throw a.error(b, `type error: expected ${c}, was ${d.type}`);
                    },
                    djc = function(a) {
                        return typeof a === "string" ? (b,
                            c, d) => ljc(b, c, a, d) : (b, c, d) => {
                            if (!a.has(d.type)) throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                        }
                    },
                    pjc = function() {
                        return (a, b, c) => {
                            if (typeof c.value !== qjc[c.type]) throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                        }
                    },
                    jjc = function(a) {
                        return (b, c, d) => {
                            if (!a.has(d)) throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                        }
                    },
                    hjc = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e,
                                    `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    gjc = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    tjc = function() {
                        return (new rjc({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.kN.create({ ...__c.mF,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            Stroke: new a("Stroke", {
                                color: b.string,
                                weight: b.number,
                                Qc: b.array(b.number),
                                ue: b.boolean
                            }, c => __c.Xy.create({ ...__c.pP,
                                color: c.color,
                                weight: c.weight,
                                Qc: c.Qc.items,
                                ue: c.ue
                            }))
                        })).add((a, b) => ({
                            Richtext2: new a("Richtext2", {
                                Sgb: b.array(b.Gc({
                                    qb: b.string,
                                    attrs: b.map(b.string, b.string)
                                }))
                            }, c => {
                                c = c.Sgb;
                                const d = __c.Qk.Fb();
                                c.items.forEach(e => {
                                    const f = e.fields.qb;
                                    d.attrs(__c.Ch(e.fields.attrs.items));
                                    d.qb(f)
                                });
                                return __c.Qk.create(d.build())
                            })
                        })).add((a, b) => ({
                            Path: new a("Path", {
                                d: b.string,
                                fill: b.instance("Fill"),
                                stroke: b.union(b.instance("Stroke"), b.undefined)
                            }, c => {
                                const d = c.stroke,
                                    e = c.fill;
                                c = __c.PN.create({ ...__c.Iob,
                                    d: c.d,
                                    fill: __c.mF
                                });
                                Object.defineProperties(c, {
                                    fill: {
                                        value: e.instance
                                    },
                                    stroke: {
                                        value: sjc(d)
                                    }
                                });
                                return c
                            })
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                Z: b.union(b.array(b.number), b.undefined),
                                stroke: b.union(b.instance("Stroke"), b.undefined)
                            }, c => {
                                var d;
                                const e = c.stroke;
                                var f, g;
                                const h = __c.aB.create({ ...__c.lF,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (f = c.rotation) !== null && f !== void 0 ? f : __c.lF.rotation,
                                    fill: __c.mF,
                                    Z: (g = (d = c.Z) ===
                                        null || d === void 0 ? void 0 : d.items) !== null && g !== void 0 ? g : __c.lF.Z
                                });
                                Object.defineProperties(h, {
                                    fill: {
                                        value: c.fill.instance
                                    },
                                    stroke: {
                                        value: sjc(e)
                                    }
                                });
                                return h
                            })
                        })).add((a, b) => ({
                            ShapeElement: new a("ShapeElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                va: b.union(b.number, b.undefined),
                                viewBox: b.Gc({
                                    top: b.number,
                                    left: b.number,
                                    width: b.number,
                                    height: b.number
                                }),
                                ib: b.array(b.instance("Path"))
                            }, c => {
                                var d, e;
                                const f = __c.bB.create({ ...__c.CP,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (d = c.rotation) !== null && d !== void 0 ? d : __c.CP.rotation,
                                    va: (e = c.va) !== null && e !== void 0 ? e : __c.CP.va,
                                    ib: [],
                                    viewBox: c.viewBox.fields
                                });
                                Object.defineProperties(f, {
                                    ib: {
                                        value: new __c.OW(c.ib.items.map(g => n6(() => g.instance)))
                                    }
                                });
                                return f
                            })
                        }))
                    },
                    sjc = function(a) {
                        return a && {
                            ref: a.instance,
                            set() {
                                throw Error("Replacing of stroke on a model unit is not yet supported");
                            }
                        }
                    },
                    vjc = function(a, b) {
                        return class extends ujc {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ?
                                    o6(__c.vv, {
                                        background: "criticalLow",
                                        width: "full",
                                        height: "full",
                                        padding: "0.25u",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        role: "alert",
                                        children: o6(__c.sv, {
                                            size: "xsmall",
                                            alignment: "center",
                                            children: __c.N("Q6XSow")
                                        })
                                    }) : o6(b, { ...this.props
                                    })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    Ajc = function(a, b, c) {
                        const d = f => ({
                            element: f.G.Fe
                        });
                        var e = f => {
                            a: {
                                var g = a.Xzb;
                                switch (f.container.type) {
                                    case "fixed-page":
                                        var h = f.container.container;
                                        switch (h === null || h === void 0 ? void 0 : h.type) {
                                            case "concatenated-fixed-page":
                                                h =
                                                    D(g.fb.W.has(h.G) ? h.G : void 0, "Expected page to be part of the document content.", f);
                                                f = {
                                                    page: g.el.VOa(h),
                                                    U: new wjc(f.G),
                                                    Dk: g.Dk
                                                };
                                                break a;
                                            case "design-item":
                                                throw Error("Design item widget context is not supported.");
                                            case "fixed-document":
                                            case void 0:
                                                h = f.container;
                                                h = g.fb.W.has(h.G) ? h.G : void 0;
                                                h = D(h, "Expected page to be part of the document content.", f);
                                                f = {
                                                    page: g.el.ePa(h),
                                                    U: new wjc(f.G),
                                                    Dk: g.Dk
                                                };
                                                break a;
                                            default:
                                                throw new E(h);
                                        }
                                    case "group-element":
                                        throw Error("Nested group elements are not supported in widget rendering.");
                                    case "controlled-element":
                                        throw Error("Nested controlled elements are not supported in widget rendering.");
                                    default:
                                        throw new E(f.container);
                                }
                                f = void 0
                            }
                            return f
                        };
                        b = oic(b);
                        switch (c.type) {
                            case 0:
                                return c = c.SA, typeof c === "object" ? (e = a.uX.types, e = e.CS(e.union(e.instance("RectElement"), e.instance("ShapeElement"))), xjc(a, d, b, e, c, f => new __c.NW(() => f().map(g => g.instance)))) : yjc(d, e, b, c);
                            case 1:
                                return zjc(a, d, e, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    xjc = function(a, b, c, d, e, f) {
                        const g = a.ppa(a.uX, c, d).compile(e);
                        return {
                            type: 0,
                            SA: h => ({
                                Ia: f(g.apply(b(h)))
                            })
                        }
                    },
                    yjc = function(a, b, c, d) {
                        return {
                            type: 0,
                            SA: e => d(c.apply(a(e)).data, b(e))
                        }
                    },
                    zjc = function(a, b, c, d, e) {
                        return {
                            type: 1,
                            Component: vjc(a.I, Bjc(({
                                model: f
                            }) => {
                                const [g] = Cjc(() => d.apply(b(f)).data);
                                return o6(e, {
                                    data: g,
                                    vm: a.vm,
                                    ii: c(f)
                                })
                            }))
                        }
                    },
                    Ejc = function(a) {
                        return {
                            vM: a.vM,
                            apply: Djc(a.apply)
                        }
                    },
                    Djc = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    mic = class {
                        static D(a) {
                            P(a, {
                                D3: __c.MW
                            })
                        }
                        get D3() {
                            const a = new Map;
                            this.base.forEach(b =>
                                a.set(this.Gf(b), b));
                            return a
                        }
                        ys(a) {
                            return D(this.D3.get(a))
                        }
                        nV(a) {
                            return a != null ? this.Gf(a) : void 0
                        }
                        get empty() {
                            return this.base.empty
                        }
                        count() {
                            return this.base.count()
                        }
                        toArray() {
                            return this.base.toArray().map(this.Gf)
                        }
                        ek() {
                            return Rd(this.base.ek(), this.Gf)
                        }[__c.UUb]() {
                            return this.toArray()[Symbol.iterator]()
                        }
                        first(a) {
                            return this.nV(this.base.first(a && (b => a(this.Gf(b)))))
                        }
                        last(a) {
                            return this.nV(this.base.last(a && (b => a(this.Gf(b)))))
                        }
                        next(a, b) {
                            return this.nV(this.base.next(this.ys(a), b && (c => b(this.Gf(c)))))
                        }
                        Sb(a,
                            b) {
                            return this.nV(this.base.Sb(this.ys(a), b && (c => b(this.Gf(c)))))
                        }
                        ge(a, b) {
                            return this.base.ge(this.ys(a), this.ys(b))
                        }
                        ou(a) {
                            return this.base.ou(this.ys(a))
                        }
                        has(a) {
                            return this.base.has(this.ys(a))
                        }
                        set(a, b) {
                            return this.Gf(this.base.set(a, this.pF(b)))
                        }
                        replace(a, b) {
                            return this.Gf(this.base.replace(this.ys(a), this.pF(b)))
                        }
                        append(a) {
                            return this.Gf(this.base.append(this.pF(a)))
                        }
                        prepend(a) {
                            return this.Gf(this.base.prepend(this.pF(a)))
                        }
                        YE(a, b) {
                            return this.Gf(this.base.YE(a && this.ys(a), this.pF(b)))
                        }
                        insertBefore(a,
                            b) {
                            return this.Gf(this.base.insertBefore(a && this.ys(a), this.pF(b)))
                        }
                        EB(a, b) {
                            return this.base.EB(a && this.ys(a), b.map(this.pF)).map(this.Gf)
                        }
                        delete(a) {
                            this.base.delete(this.ys(a))
                        }
                        Qx(a) {
                            this.base.Qx(a && (b => a(this.Gf(b))))
                        }
                        wp(a, b) {
                            this.base.wp(a && this.ys(a), this.ys(b))
                        }
                        yq(a) {
                            return new __c.zL(this, a)
                        }
                        map(a) {
                            return this.base.map((b, c) => a(this.Gf(b), c))
                        }
                        flatMap(a) {
                            return this.base.flatMap((b, c) => a(this.Gf(b), c))
                        }
                        filter(a) {
                            return this.base.filter((b, c) => a(this.Gf(b), c)).map(this.Gf)
                        }
                        forEach(a) {
                            this.base.forEach((b,
                                c) => a(this.Gf(b), c))
                        }
                        reduce(a, b) {
                            return this.base.reduce((c, d) => a(c, this.Gf(d)), b)
                        }
                        some(a) {
                            return this.base.some(b => a(this.Gf(b)))
                        }
                        every(a) {
                            return this.base.every(b => a(this.Gf(b)))
                        }
                        constructor(a, b, c) {
                            this.base = a;
                            this.pF = b;
                            this.Gf = c;
                            mic.D(this)
                        }
                    },
                    p6 = __webpack_require__(400770),
                    Fjc = p6.comparer,
                    n6 = p6.computed,
                    Gjc = p6.observable;
                var q6 = __webpack_require__(206928).iB;
                var o6 = __webpack_require__(31968).jsx;
                var r6 = __webpack_require__(845212),
                    Bjc = r6.memo,
                    ujc = r6.PureComponent,
                    Cjc = r6.useState;
                var T5 = class {
                        static of (a, b, c) {
                            return new T5(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.iga = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Ijc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = Hjc;
                            this.E9a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    s6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Zrb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Kjc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = Jjc;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    ric = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.X9a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var uic = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var Ljc = class {},
                    Hic = class extends Ljc {
                        xna(a) {
                            return new Hic(a(this.value))
                        }
                        Era(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    Iic = class extends Ljc {
                        xna(a, b) {
                            return new Iic(b(this.value))
                        }
                        Era(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var Y5 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    t6 = class extends Y5 {
                        Ota(a) {
                            return this === a || a.BAa(b => this.E2(b))
                        }
                        hO() {
                            throw Error(`${this} is not iterable`);
                        }
                        Mva(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.mea();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        mea() {
                            throw Error(`${this} is not navigable`);
                        }
                        Lra(a) {
                            a(this)
                        }
                        BAa(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    u6 = class extends t6 {
                        E2(a) {
                            return a instanceof u6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    v6 = class extends t6 {
                        E2(a) {
                            return a instanceof v6 && this.eE === a.eE
                        }
                        toString() {
                            return this.eE.name
                        }
                        constructor(a) {
                            super();
                            this.eE = a
                        }
                    },
                    w6 = class extends t6 {
                        E2(a) {
                            return a instanceof w6 && this.eE === a.eE && X5(this.yx, a.yx)
                        }
                        toString() {
                            return `${this.eE}<${this.yx}>`
                        }
                        constructor(a, b) {
                            super();
                            this.eE = a;
                            this.yx = b
                        }
                    },
                    Mjc = class extends w6 {
                        hO() {
                            return this.yx
                        }
                        mea() {
                            const a =
                                this.yx;
                            return {
                                size: g6.number,
                                empty: g6.boolean,
                                get first() {
                                    return g6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    Njc = class extends w6 {
                        hO() {
                            return this.yx
                        }
                        mea() {
                            const a = this.yx;
                            return {
                                size: g6.number,
                                empty: g6.boolean,
                                get first() {
                                    return g6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    Ojc = class extends t6 {
                        E2(a) {
                            return a instanceof Ojc && X5(this.key, a.key) && X5(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    Pjc = class extends t6 {
                        E2(a) {
                            return a instanceof
                            Pjc ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && X5(this.fields[b], c)) : !1
                        }
                        mea() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    x6 = class extends Y5 {
                        Ota(a) {
                            return this === a || this.Yf.every(b => b.Ota(a))
                        }
                        hO() {
                            return g6.union(...this.Yf.map(a => a.hO()))
                        }
                        Mva(a) {
                            return g6.union(...this.Yf.map(b => b.Mva(a)))
                        }
                        Lra(a) {
                            this.Yf.forEach(b => b.Lra(a))
                        }
                        BAa(a) {
                            return this.Yf.some(b =>
                                b.BAa(a))
                        }
                        toString() {
                            return this.Yf.length ? this.Yf.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Yf = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    y6 = new x6([]),
                    Qjc = new u6("string"),
                    Rjc = new u6("number"),
                    Sjc = new u6("boolean"),
                    Tjc = new u6("undefined"),
                    Ujc = new x6([Qjc, Rjc, Sjc]),
                    Vjc = class {
                        get never() {
                            return y6
                        }
                        get string() {
                            return Qjc
                        }
                        get number() {
                            return Rjc
                        }
                        get boolean() {
                            return Sjc
                        }
                        get undefined() {
                            return Tjc
                        }
                        get primitive() {
                            return Ujc
                        }
                        optional(a) {
                            return g6.union(a, g6.undefined)
                        }
                        array(a) {
                            return new Mjc(a)
                        }
                        set(a) {
                            return new Njc(a)
                        }
                        CS(a) {
                            return new x6([new Mjc(a),
                                new Njc(a)
                            ])
                        }
                        map(a, b) {
                            return new Ojc(a, b)
                        }
                        Gc(a) {
                            return new Pjc({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return y6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) tic(d).Lra(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return y6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return X5(d, e) ? e : X5(e, d) ? d : new x6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => X5(d, e)) || (c.forEach(e => X5(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new x6([...c])
                        }
                        constructor() {
                            this.optional = Z5(this.optional);
                            this.array = Z5(this.array);
                            this.set = Z5(this.set);
                            this.CS = Z5(this.CS)
                        }
                    },
                    Wjc = class extends Vjc {
                        instance(a) {
                            return new v6(a)
                        }
                    },
                    g6 = new Wjc,
                    Xjc = class extends Vjc {
                        instance(a) {
                            return new v6(D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var Yjc, Zjc, z6 = Symbol("value"),
                    A6 = class {
                        get props() {
                            var a;
                            return (a = this.S8a) !== null && a !== void 0 ? a : this.S8a = this.Xma()
                        }
                    },
                    $jc = class {
                        get size() {
                            return this[z6].length
                        }
                        get empty() {
                            return this[z6].length === 0
                        }
                        get first() {
                            return this[z6][0]
                        }
                        constructor(a) {
                            this[z6] = a
                        }
                    };
                Yjc = Symbol.iterator;
                var akc = class extends A6 {
                        Xma() {
                            return new $jc(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[Yjc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,b6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    bkc = class {
                        get size() {
                            return this[z6].size
                        }
                        get empty() {
                            return this[z6].size === 0
                        }
                        get first() {
                            return this[z6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[z6] = a
                        }
                    };
                Zjc = Symbol.iterator;
                var ckc = class extends A6 {
                        Xma() {
                            return new bkc(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[Zjc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,b6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    dkc = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${b6(a)}]: ${b6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    ekc = class extends A6 {
                        Xma() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${b6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    fkc = class {
                        toString() {
                            return `[instance ${this.eE.name}]`
                        }
                        constructor(a, b) {
                            this.eE = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    gkc = class {
                        array(a) {
                            return new akc(a)
                        }
                        arrayOf(...a) {
                            return new akc(a)
                        }
                        set(a) {
                            return new ckc(a)
                        }
                        map(a) {
                            return new dkc(new Map(a))
                        }
                        Gc(a) {
                            return new ekc({ ...a
                            })
                        }
                    },
                    hkc = class extends gkc {
                        instance(a, b) {
                            return new fkc(a, b)
                        }
                        stringify(a) {
                            return b6(a)
                        }
                        constructor() {
                            super();
                            this.Ig = a6
                        }
                    },
                    k6 = new hkc,
                    ikc = class extends gkc {
                        instance(a, b) {
                            a = D(this.classes[a]);
                            return new fkc(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var Gic = {
                        [0]: U5(g6.number, g6.number, a => -a),
                        [1]: U5(g6.string, g6.number, a => a.length),
                        [2]: U5(g6.boolean, g6.boolean, a => !a),
                        [3]: V5(g6.number, g6.number, g6.number, (a, b) => a + b),
                        [4]: V5(g6.number, g6.number, g6.number, (a, b) => a - b),
                        [5]: V5(g6.number, g6.number, g6.number, (a, b) => a * b),
                        [6]: V5(g6.number, g6.number, g6.number, (a, b) => a / b),
                        [7]: V5(g6.number, g6.number, g6.number, (a, b) => a % b),
                        [8]: V5(g6.string, g6.string, g6.string, (a, b) => a + b),
                        [9]: V5(g6.number, g6.number, g6.boolean, (a, b) => a === b),
                        [10]: V5(g6.number, g6.number, g6.boolean,
                            (a, b) => a !== b),
                        [11]: V5(g6.number, g6.number, g6.boolean, (a, b) => a < b),
                        [12]: V5(g6.number, g6.number, g6.boolean, (a, b) => a <= b),
                        [13]: V5(g6.number, g6.number, g6.boolean, (a, b) => a > b),
                        [14]: V5(g6.number, g6.number, g6.boolean, (a, b) => a >= b),
                        [15]: V5(g6.boolean, g6.boolean, g6.boolean, (a, b) => a && b),
                        [16]: V5(g6.boolean, g6.boolean, g6.boolean, (a, b) => a || b)
                    },
                    Lic = {
                        [2]: new s6(g6.number, g6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new s6(g6.number, g6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new s6(g6.number, g6.number, a => Math.max(...a)),
                        [5]: new s6(g6.number,
                            g6.number, a => Math.min(...a)),
                        [6]: new s6(g6.string, g6.string, a => a.join(""))
                    },
                    jkc = a => k6.array(a),
                    kkc = a => k6.set(a),
                    Jic = {
                        [0]: a => new s6(a, g6.array(a), jkc),
                        [1]: a => new s6(a, g6.set(a), kkc)
                    },
                    Jjc = a => k6.map(a),
                    xic = {
                        [0]: (a, b) => new Kjc(a, b, g6.map(a, b))
                    },
                    Hjc = a => k6.Gc(a),
                    Oic = {
                        [0]: a => new Ijc(a, g6.Gc(a))
                    },
                    lkc = (a, b) => k6.array(b.map(c => c())),
                    mkc = (a, b) => k6.array(b.flatMap(c => c().items)),
                    nkc = (a, b) => k6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    okc = (a, b) => b.some(c => c()),
                    pkc = (a, b) => b.every(c => c()),
                    qkc = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    zic = {
                        [0]: (a, b) => b.map(c => W5(a, c, g6.array(c), lkc)),
                        [1]: (a, b) => b.hO().map(c => W5(a, g6.array(c), g6.array(c), mkc)),
                        [2]: a => W5(a, g6.boolean, g6.array(a), nkc),
                        [3]: a => W5(a, g6.boolean, g6.boolean, okc),
                        [4]: a => W5(a, g6.boolean, g6.boolean, pkc),
                        [5]: a => W5(a, g6.boolean, g6.optional(a), qkc)
                    };
                var d6 = class {
                    define(a, b) {
                        return new d6(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: "${a}"`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var skc = (a, b, c) => {
                        const d = c6.create(b.vM),
                            e = new rkc(a);
                        return {
                            compile: f => {
                                const g = Dic(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new d6(new Map(b.apply(h).jza));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    c6 = class {
                        static create(a) {
                            return new c6(new d6(new Map(a)), new d6(new Map))
                        }
                        constructor(a = new d6(new Map), b = new d6(new Map)) {
                            this.vars = a;
                            this.d1 = b
                        }
                    },
                    rkc = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    i6 = class {
                        static of (a, b) {
                            return new i6(a, b)
                        }
                        as(a) {
                            if (!X5(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new i6(this.type, b => {
                                const c = n6(a(b), {
                                    equals: k6.Ig
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type, this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    Zic = class {
                        as(a, b) {
                            const c = this.iga,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!X5(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!X5(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.iga = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var rjc = class {
                        add(a) {
                            a = a(tkc, this.types);
                            return new rjc({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        evaluate(a) {
                            const b = this.types;
                            switch (a.kind) {
                                case 0:
                                    switch (a.name) {
                                        case "string":
                                            return b.string;
                                        case "number":
                                            return b.number;
                                        case "boolean":
                                            return b.boolean;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new E(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.FIa));
                                        case "set":
                                            return b.set(this.evaluate(a.FIa));
                                        default:
                                            throw new E(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.FIa);
                                            a = this.evaluate(a.vDb);
                                            if (!X5(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new E(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.Gc(pg(a.args, c => this.evaluate(c)));
                                default:
                                    throw new E(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new Xjc(this.classes);
                            this.values = new ikc(this.classes)
                        }
                    },
                    tkc = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.Kob = new T5([g6.Gc(b)],
                                g6.instance(this), d => k6.instance(this, c(d.fields)))
                        }
                    };
                var ukc;
                ukc = Symbol.iterator;
                var $ic = class {
                    static D(a) {
                        P(a, {
                            D3: n6
                        })
                    }
                    get D3() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Gf(b), b));
                        return a
                    }
                    ys(a) {
                        return D(this.D3.get(a))
                    }
                    nV(a) {
                        return a != null ? this.Gf(a) : void 0
                    }
                    get size() {
                        return this.base.size
                    }
                    get(a) {
                        a = this.base.get(a);
                        return this.nV(a)
                    }
                    has(a) {
                        return this.base.has(a)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Gf(b), c))
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Gf(b), c))
                    }
                    set(a, b) {
                        return this.Gf(this.base.set(a, this.pF(b)))
                    }
                    every(a) {
                        return this.base.every((b, c) => a(this.Gf(b),
                            c))
                    }
                    delete(a) {
                        this.base.delete(a)
                    }
                    entries() {
                        return bjc(this.base.entries(), ([a, b]) => [a, this.Gf(b)])
                    }
                    keys() {
                        return this.base.keys()
                    }
                    values() {
                        return bjc(this.base.values(), this.Gf)
                    }[ukc]() {
                        return this.ek()[Symbol.iterator]()
                    }
                    ek() {
                        return Rd(this.base.ek(), this.Gf)
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.pF = b;
                        this.Gf = c;
                        $ic.D(this)
                    }
                };
                var B6 = class {
                        BI(a) {
                            return new vkc(this, a)
                        }
                        T0(a) {
                            return new wkc(this, a)
                        }
                        pN(a) {
                            return new xkc(this, a)
                        }
                        toString() {
                            var a;
                            return (a = this.s) !== null && a !== void 0 ? a : this.s = this.E3()
                        }
                    },
                    njc = class extends B6 {
                        BI(a) {
                            return new ykc(a)
                        }
                        T0() {
                            throw Error();
                        }
                        pN() {
                            throw Error();
                        }
                        E3() {
                            return "(global)"
                        }
                    },
                    ykc = class extends B6 {
                        E3() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    vkc = class extends B6 {
                        E3() {
                            return `${this.parent}.${this.name}`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.name = b
                        }
                    },
                    wkc = class extends B6 {
                        E3() {
                            return `${this.parent}["${this.key}"]`
                        }
                        constructor(a,
                            b) {
                            super();
                            this.parent = a;
                            this.key = b
                        }
                    },
                    xkc = class extends B6 {
                        E3() {
                            return `${this.parent}[${this.index}]`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.index = b
                        }
                    },
                    mjc = class {
                        error(a, b) {
                            return Error(`widget '${this.Zzb}': schema error on key '${a}': ${b}`)
                        }
                        constructor(a) {
                            this.Zzb = a
                        }
                    },
                    qjc = {
                        string: "string",
                        boolean: "boolean",
                        double: "number",
                        int32: "number",
                        list: "object",
                        dict: "object",
                        text2: "object",
                        fill: "object",
                        stroke: "object"
                    },
                    ijc = new Set(["string", "boolean", "int32"]);
                var Akc = class {
                        constructor(a, b, c) {
                            this.uha = a;
                            this.Dk = c;
                            w(b.ie === "fixed", "Responsive documents are not supported in widget rendering.");
                            this.fb = b;
                            this.el = new zkc(this.uha, this.fb)
                        }
                    },
                    wjc = class {
                        get width() {
                            return this.G.N
                        }
                        get height() {
                            return this.G.Y
                        }
                        constructor(a) {
                            this.G = a
                        }
                    },
                    C6 = class {
                        getIndex() {
                            return this.JI(this.page)
                        }
                        get id() {
                            return this.page.id
                        }
                        get title() {
                            return this.page.title
                        }
                        get anchor() {
                            return this.page.anchor
                        }
                        get Nkb() {
                            return this.page.rf
                        }
                        constructor(a, b) {
                            this.page = a;
                            this.JI = b
                        }
                    },
                    Bkc = class extends C6 {
                        constructor(a,
                            b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "fixed"
                        }
                    },
                    Ckc = class extends C6 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "concatenated-fixed"
                        }
                    },
                    Dkc = class extends C6 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "responsive"
                        }
                    },
                    Ekc = class {
                        get id() {
                            var a;
                            return (a = this.uha) === null || a === void 0 ? void 0 : a.id
                        }
                        get extension() {
                            var a;
                            return (a = this.uha) === null || a === void 0 ? void 0 : a.extension
                        }
                        get language() {
                            return this.fb.language
                        }
                        constructor(a, b) {
                            this.uha =
                                a;
                            this.fb = b
                        }
                    },
                    zkc = class extends Ekc {
                        static D(a) {
                            P(a, {
                                W: n6({
                                    equals: Fjc.shallow
                                }),
                                TUa: n6({
                                    equals: Fjc.shallow
                                })
                            })
                        }
                        get W() {
                            return this.fb.W.map(a => this.Shb(a))
                        }
                        get TUa() {
                            return this.fb.W.toArray()
                        }
                        constructor(a, b) {
                            super(a, b);
                            this.dI = a;
                            this.fb = b;
                            this.type = (zkc.D(this), "fixed");
                            this.ePa = q6(c => new Bkc(c, this.JI, this));
                            this.VOa = q6(c => new Ckc(c, this.JI, this));
                            this.Shb = q6(c => {
                                switch (c.type) {
                                    case "fixed":
                                        return this.ePa(c);
                                    case "concatenated-fixed":
                                        return this.VOa(c);
                                    case "responsive":
                                        return new Dkc(c, this.JI,
                                            this);
                                    default:
                                        throw new E(c);
                                }
                            });
                            this.JI = q6(c => this.TUa.indexOf(c))
                        }
                    };
                var Fkc = new Set,
                    Gkc = {
                        SA: () => ({
                            Ia: __c.SUb
                        })
                    },
                    Hkc = class {
                        static D(a) {
                            P(a, {
                                mha: Gjc.shallow
                            })
                        }
                        dkb(a, b, {
                            element: c,
                            exports: d
                        }) {
                            const e = D(this.qub.Dha.get(a));
                            w(e.element === b.element);
                            w(!this.mha.has(a));
                            b = {
                                element: Ajc(this, b, c),
                                exports: d
                            };
                            this.mha.set(a, b);
                            Fkc.has(a) || (__c.KO.set(a, Gkc), Fkc.add(a));
                            return b
                        }
                        iOa(a) {
                            var b;
                            return (b = this.mha.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e, f) {
                            this.qub = a;
                            this.uX = b;
                            this.ppa = c;
                            this.I = d;
                            this.Xzb = e;
                            this.vm = f;
                            this.mha = (Hkc.D(this), new Map)
                        }
                    };
                var Ikc = class {
                    static D(a) {
                        P(a, {
                            Dha: Gjc.shallow
                        })
                    }
                    ekb(a, b) {
                        w(!this.Dha.has(a));
                        b = {
                            document: Ejc(this.wLa(a, b.document)),
                            element: Ejc(this.wLa(a, b.element))
                        };
                        this.Dha.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.wLa = a;
                        this.Dha = (Ikc.D(this), new Map)
                    }
                };
                __c.iXa = {
                    kkb: function(a) {
                        var b = a.pFa;
                        const c = a.$zb,
                            d = a.Cpa,
                            e = a.uX,
                            f = a.I;
                        a = new Akc(a.dI, a.fb, a.Dk);
                        b = new Hkc(b, e, d, f, a, c);
                        return {
                            a8: b,
                            WG: b
                        }
                    },
                    lkb: function() {
                        var a = {
                            qo: tjc(),
                            ppa: skc
                        };
                        const {
                            qo: b,
                            ppa: c
                        } = a;
                        a = new Ikc(ojc(b));
                        return {
                            qFa: a,
                            pFa: a,
                            Cpa: c,
                            uX: b
                        }
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/b07798d9d1fd25b0.js.map