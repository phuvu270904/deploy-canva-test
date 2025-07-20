(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [58724], {

        /***/
        102402: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(103410);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var dTb = __webpack_require__(31968),
                    eTb = dTb.jsx,
                    fTb = dTb.jsxs;
                var gTb = __webpack_require__,
                    hTb = gTb(208463),
                    iTb = gTb.n_x(hTb)();
                var jTb = __webpack_require__,
                    kTb = jTb(802496),
                    lTb = jTb.n_x(kTb);
                var mTb = __webpack_require__(845212).Component;
                var nTb = __webpack_require__(277049)._;
                var iV = __webpack_require__(400770),
                    jV = iV.action,
                    oTb = iV.comparer,
                    pTb = iV.computed,
                    qTb = iV.observable,
                    rTb = iV.reaction;
                var sTb = __webpack_require__(269018)._;
                var tTb = __webpack_require__(206928),
                    uTb = tTb.iB,
                    vTb = tTb.Sx;
                var wTb, xTb, yTb, kV, ATb, zTb;
                new(wTb = class extends nTb {
                    constructor() {
                        super(kV);
                        xTb()
                    }
                }, (() => {
                    class a extends(yTb = mTb) {
                        static D(b) {
                            __c.P(b, {
                                isReady: qTb.ref,
                                lqa: pTb,
                                componentDidMount: jV,
                                cWa: jV.bound,
                                onError: jV.bound,
                                vS: jV.bound
                            })
                        }
                        get lqa() {
                            var b;
                            const c = this.props.store,
                                d = this.props.Os;
                            return !this.isReady || d && !c.hb && !((b = c.xc) === null || b === void 0 ? 0 : b.size)
                        }
                        componentDidMount() {
                            const b = this.props.store;
                            this.props.controller.onWaiting();
                            __c.Hc(this, [rTb(() => {
                                var c;
                                return {
                                    data: (c = b.animationData) === null || c === void 0 ? void 0 : c.get(),
                                    xc: b.xc
                                }
                            }, ({
                                data: c,
                                xc: d
                            }) => c && this.loadAnimation(c, d), {
                                fireImmediately: !0,
                                equals: oTb.shallow
                            }), rTb(() => this.isReady && b.hb, c => c ? this.play() : this.pause(), {
                                fireImmediately: !0
                            }), this.vS])
                        }
                        render() {
                            const b = this.props.Os,
                                c = this.props.store,
                                d = c.altText,
                                {
                                    ariaHidden: e,
                                    ariaLabel: f
                                } = __c.zU(d);
                            return fTb("div", {
                                className: "UB_yHg",
                                children: [this.lqa && eTb("img", {
                                    className: "KYSIUA",
                                    src: c.gK,
                                    ref: this.$Xa,
                                    alt: d
                                }), eTb("div", {
                                    className: iTb("KYSIUA", b && this.lqa && "BUTEbw"),
                                    ref: this.gV,
                                    role: d ? "img" : void 0,
                                    "aria-label": f,
                                    "aria-hidden": e
                                })]
                            })
                        }
                        cWa() {
                            this.isReady = !0;
                            this.props.controller.onCanPlay()
                        }
                        onError() {
                            this.props.controller.onError();
                            this.vS()
                        }
                        seek(b) {
                            this.Ml && (b *= 1E3, this.props.store.hb ? this.Ml.goToAndPlay(b) : this.Ml.goToAndStop(b))
                        }
                        Lm() {
                            if (!this.isReady) {
                                var b = this.$Xa.current;
                                return b ? __c.WD(b) : void 0
                            }
                            if (b = this.gV.current)
                                if (b = b.getElementsByTagName("svg")[0]) return b = zTb(b), b.state === "fulfilled" ? {
                                    type: "image",
                                    element: b.value
                                } : void 0
                        }
                        play() {
                            var b;
                            (b = this.Ml) === null || b === void 0 || b.play()
                        }
                        pause() {
                            var b;
                            (b = this.Ml) ===
                            null || b === void 0 || b.pause()
                        }
                        vS() {
                            this.Ml && (this.Ml.destroy(), this.Ml = void 0, this.isReady = !1)
                        }
                        loadAnimation(b, c) {
                            const d = __c.D(this.gV.current);
                            b = JSON.parse(JSON.stringify(b));
                            c && c.size > 0 && __c.QSb(b, c);
                            this.vS();
                            this.Ml = lTb().loadAnimation({
                                autoplay: !1,
                                animationData: b,
                                container: d,
                                renderer: "svg",
                                loop: !0
                            });
                            if (c = d.getElementsByTagName("svg")[0]) c.style.transform === "translate3d(0px, 0px, 0px)" && (c.style.transform = ""), this.Ml.goToAndStop(this.props.store.currentTime * 1E3), this.Ml.addEventListener("DOMLoaded",
                                this.cWa), this.Ml.addEventListener("error", this.onError), this.Ml.addEventListener("data_failed", this.onError)
                        }
                        constructor(...b) {
                            super(...b);
                            this.gV = (kV.D(this), __c.Xt());
                            this.$Xa = __c.Xt();
                            this.isReady = !1
                        }
                    }({
                        c: [kV, xTb]
                    } = sTb(a, [], [__c.Vc], yTb))
                })(), wTb);
                ATb = new XMLSerializer;
                zTb = uTb(a => {
                    a = new Blob([ATb.serializeToString(a)], {
                        type: "image/svg+xml"
                    });
                    const b = URL.createObjectURL(a);
                    return vTb(__c.jQ(b).finally(() => URL.revokeObjectURL(b)))
                });
                __c.sOb = {
                    get t8a() {
                        return kV
                    }
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/fcf5003c97099840.js.map