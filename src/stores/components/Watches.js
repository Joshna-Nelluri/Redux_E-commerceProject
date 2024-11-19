import React from 'react';
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';

const Watches = () => {

    const firstFiveImages = watchData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Watches</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/watches/${item.id}`}>
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

export default Watches
