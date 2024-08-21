import logo from './logo.svg'
import {useState} from 'react'
import {Link, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";

import {AnimatePresence} from "framer-motion";
import IndexPage from "./pages/IndexPage";
import AuthProvider from "./components/AuthProvider";
import LoginPage from "./pages/LoginPage";
import AuthSwitch from "./components/AuthSwitch";
import LogoutPage from "./pages/LogoutPage";

function App() {
    const location = useLocation();

    return (
        <AuthProvider>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={
                        <AuthSwitch
                            auntificated={<IndexPage/>}
                            nonAuntificated={<IndexPage/>}/>}
                    />
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="logout" element={<LogoutPage/>}/>
                </Routes>
            </AnimatePresence>
        </AuthProvider>
    )
}

export default App
