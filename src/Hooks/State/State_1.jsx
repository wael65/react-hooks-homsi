
// {useState} hook

import { useState } from "react"

export default function State1() {

  const [value, setValue] = useState(0)


  const updateUp = () => setValue(prev => prev + 1)
  const updateDown = () => setValue(value - 1)

  // function update() {
  //   setValue('value changed')
  // }

 
  return (
    
    <>

    <h1>{value}</h1>
    <button onClick={updateUp}>+</button>
    <button onClick={updateDown}>-</button>

    </>
  )
}

 