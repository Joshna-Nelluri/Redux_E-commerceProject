import React from 'react';
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';

const WomansWear = () => {

    const firstFiveImages = womanData.slice(0, 6);

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
                                <Link to={`/womanswear/${item.id}`}>
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

export default WomansWear;