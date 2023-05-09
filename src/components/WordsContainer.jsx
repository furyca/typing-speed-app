import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

const WordsContainer = () => {
  const words = useSelector(state => state.wordsSlice.words)
  const activeWord = useSelector(state => state.wordsSlice.activeWord)
  const status = useSelector(state => state.wordsSlice.status)

  const slicedWords = words.map((word) => {
      return <span 
        key={nanoid()} 
        className={`${activeWord.index === words.indexOf(word) ? status : ''} word`}
        >
          {`${word}`}
        </span>;
    })
    .slice(0, 50);

  return (
    <div className='words-area'>
      {slicedWords}
    </div>
  )
}

export default WordsContainer