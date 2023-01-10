import React from 'react'
import BottomBox from './Components/BottomBox/BottomBox'
import TopBox from './Components/TopBox/TopBox'

const App = () => {
  return (
    <div className="Project_Parent bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 " >
    <TopBox />
    <br/>
    <BottomBox/>
    </div>
  )
}

export default App