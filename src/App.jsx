import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState({})
  const fetchRandomUser = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUser(response.data.results[0])
  }

  return (
    <div>
      <button type='button' onClick={fetchRandomUser}>
        Fetch
      </button>
      {user.name && <h1>{user.name.first}</h1>}
    </div>
  )
}

export default App
