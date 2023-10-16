(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_service_orderApi_ts_b70d3d._.js", {

"[project]/lib/redux/service/orderApi.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "orderShopApi": ()=>orderShopApi,
    "useGetOrderQuery": ()=>useGetOrderQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const orderShopApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "orderShopApi",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api`
    }),
    endpoints: (build)=>({
            getOrder: build.query({
                query: (param)=>{
                    let { id } = param;
                    return `/shopOrder?UserId=${id}`;
                }
            })
        })
});
const { useGetOrderQuery } = orderShopApi;

})()),
}]);

//# sourceMappingURL=lib_redux_service_orderApi_ts_b70d3d._.js.map