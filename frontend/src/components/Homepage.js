import styled from "styled-components";
import { Link } from "react-router-dom";
import { Main } from "./Main";
import { useContext } from "react";
import { SignInContext } from "./Context";
import { useEffect } from "react";

export const Homepage = () => {
    const {signedIn, setSignedIn, users, signInData, parsed} = useContext(SignInContext)
    console.log(sessionStorage.getItem("User"))
    useEffect(()=>{
            setSignedIn(JSON.parse(sessionStorage.getItem("User")))
        });
        console.log(signedIn)
    return(
        <>
        <Wrapper>
            <P>Facespace</P>
            { signedIn  ? 
            <P> Howdy, {signedIn}</P> 
            : <SignLink to="/signin">
                <P>Sign In</P>
            </SignLink> 
            }
        </Wrapper>
        <Main users={users}/>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: var(--primary-color);
color: white;
`
const P = styled.p`
font-size:28px;
font-family: var(--heading-font-family);
padding: 10px 20px;
`

const SignLink = styled(Link)`
text-decoration:none;
color: white;
`