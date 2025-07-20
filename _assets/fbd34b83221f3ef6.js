(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [86064], {

        /***/
        293444: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            self._5f74ec40302898c5a55451c9fbd04240 = self._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var e0b;
                __c.k_ = function(a, b, c) {
                    return (new __c.Tb(a, c ? __c.Ub(c) : void 0, __c.Vb, {
                        ignoreTag: !0
                    })).format(Object.fromEntries(Object.entries(b)))
                };
                __c.d0b = function(a, b) {
                    __c.w(!0);
                    __c.w(!0);
                    __c.w(!0);
                    const {
                        ka: c,
                        a: d,
                        b: e
                    } = __c.lu(a), {
                        ka: f,
                        a: g,
                        b: h
                    } = __c.lu(b);
                    a = (c + f) / 2;
                    b = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
                    b = .5 * (1 - Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7)));
                    var k = d * (1 + b),
                        l = g * (1 + b),
                        m = Math.hypot(k, e),
                        n = Math.hypot(l, h);
                    b = (m + n) / 2;
                    var p = __c.Au(Math.atan2(e, k) * 180 / Math.PI);
                    const q = __c.Au(Math.atan2(h, l) * 180 / Math.PI);
                    k = Math.abs(p - q) > 180 ? (p + q + 360) / 2 : (p + q) / 2;
                    l = n - m;
                    m = 2 * Math.sqrt(m * n) * Math.sin((Math.abs(q - p) <= 180 ? q - p : q <= p ? q - p + 360 : q - p - 360) / 2 * Math.PI / 180);
                    n = 1 + .045 * b;
                    p = 1 + .015 *
                        b * (1 - .17 * Math.cos((k - 30) * Math.PI / 180) + .24 * Math.cos(2 * k * Math.PI / 180) + .32 * Math.cos((3 * k + 6) * Math.PI / 180) - .2 * Math.cos((4 * k - 63) * Math.PI / 180));
                    return Math.sqrt(((f - c) / (1 + .015 * (a - 50) ** 2 / Math.sqrt(20 + (a - 50) ** 2))) ** 2 + (l / (1 * n)) ** 2 + (m / (1 * p)) ** 2 + l / (1 * n) * (m / (1 * p)) * (-(2 * Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((k - 275) / 25) ** 2) * 2 * Math.PI / 180)))
                };
                e0b = function(a) {
                    return {
                        status: 3,
                        error: a
                    }
                };
                __c.l_ = e0b;
            }).call(self, self._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/fbd34b83221f3ef6.js.map