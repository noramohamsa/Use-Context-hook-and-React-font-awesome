import React from 'react'
import { useContext } from 'react'
import { UseContext } from '../App'

function Componanatc() {
  const User = useContext(UseContext)
  return (
    <div>
      {/* Hello from Componanatc */}
      <h1>My Name is : {User}</h1>
    </div>
  )
}

export default Componanatc
