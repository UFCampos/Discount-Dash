(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_Cart_Cart_tsx_b53fce._.js", {

"[project]/components/Cart/Carts.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "homeRigthCont": "homeRigthCont__Carts__8123cdb3",
});

})()),
"[project]/components/Cart/Cart.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/dist/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cart$2f$Carts$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/Cart/Carts.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/productsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/cartProductsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/cartItemsSlice.ts (ecmascript)");
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
const Cart = ()=>{
    _s();
    const [productId, setProductId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [flag, setFlag] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.userProfile.id);
    const { cartItems } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.cartItems);
    const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useGetProductsCartQuery"]({
        id: userId
    });
    const { data: product, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetProductQuery"]({
        id: productId
    });
    const [mutate1] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useDelProductCartMutation"]();
    const handleDelete = (productId)=>{
        // setProductId(productId);
        mutate1({
            cartItemId: productId,
            userId
        }).then(()=>{
            let newCart = cartItems?.filter((item)=>item?.id !== productId);
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["addTotalCart"](newCart));
        });
        setFlag(!flag);
    };
    const [mutate] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["usePutPrudctCartMutation"]();
    const handleAddCart = (productId, value)=>{
        setProductId(productId);
        mutate({
            cartItemId: productId,
            userId,
            value
        });
        if (value === "add") {
            let newCart = cartItems?.map((item)=>{
                if (item?.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["addTotalCart"](newCart));
        } else {
            let newCart = cartItems?.map((item)=>{
                if (item?.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["addTotalCart"](newCart));
        }
    };
    let total = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["addTotalCart"](data));
        console.log("UserId cambió a: " + userId + ", pero el length es undefined? Length:", data?.length);
        console.log(cartItems);
    }, [
        data,
        flag
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cart$2f$Carts$2e$module$2e$css__$28$css__module$29$__["default"].homeRigthCont,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "max-w-md mx-auto overflow-y-auto overflow-hidden",
            children: [
                cartItems?.map((product, index)=>{
                    {
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center p-2 mr-2 my-2 ml-2 border border-black rounded shadow backdrop-blur-md bg-gray-50 ",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "border border-gray-300 rounded mr-2 ",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                                        src: product?.image,
                                        alt: "Product Image",
                                        height: 80,
                                        width: 80
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Cart/Cart.tsx>",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>handleDelete(product?.id),
                                    children: "x"
                                }, void 0, false, {
                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "ml-2 border-black   5",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "text-lg font-bold text-gray-950",
                                            children: product?.name
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Cart/Cart.tsx>",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-950",
                                            children: [
                                                "$",
                                                product?.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Cart/Cart.tsx>",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mt-1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    className: "bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1",
                                                    onClick: ()=>handleAddCart(product?.id, "decrement"),
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                                                        src: "/menos3.png",
                                                        height: 8,
                                                        width: 10,
                                                        alt: "image"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Cart/Cart.tsx>",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                    className: "inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mr-1",
                                                    children: product?.quantity
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    onClick: ()=>handleAddCart(product?.id, "add"),
                                                    className: "bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                                                        src: "/anadir.png",
                                                        height: 3,
                                                        width: 10,
                                                        alt: "image"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Cart/Cart.tsx>",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                    className: "text-black text-lg",
                                                    children: [
                                                        "Total:",
                                                        " ",
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                            className: "font-bold text-lg",
                                                            children: [
                                                                "$",
                                                                total = product?.quantity * product?.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/components/Cart/Cart.tsx>",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Cart/Cart.tsx>",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                index < cartItems.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("hr", {
                                    className: "border-gray-300 mx-2"
                                }, void 0, false, {
                                    fileName: "<[project]/components/Cart/Cart.tsx>",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, this) // Línea divisoria
                            ]
                        }, product.id, true, {
                            fileName: "<[project]/components/Cart/Cart.tsx>",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this);
                    }
                }),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-right mt-4",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        className: "text-lg font-bold text-gray-950",
                        children: [
                            "Total: $",
                            cartItems?.reduce((acc, item)=>total + parseInt(`${item.price}`), 0)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Cart/Cart.tsx>",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Cart/Cart.tsx>",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mt-4",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                        children: "Buy"
                    }, void 0, false, {
                        fileName: "<[project]/components/Cart/Cart.tsx>",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Cart/Cart.tsx>",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Cart/Cart.tsx>",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Cart/Cart.tsx>",
        lineNumber: 89,
        columnNumber: 5
    }, this);
};
_s(Cart, "MCe7uRmYUjYWmBZ8tEHuEb/MYkE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useGetProductsCartQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetProductQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["useDelProductCartMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["usePutPrudctCartMutation"]
    ];
});
_c = Cart;
const __TURBOPACK__default__export__ = Cart;
var _c;
__turbopack_refresh__.register(_c, "Cart");

})()),
}]);

//# sourceMappingURL=components_Cart_Cart_tsx_b53fce._.js.map