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
  let InfiniteScroll = useCallback(({ len, children }) => {
    return React.Children.map(children, child => {
      if (children.key == len - 3 || len == undefined) {
        return React.cloneElement(child, { ref: callbackRef })
      } else {
        return React.cloneElement(child, {})
      }
    })
  }, [])
  return {
    callbackRef, scrollFetch, setScrollFetch, InfiniteScroll
  }
}
export default useInfiniteScroller
