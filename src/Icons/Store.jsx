import React from 'react'
import { useNavigate } from 'react-router-dom'
function Store({ path }) {
    const navigation = useNavigate()
    return (
    <div onClick={() => navigation("/store")}>
        <svg className="icon" style={{enableBackground:"new 0 0 490.2 490.2"}} width="24" height="24" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.76,6l.45.89L7.76,8H12v5H4V6H6.76m.62-2H3A1,1,0,0,0,2,5v9a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H9L8.28,4.55A1,1,0,0,0,7.38,4Z" transform="translate(0 0)"/>
            <path d="M22.76,6l.45.89L23.76,8H28v5H20V6h2.76m.62-2H19a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H25l-.72-1.45a1,1,0,0,0-.9-.55Z" transform="translate(0 0)"/>
            <path d="M6.76,19l.45.89L7.76,21H12v5H4V19H6.76m.62-2H3a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H9l-.72-1.45a1,1,0,0,0-.9-.55Z" transform="translate(0 0)"/>
            <path d="M22.76,19l.45.89L23.76,21H28v5H20V19h2.76m.62-2H19a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H25l-.72-1.45a1,1,0,0,0-.9-.55Z" transform="translate(0 0)"/>
            <rect style={{fill: "none"}} width="32" height="32"/>
        </svg>
    </div>
  )
}

export default Store