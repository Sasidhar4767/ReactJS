import Bootstrap from "./Bootstrap/Bootstrap"
import FiguresCards from "./Bootstrap/FiguresCards"
import OnClickEvent from "./Events/OnClickEvent"
import ProductITems from "./Events/ProductITems"
import ShoppingCart from "./Events/ShoppingCart"
import WishMessage from "./Events/WishMessage"
import ListAndKeys from "./ListAndKeys"
import ClassState from "./State/ClassState"
import CounterCompState from "./State/CounterCompState"
import Stylings from "./Stylings/Stylings"

const App = () => {
  const details = {
    name: 'sasi',
    age: 22,
    id: 1,
    email : 'sasisasi@12345',
    status : 'true'
    }
  return(
    <div className="App ">
      <h2 className="bg-warning text-white p-3 m-1"> React with Events heandiling </h2>
      
      
      < ListAndKeys />
      
      {/* < CounterCompState /> */}

      {/* <ShoppingCart/> */}
 
      {/* < ProductITems/> */}
      {/* < WishMessage/> */}
      
      {/* < OnClickEvent/> */}

      {/* < Bootstrap/> */}

      {/* < FiguresCards/> */}
      
      {/* < ClassState /> */}

      {/* < Stylings /> */}

    </div>
  )
}

export default App