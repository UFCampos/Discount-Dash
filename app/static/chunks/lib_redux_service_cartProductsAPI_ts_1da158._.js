(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_service_cartProductsAPI_ts_1da158._.js", {

"[project]/lib/redux/service/cartProductsAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "cartProductsAPI": ()=>cartProductsAPI,
    "useAddProductCartMutation": ()=>useAddProductCartMutation,
    "useDelProductCartMutation": ()=>useDelProductCartMutation,
    "useGetProductsCartQuery": ()=>useGetProductsCartQuery,
    "usePutPrudctCartMutation": ()=>usePutPrudctCartMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const cartProductsAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: "/api"
    }),
    reducerPath: "cartProductsAPI",
    endpoints: (build)=>({
            addProductCart: build.mutation({
                query: (body)=>({
                        url: "/cart/add",
                        method: "POST",
                        body
                    })
            }),
            getProductsCart: build.query({
                query: (param)=>{
                    let { id } = param;
                    return `/cart?id=${id}`;
                }
            }),
            putPrudctCart: build.mutation({
                query: (body)=>({
                        url: `/cart/update`,
                        method: "PUT",
                        body
                    })
            }),
            delProductCart: build.mutation({
                query: (body)=>({
                        url: `/cart/delete`,
                        method: "DELETE",
                        body
                    })
            })
        })
});
const { useAddProductCartMutation, useGetProductsCartQuery, usePutPrudctCartMutation, useDelProductCartMutation } = cartProductsAPI;

})()),
}]);

//# sourceMappingURL=lib_redux_service_cartProductsAPI_ts_1da158._.js.map