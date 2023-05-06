import styled from "styled-components";

export const FooterContainer = styled.div`
width:100%;
height:10vh;
display:grid;
grid-template-columns: 0.5fr 0.5fr;
`
export const FooterItemContainer = styled.div`

display:${(props) => props.display ? "flex" : "none"};
grid-column-start: ${(props) => props.side === 0 ? "1" : "2"};
justify-content:  ${(props) => props.side === 0 ? "flex-start" : "flex-end"} ;
margin-${(props) => props.side === 0 ? "left" : "right"}:6vw;

@media only screen and (max-width:750px){
  margin-${(props) => props.side === 0 ? "left" : "right"}:1.1rem;
}
@media only screen and (min-width:750px){
  align-items: center;
}

`
export const FooterItem = styled.div`

font-weight:500;
letter-spacing:0.05rem;
&:hover{
  cursor:pointer;
}
@media only screen and (max-width:750px){
  font-weight:400;
}
`