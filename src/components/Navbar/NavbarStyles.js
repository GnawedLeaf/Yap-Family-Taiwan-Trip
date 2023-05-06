import styled from "styled-components";

export const NavbarContainer = styled.div`
display:${(props) => props.display ? "flex" : "none"};
align-items: center;
justify-content: center;
flex-direction: column;
position:fixed;
right:2%;
bottom:5%;
z-index:99;
`


