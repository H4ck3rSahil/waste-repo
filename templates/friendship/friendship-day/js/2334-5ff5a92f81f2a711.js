"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2334], {
        4525: (e, t, l) => {
            l.d(t, {
                default: () => o
            });
            var r = l(1521),
                a = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                n = l(5695);
            let i = (0, r.createContext)({}),
                o = (0, r.forwardRef)(({
                    color: e,
                    size: t,
                    strokeWidth: l,
                    absoluteStrokeWidth: o,
                    className: d = "",
                    children: s,
                    iconNode: c,
                    ...u
                }, p) => {
                    let {
                        size: f = 24,
                        strokeWidth: h = 2,
                        absoluteStrokeWidth: y = !1,
                        color: m = "currentColor",
                        className: v = ""
                    } = (0, r.useContext)(i) ?? {}, g = o ?? y ? 24 * Number(l ?? h) / Number(t ?? f) : l ?? h;
                    return (0, r.createElement)("svg", {
                        ref: p,
                        ...a,
                        width: t ?? f ?? a.width,
                        height: t ?? f ?? a.height,
                        stroke: e ?? m,
                        strokeWidth: g,
                        className: (0, n.z)("lucide", v, d),
                        ...!s && !(e => {
                            for (let t in e)
                                if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                            return !1
                        })(u) && {
                            "aria-hidden": "true"
                        },
                        ...u
                    }, [...c.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(s) ? s : [s]])
                })
        },
        5695: (e, t, l) => {
            l.d(t, {
                z: () => r
            });
            let r = (...e) => e.filter((e, t, l) => !!e && "" !== e.trim() && l.indexOf(e) === t).join(" ").trim()
        },
        16168: (e, t, l) => {
            l.d(t, {
                F: () => i
            });
            var r = l(68662);
            let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                n = r.$,
                i = (e, t) => l => {
                    var r;
                    if ((null == t ? void 0 : t.variants) == null) return n(e, null == l ? void 0 : l.class, null == l ? void 0 : l.className);
                    let {
                        variants: i,
                        defaultVariants: o
                    } = t, d = Object.keys(i).map(e => {
                        let t = null == l ? void 0 : l[e],
                            r = null == o ? void 0 : o[e];
                        if (null === t) return null;
                        let n = a(t) || a(r);
                        return i[e][n]
                    }), s = l && Object.entries(l).reduce((e, t) => {
                        let [l, r] = t;
                        return void 0 === r || (e[l] = r), e
                    }, {});
                    return n(e, d, null == t || null == (r = t.compoundVariants) ? void 0 : r.reduce((e, t) => {
                        let {
                            class: l,
                            className: r,
                            ...a
                        } = t;
                        return Object.entries(a).every(e => {
                            let [t, l] = e;
                            return Array.isArray(l) ? l.includes({ ...o,
                                ...s
                            }[t]) : ({ ...o,
                                ...s
                            })[t] === l
                        }) ? [...e, l, r] : e
                    }, []), null == l ? void 0 : l.class, null == l ? void 0 : l.className)
                }
        },
        18493: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("tag", [
                ["path", {
                    d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
                    key: "vktsd0"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "kqv944"
                }]
            ])
        },
        21176: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("newspaper", [
                ["path", {
                    d: "M15 18h-5",
                    key: "95g1m2"
                }],
                ["path", {
                    d: "M18 14h-8",
                    key: "sponae"
                }],
                ["path", {
                    d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
                    key: "39pd36"
                }],
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "10",
                    y: "6",
                    rx: "1",
                    key: "aywv1n"
                }]
            ])
        },
        24583: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("arrow-right", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ])
        },
        26821: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        28682: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("arrow-left", [
                ["path", {
                    d: "m12 19-7-7 7-7",
                    key: "1l729n"
                }],
                ["path", {
                    d: "M19 12H5",
                    key: "x3x0zl"
                }]
            ])
        },
        43998: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("globe", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                    key: "13o1zl"
                }],
                ["path", {
                    d: "M2 12h20",
                    key: "9i4pu4"
                }]
            ])
        },
        48495: (e, t, l) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                default: function() {
                    return c
                },
                getImageProps: function() {
                    return s
                }
            };
            for (var a in r) Object.defineProperty(t, a, {
                enumerable: !0,
                get: r[a]
            });
            let n = l(12563),
                i = l(53441),
                o = l(38137),
                d = n._(l(93635));

            function s(e) {
                let {
                    props: t
                } = (0, i.getImgProps)(e, {
                    defaultLoader: d.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [32, 48, 64, 96, 128, 256, 384],
                        qualities: [75],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, l] of Object.entries(t)) void 0 === l && delete t[e];
                return {
                    props: t
                }
            }
            let c = o.Image
        },
        58872: (e, t, l) => {
            l.d(t, {
                default: () => a.a
            });
            var r = l(48495),
                a = l.n(r)
        },
        59748: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("crown", [
                ["path", {
                    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
                    key: "1vdc57"
                }],
                ["path", {
                    d: "M5 21h14",
                    key: "11awu3"
                }]
            ])
        },
        79225: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        90925: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            let r = (0, l(96296).A)("star", [
                ["path", {
                    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
                    key: "r04s7s"
                }]
            ])
        },
        92166: (e, t, l) => {
            let r, a;
            l.d(t, {
                DX: () => s,
                xV: () => u
            });
            var n, i = l(1521),
                o = l.t(i, 2);

            function d(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            var s = (n = "Slot", (r = i.forwardRef((e, t) => {
                    var l;
                    let r, a, {
                            children: o,
                            ...s
                        } = e,
                        u = null,
                        f = !1,
                        g = [];
                    h(o) && "function" == typeof v && (o = v(o._payload)), i.Children.forEach(o, e => {
                        var t;
                        if (t = e, i.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === c) {
                            f = !0;
                            let t = "child" in e.props ? e.props.child : e.props.children;
                            h(t) && "function" == typeof v && (t = v(t._payload)), u = p(e, t), g.push(u ?.props ?.children)
                        } else g.push(e)
                    }), u ? u = i.cloneElement(u, void 0, g) : !f && 1 === i.Children.count(o) && i.isValidElement(o) && (u = o);
                    let k = u ? (l = u, (a = (r = Object.getOwnPropertyDescriptor(l.props, "ref") ?.get) && "isReactWarning" in r && r.isReactWarning) ? l.ref : (a = (r = Object.getOwnPropertyDescriptor(l, "ref") ?.get) && "isReactWarning" in r && r.isReactWarning) ? l.props.ref : l.props.ref || l.ref) : void 0,
                        b = function(...e) {
                            return i.useCallback(function(...e) {
                                return t => {
                                    let l = !1,
                                        r = e.map(e => {
                                            let r = d(e, t);
                                            return l || "function" != typeof r || (l = !0), r
                                        });
                                    if (l) return () => {
                                        for (let t = 0; t < r.length; t++) {
                                            let l = r[t];
                                            "function" == typeof l ? l() : d(e[t], null)
                                        }
                                    }
                                }
                            }(...e), e)
                        }(t, k);
                    if (!u) {
                        if (o || 0 === o) throw Error(f ? m(n) : y(n));
                        return o
                    }
                    let A = function(e, t) {
                        let l = { ...t
                        };
                        for (let r in t) {
                            let a = e[r],
                                n = t[r];
                            /^on[A-Z]/.test(r) ? a && n ? l[r] = (...e) => {
                                let t = n(...e);
                                return a(...e), t
                            } : a && (l[r] = a) : "style" === r ? l[r] = { ...a,
                                ...n
                            } : "className" === r && (l[r] = [a, n].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...l
                        }
                    }(s, u.props ?? {});
                    return u.type !== i.Fragment && (A.ref = t ? b : k), i.cloneElement(u, A)
                })).displayName = `${n}.Slot`, r),
                c = Symbol.for("radix.slottable"),
                u = ((a = e => "child" in e ? e.children(e.child) : e.children).displayName = "Slottable.Slottable", a.__radixId = c, a),
                p = (e, t) => {
                    if ("child" in e.props) {
                        let t = e.props.child;
                        return i.isValidElement(t) ? i.cloneElement(t, void 0, e.props.children(t.props.children)) : null
                    }
                    return i.isValidElement(t) ? t : null
                },
                f = Symbol.for("react.lazy");

            function h(e) {
                var t;
                return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t
            }
            var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
                m = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
                v = o[" use ".trim().toString()]
        },
        96296: (e, t, l) => {
            l.d(t, {
                A: () => o
            });
            var r = l(1521),
                a = l(5695);
            let n = e => {
                let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, l) => l ? l.toUpperCase() : t.toLowerCase());
                return t.charAt(0).toUpperCase() + t.slice(1)
            };
            var i = l(4525);
            let o = (e, t) => {
                let l = (0, r.forwardRef)(({
                    className: l,
                    ...o
                }, d) => (0, r.createElement)(i.default, {
                    ref: d,
                    iconNode: t,
                    className: (0, a.z)(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, l),
                    ...o
                }));
                return l.displayName = n(e), l
            }
        }
    }
]);