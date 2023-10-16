(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_filters_Filters_tsx_ef4bdd._.js", {

"[project]/components/filters/Filters.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "apply": "apply__Filters__eaee8b00",
  "catCont": "catCont__Filters__eaee8b00",
  "catTitle": "catTitle__Filters__eaee8b00",
  "divPrice": "divPrice__Filters__eaee8b00",
  "filterCont": "filterCont__Filters__eaee8b00",
  "price": "price__Filters__eaee8b00",
  "priceCont": "priceCont__Filters__eaee8b00",
  "selectCat": "selectCat__Filters__eaee8b00",
  "separation": "separation__Filters__eaee8b00",
  "titlePrice": "titlePrice__Filters__eaee8b00",
});

})()),
"[project]/components/filters/FiltersCategories.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/filters/Filters.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const FiltersCategories = (param)=>{
    let { valueState, onChange } = param;
    const category = [
        "breakfast",
        "beverages",
        "snacks",
        "dairy"
    ].map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
            value: item,
            children: item
        }, item, false, {
            fileName: "<[project]/components/filters/FiltersCategories.tsx>",
            lineNumber: 14,
            columnNumber: 15
        }, this));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].catCont,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "category",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].catTitle,
                children: "Categories"
            }, void 0, false, {
                fileName: "<[project]/components/filters/FiltersCategories.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                name: "category",
                value: valueState.category,
                onChange: onChange,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].selectCat,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                        value: "",
                        children: "Select a category"
                    }, void 0, false, {
                        fileName: "<[project]/components/filters/FiltersCategories.tsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    category
                ]
            }, void 0, true, {
                fileName: "<[project]/components/filters/FiltersCategories.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/filters/FiltersCategories.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = FiltersCategories;
const __TURBOPACK__default__export__ = FiltersCategories;
var _c;
__turbopack_refresh__.register(_c, "FiltersCategories");

})()),
"[project]/components/filters/FilterSort.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/filters/Filters.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const FiltersSort = (param)=>{
    let { valueState, onChange } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].catCont,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                    htmlFor: "order",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].catTitle,
                    children: "Sort By:"
                }, void 0, false, {
                    fileName: "<[project]/components/filters/FilterSort.tsx>",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                    name: "order",
                    value: valueState.order,
                    onChange: onChange,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].selectCat,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: "",
                            children: "None"
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FilterSort.tsx>",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: "lower",
                            children: "Price (Low to High)"
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FilterSort.tsx>",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: "higher",
                            children: "Price (High to Low)"
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FilterSort.tsx>",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: "name_asc",
                            children: "Name (A to Z)"
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FilterSort.tsx>",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: "name_desc",
                            children: "Name (Z to A)"
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FilterSort.tsx>",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/filters/FilterSort.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/filters/FilterSort.tsx>",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/filters/FilterSort.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = FiltersSort;
const __TURBOPACK__default__export__ = FiltersSort;
var _c;
__turbopack_refresh__.register(_c, "FiltersSort");

})()),
"[project]/components/filters/FiltersPrice.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/filters/Filters.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const FiltersPrice = (param)=>{
    let { valueState, onChange } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].titlePrice,
                children: "Price"
            }, void 0, false, {
                fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].priceCont,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].divPrice,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].price,
                            placeholder: "min",
                            type: "number",
                            id: "minPrice",
                            name: "minPrice",
                            value: valueState.minPrice,
                            onChange: onChange
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].separation
                    }, void 0, false, {
                        fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].divPrice,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].price,
                            placeholder: "max",
                            type: "number",
                            id: "maxPrice",
                            name: "maxPrice",
                            value: valueState.maxPrice,
                            onChange: onChange
                        }, void 0, false, {
                            fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/filters/FiltersPrice.tsx>",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/filters/FiltersPrice.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = FiltersPrice;
const __TURBOPACK__default__export__ = FiltersPrice;
var _c;
__turbopack_refresh__.register(_c, "FiltersPrice");

})()),
"[project]/components/filters/Filters.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/filtersAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FiltersPrice$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/filters/FiltersPrice.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FilterSort$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/filters/FilterSort.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FiltersCategories$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/filters/FiltersCategories.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/itemsSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/filters/Filters.module.css (css module)");
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
;
;
const Filters = ()=>{
    _s();
    const nameSearch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.filter.name);
    const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({
        category: "",
        order: "",
        name: "",
        minPrice: "",
        maxPrice: ""
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setValueState({
            ...valueState,
            name: nameSearch
        });
    }, [
        nameSearch
    ]);
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const onChange = (event)=>{
        const { name, value } = event.target;
        setValueState((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const { data, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__["useFiltersQueryQuery"]({
        category: valueState.category,
        minPrice: valueState.minPrice === "" ? "0" : valueState.minPrice,
        maxPrice: valueState.maxPrice === "" ? "10000000" : valueState.maxPrice,
        order: valueState.order,
        name: valueState.name
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{}, [
        valueState
    ]);
    const handleFilters = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadErrors"](isError));
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].filterCont,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FiltersCategories$2e$tsx__$28$ecmascript$29$__["default"], {
                valueState: valueState,
                onChange: onChange
            }, void 0, false, {
                fileName: "<[project]/components/filters/Filters.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FiltersPrice$2e$tsx__$28$ecmascript$29$__["default"], {
                valueState: valueState,
                onChange: onChange
            }, void 0, false, {
                fileName: "<[project]/components/filters/Filters.tsx>",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$FilterSort$2e$tsx__$28$ecmascript$29$__["default"], {
                valueState: valueState,
                onChange: onChange
            }, void 0, false, {
                fileName: "<[project]/components/filters/Filters.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: handleFilters,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$filters$2f$Filters$2e$module$2e$css__$28$css__module$29$__["default"].apply,
                children: "Apply"
            }, void 0, false, {
                fileName: "<[project]/components/filters/Filters.tsx>",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/filters/Filters.tsx>",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(Filters, "7LKSjshEXUI3Yjt5c6jGCMGzkSk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__["useFiltersQueryQuery"]
    ];
});
_c = Filters;
const __TURBOPACK__default__export__ = Filters;
var _c;
__turbopack_refresh__.register(_c, "Filters");

})()),
}]);

//# sourceMappingURL=components_filters_Filters_tsx_ef4bdd._.js.map