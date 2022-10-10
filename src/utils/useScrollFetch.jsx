import React, { useCallback, useRef, useState } from "react";
let useInfiniteScroller = () => {
  const [scrollFetch, setScrollFetch] = useState(true)
  let observerRef = useRef();
  const callbackRef = useCallback(node => {
    if (observerRef.current) observerRef.current.disconnect()
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting) {
        setScrollFetch((boolVal) => !boolVal)
      }
    })
    if (node) observerRef.current.observe(node)
  }, [])
  let Rendering = ({ children }) => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, { ref: callbackRef })
    })

  }
  return {
    callbackRef, scrollFetch, setScrollFetch, Rendering
  }
}
export default useInfiniteScroller
