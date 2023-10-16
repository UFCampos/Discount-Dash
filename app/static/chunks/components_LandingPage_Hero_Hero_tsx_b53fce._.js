(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_LandingPage_Hero_Hero_tsx_b53fce._.js", {

"[project]/components/LandingPage/Hero/Hero.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "active": "active__Hero__6649211b",
  "imagenContainer": "imagenContainer__Hero__6649211b",
  "slider": "slider__Hero__6649211b",
});

})()),
"[project]/components/LandingPage/Hero/Hero.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LandingPage$2f$Hero$2f$Hero$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/LandingPage/Hero/Hero.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Hero = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const imagen = [
        {
            src: '/hamburguesa.jpg',
            wi: 300,
            he: 200
        },
        {
            src: '/empanadas2.jpeg',
            wi: 300,
            he: 200
        },
        {
            src: '/helado.jpeg',
            wi: 300,
            he: 200
        },
        {
            src: '/images.jpg',
            wi: 300,
            he: 200
        }
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            // Cambiar automáticamente a la siguiente imagen
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % imagen.length);
        }, 5000); // Cambiar cada 5 segundos
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
            className: "text-gray-500 bg-gray-900 body-font py-10 text-center overflow-x-hidden",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LandingPage$2f$Hero$2f$Hero$2e$module$2e$css__$28$css__module$29$__["default"].slider,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LandingPage$2f$Hero$2f$Hero$2e$module$2e$css__$28$css__module$29$__["default"].imageList,
                        children: imagen.map((product, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LandingPage$2f$Hero$2f$Hero$2e$module$2e$css__$28$css__module$29$__["default"].slide,
                                style: {
                                    transform: `translateX(-${100 * currentIndex}%)`
                                },
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LandingPage$2f$Hero$2f$Hero$2e$module$2e$css__$28$css__module$29$__["default"].imagenContainer,
                                    src: product.src,
                                    width: product.wi,
                                    height: product.he,
                                    alt: "img"
                                }, void 0, false, {
                                    fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container mx-auto flex px-5 py-1 items-center justify-center flex-col",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "text-center lg:w-2/3 w-full",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: "title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
                            }, void 0, false, {
                                fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "leading-relaxed mb-8",
                                children: "Welcome to the app where you can buy a lot of things at a very nice price"
                            }, void 0, false, {
                                fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        href: "/home",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                            className: "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                                            children: "Market"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",
                                        children: "Restaurant"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/LandingPage/Hero/Hero.tsx>",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_s(Hero, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");

})()),
}]);

//# sourceMappingURL=components_LandingPage_Hero_Hero_tsx_b53fce._.js.map