import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import VideoJS from "./Videoplayer.jsx"

import { useRef } from 'react'



function App() {


  const playerRef=useRef(null)

  const videolink="http://localhost:8000/uploads/courses/dd442f43-6ea1-48ff-9efc-e82a2a502f71/index.m3u8"

const videoplayeroption={

  controls:true,
  responsive:true,
  fluid:true,
  sources:[
{
  src:videolink,
  type:"application/x-mpegURL"
}
  ]
}


const handlePlayerReady = (player) => {
  playerRef.current = player;

  // You can handle player events here, for example:
  player.on("waiting", () => {
    videojs.log("player is waiting");
  });

  player.on("dispose", () => {
    videojs.log("player will dispose");
  });
};

  return (
    <>

<div>
<h1>video player</h1>

<VideoJS options={videoplayeroption} onReady={handlePlayerReady}/>

</div>
      
    </>
  )
}

export default App
