import styled from 'styled-components';
import { ReactComponent as PlayBtn } from "../../assets/svg/button2.svg"
import { ReactComponent as PrevBtn } from "../../assets/svg/prev.svg"
import { ReactComponent as NextBtn } from "../../assets/svg/next.svg"
import { ReactComponent as Addbookmarks } from "../../assets/svg/addbookmark.svg"
import { ReactComponent as Volume } from "../../assets/svg/volume.svg"
const StatusSpace = styled.div`



font-family: 'Kawaii Stitch', sans-serif;

font-size: 14px;
height: 25px;
    width: min(70%,500px);
/* margin-top:-15px; */
margin -12px auto 12px auto ;
background: rgb(153,167,153);
background: linear-gradient(90deg, rgba(153,167,153,1) 0%, rgba(211,228,205,1) 87%, rgba(254,245,237,1) 100%);
padding-left: 12px;
padding-block: 5px;
border-radius:100px;
color:#FEF5ED;

  text-transform: capitalize;
`
const PlaybtnSvg = styled(PlayBtn)`
width:3.5em;
height:3.5em;

.play{
visibility:  ${(props) => (props.playbtnstate ? "hidden" : "")} 
}
.pause{
  visibility: ${(props) => (props.playbtnstate ? "" : "hidden")} ;
  }
`;
const NextBtnSvg = styled(NextBtn)`
width:3.5em;
height:3.5em;


`;
const PrevBtnSvg = styled(PrevBtn)`
width:3.5em;
height:3.5em;


`;
const AddbookmarkSvg = styled(Addbookmarks)`
width:2.5em;
height:2.5em;


`;

const Controls = styled.div`
display:flex;
justify-content: center;

`;
const ControlsBtn = styled.div`
padding: 0.5rem;
`;

const MarkControlsBtnright = styled.div`
display: flex;
align-items: center;
.st0{
  fill: green; 
}

`;
const ControlsBtnright = styled.div`
display: flex;
align-items: center;
`;
const UnMarkControlsBtnright = styled.div`
display: flex;
align-items: center;
.st0{
  fill: red; 

}
.virtical{
  transform: scaleY(0.5)
  
}

`;
const VolumeSvg = styled(Volume)`
width:3.5em;
height:3.5em;
.vol-line{
  visibility: ${(props) => props.mutevolume ? "hidden" : ""};
}
.mute{
  visibility: ${(props) => props.mutevolume ? "" : "hidden"};
}
`;
const VolumeWrapper = styled.div`
display: flex;
align-items: center;

`;


export {
  PlaybtnSvg,
  NextBtnSvg,
  PrevBtnSvg,
  AddbookmarkSvg,
  Controls,
  ControlsBtn,
  MarkControlsBtnright,
  UnMarkControlsBtnright,
  VolumeSvg,
  VolumeWrapper,
  StatusSpace
}
