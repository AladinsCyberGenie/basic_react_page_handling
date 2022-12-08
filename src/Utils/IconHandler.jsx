import React from 'react'
import HomeSvg from '../Icons/Home'

function IconHandler({ open, Icon, text, path}) {
    
  return (
    <div className="sidebar-item">
        <Icon path={path} />
        {<span className="icon-text" style={open ? {} : {opacity: "0"}}>{text}</span>}
    </div>
  )
}

export default IconHandler