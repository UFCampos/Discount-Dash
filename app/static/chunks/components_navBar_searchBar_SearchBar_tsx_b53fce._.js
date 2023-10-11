(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_navBar_searchBar_SearchBar_tsx_b53fce._.js", {

"[project]/components/navBar/searchBar/searchBar.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "input": "input__searchBar__3911e798",
});

})()),
"[project]/components/navBar/searchBar/SearchBar.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchBarAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/searchBarAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/itemsSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$searchBar$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/navBar/searchBar/searchBar.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const SearchBar = ()=>{
    _s();
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const handleChange = (event)=>{
        const value = event.target.value;
        setValue(value);
    };
    const { data, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchBarAPI$2e$ts__$28$ecmascript$29$__["useGetResultsQuery"]({
        name: value
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (value === "") {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadErrors"](isError));
        }
    }, [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["isLoadingItems"](isLoading));
        if (isLoading === false) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
        }
    }, [
        isLoading
    ]);
    const handleKeyUp = (event)=>{
        if (event.key === "Enter") {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["isLoadingItems"](isLoading));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadErrors"](isError));
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$searchBar$2e$module$2e$css__$28$css__module$29$__["default"].input,
            type: "text",
            placeholder: "Search",
            onKeyUp: handleKeyUp,
            onChange: handleChange
        }, void 0, false, {
            fileName: "<[project]/components/navBar/searchBar/SearchBar.tsx>",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/navBar/searchBar/SearchBar.tsx>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(SearchBar, "oXDZZckzTXW+H1/jBBOQMH8Iduc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchBarAPI$2e$ts__$28$ecmascript$29$__["useGetResultsQuery"]
    ];
});
_c = SearchBar;
const __TURBOPACK__default__export__ = SearchBar;
var _c;
__turbopack_refresh__.register(_c, "SearchBar");

})()),
}]);

//# sourceMappingURL=components_navBar_searchBar_SearchBar_tsx_b53fce._.js.map