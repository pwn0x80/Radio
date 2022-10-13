import { useSelector } from "react-redux"
import { useEffect, useReducer, useState } from "react"
const initAudio =
{
  success: false,
  pending: false,
  error: false,
}


const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { success: false, pending: true, error: false }
    case "success":
      return { success: true, pending: false, error: false }
    case "fail":
      return { success: false, pending: false, error: true }
  }
}


function startPlayback(handleStart) {
  handleStart()
  return document.getElementById('player').play()
}


export let useController = () => {
  const [currentAudioStatus, dispatch] = useReducer(reducer, initAudio);
  const [volume, setVolume] = useState(false)
  const handleStart = () => {
    dispatch({ type: "start" });
  };
  const handlesuccess = () => {
    dispatch({ type: "success" });
  };
  const handleError = () => {
    dispatch({ type: "fail" });
  };

  const uuid = useSelector(state => state.radio.audio.uuid)
  const trackName = useSelector(state => state.radio.audio.trackName)
  const [playBtn, setPlayBtn] = useState(false)
  useEffect(() => {
    if (trackName == undefined) return
    startPlayback(handleStart).then(() => {
      handlesuccess()
      setPlayBtn(true)
    }).catch(() => {
      handleError()
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
  return { volume, volumeMuteTrigger, playTrigger, playBtn, prevTrigger, nextTrigger, currentAudioStatus }
}

export default useController;
