(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_Orders_Orders_tsx_b53fce._.js", {

"[project]/components/Orders/Orders.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'next/image'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/orderProduct.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/orderApi.ts (ecmascript)");
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
const Order = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.order);
    // const {id} = useSelector((state)=> state.userProfile)
    const id = "6Ks3wWaq8zPnkqGZUhqK";
    const { data, isLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["useGetOrderQuery"]({
        id
    });
    const datos = [
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 2
        },
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 4
        },
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 6
        },
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            Image: "/hamburguesa.jpg",
            price: 200,
            quantity: 4
        }
    ];
    const [info, setInfo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    console.log(data);
    console.log(id);
    const handleStatusChange = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__["change"]());
    };
    const handleInfo = ()=>{
        if (info === false) {
            setInfo(true);
        } else {
            setInfo(false);
        }
    };
    const total = ()=>{
        let totalPrice = 0;
        datos.forEach((product)=>{
            const tot = product.price * product.quantity;
            totalPrice += tot;
        });
        return totalPrice;
    };
    console.log(total);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
        className: "text-black overflow-x-hidden overflow-y-auto h-screen bg-no-repeat",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "mx-20",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "container mx-auto p-4 ",
                children: isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    children: " Is Loading..."
                }, void 0, false, {
                    fileName: "<[project]/components/Orders/Orders.tsx>",
                    lineNumber: 96,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "card bg-gray-300 p-0 md:p-5 rounded-lg",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col md:flex-row justify-between px-3 top",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                        className: "relative",
                                        children: "YOUR ORDER"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col text-sm-right"
                                }, void 0, false, {
                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Orders/Orders.tsx>",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "col-12"
                            }, void 0, false, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Orders/Orders.tsx>",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-end flex-grow top mt-1",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-1/2 p-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex flex-wrap",
                                            children: info === false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-wrap",
                                                children: datos.slice(0, 4).map((product)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1/2 p-2 sm:w-1/4 md:w-1/2 lg:w-1/4",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "rounded",
                                                            src: product.Image,
                                                            width: 200,
                                                            height: 200,
                                                            alt: "img"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 118,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, product.id, false, {
                                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                                        lineNumber: 114,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this) : datos.map((product)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mb-4 ml-4",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "bg-white p-2 rounded-lg shadow-md mb-2 flex",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                                    className: "rounded",
                                                                    width: 150,
                                                                    height: 150,
                                                                    src: product.Image,
                                                                    alt: product.name
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                    lineNumber: 133,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 132,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-1/2 flex flex-col justify-center text-center",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                                        className: "text-lg font-semibold mb-2 inline-block",
                                                                        children: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                        lineNumber: 142,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-gray-700 mb-auto inline-block",
                                                                        children: [
                                                                            "Price: $",
                                                                            product.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                        lineNumber: 145,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-gray-700 mt-2 text-center inline-block",
                                                                        children: [
                                                                            "Quantity: ",
                                                                            product.quantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                        lineNumber: 148,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 141,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                                        lineNumber: 131,
                                                        columnNumber: 27
                                                    }, this)
                                                }, product.id, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 130,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "text-2xl font-bold mt-4 mb-2 text-center",
                                            children: [
                                                "Total: $",
                                                total()
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-start mt-2",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                                onClick: handleInfo,
                                                children: info === false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                    children: "More info..."
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 165,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                    children: "less info..."
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 167,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-1/2 p-4 justify-center",
                                    children: [
                                        status.value === "preparation" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-end top mt-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-green-400",
                                                            src: "/canasto1.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 178,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Processed"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 186,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 185,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-line w-1/2 border-t-2 border-transparent my-4 mt-6 mr-1"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 bg-yellow-200 rounded-full",
                                                            src: "/moto3.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order En Route"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 199,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 198,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 190,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-yellow w-1/2 border-t-2 border-transparent my-4 mt-6 mr-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 202,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-green-000",
                                                            src: "/completo.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Arrived"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 212,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 211,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 203,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 176,
                                            columnNumber: 21
                                        }, this),
                                        status.value === "On the way" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-end top mt-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-green-400 ",
                                                            src: "/canasto1.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 220,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Processed"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 228,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 227,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 219,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 231,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 bg-green-400 rounded-full",
                                                            src: "/moto3.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 233,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order En Route"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 241,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 240,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-line w-1/2 border-t-2 border-transparent my-4 mt-6 mr-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 244,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-yellow-200",
                                                            src: "/completo.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 246,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Arrived"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 254,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 253,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 218,
                                            columnNumber: 21
                                        }, this),
                                        status.value === "Delivered" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-end top mt-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-green-400 ",
                                                            src: "/canasto1.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Processed"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 270,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 269,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 261,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 bg-green-400 rounded-full",
                                                            src: "/moto3.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 275,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order En Route"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 283,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 282,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 274,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 286,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center icon-content",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Image, {
                                                            className: "w-14 h-14 mr-3 rounded-full bg-green-400",
                                                            src: "/completo.svg",
                                                            alt: "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 288,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold",
                                                                children: "Order Arrived"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                                lineNumber: 296,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                                            lineNumber: 295,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 287,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 260,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-end mt-2",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6",
                                                onClick: handleStatusChange,
                                                children: "Change Status"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Orders/Orders.tsx>",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Orders/Orders.tsx>",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Orders/Orders.tsx>",
                    lineNumber: 98,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Orders/Orders.tsx>",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Orders/Orders.tsx>",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Orders/Orders.tsx>",
        lineNumber: 92,
        columnNumber: 5
    }, this);
};
_s(Order, "8vOkB2QoWE1+noBtCzjs0QNULRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["useGetOrderQuery"]
    ];
});
_c = Order;
const __TURBOPACK__default__export__ = Order;
var _c;
__turbopack_refresh__.register(_c, "Order");

})()),
}]);

//# sourceMappingURL=components_Orders_Orders_tsx_b53fce._.js.map