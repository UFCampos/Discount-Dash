(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_navBar_NavBar_tsx_81e33f._.js", {

"[project]/components/navBar/menu/menu.module.css (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "menu": "menu__menu__78906642",
  "menu-button-container": "menu-button-container__menu__78906642",
  "menuButton": "menuButton__menu__78906642",
});

})()),
"[project]/components/navBar/menu/Menu.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/menuSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/userProfile.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$menu$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/navBar/menu/menu.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
const MenuButton = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const isMenuOpen = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.menu.isOpen);
    const handleToggleMenu = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__["toggleMenu"]());
    };
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.userProfile);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["onAuthStateChanged"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], (user)=>{
            if (user) {
                let mappedUser = {};
                user.providerData.forEach((profile)=>{
                    mappedUser = {
                        id: profile.uid,
                        email: profile.email,
                        photoUrl: profile.photoURL,
                        name: profile.displayName
                    };
                });
                dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__["setUser"](mappedUser));
            }
        });
    }, [
        user,
        dispatch
    ]);
    const { id, name } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.userProfile);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: handleToggleMenu,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$menu$2e$module$2e$css__$28$css__module$29$__["default"].menuButton,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$menu$2e$module$2e$css__$28$css__module$29$__["default"].fotoMenu,
                    src: "/menu-abierto.png",
                    width: 50,
                    height: 50,
                    color: "with",
                    alt: "menu"
                }, void 0, false, {
                    fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$menu$2e$module$2e$css__$28$css__module$29$__["default"].menu,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/register",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: "Register"
                            }, void 0, false, {
                                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                                lineNumber: 51,
                                columnNumber: 36
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/addProduct",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: "Create Products"
                            }, void 0, false, {
                                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                                lineNumber: 52,
                                columnNumber: 38
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: `/users/profile/${id}`,
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: [
                                    "perfil: ",
                                    name
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                                lineNumber: 53,
                                columnNumber: 49
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_s(MenuButton, "ImYYR/wSVLQVY3hKS96tq/KQpiY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
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
    const { data, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useGetResultsQuery"]({
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
    console.log(data);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/dist/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
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
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const userUpdate = ()=>{
        location.reload();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["onAuthStateChanged"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], (user)=>{
            if (user) {
                setUser(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["signOut"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"]);
            }
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$navBar$2e$module$2e$css__$28$css__module$29$__["default"].navBar,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                href: "/home",
                className: "text-white",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["Image"], {
                    src: "/logopanda.svg",
                    width: 140,
                    height: 50,
                    alt: "Logo Panda"
                }, void 0, false, {
                    fileName: "<[project]/components/navBar/NavBar.tsx>",
                    lineNumber: 23,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$searchBar$2f$SearchBar$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$navBar$2e$module$2e$css__$28$css__module$29$__["default"].buttonsRight,
                children: [
                    user ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "text-white",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            children: "login"
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/NavBar.tsx>",
                            lineNumber: 29,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/navBar/NavBar.tsx>",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-white",
                        onClick: userUpdate,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            children: "logout"
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/NavBar.tsx>",
                            lineNumber: 30,
                            columnNumber: 76
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/navBar/NavBar.tsx>",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$Menu$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/navBar/NavBar.tsx>",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/navBar/NavBar.tsx>",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/navBar/NavBar.tsx>",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_s(NavBar, "e0c1bP1oqwE9ALxMyX11CFtqx68=");
_c = NavBar;
const __TURBOPACK__default__export__ = NavBar;
var _c;
__turbopack_refresh__.register(_c, "NavBar");

})()),
}]);

//# sourceMappingURL=components_navBar_NavBar_tsx_81e33f._.js.map