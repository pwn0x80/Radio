import styled from "styled-components";


const MainWrapper = styled.div`
`;
const MainContentOption = styled.div`
padding-block:0.4rem;
`;

const MainContentWrapper = styled.div`
@media screen and (max-width: 540px) {
    /* height: calc(100vw - 900px); */

  }
@media screen and (max-height: 700px) {
height: calc(91vw - 188px);
}

    height: calc(35vh);
  
    overflow-y: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #99a799;
    background-color: #ADC2A9;
    letter-spacing:0.2em;
    line-height: 1.2em;
    font-weight: bolder;
    color: white;
    width:min(70%,500px);
    margin: auto;
    padding:10px;
    margin-buttom:50px;
    margin-bottom: calc(11px + 12vh);

`;

export { MainWrapper, MainContentOption, MainContentWrapper }
