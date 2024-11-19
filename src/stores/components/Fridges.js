import React from 'react';
import { fridgeData } from '../data/fridge';
import { Link } from 'react-router-dom';

const Fridges = () => {

    const firstFiveImages = fridgeData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Fridges</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/fridge/${item.id}`}>
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

export default Fridges;
