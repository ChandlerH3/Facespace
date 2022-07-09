import { useState, useEffect, createContext } from "react";

export const SignInContext = createContext(null);
export const SignInProvider = ({ children }) => {
    const [signIn, setSignIn] = useState(null);
    const [users, setUsers] = useState(null)
    
    useEffect(() => {
        fetch(`/api/users`)
            .then((res) => res.json())
            .then((data) => {
            setUsers(data.data)
            });
        }, []);

    return (
        <SignInContext.Provider
        value={{
            signIn,
            setSignIn,
            users,
            setUsers
        }}
        >
        {children}
        </SignInContext.Provider>
    );
    };