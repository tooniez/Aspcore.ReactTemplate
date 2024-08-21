import React, {useContext, useEffect, useState} from "react";
import {ApiError, ApplicationUser, AuthService, OpenAPI} from "../api";

export interface AuthStorage {
    isAuthenticated: boolean
    setToken: (token: string | null) => void,
    userLoading: boolean
    user: ApplicationUser | null,
    token: string | null
}

const AuthContext = React.createContext<AuthStorage>({
    isAuthenticated: false, setToken: () => {}, 
    userLoading: false,
    user: null,
    token: null,
});
export {AuthContext};

function useAuth() {
    const auth = useContext(AuthContext)

    return auth
}

export {useAuth}

function getToken() {
    let token = localStorage.getItem("token")
    OpenAPI.TOKEN = token || undefined
    return token
}

function getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) as ApplicationUser : null
}

export default function AuthProvider(props: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getToken());
    const [userLoading, setUserLoading] = useState<boolean>(!!getUser());
    const [token, setToken] = useState<string | null>(getToken());
    const [user, setUser] = useState<ApplicationUser | null>(getUser());

    const promiseRejectionHandler = (e: PromiseRejectionEvent) => {
        if (e.reason instanceof ApiError && e.reason.status === 401) {
            setToken(null)
            e.preventDefault()
        }
    }

    useEffect(() => {
        OpenAPI.TOKEN = token || undefined
        if (token) {
            localStorage.setItem("token", token)
            setUserLoading(true)
            setIsAuthenticated(true)
            AuthService.getApiAuthMe().then((u) => {
                setUser(u)
                setUserLoading(false)

                if (!u) setToken(null)
            }).catch((e) => {
                setUserLoading(false)
                if (!(e instanceof TypeError)) setToken(null)
            })
        } else if (token === null) {
            localStorage.removeItem("token")
            setUser(null)
            setUserLoading(false)
            setIsAuthenticated(false)
        }
    }, [token])

    useEffect(() => {
        window.addEventListener("unhandledrejection", promiseRejectionHandler);

        return () => {
            window.removeEventListener("unhandledrejection", promiseRejectionHandler);
        };
    }, [])
    
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            localStorage.removeItem("user")
        }
    }, [user])

    return <AuthContext.Provider value={{isAuthenticated, setToken, userLoading, user, token}}>{props.children}</AuthContext.Provider>
}

