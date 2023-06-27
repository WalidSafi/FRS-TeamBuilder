import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'
import Navbar from './NavigationBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import background from './Images/background.png'
import TeamBuilder from './TeamBuilderComponents/TeamBuilder'
import TeamBuilderId from './TeamBuilderComponents/TeamBuilderId'
import TeamBuilderAuthor from './TeamBuilderComponents/TeamBuilderAuthor'
import NotFound from './NotFoundComponent/NotFound'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    axios('/team')
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      }
      )
  }, [])
      
  return (
    <div>
        <Navbar />
        <Router>
            <Routes>
                <Route path="/teamBuilder" element={<TeamBuilder />} />
                <Route path="/teamBuilder/:id" element={<TeamBuilderId />} />
                <Route path="/teamBuilder/author" element={<TeamBuilderAuthor />} />
                <Route path="/NotFound" element={<NotFound />} />
             </Routes>
        </Router>
      {(typeof data === 'undefined') ? (
        <div>loading...</div>
      ) : (
        <div id='MainContainer' class='relative bg-white p-10'>
          <div id='TeamBuilderContainerHome' class='w-full'>
            <img src={background}/>
            <div class='mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-10'>
              <h1 class='hidden sm:ml-6 sm:block'>TEAM BUILDER</h1>
              <p class='text-3xl font-bolt underline'>{data.id}</p>
              <p class='text-3xl font-bolt underline'>{data.author}</p>
            </div>
          </div>
        </div>
      )}      
    </div>
  )
}

export default App