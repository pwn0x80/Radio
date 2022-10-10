import styled from "styled-components";


const MainWrapper = styled.div`
`;
const MainContentOption = styled.div`
padding-block:0.4rem;
`;

const MainContentWrapper = styled.div`
@media screen and (max-width: 800px) {
    height: clamp(23vh, 42vh, 85%);
  }

    height: clamp(13vh, 30vh, 85%);
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
    padding:10px;

`;

export { MainWrapper, MainContentOption, MainContentWrapper }
