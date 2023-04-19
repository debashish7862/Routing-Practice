import { useContext } from "react"
import myContext from "./Context"
export default function Five() {
const myData= useContext(myContext);
const countData=useContext(myContext)
    
  return (
   <div>
    <h4>Five Element</h4>
<h1>From one element:-{countData}
</h1>
   </div>
  )
}

