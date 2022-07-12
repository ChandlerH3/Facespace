import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { SignInContext } from "./Context";

export const Avatar = ({users}) => {
    const {signedIn} = useContext(SignInContext)
    const friendList = []
    users.forEach((user) => {
        if (user.name === signedIn){
            friendList.push(user)
        }
    })

    return ( users.map((user) => {
        return (
            <ALink key={user.id} to={`/${user.id}`}>
                {friendList[0]?.friends.includes(user.id) ? 
                <>
                <Img1 src={user.avatarUrl} />
                </>
                :
                <Img src={user.avatarUrl} />}   
            </ALink>
        )
    })
    )
}

const Img = styled.img`
width: 10%;
margin-left: 20px;
margin-bottom: 10px;
border-radius: 10px;
transition: 0.1s ease-in-out;
&:hover{
    border: 2px var(--primary-color) solid;
}
`
const Img1 = styled.img`
width: 10%;
margin-left: 20px;
margin-bottom: 10px;
border-radius: 10px;
transition: 0.1s ease-in-out;
&:hover{
    border: 2px var(--primary-color) solid;
}
border-top: 10px var(--primary-color) solid;
`
const ALink = styled(Link)`
display: inline;
text-decoration: none;
`
