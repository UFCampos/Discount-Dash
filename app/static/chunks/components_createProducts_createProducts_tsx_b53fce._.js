(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_createProducts_createProducts_tsx_b53fce._.js", {

"[project]/components/createProducts/Validations.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const Validation = (input)=>{
    let errors = {};
    if (!input.name) {
        errors.name = "Name is necessary";
    }
    if (!input.brand) {
        errors.brand = "Brand is necessary";
    }
    return errors;
};
_c = Validation;
const __TURBOPACK__default__export__ = Validation;
var _c;
__turbopack_refresh__.register(_c, "Validation");

})()),
"[project]/components/createProducts/createProducts.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/categoriesAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/productsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/firebase/config.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/filterSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/menuSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$createProducts$2f$Validations$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/createProducts/Validations.tsx (ecmascript)");
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
const CreateProducts = ()=>{
    _s();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"]();
    const isOpen = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"]((state)=>state.menu.isOpen);
    const { data: dataCategories } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["useGetCategoriesQuery"](null);
    const [newProduct, setNewProduct] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({
        name: '',
        normalPrice: '',
        price: '',
        stock: '',
        expiration: '',
        category: '',
        brand: ''
    });
    const [file, setFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [description, setDescription] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('');
    const [erros, setErrors] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({});
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };
    const handleError = (event)=>{
        setErrors(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$createProducts$2f$Validations$2e$tsx__$28$ecmascript$29$__["default"]({
            ...newProduct,
            [event.target.name]: event.target.value
        }));
    };
    const handleFileChange = (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };
    const handleDescriptionChange = (event)=>{
        setDescription(event.target.value);
    };
    const handleChangeSelect = (event)=>{
        setNewProduct({
            ...newProduct,
            category: event.target.value
        });
    };
    const [mutate, { data: mutationData }] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useNewPostMutation"]();
    const handleSend = async (event)=>{
        event.preventDefault();
        if (!file) {
            return;
        }
        const urlImage = await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$config$2e$ts__$28$ecmascript$29$__["uploadFile"](file);
        mutate({
            name: newProduct.name,
            price: newProduct.price,
            normalPrice: newProduct.normalPrice,
            description: description,
            expiration: newProduct.expiration,
            image: urlImage,
            stock: newProduct.stock,
            category: newProduct.category,
            brand: newProduct.brand
        });
        setFile(null);
        setNewProduct({
            name: '',
            price: '',
            stock: '',
            normalPrice: '',
            expiration: '',
            category: '',
            brand: ''
        });
        setDescription('');
        setTimeout(()=>{
            location.reload();
        }, 3000);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__["toggleMenu"]());
        }
        if (dataCategories) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["setCategories"](dataCategories));
        }
    }, [
        dispatch,
        dataCategories,
        isOpen
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "form-product-cont flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "back",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    href: '/home',
                    className: "flex items-center text-center",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "material-symbols-outlined",
                            children: "arrow_back "
                        }, void 0, false, {
                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        " Home"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/createProducts/createProducts.tsx>",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: "text-3xl p-4",
                children: "Create Product"
            }, void 0, false, {
                fileName: "<[project]/components/createProducts/createProducts.tsx>",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: handleSend,
                className: "form flex flex-col justify-end items-center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "form-info flex flex-col items-center justify-between",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "sup flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "sections-form",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name-brand flex flex-col items-start justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "name",
                                                    children: "Product name"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    placeholder: "Product name",
                                                    type: "text",
                                                    value: newProduct.name,
                                                    name: "name",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name-brand flex flex-col items-end justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "brand",
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    placeholder: "Brand",
                                                    type: "text",
                                                    value: newProduct.brand,
                                                    name: "brand",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "sections-form",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "price flex flex-col items-start justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "price",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    placeholder: "price",
                                                    type: "number",
                                                    value: newProduct.price,
                                                    name: "price",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "price flex flex-col items-end justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "normalPrice",
                                                    children: "Original price"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    placeholder: "original Price",
                                                    type: "number",
                                                    value: newProduct.normalPrice,
                                                    name: "normalPrice",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "sections-form",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "stock-expiration flex flex-col items-start justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "stock",
                                                    children: "Stock"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    placeholder: "stock",
                                                    type: "number",
                                                    value: newProduct.stock,
                                                    name: "stock",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "stock-expiration flex flex-col items-end justify-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    htmlFor: "expiration",
                                                    children: "Expiration date"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    className: "input-text",
                                                    type: "date",
                                                    value: newProduct.expiration,
                                                    name: "expiration",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "input-file flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                            type: "file",
                                            name: "image",
                                            onChange: handleFileChange
                                        }, void 0, false, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                                            value: newProduct.category,
                                            className: "select-category",
                                            onChange: handleChangeSelect,
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "categorias"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                dataCategories?.map((param, index)=>{
                                                    let { category } = param;
                                                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                        value: category,
                                                        children: category
                                                    }, index, false, {
                                                        fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "description-cont flex flex-col items-center justify-between",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    htmlFor: "description",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                                    className: "text-area",
                                    name: "description",
                                    value: description,
                                    onChange: handleDescriptionChange
                                }, void 0, false, {
                                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "send",
                            children: "Send"
                        }, void 0, false, {
                            fileName: "<[project]/components/createProducts/createProducts.tsx>",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/createProducts/createProducts.tsx>",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/createProducts/createProducts.tsx>",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/createProducts/createProducts.tsx>",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
_s(CreateProducts, "sP7K8w2dDcZVWNrGXABU32rVQog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$hooks$2e$ts__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["useGetCategoriesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["useNewPostMutation"]
    ];
});
_c = CreateProducts;
const __TURBOPACK__default__export__ = CreateProducts;
var _c;
__turbopack_refresh__.register(_c, "CreateProducts");

})()),
}]);

//# sourceMappingURL=components_createProducts_createProducts_tsx_b53fce._.js.map