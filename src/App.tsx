
import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
       setUsers(res.results)  
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
   <div className="App">
    <h1>Prueba técnica</h1>
    {/*JSON.stringify(users)*/}
    <header>
      <button onClick={toggleColors}>
         Colorear filas
      </button>
    </header>
    <main>
      <UsersList showColors={showColors} users={users}/>
    </main>
   </div>
  )
}

export default App
