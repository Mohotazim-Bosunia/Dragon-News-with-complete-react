import React from 'react';
import playgroundImg from '../assets/playground.png'
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'

const QZone = () => {
    return (
        <div>
            <div className='p-3 bg-blue-50'>
                <h1>Q-Zone</h1>
                <img src={playgroundImg} alt="" />
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;