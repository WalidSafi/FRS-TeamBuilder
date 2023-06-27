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
    axios('/hello')
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
        <div id='MainContainer' className='relative bg-white p-10'>
          <div id='TeamBuilderContainerHome' className='w-full'>
            <img src={background}/>
            <div className='mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-10'>
              <h1 className='hidden sm:ml-6 sm:block'>TEAM BUILDER</h1>
            </div>
          </div>
        </div>
      )}      
    </div>
  )
}

export default App