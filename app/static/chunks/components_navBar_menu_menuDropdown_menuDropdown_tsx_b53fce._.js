(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_navBar_menu_menuDropdown_menuDropdown_tsx_b53fce._.js", {

"[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
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
const MenuDropdown = ()=>{
    _s();
    const [flag, setFlag] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"].currentUser;
    const logOut = ()=>{
        location.reload();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["signOut"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"]);
        setFlag(false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["onAuthStateChanged"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], (user)=>{
            if (user) {
                setFlag(true);
            } else {
                false;
            }
        });
    }, [
        user
    ]);
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.userProfile);
    const isOpen = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.menu.isOpen);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: isOpen ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("aside", {
            className: "menu-dropdown flex flex-row items-center justify-end",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "menu-cont flex flex-col items-center justify-start",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                        pathname === "/home" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "active",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/home",
                                children: "Products"
                            }, void 0, false, {
                                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                lineNumber: 39,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 38,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/home",
                                children: "Products"
                            }, void 0, false, {
                                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                lineNumber: 43,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this),
                        pathname === "/addProduct" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "active",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: "/addProduct",
                                    children: "Create product"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: " add"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 50,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 48,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: "/addProduct",
                                    children: "Create product"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 54,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: " add"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this),
                        pathname === "users/profile" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "active",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: `/users/profile`,
                                    children: "Profile "
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: [
                                        " ",
                                        "account_circle"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 59,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: `/users/profile/${id}`,
                                    children: "Profile "
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: [
                                        " ",
                                        "account_circle"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 69,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this),
                        pathname === "/about" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "active",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                children: [
                                    "About",
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "material-symbols-outlined",
                                        children: "diversity_3"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                        lineNumber: 79,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                lineNumber: 77,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 76,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    children: "About "
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: "diversity_3"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 87,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 85,
                            columnNumber: 17
                        }, this),
                        pathname === "/register" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "active",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    children: "Register "
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: " person_add"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 93,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 91,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    children: "Register "
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "material-symbols-outlined",
                                    children: " person_add"
                                }, void 0, false, {
                                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 96,
                            columnNumber: 17
                        }, this),
                        !flag ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                children: [
                                    "login",
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "material-symbols-outlined",
                                        children: "login"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                lineNumber: 103,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 102,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: logOut,
                                className: "text-center",
                                children: [
                                    "logout",
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "material-symbols-outlined",
                                        children: "login"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                        lineNumber: 112,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                                lineNumber: 110,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                            lineNumber: 109,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                    lineNumber: 36,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
                lineNumber: 35,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/navBar/menu/menuDropdown/menuDropdown.tsx>",
            lineNumber: 34,
            columnNumber: 9
        }, this) : ""
    }, void 0, false);
};
_s(MenuDropdown, "Wlsqh7lFJ1aBwdN+vOBb9vWjyI8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = MenuDropdown;
const __TURBOPACK__default__export__ = MenuDropdown;
var _c;
__turbopack_refresh__.register(_c, "MenuDropdown");

})()),
}]);

//# sourceMappingURL=components_navBar_menu_menuDropdown_menuDropdown_tsx_b53fce._.js.map