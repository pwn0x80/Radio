import styled from "styled-components";

const Wrapper = styled.div`
padding-top:15px;
`;
const ImgWrapper = styled.div`
/* padding-block:min(22.6vw,12.5rem); */
display: flex;
justify-content: space-evenly;
  size:300px;
`;
const SmallTextWrapper = styled.div`
font-size: 0.6rem;
text-align:right;

`;
const TextWrapper = styled.div`
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
font-family: 'Kawaii Stitch', sans-serif;
color: #FEF5ED;
font-size: 0.6rem;
top:0;
/* color:white; */

    box-shadow: 1px 1px 1px 1px #455745;
margin:auto;
background-color:#99A799;
border-radius:50px;
/* todo fix this */

width: MIN(320PX, 50%);
    /* width: min(43%,500px); */
padding:10px;
height:15px;
text-align: center;

`;
export {
  Wrapper,
  TextWrapper,
  SmallTextWrapper,
  ImgWrapper,
}
