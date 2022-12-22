import { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./page/Home/Home"
import { Subject } from "./services/radioListServices";
import urlUpdate from "./redux/urlUpdate"
import { useDispatch } from "react-redux";
import { updateStart } from "./redux/radioSlice";
const AppWrapper = styled.div`
background: #FEF5ED;
`;
function App() {
  let dispatch = new useDispatch()
  useEffect(() => {
    (async () => {
      dispatch(updateStart())
      urlUpdate(dispatch)
      // genres fetch names
      let data = await fetch(process.env.REACT_APP_API_BASE_URL);
      data = await data.json()
      // set data to observer
      Subject.setState(data)
    })()
  }, [])

  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
