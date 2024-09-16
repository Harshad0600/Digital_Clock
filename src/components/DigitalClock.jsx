import { useState,useEffect } from "react"
import "./style.css"

const DigitalClock = () => {
    // useState for storing the Current Time
     const [time,setTime]=useState(new Date())
     console.log(time)

    // useEffect for Handling the Time 
      useEffect(()=>{
          let intervalID=setInterval(()=>{
             setTime(new Date()) //updating the Time after every 1s 
          },1000)

        return ()=>{
            clearInterval(intervalID)
        } //cleanup function

      },[])// dependency

//    formating the Time 
  function formatTime(){
    let hours=time.getHours()
    let min=time.getMinutes()
    let seconds=time.getSeconds()
    let AmPm=(hours>=12)?"PM":"AM"

    hours=hours%12 || 12
    // return `${Addzero(hours)}:${Addzero(min)}:${Addzero(seconds)} ${AmPm}`
    return (
      <>
        <span className="hours">{Addzero(hours)}</span>
        :<span className="minutes">{Addzero(min)}</span>
        :<span className="seconds">{Addzero(seconds)}</span>
        <span className="ampm"> {AmPm}</span>
      </>
    );
  }

  function Addzero(a){
    return (a<10?"0":"")+a
  }

  return (
    <div className="wrapper">
       <div className="text">
        <h1>{formatTime()}</h1>
       </div>
    </div>
  )
}

export default DigitalClock
