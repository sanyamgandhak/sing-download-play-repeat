import React, { useState, useEffect } from "react";
import song from "../static/a.mp3"
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );



  return [playing, toggle];
};

const Radio = ( ) => {
  const [playing, toggle] = useAudio(song);

  return (
    <div>
      <button onClick={toggle}><input type={playing?"radio":''} name="radio-3" class="radio radio-secondary" checked /></button>
    </div>
  );
};

export default Radio