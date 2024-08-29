
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting]= useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState <string | null>(null)

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    //setSortByCountry(prevState => !prevState)
    const newSortingValue = sorting === SortBy.NONE
    ? SortBy.COUNTRY
    : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort : SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
       setUsers(res.results)  
       originalUsers.current = res.results
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
  ? users.filter(user => {
    return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  })
  :
  users
  },[users, filterCountry])

  const sortedUsers = useMemo(() => {

    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties : Record<string, (user: User) => any> = {
      [SortBy.COUNTRY] : user => user.location.country,
      [SortBy.NAME] : user => user.name.first,
      [SortBy.LAST] : user => user.name.last
    } 
    return  [...filteredUsers].sort((a,b) => {
      const extractProperty = compareProperties[sorting]
      return  extractProperty(a).localeCompare(extractProperty(b))
    })
  },[filteredUsers, sorting])

  /*
  const sortedUsers = sortByCountry
  ? [...filteredUsers].sort((a,b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  : filteredUsers*/

 
  
  return (
   <div className="App">
    <h1>Avilabe Users</h1>
    {/*JSON.stringify(users)*/}
    <header>
      <button onClick={toggleColors}>
         Colorear filas
      </button>
      <button onClick={toogleSortByCountry}>
        {sorting === SortBy.COUNTRY ? 'No ordenar pais' : 'ordenar pais'}
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      <input placeholder='filtra por País' onChange={(e) => {
             setFilterCountry(e.target.value)
      }}/>
    </header>
    <main>
      <UsersList changeSorting={handleChangeSort} deleteUser={handleDelete} showColors={showColors} users={sortedUsers}/>
    </main>
   </div>
  )
}

export default App
