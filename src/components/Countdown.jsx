import { useDispatch, useSelector } from "react-redux";
import { countdown, resetApp } from "../redux/wordsSlice";
import { useEffect } from "react";

const Countdown = () => {
  const timeLeft = useSelector(state => state.wordsSlice.timer)
  const isTicking = useSelector(state => state.wordsSlice.isTicking)
  const dispatch = useDispatch()

  const formatTimer = () => {  
    let minutes = (Math.floor(timeLeft / 60).toString().padStart(2, '0'))
    let seconds = (timeLeft % 60).toString().padStart(2, '0')

    return `${minutes}:${seconds}`
  }
  const time = formatTimer()

  useEffect(() => {
    if (isTicking) {
      const intervalId = timeLeft > 0 && setInterval(() => dispatch(countdown()), 1000)

      return () => clearInterval(intervalId);
    }
    
  }, [timeLeft, isTicking])
  
  return (
    <div className="countdown">
      <p className="countdown-time">{time}</p> 
      <button className="res-button" onClick={() => dispatch(resetApp())}>Tekrar</button>
    </div>
  )
 
};

export default Countdown;
