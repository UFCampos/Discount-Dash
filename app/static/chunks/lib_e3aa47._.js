(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_e3aa47._.js", {

"[project]/lib/redux/service/usersRegisterAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "usePostUserMutation": ()=>usePostUserMutation,
    "userApi": ()=>userApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const { NEXT_PUBLIC_BASE_URL } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__["default"].env;
const userApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "userApi",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `${NEXT_PUBLIC_BASE_URL}/api/users`
    }),
    endpoints: (builder)=>({
            postUser: builder.mutation({
                query: (user)=>({
                        url: "/register",
                        method: "POST",
                        body: user
                    })
            })
        })
});
const { usePostUserMutation } = userApi;

})()),
"[project]/lib/redux/service/productsAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "productsApi": ()=>productsApi,
    "useGetResultsQuery": ()=>useGetResultsQuery,
    "useNewPostMutation": ()=>useNewPostMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const { NEXT_PUBLIC_BASE_URL } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__["default"].env;
const productsApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: 'productsApi',
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `${NEXT_PUBLIC_BASE_URL}/api/products`
    }),
    endpoints: (build)=>({
            getResults: build.query({
                query: (param)=>{
                    let { name } = param;
                    return `?name=${name}`;
                }
            }),
            newPost: build.mutation({
                query: (body)=>({
                        url: '/postProduct',
                        method: 'POST',
                        body
                    })
            })
        })
});
const { useNewPostMutation, useGetResultsQuery } = productsApi;

})()),
"[project]/lib/redux/features/addProductCartSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "addCartProduct": ()=>addCartProduct,
    "addProductCartSlice": ()=>addProductCartSlice,
    "addToCart": ()=>addToCart,
    "removeFromCart": ()=>removeFromCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const addProductCartSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "addProductCart",
    initialState: {
        productCart: [],
        quantityCartID: {}
    },
    reducers: {
        addCartProduct: (state, param)=>{
            let { payload } = param;
            state.productCart = payload;
        },
        addToCart: (state, param)=>{
            let { payload } = param;
            const { productId, quantity } = payload;
            if (state.quantityCartID[productId]) {
                state.quantityCartID[productId] += quantity;
            } else {
                state.quantityCartID[productId] = quantity;
            }
        },
        removeFromCart: (state, param)=>{
            let { payload } = param;
            const { productId, quantity } = payload;
            if (state.quantityCartID[productId]) {
                if (state.quantityCartID[productId] <= 1) {
                    delete state.quantityCartID[productId];
                } else {
                    state.quantityCartID[productId] -= quantity;
                }
            }
        }
    }
});
const { addCartProduct, addToCart, removeFromCart } = addProductCartSlice.actions;

})()),
"[project]/lib/redux/service/cartProductsAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "cartProductsAPI": ()=>cartProductsAPI,
    "useAddProductCartMutation": ()=>useAddProductCartMutation,
    "useDelProductCartMutation": ()=>useDelProductCartMutation,
    "useGetProductsCartQuery": ()=>useGetProductsCartQuery,
    "usePutPrudctCartMutation": ()=>usePutPrudctCartMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const cartProductsAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: "/api"
    }),
    reducerPath: "cartProductsAPI",
    endpoints: (build)=>({
            addProductCart: build.mutation({
                query: (body)=>({
                        url: `/cart/add`,
                        method: "POST",
                        body
                    })
            }),
            getProductsCart: build.query({
                query: (param)=>{
                    let { id } = param;
                    return `/cart?id=${id}`;
                }
            }),
            putPrudctCart: build.mutation({
                query: (body)=>({
                        url: `/cart/${body.id}`,
                        method: "PUT",
                        body
                    })
            }),
            delProductCart: build.mutation({
                query: (id)=>({
                        url: `/cart/${id}`,
                        method: "DELETE"
                    })
            })
        })
});
const { useAddProductCartMutation, useGetProductsCartQuery, usePutPrudctCartMutation, useDelProductCartMutation } = cartProductsAPI;

})()),
"[project]/lib/redux/features/userProfile.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "setUser": ()=>setUser,
    "userProfileSlice": ()=>userProfileSlice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const userProfileSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "userProfile",
    initialState: {
        id: undefined,
        photoUrl: undefined,
        name: undefined,
        email: undefined
    },
    reducers: {
        setUser: (state, param)=>{
            let { payload } = param;
            state.id = payload.id, state.photoUrl = payload.photoUrl, state.name = payload.name, state.email = payload.email;
        }
    }
});
const { setUser } = userProfileSlice.actions;

})()),
"[project]/lib/redux/service/searchProfileAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "searchProfileAPI": ()=>searchProfileAPI,
    "useGetProfileQuery": ()=>useGetProfileQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const searchProfileAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "searchProfileAPI",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api`
    }),
    endpoints: (builder)=>({
            getProfile: builder.query({
                query: (param)=>{
                    let { id } = param;
                    return `/users/${id}`;
                }
            })
        })
});
const { useGetProfileQuery } = searchProfileAPI;

})()),
"[project]/lib/redux/features/menuSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "menuSlice": ()=>menuSlice,
    "toggleMenu": ()=>toggleMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const menuSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "menu",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
});
const { toggleMenu } = menuSlice.actions;

})()),
"[project]/lib/redux/features/itemsSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "isLoadingItems": ()=>isLoadingItems,
    "itemsSlice": ()=>itemsSlice,
    "loadErrors": ()=>loadErrors,
    "loadProducts": ()=>loadProducts,
    "refreshProducts": ()=>refreshProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const itemsSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "items",
    initialState: {
        products: [],
        errorsItems: false,
        isLoadItems: false
    },
    reducers: {
        loadProducts: (state, param)=>{
            let { payload } = param;
            state.products = payload;
        },
        loadErrors: (state, param)=>{
            let { payload } = param;
            state.errorsItems = payload;
        },
        isLoadingItems: (state, param)=>{
            let { payload } = param;
            state.isLoadItems = payload;
        }
    }
});
const { loadProducts, loadErrors, isLoadingItems, refreshProducts } = itemsSlice.actions;

})()),
"[project]/lib/redux/store.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/itemsSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/menuSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/searchProfileAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/userProfile.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/cartProductsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$addProductCartSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/addProductCartSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/productsAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/usersRegisterAPI.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["configureStore"]({
    reducer: {
        items: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$itemsSlice$2e$ts__$28$ecmascript$29$__["itemsSlice"].reducer,
        menu: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$menuSlice$2e$ts__$28$ecmascript$29$__["menuSlice"].reducer,
        userProfile: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$userProfile$2e$ts__$28$ecmascript$29$__["userProfileSlice"].reducer,
        addProductCart: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$addProductCartSlice$2e$ts__$28$ecmascript$29$__["addProductCartSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].middleware)
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$esm$2e$js__$28$ecmascript$29$__["setupListeners"](store.dispatch);

})()),
"[project]/lib/providers.tsx (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Providers": ()=>Providers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$store$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/store.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const Providers = (props)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$store$2e$ts__$28$ecmascript$29$__["store"],
        children: props.children
    }, void 0, false, {
        fileName: "<[project]/lib/providers.tsx>",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
_c = Providers;
var _c;
__turbopack_refresh__.register(_c, "Providers");

})()),
}]);

//# sourceMappingURL=lib_e3aa47._.js.map