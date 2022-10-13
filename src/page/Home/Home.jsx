import { useEffect, useState } from "react";
import musicGif from '../../assets/gif/musicGif.gif'
import Controller from '../../components/controller/Controller';
import ContentBox from "../../page/contentBox/ContentBox"
import {

  Wrapper,
  TextWrapper,
  SmallTextWrapper,
  ImgWrapper
} from '../Home/Home.style.jsx'
import { useGreeting } from "../../utils/useGreeting"
import { useSelector } from "react-redux";
import HomeContentBox from "../HomeContentBox/HomeContentBox";
import useController from "../../utils/useAudioController";
const Home = () => {

  const genresSelect = useSelector(state => state.radio.audio.genres)
  const currentPlayUrl = useSelector(state => state.radio.audio.currentplayingUrl);
  const trackname = useSelector(state => state.radio.audio.trackName);
  const nameSelect = useSelector(state => state.radio.audio.name)
  const [status, setStatus] = useState(0)
  const { wish } = useGreeting()
  let controllerStatus = useController().currentAudioStatus
  return (
    < Wrapper >
      <TextWrapper>
        {controllerStatus.success == true ? trackname : controllerStatus.error == true ? "cant play this song" : controllerStatus.pending == true ? "loading..." : wish}
        <SmallTextWrapper>
          {genresSelect}
        </SmallTextWrapper>
      </TextWrapper>
      < ImgWrapper >
        <img src={musicGif} />
      </ImgWrapper >
      <Controller />
      <audio loop id="player" src={currentPlayUrl} >
      </audio>
      {
        nameSelect == "radio" ? <ContentBox /> : <HomeContentBox />
      }
    </Wrapper >
  )
}

export default Home
