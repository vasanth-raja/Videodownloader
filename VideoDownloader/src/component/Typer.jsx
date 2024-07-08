import React from 'react'
import Typewriter from 'typewriter-effect';
const Typer = () => {
  return (
    <Typewriter
  options={{
    strings: ['Instagram', 'LinkedIn','Facebook','Youtube'],
    autoStart: true,
    loop: true,
  }}
/>
  )
}

export default Typer