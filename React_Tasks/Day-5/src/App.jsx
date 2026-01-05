import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FetchAPIData, FetchAxiosData } from './APIData'

function App() {
  const [useData, setUseData]=useState(false);
  return (
    <>
    <FetchAPIData />
    <button onClick={()=>setUseData(!useData)}>Load More</button>
    { useData && <FetchAxiosData />}
    </>
  )
}

export default App
