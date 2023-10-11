(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_features_orderProduct_ts_756ee1._.js", {

"[project]/lib/redux/features/orderProduct.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "OrderProduct": ()=>OrderProduct,
    "change": ()=>change,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    value: "preparation"
};
const OrderProduct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "order",
    initialState,
    reducers: {
        change: (state)=>{
            if (state.value === "preparation") {
                state.value = "On the way";
            } else state.value = "Delivered";
        }
    }
});
const { change } = OrderProduct.actions;
const __TURBOPACK__default__export__ = OrderProduct.reducer;

})()),
}]);

//# sourceMappingURL=lib_redux_features_orderProduct_ts_756ee1._.js.map