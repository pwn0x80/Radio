// import { useEffect, useState } from "react"
// import { Subject } from "../../services/radioListServices.js"
// const Search = () => {
//   const [change, setChange] = useState(true)
//   useEffect(() => {
//     let Observer = {
//       signal: function() {
//         setChange(pre => !pre)
//       }
//     }
//     Subject.add(Observer);
//   }, [])

//   let trig = (e) => {
//     console.log(e.target.value)
//     let lol = e.target.value
//     console.log(lol)
//     // if (Subject.isDataAvailable()) {
//     let data = Subject.getState()
//     console.log(data)
//     for (let k of data) {
//       console.log(k)
//       // let t = k.name.filter((item) => {
//       // console.log(item)
//       // return item.includes(lol)
//       // })
//     }
//     console.log(data)
//     console.log(true)
//     // }

//   }
//   return (
//     <div>
//       <input onChange={trig} />
//       asd
//     </div>
//   )
// }

// export default Search
