import { useEffect } from "react"
import { useState } from "react"

const useGreeting = () => {

  const [wish, setWish] = useState("")
  useEffect(() => {
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      setTimeout(() => {
        setWish("- good morning (≧◡≦)")
      }, 4000)

      console.info('good morning')
    } else if (curHr < 18) {
      setTimeout(() => {
        setWish("- good afternoon")
      }, 4000)

      console.info('good afternoon')
    } else {
      setTimeout(() => {
        setWish("- good evening")
      }, 4000)
      console.info('good evening')
    }
    setTimeout(() => {
      setWish("")
    }, 10000)
  }, [])
  return {
    wish
  }
}
export { useGreeting }

