import React ,{useState} from 'react'
 
import { useRecorder } from 'use-recorder'

 
const Voice = () => {
  const { audio,start, stop, player } = useRecorder()
  const[clicked,setClicked]=useState(null)
  const [play,setPlay]=useState(false)
  const[sound,setSound]=useState(false)
  const change=()=>{
    console.log(audio)
    setSound(true)
  }

  const  handleClick=()=>{
    setClicked((prevState)=>!prevState)
  }
  const handlePlay=()=>{
    setPlay((prevState)=>(!prevState))
  }
  return (
    <>
     <div class="flex justify-center">
      <button onClick={clicked?stop:start}><input onClick={handleClick} type="radio" name="radio-6" class={clicked?"mr-2 radio radio-lg checked:bg-red-500":"mr-2 radio radio-lg :bg-red-500"}  checked />
</button>
{/* <button onClick={handlePlay}></button> */}

      <button class="btn btn-outline btn-primary" onClick={() =>{player.play();handlePlay();} }><p >{play?'Playing...':'Play'}</p></button>
 

      </div>
      <div class="mt-5 flex justify-center"><a href={play?audio.audioUrl:''} download> <img class={play?" animate-bounce":'" invisible animate-bounce"'} src={require('../assests/arrow.png')}/>
        </a></div>
      </>
   
        
  )
}
 
export default Voice