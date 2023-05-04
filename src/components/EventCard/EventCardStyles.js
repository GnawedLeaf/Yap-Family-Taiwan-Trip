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
transition-duration: 1s,0.3s;
transition-property: justify-content,transform;

&:hover{
  transform:translateY(${(props) => props.spread ? "" : -2}%);
}
`

export const EventCard = styled.div`
height:50vh;
width:20vw;
border:1px solid #333333;
display:flex;
flex-direction: column;
align-items: center;
padding:0.8vw;
box-shadow: ${(props) => props.spread ? "10px 12px 13px -2px rgba(0,0,0,0.15)" : "0px 12px 13px -2px rgba(0,0,0,0.15)"}; 
border-radius:10px;
background:#f5f5f5;
margin:1vw;
z-index: ${(props) => props.zIndex};
&:hover{
  cursor: pointer;
}

@media only screen and (max-width:750px){
height:20rem;
width:12rem;
}
`
export const EventPicture = styled.img`
width:18vw;
max-height:26vh;
margin-top:2vh;
border-radius:5px;

@media only screen and (max-width:750px){
  height:rem;
  width:8rem;
  }
`

export const EventPicture2 = styled.div`
background-image: url(${(props) => props.src});
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 30%;
height:25vh;
width:18vw;
margin-top:2vh;
border-radius:5px;
transition-duration:0.3s;


@media only screen and (max-width:750px){
  background-color: #7C7C7C;
background-blend-mode: multiply;
  margin-top:1rem;
  max-height:20rem;
  height:18rem;
  width:10rem;
  position:absolute;
  }
`


export const EventTitle = styled.div`
font-size:1.5vw;
text-align:center;
display:flex;
align-items: center;
justify-content: center;
z-index:99;
height:25vh;
width:85%;

@media only screen and (max-width:750px){
margin-top:1rem;
color:#f5f5f5;
font-size:1.3rem;
width:70%;
color:#f5f5f5;
display: flex;
justify-content: center;
align-items: center;
z-index:99;
height:18rem;
  }
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

@media only screen and (max-width:750px){
  margin-top: ${(props) => props.spread ? "0.8rem" : "0"};
  }
`
export const SubEventPicture = styled(EventPicture)`
transition-duration:0.3s;
max-height: 21vh;
&:hover{
  cursor: pointer;
  transform: scale(105%);
}
`

export const SubEventPicture2 = styled.div`
background-image: url(${(props) => props.src});
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 30%;
background-attachment: fixed;
height:20vh;
width:18vw;
max-height: 21vh;
margin-top:2vh;
border-radius:5px;
transition-duration:0.3s;
&:hover{
  cursor: pointer;
  transform: scale(105%);
}

@media only screen and (max-width:750px){
  margin-top:1rem;
  max-height:10rem;
  height:8rem;
  width:10rem;
  }
`

export const SubEventTitle = styled.div`
margin-top:2vh;
font-size:1.5vw;
font-weight:400;
text-align:center;
width:90%;

@media only screen and (max-width:750px){
font-size:1rem;
margin-top:1rem;
  }
`
export const SubEventDescription = styled.div`
margin-top:2.5vh;
font-size:0.9vw;
width:90%;
text-align:center;
height:10vh;
overflow:auto;

@media only screen and (max-width:750px){
  font-size:0.7rem;
  margin-top:1rem;
  height:3.7rem;
    }

`
export const SubEventLocation = styled.a`
text-decoration: none;
color:#333333;
margin-top:1.7vh;
font-family: 'Noto Serif TC', serif;
font-size:1.4vw;
font-weight:500;
transition-duration:0.3s;


&:hover{
  cursor: pointer;
  transform: scale(110%);
  color:#FF6B6B;
}
@media only screen and (max-width:750px){
  font-size:0.8rem;
  margin-top:1rem;
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
