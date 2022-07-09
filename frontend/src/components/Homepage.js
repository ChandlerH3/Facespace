import styled from "styled-components";
import { Link } from "react-router-dom";
import { Main } from "./Main";
import { useContext } from "react";
import { SignInContext } from "./Context";

export const Homepage = () => {
    const {signIn, setSignIn, users} = useContext(SignInContext)

    let data = sessionStorage.getItem("User")

    return(
        <>
        <Wrapper>
            <P>Facespace</P>
            { data && JSON.parse(data)  ? 
            <P> Howdy, {JSON.parse(data)}</P> 
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