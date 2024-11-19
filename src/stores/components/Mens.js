import React from 'react';
import { menData } from '../data/men';
import { Link } from 'react-router-dom';

const MensWear = () => {

    const firstFiveImages = menData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Men's Wear</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/menswear/${item.id}`}>
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

export default MensWear;
