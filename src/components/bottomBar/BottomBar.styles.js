
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Bookmark } from '../../assets/svg/bookmark.svg';
import { ReactComponent as Genres } from '../../assets/svg/genres.svg';
import { ReactComponent as Globe } from "../../assets/svg/home.svg"
const Wrapper = styled.div`
z-index:222;
  display: flex;
      width: clamp(300px, 40%, 700px);
  position: fixed;
  bottom: 0;
justify-content: space-evenly;
  background: hsl(104, 30%, 85%);
bottom: 13px;
border-radius: 10px;
 box-shadow: 1px 1px 1px 1px #99A799;

  /* padding-inline:500px; */
margin-inline: clamp(50px, 20%, 400px);


`;
const rotate = keyframes`
0% {
transform:  translate(0px, 0px);
}
90%{
transform: translate(0px, 5px);
}
100%{

transform: translate(0px, 0px);
}

`;

const BookmarkSvg = styled(Bookmark)`
width:3em;
height:3em;
  &:active{
animation: ${rotate} 1s linear 1;

}
&:hover{
    transform: scale(1.2,1.2)
  }
#hi{
    transform:${(props) => (props.bookmarkanimate == null ? '' : ' translate(0px, 150px)')};
    transition-duration: ${(props) => (props.bookmarkanimate == 'animate' ? '1s' : '0s')};
}

.st1{
/* animation: {move} 3s ; */
/*  animation-iteration-count: 5; */
/*   animation-direction: alternate; */
  /* working */
/* animation: {rotate} 2s linear infinite; */

  
  fill: ${(props) => (props.bookmarkanimate !== 'animate' ? 'geen' : 'red')};


    transform:${(props) => (props.bookmarkanimate == null ? '' : 'rotate(360deg)')};

    transition-duration: ${(props) => (props.bookmarkanimate == 'animate' ? '1s' : '0s')};
transform-origin: center;
  transform-box:fill-box;
}
#plus{
  /* transform: scale(0) */
   transform:${(props) => (props.bookmarkanimate == null ? '' : 'scale(0)')};

    transition-duration: ${(props) => (props.bookmarkanimate == 'animate' ? '1s' : '0s')};

}

`;
const rotates = keyframes`
  2% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  4% {
    transform: translate(0, 0) rotate(6.5deg);
  }
  6% {
    transform: translate(0, 0) rotate(2.5deg);
  }
  8% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  10% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  12% {
    transform: translate(0, 0) rotate(5.5deg);
  }
  14% {
    transform: translate(0, 0) rotate(1.5deg);
  }
  16% {
    transform: translate(0, 0) rotate(-5.5deg);
  }
  18% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  20% {
    transform: translate(0, 0) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  24% {
    transform: translate(0, 0) rotate(-4.5deg);
  }
  26% {
    transform: translate(0, 0) rotate(-1.5deg);
  }
  28% {
    transform: translate(0, 0) rotate(-1.5deg);
  }
  30% {
    transform: translate(0, 0) rotate(0.5deg);
  }
  32% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  34% {
    transform: translate(0, 0) rotate(-1.5deg);
  }
  36% {
    transform: translate(0, 0) rotate(6.5deg);
  }
  38% {
    transform: translate(0, 0) rotate(-2.5deg);
  }
  40% {
    transform: translate(0, 0) rotate(5.5deg);
  }
  42% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  44% {
    transform: translate(0, 0) rotate(-6.5deg);
  }
  46% {
    transform: translate(0, 0) rotate(7.5deg);
  }
  48% {
    transform: translate(0, 0) rotate(2.5deg);
  }
  50% {
    transform: translate(0, 0) rotate(-4.5deg);
  }
  52% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  54% {
    transform: translate(0, 0) rotate(0.5deg);
  }
  56% {
    transform: translate(0, 0) rotate(-0.5deg);
  }
  58% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  60% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  62% {
    transform: translate(0, 0) rotate(3.5deg);
  }
  64% {
    transform: translate(0, 0) rotate(-2.5deg);
  }
  66% {
    transform: translate(0, 0) rotate(7.5deg);
  }
  68% {
    transform: translate(0, 0) rotate(3.5deg);
  }
  70% {
    transform: translate(0, 0) rotate(6.5deg);
  }
  72% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  74% {
    transform: translate(0, 0) rotate(-2.5deg);
  }
  76% {
    transform: translate(0, 0) rotate(-5.5deg);
  }
  78% {
    transform: translate(0, 0) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 0) rotate(-6.5deg);
  }
  82% {
    transform: translate(0, 0) rotate(5.5deg);
  }
  84% {
    transform: translate(0, 0) rotate(-6.5deg);
  }
  86% {
    transform: translate(0, 0) rotate(-0.5deg);
  }
  88% {
    transform: translate(0, 0) rotate(-5.5deg);
  }
  90% {
    transform: translate(0, 0) rotate(-3.5deg);
  }
  92% {
    transform: translate(0, 0) rotate(4.5deg);
  }
  94% {
    transform: translate(0, 0) rotate(-4.5deg);
  }
  96% {
    transform: translate(0, 0) rotate(-4.5deg);
  }
  98% {
    transform: translate(0, 0) rotate(-4.5deg);
  }
  0%, 100% {
    transform: translate(0, 0) rotate(0);
  }

`;
const BookMarkSvg = styled(Genres)`
width:3em;
height:3em;
&:hover{
    transform: scale(1.2,1.2)
  }

.st0{
animation:${rotates} 1s linear 1;
    fill: ${(props) => (props.isbookmarkset == 1 ? "red" : "green")};
transform-origin: center;
  transform-box:fill-box;
  animation: ${(props) => (props.listbookclick !== 0 ? '${rotates} 1s linear 50' : 'none')};
    
}
`;

const HeadphoneGlobe = styled(Globe)`
width :3em;
height:3em;

  /* position:absolute; */
  /* top: -25px; */
transform: scale(1.7) translate(0px, -5px);
&:hover {
transform: scale(2.1,2.1) translate(0px, -5px)

}

  &:hover{
.st3{

   animation ${rotates} 1s linear 1;
    }
  }
`;

const BottomText = styled.div`
    margin-top: -10px;
    text-align:center;
`;
const BottomBoxWrapper = styled.div`
text-align:center;
`
export {
  Wrapper,
  BookmarkSvg,
  BookMarkSvg,
  HeadphoneGlobe,
  BottomText,
  BottomBoxWrapper

} 
