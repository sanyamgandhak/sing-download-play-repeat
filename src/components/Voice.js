import React from 'react'
 
import { useRecorder } from 'use-recorder'
import '../static/mic.scss'
 
const Voice = () => {
  const { audio,start, stop, player } = useRecorder()
  const change=()=>{
    console.log(audio)
  }
  return (
    <div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={() => player.play()}>play</button>
      <button onClick={() => player.pause()}>pause</button>
      <button onClick={change}>Download</button>
      
      <div class="container">

	<button id="speech" class="btn m-left type2">
  <div class="pulse-ring"></div>
	<i class="fa fa-microphone" aria-hidden="true"></i>
			</button>
</div>

      </div>
  )
}
 
export default Voice