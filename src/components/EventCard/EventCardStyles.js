import styled from "styled-components";


export const EventContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin:3vh 0;
width:90%;
`
export const EventAndSubeventContainer = styled.div`
display:flex;
justify-content: ${(props) => props.spread ? "center" : "center"};
flex-wrap: wrap;
transition-duration: 1s;
transition-property: justify-content;
`

export const EventCard = styled.div`
height:50vh;
width:20vw;
border:1px solid #333333;
display:flex;
flex-direction: column;
align-items: center;
padding:0.8vw;
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
border-radius:10px;
background:#f5f5f5;
margin:1vw;
z-index: ${(props) => props.zIndex};
&:hover{
  cursor: pointer;
  transform:translateY(${(props) => props.spread ? -1 : ""}%);
  transition-duration:0.8s;
}
`
export const EventPicture = styled.img`
width:18vw;
max-height:26vh;
margin-top:2vh;
border-radius:5px;
`
export const EventTitle = styled.div`
font-size:2vw;
text-align:center;
display:flex;
align-items: center;
justify-content: center;
height:30vh;
width:90%;
`


export const SubEventContainer = styled(EventCard)`
position: ${(props) => props.spread ? "relative" : "absolute"};
z-index: ${(props) => props.spread ? 1 : props.zIndex};
transform:translateY(${(props) => props.spread ? "0" : props.index}%);

background:#f5f5f5;
opacity: 1;
transition-duration: 1s,0.8s;
transition-property: position,transform;


&:hover{
  cursor: default;
}
`
export const SubEventPicture = styled(EventPicture)`
&:hover{
  cursor: pointer;
}
`

export const SubEventTitle = styled.div`
margin-top:2vh;
font-size:1.7vw;
font-weight:400;
`
export const SubEventDescription = styled.div`
margin-top:2.5vh;
font-size:0.9vw;
width:90%;
text-align:center;
height:10vh;
overflow:auto;

`
export const SubEventLocation = styled.a`
text-decoration: none;
color:#333333;
margin-top:1vh;
font-family: 'Noto Serif TC', serif;
font-size:1.4vw;
font-weight:500;
&:hover{
  cursor: pointer;
}
`
export const TransitionContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in-out;
z-index: 999;
visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
opacity: ${({ clicked }) => (clicked ? 1 : 0)};
cursor:pointer;
transition-duration: 0.4s;
`

export const TransitionImage = styled.img`
max-width: 90%;
max-height: 90%;
object-fit: contain;
`
