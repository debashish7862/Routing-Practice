import myContext from"./Context"
import Two from "./Two"
import { useState } from "react"


export default function One() {
    const[state,setState]=useState("I am from one element")
    const [count,setCount]=useState(0)
  return (
 <div>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
<h2>First Component</h2>
<myContext.Provider value={count}>
    <Two />
</myContext.Provider>
 </div>
  )
}

