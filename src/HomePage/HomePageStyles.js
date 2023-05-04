import styled from "styled-components";

export const BigContainer = styled.div`
overflow-x:hidden;
font-family: 'Lora', serif;
color:#333333;
`
export const HeroContainer = styled.div`
height: 100vh;
display:flex;
align-items: center;
justify-content: center;

background-image: url(${(props) => props.src});
background-color: #7C7C7C;
background-blend-mode: multiply;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 30%;
background-attachment: fixed;
color:transparent;


animation: 1s halfSize 1.4s forwards;
@keyframes halfSize {
  to{
    height:50vh;
  }
}
@media only screen and (max-width: 750px){
  height:100vh;
}
`
export const HeroPicture = styled.div``
export const HeroTitle = styled.div`
font-size: 4rem;
color:white;
z-index:2;
font-family: 'Lora', serif;
letter-spacing: 0.4rem;
text-align: center;
opacity: 0;

animation: 1s fadeIn 0.3s forwards;

@keyframes fadeIn {
  from {
    opacity: 0;
    transform:scale(0);
  }
  to{
    opacity:1;
    transform:scale(1);
  }
}

@media only screen and (max-width: 750px){
  font-size:2rem;
  width:80%;
}
`



export const Day1Container = styled.div`
margin:5rem 1rem 5rem 1rem;
display:flex;
flex-direction: column;
align-items: center;

`
export const DayTitle = styled.div`
font-size: 6vw;
font-weight:500;
transition-duration: 0.3s;
height:fit-content;

&:hover{
  transform: translateY(-5%);
}
@media only screen and (max-width:750px){
  font-size:4rem;
}

`

export const DaySubtitle = styled.div`
margin-top:1vw;
letter-spacing:0.4rem;
font-size: 1.2vw;

@media only screen and (max-width:750px){
  font-size:1.2rem;
}
`
export const MiddleLine = styled.div`
width:0px;
height:0vw;
margin-top:2vw;
margin-bottom:2vw;
transition-duration: 0.3s;

border:0.05vw solid #333333;
opacity:1;
height:${(props) => props.height};

 ${(props) => props.fadeDown ? "animation: 1s fadeDown 0s forwards;" : ""}
@keyframes fadeDown {
  0% {
    opacity:0;
    height:0vw;
    border:none;
  }
  1%{
    opacity:1;
    border:0.1rem solid #333333;
  }
  100%{
    border:0.1rem solid #333333;
    opacity:1;
    height:${(props) => props.height};
  }
}
@media only screen and (max-width:750px){
  margin-top:1.5rem;
  margin-bottom:1.5rem;
}

`
export const HorizontalLine = styled.div`
width:40vw;
height:0;
position:absolute;
border:0.1rem solid #333333;
margin-top:13vw;
`
export const VerticalLine = styled.div``

export const TimeTitle = styled.div`
opacity:0;
${(props) => props.fadeDown ? "animation: 0.5s fadeIn2 1.1s forwards;" : ""}

opacity:1;
font-size: 3vw;


@keyframes fadeIn2 {
  100%{
    opacity:1;
    font-size: 3vw;
  }
}
@media only screen and (max-width:750px){
  font-size:2rem;
}


`
export const NamesSubtitle = styled.div`
opacity:0;
${(props) => props.fadeDown ? "animation: 0.5s fadeIn3 1.2s forwards;" : ""}


opacity:1;
font-size: 1vw;
letter-spacing:0.1rem;

@keyframes fadeIn3 {
  100%{
    opacity:1;
    font-size: 1vw;
    letter-spacing:0.1rem;
  }
}

@media only screen and (max-width:750px){
  font-size:0.8rem;
  margin-top:0.5rem;
}

  `

