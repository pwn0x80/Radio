import {
  updateStart,
  radioBaseUrlUpdateSuccess,
  updateCurrentPlaying,
  radioUpdateGenreSuccess,
  updateError
} from "./radioSlice";

let urlUpdate = (dispatch) => {
  try {
    fetch('https://radio-api34.herokuapp.com/baseurl').then(async (baseUrl) => {
      return await baseUrl.text()
    }).then((baseUrl) => {
      dispatch(radioBaseUrlUpdateSuccess({ baseUrl: baseUrl }))
    })
  } catch (err) {
    console.error(err)
    dispatch(updateError())
  }
}
export default urlUpdate;
