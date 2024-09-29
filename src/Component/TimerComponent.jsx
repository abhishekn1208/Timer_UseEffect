import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const Timer = setInterval(() => {
            setTime(prev=> prev+1)
        }, 1000);
       return ()=>{
        clearInterval(Timer)
       }
    },[])

  return (
    <div>
      <h2>Timer : {time} seconds</h2>
    </div>
  )
}

export default TimerComponent
