import { useEffect, useState, useRef } from 'react';



export const useTimer = (maxTime: number)=>{
  const [time, setTime] = useState(maxTime)
  const interval = useRef<NodeJs.TimeOut>()

  const startTimer =()=>{

    setTime(maxTime)
    interval.current = setInterval (()=>{
      setTime((t)=> t -1);
    },1000)}

    

    const clearTimer =() => {
      clearInterval(interval.current)
    };

  return{
    time,
    startTimer,
    clearTimer,
    
   }
  }