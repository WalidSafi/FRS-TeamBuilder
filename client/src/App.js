import React, { useState, useEffect} from 'react'
import axios, { AxiosError } from 'axios'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    axios('/members')
      .then((response) => {
        setData(response.data)
      }
      )
  }, [])
      
  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <div>loading...</div>
      ) : (
          data.members.map((member, index) => (
            <p key={index}>{member}</p> 
          ))
      )}     
    </div>
  )
}

export default App