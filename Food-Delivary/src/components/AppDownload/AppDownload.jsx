import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets'
const AppDownload = () => {
    return (
        <div className='app-download'>
            <p>For Better Experience Download <br /> Tomoto Appr</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}


export default AppDownload