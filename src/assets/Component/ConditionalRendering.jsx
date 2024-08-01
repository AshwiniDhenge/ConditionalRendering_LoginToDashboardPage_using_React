import React from 'react'
import { useState } from 'react'
import '../CSS/style.css'

const ConditionalRendering = () => {

  // const status=true


  const [isLogin, SetLogin] = useState(false)
  const [user, setUser] = useState({ name: '', email: '' })

  const handleLogIn = () => {
    setUser({ name: 'Ashwini', email: 'ash416@gmail.com' })
    SetLogin(true)
  }
  const handleLogOut = () => {
    setUser({ name: '', email: '' })
    SetLogin(false)
  }

  return (
    <>
      {/* {
        status && <h1>Hello Buddy</h1>
      } */}


      {isLogin
        ?
        (<>
          <h1>Dashboard Page</h1>
          <p>WelCome, {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogOut}>LogOut</button>
        </>)
        :
        (<>
          <h1>Log In</h1>
          <button onClick={handleLogIn}>Log In</button>
        </>)
      }
    </>
  )
}

export default ConditionalRendering
