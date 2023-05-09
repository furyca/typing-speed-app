import React from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
    const correctWords = useSelector(state => state.wordsSlice.accuracy.correctWords)
    const incorrectWords = useSelector(state => state.wordsSlice.accuracy.incorrectWords)
    const correctKeyPress = useSelector(state => state.wordsSlice.keyPress.correctKeyPress)
    const incorrectKeyPress = useSelector(state => state.wordsSlice.keyPress.incorrectKeyPress)
    const wordsPerMinute = Math.round(correctKeyPress/5)
    const accuracy = ((correctWords*100)/(correctWords+incorrectWords)).toFixed(2)

  return (
    <div className='results'>
        <div className='result-header'>
            <h3>{wordsPerMinute} K/DK</h3>
        </div>
        <div className='stats'>
            <div className='stat'><span>Doğruluk Oranı:</span><span>%{accuracy}</span></div>
            <div className='stat'><span>Tuş Vuruşu:</span><span>{correctKeyPress} - {incorrectKeyPress}</span></div>
            <div className='stat'><span>Doğru Sözcükler:</span><span>{correctWords}</span></div>
            <div className='stat'><span>Yanlış Sözcükler:</span><span>{incorrectWords}</span></div>
        </div>
        
    </div>
  )
}

export default Results