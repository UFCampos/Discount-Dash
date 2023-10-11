(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_navBar_NavBar_tsx_b53fce._.js", {

"[project]/components/navBar/menu/Menu.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/menuSlice.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const MenuButton = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const isOPen = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.menu.isOpen);
    const handleToggleMenu = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__["toggleMenu"]());
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "checkbox",
                checked: isOPen,
                id: "checkbox",
                onClick: handleToggleMenu
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "checkbox",
                className: "toggle",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bars",
                        id: "bar1"
                    }, void 0, false, {
                        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bars",
                        id: "bar2"
                    }, void 0, false, {
                        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bars",
                        id: "bar3"
                    }, void 0, false, {
                        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_s(MenuButton, "brFozmtsCRw7fPrEK3t/FGsbhJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = MenuButton;
const __TURBOPACK__default__export__ = MenuButton;
var _c;
__turbopack_refresh__.register(_c, "MenuButton");

})()),
"[project]/components/navBar/navBar.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "buttonsRight": "buttonsRight__navBar__28bcbf4e",
  "home": "home__navBar__28bcbf4e",
  "inactive": "inactive__navBar__28bcbf4e",
  "login": "login__navBar__28bcbf4e",
  "navBar": "navBar__navBar__28bcbf4e",
});

})()),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/productsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/itemsSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$searchBar$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/navBar/searchBar/searchBar.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/filterSlice.ts (ecmascript)");
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
const SearchBar = ()=>{
    _s();
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const handleChange = (event)=>{
        const value = event.target.value;
        setValue(value);
    };
    const { data, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetResultsQuery"]({
        name: value
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (value === "") {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["setName"](value));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadErrors"](isError));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["isLoadingItems"](isLoading));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
        }
    }, [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["setName"](value));
    }, [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["isLoadingItems"](isLoading));
        if (isLoading === false && isError === false) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
        }
    }, [
        isLoading
    ]);
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["setName"](value));
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["loadProducts"](data));
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$searchBar$2e$module$2e$css__$28$css__module$29$__["default"].input,
            type: "text",
            placeholder: "Search",
            onKeyDown: handleKeyDown,
            onChange: handleChange
        }, void 0, false, {
            fileName: "<[project]/components/navBar/searchBar/SearchBar.tsx>",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/navBar/searchBar/SearchBar.tsx>",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(SearchBar, "A2rFJewqAI2gB35VGPg5e4P/y5Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetResultsQuery"]
    ];
});
_c = SearchBar;
const __TURBOPACK__default__export__ = SearchBar;
var _c;
__turbopack_refresh__.register(_c, "SearchBar");

})()),
"[project]/components/navBar/NavBar.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$SearchBar$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/navBar/searchBar/SearchBar.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$navBar$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/navBar/navBar.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$Menu$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/navBar/menu/Menu.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/categoriesAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/filterSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/dist/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/userProfile.ts (ecmascript)");
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
;
;
;
;
;
const NavBar = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const [flag, setFlag] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    // const uid = useSelector((state) => state.userProfile.id);
    const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["useGetCategoriesQuery"](null);
    let uid;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["onAuthStateChanged"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], (user)=>{
            if (user) {
                // Utiliza el uid almacenado en el estado
                let mappedUser = {};
                user.providerData.forEach((profile)=>{
                    uid = user.uid;
                    mappedUser = {
                        id: uid ? uid : profile.uid,
                        email: profile.email,
                        photoUrl: profile.photoURL,
                        name: profile.displayName
                    };
                });
                dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__["setUser"](mappedUser));
                console.log(user);
            } else {
                setFlag(false);
            }
        });
    }, [
        uid
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["setCategories"](data);
    }, []);
    return pathname !== "/login" && pathname !== "/addProduct" && pathname !== "" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$navBar$2e$module$2e$css__$28$css__module$29$__["default"].navBar,
        id: "inactive",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-white",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                    src: "/logopanda.svg",
                    width: 140,
                    height: 50,
                    alt: "Logo Panda"
                }, void 0, false, {
                    fileName: "<[project]/components/navBar/NavBar.tsx>",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$SearchBar$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$navBar$2e$module$2e$css__$28$css__module$29$__["default"].buttonsRight,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$Menu$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/navBar/NavBar.tsx>",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/navBar/NavBar.tsx>",
        lineNumber: 57,
        columnNumber: 5
    }, this) : "";
};
_s(NavBar, "1htvPlJwXpl2ZsOLV+b+w0E/4CY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["useGetCategoriesQuery"]
    ];
});
_c = NavBar;
const __TURBOPACK__default__export__ = NavBar;
var _c;
__turbopack_refresh__.register(_c, "NavBar");

})()),
}]);

//# sourceMappingURL=components_navBar_NavBar_tsx_b53fce._.js.map