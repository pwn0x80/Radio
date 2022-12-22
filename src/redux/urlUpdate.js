import {
  updateStart,
  radioBaseUrlUpdateSuccess,
  updateCurrentPlaying,
  radioUpdateGenreSuccess,
  updateError
} from "./radioSlice";

let urlUpdate = (dispatch) => {
  try {
    console.log(process.env.REACT_APP_API_BASE_URL)
    fetch(process.env.REACT_APP_API_BASE_URL + "/baseurl").then(async (baseUrl) => {
      console.log("case", baseUrl)
      return await baseUrl.text()
    }).then((baseUrl) => {
      console.log("vase ", baseUrl)
      dispatch(radioBaseUrlUpdateSuccess({ baseUrl: baseUrl }))
    })
  } catch (err) {
    console.error(err)
    dispatch(updateError())
  }
}
export default urlUpdate;
