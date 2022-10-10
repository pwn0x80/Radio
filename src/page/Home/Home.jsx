import { useEffect, useState } from "react";
import musicGif from '../../assets/gif/musicGif.gif'
import Controller from '../../components/controller/Controller';
import ContentBox from "../../components/contentBox/ContentBox"
import {

  Wrapper,
  TextWrapper,
  SmallTextWrapper,
  ImgWrapper
} from '../Home/Home.style.jsx'
import { useGreeting } from "../../utils/useGreeting"
import { useSelector } from "react-redux";

const Home = () => {

  const genresSelect = useSelector(state => state.radio.audio.genres)
  const currentPlayUrl = useSelector(state => state.radio.audio.currentplayingUrl);
  const trackname = useSelector(state => state.radio.audio.trackName);
  const nameSelect = useSelector(state => state.radio.audio.name)
  const [status, setStatus] = useState(0)
  const { wish } = useGreeting()

  useEffect(() => {
    let t = document.getElementById('player')
    t.addEventListener('loadstart', function() {
      setStatus(1)
    });
    t.addEventListener('loadeddata', function(e) {
      if (e.target.readyState > 2) {
        setStatus(0)
      }
      // } else {
      //   setStatus(0)
      // }
    });
  }, [trackname])

  return (
    < Wrapper >
      <TextWrapper>
        {/* // TODO HOC pattern */}
        {status == 1 ? "loading..." : status == 3 ? "not support" : trackname == undefined ? (" (≧◡≦)" + wish) : ("-" + trackname)}

        <SmallTextWrapper>
          {genresSelect}
        </SmallTextWrapper>
      </TextWrapper>
      {/* // TODO seprate this image - affect re-rendering */}
      < ImgWrapper >
        <img src={musicGif} />
      </ImgWrapper >
      <Controller />
      <audio loop id="player" src={currentPlayUrl} >
      </audio>
      {
        nameSelect == "radio" ? <ContentBox /> : "no data"
      }
    </Wrapper >
  )
}

export default Home
