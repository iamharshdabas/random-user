import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState({})
  const getRandomUser = () => {
    axios
      .get('https://randomuser.me/api/')
      .then((response) => setUser(response.data.results[0]))
  }
  return (
    <div>
      <button type='button' onClick={getRandomUser}>
        Fetch
      </button>
      {user.name && <h1>{user.name.first}</h1>}
    </div>
  )
}

export default App
