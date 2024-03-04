import { useState } from 'react'

import MyParticles from './components/Particles';

import './App.css'
import sporeLogo from "./assets/spore-burn.jpg";

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyParticles />
      <div>
        <a href="spore.earth" target="_blank">
          <img src={sporeLogo} className="art" alt="Spore art" />
        </a>
      </div>
      <h1>Spore is back.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello Spore Fam! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App
