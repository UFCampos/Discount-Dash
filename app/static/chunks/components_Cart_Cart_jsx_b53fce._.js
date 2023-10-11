(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_Cart_Cart_jsx_b53fce._.js", {

"[project]/components/Cart/Cart.jsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const Cart = ()=>{
    const data = [
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 2
        },
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 4
        },
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 6
        },
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            img: "a",
            price: 200,
            quantity: 1
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "max-w-md mx-auto",
        children: data.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
            children: "Empty"
        }, void 0, false, {
            fileName: "<[project]/components/Cart/Cart.jsx>",
            lineNumber: 58,
            columnNumber: 9
        }, this) : data.map((product, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-center p-4 my-4 border border-black rounded shadow backdrop-blur-md ",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "border border-gray-300 rounded mr-4",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                            src: "/images.jpg",
                            alt: "Product Image",
                            height: 100,
                            width: 100
                        }, void 0, false, {
                            fileName: "<[project]/components/Cart/Cart.jsx>",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Cart/Cart.jsx>",
                        lineNumber: 62,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ml-4 border-black",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: "text-xl font-bold text-gray-950",
                                children: product.name
                            }, void 0, false, {
                                fileName: "<[project]/components/Cart/Cart.jsx>",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-base text-gray-950",
                                children: [
                                    "$ ",
                                    product.price
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Cart/Cart.jsx>",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-800 mr-2 mb-2 ",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                            src: "/menos3.png",
                                            height: 10,
                                            width: 12
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Cart/Cart.jsx>",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Cart/Cart.jsx>",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",
                                        children: [
                                            "quantity: ",
                                            product.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Cart/Cart.jsx>",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-800 mr-2 mb-2",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                            src: "/anadir.png",
                                            height: 5,
                                            width: 12
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Cart/Cart.jsx>",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Cart/Cart.jsx>",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                        className: "text-black",
                                        children: [
                                            "total: ",
                                            product.quantity * product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Cart/Cart.jsx>",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Cart/Cart.jsx>",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Cart/Cart.jsx>",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    index < data.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("hr", {
                        className: "border-gray-300 mx-4"
                    }, void 0, false, {
                        fileName: "<[project]/components/Cart/Cart.jsx>",
                        lineNumber: 87,
                        columnNumber: 15
                    }, this) // Línea divisoria
                ]
            }, product.id, true, {
                fileName: "<[project]/components/Cart/Cart.jsx>",
                lineNumber: 61,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "<[project]/components/Cart/Cart.jsx>",
        lineNumber: 56,
        columnNumber: 5
    }, this);
};
_c = Cart;
const __TURBOPACK__default__export__ = Cart;
var _c;
__turbopack_refresh__.register(_c, "Cart");

})()),
}]);

//# sourceMappingURL=components_Cart_Cart_jsx_b53fce._.js.map