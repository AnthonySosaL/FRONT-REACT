import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
var App = function () { return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/catalog", element: _jsx(CatalogPage, {}) })] }) })); };
var container = document.getElementById('root');
if (container) {
    var root = createRoot(container);
    root.render(_jsx(App, {}));
}
