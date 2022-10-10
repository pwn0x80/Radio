import { useEffect, useState } from "react";
import { Wrapper, WrapperBox, OptionText } from "../../components/popUpBox/PopUpBox";
import mode from "../../services/indexedDB"
import {
  updateStart,
  radioUpdateGenreSuccess,
  updateCurrentPlaying,
  updateError,
  radioBaseUrlUpdateSuccess

} from "../../redux/radioSlice";
import { useDispatch } from "react-redux";
const BookMarklist = () => {
  const [dbData, setdbData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    mode().then((store) => {
      store.getAlldb().onsuccess = (event) => {
        setdbData(event.target.result)
      }
    })
  }, [])

  let playbookmarkTrigger = (detail) => () => {
    dispatch(updateCurrentPlaying(
      {
        uuid: detail.uuid,
        coverPic: detail.coverPic,
        trackName: detail.trackName,
        currentplayingUrl: detail.currentplayingUrl,
        color: detail.color
      }
    ));
  }
  return (
    <Wrapper>
      <WrapperBox>
        {
          dbData.map((data) => {
            return (
              <OptionText onClick={playbookmarkTrigger(data)}>
                {data.trackName}
                {data.tag}
              </OptionText>
            )
          })
        }
      </WrapperBox>
    </Wrapper>
  )
}

export default BookMarklist
