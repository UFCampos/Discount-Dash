(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_Orders_Orders_tsx_c5b354._.js", {

"[project]/components/Orders/Orders.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript)");
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
const Orders = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.order);
    // const {id} = useSelector((state)=> state.userProfile)
    const id = [
        {
            id: "6Ks3wWaq8zPnkqGZUhqK"
        }
    ];
    const { data, error, isLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["useGetOrderQuery"]({
        id
    });
    const datos = [
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 2
        },
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 4
        },
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 6
        },
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 1
        },
        {
            id: 1,
            name: "cocacola",
            Image: "a",
            price: 200,
            quantity: 1
        }
    ];
    const [info, setInfo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    console.log(data);
    const handleStatusChange = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__["change"]());
    };
    const handleInfo = ()=>{
        if (info === false) setInfo(true);
        else setInfo(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
        className: "text-black overflow-x-hidden overflow-y-auto h-screen bg-indigo-400 bg-no-repeat",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto p-4 ",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "card bg-gray-300 p-0 md:p-5 rounded-lg",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-col md:flex-row justify-between px-3 top",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                        children: "YOUR ORDER"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.name
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.image
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.description
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.expiration
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.category
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                children: data?.brand
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col text-sm-right"
                            }, void 0, false, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Orders/Orders.tsx>",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "col-12"
                        }, void 0, false, {
                            fileName: "<[project]/components/Orders/Orders.tsx>",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Orders/Orders.tsx>",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-1/2 p-4",
                        children: [
                            status.value === "preparation" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-end top mt-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-green-400 ",
                                                src: "/canasto1.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Processed"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 bg-yellow-200 rounded-full",
                                                src: "/moto3.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order En Route"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-green-000",
                                                src: "/completo.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Arrived"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            status.value === "On the way" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-end top mt-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-green-400 ",
                                                src: "/canasto1.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 136,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Processed"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 138,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 137,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 135,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 bg-green-400 rounded-full",
                                                src: "/moto3.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 143,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order En Route"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 145,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 144,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 142,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 148,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-yellow-200",
                                                src: "/completo.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Arrived"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 152,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 151,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this),
                            status.value === "Delivered" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-end top mt-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-green-400 ",
                                                src: "/canasto1.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 160,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Processed"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 162,
                                                    columnNumber: 28
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 161,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 159,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 165,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 bg-green-400 rounded-full",
                                                src: "/moto3.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 167,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order En Route"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 169,
                                                    columnNumber: 28
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 168,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 166,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "line-horizontal w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 172,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col items-center icon-content",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "w-14 h-14 mr-3 rounded-full bg-green-400",
                                                src: "/completo.svg",
                                                alt: "",
                                                width: 300,
                                                height: 300
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 174,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold",
                                                    children: "Order Arrived"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Orders/Orders.tsx>",
                                                    lineNumber: 176,
                                                    columnNumber: 28
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                                lineNumber: 175,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Orders/Orders.tsx>",
                                        lineNumber: 173,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Orders/Orders.tsx>",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Orders/Orders.tsx>",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "btn-change-status",
                        onClick: handleInfo,
                        children: " More info..."
                    }, void 0, false, {
                        fileName: "<[project]/components/Orders/Orders.tsx>",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "btn-change-status",
                        onClick: handleStatusChange,
                        children: "Change Status"
                    }, void 0, false, {
                        fileName: "<[project]/components/Orders/Orders.tsx>",
                        lineNumber: 183,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/Orders/Orders.tsx>",
                lineNumber: 88,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Orders/Orders.tsx>",
            lineNumber: 87,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Orders/Orders.tsx>",
        lineNumber: 86,
        columnNumber: 7
    }, this);
};
_s(Orders, "jULSuidSDbZ1WHlUj7BysNvCI10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["useGetOrderQuery"]
    ];
});
_c = Orders;
const __TURBOPACK__default__export__ = Orders;
var _c;
__turbopack_refresh__.register(_c, "Orders");

})()),
}]);

//# sourceMappingURL=components_Orders_Orders_tsx_c5b354._.js.map