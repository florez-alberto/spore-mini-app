// import { useState } from 'react'
import { useEffect} from 'react'


import MyParticles from './components/Particles';
import './App.css'
import sporeLogo from "./assets/spore-burn.jpg";
import { platform } from 'os';

// import WebApp from '@twa-dev/sdk'
declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {

  // const [count, setCount] = useState(0)
  console.log("here"); 
  const version = window.Telegram.WebApp.version;
  const user = window.Telegram.WebApp.initDataUnsafe.user;
  console.log(user);
  const platform = window.Telegram.WebApp.platform;
  window.Telegram.WebApp.expand()
  window.Telegram.WebApp.MainButton.hide()
  // window.Telegram.WebApp.SettingsButton.hide()
  return (
    <>
      <MyParticles />
      <div>
        <a href="spore.earth" target="_blank">
          <img src={sporeLogo} className="art" alt="Spore art" />
        </a>

      </div>
      <h2>Burn it all</h2>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  */}
      {/* <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello Spore Fam! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>  */}
      <div>
        
        Version: {version}
        <br />
        Platform: {platform}
      </div>
    </>
  )
}

export default App
