import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({})
  const fetchRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    setUser(data.results[0])
  }

  return (
    <div>
      <button type='button' onClick={fetchRandomUser}>
        Fetch
      </button>
      {user.name && (
        <div>
          <ul>
            <li>Gender: {user.gender}</li>
            <li>
              Name: {user.name.title} {user.name.first} {user.name.last}
            </li>
            <li>
              Location:
              <ul>
                <li>
                  Address: {user.location.street.number}{' '}
                  {user.location.street.name}, {user.location.city},{' '}
                  {user.location.state}, {user.location.country}{' '}
                  {user.location.postcode}
                </li>
                <li>
                  Coordinates: {user.location.coordinates.latitude}{' '}
                  {user.location.coordinates.longitude}
                </li>
                <li>
                  Timezone: {user.location.timezone.offset}{' '}
                  {user.location.timezone.description}
                </li>
              </ul>
            </li>
            <li>Email: {user.email}</li>
            <li> DOB: {user.dob.date} </li>
            <li>Age: {user.dob.age} </li>
            <li>Phone: {user.phone}</li>
            <li>
              Picture: <img src={user.picture.large} alt='large' />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
