import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OpenSvg from '../Icons/Navigation'
import IconHandler from '../Utils/IconHandler'
import HomeSvg from '../Icons/Home'
import SettingsSvg from '../Icons/Settings'
import StoreSvg from '../Icons/Store'


function Sidebar() {
    const [open, setOpen] = useState(false)
    
    return ( 
        <div className={(open === true ? "sidebar open" : "sidebar")}
            tabIndex="0" 
            onBlur={ () => {open == true ? setOpen(false) : null} }>   

            <div className="sidebar-item" onClick={() => setOpen(!open)}>
                <OpenSvg />
                {<span className="icon-text" style={open ? {} : {opacity: "0"}}>collapse</span>}
            </div>
            <IconHandler open={open} Icon={HomeSvg} text={"Home"} path={"/"}/>
            <IconHandler open={open} Icon={StoreSvg} text={"Store"} path={"/store"}/>
            <IconHandler open={open} Icon={SettingsSvg} text={"Settings"} path={"/settings"}/>
        
        </div>
    )
}

export default Sidebar