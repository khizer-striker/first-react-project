import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FeatureOne />
      <FeatureTwo />
        
    </>
  )
}

export default App
