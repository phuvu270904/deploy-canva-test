(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [36455], {

        /***/
        894240: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(744054);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var dK = __c.dK;
                var X = __c.X;
                var L = __c.L;
                var PW = __c.PW;
                var V4;
                var La = __c.La;
                var Zec, afc, $ec, cfc, ffc, efc, hfc, kfc, nfc, rfc, ufc, xfc, pfc, Afc, Cfc, Efc;
                __c.T4 = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.U4 = function() {
                    return a => a
                };
                V4 = __c.V4 = function(a) {
                    return {
                        kind: 10,
                        fields: a
                    }
                };
                __c.W4 = function(...a) {
                    return {
                        kind: 11,
                        FMa: {
                            type: void 0
                        },
                        Yf: a
                    }
                };
                __c.X4 = function(a) {
                    return () => ({ ...Yec,
                        ...a
                    })
                };
                Zec = function(a, b) {
                    return {
                        element: __c.T4(a),
                        exports: b
                    }
                };
                afc = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.payload;
                    const e = a.requestHandler.get(d);
                    if (e) {
                        a.T3.FZ.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.T3.FZ.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.T3.FZ.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof Y4) {
                                var h = k;
                                k.code === "internal_error" ? a.I.Bb(k, {
                                    se: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.$sb)
                            } else a.Ktb ? a.I.Bb(k, {
                                se: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.jdb.error(k);
                            g = $ec(a.T3, c, g, b);
                            g.ok || a.I.IM(g.error, {
                                se: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.jfb) try {
                                k(h)
                            } catch (l) {
                                a.I.ZC(l, {
                                    se: "Error executing errorObserver"
                                })
                            }
                    } else h = $ec(a.T3, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.I.IM(h.error, {
                            se: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                $ec = function(a, b, c, d) {
                    return a.FZ.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                cfc = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return bfc;
                    a = (new URL(a)).origin;
                    return a === "null" ? bfc : {
                        IEa: a,
                        B_a: a
                    }
                };
                ffc = async function(a, b, c, {
                    addEventListener: d,
                    removeEventListener: e
                } = window) {
                    const f = new dfc(6E4),
                        g = cfc(c),
                        h = c.contentWindow;
                    if (!h) throw new Y4({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                    c = ({
                        data: k,
                        source: l,
                        origin: m
                    }) => {
                        var n;
                        (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.IEa ? efc(m) || b.info("received message event from an unexpected origin", {
                            extra: new Map([
                                ["expected", g.IEa],
                                ["actual", m]
                            ])
                        }) : l !== h ? l !== window && b.info("source and content window do not match", {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        }) : (l = k ? k.source ? k.source !== "iframe" ? La("invalid source") : (0, __c.Ka)() : La("'source' is missing in MessageEvent data object") : La("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                            source: "parent"
                        }, g.B_a, [a]), f.resolve(void 0)) : b.xL(l.error, {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        })))
                    };
                    d("message", c);
                    try {
                        await f.promise()
                    } finally {
                        e("message", c)
                    }
                };
                efc = function(a) {
                    return gfc.some(b => a.endsWith(b))
                };
                hfc = function(a, b, c, d) {
                    a.handle("SET_CONFIG", async e => {
                        if (e === void 0) throw new Y4({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                        e = b.Sa(e);
                        e = await c(e);
                        if (d) return d.Va(e)
                    })
                };
                kfc = async function(a, b) {
                    a = await a.J$.request("RENDER_EDIT_PANEL", ifc.Va(b));
                    if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_EDIT_PANEL"} request: ${a.error}`);
                    if (a.value == null) throw Error("RENDER_EDIT_PANEL: Result cannot be empty");
                    return jfc.Sa(a.value)
                };
                nfc = function(a, b) {
                    hfc(a, lfc, c => b.Nsa(c), mfc)
                };
                rfc = async function(a, b) {
                    a = await a.J$.request("RENDER_ELEMENT", ofc.Va(b));
                    a = pfc(a, "RENDER_ELEMENT");
                    return qfc.Sa(a)
                };
                ufc = async function(a, b) {
                    a = await a.J$.request("SET_CAPABILITY", sfc.Va(b));
                    a = pfc(a, "SET_CAPABILITY");
                    return tfc.Sa(a)
                };
                xfc = function(a, b) {
                    hfc(a, vfc, c => b.Nsa(c), wfc)
                };
                pfc = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                Afc = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel, f = new yfc(d, b);
                    await ffc(e, b, a, window);
                    a = new zfc(f);
                    c && xfc(f, c);
                    return a
                };
                Cfc = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel, f = new yfc(d, b);
                    await ffc(e, b, a, window);
                    a = new Bfc(f);
                    nfc(f, c);
                    return a
                };
                Efc = async function(a, b, c, d) {
                    if (a.kI) try {
                        return (await a.kI.LJb(new Dfc({
                            id: b,
                            xjb: !0,
                            Ni: c,
                            kT: d
                        }))).url
                    } catch (e) {
                        a.I.Bb(e)
                    }
                };
                __c.vd.prototype.IM = __c.ia(3, function(a, b) {
                    this.console.error(...__c.ud(this, "critical", a, b))
                });
                __c.FJ.prototype.IM = __c.ia(2, function(a, b) {
                    this.Pt.IM(a, b);
                    __c.DJ(this, a, "critical", b)
                });
                var Ffc = __webpack_require__(400770).reaction;
                var Gfc = __webpack_require__(31968).jsx;
                var Hfc = __webpack_require__(845212),
                    Ifc = Hfc.useEffect,
                    Jfc = Hfc.useState;
                var Kfc = __c.U4()(({
                    wo: {
                        zna: a
                    }
                }) => ({
                    element: {
                        type: 0,
                        SA: ({
                            element: b
                        }) => {
                            const c = a.Xfb(b.Bna);
                            if (!c) throw Error(`Blueprint ${b.Bna} not found`);
                            const d = c.variants.get(b.c5a);
                            if (!d) throw Error(`Variant ${b.c5a} not found for blueprint ${b.Bna}`);
                            return b.type === "source" ? {
                                Ia: d.elements
                            } : {
                                Ia: new __c.NW(() => d.elements.map(e => {
                                    e = __c.qI.ba(e);
                                    return __c.JH.create({ ...e,
                                        locked: !0,
                                        xh: !0,
                                        bi: d.bi
                                    })
                                }))
                            }
                        }
                    },
                    exports: {}
                }));
                var Yec = Object.freeze({
                    document: Object.freeze({}),
                    element: Object.freeze({})
                });
                var Lfc = __c.W4(V4({
                        type: PW("type", "anchoring"),
                        value: (0, __c.RW)("value", 1, 2, 3)
                    }), V4({
                        type: PW("type", "boolean"),
                        value: (0, __c.UW)("value")
                    }), V4({
                        type: PW("type", "block_alignment"),
                        value: (0, __c.VW)("value")
                    }), V4({
                        type: PW("type", "non-negative-double"),
                        value: (0, __c.VW)("value")
                    }), V4({
                        type: PW("type", "double"),
                        value: (0, __c.VW)("value")
                    }), V4({
                        type: PW("type", "string"),
                        value: (0, __c.TW)("value")
                    }), V4({
                        type: PW("type", "richtext2"),
                        value: (0, __c.XW)("value", "Richtext2")
                    }), V4({
                        type: PW("type", "text_anchor"),
                        value: (0, __c.RW)("value",
                            1, 2, 3)
                    }), V4({
                        type: PW("type", "text_effects"),
                        value: (0, __c.TW)("value")
                    }), V4({
                        type: PW("type", "text_flow"),
                        value: (0, __c.TW)("value")
                    }), V4({
                        type: PW("type", "image_fill"),
                        value: (0, __c.XW)("value", "Fill")
                    }), V4({
                        type: PW("type", "video_fill"),
                        value: (0, __c.XW)("value", "Fill")
                    })),
                    Mfc = (0, __c.bVb)("overrides", Lfc);
                var Nfc = __c.X4({
                    element: __c.LW({
                        Bna: (0, __c.QW)("bid"),
                        c5a: (0, __c.QW)("vid"),
                        type: (0, __c.RW)("t", "source", "instance"),
                        domain: (0, __c.RW)("d", "document", "brand"),
                        Uq: Mfc
                    })
                });
                var Ofc = __c.X4({
                    element: __c.LW({
                        nKa: (0, __c.XUb)("i"),
                        config: (0, __c.TW)("c")
                    })
                });
                var Pfc = class {};
                var Y4 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.$sb = a.message;
                        Object.setPrototypeOf(this, Y4.prototype)
                    }
                };
                var Qfc = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.I = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ka)()
                            } catch (e) {
                                return this.I.Bb(e), La(e)
                            }
                        };
                        this.qqb = d => {
                            this.I.Bb(d)
                        };
                        this.Ewa = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.etb(d)
                            } catch (e) {
                                this.I.Bb(e)
                            } else this.I.error(new Y4({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.Ewa;
                        this.port.onmessageerror = this.qqb
                    }
                };
                var Rfc = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    dfc = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.Nd);
                            this.Utb(a)
                        }
                        reject(a) {
                            clearTimeout(this.Nd);
                            this.bZa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.Nd);
                            this.Nd = setTimeout(() => {
                                this.bZa(new Rfc)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.Utb = b;
                                this.bZa = c
                            });
                            this.setTimeout()
                        }
                    };
                var Sfc = class {
                    request(a, b) {
                        const c = this.GXa,
                            d = new dfc(5E3),
                            e = this.Mtb(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ka)(g)
                                } catch (g) {
                                    return g instanceof Rfc ? La(new Y4({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : La(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.I.Bb(b.error, {
                            se: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.I = b;
                        this.Mtb = __c.hp;
                        this.GXa =
                            new Map
                    }
                };
                var Tfc = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new Y4({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.T3 = a;
                        this.I = b;
                        this.Ktb = !0;
                        this.jdb = c;
                        this.requestHandler = new Map;
                        this.jfb = new Set
                    }
                };
                var yfc = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new Ufc(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.GXa.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.payload);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new Y4({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.I.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        afc(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.Mf("bus"));
                            this.client = new Sfc(a.Az, b.Mf("client"));
                            this.requestHandler = new Tfc(a, b.Mf("requestHandler"))
                        }
                    },
                    Ufc = class {
                        constructor(a, b, c) {
                            this.Aca = a;
                            this.Az = (d, e, f) => this.FZ.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.Cqb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.Aca({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.Aca({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.Aca({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.Aca({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.FZ = new Qfc({
                                etb: this.Cqb
                            }, b, c)
                        }
                    };
                var bfc = {
                    IEa: "null",
                    B_a: "*"
                };
                var gfc = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var ifc = L(() => ({
                    config: __c.Y(1)
                }));
                var jfc = L(() => ({}));
                var lfc = L(() => ({
                    config: X(1)
                }));
                var mfc = L(() => ({}));
                var Bfc = class {
                    constructor(a) {
                        this.J$ = a
                    }
                };
                var ofc = L(() => ({
                    config: __c.Y(1)
                }));
                var Z4 = L(() => ({
                    type: __c.F("A?", 1, "RECOLORABLE"),
                    id: X(1),
                    value: X(2)
                }));
                var Vfc = L(() => ({
                    borderRadius: dK(1),
                    borderWidth: dK(2)
                }));
                var $4 = L(() => ({
                    type: __c.F("A?", 2, "BORDERABLE"),
                    id: X(1),
                    value: __c.Va(2, Vfc)
                }));
                var qfc = L(() => ({
                    config: X(1),
                    width: dK(2),
                    height: dK(3),
                    kW: __c.Wa(4, Z4),
                    z$a: __c.Wa(5, $4)
                }));
                var sfc = __c.ob(() => ({
                    type: [1, Z4, 2, $4]
                }), () => ({}));
                var tfc = L(() => ({
                    config: X(1),
                    width: dK(2),
                    height: dK(3)
                }));
                var vfc = L(() => ({
                    config: X(1),
                    width: dK(2),
                    height: dK(3),
                    kW: __c.Wa(4, Z4),
                    z$a: __c.Wa(5, $4)
                }));
                var wfc = L(() => ({}));
                var zfc = class {
                    constructor(a) {
                        this.J$ = a
                    }
                };
                var Wfc = class {
                    async Qy(a, b) {
                        const c = await Cfc(a, this.I, {
                                Nsa: e => {
                                    var f;
                                    (f = this.config.Qaa) === null || f === void 0 || f.qEa(e, b);
                                    return new mfc
                                }
                            }),
                            d = Ffc(() => b.config, async e => kfc(c, {
                                config: e
                            }));
                        this.qg.set(a, d);
                        await kfc(c, {
                            config: b.config
                        })
                    }
                    VO(a) {
                        var b;
                        (b = this.qg.get(a)) === null || b === void 0 || b();
                        this.qg.delete(a)
                    }
                    constructor(a, b) {
                        this.config = a;
                        this.I = b;
                        this.qg = new Map
                    }
                };
                var Dfc = L(() => ({
                    id: X("id", 1),
                    KKb: __c.pK("includeEmbed", 2),
                    LKb: __c.pK("includeFavicon", 3),
                    xjb: __c.pK("includeFileUrls", 4),
                    MKb: __c.pK("includeFileEmbedHtml", 5),
                    Ni: __c.Y("documentId", 21),
                    kT: __c.Y("documentExtension", 22)
                }));
                var Xfc = class {
                    async Qy(a, b) {
                        var c;
                        const d = g => ufc(f, new Z4(g)),
                            e = this.config.Qaa;
                        e && (c = {
                            Nsa: g => {
                                e.qEa(g, b, d);
                                return new wfc
                            }
                        });
                        const f = await Afc(a, this.I, c);
                        c = Ffc(() => b.config, async g => {
                            const h = await rfc(f, {
                                config: g
                            });
                            h.config && h.config !== g && (e === null || e === void 0 || e.qEa(h, b, d))
                        });
                        this.qg.set(a, c);
                        a = await rfc(f, {
                            config: b.config
                        });
                        e === null || e === void 0 || e.qEa(a, b, d)
                    }
                    VO(a) {
                        var b;
                        (b = this.qg.get(a)) === null || b === void 0 || b();
                        this.qg.delete(a)
                    }
                    constructor(a, b, c) {
                        this.config = a;
                        this.kI = b;
                        this.I = c;
                        this.qg = new Map
                    }
                };
                var Yfc = __c.U4()(({
                    I$: a,
                    wo: b
                }) => {
                    a = a.I;
                    const c = new Pfc,
                        d = new Xfc(c, b.kI, a);
                    return Zec(({
                        data: {
                            element: e
                        },
                        vm: {
                            h7a: f,
                            y7a: g
                        },
                        ii: {
                            page: h
                        }
                    }) => {
                        const [k, l] = Jfc(void 0), m = h.container.id, n = h.container.extension;
                        Ifc(() => {
                            Efc(d, e.nKa, m, n).then(p => l(p))
                        }, [e.nKa, m, n]);
                        return k ? Gfc(f, {
                            url: k,
                            Qy: p => d.Qy(p, e),
                            VO: p => d.VO(p)
                        }) : Gfc(g, {})
                    }, {
                        config: c,
                        NGb: new Wfc(c, a)
                    })
                });
                __c.jXa = {
                    hkb: function(a) {
                        function b({
                            wo: h,
                            yz: k,
                            Pg: l,
                            g7: m = "default"
                        }) {
                            const n = k.id;
                            k = k.Qs;
                            h = d.dkb(n, k, l({
                                I$: { ...f,
                                    Xa: e.hu(`widgets.rendering.clients.${m}`)
                                },
                                wo: h
                            }));
                            return {
                                id: n,
                                Qs: k,
                                fQb: h,
                                g7: m
                            }
                        }
                        const c = a.aAb,
                            d = a.a8,
                            e = a.mf,
                            f = a.I$,
                            g = a.wo;
                        return {
                            oJa: b({
                                wo: {
                                    zna: g.zna
                                },
                                yz: c.oJa,
                                Pg: Kfc,
                                g7: "blueprint"
                            }),
                            cqa: c.cqa ? Promise.all([c.cqa, __webpack_require__.me(270376).then(() => __c.Zfc), __webpack_require__.me(309241).then(() => __c.$fc), __webpack_require__.me(726606).then(() => __c.agc), __webpack_require__.me(555219).then(() =>
                                __c.bgc), __webpack_require__.me(756388).then(() => __c.cgc), __webpack_require__.me(516583).then(() => __c.dgc), __webpack_require__.me(93698).then(() => __c.egc)]).then(([h, k, l, m, n, p, q, r]) => ({
                                mMa: b({
                                    wo: void 0,
                                    yz: h.mMa,
                                    Pg: k.Pg
                                }),
                                nMa: b({
                                    wo: void 0,
                                    yz: h.nMa,
                                    Pg: l.Pg
                                }),
                                oMa: b({
                                    wo: void 0,
                                    yz: h.oMa,
                                    Pg: m.Pg
                                }),
                                pMa: b({
                                    wo: void 0,
                                    yz: h.pMa,
                                    Pg: n.Pg
                                }),
                                qMa: b({
                                    wo: void 0,
                                    yz: h.qMa,
                                    Pg: p.Pg
                                }),
                                rMa: b({
                                    wo: void 0,
                                    yz: h.rMa,
                                    Pg: q.Pg
                                }),
                                sMa: b({
                                    wo: void 0,
                                    yz: h.sMa,
                                    Pg: r.Pg
                                })
                            })) : void 0,
                            mKa: b({
                                wo: {
                                    kI: g.kI
                                },
                                yz: c.mKa,
                                Pg: Yfc,
                                g7: "codelet"
                            }),
                            form: c.form ?
                                Promise.all([c.form, __webpack_require__.me(313335).then(() => __c.fgc)]).then(([h, k]) => b({
                                    wo: {
                                        Rra: g.Rra
                                    },
                                    yz: h,
                                    Pg: k.Pg,
                                    g7: "form"
                                })) : void 0,
                            scene: c.scene ? Promise.all([c.scene, __webpack_require__.me(416029).then(() => __c.ggc)]).then(([h, k]) => b({
                                wo: void 0,
                                yz: h,
                                Pg: k.Pg,
                                g7: "scene"
                            })) : void 0
                        }
                    },
                    ikb: function(a) {
                        function b(e, f) {
                            f = c.ekb(e, f());
                            return {
                                id: e,
                                Qs: f
                            }
                        }
                        const c = a.qFa,
                            d = __c.Eq("c79472f0", !1);
                        return {
                            oJa: b("w:wnJF5T87v", Nfc),
                            cqa: a.ueb ? Promise.all([__webpack_require__.me(270376).then(() => __c.Zfc), __webpack_require__.me(309241).then(() =>
                                __c.$fc), __webpack_require__.me(726606).then(() => __c.agc), __webpack_require__.me(555219).then(() => __c.bgc), __webpack_require__.me(756388).then(() => __c.cgc), __webpack_require__.me(516583).then(() => __c.dgc), __webpack_require__.me(93698).then(() => __c.egc)]).then(([e, f, g, h, k, l, m]) => ({
                                mMa: b("w:cm9wgGptP", e.Jn),
                                nMa: b("w:yLMS4dWnl", f.Jn),
                                oMa: b("w:2flp30CGQ", g.Jn),
                                pMa: b("w:1Nv6K6Dtv", h.Jn),
                                qMa: b("w:5Nv6K6Dtv", k.Jn),
                                rMa: b("w:6Nv6K6Dtv", l.Jn),
                                sMa: b("w:7Nv6K6Dtv", m.Jn)
                            })) : void 0,
                            mKa: b("w:JR4G8hDDg", Ofc),
                            form: d ?
                                __webpack_require__.me(313335).then(() => __c.fgc).then(e => b("widget:form", e.Jn)) : void 0,
                            scene: a.Qeb ? __webpack_require__.me(416029).then(() => __c.ggc).then(e => b("w:2pbXJMtm1", e.Jn)) : void 0
                        }
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/b6bdafc2329df212.js.map