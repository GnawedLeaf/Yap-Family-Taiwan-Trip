import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

// ::-webkit-scrollbar {
//   display: none;
// }

::selection {
  background:rgba(60, 202, 249, 0.68);
  color: #f5f5f5; /* This sets the color of the highlighted text */
}

body {
  cursor: default;
  overflow-x: hidden;
  background: #f5f5f5;
}



`

export const CentralisingContainer = styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`


