(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_utils_tsx_f22fff._.js", {

"[project]/app/utils.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "signInProvider": ()=>signInProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const googleProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["GoogleAuthProvider"]();
const facebookProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FacebookAuthProvider"]();
const signInProvider = (event)=>{
    const value = event.currentTarget.value;
    const provider = value === "google" ? googleProvider : facebookProvider;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["signInWithPopup"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], provider);
};

})()),
}]);

//# sourceMappingURL=app_utils_tsx_f22fff._.js.map