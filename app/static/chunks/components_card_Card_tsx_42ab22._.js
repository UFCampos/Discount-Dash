(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_card_Card_tsx_42ab22._.js", {

"[project]/components/card/Card.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/cartProductsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/cartItemsSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$paymentSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/paymentSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/productsAPI.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const Card = (param)=>{
    let { itemId, name, brand, image, price, stock } = param;
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.payments.productPayment);
    const paymentId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.payments.paymentId);
    const [mutate] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useAddProductCartMutation"]();
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.userProfile);
    const { cartItems } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.cartItems);
    const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useGetProductsCartQuery"]({
        id
    });
    const { data: product, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetProductQuery"]({
        id: itemId
    });
    const handleAddCart = ()=>{
        mutate({
            itemId,
            userId: id
        });
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["addCart"](product));
    };
    const createPreference = async ()=>{
        try {
            const URL = ``;
            console.log(URL);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].post(`${URL}/api/products/buyProduct`, {
                itemId: itemId,
                description: name,
                price: price,
                quantity: 1
            });
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };
    const handleBuy = async ()=>{
        const id = await createPreference();
        if (id) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$paymentSlice$2e$ts__$28$ecmascript$29$__["productPayment"]({
                image: image,
                name: name,
                price: price,
                brand: brand
            }));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$paymentSlice$2e$ts__$28$ecmascript$29$__["productPaymentId"](id));
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "card flex flex-col",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "card-img flex justify-center items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                        src: image
                    }, void 0, false, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: "vence en 5 dias"
                    }, void 0, false, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/card/Card.tsx>",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "card-info flex flex-col",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: `home/product/${itemId}`,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                            className: "text-center",
                            children: name
                        }, void 0, false, {
                            fileName: "<[project]/components/card/Card.tsx>",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "rate flex flex-row justify-center gap-4 items-center",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: " ⭐ 4.5"
                            }, void 0, false, {
                                fileName: "<[project]/components/card/Card.tsx>",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: brand
                            }, void 0, false, {
                                fileName: "<[project]/components/card/Card.tsx>",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "price flex flex-row justify-center items-center gap-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "total",
                                children: "$ 5500"
                            }, void 0, false, {
                                fileName: "<[project]/components/card/Card.tsx>",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: [
                                    "$ ",
                                    price
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/card/Card.tsx>",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/card/Card.tsx>",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "card-buy flex flex-row justify-evenly items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "buy",
                        onClick: handleBuy,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "Buy"
                        }, void 0, false, {
                            fileName: "<[project]/components/card/Card.tsx>",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "cart flex flex-col justify-center items-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: ()=>handleAddCart(),
                            className: "material-symbols-outlined text-center",
                            children: "shopping_cart"
                        }, void 0, false, {
                            fileName: "<[project]/components/card/Card.tsx>",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/card/Card.tsx>",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/card/Card.tsx>",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/card/Card.tsx>",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
_s(Card, "6aZO68R5RPBOXoC7HA8HazxM3ms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useAddProductCartMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useGetProductsCartQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetProductQuery"]
    ];
});
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_refresh__.register(_c, "Card");

})()),
}]);

//# sourceMappingURL=components_card_Card_tsx_42ab22._.js.map