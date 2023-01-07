import React from 'react'
import BottomBox from './Components/BottomBox/BottomBox'
import TopBox from './Components/TopBox/TopBox'

const App = () => {
  return (
    <div className="w-full w-screen-xl h-screen mx-auto py-24  bg-indigo-800" >
    <TopBox />
    <BottomBox/>
    </div>
  )
}

export default App