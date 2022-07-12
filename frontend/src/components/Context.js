import { useState, useEffect, createContext } from "react";

export const SignInContext = createContext(null);
export const SignInProvider = ({ children }) => {
    const [signIn, setSignIn] = useState(null);
    const [users, setUsers] = useState(null)
    let signInData = sessionStorage.getItem("User")
    let parsed = JSON.parse(signInData)
    
    
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
            setUsers,
            signInData,
            parsed
        }}
        >
        {children}
        </SignInContext.Provider>
    );
    };