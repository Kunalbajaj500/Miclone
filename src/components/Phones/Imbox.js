import React from 'react'
import "../../styles/imbox.css"
import c2 from "../../Images/c2.png"
import screen2 from "../../Images/amo.png"
import sound from "../../Images/sound.jpg"
import charging from "../../Images/fc.png"
import proc from "../../Images/proc.png"
import camera from "../../Images/camera.png"

const imbox = () => {
  return (
    <div className='Flexi' >
        <div className='images'><h2>120 W Super Charging</h2> <p>Hyper Charging Speed</p><img src={charging} /> </div>
        <div className='images'><h2>Super Amoled Screen</h2><p>HD Quality Display</p><img src={c2} /> </div>
        <div className='images'><h2>SnapDragon Processor</h2><p>Higher Perfomange 700d</p><img src={proc} /> </div>
        <div className='images'><h2>Dual Speaker</h2><p>Surround Sound</p><img src={sound} /> </div>
        <div className='images'><h2>High Defination Camera</h2><p>108 mp Camera</p><img  src={camera}/></div>
        <div className='images'><h2>High Dedination Screen</h2><p>3D Screen</p><img  src={screen2}/> </div>
        </div>
  )
}

export default imbox