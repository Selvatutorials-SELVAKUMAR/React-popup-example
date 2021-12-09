import React , {useState } from 'react'
import './App.css'
import Popup from './Components/Popup'
function App() {
    const [openPopup,setPopup] = useState(false)
    return (
        <div className = 'app'>
            <button onClick = {() => setPopup(!openPopup)}>Show Popup</button>
            {
                openPopup && <Popup closePopup = {() => setPopup(!openPopup)}/>
            }
        </div>
    )
}

export default App
