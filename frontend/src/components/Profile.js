import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";  

export const Profile = () => {
    const {id} = useParams()
    const [profile, setProfile] = useState(null)
    const [friend, setFriend] = useState(null)
    
    let history = useHistory();
    const handleClick = ()=>{
        history.push(`/`);
        }

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data.data)
            });
        fetch(`/api/users`)
        .then((res) => res.json())
        .then((data) => {
            setFriend(data.data)
        });
        }, [id]);

    let friendArray = []
    const filter = () => {
        profile && profile.friends.forEach((element)=>{
            for(let i = 0; i < friend.length; i++){
                if (friend[i].id === element) {
                    friendArray.push(friend[i])
                }
            }
        }) 
        return friendArray
    }
    
    if (profile && friend) {
        filter()
    }


    return (
        <Title>
            <P onClick={handleClick}>Facespace</P>
            <Img src="/images/facespace_bg.jpg"/>            
            <Wrapper>
                <ProfileB>
                    <AvatarB>
                        <AvatarImg src={profile && profile.avatarUrl}/>
                    <Name>{profile && profile.name}</Name>
                    </AvatarB>
                    <Friend>
                    <FriendTitle>{profile && profile.name}'s Friends</FriendTitle>
                    <List>
                        {friendArray && friendArray.map((element) => { 
                            return (
                                <FriendB key={element.id} >
                                    <FriendImg src={element.avatarUrl} />
                                    <FriendName >{element.name}</FriendName>
                                </FriendB>
                        )
                        })
                        }
                    </List>
                        
                </Friend>
                </ProfileB>
                
            </Wrapper>
        </Title>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 821px;
`
const P = styled.p`
font-size:28px;
font-family: var(--heading-font-family);
background-color: var(--primary-color);
padding: 10px 20px;
color: white;`

const Title = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 1425px;
`
const Img =styled.img`
object-fit: cover;
height: 300px;
width: 1425px;
`
const AvatarImg = styled.img`
width:20%;
border-radius: 10px;
border: 5px var(--primary-color) solid; 
`
const AvatarB = styled.div`
display: flex;
align-items: center;
`
const ProfileB = styled.div`
position: absolute;
left:100px;
top:300px;
display: flex;
flex-direction: column;
`
const Friend = styled.div`
display:flex;
flex-direction: column;
`
const List = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
`
const FriendTitle =styled.p`
display: block;
color: var(--primary-color);
font-family: var(--heading-font-family);
border-bottom: 1px var(--primary-color) solid ;
margin-top: 20px;
font-size: 24px;
`
const Name = styled.p`
color: var(--primary-color);
font-weight: bold;
font-size: 32px;
font-family: var(--heading-font-family);
margin-left: 24px;
`
const FriendImg = styled.img`
border-radius: 10px;
`
const FriendName = styled.p`
color:black;
text-align: center;
background-color: #ffffff7d;
position: absolute;
width:10%;
top: 94%;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 10px;
`
const FriendB = styled.div`
display: flex;
flex-direction:column;
width:10%;
margin-left: 10px;
margin-top: 10px;
`