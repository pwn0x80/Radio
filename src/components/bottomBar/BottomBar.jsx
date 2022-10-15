
import { useEffect, useReducer, useState } from 'react';
import { Wrapper, BookmarkSvg, BookMarkSvg, HeadphoneGlobe, BottomText, BottomBoxWrapper } from "./BottomBar.styles.js"
import { GenresList } from '../../page/Genres/GenresList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateStart,
  radioUpdateGenreSuccess,
  updateCurrentPlaying,
  updateError,
  radioBaseUrlUpdateSuccess

} from "../../redux/radioSlice";
import BookMarklist from '../../page/Bookmarklist/BookMarklist.jsx';
import SearchBar from '../../page/SearchBar/SearchBar.jsx';
const BookMarkBtn = () => {
  let [bookmark, setBookmark] = useState(null);
  return (
    <>

      <BookmarkSvg bookmarkanimate={bookmark} onClick={() => setBookmark
        (
          a => {
            if (a == null) {
              return "animate";
            } else if (a == true) {
              return null;
            } else {
              return null;
            }
          }
        )} />
      <BottomText>
        search
      </BottomText>
    </>
  )
}
const BookmarkBtn = () => {
  let [bookmarkAnimation, setBookMarkAnimation] = useState(false);
  let [bookmarkData, setBookmarkData] = useState([])
  const name = useSelector(state => state.name)
  const dispatcher = new useDispatch()
  let lofiTrigger = () => {
    setBookMarkAnimation(e => !e)
  }
  return (
    <div onClick={lofiTrigger} >
      <BookMarkSvg listbookclick={bookmarkAnimation ? 1 : 0} />
      <BottomText>
        bookmark
      </BottomText>

    </div>
  )
}





const Topbar = () => {

  let [searchBox, setSeachBox] = useState(false);
  let [bookmarkBox, setbookmarkBox] = useState(false);
  let [listBox, setListBox] = useState(false);
  let [caseSwitch, setCaseSwitch] = useState(0)
  return (
    <>

      <Wrapper>
        <BottomBoxWrapper onClick={e => { setbookmarkBox(false); setListBox(false); setSeachBox(!searchBox) }}>
          <BookMarkBtn />
        </BottomBoxWrapper >
        <BottomBoxWrapper onClick={(e) => { setListBox(!listBox); setbookmarkBox(false); setSeachBox(false) }} >
          {/* todo lefting up */}
          <HeadphoneGlobe />
          <BottomText>
            radio
          </BottomText>
        </BottomBoxWrapper >
        <BottomBoxWrapper onClick={() => { setbookmarkBox(!bookmarkBox); setListBox(false); setSeachBox(false); }} >
          <BookmarkBtn />
        </BottomBoxWrapper >
      </Wrapper>
      {listBox ? < GenresList toggle={setListBox} /> : bookmarkBox ? <BookMarklist /> : searchBox ? <SearchBar /> : ""}

    </>
  )
}

export default Topbar
