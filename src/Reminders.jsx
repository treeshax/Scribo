import React from 'react'
import './components/ui/css/reminders.css'
import { BackgroundRippleEffect } from './components/ui/background-ripple-effect'
import Shuffle from './components/ui/Shuffle.jsx'

function Reminders() {
  return (
    <div className="title-style relative overflow-hidden flex flex-col items-center justify-center">
      <div className="z-10 pointer-events-none">
        <Shuffle
          text="Reminders"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover
          respectReducedMotion={true}
          loop={false}
          loopDelay={0}
        />
        <p className="text-zinc-400">Stay on top of your tasks</p>
      </div>
      <BackgroundRippleEffect rows={50} cols={60} />
    </div>
  )
}

export default Reminders