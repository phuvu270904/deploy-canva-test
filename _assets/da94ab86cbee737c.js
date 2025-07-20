(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [69798], {

        /***/
        103410: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var PSb, hV, RSb;
                PSb = function(a) {
                    return Array.isArray(a.k) && typeof a.k[0] === "object"
                };
                __c.QSb = function(a, b) {
                    if (a.assets)
                        for (const f of a.assets)
                            if ("layers" in f)
                                for (const g of f.layers) {
                                    if (g.ty !== 4) continue;
                                    const h = [];
                                    var c, d = (c = g.shapes) !== null && c !== void 0 ? c : [];
                                    for (const k of d) d = hV(k, b), h.push(d);
                                    g.shapes = h
                                }
                    if (a.layers)
                        for (const f of a.layers)
                            if (f.ty === 4) {
                                a = [];
                                var e;
                                c = (e = f.shapes) !== null && e !== void 0 ? e : [];
                                for (const g of c) c = hV(g, b), a.push(c);
                                f.shapes = a
                            }
                };
                hV = function(a, b) {
                    switch (a.ty) {
                        case "fl":
                        case "st":
                            var c;
                            if (PSb(a.c)) break;
                            const e = (c = RSb(a.c.k)) === null || c === void 0 ? void 0 : __c.tu(c);
                            if (e) {
                                var d = Array.from(b.keys()).find(f => f === e);
                                d && b.get(d) !== void 0 && (b = b.get(d), b = __c.pu(b), a.c.k = [b.r / 255, b.g / 255, b.b / 255, 1])
                            }
                            break;
                        case "gr":
                            c = [];
                            for (d of a.it) {
                                const f = hV(d, b);
                                c.push(f)
                            }
                            a.it = c
                    }
                    return a
                };
                RSb = function(a) {
                    if (a.length === 4) return a = a.map(b => Number((b * 255).toFixed(2))), new __c.hu(a[0], a[1], a[2])
                };
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/da94ab86cbee737c.js.map