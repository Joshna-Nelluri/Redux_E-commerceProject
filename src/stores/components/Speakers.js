import React from 'react';
import { speakerData } from '../data/speaker';
import { Link } from 'react-router-dom';

const Speakers = () => {

    const firstFiveImages = speakerData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Speakers</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/speaker/${item.id}`}>
                                    <div>
                                        <img className='proImage' src={item.image} alt='' />
                                    </div>
                                </Link>
                                <p className='proBox-name'>{item.model}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Speakers;
