import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

function Child() {

    const name=useContext(UserContext)
  return (
    <div>
        <h2>{name}</h2>
      <h1>child component</h1>
    </div>
  )
}

export default Child
