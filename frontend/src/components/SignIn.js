import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { SignInContext } from "./Context";
import { useState } from "react";

export const SignIn = () => {
    const [text, setText] = useState("")
    const {users} = useContext(SignInContext)
    let history = useHistory();
    const handleClick = ()=>{
        history.push(`/`);
        }

    const handleSignIn = () =>{
        for(let i = 0; i < users?.length; i ++){
            if (text.toLowerCase() === users[i]?.name.toLowerCase()){
                sessionStorage.setItem("User", JSON.stringify(users[i].name));
                history.push("/")
            }   
        }
        }

    return (
        <Title>
            <P onClick={handleClick}>Facespace</P>
            <Wrapper>
                <Form>
                    <Input placeholder="Your first name" type="text" onChange={(e)=>setText(e.target.value)}></Input>
                    <Button type="submit" value="Submit" onClick={async (e)=>{e.preventDefault(); 
                        return handleSignIn();
                    }}>Sign in</Button>
                </Form>
            </Wrapper>
        </Title>
    )
}

const Wrapper = styled.div`
display: flex;
background-image: url("/images/facespace_bg.jpg");
justify-content: center;
align-items: center;
height: 821px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
background-color: #ffffff75;
padding: 30px 30px;
`
const P = styled.p`
font-size:28px;
font-family: var(--heading-font-family);
padding: 10px 20px;`

const Title = styled.div`
display: flex;
justify-content: space-between;
background-color: var(--primary-color);
color: white;
flex-direction: column;
width: 1425px;
`
const Button = styled.button`
background-color: var(--primary-color);
color: white;
border: none;
margin-top: 5px;
padding: 10px 20px;
`
const Input = styled.input`
padding: 10px 20px;`