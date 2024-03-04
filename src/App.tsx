import { useState } from 'react'

import MyParticles from './components/Particles';

import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      

        <a href="spore.earth" target="_blank">
          <img src="/src/assets/spore-burn.jpg" className="art" alt="Spore art" />
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
      <MyParticles />
    </>
  )
}

export default App
