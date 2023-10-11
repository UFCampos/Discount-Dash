(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_forms_register_Register_tsx_b53fce._.js", {

"[project]/components/forms/register/Register.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/searchProfileAPI.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const Register = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const [newUser, setNewUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        id: ""
    });
    console.log(newUser);
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };
    const handleSubmit = ()=>{
        var _s = __turbopack_refresh__.signature();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["createUserWithEmailAndPassword"](__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["auth"], newUser.email, newUser.password).then(_s((userCredential)=>{
            _s();
            const user = userCredential.user;
            const uid = user.uid; // Aquí obtienes el UID del usuario
            setNewUser({
                ...newUser,
                id: uid
            });
            const [mutate, { data }] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["usePostProfileMutation"]();
            mutate({
                name: newUser.name,
                lastname: newUser.lastname,
                email: newUser.email,
                id: uid
            });
        }, "TFb64rpFVXr04jnlVO3voemMuqI=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["usePostProfileMutation"]
            ];
        })).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        setNewUser({
            name: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            id: ""
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: "Create your account"
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "",
                children: "Name: "
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                value: newUser.name,
                name: "name",
                onChange: handleChange
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "",
                children: "lastname"
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                value: newUser.lastname,
                name: "lastname",
                onChange: handleChange
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "",
                children: "Email: "
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                value: newUser.email,
                name: "email",
                onChange: handleChange
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "",
                children: "Password: "
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                value: newUser.password,
                name: "password",
                onChange: handleChange
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                htmlFor: "",
                children: "Confirm Password: "
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                value: newUser.confirmPassword,
                name: "confirmPassword",
                onChange: handleChange
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: handleSubmit,
                children: "Create"
            }, void 0, false, {
                fileName: "<[project]/components/forms/register/Register.tsx>",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/forms/register/Register.tsx>",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_s(Register, "zIwWXV5x1AZxkOfaL6RqXy5xgp4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Register;
const __TURBOPACK__default__export__ = Register;
var _c;
__turbopack_refresh__.register(_c, "Register");

})()),
}]);

//# sourceMappingURL=components_forms_register_Register_tsx_b53fce._.js.map