(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_service_searchProfileAPI_ts_42189b._.js", {

"[project]/lib/redux/service/searchProfileAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "searchProfileAPI": ()=>searchProfileAPI,
    "useGetProfileQuery": ()=>useGetProfileQuery,
    "usePostProfileMutation": ()=>usePostProfileMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const searchProfileAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "searchProfileAPI",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api`
    }),
    endpoints: (builder)=>({
            getProfile: builder.query({
                query: (param)=>{
                    let { id } = param;
                    return `/users/${id}`;
                }
            }),
            postProfile: builder.mutation({
                query: (body)=>({
                        url: `/users/register`,
                        method: "POST",
                        body
                    })
            })
        })
});
const { useGetProfileQuery, usePostProfileMutation } = searchProfileAPI;

})()),
}]);

//# sourceMappingURL=lib_redux_service_searchProfileAPI_ts_42189b._.js.map