import React, { useState, useRef } from 'react'
import './intro.css'
import { meal } from '../../constants'
import { BiPlay, BiPause } from 'react-icons/bi'

const iconStyle = {
    fontSize: '10rem',
    color: 'white'
}

const Intro = () => {
    const [play, setPlay] = useState(false);
    const vidRef = useRef();
    function handlePlayVideo() {
        setPlay(play => !play);
        if (!play) {
            vidRef.current.play();
        }
        else {
            vidRef.current.pause();
        }
    }
    return (
        <div className="app__video">
            <video
                src={meal}
                controls={false}
                ref={vidRef}
                muted
                loop
                type='video/mp4'></video>
            <div className="app__video-overlay flex-center">
                <div className="app__video--circle flex-center">
                    {!play ? <BiPlay style={iconStyle} onClick={() => handlePlayVideo()} /> :
                        <BiPause style={iconStyle
                        } onClick={() => handlePlayVideo()} />}
                </div>
            </div>
        </div>
    )
}

export default Intro