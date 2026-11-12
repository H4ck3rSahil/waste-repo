(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5522], {
        1184: (e, t, r) => {
            "use strict";
            r.d(t, {
                HeroCarousel: () => y
            });
            var s = r(73365),
                a = r(99568),
                i = r.n(a),
                l = r(1521),
                n = r(28682),
                o = r(24583),
                c = r(43998),
                d = r(26821);

            function m({
                screens: e,
                activeId: t,
                leavingId: r,
                reducedMotion: a,
                className: i
            }) {
                return (0, s.jsx)("div", {
                    className: i,
                    children: (0, s.jsx)("div", {
                        className: "relative mx-auto w-full max-w-[300px]",
                        children: (0, s.jsx)("div", {
                            className: "relative aspect-[9/19.5] rounded-[2.5rem] p-[3.5px]",
                            style: {
                                background: "linear-gradient(160deg, #4a4a52 0%, #2b2b31 42%, #55555e 100%)",
                                boxShadow: "0 1px 2px rgba(255,255,255,0.3) inset, 0 26px 54px -20px rgba(20,19,15,0.36), 0 10px 22px -12px rgba(20,19,15,0.24)"
                            },
                            children: (0, s.jsx)("div", {
                                className: "relative h-full w-full overflow-hidden rounded-[2.28rem] bg-[#f7f4ee]",
                                children: e.map((e, i) => {
                                    let l = e.id === t,
                                        n = e.id === r;
                                    return (0, s.jsx)("div", {
                                        className: "absolute inset-0",
                                        style: a ? {
                                            opacity: +!!l,
                                            transition: "opacity 300ms ease"
                                        } : {
                                            opacity: +!!l,
                                            transform: l ? "translateY(0) scale(1)" : n ? "translateY(-10px) scale(1.01)" : "translateY(14px) scale(0.99)",
                                            transition: l ? "opacity 640ms ease 120ms, transform 820ms cubic-bezier(0.16,1,0.3,1) 120ms" : "opacity 380ms ease-in, transform 420ms ease-in"
                                        },
                                        children: (0, s.jsx)("img", {
                                            src: `/hero-previews/${e.slug}.webp`,
                                            alt: "",
                                            "aria-hidden": !0,
                                            width: 780,
                                            height: 1690,
                                            loading: 0 === i ? "eager" : "lazy",
                                            decoding: "async",
                                            draggable: !1,
                                            className: "pointer-events-none h-full w-full select-none object-cover object-top"
                                        })
                                    }, e.id)
                                })
                            })
                        })
                    })
                })
            }
            let u = {
                bouquet: {
                    id: "bouquet",
                    src: "/hero/bouquet.webp",
                    width: 512,
                    height: 512,
                    available: !1,
                    className: "pointer-events-none absolute bottom-[6%] left-[-6%] hidden w-[7rem] sm:block lg:w-[9rem]",
                    note: "Rose bouquet, bottom-left of the phone"
                },
                catTulips: {
                    id: "catTulips",
                    src: "/hero/cat-tulips.webp",
                    width: 472,
                    height: 472,
                    available: !1,
                    className: "pointer-events-none absolute bottom-[16%] right-[-8%] hidden w-[7.5rem] sm:block lg:w-[9.5rem]",
                    note: "Cat holding tulips, right of the phone"
                }
            };

            function p({
                ids: e,
                eager: t
            }) {
                let r = e.map(e => u[e]).filter(e => !!e ?.available);
                return 0 === r.length ? null : (0, s.jsx)(s.Fragment, {
                    children: r.map(e => (0, s.jsx)("img", {
                        src: e.src,
                        alt: "",
                        "aria-hidden": !0,
                        width: e.width,
                        height: e.height,
                        loading: t ? "eager" : "lazy",
                        decoding: "async",
                        fetchPriority: "low",
                        draggable: !1,
                        className: `${e.className} h-auto select-none drop-shadow-[0_10px_24px_rgba(0,0,0,0.14)]`
                    }, e.id))
                })
            }

            function x(e) {
                let t = 0x9e3779b9 ^ e;
                return t ^= t << 13, t |= 0, t ^= t >>> 17, t ^= t << 5, Math.abs(t |= 0)
            }

            function h({
                className: e,
                accent: t
            }) {
                let [r, a] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    let e, t = () => a(function(e) {
                        let t = Math.floor(e / 5e3),
                            r = Math.floor(t / 5),
                            s = (t - 5 * r) / 5,
                            a = x(r) % 11 - 5;
                        return Math.min(500, Math.max(20, Math.round(260 + (.6 * Math.sin(.0031 * t) + .28 * Math.sin(71e-5 * t + 1.3) + .12 * Math.sin(.013 * t + .7)) * 192 + (a + s * s * (3 - 2 * s) * (x(r + 1) % 11 - 5 - a)))))
                    }(Date.now()));
                    t();
                    let r = setTimeout(() => {
                        t(), e = setInterval(t, 5e3)
                    }, 5e3 - Date.now() % 5e3);
                    return () => {
                        clearTimeout(r), e && clearInterval(e)
                    }
                }, []);
                let i = t ?? "var(--color-electric)";
                return (0, s.jsxs)("p", {
                    "aria-live": "off",
                    className: ["inline-flex items-center gap-2 rounded-full border border-[rgba(20,19,15,0.12)] bg-white/70 px-2.5 py-1 text-[11px] font-medium text-[var(--color-dim)] backdrop-blur sm:gap-2.5 sm:px-3 sm:py-1.5 sm:text-[12px]", e ?? ""].join(" "),
                    children: [(0, s.jsxs)("span", {
                        className: "relative flex size-1.5 shrink-0 sm:size-2",
                        children: [(0, s.jsx)("span", {
                            className: "absolute inline-flex size-full animate-ping rounded-full opacity-70",
                            style: {
                                background: i
                            }
                        }), (0, s.jsx)("span", {
                            className: "relative inline-flex size-1.5 rounded-full sm:size-2",
                            style: {
                                background: i
                            }
                        })]
                    }), (0, s.jsxs)("span", {
                        children: [(0, s.jsxs)("strong", {
                            className: "font-semibold text-[var(--color-foreground)] transition-opacity duration-300",
                            style: {
                                opacity: +(null !== r)
                            },
                            children: [(r ?? 0).toLocaleString("en-IN"), " people"]
                        }), " ", "are creating their page right now"]
                    })]
                })
            }
            let g = [{
                id: "birthday",
                eyebrow: "For their birthday",
                titleLead: "Skip the boring wish.",
                titleMain: "Gift them a page.",
                ctaLabel: "See birthday pages",
                secondaryHref: "/products?category=Birthday",
                secondaryLabel: "Browse all birthday templates",
                trustLine: "Serving users since 1.5 years \xb7 Loved by 50,000+ people till now",
                picks: ["birthday-wish-2", "bday-wish-1", "bday-wish-4", "cute-birthday"],
                modalHeadline: "Birthday picks",
                modalSubline: "Pages that beat a birthday text. Tap one to preview it live.",
                theme: {
                    background: "linear-gradient(180deg,#fffaf3 0%,#fdf3e7 52%,#f3efff 100%)",
                    orbs: ["rgba(255,206,120,0.42)", "rgba(168,145,255,0.30)", "rgba(255,183,94,0.24)"],
                    accent: "#7a4bd8",
                    highlight: "rgba(255,206,120,0.60)",
                    phoneGlow: "rgba(196,178,255,0.50)"
                },
                phoneTheme: "birthday",
                stickers: ["bouquet", "catTulips"],
                points: ["Fully customisable, edit anything according to you", "Ready to send in 30 seconds", "One private link, password protected", "Lifetime validity, pay once", {
                    text: "Add your own domain to published pages",
                    featured: !0,
                    tag: "New"
                }]
            }, {
                id: "apology",
                eyebrow: "When sorry needs more",
                titleLead: "A text won't fix it.",
                titleMain: "Say sorry with a page.",
                ctaLabel: "See apology pages",
                secondaryHref: "/products?category=Apology",
                secondaryLabel: "Browse all apology templates",
                trustLine: "Serving users since 1.5 years \xb7 Loved by 50,000+ people till now",
                picks: ["cute-apology-website", "sorry-petals", "special-apology", "apology-site"],
                modalHeadline: "Apology picks",
                modalSubline: "Pages that say sorry better than a text. Tap one to preview it live.",
                theme: {
                    background: "linear-gradient(180deg,#f5f8ff 0%,#ecf1fd 52%,#e6edfb 100%)",
                    orbs: ["rgba(146,177,244,0.42)", "rgba(255,206,214,0.34)", "rgba(168,145,255,0.22)"],
                    accent: "#3f6bd4",
                    highlight: "rgba(158,188,250,0.55)",
                    phoneGlow: "rgba(158,188,250,0.50)"
                },
                phoneTheme: "apology",
                stickers: ["bouquet", "catTulips"],
                points: ["Fully customisable, edit anything according to you", "Ready to send in 30 seconds", "One private link, password protected", "Lifetime validity, pay once", {
                    text: "Add your own domain to published pages",
                    featured: !0,
                    tag: "New"
                }]
            }, {
                id: "anniversary",
                eyebrow: "For your anniversary",
                titleLead: "Another year of you two.",
                titleMain: "Celebrate it with a page.",
                ctaLabel: "See anniversary pages",
                secondaryHref: "/products?category=Anniversary",
                secondaryLabel: "Browse all anniversary templates",
                trustLine: "Serving users since 1.5 years \xb7 Loved by 50,000+ people till now",
                picks: ["anniversary-special", "wedding-special", "love-note"],
                modalHeadline: "Anniversary picks",
                modalSubline: "Pages worth a milestone. Tap one to preview it live.",
                theme: {
                    background: "linear-gradient(180deg,#fff7f3 0%,#fdefe8 52%,#faeae6 100%)",
                    orbs: ["rgba(235,164,138,0.42)", "rgba(255,206,214,0.40)", "rgba(255,206,120,0.24)"],
                    accent: "#b85c3f",
                    highlight: "rgba(244,190,160,0.58)",
                    phoneGlow: "rgba(242,184,158,0.48)"
                },
                phoneTheme: "anniversary",
                stickers: ["bouquet", "catTulips"],
                points: ["Fully customisable, edit anything according to you", "Ready to send in 30 seconds", "One private link, password protected", "Lifetime validity, pay once", {
                    text: "Add your own domain to published pages",
                    featured: !0,
                    tag: "New"
                }]
            }];
            var b = r(54872);
            let f = "cubic-bezier(0.16, 1, 0.3, 1)";

            function v({
                phase: e,
                delay: t,
                atRest: r,
                reducedMotion: a,
                className: i,
                children: l
            }) {
                let n;
                return n = a ? {
                    opacity: +("active" === e),
                    transition: "opacity 300ms ease"
                } : "active" === e ? {
                    transform: "translateY(0)",
                    opacity: 1,
                    transition: `transform 820ms ${f} ${t}ms, opacity 560ms ease ${t}ms`
                } : "leaving" === e ? {
                    transform: "translateY(-108%)",
                    opacity: 0,
                    transition: "transform 420ms cubic-bezier(0.5, 0, 0.75, 0.4), opacity 300ms ease-in"
                } : {
                    transform: "translateY(108%)",
                    opacity: 0,
                    transition: "none"
                }, (0, s.jsx)("div", {
                    className: (0, b.cn)(a || "active" === e && r ? "overflow-visible" : "overflow-hidden", i),
                    children: (0, s.jsx)("div", {
                        className: "will-change-transform",
                        style: n,
                        children: l
                    })
                })
            }

            function y({
                ctaBySlideId: e
            }) {
                let [t, r] = (0, l.useState)(g[0].id), [a, c] = (0, l.useState)(!1), [d, u] = (0, l.useState)(null), [x, h] = (0, l.useState)(!0), [b, f] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                    let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
                        t = () => f(e.matches);
                    return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t)
                }, []);
                let v = g.findIndex(e => e.id === t),
                    w = -1 === v ? 0 : v,
                    N = g[w],
                    k = (0, l.useCallback)(e => {
                        let t = g.length,
                            s = (e % t + t) % t;
                        g[s].id !== N.id && (u(N.id), h(!1), r(g[s].id))
                    }, [g, N.id]);
                (0, l.useEffect)(() => {
                    let e = window.setTimeout(() => h(!0), 1460);
                    return () => window.clearTimeout(e)
                }, [t]), (0, l.useEffect)(() => {
                    if (null === d) return;
                    let e = window.setTimeout(() => u(null), 560);
                    return () => window.clearTimeout(e)
                }, [d, w]);
                let C = (0, l.useCallback)(() => c(!0), []),
                    M = (0, l.useCallback)(() => c(!1), []);
                (0, l.useEffect)(() => {
                    if (a || b || g.length < 2) return;
                    let e = window.setInterval(() => k(w + 1), 5500);
                    return () => window.clearInterval(e)
                }, [a, b, k, g.length, w]), (0, l.useEffect)(() => {
                    let e = () => c(document.hidden);
                    return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)
                }, []);
                let S = (0, l.useRef)(null),
                    z = (0, l.useRef)(0),
                    L = (0, l.useCallback)(e => {
                        S.current = e.touches[0].clientX, z.current = 0
                    }, []),
                    _ = (0, l.useCallback)(e => {
                        null !== S.current && (z.current = e.touches[0].clientX - S.current)
                    }, []),
                    T = (0, l.useCallback)(() => {
                        let e = z.current;
                        S.current = null, 48 > Math.abs(e) || k(e < 0 ? w + 1 : w - 1)
                    }, [k, w]),
                    $ = (0, l.useCallback)(e => {
                        "ArrowRight" === e.key ? (e.preventDefault(), k(w + 1)) : "ArrowLeft" === e.key && (e.preventDefault(), k(w - 1))
                    }, [k, w]),
                    A = (0, l.useCallback)(e => e === N.id ? "active" : e === d ? "leaving" : "parked", [N.id, d]),
                    R = (0, l.useMemo)(() => g.map(e => ({
                        id: e.id,
                        slug: e.picks[0]
                    })), [g]);
                return (0, s.jsxs)("section", {
                    id: "home",
                    "aria-roledescription": "carousel",
                    "aria-label": "Cutiepage occasions",
                    className: "relative overflow-hidden border-b border-[rgba(20,19,15,0.06)] bg-[#FBF9F4] pt-[clamp(7.5rem,7rem+6vw,10.5rem)]",
                    onFocusCapture: C,
                    onBlurCapture: M,
                    onTouchStart: L,
                    onTouchMove: _,
                    onTouchEnd: T,
                    onKeyDown: $,
                    children: [(0, s.jsxs)("div", {
                        "aria-hidden": !0,
                        className: "absolute inset-0 overflow-hidden",
                        children: [(0, s.jsx)("div", {
                            className: "absolute left-[-12%] top-[-8%] size-[30rem] rounded-full opacity-60 blur-[150px] transition-colors duration-1000",
                            style: {
                                background: N.theme.orbs[0]
                            }
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-[-16%] right-[-8%] size-[28rem] rounded-full opacity-50 blur-[160px] transition-colors duration-1000",
                            style: {
                                background: N.theme.orbs[1]
                            }
                        })]
                    }), (0, s.jsx)("div", {
                        className: "relative mx-auto max-w-6xl px-6 pb-8 sm:pb-10",
                        children: (0, s.jsxs)("div", {
                            className: "grid grid-cols-1 items-center gap-[clamp(1.25rem,3vw,2rem)] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20",
                            children: [(0, s.jsx)("div", {
                                className: "grid min-w-0",
                                children: g.map((t, r) => (0, s.jsx)("div", {
                                    role: "group",
                                    "aria-roledescription": "slide",
                                    "aria-label": `${r+1} of ${g.length}: ${t.eyebrow}`,
                                    "aria-hidden": r !== w,
                                    className: "col-start-1 row-start-1 min-w-0",
                                    style: {
                                        pointerEvents: r === w ? "auto" : "none",
                                        zIndex: +(r === w)
                                    },
                                    inert: r !== w,
                                    children: (0, s.jsx)(j, {
                                        slide: t,
                                        cta: e[t.id],
                                        phase: A(t.id),
                                        atRest: x,
                                        reducedMotion: b,
                                        onControlEnter: C,
                                        onControlLeave: M
                                    })
                                }, t.id))
                            }), (0, s.jsxs)("div", {
                                className: "relative mx-auto w-[clamp(13rem,11rem+9vw,17rem)]",
                                onMouseEnter: C,
                                onMouseLeave: M,
                                children: [(0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: "absolute left-1/2 top-1/2 -z-10 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-colors duration-1000",
                                    style: {
                                        background: N.theme.phoneGlow
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "animate-float-soft motion-reduce:animate-none",
                                    children: (0, s.jsxs)("div", {
                                        className: "relative transition-transform duration-500 hover:scale-[1.015]",
                                        children: [(0, s.jsx)(m, {
                                            screens: R,
                                            activeId: N.id,
                                            leavingId: d,
                                            reducedMotion: b
                                        }), (0, s.jsx)(i(), {
                                            href: `/templates/${N.picks[0]}`,
                                            "aria-label": `Open the ${N.eyebrow} template`,
                                            className: "absolute inset-0 z-40 rounded-[3rem]"
                                        })]
                                    })
                                }), (0, s.jsx)(p, {
                                    ids: N.stickers,
                                    eager: !0
                                }), (0, s.jsx)("p", {
                                    className: "mt-6 text-center font-display text-[13.5px] italic text-[var(--color-slate)]",
                                    children: "Tap to explore this page"
                                })]
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "relative z-[1] mx-auto flex max-w-6xl items-center gap-5 px-6 pb-12 sm:gap-6 sm:pb-16",
                        onMouseEnter: C,
                        onMouseLeave: M,
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)("button", {
                                type: "button",
                                onClick: () => k(w - 1),
                                "aria-label": "Previous slide",
                                className: "flex size-10 items-center justify-center rounded-full border border-[rgba(20,19,15,0.16)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-white",
                                children: (0, s.jsx)(n.A, {
                                    className: "size-4",
                                    strokeWidth: 1.8
                                })
                            }), (0, s.jsx)("button", {
                                type: "button",
                                onClick: () => k(w + 1),
                                "aria-label": "Next slide",
                                className: "flex size-10 items-center justify-center rounded-full border border-[rgba(20,19,15,0.16)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-white",
                                children: (0, s.jsx)(o.A, {
                                    className: "size-4",
                                    strokeWidth: 1.8
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: g.map((e, t) => (0, s.jsx)("button", {
                                type: "button",
                                onClick: () => k(t),
                                "aria-label": `Show ${e.eyebrow}`,
                                "aria-current": t === w,
                                className: "flex h-8 items-center px-0.5",
                                children: (0, s.jsx)("span", {
                                    className: "relative block h-[3px] overflow-hidden rounded-full bg-[rgba(20,19,15,0.12)] transition-all duration-500",
                                    style: {
                                        width: t === w ? "2.75rem" : "1.1rem"
                                    },
                                    children: t === w ? (0, s.jsx)("span", {
                                        className: "animate-hero-progress absolute inset-0 rounded-full",
                                        style: {
                                            background: N.theme.accent,
                                            animationDuration: "5500ms",
                                            animationPlayState: a ? "paused" : "running"
                                        }
                                    }, `${e.id}-${a?"paused":"running"}`) : null
                                })
                            }, e.id))
                        })]
                    })]
                })
            }

            function j({
                slide: e,
                cta: t,
                phase: r,
                atRest: a,
                reducedMotion: l,
                onControlEnter: n,
                onControlLeave: m
            }) {
                let u = "active" === r;
                return (0, s.jsxs)("div", {
                    className: "min-w-0 max-w-xl",
                    children: [(0, s.jsx)(v, {
                        phase: r,
                        atRest: a,
                        delay: 0,
                        reducedMotion: l,
                        children: (0, s.jsx)(h, {
                            className: "mb-5",
                            accent: e.theme.accent
                        })
                    }), (0, s.jsx)(v, {
                        phase: r,
                        atRest: a,
                        delay: 40,
                        reducedMotion: l,
                        children: (0, s.jsxs)("p", {
                            className: "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em]",
                            style: {
                                color: e.theme.accent
                            },
                            children: [(0, s.jsx)("span", {
                                "aria-hidden": !0,
                                className: "h-px w-9",
                                style: {
                                    background: e.theme.accent,
                                    opacity: .45
                                }
                            }), e.eyebrow]
                        })
                    }), (0, s.jsxs)("h1", {
                        className: "mt-4 font-display tracking-tight sm:mt-5",
                        children: [(0, s.jsx)(v, {
                            phase: r,
                            atRest: a,
                            delay: 110,
                            reducedMotion: l,
                            children: (0, s.jsx)("span", {
                                className: "block text-[clamp(1.15rem,0.7rem+2.9vw,1.9rem)] font-normal italic leading-snug",
                                style: {
                                    color: e.theme.accent
                                },
                                children: e.titleLead
                            })
                        }), (0, s.jsx)(v, {
                            phase: r,
                            atRest: a,
                            delay: 180,
                            reducedMotion: l,
                            children: (0, s.jsxs)("span", {
                                className: "relative mt-1 inline-block pb-3 text-[clamp(1.85rem,1rem+6.4vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--color-foreground)]",
                                children: [e.titleMain, (0, s.jsx)("svg", {
                                    "aria-hidden": !0,
                                    viewBox: "0 0 300 14",
                                    preserveAspectRatio: "none",
                                    className: "absolute bottom-0 left-0 h-[12px] w-full",
                                    fill: "none",
                                    children: (0, s.jsx)("path", {
                                        d: "M4 9 C 70 3, 210 13, 296 6",
                                        stroke: e.theme.accent,
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        pathLength: 1,
                                        strokeDasharray: 1,
                                        style: {
                                            opacity: .55,
                                            strokeDashoffset: +!u,
                                            transition: u ? `stroke-dashoffset 800ms ${f} 650ms` : "stroke-dashoffset 200ms ease"
                                        }
                                    })
                                })]
                            })
                        })]
                    }), (0, s.jsx)("ul", {
                        className: "mt-5 flex flex-col gap-2 sm:mt-6 sm:gap-2.5",
                        children: e.points.map((t, i) => {
                            let n = "string" != typeof t && t.featured,
                                o = "string" == typeof t ? t : t.text,
                                m = "string" == typeof t ? void 0 : t.tag;
                            return (0, s.jsx)(v, {
                                phase: r,
                                atRest: a,
                                delay: 300 + 45 * i,
                                reducedMotion: l,
                                children: n ? (0, s.jsxs)("li", {
                                    className: "mt-1 flex w-fit max-w-full items-center gap-2 rounded-full border py-1.5 pr-2.5 pl-1.5 sm:pr-3",
                                    style: {
                                        borderColor: `${e.theme.accent}3d`,
                                        background: `${e.theme.accent}12`
                                    },
                                    children: [(0, s.jsx)("span", {
                                        className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full sm:size-[22px]",
                                        style: {
                                            background: `${e.theme.accent}24`
                                        },
                                        children: (0, s.jsx)(c.A, {
                                            className: "size-3 sm:size-[13px]",
                                            strokeWidth: 2,
                                            style: {
                                                color: e.theme.accent
                                            }
                                        })
                                    }), (0, s.jsx)("span", {
                                        className: "min-w-0 text-[clamp(0.75rem,2.9vw,0.875rem)] font-semibold leading-tight text-[var(--color-foreground)]",
                                        children: o
                                    }), m ? (0, s.jsx)("span", {
                                        className: "shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white sm:px-2 sm:text-[9.5px]",
                                        style: {
                                            background: e.theme.accent
                                        },
                                        children: m
                                    }) : null]
                                }) : (0, s.jsxs)("li", {
                                    className: "flex items-center gap-2.5 sm:gap-3",
                                    children: [(0, s.jsx)("span", {
                                        className: "inline-flex size-[17px] shrink-0 items-center justify-center rounded-full sm:size-[19px]",
                                        style: {
                                            background: `${e.theme.accent}1f`
                                        },
                                        children: (0, s.jsx)(d.A, {
                                            className: "size-[10px] sm:size-[11px]",
                                            strokeWidth: 3,
                                            style: {
                                                color: e.theme.accent
                                            }
                                        })
                                    }), (0, s.jsx)("span", {
                                        className: "text-[clamp(0.8125rem,3.1vw,0.9375rem)] font-medium leading-snug text-[var(--color-foreground)]/85",
                                        children: o
                                    })]
                                })
                            }, o)
                        })
                    }), (0, s.jsx)(v, {
                        phase: r,
                        atRest: a,
                        delay: 530,
                        reducedMotion: l,
                        children: (0, s.jsxs)("div", {
                            className: "mt-6 flex flex-col gap-3.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-6",
                            onMouseEnter: n,
                            onMouseLeave: m,
                            children: [t, (0, s.jsxs)(i(), {
                                href: e.secondaryHref,
                                className: "group inline-flex items-center justify-center gap-1.5 self-center border-b border-[rgba(20,19,15,0.25)] pb-0.5 text-[13.5px] font-semibold tracking-tight text-[var(--color-foreground)]/75 transition-colors duration-300 hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] sm:self-auto sm:text-[14px]",
                                children: [e.secondaryLabel, (0, s.jsx)(o.A, {
                                    className: "size-3.5 transition-transform duration-300 group-hover:translate-x-0.5",
                                    strokeWidth: 2
                                })]
                            })]
                        })
                    }), (0, s.jsx)(v, {
                        phase: r,
                        atRest: a,
                        delay: 580,
                        reducedMotion: l,
                        children: (0, s.jsx)("p", {
                            className: "mt-4 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[var(--color-slate)] sm:mt-5 sm:text-[11px] sm:tracking-[0.14em]",
                            children: e.trustLine.split(" \xb7 ").map((e, t, r) => (0, s.jsxs)("span", {
                                children: [(0, s.jsx)("span", {
                                    className: "whitespace-nowrap",
                                    children: e
                                }), t < r.length - 1 ? (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: " \xb7 "
                                }) : null]
                            }, e))
                        })
                    })]
                })
            }
        },
        14217: (e, t, r) => {
            "use strict";
            r.d(t, {
                FaqSection: () => i
            });
            var s = r(73365),
                a = r(1521);

            function i({
                items: e
            }) {
                let [t, r] = (0, a.useState)(0);
                return (0, s.jsx)("section", {
                    className: "relative bg-white py-24 sm:py-28",
                    children: (0, s.jsxs)("div", {
                        className: "relative mx-auto max-w-4xl px-6",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center",
                            children: [(0, s.jsxs)("p", {
                                className: "flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-electric)]",
                                children: [(0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "h-px w-9 bg-[var(--color-electric)]/40"
                                }), "FAQ", (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "h-px w-9 bg-[var(--color-electric)]/40"
                                })]
                            }), (0, s.jsxs)("h2", {
                                className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--color-foreground)] sm:text-5xl",
                                children: ["Questions people ask before they make a", " ", (0, s.jsx)("em", {
                                    className: "italic text-[var(--color-electric)]",
                                    children: "website gift"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-dim)] sm:text-base",
                                children: "Tap a question to expand. Still curious? Reach out, we usually reply the same day."
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mt-12 border-t border-[rgba(20,19,15,0.10)]",
                            children: e.map((e, a) => {
                                let i = t === a;
                                return (0, s.jsxs)("article", {
                                    className: "group border-b border-[rgba(20,19,15,0.10)]",
                                    children: [(0, s.jsxs)("button", {
                                        type: "button",
                                        onClick: () => r(i ? null : a),
                                        "aria-expanded": i,
                                        className: "flex w-full items-start justify-between gap-5 py-6 text-left sm:py-7",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex flex-1 items-baseline gap-5",
                                            children: [(0, s.jsx)("span", {
                                                className: `shrink-0 font-display text-sm italic transition-colors duration-300 ${i?"text-[var(--color-electric)]":"text-[var(--color-slate)]"}`,
                                                children: String(a + 1).padStart(2, "0")
                                            }), (0, s.jsx)("h3", {
                                                className: `font-display text-lg leading-snug tracking-tight transition-colors duration-300 sm:text-2xl ${i?"text-[var(--color-foreground)]":"text-[var(--color-foreground)]/85 group-hover:text-[var(--color-foreground)]"}`,
                                                children: e.question
                                            })]
                                        }), (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            className: `mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${i?"rotate-45 border-[var(--color-electric)]/40 text-[var(--color-electric)]":"border-[rgba(20,19,15,0.14)] text-neutral-500 group-hover:border-[var(--color-electric)]/30 group-hover:text-[var(--color-electric)]"}`,
                                            children: (0, s.jsxs)("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M12 5v14"
                                                }), (0, s.jsx)("path", {
                                                    d: "M5 12h14"
                                                })]
                                            })
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                                        style: {
                                            gridTemplateRows: i ? "1fr" : "0fr",
                                            opacity: +!!i
                                        },
                                        children: (0, s.jsx)("div", {
                                            className: "overflow-hidden",
                                            children: (0, s.jsx)("div", {
                                                className: "pb-7 pl-[2.55rem] pr-14 sm:pl-[2.9rem]",
                                                children: (0, s.jsx)("p", {
                                                    className: "max-w-2xl text-sm leading-7 text-[var(--color-dim)] sm:text-[15px]",
                                                    children: e.answer
                                                })
                                            })
                                        })
                                    })]
                                }, e.question)
                            })
                        })]
                    })
                })
            }
        },
        17001: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => l
            });
            var s = r(73365),
                a = r(1521),
                i = r(54872);
            let l = a.forwardRef(({
                className: e,
                ...t
            }, r) => (0, s.jsx)("input", {
                ref: r,
                className: (0, i.cn)("flex h-11 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20", e),
                ...t
            }));
            l.displayName = "Input"
        },
        21196: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                RevealSection: () => l
            });
            var s = r(73365),
                a = r(1521),
                i = r(54872);

            function l({
                children: e,
                className: t,
                delayMs: r = 0
            }) {
                let n = (0, a.useRef)(null),
                    [o, c] = (0, a.useState)(!0);
                return (0, a.useEffect)(() => {
                    let e = n.current;
                    if (!e || "u" < typeof IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let t = e.getBoundingClientRect();
                    if (t.top <= .92 * window.innerHeight) return;
                    let r = 0,
                        s = window.innerWidth;
                    for (let t = e.parentElement; t; t = t.parentElement)
                        if ("visible" !== getComputedStyle(t).overflowX) {
                            let e = t.getBoundingClientRect();
                            r = Math.max(r, e.left), s = Math.min(s, e.right)
                        }
                    if (t.left >= s - 8 || t.right <= r + 8) return;
                    c(!1);
                    let a = new IntersectionObserver(e => {
                        e.some(e => e.isIntersecting) && (c(!0), a.disconnect())
                    }, {
                        rootMargin: "0px 0px -8% 0px"
                    });
                    return a.observe(e), () => a.disconnect()
                }, []), (0, s.jsx)("div", {
                    ref: n,
                    className: (0, i.cn)("reveal-section", o && "is-visible", t),
                    style: {
                        transitionDelay: `${r}ms`
                    },
                    children: e
                })
            }
        },
        24033: (e, t, r) => {
            "use strict";
            r.d(t, {
                SubscribeSection: () => p
            });
            var s = r(73365),
                a = r(1521),
                i = r(26821),
                l = r(21176),
                n = r(24583),
                o = r(26752),
                c = r(21196),
                d = r(87007),
                m = r(17001);
            let u = ["No spam, ever", "New templates first", "Unsubscribe anytime"];

            function p() {
                let [e, t] = (0, a.useState)(""), [r, p] = (0, a.useState)(!1), [x, h] = (0, a.useState)(!1), [g, b] = (0, a.useState)(null);
                async function f(r) {
                    r.preventDefault();
                    let s = e.trim();
                    if (s && !x) {
                        h(!0), b(null);
                        try {
                            let e = await fetch("/api/subscribe", {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        email: s,
                                        source: "marketing-subscribe"
                                    })
                                }),
                                r = await e.json();
                            if (!e.ok || !("data" in r)) throw Error("error" in r ? r.error ?.message ?? o.O.subscribe.errorMessage : o.O.subscribe.errorMessage);
                            p(!0), t("")
                        } catch (e) {
                            b(e instanceof Error ? e.message : o.O.subscribe.errorMessage)
                        } finally {
                            h(!1)
                        }
                    }
                }
                return (0, s.jsx)("section", {
                    className: "relative overflow-hidden bg-white py-20 sm:py-28",
                    children: (0, s.jsx)("div", {
                        className: "relative mx-auto max-w-6xl px-5 sm:px-6",
                        children: (0, s.jsx)(c.RevealSection, {
                            children: (0, s.jsxs)("div", {
                                className: "relative overflow-hidden rounded-[2rem] bg-[linear-gradient(155deg,#211B3F_0%,#16132B_42%,#0D0D0D_100%)] px-6 py-12 shadow-[0_40px_120px_rgba(34,24,99,0.45)] ring-1 ring-white/10 sm:rounded-[2.5rem] sm:px-12 sm:py-16",
                                children: [(0, s.jsxs)("div", {
                                    "aria-hidden": !0,
                                    className: "pointer-events-none absolute inset-0",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute -left-12 -top-16 size-72 rounded-full bg-[rgba(123,97,255,0.45)] blur-[120px]"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute -bottom-20 right-[-4%] size-80 rounded-full bg-[rgba(168,145,255,0.3)] blur-[130px]"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute left-1/2 top-1/3 size-56 rounded-full bg-[rgba(91,63,232,0.25)] blur-[120px]"
                                    }), (0, s.jsx)("div", {
                                        className: "ambient-grid absolute inset-0 opacity-[0.05]"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center",
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsxs)("p", {
                                            className: "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-lavender)]",
                                            children: [(0, s.jsx)("span", {
                                                "aria-hidden": !0,
                                                className: "h-px w-9 bg-[var(--color-lavender)]/40"
                                            }), "Newsletter"]
                                        }), (0, s.jsx)("h2", {
                                            className: "mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl",
                                            children: o.O.subscribe.title
                                        }), (0, s.jsx)("p", {
                                            className: "mt-5 max-w-lg text-base leading-8 text-white/65 sm:text-lg",
                                            children: o.O.subscribe.description
                                        }), (0, s.jsx)("ul", {
                                            className: "mt-7 flex flex-wrap gap-x-5 gap-y-2.5",
                                            children: u.map(e => (0, s.jsxs)("li", {
                                                className: "flex items-center gap-2 text-sm font-medium text-white/75",
                                                children: [(0, s.jsx)("span", {
                                                    className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(168,145,255,0.18)] text-[var(--color-lavender)]",
                                                    children: (0, s.jsx)(i.A, {
                                                        className: "size-3",
                                                        strokeWidth: 3
                                                    })
                                                }), e]
                                            }, e))
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_24px_60px_rgba(13,13,13,0.35)] backdrop-blur-xl sm:p-6",
                                        children: [(0, s.jsx)("div", {
                                            className: "absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,145,255,0.5),transparent)]"
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-5 flex items-center justify-between gap-4",
                                            children: [(0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("p", {
                                                    className: "text-sm font-semibold text-white",
                                                    children: o.O.subscribe.formLabel
                                                }), (0, s.jsx)("p", {
                                                    className: "mt-1 text-xs uppercase tracking-[0.2em] text-white/45",
                                                    children: "Takes 5 seconds"
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,var(--color-electric),var(--color-violet))] text-white shadow-[0_12px_30px_rgba(91,63,232,0.4)]",
                                                children: (0, s.jsx)(l.A, {
                                                    className: "size-4"
                                                })
                                            })]
                                        }), (0, s.jsxs)("form", {
                                            onSubmit: f,
                                            className: "space-y-3.5",
                                            children: [(0, s.jsx)("label", {
                                                htmlFor: "newsletter-email",
                                                className: "sr-only",
                                                children: o.O.subscribe.formLabel
                                            }), (0, s.jsx)(m.p, {
                                                id: "newsletter-email",
                                                type: "email",
                                                autoComplete: "email",
                                                placeholder: o.O.subscribe.placeholder,
                                                required: !0,
                                                value: e,
                                                onChange: e => {
                                                    t(e.target.value), r && p(!1), g && b(null)
                                                },
                                                className: "h-14 rounded-[1.2rem] border-white/12 bg-white/[0.06] px-5 text-base text-white shadow-none placeholder:text-white/40 focus:border-[var(--color-lavender)] focus:bg-white/10 focus:ring-[var(--color-lavender)]/25"
                                            }), (0, s.jsx)(d.$, {
                                                type: "submit",
                                                variant: "primary",
                                                size: "lg",
                                                className: "w-full",
                                                iconTrailing: (0, s.jsx)(n.A, {
                                                    strokeWidth: 2.4
                                                }),
                                                loading: x,
                                                children: x ? o.O.subscribe.submittingCta : o.O.subscribe.submitCta
                                            })]
                                        }), g ? (0, s.jsx)("div", {
                                            className: "mt-4 rounded-[1.1rem] border border-rose-400/30 bg-rose-500/12 px-4 py-3 text-sm leading-6 text-rose-200",
                                            children: g
                                        }) : null, r ? (0, s.jsxs)("div", {
                                            className: "mt-4 flex items-start gap-2.5 rounded-[1.1rem] border border-[rgba(168,145,255,0.35)] bg-[rgba(91,63,232,0.2)] px-4 py-3 text-sm leading-6 text-white/90",
                                            children: [(0, s.jsx)(i.A, {
                                                className: "mt-0.5 size-4 shrink-0 text-[var(--color-lavender)]",
                                                strokeWidth: 3
                                            }), (0, s.jsx)("span", {
                                                children: o.O.subscribe.successMessage
                                            })]
                                        }) : null]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        29858: (e, t, r) => {
            "use strict";
            r.d(t, {
                StatsBar: () => o
            });
            var s = r(73365),
                a = r(1521),
                i = r(26752);

            function l(e, t) {
                return e.toLocaleString("en-IN", {
                    minimumFractionDigits: t,
                    maximumFractionDigits: t
                })
            }

            function n({
                raw: e,
                started: t
            }) {
                let r = function(e) {
                        let t = /^([\d,]+(?:\.\d+)?)(.*)$/.exec(e.trim());
                        if (!t) return null;
                        let r = t[1].replace(/,/g, ""),
                            s = r.split(".")[1];
                        return {
                            target: Number.parseFloat(r),
                            decimals: s ? s.length : 0,
                            suffix: t[2]
                        }
                    }(e),
                    [i, o] = (0, a.useState)(null),
                    c = r ?.target ?? 0,
                    d = r ?.decimals ?? 0;
                return ((0, a.useEffect)(() => {
                    if (!r || !t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = 0,
                        s = performance.now(),
                        a = t => {
                            let r = Math.min(1, (t - s) / 1400);
                            o(l(c * (1 - Math.pow(1 - r, 3)), d)), r < 1 ? e = requestAnimationFrame(a) : o(null)
                        };
                    return e = requestAnimationFrame(a), () => cancelAnimationFrame(e)
                }, [t, c, d]), r) ? (0, s.jsxs)(s.Fragment, {
                    children: [i ?? l(c, d), r.suffix]
                }) : (0, s.jsx)(s.Fragment, {
                    children: e
                })
            }

            function o() {
                let e = (0, a.useRef)(null),
                    [t, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let t = e.current;
                    if (!t || "u" < typeof IntersectionObserver) return void r(!0);
                    let s = new IntersectionObserver(e => {
                        e.some(e => e.isIntersecting) && (r(!0), s.disconnect())
                    }, {
                        threshold: .35
                    });
                    return s.observe(t), () => s.disconnect()
                }, []), (0, s.jsx)("section", {
                    ref: e,
                    className: "border-b border-[rgba(20,19,15,0.08)] bg-white",
                    children: (0, s.jsx)("div", {
                        className: "mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4",
                        children: i.O.statsBar.items.map((e, r) => (0, s.jsxs)("div", {
                            className: ["px-4 py-10 text-center sm:py-14", r % 2 == 1 ? "border-l border-[rgba(20,19,15,0.08)]" : "", r >= 2 ? "border-t border-[rgba(20,19,15,0.08)] md:border-t-0" : "", r > 0 ? "md:border-l md:border-[rgba(20,19,15,0.08)]" : ""].join(" "),
                            children: [(0, s.jsx)("div", {
                                className: "font-display text-[2.4rem] leading-none tracking-tight text-[var(--color-foreground)] sm:text-5xl",
                                children: (0, s.jsx)(n, {
                                    raw: e.value,
                                    started: t
                                })
                            }), (0, s.jsx)("p", {
                                className: "mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]",
                                children: e.label
                            })]
                        }, e.label))
                    })
                })
            }
        },
        51342: (e, t, r) => {
            "use strict";
            r.d(t, {
                TrendingProductsCarousel: () => o
            });
            var s = r(73365),
                a = r(1521),
                i = r(21196),
                l = r(50296),
                n = r(54872);

            function o({
                templates: e,
                detailLabel: t,
                hidePagination: r = !1,
                hideOffer: c = !1
            }) {
                let d = (0, a.useRef)(null),
                    [m, u] = (0, a.useState)(1),
                    [p, x] = (0, a.useState)(0);
                return (0, a.useEffect)(() => {
                    let e = d.current;
                    if (!e) return;
                    let t = () => Math.max(1, Math.ceil(e.scrollWidth / e.clientWidth)),
                        r = () => {
                            let r = t(),
                                s = Math.min(r - 1, Math.round(e.scrollLeft / e.clientWidth));
                            u(r), x(s)
                        };
                    r();
                    let s = () => {
                        x(Math.min(Math.max(0, t() - 1), Math.round(e.scrollLeft / e.clientWidth)))
                    };
                    e.addEventListener("scroll", s, {
                        passive: !0
                    });
                    let a = new ResizeObserver(r);
                    return a.observe(e), () => {
                        e.removeEventListener("scroll", s), a.disconnect()
                    }
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        ref: d,
                        className: "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scroll-smooth lg:gap-5",
                        "aria-label": "Trending products",
                        children: e.map((e, r) => (0, s.jsx)("div", {
                            className: "flex min-w-0 shrink-0 snap-start basis-[82%] sm:basis-[calc((100%-1rem)/2)] md:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-3.75rem)/4)]",
                            children: (0, s.jsx)(i.RevealSection, {
                                className: "h-full w-full",
                                delayMs: 80 + 35 * r,
                                children: (0, s.jsx)(l.TemplateCard, {
                                    template: e,
                                    detailLabel: t,
                                    hideOffer: c,
                                    compactOnDesktop: !0
                                })
                            })
                        }, e.id))
                    }), m > 1 && !r ? (0, s.jsx)("div", {
                        className: "mt-6 flex items-center justify-center gap-2",
                        "aria-label": "Trending products pages",
                        children: Array.from({
                            length: m
                        }, (e, t) => {
                            let r = t === p;
                            return (0, s.jsx)("button", {
                                type: "button",
                                "aria-label": `Go to trending products page ${t+1}`,
                                "aria-pressed": r,
                                onClick: () => {
                                    let e;
                                    (e = d.current) && e.scrollTo({
                                        left: e.clientWidth * t,
                                        behavior: "smooth"
                                    })
                                },
                                className: (0, n.cn)("h-2.5 rounded-full bg-[var(--color-silver)] transition-all duration-300", r ? "w-6 bg-[var(--color-accent)]" : "w-2.5 hover:bg-[var(--color-soft)]")
                            }, t)
                        })
                    }) : null]
                })
            }
        },
        63539: (e, t, r) => {
            "use strict";
            r.d(t, {
                PersonalisedTemplatesModal: () => b
            });
            var s = r(73365),
                a = r(58872),
                i = r(99568),
                l = r.n(i),
                n = r(98196),
                o = r(1521),
                c = r(87007),
                d = r(32420),
                m = r(78175),
                u = r(29359),
                p = r(70414);
            let x = [{
                    id: "partner",
                    label: "Partner",
                    emoji: "\uD83D\uDC9E",
                    hint: "Girlfriend, boyfriend, spouse"
                }, {
                    id: "friend",
                    label: "Best friend",
                    emoji: "\uD83E\uDEF6",
                    hint: "Your ride-or-die"
                }, {
                    id: "family",
                    label: "Family",
                    emoji: "\uD83C\uDFE1",
                    hint: "Mom, dad, sibling"
                }, {
                    id: "crush",
                    label: "Crush",
                    emoji: "\uD83D\uDC8C",
                    hint: "Someone special"
                }, {
                    id: "self",
                    label: "Yourself",
                    emoji: "✨",
                    hint: "Treat yourself"
                }],
                h = [{
                    id: "birthday",
                    label: "Birthday",
                    emoji: "\uD83C\uDF82",
                    hint: "Make their day unforgettable",
                    matchCategories: ["Birthday"],
                    matchKeywords: ["birthday", "bday"]
                }, {
                    id: "anniversary",
                    label: "Anniversary",
                    emoji: "\uD83D\uDC8D",
                    hint: "Celebrate your story",
                    matchCategories: ["Anniversary", "Love", "Wedding"],
                    matchKeywords: ["love", "romance", "anniversary"]
                }, {
                    id: "girlfriends-day",
                    label: "Girlfriend's Day",
                    emoji: "\uD83D\uDC69‍❤️‍\uD83D\uDC68",
                    hint: "For your favourite person",
                    matchCategories: ["Love"],
                    matchKeywords: ["girlfriend", "love", "romance"]
                }, {
                    id: "friendship-day",
                    label: "Friendship Day",
                    emoji: "\uD83E\uDD1D",
                    hint: "For your ride-or-die",
                    matchCategories: ["Friendship"],
                    matchKeywords: ["friend", "friendship", "bestie"]
                }, {
                    id: "apology",
                    label: "Apology",
                    emoji: "\uD83E\uDD7A",
                    hint: "Say sorry, properly",
                    matchCategories: ["Apology"],
                    matchKeywords: ["apology", "sorry"]
                }, {
                    id: "just-because",
                    label: "Just because",
                    emoji: "\uD83C\uDF38",
                    hint: "No reason needed",
                    matchCategories: ["Love", "Friendship", "Family"]
                }, {
                    id: "special",
                    label: "Special moment",
                    emoji: "\uD83C\uDF1F",
                    hint: "Proposal, reveal, surprise",
                    matchCategories: ["Wedding", "Anniversary", "Love"],
                    matchKeywords: ["love", "romance", "proposal"]
                }],
                g = [/^\s*✨\s*/i, /^\s*Lifetime validity \+ Make it in just 30 seconds \+ live beautiful QR Code\.\s*/i, /^\s*This is NOT a cheap Canva template\.\s*/i, /^\s*It is professionally designed and animated by our team\.\s*/i, /^\s*Just fill in your details and it is ready in 30 seconds\.\s*/i, /^\s*You get lifetime validity and a live QR code to share\.\s*/i, /^\s*Not a drag-and-drop Canva template\. This one is designed and animated by our team, ready in 30 seconds with your details, yours forever with a live QR code to share\.\s*/i];

            function b({
                templates: e,
                triggerLabel: t,
                triggerClassName: r,
                triggerStyle: a,
                triggerIcon: i,
                fixedPicks: l,
                fixedHeadline: d,
                fixedSubline: m
            }) {
                let u = !!(l && l.length > 0),
                    [p, g] = (0, o.useState)(!1),
                    [v, w] = (0, o.useState)(!1),
                    [C, M] = (0, o.useState)(u ? "results" : "audience"),
                    [S, z] = (0, o.useState)(null),
                    [L, _] = (0, o.useState)(null),
                    T = (0, o.useRef)(null),
                    $ = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    g(!0)
                }, []);
                let A = (0, o.useMemo)(() => x.find(e => e.id === S) ?? null, [S]),
                    R = (0, o.useMemo)(() => h.find(e => e.id === L) ?? null, [L]),
                    E = (0, o.useMemo)(() => {
                        if (l && l.length > 0) return l.map(t => e.find(e => e.slug === t)).filter(e => !!e);
                        if (!R) return e;
                        let t = R.matchKeywords ?.map(e => e.toLowerCase()) ?? [],
                            r = e.filter(e => {
                                let r = e.category ?.toLowerCase() ?? "";
                                if (R.matchCategories.some(e => e.toLowerCase() === r)) return !0;
                                if (0 === t.length) return !1;
                                let s = `${e.name} ${e.description} ${e.slug}`.toLowerCase();
                                return t.some(e => s.includes(e))
                            });
                        return 0 === r.length ? e.slice(0, 6) : r
                    }, [e, R, l]),
                    F = (0, o.useCallback)(() => {
                        w(!1)
                    }, []);
                (0, o.useEffect)(() => {
                    if (!v) return;
                    let e = e => {
                        "Escape" === e.key && F()
                    };
                    document.addEventListener("keydown", e);
                    let t = document.body.style.overflow;
                    return document.body.style.overflow = "hidden", () => {
                        document.removeEventListener("keydown", e), document.body.style.overflow = t
                    }
                }, [v, F]), (0, o.useEffect)(() => () => {
                    $.current && clearTimeout($.current)
                }, []);
                let P = p && v ? (0, n.createPortal)((0, s.jsxs)("div", {
                    className: "pp-modal-root fixed inset-0 flex items-center justify-center",
                    style: {
                        zIndex: 2147483e3,
                        padding: "16px",
                        paddingTop: "max(16px, env(safe-area-inset-top))",
                        paddingBottom: "max(16px, env(safe-area-inset-bottom))"
                    },
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "personalised-modal-title",
                    children: [(0, s.jsx)("style", {
                        children: `
              @keyframes pp-backdrop-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes pp-card-in {
                from { opacity: 0; transform: translateY(14px) scale(0.96); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes pp-step-in {
                from { opacity: 0; transform: translateY(8px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .pp-backdrop { animation: pp-backdrop-in 0.24s ease-out both; }
              .pp-card { animation: pp-card-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both; }
              .pp-step { animation: pp-step-in 0.28s ease-out both; }
              @media (prefers-reduced-motion: reduce) {
                .pp-backdrop, .pp-card, .pp-step { animation: none; }
              }
            `
                    }), (0, s.jsx)("button", {
                        type: "button",
                        "aria-label": "Close",
                        onClick: F,
                        className: "pp-backdrop absolute inset-0",
                        style: {
                            background: "rgba(12, 10, 24, 0.62)",
                            backdropFilter: "blur(14px) saturate(140%)",
                            WebkitBackdropFilter: "blur(14px) saturate(140%)"
                        }
                    }), (0, s.jsxs)("div", {
                        ref: T,
                        className: "pp-card relative flex w-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_34px_90px_rgba(15,23,42,0.32)] sm:rounded-[1.75rem]",
                        style: {
                            maxWidth: "min(640px, 100%)",
                            maxHeight: "min(88dvh, 720px)"
                        },
                        children: [(0, s.jsx)("div", {
                            "aria-hidden": !0,
                            className: "pointer-events-none absolute inset-x-0 top-0 h-40",
                            style: {
                                background: "radial-gradient(120% 100% at 50% 0%, rgba(168, 145, 255, 0.22) 0%, rgba(243, 241, 255, 0.55) 38%, rgba(255,255,255,0) 75%)"
                            }
                        }), (0, s.jsxs)("div", {
                            className: "relative flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3.5 sm:px-7 sm:py-4",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [u || "audience" === C || "loading" === C ? null : (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: function() {
                                        u || ("occasion" === C ? M("audience") : "results" === C && M("occasion"))
                                    },
                                    className: "rounded-full p-1.5 text-neutral-500 transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-electric)]",
                                    "aria-label": "Back",
                                    children: (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: (0, s.jsx)("path", {
                                            d: "M15 18l-6-6 6-6"
                                        })
                                    })
                                }), u ? (0, s.jsx)("h2", {
                                    id: "personalised-modal-title",
                                    className: "text-sm font-semibold tracking-tight text-neutral-900 sm:text-[15px]",
                                    children: d ?? "Picked for you"
                                }) : (0, s.jsx)(f, {
                                    step: C
                                })]
                            }), (0, s.jsx)("button", {
                                type: "button",
                                onClick: F,
                                className: "rounded-full p-1.5 text-neutral-500 transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-electric)]",
                                "aria-label": "Close",
                                children: (0, s.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, s.jsx)("path", {
                                        d: "M18 6L6 18"
                                    }), (0, s.jsx)("path", {
                                        d: "M6 6l12 12"
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative flex min-h-0 flex-1 flex-col px-4 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6",
                            children: ["audience" === C ? (0, s.jsx)("div", {
                                className: "no-scrollbar min-h-0 flex-1 overflow-y-auto",
                                children: (0, s.jsx)(y, {
                                    onSelect: function(e) {
                                        z(e), M("occasion")
                                    }
                                })
                            }) : null, "occasion" === C ? (0, s.jsx)("div", {
                                className: "no-scrollbar min-h-0 flex-1 overflow-y-auto",
                                children: (0, s.jsx)(j, {
                                    audience: A,
                                    onSelect: function(e) {
                                        _(e), M("loading"), $.current && clearTimeout($.current), $.current = setTimeout(() => {
                                            M("results")
                                        }, 1500)
                                    }
                                })
                            }) : null, "loading" === C ? (0, s.jsx)(N, {
                                audience: A,
                                occasion: R
                            }) : null, "results" === C ? (0, s.jsx)(k, {
                                audience: A,
                                occasion: R,
                                picks: E,
                                onClose: F,
                                headline: d,
                                subline: m
                            }) : null]
                        })]
                    })]
                }), document.body) : null;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(c.$, {
                        size: "lg",
                        variant: "primary",
                        onClick: function() {
                            M(u ? "results" : "audience"), z(null), _(null), w(!0)
                        },
                        iconTrailing: i,
                        className: r,
                        style: a,
                        children: t
                    }), P]
                })
            }

            function f({
                step: e
            }) {
                let t = "audience" === e ? 1 : "occasion" === e ? 2 : 3;
                return (0, s.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, s.jsx)("h2", {
                        id: "personalised-modal-title",
                        className: "text-sm font-semibold tracking-tight text-neutral-900 sm:text-[15px]",
                        children: "Find your perfect page"
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "h-1 w-16 overflow-hidden rounded-full bg-neutral-200/70 sm:w-24",
                            children: (0, s.jsx)("div", {
                                className: "h-full rounded-full transition-all duration-500 ease-out",
                                style: {
                                    width: `${t/3*100}%`,
                                    background: "linear-gradient(90deg, var(--color-violet), var(--color-electric))"
                                }
                            })
                        }), (0, s.jsxs)("span", {
                            className: "text-[11px] font-medium tabular-nums text-neutral-400",
                            children: [t, "/", 3]
                        })]
                    })]
                })
            }

            function v({
                eyebrow: e,
                title: t,
                description: r
            }) {
                return (0, s.jsxs)("div", {
                    className: "mb-3.5 text-center sm:mb-4",
                    children: [(0, s.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-electric)] sm:text-[10px]",
                        children: [(0, s.jsx)("span", {
                            className: "h-1 w-1 rounded-full bg-[var(--color-electric)]"
                        }), e]
                    }), (0, s.jsx)("h3", {
                        className: "mt-2.5 font-display text-[19px] leading-tight tracking-tight text-neutral-900 sm:text-[24px]",
                        children: t
                    }), (0, s.jsx)("p", {
                        className: "mx-auto mt-1 max-w-sm text-[11.5px] leading-snug text-neutral-500 sm:text-[13px]",
                        children: r
                    })]
                })
            }

            function y({
                onSelect: e
            }) {
                return (0, s.jsxs)("div", {
                    className: "pp-step",
                    children: [(0, s.jsx)(v, {
                        eyebrow: "Step 1",
                        title: "Who is it for?",
                        description: "Tell us who you have in mind, and we'll tailor the picks to their vibe."
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3",
                        children: x.map(t => (0, s.jsx)(w, {
                            emoji: t.emoji,
                            label: t.label,
                            hint: t.hint,
                            onClick: () => e(t.id)
                        }, t.id))
                    })]
                })
            }

            function j({
                audience: e,
                onSelect: t
            }) {
                return (0, s.jsxs)("div", {
                    className: "pp-step",
                    children: [(0, s.jsx)(v, {
                        eyebrow: "Step 2",
                        title: "What's the occasion?",
                        description: e ? `Pick the moment you're celebrating with your ${e.label.toLowerCase()}.` : "Pick the moment you want to celebrate."
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3",
                        children: h.map(e => (0, s.jsx)(w, {
                            emoji: e.emoji,
                            label: e.label,
                            hint: e.hint,
                            onClick: () => t(e.id)
                        }, e.id))
                    })]
                })
            }

            function w({
                emoji: e,
                label: t,
                hint: r,
                onClick: a
            }) {
                return (0, s.jsxs)("button", {
                    type: "button",
                    onClick: a,
                    className: "group relative flex h-full flex-col items-center gap-1 overflow-hidden rounded-2xl border border-black/[0.07] bg-white px-2.5 py-3.5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-electric)]/50 hover:shadow-[0_18px_38px_rgba(91,63,232,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electric)]/40 focus-visible:ring-offset-2 active:scale-[0.98] sm:py-4",
                    children: [(0, s.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
                        style: {
                            background: "linear-gradient(180deg, rgba(243, 241, 255, 0.85) 0%, rgba(255,255,255,0) 70%)"
                        }
                    }), (0, s.jsx)("span", {
                        className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[rgba(123,97,255,0.10)] to-[rgba(91,63,232,0.16)] text-xl transition duration-200 group-hover:scale-110 sm:h-11 sm:w-11 sm:text-2xl",
                        children: e
                    }), (0, s.jsx)("span", {
                        className: "relative mt-1 text-[12.5px] font-semibold leading-tight text-neutral-900 sm:text-[13.5px]",
                        children: t
                    }), (0, s.jsx)("span", {
                        className: "relative line-clamp-2 text-[10px] leading-snug text-neutral-500 sm:text-[10.5px]",
                        children: r
                    })]
                })
            }

            function N({
                audience: e,
                occasion: t
            }) {
                let [r, i] = (0, o.useState)(m.a.gifs[0]), [l, n] = (0, o.useState)(m.a.messages[0]);
                return (0, o.useEffect)(() => {
                    i(m.a.gifs[Math.floor(Math.random() * m.a.gifs.length)]), n(m.a.messages[Math.floor(Math.random() * m.a.messages.length)])
                }, []), (0, s.jsxs)("div", {
                    className: "pp-step flex min-h-[260px] flex-col items-center justify-center gap-4 py-6 sm:gap-5 sm:py-8",
                    children: [(0, s.jsxs)("div", {
                        className: "relative",
                        children: [(0, s.jsx)("span", {
                            "aria-hidden": !0,
                            className: "absolute -inset-2 rounded-[1.6rem] opacity-70 blur-xl",
                            style: {
                                background: "radial-gradient(closest-side, rgba(123, 97, 255, 0.45), rgba(91, 63, 232, 0))"
                            }
                        }), (0, s.jsx)("div", {
                            className: "relative overflow-hidden rounded-[1.25rem] border border-black/8 bg-[var(--color-chalk)] shadow-[0_18px_42px_rgba(91,63,232,0.18)]",
                            children: (0, s.jsx)(a.default, {
                                src: r,
                                alt: "Loading animation",
                                width: 144,
                                height: 144,
                                className: "h-32 w-32 object-cover sm:h-36 sm:w-36",
                                unoptimized: !0
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [(0, s.jsx)("p", {
                            className: "font-display text-lg tracking-tight text-neutral-900",
                            children: l
                        }), (0, s.jsxs)("p", {
                            className: "mt-1.5 inline-flex items-center gap-1.5 text-xs text-neutral-500",
                            children: [(0, s.jsxs)("span", {
                                className: "inline-flex gap-0.5",
                                children: [(0, s.jsx)("span", {
                                    className: "h-1 w-1 animate-bounce rounded-full bg-[var(--color-violet)] [animation-delay:-0.3s]"
                                }), (0, s.jsx)("span", {
                                    className: "h-1 w-1 animate-bounce rounded-full bg-[var(--color-electric)] [animation-delay:-0.15s]"
                                }), (0, s.jsx)("span", {
                                    className: "h-1 w-1 animate-bounce rounded-full bg-[var(--color-deep)]"
                                })]
                            }), e && t ? `Curating ${t.label.toLowerCase()} templates for your ${e.label.toLowerCase()}` : "Personalising your picks"]
                        })]
                    })]
                })
            }

            function k({
                audience: e,
                occasion: t,
                picks: r,
                onClose: i,
                headline: n,
                subline: o
            }) {
                let m = r.length,
                    x = n ?? (t ? `${m} ${1===m?"pick":"picks"} for ${t.label}` : `${m} ${1===m?"pick":"picks"} for you`),
                    h = o ?? (e ? `Chosen for your ${e.label.toLowerCase()}. Tap one to preview it live.` : "Tap one to preview it live.");
                return (0, s.jsxs)("div", {
                    className: "pp-step flex h-full min-h-0 flex-col",
                    children: [(0, s.jsxs)("div", {
                        className: "mb-3.5 shrink-0 text-center",
                        children: [(0, s.jsx)("h3", {
                            className: "font-display text-[19px] leading-tight tracking-tight text-neutral-900 sm:text-[24px]",
                            children: x
                        }), (0, s.jsx)("p", {
                            className: "mx-auto mt-1 max-w-sm text-[11.5px] text-neutral-500 sm:text-[13px]",
                            children: h
                        })]
                    }), (0, s.jsx)("div", {
                        className: "no-scrollbar min-h-0 flex-1 overflow-y-auto pr-0.5",
                        children: 0 === m ? (0, s.jsx)("div", {
                            className: "rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-500",
                            children: "Nothing matches yet. Browse the full catalogue."
                        }) : (0, s.jsx)("ul", {
                            className: "grid gap-2 sm:grid-cols-2 sm:gap-2.5",
                            children: r.map(e => (0, s.jsx)("li", {
                                children: (0, s.jsxs)(l(), {
                                    href: `/templates/${e.slug}`,
                                    onClick: i,
                                    className: "group flex h-full items-stretch gap-3 overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-3 transition hover:-translate-y-0.5 hover:border-[var(--color-electric)]/40 hover:shadow-[0_14px_30px_rgba(91,63,232,0.14)]",
                                    children: [(0, s.jsx)("div", {
                                        className: "relative size-[86px] shrink-0 self-stretch overflow-hidden rounded-xl bg-neutral-100 sm:size-24",
                                        children: e.thumbnailUrl ? (0, s.jsx)(a.default, {
                                            src: e.thumbnailUrl,
                                            alt: e.name,
                                            fill: !0,
                                            sizes: "96px",
                                            className: "object-cover transition duration-300 group-hover:scale-105"
                                        }) : null
                                    }), (0, s.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col gap-1 py-0.5",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-start gap-2",
                                            children: [(0, s.jsx)("p", {
                                                className: "min-w-0 flex-1 truncate text-[13.5px] font-semibold leading-tight text-neutral-900 sm:text-sm",
                                                children: e.name
                                            }), e.ratingAvg ? (0, s.jsxs)("span", {
                                                className: "flex shrink-0 items-center gap-0.5 text-[10.5px] font-semibold text-neutral-500",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-[var(--color-electric)]",
                                                    children: "★"
                                                }), e.ratingAvg.toFixed(1)]
                                            }) : null]
                                        }), (0, s.jsx)("p", {
                                            className: "line-clamp-2 text-[11px] leading-[1.45] text-neutral-500",
                                            children: function(e) {
                                                let t = e,
                                                    r = !0;
                                                for (; r;)
                                                    for (let e of (r = !1, g)) {
                                                        let s = t.replace(e, "");
                                                        s !== t && (t = s, r = !0)
                                                    }
                                                return t.trim()
                                            }(e.description)
                                        }), (0, s.jsxs)("div", {
                                            className: "mt-auto flex items-baseline gap-2 pt-0.5",
                                            children: [(0, s.jsx)("span", {
                                                className: "text-[13px] font-semibold text-neutral-900",
                                                children: 0 === e.priceInr ? "Free" : (0, p.Dh)(e.priceInr)
                                            }), (() => {
                                                let t = (0, u.ax)(e.slug);
                                                if (t) return (0, s.jsx)(d.M, {
                                                    copy: t.copy,
                                                    className: "shrink-0"
                                                });
                                                if ((0, p.TH)(e.slug)) return null;
                                                let r = (0, p.G5)(e.priceInr);
                                                return r.hasOffer && null !== r.compareAtInr ? (0, s.jsx)("span", {
                                                    className: "text-[11px] font-medium text-neutral-400 line-through",
                                                    children: (0, p.Dh)(r.compareAtInr)
                                                }) : null
                                            })(), (0, s.jsx)("span", {
                                                className: "ml-auto text-[10.5px] font-semibold text-neutral-400 transition group-hover:text-[var(--color-electric)]",
                                                children: "Preview →"
                                            })]
                                        })]
                                    })]
                                })
                            }, e.id))
                        })
                    }), (0, s.jsx)("div", {
                        className: "mt-3 shrink-0 border-t border-black/[0.06] bg-white pt-3",
                        children: (0, s.jsx)(c.$, {
                            asChild: !0,
                            variant: "outline",
                            size: "sm",
                            className: "w-full sm:w-auto",
                            children: (0, s.jsx)(l(), {
                                href: "/products",
                                onClick: i,
                                children: "See all templates"
                            })
                        })
                    })]
                })
            }
        },
        77760: (e, t, r) => {
            "use strict";
            r.d(t, {
                ComparisonSection: () => p
            });
            var s = r(73365),
                a = r(99568),
                i = r.n(a),
                l = r(59748),
                n = r(26821),
                o = r(79225),
                c = r(17754),
                d = r(26752),
                m = r(21196),
                u = r(87007);

            function p() {
                let {
                    comparison: e
                } = d.O.home, t = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: .08,
                            delayChildren: .1
                        }
                    }
                }, r = {
                    hidden: {
                        opacity: 0,
                        y: 15
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }
                    }
                };
                return (0, s.jsxs)("section", {
                    className: "relative overflow-hidden bg-white py-20 sm:py-28",
                    children: [(0, s.jsxs)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [(0, s.jsx)("div", {
                            className: "absolute left-[-8%] top-[8%] size-80 rounded-full bg-[rgba(91,63,232,0.08)] blur-[130px]"
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-[-12%] right-[-6%] size-96 rounded-full bg-[rgba(168,145,255,0.12)] blur-[140px]"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "relative mx-auto max-w-5xl px-5 sm:px-6",
                        children: [(0, s.jsx)(m.RevealSection, {
                            children: (0, s.jsxs)("div", {
                                className: "mx-auto max-w-2xl text-center",
                                children: [(0, s.jsxs)("p", {
                                    className: "flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-electric)]",
                                    children: [(0, s.jsx)("span", {
                                        "aria-hidden": !0,
                                        className: "h-px w-9 bg-[var(--color-electric)]/40"
                                    }), e.badge, (0, s.jsx)("span", {
                                        "aria-hidden": !0,
                                        className: "h-px w-9 bg-[var(--color-electric)]/40"
                                    })]
                                }), (0, s.jsxs)("h2", {
                                    className: "mt-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl",
                                    children: [e.title.beforeHighlight, (0, s.jsx)("em", {
                                        className: "italic text-[var(--color-electric)]",
                                        children: e.title.highlight
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "mt-4 text-base leading-7 text-[var(--color-dim)] sm:text-lg sm:leading-8",
                                    children: e.description
                                })]
                            })
                        }), (0, s.jsx)(m.RevealSection, {
                            delayMs: 120,
                            children: (0, s.jsxs)("div", {
                                className: "mt-10 overflow-hidden rounded-3xl border border-[rgba(91,63,232,0.14)] bg-white/80 shadow-[0_20px_50px_rgba(91,63,232,0.08)] backdrop-blur sm:mt-14 sm:shadow-[0_30px_70px_rgba(91,63,232,0.1)]",
                                children: [(0, s.jsxs)("div", {
                                    className: "sm:hidden",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-2 bg-[linear-gradient(180deg,rgba(91,63,232,0.06),rgba(168,145,255,0.03))] px-5 py-4 border-b border-slate-100",
                                        children: [(0, s.jsx)(l.A, {
                                            "aria-hidden": !0,
                                            className: "size-4 text-[var(--color-electric)]",
                                            strokeWidth: 2.25,
                                            fill: "currentColor"
                                        }), (0, s.jsx)("span", {
                                            className: "font-display text-sm font-bold tracking-tight text-[var(--color-foreground)]",
                                            children: e.featureHeading
                                        })]
                                    }), (0, s.jsx)(c.P.div, {
                                        variants: t,
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: !0,
                                            margin: "-100px"
                                        },
                                        className: "p-4 space-y-4",
                                        children: e.rows.map(t => (0, s.jsxs)(c.P.div, {
                                            variants: r,
                                            className: "rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)]",
                                            children: [(0, s.jsx)("p", {
                                                className: "text-[15px] font-bold leading-snug text-slate-900 border-b border-slate-100 pb-2.5",
                                                children: t.feature
                                            }), (0, s.jsxs)("div", {
                                                className: "mt-3.5 space-y-3",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "rounded-xl border border-[var(--color-electric)]/15 bg-gradient-to-br from-[var(--color-accent-soft)]/50 to-white p-3.5 shadow-sm",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [(0, s.jsx)("span", {
                                                            "aria-hidden": !0,
                                                            className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_3px_8px_rgba(16,185,129,0.2)]",
                                                            children: (0, s.jsx)(n.A, {
                                                                className: "size-3 text-white",
                                                                strokeWidth: 3.5
                                                            })
                                                        }), (0, s.jsx)("span", {
                                                            className: "font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-electric)]",
                                                            children: e.ours
                                                        })]
                                                    }), (0, s.jsx)("p", {
                                                        className: "mt-2 text-[13px] font-semibold leading-snug text-slate-800",
                                                        children: t.ours
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "rounded-xl border border-slate-100 bg-slate-50/50 p-3.5",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [(0, s.jsx)("span", {
                                                            "aria-hidden": !0,
                                                            className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-100/50",
                                                            children: (0, s.jsx)(o.A, {
                                                                className: "size-2.5 text-rose-500",
                                                                strokeWidth: 3.5
                                                            })
                                                        }), (0, s.jsx)("span", {
                                                            className: "font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400",
                                                            children: e.theirsShort
                                                        })]
                                                    }), (0, s.jsx)("p", {
                                                        className: "mt-2 text-[13px] font-medium leading-snug text-slate-500",
                                                        children: t.theirs
                                                    })]
                                                })]
                                            })]
                                        }, t.feature))
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "hidden sm:block",
                                    children: [(0, s.jsxs)("div", {
                                        className: "grid grid-cols-[1.4fr_1fr_1fr]",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex items-center px-7 py-6",
                                            children: (0, s.jsx)("span", {
                                                className: "font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-foreground)]",
                                                children: e.featureHeading
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "relative bg-[linear-gradient(180deg,rgba(91,63,232,0.12),rgba(168,145,255,0.06))] px-6 pt-7 pb-5 text-center border-x border-t border-[var(--color-electric)]/15 rounded-t-2xl z-10 flex flex-col items-center justify-center gap-1.5",
                                            children: [(0, s.jsx)("div", {
                                                className: "rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-electric)] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(91,63,232,0.15)] whitespace-nowrap",
                                                children: "Recommended"
                                            }), (0, s.jsxs)("div", {
                                                className: "inline-flex items-center gap-1.5 font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-electric)]",
                                                children: [(0, s.jsx)(l.A, {
                                                    "aria-hidden": !0,
                                                    className: "size-[18px]",
                                                    strokeWidth: 2.25,
                                                    fill: "currentColor"
                                                }), e.ours]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "px-6 py-6 text-center flex items-center justify-center",
                                            children: (0, s.jsx)("span", {
                                                className: "font-sans text-base font-semibold leading-tight text-[var(--color-slate)]",
                                                children: e.theirs
                                            })
                                        })]
                                    }), (0, s.jsx)(c.P.div, {
                                        variants: t,
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: !0,
                                            margin: "-100px"
                                        },
                                        children: e.rows.map((t, a) => {
                                            let i = a === e.rows.length - 1;
                                            return (0, s.jsxs)(c.P.div, {
                                                variants: r,
                                                whileHover: {
                                                    backgroundColor: "rgba(91, 63, 232, 0.015)"
                                                },
                                                className: "grid grid-cols-[1.4fr_1fr_1fr] items-stretch border-t border-[rgba(13,13,13,0.06)] transition-colors duration-150",
                                                children: [(0, s.jsx)("div", {
                                                    className: "flex items-center px-7 py-5 text-base font-semibold leading-snug text-[var(--color-foreground)]",
                                                    children: t.feature
                                                }), (0, s.jsxs)("div", {
                                                    className: `flex flex-col items-center justify-center gap-1.5 bg-[linear-gradient(180deg,rgba(91,63,232,0.04),rgba(168,145,255,0.02))] px-6 py-5 text-center border-x border-[var(--color-electric)]/15 relative z-10 ${i?"rounded-b-2xl border-b border-b-[var(--color-electric)]/20":""}`,
                                                    children: [(0, s.jsx)("span", {
                                                        "aria-hidden": !0,
                                                        className: "inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_4px_12px_rgba(16,185,129,0.25)]",
                                                        children: (0, s.jsx)(n.A, {
                                                            className: "size-[13px] text-white",
                                                            strokeWidth: 3.5
                                                        })
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-sm font-semibold leading-snug text-slate-800",
                                                        children: t.ours
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center gap-1.5 px-6 py-5 text-center",
                                                    children: [(0, s.jsx)("span", {
                                                        "aria-hidden": !0,
                                                        className: "inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-100/50",
                                                        children: (0, s.jsx)(o.A, {
                                                            className: "size-3 text-rose-500",
                                                            strokeWidth: 3.5
                                                        })
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-sm font-medium leading-snug text-[var(--color-muted-foreground)]",
                                                        children: t.theirs
                                                    })]
                                                })]
                                            }, t.feature)
                                        })
                                    })]
                                })]
                            })
                        }), (0, s.jsx)(m.RevealSection, {
                            delayMs: 180,
                            children: (0, s.jsxs)("div", {
                                className: "mt-10 flex flex-col items-center gap-6 text-center",
                                children: [(0, s.jsx)("p", {
                                    className: "max-w-xl text-base font-medium text-[var(--color-dim)]",
                                    children: e.footnote
                                }), (0, s.jsx)(i(), {
                                    href: "/products",
                                    children: (0, s.jsx)(u.$, {
                                        size: "lg",
                                        className: "rounded-full",
                                        children: e.cta
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        78175: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => s
            });
            let s = {
                gifs: ["https://cdn.cutiepage.in/static/loading/loading1.gif", "https://cdn.cutiepage.in/static/loading/loading2.gif", "https://cdn.cutiepage.in/static/loading/loading3.gif", "https://cdn.cutiepage.in/static/loading/loading4.gif", "https://cdn.cutiepage.in/static/loading/loading5.gif", "https://cdn.cutiepage.in/static/loading/loading6.gif", "https://cdn.cutiepage.in/static/loading/loading7.gif"],
                messages: ["wait a few secs bro", "chill, its cooking", "one sec, pixels are getting dressed", "hold up, the vibe is loading", "brb, making it look expensive", "tiny internet goblins are working on it", "fun fact: octopuses have three hearts", "fun fact: bananas are berries, somehow", "fun fact: honey never really spoils", "lowkey loading something nice"]
            }
        },
        85120: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 77760)), Promise.resolve().then(r.bind(r, 14217)), Promise.resolve().then(r.bind(r, 1184)), Promise.resolve().then(r.bind(r, 21196)), Promise.resolve().then(r.bind(r, 29858)), Promise.resolve().then(r.bind(r, 24033)), Promise.resolve().then(r.bind(r, 51342)), Promise.resolve().then(r.bind(r, 63539)), Promise.resolve().then(r.bind(r, 4525)), Promise.resolve().then(r.t.bind(r, 99568, 23)), Promise.resolve().then(r.t.bind(r, 38137, 23))
        }
    },
    e => {
        e.O(0, [4339, 9568, 4327, 8137, 5283, 7754, 4360, 2334, 1381, 6752, 296, 2347, 5158, 7358], () => e(e.s = 85120)), _N_E = e.O()
    }
]);