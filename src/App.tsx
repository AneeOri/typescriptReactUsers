
import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry]= useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
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

  const sortedUsers = sortByCountry
  ? [...users].sort((a,b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  : users

  console.log({sortByCountry})
  
  return (
   <div className="App">
    <h1>Avilabe Users</h1>
    {/*JSON.stringify(users)*/}
    <header>
      <button onClick={toggleColors}>
         Colorear filas
      </button>
      <button onClick={toogleSortByCountry}>
        {sortByCountry ? 'No ordenar pais' : 'ordenar pais'}
      </button>
    </header>
    <main>
      <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers}/>
    </main>
   </div>
  )
}

export default App
