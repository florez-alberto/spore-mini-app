// import { useState } from 'react'
import { useEffect} from 'react'


import MyParticles from './components/Particles';

import './App.css'
import sporeLogo from "./assets/spore-burn.jpg";

// import WebApp from '@twa-dev/sdk'
declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  useEffect(() => {
    function buttonOn() {
      // do something on btn click
    }

    let main_page = document.querySelector('#main_page');

    if (main_page) {
      window.Telegram.WebApp.expand(); //expand window after page loading

      window.Telegram.WebApp.MainButton.onClick(buttonOn); //set func on main button click
      // window.Telegram.WebApp.MainButton.setParams({'text': 'Корзина'}); // set btn params
      window.Telegram.WebApp.MainButton.hide(); //show telegram btn
    }
  }, []);
  // const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
