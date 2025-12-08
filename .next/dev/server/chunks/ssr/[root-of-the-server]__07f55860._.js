module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
'use client';
;
;
;
;
const navItems = [
    {
        href: '/',
        label: 'Inicio',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        href: '/catalogo',
        label: 'Catálogo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
    },
    {
        href: '/ubicacion',
        label: 'Ubicación',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        href: '/nosotros',
        label: 'Nosotros',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
function Header() {
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full bg-black border-b border-gray-800 px-8 py-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold",
                        children: "CORTE LÁSER ZUMPANGO"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex gap-6",
                    children: navItems.map((item, index)=>{
                        const Icon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "flex flex-col items-center text-sm text-white transition-all duration-300 hover:text-gray-300",
                            onMouseEnter: ()=>setHoveredIndex(index),
                            onMouseLeave: ()=>setHoveredIndex(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 24,
                                    className: `transition-all ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs mt-1",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Cart() {
    const [carrito, setCarrito] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [buyerPhone, setBuyerPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = ()=>{
            const stored = JSON.parse(localStorage.getItem('carrito') || '[]');
            setCarrito(stored);
        };
        load();
        const onUpdate = ()=>load();
        window.addEventListener('cartUpdated', onUpdate);
        return ()=>window.removeEventListener('cartUpdated', onUpdate);
    }, []);
    const quitar = (index)=>{
        const next = [
            ...carrito
        ];
        next.splice(index, 1);
        setCarrito(next);
        localStorage.setItem('carrito', JSON.stringify(next));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const vaciar = ()=>{
        setCarrito([]);
        localStorage.removeItem('carrito');
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const total = carrito.reduce((s, p)=>s + (p.precio || 0), 0);
    const enviarWhatsApp = ()=>{
        if (!buyerPhone) {
            alert('Por favor ingresa tu número de teléfono antes de enviar.');
            return;
        }
        // Número administrativo que recibirá el pedido (con prefijo 52 para México)
        // Usamos el número que indicaste: 5645689216 -> con prefijo +52 queda 525645689216
        const adminNumber = '525645689216';
        let mensaje = `Pedido desde: ${buyerPhone}%0A`;
        mensaje += `%0AProductos:%0A`;
        carrito.forEach((p)=>{
            mensaje += `• ${p.nombre} - $${p.precio}%0A`;
        });
        mensaje += `%0ATotal: $${total}`;
        const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900 rounded-lg p-6 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Carrito"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            carrito.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "Tu carrito está vacío."
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: carrito.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between bg-gray-800 p-3 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium",
                                                children: p.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-sm",
                                                children: [
                                                    "$",
                                                    p.precio
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>quitar(i),
                                            className: "text-sm px-3 py-1 bg-red-600 rounded text-white",
                                            children: "Quitar"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-2 border-t border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-300",
                                children: "Total:"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold",
                                children: [
                                    "$",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-300",
                                children: "Número de contacto (compradora):"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: buyerPhone,
                                onChange: (e)=>setBuyerPhone(e.target.value),
                                placeholder: "Ej: 5512345678",
                                className: "px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: enviarWhatsApp,
                                        className: "flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold",
                                        children: "Enviar por WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: vaciar,
                                        className: "bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded",
                                        children: "Vaciar"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Catalogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$components$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/components/Cart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Letrero MDF 3mm",
        precio: 120,
        categoria: "letras",
        imagen: "https://via.placeholder.com/300x200?text=Letrero+MDF"
    },
    {
        id: 2,
        nombre: "Decoración Mandala",
        precio: 250,
        categoria: "decoracion",
        imagen: "https://via.placeholder.com/300x200?text=Mandala"
    },
    {
        id: 3,
        nombre: "Llaveros personalizados",
        precio: 60,
        categoria: "regalos",
        imagen: "https://via.placeholder.com/300x200?text=Llaveros"
    },
    {
        id: 4,
        nombre: "Nombre en acrílico",
        precio: 180,
        categoria: "personalizados",
        imagen: "https://via.placeholder.com/300x200?text=Acrilico"
    },
    {
        id: 5,
        nombre: "Portarretratos",
        precio: 150,
        categoria: "decoracion",
        imagen: "https://via.placeholder.com/300x200?text=Portarretratos"
    }
];
function Catalogo() {
    const [productos, setProductos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PRODUCTOS);
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('todos');
    const categorias = [
        'todos',
        ...new Set(PRODUCTOS.map((p)=>p.categoria))
    ];
    const handleFiltro = (categoria)=>{
        setFiltro(categoria);
        if (categoria === 'todos') {
            setProductos(PRODUCTOS);
        } else {
            setProductos(PRODUCTOS.filter((p)=>p.categoria === categoria));
        }
    };
    const agregarCarrito = (id)=>{
        const producto = PRODUCTOS.find((p)=>p.id === id);
        if (producto) {
            const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            // Notify cart component to refresh
            window.dispatchEvent(new Event('cartUpdated'));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-b from-gray-800 to-black py-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-bold mb-4",
                                children: "CATÁLOGO"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl opacity-80",
                                children: "Descubre nuestros productos y servicios"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$components$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-black text-white py-12 px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-12 flex flex-wrap gap-4 justify-center",
                                    children: categorias.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleFiltro(cat),
                                            className: `px-6 py-2 rounded-lg font-semibold transition-all ${filtro === cat ? 'bg-white text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`,
                                            children: cat.charAt(0).toUpperCase() + cat.slice(1)
                                        }, cat, false, {
                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                    children: productos.map((producto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: producto.imagen,
                                                    alt: producto.nombre,
                                                    className: "w-full h-48 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold mb-2",
                                                            children: producto.nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-2xl font-bold mb-4",
                                                            children: [
                                                                "$",
                                                                producto.precio
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>agregarCarrito(producto.id),
                                                            className: "w-full bg-white text-black hover:bg-gray-200 text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$CHINESE$2f$grupo$2d$siddhi$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Agregar"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, producto.id, true, {
                                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/CHINESE/grupo-siddhi-next/app/catalogo/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07f55860._.js.map