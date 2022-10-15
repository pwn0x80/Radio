import { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateStart,
  radioUpdateGenreSuccess,
  updateCurrentPlaying,
  updateError,
  radioBaseUrlUpdateSuccess

} from "../../redux/radioSlice";

import { Wrapper, WrapperBox, OptionText } from "../../components/popUpBox/PopUpBox";
import styled from 'styled-components';


let SearchBarinput = styled.input`
    border-radius: 30px;
    border-style : none;
    outline:none;
    padding-inline:1rem;
    margin-block:0.5rem;
`

const SearchBar = () => {
  const [searchData, setSearchData] = useState()
  const baseUrl = useSelector(state => state.radio.audio.baseUrl);

  const dispatchRedux = useDispatch()
  let querySearch = {
    country: "",
    name: "",
    countryExact: false,
    languageExact: false,
    hidebroken: true,
    language: "",
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "nameQuery":
        return { ...state, name: action.name }
      case "countryQuery":
        return { ...state, country: action.country, countryExact: true }
      case "languageQuery":
        return { ...state, languageQuery: action.languageQuery, countryExact: true }
        break;
    }
  }
  const [searchQueryStatus, dispatch] = useReducer(reducer, querySearch)

  const handleSearch = (searchQuery) => {
    dispatch({ type: "nameQuery", name: searchQuery.target.value })
  }
  useEffect(() => {
    let limit = 15
    const controller = new AbortController();
    const signal = controller.signal;
    let url = baseUrl + `/json/stations/search?hidebroken=${searchQueryStatus.hidebroken}&name=${searchQueryStatus.name}&limit=${limit}&language=${searchQueryStatus.language}`

    fetch(url, {
      signal,
    }).then((e) => {
      return e.json()
    }).then((data) => {
      setSearchData(data)

    }).catch((e) => {
    })
    return () => {
      controller.abort();
    }
  }, [searchQueryStatus])
  let searchTrigger = detail => (...ev) => {
    //todo error check 
    dispatchRedux(updateCurrentPlaying(
      {
        coverPic: detail.favicon,
        trackName: detail.name,
        currentplayingUrl: detail.url_resolved,
        uuid: detail.stationuuid,
      }
    ));
  }



  return (
    <Wrapper>
      <WrapperBox>


        <SearchBarinput placeholder='search here...' onChange={(e) => handleSearch(e)}></SearchBarinput>
        {
          searchData?.map((e, key) => {
            return (
              <OptionText onClick={searchTrigger(e)} keys={key}  >
                {e.name}
              </OptionText>
            )
          })
        }
      </WrapperBox>
    </Wrapper>


  )
}

export default SearchBar
