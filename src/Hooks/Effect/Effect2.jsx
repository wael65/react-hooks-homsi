import { useEffect, useState } from 'react'

export default function Effect2() {

  const [inputValue, setInputValue] = useState('')
  const [users, setUsers] = useState([])
  const [filterUsers, setFilterUsers] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))

        return () => {return false}
  },[])


  useEffect(() => {
    setFilterUsers(users)
  },[users])


  useEffect(() => {
      const filter  = users.filter( 
        user => user.name.toLowerCase().includes(inputValue)
    )
    setFilterUsers(filter)
  },[inputValue])



  return (

  <>

      <input type="text" className="search" onInput={e => setInputValue(e.target.value)}></input> 

      {filterUsers.map(user => 
        <h2 key = {user.id} >{user.name}</h2>
        
      )}  

  </>
  )
}

 