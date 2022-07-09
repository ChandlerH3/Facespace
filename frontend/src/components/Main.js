import styled from "styled-components";
import { Avatar } from "./Avatar";

export const Main = ({users}) => {
    return (
        <Wrapper>
            <h2>All Facespace Members</h2>
            <AvatarDiv>
                {users ? <Avatar users={users} /> : <p>loading</p>} 
            </AvatarDiv>
        </Wrapper>)
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const AvatarDiv = styled.div`
display: inline-block;
margin: auto;
width: 70%;
text-align: center;
`