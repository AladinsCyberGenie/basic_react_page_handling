import React from 'react'
import { useNavigate } from 'react-router-dom'

function Settings({ path }) {
    const navigation = useNavigate()
    return (
    <div onClick={() => navigation("/settings")}>
        <svg className="icon" width="24" height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 490.2 490.2" style={{enableBackground:"new 0 0 490.2 490.2"}} xmlSpace="preserve">
            <g>
                <g>
                    <g>
                        <path d="M469.1,173.1h-37.5c-1-3.1-3.1-6.3-4.2-9.4l26.1-26.1c8.3-8.3,8.3-20.9,0-29.2l-71.9-71.9c-8.3-8.3-20.9-8.3-29.2,0
                            l-26.1,26.1c-3.1-2.1-6.3-3.1-9.4-4.2V20.9C316.9,9.4,307.5,0,296,0H193.9C182.4,0,173,9.4,173,20.9v37.5c-3.1,1-6.3,3.1-9.4,4.2
                            l-26.1-26.1c-8.3-8.3-20.9-8.3-29.2,0l-71.9,71.9c-4.2,4.2-6.3,9.4-6.3,14.6s2.1,10.4,6.3,14.6l26.1,26.1
                            c-2.1,3.1-3.1,6.3-4.2,9.4H20.9C9.4,173.1,0,182.5,0,194v102.2c0,11.5,9.4,20.9,20.9,20.9h37.5c1,3.1,3.1,6.3,4.2,9.4l-26.1,26.1
                            c-4.2,4.2-6.3,9.4-6.3,14.6s2.1,10.4,6.3,14.6l71.9,71.9c8.3,8.3,20.9,8.3,29.2,0l26.1-26.1c3.1,2.1,6.3,3.1,9.4,4.2v37.5
                            c0,11.5,9.4,20.9,20.9,20.9h102.2c11.5,0,20.9-9.4,20.9-20.9v-37.5c3.1-1,6.3-3.1,9.4-4.2l26.1,26.1c8.3,8.3,20.9,8.3,29.2,0
                            l71.9-71.9c8.3-8.3,8.3-20.9,0-29.2l-26.1-26.1c2.1-3.1,3.1-6.3,4.2-9.4h37.5c11.5,0,20.9-9.4,20.9-20.9V193.9
                            C490,182.4,480.6,173.1,469.1,173.1z M448.3,275.2H417c-9.4,0-16.7,6.3-19.8,14.6c-3.1,10.4-7.3,20.9-12.5,30.2
                            c-5.2,8.3-3.1,18.8,3.1,25l21.9,21.9L367,409.7l-21.9-21.9c-7.3-6.3-16.7-7.3-25-3.1c-9.4,5.2-19.8,9.4-30.2,12.5
                            c-8.3,2.1-14.6,10.4-14.6,19.8v31.3h-60.5l0,0V417c0-9.4-6.3-16.7-14.6-19.8c-10.4-3.1-20.9-7.3-30.2-12.5
                            c-8.3-5.2-18.8-3.1-25,3.1l-22,21.9L80.3,367l21.9-21.9c6.3-7.3,7.3-16.7,3.1-25c-5.2-9.4-9.4-19.8-12.5-30.2
                            c-2.1-8.3-10.4-14.6-19.8-14.6H41.7v-60.5H73c9.4,0,16.7-6.3,19.8-14.6c3.1-10.4,7.3-20.9,12.5-30.2c5.2-8.3,3.1-18.8-3.1-25
                            l-21.9-22L123,80.3l21.9,21.9c7.3,6.3,16.7,7.3,25,3.1c9.4-5.2,19.8-9.4,30.2-12.5c8.3-2.1,14.6-10.4,14.6-19.8V41.7h60.5V73
                            c0,9.4,6.3,16.7,14.6,19.8c10.4,3.1,20.9,7.3,30.2,12.5c8.3,5.2,18.8,3.1,25-3.1l22-21.9l42.7,42.7l-21.9,21.9
                            c-6.3,7.3-7.3,16.7-3.1,25c5.2,9.4,9.4,19.8,12.5,30.2c2.1,8.3,10.4,14.6,19.8,14.6h31.3L448.3,275.2L448.3,275.2z"/>
                        <path d="M245,131.4c-62.6,0-113.6,51.1-113.6,113.6s51,113.6,113.6,113.6s113.6-51,113.6-113.6S307.6,131.4,245,131.4z
                            M245,316.9c-39.6,0-71.9-32.3-71.9-71.9s32.3-71.9,71.9-71.9s71.9,32.3,71.9,71.9S284.6,316.9,245,316.9z"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>

  )
}

export default Settings