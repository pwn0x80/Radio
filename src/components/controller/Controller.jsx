import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import mode from "../../services/indexedDB"
import {
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

} from "./Controller.styles"

const Controller = () => {

  const name = useSelector(state => state.radio.audio.name)
  const trackName = useSelector(state => state.radio.audio.trackName)
  const baseUrl = useSelector(state => state.radio.audio.baseUrl)
  const coverPic = useSelector(state => state.radio.audio.converPic)
  const currentplayingUrl = useSelector(state => state.radio.audio.currentplayingUrl)
  const tag = useSelector(state => state.radio.audio.tag)
  const color = useSelector(state => state.radio.audio.color)
  const [bookmark, setBookmark] = useState(true)
  const [playBtn, setPlayBtn] = useState(false)
  const uuid = useSelector(state => state.radio.audio.uuid)
  const [volume, setVolume] = useState(false)
  const [wish, setWish] = useState("")
  useEffect(() => {
    if (uuid == undefined) return
    mode().then((store) => {
      // console.log(store.dataViewdb(uuid));
      store.dataViewdb(uuid).onsuccess = (event) => {
        event.target.result === undefined ? setBookmark(true) : setBookmark(false)
      }

    })

  }, [trackName])
  // 0 no buff 1 buff  3 not support  
  useEffect(() => {
    if (trackName == undefined) return
    let t = document.getElementById('player')
    // t.onvolumechange = (e) => { console.log(e) }
    Promise.resolve().then(() => {
      t.play().then(() => {
        setPlayBtn(true)
      }).catch((e) => {
        console.error("error", e)
      })
    })

  }, [trackName])
  let playTrigger = (e) => {
    if (trackName == undefined) { alert("plz select song first"); return }
    let t = document.getElementById('player')
    //  play
    if (t.currentTime > 0 && !t.paused && !t.ended) {
      t.pause()
      setPlayBtn(false)
    } else {
      setPlayBtn(true);
      t.play().then(
      ).catch((e) => {
        console.error(e)
      })
    }
  }
  let prevTrigger = (e) => {
    let currentDataId = document.querySelector(`div[data-id='${uuid}']`)
    currentDataId.previousSibling.click()
  }
  let nextTrigger = (e) => {
    let currentDataId = document.querySelector(`div[data-id='${uuid}']`)
    currentDataId.nextSibling.click()
  }
  let putData = () => {
    return {
      id: uuid.toString(),
      trackName: trackName.toString(),
      baseUrl: baseUrl,
      coverPic: coverPic,
      currentplayingUrl: currentplayingUrl,
      tag: tag,
      color: color,
      uuid: uuid
    }
  }
  let addDB = (store) => {
    mode().then((store) => {
      store.dataPutdb(putData())
    })

    setBookmark(false)
  }
  let removeDB = async () => {
    mode().then((store) => {
      store.dataDeletedb(uuid);
    })

    setBookmark(true)
  }
  let volumeMuteTrigger = () => {
    let muteBtn = document.getElementById('player')
    if (muteBtn.muted) {
      //pause true
      muteBtn.muted = false
      setVolume(false)
    } else {

      muteBtn.muted = true
      setVolume(true)
    }

  }
  return (
    <>
      <Controls>
        <VolumeWrapper onClick={volumeMuteTrigger} >
          <VolumeSvg mutevolume={volume ? 1 : 0} />
        </VolumeWrapper>

        <ControlsBtn>
          <PrevBtnSvg onClick={prevTrigger}>
          </PrevBtnSvg>
        </ControlsBtn>

        <ControlsBtn>

          <PlaybtnSvg playbtnstate={playBtn ? 1 : 0} onClick={playTrigger} >
          </PlaybtnSvg>

        </ControlsBtn>

        <ControlsBtn onClick={nextTrigger}>
          <NextBtnSvg>
          </NextBtnSvg>
        </ControlsBtn>

        {
          bookmark ?
            < MarkControlsBtnright onClick={addDB}
            >
              <AddbookmarkSvg />

            </MarkControlsBtnright>
            :
            < UnMarkControlsBtnright onClick={removeDB}
            >
              <AddbookmarkSvg />

            </UnMarkControlsBtnright>}
      </Controls>
    </>
  )
}


export default Controller
