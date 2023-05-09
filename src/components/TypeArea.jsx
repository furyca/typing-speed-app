import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCounting, updateInput, compare } from '../redux/wordsSlice'

const TypeArea = () => {
  const isTicking = useSelector(state => state.wordsSlice.isTicking)
  const showResults = useSelector(state => state.wordsSlice.showResults)
  
  const dispatch = useDispatch()

  const handleChange = e => {
    if (e.target.value === " ") {
      e.target.value = ""
    }
    else if (!isTicking) {
      dispatch(startCounting())
      dispatch(updateInput(e.target.value))
      dispatch(compare(e.target.value))
    }
    else {
      dispatch(updateInput(e.target.value))
      
      if (e.target.value.includes(" ")) {
        e.target.value = "";
      }
      else {
        dispatch(compare(e.target.value))
      }
    }
  }
  return (
    <div className='type-area'>
        <input type="text" onChange={e => handleChange(e)} disabled={showResults} />
    </div>
  )
}

export default TypeArea