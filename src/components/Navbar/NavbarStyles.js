import styled from "styled-components";

export const NavbarContainer = styled.div`
display:${(props) => props.display ? "flex" : "none"};
align-items: center;
justify-content: center;
flex-direction: column;
position:fixed;
left:0;
top:50%;
height:10rem;
z-index:99;
border:#333333 solid 1px;
`
export const NavbarItem = styled.a`
text-decoration: none;
`

