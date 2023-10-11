(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_providers_tsx_b53fce._.js", {

"[project]/lib/redux/features/cartItemsSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "addCart": ()=>addCart,
    "addTotalCart": ()=>addTotalCart,
    "cartItemsSlice": ()=>cartItemsSlice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    cartItems: [],
    cartItemsId: {}
};
const cartItemsSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "cartItems",
    initialState,
    reducers: {
        addCart: (state, param)=>{
            let { payload } = param;
            let hasItem = state.cartItems.find((item)=>item.id === payload.id);
            if (hasItem) {
                hasItem.quantity = (hasItem.quantity || 0) + 1;
            } else {
                payload = {
                    ...payload,
                    quantity: 1
                };
                console.log(payload);
                state.cartItems.push(payload);
            }
        },
        addTotalCart: (state, param)=>{
            let { payload } = param;
            state.cartItems = payload;
        }
    }
});
const { addCart, addTotalCart } = cartItemsSlice.actions;

})()),
"[project]/lib/redux/features/paymentSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "paymentSlice": ()=>paymentSlice,
    "productPayment": ()=>productPayment,
    "productPaymentId": ()=>productPaymentId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const paymentSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "paymentsItems",
    initialState: {
        productPayment: {
            name: "",
            price: "",
            image: "",
            brand: ""
        },
        paymentId: null
    },
    reducers: {
        productPayment: (state, param)=>{
            let { payload } = param;
            state.productPayment = payload;
        },
        productPaymentId: (state, param)=>{
            let { payload } = param;
            state.paymentId = payload;
        }
    }
});
const { productPayment, productPaymentId } = paymentSlice.actions;
const __TURBOPACK__default__export__ = paymentSlice.reducer;

})()),
"[project]/lib/redux/service/orderApi.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "orderShopApi": ()=>orderShopApi,
    "useGetOrderQuery": ()=>useGetOrderQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const orderShopApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "orderShopApi",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api`
    }),
    endpoints: (build)=>({
            getOrder: build.query({
                query: (param)=>{
                    let { id } = param;
                    return `/shopOrder?UserId=${id}`;
                }
            })
        })
});
const { useGetOrderQuery } = orderShopApi;

})()),
"[project]/lib/redux/features/orderProduct.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "OrderProduct": ()=>OrderProduct,
    "change": ()=>change,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    value: "preparation"
};
const OrderProduct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "order",
    initialState,
    reducers: {
        change: (state)=>{
            if (state.value === "preparation") {
                state.value = "On the way";
            } else state.value = "Delivered";
        }
    }
});
const { change } = OrderProduct.actions;
const __TURBOPACK__default__export__ = OrderProduct.reducer;

})()),
"[project]/lib/redux/features/filterSlice.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "filterSlice": ()=>filterSlice,
    "setCategories": ()=>setCategories,
    "setName": ()=>setName
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const filterSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "filter",
    initialState: {
        name: "",
        categories: []
    },
    reducers: {
        setName: (state, param)=>{
            let { payload } = param;
            state.name = payload;
        },
        setCategories: (state, param)=>{
            let { payload } = param;
            state.categories = payload;
        }
    }
});
const { setName, setCategories } = filterSlice.actions;

})()),
"[project]/lib/redux/service/filtersAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "filters": ()=>filters,
    "useFiltersQueryQuery": ()=>useFiltersQueryQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const filters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: "/api"
    }),
    reducerPath: "filters",
    tagTypes: [
        "Filter"
    ],
    endpoints: (build)=>({
            filtersQuery: build.query({
                query: (param)=>{
                    let { category, minPrice, maxPrice, order, name } = param;
                    return `/products/filter?category=${category}&price=${minPrice}-${maxPrice}&order=${order}&name=${name}`;
                }
            })
        })
});
const { useFiltersQueryQuery } = filters;

})()),
"[project]/lib/redux/service/usersRegisterAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "usePostUserMutation": ()=>usePostUserMutation,
    "userApi": ()=>userApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const userApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "userApi",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$index$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api/users`
    }),
    endpoints: (builder)=>({
            postUser: builder.mutation({
                query: (body)=>({
                        url: "/register",
                        method: "POST",
                        body
                    })
            })
        })
});
const { usePostUserMutation } = userApi;

})()),
"[project]/lib/redux/service/categoriesAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "categoriesAPI": ()=>categoriesAPI,
    "useGetCategoriesQuery": ()=>useGetCategoriesQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const categoriesAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "categoriesAPI",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: "/api"
    }),
    endpoints: (build)=>({
            getCategories: build.query({
                query: ()=>"categories"
            })
        })
});
const { useGetCategoriesQuery } = categoriesAPI;

})()),
"[project]/lib/redux/service/productsAPI.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "productsApi": ()=>productsApi,
    "useGetProductQuery": ()=>useGetProductQuery,
    "useGetResultsQuery": ()=>useGetResultsQuery,
    "useNewPostMutation": ()=>useNewPostMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const productsApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: 'productsApi',
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: `/api/products`
    }),
    endpoints: (build)=>({
            getResults: build.query({
                query: (param)=>{
                    let { name } = param;
                    return `?name=${name}`;
                }
            }),
            getProduct: build.query({
                query: (param)=>{
                    let { id } = param;
                    return `/${id}`;
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
const { useNewPostMutation, useGetResultsQuery, useGetProductQuery } = productsApi;

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
                        url: "/cart/add",
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
                        url: `/cart/update`,
                        method: "PUT",
                        body
                    })
            }),
            delProductCart: build.mutation({
                query: (body)=>({
                        url: `/cart/delete`,
                        method: "DELETE",
                        body
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
        id: '',
        photoUrl: '',
        name: '',
        email: ''
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
    "useGetProfileQuery": ()=>useGetProfileQuery,
    "usePostProfileMutation": ()=>usePostProfileMutation
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
            }),
            postProfile: builder.mutation({
                query: (body)=>({
                        url: `/users/register`,
                        method: "POST",
                        body
                    })
            })
        })
});
const { useGetProfileQuery, usePostProfileMutation } = searchProfileAPI;

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
    "loadProducts": ()=>loadProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const itemsSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: "items",
    initialState: {
        products: [],
        newProduct: false,
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
const { loadProducts, loadErrors, isLoadingItems } = itemsSlice.actions;

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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/categoriesAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/usersRegisterAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/filtersAPI.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/filterSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/orderProduct.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/service/orderApi.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$paymentSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/paymentSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/redux/features/cartItemsSlice.ts (ecmascript)");
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
        filter: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$filterSlice$2e$ts__$28$ecmascript$29$__["filterSlice"].reducer,
        order: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__["OrderProduct"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["orderShopApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["orderShopApi"].reducer,
        OrderProduct: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$orderProduct$2e$ts__$28$ecmascript$29$__["OrderProduct"].reducer,
        payments: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$paymentSlice$2e$ts__$28$ecmascript$29$__["paymentSlice"].reducer,
        cartItems: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$features$2f$cartItemsSlice$2e$ts__$28$ecmascript$29$__["cartItemsSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__["filters"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__["filters"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["categoriesAPI"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["categoriesAPI"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$searchProfileAPI$2e$ts__$28$ecmascript$29$__["searchProfileAPI"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$productsAPI$2e$ts__$28$ecmascript$29$__["productsApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$filtersAPI$2e$ts__$28$ecmascript$29$__["filters"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$usersRegisterAPI$2e$ts__$28$ecmascript$29$__["userApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$cartProductsAPI$2e$ts__$28$ecmascript$29$__["cartProductsAPI"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$categoriesAPI$2e$ts__$28$ecmascript$29$__["categoriesAPI"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redux$2f$service$2f$orderApi$2e$ts__$28$ecmascript$29$__["orderShopApi"].middleware)
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

//# sourceMappingURL=lib_providers_tsx_b53fce._.js.map