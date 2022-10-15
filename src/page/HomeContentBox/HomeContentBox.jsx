import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper, MainContentOption, MainContentWrapper } from "../../components/contentWrapper/ContentWrapper"

import { updateCurrentPlaying } from "../../redux/radioSlice"
import { GenresList } from '../../page/Genres/GenresList.jsx';
import { statusControl } from "../../components/controller/Controller";
const HomeContentBox = () => {
  const dispatch = useDispatch()
  const baseUrl = useSelector(state => state.radio.audio.baseUrl);
  const [trending, setTending] = useState(null);
  const now = new Date();
  useEffect(() => {
    if (baseUrl == null) {
      return
    }

    let url = baseUrl + "/json/stations/search?hidebroken=true&limit=15&order=clickcount&language=english&reverse=true&tag=pop&tagExact=false"
    if (typeof (Storage) !== "undefined") {
      //browser support localStorage   
      if (localStorage.getItem('trendingList') != null) {
        let data = localStorage.getItem('trendingList')
        let newData = JSON.parse(data)
        // console.log(newData[newData.length - 1].expiry, now.getDay())
        if (data[newData.length - 1].expiry >= now.getDay()) {

          fetch(url).then((e) => {
            return e.json()
          }).then((data) => {
            localStorage.removeItem("trendingList")
            setTending(data);
            localStorage.setItem('trendingList', JSON.stringify(data))
            setTending(data)

          })
        } else {
          setTending(...JSON.parse(data))
          return
        }
      } else {
        fetch(url).then((e) => {
          return e.json()
        }).then((data) => {

          let newdata = [data, { expiry: now.getDay() }]
          localStorage.setItem('trendingList', JSON.stringify(newdata))
          setTending(data)
        })
      }
    }
    //browser does not support localStorage  
    else {
      fetch(url).then((e) => {
        return e.json()
      }).then((data) => {
        setTending(data);
      })
    }
  }, [baseUrl])

  let trendingTrigger = detail => (...ev) => {
    //todo error check 
    dispatch(updateCurrentPlaying(
      {
        coverPic: detail.favicon,
        trackName: detail.name,
        currentplayingUrl: detail.url_resolved,
        uuid: detail.stationuuid,
      }
    ));
  }

  if (trending == null) {
    return (
      <MainWrapper>
        <MainContentWrapper style={{
          height: '300px', overflowY: 'auto'
        }}>

          loading...
        </MainContentWrapper>
      </MainWrapper>

    )
  }

  return (
    <MainWrapper>
      <MainContentWrapper >
        Tending List
        {
          trending.map((e, keys) => {
            return (
              <div key={keys} data-id={`${e?.stationuuid}`} onClick={trendingTrigger(e)}>{e.name} </div>
            )
          })
        }
      </MainContentWrapper>
    </MainWrapper>
  )
}

export default HomeContentBox
