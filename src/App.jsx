import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [running,setRunning] = useState(false);
  const [elapsedtime,setElapsedtime] = useState(0);

  useEffect(() => {
    let interval;

    if (running){
    interval = setInterval (() => {
setElapsedtime((prev)=> prev + 10 )

    },10
  )
    }
    else{
      clearInterval(interval)
    }
  
    return () => {
      clearInterval(interval)
    }
  }, [running])

  const startStopWatch = () => {
    setRunning(true)
  }
  const stopStopWatch = () => {
    setRunning(false)
  }
  const resetStopWatch = () => {
    setRunning(false)
    setElapsedtime(0)
  }


  const formatTime = (time)=>{
    const minutes = Math.floor(time/ 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      const milliseconds = Math.floor((time % 1000) / 10);

      return `${minutes}:${seconds < 10 ? '0': ''}${seconds}.${milliseconds< 10 ? '0': ''}${milliseconds}`
}


  return (
 <div className=" flex items-center justify-center my-52">
      <div className=" container">
      <h1 className=" text-center font-bold text-xl mb-6">Stop-Watch</h1>
      <h1 className=" text-center font-bold text-xl mt-4 mb-6">{formatTime(elapsedtime)}</h1>
        <div className=" flex justify-center space-x-10 text-lg font-bold">
            <button onClick={startStopWatch}  disabled={running} className="">start</button>
            <button onClick={stopStopWatch} disabled={!running} className="">stop</button>
            <button onClick={resetStopWatch} className="">reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
