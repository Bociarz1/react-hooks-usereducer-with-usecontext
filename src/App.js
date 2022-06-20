import React, { useReducer } from "react"
import Counter from './components/Counter'

  // 1. create initialState
  const initialState = 0
  // 2. create reducer
  export const actions = {
    INCREASE: 'INCREASE',
    DECREASE: 'DESCREASE',
    RESET: 'RESET'
  }

  const reducer = (state, action) => {
    switch(action) {
      case actions.INCREASE: 
        return state+1
      case actions.DECREASE:
        return state-1
      case actions.RESET:
        return initialState
    }
  }
// 4. create Context
export const CountContext = React.createContext()
const CountContextProvider = CountContext.Provider

function App() {
  // 3. create useReducer
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
   <>
   {/* 4. create Provider */}
    <CountContextProvider value={{count, dispatch}} >
      <Counter />
    </CountContextProvider>
   </>
  );
}

export default App;
