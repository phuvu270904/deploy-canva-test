(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8241], {

        /***/
        744054: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var KW;
                var MW;
                var w = __c.w;
                var GW, JW, RUb;
                GW = function() {
                    throw Error("ref not found");
                };
                __c.HW = function(a) {
                    return {
                        kind: 0,
                        rK: a
                    }
                };
                __c.IW = function(a) {
                    return {
                        kind: 3,
                        range: a
                    }
                };
                JW = function(...a) {
                    return {
                        kind: 4,
                        values: new Set(a)
                    }
                };
                RUb = function(a) {
                    return {
                        kind: 5,
                        itemType: a
                    }
                };
                KW = __c.KW = function(a, b, c) {
                    return (d, ...e) => ({
                        key: d,
                        fAa: a,
                        hK: b,
                        type: c(...e)
                    })
                };
                __c.LW = function(a) {
                    const b = new Set;
                    for (const d of Object.values(a)) {
                        w(!b.has(d.key), 'duplicate key: "{}"', d.key);
                        var c;
                        if (c = d.fAa === 1) a: switch (c = d.type, c.kind) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                                c = !1;
                                break a;
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                                c = !0;
                                break a;
                            default:
                                throw new __c.E(c);
                        }
                        w(!c, 'settable mutable: "{}"', d.key);
                        b.add(d.key)
                    }
                    return a
                };
                MW = __c.MW = __webpack_require__(400770).computed;
                __c.SUb = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    ek() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        GW()
                    },
                    Sb() {
                        GW()
                    },
                    ge() {
                        GW()
                    },
                    ou() {
                        GW()
                    },
                    has() {
                        return !1
                    },
                    yq() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var TUb;
                TUb = Symbol.iterator;
                __c.NW = class {
                    static D(a) {
                        __c.P(a, {
                            al: MW,
                            jp: MW
                        })
                    }
                    get al() {
                        return this.J9a().map(a => {
                            let b = this.sQa.get(a);
                            b == null && (b = `${this.jjb++}`, this.sQa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get jp() {
                        const a = new Map;
                        this.al.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    yj(a) {
                        return __c.D(this.jp.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.al.length
                    }
                    count() {
                        return this.al.length
                    }
                    toArray() {
                        return this.al.map(a => a.ref)
                    }
                    ek() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get lN() {
                        const a = this.al[0];
                        return a && a.ref
                    }
                    get mO() {
                        const a =
                            this.al[this.al.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.lN;
                        const b = this.al.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.mO;
                        const b = this.al;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.al;
                        for (a = this.yj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Sb(a, b) {
                        const c = this.al;
                        for (a = this.yj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    ge(a, b) {
                        a = this.jp.get(a);
                        b = this.jp.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    ou(a) {
                        return this.al[this.yj(a)].id
                    }
                    has(a) {
                        return this.jp.has(a)
                    }
                    yq(a) {
                        return new __c.zL(this, a)
                    }
                    map(a) {
                        return this.al.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.al.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.al.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.al.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.al.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.al.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.al.every(b => a(b.ref, b.id))
                    }[TUb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.J9a =
                            a;
                        this.jjb = (__c.NW.D(this), 0);
                        this.sQa = new WeakMap
                    }
                };
                __c.UUb = Symbol.iterator;
                var VUb, WUb = class {
                    get value() {
                        return this.box.get()
                    }
                    constructor(a, b) {
                        this.id = a;
                        this.box = b
                    }
                };
                VUb = Symbol.iterator;
                __c.OW = class {
                    static D(a) {
                        __c.P(a, {
                            jp: MW,
                            lN: MW,
                            mO: MW
                        })
                    }
                    get jp() {
                        const a = new Map;
                        this.cells.forEach((b, c) => a.set(b.value, c));
                        return a
                    }
                    yj(a) {
                        return __c.D(this.jp.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.cells.length
                    }
                    count() {
                        return this.cells.length
                    }
                    toArray() {
                        return this.cells.map(a => a.value)
                    }
                    ek() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get lN() {
                        const a = this.cells[0];
                        return a && a.value
                    }
                    get mO() {
                        const a = this.cells[this.cells.length - 1];
                        return a && a.value
                    }
                    first(a) {
                        if (!a) return this.lN;
                        const b = this.cells.find(c =>
                            a(c.value));
                        return b && b.value
                    }
                    last(a) {
                        if (!a) return this.mO;
                        const b = this.cells;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.value)) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.cells;
                        for (a = this.yj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    Sb(a, b) {
                        const c = this.cells;
                        for (a = this.yj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    ge(a, b) {
                        a = this.jp.get(a);
                        b = this.jp.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    ou(a) {
                        return this.cells[this.yj(a)].id
                    }
                    has(a) {
                        return this.jp.has(a)
                    }
                    yq(a) {
                        return new __c.zL(this,
                            a)
                    }
                    map(a) {
                        return this.cells.map(b => a(b.value, b.id))
                    }
                    flatMap(a) {
                        return this.cells.flatMap(b => a(b.value, b.id))
                    }
                    filter(a) {
                        return this.cells.filter(b => a(b.value, b.id)).map(b => b.value)
                    }
                    forEach(a) {
                        this.cells.forEach(b => a(b.value, b.id))
                    }
                    reduce(a, b) {
                        return this.cells.reduce((c, d) => a(c, d.value, d.id), b)
                    }
                    some(a) {
                        return this.cells.some(b => a(b.value, b.id))
                    }
                    every(a) {
                        return this.cells.every(b => a(b.value, b.id))
                    }[VUb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = (__c.OW.D(this), void 0);
                        this.cells =
                            a.map((b, c) => new WUb(String(c), b))
                    }
                };
                __c.XUb = KW(0, 0, __c.HW);
                __c.PW = KW(0, 0, JW);
                __c.QW = KW(1, 0, __c.HW);
                __c.RW = KW(1, 0, JW);
                __c.SW = KW(1, 0, __c.IW);
                __c.YUb = KW(1, 0, RUb);
                __c.TW = KW(1, 1, __c.HW);
                __c.UW = KW(1, 1, function() {
                    return {
                        kind: 1
                    }
                });
                __c.VW = KW(1, 1, function(a) {
                    return {
                        kind: 2,
                        range: a
                    }
                });
                __c.ZUb = KW(1, 1, __c.IW);
                __c.WW = KW(1, 1, JW);
                __c.$Ub = KW(1, 1, RUb);
                __c.XW = KW(0, 0, function(a) {
                    return {
                        kind: 7,
                        name: a
                    }
                });
                __c.aVb = KW(0, 0, function(a) {
                    return {
                        kind: 8,
                        itemType: a
                    }
                });
                __c.bVb = KW(0, 1, function(a) {
                    return {
                        kind: 9,
                        itemType: a
                    }
                });
                __c.cVb = __c.LW({});
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/edee6e20f13e1e7f.js.map