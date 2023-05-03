import styled from "styled-components";

export const BigContainer = styled.div`
overflow:hidden;
height:300vh;
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
`
export const HeroPicture = styled.div``
export const HeroTitle = styled.div`
font-size: 4rem;
color:white;
z-index:2;
font-family: 'Archivo Black', sans-serif;
letter-spacing: 0.5rem;
`
