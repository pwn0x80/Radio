import { useEffect, useReducer, useState } from "react"
import { useSelector } from "react-redux"
import mode from "../../services/indexedDB"
import useController from "../../utils/useAudioController"
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
  const uuid = useSelector(state => state.radio.audio.uuid)
  const { playTrigger, playBtn, prevTrigger, nextTrigger, volumeMuteTrigger, volume } = useController()

  useEffect(() => {
    //indexedDB view is data available
    if (uuid == undefined) return
    mode().then((store) => {
      store.dataViewdb(uuid).onsuccess = (event) => {
        event.target.result === undefined ? setBookmark(true) : setBookmark(false)
      }
    })
  }, [trackName])
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
