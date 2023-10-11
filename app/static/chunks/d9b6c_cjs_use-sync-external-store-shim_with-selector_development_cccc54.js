(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/d9b6c_cjs_use-sync-external-store-shim_with-selector_development_cccc54.js", {

"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)");
        var shim = __turbopack_require__("[project]/node_modules/use-sync-external-store/shim/index.js (ecmascript)");
        /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
            ;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        // for CommonJS interop.
        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.
        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            // Use this to track the rendered snapshot.
            var instRef = useRef(null);
            var inst;
            if (instRef.current === null) {
                inst = {
                    hasValue: false,
                    value: null
                };
                instRef.current = inst;
            } else {
                inst = instRef.current;
            }
            var _useMemo = useMemo(function() {
                // Track the memoized state using closure variables that are local to this
                // memoized instance of a getSnapshot function. Intentionally not using a
                // useRef hook, because that state would be shared across all concurrent
                // copies of the hook/component.
                var hasMemo = false;
                var memoizedSnapshot;
                var memoizedSelection;
                var memoizedSelector = function(nextSnapshot) {
                    if (!hasMemo) {
                        // The first time the hook is called, there is no memoized result.
                        hasMemo = true;
                        memoizedSnapshot = nextSnapshot;
                        var _nextSelection = selector(nextSnapshot);
                        if (isEqual !== undefined) {
                            // Even if the selector has changed, the currently rendered selection
                            // may be equal to the new selection. We should attempt to reuse the
                            // current value if possible, to preserve downstream memoizations.
                            if (inst.hasValue) {
                                var currentSelection = inst.value;
                                if (isEqual(currentSelection, _nextSelection)) {
                                    memoizedSelection = currentSelection;
                                    return currentSelection;
                                }
                            }
                        }
                        memoizedSelection = _nextSelection;
                        return _nextSelection;
                    } // We may be able to reuse the previous invocation's result.
                    // We may be able to reuse the previous invocation's result.
                    var prevSnapshot = memoizedSnapshot;
                    var prevSelection = memoizedSelection;
                    if (objectIs(prevSnapshot, nextSnapshot)) {
                        // The snapshot is the same as last time. Reuse the previous selection.
                        return prevSelection;
                    } // The snapshot has changed, so we need to compute a new selection.
                    // The snapshot has changed, so we need to compute a new selection.
                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
                    // has changed. If it hasn't, return the previous selection. That signals
                    // to React that the selections are conceptually equal, and we can bail
                    // out of rendering.
                    // If a custom isEqual function is provided, use that to check if the data
                    // has changed. If it hasn't, return the previous selection. That signals
                    // to React that the selections are conceptually equal, and we can bail
                    // out of rendering.
                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
                        return prevSelection;
                    }
                    memoizedSnapshot = nextSnapshot;
                    memoizedSelection = nextSelection;
                    return nextSelection;
                }; // Assigning this to a constant so that Flow knows it can't change.
                // Assigning this to a constant so that Flow knows it can't change.
                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
                var getSnapshotWithSelector = function() {
                    return memoizedSelector(getSnapshot());
                };
                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                };
                return [
                    getSnapshotWithSelector,
                    getServerSnapshotWithSelector
                ];
            }, [
                getSnapshot,
                getServerSnapshot,
                selector,
                isEqual
            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
            useEffect(function() {
                inst.hasValue = true;
                inst.value = value;
            }, [
                value
            ]);
            useDebugValue(value);
            return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
}]);

//# sourceMappingURL=d9b6c_cjs_use-sync-external-store-shim_with-selector_development_cccc54.js.map