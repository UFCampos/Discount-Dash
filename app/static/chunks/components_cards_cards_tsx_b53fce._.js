(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_cards_cards_tsx_b53fce._.js", {

"[project]/components/cards/cards.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2f$Card$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/card/Card.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/dist/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$paymentCardModal$2f$PaymentCardModal$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/paymentCardModal/PaymentCardModal.tsx (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const Cards = ()=>{
    _s();
    const paymentOrder = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.payments.productPayment);
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.items.products);
    const error = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.items.errorsItems);
    const loading = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.items.isLoadItems);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "cards flex flex-col items-center justify-center",
        children: [
            loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                    src: "/loading.gif",
                    alt: "Loading"
                }, void 0, false, {
                    fileName: "<[project]/components/cards/cards.tsx>",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/cards/cards.tsx>",
                lineNumber: 28,
                columnNumber: 9
            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "cards-cont flex flex-wrap justify-center items-center gap-4 p-4",
                children: error ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    children: "Not found"
                }, void 0, false, {
                    fileName: "<[project]/components/cards/cards.tsx>",
                    lineNumber: 34,
                    columnNumber: 13
                }, this) : (data?.map((item, index)=>{
                    {
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2f$Card$2e$tsx__$28$ecmascript$29$__["default"], {
                            itemId: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            brand: item.brand,
                            stock: item.stock
                        }, index, false, {
                            fileName: "<[project]/components/cards/cards.tsx>",
                            lineNumber: 39,
                            columnNumber: 19
                        }, this);
                    }
                }))
            }, void 0, false, {
                fileName: "<[project]/components/cards/cards.tsx>",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            paymentOrder.name !== "" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$paymentCardModal$2f$PaymentCardModal$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/cards/cards.tsx>",
                lineNumber: 54,
                columnNumber: 36
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "<[project]/components/cards/cards.tsx>",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(Cards, "7o65sPlYvxQdJEqIbvrW28+3v1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Cards;
const __TURBOPACK__default__export__ = Cards;
var _c;
__turbopack_refresh__.register(_c, "Cards");

})()),
}]);

//# sourceMappingURL=components_cards_cards_tsx_b53fce._.js.map