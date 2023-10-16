(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_features_filterSlice_ts_bce5fc._.js", {

"[project]/lib/redux/features/filterSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "filterSlice": ()=>filterSlice,
    "setCategories": ()=>setCategories,
    "setName": ()=>setName
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const filterSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "filter",
    initialState: {
        name: "",
        categories: []
    },
    reducers: {
        setName: (state, param)=>{
            let { payload } = param;
            state.name = payload;
        },
        setCategories: (state, param)=>{
            let { payload } = param;
            state.categories = payload;
        }
    }
});
const { setName, setCategories } = filterSlice.actions;

})()),
}]);

//# sourceMappingURL=lib_redux_features_filterSlice_ts_bce5fc._.js.map