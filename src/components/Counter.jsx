// 5. import corrent values
import { useContext } from "react";
import { CountContext, actions } from "../App";

function Counter() {
  // 6. use useContext
  const ConsumerContext = useContext(CountContext)
  const count = ConsumerContext.count
  const dispatch = ConsumerContext.dispatch
  return ( 
    <>
    {/* 7. display in UI */}
      <h4>Counter</h4>
      <button onClick={()=>{dispatch(actions.INCREASE)}}>Increase</button>
      <button onClick={()=>{dispatch(actions.DECREASE)}}>Decrease</button>
      <button onClick={()=>{dispatch(actions.RESET)}}>Reset</button>
      Count value:{count}
    </>
   );
}

export default Counter;