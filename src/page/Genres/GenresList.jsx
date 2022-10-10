import { Wrapper, WrapperBox, OptionText } from "../../components/popUpBox/PopUpBox";
import React, { useCallback, useEffect, useInsertionEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Subject } from "../../services/radioListServices";
import urlUpdate from "../../redux/urlUpdate.js"
import {
  updatestart,
  radioUpdateGenreSuccess,
  updateCurrentPlaying,
  updateError,
  radioBaseUrlUpdateSuccess,
  updateStart
} from "../../redux/radioSlice";
import { useInfiniteScroller } from "@pwn0x80/react-infinite-scroller";

// https://www.npmjs.com/package/@pwn0x80/react-infinite-scroller
let fetchFlowGenres
export const GenresList = ({ toggle }) => {
  const { scrollFetch, setScrollFetch, InfiniteScroll } = useInfiniteScroller()



  // store genres list here
  let [flowgenres, setFlowgenres] = useState([])
  // let observerRef = useRef();
  const dispatch = new useDispatch()
  useEffect(() => {
    let Observer = {
      signal: function() {
        setScrollFetch(e => !e)
      }
    }
    Subject.add(Observer);
  }, [])


  let isGenresDataAvailable = () => {
    if (flowgenres[0] == null) {
      return true;
    }
    return false;
  }
  useEffect(() => {
    if (isGenresDataAvailable()) {
      fetchFlowGenres = Subject.getFlow();
    }
    if (Subject.isDataAvailable()) {
      let offset = 30;
      for (let i = 0; i < offset; i++) {
        let newGenres = fetchFlowGenres.next().value;
        setFlowgenres((e) => [...e, newGenres]);
      }
    } else {
      return
    }
  }, [scrollFetch])

  let selectTrigger = (e) => {
    toggle(false)
    dispatch(updateStart())
    try {
      dispatch(radioUpdateGenreSuccess({ name: "radio", genres: e.target.innerHTML }))
    } catch {
      dispatch(updateError())
    }
  }

  return (
    <Wrapper>
      <WrapperBox>
        {
          flowgenres?.map((element, keys) => {
            return (
              <>
                <InfiniteScroll >
                  <OptionText onClick={selectTrigger} >
                    {element?.name}
                  </OptionText>
                </InfiniteScroll>
              </>
            )
          })
        }
      </WrapperBox>
    </Wrapper>
  )
}

