(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_navBar_menu_Menu_tsx_b53fce._.js", {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navBar$2f$menu$2f$menu$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/navBar/menu/menu.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
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
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 19,
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
                                lineNumber: 25,
                                columnNumber: 36
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/addProduct",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: "Create Products"
                            }, void 0, false, {
                                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                                lineNumber: 26,
                                columnNumber: 38
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: "Item 3"
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/Menu.tsx>",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/navBar/menu/Menu.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(MenuButton, "Hp51z5l+kTu4JPldvAT0PFg+Zgs=", false, function() {
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
}]);

//# sourceMappingURL=components_navBar_menu_Menu_tsx_b53fce._.js.map