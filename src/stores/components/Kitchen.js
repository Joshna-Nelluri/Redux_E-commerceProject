import React from 'react';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const Kitchen = () => {

    const firstFiveImages = kitchenData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Kitchen Items</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`kitchen/${item.id}`}>
                                    <div>
                                        <img className='proImage' src={item.image} alt='' />
                                    </div>
                                </Link>
                                <p className='proBox-name'>{item.type}</p>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Kitchen;
