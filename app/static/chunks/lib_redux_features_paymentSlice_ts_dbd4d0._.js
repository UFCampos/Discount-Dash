(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_redux_features_paymentSlice_ts_dbd4d0._.js", {

"[project]/lib/redux/features/paymentSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "paymentSlice": ()=>paymentSlice,
    "productPayment": ()=>productPayment,
    "productPaymentId": ()=>productPaymentId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const paymentSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "paymentsItems",
    initialState: {
        productPayment: {
            name: "",
            price: "",
            image: "",
            brand: ""
        },
        paymentId: null
    },
    reducers: {
        productPayment: (state, param)=>{
            let { payload } = param;
            state.productPayment = payload;
        },
        productPaymentId: (state, param)=>{
            let { payload } = param;
            state.paymentId = payload;
        }
    }
});
const { productPayment, productPaymentId } = paymentSlice.actions;
const __TURBOPACK__default__export__ = paymentSlice.reducer;

})()),
}]);

//# sourceMappingURL=lib_redux_features_paymentSlice_ts_dbd4d0._.js.map