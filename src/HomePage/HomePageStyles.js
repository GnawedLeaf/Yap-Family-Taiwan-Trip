import styled from "styled-components";

export const BigContainer = styled.div`
overflow-x:hidden;
height:300vh;
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

@media only screen and (max-width: 750px){
  font-size:2rem;
}
`

export const Day1Container = styled.div`
margin:5rem 1rem 5rem 1rem;
display:flex;

flex-direction: column;
align-items: center;

`
export const DayTitle = styled.div`
font-size: 5rem;
font-weight:500;
transition-duration: 0.3s;
height:fit-content;
&:hover{
  transform: translateY(-5%);
}

`
export const MiddleLine = styled.div`
width:0px;
height:0vw;
border:0.1rem solid #333333;
margin-top:3vw;
margin-bottom:3vw;
transition-duration: 0.3s;

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
    height:15vw;
  }
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
