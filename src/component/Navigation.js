import React, { useState } from 'react'
import './Navigation.css'
const Navigation = ({ FilterWord , currentRegion }) => {
    // track checkbox status
    const [check, setcheck] = useState(true)
    const InvertCheck = () => {
        setcheck(!check)
    }
    // send data to parent and invert checkbox 
   const onClicking = (word) => {
       FilterWord(word)
       InvertCheck()
    }
    return (
        <nav className="nav_wraper">
            <input type="checkbox" checked={check} onChange={InvertCheck} className="menu_toggler" />
            <div className="hamburger"><div></div></div>
            <div className="menu" onClick={InvertCheck}>
                <div>
                    <div>
                        <ul>
                            <li onClick={() => { onClicking('all') }} className={currentRegion === "all" ? "current_region" : ""}>All</li>
                            <li onClick={()=>{onClicking('region/africa')}} className={currentRegion === "region/africa" ? "current_region" : ""}>Africa</li>
                            <li onClick={()=>{onClicking('region/americas')}} className={currentRegion === "region/americas" ? "current_region" : ""}>Americas</li>
                            <li onClick={()=>{onClicking('region/europe')}} className={currentRegion === "region/europe" ? "current_region" : ""}>Europe</li>
                            <li onClick={()=>{onClicking('region/oceania')}} className={currentRegion === "region/oceania" ? "current_region" : ""}>Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
       </nav>
    )
}

export default Navigation
