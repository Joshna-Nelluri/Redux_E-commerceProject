import React from 'react';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const Tv = () => {

    const firstFiveImages = tvData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>TV's</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/tv/${item.id}`}>
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

export default Tv;
