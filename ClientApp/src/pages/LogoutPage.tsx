import {useAuth} from "../components/AuthProvider";
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function LogoutPage() {
    const auth = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (auth.isAuthenticated) auth.setToken(null)
        if (!auth.isAuthenticated) navigate('/login', {replace: true})
    }, [auth.isAuthenticated])
    
    return <></>
}

export default LogoutPage;