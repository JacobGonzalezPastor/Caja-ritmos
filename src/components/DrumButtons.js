import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react';

export const DrumButtons = ({ pad, volume }) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.keyCode === pad.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(pad.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false), 200);
        audioTag.volume = volume;
        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
        <Button onClick={playSound} >
            {pad.keyTrigger}
            <audio className='clip' id={pad.keyTrigger} src={pad.url} />
        </Button>
    )
}
