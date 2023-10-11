(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_features_itemsSlice_ts_74f01b._.js", {

"[project]/lib/redux/features/itemsSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "isLoadingItems": ()=>isLoadingItems,
    "itemsSlice": ()=>itemsSlice,
    "loadErrors": ()=>loadErrors,
    "loadProducts": ()=>loadProducts,
    "refreshProducts": ()=>refreshProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const itemsSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "items",
    initialState: {
        products: [],
        errorsItems: false,
        isLoadItems: false
    },
    reducers: {
        loadProducts: (state, param)=>{
            let { payload } = param;
            state.products = payload;
        },
        loadErrors: (state, param)=>{
            let { payload } = param;
            state.errorsItems = payload;
        },
        isLoadingItems: (state, param)=>{
            let { payload } = param;
            state.isLoadItems = payload;
        },
        refreshProducts: (state, param)=>{
            let { payload } = param;
            const totalProducts = state.products.concat(payload);
            state.products = totalProducts;
        }
    }
});
const { loadProducts, loadErrors, isLoadingItems, refreshProducts } = itemsSlice.actions;

})()),
}]);

//# sourceMappingURL=lib_redux_features_itemsSlice_ts_74f01b._.js.map