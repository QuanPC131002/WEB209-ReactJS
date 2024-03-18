
import React, { useContext, useState } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const Count = () => {
    const {count, dispatch} = useContext(CounterContext)
  return (
    <div>
      {count.count}
      <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      <button onClick={() => dispatch({type: 'INCRESE', payload: 10})}>INCREASE</button>
    </div>
  )
}

export default Count
