import styled from "styled-components"
const Wrapper = styled.main`
position:fixed;
  bottom: 0px;
  left: 0;
    width: 100vw;
    height: 100vh;
  display: flex;

    background-color: rgba(251, 251, 251, 0.405);
    justify-content: center;
    align-items: center;

`;
const WrapperBox = styled.div`
background-color:hsl(110, 17%, 71%,0.92);
display:flex;
flex-direction: column;
align-items: center;
width: min(500px, 70%);

/* width:70%; */
/* max-width: 500px; */

height:60%;
border-radius:12px;
  overflow-y :auto;
`;
const OptionText = styled.section`
text-transform:uppercase;
align-Items: 'center';
line-height: 2.3em;
font-weight: bolder;
color: #FEF5ED;

`;
export {
  Wrapper,
  WrapperBox,
  OptionText
}
